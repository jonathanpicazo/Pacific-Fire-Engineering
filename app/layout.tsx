import React from 'react';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Open_Sans, Montserrat } from 'next/font/google';
import { Header, Footer, MainJsonLd } from '@/components';
import './globals.css';

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-opensans',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pacfireeng.com'),
  title: 'Pacific Fire Engineering',
  description:
    'High Pile Storage, Fire Code Consulting, Chemical Classification, Fire Code Review, Fire Sprinkler Design',
  openGraph: {
    type: 'website',
    url: 'https://pacfireeng.com',
    title: 'Pacific Fire Engineering',
    description:
      'High Pile Storage, Fire Code Consulting, Chemical Classification, Fire Code Review, Fire Sprinkler Design',
    images: [
      {
        url: 'https://pacfireeng.com/logo.png',
        width: 800,
        height: 600,
        alt: 'Pacific Fire Engineering Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pacificfireeng',
    title: 'Pacific Fire Engineering',
    description:
      'High Pile Storage, Fire Code Consulting, Chemical Classification, Fire Code Review, Fire Sprinkler Design',
    images: [
      {
        url: 'https://pacfireeng.com/logo.png',
        width: 800,
        height: 600,
        alt: 'Pacific Fire Engineering Logo',
      },
    ],
  },
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
        <MainJsonLd />
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
