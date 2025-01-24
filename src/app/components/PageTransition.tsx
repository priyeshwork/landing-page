'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ 
          opacity: 0,
          x: -200,
          filter: 'blur(10px)'
        }}
        animate={{ 
          opacity: 1,
          x: 0,
          filter: 'blur(0px)'
        }}
        exit={{ 
          opacity: 0,
          x: 200,
          filter: 'blur(10px)'
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 0.3
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
