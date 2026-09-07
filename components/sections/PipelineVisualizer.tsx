'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Terminal,
  GitCommit,
  ShieldCheck,
  Cpu,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Play,
  RotateCcw,
  Zap
} from 'lucide-react';

interface LogEntry {
  id: number;
  time: string;
  type: 'info' | 'success' | 'warning' | 'error';
  text: string;
}

const INITIAL_LOGS: LogEntry[] = [
  { id: 1, time: '14:20:01.102', type: 'info', text: 'INIT: CloudFen GitOps Controller listening on org/payments-core' },
  { id: 2, time: '14:20:02.450', type: 'info', text: 'GITOPS: Webhook received: Commit sha=a9f4c02 [feat: multi-cloud-routing]' },
  { id: 3, time: '14:20:03.118', type: 'success', text: 'SECURITY: eBPF zero-trust policy verified (0 CVEs, SOC2 Compliant)' },
  { id: 4, time: '14:20:04.890', type: 'info', text: 'IAC: Generating declarative state delta for AWS (us-east-1), GCP (us-central1), Azure (eastus)' },
  { id: 5, time: '14:20:06.320', type: 'success', text: 'CANARY: 10% traffic routed to v4.8.2 container instances across 12 clusters' },
  { id: 6, time: '14:20:08.012', type: 'success', text: 'TELEMETRY: Latency p99=4.2ms, error_rate=0.000%. Auto-promoting to 100% stable.' },
  { id: 7, time: '14:20:09.155', type: 'success', text: 'STATUS: Multi-cloud sync completed in 8.053s. All 48 nodes healthy.' },
];

export const PipelineVisualizer: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>(INITIAL_LOGS);
  const [activeStageIndex, setActiveStageIndex] = useState<number>(4);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const stages = [
    { name: 'Git Commit', icon: GitCommit, desc: 'Webhook & Signed Commit' },
    { name: 'eBPF Security', icon: ShieldCheck, desc: 'Zero-Trust OPA Check' },
    { name: 'IaC Synthesis', icon: Cpu, desc: 'Multi-Cloud OpenTofu' },
    { name: 'Canary Rollout', icon: Layers, desc: 'Traffic Steering 10%→100%' },
    { name: 'Auto-Healing', icon: Zap, desc: 'Self-Repair Telemetry' },
  ];

  const handleSimulateDeploy = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setLogs([]);
    setActiveStageIndex(0);

    const steps: { stage: number; log: LogEntry; delay: number }[] = [
      {
        stage: 0,
        delay: 500,
        log: { id: Date.now() + 1, time: new Date().toISOString().substring(11, 23), type: 'info', text: 'TRIGGER: Git commit triggered on main branch [commit: feat-zero-downtime]' },
      },
      {
        stage: 1,
        delay: 1400,
        log: { id: Date.now() + 2, time: new Date().toISOString().substring(11, 23), type: 'success', text: 'COMPLIANCE: eBPF security gate passed with 100% zero-trust policies enforced' },
      },
      {
        stage: 2,
        delay: 2400,
        log: { id: Date.now() + 3, time: new Date().toISOString().substring(11, 23), type: 'info', text: 'ORCHESTRATOR: Reconciling OpenTofu state across AWS, GCP, and Azure concurrently' },
      },
      {
        stage: 3,
        delay: 3500,
        log: { id: Date.now() + 4, time: new Date().toISOString().substring(11, 23), type: 'success', text: 'ROLLOUT: Canary pods deployed. Error rate 0.00%, latency 3.8ms. Promoting to 100%' },
      },
      {
        stage: 4,
        delay: 4600,
        log: { id: Date.now() + 5, time: new Date().toISOString().substring(11, 23), type: 'success', text: 'VERIFIED: Autonomous deployment complete in 4.12s. Zero-downtime achieved.' },
      },
    ];

    steps.forEach(({ stage, log, delay }, index) => {
      setTimeout(() => {
        setActiveStageIndex(stage);
        setLogs((prev) => [...prev, log]);
        if (index === steps.length - 1) {
          setIsSimulating(false);
        }
      }, delay);
    });
  };

  const handleSimulateHeal = () => {
    if (isSimulating) return;
    setIsSimulating(true);

    const incidentSteps: { log: LogEntry; delay: number }[] = [
      {
        delay: 400,
        log: { id: Date.now() + 1, time: new Date().toISOString().substring(11, 23), type: 'warning', text: 'ANOMALY DETECTED: AWS us-east-1 pod latency spiked to 240ms (Memory saturation 96%)' },
      },
      {
        delay: 1300,
        log: { id: Date.now() + 2, time: new Date().toISOString().substring(11, 23), type: 'info', text: 'HEALING FABRIC: Dynamic traffic reroute initiated to GCP us-central1 standby cluster' },
      },
      {
        delay: 2200,
        log: { id: Date.now() + 3, time: new Date().toISOString().substring(11, 23), type: 'success', text: 'REPAIR: Degraded pods terminated, new spot instances provisioned & warmed via eBPF' },
      },
      {
        delay: 3100,
        log: { id: Date.now() + 4, time: new Date().toISOString().substring(11, 23), type: 'success', text: 'RECOVERY: All nodes balanced. Zero user-facing errors dropped. MTTR = 2.7 seconds.' },
      },
    ];

    incidentSteps.forEach(({ log, delay }, index) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, log]);
        if (index === incidentSteps.length - 1) {
          setIsSimulating(false);
        }
      }, delay);
    });
  };

  return (
    <section id="our-focus" className="relative py-24 sm:py-32 bg-black/60 backdrop-blur-md cyber-grid border-t border-cyan-500/15 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400 uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Autonomous GitOps & CI/CD Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Live Multi-Cloud <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">Deployment & Auto-Healing</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Watch how CloudFen continuously reconciles your git state across multi-cloud clusters with sub-second latency and automated anomaly healing.
          </p>
        </div>

        {/* Visual 5-Stage Interactive Pipeline Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            const isPassed = activeStageIndex >= idx;
            const isCurrent = activeStageIndex === idx;

            return (
              <div
                key={idx}
                className={`p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                  isCurrent
                    ? 'bg-black/90 border-cyan-400 shadow-neon-cyan'
                    : isPassed
                    ? 'bg-black/70 border-cyan-500/30 text-slate-300'
                    : 'bg-black/50 border-white/10 text-slate-500'
                }`}
              >
                {isCurrent && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-400 animate-pulse" />
                )}

                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      isCurrent
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400'
                        : isPassed
                        ? 'bg-black border border-cyan-500/30 text-cyan-400'
                        : 'bg-black border border-white/10 text-slate-600'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-500">
                    STAGE 0{idx + 1}
                  </span>
                </div>

                <div className="text-sm font-bold text-white mb-1">
                  {stage.name}
                </div>
                <div className="text-xs text-slate-400">
                  {stage.desc}
                </div>
              </div>
            );
          })}
        </div>

        {/* Real-time Streaming Terminal Container */}
        <div className="rounded-3xl bg-black/95 border border-cyan-500/30 shadow-2xl overflow-hidden backdrop-blur-xl">

          {/* Terminal Header Bar */}
          <div className="px-5 py-3.5 bg-black/90 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 font-mono text-xs text-slate-400">
                cloudfen-daemon@mesh-us-east-1:~
              </span>
            </div>

            {/* Interactive Simulation Trigger Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleSimulateDeploy}
                disabled={isSimulating}
                className="px-3 py-1.5 rounded-lg bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/30 text-[11px] font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
              >
                <Play className="w-3 h-3" />
                <span>Simulate Canary Release</span>
              </button>

              <button
                onClick={handleSimulateHeal}
                disabled={isSimulating}
                className="px-3 py-1.5 rounded-lg bg-indigo-500/15 border border-indigo-400/40 text-indigo-300 hover:bg-indigo-500/30 text-[11px] font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
              >
                <Zap className="w-3 h-3" />
                <span>Simulate Auto-Heal</span>
              </button>
            </div>
          </div>

          {/* Terminal Output Body */}
          <div className="p-6 font-mono text-xs space-y-2.5 max-h-[340px] overflow-y-auto bg-black/90">
            {logs.map((log) => (
              <div key={log.id} className="flex items-start gap-3 leading-relaxed">
                <span className="text-slate-600 shrink-0 select-none">
                  [{log.time}]
                </span>
                <span
                  className={`font-semibold shrink-0 ${
                    log.type === 'success'
                      ? 'text-emerald-400'
                      : log.type === 'warning'
                      ? 'text-amber-400'
                      : log.type === 'error'
                      ? 'text-rose-400'
                      : 'text-cyan-400'
                  }`}
                >
                  {log.type === 'success'
                    ? '✔'
                    : log.type === 'warning'
                    ? '▲'
                    : log.type === 'error'
                    ? '✖'
                    : 'ℹ'}
                </span>
                <span
                  className={
                    log.type === 'success'
                      ? 'text-slate-200'
                      : log.type === 'warning'
                      ? 'text-amber-200'
                      : 'text-slate-300'
                  }
                >
                  {log.text}
                </span>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Footer Status Bar */}
          <div className="px-5 py-2.5 bg-black/80 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>DAEMON ACTIVE · LISTENING ON PORT 9090 (mTLS v1.3)</span>
            </div>
            <span>LATENCY: 4.1ms · 0 DROPPED PACKETS</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PipelineVisualizer;
