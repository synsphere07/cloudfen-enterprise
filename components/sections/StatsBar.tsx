'use client';

import React from 'react';
import { SYSTEM_METRICS, TRUST_BADGES } from '@/lib/constants';
import { TrendingUp, Cpu, Award, ShieldCheck } from 'lucide-react';

export const StatsBar: React.FC = () => {
  return (
    <section id="about-us" className="relative bg-black/60 backdrop-blur-md border-y border-cyan-500/15 py-14 overflow-hidden scroll-mt-20">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/20 via-black/40 to-cyan-950/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

        {/* 4 Core Quantitative KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SYSTEM_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 relative group"
            >
              {/* Top Trend Pill */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono text-cyan-400 font-semibold px-2 py-0.5 rounded-full bg-black/80 border border-cyan-500/30">
                  {metric.trend}
                </span>
                <TrendingUp className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>

              {/* Big Metric Value */}
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-mono tracking-tight group-hover:text-cyan-300 transition-colors">
                {metric.value}
              </div>

              {/* Label & Description */}
              <div className="mt-2 space-y-1">
                <div className="text-sm font-bold text-slate-200">
                  {metric.label}
                </div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  {metric.description}
                </div>
              </div>

              {/* Bottom Subtle Glowing Line */}
              <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Cloud Partner Ecosystem Badges */}
        <div className="pt-6 border-t border-white/10">
          <div className="text-center space-y-2 mb-6">
            <p className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Validated & Certified with Industry-Leading Cloud Ecosystems
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {TRUST_BADGES.map((badge, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-black/70 border border-white/10 hover:border-cyan-500/40 transition-all duration-200 group text-center"
              >
                <div className="w-8 h-8 rounded-lg bg-black border border-white/15 flex items-center justify-center mb-2 text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-500/40 transition-colors">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors">
                  {badge.name}
                </span>
                <span className="text-[10px] font-mono text-slate-500">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default StatsBar;
