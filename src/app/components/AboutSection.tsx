'use client'
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function EnhancedScrollSection() {
  const containerRef = useRef(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const text1Opacity = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0]);
  const text1Scale = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0.8]);
  const text1Y = useTransform(scrollYProgress, [0, 0.25, 0.35], [0, 0, 100]);

  const text2Opacity = useTransform(scrollYProgress, [0.35, 0.4, 0.6, 0.65], [0, 1, 1, 0]);
  const text2Scale = useTransform(scrollYProgress, [0.35, 0.4, 0.6, 0.65], [0.8, 1, 1, 0.8]);
  const text2Y = useTransform(scrollYProgress, [0.35, 0.4, 0.6, 0.65], [-50, 0, 0, 100]);

  const text3Opacity = useTransform(scrollYProgress, [0.65, 0.7, 1], [0, 1, 1]);
  const text3Scale = useTransform(scrollYProgress, [0.65, 0.7, 1], [0.8, 1, 1]);
  const text3Y = useTransform(scrollYProgress, [0.65, 0.7, 1], [-50, 0, 0]);

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
          <div className={`w-full lg:w-1/2 h-[50vh] lg:h-full relative ${
            isDark 
              ? "bg-gradient-to-br from-black via-purple-950 to-indigo-950" 
              : "bg-gradient-to-br from-white via-purple-100 to-indigo-100"
          }`}>
            <div className="relative h-full flex flex-col items-center lg:items-start justify-center p-6 lg:px-24">
              <div className="max-w-2xl">
                <div className="mb-4 flex items-center space-x-2">
                  <div className="h-1 w-12 bg-purple-500" />
                  <span className={`uppercase tracking-wider text-sm font-medium ${
                    isDark ? "text-purple-400" : "text-purple-600"
                  }`}>Innovation</span>
                </div>
                <h2 className={`text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r ${
                  isDark 
                    ? "from-white via-purple-200 to-purple-400" 
                    : "from-purple-950 via-purple-800 to-purple-600"
                } bg-clip-text text-transparent mb-6 text-center lg:text-left`}>
                  Future of Digital Security
                </h2>
                <p className={`text-base sm:text-lg lg:text-xl leading-relaxed text-center lg:text-left ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}>
                  Discover how Quranium is revolutionizing blockchain technology with quantum-resistant infrastructure
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Scrolling Content */}
          <div className={`w-full lg:w-1/2 h-[50vh] lg:h-full flex items-center justify-center ${
            isDark 
              ? "bg-gradient-to-bl from-purple-950 via-indigo-950 to-black" 
              : "bg-gradient-to-bl from-purple-100 via-indigo-100 to-white"
          }`}>
            <div className="relative h-full flex items-center justify-center w-full">
              {/* Section 1 */}
              <motion.div
                className="absolute w-full px-6 lg:px-24"
                style={{
                  opacity: text1Opacity,
                  y: text1Y,
                  scale: text1Scale,
                }}
              >
                <div className="flex flex-col items-center justify-center text-center space-y-6 lg:space-y-8">
                  <div className="space-y-4">
                    <span className={`uppercase tracking-wider text-xs sm:text-sm font-medium ${
                      isDark ? "text-purple-400" : "text-purple-600"
                    }`}>What we are</span>
                    <h3 className={`text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${
                      isDark 
                        ? "from-white via-purple-200 to-purple-400" 
                        : "from-purple-950 via-purple-800 to-purple-600"
                    } bg-clip-text text-transparent`}>
                      Uncrackable Security
                    </h3>
                    <p className={`text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-xl mt-4 lg:mt-8 px-4 lg:px-0 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}>
                      In a world where no other blockchain infrastructure can truly stand against today&apos;s threats, <span className={isDark ? "text-purple-400" : "text-purple-600"}>Quranium</span> is changing this with its truly uncrackable decentralized infrastructure.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section 2 */}
              <motion.div
                className="absolute w-full px-6 lg:px-24"
                style={{
                  opacity: text2Opacity,
                  y: text2Y,
                  scale: text2Scale,
                }}
              >
                <div className="flex flex-col items-center justify-center text-center space-y-6 lg:space-y-8">
                  <div className="space-y-4">
                    <span className={`uppercase tracking-wider text-xs sm:text-sm font-medium ${
                      isDark ? "text-purple-400" : "text-purple-600"
                    }`}>Our Mission</span>
                    <h3 className={`text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${
                      isDark 
                        ? "from-white via-purple-200 to-purple-400" 
                        : "from-purple-950 via-purple-800 to-purple-600"
                    } bg-clip-text text-transparent`}>
                      We are Uncrackable
                    </h3>
                    <h4 className={`text-2xl sm:text-3xl font-bold ${isDark ? "text-purple-400" : "text-purple-600"}`}>
                      Are you?
                    </h4>
                    <p className={`text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-xl mt-4 lg:mt-8 px-4 lg:px-0 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}>
                      At <span className={isDark ? "text-purple-400" : "text-purple-600"}>Quranium</span>, Be Uncrackable isn&apos;t just a tag-line - it&apos;s our DNA. Our Layer 1 technology is built using Post Quantum Cryptography.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section 3 */}
              <motion.div
                className="absolute w-full px-6 lg:px-24"
                style={{
                  opacity: text3Opacity,
                  y: text3Y,
                  scale: text3Scale,
                }}
              >
                <div className="flex flex-col items-center justify-center text-center space-y-6 lg:space-y-8">
                  <div className="space-y-4">
                    <span className={`uppercase tracking-wider text-xs sm:text-sm font-medium ${
                      isDark ? "text-purple-400" : "text-purple-600"
                    }`}>The Future</span>
                    <h3 className={`text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${
                      isDark 
                        ? "from-white via-purple-200 to-purple-400" 
                        : "from-purple-950 via-purple-800 to-purple-600"
                    } bg-clip-text text-transparent`}>
                      DeQUIP
                    </h3>
                    <h4 className={`text-2xl sm:text-3xl font-bold ${isDark ? "text-purple-400" : "text-purple-600"}`}>
                      The new world
                    </h4>
                    <p className={`text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-xl mt-4 lg:mt-8 px-4 lg:px-0 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}>
                      <span className={isDark ? "text-purple-400" : "text-purple-600"}>Decentralized Quantum-Uncrackable Infrastructure Protocol</span> – a revolutionary market category by <span className={isDark ? "text-purple-400" : "text-purple-600"}>Quranium</span>, designed for the quantum future.
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