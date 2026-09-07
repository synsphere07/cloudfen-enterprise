'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { INDUSTRIES_DATA } from '@/lib/industries-data';
import { LiquidMetalButton } from '@/components/ui/liquid-metal-button';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check,
  ChevronRight,
  Search,
  Building2,
  TrendingUp,
  Cpu,
  Layers,
  CheckCircle2,
} from 'lucide-react';

export default function IndustriesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');

  const industryTags = [
    { id: 'all', label: 'All Industries (5)' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'financial-services', label: 'Financial Services' },
    { id: 'retail', label: 'Retail & Commerce' },
    { id: 'telecommunications', label: 'Telecommunications' },
    { id: 'manufacturing', label: 'Smart Manufacturing' },
  ];

  const filteredIndustries = INDUSTRIES_DATA.filter((industry) => {
    if (selectedTag !== 'all' && industry.id !== selectedTag) {
      return false;
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = industry.title.toLowerCase().includes(q);
      const matchFullTitle = industry.fullTitle.toLowerCase().includes(q);
      const matchSubtitle = industry.subtitle.toLowerCase().includes(q);
      const matchDesc = industry.shortDescription.toLowerCase().includes(q);
      const matchTech = industry.techStack.some((t) => t.toLowerCase().includes(q));
      const matchDeliverables = industry.deliverables.some((d) => d.title.toLowerCase().includes(q) || d.desc.toLowerCase().includes(q));
      return matchTitle || matchFullTitle || matchSubtitle || matchDesc || matchTech || matchDeliverables;
    }

    return true;
  });

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
          <div className="mb-8 sm:mb-12 bg-zinc-950/80 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl backdrop-blur-md">
            {/* Top Accent Gradient Line */}
            <div className="h-[3px] w-full bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500" />

            <div className="px-6 sm:px-10 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-lg sm:text-2xl font-extrabold tracking-wider uppercase text-white">
                    OUR INDUSTRIES
                  </h1>
                  <p className="text-xs sm:text-sm text-cyan-400/80 font-medium">
                    Specialized Vertical Domain Solutions & Enterprise Architecture
                  </p>
                </div>
              </div>

              {/* Breadcrumb Links */}
              <nav aria-label="Breadcrumb" className="text-xs font-medium tracking-wide text-slate-400 flex items-center gap-2">
                <Link href="/" className="hover:text-cyan-400 transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                <span className="text-cyan-300 font-semibold">Industries</span>
              </nav>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* HERO BANNER & DOMAIN OVERVIEW                                             */}
          {/* ========================================================================= */}
          <div className="bg-zinc-950 border border-zinc-800/90 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-10 lg:p-12 mb-12 relative">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>5 Dedicated Vertical Domain Practices</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-white">
                  Domain-Focused Engineering & High-Resilience Cloud Architecture
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  Every industry possesses unique regulatory frameworks, latency tolerances, security postures, and architectural constraints. CloudFen bridges specialized domain requirements with modern multi-cloud engineering, AI platform development, and resilient DevOps.
                </p>

                {/* Key Metrics / Highlights */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-center">
                    <p className="text-lg sm:text-xl font-extrabold text-cyan-400">5</p>
                    <p className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">Industry Verticals</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-center">
                    <p className="text-lg sm:text-xl font-extrabold text-teal-400">100%</p>
                    <p className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">Compliance Ready</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-center">
                    <p className="text-lg sm:text-xl font-extrabold text-indigo-400">99.999%</p>
                    <p className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">Enterprise SLA</p>
                  </div>
                </div>
              </div>

              {/* Right Side Quick Search & Interactive Tip */}
              <div className="lg:col-span-4 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300">
                  <Search className="w-4 h-4 text-cyan-400" />
                  <span>Search Industry Stacks</span>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by tech or domain (e.g. HIPAA, PCI-DSS, 5G, IIoT)..."
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
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

                <div className="p-3 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-[11px] text-cyan-300 flex items-start gap-2">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    Explore comprehensive vertical architecture, regulatory compliance, and deliverables in each industry hub.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* CATEGORY FILTER TABS                                                     */}
          {/* ========================================================================= */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {industryTags.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTag(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedTag === tab.id
                    ? 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.5)] font-bold'
                    : 'bg-zinc-900/80 text-slate-400 border border-zinc-800 hover:text-white hover:border-zinc-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* ========================================================================= */}
          {/* 5 INDUSTRIES SHOWCASE CARDS (RICH DETAILED LAYOUT)                        */}
          {/* ========================================================================= */}
          <div className="space-y-12 mb-16">
            {filteredIndustries.map((industry, index) => {
              const IndustryIcon = industry.icon;
              const industryUrl = `/industries/${industry.slug}`;
              const isEven = index % 2 === 1;

              return (
                <div
                  key={industry.id}
                  id={industry.id}
                  className="bg-zinc-950 border border-zinc-800/90 hover:border-cyan-500/50 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-[0_12px_40px_rgba(6,182,212,0.15)] group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

                    {/* Image Showcase Column */}
                    <div className={`lg:col-span-5 relative min-h-[320px] lg:min-h-full bg-zinc-900 overflow-hidden ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <img
                        src={industry.img1}
                        alt={industry.alt1}
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-90 contrast-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-zinc-950/90" />

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
                        <IndustryIcon className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{industry.tag}</span>
                      </div>

                      <div className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-zinc-900/80 backdrop-blur-md border border-zinc-700 text-slate-300 font-mono text-xs">
                        0{index + 1}
                      </div>

                      {/* Bottom Thumbnail Preview Bar */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                        {industry.img2 && (
                          <div className="relative w-16 h-12 rounded-lg overflow-hidden border border-zinc-700/80 shadow-lg">
                            <img src={industry.img2} alt={industry.alt2} className="w-full h-full object-cover" />
                          </div>
                        )}
                        {industry.img3 && (
                          <div className="relative w-16 h-12 rounded-lg overflow-hidden border border-zinc-700/80 shadow-lg">
                            <img src={industry.img3} alt={industry.alt3 || industry.title} className="w-full h-full object-cover" />
                          </div>
                        )}
                        {industry.img4 && (
                          <div className="relative w-16 h-12 rounded-lg overflow-hidden border border-zinc-700/80 shadow-lg">
                            <img src={industry.img4} alt={industry.alt4 || industry.title} className="w-full h-full object-cover" />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content Details Column */}
                    <div className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                            Enterprise Practice
                          </span>
                          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase text-white group-hover:text-cyan-300 transition-colors">
                            {industry.fullTitle}
                          </h3>
                          <p className="text-xs sm:text-sm text-cyan-400/90 font-medium">
                            {industry.subtitle}
                          </p>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                          {industry.shortDescription}
                        </p>

                        {/* Industry Metrics Bar */}
                        <div className="grid grid-cols-3 gap-2.5 pt-1">
                          {industry.stats.map((st, sIdx) => (
                            <div key={sIdx} className="p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800 text-center">
                              <p className="text-sm sm:text-base font-extrabold text-cyan-300 font-mono">{st.value}</p>
                              <p className="text-[10px] text-slate-400 uppercase truncate font-medium">{st.label}</p>
                            </div>
                          ))}
                        </div>

                        {/* Deliverables Highlights (Top 3) */}
                        <div className="space-y-2 pt-2">
                          <p className="text-xs font-bold uppercase tracking-wider text-slate-200">
                            Key Solution Deliverables:
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {industry.deliverables.slice(0, 4).map((deliv, dIdx) => (
                              <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                                <span className="truncate">{deliv.title}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="pt-2 border-t border-zinc-800 flex flex-wrap gap-1.5">
                          {industry.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-[11px] font-mono text-cyan-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Action CTA */}
                      <div className="pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <LiquidMetalButton
                          label={`Explore ${industry.title}`}
                          href={industryUrl}
                          icon={ArrowRight}
                          viewMode="both"
                        />

                        <Link
                          href="/contact"
                          className="text-xs text-slate-400 hover:text-cyan-300 font-semibold uppercase tracking-wider flex items-center gap-1 transition-colors"
                        >
                          <span>Request Architecture Audit</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
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
                <span>Enterprise Industry Modernization</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
                Ready to Architect Your Next-Gen Vertical Platform?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Schedule a confidential architecture design session with CloudFen senior industry practice directors, cloud architects, and security officers.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <LiquidMetalButton
                label="CONSULT INDUSTRY SPECIALISTS"
                href="/contact"
                icon={ArrowRight}
                viewMode="both"
              />
              <Link
                href="/services/it-staffing"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-xs sm:text-sm text-slate-300 hover:text-white bg-zinc-900 border border-zinc-700 hover:border-zinc-500 transition-colors"
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
