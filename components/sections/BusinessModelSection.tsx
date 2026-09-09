'use client';

import React from 'react';
import {
  Sparkles,
  Rocket,
  Cpu,
  Layers,
  Repeat,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
} from 'lucide-react';

export const BusinessModelSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Agent Readiness Sprint',
      badge: 'The Wedge',
      time: 'Weeks 1–4',
      desc: 'Fixed-price, rapid engagement to prove 1 high-impact workflow in production with hard baseline ROI metrics.',
      outcome: 'Validated production agent & audited before/after baseline.',
    },
    {
      num: '02',
      title: 'First Production Deployment',
      badge: 'Proof Point',
      time: 'Immediate',
      desc: 'Seamless integration with your existing ATS, HRIS, ERP, or AP systems under enterprise guardrails and security.',
      outcome: 'Autonomous execution with human approval thresholds.',
    },
    {
      num: '03',
      title: 'Additional Workflows',
      badge: 'Expansion',
      time: 'Months 2–6',
      desc: 'Replicate architecture and proven prompt evaluators across adjacent departments and repetitive business processes.',
      outcome: 'Cross-functional automation across HR, Finance, Procurement & Ops.',
    },
    {
      num: '04',
      title: 'Enterprise Agent Network',
      badge: 'Scale',
      time: 'Scale Phase',
      desc: 'Unified multi-agent control plane orchestrating complex multi-step cross-system workflows with global policy control.',
      outcome: 'Enterprise-wide digital workforce operating at sub-second speed.',
    },
    {
      num: '05',
      title: 'Managed Agent Operations',
      badge: 'The Annuity',
      time: 'Ongoing 24/7',
      desc: 'Continuous evaluations, prompt drifts prevention, model cost optimization, token caching, and SLA uptime guarantees.',
      outcome: 'Zero maintenance burden for internal engineering teams.',
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-900 bg-black/60 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-teal-500/5 via-cyan-500/10 to-blue-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider">
            Commercial Model & Scalability
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Land with one workflow.{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
              Expand across the enterprise.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            We don’t pitch massive 18-month IT overhauls. We deliver one working production agent in 4 weeks, prove the numbers, and expand systematically.
          </p>
        </div>

        {/* Step-by-Step Expansion Funnel */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {steps.map((s, idx) => (
            <div
              key={s.num}
              className="relative p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-cyan-500/40 hover:bg-zinc-900/80 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-mono font-bold text-cyan-400/80 group-hover:text-cyan-300">
                    {s.num}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {s.badge}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-slate-500 mb-1">{s.time}</div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {s.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-800/80">
                <div className="flex items-start gap-1.5 text-[11px] text-teal-300">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-teal-400" />
                  <span className="leading-snug">{s.outcome}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Flywheel Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center shrink-0">
              <Repeat className="w-6 h-6 text-teal-400 animate-spin" style={{ animationDuration: '20s' }} />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-teal-400 font-bold">The CloudFen Operating Flywheel</div>
              <p className="text-sm sm:text-base font-semibold text-white mt-0.5">
                Build once with deterministic guardrails → Operate continuously with telemetry & cost governance.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-mono text-slate-400">Fixed Sprint Price</span>
            <span className="text-sm font-mono font-bold text-cyan-300 bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/30">
              $25K / Workflow
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BusinessModelSection;
