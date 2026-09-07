'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Check,
} from 'lucide-react';
import { INDUSTRIES_DATA } from '@/lib/industries-data';

interface IndustriesSectionProps {
  onOpenDemo?: () => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = () => {
  return (
    <section
      id="industries"
      className="relative w-full py-20 sm:py-28 bg-black text-white overflow-hidden scroll-mt-14"
    >
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Vertical Domain Expertise</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase text-white">
            INDUSTRIES
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 font-normal">
            Domain-focused engineering & cloud architecture solutions.
          </p>
          <div className="w-16 h-1 bg-cyan-400 mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
        </div>

        {/* 5 Industries Grid: 3 items in first row, 2 centered in second row (or 3-col/2-col responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES_DATA.map((industry, index) => {
            const IndustryIcon = industry.icon;
            const industryUrl = `/industries/${industry.slug}`;
            const isLastTwoOnDesktop = index >= 3;

            return (
              <div
                key={industry.id}
                className={`group flex flex-col bg-zinc-950 border border-zinc-800/90 hover:border-cyan-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_12px_35px_rgba(6,182,212,0.18)] hover:-translate-y-1.5 ${
                  isLastTwoOnDesktop ? 'lg:col-span-1' : ''
                }`}
              >
                {/* Top Image Showcase */}
                <Link href={industryUrl} className="relative w-full h-56 sm:h-60 overflow-hidden bg-zinc-900 block">
                  <img
                    src={industry.img1}
                    alt={industry.alt1}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
                    <IndustryIcon className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{industry.tag}</span>
                  </div>

                  {/* Top Right Counter */}
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-zinc-900/80 backdrop-blur-md border border-zinc-700 text-slate-300 font-mono text-xs">
                    0{index + 1}
                  </div>
                </Link>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Header */}
                    <div>
                      <Link href={industryUrl} className="block">
                        <h3 className="text-xl font-bold tracking-wider uppercase text-white group-hover:text-cyan-300 transition-colors">
                          {industry.title}
                        </h3>
                      </Link>
                      <p className="text-xs text-cyan-400/90 font-medium mt-1">
                        {industry.subtitle}
                      </p>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-slate-300/85 leading-relaxed">
                      {industry.shortDescription}
                    </p>

                    {/* Deliverables Preview (Top 2 items) */}
                    <div className="space-y-1.5 pt-1">
                      {industry.deliverables.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span className="truncate">{item.title}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {industry.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-cyan-300/90"
                        >
                          {tech}
                        </span>
                      ))}
                      {industry.techStack.length > 4 && (
                        <span className="px-2 py-0.5 rounded bg-zinc-900/50 border border-zinc-800/50 text-[10px] font-mono text-slate-400">
                          +{industry.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom: Stats + Action Button */}
                  <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-4">
                    <div className="text-left">
                      <span className="text-base font-extrabold text-cyan-400 block">
                        {industry.stats[0]?.value}
                      </span>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                        {industry.stats[0]?.label}
                      </span>
                    </div>

                    <Link
                      href={industryUrl}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-xs font-semibold text-cyan-300 hover:text-white transition-all group/btn"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform text-cyan-400" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global CTA Banner at bottom of Industries */}
        <div className="mt-16 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-cyan-500/30 rounded-2xl p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-2 text-center md:text-left relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Need Custom Enterprise Architecture?</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold uppercase text-white">
              Tailored Architecture for Your Vertical
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Our engineering team builds compliance-ready, highly available distributed platforms specific to your regulatory and operational requirements.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_28px_rgba(6,182,212,0.7)] transition-all transform hover:-translate-y-0.5"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IndustriesSection;
