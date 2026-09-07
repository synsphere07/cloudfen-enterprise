import * as THREE from 'three';

export class CloudFen3DLogo {
  constructor(containerElement) {
    this.container = containerElement;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.emblemGroup = null;
    this.particles = null;
    this.ringOuter = null;
    this.ringInner = null;
    this.satellites = [];
    this.coreMesh = null;
    this.clock = new THREE.Clock();
    this.mouseX = 0;
    this.mouseY = 0;
    this.targetMouseX = 0;
    this.targetMouseY = 0;
    this.animationFrameId = null;
    this.isDestroyed = false;

    this.init();
  }

  init() {
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || 600;

    // 1. Scene setup
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x030712, 0.0018);

    // 2. Camera setup
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.camera.position.set(0, 0, 18);

    // 3. Renderer setup
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.25;

    this.container.appendChild(this.renderer.domElement);

    // 4. Lighting
    this.setupLighting();

    // 5. Build 3D Emblem and Particles
    this.buildEmblem();
    this.buildParticleField();

    // 6. Event listeners
    this.onResize = this.onResize.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);

    window.addEventListener('resize', this.onResize);
    window.addEventListener('mousemove', this.onMouseMove);

    // 7. Start Animation Loop
    this.animate = this.animate.bind(this);
    this.animate();
  }

  setupLighting() {
    // Ambient fill
    const ambientLight = new THREE.AmbientLight(0x0a192f, 2.5);
    this.scene.add(ambientLight);

    // Cyan Key Light
    const cyanLight = new THREE.PointLight(0x00e5ff, 8, 40);
    cyanLight.position.set(10, 8, 12);
    this.scene.add(cyanLight);

    // Teal Fill Light
    const tealLight = new THREE.PointLight(0x4fd1c5, 6, 35);
    tealLight.position.set(-12, -6, 10);
    this.scene.add(tealLight);

    // Electric Indigo Rim Light
    const indigoLight = new THREE.PointLight(0x818cf8, 9, 50);
    indigoLight.position.set(0, 15, -10);
    this.scene.add(indigoLight);
  }

  buildEmblem() {
    this.emblemGroup = new THREE.Group();

    // Core Glowing Sphere (CloudFen Nucleus)
    const coreGeo = new THREE.SphereGeometry(1.6, 64, 64);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x00e5ff,
      emissive: 0x0088aa,
      emissiveIntensity: 0.85,
      roughness: 0.15,
      metalness: 0.9,
      wireframe: false
    });
    this.coreMesh = new THREE.Mesh(coreGeo, coreMat);
    this.emblemGroup.add(this.coreMesh);

    // Inner Wireframe Energy Shield
    const innerWireGeo = new THREE.IcosahedronGeometry(2.1, 2);
    const innerWireMat = new THREE.MeshBasicMaterial({
      color: 0x4fd1c5,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    this.innerWire = new THREE.Mesh(innerWireGeo, innerWireMat);
    this.emblemGroup.add(this.innerWire);

    // Outer Primary Torus Ring (Precision Polished Chrome)
    const ringOuterGeo = new THREE.TorusGeometry(3.6, 0.14, 32, 120);
    const ringOuterMat = new THREE.MeshStandardMaterial({
      color: 0x00e5ff,
      emissive: 0x0284c7,
      emissiveIntensity: 0.4,
      metalness: 0.95,
      roughness: 0.1
    });
    this.ringOuter = new THREE.Mesh(ringOuterGeo, ringOuterMat);
    this.ringOuter.rotation.x = Math.PI / 3;
    this.emblemGroup.add(this.ringOuter);

    // Middle Angled Torus Ring (Electric Indigo)
    const ringMiddleGeo = new THREE.TorusGeometry(4.6, 0.09, 32, 120);
    const ringMiddleMat = new THREE.MeshStandardMaterial({
      color: 0x818cf8,
      emissive: 0x4338ca,
      emissiveIntensity: 0.5,
      metalness: 0.9,
      roughness: 0.2
    });
    this.ringMiddle = new THREE.Mesh(ringMiddleGeo, ringMiddleMat);
    this.ringMiddle.rotation.x = -Math.PI / 4;
    this.ringMiddle.rotation.y = Math.PI / 6;
    this.emblemGroup.add(this.ringMiddle);

    // Outer Orbital Track with Multi-Cloud Satellites
    const satelliteCount = 12;
    const satGroup = new THREE.Group();
    const satGeo = new THREE.SphereGeometry(0.18, 16, 16);
    const satMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x00e5ff,
      emissiveIntensity: 1.2,
      metalness: 0.8,
      roughness: 0.1
    });

    for (let i = 0; i < satelliteCount; i++) {
      const angle = (i / satelliteCount) * Math.PI * 2;
      const radius = 3.6;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      const satMesh = new THREE.Mesh(satGeo, satMat);
      satMesh.position.set(x, y, 0);
      satGroup.add(satMesh);
      this.satellites.push({ mesh: satMesh, angle, radius });
    }

    this.satGroup = satGroup;
    this.ringOuter.add(satGroup);

    // Hexagonal Boundary Ring (Infrastructure Mesh)
    const hexGeo = new THREE.RingGeometry(5.4, 5.46, 6);
    const hexMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4
    });
    this.hexMesh = new THREE.Mesh(hexGeo, hexMat);
    this.emblemGroup.add(this.hexMesh);

    this.scene.add(this.emblemGroup);
  }

  buildParticleField() {
    const particleCount = 1400;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x00e5ff);
    const tealColor = new THREE.Color(0x4fd1c5);
    const blueColor = new THREE.Color(0x38bdf8);
    const indigoColor = new THREE.Color(0x818cf8);

    for (let i = 0; i < particleCount; i++) {
      // Cylindrical / spherical cloud spread
      const radius = 6 + Math.random() * 24;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      positions[i * 3] = radius * Math.cos(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi);
      positions[i * 3 + 2] = radius * Math.cos(phi) * Math.sin(theta);

      // Color variation
      let pickedColor = cyanColor;
      const rand = Math.random();
      if (rand < 0.35) pickedColor = cyanColor;
      else if (rand < 0.65) pickedColor = tealColor;
      else if (rand < 0.85) pickedColor = blueColor;
      else pickedColor = indigoColor;

      colors[i * 3] = pickedColor.r;
      colors[i * 3 + 1] = pickedColor.g;
      colors[i * 3 + 2] = pickedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Material
    const material = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  onMouseMove(e) {
    // Normalized device coordinates (-1 to 1)
    this.targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    this.targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  }

  onResize() {
    if (!this.container || this.isDestroyed) return;
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || 600;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  animate() {
    if (this.isDestroyed) return;

    this.animationFrameId = requestAnimationFrame(this.animate);

    const elapsedTime = this.clock.getElapsedTime();

    // Damped Mouse Parallax
    this.mouseX += (this.targetMouseX - this.mouseX) * 0.05;
    this.mouseY += (this.targetMouseY - this.mouseY) * 0.05;

    // Rotate Emblem Elements
    if (this.emblemGroup) {
      this.emblemGroup.rotation.y = elapsedTime * 0.2 + this.mouseX * 0.6;
      this.emblemGroup.rotation.x = Math.sin(elapsedTime * 0.3) * 0.15 - this.mouseY * 0.4;
      this.emblemGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.25;
    }

    if (this.ringOuter) {
      this.ringOuter.rotation.z = elapsedTime * 0.4;
    }

    if (this.ringMiddle) {
      this.ringMiddle.rotation.z = -elapsedTime * 0.3;
      this.ringMiddle.rotation.y = Math.PI / 6 + Math.sin(elapsedTime * 0.5) * 0.2;
    }

    if (this.innerWire) {
      this.innerWire.rotation.x = elapsedTime * 0.5;
      this.innerWire.rotation.y = -elapsedTime * 0.6;
    }

    if (this.coreMesh) {
      const pulse = 1 + Math.sin(elapsedTime * 2.5) * 0.04;
      this.coreMesh.scale.set(pulse, pulse, pulse);
    }

    if (this.hexMesh) {
      this.hexMesh.rotation.z = -elapsedTime * 0.1;
    }

    // Slowly Rotate Particle Galaxy
    if (this.particles) {
      this.particles.rotation.y = elapsedTime * 0.03;
      this.particles.rotation.x = Math.sin(elapsedTime * 0.02) * 0.1;
    }

    this.renderer.render(this.scene, this.camera);
  }

  destroy() {
    this.isDestroyed = true;
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('mousemove', this.onMouseMove);

    if (this.renderer && this.renderer.domElement) {
      this.container.removeChild(this.renderer.domElement);
      this.renderer.dispose();
    }
  }
}
