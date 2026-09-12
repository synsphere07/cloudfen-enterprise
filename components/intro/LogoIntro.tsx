'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Sparkles, ArrowDown, ChevronRight, ArrowRight, Zap } from 'lucide-react';

interface LogoIntroProps {
  onStartExit?: () => void;
  onComplete?: () => void;
}

interface WarpStar {
  x: number;
  y: number;
  z: number;
  prevZ: number;
  r: number;
  a: number;
  speed: number;
  phase: number;
}

export default function LogoIntro({ onStartExit, onComplete }: LogoIntroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgCanvasRef = useRef<HTMLCanvasElement>(null);
  const emblemCanvasRef = useRef<HTMLCanvasElement>(null);
  const logo3dRef = useRef<HTMLDivElement>(null);
  const charRefs = useRef<(HTMLDivElement | null)[]>([]);
  const emblemSlotRef = useRef<HTMLDivElement>(null);

  const [animationDone, setAnimationDone] = useState(false);
  const [scrolledAway, setScrolledAway] = useState(false);
  const [warpActive, setWarpActive] = useState(false);

  const emblemStateRef = useRef({ visible: false, revealProgress: 0 });
  const isWarpingRef = useRef(false);
  const warpVelocityRef = useRef(1);

  const setCharRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    charRefs.current[index] = el;
  }, []);

  // 1. STARFIELD BACKGROUND WITH HYPERSPACE WARP ACCELERATION
  useEffect(() => {
    const canvas = bgCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let stars: WarpStar[] = [];
    const starCount = 380;
    let width = window.innerWidth;
    let height = window.innerHeight;

    function initStars() {
      width = canvas!.width = window.innerWidth;
      height = canvas!.height = window.innerHeight;
      stars = [];

      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: (Math.random() - 0.5) * width * 2,
          y: (Math.random() - 0.5) * height * 2,
          z: Math.random() * 1000 + 1,
          prevZ: 1000,
          r: 0.4 + Math.random() * 1.5,
          a: 0.2 + Math.random() * 0.7,
          speed: 0.002 + Math.random() * 0.006,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    initStars();
    window.addEventListener('resize', initStars);

    function draw(t: number) {
      if (!ctx || !canvas) return;

      const isWarping = isWarpingRef.current;
      const cx = width / 2;
      const cy = height / 2;

      if (isWarping) {
        // Accelerate warp velocity exponentially
        warpVelocityRef.current = Math.min(warpVelocityRef.current * 1.09 + 0.8, 65);

        // Motion trail background during hyperspace jump
        ctx.fillStyle = 'rgba(255, 255, 255, 0.28)';
        ctx.fillRect(0, 0, width, height);

        for (let i = 0; i < stars.length; i++) {
          const s = stars[i];
          s.prevZ = s.z;
          s.z -= warpVelocityRef.current;

          if (s.z <= 0) {
            s.z = 1000;
            s.prevZ = 1000;
            s.x = (Math.random() - 0.5) * width * 2;
            s.y = (Math.random() - 0.5) * height * 2;
          }

          // Project 3D coordinates to 2D screen
          const k = 400 / s.z;
          const px = s.x * k + cx;
          const py = s.y * k + cy;

          const prevK = 400 / s.prevZ;
          const prevPx = s.x * prevK + cx;
          const prevPy = s.y * prevK + cy;

          if (px >= 0 && px <= width && py >= 0 && py <= height) {
            const streakDist = Math.hypot(px - prevPx, py - prevPy);
            const alpha = Math.min(1, (1 - s.z / 1000) * 1.4);

            ctx.beginPath();
            ctx.moveTo(prevPx, prevPy);
            ctx.lineTo(px, py);

            if (streakDist > 8) {
              // Glowing warp streak with amber-cyan accents
              const gradient = ctx.createLinearGradient(prevPx, prevPy, px, py);
              gradient.addColorStop(0, `rgba(217, 119, 6, ${alpha * 0.25})`);
              gradient.addColorStop(0.7, `rgba(255, 177, 59, ${alpha * 0.85})`);
              gradient.addColorStop(1, `rgba(15, 23, 42, ${alpha})`);

              ctx.strokeStyle = gradient;
              ctx.lineWidth = Math.max(1, s.r * (1 + streakDist * 0.05));
            } else {
              ctx.strokeStyle = `rgba(15, 23, 42, ${alpha * 0.8})`;
              ctx.lineWidth = s.r;
            }

            ctx.stroke();
          }
        }
      } else {
        // Idle gentle twinkling celestial particles on white
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < stars.length; i++) {
          const s = stars[i];
          const flicker = 0.5 + 0.5 * Math.sin(t * s.speed + s.phase);

          // Subtle natural drift
          const px = s.x * (400 / s.z) + cx;
          const py = s.y * (400 / s.z) + cy;

          if (px >= 0 && px <= width && py >= 0 && py <= height) {
            ctx.beginPath();
            ctx.arc(px, py, s.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(15, 23, 42, ${s.a * flicker * 0.5})`;
            ctx.fill();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    }

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', initStars);
    };
  }, []);

  // 2. EMBLEM CANVAS ANIMATION
  useEffect(() => {
    const canvas = emblemCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const CX = 95, CY = 95;
    let animId: number;

    const ringConfigs = [
      { radius: 38, count: 20, dotSize: 2.5, color: '14, 116, 144' },
      { radius: 30, count: 16, dotSize: 2.8, color: '2, 132, 199' },
      { radius: 22, count: 12, dotSize: 3.0, color: '13, 148, 136' },
      { radius: 14, count: 8,  dotSize: 3.2, color: '217, 119, 6' },
      { radius: 6,  count: 4,  dotSize: 3.5, color: '245, 158, 11' },
    ];

    const rings = ringConfigs.map((cfg) => {
      const dots = [];
      for (let i = 0; i < cfg.count; i++) {
        dots.push({ baseAngle: (i / cfg.count) * Math.PI * 2 });
      }
      return { ...cfg, dots };
    });

    function isInCrescent(x: number, y: number) {
      const dx = x - (CX + 18);
      const dy = y - CY;
      return Math.sqrt(dx * dx + dy * dy) < 32;
    }

    function drawEmblem(t: number) {
      ctx!.clearRect(0, 0, 190, 190);
      const state = emblemStateRef.current;

      if (!state.visible) {
        animId = requestAnimationFrame(drawEmblem);
        return;
      }

      const time = t * 0.001;

      rings.forEach((ring, ri) => {
        const rotSpeed = (ri % 2 === 0 ? 1 : -1) * (0.15 + ri * 0.05);
        const currentRot = time * rotSpeed;

        ring.dots.forEach((dot, di) => {
          const revealIndex = ri * 20 + di;
          if (revealIndex > state.revealProgress) return;

          const angle = dot.baseAngle + currentRot;
          const wobble = Math.sin(time * 2 + di * 0.5) * 1.5;
          const px = CX + Math.cos(angle) * (ring.radius * 2 + wobble);
          const py = CY + Math.sin(angle) * (ring.radius * 2 + wobble);

          if (isInCrescent(px, py)) return;

          const pulse = 0.7 + 0.3 * Math.sin(time * 3 + ri + di * 0.3);
          const alphaBase = 0.5 + (4 - ri) * 0.1;

          ctx!.beginPath();
          ctx!.arc(px, py, ring.dotSize * 2.5, 0, Math.PI * 2);
          const grd = ctx!.createRadialGradient(px, py, 0, px, py, ring.dotSize * 2.5);
          grd.addColorStop(0, `rgba(${ring.color}, ${0.25 * pulse})`);
          grd.addColorStop(1, `rgba(${ring.color}, 0)`);
          ctx!.fillStyle = grd;
          ctx!.fill();

          ctx!.beginPath();
          ctx!.arc(px, py, ring.dotSize * pulse, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(${ring.color}, ${alphaBase * pulse})`;
          ctx!.fill();
        });
      });

      if (state.revealProgress > 80) {
        const centerPulse = 0.7 + 0.3 * Math.sin(time * 4);
        const grd = ctx!.createRadialGradient(CX, CY, 0, CX, CY, 12);
        grd.addColorStop(0, `rgba(217, 119, 6, ${0.9 * centerPulse})`);
        grd.addColorStop(0.3, `rgba(245, 158, 11, ${0.4 * centerPulse})`);
        grd.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx!.beginPath();
        ctx!.arc(CX, CY, 12, 0, Math.PI * 2);
        ctx!.fillStyle = grd;
        ctx!.fill();

        ctx!.beginPath();
        ctx!.arc(CX, CY, 3 * centerPulse, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(15, 23, 42, ${0.9 * centerPulse})`;
        ctx!.fill();
      }

      animId = requestAnimationFrame(drawEmblem);
    }
    animId = requestAnimationFrame(drawEmblem);

    return () => cancelAnimationFrame(animId);
  }, []);

  // 3. LETTER REVEAL TIMELINE
  useEffect(() => {
    const delay = (ms: number) => new Promise<void>(r => setTimeout(r, ms));

    function revealChar(el: HTMLDivElement) {
      return new Promise<void>(resolve => {
        el.style.transition = 'none';
        el.style.transform = 'translateZ(-160px) rotateY(80deg) rotateX(20deg) scale(0.3)';
        el.style.opacity = '0';
        el.style.filter = 'blur(10px)';

        requestAnimationFrame(() => {
          el.style.transition = 'transform 0.65s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.45s ease-out, filter 0.5s ease-out';
          el.style.transform = 'translateZ(0) rotateY(0deg) rotateX(0deg) scale(1)';
          el.style.opacity = '1';
          el.style.filter = 'blur(0)';
          el.classList.add('revealed');
          setTimeout(resolve, 200);
        });
      });
    }

    function revealEmblem() {
      return new Promise<void>(resolve => {
        const slot = emblemSlotRef.current;
        if (!slot) { resolve(); return; }
        slot.style.transition = 'none';
        slot.style.transform = 'scale(0) rotateZ(180deg)';
        slot.style.opacity = '0';
        slot.style.filter = 'blur(6px)';

        emblemStateRef.current.visible = true;

        let frame = 0;
        const interval = setInterval(() => {
          emblemStateRef.current.revealProgress = frame * 2;
          frame++;
          if (frame > 60) clearInterval(interval);
        }, 16);

        requestAnimationFrame(() => {
          slot.style.transition = 'transform 0.9s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.5s ease-out, filter 0.6s ease-out';
          slot.style.transform = 'scale(1) rotateZ(0deg)';
          slot.style.opacity = '1';
          slot.style.filter = 'blur(0)';
          setTimeout(resolve, 450);
        });
      });
    }

    const timeline: { type: string; charIndex?: number; delay: number }[] = [
      { type: 'char', charIndex: 0, delay: 350 },
      { type: 'char', charIndex: 1, delay: 240 },
      { type: 'emblem', delay: 380 },
      { type: 'char', charIndex: 2, delay: 280 },
      { type: 'char', charIndex: 3, delay: 240 },
      { type: 'pause', delay: 280 },
      { type: 'char', charIndex: 4, delay: 280 },
      { type: 'char', charIndex: 5, delay: 220 },
      { type: 'char', charIndex: 6, delay: 220 },
    ];

    let cancelled = false;

    async function runTimeline() {
      await delay(400);
      for (const item of timeline) {
        if (cancelled) return;
        if (item.type === 'pause') {
          await delay(item.delay);
        } else if (item.type === 'char') {
          await delay(item.delay);
          const el = charRefs.current[item.charIndex!];
          if (el) await revealChar(el);
        } else if (item.type === 'emblem') {
          await delay(item.delay);
          await revealEmblem();
        }
      }
      if (!cancelled) {
        await delay(500);
        setAnimationDone(true);
      }
    }

    runTimeline();
    return () => { cancelled = true; };
  }, []);

  // 4. MOUSE 3D TILT
  useEffect(() => {
    const logo = logo3dRef.current;
    if (!logo) return;

    const onMove = (e: MouseEvent) => {
      if (isWarpingRef.current) return;
      const xRatio = (e.clientX / window.innerWidth - 0.5);
      const yRatio = (e.clientY / window.innerHeight - 0.5);
      logo.style.animation = 'none';
      logo.style.transform = `rotateY(${xRatio * 22}deg) rotateX(${-yRatio * 15}deg)`;
    };
    const onLeave = () => {
      if (isWarpingRef.current) return;
      logo.style.animation = 'floatScene 7s ease-in-out infinite';
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  // 5. SEAMLESS WARP TRANSITION TRIGGER TO WEBSITE OPENING
  const triggerTransition = useCallback(() => {
    if (scrolledAway || isWarpingRef.current) return;

    setScrolledAway(true);
    setWarpActive(true);
    isWarpingRef.current = true;

    // Notify parent to start revealing website underneath
    onStartExit?.();

    // After warp acceleration and aperture flash completes (1100ms), unmount intro
    setTimeout(() => {
      onComplete?.();
    }, 1150);
  }, [scrolledAway, onStartExit, onComplete]);

  // Global listeners for scroll, wheel, keyboard, and gestures
  useEffect(() => {
    if (scrolledAway) return;

    let triggered = false;
    const onWheel = (e: WheelEvent) => {
      if ((e.deltaY > 0 || Math.abs(e.deltaX) > 30) && !triggered) {
        triggered = true;
        triggerTransition();
      }
    };

    let touchStartY = 0;
    let touchStartX = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
    };
    const onTouchMove = (e: TouchEvent) => {
      const deltaY = touchStartY - e.touches[0].clientY;
      const deltaX = Math.abs(touchStartX - e.touches[0].clientX);
      if ((deltaY > 30 || deltaX > 40) && !triggered) {
        triggered = true;
        triggerTransition();
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (['Space', 'Enter', 'ArrowDown', 'PageDown', 'Escape'].includes(e.code) && !triggered) {
        triggered = true;
        triggerTransition();
      }
    };

    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [scrolledAway, triggerTransition]);

  const charData = [
    { letter: 'C', cap: true },
    { letter: 'l', cap: false },
    // emblem goes here in the row
    { letter: 'u', cap: false },
    { letter: 'd', cap: false },
    { letter: 'F', cap: true },
    { letter: 'e', cap: false },
    { letter: 'n', cap: false },
  ];

  return (
    <section
      ref={containerRef}
      onClick={triggerTransition}
      className={`logo-intro-section ${scrolledAway ? 'logo-intro-warp-exit' : ''}`}
      aria-label="CloudFen Logo Intro"
    >
      {/* Dynamic Hyperspace Canvas */}
      <canvas ref={bgCanvasRef} className="logo-intro-bg-canvas" />

      {/* Warp Light Flash & Shockwave Aperture Overlays */}
      <div className={`warp-flash-burst ${warpActive ? 'warp-flash-burst-active' : ''}`} />
      <div className={`warp-shockwave-ring ${warpActive ? 'warp-shockwave-active' : ''}`} />
      <div className={`warp-anamorphic-flare ${warpActive ? 'warp-flare-active' : ''}`} />

      {/* Top Skip Button */}
      <div className="absolute top-6 right-6 z-30 pointer-events-auto">
        <button
          onClick={(e) => {
            e.stopPropagation();
            triggerTransition();
          }}
          className="px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider text-slate-600 hover:text-slate-900 bg-black/5 hover:bg-black/10 border border-black/10 hover:border-slate-400 backdrop-blur-md transition-all duration-200 cursor-pointer flex items-center gap-1.5 shadow-sm"
        >
          <span>SKIP INTRO</span>
          <span className="text-[10px] text-slate-400">[ESC]</span>
        </button>
      </div>

      {/* 3D Perspective Wordmark Stage */}
      <div className="logo-intro-stage">
        <div className="logo-intro-3d" ref={logo3dRef}>
          <div className="logo-intro-word-row">
            {/* C, l */}
            {charData.slice(0, 2).map((c, i) => (
              <div
                key={i}
                ref={setCharRef(i)}
                className={`logo-intro-char ${c.cap ? 'logo-intro-char-cap' : ''}`}
              >
                <span className="logo-intro-front">{c.letter}</span>
                {[1,2,3,4,5,6].map(d => (
                  <span key={d} className={`logo-intro-depth logo-intro-depth-${d}`}>{c.letter}</span>
                ))}
                <div className="logo-intro-glow" />
              </div>
            ))}

            {/* Emblem */}
            <div ref={emblemSlotRef} className="logo-intro-emblem-slot">
              <canvas
                ref={emblemCanvasRef}
                width={190}
                height={190}
                style={{ width: 95, height: 95 }}
              />
            </div>

            {/* u, d, F, e, n */}
            {charData.slice(2).map((c, i) => (
              <div
                key={i + 2}
                ref={setCharRef(i + 2)}
                className={`logo-intro-char ${c.cap ? 'logo-intro-char-cap' : ''}`}
              >
                <span className="logo-intro-front">{c.letter}</span>
                {[1,2,3,4,5,6].map(d => (
                  <span key={d} className={`logo-intro-depth logo-intro-depth-${d}`}>{c.letter}</span>
                ))}
                <div className="logo-intro-glow" />
              </div>
            ))}
          </div>

          {/* Subtitle Badge */}
          <div className={`logo-intro-subline ${animationDone ? 'logo-intro-subline-visible' : ''}`}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/90 text-[11px] sm:text-xs font-mono uppercase tracking-[0.35em] text-slate-800 font-semibold shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
              ENTERPRISE AI AGENTS &amp; WORKFLOW MESH
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Enter Callout */}
      <div
        className={`logo-intro-scroll-indicator ${animationDone ? 'logo-intro-scroll-visible' : ''}`}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            triggerTransition();
          }}
          className="group relative inline-flex items-center gap-3.5 px-8 py-3.5 rounded-full bg-[#0b0e13] hover:bg-black border border-slate-800 text-white shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_40px_rgba(255,177,59,0.3)] transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer overflow-hidden"
        >
          {/* Ambient inner glow layer */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Left glowing spark indicator */}
          <div className="relative z-10 w-6 h-6 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-400/30 transition-all duration-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 group-hover:text-amber-200 transition-colors" />
          </div>

          {/* Text: Enter the platform */}
          <span className="relative z-10 font-sans text-sm sm:text-base font-medium tracking-wide text-white group-hover:text-amber-100 transition-colors duration-200">
            Enter the platform
          </span>

          {/* Right sleek arrow */}
          <div className="relative z-10 w-6 h-6 rounded-full bg-amber-400 group-hover:bg-amber-300 flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5 shadow-sm">
            <ArrowRight className="w-3.5 h-3.5 text-black transition-colors" />
          </div>
        </button>
      </div>

      <style jsx>{`
        .logo-intro-section {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          min-height: 100dvh;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          background: #ffffff;
          z-index: 100;
          cursor: pointer;
          user-select: none;
          transition: opacity 1.1s cubic-bezier(0.16, 1, 0.3, 1),
                      filter 1.1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Hyperspace Warp Camera Zoom & Dissolve */
        .logo-intro-warp-exit {
          opacity: 0;
          filter: blur(12px) brightness(1.1);
          pointer-events: none;
        }

        .logo-intro-warp-exit .logo-intro-stage {
          transform: scale3d(2.4, 2.4, 2.4) translateZ(450px);
          opacity: 0;
          filter: blur(16px);
          transition: transform 1.1s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1),
                      filter 0.95s ease;
        }

        .logo-intro-bg-canvas {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          z-index: 0;
        }

        /* Dynamic Light Burst Overlay */
        .warp-flash-burst {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, rgba(255, 177, 59, 0.35) 0%, rgba(255, 255, 255, 0.8) 40%, #ffffff 80%);
          opacity: 0;
          pointer-events: none;
          z-index: 2;
          transform: scale(0.5);
          transition: opacity 0.5s ease-out, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .warp-flash-burst-active {
          opacity: 1;
          transform: scale(3.5);
        }

        /* Expanding Shockwave Ring */
        .warp-shockwave-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 300px;
          height: 300px;
          margin-top: -150px;
          margin-left: -150px;
          border-radius: 50%;
          border: 2px solid rgba(255, 177, 59, 0.85);
          box-shadow: 0 0 50px rgba(255, 177, 59, 0.5), inset 0 0 30px rgba(255, 177, 59, 0.3);
          opacity: 0;
          pointer-events: none;
          z-index: 2;
          transform: scale(0.1);
        }
        .warp-shockwave-active {
          opacity: 1;
          transform: scale(6);
          transition: transform 1.1s cubic-bezier(0.16, 1, 0.3, 1), opacity 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Anamorphic Horizontal Flare */
        .warp-anamorphic-flare {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 2px;
          margin-top: -1px;
          background: linear-gradient(90deg, transparent 0%, rgba(255, 177, 59, 0.9) 30%, #ffb13b 50%, rgba(255, 177, 59, 0.9) 70%, transparent 100%);
          box-shadow: 0 0 25px rgba(255, 177, 59, 0.9);
          opacity: 0;
          pointer-events: none;
          z-index: 3;
          transform: scaleX(0.2);
          transition: opacity 0.4s ease, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .warp-flare-active {
          opacity: 1;
          transform: scaleX(1.5);
        }

        .logo-intro-stage {
          position: relative;
          z-index: 1;
          perspective: 1200px;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .logo-intro-3d {
          transform-style: preserve-3d;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          animation: floatScene 7s ease-in-out infinite;
        }
        @keyframes floatScene {
          0%, 100% { transform: rotateX(3deg) rotateY(-2deg) translateY(0); }
          25% { transform: rotateX(-2deg) rotateY(3deg) translateY(-5px); }
          50% { transform: rotateX(2deg) rotateY(5deg) translateY(2px); }
          75% { transform: rotateX(-2deg) rotateY(-4deg) translateY(-3px); }
        }
        .logo-intro-word-row {
          display: flex;
          align-items: center;
          transform-style: preserve-3d;
        }
        .logo-intro-char {
          position: relative;
          display: inline-block;
          font-weight: 600;
          font-size: 110px;
          line-height: 1;
          letter-spacing: -2px;
          transform-style: preserve-3d;
          opacity: 0;
          color: #0b0e13;
          font-family: var(--font-inter), 'Inter', 'Segoe UI', sans-serif;
        }
        .logo-intro-front {
          position: relative;
          z-index: 3;
          color: #0b0e13;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        }
        .logo-intro-depth {
          position: absolute;
          top: 0; left: 0;
          z-index: 1;
        }
        .logo-intro-depth-1 { transform: translateZ(-3px); color: rgba(15, 23, 42, 0.6); }
        .logo-intro-depth-2 { transform: translateZ(-6px); color: rgba(15, 23, 42, 0.45); }
        .logo-intro-depth-3 { transform: translateZ(-9px); color: rgba(15, 23, 42, 0.32); }
        .logo-intro-depth-4 { transform: translateZ(-12px); color: rgba(15, 23, 42, 0.2); }
        .logo-intro-depth-5 { transform: translateZ(-15px); color: rgba(15, 23, 42, 0.12); }
        .logo-intro-depth-6 { transform: translateZ(-18px); color: rgba(15, 23, 42, 0.06); }
        .logo-intro-glow {
          position: absolute;
          top: 50%; left: 50%;
          width: 70px; height: 70px;
          transform: translate(-50%, -50%) translateZ(-5px);
          background: radial-gradient(circle, rgba(255, 177, 59, 0.15) 0%, transparent 70%);
          border-radius: 50%;
          z-index: 0;
          opacity: 0;
          transition: opacity 0.6s;
        }
        .logo-intro-char-cap .logo-intro-front { font-weight: 700; }
        .logo-intro-emblem-slot {
          position: relative;
          width: 95px;
          height: 110px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
          opacity: 0;
          margin: 0 -5px;
        }

        .logo-intro-subline {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .logo-intro-subline-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Scroll / Enter callout */
        .logo-intro-scroll-indicator {
          position: absolute;
          bottom: 36px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          opacity: 0;
          transition: opacity 0.8s ease;
          z-index: 10;
        }
        .logo-intro-scroll-visible {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .logo-intro-char {
            font-size: 52px;
          }
          .logo-intro-emblem-slot {
            width: 48px;
            height: 56px;
          }
          .logo-intro-emblem-slot canvas {
            width: 48px !important;
            height: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
