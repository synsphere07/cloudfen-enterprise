'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS, NavSubItem } from '@/lib/constants';
import { CloudFenLogo } from '@/components/ui/CloudFenLogo';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
} from 'lucide-react';

interface NavbarProps {
  onOpenDemo?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState<Record<string, boolean>>({});
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  const toggleMobileDropdown = (label: string) => {
    setOpenMobileDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);

          if (pathname === '/') {
            const sectionIds = ['problem', 'solutions', 'how-it-works', 'readiness-sprint', 'architecture', 'measurement', 'case-studies'];
            const scrollPosition = window.scrollY + 160;

            for (let i = sectionIds.length - 1; i >= 0; i--) {
              const sectionId = sectionIds[i];
              const el = document.getElementById(sectionId);
              if (el) {
                const top = el.offsetTop;
                if (scrollPosition >= top) {
                  setActiveSection(sectionId);
                  ticking = false;
                  return;
                }
              }
            }

            if (window.scrollY < 120) {
              setActiveSection('');
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const isItemActive = (item: { label: string; href: string; subItems?: NavSubItem[] }) => {
    if (item.label.toLowerCase() === 'solutions') {
      return pathname.startsWith('/solutions') || pathname === '/readiness-sprint' || activeSection === 'solutions';
    }
    if (item.label.toLowerCase() === 'how it works') {
      return pathname === '/how-it-works' || activeSection === 'how-it-works';
    }
    if (item.label.toLowerCase() === 'case studies') {
      return pathname === '/case-studies' || activeSection === 'case-studies';
    }
    if (item.label.toLowerCase() === 'agent operations') {
      return pathname === '/agent-operations' || activeSection === 'architecture';
    }
    if (item.label.toLowerCase() === 'about') {
      return pathname === '/about';
    }
    if (item.label.toLowerCase() === 'contact') {
      return pathname === '/contact';
    }
    return pathname === item.href;
  };

  const handleCtaClick = () => {
    if (onOpenDemo) {
      onOpenDemo();
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.85)] py-3'
          : 'bg-transparent border-b border-white/5 py-4'
      }`}
    >
      {/* Subtle Top Ambient Light Gradient */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between min-h-[44px]">

          {/* Left: Brand Identity */}
          <Link
            href="/"
            className="flex items-center group outline-none focus:outline-none focus:ring-0 select-none shrink-0"
            aria-label="CloudFen - Enterprise AI Automation"
          >
            <CloudFenLogo
              variant="inline"
              size="md"
              showSubtitle={true}
              subtitle="ENTERPRISE AI AGENTS"
            />
          </Link>

          {/* Center: Desktop Navigation Links with Dropdowns */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 whitespace-nowrap">
            {NAV_ITEMS.map((item) => {
              const isActive = isItemActive(item);
              const hasSubItems = item.subItems && item.subItems.length > 0;

              if (hasSubItems) {
                return (
                  <div key={item.label} className="relative group/dropdown py-2">
                    <Link
                      href={item.href}
                      className={`relative py-1 text-[13px] xl:text-sm font-medium tracking-wide transition-colors duration-200 flex items-center gap-1.5 cursor-pointer select-none ${
                        isActive ? 'text-cyan-400 font-semibold' : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover/dropdown:text-cyan-400 group-hover/dropdown:rotate-180 transition-transform duration-200 shrink-0" />

                      {/* Active / Hover Line */}
                      {isActive ? (
                        <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.9)]" />
                      ) : (
                        <span className="absolute -bottom-1.5 left-1/2 right-1/2 h-[2px] bg-transparent rounded-full group-hover/dropdown:left-0 group-hover/dropdown:right-0 group-hover/dropdown:bg-cyan-400/60 transition-all duration-200" />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[380px] opacity-0 translate-y-2 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:pointer-events-auto transition-all duration-200 ease-out z-50">
                      <div className="h-[2px] w-full bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 rounded-t-sm shadow-[0_0_10px_rgba(20,184,166,0.6)]" />
                      <div className="bg-[#0f1117] border-x border-b border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.9)] rounded-b-xl overflow-hidden p-2 divide-y divide-zinc-800/50">
                        {item.subItems!.map((sub) => {
                          const isCurrentSub = pathname === sub.href;
                          return (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className={`group/sub block p-3 rounded-lg transition-all duration-150 ${
                                isCurrentSub
                                  ? 'bg-cyan-500/10 border-l-2 border-cyan-400'
                                  : 'hover:bg-white/[0.04] border-l-2 border-transparent hover:border-teal-400'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className={`text-xs font-semibold tracking-wide uppercase transition-colors ${
                                  isCurrentSub ? 'text-cyan-300' : 'text-slate-200 group-hover/sub:text-white'
                                }`}>
                                  {sub.label}
                                </span>
                                {sub.badge && (
                                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/15 border border-cyan-400/30 text-cyan-300">
                                    {sub.badge}
                                  </span>
                                )}
                              </div>
                              {sub.description && (
                                <p className="text-[11px] text-slate-400 line-clamp-1 group-hover/sub:text-slate-300">
                                  {sub.description}
                                </p>
                              )}
                            </Link>
                          );
                        })}
                        <div className="pt-2 pb-1 px-2 flex items-center justify-between text-[11px]">
                          <span className="text-slate-400">Fixed-price 4-week deployments</span>
                          <Link href="/readiness-sprint" className="text-cyan-400 font-semibold hover:underline flex items-center gap-1">
                            Explore Sprint <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative py-1 text-[13px] xl:text-sm font-medium tracking-wide transition-colors duration-200 group ${
                    isActive ? 'text-cyan-400 font-semibold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive ? (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.9)]" />
                  ) : (
                    <span className="absolute -bottom-1.5 left-1/2 right-1/2 h-[2px] bg-transparent rounded-full group-hover:left-0 group-hover:right-0 group-hover:bg-cyan-400/60 transition-all duration-200" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Primary Conversion Action & Mobile Controls */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA Button */}
            <button
              onClick={handleCtaClick}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs xl:text-sm font-semibold tracking-wide text-black bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-300 hover:from-cyan-300 hover:to-teal-300 shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_28px_rgba(6,182,212,0.6)] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Book an Agent Readiness Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-zinc-900/80 border border-white/10 text-slate-300 hover:text-white focus:outline-none active:scale-95 transition-transform lg:hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-[90vh] overflow-y-auto opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-3 pb-8 space-y-4 bg-black/95 backdrop-blur-2xl border-b border-cyan-500/20 mt-3 shadow-2xl">

          {/* Mobile Booking Header */}
          <div className="p-3.5 rounded-xl bg-gradient-to-r from-teal-950/70 via-slate-900 to-cyan-950/70 border border-cyan-400/30 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-[11px] font-bold uppercase text-white tracking-wider">Agent Readiness</p>
              </div>
              <p className="text-[11px] text-cyan-300 font-mono mt-0.5">4-Week Production Deploy</p>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleCtaClick();
              }}
              className="px-3 py-1.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black text-xs font-bold tracking-wide transition-colors"
            >
              Book Call
            </button>
          </div>

          {/* Navigation Links */}
          <div className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = isItemActive(item);
              const hasSubItems = item.subItems && item.subItems.length > 0;
              const isDropdownOpen = !!openMobileDropdowns[item.label];

              if (hasSubItems) {
                return (
                  <div key={item.label} className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => toggleMobileDropdown(item.label)}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-cyan-300 bg-cyan-500/10 border border-cyan-500/30'
                          : 'text-slate-200 hover:text-cyan-300 hover:bg-white/5'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isDropdownOpen ? 'rotate-180 text-cyan-400' : 'text-slate-400'
                        }`}
                      />
                    </button>

                    {isDropdownOpen && (
                      <div className="p-2 bg-zinc-900/70 rounded-lg mt-1 border border-zinc-800 space-y-1">
                        {item.subItems!.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="w-full text-left px-3 py-2 text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-white/5 rounded-md flex items-center justify-between"
                          >
                            <span className="truncate">{sub.label}</span>
                            {sub.badge && (
                              <span className="text-[9px] font-mono text-cyan-400 px-1 py-0.5 rounded bg-cyan-500/10">
                                {sub.badge}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-500/10 border border-cyan-500/30'
                      : 'text-slate-200 hover:text-cyan-300 hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(6,182,212,0.8)]" />}
                </Link>
              );
            })}
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
