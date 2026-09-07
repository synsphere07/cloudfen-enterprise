'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { LiquidMetalButton } from '@/components/ui/liquid-metal-button';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Users,
  Target,
  ShieldCheck,
  Award,
  Sparkles,
  Layers,
  Globe2,
  TrendingUp,
  Building2,
  Cpu,
  HeartHandshake,
  Lightbulb,
  Pause,
  Play,
} from 'lucide-react';

interface WeAreCloudFenProps {
  onOpenDemo?: () => void;
}

export const WeAreCloudFen: React.FC<WeAreCloudFenProps> = ({ onOpenDemo }) => {
  // --- 1. Pillar Cards Data ---
  const pillarCards = [
    {
      title: 'WHY CHOOSE US.',
      subtitle: 'Because we are Reliable.',
      description:
        'CloudFen understands clearly with the customer business requirements. We have highly skilled engineers with excellent technical knowledge and experience in using latest software standards, tools, platforms, frameworks and technologies.',
      img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85',
      alt: 'Why Choose Us - Reliable Engineering Collaboration',
      tag: 'RELIABILITY',
      icon: ShieldCheck,
    },
    {
      title: 'OUR MISSION.',
      subtitle: 'To Redefine your Brand.',
      description:
        "CloudFen aims to establish an interactive platforms to work towards achieving customer's goals, with healthy infrastructure and advanced software product developement we strive to offer updated application servers.",
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85',
      alt: 'Our Mission - Interactive Platform Architecture',
      tag: 'BRAND VISION',
      icon: Target,
    },
    {
      title: 'WHAT WE DO.',
      subtitle: 'Make our Customers Happy.',
      description:
        'At Cloudfen we make real things happen for our customers through high quality services. We intend to give the best services on product development, It Staffing solutions, Outsourcing, Upgraded infrastructure services to enrich our customers experiences with Cloudfen.',
      img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=85',
      alt: 'What We Do - Customer Success & High Quality Services',
      tag: 'HIGH QUALITY',
      icon: HeartHandshake,
    },
  ];

  // --- 2. Interactive Office Environment Slider Data ---
  const officeSlides = [
    {
      id: 1,
      title: 'CREATIVE THINKTANK & COLLABORATIVE LOUNGE',
      subtitle: 'Open-concept spaces engineered for ideation and cross-functional synergy',
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=85',
      alt: 'Interactive Office Environment - Creative Thinktank Discussion',
      location: 'Main Engineering Hub',
      highlight: 'Daily Agile Standups & Architecture Reviews',
    },
    {
      id: 2,
      title: 'MODERN ARCHITECTURAL WORKSPACES',
      subtitle: 'Natural-light ergonomics designed for high-focus deep engineering work',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
      alt: 'Interactive Office Environment - Modern Architectural Workspace',
      location: 'Executive Innovation Lab',
      highlight: 'Multi-Cloud System Strategy & Whiteboarding',
    },
    {
      id: 3,
      title: 'INTERACTIVE SPRINT WAR ROOMS',
      subtitle: 'Equipped with ultra-wide telemetry screens and live production telemetry',
      img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=85',
      alt: 'Interactive Office Environment - Collaborative Sprint Workshop',
      location: 'DevOps & SRE Command Center',
      highlight: 'Continuous Integration & Release Sprints',
    },
    {
      id: 4,
      title: 'CROSS-DISCIPLINARY PROJECT TEAMS',
      subtitle: 'Engineers, Architects, and Scrum Masters working in close alignment',
      img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=85',
      alt: 'Interactive Office Environment - Team Planning & Interaction',
      location: 'Product Incubation Zone',
      highlight: 'Rapid MVP Prototyping & Client Demonstrations',
    },
    {
      id: 5,
      title: 'NEXT-GEN HARDWARE & INFRASTRUCTURE PODS',
      subtitle: 'High-performance workstations dedicated to enterprise cloud simulations',
      img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=85',
      alt: 'Interactive Office Environment - Advanced Tech Setup',
      location: 'Network & Cloud Infrastructure Labs',
      highlight: 'Stress Testing & High-Throughput Benchmarking',
    },
  ];

  // Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isGrayscaleMode, setIsGrayscaleMode] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % officeSlides.length);
  }, [officeSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + officeSlides.length) % officeSlides.length);
  }, [officeSlides.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  // --- 3. Extra Customer Reliable Partner Highlights ---
  const partnerHighlights = [
    {
      icon: Users,
      title: 'Top 1% Engineering Talent',
      description: 'Hand-picked developers, solution architects, and DevOps veterans.',
    },
    {
      icon: Cpu,
      title: 'Modern Tech Stack Expertise',
      description: 'React, Next.js, Cloud Native, Kubernetes, AWS, Azure, GCP, & microservices.',
    },
    {
      icon: ShieldCheck,
      title: '100% Reliable Delivery SLA',
      description: 'Zero-compromise security benchmarks, code quality audits, and test coverage.',
    },
    {
      icon: TrendingUp,
      title: 'Flexible Engagement Models',
      description: 'From dedicated RPO and staff augmentation to turn-key managed product engineering.',
    },
  ];

  // --- 4. Culture & Values Data ---
  const valuesData = [
    {
      number: '01',
      title: 'Work Ethics & Transparency',
      description:
        'We adhere to rigorous corporate governance, open daily reporting, and proactive communication at every stage of the development lifecycle.',
      icon: ShieldCheck,
    },
    {
      number: '02',
      title: 'Creative Thinktank Culture',
      description:
        'Our engineering spaces foster unconventional problem-solving, allowing our teams to build custom architectures that give clients a competitive edge.',
      icon: Lightbulb,
    },
    {
      number: '03',
      title: 'Customer-Centric Execution',
      description:
        'Every line of code and infrastructure decision is aligned directly with our customers’ strategic commercial objectives and long-term scalability.',
      icon: Target,
    },
    {
      number: '04',
      title: 'Continuous Innovation & Learning',
      description:
        'We invest heavily in upskilling our engineers across emerging AI frameworks, serverless architectures, and next-generation cloud security.',
      icon: Sparkles,
    },
  ];

  const handleActionClick = () => {
    if (onOpenDemo) {
      onOpenDemo();
    } else {
      window.dispatchEvent(new CustomEvent('open-demo-modal'));
    }
  };

  return (
    <section
      id="about-us"
      className="relative w-full bg-black/40 text-white overflow-hidden scroll-mt-14"
    >
      {/* Ambient background glow accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* ========================================================================= */}
      {/* 1. WE ARE CLOUDFEN - OVERVIEW & 3 PILLARS                                  */}
      {/* ========================================================================= */}
      <div className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Building2 className="w-3.5 h-3.5" />
            <span>About Our Company</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase">
            <span className="text-white">WE ARE </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-cyan-300">
              CLOUDFEN
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal">
            One of the most Versatile Software Solutions Company.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {pillarCards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col bg-zinc-900/80 border border-zinc-800 hover:border-cyan-500/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] hover:-translate-y-1.5"
              >
                {/* Image Banner */}
                <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-zinc-800">
                  <img
                    src={card.img}
                    alt={card.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider">
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>{card.tag}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <h3 className="text-lg sm:text-xl font-bold tracking-wider uppercase text-white group-hover:text-cyan-300 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm font-medium text-cyan-400/90">
                      {card.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed pt-3 border-t border-zinc-800/80">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. INTERACTIVE OFFICE ENVIRONMENT (SLIDER / GALLERY AS PER SCREENSHOT)    */}
      {/* ========================================================================= */}
      <div className="relative py-16 sm:py-24 bg-zinc-950 border-y border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header matching screenshot */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight uppercase text-white">
              INTERACTIVE OFFICE ENVIRONMENT
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed">
              We value Work Ethics & Environment as it helps in creating a Creative Thinktank
            </p>
            <div className="w-14 h-1 bg-cyan-400 mx-auto mt-3 rounded-full" />
          </div>

          {/* Interactive Office Slider Container */}
          <div
            className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden border border-zinc-800 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.8)] group/slider"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Viewport */}
            <div className="relative w-full h-[320px] sm:h-[450px] md:h-[520px] overflow-hidden">
              {officeSlides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                    index === currentSlide
                      ? 'opacity-100 scale-100 z-10'
                      : 'opacity-0 scale-105 pointer-events-none z-0'
                  }`}
                >
                  <img
                    src={slide.img}
                    alt={slide.alt}
                    className={`w-full h-full object-cover object-center transition-all duration-500 ${
                      isGrayscaleMode ? 'filter grayscale contrast-110' : 'filter brightness-95'
                    }`}
                  />
                  {/* Subtle Top & Bottom Vignette Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40" />

                  {/* Slide Overlay Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 z-20">
                    <div className="space-y-2 max-w-2xl">
                      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-semibold">
                        <span className="w-2 h-2 rounded-full bg-cyan-400" />
                        <span>{slide.location}</span>
                      </div>
                      <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-wide">
                        {slide.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300">
                        {slide.subtitle}
                      </p>
                    </div>

                    <div className="hidden md:flex flex-col items-end gap-1 text-right shrink-0">
                      <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                        Environment Highlight
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-cyan-300">
                        {slide.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Left Navigation Arrow */}
              <button
                onClick={prevSlide}
                type="button"
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-cyan-500/80 text-white border border-white/20 hover:border-cyan-400 transition-all duration-200 backdrop-blur-md cursor-pointer hover:scale-110 shadow-lg"
                aria-label="Previous Office Slide"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Right Navigation Arrow */}
              <button
                onClick={nextSlide}
                type="button"
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-cyan-500/80 text-white border border-white/20 hover:border-cyan-400 transition-all duration-200 backdrop-blur-md cursor-pointer hover:scale-110 shadow-lg"
                aria-label="Next Office Slide"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Controls Toolbar: B&W/Color toggle and Play/Pause */}
              <div className="absolute top-4 right-4 z-30 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsGrayscaleMode(!isGrayscaleMode)}
                  className="px-3 py-1 rounded-full bg-black/70 hover:bg-black/90 border border-white/20 text-xs font-semibold text-slate-200 backdrop-blur-md transition-all cursor-pointer"
                  title="Toggle Visual Mode"
                >
                  {isGrayscaleMode ? 'Switch to Color' : 'Classic B&W'}
                </button>

                <button
                  type="button"
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="p-1.5 rounded-full bg-black/70 hover:bg-black/90 border border-white/20 text-slate-200 backdrop-blur-md transition-all cursor-pointer"
                  title={isAutoPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
                >
                  {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Slider Dots Indicator */}
            <div className="bg-zinc-950 px-6 py-4 flex items-center justify-between border-t border-zinc-800">
              <span className="text-xs font-mono text-slate-400">
                0{currentSlide + 1} / 0{officeSlides.length}
              </span>

              <div className="flex items-center gap-2">
                {officeSlides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === currentSlide
                        ? 'w-8 bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]'
                        : 'w-2 bg-zinc-700 hover:bg-zinc-500'
                    }`}
                    aria-label={`Jump to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <span className="text-xs text-slate-400 hidden sm:inline">
                Office & Work Ethics
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. CLOUDFEN - CUSTOMERS RELIABLE PARTNER (AS PER SCREENSHOT 2)            */}
      {/* ========================================================================= */}
      <div className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Image with layered glow card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85"
                alt="CloudFen Team in Client Strategy & Solution Architecture Meeting"
                className="w-full h-[360px] sm:h-[420px] md:h-[460px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

              {/* Floating Stat Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-black/80 backdrop-blur-xl border border-cyan-500/30 flex items-center justify-between">
                <div>
                  <p className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                    Client Partnership Index
                  </p>
                  <p className="text-lg sm:text-xl font-bold text-white">
                    98.6% Long-Term Retention
                  </p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                  <HeartHandshake className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Background glowing frame accent */}
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-3xl -z-10 blur-xl" />
          </div>

          {/* Right Column: Exact Copy & Rich Enhancements */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Trusted Engineering Alliance</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight">
                CLOUDFEN - CUSTOMERS RELIABLE PARTNER
              </h3>
            </div>

            {/* Exact Screenshot Paragraphs */}
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p className="font-normal text-slate-200">
                Cloudfen emphasizes in understanding customer requirements. We help people pursue opportunities beyond boundaries is through highly skilled engineers.
              </p>
              <p className="text-slate-400">
                Sound technical knowledge and expertise in advanced software tools, frameworks and technologies are our strength for reliable engagement.
              </p>
            </div>

            {/* 4 Extra Capability Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {partnerHighlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800/90 hover:border-cyan-500/40 transition-colors space-y-1.5"
                  >
                    <div className="flex items-center gap-2 text-cyan-400 font-semibold text-xs sm:text-sm">
                      <IconComponent className="w-4 h-4 shrink-0 text-cyan-300" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-normal">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <LiquidMetalButton
                label="Explore Engagement Models"
                onClick={handleActionClick}
                icon={ArrowRight}
                viewMode="both"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. CULTURE & WORK ETHICS VALUES GRID (CREATIVE THINKTANK VALUES)          */}
      {/* ========================================================================= */}
      <div className="py-16 sm:py-24 bg-gradient-to-b from-zinc-950 to-black border-t border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
              CORE PRINCIPLES BEHIND OUR WORK ETHICS
            </h4>
            <p className="text-xs sm:text-sm md:text-base text-slate-400">
              How our environment transforms everyday challenges into breakthrough digital assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuesData.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-cyan-500/50 hover:bg-zinc-900/90 transition-all duration-300 space-y-4 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-extrabold text-cyan-400/40">
                      {val.number}
                    </span>
                    <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-400/20 text-cyan-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h5 className="text-base font-bold text-white tracking-wide">
                    {val.title}
                  </h5>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeAreCloudFen;
