'use client';

import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// ============================================================================
// COLOR CONSTANTS MATCHING REFERENCE SPECIFICATION
// ============================================================================
// Base: #080A0C, #111417, #171A1D, #22262A (Dark Graphite / Charcoal)
// Accent: #FFB13B, #FF8C22, #FFC15A (Warm Amber / Soft Orange / Golden Highlights)
// Secondary: #DDE7EA (Subtle Neutral-Cool Highlights)
// Foliage: #1b2e23, #15241b (Architectural Indoor Planters)

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
  hasPointLight?: boolean;
}

const GlowingCube: React.FC<GlowingCubeProps> = ({
  position,
  size,
  rotSpeed = [0.003, 0.006, 0.002],
  floatSpeed = 0.85,
  floatAmplitude = 0.22,
  floatOffset = 0,
  edgeColor = '#FFB13B',
  glowIntensity = 3.0,
  hasPointLight = false,
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

    // Smooth multi-axis slow rotation
    meshRef.current.rotation.x += rotSpeed[0];
    meshRef.current.rotation.y += rotSpeed[1];
    meshRef.current.rotation.z += rotSpeed[2];

    // Subtle floating levitation
    meshRef.current.position.y = initialY + Math.sin(t * floatSpeed + floatOffset) * floatAmplitude;
  });

  return (
    <group ref={meshRef} position={position}>
      {/* Dark Smoked Metallic Glass Body */}
      <mesh geometry={boxGeo}>
        <meshPhysicalMaterial
          color="#111417"
          roughness={0.12}
          metalness={0.88}
          transmission={0.45}
          thickness={1.0}
          transparent={true}
          opacity={0.92}
          reflectivity={0.9}
          clearcoat={0.9}
          clearcoatRoughness={0.08}
        />
      </mesh>

      {/* Primary Intense Glowing Amber Edge Lines */}
      <lineSegments geometry={edgesGeo}>
        <lineBasicMaterial
          color={edgeColor}
          transparent={true}
          opacity={0.95}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* Secondary Outer Halo Edge Glow */}
      <lineSegments geometry={edgesGeo} scale={[1.012, 1.012, 1.012]}>
        <lineBasicMaterial
          color="#FFC15A"
          transparent={true}
          opacity={0.5 * glowIntensity}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* Optional Soft Warm Point Light from Cube Core */}
      {hasPointLight && (
        <pointLight
          color="#FFB13B"
          intensity={2.8}
          distance={8}
          decay={2}
        />
      )}
    </group>
  );
};

// ============================================================================
// 2. SCATTERED AMBIENT FLOATING CUBES (Depth Field Placement)
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
      hasLight?: boolean;
    }> = [];

    // 1. Prominent Hero Left Cube (Matching Reference Image Position & Size)
    list.push({
      pos: isMobile ? [-5.5, 3.5, -4] : [-10.8, 2.5, -2.5],
      size: isMobile ? 1.8 : 2.9,
      rotSpeed: [0.004, 0.007, 0.003],
      floatSpeed: 0.8,
      floatAmp: 0.28,
      offset: 0,
      hasLight: true,
    });

    // 2. Secondary Mid-Left Cubes
    list.push({
      pos: [-14.8, 5.8, -8],
      size: 1.9,
      rotSpeed: [0.005, -0.006, 0.004],
      floatSpeed: 0.65,
      floatAmp: 0.22,
      offset: 1.4,
    });

    list.push({
      pos: [-12.2, -2.8, -6],
      size: 1.5,
      rotSpeed: [-0.004, 0.005, -0.003],
      floatSpeed: 0.9,
      floatAmp: 0.18,
      offset: 2.8,
    });

    // 3. Right-Flanking Cubes around Cloud Sculpture
    list.push({
      pos: [14.8, 5.2, -7],
      size: 1.6,
      rotSpeed: [0.006, 0.004, -0.005],
      floatSpeed: 0.75,
      floatAmp: 0.2,
      offset: 3.2,
    });

    list.push({
      pos: [15.5, -1.8, -6],
      size: 1.3,
      rotSpeed: [-0.005, 0.006, 0.003],
      floatSpeed: 0.85,
      floatAmp: 0.16,
      offset: 4.5,
    });

    // 4. Tiny Distant Background Cubes (Non-interfering, Deep Depth)
    const count = isMobile ? 3 : 8;
    for (let i = 0; i < count; i++) {
      // Avoid center x (keep center between -3 and 3 clear)
      const side = i % 2 === 0 ? -1 : 1;
      const x = side * (5.5 + Math.random() * 12);
      const y = -3 + Math.random() * 10;
      const z = -12 - Math.random() * 16;
      const s = 0.5 + Math.random() * 0.8;

      list.push({
        pos: [x, y, z],
        size: s,
        rotSpeed: [
          (Math.random() - 0.5) * 0.008,
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.006,
        ],
        floatSpeed: 0.5 + Math.random() * 0.6,
        floatAmp: 0.12 + Math.random() * 0.15,
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
          hasPointLight={cube.hasLight}
        />
      ))}
    </group>
  );
};

// ============================================================================
// 3. MAIN 3D CLOUD SCULPTURE WITH CONSTELLATION & ORBITAL RINGS
// ============================================================================
const FloatingCloudSculpture: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
  const cloudGroupRef = useRef<THREE.Group>(null);
  const nodesRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  // Cloud position: Right side of screen, elevated above floor (Matching Reference)
  const basePosition: [number, number, number] = isMobile ? [3.8, 3.2, -6] : [9.6, 3.2, -3.2];
  const cloudScale = isMobile ? 0.72 : 1.18;

  // 1. Internal Constellation Digital Network Nodes & Luminous Connections
  const { nodePositions, nodeColors, linePositions } = useMemo(() => {
    const numNodes = isMobile ? 35 : 62;
    const positions: number[] = [];
    const colors: number[] = [];

    // Cloud lobe boundary approximation
    const lobes = [
      { center: [0, 0, 0], r: 2.3 },
      { center: [-1.85, -0.3, 0.1], r: 1.65 },
      { center: [1.9, -0.25, 0.1], r: 1.8 },
      { center: [-0.5, 1.4, -0.05], r: 1.7 },
      { center: [1.2, 1.2, 0.1], r: 1.45 },
      { center: [0, -1.0, 0], r: 1.55 },
    ];

    for (let i = 0; i < numNodes; i++) {
      const lobe = lobes[Math.floor(Math.random() * lobes.length)];
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * (lobe.r * 0.78);

      const sinPhi = Math.sin(phi);
      const x = lobe.center[0] + r * sinPhi * Math.cos(theta);
      const y = lobe.center[1] + r * sinPhi * Math.sin(theta);
      const z = lobe.center[2] + r * Math.cos(phi) * 0.65; // depth compression

      positions.push(x, y, z);

      // Warm Golden Amber vs Bright Neutral-White Node Colors
      if (Math.random() > 0.35) {
        colors.push(1.0, 0.7, 0.23); // #FFB13B
      } else {
        colors.push(1.0, 0.96, 0.85); // Bright Golden White
      }
    }

    // Connect close nodes with glowing lines
    const linePairs: number[] = [];
    for (let i = 0; i < numNodes; i++) {
      for (let j = i + 1; j < numNodes; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < 1.75) {
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
    };
  }, [isMobile]);

  // 2. Multi-Lobe Parametric Mesh Geometries for Smooth Cloud Silhouette
  const cloudLobeGeometries = useMemo(() => {
    return [
      { geo: new THREE.SphereGeometry(2.35, 36, 28), pos: [0, 0, 0] as [number, number, number], scale: [1.15, 0.92, 0.78] as [number, number, number] },
      { geo: new THREE.SphereGeometry(1.7, 32, 24), pos: [-1.85, -0.32, 0.12] as [number, number, number], scale: [1.02, 0.92, 0.78] as [number, number, number] },
      { geo: new THREE.SphereGeometry(1.88, 32, 24), pos: [1.9, -0.28, 0.1] as [number, number, number], scale: [1.02, 0.92, 0.78] as [number, number, number] },
      { geo: new THREE.SphereGeometry(1.72, 32, 24), pos: [-0.48, 1.4, -0.06] as [number, number, number], scale: [1.0, 0.95, 0.78] as [number, number, number] },
      { geo: new THREE.SphereGeometry(1.42, 28, 20), pos: [1.22, 1.2, 0.12] as [number, number, number], scale: [1.0, 0.9, 0.78] as [number, number, number] },
      { geo: new THREE.SphereGeometry(1.55, 28, 20), pos: [0, -1.0, 0] as [number, number, number], scale: [1.55, 0.65, 0.78] as [number, number, number] },
    ];
  }, []);

  // 3. Elegant Thin 3D Orbital Torus Rings
  const ringGeometries = useMemo(() => {
    return {
      ring1: new THREE.TorusGeometry(4.3, 0.038, 16, 120),
      ring2: new THREE.TorusGeometry(5.0, 0.028, 16, 120),
      ring3: new THREE.TorusGeometry(4.6, 0.032, 16, 120),
    };
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (cloudGroupRef.current) {
      // Gentle vertical floating levitation
      cloudGroupRef.current.position.y = basePosition[1] + Math.sin(t * 0.85) * 0.28;
      // Extremely subtle rotation
      cloudGroupRef.current.rotation.y = Math.sin(t * 0.35) * 0.07;
      cloudGroupRef.current.rotation.x = Math.cos(t * 0.28) * 0.035;
    }

    // Orbital Rings Slow Continuous Rotation at Differential Angles & Speeds
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = t * 0.16;
      ring1Ref.current.rotation.x = 0.52 + Math.sin(t * 0.12) * 0.04;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -t * 0.13;
      ring2Ref.current.rotation.y = 0.64 + Math.cos(t * 0.1) * 0.05;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = t * 0.11;
      ring3Ref.current.rotation.x = -0.42 + Math.sin(t * 0.15) * 0.03;
    }

    // Dynamic node twinkle
    if (nodesRef.current) {
      const mat = nodesRef.current.material as THREE.PointsMaterial;
      if (mat) {
        mat.size = 0.13 + Math.sin(t * 2.2) * 0.025;
      }
    }
  });

  return (
    <group ref={cloudGroupRef} position={basePosition} scale={cloudScale}>
      {/* Central Core Warm Amber Point Lights */}
      <pointLight color="#FF9F1C" intensity={5.2} distance={18} decay={2} />
      <pointLight color="#FFC15A" intensity={2.6} distance={9} decay={2} />

      {/* Cloud Outer Glass Shell Lobes */}
      {cloudLobeGeometries.map((lobe, idx) => (
        <group key={idx} position={lobe.pos} scale={lobe.scale}>
          {/* Dark Smoky Semi-Transparent Glass Body */}
          <mesh geometry={lobe.geo}>
            <meshPhysicalMaterial
              color="#141210"
              roughness={0.1}
              metalness={0.45}
              transmission={0.68}
              thickness={1.4}
              transparent={true}
              opacity={0.78}
              reflectivity={0.92}
              clearcoat={1.0}
              clearcoatRoughness={0.06}
            />
          </mesh>

          {/* Intense Golden-Amber Perimeter Rim Glow Contour */}
          <mesh geometry={lobe.geo} scale={[1.026, 1.026, 1.026]}>
            <meshStandardMaterial
              color="#FFC15A"
              emissive="#FF8C22"
              emissiveIntensity={3.4}
              wireframe={true}
              transparent={true}
              opacity={0.4}
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
          color="#FFB13B"
          transparent={true}
          opacity={0.52}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>

      {/* Orbital Ring 1 (Passing in front and behind) */}
      <mesh ref={ring1Ref} geometry={ringGeometries.ring1} rotation={[0.55, 0.22, 0]}>
        <meshStandardMaterial
          color="#FFC15A"
          emissive="#FF8C22"
          emissiveIntensity={3.2}
          roughness={0.18}
          metalness={0.92}
        />
      </mesh>

      {/* Orbital Ring 2 */}
      <mesh ref={ring2Ref} geometry={ringGeometries.ring2} rotation={[-0.42, 0.62, 0.32]}>
        <meshStandardMaterial
          color="#FFB13B"
          emissive="#FF8C22"
          emissiveIntensity={2.9}
          roughness={0.18}
          metalness={0.92}
        />
      </mesh>

      {/* Orbital Ring 3 */}
      <mesh ref={ring3Ref} geometry={ringGeometries.ring3} rotation={[0.32, -0.48, 0.72]}>
        <meshStandardMaterial
          color="#FFE2A0"
          emissive="#FFB13B"
          emissiveIntensity={2.6}
          roughness={0.18}
          metalness={0.92}
        />
      </mesh>
    </group>
  );
};

// ============================================================================
// 4. ARCHITECTURAL HEADQUARTERS ENVIRONMENT (Columns, Reflective Floor, Planters)
// ============================================================================
const ArchitecturalEnvironment: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
  // Geometries for Architecture Elements
  const { floorGeo, pillarGeo, lightStripGeo, glassMullionGeo, ledgeGeo, planterBoxGeo, plantBushGeo } = useMemo(() => {
    return {
      floorGeo: new THREE.PlaneGeometry(90, 90, 24, 24),
      pillarGeo: new THREE.BoxGeometry(1.6, 24, 1.6),
      lightStripGeo: new THREE.BoxGeometry(0.12, 22, 0.12),
      glassMullionGeo: new THREE.BoxGeometry(0.15, 24, 0.15),
      ledgeGeo: new THREE.BoxGeometry(20, 0.7, 3.5),
      planterBoxGeo: new THREE.BoxGeometry(5.5, 0.9, 1.8),
      plantBushGeo: new THREE.SphereGeometry(1.1, 14, 10),
    };
  }, []);

  // Structural Column Positions (Spanning deep architectural perspective)
  const pillars = useMemo(() => {
    return [
      { pos: [-19, 4.5, -22] as [number, number, number] },
      { pos: [-12, 4.5, -26] as [number, number, number] },
      { pos: [-4, 4.5, -30] as [number, number, number] },
      { pos: [4, 4.5, -30] as [number, number, number] },
      { pos: [12, 4.5, -26] as [number, number, number] },
      { pos: [19, 4.5, -22] as [number, number, number] },
    ];
  }, []);

  // Subtle Indoor Plants in Distant Background / Planters
  const plants = useMemo(() => {
    return [
      { pos: [-13.5, -4.2, -18] as [number, number, number], scale: [1.2, 0.9, 1.0] as [number, number, number] },
      { pos: [-15.2, -4.1, -18.5] as [number, number, number], scale: [0.9, 1.1, 0.9] as [number, number, number] },
      { pos: [13.5, -4.2, -18] as [number, number, number], scale: [1.2, 0.9, 1.0] as [number, number, number] },
      { pos: [15.2, -4.1, -18.5] as [number, number, number], scale: [0.9, 1.1, 0.9] as [number, number, number] },
    ];
  }, []);

  return (
    <group>
      {/* 1. Polished Dark Reflective Architectural Floor */}
      <mesh geometry={floorGeo} position={[0, -5.6, -15]} rotation={[-Math.PI / 2, 0, 0]}>
        <meshStandardMaterial
          color="#0c0e11"
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Ambient Warm Golden Specular Floor Reflection Pool */}
      <mesh geometry={floorGeo} position={[0, -5.58, -15]} rotation={[-Math.PI / 2, 0, 0]}>
        <meshBasicMaterial
          color="#78350f"
          transparent={true}
          opacity={0.07}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* 2. Vertical Dark Graphite Architectural Pillars with Embedded Warm LED Strips */}
      {pillars.map((pillar, idx) => (
        <group key={idx} position={pillar.pos}>
          {/* Main Dark Metallic Graphite Column */}
          <mesh geometry={pillarGeo}>
            <meshStandardMaterial
              color="#171A1D"
              roughness={0.3}
              metalness={0.85}
            />
          </mesh>

          {/* Embedded Warm Amber Vertical LED Channel */}
          <mesh geometry={lightStripGeo} position={[0, 0, 0.85]}>
            <meshBasicMaterial
              color="#FFB13B"
              transparent={true}
              opacity={0.75}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        </group>
      ))}

      {/* 3. Distant Architectural Glass Panel Mullions */}
      <mesh geometry={glassMullionGeo} position={[-8, 4.5, -28]}>
        <meshStandardMaterial color="#22262A" roughness={0.2} metalness={0.9} />
      </mesh>
      <mesh geometry={glassMullionGeo} position={[8, 4.5, -28]}>
        <meshStandardMaterial color="#22262A" roughness={0.2} metalness={0.9} />
      </mesh>

      {/* 4. Distant Architectural Ledges & Planter Boxes */}
      <mesh geometry={ledgeGeo} position={[-14, -4.8, -18]}>
        <meshStandardMaterial color="#111417" roughness={0.35} metalness={0.75} />
      </mesh>
      <mesh geometry={ledgeGeo} position={[14, -4.8, -18]}>
        <meshStandardMaterial color="#111417" roughness={0.35} metalness={0.75} />
      </mesh>

      {/* Planter Boxes */}
      <mesh geometry={planterBoxGeo} position={[-14, -4.4, -18]}>
        <meshStandardMaterial color="#171A1D" roughness={0.4} metalness={0.6} />
      </mesh>
      <mesh geometry={planterBoxGeo} position={[14, -4.4, -18]}>
        <meshStandardMaterial color="#171A1D" roughness={0.4} metalness={0.6} />
      </mesh>

      {/* Subtle Indoor Botanical Foliage in Planters */}
      {plants.map((plant, idx) => (
        <mesh key={idx} geometry={plantBushGeo} position={plant.pos} scale={plant.scale}>
          <meshStandardMaterial
            color="#1b2e23"
            roughness={0.65}
            metalness={0.15}
          />
        </mesh>
      ))}

      {/* Warm Ambient Downlights on Architectural Ledges */}
      <pointLight position={[-14, -3.2, -16]} color="#FFB13B" intensity={1.8} distance={12} decay={2} />
      <pointLight position={[14, -3.2, -16]} color="#FFB13B" intensity={2.0} distance={14} decay={2} />
    </group>
  );
};

// ============================================================================
// 5. ATMOSPHERIC GOLDEN AMBER LIGHT MOTES (Luminous Drifting Particles)
// ============================================================================
const AtmosphericAmberMotes: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = isMobile ? 90 : 220;

  const { positions, sizes, speeds } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    const sp = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 44;
      pos[i * 3 + 1] = -5 + Math.random() * 20;
      pos[i * 3 + 2] = 2 - Math.random() * 30;

      sz[i] = 1.1 + Math.random() * 2.0;
      sp[i] = 0.35 + Math.random() * 0.7;
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
          pos.y += mod(uTime * aSpeed * 0.35, 20.0) - 5.0;
          pos.x += sin(uTime * 0.45 + position.y) * 0.25;

          float twinkle = sin(uTime * 1.8 + position.x * 2.5) * 0.35 + 0.65;
          vAlpha = twinkle * 0.8;

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = (aSize * (200.0 / -mvPosition.z)) * uPixelRatio;
        }
      `,
      fragmentShader: `
        varying float vAlpha;

        void main() {
          vec2 coord = gl_PointCoord - vec2(0.5);
          float dist = length(coord);
          if (dist > 0.5) discard;

          float intensity = smoothstep(0.5, 0.05, dist);
          // Warm Golden Amber Luminous Falloff (#FFB13B)
          gl_FragColor = vec4(1.0, 0.76, 0.32, intensity * vAlpha);
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
// 6. LUXURY PARALLAX CAMERA RIG (Passive Smooth Mouse Easing & Scroll Parallax)
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
    const targetMouseX = (state.pointer.x * Math.PI) / 20;
    const targetMouseY = (-state.pointer.y * Math.PI) / 24;

    // Scroll vertical progression parallax
    const scrollOffset = scrollRef.current * 4.0;

    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      targetMouseX,
      2.0,
      delta
    );
    groupRef.current.rotation.x = THREE.MathUtils.damp(
      groupRef.current.rotation.x,
      targetMouseY + (scrollRef.current * 0.04),
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
// 7. MASTER GLOBAL 3D BACKGROUND EXPORT (Futuristic Headquarters Environment)
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
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#080A0C] select-none"
    >
      {/* Layer 1: Atmospheric Architectural Backdrop Gradient (Dark Graphite / Charcoal & Warm Amber Depth) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080A0C] via-[#111417] to-[#080A0C]" />

      {/* Atmospheric Warm Golden-Amber Cove & Horizon Glow (Matching Reference Image) */}
      <div className="absolute top-1/4 right-1/12 w-[680px] h-[580px] bg-gradient-to-b from-[#FFB13B]/14 via-[#FF8C22]/8 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/12 w-[480px] h-[420px] bg-gradient-to-b from-[#FF8C22]/10 via-[#FFB13B]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[360px] bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

      {/* Architectural Horizontal Ambient Recessed Light Bands */}
      <div className="absolute top-[18%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FFB13B]/20 to-transparent pointer-events-none" />
      <div className="absolute top-[48%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FFB13B]/15 to-transparent pointer-events-none" />

      {/* Layer 2: 3D WebGL Three.js Scene */}
      <Canvas
        camera={{ position: [0, 1.2, 17.5], fov: 48 }}
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
        <ambientLight intensity={0.85} color="#1d1e22" />
        <directionalLight
          position={[16, 22, 12]}
          intensity={2.4}
          color="#FFE9C2"
        />
        <directionalLight
          position={[-16, 12, -4]}
          intensity={0.95}
          color="#DDE7EA" // subtle neutral-cool highlight for depth separation
        />

        {/* Parallax Rig wrapping all 3D scene elements */}
        <LuxuryParallaxRig>
          {/* Architectural Headquarters Interior (Columns, Floor, Planters) */}
          <ArchitecturalEnvironment isMobile={isMobile} />

          {/* Floating Smoked Metallic Glass Cubes with Glowing Amber Edges */}
          <AmbientFloatingCubes isMobile={isMobile} />

          {/* Main 3D Floating Cloud Hologram Sculpture with Constellation & Orbital Rings */}
          <FloatingCloudSculpture isMobile={isMobile} />

          {/* Floating Atmospheric Golden Amber Light Motes */}
          <AtmosphericAmberMotes isMobile={isMobile} />
        </LuxuryParallaxRig>
      </Canvas>
    </div>
  );
};

export default GlobalSpaceBackground;
