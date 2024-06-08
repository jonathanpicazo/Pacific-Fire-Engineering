import React from 'react';
import Script from 'next/script';

const FAQJsonLd: React.FC = () => {
  const payload = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What services does Pacific Fire Engineering offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pacific Fire Engineering offers services including Fire Sprinkler Systems, High Pile Storage solutions, and Chemical Classification for Hazardous Materials Storage.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I contact Pacific Fire Engineering?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can contact Pacific Fire Engineering at (714) 984-4346 or via email at pacificfire@me.com.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in the Fire Sprinkler Systems service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Fire Sprinkler Systems service includes a design service to the developer, architect, and owner that allows for competitive bidding by fire sprinkler contractors, ensuring quotations are based on the same design and materials. Specifications include detailing the pipe, heads, design criteria, installation requirements, fire pump specifications, and code requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'What solutions are provided for High Pile Storage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For High Pile Storage, Pacific Fire Engineering aids in cost-effective, code compliant solutions. They work closely with the Authority Having Jurisdiction and negotiate on your behalf to ensure the Building and Fire Codes work for you.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Pacific Fire Engineering handle Chemical Classification?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pacific Fire Engineering classifies your chemicals, summarizes the individual hazard amounts, and verifies them against the exempt amounts allowed in the Fire and Building codes. They can often avoid the need for Hazardous Occupancies with the use of Approved Cabinets, Additional Control Areas, or by negotiating with the approving authority.',
        },
      },
    ],
  };

  return (
    <Script id="json-ld-faq" type="application/ld+json">
      {JSON.stringify(payload)}
    </Script>
  );
};

export default FAQJsonLd;
