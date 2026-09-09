'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Modal from '@/components/ui/Modal';
import {
  Activity,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Lock,
  LineChart,
  Cpu,
  Layers,
  Sparkles,
  Server,
  AlertTriangle,
  ChevronRight,
  Gauge,
  Scale,
} from 'lucide-react';

export default function AgentOperationsPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const pillars = [
    {
      title: 'Real-Time Telemetry & Trace Observability',
      icon: Activity,
      desc: 'Granular tracing of every step, prompt, tool invocation, token spend, and latency milestone across your multi-agent architecture.',
    },
    {
      title: 'Synthetic Evals & Continuous Drift Prevention',
      icon: ShieldCheck,
      desc: 'Automated nightly regression test suites against curated golden datasets to detect accuracy drift before it impacts production users.',
    },
    {
      title: 'Model Cost Governance & Prompt Compression',
      icon: Gauge,
      desc: 'Dynamic model routing (e.g. Claude Opus for complex reasoning, Haiku for structured extraction), semantic token caching, and prompt minimization.',
    },
    {
      title: 'Deterministic Incident Response & Failover',
      icon: AlertTriangle,
      desc: 'Automated circuit breakers, multi-provider LLM failover, human fallback escalations, and 99.9% uptime enterprise SLA guarantees.',
    },
  ];

  const slaTiers = [
    {
      tier: 'Standard Operations',
      badge: 'Core Production Support',
      price: '$4,500 / month',
      features: [
        'Up to 3 production agent workflows',
        '24/7 automated telemetry & error logging',
        'Weekly synthetic drift evaluation runs',
        'Business hours engineer incident response (4h SLA)',
        'Monthly token cost & ROI optimization report',
      ],
    },
    {
      tier: 'Mission-Critical Ops',
      badge: 'Recommended for High-Volume Workflows',
      price: '$9,500 / month',
      features: [
        'Up to 8 production agent workflows',
        '24/7 engineer on-call with 15-minute P1 incident SLA',
        'Continuous real-time synthetic eval pipelines',
        'Dedicated multi-provider LLM failover architecture',
        'Bi-weekly prompt tuning & model upgrades',
        'Custom enterprise compliance audit trails',
      ],
      featured: true,
    },
  ];

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      <Navbar onOpenDemo={() => setIsDemoOpen(true)} />

      <main className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-8">
          <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-indigo-300">Managed Agent Operations</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-xs font-mono font-semibold uppercase tracking-wider">
              <Activity className="w-3.5 h-3.5 text-indigo-400" />
              <span>The Operational Layer · 24/7 Managed Operations</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Managed Agent Operations &{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                Telemetry Governance.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Shipping an AI agent to production is only Day 1. We operate, monitor, evaluate, and optimize your production AI agents 24/7 with zero-drift guarantees and strict cost governance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => setIsDemoOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-bold text-black bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300 hover:from-indigo-300 hover:to-cyan-200 shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all cursor-pointer"
              >
                <span>Discuss Managed Operations</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-slate-200 bg-zinc-900 border border-zinc-700 hover:border-indigo-400 hover:text-white transition-all"
              >
                <span>View Enterprise Architecture</span>
              </Link>
            </div>
          </div>

          {/* SLA Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-gradient-to-b from-[#131428]/90 to-black/90 border border-indigo-500/40 shadow-2xl space-y-6">
            <div className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold">
              Enterprise SLA Guarantee
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-indigo-300">99.9% Uptime</div>
                <div className="text-xs text-slate-400">Guaranteed operational availability across multi-provider LLM failover clusters</div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-cyan-300">&lt; 15 Min P1 Response</div>
                <div className="text-xs text-slate-400">Dedicated 24/7 AI systems engineers on call for production incidents</div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-emerald-300">0% Silent Drift</div>
                <div className="text-xs text-slate-400">Nightly automated synthetic eval suites benchmarking accuracy thresholds</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Operations */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">How We Operate Enterprise AI Agents</h2>
            <p className="text-sm text-slate-400">Comprehensive infrastructure engineered for high-stakes business operations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4 hover:border-indigo-500/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{p.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Managed Retainer Tiers */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Managed Operations Retainers</h2>
            <p className="text-sm text-slate-400">Predictable monthly investments designed for enterprise scale after Sprint cutover.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {slaTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-3xl bg-zinc-900/70 border ${tier.featured ? 'border-indigo-500/80 shadow-[0_0_40px_rgba(99,102,241,0.25)] relative' : 'border-zinc-800'} space-y-6 flex flex-col justify-between`}
              >
                {tier.featured && (
                  <div className="absolute -top-3.5 left-8 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-[10px] font-mono font-bold text-black uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-white">{tier.tier}</h3>
                      <p className="text-xs text-slate-400">{tier.badge}</p>
                    </div>
                    <div className="text-2xl font-mono font-bold text-indigo-300">{tier.price}</div>
                  </div>

                  <ul className="space-y-3 pt-4 border-t border-zinc-800">
                    {tier.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => setIsDemoOpen(true)}
                    className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      tier.featured
                        ? 'bg-gradient-to-r from-indigo-400 to-cyan-300 text-black hover:from-indigo-300 hover:to-cyan-200 shadow-md'
                        : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700'
                    }`}
                  >
                    Select {tier.tier}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conversion CTA */}
        <div className="text-center p-10 rounded-3xl bg-gradient-to-r from-indigo-950/40 via-zinc-900 to-black border border-indigo-500/40 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Ensure 24/7 reliability for your production AI</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Speak with an AI operations architect to review telemetry requirements, SLA thresholds, and model governance policies.
          </p>
          <button
            onClick={() => setIsDemoOpen(true)}
            className="px-8 py-4 rounded-xl text-sm font-bold text-black bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300 hover:from-indigo-300 hover:to-cyan-200 shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all cursor-pointer"
          >
            Book an Agent Readiness Call
          </button>
        </div>
      </main>

      <Footer />
      <Modal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
}
