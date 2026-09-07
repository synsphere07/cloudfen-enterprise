export function renderCloudPlayground(container) {
  const playgroundHTML = `
    <section id="calculator" class="py-24 relative bg-slate-950/80 border-t border-cyan-500/15 overflow-hidden">
      <!-- Ambient Glow Behind Calculator -->
      <div class="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-teal-400 uppercase tracking-widest">
            Interactive FinOps & ROI Estimator
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Quantify Your <span class="bg-gradient-to-r from-teal-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent">Multi-Cloud Efficiency</span>
          </h2>
          <p class="text-slate-400 text-base sm:text-lg">
            Calculate your projected cloud waste reduction, deployment velocity gain, and engineer sprint hours saved by switching to CloudFen.
          </p>
        </div>

        <!-- Calculator Board -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          <!-- Left Inputs Panel (7 Cols) -->
          <div class="lg:col-span-7 glass-panel rounded-2xl p-8 border border-cyan-500/25 space-y-8">
            <h3 class="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-4">
              <span class="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
              Infrastructure Parameters
            </h3>

            <!-- Spend Slider -->
            <div class="space-y-3">
              <div class="flex justify-between items-center text-sm font-medium">
                <label for="spend-range" class="text-slate-300">Monthly Cloud Infrastructure Spend</label>
                <span id="spend-val-display" class="font-mono text-cyan-400 font-bold text-lg bg-slate-900 px-3 py-1 rounded-lg border border-cyan-500/30">
                  $50,000 / mo
                </span>
              </div>
              <input
                id="spend-range"
                type="range"
                min="5000"
                max="500000"
                step="5000"
                value="50000"
                class="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none"
              />
              <div class="flex justify-between text-[11px] font-mono text-slate-500">
                <span>$5,000/mo</span>
                <span>$250,000/mo</span>
                <span>$500,000+/mo</span>
              </div>
            </div>

            <!-- Clusters / Microservices Slider -->
            <div class="space-y-3">
              <div class="flex justify-between items-center text-sm font-medium">
                <label for="cluster-range" class="text-slate-300">Active Kubernetes Clusters / Microservices</label>
                <span id="cluster-val-display" class="font-mono text-teal-400 font-bold text-lg bg-slate-900 px-3 py-1 rounded-lg border border-teal-500/30">
                  25 Services
                </span>
              </div>
              <input
                id="cluster-range"
                type="range"
                min="5"
                max="250"
                step="5"
                value="25"
                class="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400 focus:outline-none"
              />
              <div class="flex justify-between text-[11px] font-mono text-slate-500">
                <span>5 Services</span>
                <span>120 Services</span>
                <span>250+ Services</span>
              </div>
            </div>

            <!-- Cloud Providers Selection -->
            <div class="space-y-3">
              <label class="text-sm font-medium text-slate-300 block">Primary Cloud Providers</label>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <label class="cloud-provider-box cursor-pointer rounded-xl p-3 glass-card border border-cyan-500/30 text-center flex flex-col items-center justify-center gap-1.5 transition-all">
                  <input type="checkbox" name="provider" value="aws" checked class="hidden provider-check" />
                  <span class="text-xs font-mono font-bold text-white">AWS</span>
                  <span class="text-[10px] text-cyan-400">EKS & EC2</span>
                </label>
                <label class="cloud-provider-box cursor-pointer rounded-xl p-3 glass-card border border-slate-800 text-center flex flex-col items-center justify-center gap-1.5 transition-all">
                  <input type="checkbox" name="provider" value="azure" class="hidden provider-check" />
                  <span class="text-xs font-mono font-bold text-white">Azure</span>
                  <span class="text-[10px] text-slate-400">AKS & VMs</span>
                </label>
                <label class="cloud-provider-box cursor-pointer rounded-xl p-3 glass-card border border-slate-800 text-center flex flex-col items-center justify-center gap-1.5 transition-all">
                  <input type="checkbox" name="provider" value="gcp" class="hidden provider-check" />
                  <span class="text-xs font-mono font-bold text-white">GCP</span>
                  <span class="text-[10px] text-slate-400">GKE & Compute</span>
                </label>
                <label class="cloud-provider-box cursor-pointer rounded-xl p-3 glass-card border border-slate-800 text-center flex flex-col items-center justify-center gap-1.5 transition-all">
                  <input type="checkbox" name="provider" value="onprem" class="hidden provider-check" />
                  <span class="text-xs font-mono font-bold text-white">Bare-Metal</span>
                  <span class="text-[10px] text-slate-400">On-Prem / Edge</span>
                </label>
              </div>
            </div>

            <!-- Deployment Cadence -->
            <div class="space-y-3">
              <label class="text-sm font-medium text-slate-300 block">Current Deployment Cadence</label>
              <div class="grid grid-cols-3 gap-3 text-xs font-mono">
                <button class="cadence-btn active py-2.5 px-3 rounded-lg border border-cyan-500/40 bg-cyan-500/20 text-cyan-300 font-semibold cursor-pointer" data-cadence="weekly">
                  Weekly Batch
                </button>
                <button class="cadence-btn py-2.5 px-3 rounded-lg border border-slate-800 bg-slate-900/60 text-slate-400 font-semibold cursor-pointer" data-cadence="daily">
                  Daily Deploys
                </button>
                <button class="cadence-btn py-2.5 px-3 rounded-lg border border-slate-800 bg-slate-900/60 text-slate-400 font-semibold cursor-pointer" data-cadence="continuous">
                  Continuous (CD)
                </button>
              </div>
            </div>

          </div>

          <!-- Right Results Display Panel (5 Cols) -->
          <div class="lg:col-span-5 glass-card rounded-2xl p-8 border border-cyan-500/30 flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-slate-900/90 to-slate-950">
            <!-- Shimmer Top Beam -->
            <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-400"></div>

            <div class="space-y-6">
              <div class="flex items-center justify-between border-b border-slate-800 pb-4">
                <span class="text-xs font-mono text-slate-400 uppercase tracking-wider">Projected Annual ROI</span>
                <span class="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  GUARANTEED FINOPS
                </span>
              </div>

              <!-- Big Annual Savings Number -->
              <div>
                <span class="text-xs font-mono text-slate-400 block mb-1">Estimated Annual Cloud Savings</span>
                <div class="text-4xl sm:text-5xl font-black text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text font-mono">
                  <span id="annual-savings-val">$258,000</span>
                </div>
                <p class="text-xs text-slate-400 mt-1">Based on automated spot arbitrage & compute rightsizing (~43%).</p>
              </div>

              <!-- ROI Cards Breakdown -->
              <div class="grid grid-cols-2 gap-3 pt-2">
                <div class="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <p class="text-[11px] font-mono text-slate-400">SRE Hours Reclaimed</p>
                  <p id="sre-hours-val" class="text-2xl font-bold font-mono text-cyan-300 mt-1">840 hrs / yr</p>
                  <span class="text-[10px] text-slate-500">Automated drift & rollback</span>
                </div>
                <div class="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <p class="text-[11px] font-mono text-slate-400">Release Cycle Velocity</p>
                  <p id="speedup-val" class="text-2xl font-bold font-mono text-teal-300 mt-1">4.2x Faster</p>
                  <span class="text-[10px] text-slate-500">Zero-downtime canaries</span>
                </div>
              </div>

              <!-- Before vs After Visual Comparison Bar -->
              <div class="space-y-2 pt-2">
                <div class="flex justify-between text-xs font-mono">
                  <span class="text-slate-400">Legacy Manual Toolchain:</span>
                  <span class="text-rose-400 font-bold">$600k / yr</span>
                </div>
                <div class="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div class="bg-rose-500/80 h-full w-full"></div>
                </div>

                <div class="flex justify-between text-xs font-mono pt-1">
                  <span class="text-cyan-400 font-bold">With CloudFen Autonomous Engine:</span>
                  <span id="after-spend-val" class="text-cyan-400 font-bold">$342k / yr</span>
                </div>
                <div class="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div id="after-spend-bar" class="bg-gradient-to-r from-teal-400 to-cyan-400 h-full w-[57%] transition-all duration-500"></div>
                </div>
              </div>
            </div>

            <!-- Download / Claim CTA -->
            <div class="pt-8 mt-4 border-t border-slate-800">
              <button id="calc-claim-btn" class="w-full btn-cyber-primary py-3.5 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer">
                <span>Request Custom ROI Architecture Blueprint</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  `;

  container.innerHTML = playgroundHTML;

  // Calculation Logic
  const spendRange = document.getElementById('spend-range');
  const clusterRange = document.getElementById('cluster-range');
  const spendDisplay = document.getElementById('spend-val-display');
  const clusterDisplay = document.getElementById('cluster-val-display');
  const annualSavingsVal = document.getElementById('annual-savings-val');
  const sreHoursVal = document.getElementById('sre-hours-val');
  const speedupVal = document.getElementById('speedup-val');
  const afterSpendVal = document.getElementById('after-spend-val');
  const afterSpendBar = document.getElementById('after-spend-bar');

  let currentCadence = 'weekly';

  function updateCalculator() {
    const monthlySpend = parseFloat(spendRange.value);
    const clusters = parseInt(clusterRange.value);

    // Format display
    spendDisplay.innerText = `$${monthlySpend.toLocaleString()} / mo`;
    clusterDisplay.innerText = `${clusters} Services`;

    // Savings formula: ~43% base savings on cloud compute + cluster scale bonus
    const savingsRatio = 0.43;
    const annualSpend = monthlySpend * 12;
    const annualSavings = Math.round(annualSpend * savingsRatio);
    const newAnnualSpend = annualSpend - annualSavings;

    // SRE hours saved calculation
    const baseHoursPerCluster = currentCadence === 'weekly' ? 36 : currentCadence === 'daily' ? 48 : 60;
    const totalSreHours = Math.round(clusters * baseHoursPerCluster);

    // Speedup metric
    const speedRatio = currentCadence === 'weekly' ? '4.8x' : currentCadence === 'daily' ? '4.2x' : '3.6x';

    annualSavingsVal.innerText = `$${annualSavings.toLocaleString()}`;
    sreHoursVal.innerText = `${totalSreHours.toLocaleString()} hrs / yr`;
    speedupVal.innerText = `${speedRatio} Faster`;
    afterSpendVal.innerText = `$${newAnnualSpend.toLocaleString()} / yr`;

    const remainingPercent = Math.max(10, Math.min(90, Math.round((newAnnualSpend / annualSpend) * 100)));
    afterSpendBar.style.width = `${remainingPercent}%`;
  }

  spendRange.addEventListener('input', updateCalculator);
  clusterRange.addEventListener('input', updateCalculator);

  // Cloud Provider check styling
  const providerBoxes = container.querySelectorAll('.cloud-provider-box');
  providerBoxes.forEach(box => {
    const input = box.querySelector('input');
    box.addEventListener('click', () => {
      setTimeout(() => {
        if (input.checked) {
          box.classList.add('border-cyan-500/40', 'bg-cyan-500/10');
          box.classList.remove('border-slate-800');
        } else {
          box.classList.remove('border-cyan-500/40', 'bg-cyan-500/10');
          box.classList.add('border-slate-800');
        }
      }, 10);
    });
  });

  // Cadence buttons
  const cadenceBtns = container.querySelectorAll('.cadence-btn');
  cadenceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      cadenceBtns.forEach(b => {
        b.classList.remove('active', 'border-cyan-500/40', 'bg-cyan-500/20', 'text-cyan-300');
        b.classList.add('border-slate-800', 'bg-slate-900/60', 'text-slate-400');
      });
      btn.classList.add('active', 'border-cyan-500/40', 'bg-cyan-500/20', 'text-cyan-300');
      btn.classList.remove('border-slate-800', 'bg-slate-900/60', 'text-slate-400');
      currentCadence = btn.getAttribute('data-cadence');
      updateCalculator();
    });
  });

  // Claim Button trigger
  document.getElementById('calc-claim-btn')?.addEventListener('click', () => {
    window.dispatchEvent(new CustomEvent('open-demo-modal', {
      detail: {
        spend: spendRange.value,
        clusters: clusterRange.value
      }
    }));
  });

  // Run initial calculation
  updateCalculator();
}
