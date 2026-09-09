'use client';

import React, { useState } from 'react';
import {
  TrendingUp,
  Clock,
  DollarSign,
  CheckCircle2,
  AlertCircle,
  Gauge,
  ArrowRight,
  ShieldCheck,
  Zap,
  Calculator,
} from 'lucide-react';

export const RoiMeasurementSection: React.FC = () => {
  const [monthlyVolume, setMonthlyVolume] = useState<number>(1200);
  const [hourlyWage, setHourlyWage] = useState<number>(45);

  // Dynamic calculations based on enterprise benchmarks
  const manualMinutesPerTask = 42;
  const automatedMinutesPerTask = 2.5;

  const manualMonthlyHours = (monthlyVolume * manualMinutesPerTask) / 60;
  const manualMonthlyCost = manualMonthlyHours * hourlyWage;

  const automatedMonthlyHours = (monthlyVolume * automatedMinutesPerTask) / 60;
  const agentOperatingCost = monthlyVolume * 4.2; // approx compute/eval cost
  const humanReviewHours = monthlyVolume * 0.12 * (10 / 60); // 12% exception review @ 10 mins
  const humanReviewCost = humanReviewHours * hourlyWage;

  const totalAutomatedCost = agentOperatingCost + humanReviewCost;
  const monthlySavings = Math.max(0, manualMonthlyCost - totalAutomatedCost);
  const annualSavings = monthlySavings * 12;
  const cycleTimeReduction = 88; // %

  const beforeAfterMetrics = [
    {
      metric: 'Cycle Time per Workflow',
      before: '48 Hours',
      after: '8 Minutes',
      delta: '-99.7%',
      highlight: true,
    },
    {
      metric: 'Direct Cost per Transaction',
      before: '$31.50',
      after: '$4.20',
      delta: '-86.7%',
      highlight: true,
    },
    {
      metric: 'Touchless Automation Rate',
      before: '0%',
      after: '88%',
      delta: '+88 pts',
      highlight: false,
    },
    {
      metric: 'Exception Error Rate',
      before: '4.8%',
      after: '0.2%',
      delta: '-95.8%',
      highlight: false,
    },
    {
      metric: 'Human Escalation Interventions',
      before: '100% manual',
      after: '12% exceptions',
      delta: '-88%',
      highlight: false,
    },
    {
      metric: 'First-Year Net ROI',
      before: '1.0x (Baseline)',
      after: '5.8x Net Return',
      delta: '+480%',
      highlight: true,
    },
  ];

  return (
    <section id="measurement" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-900 bg-black/40">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider">
            Deterministic Value Measurement
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Don’t take our word for it.{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
              Measure it.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Every CloudFen agent is deployed against hard baseline telemetry. We track before-and-after operational metrics down to the minute and dollar.
          </p>
        </div>

        {/* Grid: Live Interactive ROI Calculator + Side-by-Side Audit Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">

          {/* Left: Interactive ROI Estimator (6 cols) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#111522]/90 to-[#0c0e14]/95 border border-cyan-500/30 shadow-2xl backdrop-blur-xl space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                  <Calculator className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Workflow ROI Simulator
                  </h3>
                  <p className="text-xs text-slate-400">Adjust parameters for your team</p>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                Audited Model
              </span>
            </div>

            {/* Slider 1: Monthly Workflow Volume */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-medium">
                <span className="text-slate-300">Monthly Workflow Volume (tasks/month)</span>
                <span className="font-mono text-cyan-400 font-bold text-sm">
                  {monthlyVolume.toLocaleString()} tasks
                </span>
              </div>
              <input
                type="range"
                min="200"
                max="10000"
                step="100"
                value={monthlyVolume}
                onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>200</span>
                <span>5,000</span>
                <span>10,000+</span>
              </div>
            </div>

            {/* Slider 2: Loaded Team Hourly Rate */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-medium">
                <span className="text-slate-300">Fully-Loaded Hourly Rate ($/hr)</span>
                <span className="font-mono text-cyan-400 font-bold text-sm">
                  ${hourlyWage}/hr
                </span>
              </div>
              <input
                type="range"
                min="25"
                max="120"
                step="5"
                value={hourlyWage}
                onChange={(e) => setHourlyWage(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>$25/hr</span>
                <span>$65/hr</span>
                <span>$120/hr</span>
              </div>
            </div>

            {/* Simulated Results Box */}
            <div className="p-4 rounded-xl bg-zinc-950/90 border border-zinc-800/80 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase">Current Manual Spend</div>
                  <div className="text-lg font-bold font-mono text-red-400 mt-0.5">
                    ${Math.round(manualMonthlyCost).toLocaleString()} /mo
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono">
                    {Math.round(manualMonthlyHours)} human hours
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase">CloudFen Agent Cost</div>
                  <div className="text-lg font-bold font-mono text-cyan-400 mt-0.5">
                    ${Math.round(totalAutomatedCost).toLocaleString()} /mo
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono">
                    Compute + 12% review
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                    Estimated Annual Net Savings
                  </div>
                  <div className="text-2xl sm:text-3xl font-mono font-bold text-emerald-300 mt-0.5">
                    ${Math.round(annualSavings).toLocaleString()} / yr
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-mono text-slate-400">Cycle Time Reduction</div>
                  <div className="text-lg font-mono font-bold text-cyan-300">
                    -{cycleTimeReduction}%
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Baseline figures are audited and locked during Week 1 of your Readiness Sprint.</span>
            </div>
          </div>

          {/* Right: Side-by-Side Before/After Benchmark Table (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Audited Before & After Scorecard
                </h3>
                <p className="text-xs text-slate-400">Averaged across live enterprise production workloads</p>
              </div>
              <span className="text-xs font-mono text-cyan-400 font-semibold">
                N=42 Deployments
              </span>
            </div>

            <div className="space-y-2.5">
              {beforeAfterMetrics.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl border transition-all ${
                    item.highlight
                      ? 'bg-cyan-950/20 border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.1)]'
                      : 'bg-zinc-900/40 border-zinc-800/80'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm font-semibold text-slate-200">
                      {item.metric}
                    </span>
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                      item.highlight ? 'bg-emerald-500/20 text-emerald-300' : 'bg-zinc-800 text-slate-300'
                    }`}>
                      {item.delta}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-1 border-t border-zinc-800/60">
                    <div>
                      <span className="text-slate-500">Manual Baseline: </span>
                      <span className="text-slate-300 font-medium">{item.before}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-slate-500">CloudFen Agent: </span>
                      <span className="text-cyan-300 font-bold">{item.after}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default RoiMeasurementSection;
