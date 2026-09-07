export function renderPipelineVisualizer(container) {
  const pipelineHTML = `
    <section id="pipeline" class="py-24 relative bg-slate-950/90 border-t border-cyan-500/15 overflow-hidden">
      <!-- Glow Gradients -->
      <div class="absolute -top-32 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div class="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            Autonomous Pipeline Simulation
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Watch CloudFen <span class="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">Orchestrate in Real-Time</span>
          </h2>
          <p class="text-slate-400 text-base sm:text-lg">
            Experience how CloudFen validates policies, reconciles multi-cloud Terraform state, and executes automated canary releases with sub-second rollbacks.
          </p>
        </div>

        <!-- Simulation Controls -->
        <div class="flex flex-wrap items-center justify-center gap-4 mb-10">
          <button id="sim-deploy-btn" class="btn-cyber-primary px-5 py-2.5 text-xs sm:text-sm font-semibold flex items-center gap-2 cursor-pointer shadow-lg">
            <svg class="w-4 h-4 animate-spin hidden" id="deploy-spinner" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
            </svg>
            <span id="deploy-btn-text">▶ Trigger Canary Deployment</span>
          </button>

          <button id="sim-anomaly-btn" class="btn-cyber-secondary px-5 py-2.5 text-xs sm:text-sm font-semibold flex items-center gap-2 hover:border-rose-500/50 hover:text-rose-300 cursor-pointer">
            <span class="text-rose-400">⚡</span>
            <span>Simulate Anomaly & Auto-Heal</span>
          </button>

          <button id="sim-reset-btn" class="px-4 py-2.5 rounded-lg text-xs font-mono text-slate-400 hover:text-white glass-panel border border-slate-800 transition-colors">
            Reset Console
          </button>
        </div>

        <!-- Visual Stage Pipeline Tracker -->
        <div class="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8 text-xs font-mono">
          <!-- Step 1 -->
          <div id="step-1" class="step-card p-3 rounded-xl glass-panel border border-cyan-500/40 bg-cyan-500/10 transition-all">
            <div class="flex items-center justify-between mb-1.5">
              <span class="text-[10px] text-cyan-400 font-bold">STAGE 01</span>
              <span class="step-icon text-cyan-400 font-bold">✓</span>
            </div>
            <p class="font-bold text-white text-xs">Git Manifest</p>
            <p class="text-[10px] text-slate-400 mt-0.5">Commit: c9f4a12</p>
          </div>

          <!-- Step 2 -->
          <div id="step-2" class="step-card p-3 rounded-xl glass-panel border border-slate-800 bg-slate-950/60 transition-all">
            <div class="flex items-center justify-between mb-1.5">
              <span class="text-[10px] text-slate-500 font-bold">STAGE 02</span>
              <span class="step-icon text-slate-600 font-bold">○</span>
            </div>
            <p class="font-bold text-slate-300 text-xs">OPA & SOC2 Gate</p>
            <p class="text-[10px] text-slate-500 mt-0.5">Zero-Trust Guard</p>
          </div>

          <!-- Step 3 -->
          <div id="step-3" class="step-card p-3 rounded-xl glass-panel border border-slate-800 bg-slate-950/60 transition-all">
            <div class="flex items-center justify-between mb-1.5">
              <span class="text-[10px] text-slate-500 font-bold">STAGE 03</span>
              <span class="step-icon text-slate-600 font-bold">○</span>
            </div>
            <p class="font-bold text-slate-300 text-xs">Terraform Sync</p>
            <p class="text-[10px] text-slate-500 mt-0.5">AWS + Azure + GCP</p>
          </div>

          <!-- Step 4 -->
          <div id="step-4" class="step-card p-3 rounded-xl glass-panel border border-slate-800 bg-slate-950/60 transition-all">
            <div class="flex items-center justify-between mb-1.5">
              <span class="text-[10px] text-slate-500 font-bold">STAGE 04</span>
              <span class="step-icon text-slate-600 font-bold">○</span>
            </div>
            <p class="font-bold text-slate-300 text-xs">Canary Traffic</p>
            <p class="text-[10px] text-slate-500 mt-0.5">10% ➔ 50% ➔ 100%</p>
          </div>

          <!-- Step 5 -->
          <div id="step-5" class="step-card p-3 rounded-xl glass-panel border border-slate-800 bg-slate-950/60 transition-all col-span-2 md:col-span-1">
            <div class="flex items-center justify-between mb-1.5">
              <span class="text-[10px] text-slate-500 font-bold">STAGE 05</span>
              <span class="step-icon text-slate-600 font-bold">○</span>
            </div>
            <p class="font-bold text-slate-300 text-xs">Health Verified</p>
            <p class="text-[10px] text-slate-500 mt-0.5">eBPF Telemetry</p>
          </div>
        </div>

        <!-- Terminal Console Window -->
        <div class="rounded-2xl glass-card border border-cyan-500/25 overflow-hidden shadow-2xl font-mono text-xs">
          <!-- Terminal Title Bar -->
          <div class="bg-slate-900/90 px-4 py-3 flex items-center justify-between border-b border-slate-800">
            <div class="flex items-center gap-2">
              <div class="w-3 h-3 rounded-full bg-rose-500/80"></div>
              <div class="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div class="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              <span class="text-slate-400 text-xs font-semibold ml-2">cloudfen-daemon --live-stream (session: CF-892)</span>
            </div>
            <div class="flex items-center gap-3 text-slate-400 text-[11px]">
              <span class="flex items-center gap-1.5">
                <span class="status-beacon"></span>
                <span>CLUSTER: ACTIVE</span>
              </span>
              <span>REGION: US-EAST / EU-WEST</span>
            </div>
          </div>

          <!-- Terminal Content Box -->
          <div id="terminal-content" class="p-5 bg-slate-950/95 h-[340px] overflow-y-auto space-y-1.5 text-slate-300 select-text leading-relaxed">
            <p class="text-slate-500">[00:00:00] CloudFen Autonomous Control Plane v4.8 initialized.</p>
            <p class="text-slate-500">[00:00:01] Connected to 4,820 global cluster nodes across AWS, GCP, and Azure.</p>
            <p class="text-cyan-400">[00:00:02] Ready for incoming GitOps commit triggers or simulated anomaly events.</p>
            <p class="text-slate-600">--------------------------------------------------------------------------------</p>
            <p class="text-slate-400"><span class="text-teal-400 font-bold">$</span> Click <span class="text-cyan-300 font-bold">"Trigger Canary Deployment"</span> above to start live multi-cloud provisioning.</p>
          </div>
        </div>

      </div>
    </section>
  `;

  container.innerHTML = pipelineHTML;

  // Simulator Logic
  const deployBtn = document.getElementById('sim-deploy-btn');
  const anomalyBtn = document.getElementById('sim-anomaly-btn');
  const resetBtn = document.getElementById('sim-reset-btn');
  const terminal = document.getElementById('terminal-content');
  const spinner = document.getElementById('deploy-spinner');
  const deployBtnText = document.getElementById('deploy-btn-text');

  let isRunning = false;

  function appendLog(text, colorClass = 'text-slate-300') {
    const time = new Date().toTimeString().split(' ')[0];
    const line = document.createElement('p');
    line.className = `${colorClass} transition-opacity duration-200`;
    line.innerHTML = `<span class="text-slate-600 font-mono">[${time}]</span> ${text}`;
    terminal.appendChild(line);
    terminal.scrollTop = terminal.scrollHeight;
  }

  function setStepActive(stepNum, status = 'active') {
    const el = document.getElementById(`step-${stepNum}`);
    if (!el) return;
    const icon = el.querySelector('.step-icon');
    const label = el.querySelector('span');

    if (status === 'active') {
      el.className = 'step-card p-3 rounded-xl glass-panel border border-cyan-400 bg-cyan-500/20 shadow-neon-cyan transition-all scale-[1.02]';
      icon.innerText = '⟳';
      icon.className = 'step-icon text-cyan-300 font-bold animate-spin';
      label.className = 'text-[10px] text-cyan-300 font-bold';
    } else if (status === 'completed') {
      el.className = 'step-card p-3 rounded-xl glass-panel border border-teal-500/40 bg-teal-500/10 transition-all';
      icon.innerText = '✓';
      icon.className = 'step-icon text-teal-400 font-bold';
      label.className = 'text-[10px] text-teal-400 font-bold';
    } else if (status === 'error') {
      el.className = 'step-card p-3 rounded-xl glass-panel border border-rose-500/40 bg-rose-500/10 transition-all';
      icon.innerText = '✗';
      icon.className = 'step-icon text-rose-400 font-bold';
      label.className = 'text-[10px] text-rose-400 font-bold';
    } else {
      el.className = 'step-card p-3 rounded-xl glass-panel border border-slate-800 bg-slate-950/60 transition-all';
      icon.innerText = '○';
      icon.className = 'step-icon text-slate-600 font-bold';
      label.className = 'text-[10px] text-slate-500 font-bold';
    }
  }

  // Canary Deployment Run
  deployBtn.addEventListener('click', async () => {
    if (isRunning) return;
    isRunning = true;
    spinner.classList.remove('hidden');
    deployBtnText.innerText = 'Deploying...';

    appendLog('🚀 Triggered GitOps Canary Pipeline for commit [c9f4a12: feat(payment-mesh)]', 'text-cyan-400 font-bold');
    setStepActive(1, 'completed');
    setStepActive(2, 'active');

    await new Promise(r => setTimeout(r, 700));
    appendLog('🔒 Running automated OPA & SOC2 Type-II security policy evaluation...', 'text-slate-300');
    appendLog('✓ Policy checks passed: 0 vulnerabilities, zero plaintext secrets detected.', 'text-teal-400');
    setStepActive(2, 'completed');
    setStepActive(3, 'active');

    await new Promise(r => setTimeout(r, 900));
    appendLog('⚡ Reconciling multi-cloud Terraform state (AWS us-east-1, GCP europe-west1, Azure centralus)...', 'text-slate-300');
    appendLog('✓ 18 microservice pods provisioned with spot instance fallback arbitrage.', 'text-teal-400');
    setStepActive(3, 'completed');
    setStepActive(4, 'active');

    await new Promise(r => setTimeout(r, 1000));
    appendLog('📊 Initiating progressive traffic shift: 10% ➔ 50% ➔ 100%...', 'text-sky-300');
    appendLog('📈 eBPF live latency check: p99 = 1.4ms | Error Rate = 0.000% | CPU load = 18%', 'text-slate-300');
    setStepActive(4, 'completed');
    setStepActive(5, 'active');

    await new Promise(r => setTimeout(r, 800));
    appendLog('🎉 Release 100% verified. Zero downtime observed across all global clusters.', 'text-emerald-400 font-bold text-glow-cyan');
    setStepActive(5, 'completed');

    spinner.classList.add('hidden');
    deployBtnText.innerText = '▶ Trigger Canary Deployment';
    isRunning = false;
  });

  // Anomaly Simulation & Auto-Heal
  anomalyBtn.addEventListener('click', async () => {
    if (isRunning) return;
    isRunning = true;

    appendLog('⚠️ SIMULATION: Injecting artificial memory spike on AWS us-east-1 pod-7b...', 'text-amber-400 font-bold');
    setStepActive(4, 'active');

    await new Promise(r => setTimeout(r, 800));
    appendLog('🚨 eBPF kernel detector flagged memory threshold exceed (94.2%) on Node-82!', 'text-rose-400 font-bold');
    setStepActive(4, 'error');

    await new Promise(r => setTimeout(r, 900));
    appendLog('🛡️ CloudFen Auto-Healer triggered: Traffic diverted instantly to GCP europe-west1 warm replica.', 'text-cyan-300');
    appendLog('🔄 Graceful pod recycling completed in 140ms. Zero user requests dropped!', 'text-teal-400 font-bold');
    setStepActive(4, 'completed');
    setStepActive(5, 'completed');

    isRunning = false;
  });

  // Reset Console
  resetBtn.addEventListener('click', () => {
    for (let i = 1; i <= 5; i++) {
      setStepActive(i, i === 1 ? 'completed' : 'idle');
    }
    terminal.innerHTML = `
      <p class="text-slate-500">[00:00:00] CloudFen Autonomous Control Plane v4.8 initialized.</p>
      <p class="text-slate-500">[00:00:01] Connected to 4,820 global cluster nodes across AWS, GCP, and Azure.</p>
      <p class="text-cyan-400">[00:00:02] Ready for incoming GitOps commit triggers or simulated anomaly events.</p>
    `;
  });
}
