import React from 'react';
import type { Metadata } from 'next';
import { Heading } from '@/components';
import { siteName } from '@/utils/const';

export const metadata: Metadata = {
  title: `About Us | ${siteName}`,
  description:
    "Pacific Fire Engineering Inc. is a fire protection firm dedicated to provide professional, timely, and economical solutions that comply with today's complex Fire and Building Codes while exceeding our client's expectations.",
};

export default function Page() {
  return (
    <main>
      <Heading title="About Us" />
      <h2 className="mb-1 md:mb-3 md:text-lg">
        About Pacific Fire Engineering
      </h2>
      <div className="flex flex-col gap-4">
        <p>
          Pacific Fire Engineering Inc. is a fire protection firm dedicated to
          provide professional, timely, and economical solutions that comply
          with today&apos;s complex Fire and Building Codes while exceeding our
          client&apos;s expectations.
        </p>
        <p>
          We have registered professional engineers on staff with experience in
          the public and private sector. Our experience includes fire protection
          design for residential occupancies, retail centers, hotels, casinos,
          warehouses, cold storage facilities, high-rise structures, as well as
          high pile storage and hazardous materials code compliance. We will
          explain in layman&apos;s terms the complex codes that affect your
          particular situation and provide a clear and purposeful solution in
          the most cost effective manner.
        </p>
        <p>
          Let Pacific Fire Engineering Inc. be part of your team to end your
          frustrations and unnecessary expenditures so you can concentrate on
          what really matters, your project&apos;s success
        </p>
      </div>
    </main>
  );
}
