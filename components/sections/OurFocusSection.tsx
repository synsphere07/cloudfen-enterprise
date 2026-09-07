'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  RotateCw,
  Check,
  Layers,
} from 'lucide-react';
import { FOCUS_ITEMS, FocusItem } from '@/lib/focus-data';

interface OurFocusSectionProps {
  onOpenDemo?: () => void;
}

export const OurFocusSection: React.FC<OurFocusSectionProps> = () => {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const [activeFilter, setActiveFilter] = useState<string>('all');

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
    if (activeFilter === 'all') return true;
    const cat = categories.find((c) => c.id === activeFilter);
    return cat?.items?.includes(item.id);
  });

  return (
    <section
      id="our-focus"
      className="relative w-full py-20 sm:py-28 bg-black text-white overflow-hidden scroll-mt-14"
    >
      {/* Background ambient accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header (Matching CloudFen Core Design) */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Technical Competencies</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase text-white">
            OUR FOCUS
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 font-normal">
            Specialized Technology Domains & Enterprise Frameworks.
          </p>
          <div className="w-16 h-1 bg-cyan-400 mx-auto mt-4 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.5)] font-bold'
                  : 'bg-zinc-900/80 text-slate-400 border border-zinc-800 hover:text-white hover:border-zinc-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 15 3D Flipping Cards Grid (3 Columns on Desktop, alternating Teal & Charcoal Grey) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => {
            const ItemIcon = item.icon;
            const isFlipped = !!flippedCards[item.id];
            const isTeal = item.theme === 'teal';

            return (
              <div
                key={item.id}
                className="group relative h-[280px] sm:h-[300px] w-full [perspective:1200px] cursor-pointer"
                onClick={() => toggleCard(item.id)}
              >
                {/* 3D Flip Card Inner Container */}
                <div
                  className={`relative w-full h-full duration-700 [transform-style:preserve-3d] transition-transform rounded-2xl shadow-xl ${
                    isFlipped ? '[transform:rotateY(180deg)]' : 'group-hover:[transform:rotateY(180deg)]'
                  }`}
                >

                  {/* ========================================================================= */}
                  {/* FRONT FACE (EXACT MATCH TO CLOUDFEN SCREENSHOT: BOLD TEAL / GREY CHANGER) */}
                  {/* ========================================================================= */}
                  <div
                    className={`absolute inset-0 w-full h-full rounded-2xl [backface-visibility:hidden] flex flex-col justify-between p-7 border transition-all duration-300 ${
                      isTeal
                        ? 'bg-gradient-to-br from-[#003844] via-[#004856] to-[#002f3a] border-teal-500/40 hover:border-cyan-400 shadow-[0_10px_30px_rgba(0,56,68,0.4)]'
                        : 'bg-gradient-to-br from-[#3f3f46] via-[#48484f] to-[#34343a] border-zinc-600/50 hover:border-slate-400 shadow-[0_10px_30px_rgba(63,63,70,0.3)]'
                    }`}
                  >
                    {/* Top Bar: Domain Icon & Subtle Glow Pill */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`p-2.5 rounded-xl border flex items-center justify-center ${
                          isTeal
                            ? 'bg-teal-950/60 border-teal-400/30 text-teal-300'
                            : 'bg-zinc-800/80 border-zinc-500/30 text-slate-200'
                        }`}
                      >
                        <ItemIcon className="w-5 h-5" />
                      </div>

                      <span className="text-[11px] font-mono tracking-wider uppercase opacity-60 text-slate-300">
                        Focus Domain
                      </span>
                    </div>

                    {/* Center: Exact Bold Uppercase Title from Screenshot */}
                    <div className="text-center my-auto space-y-2">
                      <h3 className="text-2xl sm:text-3xl font-black tracking-wider uppercase text-white drop-shadow-md">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-200/80 font-medium line-clamp-1">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Bottom: Interactive Flip Indicator */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs text-slate-300/80">
                      <div className="flex items-center gap-1.5 font-medium">
                        <RotateCw className="w-3.5 h-3.5 text-cyan-300 animate-spin-slow" />
                        <span className="text-[11px]">Hover or Tap to Flip</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-cyan-300 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* ========================================================================= */}
                  {/* BACK FACE: HIGH-RESOLUTION IMAGE OVERLAY + EXPERTISE & FRAMEWORKS          */}
                  {/* ========================================================================= */}
                  <div
                    className="absolute inset-0 w-full h-full rounded-2xl [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden border border-cyan-500/40 bg-zinc-950 shadow-2xl flex flex-col justify-between p-5 text-left"
                  >
                    {/* Background Image with Dark Gradient Mask */}
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-125 scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950/90 to-black/70" />
                    </div>

                    {/* Back Header */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-cyan-500/20 border border-cyan-500/40 text-[10px] font-bold font-mono text-cyan-300 uppercase">
                          {item.title}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">Expertise</span>
                      </div>
                      <p className="text-xs font-bold text-white uppercase tracking-tight">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Detailed Description */}
                    <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-1 py-1">
                      {item.highlights.slice(0, 2).map((hl, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-200">
                          <Check className="w-3 h-3 text-cyan-400 shrink-0" />
                          <span className="truncate">{hl}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technology Stack Tags */}
                    <div className="flex flex-wrap gap-1 pt-1 border-t border-zinc-800">
                      {item.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-1.5 py-0.5 rounded bg-zinc-900/90 border border-zinc-700 text-[10px] font-mono text-cyan-300"
                        >
                          {tag}
                        </span>
                      ))}
                      {item.tags.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded bg-zinc-900/90 border border-zinc-700 text-[10px] font-mono text-slate-400">
                          +{item.tags.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Action CTA */}
                    <div className="pt-2 flex items-center justify-between">
                      <Link
                        href="/#contact"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-cyan-400 hover:text-cyan-300 uppercase tracking-wider"
                      >
                        <span>Consult Specialists</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>

                      <span className="text-[10px] font-mono text-slate-500">CloudFen</span>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default OurFocusSection;
