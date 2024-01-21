'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

type AnimatedWrapperProps = {
  children: React.ReactNode;
};

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({ children }) => {
  const path = usePathname();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={path}
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        variants={{
          hidden: { opacity: 0, x: -20, y: 0 },
          enter: { opacity: 1, x: 0, y: 0 },
          exit: { opacity: 0, x: 0, y: -20 },
        }}
        transition={{ ease: 'easeOut', duration: 0.6 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedWrapper;
