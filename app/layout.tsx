import React from 'react';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Open_Sans, Montserrat } from 'next/font/google';
import { Header, Footer } from '@/components';
import './globals.css';

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-opensans',
  weight: ['300', '400', '500', '600', '700', '800'], // Array of weights
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '800'], // Array of weights
});

export const metadata: Metadata = {
  title: 'Pacific Fire Engineering',
  description:
    'High Pile Storage, Fire Code Consulting, Chemical Classification, Fire Code Review, Fire Sprinkler Design',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          openSans.variable,
          montserrat.variable,
          'font-sans',
          'font-serif'
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
