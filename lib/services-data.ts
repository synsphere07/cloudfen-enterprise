import {
  Users,
  Code2,
  Headphones,
  Network,
  UserCheck,
  Building,
  type LucideIcon,
} from 'lucide-react';

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  fullTitle: string;
  subtitle: string;
  breadcrumb: string;
  shortDescription: string;
  description: string;
  paragraphs?: string[];
  heroImage: string;
  img1: string;
  img2: string;
  img3?: string;
  alt1: string;
  alt2: string;
  alt3?: string;
  badge1: string;
  badge2: string;
  badge3?: string;
  icon: LucideIcon;
  tag: string;
  stats: { label: string; value: string }[];
  methodologyTitle: string;
  methodologySubtitle: string;
  methodologySteps: {
    number: string;
    title: string;
    description: string;
  }[];
  deliverablesTitle: string;
  deliverablesSubtitle?: string;
  deliverables: {
    title: string;
    desc: string;
  }[];
  techStack: string[];
  ctaLabel: string;
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'it-staffing',
    slug: 'it-staffing',
    title: 'IT STAFFING',
    fullTitle: 'INFORMATION TECHNOLOGY STAFFING',
    subtitle: 'Strategic IT Talent Augmentation & Technology Consulting',
    breadcrumb: 'Home / Services / IT STAFFING',
    shortDescription:
      'CloudFen ensures in finding the right talent for the assigned task. Quality is our priority for helping employers find the required staff with thorough screening.',
    description:
      'CloudFen ensures in finding the right talent for the assigned task. Quality is our priority for helping the employers finds the required staff for completing a project. A detailed background check, testing and screening is conducted for every candidate we place for your organization.',
    paragraphs: [
      'CloudFen ensures in finding the right talent for the assigned task. Quality is our priority for helping the employers finds the required staff for completing a project.',
      'A detailed background check, testing and screening is conducted for every candidate we place for your organization to ensure unmatched delivery standards and project success.',
    ],
    heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=85',
    img1: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85',
    img2: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=85',
    img3: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=85',
    alt1: 'Software engineers collaborating at workstation in modern office',
    alt2: 'Technical screening and engineering team consultation',
    alt3: 'Engineering leadership and senior architect code review',
    badge1: 'Dedicated Talent Pods',
    badge2: 'Enterprise Screening Center',
    badge3: '99.2% Placement Match Rate',
    icon: Users,
    tag: 'CONSULTING & TALENT',
    stats: [
      { label: 'Vetted Engineers', value: '10,000+' },
      { label: 'Matching Turnaround', value: '48 Hours' },
      { label: 'Retention Rate', value: '98.4%' },
    ],
    methodologyTitle: '4-STAGE PRECISION TECHNICAL SCREENING METHODOLOGY',
    methodologySubtitle: 'How CloudFen ensures flawless candidate matching, verification, and performance readiness.',
    methodologySteps: [
      {
        number: '01',
        title: 'Technical Architecture Assessment',
        description: 'Multi-tier live coding, system design reviews, and architectural problem-solving led by Principal Solution Architects.',
      },
      {
        number: '02',
        title: 'Background & Security Screening',
        description: 'Comprehensive background checks, verified employment records, certifications, security clearances, and client references.',
      },
      {
        number: '03',
        title: 'Project-Specific Skill Matching',
        description: 'Precision alignment with your tech stack, Agile/Scrum delivery cadences, team dynamics, and domain compliance rules.',
      },
      {
        number: '04',
        title: '48-Hour Matching & Onboarding SLA',
        description: 'Fast-track candidate shortlisting within 48 hours, with dedicated account managers and trial onboarding guarantees.',
      },
    ],
    deliverablesTitle: 'Specialized Engineering Talent We Deliver',
    deliverablesSubtitle: 'Pre-vetted, high-performing technical specialists ready to integrate into your existing sprint cycles:',
    deliverables: [
      { title: 'Cloud Architects', desc: 'AWS, Azure, Google Cloud, Terraform, Kubernetes' },
      { title: 'Full-Stack Developers', desc: 'React, Next.js, Node.js, Python, Go, Java' },
      { title: 'DevOps & SRE Engineers', desc: 'CI/CD Pipelines, Datadog, Prometheus, eBPF' },
      { title: 'Data & AI/ML Specialists', desc: 'Snowflake, Databricks, PyTorch, Kafka' },
      { title: 'Cybersecurity Analysts', desc: 'Zero-Trust, SOC2, SIEM, Penetration Testing' },
      { title: 'Technical PMs & Scrums', desc: 'Agile Delivery, JIRA, Scaled Agile (SAFe)' },
    ],
    techStack: ['AWS', 'React', 'Python', 'Java', 'Golang', 'Kubernetes', 'Azure', 'Snowflake'],
    ctaLabel: 'Request IT Staffing Consultation',
  },
  {
    id: 'product-development',
    slug: 'product-development',
    title: 'PRODUCT DEVELOPMENT',
    fullTitle: 'PRODUCT DEVELOPMENT',
    subtitle: 'End-to-End Application Engineering, Conceptualization & Digital Products',
    breadcrumb: 'Home / Services / Product Development',
    shortDescription:
      'We follow a series of steps that includes conceptualization, design, and development to cultivate, maintain and increase market share.',
    description:
      "We during the development process follow the series of steps that includes the conceptualization, design, development of the product.The objective of product development is to cultivate, maintain and increase a company's market share by satisfying a consumer demand.",
    paragraphs: [
      "We during the development process follow the series of steps that includes the conceptualization, design, development of the product.",
      "The objective of product development is to cultivate, maintain and increase a company's market share by satisfying a consumer demand through robust engineering and interactive platforms.",
    ],
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85',
    img1: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
    img2: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85',
    img3: 'https://images.unsplash.com/photo-1581291518655-9523c932edcf?auto=format&fit=crop&w=1200&q=85',
    alt1: 'Executive analyzing finance report and product analytics charts on digital tablet',
    alt2: 'Software development team collaborating on product engineering and architecture',
    alt3: 'Modern UI/UX design wireframes and multi-device product prototyping',
    badge1: 'Data & Analytics Driven',
    badge2: 'Full Lifecycle Engineering',
    badge3: 'Interactive UI/UX Prototyping',
    icon: Code2,
    tag: 'PRODUCT LIFECYCLE',
    stats: [
      { label: 'Products Shipped', value: '150+' },
      { label: 'Time-to-Market', value: '4.2x Faster' },
      { label: 'System Reliability', value: '99.99%' },
    ],
    methodologyTitle: 'PRODUCT DEVELOPMENT LIFECYCLE & PROCESS STEPS',
    methodologySubtitle: 'A structured, rigorous execution model from market conceptualization to high-scale deployment.',
    methodologySteps: [
      {
        number: '01',
        title: 'Conceptualization & Market Discovery',
        description: 'Feasibility studies, consumer demand analysis, business model validation, technical scoping, and MVP roadmap definition.',
      },
      {
        number: '02',
        title: 'UI/UX Architecture & Prototyping',
        description: 'Design thinking workshops, design systems, interactive wireframes, user journeys, and usability validation.',
      },
      {
        number: '03',
        title: 'Agile Full-Stack Engineering',
        description: 'Scalable microservices, clean API meshes, reactive frontend interfaces, and test-driven continuous integration sprints.',
      },
      {
        number: '04',
        title: 'QA, Market Launch & Market Cultivation',
        description: 'Automated performance testing, zero-downtime deployment, telemetry monitoring, and ongoing feature expansion.',
      },
    ],
    deliverablesTitle: 'Digital Products & Custom Solutions We Build',
    deliverablesSubtitle: 'Turn-key, high-performance digital products crafted to satisfy consumer demand and drive business valuation:',
    deliverables: [
      { title: 'SaaS & Enterprise Platforms', desc: 'Multi-tenant cloud architectures, billing systems, RBAC, and analytics' },
      { title: 'High-Performance Web Portals', desc: 'Next.js, React, serverless backends, edge caching, and dynamic UIs' },
      { title: 'Mobile Applications (iOS / Android)', desc: 'Native & cross-platform React Native / Flutter with offline sync' },
      { title: 'Microservices & API Meshes', desc: 'High-throughput REST, GraphQL, gRPC, and Kafka event pipelines' },
      { title: 'BI Dashboards & Analytics Engines', desc: 'Real-time telemetry, predictive reporting, and financial dashboards' },
      { title: 'Legacy Modernization & Cloud Replatforming', desc: 'Monolith-to-microservices, containerization, and zero-downtime cutover' },
    ],
    techStack: ['Next.js 16', 'React 19', 'TypeScript', 'Node.js', 'Python', 'Go', 'PostgreSQL', 'Kafka', 'Docker', 'AWS'],
    ctaLabel: 'Start Product Development Build',
  },
  {
    id: 'maintenance-and-support',
    slug: 'maintenance-and-support',
    title: 'MAINTENANCE AND SUPPORT',
    fullTitle: 'MAINTENANCE AND SUPPORT',
    subtitle: 'Healthy Infrastructure, Software Project Management & Continuous System Monitoring',
    breadcrumb: 'Home / Services / Maintenance and Support',
    shortDescription:
      'CloudFen make sure to help our customers to manage their software projects better. We understand the importance of the healthy infractrure to run the smooth business.',
    description:
      'CloudFen make sure to help our customers to manage their software projects better. We understand the importance of the healthy infractrure to run the smooth business. We are sucessful and have ability to produce a solid performance to continually meet and exceed overall expectations with constant monitoring and shaping of job, department, and organizational goals and objectives to ensure our success.',
    paragraphs: [
      'CloudFen make sure to help our customers to manage their software projects better. We understand the importance of the healthy infractrure to run the smooth business.',
      'We are sucessful and have ability to produce a solid performance to continually meet and exceed overall expectations with constant monitoring and shaping of job, department, and organizational goals and objectives to ensure our success.',
    ],
    heroImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=85',
    img1: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85',
    img2: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=85',
    img3: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85',
    alt1: 'Engineering team planning and architectural blueprint review with safety helmet and blueprints',
    alt2: 'High-availability infrastructure operations center with 24/7 telemetry monitoring',
    alt3: 'Server room infrastructure and high-speed network maintenance operations',
    badge1: 'Infrastructure & Project Management',
    badge2: 'Continuous Monitoring Operations',
    badge3: 'Zero-Disruption SLA',
    icon: Headphones,
    tag: 'PROJECT & SYSTEM HEALTH',
    stats: [
      { label: 'System Reliability', value: '99.99%' },
      { label: 'Incident Response', value: '< 15 Min' },
      { label: 'Expectations Met', value: '100% Exceeded' },
    ],
    methodologyTitle: '4-STAGE CONTINUOUS MONITORING & GOAL SHAPING FRAMEWORK',
    methodologySubtitle: 'How CloudFen shapes job, department, and organizational goals to ensure solid performance and seamless business operations.',
    methodologySteps: [
      {
        number: '01',
        title: 'Infrastructure Health Assessment',
        description: 'Comprehensive evaluation of existing server architectures, database health, network bottlenecks, and software dependencies.',
      },
      {
        number: '02',
        title: 'Constant Real-Time Monitoring',
        description: '24/7 automated telemetry, performance threshold alarms, uptime tracking, and real-time incident detection.',
      },
      {
        number: '03',
        title: 'Goal Shaping & Departmental Alignment',
        description: 'Aligning technical milestones with organizational objectives, SLA definitions, and proactive support escalation matrices.',
      },
      {
        number: '04',
        title: 'Continuous Optimization & Performance',
        description: 'Regular system maintenance, zero-downtime security patching, capacity planning, and post-incident preventative reviews.',
      },
    ],
    deliverablesTitle: 'Maintenance & Support Solutions We Deliver',
    deliverablesSubtitle: 'Ensuring healthy infrastructure and smooth business continuity across all software environments:',
    deliverables: [
      { title: 'Healthy Infrastructure Management', desc: 'Active monitoring, load balancing, server health, and storage rightsizing' },
      { title: 'Software Project Management Support', desc: 'Sprint tracking, release coordination, and technical milestone management' },
      { title: '24/7/365 Constant Telemetry & Monitoring', desc: 'Real-time alerting for CPU, memory, database latency, and API uptime' },
      { title: 'Goal Shaping & Performance Tracking', desc: 'Departmental KPI tracking, executive reporting, and SLA compliance audits' },
      { title: 'Preventative Maintenance & Patching', desc: 'Automated vulnerability scanning, dependency updates, and OS hardening' },
      { title: 'Disaster Recovery & Data Protection', desc: 'Regular automated backups, point-in-time recovery, and multi-region failovers' },
    ],
    techStack: ['Infrastructure Telemetry', 'Datadog', 'Prometheus', 'Grafana', 'JIRA Agile', 'PagerDuty', 'Kubernetes', 'AWS CloudWatch'],
    ctaLabel: 'Request Support & Maintenance Consultation',
  },
  {
    id: 'infrastructure',
    slug: 'infrastructure',
    title: 'INFRASTRUCTURE',
    fullTitle: 'INFRASTRUCTURE',
    subtitle: 'Customer Requirements, Boundary-Pushing Engineering & Advanced Technologies',
    breadcrumb: 'Home / Services / INFRASTRUCTURE',
    shortDescription:
      'Cloudfen emphasizes in understanding customer requirements. We help people pursue opportunties beyond boundaries is through highly skilled engineers.',
    description:
      'Cloudfen emphasizes in understanding customer requirements. We help people pursue opportunties beyond boundaries is through highly skilled engineers. Sound techninal knowledge and expertise in advanced software tools,frame works and technologies are our strength for reliable engagement.',
    paragraphs: [
      'Cloudfen emphasizes in understanding customer requirements. We help people pursue opportunties beyond boundaries is through highly skilled engineers.',
      'Sound techninal knowledge and expertise in advanced software tools,frame works and technologies are our strength for reliable engagement',
    ],
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=85',
    img1: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85',
    img2: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85',
    img3: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=85',
    alt1: 'Cloud computing infrastructure, network router, and connected multi-device ecosystem',
    alt2: 'Enterprise cloud server infrastructure and data center operations',
    alt3: 'High-speed cloud network routers and fiber optic interconnects',
    badge1: 'Cloud & Network Infrastructure',
    badge2: 'Advanced Frameworks & Tools',
    badge3: 'Reliable Enterprise Engagement',
    icon: Network,
    tag: 'CLOUD & NETWORK ARCHITECTURE',
    stats: [
      { label: 'Highly Skilled Engineers', value: '100% Certified' },
      { label: 'Reliable Engagements', value: '99.99% SLA' },
      { label: 'Advanced Tooling', value: 'Cutting-Edge' },
    ],
    methodologyTitle: '4-STAGE INFRASTRUCTURE & NETWORK ENGINEERING METHODOLOGY',
    methodologySubtitle: 'How CloudFen analyzes requirements, deploys advanced software tools, and delivers robust enterprise cloud infrastructure.',
    methodologySteps: [
      {
        number: '01',
        title: 'Customer Requirements & Scoping',
        description: 'Deep dive into organizational goals, legacy constraints, and technical specifications to architect tailored cloud infrastructure.',
      },
      {
        number: '02',
        title: 'Advanced Tooling & Framework Design',
        description: 'Leveraging sound technical knowledge to design robust network systems, cloud fabrics, and automated infrastructure frameworks.',
      },
      {
        number: '03',
        title: 'Skilled Engineering Execution',
        description: 'Seamless deployment, cloud migration, and network system upgrades led by veteran infrastructure engineers with zero business disruption.',
      },
      {
        number: '04',
        title: 'Reliable Engagement & 24/7 Governance',
        description: 'Continuous telemetry monitoring, proactive capacity scaling, security audits, and dedicated support for reliable long-term operations.',
      },
    ],
    deliverablesTitle: 'Infrastructure Solutions & Deliverables We Build',
    deliverablesSubtitle: 'Empowering enterprises with advanced software tools, resilient network systems, and boundary-pushing engineering:',
    deliverables: [
      { title: 'Cloud & Network Systems Upgrade', desc: 'Modernizing legacy network fabrics, routers, firewalls, and SD-WAN architectures' },
      { title: 'Advanced Frameworks & Tooling', desc: 'Implementing IaC, container meshes, and automated configuration management' },
      { title: 'Customer Requirement Engineering', desc: 'Custom tailored architectural roadmaps aligned with business growth milestones' },
      { title: 'Multi-Device & Cloud Connectivity', desc: 'Seamless integration across mobile, desktop workstations, edge, and cloud servers' },
      { title: 'High-Availability Server Clusters', desc: 'Zero single point of failure multi-region deployments with automated failover' },
      { title: 'Enterprise Security & SLA Governance', desc: 'End-to-end encryption, perimeter defense, and 24/7 telemetry monitoring' },
    ],
    techStack: ['Cloud Networks', 'Cisco / Juniper', 'AWS Cloud', 'Microsoft Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker', 'Linux', 'Zero Trust'],
    ctaLabel: 'Engage Infrastructure Engineers',
  },
  {
    id: 'recruitment',
    slug: 'recruitment',
    title: 'RECRUITMENT',
    fullTitle: 'RECRUITMENT',
    subtitle: 'Experienced Recruiting Staff, Unique Filtering Process & Best Talent Reach',
    breadcrumb: 'Home / Services / RECRUITMENT',
    shortDescription:
      'Finding a right talented resources is not always easy. Our experienced recruiting staff will make sure to find qualified candidates for you.',
    description:
      'Finding a right talented resources is not always easy.Our experienced recruiting staff will make sure to find qualified candidates for you. We follow unique process in filtering the candidate to find the best talents not only good in technical but also in understand the needs to reach.',
    paragraphs: [
      'Finding a right talented resources is not always easy.Our experienced recruiting staff will make sure to find qualified candidates for you.',
      'We follow unique process in filtering the candidate to find the best talents not only good in technical but also in understand the needs to reach.',
    ],
    heroImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1600&q=85',
    img1: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=85',
    img2: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=85',
    img3: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85',
    alt1: 'Experienced recruiting staff and hiring managers reviewing candidate qualifications in office conference room',
    alt2: 'Technical screening interview and live candidate assessment session',
    alt3: 'Engineering team welcoming successfully placed candidate and onboarding',
    badge1: 'Experienced Recruiting Staff',
    badge2: 'Unique Candidate Filtering',
    badge3: 'Technical & Cultural Alignment',
    icon: UserCheck,
    tag: 'PRECISION TALENT SOURCING',
    stats: [
      { label: 'Screening Accuracy', value: '99.4%' },
      { label: 'Candidate Fit Rate', value: '94.8%' },
      { label: 'Time-to-Hire', value: 'Sub-14 Days' },
    ],
    methodologyTitle: '4-STAGE UNIQUE TALENT FILTERING & RECRUITING PROCESS',
    methodologySubtitle: 'How CloudFen filters candidates to secure top talent proficient in advanced technical skills and aligned with business needs.',
    methodologySteps: [
      {
        number: '01',
        title: 'Needs Assessment & Role Calibration',
        description: 'Deep calibration on technical stack, engineering culture, seniority expectations, and client requirements to define the ideal candidate profile.',
      },
      {
        number: '02',
        title: 'Targeted Talent Sourcing & Outreach',
        description: 'Activating our experienced recruiting staff across private engineering networks, passive talent pools, and specialized tech communities.',
      },
      {
        number: '03',
        title: 'Unique Technical & Needs-Alignment Filtering',
        description: 'Rigorous vetting process evaluating not only deep technical skills but also practical comprehension of business objectives and project needs.',
      },
      {
        number: '04',
        title: 'Qualified Candidate Selection & Onboarding',
        description: 'Presenting pre-screened, high-match candidates with comprehensive profile dossiers, interview coordination, and seamless offer support.',
      },
    ],
    deliverablesTitle: 'Recruitment Solutions & Talent Capabilities We Provide',
    deliverablesSubtitle: 'Connecting your organization with high-caliber technical talent and verified specialists:',
    deliverables: [
      { title: 'Experienced Technical Headhunting', desc: 'Direct sourcing of Senior, Staff, and Principal software engineers' },
      { title: 'Unique Multi-Stage Candidate Filtering', desc: 'Rigorous vetting for technical mastery and strategic problem-solving' },
      { title: 'Executive Technology Search', desc: 'Placing CTOs, VPs of Engineering, and technical directors' },
      { title: 'Specialized Skillset Sourcing', desc: 'Cloud, DevOps, Full-Stack, AI/ML, and Cybersecurity talent' },
      { title: 'Rapid Qualified Submissions', desc: 'Curated shortlists of thoroughly vetted candidates delivered in days' },
      { title: 'End-to-End Onboarding Assurance', desc: 'Offer coordination, background checks, and 90-day retention guarantee' },
    ],
    techStack: ['Technical Assessments', 'Live Coding Labs', 'Algorithmic Vetting', 'AI Resume Match', 'Global Sourcing Engines', 'ATS Integration'],
    ctaLabel: 'Find Qualified Candidates',
  },
  {
    id: 'outsourcing',
    slug: 'outsourcing',
    title: 'OUTSOURCING',
    fullTitle: 'OUTSOURCING',
    subtitle: 'Flexible & Agile Business Transformation, Cost Savings & World-Class Staff',
    breadcrumb: 'Home / Services / Outsourcing',
    shortDescription:
      'Outsourcing can also help to make your business more flexible and agile, able to adapt to changing market conditions and challenges, while providing cost savings and service level improvements.',
    description:
      'Outsourcing can also help to make your business more flexible and agile, able to adapt to changing market conditions and challenges, while providing cost savings and service level improvements. At CloudFen Well positioned, with a world-class staff, to rapidly respond to the evolving IT landscape and offer the right solution at the right time.',
    paragraphs: [
      'Outsourcing can also help to make your business more flexible and agile, able to adapt to changing market conditions and challenges, while providing cost savings and service level improvements.',
      'At CloudFen Well positioned, with a world-class staff, to rapidly respond to the evolving IT landscape and offer the right solution at the right time.',
    ],
    heroImage: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=85',
    img1: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=85',
    img2: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=85',
    img3: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85',
    alt1: 'Agile team analyzing charts, project blueprints, and performance data around a conference table',
    alt2: 'Cross-functional engineering team in an agile sprint planning and whiteboard architecture session',
    alt3: 'Dedicated offshore delivery center strategy and agile sprint review meeting',
    badge1: 'Flexible & Agile Delivery',
    badge2: 'Cost Optimization & SLAs',
    badge3: 'World-Class IT Staff',
    icon: Building,
    tag: 'AGILE IT OUTSOURCING',
    stats: [
      { label: 'Cost Savings', value: 'Up to 50%' },
      { label: 'SLA Compliance', value: '99.9%' },
      { label: 'Delivery Response', value: '24/7 Agile' },
    ],
    methodologyTitle: '4-STAGE AGILE OUTSOURCING & DELIVERY METHODOLOGY',
    methodologySubtitle: 'How CloudFen optimizes costs, deploys world-class staffing, and provides flexible solutions adapted to market conditions.',
    methodologySteps: [
      {
        number: '01',
        title: 'Operating Model & Cost Analysis',
        description: 'Assessing business workflows, cost baselines, and agility targets to structure high-impact outsourcing models tailored to your market challenges.',
      },
      {
        number: '02',
        title: 'World-Class Staff & Pod Assembly',
        description: 'Deploying vetted, world-class engineers, PMs, and technical specialists with deep domain expertise to respond rapidly to your evolving IT landscape.',
      },
      {
        number: '03',
        title: 'Agile Delivery & Seamless Integration',
        description: 'Embedding agile sprint frameworks, daily standups, and transparent tooling to ensure frictionless collaboration and immediate service level improvements.',
      },
      {
        number: '04',
        title: 'Continuous Optimization & Scale',
        description: 'Ongoing performance governance, SLA benchmarking, and elastic scaling to adapt dynamically as business priorities and technologies evolve.',
      },
    ],
    deliverablesTitle: 'Outsourcing Solutions & Agile Capabilities We Provide',
    deliverablesSubtitle: 'Helping your business adapt to changing market conditions with cost-effective, world-class services:',
    deliverables: [
      { title: 'Flexible IT Staffing & Dedicated Pods', desc: 'Autonomous engineering pods structured to scale sprint velocity with zero administrative overhead' },
      { title: 'Cost Reduction & Operational Optimization', desc: 'Significantly lowering operational expenditures while upgrading service quality and delivery velocity' },
      { title: 'Adaptive Multi-Disciplinary Engineering', desc: 'Rapid response to changing IT requirements across cloud, DevOps, AI, and full-stack development' },
      { title: 'Service Level & SLA Improvements', desc: 'Guaranteed uptime, milestone-driven sprint accountability, and enterprise KPI governance' },
      { title: 'Turn-Key Offshore Delivery Centers (ODC)', desc: 'Secure, fully-equipped development centers ensuring complete IP protection and compliance' },
      { title: '24/7 Follow-the-Sun Technical Operations', desc: 'Continuous development, testing, and application maintenance across global time zones' },
    ],
    techStack: ['Agile Scrum Pods', 'Enterprise SLAs', 'Global Delivery Centers', 'Cost Optimization Models', 'DevOps & CI/CD', 'SOC2 & ISO 27001'],
    ctaLabel: 'Engage Outsourcing Solutions',
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES_DATA.find((s) => s.slug === slug || s.id === slug);
}
