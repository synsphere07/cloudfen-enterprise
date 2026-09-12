'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Bot,
  Zap,
  ShieldCheck,
  Activity,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  TrendingUp,
  FileCheck2,
  ReceiptText,
  UserCheck,
  LineChart,
  RefreshCw,
  Gauge,
  Sliders,
  ChevronRight,
  Target,
  Rocket,
  Search,
} from 'lucide-react';
import { LiquidMetalButton } from '@/components/ui/liquid-metal-button';

interface AiAgentSolutionsProps {
  onOpenDemo?: () => void;
}

export const AiAgentSolutionsSection: React.FC<AiAgentSolutionsProps> = ({ onOpenDemo }) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleActionClick = () => {
    if (onOpenDemo) {
      onOpenDemo();
    } else {
      window.dispatchEvent(new CustomEvent('open-demo-modal'));
    }
  };

  return (
    <section
      id="ai-agents"
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#080a0c]/60 text-white overflow-hidden scroll-mt-14"
    >
      {/* Ambient background glows & technical grid overlays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,177,59,0.03)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ========================================================================= */}
        {/* SECTION HEADER & INTRO COPY                                               */}
        {/* ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 space-y-4">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/70 border border-amber-500/30 text-amber-300 text-xs font-mono font-semibold uppercase tracking-widest backdrop-blur-md shadow-[0_0_15px_rgba(255,177,59,0.15)]">
            <Bot className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>AI AGENT SOLUTIONS</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase leading-[1.08] text-white">
            From AI readiness to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400">
              agents that run the work.
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            CloudFen helps businesses identify high-value workflows, deploy production-ready AI agents, and operate them with the monitoring, evaluation, guardrails, and cost controls required for reliable automation.
          </p>

          {/* Visual Progression Indicator: DISCOVER → DEPLOY → OPERATE → SCALE */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono tracking-wider text-slate-400">
            <span className="px-3 py-1 rounded-md bg-[#111417]/90 border border-zinc-800 text-amber-300 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              DISCOVER
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <span className="px-3 py-1 rounded-md bg-[#111417]/90 border border-zinc-800 text-amber-300 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              DEPLOY
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <span className="px-3 py-1 rounded-md bg-[#111417]/90 border border-zinc-800 text-amber-300 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              OPERATE
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <span className="px-3 py-1 rounded-md bg-[#111417]/90 border border-zinc-800 text-amber-300 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              SCALE
            </span>
          </div>

          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 mx-auto mt-6 rounded-full" />
        </div>

        {/* ========================================================================= */}
        {/* 5 OFFERING CARDS (SOPHISTICATED 3+2 GRID)                                  */}
        {/* ========================================================================= */}
        <div className="space-y-8">

          {/* Top Row: Cards 01, 02, 03 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">

            {/* ------------------------------------------------------------------- */}
            {/* 01 — Agent Readiness Sprint (THE WEDGE - Entry Point)               */}
            {/* ------------------------------------------------------------------- */}
            <div
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative flex flex-col justify-between rounded-2xl bg-gradient-to-b from-[#111417] to-[#080a0c] border-2 border-amber-500/40 hover:border-amber-400 p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_12px_36px_rgba(255,177,59,0.2)] hover:-translate-y-1.5 group"
            >
              {/* Entry Point Subtle Accent Glow */}
              <div className="absolute -top-px left-10 right-10 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

              <div className="space-y-5">
                {/* Header: Number & Badge */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-amber-500/10 border border-amber-400/30 text-amber-300">
                    01
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-gradient-to-r from-amber-400 to-yellow-400 text-black shadow-[0_0_12px_rgba(255,177,59,0.5)]">
                    THE WEDGE
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide group-hover:text-amber-300 transition-colors">
                    Agent Readiness Sprint
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    A focused 4-week engagement to identify and launch one high-value AI workflow in production.
                  </p>
                </div>

                {/* Key Details List */}
                <div className="p-4 rounded-xl bg-black/40 border border-zinc-800/90 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="font-medium">4 weeks</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Fixed-price engagement</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>One workflow live in production</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Measured before/after</span>
                  </div>
                </div>

                {/* Positioning Highlight */}
                <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/20 text-xs text-amber-200/90 leading-relaxed">
                  <span className="font-semibold text-amber-300 block mb-0.5">Strategic Starting Point:</span>
                  &quot;This is the starting point: prove value quickly, establish the right workflow, and create a foundation for deeper automation.&quot;
                </div>
              </div>

              {/* Card Action */}
              <div className="pt-6 mt-4 border-t border-zinc-800/80">
                <button
                  type="button"
                  onClick={handleActionClick}
                  className="w-full py-3 px-4 rounded-xl font-medium text-xs sm:text-sm tracking-wide bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-black font-semibold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(255,177,59,0.3)] hover:shadow-[0_0_25px_rgba(255,177,59,0.5)] cursor-pointer"
                >
                  <span>Start with a readiness sprint</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* ------------------------------------------------------------------- */}
            {/* 02 — Agentic Sourcing Desk                                          */}
            {/* ------------------------------------------------------------------- */}
            <div
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative flex flex-col justify-between rounded-2xl bg-[#111417]/70 border border-zinc-800 hover:border-amber-500/50 p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,177,59,0.12)] hover:-translate-y-1.5 group"
            >
              <div className="space-y-5">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-zinc-800 border border-zinc-700 text-slate-300">
                    02
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-zinc-800/80 border border-zinc-700/80 text-slate-300">
                    Talent & Sourcing
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide group-hover:text-amber-300 transition-colors">
                    Agentic Sourcing Desk
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    AI-powered sourcing that produces qualified shortlists for every requirement.
                  </p>
                </div>

                {/* Key Details List */}
                <div className="p-4 rounded-xl bg-black/40 border border-zinc-800/90 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Qualified candidate shortlists</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Automated screening workflows</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Faster assessment and qualification</span>
                  </div>
                </div>

                {/* Reference/Proof Box (Clearly Labeled External Reference) */}
                <div className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800 text-xs text-slate-400 leading-relaxed">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-0.5">
                    Industry Reference Point:
                  </span>
                  Reference: Unilever screening agents — reported $1.3M in savings and 15-minute assessments.
                </div>
              </div>

              {/* Card Action */}
              <div className="pt-6 mt-4 border-t border-zinc-800/80">
                <button
                  type="button"
                  onClick={handleActionClick}
                  className="w-full py-3 px-4 rounded-xl font-medium text-xs sm:text-sm tracking-wide bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/40 text-slate-200 hover:text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Explore sourcing automation</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
              </div>
            </div>

            {/* ------------------------------------------------------------------- */}
            {/* 03 — Onboarding & Compliance Agent (THE MOAT)                       */}
            {/* ------------------------------------------------------------------- */}
            <div
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative flex flex-col justify-between rounded-2xl bg-gradient-to-b from-[#111417] to-[#080a0c] border-2 border-amber-500/40 hover:border-amber-400 p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_12px_36px_rgba(255,177,59,0.18)] hover:-translate-y-1.5 group"
            >
              {/* Moat Strategic Accent Glow */}
              <div className="absolute -top-px left-10 right-10 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

              <div className="space-y-5">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-amber-500/10 border border-amber-400/30 text-amber-300">
                    03
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-gradient-to-r from-amber-500 to-yellow-400 text-black shadow-[0_0_12px_rgba(255,177,59,0.5)]">
                    THE MOAT
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide group-hover:text-amber-300 transition-colors">
                    Onboarding & Compliance Agent
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Automate repetitive onboarding and compliance workflows while keeping every step structured, trackable, and controlled.
                  </p>
                </div>

                {/* Key Details List */}
                <div className="p-4 rounded-xl bg-black/40 border border-zinc-800/90 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Per onboarding completed</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Automated workflow execution</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Compliance checks</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Reduced manual coordination</span>
                  </div>
                </div>

                {/* Reference/Proof Box (Clearly Labeled External Reference) */}
                <div className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800 text-xs text-slate-400 leading-relaxed">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-amber-400 font-semibold block mb-0.5">
                    Industry Reference Point:
                  </span>
                  Reference: European retailer — reported 75% reduction in onboarding time; DeWinter replaced 3 onboarders.
                </div>
              </div>

              {/* Card Action */}
              <div className="pt-6 mt-4 border-t border-zinc-800/80">
                <button
                  type="button"
                  onClick={handleActionClick}
                  className="w-full py-3 px-4 rounded-xl font-medium text-xs sm:text-sm tracking-wide bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/40 hover:border-amber-400 text-amber-200 hover:text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Automate onboarding</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Row: Cards 04 & 05 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

            {/* ------------------------------------------------------------------- */}
            {/* 04 — Back-Office Operations Agent                                   */}
            {/* ------------------------------------------------------------------- */}
            <div
              onMouseEnter={() => setHoveredCard(4)}
              onMouseLeave={() => setHoveredCard(null)}
              className="lg:col-span-6 flex flex-col justify-between rounded-2xl bg-[#111417]/70 border border-zinc-800 hover:border-amber-500/50 p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,177,59,0.12)] hover:-translate-y-1.5 group"
            >
              <div className="space-y-5">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-zinc-800 border border-zinc-700 text-slate-300">
                    04
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-zinc-800/80 border border-zinc-700/80 text-slate-300">
                    Finance & Operations
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide group-hover:text-amber-300 transition-colors">
                    Back-Office Operations Agent
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Automate repetitive finance and contractor operations so teams spend less time processing and more time operating.
                  </p>
                </div>

                {/* Key Details List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-black/40 border border-zinc-800/90">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Per invoice</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Or per contractor per month</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Invoice and AP workflows</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Contractor operations</span>
                  </div>
                </div>

                {/* Reference/Proof Box (Clearly Labeled External Reference) */}
                <div className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800 text-xs text-slate-400 leading-relaxed">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-0.5">
                    Industry Reference Point:
                  </span>
                  Reference: AP automation — approximately $180K/year saved per 100-person team and 76% lower processing cost.
                </div>
              </div>

              {/* Card Action */}
              <div className="pt-6 mt-4 border-t border-zinc-800/80">
                <button
                  type="button"
                  onClick={handleActionClick}
                  className="w-full py-3 px-4 rounded-xl font-medium text-xs sm:text-sm tracking-wide bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/40 text-slate-200 hover:text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Automate back-office work</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
              </div>
            </div>

            {/* ------------------------------------------------------------------- */}
            {/* 05 — Agent Operations (THE ANNUITY - Recurring Value Layer)         */}
            {/* ------------------------------------------------------------------- */}
            <div
              onMouseEnter={() => setHoveredCard(5)}
              onMouseLeave={() => setHoveredCard(null)}
              className="lg:col-span-6 relative flex flex-col justify-between rounded-2xl bg-gradient-to-b from-[#111417] via-[#0d1013] to-[#080a0c] border-2 border-amber-400/40 hover:border-amber-300 p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_12px_36px_rgba(255,177,59,0.22)] hover:-translate-y-1.5 group"
            >
              {/* Recurring Value Glowing Accent */}
              <div className="absolute -top-px left-10 right-10 h-0.5 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />

              <div className="space-y-5">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-amber-500/10 border border-amber-400/30 text-amber-300">
                    05
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-gradient-to-r from-amber-400 to-yellow-400 text-black shadow-[0_0_15px_rgba(255,177,59,0.5)] flex items-center gap-1">
                    <Activity className="w-3 h-3" />
                    <span>THE ANNUITY</span>
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide group-hover:text-amber-300 transition-colors">
                    Agent Operations
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Keep deployed agents reliable, measurable, secure, and cost-efficient with ongoing managed operations.
                  </p>
                </div>

                {/* Key Details Grid (Multi-Item Managed Service Stack) */}
                <div className="p-4 rounded-xl bg-black/40 border border-zinc-800/90">
                  <p className="text-xs font-mono font-semibold text-amber-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin text-amber-400 [animation-duration:10s]" />
                    <span>Monthly Managed Service Stack:</span>
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-200">
                    <span className="px-2 py-1 rounded bg-zinc-800/60 border border-zinc-700/60 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      Monitoring
                    </span>
                    <span className="px-2 py-1 rounded bg-zinc-800/60 border border-zinc-700/60 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      Evaluations
                    </span>
                    <span className="px-2 py-1 rounded bg-zinc-800/60 border border-zinc-700/60 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      Guardrails
                    </span>
                    <span className="px-2 py-1 rounded bg-zinc-800/60 border border-zinc-700/60 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      Model-Cost Control
                    </span>
                    <span className="px-2 py-1 rounded bg-zinc-800/60 border border-zinc-700/60 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      Telemetry Reports
                    </span>
                    <span className="px-2 py-1 rounded bg-zinc-800/60 border border-zinc-700/60 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      Continuous Tuning
                    </span>
                  </div>
                </div>

                {/* Positioning Highlight */}
                <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/20 text-xs text-amber-200/90 leading-relaxed">
                  <span className="font-semibold text-amber-300 block mb-0.5">Recurring Enterprise Value:</span>
                  &quot;Attached to every build, Agent Operations turns one-time deployments into continuously managed AI systems.&quot;
                </div>
              </div>

              {/* Card Action */}
              <div className="pt-6 mt-4 border-t border-zinc-800/80">
                <button
                  type="button"
                  onClick={handleActionClick}
                  className="w-full py-3 px-4 rounded-xl font-medium text-xs sm:text-sm tracking-wide bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:brightness-110 text-black font-semibold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(255,177,59,0.3)] cursor-pointer"
                >
                  <span>Operate agents with CloudFen</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* BUSINESS MODEL VISUALIZATION (COMPACT WORKFLOW PROGRESSION)                */}
        {/* ========================================================================= */}
        <div className="mt-20 sm:mt-24 p-6 sm:p-10 rounded-2xl bg-[#080a0c]/85 border border-zinc-800/90 shadow-2xl relative overflow-hidden">
          {/* Subtle top border highlight */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

          <div className="max-w-5xl mx-auto space-y-8">

            {/* Title & Slogan */}
            <div className="text-center space-y-2">
              <div className="text-xs sm:text-sm font-mono tracking-widest text-amber-400 uppercase font-semibold">
                START SMALL → PROVE VALUE → DEPLOY AGENTS → MANAGE CONTINUOUSLY
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
                How Engagements Scale
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-slate-300">
                Start with one workflow. Expand into an operating layer for AI agents.
              </p>
            </div>

            {/* 4-Step Pipeline Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">

              {/* Step 1 */}
              <div className="p-4 rounded-xl bg-[#111417]/80 border border-amber-500/30 flex flex-col items-center text-center space-y-2 relative group hover:border-amber-400 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-300 font-bold font-mono text-sm">
                  01
                </div>
                <h4 className="text-sm font-bold text-white tracking-wide">
                  Agent Readiness Sprint
                </h4>
                <p className="text-xs text-slate-400 leading-normal">
                  Identify high-ROI workflow, set guardrails, and launch first agent in 4 weeks.
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-4 rounded-xl bg-[#111417]/80 border border-zinc-800 flex flex-col items-center text-center space-y-2 relative group hover:border-amber-400 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-slate-300 font-bold font-mono text-sm">
                  02
                </div>
                <h4 className="text-sm font-bold text-white tracking-wide">
                  Production Agent Build
                </h4>
                <p className="text-xs text-slate-400 leading-normal">
                  Deploy hardened enterprise integrations, tool-calling APIs, and security boundaries.
                </p>
              </div>

              {/* Step 3 */}
              <div className="p-4 rounded-xl bg-[#111417]/80 border border-amber-500/30 flex flex-col items-center text-center space-y-2 relative group hover:border-amber-400 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-300 font-bold font-mono text-sm">
                  03
                </div>
                <h4 className="text-sm font-bold text-white tracking-wide">
                  Agent Operations
                </h4>
                <p className="text-xs text-slate-400 leading-normal">
                  24/7 telemetry monitoring, automated evaluations, drift prevention, and cost governance.
                </p>
              </div>

              {/* Step 4 */}
              <div className="p-4 rounded-xl bg-[#111417]/80 border border-zinc-800 flex flex-col items-center text-center space-y-2 relative group hover:border-amber-400 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-slate-300 font-bold font-mono text-sm">
                  04
                </div>
                <h4 className="text-sm font-bold text-white tracking-wide">
                  Continuous Optimization
                </h4>
                <p className="text-xs text-slate-400 leading-normal">
                  Multi-agent federation, prompt & model refinement, and expanding to adjoining workflows.
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* FINAL CTA BLOCK                                                           */}
        {/* ========================================================================= */}
        <div className="mt-16 sm:mt-20 rounded-2xl bg-gradient-to-r from-[#111417] via-[#080a0c] to-[#111417] border border-amber-500/30 p-8 sm:p-12 text-center relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight">
              Ready to put an AI agent into production?
            </h3>

            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed">
              Start with one workflow, measure the impact, and build from there.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <LiquidMetalButton
                label="Start an Agent Readiness Sprint"
                onClick={handleActionClick}
                icon={ArrowRight}
                viewMode="both"
              />

              <Link
                href="/contact"
                className="px-7 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-amber-400/40 backdrop-blur-md transition-all duration-300"
              >
                Talk to CloudFen
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AiAgentSolutionsSection;
