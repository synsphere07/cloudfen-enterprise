import {
  HeartPulse,
  Landmark,
  ShoppingBag,
  Radio,
  Factory,
  ShieldCheck,
  Zap,
  Activity,
  Cpu,
  BarChart3,
  Lock,
  Globe,
  Truck,
  LucideIcon,
} from 'lucide-react';

export interface IndustryStep {
  number: string;
  title: string;
  description: string;
}

export interface IndustryDeliverable {
  title: string;
  desc: string;
}

export interface IndustryStat {
  value: string;
  label: string;
}

export interface IndustryItem {
  id: string;
  slug: string;
  title: string;
  fullTitle: string;
  subtitle: string;
  breadcrumb: string;
  shortDescription: string;
  paragraphs: string[];
  icon: LucideIcon;
  tag: string;
  img1: string;
  img2: string;
  img3?: string;
  img4?: string;
  alt1: string;
  alt2: string;
  alt3?: string;
  alt4?: string;
  badge1: string;
  badge2: string;
  badge3?: string;
  badge4?: string;
  stats: IndustryStat[];
  ctaLabel: string;
  methodologyTitle: string;
  methodologySubtitle: string;
  methodologySteps: IndustryStep[];
  deliverablesTitle: string;
  deliverablesSubtitle?: string;
  deliverables: IndustryDeliverable[];
  techStack: string[];
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'healthcare',
    slug: 'healthcare',
    title: 'HEALTHCARE',
    fullTitle: 'HEALTHCARE & LIFE SCIENCES',
    subtitle: 'HIPAA-Compliant Digital Health Platforms, EHR Integration & Clinical Telemetry',
    breadcrumb: 'Home / Industries / Healthcare',
    shortDescription:
      'Cloudfen emphasizes understanding customer requirements. We help healthcare organizations pursue opportunities beyond boundaries through highly skilled engineers and sound technical knowledge in advanced software tools, frameworks, and technologies.',
    paragraphs: [
      'Cloudfen emphasizes in understanding customer requirements. We help people pursue oppurtunities beyond boundaries is through highly skilled engineers.',
      'Sound techninal knowledge and expertise in advanced software tools,frame works and technologies are our strength for reliable engagement.',
      'The modern healthcare ecosystem demands unbreakable data security, sub-second clinical responsiveness, and seamless interoperability across legacy electronic health records (EHR/EMR), diagnostic systems, and connected patient monitors.',
      'CloudFen engineers enterprise healthcare solutions that bridge regulatory compliance (HIPAA, HITRUST, GDPR) with bleeding-edge cloud innovation—enabling automated diagnostic workflows, secure FHIR/HL7 data streaming, medical imaging PACS storage, and scalable telehealth platforms.',
    ],
    icon: HeartPulse,
    tag: 'HIPAA & HITRUST Certified Healthcare Engineering',
    img1: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85',
    img2: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85',
    img3: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=85',
    img4: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85',
    alt1: 'Modern hospital medical hallway and healthcare clinical facility',
    alt2: 'Healthcare professional analyzing real-time patient diagnostics and telemetry',
    alt3: 'Modern surgical operating suite and integrated medical systems',
    alt4: 'Biomedical laboratory research and clinical informatics computing',
    badge1: 'HIPAA & HL7/FHIR Compliance',
    badge2: 'Real-Time Clinical Telemetry',
    badge3: 'Intelligent Surgical & PACS Systems',
    badge4: 'Biomedical Informatics & Research',
    stats: [
      { value: '100%', label: 'HIPAA & HITRUST Compliance' },
      { value: '< 250ms', label: 'Clinical Telemetry Latency' },
      { value: '99.999%', label: 'Critical Care SLA Uptime' },
    ],
    ctaLabel: 'Consult Healthcare Architects',
    methodologyTitle: 'Healthcare Digital Transformation Lifecycle',
    methodologySubtitle: 'A structured, audit-ready framework designed for zero clinical disruption',
    methodologySteps: [
      {
        number: '01',
        title: 'Regulatory & EHR Audit',
        description:
          'Deep architectural audit of clinical workflows, PHI data boundaries, HIPAA safeguards, and legacy EMR interfaces (Epic, Cerner, Allscripts).',
      },
      {
        number: '02',
        title: 'FHIR / HL7 Interoperability',
        description:
          'Design of encrypted microservices, FHIR API endpoints, and event-driven clinical pipelines with end-to-end TLS 1.3 encryption.',
      },
      {
        number: '03',
        title: 'Clinical Data Modernization',
        description:
          'Migration of PACS medical imaging, diagnostic repositories, and lab data to scalable, high-throughput cloud storage with automated disaster recovery.',
      },
      {
        number: '04',
        title: 'Continuous Compliance & 24/7 Ops',
        description:
          'Automated vulnerability scanning, HITRUST posture enforcement, and 24/7 NOC/SOC telemetry for critical patient care infrastructure.',
      },
    ],
    deliverablesTitle: 'Healthcare Solutions & Enterprise Systems We Build',
    deliverablesSubtitle: 'Mission-critical clinical software, compliant data mesh, and telehealth portals',
    deliverables: [
      {
        title: 'Interoperable EHR/EMR Integrations',
        desc: 'Seamless bidirectional FHIR/HL7 integration with Epic, Cerner, AthenaHealth, and proprietary clinical systems.',
      },
      {
        title: 'HIPAA-Compliant Cloud Infrastructure',
        desc: 'Isolated VPC architectures with hardened encryption at rest (AES-256) and in transit for all PHI/PII data.',
      },
      {
        title: 'IoMT & Remote Patient Monitoring',
        desc: 'Real-time telemetry ingestion pipelines for medical wearables, smart bedside monitors, and diagnostic devices.',
      },
      {
        title: 'AI Clinical Analytics & Imaging PACS',
        desc: 'DICOM imaging cloud storage, automated radiologic indexing, and predictive patient triage decision support.',
      },
      {
        title: 'Secure Telemedicine Platforms',
        desc: 'WebRTC end-to-end encrypted video consultation portals integrated with appointment booking and prescription dispatch.',
      },
      {
        title: 'Health Data Governance & Audit Logs',
        desc: 'Immutable audit trails, role-based access control (RBAC), and automated compliance reporting for regulatory bodies.',
      },
    ],
    techStack: ['FHIR / HL7', 'HIPAA', 'AWS HealthLake', 'Azure Health Data', 'DICOM / PACS', 'Epic / Cerner APIs', 'WebRTC', 'PostgreSQL (Encrypted)', 'Kubernetes'],
  },
  {
    id: 'financial-services',
    slug: 'financial-services',
    title: 'FINANCIAL SERVICES',
    fullTitle: 'FINANCIAL SERVICES & FINTECH',
    subtitle: 'High-Frequency FinTech, PCI-DSS Level 1 Banking, Algorithmic Risk & Fraud Defense',
    breadcrumb: 'Home / Industries / Financial Services',
    shortDescription:
      'Engineering ultra-low latency trading fabrics, PCI-DSS Level 1 banking cores, automated regulatory reporting (SOX/Basel III), and real-time AI fraud detection engines for global capital markets.',
    paragraphs: [
      'In financial markets, sub-millisecond execution, non-negotiable data immutability, and zero-trust security determine institutional leadership. Legacy monolithic banking systems face severe bottlenecks under modern digital transactional volume.',
      'CloudFen delivers high-concurrency fintech ecosystems, modern cloud banking engines, and event-driven transaction ledgers designed to handle millions of transactions per second with mathematical precision.',
      'We partner with tier-1 investment banks, hedge funds, retail financial institutions, and neo-fintech unicorns to modernize core banking, streamline open banking APIs, and enforce real-time fraud mitigation.',
    ],
    icon: Landmark,
    tag: 'PCI-DSS Level 1 & SOC 2 Type II Certified Financial Engineering',
    img1: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=85',
    img2: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=85',
    img3: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=85',
    img4: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=85',
    alt1: 'High-frequency financial trading trading floor and analytics',
    alt2: 'Fintech digital banking app and secure payment processing interface',
    alt3: 'Stock market ticker and financial capital investment dashboard',
    alt4: 'Global financial cybersecurity operations center and cloud defense',
    badge1: 'PCI-DSS Level 1 Security',
    badge2: 'Sub-Millisecond Settlement',
    badge3: 'AI Real-Time Fraud Defense',
    badge4: 'Zero-Trust Financial Vaults',
    stats: [
      { value: '50M+', label: 'Daily Processed Transactions' },
      { value: '< 15ms', label: 'Payment Gateway Settlement' },
      { value: '99.9999%', label: 'Ledger Data Integrity' },
    ],
    ctaLabel: 'Consult FinTech Engineers',
    methodologyTitle: 'FinTech Engineering & Capital Markets Lifecycle',
    methodologySubtitle: 'Military-grade cryptography, deterministic concurrency, and rigorous compliance',
    methodologySteps: [
      {
        number: '01',
        title: 'Threat Modeling & Compliance Audit',
        description:
          'Exhaustive security audit covering PCI-DSS Level 1, SOC 2, GLBA, ISO 27001, and financial regulatory standards.',
      },
      {
        number: '02',
        title: 'Core Ledger & Microservices Design',
        description:
          'Distributed immutable transaction ledgers, event-sourcing with Kafka/Apache Pulsar, and low-latency microservices architecture.',
      },
      {
        number: '03',
        title: 'Payment Gateway & Open Banking Integration',
        description:
          'Building high-throughput payment rails (SWIFT, ACH, SEPA, FedNow), Open Banking PSD2 APIs, and tokenized authorization vaults.',
      },
      {
        number: '04',
        title: 'AI Fraud Detection & Real-Time Monitoring',
        description:
          'Deploying machine learning risk scoring engines at wire speed to detect anomalous transactions and AML violations.',
      },
    ],
    deliverablesTitle: 'Financial Solutions & Systems We Build',
    deliverablesSubtitle: 'Core banking backends, algorithmic trading conduits, and payment engines',
    deliverables: [
      {
        title: 'Next-Gen Core Banking Platforms',
        desc: 'Cloud-native multi-currency ledger systems with real-time balance calculations and automated settlement.',
      },
      {
        title: 'Payment Gateway & Checkout Rails',
        desc: 'Tokenized, PCI-compliant payment integrations supporting Apple Pay, Google Pay, card networks, and real-time bank wires.',
      },
      {
        title: 'Real-Time Fraud & AML Scoring',
        desc: 'Graph database and AI-powered anomaly detection analyzing transactions in sub-50ms for fraud prevention.',
      },
      {
        title: 'Open Banking & PSD2 API Gateways',
        desc: 'Secure developer portals with OAuth2/mTLS authentication, rate-limiting, and granular financial consent flows.',
      },
      {
        title: 'Algorithmic Trading & Analytics Conduits',
        desc: 'Ultra-low latency market data ingestors, order routing systems, and high-frequency risk calculation backends.',
      },
      {
        title: 'WealthTech & Portfolio Management',
        desc: 'Automated robo-advisory engines, portfolio rebalancing algorithms, and real-time tax-loss harvesting systems.',
      },
    ],
    techStack: ['PCI-DSS', 'Apache Kafka', 'Java / Spring Boot', 'Redis Enterprise', 'Snowflake', 'AWS Financial Cloud', 'HashiCorp Vault', 'Docker / K8s', 'mTLS / Zero-Trust'],
  },
  {
    id: 'retail',
    slug: 'retail',
    title: 'RETAIL',
    fullTitle: 'RETAIL & E-COMMERCE',
    subtitle: 'Omnichannel Digital Commerce, Real-Time Inventory & AI-Powered Personalization',
    breadcrumb: 'Home / Industries / Retail',
    shortDescription:
      'Transforming enterprise retail and global e-commerce with headless commerce architectures, sub-second product search, unified omnichannel inventory synchronization, and AI customer personalization.',
    paragraphs: [
      'Today’s retail environment demands seamless unification across physical storefronts, mobile apps, web marketplaces, and social selling channels. Peak traffic surges like Black Friday require bulletproof infrastructure elasticity.',
      'CloudFen builds high-performance headless commerce ecosystems and event-driven inventory synchronization engines that eliminate stockouts, supercharge page speeds, and maximize cart conversion rates.',
      'From global supply chain tracking to hyper-personalized AI recommendation models, we help direct-to-consumer (D2C) brands and multinational retail conglomerates achieve sustained growth.',
    ],
    icon: ShoppingBag,
    tag: 'Enterprise Headless Commerce & Omnichannel Systems',
    img1: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85',
    img2: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=1200&q=85',
    img3: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=85',
    img4: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=85',
    alt1: 'Modern retail store and high-end shopping experience',
    alt2: 'E-commerce mobile checkout and digital shopping cart interface',
    alt3: 'Automated retail logistics warehouse and fulfillment center',
    alt4: 'Point-of-sale customer checkout and omnichannel payment terminal',
    badge1: 'Headless Commerce Architecture',
    badge2: 'Real-Time Inventory Mesh',
    badge3: 'AI Personalization Engine',
    badge4: 'Omnichannel POS Integrations',
    stats: [
      { value: '10x', label: 'Black Friday Traffic Scaling' },
      { value: '< 800ms', label: 'E-Commerce Page Load Speed' },
      { value: '+34%', label: 'Average Cart Conversion Lift' },
    ],
    ctaLabel: 'Consult Retail Architects',
    methodologyTitle: 'Omnichannel Commerce Transformation Lifecycle',
    methodologySubtitle: 'A decoupled, composable strategy delivering rapid feature velocity and resilience',
    methodologySteps: [
      {
        number: '01',
        title: 'Customer Journey & Tech Stack Audit',
        description:
          'Analyzing legacy monolith bottlenecks, checkout abandonment points, ERP inventory gaps, and point-of-sale (POS) silos.',
      },
      {
        number: '02',
        title: 'Composable Headless Architecture',
        description:
          'Decoupling frontend presentation from backend commerce engines using Next.js, GraphQL, and microservice APIs.',
      },
      {
        number: '03',
        title: 'Omnichannel Inventory Streaming',
        description:
          'Integrating POS, warehouse management systems (WMS), and online storefronts with event-driven data streaming.',
      },
      {
        number: '04',
        title: 'AI Personalization & Auto-Scaling',
        description:
          'Deploying vector-search product recommendations, automated dynamic pricing, and elastic Kubernetes auto-scaling.',
      },
    ],
    deliverablesTitle: 'Retail & E-Commerce Solutions We Build',
    deliverablesSubtitle: 'Enterprise headless storefronts, inventory mesh, and customer data platforms',
    deliverables: [
      {
        title: 'Headless & Composable Storefronts',
        desc: 'Lightning-fast Next.js/React e-commerce frontends powered by Shopify Plus, commercetools, or custom backends.',
      },
      {
        title: 'Omnichannel Inventory Synchronization',
        desc: 'Sub-second stock level syncing across physical stores, distribution centers, Amazon, Walmart, and online shops.',
      },
      {
        title: 'AI Recommendation & Search Engines',
        desc: 'Natural language semantic search, visual image lookup, and personalized product ranking algorithms.',
      },
      {
        title: 'Automated POS & ERP Integrations',
        desc: 'Unified connectors linking SAP, NetSuite, Oracle, and Square/Toast POS systems into a single source of truth.',
      },
      {
        title: 'Loyalty & Customer Data Platforms (CDP)',
        desc: '360-degree customer identity resolution, multi-tier reward engines, and automated marketing trigger workflows.',
      },
      {
        title: 'Warehouse Logistics & Order Fulfillment',
        desc: 'Automated dispatch routing, carrier rate optimization, real-time package telemetry, and frictionless return portals.',
      },
    ],
    techStack: ['Next.js', 'commercetools', 'Shopify Plus', 'Elasticsearch / Algolia', 'GraphQL', 'Stripe / Adyen', 'Redis', 'Kafka', 'AWS CloudFront'],
  },
  {
    id: 'telecommunications',
    slug: 'telecommunications',
    title: 'TELECOMUNICATIONS',
    fullTitle: 'TELECOMMUNICATIONS & 5G NETWORKS',
    subtitle: '5G Edge Compute, Carrier-Grade OSS/BSS Modernization & Software-Defined Networking',
    breadcrumb: 'Home / Industries / Telecommunications',
    shortDescription:
      'Empowering telecom carriers, ISPs, and network operators with cloud-native 5G core architectures, automated OSS/BSS billing modernization, edge computing nodes, and SDN network virtualization.',
    paragraphs: [
      'The telecommunications sector is undergoing a monumental shift driven by 5G rollout, virtualization of network functions (NFV/SDN), and exploding demands for ultra-reliable low-latency communication (URLLC).',
      'CloudFen engineers carrier-grade telecom platforms, real-time subscriber mediation engines, and high-throughput network monitoring systems that process terabits of telemetry every second.',
      'We assist mobile network operators (MNOs) and multi-system operators (MSOs) in migrating legacy on-premise infrastructure to elastic, software-defined telecom clouds with automated self-healing capabilities.',
    ],
    icon: Radio,
    tag: 'Carrier-Grade 5G & Telecom Cloud Modernization',
    img1: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=85',
    img2: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85',
    img3: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85',
    img4: 'https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&w=1200&q=85',
    alt1: 'High-speed telecom data center fiber optics and 5G routers',
    alt2: 'Network operations center engineer monitoring global 5G towers',
    alt3: 'Global telecommunication satellite network mesh and connectivity',
    alt4: '5G cellular tower antennas and transmission hardware',
    badge1: '5G Core & Edge Virtualization',
    badge2: 'Carrier-Grade OSS/BSS Platforms',
    badge3: 'Zero-Touch Network Orchestration',
    badge4: 'Software-Defined SDN Routing',
    stats: [
      { value: '< 5ms', label: '5G Edge Compute Latency' },
      { value: '100 Gbps+', label: 'Throughput Pipeline Capacity' },
      { value: '99.999%', label: 'Telecom Grade Uptime' },
    ],
    ctaLabel: 'Consult Telecom Specialists',
    methodologyTitle: 'Telecom Cloud & 5G Modernization Lifecycle',
    methodologySubtitle: 'High-availability, open-standard telecom software engineering',
    methodologySteps: [
      {
        number: '01',
        title: 'Network & Topology Assessment',
        description:
          'Audit of physical routing infrastructure, MPLS/SD-WAN backbones, legacy BSS billing bottlenecks, and fiber capacity.',
      },
      {
        number: '02',
        title: 'Virtual Network Functions (VNF/CNF)',
        description:
          'Containerizing network functions on Kubernetes with SRIOV and DPDK for bare-metal packet processing speeds.',
      },
      {
        number: '03',
        title: '5G Edge Compute & Microservices',
        description:
          'Deploying distributed Multi-Access Edge Computing (MEC) clusters close to cell towers for ultra-low latency applications.',
      },
      {
        number: '04',
        title: 'AI AIOps & Autonomous Self-Healing',
        description:
          'Implementing predictive anomaly detection that automatically re-routes traffic during fiber cuts or equipment degradation.',
      },
    ],
    deliverablesTitle: 'Telecom Solutions & Carrier Systems We Build',
    deliverablesSubtitle: '5G core services, real-time subscriber billing, and network telemetry',
    deliverables: [
      {
        title: 'Cloud-Native 5G Core Architecture',
        desc: 'Microservice-based 5G core control planes (AMF, SMF, UPF) optimized for carrier-grade throughput and elasticity.',
      },
      {
        title: 'Modernized OSS / BSS Platforms',
        desc: 'Sub-second rating, real-time charging systems (OCS), automated customer eSIM provisioning, and invoice generation.',
      },
      {
        title: 'Multi-Access Edge Computing (MEC)',
        desc: 'Edge Kubernetes nodes delivering localized compute for autonomous vehicles, industrial IoT, and AR/VR gaming.',
      },
      {
        title: 'Software-Defined Networking (SDN)',
        desc: 'Centralized SDN controllers enabling dynamic traffic engineering, automated bandwidth-on-demand, and network slicing.',
      },
      {
        title: 'Network Telemetry & NOC Observability',
        desc: 'Streaming telemetry pipelines processing billions of NetFlow/sFlow/IPFIX logs per second with Grafana dashboards.',
      },
      {
        title: 'VoLTE & SIP Trunking Systems',
        desc: 'Carrier-grade Session Border Controllers (SBC), SIP routing, and high-definition voice and video transcoding backends.',
      },
    ],
    techStack: ['OpenRAN / 5G Core', 'Cisco / Juniper SDN', 'eBPF / DPDK', 'Kafka / Flink', 'Kubernetes / OpenShift', 'TIBCO EMS', 'PostgreSQL', 'Golang', 'Docker'],
  },
  {
    id: 'manufacturing',
    slug: 'manufacturing',
    title: 'MANUFACTURING',
    fullTitle: 'MANUFACTURING & INDUSTRY 4.0',
    subtitle: 'Smart Factories, IIoT Telemetry, Predictive Maintenance & Digital Twin Simulation',
    breadcrumb: 'Home / Industries / Manufacturing',
    shortDescription:
      'Accelerating smart manufacturing and Industry 4.0 transformation through industrial IoT (IIoT) sensor telemetry, digital twin simulations, AI predictive maintenance, and end-to-end supply chain integration.',
    paragraphs: [
      'Modern manufacturing facilities operate under relentless pressure to optimize Overall Equipment Effectiveness (OEE), eliminate unplanned machine downtime, and maintain tight traceability across complex global supply chains.',
      'CloudFen develops industrial-grade software architectures connecting SCADA, PLC, and MES shop-floor machinery directly with enterprise ERP systems and cloud analytics platforms in real time.',
      'By harnessing digital twins, edge AI computer vision for automated quality inspection, and predictive maintenance algorithms, we help manufacturers transform traditional factories into autonomous smart production hubs.',
    ],
    icon: Factory,
    tag: 'Industry 4.0 Smart Factory & IIoT Architectures',
    img1: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85',
    img2: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85',
    img3: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1200&q=85',
    img4: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=85',
    alt1: 'High-tech automated manufacturing robotic arms and smart factory',
    alt2: 'Industrial engineer inspecting precision machinery and telemetry sensors',
    alt3: 'Smart factory production line and autonomous assembly systems',
    alt4: 'Precision CNC machining and digital twin industrial diagnostics',
    badge1: 'Industry 4.0 IIoT Architecture',
    badge2: 'Predictive Machine Maintenance',
    badge3: 'Digital Twin & Smart MES',
    badge4: 'Automated Quality Vision',
    stats: [
      { value: '-42%', label: 'Unplanned Machine Downtime' },
      { value: '99.8%', label: 'Quality Inspection Accuracy' },
      { value: '+28%', label: 'Overall Equipment Effectiveness' },
    ],
    ctaLabel: 'Consult Industry 4.0 Engineers',
    methodologyTitle: 'Industry 4.0 Smart Manufacturing Lifecycle',
    methodologySubtitle: 'Bridging OT (Operational Technology) with IT (Information Technology) safely',
    methodologySteps: [
      {
        number: '01',
        title: 'OT/IT Convergence & Shop Floor Audit',
        description:
          'Assessing existing PLC/SCADA industrial protocols (OPC UA, Modbus, MQTT), legacy MES systems, and network isolation.',
      },
      {
        number: '02',
        title: 'Secure Industrial Edge Deployment',
        description:
          'Deploying hardened edge computing gateways that aggregate sensor telemetry with sub-millisecond local processing.',
      },
      {
        number: '03',
        title: 'ERP & MES Integration Bridge',
        description:
          'Creating bidirectional data pipelines linking SAP S/4HANA, Oracle ERP, and shop-floor manufacturing execution systems.',
      },
      {
        number: '04',
        title: 'Digital Twins & Predictive AI Ops',
        description:
          'Simulating assembly line dynamics in real-time digital twins and training vibration/thermal anomaly models for maintenance.',
      },
    ],
    deliverablesTitle: 'Manufacturing & Industrial Solutions We Build',
    deliverablesSubtitle: 'Smart factory MES platforms, digital twins, and automated quality control',
    deliverables: [
      {
        title: 'Industrial IoT (IIoT) Ingestion Fabric',
        desc: 'High-throughput MQTT/OPC-UA telemetry streaming aggregating data from thousands of vibration, thermal, and pressure sensors.',
      },
      {
        title: 'AI Predictive Maintenance Engines',
        desc: 'Machine learning vibration/thermal models detecting bearing wear and overheating hours before catastrophic hardware failure.',
      },
      {
        title: 'Real-Time Digital Twin Simulations',
        desc: '3D virtual factory representations streaming live operational state for bottleneck analysis and remote operator assistance.',
      },
      {
        title: 'Automated Computer Vision QA',
        desc: 'High-speed edge camera systems inspecting assembly tolerances and surface flaws with sub-millimeter precision.',
      },
      {
        title: 'SAP & MES Bi-Directional Integration',
        desc: 'Automated raw material requisition, bill-of-materials (BOM) syncing, and real-time finished goods ERP entry.',
      },
      {
        title: 'Supply Chain Traceability & RFID',
        desc: 'End-to-end serialized barcode and RFID tracking from raw material supplier intake to customer doorstep delivery.',
      },
    ],
    techStack: ['OPC-UA / MQTT', 'AWS IoT SiteWise', 'Azure IoT Hub', 'SAP S/4HANA', 'Python / TensorFlow', 'InfluxDB', 'Grafana', 'Docker / Edge K8s', 'Apache Spark'],
  },
];

export function getIndustryBySlug(slug: string): IndustryItem | undefined {
  return INDUSTRIES_DATA.find((item) => item.slug === slug);
}
