'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { SERVICES_DATA } from '@/lib/services-data';

interface ServicesSectionProps {
  onOpenDemo?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = () => {
  return (
    <section
      id="services"
      className="relative w-full py-20 sm:py-28 bg-[#080a0c]/80 text-white overflow-hidden scroll-mt-14"
    >
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-amber-400/30 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/70 border border-amber-500/30 text-amber-300 text-xs font-mono font-semibold uppercase tracking-widest mb-1 shadow-[0_0_15px_rgba(255,177,59,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>ENTERPRISE SERVICES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase text-white">
            SERVICES
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 font-normal">
            What we do.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 mx-auto mt-4 rounded-full shadow-[0_0_8px_rgba(255,177,59,0.6)]" />
        </div>

        {/* 6 Services Overview Cards Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {SERVICES_DATA.map((item) => {
            const ServiceIcon = item.icon;
            const serviceUrl = `/services/${item.slug}`;

            return (
              <div
                key={item.id}
                className="group flex flex-col bg-[#111417]/90 border border-zinc-800 hover:border-amber-400/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_12px_36px_rgba(255,177,59,0.15)] hover:-translate-y-1"
              >
                {/* Service Image with Direct Link */}
                <Link href={serviceUrl} className="relative w-full h-56 sm:h-60 overflow-hidden bg-zinc-800 block">
                  <img
                    src={item.img1}
                    alt={item.alt1}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111417] via-transparent to-transparent opacity-80" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-amber-400/30 text-amber-300 text-xs font-mono font-semibold tracking-wider uppercase shadow-[0_0_10px_rgba(255,177,59,0.2)]">
                    <ServiceIcon className="w-3.5 h-3.5 text-amber-400" />
                    <span>{item.tag}</span>
                  </div>
                </Link>

                {/* Service Info */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <Link href={serviceUrl} className="block">
                      <h3 className="text-lg sm:text-xl font-bold tracking-wider uppercase text-white group-hover:text-amber-300 transition-colors">
                        {item.title}
                      </h3>
                    </Link>
                    <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed">
                      {item.shortDescription}
                    </p>
                  </div>

                  {/* Read More Action Link */}
                  <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                    <Link
                      href={serviceUrl}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors group/link"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" />
                    </Link>

                    <span className="text-[11px] font-mono text-slate-500 uppercase">
                      {item.slug}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
