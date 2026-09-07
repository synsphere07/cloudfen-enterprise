'use client';

import React, { useState, useId } from 'react';
import { formatCurrency } from '@/lib/utils';
import {
  Calculator,
  TrendingDown,
  Clock,
  Zap,
  ArrowRight,
  ShieldCheck,
  Server,
  DollarSign
} from 'lucide-react';

interface CloudPlaygroundProps {
  onOpenDemo?: (spend?: number) => void;
}

export const CloudPlayground: React.FC<CloudPlaygroundProps> = ({ onOpenDemo }) => {
  const [monthlySpend, setMonthlySpend] = useState<number>(45000);
  const [clusterCount, setClusterCount] = useState<number>(12);
  const [cloudProvider, setCloudProvider] = useState<string>('multi');
  const spendSliderId = useId();
  const clusterSliderId = useId();

  // Multipliers based on provider heterogeneity
  const providerMultiplier =
    cloudProvider === 'multi'
      ? 0.44
      : cloudProvider === 'aws'
      ? 0.38
      : cloudProvider === 'gcp'
      ? 0.41
      : 0.39;

  // Real-time calculations
  const annualSpend = monthlySpend * 12;
  const annualSavings = Math.round(annualSpend * providerMultiplier);
  const monthlySavings = Math.round(annualSavings / 12);
  const hoursReclaimed = Math.round(clusterCount * 18.5); // Hours per sprint
  const deploymentVelocity = (2.5 + (clusterCount / 50) * 2.5).toFixed(1);

  const handleClaimAudit = () => {
    if (onOpenDemo) {
      onOpenDemo(monthlySpend);
    } else {
      window.dispatchEvent(
        new CustomEvent('open-demo-modal', { detail: { spend: monthlySpend } })
      );
    }
  };

  return (
    <section id="calculator" className="relative py-24 sm:py-32 bg-black/60 backdrop-blur-md cyber-grid-dense border-t border-cyan-500/15">
      {/* Ambient Radial Background */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[350px] bg-teal-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-teal-500/30 text-xs font-mono text-teal-300 uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-teal-400" />
            <span>Interactive FinOps Arbitrage Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Calculate Your <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Enterprise Cloud Savings</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Discover how automated spot arbitrage, dynamic bin-packing, and declarative state orchestration reduce cloud expenditure while accelerating delivery.
          </p>
        </div>

        {/* Interactive Calculator Workspace Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          {/* Top Decorative Border Beam */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-500" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left Controls Column (6 cols) */}
            <div className="lg:col-span-6 space-y-8">

              {/* 1. Monthly Spend Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor={spendSliderId} className="text-xs font-mono text-slate-300 font-semibold uppercase tracking-wider">
                    Current Monthly Cloud Spend ($USD)
                  </label>
                  <span className="text-xl font-bold font-mono text-cyan-300 px-3 py-1 rounded-xl bg-black/80 border border-cyan-500/30">
                    {formatCurrency(monthlySpend)}/mo
                  </span>
                </div>
                <input
                  id={spendSliderId}
                  type="range"
                  min="5000"
                  max="350000"
                  step="5000"
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="w-full h-2.5 bg-black border border-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none"
                  aria-label="Monthly Cloud Spend in USD"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500">
                  <span>$5,000/mo</span>
                  <span>$150,000/mo</span>
                  <span>$350,000+/mo</span>
                </div>
              </div>

              {/* 2. Cluster Count Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor={clusterSliderId} className="text-xs font-mono text-slate-300 font-semibold uppercase tracking-wider">
                    Active Kubernetes Clusters
                  </label>
                  <span className="text-xl font-bold font-mono text-teal-300 px-3 py-1 rounded-xl bg-black/80 border border-teal-500/30">
                    {clusterCount} Clusters
                  </span>
                </div>
                <input
                  id={clusterSliderId}
                  type="range"
                  min="2"
                  max="60"
                  step="1"
                  value={clusterCount}
                  onChange={(e) => setClusterCount(Number(e.target.value))}
                  className="w-full h-2.5 bg-black border border-white/10 rounded-lg appearance-none cursor-pointer accent-teal-400 focus:outline-none"
                  aria-label="Active Kubernetes Clusters count"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500">
                  <span>2 Clusters</span>
                  <span>30 Clusters</span>
                  <span>60+ Multi-Region</span>
                </div>
              </div>

              {/* 3. Primary Cloud Environment Selector */}
              <div className="space-y-3">
                <label className="text-xs font-mono text-slate-300 font-semibold uppercase tracking-wider block">
                  Primary Cloud Infrastructure
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'multi', label: 'Multi-Cloud' },
                    { id: 'aws', label: 'AWS' },
                    { id: 'gcp', label: 'GCP' },
                    { id: 'azure', label: 'Azure' },
                  ].map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setCloudProvider(p.id)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                        cloudProvider === p.id
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400 shadow-neon-cyan'
                          : 'bg-black/80 text-slate-400 border border-white/10 hover:text-white hover:border-cyan-500/30'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Output Dashboard (6 cols) */}
            <div className="lg:col-span-6 space-y-6 lg:pl-4">

              {/* Annual Savings Card */}
              <div className="p-7 rounded-3xl bg-gradient-to-br from-black/90 via-black to-black/90 border border-cyan-400/40 shadow-neon-cyan relative overflow-hidden">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-teal-400 uppercase tracking-widest font-bold">
                      Projected Annual Savings
                    </span>
                    <TrendingDown className="w-5 h-5 text-teal-400 animate-bounce" />
                  </div>
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-black font-mono text-white tracking-tight">
                    <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-white bg-clip-text text-transparent">
                      {formatCurrency(annualSavings)}
                    </span>
                    <span className="text-xs font-mono text-slate-400 font-normal ml-2">/ year</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Calculated via automated spot bidding, CPU right-sizing, and cross-region compute arbitrage.
                  </p>
                </div>

                {/* Sub Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 pt-6 mt-6 border-t border-white/10">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      <span>SRE Time Reclaimed</span>
                    </div>
                    <div className="text-2xl font-bold font-mono text-white">
                      {hoursReclaimed} hrs <span className="text-xs text-slate-400 font-normal">/ sprint</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                      <Zap className="w-3.5 h-3.5 text-teal-400" />
                      <span>Release Velocity</span>
                    </div>
                    <div className="text-2xl font-bold font-mono text-white">
                      {deploymentVelocity}x <span className="text-xs text-slate-400 font-normal">faster</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Monthly Cost Comparison Visualizer */}
              <div className="space-y-3 p-5 rounded-2xl bg-black/70 border border-white/10 text-xs font-mono">
                <div className="flex justify-between items-center text-slate-400">
                  <span>Current Unoptimized Spend:</span>
                  <span className="text-rose-400 line-through font-bold">
                    {formatCurrency(monthlySpend)}/mo
                  </span>
                </div>
                <div className="w-full h-2 bg-black border border-white/10 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-rose-500/60 rounded-full" />
                </div>

                <div className="flex justify-between items-center text-slate-200 pt-1">
                  <span className="text-cyan-300 font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    With CloudFen Autonomous Fabric:
                  </span>
                  <span className="text-emerald-400 font-bold text-sm">
                    {formatCurrency(monthlySpend - monthlySavings)}/mo
                  </span>
                </div>
                <div className="w-full h-2.5 bg-black border border-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full transition-all duration-500"
                    style={{
                      width: `${Math.round(((monthlySpend - monthlySavings) / monthlySpend) * 100)}%`,
                    }}
                  />
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleClaimAudit}
                className="w-full btn-cyber-primary py-4 text-xs sm:text-sm font-mono font-bold flex items-center justify-center gap-2 cursor-pointer shadow-neon-cyan group"
              >
                <span>Claim Free FinOps Architecture Audit ({formatCurrency(monthlySpend)} Stack)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CloudPlayground;
