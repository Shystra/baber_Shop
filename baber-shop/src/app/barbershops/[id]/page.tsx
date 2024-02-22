import BarbershopInfo from "@/app/components/BarbershopInfo";
import ServiceItem from "@/app/components/ServiceItem";
import { db } from "@/app/lib/prisma";


interface IBarbershopDetails {
    params: {
        id: string;
    }
}
const BarbershopDetailsPage = async ({ params }: IBarbershopDetails) => {
    if (!params.id) {
        // TODO: Redirecionar para home page
        return null
    }



    const barberShop = await db.barbershop.findUnique({
        where: {
            id: params.id,
        },
        include: {
            services: true
        }
    })




    if (!barberShop) {
        return null
    }
    return <div>
        <BarbershopInfo barberShop={barberShop} />

        <div className="px-5 flex flex-col gap-4 py-6">
            {barberShop.services.map((service) => {
                return <ServiceItem key={service.id} service={service} />
        })}</div>
    </div>

}

export default BarbershopDetailsPage;