import React from 'react';
import type { Metadata } from 'next';
import clsx from 'clsx';
import { Heading, ServiceCard, ServicesJsonLd } from '@/components';
import ServiceImage1 from '@/public/services/fire-sprinkler-systems.jpg';
import ServiceImage2 from '@/public/services/high-pile-storage.jpg';
import ServiceImage3 from '@/public/services/chemical-storage.jpg';
import { ServiceType } from '@/types';
import { siteName } from '@/utils/const';
import { layoutContainerClassNames } from '@/utils/tw';

const services: ServiceType[] = [
  {
    title: 'Fire Sprinkler Systems',
    image: ServiceImage1,
    description:
      'Pacific Fire Engineering Inc. provides a design service to the developer, architect and owner that allows for the most competitive bidding by your fire sprinkler contractors and insures that the quotations are based on the same design and materials. We will develop a customized set of specifications for your project, detailing the pipe, heads, design criteria, installation requirements, fire pump specifications and code requirements for the contractors to follow.',
  },
  {
    title: 'High Pile Storage',
    image: ServiceImage2,
    description:
      'Pacific Fire Engineering Inc. will aid the owner, architect, general, or racking contractor in cost-effective, code compliant solutions to all your High Pile storage needs. We work closely with the Authority Having Jurisdiction and negotiate on your behalf so the Building and Fire Codes work for you and not against you.',
  },
  {
    title: 'Chemical Classification - Hazardous Materials Storage',
    image: ServiceImage3,
    description:
      'We will classify your chemicals, classify their commodity, summarize the individual hazard amounts and verify the amounts against the exempt amounts allowed in the Fire and Building codes. Even if you are over the exempt amounts, we can in many cases avoid the need of Hazardous Occupancies (H-Rooms) with the use of Approved Cabinets, Additional Control Areas or negotiating with the approving authority. All that you need to do is supply us with the inventory of hazardous materials (storage and use), the appropriate MSDS Sheets, and a plan showing the areas of your facility that the chemicals are used and stored.',
  },
];

export const metadata: Metadata = {
  title: `Services Provided | ${siteName}`,
  description:
    'Explore our fire protection services, including Fire Sprinkler Systems, High Pile Storage, and Chemical Classification.',
};

export default function Page() {
  return (
    <main>
      <ServicesJsonLd />
      <div className={clsx(layoutContainerClassNames)}>
        <Heading title="Services Provided" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </main>
  );
}
