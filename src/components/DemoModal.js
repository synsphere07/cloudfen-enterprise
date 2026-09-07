import confetti from 'canvas-confetti';

export function renderDemoModal(container) {
  const modalHTML = `
    <div id="demo-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md hidden opacity-0 transition-opacity duration-300">

      <!-- Modal Box -->
      <div id="modal-card" class="glass-card max-w-xl w-full rounded-3xl p-6 sm:p-8 border border-cyan-500/40 shadow-2xl relative bg-slate-900/95 overflow-hidden transform scale-95 transition-transform duration-300">
        <!-- Top Accent Glowing Beam -->
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-500"></div>

        <!-- Close Button -->
        <button id="close-modal-btn" class="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-lg glass-panel border border-slate-800 transition-colors cursor-pointer" aria-label="Close Modal">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <!-- Form State View -->
        <div id="modal-form-view" class="space-y-6">
          <div class="space-y-2">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
              Live Demo & Architecture Blueprint
            </div>
            <h3 class="text-2xl font-extrabold text-white tracking-tight">
              Request Your <span class="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">Custom Cloud Sandbox</span>
            </h3>
            <p class="text-xs sm:text-sm text-slate-400">
              Get an instant 14-day dedicated sandbox cluster and custom FinOps savings breakdown.
            </p>
          </div>

          <form id="demo-form" class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-mono text-slate-300 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  id="demo-name"
                  placeholder="Alex Rivera"
                  class="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-400 font-sans placeholder:text-slate-600"
                />
              </div>

              <div>
                <label class="block text-xs font-mono text-slate-300 mb-1">Work Email *</label>
                <input
                  type="email"
                  required
                  id="demo-email"
                  placeholder="alex@enterprise.com"
                  class="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-400 font-sans placeholder:text-slate-600"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-mono text-slate-300 mb-1">Company / Organization *</label>
                <input
                  type="text"
                  required
                  id="demo-company"
                  placeholder="Acme Corp"
                  class="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-400 font-sans placeholder:text-slate-600"
                />
              </div>

              <div>
                <label class="block text-xs font-mono text-slate-300 mb-1">Primary Cloud Environment</label>
                <select
                  id="demo-cloud"
                  class="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-400 font-sans"
                >
                  <option value="multi-cloud">Multi-Cloud (AWS + GCP + Azure)</option>
                  <option value="aws">AWS Dominant</option>
                  <option value="gcp">Google Cloud Platform</option>
                  <option value="azure">Microsoft Azure</option>
                  <option value="hybrid">Hybrid / Bare-Metal K3s</option>
                </select>
              </div>
            </div>

            <div>
              <label class="block text-xs font-mono text-slate-300 mb-1">Primary Priority / Objective</label>
              <select
                id="demo-priority"
                class="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-400 font-sans"
              >
                <option value="finops">FinOps & Spot Compute Arbitrage (Cost Cutting)</option>
                <option value="gitops">Autonomous GitOps & Zero-Downtime Releases</option>
                <option value="drift">Multi-Cloud Terraform Drift Detection</option>
                <option value="security">Zero-Trust eBPF Security & Compliance</option>
              </select>
            </div>

            <div class="pt-3">
              <button
                type="submit"
                id="submit-demo-btn"
                class="w-full btn-cyber-primary py-3.5 text-xs font-mono font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span id="btn-text">🚀 Provision Free Sandbox & Blueprint</span>
              </button>
            </div>

            <p class="text-[11px] text-center text-slate-500 font-mono">
              🔒 No credit card required. Instant 14-day access to CloudFen Autonomous Engine.
            </p>
          </form>
        </div>

        <!-- Success State View (Hidden by default) -->
        <div id="modal-success-view" class="hidden text-center py-8 space-y-5">
          <div class="w-16 h-16 rounded-full bg-teal-500/20 border border-teal-400 flex items-center justify-center mx-auto text-teal-300 text-2xl shadow-neon-cyan">
            ✓
          </div>
          <div class="space-y-2">
            <h3 class="text-2xl font-extrabold text-white">
              Sandbox Provisioned Successfully!
            </h3>
            <p class="text-sm text-slate-300 max-w-md mx-auto">
              We've dispatched your personalized CloudFen control plane credentials and custom architecture blueprint to <span id="success-email-display" class="text-cyan-300 font-mono font-bold"></span>.
            </p>
          </div>

          <div class="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/30 text-left font-mono text-xs space-y-1 text-slate-400 max-w-md mx-auto">
            <p class="text-cyan-300 font-bold">// Quick Terminal Access:</p>
            <p class="text-slate-300">curl -sSL https://cloudfen.io/init | bash</p>
          </div>

          <button id="success-close-btn" class="px-6 py-2.5 rounded-xl btn-cyber-primary text-xs font-mono font-bold cursor-pointer">
            Return to Overview
          </button>
        </div>

      </div>
    </div>
  `;

  container.innerHTML = modalHTML;

  const modal = document.getElementById('demo-modal');
  const modalCard = document.getElementById('modal-card');
  const closeBtn = document.getElementById('close-modal-btn');
  const formView = document.getElementById('modal-form-view');
  const successView = document.getElementById('modal-success-view');
  const demoForm = document.getElementById('demo-form');
  const successEmailDisplay = document.getElementById('success-email-display');
  const successCloseBtn = document.getElementById('success-close-btn');

  function openModal() {
    modal.classList.remove('hidden');
    setTimeout(() => {
      modal.classList.remove('opacity-0');
      modalCard.classList.remove('scale-95');
      modalCard.classList.add('scale-100');
    }, 10);
  }

  function closeModal() {
    modal.classList.add('opacity-0');
    modalCard.classList.remove('scale-100');
    modalCard.classList.add('scale-95');
    setTimeout(() => {
      modal.classList.add('hidden');
      formView.classList.remove('hidden');
      successView.classList.add('hidden');
    }, 300);
  }

  closeBtn.addEventListener('click', closeModal);
  successCloseBtn.addEventListener('click', closeModal);

  // Close on outside click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Close on ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  // Global listener for opening demo modal
  window.addEventListener('open-demo-modal', (e) => {
    openModal();
    if (e.detail?.spend) {
      // Custom presets if passed from calculator
    }
  });

  // Handle Form Submission
  demoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('demo-email').value;

    // Confetti effect
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00e5ff', '#4fd1c5', '#38bdf8', '#818cf8']
    });

    successEmailDisplay.innerText = email;
    formView.classList.add('hidden');
    successView.classList.remove('hidden');
  });
}
