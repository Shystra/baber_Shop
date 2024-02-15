import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Barbershop } from "@prisma/client";
import { Button } from "./ui/button";

interface IBarbershopItemProps {
    barbershop: Barbershop
}
export const BarbershopItem = ({ barbershop}: IBarbershopItemProps) => {
    
    return (
        <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
            <CardContent className="px-1 py-0">
                <div className="relative w-full h-[159px]">
                <Image
                alt={barbershop.name} 
                src={barbershop.imageUrl} 
                fill
                style={{
                    objectFit: "cover"
                }}
                className="rounded-2xl"
                
                />
                </div>
                <div className="px-2 pb-3">
                <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">{barbershop.name}</h2>
                <p className="text-sm text text-gray-400 overflow-hidden text-ellipsis text-nowrap">{barbershop.address}</p>
                <Button className=" w-full mt-3" variant="secondary">Reservar</Button>
                </div>
            </CardContent>
        </Card>
    )
}

