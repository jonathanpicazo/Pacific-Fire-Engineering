'use client';

import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import HeroImage1 from '@/public/hero.jpg';
import HeroImage2 from '@/public/hero2.jpg';

const Hero: React.FC = () => {
  const pathname = usePathname();
  const allowedPaths = ['/', '/about'];
  const isAllowed = allowedPaths.includes(pathname);
  const heroImg = pathname === '/about' ? HeroImage2 : HeroImage1;
  return (
    isAllowed && (
      <div className="relative mx-auto -mt-3 mb-3 h-[210px] max-w-screen-2xl md:-mt-5 md:h-[300px]">
        <Image
          priority
          src={heroImg}
          fill
          className="h-auto w-auto object-cover"
          alt="Pacific Fire Engineering"
        />
      </div>
    )
  );
};

export default Hero;
