'use client';

import { APP_LINKS, SECTION_IDS } from '@/constants';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState<keyof typeof SECTION_IDS>(SECTION_IDS.hero);
  const handleScroll = () => {
    const sections = [SECTION_IDS.hero, SECTION_IDS.about, SECTION_IDS.contact];
    const viewportHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    
    if (scrollPosition + viewportHeight >= documentHeight - 100) {
      if (activeSection !== SECTION_IDS.contact) {
        setActiveSection(SECTION_IDS.contact);
      }
      return;
    }
    
    // Calculate which section should be active based on scroll position
    for (const id of sections) {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = rect.height;
        
        // Element is considered "active" when it takes up most of the viewport
        if (elementTop <= viewportHeight * 0.3 && elementTop > -elementHeight * 0.7) {
          if (activeSection !== id) {
            setActiveSection(id);
          }
          break;
        }
      }
    }
    
    // If we're at the very top, ensure hero is active
    if (scrollPosition === 0) {
      setActiveSection(SECTION_IDS.hero);
    }
  };

  useEffect(() => {
   
    // Initial check
    handleScroll();

    // Add scroll listener with throttling
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      if (sectionId === SECTION_IDS.contact) {
        // Scroll to the bottom of the page for contact section
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth'
        });
      } else {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setActiveSection(sectionId as keyof typeof SECTION_IDS);
    }
  };

  
  return (
    <nav className="fixed top-4 right-20 z-50">
      <ul className="flex gap-6">
        {APP_LINKS.map(({ id, label }) => (
          <li key={id}>
            <button 
              onClick={() => scrollToSection(id)}
              className="relative text-sm font-medium text-white hover:opacity-70 transition-opacity px-1 py-0.5"
            >
              {label}
              {activeSection === id && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 bottom-0 h-0.5 bg-white"
                  initial={false}
                />
              )}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
