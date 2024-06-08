import React from 'react';
import Script from 'next/script';

const MainJsonLd: React.FC = () => {
  const payload = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Pacific Fire Engineering',
    image: 'https://pacfireeng.com/logo.png',
    '@id': 'https://pacfireeng.com',
    url: 'https://pacfireeng.com',
    telephone: '(714) 984-4346',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4214 Floyd St',
      addressLocality: 'Corona',
      addressRegion: 'CA',
      postalCode: '92883',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '(714) 984-4346',
      contactType: 'Customer Service',
      email: 'pacificfire@me.com',
      name: 'Mr. Steven P. Biship, P.E.',
    },
    description:
      'High Pile Storage, Fire Code Consulting, Chemical Classification, Fire Code Review, Fire Sprinkler Design',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.847234,
      longitude: -117.565126,
    },
  };

  return (
    <Script id="json-ld-main" type="application/ld+json">
      {JSON.stringify(payload)}
    </Script>
  );
};

export default MainJsonLd;
