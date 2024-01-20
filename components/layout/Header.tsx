import React from 'react';
import clsx from 'clsx';
import { layoutContainerClassNames } from '@/utils/tw';
import { NavDesktop, NavMobile } from './nav';

const Header: React.FC = () => (
  <header className="mb-3 border-b-2 border-primary font-bold text-primary md:mb-5">
    <div className={clsx(layoutContainerClassNames)}>
      <nav className="block md:hidden">
        <NavMobile />
      </nav>
      <nav className="hidden md:block">
        <NavDesktop />
      </nav>
    </div>
  </header>
);

export default Header;
