'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';

interface LogoIntroProps {
  onStartExit?: () => void;
  onComplete?: () => void;
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

  const emblemStateRef = useRef({ visible: false, revealProgress: 0 });

  const setCharRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    charRefs.current[index] = el;
  }, []);

  // Starfield background
  useEffect(() => {
    const canvas = bgCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    interface Star {
      x: number; y: number; r: number; a: number; speed: number; phase: number;
    }
    let stars: Star[] = [];

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      stars = [];
      for (let i = 0; i < 200; i++) {
        stars.push({
          x: Math.random() * canvas!.width,
          y: Math.random() * canvas!.height,
          r: 0.3 + Math.random() * 1.4,
          a: 0.15 + Math.random() * 0.5,
          speed: 0.002 + Math.random() * 0.006,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    resize();
    window.addEventListener('resize', resize);

    function draw(t: number) {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      stars.forEach(s => {
        const flicker = 0.5 + 0.5 * Math.sin(t * s.speed + s.phase);
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255, 255, 255, ${s.a * flicker * 0.75})`;
        ctx!.fill();
      });
      animId = requestAnimationFrame(draw);
    }
    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // Emblem canvas animation
  useEffect(() => {
    const canvas = emblemCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const CX = 95, CY = 95;
    let animId: number;

    const ringConfigs = [
      { radius: 38, count: 20, dotSize: 2.5, color: '0, 200, 220' },
      { radius: 30, count: 16, dotSize: 2.8, color: '0, 210, 230' },
      { radius: 22, count: 12, dotSize: 3.0, color: '0, 220, 240' },
      { radius: 14, count: 8,  dotSize: 3.2, color: '0, 230, 250' },
      { radius: 6,  count: 4,  dotSize: 3.5, color: '0, 240, 255' },
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
        grd.addColorStop(0, `rgba(0, 240, 255, ${0.9 * centerPulse})`);
        grd.addColorStop(0.3, `rgba(0, 220, 240, ${0.4 * centerPulse})`);
        grd.addColorStop(1, 'rgba(0, 200, 220, 0)');
        ctx!.beginPath();
        ctx!.arc(CX, CY, 12, 0, Math.PI * 2);
        ctx!.fillStyle = grd;
        ctx!.fill();

        ctx!.beginPath();
        ctx!.arc(CX, CY, 3 * centerPulse, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255, 255, 255, ${0.9 * centerPulse})`;
        ctx!.fill();
      }

      animId = requestAnimationFrame(drawEmblem);
    }
    animId = requestAnimationFrame(drawEmblem);

    return () => cancelAnimationFrame(animId);
  }, []);

  // Letter reveal timeline
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
          setTimeout(resolve, 220);
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
          setTimeout(resolve, 500);
        });
      });
    }

    const timeline: { type: string; charIndex?: number; delay: number }[] = [
      { type: 'char', charIndex: 0, delay: 400 },
      { type: 'char', charIndex: 1, delay: 280 },
      { type: 'emblem', delay: 450 },
      { type: 'char', charIndex: 2, delay: 320 },
      { type: 'char', charIndex: 3, delay: 280 },
      { type: 'pause', delay: 350 },
      { type: 'char', charIndex: 4, delay: 320 },
      { type: 'char', charIndex: 5, delay: 260 },
      { type: 'char', charIndex: 6, delay: 260 },
    ];

    let cancelled = false;

    async function runTimeline() {
      await delay(500);
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
        await delay(600);
        setAnimationDone(true);
      }
    }

    runTimeline();
    return () => { cancelled = true; };
  }, []);

  // Mouse 3D tilt
  useEffect(() => {
    const logo = logo3dRef.current;
    if (!logo) return;

    const onMove = (e: MouseEvent) => {
      const xRatio = (e.clientX / window.innerWidth - 0.5);
      const yRatio = (e.clientY / window.innerHeight - 0.5);
      logo.style.animation = 'none';
      logo.style.transform = `rotateY(${xRatio * 22}deg) rotateX(${-yRatio * 15}deg)`;
    };
    const onLeave = () => {
      logo.style.animation = 'floatScene 7s ease-in-out infinite';
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  const handleScrollDown = useCallback(() => {
    if (scrolledAway) return;
    setScrolledAway(true);
    onStartExit?.();
    setTimeout(() => {
      onComplete?.();
    }, 850);
  }, [scrolledAway, onStartExit, onComplete]);

  // Detect scroll/wheel/touch/keyboard/click to trigger transition
  useEffect(() => {
    if (scrolledAway) return;

    let triggered = false;
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY > 0 && !triggered) {
        triggered = true;
        handleScrollDown();
      }
    };

    let touchStartY = 0;
    const onTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0].clientY; };
    const onTouchMove = (e: TouchEvent) => {
      if (touchStartY - e.touches[0].clientY > 40 && !triggered) {
        triggered = true;
        handleScrollDown();
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (['Space', 'Enter', 'ArrowDown', 'PageDown'].includes(e.code) && !triggered) {
        triggered = true;
        handleScrollDown();
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
  }, [scrolledAway, handleScrollDown]);

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
      className={`logo-intro-section ${scrolledAway ? 'logo-intro-exit' : ''}`}
    >
      <canvas ref={bgCanvasRef} className="logo-intro-bg-canvas" />

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
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`logo-intro-scroll-indicator ${animationDone ? 'logo-intro-scroll-visible' : ''}`}
        onClick={handleScrollDown}
      >
        <span className="logo-intro-scroll-text">Scroll to explore</span>
        <div className="logo-intro-scroll-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
        <div className="logo-intro-scroll-mouse">
          <div className="logo-intro-scroll-mouse-body">
            <div className="logo-intro-scroll-mouse-wheel" />
          </div>
        </div>
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
          background: #000000;
          z-index: 100;
          transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), transform 0.85s cubic-bezier(0.16, 1, 0.3, 1), filter 0.85s ease;
        }
        .logo-intro-exit {
          opacity: 0;
          transform: scale(1.06) translateY(-20px);
          filter: blur(8px);
          pointer-events: none;
        }
        .logo-intro-bg-canvas {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          z-index: 0;
        }
        .logo-intro-stage {
          position: relative;
          z-index: 1;
          perspective: 1200px;
        }
        .logo-intro-3d {
          transform-style: preserve-3d;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
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
          color: #fff;
          font-family: var(--font-inter), 'Inter', 'Segoe UI', sans-serif;
        }
        .logo-intro-front {
          position: relative;
          z-index: 3;
          color: #fff;
        }
        .logo-intro-depth {
          position: absolute;
          top: 0; left: 0;
          z-index: 1;
        }
        .logo-intro-depth-1 { transform: translateZ(-3px); color: rgba(255,255,255,0.5); }
        .logo-intro-depth-2 { transform: translateZ(-6px); color: rgba(255,255,255,0.35); }
        .logo-intro-depth-3 { transform: translateZ(-9px); color: rgba(255,255,255,0.22); }
        .logo-intro-depth-4 { transform: translateZ(-12px); color: rgba(255,255,255,0.12); }
        .logo-intro-depth-5 { transform: translateZ(-15px); color: rgba(200,220,240,0.08); }
        .logo-intro-depth-6 { transform: translateZ(-18px); color: rgba(180,210,240,0.05); }
        .logo-intro-glow {
          position: absolute;
          top: 50%; left: 50%;
          width: 70px; height: 70px;
          transform: translate(-50%, -50%) translateZ(-5px);
          background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%);
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

        /* Scroll indicator */
        .logo-intro-scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          opacity: 0;
          transition: opacity 1s ease;
          z-index: 10;
        }
        .logo-intro-scroll-visible {
          opacity: 1;
        }
        .logo-intro-scroll-text {
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 12px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
        }
        .logo-intro-scroll-arrow {
          color: rgba(0, 210, 230, 0.6);
          animation: scrollBounce 2s ease-in-out infinite;
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        .logo-intro-scroll-mouse {
          margin-top: 4px;
        }
        .logo-intro-scroll-mouse-body {
          width: 22px;
          height: 36px;
          border: 1.5px solid rgba(255,255,255,0.25);
          border-radius: 11px;
          display: flex;
          justify-content: center;
          padding-top: 8px;
        }
        .logo-intro-scroll-mouse-wheel {
          width: 3px;
          height: 8px;
          border-radius: 2px;
          background: rgba(0, 210, 230, 0.7);
          animation: mouseScroll 2s ease-in-out infinite;
        }
        @keyframes mouseScroll {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(6px); opacity: 0.3; }
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
