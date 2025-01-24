'use client';

import { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import type { Application, SPEObject } from '@splinetool/runtime';
import { useTheme } from '../context/ThemeContext';

interface SplineSceneProps {
  onLoad?: () => void;
  isAnimating?: boolean;
}

export default function SplineScene({ onLoad, isAnimating }: SplineSceneProps) {
  const splineRef = useRef<Application | undefined>(undefined);
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
        laptop.scale.x = scale;
        laptop.scale.y = scale;
        laptop.scale.z = scale;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!splineRef.current) return;

    const laptop = splineRef.current.findObjectByName('laptop');
    if (laptop) {
      // Get all materials from the object and its children
      const updateMaterialColors = (obj: SPEObject) => {
        if (obj && typeof obj === 'object' && 'material' in obj && obj.material && typeof obj.material === 'object') {
          const color = theme === 'dark' ? 0x9333ea : 0x4f46e5;
          const material = obj.material as { color?: { r: number; g: number; b: number } };
          if (material.color) {
            material.color = {
              r: ((color >> 16) & 255) / 255,
              g: ((color >> 8) & 255) / 255,
              b: (color & 255) / 255
            };
          }
        }
        
        if (obj && typeof obj === 'object' && 'children' in obj && Array.isArray(obj.children)) {
          obj.children.forEach(child => updateMaterialColors(child));
        }
      };

      updateMaterialColors(laptop);
    }
  }, [theme]);

  useEffect(() => {
    if (!splineRef.current || !isAnimating) return;

    const laptop = splineRef.current.findObjectByName('laptop');
    if (laptop) {
      // Add animation when button is clicked
      const startRotation = laptop.rotation.y;
      const targetRotation = startRotation + Math.PI * 2; // Full 360° rotation
      let progress = 0;
      
      const animate = () => {
        if (progress >= 1) return;
        
        progress += 0.02;
        laptop.rotation.y = startRotation + (targetRotation - startRotation) * progress;
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      animate();
    }
  }, [isAnimating]);

  return (
    <div className="absolute inset-0 w-full h-full">
      <Spline
        onLoad={handleLoad}
        scene="https://prod.spline.design/clTNjovJSq68QqCB/scene.splinecode"
        className="w-full h-full"
      />
    </div>
  );
}
