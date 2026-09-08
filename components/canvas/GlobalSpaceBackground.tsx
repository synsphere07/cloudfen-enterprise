'use client';

import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// ============================================================================
// 1. FLOATING 3D SMOKED GLASS CUBE WITH GLOWING AMBER EDGES
// ============================================================================
interface GlowingCubeProps {
  position: [number, number, number];
  size: number;
  rotSpeed?: [number, number, number];
  floatSpeed?: number;
  floatAmplitude?: number;
  floatOffset?: number;
  edgeColor?: string;
  glowIntensity?: number;
}

const GlowingCube: React.FC<GlowingCubeProps> = ({
  position,
  size,
  rotSpeed = [0.004, 0.007, 0.003],
  floatSpeed = 1.0,
  floatAmplitude = 0.25,
  floatOffset = 0,
  edgeColor = '#f59e0b',
  glowIntensity = 2.5,
}) => {
  const meshRef = useRef<THREE.Group>(null);
  const initialY = position[1];

  const { boxGeo, edgesGeo } = useMemo(() => {
    const bGeo = new THREE.BoxGeometry(size, size, size);
    const eGeo = new THREE.EdgesGeometry(bGeo);
    return { boxGeo: bGeo, edgesGeo: eGeo };
  }, [size]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();

    // Multi-axis smooth rotation
    meshRef.current.rotation.x += rotSpeed[0];
    meshRef.current.rotation.y += rotSpeed[1];
    meshRef.current.rotation.z += rotSpeed[2];

    // Floating levitation
    meshRef.current.position.y = initialY + Math.sin(t * floatSpeed + floatOffset) * floatAmplitude;
  });

  return (
    <group ref={meshRef} position={position}>
      {/* Dark Smoked Metallic Glass Body */}
      <mesh geometry={boxGeo}>
        <meshPhysicalMaterial
          color="#121110"
          roughness={0.15}
          metalness={0.9}
          transmission={0.4}
          thickness={0.8}
          transparent={true}
          opacity={0.92}
          reflectivity={0.9}
          clearcoat={0.8}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Sharp Glowing Amber Edges */}
      <lineSegments geometry={edgesGeo}>
        <lineBasicMaterial
          color={edgeColor}
          linewidth={2}
          transparent={true}
          opacity={0.95}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* Secondary Inner Edge Glow */}
      <lineSegments geometry={edgesGeo} scale={[1.008, 1.008, 1.008]}>
        <lineBasicMaterial
          color="#fbbf24"
          transparent={true}
          opacity={0.6 * glowIntensity}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
};

// ============================================================================
// 2. SCATTERED AMBIENT FLOATING CUBES (Depth Field)
// ============================================================================
const AmbientFloatingCubes: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
  const cubesData = useMemo(() => {
    const list: Array<{
      pos: [number, number, number];
      size: number;
      rotSpeed: [number, number, number];
      floatSpeed: number;
      floatAmp: number;
      offset: number;
    }> = [];

    // Prominent Hero Left Cube (visible on the left side of hero, matching reference)
    list.push({
      pos: [-10.5, 2.2, -2],
      size: 2.8,
      rotSpeed: [0.005, 0.008, 0.003],
      floatSpeed: 0.9,
      floatAmp: 0.3,
      offset: 0,
    });

    // Secondary mid-left cubes
    list.push({
      pos: [-14.5, 5.5, -8],
      size: 1.8,
      rotSpeed: [0.006, -0.007, 0.004],
      floatSpeed: 0.7,
      floatAmp: 0.25,
      offset: 1.2,
    });

    list.push({
      pos: [-7.0, 6.0, -12],
      size: 1.4,
      rotSpeed: [-0.004, 0.006, -0.003],
      floatSpeed: 1.1,
      floatAmp: 0.2,
      offset: 2.5,
    });

    list.push({
      pos: [-12.0, -2.5, -6],
      size: 1.6,
      rotSpeed: [0.007, 0.005, -0.004],
      floatSpeed: 0.8,
      floatAmp: 0.22,
      offset: 3.8,
    });

    // Background and right-depth cubes (smaller, non-interfering)
    const count = isMobile ? 4 : 10;
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 36;
      const y = -4 + Math.random() * 12;
      const z = -10 - Math.random() * 20;
      const s = 0.6 + Math.random() * 1.0;

      list.push({
        pos: [x, y, z],
        size: s,
        rotSpeed: [
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.012,
          (Math.random() - 0.5) * 0.008,
        ],
        floatSpeed: 0.6 + Math.random() * 0.8,
        floatAmp: 0.15 + Math.random() * 0.2,
        offset: Math.random() * Math.PI * 2,
      });
    }

    return list;
  }, [isMobile]);

  return (
    <group>
      {cubesData.map((cube, idx) => (
        <GlowingCube
          key={idx}
          position={cube.pos}
          size={cube.size}
          rotSpeed={cube.rotSpeed}
          floatSpeed={cube.floatSpeed}
          floatAmplitude={cube.floatAmp}
          floatOffset={cube.offset}
        />
      ))}
    </group>
  );
};

// ============================================================================
// 3. MAIN 3D FLOATING CLOUD HOLOGRAPHIC OBJECT (Hero Right Side)
// ============================================================================
const FloatingCloudObject: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
  const cloudGroupRef = useRef<THREE.Group>(null);
  const nodesRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  // Cloud position: Right side of screen, slightly elevated
  const basePosition: [number, number, number] = isMobile ? [3.5, 3.0, -6] : [9.8, 3.2, -3.5];
  const cloudScale = isMobile ? 0.75 : 1.15;

  // 1. Constellation / Digital Network inside Cloud
  const { nodePositions, nodeColors, linePositions, lineIndices } = useMemo(() => {
    const numNodes = isMobile ? 32 : 55;
    const positions: number[] = [];
    const colors: number[] = [];

    // Helper: generate nodes inside cloud bounding lobes
    const lobes = [
      { center: [0, 0, 0], r: 2.2 },
      { center: [-1.7, -0.4, 0.2], r: 1.6 },
      { center: [1.8, -0.3, 0.1], r: 1.7 },
      { center: [-0.4, 1.3, -0.1], r: 1.6 },
      { center: [1.1, 1.1, 0.2], r: 1.3 },
      { center: [0, -0.9, 0], r: 1.5 },
    ];

    for (let i = 0; i < numNodes; i++) {
      const lobe = lobes[Math.floor(Math.random() * lobes.length)];
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * (lobe.r * 0.75);

      const sinPhi = Math.sin(phi);
      const x = lobe.center[0] + r * sinPhi * Math.cos(theta);
      const y = lobe.center[1] + r * sinPhi * Math.sin(theta);
      const z = lobe.center[2] + r * Math.cos(phi) * 0.65; // flatten slightly in z

      positions.push(x, y, z);

      // Gold to warm amber colors
      const isWarm = Math.random() > 0.3;
      if (isWarm) {
        colors.push(0.98, 0.75, 0.2); // amber gold
      } else {
        colors.push(1.0, 0.95, 0.7); // bright warm white
      }
    }

    // Connect close nodes with lines
    const linePairs: number[] = [];
    for (let i = 0; i < numNodes; i++) {
      for (let j = i + 1; j < numNodes; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < 1.7) {
          linePairs.push(
            positions[i * 3],
            positions[i * 3 + 1],
            positions[i * 3 + 2],
            positions[j * 3],
            positions[j * 3 + 1],
            positions[j * 3 + 2]
          );
        }
      }
    }

    return {
      nodePositions: new Float32Array(positions),
      nodeColors: new Float32Array(colors),
      linePositions: new Float32Array(linePairs),
      lineIndices: null,
    };
  }, [isMobile]);

  // 2. Custom Outer Fresnel Glow & Smoked Glass Materials for Cloud Lobes
  const cloudLobeGeometries = useMemo(() => {
    return [
      { geo: new THREE.SphereGeometry(2.3, 32, 24), pos: [0, 0, 0] as [number, number, number], scale: [1.1, 0.9, 0.75] as [number, number, number] },
      { geo: new THREE.SphereGeometry(1.65, 28, 20), pos: [-1.75, -0.35, 0.15] as [number, number, number], scale: [1.0, 0.9, 0.75] as [number, number, number] },
      { geo: new THREE.SphereGeometry(1.85, 28, 20), pos: [1.85, -0.3, 0.1] as [number, number, number], scale: [1.0, 0.9, 0.75] as [number, number, number] },
      { geo: new THREE.SphereGeometry(1.7, 28, 20), pos: [-0.4, 1.35, -0.1] as [number, number, number], scale: [1.0, 0.95, 0.75] as [number, number, number] },
      { geo: new THREE.SphereGeometry(1.4, 24, 18), pos: [1.2, 1.15, 0.15] as [number, number, number], scale: [1.0, 0.9, 0.75] as [number, number, number] },
      { geo: new THREE.SphereGeometry(1.5, 24, 18), pos: [0, -0.95, 0] as [number, number, number], scale: [1.5, 0.65, 0.75] as [number, number, number] },
    ];
  }, []);

  // 3. Glowing Orbital Rings
  const ringGeometries = useMemo(() => {
    return {
      ring1: new THREE.TorusGeometry(4.2, 0.032, 16, 100),
      ring2: new THREE.TorusGeometry(4.9, 0.024, 16, 100),
      ring3: new THREE.TorusGeometry(4.5, 0.028, 16, 100),
    };
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (cloudGroupRef.current) {
      // Smooth vertical floating bob
      cloudGroupRef.current.position.y = basePosition[1] + Math.sin(t * 0.9) * 0.32;
      // Gentle micro-rotation
      cloudGroupRef.current.rotation.y = Math.sin(t * 0.4) * 0.08;
      cloudGroupRef.current.rotation.x = Math.cos(t * 0.3) * 0.04;
    }

    // Rotate Orbital Rings at differential speeds
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = t * 0.22;
      ring1Ref.current.rotation.x = 0.5 + Math.sin(t * 0.15) * 0.05;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -t * 0.18;
      ring2Ref.current.rotation.y = 0.6 + Math.cos(t * 0.12) * 0.06;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = t * 0.14;
      ring3Ref.current.rotation.x = -0.4 + Math.sin(t * 0.18) * 0.04;
    }

    // Node twinkling pulse
    if (nodesRef.current) {
      const mat = nodesRef.current.material as THREE.PointsMaterial;
      if (mat) {
        mat.size = 0.12 + Math.sin(t * 2.5) * 0.03;
      }
    }
  });

  return (
    <group ref={cloudGroupRef} position={basePosition} scale={cloudScale}>
      {/* Central Warm Point Light casting ambient glow through cloud */}
      <pointLight color="#f59e0b" intensity={4.5} distance={18} decay={2} />
      <pointLight color="#fbbf24" intensity={2.0} distance={8} decay={2} />

      {/* Cloud Outer Glass Shell Lobes */}
      {cloudLobeGeometries.map((lobe, idx) => (
        <group key={idx} position={lobe.pos} scale={lobe.scale}>
          {/* Smoked Semi-Transparent Glass Body */}
          <mesh geometry={lobe.geo}>
            <meshPhysicalMaterial
              color="#1a1816"
              roughness={0.12}
              metalness={0.4}
              transmission={0.65}
              thickness={1.2}
              transparent={true}
              opacity={0.7}
              reflectivity={0.8}
              clearcoat={1.0}
              clearcoatRoughness={0.1}
            />
          </mesh>

          {/* Intense Warm Amber Neon Rim Glow Contour */}
          <mesh geometry={lobe.geo} scale={[1.025, 1.025, 1.025]}>
            <meshStandardMaterial
              color="#fbbf24"
              emissive="#f59e0b"
              emissiveIntensity={2.8}
              wireframe={true}
              transparent={true}
              opacity={0.35}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        </group>
      ))}

      {/* Internal Constellation Network Nodes */}
      <points ref={nodesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[nodePositions, 3]} />
          <bufferAttribute attach="attributes-color" args={[nodeColors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.14}
          vertexColors={true}
          transparent={true}
          opacity={0.95}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Internal Connecting Luminous Lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial
          color="#f59e0b"
          transparent={true}
          opacity={0.45}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>

      {/* Orbital Ring 1 */}
      <mesh ref={ring1Ref} geometry={ringGeometries.ring1} rotation={[0.5, 0.2, 0]}>
        <meshStandardMaterial
          color="#fbbf24"
          emissive="#f59e0b"
          emissiveIntensity={3.2}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Orbital Ring 2 */}
      <mesh ref={ring2Ref} geometry={ringGeometries.ring2} rotation={[-0.4, 0.6, 0.3]}>
        <meshStandardMaterial
          color="#fbbf24"
          emissive="#d97706"
          emissiveIntensity={2.8}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Orbital Ring 3 */}
      <mesh ref={ring3Ref} geometry={ringGeometries.ring3} rotation={[0.3, -0.5, 0.7]}>
        <meshStandardMaterial
          color="#fde68a"
          emissive="#f59e0b"
          emissiveIntensity={2.5}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>
    </group>
  );
};

// ============================================================================
// 4. ARCHITECTURAL HEADQUARTERS INTERIOR (Pillars, Floor, Glass Mullions, Lighting)
// ============================================================================
const ArchitecturalEnvironment: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
  // Floor and Pillar Geometries
  const { floorGeo, pillarGeo, lightStripGeo, ledgeGeo } = useMemo(() => {
    return {
      floorGeo: new THREE.PlaneGeometry(90, 90, 20, 20),
      pillarGeo: new THREE.BoxGeometry(1.6, 24, 1.6),
      lightStripGeo: new THREE.BoxGeometry(0.12, 22, 0.12),
      ledgeGeo: new THREE.BoxGeometry(18, 0.6, 3),
    };
  }, []);

  const pillars = useMemo(() => {
    return [
      { pos: [-18, 4, -22] as [number, number, number] },
      { pos: [-11, 4, -26] as [number, number, number] },
      { pos: [-3, 4, -30] as [number, number, number] },
      { pos: [5, 4, -30] as [number, number, number] },
      { pos: [13, 4, -26] as [number, number, number] },
      { pos: [20, 4, -22] as [number, number, number] },
    ];
  }, []);

  return (
    <group>
      {/* 1. Polished Dark Reflective Architectural Floor */}
      <mesh geometry={floorGeo} position={[0, -5.6, -15]} rotation={[-Math.PI / 2, 0, 0]}>
        <meshStandardMaterial
          color="#100e0d"
          roughness={0.22}
          metalness={0.88}
        />
      </mesh>

      {/* Floor Ambient Specular Warm Accent */}
      <mesh geometry={floorGeo} position={[0, -5.58, -15]} rotation={[-Math.PI / 2, 0, 0]}>
        <meshBasicMaterial
          color="#78350f"
          transparent={true}
          opacity={0.06}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* 2. Vertical Architectural Glass-and-Metal Pillars */}
      {pillars.map((pillar, idx) => (
        <group key={idx} position={pillar.pos}>
          {/* Main Dark Graphite Pillar */}
          <mesh geometry={pillarGeo}>
            <meshStandardMaterial
              color="#171513"
              roughness={0.35}
              metalness={0.8}
            />
          </mesh>

          {/* Embedded Warm Amber Vertical LED Light Strip */}
          <mesh geometry={lightStripGeo} position={[0, 0, 0.85]}>
            <meshBasicMaterial
              color="#fbbf24"
              transparent={true}
              opacity={0.7}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        </group>
      ))}

      {/* 3. Distant Architectural Platforms & Planter Ledges with Warm Accents */}
      <mesh geometry={ledgeGeo} position={[-12, -4.5, -18]}>
        <meshStandardMaterial color="#141210" roughness={0.4} metalness={0.7} />
      </mesh>

      <mesh geometry={ledgeGeo} position={[12, -4.5, -18]}>
        <meshStandardMaterial color="#141210" roughness={0.4} metalness={0.7} />
      </mesh>

      {/* Warm Downlights on Distant Architectural Ledges */}
      <pointLight position={[-12, -3.5, -16]} color="#f59e0b" intensity={1.5} distance={12} />
      <pointLight position={[12, -3.5, -16]} color="#f59e0b" intensity={1.8} distance={14} />
    </group>
  );
};

// ============================================================================
// 5. FLOATING GOLDEN AMBER ATMOSPHERIC LIGHT MOTES (Luminous Dust Particles)
// ============================================================================
const AtmosphericAmberParticles: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = isMobile ? 120 : 280;

  const { positions, sizes, speeds } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    const sp = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 44;
      pos[i * 3 + 1] = -5 + Math.random() * 20;
      pos[i * 3 + 2] = 2 - Math.random() * 32;

      sz[i] = 1.2 + Math.random() * 2.2;
      sp[i] = 0.4 + Math.random() * 0.8;
    }

    return { positions: pos, sizes: sz, speeds: sp };
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
        attribute float aSpeed;
        varying float vAlpha;

        void main() {
          vec3 pos = position;
          pos.y += mod(uTime * aSpeed * 0.4, 20.0) - 5.0;
          pos.x += sin(uTime * 0.5 + position.y) * 0.3;

          float twinkle = sin(uTime * 2.0 + position.x * 3.0) * 0.35 + 0.65;
          vAlpha = twinkle * 0.85;

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = (aSize * (220.0 / -mvPosition.z)) * uPixelRatio;
        }
      `,
      fragmentShader: `
        varying float vAlpha;

        void main() {
          vec2 coord = gl_PointCoord - vec2(0.5);
          float dist = length(coord);
          if (dist > 0.5) discard;

          float intensity = smoothstep(0.5, 0.05, dist);
          // Warm Golden-Amber Luminous Glow
          gl_FragColor = vec4(1.0, 0.82, 0.35, intensity * vAlpha);
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
        <bufferAttribute attach="attributes-aSpeed" args={[speeds, 1]} />
      </bufferGeometry>
      <shaderMaterial attach="material" args={[shaderArgs]} />
    </points>
  );
};

// ============================================================================
// 6. INTERACTIVE MOUSE & SCROLL PARALLAX CAMERA RIG
// ============================================================================
const LuxuryParallaxRig: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

    // Subtle, restrained luxury mouse parallax
    const targetMouseX = (state.pointer.x * Math.PI) / 18;
    const targetMouseY = (-state.pointer.y * Math.PI) / 22;

    // Scroll vertical progression parallax
    const scrollOffset = scrollRef.current * 4.5;

    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      targetMouseX,
      2.0,
      delta
    );
    groupRef.current.rotation.x = THREE.MathUtils.damp(
      groupRef.current.rotation.x,
      targetMouseY + (scrollRef.current * 0.05),
      2.0,
      delta
    );

    groupRef.current.position.y = THREE.MathUtils.damp(
      groupRef.current.position.y,
      scrollOffset,
      1.8,
      delta
    );
  });

  return <group ref={groupRef}>{children}</group>;
};

// ============================================================================
// 7. MASTER GLOBAL 3D BACKGROUND EXPORT (Futuristic Innovation Headquarters)
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
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#0c0a09] select-none"
    >
      {/* Layer 1: Atmospheric Architectural Backdrop Gradient (Warm Charcoal & Bronze Depth) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09] via-[#141210] to-[#0a0807]" />

      {/* Atmospheric Warm Golden-Amber Horizon & Cove Glow */}
      <div className="absolute top-1/4 right-1/12 w-[650px] h-[550px] bg-gradient-to-b from-amber-500/12 via-orange-600/8 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/12 w-[450px] h-[400px] bg-gradient-to-b from-amber-600/10 via-amber-800/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[350px] bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

      {/* Subtle Architectural Horizontal Ambient Light Bands */}
      <div className="absolute top-[18%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent pointer-events-none" />
      <div className="absolute top-[48%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/15 to-transparent pointer-events-none" />

      {/* Layer 2: 3D WebGL Three.js Scene */}
      <Canvas
        camera={{ position: [0, 1.2, 18], fov: 50 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true,
        }}
        dpr={[1, 1.5]}
        performance={{ min: 0.8 }}
      >
        {/* Cinematic Atmospheric Scene Lighting */}
        <ambientLight intensity={0.8} color="#2e2720" />
        <directionalLight
          position={[15, 20, 10]}
          intensity={2.2}
          color="#fef3c7"
        />
        <directionalLight
          position={[-15, 10, -5]}
          intensity={1.0}
          color="#38bdf8" // subtle cool cyan-white highlight for depth separation
        />

        {/* Parallax Rig wrapping all 3D scene elements */}
        <LuxuryParallaxRig>
          {/* Architectural Interior (Columns, Reflective Floor, Ledges) */}
          <ArchitecturalEnvironment isMobile={isMobile} />

          {/* Floating Smoked Metallic Glass Cubes with Glowing Amber Edges */}
          <AmbientFloatingCubes isMobile={isMobile} />

          {/* Main 3D Floating Cloud Hologram with Internal Constellation & Orbital Rings */}
          <FloatingCloudObject isMobile={isMobile} />

          {/* Floating Atmospheric Golden Amber Light Motes */}
          <AtmosphericAmberParticles isMobile={isMobile} />
        </LuxuryParallaxRig>
      </Canvas>
    </div>
  );
};

export default GlobalSpaceBackground;
