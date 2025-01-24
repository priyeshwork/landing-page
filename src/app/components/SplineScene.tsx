'use client';

import { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import type { Application } from '@splinetool/runtime';
import { useTheme } from '../context/ThemeContext';

interface SplineSceneProps {
  onLoad?: () => void;
  isAnimating?: boolean;
}

export default function SplineScene({ onLoad, isAnimating }: SplineSceneProps) {
  const splineRef = useRef<Application>();
  const { theme } = useTheme();

  const handleLoad = (splineApp: Application) => {
    splineRef.current = splineApp;
    if (onLoad) onLoad();
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!splineRef.current) return;

      // Get normalized mouse position (-1 to 1)
      const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      const mouseY = (e.clientY / window.innerHeight) * 2 - 1;

      // Find the laptop object
      const laptop = splineRef.current.findObjectByName('laptop');
      if (laptop) {
        // Smooth rotation
        const targetRotationX = mouseY * 0.1;
        const targetRotationY = mouseX * 0.1;
        
        laptop.rotation.x += (targetRotationX - laptop.rotation.x) * 0.05;
        laptop.rotation.y += (targetRotationY - laptop.rotation.y) * 0.05;
      }
    };

    const handleScroll = () => {
      if (!splineRef.current) return;

      const laptop = splineRef.current.findObjectByName('laptop');
      if (laptop) {
        // Calculate scroll progress (0 to 1)
        const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        
        // Scale based on scroll
        const scale = 1 - scrollProgress * 0.3; // Scale down to 70% at bottom
        laptop.scale.set(scale, scale, scale);
      }
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle theme changes
  useEffect(() => {
    if (!splineRef.current) return;

    const laptop = splineRef.current.findObjectByName('laptop');
    if (laptop) {
      // Animate materials based on theme
      const materials = laptop.materials;
      materials.forEach(material => {
        if (theme === 'dark') {
          material.color.setHex(0x9333ea); // Purple for dark mode
        } else {
          material.color.setHex(0x4f46e5); // Indigo for light mode
        }
      });
    }
  }, [theme]);

  // Handle button click animation
  useEffect(() => {
    if (!splineRef.current || !isAnimating) return;

    const laptop = splineRef.current.findObjectByName('laptop');
    if (laptop) {
      // Spin animation
      let rotation = 0;
      const animate = () => {
        rotation += 0.1;
        laptop.rotation.y = rotation;

        if (rotation < Math.PI * 2) {
          requestAnimationFrame(animate);
        }
      };
      animate();
    }
  }, [isAnimating]);

  return (
    <div className="fixed inset-0 -z-10">
      <Spline
        onLoad={handleLoad}
        scene="https://prod.spline.design/clTNjovJSq68QqCB/scene.splinecode"
        style={{ width: '100%', height: '100vh' }}
      />
    </div>
  );
}
