'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Modal from '@/components/ui/Modal';
import {
  Users,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Target,
  Search,
  Sparkles,
  ChevronRight,
  TrendingUp,
  Clock,
  DollarSign,
  Cpu,
} from 'lucide-react';

export default function SourcingSolutionPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const capabilities = [
    {
      title: 'Autonomous Multi-Channel Sourcing',
      desc: 'Discovers high-match engineering, executive, and specialized profiles across professional networks, ATS archives, and technical talent databases.',
    },
    {
      title: 'Deep Rubric Scoring & Evaluation',
      desc: 'Evaluates candidates against custom multi-dimensional technical rubrics, past project outcomes, and role seniority thresholds beyond keyword matching.',
    },
    {
      title: 'Dynamic Shortlist Generation',
      desc: 'Delivers ranked, annotated candidate dossiers directly into your ATS with explainable AI scoring rationales.',
    },
    {
      title: 'Automated Outreach & Qualification',
      desc: 'Executes highly personalized outreach sequences, answers initial candidate queries, and schedules screen calls with recruiters.',
    },
  ];

  const workflowSteps = [
    { step: '01', title: 'Requisition Ingestion', desc: 'Agent parses job spec and generates multi-dimensional technical search vectors.' },
    { step: '02', title: 'Profile Extraction & Enrichment', desc: 'Extracts candidates from talent pools, public code repos, and existing ATS data.' },
    { step: '03', title: 'Deterministic Rubric Scoring', desc: 'Scores technical depth, domain experience, and role alignment with strict guardrails.' },
    { step: '04', title: 'Shortlist & ATS Writeback', desc: 'Syncs qualified dossiers into Workday/Greenhouse and triggers recruiter notification.' },
  ];

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      <Navbar onOpenDemo={() => setIsDemoOpen(true)} />

      <main className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-8">
          <Link href="/solutions" className="hover:text-cyan-400 transition-colors">Solutions</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-cyan-300">Agentic Sourcing Desk</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5 text-cyan-400" />
              <span>Talent Acquisition & Recruiting AI</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Agentic Sourcing Desk for{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
                High-Volume Talent.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Transform slow, manual resume screening into an autonomous, 24/7 sourcing engine. CloudFen AI agents discover, evaluate, and deliver qualified candidate shortlists directly into your enterprise ATS.
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
                href="/readiness-sprint"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-slate-200 bg-zinc-900 border border-zinc-700 hover:border-cyan-400 hover:text-white transition-all"
              >
                <span>Deploy in 4-Week Sprint</span>
              </Link>
            </div>
          </div>

          {/* Stat / Proof Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-gradient-to-b from-[#131b2c]/90 to-black/90 border border-cyan-500/40 shadow-2xl space-y-6">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
              Audited Enterprise Benchmark
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-cyan-300">15 Minutes</div>
                <div className="text-xs text-slate-400">Candidate assessment time (down from 3.5 hours manual review)</div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-teal-300">$1.3M / Year</div>
                <div className="text-xs text-slate-400">Reported enterprise savings in large-scale sourcing automation</div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-blue-300">+68% Capacity</div>
                <div className="text-xs text-slate-400">Recruiter time shifted from manual screening to closing offers</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Step Process */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">How the Sourcing Agent Operates</h2>
            <p className="text-sm text-slate-400">Deterministic steps engineered with human-in-the-loop oversight and strict ATS integration.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((s) => (
              <div key={s.step} className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3">
                <div className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-300 inline-block border border-cyan-500/20">
                  {s.step}
                </div>
                <h3 className="text-base font-bold text-white">{s.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Capabilities */}
        <div className="mb-20 p-8 sm:p-12 rounded-3xl bg-zinc-950/80 border border-zinc-800 space-y-8">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Production Guardrails & Capabilities</h2>
            <p className="text-sm text-slate-400">Built to comply with strict enterprise HR regulations and EEO compliance standards.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((c, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800 flex items-start gap-4">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">{c.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center p-10 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-zinc-900 to-black border border-cyan-500/40 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Ready to automate candidate sourcing?</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Schedule a 30-minute technical fit call with our AI engineers to review your ATS setup and talent volume.
          </p>
          <button
            onClick={() => setIsDemoOpen(true)}
            className="px-8 py-4 rounded-xl text-sm font-bold text-black bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all cursor-pointer"
          >
            Start an Agent Readiness Sprint
          </button>
        </div>
      </main>

      <Footer />
      <Modal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} defaultWorkflow="sourcing" />
    </div>
  );
}
