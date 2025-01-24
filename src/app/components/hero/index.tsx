'use client';
import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import Content from './Content';
import { SECTION_IDS } from '@/constants';

export default function Hero() {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSplineAction = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <section id={SECTION_IDS.hero} className="relative min-h-screen w-full overflow-hidden">
      {/* Spline container */}
      <div 
        className={`
          absolute inset-0 w-full h-full transition-transform duration-300
          ${isAnimating ? 'scale-110 brightness-150' : 'scale-100 brightness-100'}
        `}
      >
        <Spline
          scene={process.env.NEXT_PUBLIC_SPLINE_SCENE_HUMAN || ''}
          className="transition-all duration-300"
        />
      </div>

      {/* Content */}
      <Content onSplineAction={handleSplineAction} />

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
