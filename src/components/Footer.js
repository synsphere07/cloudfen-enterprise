export function renderFooter(container) {
  const footerHTML = `
    <footer class="relative bg-slate-950 border-t border-cyan-500/15 overflow-hidden text-xs text-slate-400">
      <!-- Glow ambient backdrop -->
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-500/5 rounded-full blur-[180px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 space-y-12">

        <!-- Top Newsletter & Status Row -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 border-b border-slate-900">
          <div class="lg:col-span-6 space-y-3">
            <div class="flex items-center gap-3">
              <!-- Live Status Pill -->
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-emerald-500/30 text-emerald-400 font-mono text-[11px]">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>ALL SYSTEMS OPERATIONAL · 99.999% SLA</span>
              </div>
            </div>
            <h3 class="text-xl font-bold text-white tracking-tight">
              Stay ahead in Autonomous Multi-Cloud & GitOps
            </h3>
            <p class="text-slate-400 text-xs sm:text-sm">
              Receive bi-weekly architecture teardowns, zero-day security advisories, and FinOps optimization playbooks.
            </p>
          </div>

          <div class="lg:col-span-6">
            <form id="newsletter-form" class="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                id="newsletter-email"
                placeholder="developer@company.com"
                class="flex-1 px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-400 font-mono placeholder:text-slate-600"
              />
              <button
                type="submit"
                class="btn-cyber-primary px-6 py-3 text-xs font-mono font-bold shrink-0 cursor-pointer shadow-md"
              >
                Subscribe to Dispatch
              </button>
            </form>
            <p id="newsletter-success" class="hidden text-xs text-teal-400 font-mono mt-2">
              ✓ Subscribed! Check your inbox for the latest Multi-Cloud Playbook.
            </p>
          </div>
        </div>

        <!-- Main Links Grid -->
        <div class="grid grid-cols-2 md:grid-cols-5 gap-8">

          <!-- Brand Column -->
          <div class="col-span-2 space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 via-teal-400 to-indigo-600 flex items-center justify-center shadow-neon-cyan">
                <svg class="w-5 h-5 text-slate-950 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"/>
                </svg>
              </div>
              <span class="font-mono text-lg font-extrabold tracking-wider text-white">
                CLOUD<span class="text-cyan-400">FEN</span>
              </span>
            </div>
            <p class="text-slate-400 text-xs leading-relaxed max-w-sm">
              The autonomous multi-cloud control plane engineered for mission-critical enterprise infrastructure, GitOps velocity, and FinOps efficiency.
            </p>
            <div class="flex items-center gap-4 text-slate-500 font-mono text-xs">
              <a href="https://github.com" target="_blank" rel="noreferrer" class="hover:text-cyan-400 transition-colors">GitHub</a>
              <span>·</span>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" class="hover:text-cyan-400 transition-colors">X / Twitter</a>
              <span>·</span>
              <a href="https://discord.com" target="_blank" rel="noreferrer" class="hover:text-cyan-400 transition-colors">Discord</a>
              <span>·</span>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" class="hover:text-cyan-400 transition-colors">LinkedIn</a>
            </div>
          </div>

          <!-- Platform Links -->
          <div class="space-y-3">
            <h4 class="font-mono font-bold text-white text-xs uppercase tracking-wider">Platform</h4>
            <ul class="space-y-2 text-slate-400">
              <li><a href="#solutions" class="hover:text-cyan-300 transition-colors">Multi-Cloud IaC</a></li>
              <li><a href="#solutions" class="hover:text-cyan-300 transition-colors">Autonomous GitOps</a></li>
              <li><a href="#calculator" class="hover:text-cyan-300 transition-colors">FinOps Arbitrage</a></li>
              <li><a href="#pipeline" class="hover:text-cyan-300 transition-colors">Canary Deployer</a></li>
              <li><a href="#architecture" class="hover:text-cyan-300 transition-colors">eBPF Security Mesh</a></li>
            </ul>
          </div>

          <!-- Developers -->
          <div class="space-y-3">
            <h4 class="font-mono font-bold text-white text-xs uppercase tracking-wider">Developers</h4>
            <ul class="space-y-2 text-slate-400">
              <li><a href="#docs" class="hover:text-cyan-300 transition-colors">Documentation</a></li>
              <li><a href="#docs" class="hover:text-cyan-300 transition-colors">Terraform Provider</a></li>
              <li><a href="#docs" class="hover:text-cyan-300 transition-colors">Helm Charts</a></li>
              <li><a href="#docs" class="hover:text-cyan-300 transition-colors">CLI Reference</a></li>
              <li><a href="#docs" class="hover:text-cyan-300 transition-colors">Status & Telemetry</a></li>
            </ul>
          </div>

          <!-- Security & Legal -->
          <div class="space-y-3">
            <h4 class="font-mono font-bold text-white text-xs uppercase tracking-wider">Compliance</h4>
            <ul class="space-y-2 text-slate-400">
              <li><a href="#architecture" class="hover:text-cyan-300 transition-colors">SOC 2 Type II Report</a></li>
              <li><a href="#architecture" class="hover:text-cyan-300 transition-colors">ISO 27001 Certified</a></li>
              <li><a href="#architecture" class="hover:text-cyan-300 transition-colors">HIPAA Enclave</a></li>
              <li><a href="#privacy" class="hover:text-cyan-300 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" class="hover:text-cyan-300 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        <!-- Bottom Copyright Row -->
        <div class="pt-8 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-500">
          <div>
            © 2026 CloudFen Inc. All rights reserved. Autonomous Multi-Cloud Fabric.
          </div>
          <div class="flex items-center gap-4">
            <span class="text-cyan-400">US-EAST / EU-CENTRAL / AP-SOUTH</span>
            <span>·</span>
            <span>v4.8.2-GA</span>
          </div>
        </div>

      </div>
    </footer>
  `;

  container.innerHTML = footerHTML;

  // Newsletter form logic
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterSuccess = document.getElementById('newsletter-success');

  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    newsletterForm.classList.add('hidden');
    newsletterSuccess.classList.remove('hidden');
  });
}
