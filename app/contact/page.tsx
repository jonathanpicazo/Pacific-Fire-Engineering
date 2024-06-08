import React from 'react';
import clsx from 'clsx';
import { Heading, InfoCard, ContactForm } from '@/components';
import { siteName } from '@/utils/const';
import { layoutContainerClassNames } from '@/utils/tw';

export const metadata = {
  title: `Contact Us | ${siteName}`,
  description:
    'Contact us for inquiries about our fire protection services, quotes, or any questions you may have.',
};

export default function Page() {
  return (
    <main>
      <div className={clsx(layoutContainerClassNames)}>
        <Heading title="Contact Us" />
        <InfoCard />
        <ContactForm />
      </div>
    </main>
  );
}
