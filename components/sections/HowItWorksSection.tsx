'use client';

import React, { useState } from 'react';
import {
  Search,
  Code2,
  BarChart3,
  Gauge,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Identify',
      subtitle: 'Workflow Selection & Mapping',
      icon: Search,
      badge: 'Discovery & Feasibility',
      headline: 'Pinpointing the exact workflow with highest ROI and lowest operational risk.',
      details: [
        'Detailed step-by-step process mapping with your domain leads',
        'System accessibility & API integration audit (ATS, HRIS, ERP, AP)',
        'Pre-automation baseline metrics establishment (time, cost, error rate)',
        'Security, role permissions, and compliance boundaries definition',
      ],
      deliverable: 'Audited Workflow Feasibility Blueprint & Baseline Model',
    },
    {
      num: '02',
      title: 'Deploy',
      subtitle: 'Production Agent Engineering',
      icon: Code2,
      badge: 'Build & Security',
      headline: 'Engineering the reasoning loops, tool connectors, and deterministic guardrails.',
      details: [
        'Agent prompt orchestration with structured output schema validation',
        'Integration with core enterprise tools via secure read/write APIs',
        'Human-in-the-loop review triggers for high-consequence thresholds',
        'Automated deterministic unit tests and synthetic benchmark evaluation',
      ],
      deliverable: 'Production-Grade AI Agent running in customer environment',
    },
    {
      num: '03',
      title: 'Measure',
      subtitle: 'Real-Time Telemetry & Evals',
      icon: BarChart3,
      badge: 'Proof of Value',
      headline: 'Quantifying throughput, accuracy, and operational dollar savings.',
      details: [
        'Live tracking of cycle time reduction against pre-deployment baseline',
        'Error rate & hallucination detection with automatic escalation',
        'Cost-per-transaction monitoring and token consumption efficiency',
        'Executive ROI reporting with side-by-side before/after audit',
      ],
      deliverable: 'Audited Before-and-After Executive ROI Scorecard',
    },
    {
      num: '04',
      title: 'Operate',
      subtitle: 'Continuous Management & Guardrails',
      icon: Gauge,
      badge: 'Ongoing Reliability',
      headline: 'Ensuring 24/7 reliability, prompt resilience, and model cost governance.',
      details: [
        'Continuous prompt evaluation and regression testing on live traffic',
        'Model version migration & token caching optimization for cost savings',
        'Adaptive guardrail updates as business policies and systems evolve',
        '24/7 monitoring, anomaly alerting, and SLA maintenance support',
      ],
      deliverable: 'Fully Managed Enterprise AI Agent Operations & SLA SLA',
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-900 bg-black/40">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-teal-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono font-semibold uppercase tracking-wider">
            Operational Blueprint
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            How It Works:{' '}
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              From Blueprint to Production
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            A disciplined engineering methodology built specifically for high-reliability enterprise workflows.
          </p>
        </div>

        {/* Visual Flow Banner (Horizontal Pipeline) */}
        <div className="mb-12 p-3 sm:p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 shadow-xl overflow-x-auto">
          <div className="flex items-center justify-between min-w-[600px] gap-2">
            {steps.map((step, idx) => {
              const isSelected = selectedStep === idx;
              const Icon = step.icon;
              return (
                <button
                  key={step.num}
                  onClick={() => setSelectedStep(idx)}
                  className={`flex-1 flex items-center gap-3 p-3 rounded-xl transition-all duration-200 text-left cursor-pointer border ${
                    isSelected
                      ? 'bg-cyan-500/15 border-cyan-400/60 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                      : 'bg-zinc-900/40 border-transparent hover:bg-zinc-800/60 hover:border-zinc-700'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold font-mono ${
                      isSelected
                        ? 'bg-cyan-400 text-black shadow-[0_0_10px_rgba(6,182,212,0.6)]'
                        : 'bg-zinc-800 text-slate-400'
                    }`}
                  >
                    {step.num}
                  </div>
                  <div className="min-w-0">
                    <div className={`text-xs font-bold uppercase tracking-wider truncate ${
                      isSelected ? 'text-white' : 'text-slate-300'
                    }`}>
                      {step.title}
                    </div>
                    <div className="text-[10px] text-slate-500 truncate">{step.subtitle}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step Deep Dive Interactive Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#121622]/90 to-[#0c0e14]/95 border border-cyan-500/30 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Detail Column (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl font-mono font-bold text-cyan-400">
                  {steps[selectedStep].num}
                </span>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-300 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                    {steps[selectedStep].badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {steps[selectedStep].title}: {steps[selectedStep].subtitle}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                {steps[selectedStep].headline}
              </p>

              {/* Bullet points */}
              <div className="space-y-2.5 pt-2">
                {steps[selectedStep].details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-300">{detail}</span>
                  </div>
                ))}
              </div>

              {/* Deliverable Pill */}
              <div className="pt-4 border-t border-zinc-800">
                <div className="text-[11px] font-mono text-slate-400 uppercase">Core Deliverable:</div>
                <div className="text-xs sm:text-sm font-semibold text-cyan-300 mt-0.5">
                  {steps[selectedStep].deliverable}
                </div>
              </div>
            </div>

            {/* Right Interactive Diagram Visualization (5 cols) */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-xl bg-zinc-950/90 border border-zinc-800 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-zinc-800 pb-3">
                  <span>Execution Architecture</span>
                  <span className="text-emerald-400">Deterministic Engine</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-zinc-900/80 border border-zinc-800/80 flex items-center justify-between">
                    <span className="text-slate-400">1. Workflow Spec</span>
                    <span className="text-cyan-300 font-bold">Standardized JSON Schema</span>
                  </div>
                  <div className="p-3 rounded-lg bg-zinc-900/80 border border-zinc-800/80 flex items-center justify-between">
                    <span className="text-slate-400">2. Security Gate</span>
                    <span className="text-teal-300 font-bold">SOC2 / RBAC Enforced</span>
                  </div>
                  <div className="p-3 rounded-lg bg-zinc-900/80 border border-zinc-800/80 flex items-center justify-between">
                    <span className="text-slate-400">3. Verification</span>
                    <span className="text-blue-300 font-bold">Zero-Shot Evals</span>
                  </div>
                  <div className="p-3 rounded-lg bg-zinc-900/80 border border-zinc-800/80 flex items-center justify-between">
                    <span className="text-slate-400">4. Fallback Mode</span>
                    <span className="text-amber-300 font-bold">Human Escrow Gate</span>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <a
                    href="/readiness-sprint"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Explore the 4-Week Sprint Roadmap</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
