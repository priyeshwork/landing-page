'use client';

import { useState, useEffect } from 'react';
import HeroContent from './HeroContent';
import SplineScene from './SplineScene';

export default function HeroSection() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const progress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetStarted = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 2000);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <SplineScene isAnimating={isAnimating} />
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 pointer-events-none"
        style={{
          opacity: Math.max(0.1, Math.min(1, scrollProgress * 2))
        }}
      />
      <HeroContent onGetStarted={handleGetStarted} />
    </section>
  );
}
