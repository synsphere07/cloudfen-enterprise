'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Modal from '@/components/ui/Modal';
import {
  Rocket,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Lock,
  Calendar,
  Layers,
  FileCheck2,
  Sparkles,
  BarChart3,
  Cpu,
  Clock,
  DollarSign,
  ChevronRight,
} from 'lucide-react';

export default function ReadinessSprintPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const sprintWeeks = [
    {
      week: 'Week 01',
      title: 'Workflow Discovery & Baseline',
      deliverables: [
        'Deconstruct target business workflow into state machine steps',
        'Extract 50-100 historical golden run transactions',
        'Instrument baseline metrics: cycle time, touch count, human labor cost, error rates',
        'Execute Mutual NDA, security sign-off, and API credential scopes',
      ],
      tag: 'Discovery & Feasibility',
    },
    {
      week: 'Week 02',
      title: 'Agent Architecture & Guardrails',
      deliverables: [
        'Engineer multi-agent prompt schemas & structured JSON tool contracts',
        'Implement deterministic input/output validation regex & policy schemas',
        'Configure human-in-the-loop approval thresholds and fallback routes',
        'Establish synthetic evaluation dataset for regression benchmarking',
      ],
      tag: 'System Design',
    },
    {
      week: 'Week 03',
      title: 'Tool Mesh & Shadow Run Testing',
      deliverables: [
        'Bi-directional integration with enterprise systems (ERP, HRIS, ATS, CRM)',
        'Deploy in passive shadow mode: process live incoming transactions silently',
        'Run side-by-side automated comparison against human team actions',
        'Zero-drift eval suite execution with 99%+ accuracy verification',
      ],
      tag: 'Shadow Mode',
    },
    {
      week: 'Week 04',
      title: 'Live Production Cutover & ROI Audit',
      deliverables: [
        'Gradual traffic cutover: 10% → 50% → 100% autonomous transaction flow',
        'Real-time telemetry, trace logging, and alerting activated',
        'Staff training for human-in-the-loop exception handling',
        'Executive ROI Scorecard: audited before/after operational comparison',
      ],
      tag: 'Production Launch',
    },
  ];

  const packageIncludes = [
    { title: '1 Production Workflow Automation', desc: 'Fully deployed and integrated into your live operational software stack.' },
    { title: 'Deterministic Guardrail Suite', desc: 'Zero hallucinations with rigid JSON schema validation and policy enforcement.' },
    { title: 'Enterprise Tool Mesh Integration', desc: 'Secure bi-directional API connections to Workday, SAP, Greenhouse, or custom tools.' },
    { title: 'Comprehensive Evaluation Pipeline', desc: 'Continuous test suites to prevent regression and benchmark output quality.' },
    { title: 'Human Approval Dashboard', desc: 'Intuitive interface for managers to review flagged edge-cases in seconds.' },
    { title: 'Executive ROI Scorecard', desc: 'Quantified audit comparing pre-sprint baseline with live production performance.' },
  ];

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      <Navbar onOpenDemo={() => setIsDemoOpen(true)} />

      <main className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-8">
          <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-cyan-300">Agent Readiness Sprint</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider">
              <Rocket className="w-3.5 h-3.5 text-cyan-400" />
              <span>The Wedge · 4-Week Fixed-Price Engagement</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              The 4-Week{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
                Agent Readiness Sprint.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Take one high-friction enterprise workflow from discovery to live production deployment in 4 weeks. Fixed price of <strong className="text-white font-mono">$25,000</strong>. Audited before-and-after business ROI guaranteed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => setIsDemoOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-bold text-black bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all cursor-pointer"
              >
                <span>Book an Agent Readiness Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-slate-200 bg-zinc-900 border border-zinc-700 hover:border-cyan-400 hover:text-white transition-all"
              >
                <span>Explore Workflow Blueprints</span>
              </Link>
            </div>
          </div>

          {/* Pricing & Commitment Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-gradient-to-b from-[#131b2c]/90 to-black/90 border border-cyan-500/40 shadow-2xl space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">Engagement Terms</div>
                <div className="text-3xl font-mono font-bold text-white mt-1">$25,000 <span className="text-sm font-sans font-normal text-slate-400">fixed fee</span></div>
              </div>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono">
                4-Week Duration
              </span>
            </div>

            <div className="space-y-3 pt-4 border-t border-zinc-800">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Zero recurring licensing fees during sprint</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>100% customer ownership of code & prompt assets</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Audited before/after ROI metrics signed off</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Zero model retraining on proprietary customer data</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-xs text-slate-300">
              <strong className="text-cyan-300 block mb-1 font-mono">The Expansion Guarantee:</strong>
              If the sprint fails to achieve agreed performance thresholds on the target workflow, we continue iteration at zero additional cost until benchmarks pass.
            </div>
          </div>
        </div>

        {/* 4-Week Roadmap Timeline */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">4-Week Sprint Roadmap</h2>
            <p className="text-sm text-slate-400">A battle-tested methodology engineered to ship enterprise AI into production rapidly without technical debt.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sprintWeeks.map((w, idx) => (
              <div key={idx} className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4 hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {w.week}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{w.tag}</span>
                </div>
                <h3 className="text-lg font-bold text-white">{w.title}</h3>
                <ul className="space-y-2 pt-2 border-t border-zinc-800/80">
                  {w.deliverables.map((d, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* What’s Included Grid */}
        <div className="mb-20 p-8 sm:p-12 rounded-3xl bg-zinc-950/80 border border-zinc-800 space-y-8">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Sprint Deliverables Package</h2>
            <p className="text-sm text-slate-400">Everything you receive at the completion of your 4-week engagement.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packageIncludes.map((pkg, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-2">
                <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>{pkg.title}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{pkg.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Conversion CTA Box */}
        <div className="text-center p-10 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-zinc-900 to-black border border-cyan-500/40 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Ready to deploy your first production AI agent?</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Book a 30-minute Agent Readiness Call. We’ll review your candidate workflow and verify technical fit before kicking off Week 1.
          </p>
          <button
            onClick={() => setIsDemoOpen(true)}
            className="px-8 py-4 rounded-xl text-sm font-bold text-black bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all cursor-pointer"
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
