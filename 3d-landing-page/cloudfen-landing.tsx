import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import FooterSection from './components/ui/footer-section';

export default function CloudFenLandingPage() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const mouseRef = useRef({ x: 0, y: 0 });

  return (
    <div className="relative w-full min-h-screen bg-black text-white">
      {/* Other components and content here */}
      <main id="home">
        <FooterSection />
      </main>
    </div>
  );
}