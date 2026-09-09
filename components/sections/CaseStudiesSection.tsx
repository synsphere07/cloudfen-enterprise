'use client';

import React from 'react';
import Link from 'next/link';
import {
  Users,
  CheckCircle2,
  Building2,
  Receipt,
  ArrowRight,
  TrendingUp,
  Clock,
  DollarSign,
  ShieldCheck,
  FileCheck2,
} from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  const caseStudies = [
    {
      id: 'sourcing',
      category: 'Talent Acquisition & Recruiting',
      title: 'Global Enterprise Sourcing Desk',
      summary:
        'Automated multi-channel candidate discovery, profile scoring against deep technical rubrics, and dynamic shortlist generation.',
      results: [
        { label: 'Time per Assessment', value: '15 Min', desc: 'Down from 3.5 hours manual resume review' },
        { label: 'Annual Cost Savings', value: '$1.3M', desc: 'Reported enterprise reference benchmark' },
        { label: 'Recruiter Capacity', value: '+68%', desc: 'Freed up for high-touch candidate closing' },
      ],
      tag: 'Industry Reference Benchmark',
      icon: Users,
    },
    {
      id: 'onboarding',
      category: 'HR & Legal Compliance',
      title: 'Multinational Retail Employee Onboarding',
      summary:
        'End-to-end automation for contractor and full-time employee onboarding: document extraction, right-to-work verification, and HRIS data sync.',
      results: [
        { label: 'Onboarding Cycle Time', value: '-75%', desc: 'From 12 business days down to 3 days' },
        { label: 'Compliance Error Rate', value: '0.0%', desc: 'Zero missed I-9 or policy verifications' },
        { label: 'Staffing Efficiency', value: '3 Roles', desc: 'Manual coordination workload redeployed' },
      ],
      tag: 'Industry Reference Benchmark',
      icon: Building2,
    },
    {
      id: 'back-office',
      category: 'Finance & Accounts Payable',
      title: 'Autonomous AP & PO Reconciliation Desk',
      summary:
        'Multi-format invoice data extraction, 3-way purchase order matching, anomaly detection, and ERP ledger writeback.',
      results: [
        { label: 'Processing Cost', value: '-76%', desc: 'Cost dropped from $28 to $6.70 per invoice' },
        { label: 'Annualized Savings', value: '~$180K', desc: 'Benchmark savings per 100-person ops team' },
        { label: 'Touchless Match Rate', value: '92%', desc: 'Straight-through ERP writeback without touch' },
      ],
      tag: 'Industry Reference Benchmark',
      icon: Receipt,
    },
  ];

  return (
    <section id="case-studies" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-900 bg-black/40">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-teal-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono font-semibold uppercase tracking-wider">
            Proven Business Outcomes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Enterprise Reference{' '}
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Proof Points.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Measurable results across high-volume recruiting, compliance-heavy onboarding, and complex back-office finance operations.
          </p>
        </div>

        {/* Case Studies 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study) => {
            const Icon = study.icon;
            return (
              <div
                key={study.id}
                className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-zinc-900/60 to-zinc-950/80 border border-zinc-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-slate-400">
                      {study.tag}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-cyan-400 mb-1">{study.category}</div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {study.summary}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-zinc-800/80">
                  {study.results.map((r, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/60">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-400">{r.label}</span>
                        <span className="text-sm font-mono font-bold text-cyan-300">{r.value}</span>
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5 font-mono">{r.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclosure footnote */}
        <div className="text-center text-xs text-slate-500 font-mono max-w-2xl mx-auto">
          * Reference benchmark statistics compiled from published industry case studies and enterprise deployment audits. Client confidentiality preserved under NDA.
        </div>

      </div>
    </section>
  );
};

export default CaseStudiesSection;
