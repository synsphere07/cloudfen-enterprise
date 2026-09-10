'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ArrowRight,
} from 'lucide-react';
import { LiquidMetalButton } from '@/components/ui/liquid-metal-button';

export interface SlideItem {
  id?: string | number;
  img: string;
  fallbackImg?: string;
  tag?: string;
  text: string[];
  subtitle?: string;
  primaryCta?: {
    text: string;
    href?: string;
    action?: 'demo' | 'link';
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
}

export interface SlideshowProps {
  slides?: SlideItem[];
  autoPlayInterval?: number;
  showControls?: boolean;
  showCounter?: boolean;
  showIndicators?: boolean;
  showAutoplayToggle?: boolean;
  onOpenDemo?: () => void;
  className?: string;
}

export const DEFAULT_SLIDES: SlideItem[] = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2400&q=85',
    fallbackImg: 'https://cdn.cosmos.so/8b0252bd-cb64-45f4-aef8-672c7f628f76?format=jpeg',
    tag: 'Autonomous Enterprise AI · Production Agents',
    text: ['AUTONOMOUS ENTERPRISE', 'WORKFLOW SYSTEMS'],
    subtitle: 'From experimental AI demos to hardened production agents. CloudFen deploys deterministic, multi-agent architectures that orchestrate mission-critical business workflows with measurable ROI.',
    primaryCta: {
      text: 'Book an Agent Readiness Call',
      action: 'demo',
    },
    secondaryCta: {
      text: 'Explore AI Solutions',
      href: '#ai-solutions',
    },
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=85',
    fallbackImg: 'https://cdn.cosmos.so/7b3f4c48-ec63-4bac-b472-910c037a0eb4?format=jpeg',
    tag: 'Deterministic State Machines · Verified ROI',
    text: ['REDEFINING ENTERPRISE', 'OPERATIONS'],
    subtitle: 'Eliminate manual operational bottlenecks with hardened AI agents. Built with rigid Pydantic/Zod schemas, confidence scoring gates, human-in-the-loop review, and immutable audit logs.',
    primaryCta: {
      text: '4-Week Readiness Sprint',
      href: '/readiness-sprint',
      action: 'link',
    },
    secondaryCta: {
      text: 'Architecture Blueprint',
      href: '/how-it-works',
    },
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2400&q=85',
    fallbackImg: 'https://cdn.cosmos.so/444502b9-4cb9-4f14-a068-f0213df08729?format=jpeg',
    tag: 'Production AI Agent Suite · Seamless Mesh',
    text: ['ENTERPRISE AGENTIC', 'AUTOMATION'],
    subtitle: 'Autonomous Sourcing Desk, Onboarding & Compliance Moat, and Back-Office AP Reconciliation. Native two-way integrations into Workday, SAP, Jira, and Greenhouse.',
    primaryCta: {
      text: 'View Agent Solutions',
      href: '/solutions',
      action: 'link',
    },
    secondaryCta: {
      text: 'Enterprise Case Studies',
      href: '/case-studies',
    },
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=2400&q=85',
    fallbackImg: 'https://cdn.cosmos.so/ef511e17-a35b-42e6-9122-2754bbd2ad7e?format=jpeg',
    tag: 'Zero Hallucination Architecture · SOC2 Type II',
    text: ['PRODUCTION-GRADE', 'AGENT ARCHITECTURE'],
    subtitle: 'Deterministic reasoning pipelines with zero customer data training. Automated nightly synthetic regression evaluations, drift prevention, and 24/7 managed operations.',
    primaryCta: {
      text: 'Launch Audit Console',
      action: 'demo',
    },
    secondaryCta: {
      text: 'Readiness Sprint Scope',
      href: '/readiness-sprint',
    },
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2400&q=85',
    fallbackImg: 'https://cdn.cosmos.so/cf68a397-080a-437a-994e-69dedd9e6e06?format=jpeg',
    tag: 'The Annuity · 24/7 Managed Operations',
    text: ['SCALE YOUR ENTERPRISE', 'AGENT FLEET'],
    subtitle: 'Partner with seasoned AI systems architects. We build, monitor, and continuously optimize your production agent fleet under guaranteed SLAs and audited business impact.',
    primaryCta: {
      text: 'Schedule Architecture Fit',
      action: 'demo',
    },
    secondaryCta: {
      text: 'Contact Systems Engineers',
      href: '/contact',
    },
  },
];

export const Slideshow: React.FC<SlideshowProps> = ({
  slides = DEFAULT_SLIDES,
  autoPlayInterval = 6500,
  showControls = true,
  showCounter = true,
  showIndicators = true,
  showAutoplayToggle = true,
  onOpenDemo,
  className = '',
}) => {
  const [current, setCurrent] = useState<number>(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setDirection('next');
    setCurrent((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setDirection('prev');
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    if (index > current) {
      setDirection('next');
    } else if (index < current) {
      setDirection('prev');
    }
    setCurrent(index);
  };

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying || isHovered || totalSlides <= 1) return;

    const timer = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, autoPlayInterval, nextSlide, totalSlides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

  const handleDemoClick = () => {
    if (onOpenDemo) {
      onOpenDemo();
    } else {
      window.dispatchEvent(new CustomEvent('open-demo-modal'));
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[82vh] min-h-[620px] max-h-[920px] overflow-hidden select-none bg-transparent text-white [perspective:1800px] ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="CloudFen 3D Flip Slideshow"
    >
      {/* 3D Flip Slide Deck */}
      {slides.map((slide, i) => {
        const isActive = i === current;

        return (
          <div
            key={slide.id || i}
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] [transform-style:preserve-3d] ${
              isActive
                ? 'opacity-100 z-10 [transform:rotateY(0deg)_scale(1)]'
                : direction === 'next'
                ? 'opacity-0 z-0 pointer-events-none [transform:rotateY(-65deg)_scale(0.92)_translateX(-60px)]'
                : 'opacity-0 z-0 pointer-events-none [transform:rotateY(65deg)_scale(0.92)_translateX(60px)]'
            }`}
            aria-hidden={!isActive}
          >
            {/* Slide Frame */}
            <div className="relative w-full h-full overflow-hidden">
              {/* Background Image with Slow Zoom Pan */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-[7000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
                style={{
                  backgroundImage: `url(${slide.img})`,
                }}
              >
                {/* Fallback image handler */}
                {slide.fallbackImg && (
                  <img
                    src={slide.img}
                    alt={slide.text.join(' ')}
                    className="hidden"
                    onError={(e) => {
                      const target = e.currentTarget.parentElement;
                      if (target && slide.fallbackImg) {
                        target.style.backgroundImage = `url(${slide.fallbackImg})`;
                      }
                    }}
                  />
                )}
              </div>

              {/* Dark Aesthetic Glass Overlays & Ambient Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/35" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent" />
              <div className="absolute inset-0 bg-radial-vignette opacity-70 pointer-events-none" />

              {/* Slide Content Box */}
              <div className="relative z-20 h-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col justify-end pb-24 sm:pb-28">
                <div className="max-w-3xl space-y-4 sm:space-y-6">

                  {/* Tag Pill */}
                  {slide.tag && (
                    <div
                      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all duration-700 delay-100 ${
                        isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      <span>{slide.tag}</span>
                    </div>
                  )}

                  {/* Main Large Typography */}
                  <div className="space-y-1 sm:space-y-2">
                    {slide.text.map((line, lineIndex) => (
                      <h2
                        key={lineIndex}
                        className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-[0.95] text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] transition-all duration-700 ${
                          isActive
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-8 opacity-0'
                        }`}
                        style={{
                          transitionDelay: `${150 + lineIndex * 120}ms`,
                        }}
                      >
                        {line}
                      </h2>
                    ))}
                  </div>

                  {/* Description Text */}
                  {slide.subtitle && (
                    <p
                      className={`text-sm sm:text-base md:text-lg text-slate-200/95 font-normal max-w-2xl leading-relaxed drop-shadow-md transition-all duration-700 delay-300 ${
                        isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}
                    >
                      {slide.subtitle}
                    </p>
                  )}

                  {/* Slide Action Buttons */}
                  <div
                    className={`pt-2 flex flex-wrap items-center gap-4 transition-all duration-700 delay-400 ${
                      isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                  >
                    {/* Primary CTA */}
                    {slide.primaryCta?.action === 'demo' ? (
                      <LiquidMetalButton
                        label={slide.primaryCta.text}
                        onClick={handleDemoClick}
                        icon={ArrowRight}
                        viewMode="both"
                      />
                    ) : slide.primaryCta?.href ? (
                      <LiquidMetalButton
                        label={slide.primaryCta.text}
                        href={slide.primaryCta.href}
                        icon={ArrowRight}
                        viewMode="both"
                      />
                    ) : null}

                    {/* Secondary CTA */}
                    {slide.secondaryCta && (
                      <a
                        href={slide.secondaryCta.href}
                        className="px-6 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 backdrop-blur-md transition-all duration-300"
                      >
                        {slide.secondaryCta.text}
                      </a>
                    )}
                  </div>

                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Controls (Left / Right Arrow buttons) */}
      {showControls && (
        <div className="absolute inset-y-0 left-0 right-0 z-30 flex items-center justify-between px-4 sm:px-8 pointer-events-none">
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="pointer-events-auto p-3 sm:p-4 rounded-full bg-black/40 hover:bg-black/70 text-slate-300 hover:text-white border border-white/10 hover:border-cyan-400/40 backdrop-blur-lg shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer group"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="pointer-events-auto p-3 sm:p-4 rounded-full bg-black/40 hover:bg-black/70 text-slate-300 hover:text-white border border-white/10 hover:border-cyan-400/40 backdrop-blur-lg shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer group"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      )}

      {/* Bottom Bar: Indicators, Counter & Autoplay Controls */}
      <div className="absolute bottom-6 left-0 right-0 z-30">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">

          {/* Slide Indicators / Segment Progress Bars */}
          {showIndicators && (
            <div className="flex items-center gap-2 sm:gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer ${
                    i === current
                      ? 'w-8 sm:w-12 bg-gradient-to-r from-cyan-400 to-teal-300 shadow-[0_0_10px_rgba(6,182,212,0.8)]'
                      : 'w-2 sm:w-3 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Right Group: Counter & Play/Pause */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Slide Counter (e.g., 01 / 05) */}
            {showCounter && (
              <div className="text-xs sm:text-sm font-mono tracking-widest text-slate-400 bg-black/40 border border-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                <span className="text-cyan-400 font-bold">
                  {String(current + 1).padStart(2, '0')}
                </span>
                <span className="text-slate-600 mx-1.5">/</span>
                <span>{String(totalSlides).padStart(2, '0')}</span>
              </div>
            )}

            {/* Autoplay Toggle */}
            {showAutoplayToggle && (
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                className="p-1.5 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
                title={isPlaying ? 'Pause Autoplay' : 'Resume Autoplay'}
              >
                {isPlaying ? (
                  <Pause className="w-3.5 h-3.5" />
                ) : (
                  <Play className="w-3.5 h-3.5" />
                )}
              </button>
            )}
          </div>

        </div>
      </div>

      {/* Subtle Bottom Ambient Gradient Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-20" />
    </div>
  );
};

export default Slideshow;
