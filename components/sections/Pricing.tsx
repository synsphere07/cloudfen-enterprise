'use client';

import React, { useState } from 'react';
import {
  Check,
  Zap,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Shield,
  Sparkles
} from 'lucide-react';
import { PricingPlan, FAQItem } from '@/types';

interface PricingProps {
  onOpenDemo?: () => void;
}

const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Developer / Startup',
    description: 'Essential multi-cloud GitOps and drift detection for growing engineering teams.',
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      'Up to 3 Kubernetes Clusters',
      'Automated Terraform & OpenTofu Drift Sync',
      'Basic FinOps Cloud Cost Telemetry',
      'Community Discord & Forum Support',
      'eBPF Network Observability',
    ],
    specs: {
      clusters: '3 Clusters',
      nodes: 'Up to 25 Nodes',
      regions: '2 Cloud Regions',
      sla: '99.9% Uptime',
      support: 'Community / Email',
    },
    ctaText: 'Start Free Forever',
  },
  {
    id: 'pro',
    name: 'Scale-Up Platform',
    badge: 'MOST POPULAR',
    popular: true,
    description: 'Autonomous GitOps, compute arbitrage, and multi-region canary deployments.',
    monthlyPrice: 199,
    annualPrice: 159,
    features: [
      'Up to 25 Kubernetes Clusters',
      'Autonomous FinOps Spot Compute Arbitrage',
      'Sub-Second Multi-Cluster Canary Rollouts',
      'Zero-Trust SOC 2 / HIPAA Guardrails',
      'Priority 24/7 SRE Slack Channel Support',
      'Automated Predictive Auto-Healing',
    ],
    specs: {
      clusters: '25 Clusters',
      nodes: 'Up to 300 Nodes',
      regions: 'Unlimited Regions',
      sla: '99.99% SLA',
      support: 'Priority 24/7 Slack',
    },
    ctaText: 'Launch 14-Day Pro Trial',
  },
  {
    id: 'enterprise',
    name: 'Enterprise Fabric',
    badge: 'MISSION-CRITICAL',
    description: 'Custom dedicated VPC mesh, custom compliance enclaves, and dedicated SRE team.',
    monthlyPrice: 899,
    annualPrice: 719,
    features: [
      'Unlimited Clusters & Bare-Metal Nodes',
      'Custom Multi-Cloud Disaster Evacuation Mesh',
      'Dedicated Zero-Trust Enclave & Custom Cryptography',
      'Dedicated Enterprise SRE & Solution Architect',
      'Custom SLA with Financial Guarantees (99.999%)',
      'On-Premise Self-Hosted Deployment Option',
    ],
    specs: {
      clusters: 'Unlimited',
      nodes: 'Unlimited Scale',
      regions: 'Global Anycast',
      sla: '99.999% Financial SLA',
      support: 'Dedicated Technical Account Manager',
    },
    ctaText: 'Contact Enterprise Sales',
  },
];

const FAQS: FAQItem[] = [
  {
    category: 'Architecture',
    question: 'How does CloudFen interact with our existing AWS, GCP, and Azure accounts?',
    answer:
      'CloudFen operates non-invasively via read/write IAM roles or OpenID Connect (OIDC). Your workloads remain entirely within your own cloud VPCs and clusters. CloudFen acts as the autonomous intelligence and orchestration plane without routing proprietary customer data through external servers.',
  },
  {
    category: 'FinOps',
    question: 'How does the automated FinOps spot compute arbitrage work?',
    answer:
      'CloudFen monitors spot market pricing and interruption probabilities across AWS, Azure, and Google Cloud in real time. It automatically bin-packs stateless and tolerant workloads into high-discount compute, while maintaining zero-downtime warm fallback nodes in case of cloud capacity preemption.',
  },
  {
    category: 'Security',
    question: 'Does CloudFen replace our existing CI/CD pipelines (GitHub Actions, GitLab)?',
    answer:
      'CloudFen integrates seamlessly with your existing CI tools. GitHub Actions or GitLab CI builds your containers and triggers CloudFen via GitOps webhooks or declarative PR reconciliation, handling the complex multi-cluster canary rollout and verification.',
  },
  {
    category: 'Security',
    question: 'What compliance standards are supported out of the box?',
    answer:
      'CloudFen comes pre-configured with continuous audit frameworks for SOC 2 Type II, ISO 27001, HIPAA, PCI-DSS Level 1, and GDPR data sovereignty policies.',
  },
];

export const Pricing: React.FC<PricingProps> = ({ onOpenDemo }) => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleCta = () => {
    if (onOpenDemo) {
      onOpenDemo();
    } else {
      window.dispatchEvent(new CustomEvent('open-demo-modal'));
    }
  };

  return (
    <section id="careers" className="relative py-24 sm:py-32 bg-black/60 backdrop-blur-md cyber-grid border-t border-cyan-500/15 scroll-mt-20">
      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400 uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Transparent Enterprise Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Predictable Plans for <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">Every Stage of Scale</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            All plans include core multi-cloud GitOps, eBPF security policies, and continuous drift detection.
          </p>

          {/* Billing Switch Toggle */}
          <div className="pt-4 flex items-center justify-center gap-4">
            <span className={`text-xs font-mono font-bold ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>
              Monthly Billing
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 rounded-full bg-black border border-cyan-500/40 p-1 relative transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle annual or monthly billing"
            >
              <div
                className={`w-6 h-6 rounded-full bg-cyan-400 shadow-neon-cyan transition-transform duration-200 ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-mono font-bold ${isAnnual ? 'text-white' : 'text-slate-400'}`}>
                Annual Billing
              </span>
              <span className="px-2 py-0.5 rounded-full bg-cyan-400/20 border border-cyan-400/50 text-[10px] font-mono text-cyan-300 font-bold">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                  plan.popular
                    ? 'glass-card border-2 border-cyan-400 shadow-neon-cyan scale-105 z-20'
                    : 'glass-card border border-white/10 hover:border-cyan-500/30'
                }`}
              >
                {/* Popular Pill */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-cyan-400 text-black font-mono text-[10px] font-extrabold uppercase tracking-wider shadow-neon-cyan flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Name & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white font-mono">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed min-h-[36px]">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="pt-2">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono">
                        ${price}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        / month {isAnnual && price > 0 ? '(billed annually)' : ''}
                      </span>
                    </div>
                  </div>

                  {/* Spec Chips */}
                  <div className="p-3 rounded-xl bg-black/80 border border-white/10 text-[11px] font-mono space-y-1.5 text-slate-300">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Clusters:</span>
                      <span className="text-cyan-300 font-bold">{plan.specs.clusters}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">SLA:</span>
                      <span className="text-emerald-400 font-bold">{plan.specs.sla}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Support:</span>
                      <span className="text-slate-300">{plan.specs.support}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2.5 pt-2 border-t border-white/10">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="pt-8">
                  <button
                    onClick={handleCta}
                    className={`w-full py-3.5 text-xs font-mono font-bold rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      plan.popular
                        ? 'btn-cyber-primary shadow-neon-cyan'
                        : 'btn-cyber-secondary'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Accordions */}
        <div className="max-w-4xl mx-auto pt-12 space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-white">
              Frequently Asked Questions
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              Everything you need to know about CloudFen architecture, deployment, and security.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;

              return (
                <div
                  key={idx}
                  className="rounded-2xl glass-card border border-white/10 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="text-sm font-bold text-slate-200">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-cyan-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-white/10">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
