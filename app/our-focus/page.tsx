'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FOCUS_ITEMS, FocusItem } from '@/lib/focus-data';
import { LiquidMetalButton } from '@/components/ui/liquid-metal-button';
import {
  Sparkles,
  ArrowRight,
  RotateCw,
  Check,
  ChevronRight,
  Layers,
  Search,
  ShieldCheck,
  Cpu,
  Terminal,
  Zap,
} from 'lucide-react';

export default function OurFocusPage() {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleCard = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const categories = [
    { id: 'all', label: 'All Domains (15)' },
    { id: 'cloud-infra', label: 'Cloud & Infrastructure', items: ['devops', 'networking', 'cloud', 'unix-linux'] },
    { id: 'software-ui', label: 'Software & UI', items: ['java', 'ui', 'qa-ba'] },
    { id: 'data-ai', label: 'Data & AI', items: ['database', 'bigdata', 'machine-learning', 'data-science'] },
    { id: 'enterprise', label: 'Enterprise & Middleware', items: ['sap', 'tibco', 'mulesoft', 'salesforce'] },
  ];

  const filteredItems = FOCUS_ITEMS.filter((item) => {
    // Filter by category
    if (activeFilter !== 'all') {
      const cat = categories.find((c) => c.id === activeFilter);
      if (!cat?.items?.includes(item.id)) return false;
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(query);
      const matchSubtitle = item.subtitle.toLowerCase().includes(query);
      const matchDescription = item.description.toLowerCase().includes(query);
      const matchTags = item.tags.some((t) => t.toLowerCase().includes(query));
      return matchTitle || matchSubtitle || matchDescription || matchTags;
    }

    return true;
  });

  // Handle hash scrolling on page load
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const targetId = window.location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // Temporarily flip the targeted card to draw attention
          setFlippedCards((prev) => ({ ...prev, [targetId]: true }));
        }
      }, 300);
    }
  }, []);

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Global Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="relative z-10 pt-24 pb-20 sm:pt-28 sm:pb-28">
        {/* Ambient Top Glow Accent Line */}
        <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none" />
        <div className="absolute top-40 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-96 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

          {/* ========================================================================= */}
          {/* TOP BREADCRUMB & HEADER BAR (EXACT CLOUDFEN SPECIFICATION)               */}
          {/* ========================================================================= */}
          <div className="mb-8 bg-zinc-950/80 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl backdrop-blur-md">
            {/* Top Accent Gradient Line */}
            <div className="h-[3px] w-full bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500" />

            <div className="px-6 sm:px-10 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-lg sm:text-2xl font-extrabold tracking-wider uppercase text-white">
                    OUR FOCUS
                  </h1>
                  <p className="text-xs sm:text-sm text-cyan-400/80 font-medium">
                    15 Core Technology Domains & Enterprise Frameworks
                  </p>
                </div>
              </div>

              {/* Breadcrumb Links */}
              <nav aria-label="Breadcrumb" className="text-xs font-medium tracking-wide text-slate-400 flex items-center gap-2">
                <Link href="/" className="hover:text-cyan-400 transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                <span className="text-cyan-300 font-semibold">Our Focus</span>
              </nav>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* CONTROLS: CATEGORY FILTER TABS & SEARCH BAR                               */}
          {/* ========================================================================= */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-zinc-950/60 p-4 rounded-2xl border border-zinc-800/80 backdrop-blur-md">
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    activeFilter === cat.id
                      ? 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.5)] font-bold'
                      : 'bg-zinc-900/90 text-slate-400 border border-zinc-800 hover:text-white hover:border-zinc-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Quick Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search domains or skills..."
                className="w-full pl-9 pr-8 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 15 3D FLIPPING DOMAIN CARDS GRID (IMAGE-DRIVEN WITH RICH VISUALS)         */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {filteredItems.map((item) => {
              const ItemIcon = item.icon;
              const isFlipped = !!flippedCards[item.id];

              return (
                <div
                  key={item.id}
                  id={item.id}
                  className="group relative h-[320px] sm:h-[340px] w-full [perspective:1200px] cursor-pointer scroll-mt-28"
                  onClick={() => toggleCard(item.id)}
                >
                  {/* 3D Flip Card Inner Container */}
                  <div
                    className={`relative w-full h-full duration-700 [transform-style:preserve-3d] transition-transform rounded-2xl shadow-2xl ${
                      isFlipped ? '[transform:rotateY(180deg)]' : 'group-hover:[transform:rotateY(180deg)]'
                    }`}
                  >

                    {/* ========================================================================= */}
                    {/* FRONT FACE: HIGH-RESOLUTION VIVID IMAGE DISPLAY WITH CLEAN TITLE BADGE    */}
                    {/* ========================================================================= */}
                    <div
                      className="absolute inset-0 w-full h-full rounded-2xl [backface-visibility:hidden] overflow-hidden border border-zinc-800/90 group-hover:border-cyan-400/80 shadow-[0_15px_35px_rgba(0,0,0,0.7)] flex flex-col justify-between p-6 transition-all duration-500 bg-zinc-950"
                    >
                      {/* High-Resolution Background Image with Smooth Hover Zoom */}
                      <div className="absolute inset-0 -z-10 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 brightness-[0.85] contrast-110"
                        />
                        {/* Elegant Multi-Stop Dark Gradient for Maximum Contrast */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/70" />
                        <div className="absolute inset-0 bg-cyan-950/15 mix-blend-overlay" />
                      </div>

                      {/* Top Bar: Glassmorphic Icon Badge & Domain Tag */}
                      <div className="flex items-center justify-between z-10">
                        <div className="p-2.5 rounded-xl bg-black/70 backdrop-blur-md border border-cyan-500/40 text-cyan-400 shadow-lg group-hover:border-cyan-400 group-hover:text-cyan-300 transition-colors">
                          <ItemIcon className="w-5 h-5" />
                        </div>

                        <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono font-semibold tracking-wider uppercase text-cyan-300 shadow-lg">
                          Focus Domain
                        </span>
                      </div>

                      {/* Bottom Section: Bold Minimal Domain Title & Flip Indicator */}
                      <div className="z-10 space-y-3">
                        <div className="space-y-1.5">
                          <h3 className="text-2xl sm:text-3xl font-black tracking-wider uppercase text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                            {item.title}
                          </h3>
                          <div className="w-10 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                        </div>

                        {/* Interactive Flip Bar */}
                        <div className="flex items-center justify-between pt-2.5 border-t border-white/15 text-xs text-slate-200">
                          <div className="flex items-center gap-2 font-semibold text-[11px] tracking-wide">
                            <RotateCw className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
                            <span>Hover or Tap to Flip</span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1.5 transition-transform" />
                        </div>
                      </div>
                    </div>

                    {/* ========================================================================= */}
                    {/* BACK FACE: HIGH-RESOLUTION IMAGE OVERLAY + SPECIFICATIONS & TECH STACK    */}
                    {/* ========================================================================= */}
                    <div
                      className="absolute inset-0 w-full h-full rounded-2xl [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden border border-cyan-500/50 bg-zinc-950 shadow-[0_15px_35px_rgba(0,0,0,0.9)] flex flex-col justify-between p-6 text-left"
                    >
                      {/* Background Image with Dark Glassmorphic Backdrop */}
                      <div className="absolute inset-0 -z-10 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-125 scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950/90 to-black/80 backdrop-blur-sm" />
                      </div>

                      {/* Back Header */}
                      <div className="space-y-1 z-10">
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-[10px] font-bold font-mono text-cyan-300 uppercase">
                            {item.title}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Expertise</span>
                        </div>
                        <p className="text-xs font-bold text-white uppercase tracking-tight line-clamp-1">
                          {item.subtitle}
                        </p>
                      </div>

                      {/* Key Highlights */}
                      <div className="space-y-1.5 py-1 z-10">
                        {item.highlights.slice(0, 3).map((hl, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-200">
                            <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span className="truncate font-medium">{hl}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technology Stack Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-800 z-10">
                        {item.tags.slice(0, 5).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md bg-zinc-900/90 border border-zinc-700/80 text-[10px] font-mono text-cyan-300 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                        {item.tags.length > 5 && (
                          <span className="px-2 py-0.5 rounded-md bg-zinc-900/90 border border-zinc-700/80 text-[10px] font-mono text-slate-400">
                            +{item.tags.length - 5}
                          </span>
                        )}
                      </div>

                      {/* Action CTA */}
                      <div className="pt-2 flex items-center justify-between z-10">
                        <Link
                          href="/contact"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 uppercase tracking-wider group/link"
                        >
                          <span>Consult Specialists</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                        </Link>

                        <span className="text-[10px] font-mono text-slate-500 uppercase">CloudFen</span>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* ========================================================================= */}
          {/* CONSULTATION & STAFFING CALL TO ACTION BANNER                             */}
          {/* ========================================================================= */}
          <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800/90 rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center space-y-6">
            <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

            <div className="max-w-2xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Enterprise Consulting & Staffing</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
                Need Dedicated Specialists for Your Architecture?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Whether deploying Kubernetes clusters, migrating to SAP S/4HANA, building autonomous ML pipelines, or hiring senior software engineers, our architects are ready to assist.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <LiquidMetalButton
                label="CONNECT WITH SPECIALISTS"
                href="/contact"
                icon={ArrowRight}
                viewMode="both"
              />
              <Link
                href="/services/it-staffing"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-slate-300 hover:text-white bg-zinc-900 border border-zinc-700 hover:border-zinc-500 transition-colors"
              >
                <span>EXPLORE IT STAFFING</span>
              </Link>
            </div>
          </div>

        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
