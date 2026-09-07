'use client';

import React, { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

export const SEQUENCE_STEPS = {
  FLOATING_BLOCKS: 1,
  SEPARATED_LAYERS: 2,
  CONVERGENCE: 3,
  LOGO_FORMATION: 4,
} as const;

export type SequenceStep = typeof SEQUENCE_STEPS[keyof typeof SEQUENCE_STEPS];

export const SEQUENCE_INFO: Record<
  SequenceStep,
  { title: string; subtitle: string; description: string; duration: number; nextStep: SequenceStep }
> = {
  [SEQUENCE_STEPS.FLOATING_BLOCKS]: {
    title: 'Quantum Drift',
    subtitle: 'Phase 01: Disconnected Microservices',
    description: 'Autonomous cloud nodes navigate independently across the multi-cloud coordinate space.',
    duration: 7000,
    nextStep: SEQUENCE_STEPS.SEPARATED_LAYERS,
  },
  [SEQUENCE_STEPS.SEPARATED_LAYERS]: {
    title: 'Stratified Rings',
    subtitle: 'Phase 02: Architectural Stratification',
    description: 'Infrastructure dynamically stratifies into 4 secure tiered isolation zones with telemetry rings.',
    duration: 7000,
    nextStep: SEQUENCE_STEPS.CONVERGENCE,
  },
  [SEQUENCE_STEPS.CONVERGENCE]: {
    title: 'Mesh Convergence',
    subtitle: 'Phase 03: Compression & Alignment',
    description: 'Stratified zones compress inward toward central coordinates, achieving ultra-low-latency mesh cohesion.',
    duration: 7000,
    nextStep: SEQUENCE_STEPS.LOGO_FORMATION,
  },
  [SEQUENCE_STEPS.LOGO_FORMATION]: {
    title: 'CloudFen Nexus',
    subtitle: 'Phase 04: Brand Emergence',
    description: 'Nodes fuse into the unified CloudFen "CF" holographic insignia with orbital energy halos.',
    duration: 8000,
    nextStep: SEQUENCE_STEPS.FLOATING_BLOCKS,
  },
};

// -------------------------------------------------------------
// Helper: Soft Circular Star Particle Texture Generator
// -------------------------------------------------------------
function createStarTexture(): THREE.Texture {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
    gradient.addColorStop(0.18, 'rgba(224, 242, 254, 0.9)');
    gradient.addColorStop(0.45, 'rgba(0, 217, 255, 0.3)');
    gradient.addColorStop(0.75, 'rgba(22, 131, 255, 0.08)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

// -------------------------------------------------------------
// Helper: 4-Point Diffraction Spike Star Flare Generator
// -------------------------------------------------------------
function createDiffractionStarTexture(): THREE.Texture {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const cx = 64;
    const cy = 64;

    // Horizontal beam
    const hGrad = ctx.createLinearGradient(0, cy, 128, cy);
    hGrad.addColorStop(0, 'rgba(255,255,255,0)');
    hGrad.addColorStop(0.35, 'rgba(0,217,255,0.25)');
    hGrad.addColorStop(0.5, 'rgba(255,255,255,1.0)');
    hGrad.addColorStop(0.65, 'rgba(0,217,255,0.25)');
    hGrad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = hGrad;
    ctx.fillRect(0, cy - 2, 128, 4);

    // Vertical beam
    const vGrad = ctx.createLinearGradient(cx, 0, cx, 128);
    vGrad.addColorStop(0, 'rgba(255,255,255,0)');
    vGrad.addColorStop(0.35, 'rgba(0,217,255,0.25)');
    vGrad.addColorStop(0.5, 'rgba(255,255,255,1.0)');
    vGrad.addColorStop(0.65, 'rgba(0,217,255,0.25)');
    vGrad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = vGrad;
    ctx.fillRect(cx - 2, 0, 4, 128);

    // Center circular core
    const cGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 28);
    cGrad.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
    cGrad.addColorStop(0.2, 'rgba(224, 242, 254, 0.95)');
    cGrad.addColorStop(0.45, 'rgba(0, 217, 255, 0.4)');
    cGrad.addColorStop(0.75, 'rgba(22, 131, 255, 0.12)');
    cGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = cGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, 28, 0, Math.PI * 2);
    ctx.fill();
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

// -------------------------------------------------------------
// Component: Realistic Glowing Blue Crescent Planet (Bottom Right)
// -------------------------------------------------------------
function CrescentExoPlanet({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const planetGroupRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);

  const planetTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#020612';
      ctx.fillRect(0, 0, 512, 256);

      const grad = ctx.createLinearGradient(0, 0, 0, 256);
      grad.addColorStop(0, '#020714');
      grad.addColorStop(0.25, '#0a2345');
      grad.addColorStop(0.5, '#041026');
      grad.addColorStop(0.75, '#081d3b');
      grad.addColorStop(1, '#01030a');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 512, 256);

      for (let i = 0; i < 35; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 256;
        const r = 25 + Math.random() * 65;
        const cGrad = ctx.createRadialGradient(x, y, 0, x, y, r);
        cGrad.addColorStop(0, 'rgba(14, 116, 144, 0.35)');
        cGrad.addColorStop(0.45, 'rgba(2, 56, 110, 0.15)');
        cGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = cGrad;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    return texture;
  }, []);

  useFrame((_, delta) => {
    if (planetGroupRef.current) {
      const targetX = 16.2 + mouse.current.x * 1.5;
      const targetY = -9.2 + mouse.current.y * 1.1;
      planetGroupRef.current.position.x = THREE.MathUtils.lerp(planetGroupRef.current.position.x, targetX, 0.035);
      planetGroupRef.current.position.y = THREE.MathUtils.lerp(planetGroupRef.current.position.y, targetY, 0.035);
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.y += delta * 0.012;
    }
  });

  return (
    <group ref={planetGroupRef} position={[16.2, -9.2, 0]}>
      <mesh ref={sphereRef}>
        <sphereGeometry args={[7.8, 64, 64]} />
        <meshStandardMaterial
          map={planetTexture}
          roughness={0.85}
          metalness={0.15}
          color="#0f2b54"
          emissive="#020c1d"
          emissiveIntensity={0.15}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[7.86, 64, 64]} />
        <meshStandardMaterial
          color="#00D9FF"
          emissive="#0088FF"
          emissiveIntensity={0.9}
          roughness={0.2}
          transparent
          opacity={0.35}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[8.1, 64, 64]} />
        <meshBasicMaterial
          color="#00D9FF"
          transparent
          opacity={0.22}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

// -------------------------------------------------------------
// Component: Distant Dark Moon (Lower-Left Space)
// -------------------------------------------------------------
function DistantMoon({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const moonGroupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (moonGroupRef.current) {
      const targetX = -19.5 + mouse.current.x * 0.9;
      const targetY = -4.5 + mouse.current.y * 0.7;
      moonGroupRef.current.position.x = THREE.MathUtils.lerp(moonGroupRef.current.position.x, targetX, 0.035);
      moonGroupRef.current.position.y = THREE.MathUtils.lerp(moonGroupRef.current.position.y, targetY, 0.035);
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.008;
    }
  });

  return (
    <group ref={moonGroupRef} position={[-19.5, -4.5, -6]}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.85, 32, 32]} />
        <meshStandardMaterial
          color="#1e293b"
          roughness={0.92}
          metalness={0.08}
          emissive="#030712"
          emissiveIntensity={0.25}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.9, 32, 32]} />
        <meshBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.15}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

// -------------------------------------------------------------
// Component: Procedural Cosmic Nebula Dust Stream
// -------------------------------------------------------------
function CosmicNebulaDust() {
  const nebulaTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
      grad.addColorStop(0, 'rgba(0, 217, 255, 0.4)');
      grad.addColorStop(0.22, 'rgba(22, 131, 255, 0.25)');
      grad.addColorStop(0.5, 'rgba(6, 43, 85, 0.14)');
      grad.addColorStop(0.8, 'rgba(2, 6, 23, 0.04)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 128, 128);
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  const { positions, colors } = useMemo(() => {
    const count = 190;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const t = (i / count) * 2 - 1;
      const x = t * 40 + (Math.random() - 0.5) * 16;
      const y = t * 26 + (Math.random() - 0.5) * 14;
      const z = -14 - Math.random() * 26;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const tint = Math.random();
      if (tint > 0.65) {
        colors[i * 3] = 0.0;
        colors[i * 3 + 1] = 0.55;
        colors[i * 3 + 2] = 0.95;
      } else if (tint > 0.3) {
        colors[i * 3] = 0.04;
        colors[i * 3 + 1] = 0.32;
        colors[i * 3 + 2] = 0.8;
      } else {
        colors[i * 3] = 0.02;
        colors[i * 3 + 1] = 0.16;
        colors[i * 3 + 2] = 0.48;
      }
    }
    return { positions, colors };
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.z = Math.sin(time * 0.015) * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={24}
        map={nebulaTexture}
        vertexColors
        transparent
        opacity={0.32}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// -------------------------------------------------------------
// Component: Prominent 4-Point Star Glints (Diffraction Flares)
// -------------------------------------------------------------
function DiffractionStarGlints({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const flareTexture = useMemo(() => createDiffractionStarTexture(), []);

  const flares = useMemo(() => {
    const list = [
      { pos: [13.5, 14.5, -4], size: 5.2 },
      { pos: [-15.2, 13.0, -7], size: 5.6 },
      { pos: [20.5, -1.8, -5], size: 4.6 },
      { pos: [-6.5, -12.5, -6], size: 4.8 },
      { pos: [2.5, 17.0, -9], size: 4.2 },
      { pos: [-20.0, 3.5, -11], size: 4.6 },
      { pos: [9.0, -7.5, -3], size: 4.0 },
      { pos: [-11.5, -5.8, -8], size: 4.2 },
      { pos: [24.0, 10.0, -12], size: 3.8 },
    ];

    const count = list.length;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = list[i].pos[0];
      positions[i * 3 + 1] = list[i].pos[1];
      positions[i * 3 + 2] = list[i].pos[2];
    }
    return { positions };
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      const mat = pointsRef.current.material as THREE.PointsMaterial;
      mat.opacity = 0.88 + Math.sin(time * 2.2) * 0.12;
      pointsRef.current.rotation.y = mouse.current.x * 0.035;
      pointsRef.current.rotation.x = mouse.current.y * 0.035;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[flares.positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={5.8}
        map={flareTexture}
        color="#F0F9FF"
        transparent
        opacity={0.94}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// -------------------------------------------------------------
// Component: Deep Space Multi-Layer Procedural Star Field
// -------------------------------------------------------------
function DeepSpaceStarField({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const starTexture = useMemo(() => createStarTexture(), []);

  const distantStars = useMemo(() => {
    const count = 1600;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = 55 + Math.random() * 95;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const tint = Math.random();
      if (tint > 0.85) {
        colors[i * 3] = 0.75;
        colors[i * 3 + 1] = 0.9;
        colors[i * 3 + 2] = 1.0;
      } else if (tint > 0.7) {
        colors[i * 3] = 0.96;
        colors[i * 3 + 1] = 0.96;
        colors[i * 3 + 2] = 0.92;
      } else {
        colors[i * 3] = 0.85;
        colors[i * 3 + 1] = 0.88;
        colors[i * 3 + 2] = 0.94;
      }
    }
    return { positions, colors };
  }, []);

  const midStars = useMemo(() => {
    const count = 380;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 35 + Math.random() * 60;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return { positions };
  }, []);

  const accentStars = useMemo(() => {
    const count = 60;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 65;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 55;
    }
    return { positions };
  }, []);

  const groupRef1 = useRef<THREE.Points>(null);
  const groupRef2 = useRef<THREE.Points>(null);
  const groupRef3 = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const targetMouseX = mouse.current.x;
    const targetMouseY = mouse.current.y;

    if (groupRef1.current) {
      groupRef1.current.rotation.y += delta * 0.006;
      groupRef1.current.rotation.x = THREE.MathUtils.lerp(groupRef1.current.rotation.x, targetMouseY * 0.025, 0.04);
      groupRef1.current.rotation.z = THREE.MathUtils.lerp(groupRef1.current.rotation.z, targetMouseX * 0.025, 0.04);
    }
    if (groupRef2.current) {
      groupRef2.current.rotation.y += delta * 0.01;
      groupRef2.current.rotation.x = THREE.MathUtils.lerp(groupRef2.current.rotation.x, targetMouseY * 0.05, 0.05);
      groupRef2.current.rotation.z = THREE.MathUtils.lerp(groupRef2.current.rotation.z, targetMouseX * 0.05, 0.05);
      const mat = groupRef2.current.material as THREE.PointsMaterial;
      mat.opacity = 0.78 + Math.sin(time * 1.6) * 0.14;
    }
    if (groupRef3.current) {
      groupRef3.current.rotation.y += delta * 0.015;
      groupRef3.current.rotation.x = THREE.MathUtils.lerp(groupRef3.current.rotation.x, targetMouseY * 0.08, 0.06);
      groupRef3.current.rotation.z = THREE.MathUtils.lerp(groupRef3.current.rotation.z, targetMouseX * 0.08, 0.06);
    }
  });

  return (
    <group>
      <points ref={groupRef1}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[distantStars.positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[distantStars.colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={1.15}
          map={starTexture}
          transparent
          opacity={0.68}
          vertexColors
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <points ref={groupRef2}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[midStars.positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={1.8}
          map={starTexture}
          color="#BAE6FD"
          transparent
          opacity={0.82}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <points ref={groupRef3}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[accentStars.positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={2.8}
          color="#00D9FF"
          map={starTexture}
          transparent
          opacity={0.92}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

// -------------------------------------------------------------
// 3D Transformation Engine: 22 Dark Metallic Geometric Modules
// -------------------------------------------------------------
interface BlockSpec {
  id: number;
  size: [number, number, number];
  color: string;
  emissive: string;
  phasePositions: Record<SequenceStep, [number, number, number]>;
  phaseRotations: Record<SequenceStep, [number, number, number]>;
  phaseScales: Record<SequenceStep, [number, number, number]>;
}

function generateBlockSpecs(): BlockSpec[] {
  const specs: BlockSpec[] = [];

  for (let i = 0; i < 22; i++) {
    const p1Angle = (i / 22) * Math.PI * 2;
    const p1Radius = 4.5 + (i % 3) * 1.8;
    const p1: [number, number, number] = [
      Math.cos(p1Angle) * p1Radius + ((i % 4) - 1.5) * 0.8,
      ((i % 7) - 3) * 1.4,
      Math.sin(p1Angle) * p1Radius + ((i % 5) - 2) * 0.7,
    ];

    const tierIndex = i % 4;
    const tierY = [4.2, 1.4, -1.4, -4.2][tierIndex];
    const tierRadius = [3.2, 4.6, 4.6, 3.2][tierIndex];
    const tierAngle = ((i % 6) / 6) * Math.PI * 2 + tierIndex * 0.4;
    const p2: [number, number, number] = [
      Math.cos(tierAngle) * tierRadius,
      tierY,
      Math.sin(tierAngle) * tierRadius,
    ];

    const gridX = ((i % 3) - 1) * 1.35;
    const gridY = (Math.floor((i % 9) / 3) - 1) * 1.35;
    const gridZ = (Math.floor(i / 9) - 1) * 1.35;
    const p3: [number, number, number] = [gridX, gridY, gridZ];

    let p4: [number, number, number] = [0, 0, 0];
    let r4: [number, number, number] = [0, 0, 0];

    if (i < 11) {
      const cAngle = (i / 10) * Math.PI * 1.5 + Math.PI * 0.25;
      p4 = [
        -3.8 + Math.cos(cAngle) * 2.2,
        Math.sin(cAngle) * 2.5,
        0,
      ];
      r4 = [0, 0, -cAngle + Math.PI / 2];
    } else {
      const fIdx = i - 11;
      if (fIdx < 6) {
        p4 = [0.6, 3.0 - fIdx * 1.2, 0];
        r4 = [0, 0, 0];
      } else if (fIdx < 9) {
        p4 = [1.6 + (fIdx - 6) * 1.1, 3.0, 0];
        r4 = [0, 0, 0];
      } else {
        p4 = [1.6 + (fIdx - 9) * 1.1, 0.6, 0];
        r4 = [0, 0, 0];
      }
    }

    const isCyanAccent = i % 3 === 0;
    specs.push({
      id: i,
      size: [
        0.95 + (i % 2) * 0.25,
        0.85 + (i % 3) * 0.15,
        0.95 + (i % 2) * 0.2,
      ],
      color: isCyanAccent ? '#0b192e' : '#0a1220',
      emissive: isCyanAccent ? '#0077b6' : '#003366',
      phasePositions: {
        1: p1,
        2: p2,
        3: p3,
        4: p4,
      },
      phaseRotations: {
        1: [(i * 0.3) % Math.PI, (i * 0.4) % Math.PI, (i * 0.2) % Math.PI],
        2: [0, tierAngle, 0],
        3: [0, 0, 0],
        4: r4,
      },
      phaseScales: {
        1: [1, 1, 1],
        2: [1.1, 0.7, 1.1],
        3: [0.85, 0.85, 0.85],
        4: [1.05, 1.05, 1.05],
      },
    });
  }

  return specs;
}

function TransformationModule({
  spec,
  currentStep,
}: {
  spec: BlockSpec;
  currentStep: SequenceStep;
}) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();

    const targetPos = spec.phasePositions[currentStep];
    const targetRot = spec.phaseRotations[currentStep];
    const targetScale = spec.phaseScales[currentStep];

    let offsetY = 0;
    let offsetX = 0;
    if (currentStep === 1) {
      offsetY = Math.sin(time * 1.8 + spec.id * 0.7) * 0.25;
      offsetX = Math.cos(time * 1.4 + spec.id * 0.5) * 0.18;
    } else if (currentStep === 4) {
      offsetY = Math.sin(time * 2.0 + spec.id * 0.2) * 0.05;
    }

    const lerpSpeed = delta * 3.8;
    meshRef.current.position.x = THREE.MathUtils.lerp(
      meshRef.current.position.x,
      targetPos[0] + offsetX,
      lerpSpeed
    );
    meshRef.current.position.y = THREE.MathUtils.lerp(
      meshRef.current.position.y,
      targetPos[1] + offsetY,
      lerpSpeed
    );
    meshRef.current.position.z = THREE.MathUtils.lerp(
      meshRef.current.position.z,
      targetPos[2],
      lerpSpeed
    );

    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      targetRot[0] + (currentStep === 1 ? time * 0.15 : 0),
      lerpSpeed
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      targetRot[1] + (currentStep === 1 ? time * 0.2 : 0),
      lerpSpeed
    );
    meshRef.current.rotation.z = THREE.MathUtils.lerp(
      meshRef.current.rotation.z,
      targetRot[2],
      lerpSpeed
    );

    meshRef.current.scale.x = THREE.MathUtils.lerp(
      meshRef.current.scale.x,
      targetScale[0],
      lerpSpeed
    );
    meshRef.current.scale.y = THREE.MathUtils.lerp(
      meshRef.current.scale.y,
      targetScale[1],
      lerpSpeed
    );
    meshRef.current.scale.z = THREE.MathUtils.lerp(
      meshRef.current.scale.z,
      targetScale[2],
      lerpSpeed
    );
  });

  return (
    <group ref={meshRef} position={spec.phasePositions[1]}>
      <mesh>
        <boxGeometry args={spec.size} />
        <meshStandardMaterial
          color={spec.color}
          metalness={0.92}
          roughness={0.2}
          emissive={spec.emissive}
          emissiveIntensity={currentStep === 4 ? 0.65 : 0.35}
        />
      </mesh>

      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(...spec.size)]} />
        <lineBasicMaterial
          color={currentStep === 4 ? '#00e5ff' : '#00d9ff'}
          transparent
          opacity={currentStep === 4 ? 0.95 : 0.75}
          linewidth={1.5}
        />
      </lineSegments>

      <mesh>
        <sphereGeometry args={[0.22, 16, 16]} />
        <meshBasicMaterial
          color="#00e5ff"
          transparent
          opacity={0.85}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

function OrbitalHalos({ currentStep }: { currentStep: SequenceStep }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.05;
    }
  });

  if (currentStep !== 2 && currentStep !== 4) return null;

  return (
    <group ref={groupRef}>
      <mesh rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[5.2, 0.035, 16, 100]} />
        <meshBasicMaterial
          color="#00D9FF"
          transparent
          opacity={currentStep === 4 ? 0.8 : 0.45}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <mesh rotation={[-Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[5.8, 0.025, 16, 100]} />
        <meshBasicMaterial
          color="#38BDF8"
          transparent
          opacity={currentStep === 4 ? 0.7 : 0.35}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

function DigitalDustSwarm({ currentStep }: { currentStep: SequenceStep }) {
  const pointsRef = useRef<THREE.Points>(null);
  const starTexture = useMemo(() => createStarTexture(), []);

  const { positions } = useMemo(() => {
    const count = 280;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 2.5 + Math.random() * 6.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return { positions };
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * (currentStep === 3 || currentStep === 4 ? 0.35 : 0.08);
      pointsRef.current.rotation.z += delta * 0.04;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={currentStep === 4 ? 2.4 : 1.6}
        map={starTexture}
        color={currentStep === 4 ? '#00E5FF' : '#38BDF8'}
        transparent
        opacity={currentStep === 4 ? 0.85 : 0.55}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export const CloudFenTransformationScene: React.FC<{
  currentStep?: SequenceStep;
  onStepChange?: (step: SequenceStep) => void;
  interactive?: boolean;
}> = ({ currentStep: externalStep, onStepChange, interactive = true }) => {
  const [internalStep, setInternalStep] = useState<SequenceStep>(SEQUENCE_STEPS.FLOATING_BLOCKS);
  const currentStep = externalStep ?? internalStep;
  const mouseRef = useRef({ x: 0, y: 0 });
  const blockSpecs = useMemo(() => generateBlockSpecs(), []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const { innerWidth, innerHeight } = window;
    mouseRef.current = {
      x: (e.clientX / innerWidth) * 2 - 1,
      y: -(e.clientY / innerHeight) * 2 + 1,
    };
  }, []);

  return (
    <div onMouseMove={handleMouseMove} className="w-full h-full min-h-[480px] lg:min-h-[580px] relative pointer-events-auto bg-[#000000]">
      <Canvas shadows camera={{ position: [0, 0, 16], fov: 48 }} className="w-full h-full">
        <color attach="background" args={['#000000']} />
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          maxDistance={45}
          minDistance={8}
          autoRotate={currentStep === SEQUENCE_STEPS.LOGO_FORMATION}
          autoRotateSpeed={0.5}
        />

        <ambientLight intensity={0.22} />
        <directionalLight position={[-25, 30, 25]} intensity={1.3} color="#F8FAFC" />
        <directionalLight position={[25, -20, -20]} intensity={1.8} color="#00D9FF" />
        <pointLight position={[10, 15, 10]} color="#1683FF" intensity={1.2} distance={70} />
        <pointLight
          position={[0, 0, 0]}
          color="#00D9FF"
          intensity={currentStep === SEQUENCE_STEPS.LOGO_FORMATION ? 3.4 : 1.8}
          distance={70}
        />

        <CosmicNebulaDust />
        <DeepSpaceStarField mouse={mouseRef} />
        <DiffractionStarGlints mouse={mouseRef} />
        <CrescentExoPlanet mouse={mouseRef} />
        <DistantMoon mouse={mouseRef} />

        <group position={[0, 0, 0]}>
          {blockSpecs.map((spec) => (
            <TransformationModule
              key={spec.id}
              spec={spec}
              currentStep={currentStep}
            />
          ))}
          <OrbitalHalos currentStep={currentStep} />
          <DigitalDustSwarm currentStep={currentStep} />
        </group>
      </Canvas>

      {interactive && (
        <div className="absolute bottom-4 left-4 z-20 flex gap-1.5 p-1.5 bg-[rgba(5,8,15,0.78)] backdrop-blur-2xl rounded-xl border border-cyan-500/30">
          {Object.values(SEQUENCE_STEPS).map((step) => (
            <button
              key={step}
              onClick={() => {
                if (onStepChange) onStepChange(step);
                else setInternalStep(step);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currentStep === step
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Phase 0{step}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CloudFenTransformationScene;
