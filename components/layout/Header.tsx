import React from 'react';
import { NavDesktop, NavMobile } from './nav';

const Header: React.FC = () => (
  <header className="bg-[#5B7C99]">
    <div className="mx-auto max-w-screen-xl">
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
