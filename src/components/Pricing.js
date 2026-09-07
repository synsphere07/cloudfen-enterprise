export function renderPricing(container) {
  const pricingHTML = `
    <section id="pricing" class="py-24 relative bg-slate-950/80 border-t border-cyan-500/15 overflow-hidden">
      <!-- Glow Background Elements -->
      <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            Transparent Pricing
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Predictable Plans for <span class="bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">Every Scale</span>
          </h2>
          <p class="text-slate-400 text-base sm:text-lg">
            Start free, scale seamlessly across clouds. No hidden fees or arbitrary compute penalties.
          </p>
        </div>

        <!-- Monthly / Annual Toggle Switch -->
        <div class="flex items-center justify-center gap-4 mb-16 font-mono text-xs">
          <span id="monthly-label" class="text-white font-semibold transition-colors">Monthly Billing</span>
          <button id="billing-toggle" class="w-14 h-7 rounded-full glass-panel border border-cyan-500/40 p-1 relative flex items-center cursor-pointer transition-colors" aria-label="Toggle Billing Frequency">
            <div id="toggle-thumb" class="w-5 h-5 rounded-full bg-cyan-400 shadow-neon-cyan transition-transform duration-300 translate-x-0"></div>
          </button>
          <div class="flex items-center gap-2">
            <span id="annual-label" class="text-slate-400 font-semibold transition-colors">Annual Billing</span>
            <span class="px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-[10px] font-bold animate-pulse">
              SAVE 20%
            </span>
          </div>
        </div>

        <!-- Pricing Cards Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">

          <!-- Starter Tier -->
          <div class="glass-card rounded-3xl p-8 border border-slate-800 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300">
            <div class="space-y-6">
              <div>
                <span class="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Developer</span>
                <h3 class="text-2xl font-bold text-white mt-1">Starter Mesh</h3>
                <p class="text-slate-400 text-xs mt-2 leading-relaxed">
                  Perfect for indie developers, startups, and evaluating multi-cloud GitOps.
                </p>
              </div>

              <div class="flex items-baseline gap-1 font-mono">
                <span class="text-4xl font-black text-white">$0</span>
                <span class="text-xs text-slate-400 font-normal">/ forever</span>
              </div>

              <ul class="space-y-3 pt-6 border-t border-slate-800 text-xs text-slate-300">
                <li class="flex items-center gap-2.5">
                  <span class="text-cyan-400">✓</span>
                  <span>Up to 3 Connected Clusters</span>
                </li>
                <li class="flex items-center gap-2.5">
                  <span class="text-cyan-400">✓</span>
                  <span>Core GitOps Pipeline (50 deploys/mo)</span>
                </li>
                <li class="flex items-center gap-2.5">
                  <span class="text-cyan-400">✓</span>
                  <span>Automated Terraform Drift Scan</span>
                </li>
                <li class="flex items-center gap-2.5">
                  <span class="text-cyan-400">✓</span>
                  <span>Community Discord Support</span>
                </li>
              </ul>
            </div>

            <div class="pt-8 mt-6 border-t border-slate-800">
              <button class="open-demo-btn w-full py-3 rounded-xl border border-slate-700 bg-slate-900/80 hover:border-cyan-400 text-white text-xs font-mono font-bold transition-all cursor-pointer">
                Deploy Free Cluster
              </button>
            </div>
          </div>

          <!-- Pro Tier (Highlighted) -->
          <div class="glass-card rounded-3xl p-8 border-2 border-cyan-400/80 flex flex-col justify-between relative shadow-neon-cyan scale-[1.02] bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-950">
            <!-- Popular Badge -->
            <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 text-[10px] font-mono font-black uppercase tracking-wider shadow-md">
              MOST POPULAR · ENTERPRISE GRADE
            </div>

            <div class="space-y-6">
              <div>
                <span class="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">Scale-Up Teams</span>
                <h3 class="text-2xl font-bold text-white mt-1">Pro Platform</h3>
                <p class="text-slate-300 text-xs mt-2 leading-relaxed">
                  Full multi-cloud autonomy, FinOps spot arbitrage, and zero-downtime canary rollouts.
                </p>
              </div>

              <div class="flex items-baseline gap-1 font-mono">
                <span id="pro-price" class="text-4xl font-black text-cyan-300">$199</span>
                <span id="pro-period" class="text-xs text-slate-400 font-normal">/ month</span>
              </div>

              <ul class="space-y-3 pt-6 border-t border-slate-800 text-xs text-slate-200 font-medium">
                <li class="flex items-center gap-2.5">
                  <span class="text-teal-400">✓</span>
                  <span>Up to 25 Clusters (AWS, Azure, GCP, K3s)</span>
                </li>
                <li class="flex items-center gap-2.5">
                  <span class="text-teal-400">✓</span>
                  <span>Unlimited Canary & GitOps Releases</span>
                </li>
                <li class="flex items-center gap-2.5">
                  <span class="text-teal-400">✓</span>
                  <span>Real-Time Spot Compute Arbitrage (~43% Cut)</span>
                </li>
                <li class="flex items-center gap-2.5">
                  <span class="text-teal-400">✓</span>
                  <span>Zero-Trust eBPF Mesh & Auto-Rotation</span>
                </li>
                <li class="flex items-center gap-2.5">
                  <span class="text-teal-400">✓</span>
                  <span>99.95% Availability SLA & 24/7 Slack Support</span>
                </li>
              </ul>
            </div>

            <div class="pt-8 mt-6 border-t border-slate-800">
              <button class="open-demo-btn w-full btn-cyber-primary py-3.5 text-xs font-mono font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg">
                <span>Start 14-Day Free Trial</span>
                <span>➔</span>
              </button>
            </div>
          </div>

          <!-- Enterprise Tier -->
          <div class="glass-card rounded-3xl p-8 border border-slate-800 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300">
            <div class="space-y-6">
              <div>
                <span class="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Mission-Critical</span>
                <h3 class="text-2xl font-bold text-white mt-1">Enterprise Sovereign</h3>
                <p class="text-slate-400 text-xs mt-2 leading-relaxed">
                  Dedicated control plane enclaves, custom compliance automation, and 24/7 dedicated SRE.
                </p>
              </div>

              <div class="flex items-baseline gap-1 font-mono">
                <span class="text-4xl font-black text-white">Custom</span>
                <span class="text-xs text-slate-400 font-normal">/ annual contract</span>
              </div>

              <ul class="space-y-3 pt-6 border-t border-slate-800 text-xs text-slate-300">
                <li class="flex items-center gap-2.5">
                  <span class="text-cyan-400">✓</span>
                  <span>Unlimited Heterogeneous Multi-Cloud Nodes</span>
                </li>
                <li class="flex items-center gap-2.5">
                  <span class="text-cyan-400">✓</span>
                  <span>Dedicated VPC Air-Gapped Control Plane</span>
                </li>
                <li class="flex items-center gap-2.5">
                  <span class="text-cyan-400">✓</span>
                  <span>Continuous SOC2, HIPAA, ISO27001 Suites</span>
                </li>
                <li class="flex items-center gap-2.5">
                  <span class="text-cyan-400">✓</span>
                  <span>99.999% Multi-Region SLA with Financial Backing</span>
                </li>
                <li class="flex items-center gap-2.5">
                  <span class="text-cyan-400">✓</span>
                  <span>Dedicated Solutions Architect & SRE Team</span>
                </li>
              </ul>
            </div>

            <div class="pt-8 mt-6 border-t border-slate-800">
              <button class="open-demo-btn w-full py-3 rounded-xl border border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold transition-all cursor-pointer">
                Contact Enterprise Sales
              </button>
            </div>
          </div>

        </div>

        <!-- FAQ Section -->
        <div class="max-w-4xl mx-auto space-y-6 pt-12 border-t border-slate-900">
          <div class="text-center space-y-2 mb-10">
            <h3 class="text-2xl font-bold text-white">Frequently Asked Questions</h3>
            <p class="text-slate-400 text-xs sm:text-sm">Everything you need to know about adopting CloudFen.</p>
          </div>

          <div class="space-y-4">
            <!-- FAQ 1 -->
            <div class="faq-item glass-panel rounded-2xl border border-slate-800 overflow-hidden transition-colors">
              <button class="faq-toggle w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer text-sm font-bold text-white hover:text-cyan-300">
                <span>How does CloudFen connect to our existing AWS, GCP, and Azure accounts?</span>
                <span class="faq-icon text-cyan-400 font-mono text-lg transition-transform">+</span>
              </button>
              <div class="faq-content hidden px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                CloudFen uses read/write IAM role assumption with zero long-lived credentials. You simply execute our Terraform module or Helm chart to establish a zero-trust mTLS enclave connection between your clusters and the CloudFen control plane.
              </div>
            </div>

            <!-- FAQ 2 -->
            <div class="faq-item glass-panel rounded-2xl border border-slate-800 overflow-hidden transition-colors">
              <button class="faq-toggle w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer text-sm font-bold text-white hover:text-cyan-300">
                <span>How does the automated FinOps spot arbitrage work without risking downtime?</span>
                <span class="faq-icon text-cyan-400 font-mono text-lg transition-transform">+</span>
              </button>
              <div class="faq-content hidden px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                CloudFen's ML engine monitors AWS/GCP spot price trends and spot termination notices. Non-critical batch and stateless microservices are dynamically scheduled onto spot compute, while stateful workloads remain on on-demand nodes with automated fallback failover in under 120ms.
              </div>
            </div>

            <!-- FAQ 3 -->
            <div class="faq-item glass-panel rounded-2xl border border-slate-800 overflow-hidden transition-colors">
              <button class="faq-toggle w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer text-sm font-bold text-white hover:text-cyan-300">
                <span>Can we deploy CloudFen inside our own air-gapped on-premises VPC?</span>
                <span class="faq-icon text-cyan-400 font-mono text-lg transition-transform">+</span>
              </button>
              <div class="faq-content hidden px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                Yes. Our Enterprise Sovereign tier supports full on-premises, air-gapped, and government cloud deployments with complete self-hosted control planes, automated offline licensing, and local policy enforcement.
              </div>
            </div>

            <!-- FAQ 4 -->
            <div class="faq-item glass-panel rounded-2xl border border-slate-800 overflow-hidden transition-colors">
              <button class="faq-toggle w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer text-sm font-bold text-white hover:text-cyan-300">
                <span>What happens if CloudFen control plane is unreachable?</span>
                <span class="faq-icon text-cyan-400 font-mono text-lg transition-transform">+</span>
              </button>
              <div class="faq-content hidden px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                Your infrastructure never stops running. CloudFen employs a decentralized edge agent architecture. If the central control plane is momentarily unreachable, your local Kubernetes clusters and cloud resources continue operating normally with cached state and zero disruption.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;

  container.innerHTML = pricingHTML;

  // Monthly vs Annual Toggle
  const billingToggle = document.getElementById('billing-toggle');
  const toggleThumb = document.getElementById('toggle-thumb');
  const monthlyLabel = document.getElementById('monthly-label');
  const annualLabel = document.getElementById('annual-label');
  const proPrice = document.getElementById('pro-price');
  const proPeriod = document.getElementById('pro-period');

  let isAnnual = false;

  billingToggle.addEventListener('click', () => {
    isAnnual = !isAnnual;
    if (isAnnual) {
      toggleThumb.classList.remove('translate-x-0');
      toggleThumb.classList.add('translate-x-7');
      annualLabel.classList.remove('text-slate-400');
      annualLabel.classList.add('text-white');
      monthlyLabel.classList.remove('text-white');
      monthlyLabel.classList.add('text-slate-400');

      proPrice.innerText = '$159';
      proPeriod.innerText = '/ mo (billed annually)';
    } else {
      toggleThumb.classList.add('translate-x-0');
      toggleThumb.classList.remove('translate-x-7');
      monthlyLabel.classList.add('text-white');
      monthlyLabel.classList.remove('text-slate-400');
      annualLabel.classList.add('text-slate-400');
      annualLabel.classList.remove('text-white');

      proPrice.innerText = '$199';
      proPeriod.innerText = '/ month';
    }
  });

  // FAQ Accordions
  const faqItems = container.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const toggle = item.querySelector('.faq-toggle');
    const content = item.querySelector('.faq-content');
    const icon = item.querySelector('.faq-icon');

    toggle.addEventListener('click', () => {
      const isExpanded = !content.classList.contains('hidden');

      // Close all other FAQs
      faqItems.forEach(other => {
        other.querySelector('.faq-content').classList.add('hidden');
        other.querySelector('.faq-icon').innerText = '+';
        other.querySelector('.faq-icon').classList.remove('rotate-45');
      });

      if (!isExpanded) {
        content.classList.remove('hidden');
        icon.innerText = '−';
      }
    });
  });

  // Modal Open Handlers
  container.querySelectorAll('.open-demo-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('open-demo-modal'));
    });
  });
}
