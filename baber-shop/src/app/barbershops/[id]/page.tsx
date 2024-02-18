import { db } from "@/app/lib/prisma";

interface IBarbershopDetails {
    params: {
        id: string;
    }
}
const BarbershopDetailsPage = async ({ params }: IBarbershopDetails) => {
    if(!params.id){
        // TODO: Redirecionar para home page
        return null
    }
    
    const barberShop = await db.barbershop.findUnique({
        where: {
            id: params.id,
        }
    })

    if(!barberShop){
        return null
    }
    return (
        <h1>
           {/* {params.id}  */}
           {barberShop?.name}
        </h1>
    )
}

export default BarbershopDetailsPage;