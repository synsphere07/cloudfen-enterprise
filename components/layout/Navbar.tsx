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
  PhoneCall,
  Mail,
  Sparkles,
} from 'lucide-react';

interface NavbarProps {
  onOpenDemo?: (initialSpend?: number) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState<Record<string, boolean>>({});
  const [activeSection, setActiveSection] = useState('home');
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

          // Scroll-spy active section detection only on home page
          if (pathname === '/') {
            const sectionIds = ['home', 'about-us', 'ai-agents', 'services', 'careers', 'contact'];
            const scrollPosition = window.scrollY + 140;

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

            if (window.scrollY < 100) {
              setActiveSection('home');
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
    const sectionId = item.href.replace('/#', '').replace('#', '');
    if (item.label.toLowerCase() === 'services') {
      return (pathname === '/' && activeSection === 'services') || pathname.startsWith('/services');
    }
    if (item.label.toLowerCase() === 'our focus') {
      return pathname === '/our-focus' || pathname.startsWith('/our-focus');
    }
    if (item.label.toLowerCase() === 'industries') {
      return pathname === '/industries' || pathname.startsWith('/industries');
    }
    if (item.label.toLowerCase() === 'contact') {
      return pathname === '/contact';
    }
    return pathname === '/' && (activeSection === sectionId || (sectionId === 'home' && activeSection === ''));
  };

  const handleNavClick = (href: string, sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);

    if (pathname === '/' && href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/85 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3'
          : 'bg-transparent border-b border-white/5 py-4'
      }`}
    >
      {/* Ambient Top Glow Accent Line */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between min-h-[44px]">

          {/* Left: Brand Identity & Logo */}
          <Link
            href="/"
            onClick={() => setActiveSection('home')}
            className="flex items-center group outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 active:outline-none shrink-0 cursor-pointer select-none"
            aria-label="CloudFen - Digital Architecture Platform"
          >
            <CloudFenLogo
              variant="inline"
              size="md"
              showSubtitle={true}
              subtitle="DIGITAL ARCHITECTURE PLATFORM"
            />
          </Link>

          {/* Navigation Links with Dropdowns */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 whitespace-nowrap">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace('/#', '').replace('#', '');
              const isActive = isItemActive(item);
              const hasSubItems = item.subItems && item.subItems.length > 0;
              const isTwoColumn = hasSubItems && item.subItems!.length > 8;
              const triggerHref = item.href.startsWith('/#')
                ? (pathname === '/' ? `#${sectionId}` : item.href)
                : item.href;

              if (hasSubItems) {
                return (
                  <div key={item.label} className="relative group/dropdown py-2">
                    {/* Main Nav Link with Dropdown */}
                    <Link
                      href={triggerHref}
                      onClick={() => handleNavClick(item.href, sectionId)}
                      className={`relative py-1 text-[13px] xl:text-sm font-semibold transition-colors duration-200 flex items-center gap-1.5 cursor-pointer select-none whitespace-nowrap ${
                        isActive
                          ? 'text-white'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      <span className="uppercase tracking-wider whitespace-nowrap">{item.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover/dropdown:text-teal-400 group-hover/dropdown:rotate-180 transition-all duration-200 shrink-0" />

                      {/* Underline Indicator */}
                      {isActive ? (
                        <span className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.9)] transition-all duration-300" />
                      ) : (
                        <span className="absolute -bottom-1.5 left-1/2 right-1/2 h-[2px] bg-cyan-400/0 rounded-full group-hover/dropdown:left-0 group-hover/dropdown:right-0 group-hover/dropdown:bg-cyan-400/60 transition-all duration-200" />
                      )}
                    </Link>

                    {/* Dropdown Menu (Centered below trigger) */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 opacity-0 translate-y-2 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:pointer-events-auto transition-all duration-200 ease-out z-50 ${
                        isTwoColumn ? 'w-[480px]' : 'min-w-[240px] w-auto'
                      }`}
                    >
                      {/* Teal Accent Bar on top */}
                      <div className="h-[3px] w-full bg-gradient-to-r from-teal-400 to-cyan-400 rounded-t-sm shadow-[0_0_10px_rgba(20,184,166,0.8)]" />

                      <div className="bg-[#18181b] border-x border-b border-zinc-800 shadow-[0_15px_40px_rgba(0,0,0,0.85)] rounded-b-lg overflow-hidden py-1">
                        {isTwoColumn ? (
                          <div className="grid grid-cols-2 divide-x divide-zinc-800/40">
                            <div className="divide-y divide-zinc-800/40">
                              {item.subItems!.slice(0, Math.ceil(item.subItems!.length / 2)).map((sub) => {
                                const isCurrentSubpage = pathname === sub.href;
                                return (
                                  <Link
                                    key={sub.label}
                                    href={sub.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block px-4 py-2.5 text-xs font-semibold tracking-wider uppercase transition-colors duration-150 border-l-2 cursor-pointer whitespace-nowrap ${
                                      isCurrentSubpage
                                        ? 'text-cyan-300 bg-zinc-800/90 border-cyan-400'
                                        : 'text-slate-300 hover:text-white hover:bg-zinc-800/90 border-transparent hover:border-teal-400'
                                    }`}
                                  >
                                    <span>{sub.label}</span>
                                  </Link>
                                );
                              })}
                            </div>
                            <div className="divide-y divide-zinc-800/40">
                              {item.subItems!.slice(Math.ceil(item.subItems!.length / 2)).map((sub) => {
                                const isCurrentSubpage = pathname === sub.href;
                                return (
                                  <Link
                                    key={sub.label}
                                    href={sub.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block px-4 py-2.5 text-xs font-semibold tracking-wider uppercase transition-colors duration-150 border-l-2 cursor-pointer whitespace-nowrap ${
                                      isCurrentSubpage
                                        ? 'text-cyan-300 bg-zinc-800/90 border-cyan-400'
                                        : 'text-slate-300 hover:text-white hover:bg-zinc-800/90 border-transparent hover:border-teal-400'
                                    }`}
                                  >
                                    <span>{sub.label}</span>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        ) : (
                          <div className="divide-y divide-zinc-800/40">
                            {item.subItems!.map((sub) => {
                              const isCurrentSubpage = pathname === sub.href;
                              return (
                                <Link
                                  key={sub.label}
                                  href={sub.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className={`block px-5 py-3 text-xs font-semibold tracking-wider uppercase transition-colors duration-150 border-l-2 cursor-pointer whitespace-nowrap ${
                                    isCurrentSubpage
                                      ? 'text-cyan-300 bg-zinc-800/90 border-cyan-400'
                                      : 'text-slate-300 hover:text-white hover:bg-zinc-800/90 border-transparent hover:border-teal-400'
                                  }`}
                                >
                                  <span>{sub.label}</span>
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href.startsWith('/#') && pathname === '/' ? item.href.replace('/', '') : item.href}
                  onClick={() => handleNavClick(item.href, sectionId)}
                  className={`relative py-1 text-[13px] xl:text-sm font-semibold transition-colors duration-200 group uppercase tracking-wider whitespace-nowrap ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span className="whitespace-nowrap">{item.label}</span>
                  {/* Cyan underline indicator for active section */}
                  {isActive ? (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.9)] transition-all duration-300" />
                  ) : (
                    <span className="absolute -bottom-1.5 left-1/2 right-1/2 h-[2px] bg-cyan-400/0 rounded-full group-hover:left-0 group-hover:right-0 group-hover:bg-cyan-400/60 transition-all duration-200" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Right Controls: Live Status & Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden z-20">
            <Link
              href="/contact"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-[11px] font-semibold tracking-wider uppercase active:scale-95 transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden xs:inline">Contact</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-zinc-900/80 border border-white/20 text-slate-300 hover:text-white focus:outline-none active:scale-95 transition-transform"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile App Drawer Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-[88vh] overflow-y-auto opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-3 pb-8 space-y-4 bg-black/95 backdrop-blur-2xl border-b border-cyan-500/20 mt-3 shadow-2xl">

          {/* Quick Dispatch Call Banner */}
          <div className="p-3 rounded-xl bg-gradient-to-r from-teal-950/70 to-cyan-950/70 border border-cyan-400/30 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <p className="text-[11px] font-bold uppercase text-white tracking-wider">Enterprise Dispatch</p>
                <p className="text-[10px] text-cyan-300 font-mono">+1 (770) 574-6149</p>
              </div>
            </div>
            <a
              href="tel:+17705746149"
              className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black text-[11px] font-bold uppercase tracking-wider transition-colors"
            >
              Call
            </a>
          </div>

          {/* Mobile Nav Links */}
          <div className="grid grid-cols-1 gap-1">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace('/#', '').replace('#', '');
              const isActive = isItemActive(item);
              const hasSubItems = item.subItems && item.subItems.length > 0;
              const isDropdownOpen = !!openMobileDropdowns[item.label];
              const isTwoColumn = hasSubItems && item.subItems!.length > 8;

              if (hasSubItems) {
                return (
                  <div key={item.label} className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => toggleMobileDropdown(item.label)}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors uppercase ${
                        isActive
                          ? 'text-cyan-300 bg-cyan-500/10 border border-cyan-500/30'
                          : 'text-slate-200 hover:text-cyan-300 hover:bg-white/10'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isDropdownOpen ? 'rotate-180 text-cyan-400' : 'text-slate-400'
                        }`}
                      />
                    </button>

                    {/* Collapsible Mobile Sub-Menu */}
                    {isDropdownOpen && (
                      <div className={`p-2 bg-zinc-900/60 rounded-lg mt-1 border border-zinc-800 ${
                        isTwoColumn ? 'grid grid-cols-2 gap-1' : 'space-y-1'
                      }`}>
                        {item.subItems!.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => {
                              setMobileMenuOpen(false);
                            }}
                            className="w-full text-left px-2.5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-cyan-300 hover:bg-white/5 rounded-md flex items-center gap-1.5 truncate"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                            <span className="truncate">{sub.label}</span>
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
                  href={item.href.startsWith('/#') && pathname === '/' ? item.href.replace('/', '') : item.href}
                  onClick={() => {
                    handleNavClick(item.href, sectionId);
                  }}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors uppercase ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-500/10 border border-cyan-500/30'
                      : 'text-slate-200 hover:text-cyan-300 hover:bg-white/10'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(6,182,212,0.8)]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Quick Email & Address Footer inside Drawer */}
          <div className="pt-2 border-t border-zinc-800/80 space-y-2">
            <a
              href="mailto:info@cloudfen.com"
              className="flex items-center gap-2 text-xs text-slate-400 hover:text-cyan-300 transition-colors px-2 py-1"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>info@cloudfen.com</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
