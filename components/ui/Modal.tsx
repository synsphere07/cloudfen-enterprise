'use client';

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  X,
  Sparkles,
  Terminal,
  ShieldCheck,
  Building2,
  CheckCircle2,
  ArrowRight,
  Loader2,
  Zap
} from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import { LiquidMetalButton } from '@/components/ui/liquid-metal-button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSpend?: number;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, initialSpend = 45000 }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [cloud, setCloud] = useState('multi');
  const [clusters, setClusters] = useState('10-50');
  const [spend, setSpend] = useState<number>(initialSpend);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialSpend) {
      setSpend(initialSpend);
    }
  }, [initialSpend]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger Confetti Celebration
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00e5ff', '#38bdf8', '#4fd1c5', '#ffffff'],
        });
      } catch {
        // Safe fallback if canvas-confetti is not available
      }
    }, 1200);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-xl bg-black border border-cyan-500/40 rounded-3xl shadow-2xl overflow-hidden z-10 my-8">
        {/* Top Glowing Beam */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-500" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-black/90 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6 sm:p-8 space-y-6">

          {isSubmitted ? (
            /* Success Confirmation State */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-3xl bg-cyan-500/20 border border-cyan-400 flex items-center justify-center mx-auto text-cyan-300 shadow-neon-cyan">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-white">
                  Enterprise Sandbox Provisioned!
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Welcome aboard, <span className="text-cyan-300 font-bold">{name || 'Architect'}</span>. We have generated your dedicated multi-cloud sandbox environment for <span className="text-white font-semibold">{company || 'your organization'}</span>.
                </p>
              </div>

              {/* Mock Sandbox Credentials */}
              <div className="p-4 rounded-2xl bg-black/90 border border-white/10 text-left font-mono text-xs space-y-2 text-slate-300">
                <div className="flex justify-between items-center text-slate-500 text-[10px] pb-1 border-b border-white/10">
                  <span>TEMPORARY DEMO CREDENTIALS (48 HR ACCESS)</span>
                  <span className="text-emerald-400 font-bold">READY</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Instance URL:</span>
                  <span className="text-cyan-300">https://sandbox.cloudfen.io/org/{company.toLowerCase().replace(/\s+/g, '-') || 'demo'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Target Scale:</span>
                  <span className="text-teal-300">{clusters} Clusters · {formatCurrency(spend)}/mo stack</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Assigned SRE:</span>
                  <span className="text-slate-200">Enterprise Solutions Architect</span>
                </div>
              </div>

              <div className="pt-2 flex justify-center">
                <LiquidMetalButton
                  label="Return to Platform Tour"
                  onClick={handleResetAndClose}
                  icon={ArrowRight}
                  viewMode="both"
                />
              </div>
            </div>
          ) : (
            /* Booking / Assessment Form */
            <>
              {/* Header */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Interactive Enterprise Sandbox</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Schedule CloudFen Architecture Audit & Live Demo
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Experience autonomous GitOps, FinOps compute arbitrage, and eBPF kernel security tailored to your cloud topology.
                </p>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-semibold block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex Mercer"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-white/10 text-xs font-mono text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  {/* Work Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-semibold block">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@enterprise.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-white/10 text-xs font-mono text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Company Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-semibold block">
                      Company Name
                    </label>
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="OmniStream Tech"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-white/10 text-xs font-mono text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  {/* Primary Cloud */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-semibold block">
                      Primary Cloud Stack
                    </label>
                    <select
                      value={cloud}
                      onChange={(e) => setCloud(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-cyan-400"
                    >
                      <option value="multi">Multi-Cloud (AWS + GCP + Azure)</option>
                      <option value="aws">Amazon Web Services (AWS)</option>
                      <option value="gcp">Google Cloud Platform (GCP)</option>
                      <option value="azure">Microsoft Azure</option>
                      <option value="hybrid">Hybrid Bare-Metal / K3s</option>
                    </select>
                  </div>
                </div>

                {/* Scale & Current Spend */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-semibold block">
                      Kubernetes Clusters
                    </label>
                    <select
                      value={clusters}
                      onChange={(e) => setClusters(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-cyan-400"
                    >
                      <option value="1-5">1 - 5 Clusters</option>
                      <option value="6-25">6 - 25 Clusters</option>
                      <option value="25-100">25 - 100 Clusters</option>
                      <option value="100+">100+ Multi-Region Scale</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-semibold block">
                      Est. Monthly Cloud Spend
                    </label>
                    <div className="px-3.5 py-2.5 rounded-xl bg-black border border-white/10 text-xs font-mono text-cyan-300 font-bold">
                      {formatCurrency(spend)}/mo
                    </div>
                  </div>
                </div>

                {/* Trust Guarantee Note */}
                <div className="p-3 rounded-xl bg-black/80 border border-white/10 flex items-start gap-2.5 text-[11px] text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    Non-invasive IAM role integration. No customer code or database records leave your cloud boundaries.
                  </span>
                </div>

                {/* Submit CTA */}
                <div className="pt-2 flex justify-center">
                  <LiquidMetalButton
                    label={isSubmitting ? 'Provisioning Sandbox...' : 'Launch Dedicated Demo & Audit'}
                    type="submit"
                    disabled={isSubmitting}
                    icon={ArrowRight}
                    viewMode="both"
                  />
                </div>
              </form>
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default Modal;
