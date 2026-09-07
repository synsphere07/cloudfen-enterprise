export function renderTestimonials(container) {
  const testimonials = [
    {
      company: 'NeoBank Global',
      badge: 'FINTECH LEADER',
      quote: 'CloudFen slashed our annual multi-cloud spend by $1.42M within 90 days. The automated spot instance arbitrage and sub-second drift detection gave our SRE team their weekends back.',
      author: 'Elena Rostova',
      role: 'VP of Global Infrastructure',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      stats: '$1.42M Saved / Year',
      highlight: '99.999% SLA across AWS & Azure'
    },
    {
      company: 'HyperScale AI',
      badge: 'GENERATIVE AI',
      quote: 'Running large language model inference across heterogeneous GPU clusters used to be a nightmare of manual Kubernetes configs. CloudFen orchestrates our entire compute fabric autonomously.',
      author: 'Marcus Vance',
      role: 'Head of Platform & MLOps',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      stats: '4.8x Faster Model Deploys',
      highlight: 'Dynamic GPU Cluster Spot Arbitrage'
    },
    {
      company: 'PulseHealth Systems',
      badge: 'HEALTHCARE SAAS',
      quote: 'Continuous compliance is non-negotiable for us. CloudFen’s automated OPA policy guardrails and zero-knowledge secret injection reduced our annual HIPAA and SOC 2 audit readiness time from 6 weeks to minutes.',
      author: 'Devon Takahashi',
      role: 'Chief Information Security Officer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      stats: '100% Audit Compliance',
      highlight: 'Automated SOC2 & HIPAA Evidence'
    }
  ];

  const testimonialsHTML = `
    <section id="testimonials" class="py-24 relative bg-slate-950/90 border-t border-cyan-500/15 overflow-hidden">
      <!-- Glow Gradients -->
      <div class="absolute -top-32 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            Customer Success Stories
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Trusted by World-Class <span class="bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">Engineering Teams</span>
          </h2>
          <p class="text-slate-400 text-base sm:text-lg">
            See how forward-thinking platform and DevOps organizations use CloudFen to eliminate infrastructure chaos and deliver unprecedented reliability.
          </p>
        </div>

        <!-- Testimonial Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          ${testimonials.map(t => `
            <div class="glass-card rounded-2xl p-8 border border-cyan-500/20 flex flex-col justify-between group hover:border-cyan-400/50 transition-all duration-300 relative overflow-hidden">
              <!-- Top Accent Beam -->
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div class="space-y-6">
                <!-- Header Badge & Rating -->
                <div class="flex items-center justify-between">
                  <span class="text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-400">
                    ${t.badge}
                  </span>
                  <div class="flex items-center gap-1 text-amber-400 text-xs">
                    ★ ★ ★ ★ ★
                  </div>
                </div>

                <!-- Quote Text -->
                <p class="text-slate-300 text-sm sm:text-base leading-relaxed italic">
                  "${t.quote}"
                </p>

                <!-- Metric Highlight Box -->
                <div class="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs font-mono">
                  <span class="text-teal-300 font-bold">${t.stats}</span>
                  <span class="text-[11px] text-slate-400">${t.company}</span>
                </div>
              </div>

              <!-- Author Info -->
              <div class="pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-3.5">
                <img src="${t.avatar}" alt="${t.author}" class="w-11 h-11 rounded-full object-cover border border-cyan-500/40" />
                <div>
                  <h4 class="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    ${t.author}
                  </h4>
                  <p class="text-xs text-slate-400 font-mono">
                    ${t.role}
                  </p>
                </div>
              </div>

            </div>
          `).join('')}
        </div>

        <!-- Logo Marquee Row -->
        <div class="mt-16 pt-10 border-t border-slate-900/80 text-center">
          <p class="text-xs font-mono uppercase tracking-widest text-slate-500 mb-8">
            Powering mission-critical workloads for industry pioneers
          </p>
          <div class="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-60 hover:opacity-100 transition-opacity text-slate-400 font-mono text-sm font-bold">
            <span>// HYPERSCALE</span>
            <span>// FINEDGE</span>
            <span>// NEXUS_HEALTH</span>
            <span>// SYNAPSE_CLOUD</span>
            <span>// QUANTUM_SEC</span>
          </div>
        </div>

      </div>
    </section>
  `;

  container.innerHTML = testimonialsHTML;
}
