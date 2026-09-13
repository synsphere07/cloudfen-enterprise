'use client';

import React from 'react';
import Link from 'next/link';
import { CloudFenLogo } from '@/components/ui/CloudFenLogo';
import {
  Share2,
  MessageCircle,
  Link as LinkIcon,
  Globe,
  Feather,
  Send,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';

const footerLinkGroups = [
  {
    group: 'AI Solutions',
    items: [
      { title: '4-Week Readiness Sprint', href: '/readiness-sprint' },
      { title: 'Agentic Sourcing Desk', href: '/solutions/sourcing' },
      { title: 'Onboarding & Compliance', href: '/solutions/onboarding' },
      { title: 'Back-Office Operations', href: '/solutions/back-office' },
      { title: 'Managed Agent Operations', href: '/agent-operations' },
      { title: 'Architecture Blueprint', href: '/how-it-works' },
    ],
  },
  {
    group: 'Services',
    items: [
      { title: 'IT Staffing & Consulting', href: '/services/it-staffing' },
      { title: 'Product Development', href: '/services/product-development' },
      { title: 'Maintenance & Support', href: '/services/maintenance-and-support' },
      { title: 'Infrastructure & Cloud', href: '/services/infrastructure' },
      { title: 'Talent Recruitment', href: '/services/recruitment' },
      { title: 'Outsourcing & RPO', href: '/services/outsourcing' },
    ],
  },
  {
    group: 'Industries',
    items: [
      { title: 'Healthcare & Life Sciences', href: '/industries/healthcare' },
      { title: 'Financial Services & Banking', href: '/industries/financial-services' },
      { title: 'Retail & Omnichannel', href: '/industries/retail' },
      { title: 'Telecommunications & 5G', href: '/industries/telecommunications' },
      { title: 'Smart Manufacturing & IIoT', href: '/industries/manufacturing' },
    ],
  },
  {
    group: 'Company & Trust',
    items: [
      { title: 'About CloudFen', href: '/#about-us' },
      { title: 'Case Studies & ROI', href: '/case-studies' },
      { title: 'Our Focus Areas', href: '/our-focus' },
      { title: 'SOC 2 & HIPAA Moat', href: '/contact' },
      { title: 'Security Architecture', href: '/our-focus#networking' },
      { title: 'Contact Systems Team', href: '/contact' },
    ],
  },
];

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative bg-black/60 backdrop-blur-md text-slate-400 overflow-hidden border-t border-zinc-800/80 pt-16 md:pt-24 scroll-mt-20">
      {/* Subtle top accent gradient */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">

        {/* Main Grid: Left Brand/Contact & Right 4 Link Columns */}
        <div className="grid gap-12 lg:grid-cols-12 pb-16">

          {/* Left Column (Brand, Info, Contact) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="block size-fit outline-none select-none">
              <CloudFenLogo
                variant="inline"
                size="md"
                showSubtitle={true}
                subtitle="Autonomous Cloud Fabric"
              />
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Empowering global enterprises with multi-cloud engineering, AI platform development, resilient infrastructure, and domain-focused digital transformation.
            </p>

            {/* Headquarters and Contact Details */}
            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>4080 McGinnis Ferry Rd, Suite 1005, Alpharetta, GA 30005</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="tel:+17705746149" className="hover:text-cyan-300 transition-colors">
                  +1 (770) 574-6149
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <a href="mailto:info@cloudfen.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  info@cloudfen.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (4 Structured Categories matching 21st.dev) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerLinkGroups.map((linkGroup, groupIndex) => (
              <div key={groupIndex} className="space-y-4 text-sm">
                <span className="block font-semibold uppercase tracking-wider text-white text-xs sm:text-sm">
                  {linkGroup.group}
                </span>
                <ul className="space-y-2.5">
                  {linkGroup.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        href={item.href}
                        className="text-xs sm:text-sm text-slate-400 hover:text-cyan-300 transition-colors duration-150 block"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Bar: Copyright & 21st.dev Social Action Icons */}
        <div className="border-t border-zinc-800/80 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="text-slate-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} CloudFen, All rights reserved
          </span>

          {/* Social Icons matching 21st.dev screenshot */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-sm">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share CloudFen on Social"
              className="text-slate-400 hover:text-cyan-300 transition-colors p-1.5 rounded-lg hover:bg-zinc-900"
            >
              <Share2 className="w-5 h-5" />
            </a>
            <a
              href="mailto:info@cloudfen.com"
              aria-label="Message CloudFen Support"
              className="text-slate-400 hover:text-cyan-300 transition-colors p-1.5 rounded-lg hover:bg-zinc-900"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <Link
              href="/contact"
              aria-label="Quick Link to CloudFen Portal"
              className="text-slate-400 hover:text-cyan-300 transition-colors p-1.5 rounded-lg hover:bg-zinc-900"
            >
              <LinkIcon className="w-5 h-5" />
            </Link>
            <Link
              href="/"
              aria-label="Global Web Presence"
              className="text-slate-400 hover:text-cyan-300 transition-colors p-1.5 rounded-lg hover:bg-zinc-900"
            >
              <Globe className="w-5 h-5" />
            </Link>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CloudFen Technical Posts"
              className="text-slate-400 hover:text-cyan-300 transition-colors p-1.5 rounded-lg hover:bg-zinc-900"
            >
              <Feather className="w-5 h-5" />
            </a>
            <Link
              href="/contact"
              aria-label="Send Inquiry to CloudFen"
              className="text-slate-400 hover:text-cyan-300 transition-colors p-1.5 rounded-lg hover:bg-zinc-900"
            >
              <Send className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
