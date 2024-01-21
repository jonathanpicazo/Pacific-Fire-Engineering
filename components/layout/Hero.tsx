'use client';

import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import HeroImage from '@/public/hero.jpg';

const Hero: React.FC = () => {
  const pathname = usePathname();
  return (
    pathname === '/' && (
      <div className="relative mx-auto -mt-3 mb-3 h-[300px] max-w-screen-2xl md:-mt-5">
        <Image
          priority
          src={HeroImage}
          fill
          className="h-auto w-auto object-cover"
          alt="Pacific Fire Engineering"
        />
      </div>
    )
  );
};

export default Hero;
