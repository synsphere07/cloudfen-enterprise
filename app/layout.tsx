import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import SpaceBackgroundWrapper from '@/components/canvas/SpaceBackgroundWrapper';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CloudFen · Autonomous Multi-Cloud Control Plane & FinOps Fabric',
  description:
    'CloudFen unifies AWS, Azure, GCP, and Kubernetes into a single autonomous control plane with automated GitOps, FinOps compute arbitrage, and zero-trust eBPF security.',
  keywords: [
    'CloudFen',
    'Multi-Cloud',
    'FinOps',
    'GitOps',
    'Kubernetes',
    'DevOps',
    'Terraform',
    'eBPF',
    'Autonomous Cloud',
  ],
  authors: [{ name: 'CloudFen Architecture Team' }],
  applicationName: 'CloudFen App',
  appleWebApp: {
    capable: true,
    title: 'CloudFen',
    statusBarStyle: 'black-translucent',
  },
  openGraph: {
    title: 'CloudFen · Autonomous Multi-Cloud & FinOps Control Plane',
    description:
      'Unify heterogeneous clouds into one resilient fabric. Deploy 4.2x faster with automated GitOps and 43% FinOps savings.',
    url: 'https://cloudfen.io',
    siteName: 'CloudFen Enterprise',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CloudFen · Autonomous Multi-Cloud Control Plane',
    description:
      'Deploy 4.2x faster with automated GitOps and 43% FinOps compute arbitrage.',
  },
  icons: {
    icon: '/cloudfen-emblem.svg',
    shortcut: '/cloudfen-emblem.svg',
    apple: '/cloudfen-emblem.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-black text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200 min-h-screen overflow-x-hidden">
        {/* Global Persistent 3D Space Background Environment */}
        <SpaceBackgroundWrapper />
        {children}
      </body>
    </html>
  );
}
