'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
const NavMobile: React.FC = () => {
  const router = usePathname();
  return <div>hi</div>;
};

export default NavMobile;
