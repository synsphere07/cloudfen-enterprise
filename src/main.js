import './style.css';

import { renderNavbar } from './components/Navbar.js';
import { renderHero } from './components/Hero3D.js';
import { renderStatsBar } from './components/StatsBar.js';
import { renderSolutions } from './components/Solutions.js';
import { renderCloudPlayground } from './components/CloudPlayground.js';
import { renderPipelineVisualizer } from './components/PipelineVisualizer.js';
import { renderArchitectureMesh } from './components/ArchitectureMesh.js';
import { renderTestimonials } from './components/Testimonials.js';
import { renderPricing } from './components/Pricing.js';
import { renderFooter } from './components/Footer.js';
import { renderDemoModal } from './components/DemoModal.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  if (!app) {
    console.error('Root #app container not found');
    return;
  }

  // Create mount containers
  const navbarContainer = document.createElement('div');
  const heroContainer = document.createElement('div');
  const statsContainer = document.createElement('div');
  const solutionsContainer = document.createElement('div');
  const playgroundContainer = document.createElement('div');
  const pipelineContainer = document.createElement('div');
  const architectureContainer = document.createElement('div');
  const testimonialsContainer = document.createElement('div');
  const pricingContainer = document.createElement('div');
  const footerContainer = document.createElement('div');
  const modalContainer = document.createElement('div');

  // Append containers in visual hierarchy
  app.appendChild(navbarContainer);
  app.appendChild(heroContainer);
  app.appendChild(statsContainer);
  app.appendChild(solutionsContainer);
  app.appendChild(playgroundContainer);
  app.appendChild(pipelineContainer);
  app.appendChild(architectureContainer);
  app.appendChild(testimonialsContainer);
  app.appendChild(pricingContainer);
  app.appendChild(footerContainer);
  app.appendChild(modalContainer);

  // Render each component
  renderNavbar(navbarContainer);
  renderHero(heroContainer);
  renderStatsBar(statsContainer);
  renderSolutions(solutionsContainer);
  renderCloudPlayground(playgroundContainer);
  renderPipelineVisualizer(pipelineContainer);
  renderArchitectureMesh(architectureContainer);
  renderTestimonials(testimonialsContainer);
  renderPricing(pricingContainer);
  renderFooter(footerContainer);
  renderDemoModal(modalContainer);

  // Smooth scroll for anchor tags
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});
