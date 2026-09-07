'use client';

import React from 'react';
import { Cloud, Wifi, Laptop, Monitor, Smartphone, Globe, ArrowUp, ArrowDown, Radio, Database } from 'lucide-react';

export const CloudInfraGraphic: React.FC = () => {
  return (
    <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] rounded-xl overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-black border border-zinc-800 flex items-center justify-center p-6 select-none group">
      {/* Background isometric grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-6 right-6 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

      {/* SVG Isometric Diagram */}
      <svg
        viewBox="0 0 600 450"
        className="w-full h-full max-w-[540px] drop-shadow-[0_20px_50px_rgba(6,182,212,0.25)] transition-transform duration-700 ease-out group-hover:scale-105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#e2e8f0" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.85" />
          </linearGradient>

          <linearGradient id="cloudShadow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#64748b" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#334155" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="routerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          <linearGradient id="screenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>

          <linearGradient id="arrowGradUp" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>

          <linearGradient id="arrowGradRed" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f87171" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>

          <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* --- Globe Grid (Top Left) --- */}
        <g transform="translate(100, 100)" opacity="0.65" className="animate-[spin_40s_linear_infinite] origin-[60px_60px]">
          <circle cx="60" cy="60" r="50" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
          <ellipse cx="60" cy="60" rx="50" ry="22" stroke="#38bdf8" strokeWidth="1.2" />
          <ellipse cx="60" cy="60" rx="22" ry="50" stroke="#38bdf8" strokeWidth="1.2" />
          <line x1="10" y1="60" x2="110" y2="60" stroke="#38bdf8" strokeWidth="1.2" />
        </g>

        {/* --- Network Connecting Data Lines --- */}
        <path
          d="M 280 200 L 420 150 L 460 240 L 320 340 L 190 320 Z"
          stroke="#06b6d4"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.4"
        />

        {/* Data pulses along lines */}
        <circle cx="350" cy="175" r="3" fill="#22d3ee" filter="url(#cyanGlow)">
          <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="440" cy="195" r="3" fill="#22d3ee" filter="url(#cyanGlow)">
          <animate attributeName="opacity" values="1;0.2;1" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* --- Central Isometric 3D Cloud Structure --- */}
        {/* Cloud 3D Depth Base / Extrusion */}
        <path
          d="M 230 250
             C 210 250 190 230 200 200
             C 195 160 235 140 265 155
             C 290 120 355 125 375 165
             C 410 160 435 190 425 220
             C 445 250 420 280 385 280
             L 245 280
             Z"
          fill="url(#cloudShadow)"
          transform="translate(10, 20)"
          opacity="0.7"
        />

        {/* Cloud Front Face */}
        <path
          d="M 220 240
             C 200 240 180 220 190 190
             C 185 150 225 130 255 145
             C 280 110 345 115 365 155
             C 400 150 425 180 415 210
             C 435 240 410 270 375 270
             L 235 270
             Z"
          fill="url(#cloudGrad)"
          stroke="#cbd5e1"
          strokeWidth="2"
        />

        {/* Inner Cloud Highlight Arc */}
        <path
          d="M 260 148 C 285 120 335 125 355 155"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* --- 3D Isometric Arrow Rising from Cloud (Verbatim Screenshot Arrow) --- */}
        <g transform="translate(265, 120)">
          {/* 3D Isometric Arrow Base */}
          <polygon
            points="25,0 50,45 35,45 35,110 15,110 15,45 0,45"
            fill="url(#arrowGradUp)"
            stroke="#38bdf8"
            strokeWidth="1.5"
            filter="url(#cyanGlow)"
          />
          {/* 3D Bevel Edge */}
          <polygon
            points="50,45 35,45 35,110 40,105 40,40 55,40"
            fill="#0284c7"
            opacity="0.8"
          />
        </g>

        {/* Red & Blue Floating Sync Arrows */}
        {/* Red Down Arrow */}
        <g transform="translate(290, 60)">
          <polygon points="12,30 24,10 17,10 17,0 7,0 7,10 0,10" fill="url(#arrowGradRed)" />
        </g>
        {/* Blue Up Arrow */}
        <g transform="translate(325, 75)">
          <polygon points="12,0 24,20 17,20 17,30 7,30 7,20 0,20" fill="#38bdf8" />
        </g>

        {/* --- Network Router / Switch (Top Right) --- */}
        <g transform="translate(390, 160)">
          {/* Dual Antennas */}
          <line x1="30" y1="10" x2="30" y2="-25" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="30" cy="-25" r="2.5" fill="#38bdf8" />
          <line x1="60" y1="10" x2="60" y2="-25" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="60" cy="-25" r="2.5" fill="#38bdf8" />

          {/* Router Chassis (Isometric Box) */}
          {/* Top Surface */}
          <polygon points="10,25 70,0 110,20 50,45" fill="#1e293b" stroke="#334155" strokeWidth="1" />
          {/* Front Left */}
          <polygon points="10,25 50,45 50,65 10,45" fill="#0f172a" stroke="#334155" strokeWidth="1" />
          {/* Front Right */}
          <polygon points="50,45 110,20 110,40 50,65" fill="#020617" stroke="#334155" strokeWidth="1" />

          {/* Router LED Lights */}
          <circle cx="20" cy="38" r="2" fill="#ef4444" />
          <circle cx="28" cy="42" r="2" fill="#38bdf8" />
          <circle cx="36" cy="46" r="2" fill="#22c55e" />
          <circle cx="44" cy="50" r="2" fill="#38bdf8" />
        </g>

        {/* --- Laptop (Middle Right) --- */}
        <g transform="translate(415, 235)">
          {/* Screen Back */}
          <polygon points="35,10 85,-15 85,35 35,60" fill="#1e293b" stroke="#475569" strokeWidth="1" />
          {/* Screen Front / Display */}
          <polygon points="38,12 82,-12 82,32 38,56" fill="url(#screenGrad)" />
          {/* Browser UI mockup */}
          <line x1="45" y1="18" x2="75" y2="5" stroke="#ffffff" strokeWidth="1.5" opacity="0.8" />
          <line x1="45" y1="28" x2="65" y2="18" stroke="#bae6fd" strokeWidth="1" opacity="0.8" />

          {/* Keyboard Base */}
          <polygon points="5,60 55,35 95,50 45,75" fill="#0f172a" stroke="#334155" strokeWidth="1" />
          {/* Trackpad */}
          <polygon points="25,65 40,58 45,61 30,68" fill="#334155" />
        </g>

        {/* --- Workstation Desktop Monitor (Bottom Left) --- */}
        <g transform="translate(140, 310)">
          {/* Stand */}
          <polygon points="65,95 85,85 85,110 65,120" fill="#334155" />
          <ellipse cx="75" cy="115" rx="25" ry="10" fill="#1e293b" stroke="#475569" strokeWidth="1" />

          {/* Monitor Frame */}
          <polygon points="10,25 110,-25 110,65 10,115" fill="#1e293b" stroke="#475569" strokeWidth="2" />
          {/* Display Glass */}
          <polygon points="16,30 104,-18 104,60 16,108" fill="#0284c7" />

          {/* UI Windows & Layout Wireframe inside Display */}
          <polygon points="22,35 55,20 55,60 22,75" fill="#e0f2fe" />
          <polygon points="60,18 98,0 98,50 60,68" fill="#bae6fd" />
          <line x1="26" y1="45" x2="50" y2="33" stroke="#0284c7" strokeWidth="1.5" />
          <line x1="26" y1="55" x2="45" y2="45" stroke="#0284c7" strokeWidth="1.5" />
        </g>

        {/* --- Mobile Phone / Smartphone (Left & Center) --- */}
        <g transform="translate(120, 240)">
          {/* Phone Body */}
          <polygon points="5,20 40,0 65,15 30,35" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
          {/* Phone Screen */}
          <polygon points="8,20 38,3 58,15 28,32" fill="#0f172a" />
          {/* Home button / camera dot */}
          <circle cx="15" cy="22" r="1.5" fill="#38bdf8" />
        </g>

        {/* Second Smartphone (Bottom Center) */}
        <g transform="translate(310, 370)">
          <polygon points="0,20 40,0 65,15 25,35" fill="#ef4444" stroke="#b91c1c" strokeWidth="1" />
          <polygon points="4,19 37,2 58,14 25,31" fill="#0f172a" />
        </g>

        {/* --- Pushpin Icon (Screenshot Detail) --- */}
        <g transform="translate(150, 310)">
          <ellipse cx="20" cy="20" rx="10" ry="14" fill="#ef4444" stroke="#dc2626" strokeWidth="1" />
          <polygon points="15,28 25,28 20,42" fill="#94a3b8" />
        </g>
      </svg>

      {/* Floating Badge Label */}
      <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/85 backdrop-blur-md border border-cyan-500/30 text-white text-xs font-semibold">
        <Wifi className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
        <span>Isometric Cloud & Network Ecosystem</span>
      </div>
    </div>
  );
};

export default CloudInfraGraphic;
