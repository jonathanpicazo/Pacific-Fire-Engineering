'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { MdMenu, MdClose } from 'react-icons/md';
import clsx from 'clsx';
import { useClickAway } from 'react-use';
import { Button } from '@/components/common/';
import { navItems, NavItemType } from '@/utils/const';
import Logo from '@/public/logo.png';

type NavImageProps = {
  setShowDrawer: (show: boolean) => void;
};

const NavImage: React.FC<NavImageProps> = ({ setShowDrawer }) => {
  const router = useRouter();
  const handleClick = () => {
    setShowDrawer(false);
    router.push('/');
  };
  return (
    <Button
      isUnstyled
      className="relative h-[75px] w-[210px]"
      onClick={handleClick}
    >
      <Image
        src={Logo}
        fill
        alt="Pacific Fire Engineering"
        objectFit="contain"
        priority
      />
    </Button>
  );
};

type NavItemProps = {
  item: NavItemType;
  setShowDrawer: (show: boolean) => void;
};
const NavItem: React.FC<NavItemProps> = ({ item, setShowDrawer }) => {
  const { label, link } = item;
  const router = useRouter();
  const pathname = usePathname();
  const isActive = pathname === link;
  const handleClick = () => {
    setShowDrawer(false);
    router.push(link);
  };
  return (
    <Button
      isUnstyled
      className={clsx(isActive && 'underline')}
      onClick={handleClick}
    >
      <span>{label}</span>
    </Button>
  );
};

const NavMobile: React.FC = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const navListRef = useRef<HTMLDivElement>(null);
  useClickAway(navListRef, () => setShowDrawer(false));
  return (
    <div>
      {/* Untoggled Bar */}
      <div className="flex items-center justify-between px-4 py-2">
        <Button isUnstyled onClick={() => setShowDrawer(true)}>
          <MdMenu size={35} />
        </Button>
        <NavImage setShowDrawer={setShowDrawer} />
        <Link
          href="/contact"
          className="'rounded-md text-white' bg-primary p-4 text-sm uppercase text-white"
        >
          <span>Contact Us</span>
        </Link>
      </div>
      {/* Toggled Menu */}
      <AnimatePresence>
        {showDrawer && (
          <motion.div
            key="mobile-drawer"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="absolute left-0 top-0 z-10 h-full w-full bg-white"
          >
            <div className="absolute right-0">
              <Button
                onClick={() => setShowDrawer(false)}
                isUnstyled
                className="ml-auto"
              >
                <MdClose size={35} />
              </Button>
            </div>
            <div className="flex h-full max-h-screen items-center justify-center">
              <div
                className="flex flex-col items-center justify-center gap-3"
                ref={navListRef}
              >
                {navItems.map((item) => (
                  <NavItem
                    item={item}
                    setShowDrawer={setShowDrawer}
                    key={item.label}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMobile;
