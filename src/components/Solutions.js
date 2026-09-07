export function renderSolutions(container) {
  const solutionsData = [
    {
      id: 'iac',
      category: 'infrastructure',
      title: 'Multi-Cloud IaC & Drift Engine',
      subtitle: 'Terraform · OpenTofu · Pulumi',
      description: 'Unified declarative orchestration across AWS, Azure, GCP, and bare metal with sub-second state reconciliation, automated policy guardrails, and instant drift healing.',
      iconColor: 'from-cyan-500 to-blue-600',
      features: ['Automated Drift Detection & Auto-Sync', 'Cross-Cloud State Synchronization', 'Policy-as-Code (OPA & Sentinel) Guardrails'],
      metric: '0.4s Drift Detection'
    },
    {
      id: 'gitops',
      category: 'gitops',
      title: 'Autonomous GitOps & Canary Engine',
      subtitle: 'ArgoCD · Flux · Helm',
      description: 'Ship 4.2x faster with automated GitOps pipelines, progressive canary rollouts, traffic splitting, and machine-learning driven automated rollback on anomaly detection.',
      iconColor: 'from-teal-400 to-emerald-600',
      features: ['AI-Powered Progressive Canary Rollouts', 'Zero-Downtime Blue/Green Switches', 'Multi-Cluster Synchronization'],
      metric: '99.999% Release Success'
    },
    {
      id: 'finops',
      category: 'finops',
      title: 'Real-Time FinOps & Spot Arbitrage',
      subtitle: 'Cost AI · Spot Orchestrator',
      description: 'Continuously analyze workload utilization to automatically migrate non-critical jobs to spot instances and rightsized compute, delivering guaranteed 35-50% savings.',
      iconColor: 'from-amber-400 to-orange-600',
      features: ['Real-Time Spot Instance Failover Protection', 'Granular Unit-Cost Telemetry per Microservice', 'Autonomous Cluster Rightsizing'],
      metric: '43% Avg. Spend Cut'
    },
    {
      id: 'security',
      category: 'security',
      title: 'Zero-Trust Mesh & Secret Vault',
      subtitle: 'eBPF · SOC2 · Vault',
      description: 'Hardware-isolated micro-segmentation, dynamic ephemeral mTLS certificates, automated SOC2/HIPAA compliance evidence collection, and zero-knowledge secret injection.',
      iconColor: 'from-indigo-500 to-purple-600',
      features: ['Kernel-Level eBPF Network Security', 'Dynamic Secret Enclaves & Auto-Rotation', 'Continuous SOC2 & ISO27001 Auditing'],
      metric: 'Zero-Trust Validated'
    },
    {
      id: 'observability',
      category: 'observability',
      title: 'Predictive Observability & Auto-Healing',
      subtitle: 'OpenTelemetry · eBPF Tracing',
      description: 'Deep distributed tracing across global clusters with instant anomaly correlation and autonomous remediation before latency spikes affect end users.',
      iconColor: 'from-sky-400 to-cyan-600',
      features: ['Zero-Overhead Kernel Telemetry', 'AI Anomaly & Root Cause Diagnosis', 'Self-Healing Automated Runbooks'],
      metric: '< 1.2ms Telemetry Overhead'
    },
    {
      id: 'resilience',
      category: 'infrastructure',
      title: 'Disaster Recovery & Multi-Region Mesh',
      subtitle: 'Active-Active · Global DNS',
      description: 'Instant cross-region and cross-cloud warm failover with automated state replication, sub-second RTO/RPO, and multi-cloud geographic traffic routing.',
      iconColor: 'from-rose-500 to-pink-600',
      features: ['Active-Active Global Traffic Steering', 'Sub-second Data Replication Mesh', 'One-Click Disaster Recovery Drills'],
      metric: 'Sub-Second RPO / RTO'
    }
  ];

  const solutionsHTML = `
    <section id="solutions" class="py-24 relative bg-slate-950/90 overflow-hidden">
      <!-- Glow Gradients -->
      <div class="absolute top-1/2 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div class="absolute bottom-10 -right-48 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            Enterprise Cloud Architecture
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineered for <span class="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">Multi-Cloud Dominance</span>
          </h2>
          <p class="text-slate-400 text-base sm:text-lg">
            Replace fragmented DevOps toolchains with an integrated, intelligent control plane designed for mission-critical enterprise scale.
          </p>
        </div>

        <!-- Filter Tabs -->
        <div class="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button class="filter-tab-btn active px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer bg-cyan-500/20 text-cyan-300 border border-cyan-500/40" data-filter="all">
            All Capabilities
          </button>
          <button class="filter-tab-btn px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer text-slate-400 hover:text-white border border-transparent hover:border-slate-800" data-filter="infrastructure">
            Infrastructure & Mesh
          </button>
          <button class="filter-tab-btn px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer text-slate-400 hover:text-white border border-transparent hover:border-slate-800" data-filter="gitops">
            GitOps & CI/CD
          </button>
          <button class="filter-tab-btn px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer text-slate-400 hover:text-white border border-transparent hover:border-slate-800" data-filter="finops">
            FinOps & Cost AI
          </button>
          <button class="filter-tab-btn px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer text-slate-400 hover:text-white border border-transparent hover:border-slate-800" data-filter="security">
            Zero-Trust & Compliance
          </button>
        </div>

        <!-- Solutions Cards Grid -->
        <div id="solutions-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${solutionsData.map(item => `
            <div class="solution-card glass-card rounded-2xl p-7 flex flex-col justify-between group relative overflow-hidden" data-category="${item.category}">
              <!-- Top Accent Glow Bar -->
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.iconColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div class="space-y-4">
                <!-- Top Badge & Metric -->
                <div class="flex items-center justify-between">
                  <span class="text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    ${item.subtitle}
                  </span>
                  <span class="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    ${item.metric}
                  </span>
                </div>

                <!-- Title & Description -->
                <div>
                  <h3 class="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    ${item.title}
                  </h3>
                  <p class="text-slate-300 text-sm leading-relaxed mt-2.5">
                    ${item.description}
                  </p>
                </div>

                <!-- Feature Checkmarks -->
                <ul class="space-y-2 pt-2 border-t border-slate-800/80 text-xs text-slate-300">
                  ${item.features.map(f => `
                    <li class="flex items-start gap-2">
                      <svg class="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                      </svg>
                      <span>${f}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>

              <!-- Card Action Button -->
              <div class="pt-6 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-medium text-slate-400">
                <span class="group-hover:text-cyan-400 transition-colors">Architecture Spec</span>
                <button class="open-demo-from-card text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer">
                  <span>Explore Blueprint</span>
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>

            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;

  container.innerHTML = solutionsHTML;

  // Filter functionality
  const filterBtns = container.querySelectorAll('.filter-tab-btn');
  const cards = container.querySelectorAll('.solution-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active', 'bg-cyan-500/20', 'text-cyan-300', 'border-cyan-500/40');
        b.classList.add('text-slate-400', 'border-transparent');
      });

      btn.classList.add('active', 'bg-cyan-500/20', 'text-cyan-300', 'border-cyan-500/40');
      btn.classList.remove('text-slate-400', 'border-transparent');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // Card blueprint button trigger
  container.querySelectorAll('.open-demo-from-card').forEach(btn => {
    btn.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('open-demo-modal'));
    });
  });
}
