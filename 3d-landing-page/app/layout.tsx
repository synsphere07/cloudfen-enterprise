import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'CloudFen — 3D Digital Architecture Platform',
  description: 'Experience unified multi-cloud architecture in motion with interactive 3D WebGL transformations.',
  icons: {
    icon: '/cloudfen-emblem.svg',
    shortcut: '/cloudfen-emblem.svg',
    apple: '/cloudfen-emblem.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
