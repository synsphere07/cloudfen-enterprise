'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      console.warn('WebGL not supported or context lost');
      return;
    }

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 600;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 9.5);

    // Dynamic Mouse Tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      mouse.targetX = (x - 0.5) * 2;
      mouse.targetY = -(y - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Root Assembly Group
    const emblemGroup = new THREE.Group();
    scene.add(emblemGroup);

    // 1. Core Nucleus (Glowing Plasma Core)
    const nucleusGeo = new THREE.IcosahedronGeometry(1.2, 3);
    const nucleusMat = new THREE.MeshPhysicalMaterial({
      color: 0x00e5ff,
      emissive: 0x0088aa,
      emissiveIntensity: 0.8,
      roughness: 0.15,
      metalness: 0.9,
      transmission: 0.3,
      transparent: true,
      opacity: 0.92,
      wireframe: false,
    });
    const nucleus = new THREE.Mesh(nucleusGeo, nucleusMat);
    emblemGroup.add(nucleus);

    // Wireframe Outer Cage for Nucleus
    const cageGeo = new THREE.IcosahedronGeometry(1.35, 1);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const cage = new THREE.Mesh(cageGeo, cageMat);
    emblemGroup.add(cage);

    // 2. Primary Metallic Orbital Torus
    const torus1Geo = new THREE.TorusGeometry(2.3, 0.07, 24, 120);
    const torus1Mat = new THREE.MeshStandardMaterial({
      color: 0x00e5ff,
      emissive: 0x003344,
      metalness: 0.95,
      roughness: 0.1,
    });
    const torus1 = new THREE.Mesh(torus1Geo, torus1Mat);
    torus1.rotation.x = Math.PI / 3;
    torus1.rotation.y = Math.PI / 6;
    emblemGroup.add(torus1);

    // 3. Secondary Metallic Orbital Torus (Counter-Tilted)
    const torus2Geo = new THREE.TorusGeometry(3.0, 0.05, 20, 120);
    const torus2Mat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x083344,
      metalness: 0.9,
      roughness: 0.15,
    });
    const torus2 = new THREE.Mesh(torus2Geo, torus2Mat);
    torus2.rotation.x = -Math.PI / 3.5;
    torus2.rotation.y = -Math.PI / 4;
    emblemGroup.add(torus2);

    // 4. Orbiting Satellite Nodes
    const satelliteCount = 5;
    const satellites: THREE.Mesh[] = [];
    const satelliteGeo = new THREE.SphereGeometry(0.16, 16, 16);
    const satelliteMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x00e5ff,
      emissiveIntensity: 1.5,
      roughness: 0.1,
      metalness: 0.9,
    });

    for (let i = 0; i < satelliteCount; i++) {
      const sat = new THREE.Mesh(satelliteGeo, satelliteMat);
      satellites.push(sat);
      emblemGroup.add(sat);
    }

    // 5. Surrounding Particle Constellation
    const particleCount = 1200;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x00e5ff);
    const whiteColor = new THREE.Color(0xffffff);
    const blueColor = new THREE.Color(0x38bdf8);

    for (let i = 0; i < particleCount; i++) {
      const radius = 3.5 + Math.random() * 8.0;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const chosenColor = Math.random() > 0.6 ? cyanColor : Math.random() > 0.3 ? blueColor : whiteColor;
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particleField = new THREE.Points(particleGeo, particleMat);
    scene.add(particleField);

    // 6. Volumetric Lighting Setup
    const ambientLight = new THREE.AmbientLight(0x081628, 2.5);
    scene.add(ambientLight);

    const mainLight = new THREE.PointLight(0x00e5ff, 4, 30);
    mainLight.position.set(4, 5, 5);
    scene.add(mainLight);

    const rimLight = new THREE.PointLight(0x818cf8, 3, 25);
    rimLight.position.set(-5, -4, 4);
    scene.add(rimLight);

    const backGlow = new THREE.PointLight(0x00e5ff, 2.5, 20);
    backGlow.position.set(0, 0, -3);
    scene.add(backGlow);

    // 7. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Group rotation & parallax damping
      emblemGroup.rotation.y = elapsedTime * 0.35 + mouse.x * 0.5;
      emblemGroup.rotation.x = Math.sin(elapsedTime * 0.25) * 0.15 + mouse.y * 0.4;

      // Pulse core nucleus
      const pulse = 1 + Math.sin(elapsedTime * 2.5) * 0.05;
      nucleus.scale.set(pulse, pulse, pulse);
      cage.rotation.y = -elapsedTime * 0.5;
      cage.rotation.z = elapsedTime * 0.3;

      // Spin toruses
      torus1.rotation.z = elapsedTime * 0.6;
      torus2.rotation.z = -elapsedTime * 0.4;

      // Orbit satellites around rings
      satellites.forEach((sat, index) => {
        const offset = (index * Math.PI * 2) / satelliteCount;
        const speed = elapsedTime * 1.2 + offset;
        const orbitRadius = 2.3;
        sat.position.x = Math.cos(speed) * orbitRadius;
        sat.position.y = Math.sin(speed) * (orbitRadius * 0.7);
        sat.position.z = Math.sin(speed * 1.5) * 0.8;
      });

      // Slowly rotate particle field
      particleField.rotation.y = elapsedTime * 0.04;
      particleField.rotation.x = Math.cos(elapsedTime * 0.05) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // 8. Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[480px] lg:min-h-[580px] flex items-center justify-center pointer-events-auto"
      aria-label="3D Interactive CloudFen Control Plane Emblem"
    />
  );
};

export default ThreeScene;
