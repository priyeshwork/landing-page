'use client';
import { SECTION_IDS } from '@/constants';
import Content from './Content';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <div id={SECTION_IDS.hero} className="h-[100vh] w-full overflow-hidden">
      <div className="relative h-full w-full">
        <div className="absolute inset-0">
          <Spline 
            scene={process.env.NEXT_PUBLIC_SPLINE_SCENE_HUMAN}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Content />
        </div>
        {/* Gradient overlay for smooth transition to About section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-black/80 to-black pointer-events-none" />
      </div>
    </div>
  );
}
