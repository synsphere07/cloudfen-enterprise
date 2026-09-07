'use client';

import React from 'react';
import { Quote, Star, Building2, TrendingUp } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote:
        'CloudFen reduced our monthly AWS & GCP bill by $140,000 within 60 days through automated spot compute arbitrage. Our engineering teams deploy 5x faster with zero configuration drift.',
      author: 'Marcus Vance',
      role: 'VP of Global Infrastructure',
      company: 'OmniStream Media (120M MAU)',
      metrics: '$1.68M Annual Cloud Savings',
      rating: 5,
    },
    {
      quote:
        'The zero-trust eBPF mesh eliminated all our sidecar proxy latency overhead. We passed our SOC 2 Type II and HIPAA audits in record time with automated evidence collection.',
      author: 'Dr. Elena Rostova',
      role: 'Chief Information Security Officer',
      company: 'BioHealth Cloud Platforms',
      metrics: '100% Automated Compliance',
      rating: 5,
    },
    {
      quote:
        'Managing 40+ Kubernetes clusters across Azure and AWS was a nightmare before CloudFen. The declarative GitOps canary engine has given us 99.999% uptime with zero deployment panic.',
      author: 'Siddharth Rao',
      role: 'Principal Platform Architect',
      company: 'FinX Global Clearing',
      metrics: '99.999% Production Uptime',
      rating: 5,
    },
  ];

  return (
    <section id="industries" className="relative py-24 sm:py-32 bg-black/60 backdrop-blur-md cyber-grid border-t border-cyan-500/15 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400 uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Enterprise Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Trusted by Leaders at <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">Mission-Critical Scale</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            See how engineering teams achieve multi-cloud agility, 40%+ FinOps cost reduction, and zero-downtime releases.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent */}
              <div className="space-y-6">
                {/* Metric Badge & Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-cyan-300 font-bold px-2.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30">
                    {item.metrics}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Role */}
              <div className="pt-6 mt-6 border-t border-white/10 space-y-1">
                <div className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.author}
                </div>
                <div className="text-xs text-cyan-400 font-mono">
                  {item.role}
                </div>
                <div className="text-xs text-slate-500 font-mono">
                  {item.company}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
