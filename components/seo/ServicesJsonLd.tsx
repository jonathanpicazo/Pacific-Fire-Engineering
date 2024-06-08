import React from 'react';
import Script from 'next/script';

const ServicesJsonLd: React.FC = () => {
  const servicesPayload = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Fire Protection Services',
    provider: {
      '@type': 'Organization',
      name: 'Pacific Fire Engineering',
      url: 'https://pacfireeng.com',
    },
    serviceOffer: [
      {
        '@type': 'Offer',
        name: 'Fire Sprinkler Systems',
        description:
          'Pacific Fire Engineering Inc. provides a design service to the developer, architect and owner that allows for the most competitive bidding by your fire sprinkler contractors and insures that the quotations are based on the same design and materials. We will develop a customized set of specifications for your project, detailing the pipe, heads, design criteria, installation requirements, fire pump specifications and code requirements for the contractors to follow.',
        url: 'https://pacfireeng.com/services/fire-sprinkler-systems',
      },
      {
        '@type': 'Offer',
        name: 'High Pile Storage',
        description:
          'Pacific Fire Engineering Inc. will aid the owner, architect, general, or racking contractor in cost-effective, code compliant solutions to all your High Pile storage needs. We work closely with the Authority Having Jurisdiction and negotiate on your behalf so the Building and Fire Codes work for you and not against you.',
        url: 'https://pacfireeng.com/services/high-pile-storage',
      },
      {
        '@type': 'Offer',
        name: 'Chemical Classification - Hazardous Materials Storage',
        description:
          'We will classify your chemicals, classify their commodity, summarize the individual hazard amounts and verify the amounts against the exempt amounts allowed in the Fire and Building codes. Even if you are over the exempt amounts, we can in many cases avoid the need of Hazardous Occupancies (H-Rooms) with the use of Approved Cabinets, Additional Control Areas or negotiating with the approving authority. All that you need to do is supply us with the inventory of hazardous materials (storage and use), the appropriate MSDS Sheets, and a plan showing the areas of your facility that the chemicals are used and stored.',
        url: 'https://pacfireeng.com/services/chemical-storage',
      },
    ],
  };

  return (
    <Script id="json-ld-services" type="application/ld+json">
      {JSON.stringify(servicesPayload)}
    </Script>
  );
};

export default ServicesJsonLd;
