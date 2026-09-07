'use client';

import React from 'react';
import Slideshow from '@/components/ui/slideshow';

interface HeroSectionProps {
  onOpenDemo?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDemo }) => {
  return (
    <section
      id="home"
      className="relative w-full pt-16 sm:pt-20 bg-transparent overflow-hidden"
    >
      <Slideshow onOpenDemo={onOpenDemo} />
    </section>
  );
};

export default HeroSection;
