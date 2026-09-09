'use client';

import React from 'react';
import {
  Layers,
  Clock,
  FlaskConical,
  ShieldAlert,
  ArrowRight,
  Workflow,
  CheckCircle,
} from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      id: 'manual',
      icon: Layers,
      title: 'Manual Repetitive Work',
      description:
        'Skilled employees spend hours copying data between ATS, HRIS, ERP, CRM, and spreadsheets — performing the same deterministic steps every day.',
      impact: 'Up to 35% of employee time lost to swivel-chair operations.',
      tag: '01 / Inefficiency',
    },
    {
      id: 'slow',
      icon: Clock,
      title: 'Fragmented & Slow Decisions',
      description:
        'Crucial context is trapped in unstructured documents, inbox threads, and separate siloed tools, delaying reviews, approvals, and candidate hiring.',
      impact: 'Multi-day turnaround times for basic approvals and shortlists.',
      tag: '02 / Bottlenecks',
    },
    {
      id: 'pilots',
      icon: FlaskConical,
      title: 'Stalled AI Pilots & Demos',
      description:
        'Teams build fragile chatbot demos and toy LLM experiments, but they stall before production due to lack of deep system integration and predictable behavior.',
      impact: '85% of enterprise AI prototypes never reach production.',
      tag: '03 / Production Gap',
    },
    {
      id: 'risk',
      icon: ShieldAlert,
      title: 'Operational & Hallucination Risk',
      description:
        'Raw LLMs lack deterministic verification, human-in-the-loop escalation rules, role-based guardrails, audit logging, and token cost governance.',
      impact: 'Unpredictable costs, compliance exposure, and zero auditability.',
      tag: '04 / Governance',
    },
  ];

  return (
    <section id="problem" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-900 bg-black/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-mono font-semibold uppercase tracking-wider">
            The Enterprise Challenge
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Most companies don’t have an AI problem.{' '}
            <span className="text-cyan-400">They have a workflow problem.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Enterprise workflows break down when systems don’t talk to each other, data is unstructured, and manual glue code slows down your best teams.
          </p>
        </div>

        {/* 4 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((prob) => {
            const Icon = prob.icon;
            return (
              <div
                key={prob.id}
                className="group relative p-6 rounded-2xl bg-gradient-to-b from-zinc-900/60 to-zinc-950/80 border border-zinc-800/80 hover:border-cyan-500/40 hover:bg-zinc-900/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-slate-300 group-hover:text-cyan-400 group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">
                      {prob.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {prob.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                    {prob.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-800/60">
                  <div className="text-[11px] font-mono text-red-400/90 font-medium">
                    {prob.impact}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transition Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-teal-950/40 via-zinc-900/90 to-cyan-950/40 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center shrink-0">
              <Workflow className="w-6 h-6 text-cyan-300" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                CloudFen turns these workflows into measurable AI-powered operations.
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                We bridge the gap between unstructured business inputs and your core backend systems.
              </p>
            </div>
          </div>

          <a
            href="#solutions"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black text-xs sm:text-sm font-bold tracking-wide transition-all shrink-0 cursor-pointer"
          >
            <span>See How We Automate</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;
