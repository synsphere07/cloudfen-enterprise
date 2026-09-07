'use client';

import React, { useState } from 'react';
import {
  Cloud,
  GitBranch,
  DollarSign,
  ShieldAlert,
  Activity,
  RefreshCw,
  CheckCircle2,
  Code2,
  ArrowUpRight
} from 'lucide-react';
import { SolutionItem } from '@/types';

const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: 'multicloud',
    category: 'multicloud',
    categoryLabel: 'Multi-Cloud Fabric',
    title: 'Multi-Cloud IaC Orchestrator',
    tagline: 'Single Plane of Glass for AWS, Azure, GCP & Bare Metal',
    description:
      'Manage heterogeneous cloud footprints with unified declarative state. Auto-detect configuration drift across 10,000+ resources and reconcile discrepancies without manual intervention.',
    features: [
      'Universal OpenTofu & Terraform v1.8 state management',
      'Automated drift detection with one-click reconciliation',
      'Policy-as-code guardrails with OPA & Rego policies',
    ],
    metrics: '99.4% Drift Eliminated',
    iconName: 'Cloud',
    codeSnippet: `resource "cloudfen_cluster" "mesh" {
  providers = ["aws", "gcp", "azure"]
  policy    = "strict-finops-tier1"
  ebpf_mesh = true
}`,
  },
  {
    id: 'gitops',
    category: 'gitops',
    categoryLabel: 'GitOps Velocity',
    title: 'Autonomous GitOps Engine',
    tagline: 'Zero-Downtime Canary Rollouts & Rollbacks',
    description:
      'Automate your continuous delivery lifecycle with native ArgoCD and Flux synchronization. Deploy microservices across 50+ clusters simultaneously with telemetry-driven automated rollbacks.',
    features: [
      'Multi-cluster canary and blue/green release orchestration',
      'AI-based anomaly verification during 10% canary traffic',
      'Instant sub-second git state synchronization',
    ],
    metrics: '4.2x Faster Releases',
    iconName: 'GitBranch',
    codeSnippet: `apiVersion: cloudfen.io/v1alpha1
kind: AutonomousCanary
metadata:
  name: payments-api
spec:
  targetClusters: ["us-east", "eu-central"]
  maxErrorRate: "0.01%"`,
  },
  {
    id: 'finops',
    category: 'finops',
    categoryLabel: 'FinOps Intelligence',
    title: 'FinOps Spot & Compute Arbitrage',
    tagline: 'Algorithmic Cloud Cost Optimization',
    description:
      'Cut compute expenditures by over 40% with automated workload bin-packing, dynamic spot instance fallback, and cross-provider price arbitrage without risking workload SLA.',
    features: [
      'Real-time AWS/GCP/Azure spot compute bidding engine',
      'Zero-downtime graceful drain and spot instance rebalancing',
      'Per-microservice unit economics and chargeback reports',
    ],
    metrics: '43.8% Spend Reduction',
    iconName: 'DollarSign',
    codeSnippet: `finops_optimizer:
  arbitrage: enabled
  spot_target: 75%
  fallback_grace_sec: 15
  auto_rightsize_cpu: true`,
  },
  {
    id: 'security',
    category: 'security',
    categoryLabel: 'Zero-Trust Security',
    title: 'Zero-Trust eBPF Security Mesh',
    tagline: 'Kernel-Level Observability & Microsegmentation',
    description:
      'Harness Linux eBPF to enforce granular L3-L7 network policies, inspect encrypted traffic without sidecar proxy overhead, and comply with SOC 2, HIPAA, and PCI-DSS automatically.',
    features: [
      'Sidecar-less high-throughput service mesh via eBPF',
      'Automated continuous compliance auditing & evidence export',
      'Dynamic zero-trust secret rotation and mutual TLS (mTLS)',
    ],
    metrics: 'SOC 2 & HIPAA Certified',
    iconName: 'ShieldAlert',
    codeSnippet: `ebpf_mesh:
  mtls: strict
  l7_filtering: active
  compliance_audit: ["soc2", "hipaa"]
  sidecar_overhead_ms: 0.12`,
  },
  {
    id: 'observability',
    category: 'observability',
    categoryLabel: 'AI Observability',
    title: 'Predictive Telemetry & Auto-Healing',
    tagline: 'Remediate Incidents Before Customers Notice',
    description:
      'Correlate distributed traces, Prometheus metrics, and eBPF events with machine learning. Auto-remediate memory leaks, network partitions, and node degradations in milliseconds.',
    features: [
      'Deep AI correlation of traces, metrics, and git events',
      'Automated pod restarting, circuit-breaking, and traffic rerouting',
      'Root cause analysis generated in under 5 seconds',
    ],
    metrics: '< 15s Mean Time to Recovery',
    iconName: 'Activity',
    codeSnippet: `auto_healing:
  anomaly_detector: ai-ml-v3
  self_repair: true
  circuit_breaker_threshold: "500ms"
  alert_channels: ["slack", "pagerduty"]`,
  },
  {
    id: 'dr',
    category: 'dr',
    categoryLabel: 'Disaster Recovery',
    title: 'Multi-Region Disaster Recovery Fabric',
    tagline: 'Sub-Second RPO / RTO Across Cloud Boundaries',
    description:
      'Never suffer catastrophic outages from single-cloud region blackouts. Replicate stateful workloads and persistent volumes seamlessly between AWS, Azure, and Google Cloud.',
    features: [
      'Continuous asynchronous multi-cloud volume replication',
      'One-click regional evacuation drill testing',
      'DNS-level global anycast traffic steering with health probes',
    ],
    metrics: 'RTO < 30s | RPO < 5s',
    iconName: 'RefreshCw',
    codeSnippet: `disaster_recovery:
  primary: "aws:us-east-1"
  failover: ["gcp:us-central1", "azure:eastus"]
  rto_target_sec: 30
  auto_failover: true`,
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Capabilities' },
  { id: 'multicloud', label: 'Multi-Cloud IaC' },
  { id: 'gitops', label: 'GitOps Velocity' },
  { id: 'finops', label: 'FinOps Arbitrage' },
  { id: 'security', label: 'Zero-Trust eBPF' },
  { id: 'observability', label: 'AI Healing' },
];

export const Solutions: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredSolutions =
    activeFilter === 'all'
      ? SOLUTIONS_DATA
      : SOLUTIONS_DATA.filter((s) => s.category === activeFilter);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-cyan-400" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5 text-teal-300" />;
      case 'DollarSign':
        return <DollarSign className="w-5 h-5 text-emerald-400" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-cyan-400" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-indigo-400" />;
      case 'RefreshCw':
        return <RefreshCw className="w-5 h-5 text-teal-400" />;
      default:
        return <Cloud className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 cyber-grid scroll-mt-20">
      {/* Glow ambient background */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400 tracking-wider uppercase">
            Enterprise Control Plane
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineered for <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">Hyper-Scale Cloud Velocity</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Eliminate silos between AWS, Azure, GCP, and Kubernetes. One declarative fabric to provision, secure, optimize, and heal your entire enterprise infrastructure.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-neon-cyan'
                  : 'bg-black/70 text-slate-400 border border-white/10 hover:text-white hover:border-cyan-500/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
          {filteredSolutions.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-3xl p-7 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-5">
                {/* Header Icon & Metric Pill */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-black/80 border border-cyan-500/30 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300">
                    {item.metrics}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    {item.categoryLabel}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Key Features List */}
                <ul className="space-y-2 pt-2 border-t border-white/10">
                  {item.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Code Snippet Preview */}
                {item.codeSnippet && (
                  <div className="pt-2">
                    <div className="p-3 rounded-xl bg-black/90 border border-white/10 font-mono text-[10px] text-cyan-200/90 overflow-x-auto">
                      <div className="flex items-center justify-between text-slate-500 pb-1 mb-1 border-b border-white/5 text-[9px]">
                        <span>declarative-spec.yaml</span>
                        <Code2 className="w-3 h-3 text-cyan-400" />
                      </div>
                      <pre className="leading-tight">
                        <code>{item.codeSnippet}</code>
                      </pre>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Card Action */}
              <div className="pt-5 mt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href="#calculator"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all"
                >
                  <span>Explore Blueprint</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Solutions;
