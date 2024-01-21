'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';
import clsx from 'clsx';
import { navItems, NavItemType } from '@/utils/const';
import Logo from '@/public/logo.png';

type NavItemProps = {
  item: NavItemType;
};
const NavItem: React.FC<NavItemProps> = ({ item }) => {
  const { label, link } = item;
  const pathname = usePathname();
  const isActive = pathname === link;
  return (
    <Link className="hover:opacity-hover" href={link}>
      <span className={clsx(isActive && 'underline')}>{label}</span>
    </Link>
  );
};

const NavDesktop: React.FC = () => (
  <div className="flex items-center justify-between">
    <div className="relative h-[100px] w-[200px]">
      <Link className="hover:opacity-hover" href="/">
        <ExportedImage
          className="h-auto w-auto object-contain"
          src={Logo}
          fill
          alt="Pacific Fire Engineering"
          priority
        />
      </Link>
    </div>

    <div className="flex items-center justify-center gap-8">
      {navItems.map((item) => (
        <NavItem item={item} key={item.label} />
      ))}
    </div>
  </div>
);

export default NavDesktop;
