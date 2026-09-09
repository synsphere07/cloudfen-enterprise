'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Calendar,
  CheckCircle2,
  Clock,
  Cpu,
  Layers,
  Rocket,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  Sparkles,
  FileSpreadsheet,
  Award,
} from 'lucide-react';

interface ReadinessSprintProps {
  onOpenDemo?: () => void;
}

export const ReadinessSprintSection: React.FC<ReadinessSprintProps> = ({ onOpenDemo }) => {
  const [activeWeek, setActiveWeek] = useState(0);

  const weeks = [
    {
      week: 'Week 1',
      title: 'Discover & Map',
      tagline: 'Deep workflow discovery, baseline mapping & security scoping',
      items: [
        'Select 1 high-friction, repetitive business workflow with executive sponsors',
        'Map every manual touchpoint, data transformation, and system boundary',
        'Audit API access, permissions, and credential governance (HRIS, ATS, ERP, CRM)',
        'Capture pre-automation baseline metrics: cycle time, cost per task, error rates',
      ],
      output: 'Workflow Architecture Map & Audited Pre-Automation Baseline',
    },
    {
      week: 'Week 2',
      title: 'Design & Guardrails',
      tagline: 'Agent reasoning topology, policy rules & evaluation harnesses',
      items: [
        'Design deterministic prompt chains, schemas, and reasoning loops',
        'Configure tool-calling connectors for enterprise read/write operations',
        'Implement safety guardrails, prompt injection filters, and RBAC rules',
        'Define human-in-the-loop escalation criteria for high-stakes decisions',
      ],
      output: 'Complete Agent Specification, Security Policies & Eval Harness',
    },
    {
      week: 'Week 3',
      title: 'Build & Test',
      tagline: 'End-to-end integration, synthetic testing & staging verification',
      items: [
        'Connect the AI agent to your live sandbox and enterprise systems',
        'Run 500+ synthetic edge-case tests to calibrate accuracy and precision',
        'Build operator dashboard for human-in-the-loop approval workflows',
        'Conduct shadow-mode testing parallel with human team execution',
      ],
      output: 'Tested, Verified Production-Ready Agent in Staging Environment',
    },
    {
      week: 'Week 4',
      title: 'Deploy & Measure',
      tagline: 'Production launch, real-time telemetry & executive ROI scorecard',
      items: [
        'Gradual canary rollout into live production with live telemetry',
        'Continuous accuracy, latency, and cost-per-execution monitoring',
        'Perform live before-and-after audit against Week 1 baseline metrics',
        'Deliver comprehensive Executive ROI Report and enterprise expansion roadmap',
      ],
      output: 'Live Production Agent + Audited Before-and-After ROI Report',
    },
  ];

  const deliverables = [
    {
      title: '1 Production Workflow',
      desc: 'Live automation of a real, high-impact business process.',
      icon: Rocket,
    },
    {
      title: 'Working AI Agent',
      desc: 'Fully configured reasoning engine with secure enterprise tool access.',
      icon: Cpu,
    },
    {
      title: 'Measurement Framework',
      desc: 'Live dashboard tracking latency, error rates, and task throughput.',
      icon: TrendingUp,
    },
    {
      title: 'Performance Baseline',
      desc: 'Rigorous benchmark data comparing pre- and post-automation speeds.',
      icon: Clock,
    },
    {
      title: 'Before / After ROI Report',
      desc: 'Audited dollar savings and executive scorecard for leadership.',
      icon: FileSpreadsheet,
    },
    {
      title: 'Enterprise Roadmap',
      desc: 'Prioritized blueprint for rolling out agents across other departments.',
      icon: Layers,
    },
  ];

  const handleCta = () => {
    if (onOpenDemo) {
      onOpenDemo();
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <section id="readiness-sprint" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-900 bg-black/60 overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider">
            Flagship Engagement
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Four weeks to prove an AI workflow in{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
              production.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            A fixed-price, 4-week engagement designed to take one high-impact workflow from messy reality to working production automation with audited ROI.
          </p>
        </div>

        {/* 4-Week Interactive Timeline Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {weeks.map((w, idx) => {
            const isCurrent = activeWeek === idx;
            return (
              <button
                key={w.week}
                onClick={() => setActiveWeek(idx)}
                className={`p-4 rounded-xl text-left transition-all duration-200 cursor-pointer border ${
                  isCurrent
                    ? 'bg-cyan-500/15 border-cyan-400/80 shadow-[0_0_20px_rgba(6,182,212,0.25)]'
                    : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/80'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-xs font-mono font-bold uppercase ${
                    isCurrent ? 'text-cyan-400' : 'text-slate-400'
                  }`}>
                    {w.week}
                  </span>
                  {isCurrent && <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />}
                </div>
                <div className="text-sm font-bold text-white truncate">{w.title}</div>
              </button>
            );
          })}
        </div>

        {/* Active Week Details Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#111520]/90 to-[#0c0e14]/95 border border-cyan-500/30 shadow-2xl backdrop-blur-xl mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                {weeks[activeWeek].week} Milestone
              </div>
              <h3 className="text-2xl font-bold text-white mt-1">
                {weeks[activeWeek].title}
              </h3>
              <p className="text-sm text-slate-400 mt-0.5">
                {weeks[activeWeek].tagline}
              </p>
            </div>
            <div className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
              Deliverable Focus: {weeks[activeWeek].output}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
            {weeks[activeWeek].items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables Section */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              What You Walk Away With
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Guaranteed deliverables at the conclusion of every Agent Readiness Sprint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {deliverables.map((del) => {
              const Icon = del.icon;
              return (
                <div
                  key={del.title}
                  className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-cyan-500/30 transition-all flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0 text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{del.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{del.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sprint CTA Box */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-teal-950/40 via-zinc-900 to-cyan-950/40 border border-cyan-500/40 text-center space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Ready to automate your first workflow in 4 weeks?
            </h3>
            <p className="text-sm text-slate-400">
              Fixed-price engagement with guaranteed deliverables. We sign mutual NDAs before workflow discovery.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleCta}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-black bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-300 hover:from-cyan-300 hover:to-teal-300 shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all cursor-pointer"
            >
              <span>Book a Readiness Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              href="/readiness-sprint"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:text-white transition-all"
            >
              <span>View Full Sprint Scope</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ReadinessSprintSection;
