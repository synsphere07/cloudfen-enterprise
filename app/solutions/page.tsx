'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Modal from '@/components/ui/Modal';
import {
  Users,
  Building2,
  Receipt,
  Rocket,
  Activity,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';

export default function SolutionsPage() {
  const [isDemoOpen, setIsDemoOpen] = React.useState(false);

  const solutions = [
    {
      id: 'sprint',
      badge: 'The Wedge / Entry Point',
      title: 'Agent Readiness Sprint',
      href: '/readiness-sprint',
      desc: '4-week fixed-price engagement ($25,000) to take one high-impact enterprise workflow from discovery to live production deployment with measured before-and-after ROI.',
      icon: Rocket,
      color: 'from-cyan-500/20 to-teal-500/10',
      borderColor: 'border-cyan-500/40',
      highlights: [
        '1 Production workflow automation',
        'Deterministic guardrails & eval suites',
        'End-to-end tool and API integration',
        'Audited before/after ROI scorecard',
      ],
    },
    {
      id: 'sourcing',
      badge: 'Talent AI & Recruiting',
      title: 'Agentic Sourcing Desk',
      href: '/solutions/sourcing',
      desc: 'Autonomous multi-channel candidate discovery, deep technical rubric scoring, automated outbound qualification, and dynamic ATS shortlist generation.',
      icon: Users,
      color: 'from-blue-500/20 to-cyan-500/10',
      borderColor: 'border-blue-500/40',
      highlights: [
        'Multi-channel candidate discovery',
        'Deep profile scoring against technical rubrics',
        'Automated screening workflows',
        'Direct ATS synchronization (Workday, Greenhouse)',
      ],
    },
    {
      id: 'onboarding',
      badge: 'HR & Legal Compliance (The Moat)',
      title: 'Onboarding & Compliance Agent',
      href: '/solutions/onboarding',
      desc: 'End-to-end automation for contractor and employee onboarding: document extraction, right-to-work verification, background check orchestration, and HRIS data sync.',
      icon: Building2,
      color: 'from-teal-500/20 to-emerald-500/10',
      borderColor: 'border-teal-500/40',
      highlights: [
        'Automated document extraction & OCR',
        'I-9 & Right-to-Work compliance verification',
        'Equipment & IT access provisioning triggers',
        'Real-time HRIS ledger writeback',
      ],
    },
    {
      id: 'back-office',
      badge: 'Finance Ops & Accounts Payable',
      title: 'Back-Office Operations Agent',
      href: '/solutions/back-office',
      desc: 'Multi-format invoice data extraction, 3-way purchase order matching, anomaly detection, GL code categorization, and ERP ledger writeback.',
      icon: Receipt,
      color: 'from-purple-500/20 to-cyan-500/10',
      borderColor: 'border-purple-500/40',
      highlights: [
        'Multi-format invoice parsing (PDF, EDI, Scan)',
        '3-way matching (Invoice, PO, Receiving Report)',
        'ERP writeback (SAP, NetSuite, QuickBooks)',
        'Automated discrepancy resolution routing',
      ],
    },
    {
      id: 'operations',
      badge: 'The Annuity / Managed Layer',
      title: 'Managed Agent Operations',
      href: '/agent-operations',
      desc: '24/7 telemetry monitoring, continuous prompt evaluations, drift prevention, model-cost governance, token caching, and enterprise SLA guarantees.',
      icon: Activity,
      color: 'from-indigo-500/20 to-cyan-500/10',
      borderColor: 'border-indigo-500/40',
      highlights: [
        '24/7 uptime & latency monitoring',
        'Continuous prompt evals & drift prevention',
        'Model cost governance & token caching',
        '99.9% enterprise operational SLA',
      ],
    },
  ];

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      <Navbar onOpenDemo={() => setIsDemoOpen(true)} />

      <main className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Enterprise AI Agent Solutions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Production AI Agents for{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
              Enterprise Workflows.
            </span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Move beyond brittle bots and experiments. We design, deploy, and operate autonomous workflow agents engineered with zero-trust security and audited business ROI.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {solutions.map((sol) => {
            const Icon = sol.icon;
            return (
              <div
                key={sol.id}
                className={`p-8 rounded-2xl bg-gradient-to-b ${sol.color} via-zinc-950/80 to-black/90 border ${sol.borderColor} hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-zinc-900 border border-zinc-700 text-cyan-300 font-semibold">
                      {sol.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {sol.desc}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-zinc-800/80">
                    {sol.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <Link
                    href={sol.href}
                    className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wide bg-zinc-900 hover:bg-cyan-500 hover:text-black border border-zinc-700 hover:border-cyan-400 text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>View Solution Architecture</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-zinc-900 to-black border border-cyan-500/40 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Have a custom workflow in mind?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
            Book an Agent Readiness Call to evaluate feasibility, design guardrails, and outline measurable production ROI in 4 weeks.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setIsDemoOpen(true)}
              className="px-8 py-4 rounded-xl text-base font-bold text-black bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all cursor-pointer"
            >
              Book an Agent Readiness Call
            </button>
          </div>
        </div>
      </main>

      <Footer />
      <Modal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
}
