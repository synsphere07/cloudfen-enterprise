export function renderArchitectureMesh(container) {
  const meshHTML = `
    <section id="architecture" class="py-24 relative bg-slate-950/80 border-t border-cyan-500/15 overflow-hidden">
      <!-- Background Ambient Glow -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            Topology & Mesh Fabric
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Single Control Plane, <span class="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">Zero Cloud Lock-In</span>
          </h2>
          <p class="text-slate-400 text-base sm:text-lg">
            Deploy microservices across heterogeneous hyperscalers with unified identity, zero-trust network encryption, and real-time state synchronization.
          </p>
        </div>

        <!-- Visual Architecture Schematic Board -->
        <div class="glass-card rounded-3xl p-8 sm:p-10 border border-cyan-500/30 relative overflow-hidden space-y-10 shadow-2xl">

          <!-- Layer 1: Edge Ingress -->
          <div class="space-y-3">
            <div class="flex items-center justify-between text-xs font-mono">
              <span class="text-cyan-400 font-bold flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                LAYER 01: GLOBAL EDGE & ANYCAST INGRESS
              </span>
              <span class="text-slate-500">240+ Global Points of Presence</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-center">
                <p class="text-xs font-mono text-cyan-300 font-bold">DDoS Scrubbing & WAF</p>
                <p class="text-[11px] text-slate-400 mt-1">Automated Layer 3/4/7 mitigation</p>
              </div>
              <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-center">
                <p class="text-xs font-mono text-cyan-300 font-bold">Anycast Intelligent Routing</p>
                <p class="text-[11px] text-slate-400 mt-1">Sub-10ms geo-distributed latency</p>
              </div>
              <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-center">
                <p class="text-xs font-mono text-cyan-300 font-bold">TLS 1.3 & mTLS Enclave</p>
                <p class="text-[11px] text-slate-400 mt-1">Hardware-isolated crypto handshakes</p>
              </div>
            </div>
          </div>

          <!-- Connecting Animated Bus Line -->
          <div class="flex items-center justify-center">
            <div class="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent relative">
              <div class="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-neon-cyan"></div>
            </div>
          </div>

          <!-- Layer 2: CloudFen Autonomous Engine Core -->
          <div class="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900/90 to-indigo-950/40 border border-cyan-500/40 shadow-neon-cyan space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div class="flex items-center gap-3">
                <div class="w-3 h-3 rounded-full bg-teal-400 animate-pulse"></div>
                <h4 class="text-base font-bold text-white font-mono">
                  CloudFen Autonomous Control Plane & State Machine
                </h4>
              </div>
              <span class="text-xs font-mono text-teal-400 bg-teal-500/10 px-2.5 py-1 rounded border border-teal-500/30">
                ACTIVE RECONCILIATION · 120ms TICK
              </span>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
              <div class="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
                <p class="text-cyan-400 font-bold">Multi-Cloud IaC</p>
                <p class="text-[10px] text-slate-400 mt-0.5">Terraform / OpenTofu</p>
              </div>
              <div class="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
                <p class="text-teal-400 font-bold">FinOps Arbitrage</p>
                <p class="text-[10px] text-slate-400 mt-0.5">Spot & Compute AI</p>
              </div>
              <div class="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
                <p class="text-indigo-400 font-bold">Zero-Trust Mesh</p>
                <p class="text-[10px] text-slate-400 mt-0.5">eBPF Micro-segmentation</p>
              </div>
              <div class="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
                <p class="text-sky-400 font-bold">GitOps Operator</p>
                <p class="text-[10px] text-slate-400 mt-0.5">ArgoCD & Canary AI</p>
              </div>
            </div>
          </div>

          <!-- Connecting Animated Bus Line -->
          <div class="flex items-center justify-center">
            <div class="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent relative">
              <div class="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-neon-cyan"></div>
            </div>
          </div>

          <!-- Layer 3: Heterogeneous Multi-Cloud Providers -->
          <div class="space-y-3">
            <div class="flex items-center justify-between text-xs font-mono">
              <span class="text-cyan-400 font-bold">LAYER 03: CLOUD TARGETS & KUBERNETES FABRIC</span>
              <span class="text-slate-500">Auto-Synced Clusters</span>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 transition-colors text-center">
                <p class="text-sm font-bold text-amber-400 font-mono">AWS Cloud</p>
                <p class="text-[10px] text-slate-400 mt-1">EKS, EC2, Fargate, S3</p>
              </div>
              <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 transition-colors text-center">
                <p class="text-sm font-bold text-sky-400 font-mono">Microsoft Azure</p>
                <p class="text-[10px] text-slate-400 mt-1">AKS, Virtual Machine Scale</p>
              </div>
              <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-rose-500/40 transition-colors text-center">
                <p class="text-sm font-bold text-rose-400 font-mono">Google Cloud</p>
                <p class="text-[10px] text-slate-400 mt-1">GKE, Cloud Run, BigQuery</p>
              </div>
              <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-teal-500/40 transition-colors text-center">
                <p class="text-sm font-bold text-teal-400 font-mono">Bare-Metal & Edge</p>
                <p class="text-[10px] text-slate-400 mt-1">Equinix, K3s, On-Prem</p>
              </div>
            </div>
          </div>

        </div>

        <!-- Compliance & Security Badges Bar -->
        <div class="mt-14 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="text-center md:text-left">
            <h4 class="text-sm font-bold text-white font-mono uppercase tracking-wider">
              Enterprise Compliance & Security Certifications
            </h4>
            <p class="text-xs text-slate-500 mt-0.5">Continuous automated compliance evidence generation.</p>
          </div>

          <div class="flex flex-wrap items-center justify-center gap-4 text-xs font-mono font-semibold">
            <span class="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-300">
              🛡️ SOC 2 Type II
            </span>
            <span class="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-teal-300">
              🔒 ISO / IEC 27001
            </span>
            <span class="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-sky-300">
              🏥 HIPAA Compliant
            </span>
            <span class="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-indigo-300">
              🇪🇺 GDPR & CCPA
            </span>
            <span class="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-emerald-300">
              💳 PCI-DSS Level 1
            </span>
          </div>
        </div>

      </div>
    </section>
  `;

  container.innerHTML = meshHTML;
}
