'use client'

import React from 'react'

interface CloudFenEmblemProps {
  size?: number | string
  className?: string
  showGlow?: boolean
  interactive?: boolean
}

/**
 * CloudFen Concentric Dot Matrix & Orbital Crescent Emblem (SVG)
 * Precisely vector-rendered matching the official CloudFen brand identity.
 */
export function CloudFenEmblem({
  size = 40,
  className = '',
  showGlow = true,
  interactive = true,
}: CloudFenEmblemProps) {
  const pixelSize = typeof size === 'number' ? `${size}px` : size

  return (
    <div
      style={{ width: pixelSize, height: pixelSize }}
      className={`relative inline-flex items-center justify-center shrink-0 ${
        interactive ? 'group cursor-pointer' : ''
      } ${className}`}
    >
      {/* Dynamic Ambient Glow Backdrop */}
      {showGlow && (
        <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-md pointer-events-none group-hover:bg-cyan-400/35 transition-all duration-500 scale-95 group-hover:scale-110" />
      )}

      <svg
        viewBox="0 0 100 100"
        className="w-full h-full relative z-10 transition-transform duration-500 group-hover:scale-105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="cfEmblemCrescent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" />
            <stop offset="45%" stopColor="#00B4D8" />
            <stop offset="100%" stopColor="#0077B6" />
          </linearGradient>

          <radialGradient id="cfEmblemDotGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E0F2FE" />
            <stop offset="40%" stopColor="#00D9FF" />
            <stop offset="100%" stopColor="#0284C7" />
          </radialGradient>

          <filter id="cfEmblemGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Orbital Crescent Swoosh */}
        <path
          d="M 38 6 C 18 12 4 32 4 54 C 4 78 22 96 48 96 C 68 96 84 84 92 68 C 88 78 74 90 52 90 C 30 90 12 74 12 52 C 12 34 24 18 42 12 C 46 10 42 7 38 6 Z"
          fill="url(#cfEmblemCrescent)"
          filter="url(#cfEmblemGlowFilter)"
        />

        {/* Concentric Dot Matrix (Swirling Quantum Particle Cluster) */}
        <g fill="url(#cfEmblemDotGlow)">
          {/* Center Core Dot */}
          <circle cx="50" cy="50" r="2.8" />

          {/* Ring 1 (Radius 7) */}
          <circle cx="50" cy="43" r="1.6" />
          <circle cx="56.06" cy="46.5" r="1.6" />
          <circle cx="56.06" cy="53.5" r="1.6" />
          <circle cx="50" cy="57" r="1.6" />
          <circle cx="43.94" cy="53.5" r="1.6" />
          <circle cx="43.94" cy="46.5" r="1.6" />

          {/* Ring 2 (Radius 13.5) */}
          <circle cx="50" cy="36.5" r="1.9" />
          <circle cx="56.75" cy="38.31" r="1.9" />
          <circle cx="61.69" cy="43.25" r="1.9" />
          <circle cx="63.5" cy="50" r="1.9" />
          <circle cx="61.69" cy="56.75" r="1.9" />
          <circle cx="56.75" cy="61.69" r="1.9" />
          <circle cx="50" cy="63.5" r="1.9" />
          <circle cx="43.25" cy="61.69" r="1.9" />
          <circle cx="38.31" cy="56.75" r="1.9" />
          <circle cx="36.5" cy="50" r="1.9" />
          <circle cx="38.31" cy="43.25" r="1.9" />
          <circle cx="43.25" cy="38.31" r="1.9" />

          {/* Ring 3 (Radius 20) */}
          <circle cx="50" cy="30" r="1.8" />
          <circle cx="56.84" cy="31.19" r="1.8" />
          <circle cx="62.86" cy="34.64" r="1.8" />
          <circle cx="67.32" cy="40" r="1.8" />
          <circle cx="69.7" cy="46.53" r="1.8" />
          <circle cx="69.7" cy="53.47" r="1.8" />
          <circle cx="67.32" cy="60" r="1.8" />
          <circle cx="62.86" cy="65.36" r="1.8" />
          <circle cx="56.84" cy="68.81" r="1.8" />
          <circle cx="50" cy="70" r="1.8" />
          <circle cx="43.16" cy="68.81" r="1.8" />
          <circle cx="37.14" cy="65.36" r="1.8" />
          <circle cx="32.68" cy="60" r="1.8" />
          <circle cx="30.3" cy="53.47" r="1.8" />
          <circle cx="30.3" cy="46.53" r="1.8" />
          <circle cx="32.68" cy="40" r="1.8" />
          <circle cx="37.14" cy="34.64" r="1.8" />
          <circle cx="43.16" cy="31.19" r="1.8" />

          {/* Ring 4 (Radius 27) */}
          <circle cx="50" cy="23" r="1.5" />
          <circle cx="57" cy="23.91" r="1.5" />
          <circle cx="63.5" cy="26.6" r="1.5" />
          <circle cx="69.09" cy="30.91" r="1.5" />
          <circle cx="73.38" cy="36.5" r="1.5" />
          <circle cx="76.09" cy="43" r="1.5" />
          <circle cx="77" cy="50" r="1.5" />
          <circle cx="76.09" cy="57" r="1.5" />
          <circle cx="73.38" cy="63.5" r="1.5" />
          <circle cx="69.09" cy="69.09" r="1.5" />
          <circle cx="63.5" cy="73.4" r="1.5" />
          <circle cx="57" cy="76.09" r="1.5" />
          <circle cx="50" cy="77" r="1.5" />
          <circle cx="43" cy="76.09" r="1.5" />
          <circle cx="36.5" cy="73.4" r="1.5" />
          <circle cx="30.91" cy="69.09" r="1.5" />
          <circle cx="26.62" cy="63.5" r="1.5" />
          <circle cx="23.91" cy="57" r="1.5" />
          <circle cx="23" cy="50" r="1.5" />
          <circle cx="23.91" cy="43" r="1.5" />
          <circle cx="26.62" cy="36.5" r="1.5" />
          <circle cx="30.91" cy="30.91" r="1.5" />
          <circle cx="36.5" cy="26.6" r="1.5" />
          <circle cx="43" cy="23.91" r="1.5" />

          {/* Ring 5 (Radius 34) */}
          <circle cx="50" cy="16" r="1.2" opacity="0.85" />
          <circle cx="57.07" cy="16.74" r="1.2" opacity="0.85" />
          <circle cx="63.85" cy="18.93" r="1.2" opacity="0.85" />
          <circle cx="70.04" cy="22.47" r="1.2" opacity="0.85" />
          <circle cx="75.36" cy="27.2" r="1.2" opacity="0.85" />
          <circle cx="79.57" cy="32.93" r="1.2" opacity="0.85" />
          <circle cx="82.47" cy="39.43" r="1.2" opacity="0.85" />
          <circle cx="83.91" cy="46.4" r="1.2" opacity="0.85" />
          <circle cx="83.82" cy="53.54" r="1.2" opacity="0.85" />
          <circle cx="82.2" cy="60.52" r="1.2" opacity="0.85" />
          <circle cx="79.14" cy="67.06" r="1.2" opacity="0.85" />
          <circle cx="74.79" cy="72.88" r="1.2" opacity="0.85" />
          <circle cx="69.34" cy="77.72" r="1.2" opacity="0.85" />
          <circle cx="63.02" cy="81.37" r="1.2" opacity="0.85" />
          <circle cx="56.12" cy="83.67" r="1.2" opacity="0.85" />
          <circle cx="48.94" cy="84.5" r="1.2" opacity="0.85" />
          <circle cx="41.79" cy="83.85" r="1.2" opacity="0.85" />
          <circle cx="35.01" cy="81.71" r="1.2" opacity="0.85" />
          <circle cx="28.91" cy="78.2" r="1.2" opacity="0.85" />
          <circle cx="23.77" cy="73.47" r="1.2" opacity="0.85" />
          <circle cx="19.85" cy="67.73" r="1.2" opacity="0.85" />
          <circle cx="17.33" cy="61.22" r="1.2" opacity="0.85" />
          <circle cx="16.34" cy="54.21" r="1.2" opacity="0.85" />
          <circle cx="16.94" cy="47.03" r="1.2" opacity="0.85" />
          <circle cx="19.12" cy="40.01" r="1.2" opacity="0.85" />
          <circle cx="22.78" cy="33.47" r="1.2" opacity="0.85" />
          <circle cx="27.76" cy="27.73" r="1.2" opacity="0.85" />
          <circle cx="33.87" cy="23.01" r="1.2" opacity="0.85" />
          <circle cx="40.85" cy="19.53" r="1.2" opacity="0.85" />
          <circle cx="48.42" cy="17.43" r="1.2" opacity="0.85" />
        </g>
      </svg>
    </div>
  )
}

export interface CloudFenLogoProps {
  variant?: 'inline' | 'lockup' | 'icon' | 'badge'
  size?: 'sm' | 'md' | 'lg' | 'xl' | number
  subtitle?: string
  showSubtitle?: boolean
  showGlow?: boolean
  className?: string
}

/**
 * Official CloudFen Brand Logo Component
 * Combines white typography ("c" and "udFen") with the authentic cyan/blue
 * dot-matrix vortex emblem replacing the "o" / central symbol.
 */
export function CloudFenLogo({
  variant = 'inline',
  size = 'md',
  subtitle = 'Digital Architecture Platform',
  showSubtitle = false,
  showGlow = true,
  className = '',
}: CloudFenLogoProps) {
  // Size calculations
  const sizeMap = {
    sm: { emblemSize: 24, fontSize: 'text-lg', subSize: 'text-[8px]', gap: 'gap-0.5' },
    md: { emblemSize: 32, fontSize: 'text-2xl', subSize: 'text-[9px]', gap: 'gap-1' },
    lg: { emblemSize: 42, fontSize: 'text-3xl', subSize: 'text-[10px]', gap: 'gap-1.5' },
    xl: { emblemSize: 56, fontSize: 'text-4xl', subSize: 'text-xs', gap: 'gap-2' },
  }

  const selectedSize = typeof size === 'number'
    ? { emblemSize: size, fontSize: 'text-2xl', subSize: 'text-[9px]', gap: 'gap-1' }
    : sizeMap[size] || sizeMap.md

  if (variant === 'icon') {
    return <CloudFenEmblem size={selectedSize.emblemSize} showGlow={showGlow} className={className} />
  }

  if (variant === 'badge') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-800/90 flex items-center justify-center p-1.5 shadow-lg shadow-cyan-500/10">
          <CloudFenEmblem size={28} showGlow={showGlow} />
        </div>
        <div>
          <span className={`font-bold tracking-tight text-white ${selectedSize.fontSize}`}>
            CloudFen
          </span>
          {showSubtitle && (
            <p className={`uppercase font-bold tracking-widest text-slate-400 ${selectedSize.subSize}`}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className={`inline-flex flex-col select-none ${className}`}>
      {/* Brand Lockup: Cl + [emblem] + udFen */}
      <div className={`inline-flex items-center ${selectedSize.gap} group cursor-pointer`}>
        {/* Letters 'Cl' (Capital C, lowercase l) */}
        <span
          className={`font-bold font-sans tracking-tight text-white transition-colors group-hover:text-cyan-200 ${selectedSize.fontSize}`}
          style={{ lineHeight: 1 }}
        >
          Cl
        </span>

        {/* Official Dot-Matrix Vortex / Crescent Emblem */}
        <div className="inline-flex items-center justify-center -mx-0.5">
          <CloudFenEmblem
            size={selectedSize.emblemSize}
            showGlow={showGlow}
            interactive={false}
          />
        </div>

        {/* Letters 'udFen' */}
        <span
          className={`font-bold font-sans tracking-tight text-white transition-colors group-hover:text-cyan-200 ${selectedSize.fontSize}`}
          style={{ lineHeight: 1 }}
        >
          ud<span className="text-white">Fen</span>
        </span>
      </div>

      {/* Subtitle / Brand Tagline */}
      {showSubtitle && (
        <span className={`uppercase font-bold tracking-widest text-slate-400 mt-1 ${selectedSize.subSize}`}>
          {subtitle}
        </span>
      )}
    </div>
  )
}

export default CloudFenLogo
