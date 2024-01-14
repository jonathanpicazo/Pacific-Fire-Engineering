'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { Button } from '@/components/common';
import { navItems, NavItemType } from '@/utils/const';
import Logo from '@/public/logo-desktop.png';

type NavItemProps = {
  item: NavItemType;
};
const NavItem: React.FC<NavItemProps> = ({ item }) => {
  const { label, link } = item;
  const pathname = usePathname();
  const isActive = pathname === link;
  return (
    <Link href={link}>
      <span className={clsx(isActive && 'underline')}>{label}</span>
    </Link>
  );
};

const NavDesktop: React.FC = () => (
  <div className="flex items-center justify-between px-4 py-2 text-white">
    <div className="relative h-[100px] w-[200px]">
      <Image
        src={Logo}
        fill
        alt="Pacific Fire Engineering"
        objectFit="contain"
        priority
      />
    </div>

    <div className="flex items-center justify-center gap-8">
      {navItems.map((item) => (
        <NavItem item={item} key={item.label} />
      ))}
    </div>
    <div>
      <Button>Contact Us</Button>
    </div>
  </div>
);

export default NavDesktop;
