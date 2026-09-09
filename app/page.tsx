'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/hero/HeroSection';
import WeAreCloudFen from '@/components/sections/WeAreCloudFen';
import AiAgentSolutionsSection from '@/components/sections/AiAgentSolutionsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import Footer from '@/components/layout/Footer';
import Modal from '@/components/ui/Modal';

// Dynamically import heavy canvas/WebGL components (SSR disabled)
const LogoIntro = dynamic(() => import('@/components/intro/LogoIntro'), {
  ssr: false,
});

export default function Home() {
  const [introState, setIntroState] = useState<'intro' | 'transitioning' | 'completed'>('intro');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [modalSpend, setModalSpend] = useState<number>(45000);

  useEffect(() => {
    // Lock scroll during intro
    if (introState === 'intro') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [introState]);

  useEffect(() => {
    const handleOpenDemo = (e: Event) => {
      const customEvent = e as CustomEvent<{ spend?: number }>;
      if (customEvent.detail?.spend) {
        setModalSpend(customEvent.detail.spend);
      }
      setIsDemoModalOpen(true);
    };

    window.addEventListener('open-demo-modal', handleOpenDemo);
    return () => {
      window.removeEventListener('open-demo-modal', handleOpenDemo);
    };
  }, []);

  const openDemoWithSpend = (spend?: number) => {
    if (spend) {
      setModalSpend(spend);
    }
    setIsDemoModalOpen(true);
  };

  return (
    <>
      {/* Full-Screen 3D Logo Intro Splash Screen */}
      {introState !== 'completed' && (
        <LogoIntro
          onStartExit={() => setIntroState('transitioning')}
          onComplete={() => setIntroState('completed')}
        />
      )}

      {/* Main Website - Reveals seamlessly after logo intro */}
      <div
        id="main-content"
        className={`relative min-h-screen text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden transition-opacity duration-1000 ease-out ${
          introState === 'intro' ? 'opacity-0 pointer-events-none h-screen overflow-hidden' : 'opacity-100'
        }`}
      >
        {/* Global Navbar */}
        <Navbar onOpenDemo={() => openDemoWithSpend()} />

        <main className="relative z-10">
          {/* 1. Slideshow Hero Section */}
          <HeroSection onOpenDemo={() => openDemoWithSpend()} />

          {/* 2. "WE ARE CLOUDFEN" Section (Why Choose Us, Our Mission, What We Do) */}
          <WeAreCloudFen onOpenDemo={() => openDemoWithSpend()} />

          {/* 3. "AI AGENT SOLUTIONS" Section (From Readiness to Production & Ops) */}
          <AiAgentSolutionsSection onOpenDemo={() => openDemoWithSpend()} />

          {/* 4. "SERVICES - What we do" Section (6 Services Grid) */}
          <ServicesSection onOpenDemo={() => openDemoWithSpend()} />
        </main>

        {/* Corporate Footer */}
        <Footer />

        {/* Interactive Sandbox & Architecture Audit Modal */}
        <Modal
          isOpen={isDemoModalOpen}
          onClose={() => setIsDemoModalOpen(false)}
          initialSpend={modalSpend}
        />
      </div>
    </>
  );
}
