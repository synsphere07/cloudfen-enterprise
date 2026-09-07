import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  SERVICES_DATA,
  getServiceBySlug,
} from '@/lib/services-data';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { CloudInfraGraphic } from '@/components/ui/CloudInfraGraphic';
import { LiquidMetalButton } from '@/components/ui/liquid-metal-button';
import {
  ArrowRight,
  ShieldCheck,
  Check,
  Sparkles,
  ChevronRight,
} from 'lucide-react';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found | CloudFen',
    };
  }

  return {
    title: `${service.fullTitle} | CloudFen Enterprise`,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const ServiceIcon = service.icon;

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
                <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <ServiceIcon className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-lg sm:text-2xl font-extrabold tracking-wider uppercase text-white">
                    {service.fullTitle}
                  </h1>
                  <p className="text-xs sm:text-sm text-cyan-400/80 font-medium">
                    {service.subtitle}
                  </p>
                </div>
              </div>

              {/* Breadcrumb Links */}
              <nav aria-label="Breadcrumb" className="text-xs font-medium tracking-wide text-slate-400 flex items-center gap-2">
                <Link href="/" className="hover:text-cyan-400 transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                <Link href="/#services" className="hover:text-cyan-400 transition-colors">
                  Services
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                <span className="text-cyan-300 font-semibold">{service.title}</span>
              </nav>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* HERO SECTION: PRIMARY IMAGE (BLUEPRINTS / OFFICE / TABLET) + VERBATIM COPY*/}
          {/* ========================================================================= */}
          <div className="bg-zinc-950 border border-zinc-800/90 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-10 lg:p-12 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* Left Side: Primary High-Resolution Image or Custom Diagram */}
              <div className="lg:col-span-6">
                {service.slug === 'infrastructure' ? (
                  <CloudInfraGraphic />
                ) : (
                  <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 group shadow-2xl">
                    <img
                      src={service.img1}
                      alt={service.alt1}
                      className="w-full h-[300px] sm:h-[360px] md:h-[420px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />

                    {/* Image Caption Tag */}
                    <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-cyan-500/30 text-white text-xs font-semibold">
                      <ServiceIcon className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{service.badge1}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Side: Exact Verbatim Copy & Metrics */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{service.tag}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
                    {service.title}
                  </h2>
                </div>

                {/* Verbatim Paragraphs from Screenshot with Divider */}
                <div className="bg-zinc-900/60 p-5 sm:p-6 rounded-xl border border-zinc-800/80 space-y-4">
                  {/* Subtle top accent bar as shown in cloudfen.com spec */}
                  <div className="w-12 h-1 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />

                  {service.paragraphs && service.paragraphs.length > 0 ? (
                    service.paragraphs.map((para, idx) => (
                      <p
                        key={idx}
                        className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal"
                      >
                        {para}
                      </p>
                    ))
                  ) : (
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  )}
                </div>

                {/* 3 Metric Stat Blocks */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {service.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-center space-y-1"
                    >
                      <p className="text-base sm:text-lg font-extrabold text-cyan-400">
                        {stat.value}
                      </p>
                      <p className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA Link Button */}
                <div className="pt-2">
                  <LiquidMetalButton
                    label={service.ctaLabel}
                    href="/contact"
                    viewMode="both"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* ========================================================================= */}
          {/* 4-STAGE PROCESS LIFECYCLE & METHODOLOGY                                   */}
          {/* ========================================================================= */}
          <div className="bg-zinc-950 border border-zinc-800/90 rounded-2xl p-6 sm:p-10 lg:p-12 mb-16 space-y-8 shadow-2xl">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Execution Framework</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-white">
                {service.methodologyTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                {service.methodologySubtitle}
              </p>
            </div>

            {/* 4 Methodology Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {service.methodologySteps.map((step) => (
                <div
                  key={step.number}
                  className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-3 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-sm group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                    {step.number}
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-300/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================================= */}
          {/* DUAL IMAGES (IMAGES 2 & 3) + DELIVERABLES & SOLUTIONS WE BUILD            */}
          {/* ========================================================================= */}
          <div className="bg-zinc-950 border border-zinc-800/90 rounded-2xl p-6 sm:p-10 lg:p-12 mb-16 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* Left: Custom Deliverables / Solutions List */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-white">
                    {service.deliverablesTitle}
                  </h3>
                  {service.deliverablesSubtitle && (
                    <p className="text-xs sm:text-sm text-slate-400">
                      {service.deliverablesSubtitle}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-start gap-3 hover:border-cyan-500/30 transition-colors"
                    >
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <p className="text-xs font-bold uppercase text-white">{item.title}</p>
                        <p className="text-[11px] text-slate-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Badges */}
                <div className="pt-2 space-y-2">
                  <p className="text-xs font-bold uppercase text-slate-400">
                    Supported Technologies & Frameworks:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: 2 High-Resolution Showcase Images (Images 2 and 3) */}
              <div className="lg:col-span-5 space-y-4">
                {/* Image 2 */}
                <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 group shadow-2xl">
                  <img
                    src={service.img2}
                    alt={service.alt2}
                    className="w-full h-[210px] sm:h-[230px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-50" />

                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-black/85 backdrop-blur-md border border-zinc-700/80">
                    <p className="text-xs font-bold uppercase text-white tracking-wider truncate">
                      {service.badge2}
                    </p>
                  </div>
                </div>

                {/* Image 3 (When Available) */}
                {service.img3 && (
                  <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 group shadow-2xl">
                    <img
                      src={service.img3}
                      alt={service.alt3 || service.title}
                      className="w-full h-[190px] sm:h-[210px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-50" />

                    <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-black/85 backdrop-blur-md border border-zinc-700/80">
                      <p className="text-xs font-bold uppercase text-white tracking-wider truncate">
                        {service.badge3 || 'Production Deployment'}
                      </p>
                    </div>
                  </div>
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
