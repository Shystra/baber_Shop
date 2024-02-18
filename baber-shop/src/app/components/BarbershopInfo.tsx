'use client'

import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"
import { Barbershop } from "@prisma/client"
import { useRouter } from "next/navigation"


interface IBarbershopInfo {
    barberShop: Barbershop
}

const BarbershopInfo = ({ barberShop }: IBarbershopInfo) => {
    const router = useRouter();
    const handleBackClick = () => {
        router.back();
    };

    return (
        <div>
            <div className="h-[250px] w-full relative">
                <Button size="icon" variant="outline" className="z-50 absolute top-4 left-4"  onClick={handleBackClick}>
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


export default BarbershopInfo;