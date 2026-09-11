'use client';

import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// ============================================================================
// 1. DEEP COSMIC NEBULA GLSL SHADER PLANE (Volumetric Galactic Gas Clouds)
// ============================================================================
const CosmicNebulaPlane: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  const shaderArgs = useMemo(() => {
    return {
      uniforms: {
        uTime: { value: 0 },
        uScroll: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform float uScroll;
        uniform vec2 uMouse;
        varying vec2 vUv;

        // 2D Simplex / Perlin noise helpers
        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

        float snoise(vec2 v) {
          const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                             -0.577350269189626, 0.024390243902439);
          vec2 i  = floor(v + dot(v, C.yy) );
          vec2 x0 = v -   i + dot(i, C.xx);
          vec2 i1;
          i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
          vec4 x12 = x0.xyxy + C.xxzz;
          x12.xy -= i1;
          i = mod289(i);
          vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
                + i.x + vec3(0.0, i1.x, 1.0 ));
          vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
          m = m*m ;
          m = m*m ;
          vec3 x = 2.0 * fract(p * C.www) - 1.0;
          vec3 h = abs(x) - 0.5;
          vec3 ox = floor(x + 0.5);
          vec3 a0 = x - ox;
          m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
          vec3 g;
          g.x  = a0.x  * x0.x  + h.x  * x0.y;
          g.yz = a0.yz * x12.xz + h.yz * x12.yw;
          return 130.0 * dot(m, g);
        }

        // Fractional Brownian Motion for multi-layered cosmic gas
        float fbm(vec2 st) {
          float value = 0.0;
          float amplitude = 0.5;
          float frequency = 1.0;
          for (int i = 0; i < 4; i++) {
            value += amplitude * abs(snoise(st * frequency));
            st += vec2(1.2, 2.3);
            frequency *= 2.05;
            amplitude *= 0.48;
          }
          return value;
        }

        void main() {
          vec2 uv = vUv * 2.2 - vec2(1.1);
          uv.x += uMouse.x * 0.08;
          uv.y -= uScroll * 0.25;

          float t = uTime * 0.035;

          // Flowing nebula distortion vectors
          vec2 q = vec2(fbm(uv + vec2(0.0, t * 0.5)), fbm(uv + vec2(5.2, 1.3 - t * 0.4)));
          vec2 r = vec2(fbm(uv + 3.0 * q + vec2(1.7, 9.2 + t * 0.3)), fbm(uv + 3.0 * q + vec2(8.3, 2.8 - t * 0.2)));
          float f = fbm(uv + 2.5 * r);

          // Deep cosmic color grading: Deep Obsidian, Stellar Cyan/Teal, Cosmic Indigo & Soft Violet
          vec3 colDarkNavy = vec3(0.005, 0.015, 0.035);
          vec3 colDeepIndigo = vec3(0.04, 0.03, 0.12);
          vec3 colStellarCyan = vec3(0.0, 0.45, 0.65);
          vec3 colGalacticTeal = vec3(0.01, 0.25, 0.35);
          vec3 colCosmicPurple = vec3(0.18, 0.04, 0.28);

          vec3 color = mix(colDarkNavy, colDeepIndigo, clamp(f * 1.6, 0.0, 1.0));
          color = mix(color, colGalacticTeal, clamp(length(q) * 0.6, 0.0, 1.0));
          color = mix(color, colStellarCyan, clamp(pow(r.x, 2.0) * 0.7, 0.0, 1.0));
          color = mix(color, colCosmicPurple, clamp(pow(r.y, 2.5) * 0.55, 0.0, 1.0));

          // Soft cosmic dust intensity
          float alpha = smoothstep(0.15, 0.85, f) * 0.38;

          // Vignette around screen edges
          float d = length(vUv - vec2(0.5));
          alpha *= smoothstep(0.95, 0.2, d);

          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    };
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      const mat = meshRef.current.material as THREE.ShaderMaterial;
      if (mat?.uniforms) {
        mat.uniforms.uTime.value = state.clock.getElapsedTime();
      }
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -50]}>
      <planeGeometry args={[180, 120]} />
      <shaderMaterial attach="material" args={[shaderArgs]} />
    </mesh>
  );
};

// ============================================================================
// 2. MULTI-COLORED DISTANT STARFIELD (Tiny Pinprick Twinkling Stars)
// ============================================================================
const DistantStarfield: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = isMobile ? 1800 : 3800;

  const { positions, colors, sizes, twinkleData } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    const tw = new Float32Array(count * 2);

    // Color palettes for stars: Pure White, Stellar Cyan, Ice Blue, Soft Gold/Amber
    const starColorTypes = [
      new THREE.Color(1.0, 1.0, 1.0),      // Pure white (60%)
      new THREE.Color(1.0, 1.0, 1.0),
      new THREE.Color(1.0, 1.0, 1.0),
      new THREE.Color(0.4, 0.85, 1.0),     // Stellar Cyan (20%)
      new THREE.Color(0.7, 0.9, 1.0),      // Ice Blue (10%)
      new THREE.Color(1.0, 0.85, 0.6),     // Warm Amber (10%)
    ];

    for (let i = 0; i < count; i++) {
      const radius = 35 + Math.random() * 110;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = (Math.random() - 0.5) * 160;
      pos[i * 3 + 2] = -30 - Math.random() * 90;

      // Color selection
      const c = starColorTypes[Math.floor(Math.random() * starColorTypes.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;

      // Varied star size
      sz[i] = 0.9 + Math.random() * 1.1;

      // Twinkle properties
      tw[i * 2] = 0.8 + Math.random() * 2.5; // speed
      tw[i * 2 + 1] = Math.random() * Math.PI * 2; // phase
    }

    return { positions: pos, colors: col, sizes: sz, twinkleData: tw };
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
        attribute vec3 aColor;
        attribute float aSize;
        attribute vec2 aTwinkle;
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          vColor = aColor;
          float speed = aTwinkle.x;
          float phase = aTwinkle.y;
          float twinkle = sin(uTime * speed + phase) * 0.4 + 0.6;
          vAlpha = twinkle * 0.9;

          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = (aSize * (270.0 / -mvPosition.z)) * uPixelRatio * (0.8 + 0.3 * twinkle);
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          vec2 coord = gl_PointCoord - vec2(0.5);
          float dist = length(coord);
          if (dist > 0.5) discard;

          // Smooth spherical star disc with luminous core and soft glow falloff
          float core = smoothstep(0.5, 0.05, dist);
          float glow = exp(-dist * 4.5) * 0.5;
          float intensity = core + glow;

          gl_FragColor = vec4(vColor, intensity * vAlpha);
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
      pointsRef.current.rotation.x = Math.sin(t * 0.002) * 0.005;
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
        <bufferAttribute attach="attributes-aColor" args={[colors, 3]} />
        <bufferAttribute attach="attributes-aSize" args={[sizes, 1]} />
        <bufferAttribute attach="attributes-aTwinkle" args={[twinkleData, 2]} />
      </bufferGeometry>
      <shaderMaterial attach="material" args={[shaderArgs]} />
    </points>
  );
};

// ============================================================================
// 3. CONSTELLATION NODES & GLOWING MAJOR STARS (Diffraction Spikes & Lines)
// ============================================================================
const ConstellationMesh: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const count = isMobile ? 35 : 75;

  const { starPositions, starSizes, linePositions } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    const starList: THREE.Vector3[] = [];

    for (let i = 0; i < count; i++) {
      const v = new THREE.Vector3(
        (Math.random() - 0.5) * 110,
        (Math.random() - 0.5) * 85,
        -15 - Math.random() * 45
      );
      starList.push(v);
      pos[i * 3] = v.x;
      pos[i * 3 + 1] = v.y;
      pos[i * 3 + 2] = v.z;

      sz[i] = 2.2 + Math.random() * 1.6;
    }

    // Connect close stars with constellation lines
    const lineCoords: number[] = [];
    const maxDist = isMobile ? 18 : 24;

    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const d = starList[i].distanceTo(starList[j]);
        if (d < maxDist) {
          lineCoords.push(starList[i].x, starList[i].y, starList[i].z);
          lineCoords.push(starList[j].x, starList[j].y, starList[j].z);
        }
      }
    }

    return {
      starPositions: pos,
      starSizes: sz,
      linePositions: new Float32Array(lineCoords),
    };
  }, [count, isMobile]);

  const starShader = useMemo(() => {
    return {
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1 },
      },
      vertexShader: `
        uniform float uTime;
        uniform float uPixelRatio;
        attribute float aSize;
        varying float vPulse;

        void main() {
          float pulse = sin(uTime * 1.5 + position.x * 0.1) * 0.25 + 0.75;
          vPulse = pulse;

          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = (aSize * (320.0 / -mvPosition.z)) * uPixelRatio * pulse;
        }
      `,
      fragmentShader: `
        varying float vPulse;

        void main() {
          vec2 coord = gl_PointCoord - vec2(0.5);
          float dist = length(coord);
          if (dist > 0.5) discard;

          // Cross diffraction spike glow
          float crossGlow = 0.0;
          if (abs(coord.x) < 0.06 || abs(coord.y) < 0.06) {
            crossGlow = exp(-dist * 3.5) * 0.6;
          }

          float core = smoothstep(0.5, 0.02, dist);
          float halo = exp(-dist * 4.0) * 0.7;
          float intensity = core + halo + crossGlow;

          // Luminous cyan-white star core
          vec3 col = mix(vec3(0.4, 0.9, 1.0), vec3(1.0, 1.0, 1.0), core);
          gl_FragColor = vec4(col, intensity * vPulse * 0.95);
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
      pointsRef.current.rotation.y = t * 0.005;
      const mat = pointsRef.current.material as THREE.ShaderMaterial;
      if (mat?.uniforms?.uTime) mat.uniforms.uTime.value = t;
    }
    if (linesRef.current) {
      linesRef.current.rotation.y = t * 0.005;
    }
  });

  return (
    <group>
      {/* Prominent Constellation Stars */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[starPositions, 3]} />
          <bufferAttribute attach="attributes-aSize" args={[starSizes, 1]} />
        </bufferGeometry>
        <shaderMaterial attach="material" args={[starShader]} />
      </points>

      {/* Subtle Constellation Lines */}
      {linePositions.length > 0 && (
        <lineSegments ref={linesRef}>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
          </bufferGeometry>
          <lineBasicMaterial
            color="#00e5ff"
            transparent
            opacity={0.12}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </lineSegments>
      )}
    </group>
  );
};

// ============================================================================
// 4. ANIMATED SHOOTING STARS / METEORS (Dynamic Streaking Comets)
// ============================================================================
interface Meteor {
  head: THREE.Vector3;
  dir: THREE.Vector3;
  length: number;
  speed: number;
  life: number;
  maxLife: number;
  active: boolean;
  color: THREE.Color;
}

const MeteorsSystem: React.FC = () => {
  const lineMeshRef = useRef<THREE.LineSegments>(null);
  const meteorCount = 5;

  const meteors = useRef<Meteor[]>([]);

  useEffect(() => {
    meteors.current = Array.from({ length: meteorCount }, () => ({
      head: new THREE.Vector3(),
      dir: new THREE.Vector3(-1.2, -0.6, -0.4).normalize(),
      length: 12 + Math.random() * 16,
      speed: 40 + Math.random() * 30,
      life: 0,
      maxLife: 1.2 + Math.random() * 1.5,
      active: false,
      color: new THREE.Color(0.2 + Math.random() * 0.4, 0.9, 1.0),
    }));
  }, []);

  const { linePositions, lineColors } = useMemo(() => {
    const pos = new Float32Array(meteorCount * 2 * 3);
    const col = new Float32Array(meteorCount * 2 * 3);
    return { linePositions: pos, lineColors: col };
  }, []);

  useFrame((_, delta) => {
    if (!lineMeshRef.current) return;
    const geo = lineMeshRef.current.geometry;
    const posAttr = geo.attributes.position as THREE.BufferAttribute;
    const colAttr = geo.attributes.color as THREE.BufferAttribute;

    meteors.current.forEach((m, idx) => {
      if (!m.active) {
        // Randomly spawn meteor
        if (Math.random() < 0.008) {
          m.active = true;
          m.life = 0;
          m.head.set(
            20 + (Math.random() - 0.5) * 60,
            25 + Math.random() * 25,
            -15 - Math.random() * 30
          );
          m.dir.set(-1.0 - Math.random() * 0.8, -0.5 - Math.random() * 0.5, (Math.random() - 0.5) * 0.3).normalize();
          m.length = 14 + Math.random() * 18;
          m.speed = 45 + Math.random() * 35;
        }
      }

      const pIdx = idx * 6;

      if (m.active) {
        m.life += delta;
        m.head.addScaledVector(m.dir, m.speed * delta);

        const tail = m.head.clone().sub(m.dir.clone().multiplyScalar(m.length));

        // Fade in and out
        const progress = m.life / m.maxLife;
        let alpha = 1.0;
        if (progress < 0.2) alpha = progress / 0.2;
        else if (progress > 0.8) alpha = (1.0 - progress) / 0.2;
        alpha = Math.max(0, Math.min(1, alpha));

        // Set line segment (Head to Tail)
        posAttr.setXYZ(idx * 2, m.head.x, m.head.y, m.head.z);
        posAttr.setXYZ(idx * 2 + 1, tail.x, tail.y, tail.z);

        // Head bright cyan/white, Tail fading
        colAttr.setXYZ(idx * 2, 1.0 * alpha, 1.0 * alpha, 1.0 * alpha);
        colAttr.setXYZ(idx * 2 + 1, m.color.r * alpha * 0.1, m.color.g * alpha * 0.1, m.color.b * alpha * 0.1);

        if (m.life >= m.maxLife) {
          m.active = false;
        }
      } else {
        // Collapsed invisible point
        posAttr.setXYZ(idx * 2, 0, 0, 0);
        posAttr.setXYZ(idx * 2 + 1, 0, 0, 0);
        colAttr.setXYZ(idx * 2, 0, 0, 0);
        colAttr.setXYZ(idx * 2 + 1, 0, 0, 0);
      }
    });

    posAttr.needsUpdate = true;
    colAttr.needsUpdate = true;
  });

  return (
    <lineSegments ref={lineMeshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        <bufferAttribute attach="attributes-color" args={[lineColors, 3]} />
      </bufferGeometry>
      <lineBasicMaterial
        vertexColors
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        linewidth={2}
      />
    </lineSegments>
  );
};

// ============================================================================
// 5. FOREGROUND FLOATING STARDUST (Ambient Glowing Micro-Particles)
// ============================================================================
const FloatingStardust: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = isMobile ? 120 : 320;

  const { positions, sizes, twinkleData } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    const tw = new Float32Array(count * 2);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 90;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 2] = -5 - Math.random() * 35;

      sz[i] = 1.3 + Math.random() * 1.2;
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
          vAlpha = twinkle;

          // Gentle ambient float
          vec3 p = position;
          p.y += sin(uTime * 0.4 + position.x * 0.05) * 0.8;
          p.x += cos(uTime * 0.3 + position.y * 0.05) * 0.5;

          vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = (aSize * (290.0 / -mvPosition.z)) * uPixelRatio * (0.85 + 0.25 * twinkle);
        }
      `,
      fragmentShader: `
        varying float vAlpha;

        void main() {
          vec2 coord = gl_PointCoord - vec2(0.5);
          float dist = length(coord);
          if (dist > 0.5) discard;

          float core = smoothstep(0.5, 0.04, dist);
          float glow = exp(-dist * 4.2) * 0.6;
          float intensity = core + glow;

          // Glowing cyan-emerald stardust
          vec3 col = mix(vec3(0.0, 0.9, 1.0), vec3(1.0, 1.0, 1.0), core);
          gl_FragColor = vec4(col, intensity * vAlpha * 0.85);
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
      pointsRef.current.rotation.y = t * 0.007;
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
// 6. INTERACTIVE MOUSE & SCROLL PARALLAX CAMERA RIG
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
    const targetMouseX = (state.pointer.x * Math.PI) / 14;
    const targetMouseY = (-state.pointer.y * Math.PI) / 16;

    // Scroll vertical progression parallax
    const scrollOffset = scrollRef.current * 7.0;

    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      targetMouseX,
      2.5,
      delta
    );
    groupRef.current.rotation.x = THREE.MathUtils.damp(
      groupRef.current.rotation.x,
      targetMouseY + scrollRef.current * 0.12,
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
// 7. MASTER GLOBAL 3D SPACE BACKGROUND EXPORT
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
      {/* Deep Obsidian Cosmos Base */}
      <div className="absolute inset-0 bg-[#000000]" />

      {/* Subtle Radial Celestial Ambient Backdrop */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(6, 182, 212, 0.12) 0%, rgba(15, 23, 42, 0.08) 50%, transparent 80%)',
        }}
      />

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
          {/* 1. Volumetric Deep Space Cosmic Nebulae */}
          <CosmicNebulaPlane />

          {/* 2. Multi-Color Twinkling Distant Starfield */}
          <DistantStarfield isMobile={isMobile} />

          {/* 3. Constellation Nodes & Glowing Major Stars */}
          <ConstellationMesh isMobile={isMobile} />

          {/* 4. Dynamic Comets & Shooting Stars */}
          <MeteorsSystem />

          {/* 5. Floating Glowing Stardust */}
          <FloatingStardust isMobile={isMobile} />
        </SpaceParallaxRig>
      </Canvas>
    </div>
  );
};

export default GlobalSpaceBackground;
