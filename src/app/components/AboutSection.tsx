'use client'
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AboutSection() {
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

  // Adjust animation ranges for mobile
  const mobileOffset = isMobile ? 0.1 : 0;
  
  const text1Opacity = useTransform(scrollYProgress, 
    [0, 0.25 - mobileOffset, 0.35 - mobileOffset], 
    [1, 1, 0]
  );
  const text1Scale = useTransform(scrollYProgress, 
    [0, 0.25 - mobileOffset, 0.35 - mobileOffset], 
    [1, 1, 0.8]
  );
  const text1Y = useTransform(scrollYProgress, 
    [0, 0.25 - mobileOffset, 0.35 - mobileOffset], 
    [0, 0, 50]
  );

  const text2Opacity = useTransform(scrollYProgress, 
    [0.35 - mobileOffset, 0.4 - mobileOffset, 0.6 - mobileOffset, 0.65 - mobileOffset], 
    [0, 1, 1, 0]
  );
  const text2Scale = useTransform(scrollYProgress, 
    [0.35 - mobileOffset, 0.4 - mobileOffset, 0.6 - mobileOffset, 0.65 - mobileOffset], 
    [0.8, 1, 1, 0.8]
  );
  const text2Y = useTransform(scrollYProgress, 
    [0.35 - mobileOffset, 0.4 - mobileOffset, 0.6 - mobileOffset, 0.65 - mobileOffset], 
    [-30, 0, 0, 50]
  );

  const text3Opacity = useTransform(scrollYProgress, 
    [0.65 - mobileOffset, 0.7 - mobileOffset, 1], 
    [0, 1, 1]
  );
  const text3Scale = useTransform(scrollYProgress, 
    [0.65 - mobileOffset, 0.7 - mobileOffset, 1], 
    [0.8, 1, 1]
  );
  const text3Y = useTransform(scrollYProgress, 
    [0.65 - mobileOffset, 0.7 - mobileOffset, 1], 
    [-30, 0, 0]
  );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      ref={containerRef}
      id="about"
      className="relative min-h-[300vh] w-full"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute inset-0 flex flex-col lg:flex-row">
          {/* Left Side - Fixed Content */}
          <div className="w-full lg:w-1/2 min-h-[40vh] lg:h-full relative backdrop-blur-sm bg-gradient-to-br from-black/80 via-purple-950/80 to-indigo-950/80">
            <div className="relative h-full flex flex-col items-center lg:items-start justify-center p-4 sm:p-6 lg:p-12 xl:p-24">
              <div className="w-full max-w-2xl">
                <div className="mb-4 flex items-center space-x-2">
                  <div className="h-1 w-12 bg-purple-500" />
                  <span className="uppercase tracking-wider text-xs sm:text-sm font-medium text-purple-400">Innovation</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent mb-4 sm:mb-6 text-center lg:text-left">
                  Future of Digital Security
                </h2>
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-center lg:text-left text-gray-400">
                  Discover how Quranium is revolutionizing blockchain technology with quantum-resistant infrastructure
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Scrolling Content */}
          <div className="w-full lg:w-1/2 min-h-[60vh] lg:h-full flex items-center justify-center bg-gradient-to-bl from-purple-950/30 via-indigo-950/40 to-black/50">
            <div className="relative h-full flex items-center justify-center w-full">
              <div className="absolute inset-0 backdrop-blur-[2px]" />
              
              {/* Section 1 */}
              <motion.div
                className="absolute w-full px-4 sm:px-6 lg:px-12 z-10"
                style={{
                  opacity: text1Opacity,
                  y: text1Y,
                  scale: text1Scale,
                }}
              >
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="w-full max-w-xl space-y-3 sm:space-y-4 backdrop-blur-sm bg-gradient-to-r from-black/5 to-purple-900/5 p-4 sm:p-6 lg:p-8 rounded-2xl">
                    <span className="block uppercase tracking-wider text-xs sm:text-sm font-medium text-purple-400">What we are</span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                      Uncrackable Security
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-300">
                      In a world where no other blockchain infrastructure can truly stand against today&apos;s threats, <span className="text-purple-400">Quranium</span> is changing this with its truly uncrackable decentralized infrastructure.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section 2 */}
              <motion.div
                className="absolute w-full px-4 sm:px-6 lg:px-12 z-10"
                style={{
                  opacity: text2Opacity,
                  y: text2Y,
                  scale: text2Scale,
                }}
              >
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="w-full max-w-xl space-y-3 sm:space-y-4 backdrop-blur-sm bg-gradient-to-r from-black/5 to-purple-900/5 p-4 sm:p-6 lg:p-8 rounded-2xl">
                    <span className="block uppercase tracking-wider text-xs sm:text-sm font-medium text-purple-400">Our Mission</span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                      We are Uncrackable
                    </h3>
                    <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-400">
                      Are you?
                    </h4>
                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-300">
                      At <span className="text-purple-400">Quranium</span>, Be Uncrackable isn&apos;t just a tag-line - it&apos;s our DNA. Our Layer 1 technology is built using Post Quantum Cryptography.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section 3 */}
              <motion.div
                className="absolute w-full px-4 sm:px-6 lg:px-12 z-10"
                style={{
                  opacity: text3Opacity,
                  y: text3Y,
                  scale: text3Scale,
                }}
              >
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="w-full max-w-xl space-y-3 sm:space-y-4 backdrop-blur-sm bg-gradient-to-r from-black/5 to-purple-900/5 p-4 sm:p-6 lg:p-8 rounded-2xl">
                    <span className="block uppercase tracking-wider text-xs sm:text-sm font-medium text-purple-400">The Future</span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                      DeQUIP
                    </h3>
                    <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-400">
                      The new world
                    </h4>
                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-300">
                      <span className="text-purple-400">Decentralized Quantum-Uncrackable Infrastructure Protocol</span> – a revolutionary market category by <span className="text-purple-400">Quranium</span>, designed for the quantum future.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}