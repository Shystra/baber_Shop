import { Service } from '@prisma/client';

interface IServiceItem {
    service: Service
}

const ServiceItem = ({ service }: IServiceItem) => {
    return (
        <h1>
            {service.name}
        </h1>
    )
}

export default ServiceItem;