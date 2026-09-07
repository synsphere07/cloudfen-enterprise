export function renderStatsBar(container) {
  const statsHTML = `
    <section class="relative py-12 bg-slate-950/80 border-y border-cyan-500/15 overflow-hidden">
      <!-- Ambient Glow Behind Logos -->
      <div class="absolute inset-0 bg-radial-glow opacity-50 pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <!-- Metrics Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800/80 pb-10">
          <div class="pt-4 md:pt-0">
            <div class="text-3xl sm:text-4xl font-extrabold text-white font-mono flex items-center justify-center gap-1">
              <span class="text-cyan-400">$240M</span><span>+</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Cloud Infrastructure Managed</p>
          </div>

          <div class="pt-4 md:pt-0">
            <div class="text-3xl sm:text-4xl font-extrabold text-white font-mono flex items-center justify-center gap-1">
              <span class="text-teal-400">99.999%</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Zero-Downtime Reliability SLA</p>
          </div>

          <div class="pt-4 md:pt-0">
            <div class="text-3xl sm:text-4xl font-extrabold text-white font-mono flex items-center justify-center gap-1">
              <span class="text-sky-400">4.2x</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Faster GitOps Cycle Time</p>
          </div>

          <div class="pt-4 md:pt-0">
            <div class="text-3xl sm:text-4xl font-extrabold text-white font-mono flex items-center justify-center gap-1">
              <span class="text-indigo-400">1.8M</span><span>+</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Autonomous Deployments / Mo</p>
          </div>
        </div>

        <!-- Ecosystem & Cloud Partner Marquee -->
        <div class="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <span class="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
            Certified Cloud & DevOps Ecosystem:
          </span>

          <div class="flex flex-wrap items-center justify-center md:justify-end gap-8 text-slate-400 text-sm font-semibold">
            <!-- AWS Badge -->
            <div class="flex items-center gap-2 hover:text-white transition-colors">
              <span class="text-amber-400 font-bold font-mono">AWS</span>
              <span class="text-xs text-slate-500 font-normal">Partner Network</span>
            </div>

            <!-- Azure Badge -->
            <div class="flex items-center gap-2 hover:text-white transition-colors">
              <span class="text-sky-400 font-bold font-mono">Azure</span>
              <span class="text-xs text-slate-500 font-normal">Gold Partner</span>
            </div>

            <!-- Google Cloud Badge -->
            <div class="flex items-center gap-2 hover:text-white transition-colors">
              <span class="text-rose-400 font-bold font-mono">Google Cloud</span>
              <span class="text-xs text-slate-500 font-normal">Premier</span>
            </div>

            <!-- Kubernetes CNCF -->
            <div class="flex items-center gap-2 hover:text-white transition-colors">
              <span class="text-blue-400 font-bold font-mono">Kubernetes</span>
              <span class="text-xs text-slate-500 font-normal">CNCF Member</span>
            </div>

            <!-- Terraform -->
            <div class="flex items-center gap-2 hover:text-white transition-colors">
              <span class="text-purple-400 font-bold font-mono">Terraform</span>
              <span class="text-xs text-slate-500 font-normal">Verified Provider</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;

  container.innerHTML = statsHTML;
}
