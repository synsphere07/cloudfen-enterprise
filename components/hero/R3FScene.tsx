'use client';

import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Torus, Line, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// 1. Procedural 3D Holographic Cloud Mesh
const HolographicCloud: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Define cloud cluster spheres
  const cloudPuffs = useMemo(
    () => [
      { pos: [0, 0, 0] as [number, number, number], scale: 1.35, color: '#00e5ff' },
      { pos: [-0.9, -0.2, 0.3] as [number, number, number], scale: 1.05, color: '#38bdf8' },
      { pos: [0.95, -0.15, -0.2] as [number, number, number], scale: 1.15, color: '#2dd4bf' },
      { pos: [-0.5, 0.65, -0.3] as [number, number, number], scale: 0.95, color: '#00e5ff' },
      { pos: [0.6, 0.7, 0.2] as [number, number, number], scale: 0.9, color: '#38bdf8' },
      { pos: [0.1, -0.6, 0.4] as [number, number, number], scale: 0.85, color: '#60a5fa' },
      { pos: [-1.4, -0.4, -0.1] as [number, number, number], scale: 0.75, color: '#2dd4bf' },
      { pos: [1.35, 0.35, 0.1] as [number, number, number], scale: 0.7, color: '#00e5ff' },
    ],
    []
  );

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.15;
      groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.08;
    }
    if (coreRef.current) {
      const pulse = 1 + Math.sin(t * 2.5) * 0.06;
      coreRef.current.scale.set(pulse, pulse, pulse);
    }
  });

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Central Quantum Plasma Core */}
      <mesh ref={coreRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.2, 4]} />
        <meshPhysicalMaterial
          color="#00e5ff"
          emissive="#0088aa"
          emissiveIntensity={hovered ? 2.2 : 1.4}
          roughness={0.1}
          metalness={0.85}
          transmission={0.4}
          transparent
          opacity={0.88}
        />
      </mesh>

      {/* Cloud Puff Geometry Volumes */}
      {cloudPuffs.map((puff, idx) => (
        <Sphere
          key={idx}
          args={[puff.scale, 32, 32]}
          position={puff.pos}
        >
          <meshPhysicalMaterial
            color={puff.color}
            emissive={puff.color}
            emissiveIntensity={hovered ? 0.9 : 0.45}
            roughness={0.25}
            metalness={0.3}
            transmission={0.65}
            transparent
            opacity={0.6}
            wireframe={false}
          />
        </Sphere>
      ))}

      {/* Cyber Grid Hologram Cloud Cage */}
      <mesh position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.9, 1]} />
        <meshBasicMaterial
          color="#38bdf8"
          wireframe
          transparent
          opacity={hovered ? 0.6 : 0.35}
        />
      </mesh>

      {/* Primary Equatorial Multi-Cloud Orbital Ring */}
      <Torus args={[2.5, 0.045, 24, 120]} rotation={[Math.PI / 3, Math.PI / 6, 0]}>
        <meshStandardMaterial
          color="#00e5ff"
          emissive="#005577"
          metalness={0.95}
          roughness={0.1}
        />
      </Torus>

      {/* Secondary Polar Orbital Ring */}
      <Torus args={[2.9, 0.035, 20, 120]} rotation={[-Math.PI / 4, -Math.PI / 3, 0]}>
        <meshStandardMaterial
          color="#2dd4bf"
          emissive="#004433"
          metalness={0.9}
          roughness={0.15}
        />
      </Torus>
    </group>
  );
};

// 2. Interconnected Glowing Network Nodes & Laser Data Lines
const NetworkMeshNodes: React.FC = () => {
  const nodesGroupRef = useRef<THREE.Group>(null);
  const [activeNode, setActiveNode] = useState<number | null>(null);

  // Position nodes strategically in 3D multi-cloud topology
  const nodes = useMemo(
    () => [
      { id: 0, pos: [2.6, 1.2, 0.8] as [number, number, number], name: 'AWS us-east-1', color: '#00e5ff' },
      { id: 1, pos: [-2.4, 1.5, -0.6] as [number, number, number], name: 'GCP europe-west3', color: '#38bdf8' },
      { id: 2, pos: [1.8, -2.1, 1.2] as [number, number, number], name: 'Azure East US', color: '#2dd4bf' },
      { id: 3, pos: [-2.2, -1.6, -1.0] as [number, number, number], name: 'K8s Bare Metal', color: '#818cf8' },
      { id: 4, pos: [0.0, 2.7, -1.4] as [number, number, number], name: 'Edge Mesh APAC', color: '#00e5ff' },
      { id: 5, pos: [-0.5, -2.6, 1.5] as [number, number, number], name: 'eBPF Enclave', color: '#34d399' },
    ],
    []
  );

  // Generate data line connection pairs between nodes and center
  const linePairs = useMemo(() => {
    const lines: [ [number, number, number], [number, number, number] ][] = [];
    nodes.forEach((node) => {
      // Connect each node to origin (cloud core)
      lines.push([[0, 0, 0], node.pos]);
    });
    // Inter-node telemetry bridges
    lines.push([nodes[0].pos, nodes[4].pos]);
    lines.push([nodes[1].pos, nodes[3].pos]);
    lines.push([nodes[2].pos, nodes[5].pos]);
    lines.push([nodes[0].pos, nodes[2].pos]);
    return lines;
  }, [nodes]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (nodesGroupRef.current) {
      nodesGroupRef.current.rotation.y = t * 0.08;
    }
  });

  return (
    <group ref={nodesGroupRef}>
      {/* Laser Connectivity Lines */}
      {linePairs.map((pair, index) => (
        <Line
          key={index}
          points={pair}
          color="#00e5ff"
          lineWidth={1.2}
          transparent
          opacity={0.35}
        />
      ))}

      {/* Network Nodes */}
      {nodes.map((node) => {
        const isActive = activeNode === node.id;
        return (
          <group
            key={node.id}
            position={node.pos}
            onPointerOver={() => setActiveNode(node.id)}
            onPointerOut={() => setActiveNode(null)}
          >
            {/* Outer Glowing Beacon Pulse */}
            <mesh>
              <sphereGeometry args={[isActive ? 0.32 : 0.22, 16, 16]} />
              <meshBasicMaterial
                color={node.color}
                transparent
                opacity={isActive ? 0.65 : 0.3}
                wireframe
              />
            </mesh>

            {/* Inner Solid Node */}
            <mesh>
              <sphereGeometry args={[0.14, 16, 16]} />
              <meshStandardMaterial
                color="#ffffff"
                emissive={node.color}
                emissiveIntensity={isActive ? 3.0 : 1.8}
                roughness={0.1}
                metalness={0.9}
              />
            </mesh>

            {/* Orbiting Mini Data Ring around node */}
            <Torus args={[0.26, 0.015, 12, 32]} rotation={[Math.PI / 2, 0, 0]}>
              <meshBasicMaterial color={node.color} transparent opacity={0.7} />
            </Torus>
          </group>
        );
      })}
    </group>
  );
};

// 3. Interactive Mouse Parallax & Scene Rig
const SceneRig: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const rigRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!rigRef.current) return;
    // Smooth lerp mouse parallax
    const targetX = (state.pointer.x * Math.PI) / 6;
    const targetY = (-state.pointer.y * Math.PI) / 8;

    rigRef.current.rotation.y = THREE.MathUtils.damp(rigRef.current.rotation.y, targetX, 3.5, delta);
    rigRef.current.rotation.x = THREE.MathUtils.damp(rigRef.current.rotation.x, targetY, 3.5, delta);

    // Subtle breathing float
    const t = state.clock.getElapsedTime();
    rigRef.current.position.y = Math.sin(t * 1.2) * 0.12;
  });

  return <group ref={rigRef}>{children}</group>;
};

// 4. Main Exported R3F Scene Component
export const R3FScene: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[480px] lg:min-h-[580px] relative pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 7.8], fov: 48 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.15,
        }}
        dpr={[1, 2]}
      >
        {/* Volumetric Lights */}
        <ambientLight intensity={1.8} color="#0a192f" />
        <pointLight position={[5, 6, 5]} intensity={4.5} color="#00e5ff" distance={25} />
        <pointLight position={[-5, -4, 4]} intensity={3.5} color="#2dd4bf" distance={20} />
        <pointLight position={[0, 0, -4]} intensity={2.5} color="#818cf8" distance={15} />
        <directionalLight position={[0, 8, 3]} intensity={2.0} color="#ffffff" />

        {/* Ambient Floating Cyber Dust Particles */}
        <Sparkles
          count={90}
          scale={9}
          size={3.2}
          speed={0.4}
          opacity={0.7}
          color="#00e5ff"
        />
        <Sparkles
          count={50}
          scale={7}
          size={2.5}
          speed={0.3}
          opacity={0.6}
          color="#2dd4bf"
        />

        {/* Parallax Rigged Assembly */}
        <SceneRig>
          <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.4}>
            <HolographicCloud />
            <NetworkMeshNodes />
          </Float>
        </SceneRig>
      </Canvas>
    </div>
  );
};

export default R3FScene;
