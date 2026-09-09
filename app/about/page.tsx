'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Modal from '@/components/ui/Modal';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Cpu,
  Layers,
  Terminal,
  Building2,
  Lock,
  Workflow,
} from 'lucide-react';

export default function AboutPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const coreBeliefs = [
    {
      title: 'Most companies do not have an AI problem. They have a workflow problem.',
      desc: 'Throwing generic chatbots at manual operations accomplishes nothing. Enterprise value is unlocked by systematically turning fragmented, repetitive business processes into deterministic, reliable state-machine operations.',
    },
    {
      title: 'Zero tolerance for hallucinations in production.',
      desc: 'We never allow non-deterministic language models to execute unconstrained system writes. All tool actions pass through rigid Pydantic/Zod schemas, confidence floors, and human-in-the-loop review queues.',
    },
    {
      title: 'Audited before-and-after business metrics.',
      desc: 'We do not sell speculative AI hype. We measure baseline cycle times, labor costs, and error rates before writing code, and verify audited ROI upon production cutover.',
    },
    {
      title: 'Enterprise data sovereignty and zero training.',
      desc: 'Customer data is never retained or used to train third-party foundation models. All agent systems execute in isolated customer-controlled or SOC2 Type II compliant environments.',
    },
  ];

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      <Navbar onOpenDemo={() => setIsDemoOpen(true)} />

      <main className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-8">
          <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-cyan-300">About CloudFen</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Engineering Philosophy · The CloudFen Mission</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              From AI experiments to{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
                production-ready agents.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              CloudFen was founded by enterprise software engineers and AI systems architects who were tired of seeing brittle AI demos that break in real-world business environments. We build AI agents that actually work in production.
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
                <span>Explore Solutions</span>
              </Link>
            </div>
          </div>

          {/* Philosophy Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-gradient-to-b from-[#131b2c]/90 to-black/90 border border-cyan-500/40 shadow-2xl space-y-6">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
              Engineering Commitments
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="text-lg font-bold text-white">4-Week Deployment Cycle</div>
                <div className="text-xs text-slate-400 mt-1">From discovery to live production deployment with measured before/after ROI</div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="text-lg font-bold text-teal-300">Deterministic Architecture</div>
                <div className="text-xs text-slate-400 mt-1">Strict JSON schemas, confidence scoring, and zero hallucinated system writes</div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="text-lg font-bold text-cyan-300">24/7 Managed Operations</div>
                <div className="text-xs text-slate-400 mt-1">Nightly synthetic regression evals, drift prevention, and enterprise SLA guarantees</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Principles Grid */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Our Core Engineering Principles</h2>
            <p className="text-sm text-slate-400">The foundational guidelines that direct every agent architecture we build.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreBeliefs.map((b, idx) => (
              <div key={idx} className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3 hover:border-cyan-500/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-300 font-mono font-bold text-xs">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-white">{b.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Global CTA */}
        <div className="text-center p-10 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-zinc-900 to-black border border-cyan-500/40 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Partner with CloudFen on your next AI initiative</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Book an Agent Readiness Call to explore how our 4-week sprint can transform your enterprise workflows.
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
