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
  title: 'CloudFen — Production AI Agents for Enterprise Workflows',
  description:
    'CloudFen designs, deploys, and operates reliable AI agents for enterprise workflows. From sourcing and onboarding to back-office operations — move from AI experiments to measurable production automation in 4 weeks.',
  keywords: [
    'Enterprise AI Agents',
    'AI Workflow Automation',
    'Agent Readiness Sprint',
    'AI Agent Operations',
    'Production AI',
    'Agentic Automation',
    'Enterprise AI Platform',
    'HR AI Agent',
    'Finance AI Automation',
    'CloudFen',
  ],
  authors: [{ name: 'CloudFen Enterprise AI' }],
  applicationName: 'CloudFen',
  appleWebApp: {
    capable: true,
    title: 'CloudFen',
    statusBarStyle: 'black-translucent',
  },
  openGraph: {
    title: 'CloudFen — Production AI Agents for Enterprise Workflows',
    description:
      'Turn repetitive business workflows into reliable AI-powered operations. Move from AI experimentation to measurable production automation in 4 weeks.',
    url: 'https://cloudfen.com',
    siteName: 'CloudFen Enterprise AI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CloudFen — Production AI Agents for Enterprise Workflows',
    description:
      'CloudFen designs, deploys, and operates reliable AI agents that handle real enterprise workflows with measurable before-and-after results.',
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
