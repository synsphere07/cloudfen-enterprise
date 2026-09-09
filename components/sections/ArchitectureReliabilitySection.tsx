'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  Cpu,
  Database,
  Lock,
  Eye,
  DollarSign,
  Activity,
  Layers,
  Sparkles,
  Zap,
  CheckCircle2,
  Server,
  KeyRound,
  FileCheck,
  AlertTriangle,
} from 'lucide-react';

export const ArchitectureReliabilitySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'os' | 'stack'>('os');

  const osLayers = [
    {
      title: 'Authentication & RBAC',
      desc: 'Granular role-based access control, SSO integration, and ephemeral scoped API tokens.',
      icon: KeyRound,
      badge: 'Zero Trust',
    },
    {
      title: 'Deterministic Guardrails',
      desc: 'Regex and rule-based validation prevents prompt injection, hallucinations, and data leakage.',
      icon: ShieldCheck,
      badge: '100% Policy Match',
    },
    {
      title: 'Human Approval Gateways',
      desc: 'Configurable confidence thresholds automatically pause execution for manager sign-off.',
      icon: Eye,
      badge: 'Human-in-the-Loop',
    },
    {
      title: 'Immutable Audit Logging',
      desc: 'Every prompt, tool call, system response, and decision trace is encrypted and logged.',
      icon: FileCheck,
      badge: 'SOC2 / Compliance',
    },
    {
      title: 'Real-Time Telemetry & Evals',
      desc: 'Synthetic test suites run continuously against live agent outputs to detect drift.',
      icon: Activity,
      badge: 'Zero Drift',
    },
    {
      title: 'Model Cost Governance',
      desc: 'Dynamic prompt compression, token caching, and model routing keep compute costs fixed.',
      icon: DollarSign,
      badge: 'Cost Arbitrage',
    },
  ];

  return (
    <section id="architecture" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-900 bg-black/60 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono font-semibold uppercase tracking-wider">
            Enterprise Architecture & Reliability
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Built for production,{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
              not demos.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Every agent needs a production operating system around it. We engineer the security, guardrails, and auditability required by Fortune 500 IT teams.
          </p>
        </div>

        {/* Toggle Selector */}
        <div className="flex justify-center mb-10">
          <div className="p-1 rounded-xl bg-zinc-900 border border-zinc-800 flex gap-2">
            <button
              onClick={() => setActiveTab('os')}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'os'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              The Agent Operating System (OS)
            </button>
            <button
              onClick={() => setActiveTab('stack')}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'stack'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Full Stack Topology
            </button>
          </div>
        </div>

        {activeTab === 'os' ? (
          /* OS 6-Pillar Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {osLayers.map((layer, idx) => {
              const Icon = layer.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-cyan-500/40 hover:bg-zinc-900/80 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        {layer.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {layer.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {layer.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center gap-1.5 text-[11px] font-mono text-teal-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Deterministic Enterprise Standard</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Full Stack Topology Architecture Diagram */
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#111624]/90 to-[#0c0f16]/95 border border-cyan-500/30 shadow-2xl backdrop-blur-xl mb-12 space-y-6">
            {/* Layer 1: Trigger / Intake */}
            <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-cyan-400 font-bold uppercase">Layer 1: Ingestion & Triggers</span>
                <span className="text-slate-500">Slack · Email · Webhooks · Kafka · REST APIs · File Drop</span>
              </div>
              <p className="text-xs text-slate-400">
                Multi-channel ingestion with input sanitization, PII redaction, and schema validation.
              </p>
            </div>

            {/* Layer 2: CloudFen Agent Control Plane */}
            <div className="p-5 rounded-xl bg-cyan-950/20 border border-cyan-500/40 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-cyan-300 font-bold uppercase">Layer 2: CloudFen Agent Reasoning Engine</span>
                <span className="text-emerald-400">Claude 3.7 / GPT-4o / Fine-tuned Models</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-2.5 rounded bg-zinc-900/80 border border-zinc-800 text-slate-300">
                  <div className="text-[10px] text-cyan-400 uppercase">Orchestration</div>
                  <span>Multi-Agent Planner</span>
                </div>
                <div className="p-2.5 rounded bg-zinc-900/80 border border-zinc-800 text-slate-300">
                  <div className="text-[10px] text-teal-400 uppercase">Context Memory</div>
                  <span>Vector & Hybrid Retrieval</span>
                </div>
                <div className="p-2.5 rounded bg-zinc-900/80 border border-zinc-800 text-slate-300">
                  <div className="text-[10px] text-blue-400 uppercase">Policy Guardrails</div>
                  <span>Deterministic Validation</span>
                </div>
              </div>
            </div>

            {/* Layer 3: System Connectors & Writeback */}
            <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-teal-400 font-bold uppercase">Layer 3: Enterprise Integration Mesh</span>
                <span className="text-slate-500">Workday · SAP · Greenhouse · Salesforce · NetSuite · Jira</span>
              </div>
              <p className="text-xs text-slate-400">
                Two-way secure read/write connectors with transaction rollbacks and rate-limiting queues.
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default ArchitectureReliabilitySection;
