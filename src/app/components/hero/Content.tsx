'use client';
import { useState,  useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HERO_CONTENT } from '@/constants/content';
import { SECTION_IDS } from '@/constants';

interface ContentProps {
  onGetStarted?: () => void;
  onSplineAction?: () => void;
}



export default function Content({ onGetStarted, onSplineAction }: ContentProps) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [ripples, setRipples] = useState< {
    x: number;
    y: number;
    size: number;
  }[]>([]);


  const createRipple = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    
    const size = Math.max(button.clientWidth, button.clientHeight);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const newRipple = { x, y, size };
    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r !== newRipple));
    }, 1000);
  }, []);

  const handleGetStarted = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setIsButtonClicked(true);
    createRipple(event);
    
    if (onSplineAction) onSplineAction();
    if (onGetStarted) onGetStarted();
    
    const aboutSection = document.getElementById(SECTION_IDS.about);
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    setTimeout(() => setIsButtonClicked(false), 600);
  }, [onGetStarted, onSplineAction, createRipple]);

  return (
    <div className="relative z-[1] flex items-center justify-center min-h-screen pointer-events-none">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-4"
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            {HERO_CONTENT.title.main}
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-purple-600 to-indigo-600 text-transparent bg-clip-text">
            {HERO_CONTENT.title.highlight}
          </span>
        </motion.h1>
        <motion.p 
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 text-purple-200 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {HERO_CONTENT.description}
        </motion.p>
        <motion.button
          onClick={handleGetStarted}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className={`
            pointer-events-auto
            px-8 py-4 rounded-full
            text-lg sm:text-xl
            font-semibold
            bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800
            text-white
            relative
            overflow-hidden
            group
            hover:shadow-[0_0_30px_-5px] hover:shadow-purple-500/50
          `}
        >
          <span className="relative z-10">{HERO_CONTENT.button.text}</span>
          
          {/* Background gradient animation */}
          <div 
            className={`
              absolute inset-0
              bg-gradient-to-r from-indigo-800 via-purple-700 to-purple-600
              transition-opacity duration-300
              ${isButtonClicked ? 'opacity-100' : 'opacity-0'}
            `}
          />
          
          {/* Ripple effects */}
          <AnimatePresence>
            {ripples.map((ripple, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  borderRadius: "50%",
                  width: `${ripple.size}px`,
                  height: `${ripple.size}px`,
                  left: ripple.x,
                  top: ripple.y,
                }}
                className="bg-white/30"
              />
            ))}
          </AnimatePresence>

          {/* Pulse effect */}
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={isButtonClicked ? {
              opacity: [0, 0.4, 0],
              scale: [1, 1.5, 2],
            } : {}}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-purple-500/30 rounded-full"
          />
        </motion.button>
      </motion.div>
    </div>
  );
}
