'use client';

import React from 'react';
import Link from 'next/link';
import {
  Rocket,
  Cpu,
  Gauge,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';

interface PricingProps {
  onOpenDemo?: () => void;
}

export const PricingEngagementSection: React.FC<PricingProps> = ({ onOpenDemo }) => {
  const models = [
    {
      id: 'sprint',
      badge: 'The Wedge / Rapid Proof',
      title: 'Agent Readiness Sprint',
      price: '$25,000',
      period: 'Fixed Price · 4 Weeks',
      desc: 'Fixed-scope engagement to take one high-impact enterprise workflow from discovery to live production deployment.',
      features: [
        '1 Production workflow automation',
        'End-to-end tool & API integration',
        'Deterministic guardrails & eval suite',
        'Audited before/after ROI scorecard',
        'Executive roadmap & expansion plan',
        '100% intellectual property ownership',
      ],
      ctaText: 'Start a Readiness Sprint',
      highlight: true,
      icon: Rocket,
    },
    {
      id: 'usage',
      badge: 'Performance Aligned',
      title: 'Workflow Agents',
      price: 'Usage-Based',
      period: 'Per Transaction / Workflow',
      desc: 'Transparent, unit-based pricing tied directly to business volume processed and verified.',
      features: [
        'Per qualified candidate shortlist ($)',
        'Per completed employee onboarding ($)',
        'Per reconciled invoice & PO ($)',
        'Per managed contractor cycle ($)',
        'Volume tier discounts (>1,000 tx/mo)',
        'Zero upfront software licensing lock-in',
      ],
      ctaText: 'Explore Usage Models',
      highlight: false,
      icon: Cpu,
    },
    {
      id: 'managed',
      badge: 'The Annuity / Reliability',
      title: 'Managed Agent Operations',
      price: 'Monthly Recurring',
      period: 'Tiered by Active Workflows',
      desc: 'Comprehensive 24/7 operational management, continuous evaluation, model cost control, and SLA guarantees.',
      features: [
        '24/7 uptime & latency monitoring',
        'Continuous prompt evals & drift prevention',
        'Model cost governance & token caching',
        'Quarterly agent accuracy upgrades',
        'Dedicated enterprise support engineer',
        '99.9% operational SLA guarantee',
      ],
      ctaText: 'View Operations Scope',
      highlight: false,
      icon: Gauge,
    },
  ];

  const handleCta = () => {
    if (onOpenDemo) {
      onOpenDemo();
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <section id="pricing" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-900 bg-black/40">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider">
            Clear Commercial Structure
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Transparent engagement models.{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
              No hidden fees.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Start with a fixed-price 4-week sprint to prove measurable value, then scale with predictable volume and managed operations.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {models.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.id}
                className={`relative p-7 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                  m.highlight
                    ? 'bg-gradient-to-b from-[#131b2c]/90 to-[#0c101a]/95 border-2 border-cyan-400/80 shadow-[0_0_40px_rgba(6,182,212,0.25)] lg:-translate-y-2'
                    : 'bg-gradient-to-b from-zinc-900/60 to-zinc-950/80 border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-mono px-2.5 py-1 rounded font-semibold ${
                      m.highlight
                        ? 'bg-cyan-400 text-black'
                        : 'bg-zinc-800 text-slate-300'
                    }`}>
                      {m.badge}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-zinc-800/80 flex items-center justify-center text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{m.title}</h3>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl font-mono font-bold text-white">{m.price}</span>
                  </div>
                  <div className="text-xs font-mono text-cyan-300 mb-4">{m.period}</div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {m.desc}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-zinc-800">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Includes:</div>
                    {m.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={handleCta}
                    className={`w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      m.highlight
                        ? 'bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-300 hover:from-cyan-300 hover:to-teal-300 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                        : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700'
                    }`}
                  >
                    <span>{m.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Callout */}
        <div className="text-center">
          <p className="text-xs sm:text-sm text-slate-400 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>All enterprise engagements include custom NDAs, security questionnaires, and full IP transfer.</span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default PricingEngagementSection;
