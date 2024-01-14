'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/common';
import { navItems } from '@/utils/const';
import Logo from '@/public/logo-desktop.png';

const NavDesktop: React.FC = () => {
  const router = usePathname();
  return (
    <div className="flex items-center justify-between px-4 py-2">
      <div className="relative h-[100px] w-[200px]">
        <Image
          src={Logo}
          fill
          alt="Pacific Fire Engineering"
          objectFit="contain"
        />
      </div>

      <div className="flex items-center justify-center gap-8">
        {navItems.map((item) => (
          <span key={item.label}>{item.label}</span>
        ))}
      </div>
      <div>
        <Button>Contact Us</Button>
      </div>
    </div>
  );
};

export default NavDesktop;
