'use client';

import React from 'react';
import {
  ShieldCheck,
  Lock,
  Globe2,
  FileCheck,
  Cpu,
  Server,
  Network,
  Database
} from 'lucide-react';

export const ArchitectureMesh: React.FC = () => {
  const complianceBadges = [
    { name: 'SOC 2 Type II', desc: 'Continuous automated compliance & evidence export' },
    { name: 'ISO 27001', desc: 'Enterprise information security management certified' },
    { name: 'HIPAA Enclave', desc: 'Dedicated eBPF encrypted healthcare workload enclaves' },
    { name: 'PCI-DSS Level 1', desc: 'Zero-trust payment card processing isolation' },
    { name: 'GDPR Sovereign', desc: 'Automated data sovereignty & geo-fencing policies' },
    { name: 'FedRAMP Ready', desc: 'High-security government & defense baseline' },
  ];

  const architectureLayers = [
    {
      layer: 'Layer 01',
      name: 'Global Edge & Anycast Ingress',
      desc: 'Sub-millisecond smart routing across 280+ PoPs with automated DDoS mitigation and mTLS handshake termination.',
      icon: Globe2,
      specs: '280+ Edge PoPs · < 5ms TTFB',
    },
    {
      layer: 'Layer 02',
      name: 'eBPF Kernel Service Mesh',
      desc: 'Sidecar-less networking running directly in the Linux kernel for line-rate throughput and zero proxy CPU tax.',
      icon: Network,
      specs: '0.12ms Overhead · 40Gbps Line Rate',
    },
    {
      layer: 'Layer 03',
      name: 'Multi-Cloud Compute Arbitrage',
      desc: 'Heterogeneous orchestration spanning AWS EKS, Google GKE, Azure AKS, and bare-metal K3s clusters.',
      icon: Server,
      specs: 'Spot Instance Fallback · 43% Savings',
    },
    {
      layer: 'Layer 04',
      name: 'Stateful Disaster Replication',
      desc: 'Continuous asynchronous persistent volume replication across cloud provider boundaries with sub-second RPO.',
      icon: Database,
      specs: 'RPO < 5s · Multi-Cloud Failover',
    },
  ];

  return (
    <section id="architecture" className="relative py-24 sm:py-32 bg-black/60 backdrop-blur-md cyber-grid border-t border-cyan-500/15">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[300px] bg-indigo-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400 uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Zero-Trust Architecture & Topology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Global Resilience <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">Engineered at the Kernel Level</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Eliminate traditional service mesh proxy overhead. CloudFen leverages Linux eBPF to enforce microsegmentation and observability directly inside kernel space.
          </p>
        </div>

        {/* Architecture Layers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {architectureLayers.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-3xl p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-cyan-400 font-bold px-2.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30">
                      {item.layer}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-black border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10">
                  <span className="text-[11px] font-mono text-teal-300 font-semibold block">
                    {item.specs}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security & Compliance Certifications Matrix */}
        <div className="p-8 sm:p-10 rounded-3xl bg-black/80 border border-cyan-500/30 shadow-2xl space-y-8 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-1">
                <Lock className="w-4 h-4 text-cyan-400" />
                <span>Enterprise Security & Compliance Guardrails</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                Continuous Compliance Verification
              </h3>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Automated Evidence Collection</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceBadges.map((badge, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-2xl bg-black/70 border border-white/10 hover:border-cyan-500/40 transition-colors"
              >
                <FileCheck className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white font-mono">
                    {badge.name}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {badge.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ArchitectureMesh;
