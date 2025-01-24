'use client';

import HeroContent from './HeroContent';
import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  return (
    <div>
      <div className="relative">
        <Spline scene={process.env.NEXT_PUBLIC_SPLINE_SCENE_HUMAN} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <HeroContent/>
        </div>
      </div>
      
    </div>
  );
}
