import React from 'react';
import Image from 'next/image';
import type { ServiceType } from '@/types';

type ServiceCardProps = {
  service: ServiceType;
};
const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { title, description, image } = service;
  return (
    <div className="rounded-lg border-2 border-primary px-3 py-2">
      <h3 className="mb-3 text-lg text-primary md:text-xl">{title}</h3>
      <div className="relative h-[300px]">
        <Image
          priority
          src={image.src}
          className="h-auto w-auto rounded-lg object-cover object-top"
          alt={title}
          fill
          sizes="(max-width: 600px) 100vw,
                 (max-width: 1200px) 50vw,
                  1200px"
        />
      </div>
      <p className="mt-2 md:mt-4">{description}</p>
    </div>
  );
};

export default ServiceCard;
