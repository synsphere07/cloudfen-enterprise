'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Database,
  Layers,
  Activity,
  Zap,
  TrendingUp,
  FileCheck2,
  Users,
  Building2,
  Receipt,
  Play,
  Clock,
  Gauge,
  CheckCircle,
} from 'lucide-react';

interface EnterpriseHeroProps {
  onOpenDemo?: () => void;
}

export const EnterpriseHero: React.FC<EnterpriseHeroProps> = ({ onOpenDemo }) => {
  const [activeStep, setActiveStep] = useState(0);

  const workflowSteps = [
    {
      id: 'request',
      label: 'Human Request',
      sub: 'Email, Ticket, API, Webhook',
      icon: Users,
      badge: 'Step 01',
      status: 'Intake Received',
    },
    {
      id: 'agent',
      label: 'CloudFen AI Agent',
      sub: 'Reasoning & Orchestration',
      icon: Cpu,
      badge: 'Step 02',
      status: 'Context Parsed',
    },
    {
      id: 'tools',
      label: 'Tools / Systems',
      sub: 'HRIS, ATS, ERP, DBs, AP',
      icon: Database,
      badge: 'Step 03',
      status: 'Multi-system Query',
    },
    {
      id: 'decision',
      label: 'Decision & Guardrails',
      sub: 'Deterministic Policy Evals',
      icon: ShieldCheck,
      badge: 'Step 04',
      status: '100% Policy Match',
    },
    {
      id: 'action',
      label: 'Action Execution',
      sub: 'Writeback & Dispatch',
      icon: Zap,
      badge: 'Step 05',
      status: 'Task Completed',
    },
    {
      id: 'measurement',
      label: 'Measurement & Evals',
      sub: 'Latency, Cost, Accuracy Telemetry',
      icon: Activity,
      badge: 'Step 06',
      status: 'Telemetry Logged',
    },
  ];

  // Auto-cycle through the workflow visualization nodes
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowSteps.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [workflowSteps.length]);

  const handleCta = () => {
    if (onOpenDemo) {
      onOpenDemo();
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background radial glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-br from-cyan-500/10 via-teal-500/5 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Core Positioning, Headline, CTAs, Trust Statement (7 Cols) */}
          <div className="lg:col-span-7 space-y-7 text-left">

            {/* Live Enterprise Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Production AI Agents for Enterprise</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                From AI experiments to{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
                  production-ready agents.
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-slate-300 tracking-tight">
                Automate the workflows that keep your business moving.
              </p>
            </div>

            {/* Body Description */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              CloudFen designs, deploys, and operates AI agents that handle real enterprise workflows — from candidate sourcing and employee onboarding to high-volume back-office operations.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={handleCta}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-sm sm:text-base font-bold tracking-wide text-black bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-300 hover:from-cyan-300 hover:to-teal-300 shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.65)] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Book an Agent Readiness Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#solutions"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm sm:text-base font-semibold tracking-wide text-slate-200 bg-zinc-900/80 hover:bg-zinc-800 border border-slate-700/80 hover:border-cyan-400/50 hover:text-white transition-all duration-200"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400" />
              </a>
            </div>

            {/* Trust Statement */}
            <div className="pt-4 border-t border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                </div>
                <p className="text-sm font-semibold text-slate-200 tracking-tight">
                  One workflow. Four weeks. Measurable before-and-after results.
                </p>
              </div>

              {/* Enterprise Guarantee Badges */}
              <div className="grid grid-cols-3 gap-3 mt-4 text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  <span>Fixed-Price Sprint</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Deterministic Evals</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>Enterprise Security</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Abstract Enterprise AI Workflow Diagram (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-[#121620]/90 to-[#0b0e14]/95 border border-cyan-500/30 p-5 sm:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.9)] backdrop-blur-xl">

              {/* Card Header & Live Status */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-200">
                    Enterprise Agent Pipeline
                  </span>
                </div>
                <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  Active Runtime: v4.2
                </div>
              </div>

              {/* Workflow Diagram Nodes */}
              <div className="py-4 space-y-2.5 relative">
                {/* Vertical connecting glowing line */}
                <div className="absolute left-[26px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-cyan-500/20 via-cyan-400/40 to-teal-500/20 pointer-events-none" />

                {workflowSteps.map((step, idx) => {
                  const Icon = step.icon;
                  const isActive = activeStep === idx;
                  return (
                    <div
                      key={step.id}
                      onClick={() => setActiveStep(idx)}
                      className={`relative flex items-center gap-3.5 p-3 rounded-xl transition-all duration-300 cursor-pointer border ${
                        isActive
                          ? 'bg-cyan-500/10 border-cyan-400/60 shadow-[0_0_20px_rgba(6,182,212,0.25)] translate-x-1'
                          : 'bg-zinc-900/40 border-zinc-800/60 hover:border-zinc-700 hover:bg-zinc-900/60'
                      }`}
                    >
                      {/* Node Icon Indicator */}
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isActive
                            ? 'bg-gradient-to-br from-cyan-400 to-teal-400 text-black shadow-[0_0_15px_rgba(6,182,212,0.8)] scale-105'
                            : 'bg-zinc-800 text-slate-400'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>

                      {/* Node Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h2 className={`text-xs sm:text-sm font-semibold truncate ${
                            isActive ? 'text-white' : 'text-slate-300'
                          }`}>
                            {step.label}
                          </h2>
                          <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                            isActive ? 'bg-cyan-400/20 text-cyan-300' : 'text-slate-500'
                          }`}>
                            {step.badge}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 truncate mt-0.5">
                          {step.sub}
                        </p>
                      </div>

                      {/* Active Status Pulse Indicator */}
                      {isActive && (
                        <div className="hidden sm:flex flex-col items-end shrink-0 text-right">
                          <span className="text-[9px] font-mono text-emerald-400 font-bold uppercase">
                            {step.status}
                          </span>
                          <span className="text-[8px] font-mono text-slate-500">
                            Latency: 42ms
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Telemetry Live Dashboard Footer */}
              <div className="pt-3 border-t border-zinc-800/80 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-lg bg-zinc-900/70 border border-zinc-800">
                  <div className="text-[10px] text-slate-400 uppercase font-mono">Cycle Time</div>
                  <div className="text-xs font-bold text-cyan-400 font-mono mt-0.5">-75%</div>
                </div>
                <div className="p-2 rounded-lg bg-zinc-900/70 border border-zinc-800">
                  <div className="text-[10px] text-slate-400 uppercase font-mono">Error Rate</div>
                  <div className="text-xs font-bold text-emerald-400 font-mono mt-0.5">&lt;0.2%</div>
                </div>
                <div className="p-2 rounded-lg bg-zinc-900/70 border border-zinc-800">
                  <div className="text-[10px] text-slate-400 uppercase font-mono">Deploy Speed</div>
                  <div className="text-xs font-bold text-white font-mono mt-0.5">4 Weeks</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EnterpriseHero;
