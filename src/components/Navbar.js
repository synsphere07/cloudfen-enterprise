export function renderNavbar(container) {
  const navbarHTML = `
    <header id="main-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <nav class="flex items-center justify-between px-5 py-3 rounded-2xl glass-panel border border-cyan-500/20 backdrop-blur-xl bg-slate-950/75 shadow-2xl">

          <!-- Brand Logo & Emblem -->
          <a href="#" class="flex items-center gap-3 group">
            <div class="relative w-9 h-9 flex items-center justify-center">
              <!-- Glowing Outer Ring -->
              <div class="absolute inset-0 rounded-full border-2 border-cyan-400 group-hover:scale-110 transition-transform duration-300 glow-box-cyan"></div>
              <!-- Inner Orbital Rotating Dots -->
              <div class="w-4 h-4 rounded-full bg-gradient-to-tr from-cyan-400 to-teal-300 group-hover:rotate-180 transition-transform duration-700"></div>
              <div class="absolute w-1.5 h-1.5 rounded-full bg-white shadow-sm"></div>
            </div>
            <div class="flex items-baseline gap-1.5">
              <span class="text-xl font-bold tracking-tight text-white font-sans">
                Cloud<span class="text-cyan-400">Fen</span>
              </span>
              <span class="text-[10px] font-mono font-semibold uppercase px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                Enterprise
              </span>
            </div>
          </a>

          <!-- Desktop Navigation Links -->
          <div class="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#solutions" class="hover:text-cyan-400 transition-colors py-1">Solutions</a>
            <a href="#calculator" class="hover:text-cyan-400 transition-colors py-1">Cloud ROI</a>
            <a href="#pipeline" class="hover:text-cyan-400 transition-colors py-1">DevOps Pipeline</a>
            <a href="#architecture" class="hover:text-cyan-400 transition-colors py-1">Architecture</a>
            <a href="#pricing" class="hover:text-cyan-400 transition-colors py-1">Pricing</a>
          </div>

          <!-- Action CTAs -->
          <div class="hidden lg:flex items-center gap-3">
            <button id="nav-console-btn" class="px-4 py-2 text-xs font-mono font-medium text-cyan-300 hover:text-white glass-panel border border-cyan-500/30 rounded-lg hover:border-cyan-400 transition-all cursor-pointer">
              Launch Console
            </button>
            <button id="nav-demo-btn" class="btn-cyber-primary px-4 py-2 text-xs font-semibold rounded-lg cursor-pointer">
              Book Demo
            </button>
          </div>

          <!-- Mobile Hamburger Toggle -->
          <button id="mobile-menu-btn" class="md:hidden text-slate-300 hover:text-white p-2 focus:outline-none" aria-label="Toggle Navigation">
            <svg id="hamburger-icon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
            </svg>
            <svg id="close-icon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </nav>

        <!-- Mobile Navigation Drawer -->
        <div id="mobile-menu-drawer" class="hidden md:hidden mt-2 p-5 rounded-2xl glass-panel border border-cyan-500/20 backdrop-blur-2xl bg-slate-950/90 shadow-2xl space-y-4">
          <div class="flex flex-col space-y-3 text-sm font-medium text-slate-200">
            <a href="#solutions" class="mobile-nav-link hover:text-cyan-400 py-1.5">Solutions</a>
            <a href="#calculator" class="mobile-nav-link hover:text-cyan-400 py-1.5">Cloud ROI Calculator</a>
            <a href="#pipeline" class="mobile-nav-link hover:text-cyan-400 py-1.5">DevOps Pipeline Visualizer</a>
            <a href="#architecture" class="mobile-nav-link hover:text-cyan-400 py-1.5">Architecture & Mesh</a>
            <a href="#pricing" class="mobile-nav-link hover:text-cyan-400 py-1.5">Pricing & Tiers</a>
          </div>
          <div class="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
            <button id="mobile-console-btn" class="w-full py-2.5 text-xs font-mono font-medium text-cyan-300 glass-panel border border-cyan-500/30 rounded-lg">
              Launch Console
            </button>
            <button id="mobile-demo-btn" class="w-full btn-cyber-primary py-2.5 text-xs font-semibold rounded-lg">
              Book Demo
            </button>
          </div>
        </div>

      </div>
    </header>
  `;

  container.innerHTML = navbarHTML;

  // Header scroll appearance
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('py-2');
      header.classList.remove('py-4');
    } else {
      header.classList.add('py-4');
      header.classList.remove('py-2');
    }
  });

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-menu-drawer');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isHidden = mobileDrawer.classList.contains('hidden');
      if (isHidden) {
        mobileDrawer.classList.remove('hidden');
        hamburgerIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
      } else {
        mobileDrawer.classList.add('hidden');
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    });

    // Close on link click
    const mobileLinks = mobileDrawer.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.add('hidden');
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      });
    });
  }

  // Demo Modal triggers
  const triggerDemo = () => window.dispatchEvent(new CustomEvent('open-demo-modal'));
  document.getElementById('nav-demo-btn')?.addEventListener('click', triggerDemo);
  document.getElementById('mobile-demo-btn')?.addEventListener('click', triggerDemo);
  document.getElementById('nav-console-btn')?.addEventListener('click', () => {
    const pipelineSection = document.getElementById('pipeline');
    if (pipelineSection) {
      pipelineSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
  document.getElementById('mobile-console-btn')?.addEventListener('click', () => {
    const pipelineSection = document.getElementById('pipeline');
    if (pipelineSection) {
      mobileDrawer.classList.add('hidden');
      pipelineSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}
