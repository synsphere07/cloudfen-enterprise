'use client';

import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// ============================================================================
// 1. DISTANT SMALL WHITE STARS (Tiny Pinprick Starfield)
// ============================================================================
const FarSmallStars: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = isMobile ? 1800 : 3600;

  const { positions, sizes, twinkleData } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    const tw = new Float32Array(count * 2);

    for (let i = 0; i < count; i++) {
      const radius = 30 + Math.random() * 110;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = (Math.random() - 0.5) * 160;
      pos[i * 3 + 2] = -50 - Math.random() * 100;

      // Small pinprick star sizes
      sz[i] = 0.8 + Math.random() * 0.8;

      // Twinkle speed & phase
      tw[i * 2] = 0.6 + Math.random() * 1.8;
      tw[i * 2 + 1] = Math.random() * Math.PI * 2;
    }

    return { positions: pos, sizes: sz, twinkleData: tw };
  }, [count]);

  const shaderArgs = useMemo(() => {
    return {
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1 },
      },
      vertexShader: `
        uniform float uTime;
        uniform float uPixelRatio;
        attribute float aSize;
        attribute vec2 aTwinkle;
        varying float vAlpha;

        void main() {
          float speed = aTwinkle.x;
          float phase = aTwinkle.y;
          float twinkle = sin(uTime * speed + phase) * 0.35 + 0.65;
          vAlpha = twinkle * 0.85;

          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = (aSize * (260.0 / -mvPosition.z)) * uPixelRatio;
        }
      `,
      fragmentShader: `
        varying float vAlpha;

        void main() {
          vec2 coord = gl_PointCoord - vec2(0.5);
          float dist = length(coord);
          if (dist > 0.5) discard;

          // Pure white circular glowing star point (no square/cube artifacts)
          float intensity = smoothstep(0.5, 0.05, dist);
          gl_FragColor = vec4(1.0, 1.0, 1.0, intensity * vAlpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    };
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.003;
      const mat = pointsRef.current.material as THREE.ShaderMaterial;
      if (mat?.uniforms?.uTime) {
        mat.uniforms.uTime.value = t;
      }
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aSize" args={[sizes, 1]} />
        <bufferAttribute attach="attributes-aTwinkle" args={[twinkleData, 2]} />
      </bufferGeometry>
      <shaderMaterial attach="material" args={[shaderArgs]} />
    </points>
  );
};

// ============================================================================
// 2. MID-DEPTH SMALL WHITE STARS (Crisp Twinkling Celestial Stars)
// ============================================================================
const MidSmallStars: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = isMobile ? 700 : 1600;

  const { positions, sizes, twinkleData } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    const tw = new Float32Array(count * 2);

    for (let i = 0; i < count; i++) {
      const radius = 15 + Math.random() * 80;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = (Math.random() - 0.5) * 130;
      pos[i * 3 + 2] = -20 - Math.random() * 60;

      // Small star sizes
      sz[i] = 1.1 + Math.random() * 1.1;
      tw[i * 2] = 1.0 + Math.random() * 2.8;
      tw[i * 2 + 1] = Math.random() * Math.PI * 2;
    }

    return { positions: pos, sizes: sz, twinkleData: tw };
  }, [count]);

  const shaderArgs = useMemo(() => {
    return {
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1 },
      },
      vertexShader: `
        uniform float uTime;
        uniform float uPixelRatio;
        attribute float aSize;
        attribute vec2 aTwinkle;
        varying float vAlpha;

        void main() {
          float speed = aTwinkle.x;
          float phase = aTwinkle.y;
          float twinkle = sin(uTime * speed + phase) * 0.4 + 0.6;
          vAlpha = twinkle;

          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = (aSize * (280.0 / -mvPosition.z)) * uPixelRatio * (0.85 + 0.3 * twinkle);
        }
      `,
      fragmentShader: `
        varying float vAlpha;

        void main() {
          vec2 coord = gl_PointCoord - vec2(0.5);
          float dist = length(coord);
          if (dist > 0.5) discard;

          // Pure white star with soft core and gentle outer glow
          float core = smoothstep(0.5, 0.05, dist);
          float glow = exp(-dist * 5.0) * 0.5;
          float intensity = core + glow;

          gl_FragColor = vec4(1.0, 1.0, 1.0, intensity * vAlpha * 0.95);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    };
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.006;
      pointsRef.current.rotation.x = Math.sin(t * 0.003) * 0.01;
      const mat = pointsRef.current.material as THREE.ShaderMaterial;
      if (mat?.uniforms?.uTime) {
        mat.uniforms.uTime.value = t;
      }
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aSize" args={[sizes, 1]} />
        <bufferAttribute attach="attributes-aTwinkle" args={[twinkleData, 2]} />
      </bufferGeometry>
      <shaderMaterial attach="material" args={[shaderArgs]} />
    </points>
  );
};

// ============================================================================
// 3. NEAR SMALL WHITE STARS (Subtle Foreground White Stars)
// ============================================================================
const NearSmallStars: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = isMobile ? 120 : 320;

  const { positions, sizes, twinkleData } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    const tw = new Float32Array(count * 2);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 70;
      pos[i * 3 + 2] = -5 - Math.random() * 30;

      // Small white star size
      sz[i] = 1.4 + Math.random() * 1.0;
      tw[i * 2] = 0.8 + Math.random() * 2.0;
      tw[i * 2 + 1] = Math.random() * Math.PI * 2;
    }

    return { positions: pos, sizes: sz, twinkleData: tw };
  }, [count]);

  const shaderArgs = useMemo(() => {
    return {
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1 },
      },
      vertexShader: `
        uniform float uTime;
        uniform float uPixelRatio;
        attribute float aSize;
        attribute vec2 aTwinkle;
        varying float vAlpha;

        void main() {
          float speed = aTwinkle.x;
          float phase = aTwinkle.y;
          float twinkle = sin(uTime * speed + phase) * 0.35 + 0.65;
          vAlpha = twinkle;

          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = (aSize * (300.0 / -mvPosition.z)) * uPixelRatio * (0.9 + 0.2 * twinkle);
        }
      `,
      fragmentShader: `
        varying float vAlpha;

        void main() {
          vec2 coord = gl_PointCoord - vec2(0.5);
          float dist = length(coord);
          if (dist > 0.5) discard;

          float core = smoothstep(0.5, 0.04, dist);
          float glow = exp(-dist * 4.5) * 0.6;
          float intensity = core + glow;

          gl_FragColor = vec4(1.0, 1.0, 1.0, min(1.0, intensity * vAlpha * 0.9));
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    };
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.008;
      const mat = pointsRef.current.material as THREE.ShaderMaterial;
      if (mat?.uniforms?.uTime) {
        mat.uniforms.uTime.value = t;
      }
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aSize" args={[sizes, 1]} />
        <bufferAttribute attach="attributes-aTwinkle" args={[twinkleData, 2]} />
      </bufferGeometry>
      <shaderMaterial attach="material" args={[shaderArgs]} />
    </points>
  );
};

// ============================================================================
// 4. INTERACTIVE MOUSE & SCROLL PARALLAX CAMERA RIG
// ============================================================================
const SpaceParallaxRig: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const groupRef = useRef<THREE.Group>(null);
  const scrollRef = useRef<number>(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReducedMotion(mediaQuery.matches);

      const handleMotionChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
      mediaQuery.addEventListener('change', handleMotionChange);

      let ticking = false;
      const handleScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const scrollY = window.scrollY || window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            scrollRef.current = docHeight > 0 ? scrollY / docHeight : 0;
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        mediaQuery.removeEventListener('change', handleMotionChange);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    if (reducedMotion) {
      groupRef.current.rotation.set(0, 0, 0);
      groupRef.current.position.set(0, 0, 0);
      return;
    }

    // Smooth responsive mouse parallax
    const targetMouseX = (state.pointer.x * Math.PI) / 10;
    const targetMouseY = (-state.pointer.y * Math.PI) / 12;

    // Scroll vertical progression parallax
    const scrollOffset = scrollRef.current * 6.0;

    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      targetMouseX,
      2.5,
      delta
    );
    groupRef.current.rotation.x = THREE.MathUtils.damp(
      groupRef.current.rotation.x,
      targetMouseY + (scrollRef.current * 0.1),
      2.5,
      delta
    );

    groupRef.current.position.y = THREE.MathUtils.damp(
      groupRef.current.position.y,
      scrollOffset,
      2.0,
      delta
    );
  });

  return <group ref={groupRef}>{children}</group>;
};

// ============================================================================
// 5. MASTER GLOBAL 3D SPACE BACKGROUND EXPORT (Pure Black + White Small Stars Only)
// ============================================================================
export const GlobalSpaceBackground: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-black select-none"
    >
      {/* Deep Obsidian Pure Black Cosmic Base */}
      <div className="absolute inset-0 bg-[#000000]" />

      {/* 3D WebGL Three.js Scene */}
      <Canvas
        camera={{ position: [0, 0, 32], fov: 60 }}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: false,
        }}
        dpr={[1, 1.5]}
        performance={{ min: 0.8 }}
      >
        <SpaceParallaxRig>
          {/* Small Pure White Stars in Multi-Layer Depth */}
          <FarSmallStars isMobile={isMobile} />
          <MidSmallStars isMobile={isMobile} />
          <NearSmallStars isMobile={isMobile} />
        </SpaceParallaxRig>
      </Canvas>
    </div>
  );
};

export default GlobalSpaceBackground;
