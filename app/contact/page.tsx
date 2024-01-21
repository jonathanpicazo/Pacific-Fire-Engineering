import React from 'react';
import type { Metadata } from 'next';
import { Heading, InfoCard, Button } from '@/components';
import { siteName } from '@/utils/const';

export const metadata: Metadata = {
  title: `Contact Us | ${siteName}`,
};

export default function Page() {
  return (
    <main>
      <Heading title="Contact Us" />
      <InfoCard />
      <div className="mt-3 flex flex-col gap-6 md:mt-5">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-primary"
          >
            <span className="mb-2 block text-sm font-medium text-primary">
              Name
            </span>
            <input
              type="text"
              id="name"
              name="name"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-500 focus:ring-red-500"
              placeholder="John Doe"
              required
            />
          </label>
          <label
            htmlFor="company"
            className="mb-2 block text-sm font-medium text-primary"
          >
            <span className="mb-2 block text-sm font-medium text-primary">
              Company
            </span>
            <input
              type="text"
              id="company"
              name="company"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-500 focus:ring-red-500"
              placeholder="My Company"
              required
            />
          </label>
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-primary"
          >
            <span className="mb-2 block text-sm font-medium text-primary">
              Email address
            </span>
            <input
              type="email"
              id="email"
              name="email"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-500 focus:ring-red-500"
              placeholder="john.doe@company.com"
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="inquiry">
            <span className="mb-2 block text-sm font-medium text-primary">
              Inquiry
            </span>
            <textarea
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm"
              placeholder="Enter your message here..."
              name="inquiry"
              id="inquiry"
              rows={10}
            />
          </label>
        </div>
        <div>
          <Button className="!py-2">
            <span>Submit</span>
          </Button>
        </div>
      </div>
    </main>
  );
}
