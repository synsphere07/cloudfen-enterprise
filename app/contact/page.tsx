'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { LiquidMetalButton } from '@/components/ui/liquid-metal-button';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Upload,
  FileText,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Building2,
  Globe2,
  X,
  User,
  HelpCircle,
} from 'lucide-react';

const SERVICE_OPTIONS = [
  '-- Select One --',
  'IT Staffing & Consulting',
  'Product Development',
  'Maintenance and Support',
  'Infrastructure & Cloud Modernization',
  'Recruitment',
  'Outsourcing (RPO)',
  'Healthcare Solutions',
  'Financial Services & Banking',
  'Retail & Omnichannel',
  'Telecommunications & 5G',
  'Smart Manufacturing & IIoT',
  'General Enterprise Inquiry',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '-- Select One --',
    message: '',
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError('');
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const validExtensions = ['pdf', 'doc', 'docx', 'txt', 'rtf'];
      const fileExtension = file.name.split('.').pop()?.toLowerCase();

      if (!fileExtension || !validExtensions.includes(fileExtension)) {
        setFileError('Please upload a valid CV file (.pdf, .doc, .docx, .txt)');
        setSelectedFile(null);
        return;
      }

      if (file.size > 10 * 1024 * 1024) {
        setFileError('File size exceeds 10MB limit.');
        setSelectedFile(null);
        return;
      }

      setSelectedFile(file);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setFileError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation for required fields as specified in cloudfen.com spec
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid business email address.');
      return;
    }
    if (!formData.subject.trim()) {
      setErrorMessage('Please provide a subject for your inquiry.');
      return;
    }
    if (!selectedFile) {
      setErrorMessage('Please upload your CV / Resume document.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Please include your message details.');
      return;
    }

    setIsSubmitting(true);

    // Simulate enterprise form dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        service: '-- Select One --',
        message: '',
      });
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }, 1200);
  };

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Global Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="relative z-10 pt-24 pb-20 sm:pt-28 sm:pb-28">
        {/* Ambient Top Glow Accent Line */}
        <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none" />
        <div className="absolute top-40 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-96 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

          {/* ========================================================================= */}
          {/* TOP BREADCRUMB & HEADER BAR (EXACT CLOUDFEN SPECIFICATION)               */}
          {/* ========================================================================= */}
          <div className="mb-8 sm:mb-12 bg-zinc-950/80 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl backdrop-blur-md">
            {/* Top Accent Gradient Line */}
            <div className="h-[3px] w-full bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500" />

            <div className="px-6 sm:px-10 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-lg sm:text-2xl font-extrabold tracking-wider uppercase text-white">
                    CONTACT
                  </h1>
                  <p className="text-xs sm:text-sm text-cyan-400/80 font-medium">
                    Get in Touch with Us
                  </p>
                </div>
              </div>

              {/* Breadcrumb Links */}
              <nav aria-label="Breadcrumb" className="text-xs font-medium tracking-wide text-slate-400 flex items-center gap-2">
                <Link href="/" className="hover:text-cyan-400 transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                <span className="text-cyan-300 font-semibold">Contact</span>
              </nav>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* MAIN GRID: CONTACT INFO & ENTERPRISE "SEND US AN EMAIL" FORM               */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">

            {/* Left Column (5 Cols): HQ Contact Information & Direct Channels */}
            <div className="lg:col-span-5 space-y-6">

              {/* Company Info Box */}
              <div className="bg-zinc-950 border border-zinc-800/90 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Global Headquarters</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                    Connect with CloudFen
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Have a project in mind, need technical staffing, or exploring enterprise cloud modernization? Reach out to our solution architects and executive team.
                  </p>
                </div>

                {/* Contact Channels */}
                <div className="space-y-4 pt-2">
                  {/* Address */}
                  <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800/80 flex items-start gap-3.5 group hover:border-cyan-500/40 transition-colors">
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Office Location
                      </p>
                      <p className="text-xs sm:text-sm text-slate-200 font-medium leading-snug">
                        4080 McGinnis Ferry Rd, Suite 1005,
                        <br />
                        Alpharetta, GA 30005, USA
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800/80 flex items-start gap-3.5 group hover:border-cyan-500/40 transition-colors">
                    <div className="p-2.5 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-400 shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Direct Phone Line
                      </p>
                      <a
                        href="tel:+17705746149"
                        className="text-xs sm:text-sm text-cyan-300 font-semibold hover:text-cyan-200 transition-colors block"
                      >
                        +1 (770) 574-6149
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800/80 flex items-start gap-3.5 group hover:border-cyan-500/40 transition-colors">
                    <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Inquiries & RFPs
                      </p>
                      <a
                        href="mailto:info@cloudfen.com"
                        className="text-xs sm:text-sm text-cyan-300 font-semibold hover:text-cyan-200 transition-colors block"
                      >
                        info@cloudfen.com
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800/80 flex items-start gap-3.5 group hover:border-cyan-500/40 transition-colors">
                    <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Operational Hours
                      </p>
                      <p className="text-xs sm:text-sm text-slate-300 font-medium">
                        Mon – Fri: 9:00 AM – 6:00 PM EST
                      </p>
                      <p className="text-[11px] text-cyan-400/80">
                        24/7 Managed Support for Production Clients
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fast SLA & Trust Badge */}
              <div className="bg-zinc-950 border border-zinc-800/90 rounded-2xl p-5 sm:p-6 shadow-xl space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold uppercase text-white tracking-wider">
                      Rapid Response Guarantee
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      All inquiries and candidate submissions are reviewed within 24 hours.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column (7 Cols): The Exact "Send us an Email" Form as in Screenshots */}
            <div className="lg:col-span-7">
              <div className="bg-zinc-950 border border-zinc-800/90 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-6 relative">

                {/* Form Header */}
                <div className="space-y-2 pb-2 border-b border-zinc-800/80">
                  <div className="w-12 h-1 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                  <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white">
                    Send us an Email
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400">
                    Fill out the form below with your requirements or resume, and our executive team will contact you.
                  </p>
                </div>

                {/* Form Success State */}
                {submitStatus === 'success' ? (
                  <div className="p-8 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-center space-y-4 animate-in fade-in duration-500">
                    <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-white">
                        Message & CV Submitted Successfully
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out to CloudFen. Your inquiry and resume have been routed to our technical recruiting and solutions team. We will be in touch shortly.
                      </p>
                    </div>
                    <div className="pt-4 flex justify-center">
                      <LiquidMetalButton
                        label="SEND ANOTHER MESSAGE"
                        onClick={() => setSubmitStatus('idle')}
                        icon={Sparkles}
                        viewMode="both"
                      />
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Error Banner */}
                    {errorMessage && (
                      <div className="p-3.5 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs flex items-center gap-2.5">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Row 1: Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                          Name <span className="text-cyan-400">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your Name *"
                            className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                          Email <span className="text-cyan-400">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Your Email *"
                            className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 2: Phone & Subject */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Your Phone Number"
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                        />
                      </div>

                      {/* Subject */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                          Subject <span className="text-cyan-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Subject *"
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Row 3: Services Dropdown */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                        Services
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors cursor-pointer"
                      >
                        {SERVICE_OPTIONS.map((opt, i) => (
                          <option key={i} value={opt} className="bg-zinc-900 text-white py-1">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Row 4: UPLOAD CV (File Input as per exact screenshot requirement) */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                          Upload CV <span className="text-cyan-400">*</span>
                        </label>
                        <span className="text-[11px] text-slate-500 font-mono">
                          PDF, DOC, DOCX, TXT (Max 10MB)
                        </span>
                      </div>

                      <div className="relative">
                        <input
                          ref={fileInputRef}
                          type="file"
                          id="cv-upload"
                          accept=".pdf,.doc,.docx,.txt,.rtf"
                          onChange={handleFileChange}
                          className="hidden"
                        />

                        {selectedFile ? (
                          <div className="flex items-center justify-between p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/40">
                            <div className="flex items-center gap-3 truncate">
                              <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-300 shrink-0">
                                <FileText className="w-4 h-4" />
                              </div>
                              <div className="truncate text-left">
                                <p className="text-xs font-semibold text-white truncate">
                                  {selectedFile.name}
                                </p>
                                <p className="text-[10px] text-cyan-400/80 font-mono">
                                  {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB • Ready to submit
                                </p>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={removeFile}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-zinc-800 transition-colors"
                              title="Remove file"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <label
                            htmlFor="cv-upload"
                            className="flex flex-col sm:flex-row items-center justify-center gap-3 p-4 rounded-xl border border-dashed border-zinc-700 hover:border-cyan-400/60 bg-zinc-900/50 hover:bg-zinc-900/80 transition-all cursor-pointer text-center group"
                          >
                            <div className="p-2.5 rounded-full bg-zinc-800 group-hover:bg-cyan-500/20 text-slate-400 group-hover:text-cyan-300 transition-colors">
                              <Upload className="w-4 h-4" />
                            </div>
                            <div className="text-xs text-slate-400 group-hover:text-slate-200">
                              <span className="text-cyan-400 font-semibold underline decoration-cyan-500/40 group-hover:decoration-cyan-400">
                                Click to choose your CV / Resume
                              </span>{' '}
                              or drag and drop file here
                            </div>
                          </label>
                        )}
                      </div>

                      {fileError && (
                        <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{fileError}</span>
                        </p>
                      )}
                    </div>

                    {/* Row 5: Message */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                        Message <span className="text-cyan-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Write your message here... *"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-y"
                      />
                    </div>

                    {/* Submit Button (Exact "SUBMIT COMMENT" styling matching CloudFen spec) */}
                    <div className="pt-3">
                      <LiquidMetalButton
                        label={isSubmitting ? 'TRANSMITTING...' : 'SUBMIT COMMENT'}
                        type="submit"
                        disabled={isSubmitting}
                        icon={Send}
                        viewMode="both"
                      />
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
