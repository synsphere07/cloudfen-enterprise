'use client';

import React, { useState } from 'react';
import { WORKFLOW_USE_CASES } from '@/lib/constants';
import {
  Users,
  ReceiptText,
  Building2,
  Layers,
  Headphones,
  CheckCircle2,
  ArrowRight,
  Workflow,
} from 'lucide-react';

export const IndustriesUseCasesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const iconMap: Record<string, any> = {
    Users: Users,
    ReceiptText: ReceiptText,
    Building2: Building2,
    Layers: Layers,
    Headphones: Headphones,
  };

  const integrations = [
    'Workday', 'SAP', 'Salesforce', 'NetSuite', 'Greenhouse', 'Lever', 'Jira', 'ServiceNow', 'Slack', 'Microsoft 365', 'QuickBooks', 'DocuSign'
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-900 bg-black/60 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider">
            Cross-Functional Enterprise Coverage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Workflows we automate across{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
              your organization.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            From talent operations to finance and vendor logistics, CloudFen AI agents handle high-friction, multi-step enterprise workflows.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {WORKFLOW_USE_CASES.map((uc, idx) => {
            const Icon = iconMap[uc.icon] || Workflow;
            const isSelected = activeTab === idx;
            return (
              <button
                key={uc.category}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                    : 'bg-zinc-900/60 border-zinc-800 text-slate-400 hover:text-white hover:bg-zinc-800/80'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{uc.category}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Detail Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#111522]/90 to-[#0c0e14]/95 border border-cyan-500/30 shadow-2xl backdrop-blur-xl mb-12">
          <div className="max-w-3xl mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {WORKFLOW_USE_CASES[activeTab].category} Automation
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {WORKFLOW_USE_CASES[activeTab].summary}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-zinc-800">
            {WORKFLOW_USE_CASES[activeTab].items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-cyan-500/30 transition-all"
              >
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Badges Marquee / Bar */}
        <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-center space-y-3">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            Native Connectors Across Enterprise Systems
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {integrations.map((sys) => (
              <span
                key={sys}
                className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-slate-300 text-xs font-mono"
              >
                {sys}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default IndustriesUseCasesSection;
