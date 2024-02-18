import { Button } from "@/app/components/ui/button";
import { db } from "@/app/lib/prisma";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";

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
        }
    })

    if (!barberShop) {
        return null
    }
    return (
        <div>
            <div className="h-[250px] w-full relative">
                <Button size="icon" variant="outline" className="z-50 absolute top-4 left-4" >
                    <ChevronLeftIcon />
                </Button>

                <Button size="icon" variant="outline" className="z-50 absolute top-4 right-4" >
                    <MenuIcon />
                </Button>

                <Image
                    src={barberShop.imageUrl}
                    fill
                    alt={barberShop.name}
                    style={{ objectFit: "cover", }}
                    className="opacity-75"
                />
            </div>

            <div className="px-5 py-3 pb-6 border-b border-solid border-secondary">
                <h1 className="text-xl font-bold">{barberShop.name}</h1>
                <div className="flex items-center gap-1 mt-2">
                    <MapPinIcon  className="text-primary gap-1" size={18}/>
                    <p className="text-sm">{barberShop.address}</p>
                </div>

                <div className="flex items-center gap-1 mt-2">
                    <StarIcon  className="text-primary gap-1" size={18}/>
                    <p className="text-sm">5,0 (800 avaliações)</p>
                </div>


            </div>

        </div>
    )
}

export default BarbershopDetailsPage;