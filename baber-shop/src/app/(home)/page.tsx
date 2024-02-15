import Header from "../components/Header";
import { format } from 'date-fns';
import { ptBR } from "date-fns/locale";
import Search from "../components/Search";
import {BookingItem} from "../components/BookingItem";
import { db } from "../lib/prisma";
import { BarbershopItem } from "../components/BarbershopItem";

export default async function Home() {
  const barbershop = await db.barbershop.findMany({})
  return (
    <div>
      <Header />

      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá Shystra</h2>
        <p className="capitalize text-sm">{format(new Date(), "EEEE',' d 'de' MMMM", {
          locale: ptBR,
        })}
        </p>
      </div>
      <div className="px-5 mt-6">
        <Search />
      </div>
      <div className="px-5 p-4">
        <h2 className=" text-xs mb-3 uppercase text-gray-400 font-bold">Agendamentos</h2>
        <BookingItem />
      </div>

      <div className="mt-6">
      <h2 className="px-5 text-xs mb-3 uppercase text-gray-400 font-bold">Recomendados</h2>
      <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
        {barbershop.map((barbershop) => (
          <BarbershopItem key={barbershop.id} barbershop={barbershop}/>
        ))}
      </div>
      </div>
    </div>
  )
}
