'use client'
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ABOUT_CONTENT } from '@/constants/content';
import { SECTION_IDS } from '@/constants';

export default function About() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const mobileOffset = isMobile ? 0.1 : 0;

  const animationProps = [
    {
      opacity: useTransform(
        scrollYProgress,
        [0, 0.25 - mobileOffset, 0.35 - mobileOffset],
        [1, 1, 0]
      ),
      scale: useTransform(
        scrollYProgress,
        [0, 0.25 - mobileOffset, 0.35 - mobileOffset],
        [1, 1, 0.8]
      ),
      y: useTransform(
        scrollYProgress,
        [0, 0.25 - mobileOffset, 0.35 - mobileOffset],
        [0, 0, 50]
      ),
    },
    {
      opacity: useTransform(
        scrollYProgress,
        [0.35 - mobileOffset, 0.4 - mobileOffset, 0.6 - mobileOffset, 0.65 - mobileOffset],
        [0, 1, 1, 0]
      ),
      scale: useTransform(
        scrollYProgress,
        [0.35 - mobileOffset, 0.4 - mobileOffset, 0.6 - mobileOffset, 0.65 - mobileOffset],
        [0.8, 1, 1, 0.8]
      ),
      y: useTransform(
        scrollYProgress,
        [0.35 - mobileOffset, 0.4 - mobileOffset, 0.6 - mobileOffset, 0.65 - mobileOffset],
        [-30, 0, 0, 50]
      ),
    },
    {
      opacity: useTransform(
        scrollYProgress,
        [0.65 - mobileOffset, 0.7 - mobileOffset, 1],
        [0, 1, 1]
      ),
      scale: useTransform(
        scrollYProgress,
        [0.65 - mobileOffset, 0.7 - mobileOffset, 1],
        [0.8, 1, 1]
      ),
      y: useTransform(
        scrollYProgress,
        [0.65 - mobileOffset, 0.7 - mobileOffset, 1],
        [-30, 0, 0]
      ),
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      ref={containerRef}
      id={SECTION_IDS.about}
      className="relative min-h-[300vh] w-full bg-black"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute inset-0 flex flex-col lg:flex-row">
          {/* Left Side - Fixed Content */}
          <div className="w-full lg:w-1/2 min-h-[40vh] lg:h-full relative backdrop-blur-sm bg-gradient-to-b from-dark-base via-dark-base/95 to-dark-lighter">
            <div className="relative h-full flex flex-col items-center lg:items-start justify-center p-6 sm:p-8 lg:p-12 xl:p-24">
              <div className="w-full max-w-2xl">
                <div className="mb-4 flex items-center space-x-2">
                  <div className="h-1 w-12 bg-gradient-to-r from-dark-accent-200 via-dark-accent-300 to-dark-accent-400" />
                  <span className="uppercase tracking-wider text-sm font-medium text-dark-text-secondary">
                    {ABOUT_CONTENT.header.label}
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-dark-text-accent via-dark-text-primary to-dark-text-primary bg-clip-text text-transparent mb-6 text-center lg:text-left">
                  {ABOUT_CONTENT.header.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-center lg:text-left text-dark-text-secondary">
                  {ABOUT_CONTENT.header.description}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Scrolling Content */}
          <div className="w-full lg:w-1/2 min-h-[60vh] lg:h-full flex items-center justify-center bg-gradient-to-b from-dark-base via-dark-base/95 to-dark-lighter">
            <div className="relative h-full flex items-center justify-center w-full">
              {/* Decorative background elements */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-dark-accent-200/20 via-dark-accent-300/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-dark-lighter/50 to-transparent" />
              </div>
              
              {ABOUT_CONTENT.sections.map((section, index) => (
                <motion.div
                  key={section.label}
                  className="absolute w-full px-6 sm:px-8 lg:px-12 z-10"
                  style={animationProps[index]}
                >
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="w-full max-w-xl space-y-6 sm:space-y-8 backdrop-blur-md bg-gradient-to-br from-dark-accent-100/10 via-dark-base/90 to-dark-lighter/80 p-8 sm:p-10 lg:p-12 rounded-3xl border border-dark-accent-200/30 shadow-2xl shadow-dark-accent-300/5">
                      <div className="flex items-center justify-center space-x-2">
                        <div className="h-px w-8 bg-gradient-to-r from-transparent via-dark-accent-300/50 to-transparent" />
                        <span className="block uppercase tracking-wider text-sm font-medium text-dark-text-secondary/80">
                          {section.label}
                        </span>
                        <div className="h-px w-8 bg-gradient-to-r from-transparent via-dark-accent-300/50 to-transparent" />
                      </div>
                      
                      <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-dark-text-accent via-dark-text-primary to-dark-text-primary bg-clip-text text-transparent">
                        {section.title}
                      </h3>
                      
                      {section.subtitle && (
                        <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-dark-text-accent/90">
                          {section.subtitle}
                        </h4>
                      )}
                      
                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-dark-text-secondary/90">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Gradient overlay for smooth transition to footer */}
      <div className="absolute bottom-0 left-0 right-0 h-screen pointer-events-none bg-gradient-to-b from-transparent via-black to-black" />
    </motion.section>
  );
}