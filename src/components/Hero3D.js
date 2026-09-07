import { CloudFen3DLogo } from '../utils/threeLogo.js';

export function renderHero(container) {
  const heroHTML = `
    <section id="hero" class="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-cyber-grid">
      <!-- Radial Lighting Glow Backgrounds -->
      <div class="absolute inset-0 bg-radial-gradient pointer-events-none"></div>
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div class="absolute bottom-10 right-10 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <!-- Left Column: Value Proposition & CTAs -->
          <div class="lg:col-span-7 text-left space-y-7">

            <!-- Live Release Tag -->
            <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <span class="status-beacon"></span>
              <span class="font-semibold tracking-wider uppercase text-[11px]">CloudFen Engine v4.8 Active</span>
              <span class="text-slate-500">|</span>
              <span class="text-slate-300 flex items-center gap-1">
                Zero-Trust Mesh Ready
              </span>
            </div>

            <!-- Main Headline -->
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Autonomous
              <span class="bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400 bg-clip-text text-transparent text-glow-cyan">
                Multi-Cloud & DevOps
              </span>
              at Hyper-Scale.
            </h1>

            <!-- Subheading -->
            <p class="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
              Unify AWS, Azure, Google Cloud, and Kubernetes clusters into a single resilient control plane. Accelerate GitOps pipelines by <span class="text-cyan-400 font-semibold">4.2x</span> and reduce cloud waste with automated FinOps intelligence.
            </p>

            <!-- Action Buttons -->
            <div class="flex flex-wrap items-center gap-4 pt-2">
              <button id="hero-cta-demo" class="btn-cyber-primary px-7 py-3.5 text-base font-semibold flex items-center gap-2 group cursor-pointer">
                <span>Deploy Free Trial</span>
                <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </button>

              <a href="#calculator" class="btn-cyber-secondary px-6 py-3.5 text-base font-medium flex items-center gap-2 hover:text-cyan-300 transition-colors">
                <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
                <span>Calculate Cloud ROI</span>
              </a>
            </div>

            <!-- Quick CLI Copy Box -->
            <div class="pt-2">
              <div class="inline-flex items-center gap-3 px-4 py-2.5 code-block text-xs sm:text-sm text-slate-300 max-w-md w-full justify-between group shadow-lg">
                <div class="flex items-center gap-2 font-mono overflow-x-auto text-slate-300">
                  <span class="text-cyan-400 font-bold">$</span>
                  <span id="cli-command" class="text-slate-200">curl -fsSL https://get.cloudfen.io | sh</span>
                </div>
                <button id="copy-cli-btn" class="text-slate-400 hover:text-cyan-400 p-1.5 rounded transition-colors" title="Copy install command">
                  <svg id="copy-icon" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                  </svg>
                  <span id="copied-badge" class="hidden text-xs text-cyan-400 font-mono font-semibold">Copied!</span>
                </button>
              </div>
            </div>

            <!-- Key Feature Highlights -->
            <div class="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
              <div>
                <p class="text-2xl font-bold text-white font-mono">99.999%</p>
                <p class="text-xs text-slate-400 uppercase tracking-wider mt-0.5">Uptime SLA</p>
              </div>
              <div>
                <p class="text-2xl font-bold text-cyan-400 font-mono">4.2x</p>
                <p class="text-xs text-slate-400 uppercase tracking-wider mt-0.5">GitOps Velocity</p>
              </div>
              <div>
                <p class="text-2xl font-bold text-teal-400 font-mono">-43%</p>
                <p class="text-xs text-slate-400 uppercase tracking-wider mt-0.5">Cloud Waste</p>
              </div>
            </div>

          </div>

          <!-- Right Column: 3D Interactive WebGL Canvas with Cyber HUD Frame -->
          <div class="lg:col-span-5 relative">
            <div class="relative w-full aspect-square max-w-[540px] mx-auto rounded-2xl glass-panel p-2 border border-cyan-500/25 glow-box-pulse">

              <!-- HUD Corner Target Brackets -->
              <div class="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400 pointer-events-none z-20"></div>
              <div class="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-400 pointer-events-none z-20"></div>
              <div class="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-cyan-400 pointer-events-none z-20"></div>
              <div class="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-cyan-400 pointer-events-none z-20"></div>

              <!-- Top HUD Telemetry Bar -->
              <div class="absolute top-4 left-6 right-6 flex items-center justify-between text-[11px] font-mono text-cyan-400/80 pointer-events-none z-20">
                <span class="flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                  CORE_ORBIT: 3D_ACTIVE
                </span>
                <span>NODES: 4,820 LIVE</span>
              </div>

              <!-- WebGL Canvas Container -->
              <div id="three-hero-container" class="w-full h-full rounded-xl overflow-hidden cursor-grab active:cursor-grabbing relative">
                <!-- Three.js will inject canvas here -->
              </div>

              <!-- Bottom HUD Status -->
              <div class="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[10px] font-mono text-slate-400 pointer-events-none z-20 bg-slate-950/60 px-3 py-1.5 rounded-lg border border-slate-800">
                <span class="text-teal-400 font-semibold">INTERACTIVE 3D EMBLEM</span>
                <span>DRAG / MOVE CURSOR</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;

  container.innerHTML = heroHTML;

  // Initialize Three.js Logo
  const threeContainer = document.getElementById('three-hero-container');
  if (threeContainer) {
    new CloudFen3DLogo(threeContainer);
  }

  // CLI Copy functionality
  const copyBtn = document.getElementById('copy-cli-btn');
  const copyIcon = document.getElementById('copy-icon');
  const copiedBadge = document.getElementById('copied-badge');
  const cliText = document.getElementById('cli-command')?.innerText;

  if (copyBtn && cliText) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(cliText).then(() => {
        copyIcon.classList.add('hidden');
        copiedBadge.classList.remove('hidden');
        setTimeout(() => {
          copyIcon.classList.remove('hidden');
          copiedBadge.classList.add('hidden');
        }, 2200);
      });
    });
  }

  // Hero CTA Demo trigger
  const heroDemoBtn = document.getElementById('hero-cta-demo');
  if (heroDemoBtn) {
    heroDemoBtn.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('open-demo-modal'));
    });
  }
}
