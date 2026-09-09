'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Modal from '@/components/ui/Modal';
import {
  Workflow,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Database,
  Lock,
  Zap,
  Activity,
  ChevronRight,
  Layers,
  Terminal,
  Server,
  FileCheck2,
} from 'lucide-react';

export default function HowItWorksPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const architectureLayers = [
    {
      num: '01',
      title: 'Event Trigger & Multi-Modal Ingestion',
      desc: 'Listens to webhooks, scheduled cron triggers, email inboxes, and document uploads. Normalizes noisy unstructured inputs into standardized typed payloads.',
      tech: ['REST Webhooks', 'Kafka / EventBridge', 'OCR & Document Parsers', 'Input Sanitization'],
    },
    {
      num: '02',
      title: 'Agent Reasoning Engine & Planning',
      desc: 'Orchestrates multi-agent planner-critic architectures. Breaks complex workflows into deterministic execution sub-tasks with state memory.',
      tech: ['State Machine Planners', 'Hybrid RAG & Vector Embeddings', 'Dynamic Model Routing', 'Prompt Compression'],
    },
    {
      num: '03',
      title: 'Enterprise Integration Mesh',
      desc: 'Connects to your core software systems through secure, authenticated API tool contracts with fine-grained RBAC permissions.',
      tech: ['Workday / SAP / BambooHR', 'Greenhouse / Lever', 'NetSuite / QuickBooks', 'Jira / ServiceNow'],
    },
    {
      num: '04',
      title: 'Deterministic Guardrails & Gateways',
      desc: 'Strict regex pattern validation, schema type enforcement, confidence scoring thresholds, and automated Human-in-the-Loop review queues.',
      tech: ['Pydantic / Zod Schemas', 'Confidence Floor Gates', 'Human Review Queue', 'Zero Hallucination Rules'],
    },
    {
      num: '05',
      title: 'Execution & Immutable Audit Writeback',
      desc: 'Writes clean transactional updates back to enterprise databases and records immutable cryptographic traces for compliance auditability.',
      tech: ['Two-Phase Commits', 'Idempotent API Calls', 'SOC2 Audit Ledger', 'Tamper-Evident Logs'],
    },
    {
      num: '06',
      title: 'Continuous Telemetry & Synthetic Evals',
      desc: 'Tracks per-step latency, token cost, model drift, and error spikes. Runs nightly synthetic regression suites against historical golden datasets.',
      tech: ['OpenTelemetry Traces', 'Nightly Synthetic Evals', 'Token Cost Analytics', 'Zero-Drift Monitor'],
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
          <span className="text-cyan-300">How It Works</span>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider">
            <Workflow className="w-3.5 h-3.5 text-cyan-400" />
            <span>Architecture & Blueprint</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            How CloudFen AI Agents{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
              Operate in Production.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Enterprise AI agents require much more than a simple API call. Our 6-layer architecture delivers zero-trust security, deterministic execution, and complete auditability.
          </p>
        </div>

        {/* 6-Layer Interactive Blueprint Architecture */}
        <div className="space-y-6 mb-20">
          {architectureLayers.map((layer) => (
            <div
              key={layer.num}
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-zinc-900/80 via-zinc-950/90 to-black border border-zinc-800 hover:border-cyan-500/40 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center group shadow-lg"
            >
              <div className="lg:col-span-1">
                <span className="text-2xl sm:text-3xl font-mono font-bold text-cyan-400/60 group-hover:text-cyan-300 transition-colors">
                  {layer.num}
                </span>
              </div>

              <div className="lg:col-span-6 space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                  {layer.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {layer.desc}
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-wrap gap-2 pt-2 lg:pt-0">
                {layer.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-cyan-300/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Guardrails Deep-Dive */}
        <div className="mb-20 p-8 sm:p-12 rounded-3xl bg-zinc-950/80 border border-zinc-800 space-y-8">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 text-teal-400 font-mono text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Zero-Hallucination Policy</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Why CloudFen Agents Do Not Hallucinate</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              We separate non-deterministic LLM semantic reasoning from deterministic software execution using rigid JSON schema gates and confidence floors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3">
              <div className="text-cyan-300 font-bold text-base flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>1. Schema Enforcement</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                All LLM tool arguments must strictly conform to validated Pydantic/Zod schemas before downstream execution.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3">
              <div className="text-cyan-300 font-bold text-base flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>2. Confidence Floors</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Transactions scoring below 95% confidence automatically route to human manager approval dashboards.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3">
              <div className="text-cyan-300 font-bold text-base flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>3. Idempotent Writeback</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                All external API writes are protected with cryptographic deduplication tokens to prevent duplicate updates.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-10 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-zinc-900 to-black border border-cyan-500/40 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Review your architecture with our AI systems engineers</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Book a 30-minute technical fit call to review your ERP, HRIS, and ATS API integration requirements.
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
