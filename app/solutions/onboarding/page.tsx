'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Modal from '@/components/ui/Modal';
import {
  Building2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Lock,
  FileCheck2,
  Sparkles,
  ChevronRight,
  Clock,
  DollarSign,
} from 'lucide-react';

export default function OnboardingSolutionPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const capabilities = [
    {
      title: 'Automated Document OCR & Extraction',
      desc: 'Parses IDs, tax forms, right-to-work certifications, and direct deposit details across 30+ document formats with 99.8% extraction accuracy.',
    },
    {
      title: 'Real-Time Compliance & Policy Checks',
      desc: 'Validates jurisdiction-specific employment eligibility, background check status, and NDA/policy signatures before triggering provisioning.',
    },
    {
      title: 'IT & Security Access Provisioning',
      desc: 'Coordinates with Okta, Google Workspace, Azure AD, and Jira to provision role-based accounts and hardware shipment orders automatically.',
    },
    {
      title: 'HRIS Bi-Directional Ledger Sync',
      desc: 'Writes clean employee and contractor records into Workday, SAP SuccessFactors, BambooHR, and Rippling without manual data entry.',
    },
  ];

  const workflowSteps = [
    { step: '01', title: 'Offer Acceptance Trigger', desc: 'Agent receives signed offer letter and spins up an isolated onboarding orchestration instance.' },
    { step: '02', title: 'Document Intake & OCR', desc: 'Employee uploads documents via secure portal; agent verifies validity, expiry, and completeness.' },
    { step: '03', title: 'Compliance Validation', desc: 'Autonomous background check polling, I-9 verification, and tax jurisdiction policy matching.' },
    { step: '04', title: 'System Provisioning & Hand-off', desc: 'Syncs HRIS profile, creates SSO accounts, orders equipment, and alerts hiring manager.' },
  ];

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      <Navbar onOpenDemo={() => setIsDemoOpen(true)} />

      <main className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-8">
          <Link href="/solutions" className="hover:text-cyan-400 transition-colors">Solutions</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-teal-300">Onboarding & Compliance Agent</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-400/30 text-teal-300 text-xs font-mono font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>HR & Compliance Automation · The Moat</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Onboarding & Compliance{' '}
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Autonomous Agent.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Eliminate the manual friction in contractor and full-time employee onboarding. Automate document verification, background checks, HRIS data sync, and IT provisioning with zero compliance errors.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => setIsDemoOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-bold text-black bg-gradient-to-r from-teal-400 to-cyan-300 hover:from-teal-300 hover:to-cyan-200 shadow-[0_0_20px_rgba(20,184,166,0.4)] transition-all cursor-pointer"
              >
                <span>Book an Agent Readiness Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href="/readiness-sprint"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-slate-200 bg-zinc-900 border border-zinc-700 hover:border-teal-400 hover:text-white transition-all"
              >
                <span>Deploy in 4-Week Sprint</span>
              </Link>
            </div>
          </div>

          {/* Stat / Proof Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-gradient-to-b from-[#111c22]/90 to-black/90 border border-teal-500/40 shadow-2xl space-y-6">
            <div className="text-xs font-mono uppercase tracking-wider text-teal-400 font-bold">
              Audited Enterprise Benchmark
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-teal-300">-75% Cycle Time</div>
                <div className="text-xs text-slate-400">Onboarding turnaround reduced from 12 business days to under 3 days</div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-cyan-300">0.0% Error Rate</div>
                <div className="text-xs text-slate-400">Zero missed I-9 compliance forms or unverified right-to-work filings</div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-emerald-300">3 Ops Roles</div>
                <div className="text-xs text-slate-400">Repetitive coordination capacity redeployed to employee engagement</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Step Process */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">How the Onboarding Agent Operates</h2>
            <p className="text-sm text-slate-400">Zero data entry. 100% auditability across your compliance stack.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((s) => (
              <div key={s.step} className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3">
                <div className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-teal-500/10 text-teal-300 inline-block border border-teal-500/20">
                  {s.step}
                </div>
                <h3 className="text-base font-bold text-white">{s.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="mb-20 p-8 sm:p-12 rounded-3xl bg-zinc-950/80 border border-zinc-800 space-y-8">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Security & Compliance Guardrails</h2>
            <p className="text-sm text-slate-400">Encrypted PII handling, SOC2 Type II audit logging, and human sign-off gates.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((c, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800 flex items-start gap-4">
                <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 shrink-0 mt-0.5">
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

        {/* CTA */}
        <div className="text-center p-10 rounded-3xl bg-gradient-to-r from-teal-950/40 via-zinc-900 to-black border border-teal-500/40 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Automate your enterprise onboarding pipeline</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Get started with a fixed-price 4-week sprint to deploy the Onboarding Agent into production.
          </p>
          <button
            onClick={() => setIsDemoOpen(true)}
            className="px-8 py-4 rounded-xl text-sm font-bold text-black bg-gradient-to-r from-teal-400 to-cyan-300 hover:from-teal-300 hover:to-cyan-200 shadow-[0_0_25px_rgba(20,184,166,0.4)] transition-all cursor-pointer"
          >
            Start an Agent Readiness Sprint
          </button>
        </div>
      </main>

      <Footer />
      <Modal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} defaultWorkflow="onboarding" />
    </div>
  );
}
