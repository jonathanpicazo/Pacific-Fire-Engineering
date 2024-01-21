'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';

type HeroProps = {
  image: StaticImageData;
};
const Hero: React.FC<HeroProps> = ({ image }) => (
  <div className="relative mx-auto -mt-3 mb-3 h-[210px] max-w-screen-2xl md:-mt-5 md:h-[300px]">
    <Image
      priority
      src={image}
      fill
      className="h-auto w-auto object-cover"
      alt="Pacific Fire Engineering"
    />
  </div>
);

export default Hero;
