'use client';

import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import HeroImage from '@/public/hero.jpg';

const Hero: React.FC = () => {
  const pathname = usePathname();
  return (
    pathname === '/' && (
      <div className="relative mx-auto -mt-3 mb-3 h-[210px] max-w-screen-2xl md:-mt-5 md:h-[300px]">
        <Image
          priority
          src={HeroImage}
          fill
          className="h-auto w-auto object-cover"
          alt="Pacific Fire Engineering"
          sizes="(max-width: 600px) 100vw,
                 (max-width: 1200px) 50vw,
                                   1200px"
        />
      </div>
    )
  );
};

export default Hero;
