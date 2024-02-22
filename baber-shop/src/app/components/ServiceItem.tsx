import { Service } from '@prisma/client';
import { Card, CardContent } from './ui/card';
import Image from 'next/image';
import { Button } from './ui/button';

interface IServiceItem {
    service: Service
}

const ServiceItem = ({ service }: IServiceItem) => {
    return (
        <Card>
            <CardContent className='p-3 w-full'>
                <div className='flex gap-4 items-center w-full'>
                    <div className='relative min-h-[110px] min-w-[110px] max-w-[110px]'>
                        <Image
                            className='rounded-lg'
                            src={service.imageUrl}
                            fill
                            style={{ objectFit: "contain" }}
                            alt={service.name} />
                    </div>
                    <div className='flex flex-col w-full'>
                        <h2 className='font-bold'>{service.name}</h2>
                        <p className='text-sm text-gray-400'>{service.description}</p>

                        <div className='flex items-center justify-between mt-3'>
                            <p className='text-primary text-sm font-bold'>{Intl.NumberFormat("pt-BR",
                                { style: "currency", currency: "BRL" }).format(Number(service.price))}</p>
                            <Button variant="secondary">Reservar</Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ServiceItem;