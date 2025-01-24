'use client';
import { useState, useEffect } from 'react';
import { HERO_CONTENT } from '@/constants/content';
import { SECTION_IDS } from '@/constants';

interface ContentProps {
  onGetStarted?: () => void;
}

export default function Content({ onGetStarted }: ContentProps) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleGetStarted = () => {
    setIsButtonClicked(true);
    if (onGetStarted) onGetStarted();
    
    const aboutSection = document.getElementById(SECTION_IDS.about);
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    setTimeout(() => setIsButtonClicked(false), 600);
  };

  return (
    <div className="relative z-[1] flex items-center justify-center min-h-screen pointer-events-none">
      <div 
        className="text-center px-4 transform transition-all duration-1000"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: `translateY(${isVisible ? '0' : '20px'})`
        }}
      >
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            {HERO_CONTENT.title.main}
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-purple-600 to-indigo-600 text-transparent bg-clip-text">
            {HERO_CONTENT.title.highlight}
          </span>
        </h1>
        <p 
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 text-purple-200 max-w-3xl mx-auto"
        >
          {HERO_CONTENT.description}
        </p>
        <button
          onClick={handleGetStarted}
          className={`
            pointer-events-auto
            px-8 py-4 rounded-full
            text-lg sm:text-xl
            font-semibold
            transform transition-all duration-300
            ${isButtonClicked ? 'scale-95' : 'scale-100'}
            bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800
            text-white
            hover:shadow-lg hover:shadow-purple-500/40
            active:scale-95
            relative
            overflow-hidden
          `}
        >
          <span className="relative z-10">{HERO_CONTENT.button.text}</span>
          <div 
            className={`
              absolute inset-0
              bg-gradient-to-r from-indigo-800 via-purple-700 to-purple-600
              transition-opacity duration-300
              ${isButtonClicked ? 'opacity-100' : 'opacity-0'}
            `}
          />
        </button>
      </div>
    </div>
  );
}
