'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Modal from '@/components/ui/Modal';
import {
  Receipt,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Lock,
  FileSpreadsheet,
  Sparkles,
  ChevronRight,
  TrendingDown,
  Layers,
  Database,
} from 'lucide-react';

export default function BackOfficeSolutionPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const capabilities = [
    {
      title: 'Multi-Format Invoice Parsing',
      desc: 'Extracts line items, vendor tax IDs, payment terms, and currency conversions from messy PDFs, scanned images, EDI, and email attachments.',
    },
    {
      title: 'Autonomous 3-Way Matching Engine',
      desc: 'Cross-checks invoices against purchase orders and receiving warehouse reports with line-item tolerance threshold algorithms.',
    },
    {
      title: 'Automated GL Code & Cost Center Allocation',
      desc: 'Classifies line items to proper General Ledger accounts based on historical vendor accounting patterns and organizational taxonomy.',
    },
    {
      title: 'Direct ERP Ledger Writeback',
      desc: 'Creates validated vouchers and AP records directly in SAP S/4HANA, NetSuite, QuickBooks Enterprise, and Oracle Cloud without manual re-keying.',
    },
  ];

  const workflowSteps = [
    { step: '01', title: 'Invoice Ingestion', desc: 'Agent monitors AP inboxes and vendor portals, ingesting raw multi-format invoices.' },
    { step: '02', title: 'Entity & Line Extraction', desc: 'Parses vendor, dates, line items, SKU codes, and tax rates into standardized JSON schema.' },
    { step: '03', title: '3-Way Reconciliation', desc: 'Validates line items against ERP PO records and warehouse goods receipts with tolerance logic.' },
    { step: '04', title: 'ERP Posting & Payment Queue', desc: 'Posts approved vouchers directly into your ERP ledger and queues for disbursement approval.' },
  ];

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      <Navbar onOpenDemo={() => setIsDemoOpen(true)} />

      <main className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-8">
          <Link href="/solutions" className="hover:text-cyan-400 transition-colors">Solutions</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-purple-300">Back-Office Operations Agent</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-400/30 text-purple-300 text-xs font-mono font-semibold uppercase tracking-wider">
              <Receipt className="w-3.5 h-3.5 text-purple-400" />
              <span>Finance Operations & AP Automation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Back-Office AP &{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                PO Reconciliation Agent.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Automate multi-format invoice intake, 3-way matching against purchase orders, GL account categorization, and ERP ledger writeback with audited financial precision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => setIsDemoOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-bold text-black bg-gradient-to-r from-purple-400 to-cyan-300 hover:from-purple-300 hover:to-cyan-200 shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all cursor-pointer"
              >
                <span>Book an Agent Readiness Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href="/readiness-sprint"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-slate-200 bg-zinc-900 border border-zinc-700 hover:border-purple-400 hover:text-white transition-all"
              >
                <span>Deploy in 4-Week Sprint</span>
              </Link>
            </div>
          </div>

          {/* Stat / Proof Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-gradient-to-b from-[#1c1228]/90 to-black/90 border border-purple-500/40 shadow-2xl space-y-6">
            <div className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold">
              Audited Enterprise Benchmark
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-purple-300">$4.10 → $0.42</div>
                <div className="text-xs text-slate-400">Cost to process each invoice reduced by over 89%</div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-cyan-300">92% Touchless</div>
                <div className="text-xs text-slate-400">Straight-through processing for standard matching POs</div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-pink-300">100% Audit Trail</div>
                <div className="text-xs text-slate-400">Complete cryptographic logging of OCR bounds and ERP transactions</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Step Process */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">How the Operations Agent Operates</h2>
            <p className="text-sm text-slate-400">Autonomous extraction with human-in-the-loop exception routing.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((s) => (
              <div key={s.step} className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3">
                <div className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-purple-500/10 text-purple-300 inline-block border border-purple-500/20">
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Financial Guardrails & Security</h2>
            <p className="text-sm text-slate-400">Deterministic tolerance rules, anomaly detection, and fraud prevention.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((c, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800 flex items-start gap-4">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0 mt-0.5">
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
        <div className="text-center p-10 rounded-3xl bg-gradient-to-r from-purple-950/40 via-zinc-900 to-black border border-purple-500/40 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Automate your accounts payable pipeline</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Deploy a dedicated Back-Office AP Agent in a 4-week fixed-price sprint with verified ROI.
          </p>
          <button
            onClick={() => setIsDemoOpen(true)}
            className="px-8 py-4 rounded-xl text-sm font-bold text-black bg-gradient-to-r from-purple-400 to-cyan-300 hover:from-purple-300 hover:to-cyan-200 shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all cursor-pointer"
          >
            Start an Agent Readiness Sprint
          </button>
        </div>
      </main>

      <Footer />
      <Modal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} defaultWorkflow="back-office" />
    </div>
  );
}
