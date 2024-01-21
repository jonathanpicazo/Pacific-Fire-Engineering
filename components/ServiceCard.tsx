import React from 'react';
import ExportedImage from 'next-image-export-optimizer';
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
        <ExportedImage
          priority
          src={image.src}
          className="h-auto w-auto rounded-lg object-cover object-top"
          alt={title}
          fill
        />
      </div>
      <p className="mt-2 md:mt-4">{description}</p>
    </div>
  );
};

export default ServiceCard;
