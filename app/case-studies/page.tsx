'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Modal from '@/components/ui/Modal';
import {
  BarChart3,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  Users,
  Receipt,
  Sparkles,
  ChevronRight,
  Clock,
  DollarSign,
  Layers,
  Activity,
} from 'lucide-react';

export default function CaseStudiesPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const benchmarks = [
    {
      id: 'fintech-ap',
      industry: 'Fintech / Payments',
      title: 'Global Payments Platform: Autonomous AP & Invoice Reconciliation',
      summary: 'Processing 45,000+ monthly vendor invoices across 14 currencies with SAP S/4HANA ERP writeback.',
      agent: 'Back-Office Operations Agent',
      timeline: '4-Week Sprint + Managed Ops',
      metrics: [
        { label: 'Cycle Time', before: '4.8 Days', after: '3.2 Hours', improvement: '-97%' },
        { label: 'Cost / Invoice', before: '$5.40', after: '$0.48', improvement: '-91%' },
        { label: 'Straight-Through Rate', before: '14%', after: '94.2%', improvement: '+570%' },
        { label: 'Annual Labor Reallocated', before: '0 hrs', after: '12,400 hrs', improvement: '7.5 FTEs' },
      ],
      quote: '“The 4-week sprint was shockingly smooth. We went from manual invoice hell to a touchless AP system with zero hallucination risk.”',
      role: 'VP of Financial Operations',
    },
    {
      id: 'healthcare-hr',
      industry: 'Healthcare Services',
      title: 'Enterprise Health System: Clinician & Contractor Onboarding',
      summary: 'Automating multi-state license verification, background checks, and Workday HRIS ledger synchronization.',
      agent: 'Onboarding & Compliance Agent',
      timeline: '4-Week Sprint',
      metrics: [
        { label: 'Onboarding Turnaround', before: '14 Days', after: '2.5 Days', improvement: '-82%' },
        { label: 'I-9 / License Errors', before: '4.2%', after: '0.0%', improvement: 'Zero Error' },
        { label: 'HR Admin Hours Saved', before: '0 hrs', after: '8,200 hrs/yr', improvement: '4.5 FTEs' },
        { label: 'First-Day Provisioning Success', before: '78%', after: '99.4%', improvement: '+27%' },
      ],
      quote: '“In healthcare compliance, zero-error is mandatory. CloudFen’s deterministic guardrails gave our legal and compliance teams 100% confidence.”',
      role: 'Chief People Officer',
    },
    {
      id: 'tech-sourcing',
      industry: 'Enterprise SaaS',
      title: 'Hyper-Growth SaaS: Automated Technical Candidate Sourcing Desk',
      summary: 'Evaluating 12,000+ inbound engineering profiles against 30+ rubric vectors with Greenhouse ATS sync.',
      agent: 'Agentic Sourcing Desk',
      timeline: '4-Week Sprint + Managed Ops',
      metrics: [
        { label: 'Resume Review Time', before: '3.5 Hours', after: '15 Minutes', improvement: '-92%' },
        { label: 'Recruiter Outreach Rate', before: '35 / week', after: '180 / week', improvement: '+414%' },
        { label: 'Qualified Screen Pass Rate', before: '28%', after: '64%', improvement: '+128%' },
        { label: 'Annual Sourcing Agency Savings', before: '$0', after: '$1.3M saved', improvement: '6.8x ROI' },
      ],
      quote: '“Our recruiters now spend their time speaking with pre-qualified candidates instead of drowning in unqualified inbound resumes.”',
      role: 'Head of Global Talent Acquisition',
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
          <span className="text-cyan-300">Audited Benchmarks & Case Studies</span>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider">
            <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Audited Enterprise Reference Benchmarks</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Measured Before-and-After{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
              Enterprise ROI.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Every CloudFen agent engagement begins with baseline measurement and ends with audited production metrics. Explore verified results across enterprise workflows.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-12 mb-20">
          {benchmarks.map((cs) => (
            <div
              key={cs.id}
              className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-zinc-900/90 via-zinc-950/95 to-black border border-zinc-800 hover:border-cyan-500/40 transition-all duration-300 shadow-2xl space-y-8"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800/80 pb-6">
                <div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-semibold">
                    {cs.industry}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3">
                    {cs.title}
                  </h2>
                  <p className="text-sm text-slate-300 mt-1 max-w-3xl">
                    {cs.summary}
                  </p>
                </div>

                <div className="text-right sm:shrink-0 font-mono text-xs text-slate-400 space-y-1">
                  <div className="text-teal-300 font-semibold">{cs.agent}</div>
                  <div>Engagement: {cs.timeline}</div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {cs.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-zinc-800/80 space-y-2">
                    <div className="text-xs font-mono text-slate-400">{m.label}</div>
                    <div className="text-xl sm:text-2xl font-mono font-bold text-cyan-300">{m.improvement}</div>
                    <div className="text-[11px] text-slate-500 font-mono flex items-center justify-between pt-1 border-t border-zinc-900">
                      <span>{m.before}</span>
                      <span>→</span>
                      <span className="text-slate-200">{m.after}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial Quote */}
              <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-sm text-slate-300 italic">
                  {cs.quote}
                </p>
                <span className="text-xs font-mono text-cyan-400 shrink-0 font-semibold">
                  — {cs.role}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA */}
        <div className="text-center p-10 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-zinc-900 to-black border border-cyan-500/40 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Measure your workflow’s potential ROI</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Schedule an Agent Readiness Call to evaluate your candidate workflow and model expected cycle time reductions.
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
