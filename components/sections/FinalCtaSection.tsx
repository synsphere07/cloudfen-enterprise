'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Clock,
} from 'lucide-react';

interface FinalCtaProps {
  onOpenDemo?: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaProps> = ({ onOpenDemo }) => {
  const handleCta = () => {
    if (onOpenDemo) {
      onOpenDemo();
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-900 bg-[#080a0c]/90 overflow-hidden">
      {/* Intense glow ambient backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-amber-500/10 via-amber-400/15 to-yellow-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#111417]/95 via-[#0c0e11]/95 to-[#080a0c]/95 border border-amber-500/30 shadow-[0_0_60px_rgba(255,177,59,0.15)] text-center space-y-8 backdrop-blur-2xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs font-mono font-semibold uppercase tracking-wider shadow-[0_0_15px_rgba(255,177,59,0.2)]">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>Get Started in 4 Weeks</span>
          </div>

          {/* Headline */}
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              Have a workflow{' '}
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
                worth automating?
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Bring us one repetitive, expensive, or slow workflow. We’ll help determine whether an AI agent can improve it — and show you how to measure the result.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={handleCta}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-black bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-[0_0_30px_rgba(255,177,59,0.35)] hover:shadow-[0_0_40px_rgba(255,177,59,0.6)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Book an Agent Readiness Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              href="/solutions"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-slate-200 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-400/50 hover:text-white transition-all"
            >
              <span>Explore Solutions</span>
            </Link>
          </div>

          {/* Trust points */}
          <div className="pt-8 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center justify-center gap-2">
              <Lock className="w-4 h-4 text-amber-400" />
              <span>Standard Mutual NDA</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>30-Minute Technical Fit Call</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Fixed-Price Guarantee</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
