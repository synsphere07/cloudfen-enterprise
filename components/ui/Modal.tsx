'use client';

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  X,
  Sparkles,
  ShieldCheck,
  Building2,
  CheckCircle2,
  ArrowRight,
  Loader2,
  Lock,
  Clock,
  Workflow,
  Cpu,
} from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultWorkflow?: string;
  initialSpend?: number;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  defaultWorkflow = 'sourcing',
  initialSpend,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [workflow, setWorkflow] = useState(defaultWorkflow);
  const [volume, setVolume] = useState('1k-10k');
  const [systems, setSystems] = useState('');
  const [timeline, setTimeline] = useState('4-weeks');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (defaultWorkflow) {
      setWorkflow(defaultWorkflow);
    }
  }, [defaultWorkflow]);

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
        // Safe fallback
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
      <div className="relative w-full max-w-2xl bg-[#0b0f19] border border-cyan-500/40 rounded-3xl shadow-[0_0_60px_rgba(6,182,212,0.25)] overflow-hidden z-10 my-8">
        {/* Top Glowing Beam */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-zinc-900/90 border border-zinc-700 text-slate-400 hover:text-white hover:border-cyan-400/50 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6 sm:p-8 space-y-6">

          {isSubmitted ? (
            /* Success Confirmation State */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-3xl bg-cyan-500/20 border border-cyan-400 flex items-center justify-center mx-auto text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.4)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">
                  Readiness Call Request Confirmed
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-cyan-300 font-bold">{name || 'Leader'}</span>. Our AI Systems Engineering team has received your workflow brief for <span className="text-white font-semibold">{company || 'your organization'}</span>.
                </p>
              </div>

              {/* Assessment Briefing Card */}
              <div className="p-5 rounded-2xl bg-black/70 border border-zinc-800 text-left font-mono text-xs space-y-2.5 text-slate-300">
                <div className="flex justify-between items-center text-slate-500 text-[10px] pb-1.5 border-b border-zinc-800">
                  <span>DISCOVERY SESSION PREPARATION</span>
                  <span className="text-emerald-400 font-bold">DISPATCHED</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Target Workflow:</span>
                  <span className="text-cyan-300 capitalize">{workflow.replace(/-/g, ' ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Volume Tier:</span>
                  <span className="text-teal-300">{volume} transactions/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Target Timeline:</span>
                  <span className="text-slate-200">4-Week Agent Readiness Sprint</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Pre-Call Deliverable:</span>
                  <span className="text-slate-200">Mutual NDA & Workflow Feasibility Assessment</span>
                </div>
              </div>

              <div className="pt-2 flex justify-center">
                <button
                  onClick={handleResetAndClose}
                  className="px-8 py-3.5 rounded-xl text-sm font-bold text-black bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 shadow-md transition-all cursor-pointer"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            /* Booking / Assessment Intake Form */
            <>
              {/* Header */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono text-cyan-300">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>4-Week Agent Readiness Sprint</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Book an Agent Readiness Call
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Discuss your target workflow with our enterprise AI engineers. We’ll analyze feasibility, design guardrails, and outline measurable production ROI.
                </p>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-semibold block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-zinc-800 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 font-mono"
                    />
                  </div>

                  {/* Work Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-semibold block">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@enterprise.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-zinc-800 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Company Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-semibold block">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Acme Global Inc."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-zinc-800 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 font-mono"
                    />
                  </div>

                  {/* Target Workflow */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-semibold block">
                      Target Workflow *
                    </label>
                    <select
                      value={workflow}
                      onChange={(e) => setWorkflow(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-zinc-800 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
                    >
                      <option value="sourcing">Candidate Sourcing & Screening</option>
                      <option value="onboarding">Employee / Contractor Onboarding</option>
                      <option value="back-office">Invoice AP & PO Reconciliation</option>
                      <option value="procurement">Vendor Compliance & Contracts</option>
                      <option value="support">Tier-1 Support & Service Desk</option>
                      <option value="custom">Custom Multi-Step Workflow</option>
                    </select>
                  </div>
                </div>

                {/* Monthly Volume & Systems */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-semibold block">
                      Monthly Transaction Volume
                    </label>
                    <select
                      value={volume}
                      onChange={(e) => setVolume(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-zinc-800 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
                    >
                      <option value="<1k">&lt; 1,000 / month</option>
                      <option value="1k-10k">1,000 - 10,000 / month</option>
                      <option value="10k-50k">10,000 - 50,000 / month</option>
                      <option value="50k+">50,000+ / month (Enterprise)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-semibold block">
                      Key Enterprise Systems
                    </label>
                    <input
                      type="text"
                      value={systems}
                      onChange={(e) => setSystems(e.target.value)}
                      placeholder="e.g. Workday, SAP, Greenhouse, Jira"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-zinc-800 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 font-mono"
                    />
                  </div>
                </div>

                {/* Project Context */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 font-semibold block">
                    Current Bottleneck / What is slowing this workflow down?
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Manual document review takes 4 hours per candidate; need automated scoring and HRIS writeback."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-zinc-800 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 font-mono resize-none"
                  />
                </div>

                {/* Trust Guarantee Note */}
                <div className="p-3 rounded-xl bg-black/60 border border-zinc-800/80 flex items-start gap-2.5 text-[11px] text-slate-400 font-mono">
                  <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>
                    Mutual NDA signed prior to call. Zero customer data is retained or used for external model training.
                  </span>
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl text-sm font-bold text-black bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-300 hover:from-cyan-300 hover:to-teal-300 shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Scheduling Technical Fit Call...</span>
                      </>
                    ) : (
                      <>
                        <span>Book an Agent Readiness Call</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
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
