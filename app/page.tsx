import React from 'react';
import { Heading } from '@/components';

const services = [
  'High Pile Storage Compliance and Commodity Classification',
  'Preliminary and Final Plan Review',
  'Underground Fire Protection Systems',
  'Commercial, Residential, and High Rise Automatic Sprinkler Design',
  'Fire Protection Engineer on Staff',
  'Site and Building Surveys to Construct Existing “As Built” Plans for your Automatic Sprinkler System',
  'Hazardous Materials Classification and Code Compliance',
  'Preliminary Site and Automatic Sprinkler Design for Bidding Purposes',
  'Fire Department Site Access Plans',
  'Interaction with the Authority Having Jurisdiction to aid the Owner, Architect, General, or Racking Contractor to Reach Effective and Cost Efficient Solutions',
];

export default function Home() {
  return (
    <main>
      <Heading title="Pacific Fire Engineering" className="!mb-2 md:!mb-3" />
      <h2 className="mb-1 md:mb-3 md:text-lg">
        A Professional Fire Protection Engineering Firm
      </h2>
      <p className="mb-3">
        At Pacific Fire Engineering, we have registered Fire Protection
        Engineer&apos;s on staff ready to serve your Fire Protection Design and
        Life Safety needs. Our firm specializes in:
      </p>
      <ul className="list-disc">
        {services.map((service) => (
          <li key={service} className="ml-6 md:ml-8">
            {service}
          </li>
        ))}
      </ul>
    </main>
  );
}
