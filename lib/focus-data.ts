import {
  Infinity as InfinityIcon,
  Network,
  Coffee,
  Cloud,
  Layers,
  Layout,
  Workflow,
  Terminal,
  Database,
  Shuffle,
  Flame,
  BrainCircuit,
  LineChart,
  Users,
  CheckCircle2,
  LucideIcon,
} from 'lucide-react';

export interface FocusItem {
  id: string;
  title: string;
  theme: 'teal' | 'grey';
  icon: LucideIcon;
  subtitle: string;
  description: string;
  image: string;
  alt: string;
  tags: string[];
  highlights: string[];
}

export const FOCUS_ITEMS: FocusItem[] = [
  {
    id: 'devops',
    title: 'DEVOPS',
    theme: 'teal',
    icon: InfinityIcon,
    subtitle: 'Continuous Delivery & Automated Infrastructure',
    description:
      'Enterprise automated CI/CD pipelines, container orchestration, Infrastructure as Code (IaC), and telemetry monitoring for ultra-fast, zero-downtime release cycles.',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1000&q=80',
    alt: 'DevOps automated pipeline and container orchestration',
    tags: ['Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitOps', 'Ansible', 'AWS/Azure'],
    highlights: ['Zero-Downtime Releases', 'Automated CI/CD Workflows', 'Infrastructure as Code'],
  },
  {
    id: 'networking',
    title: 'NETWORKING',
    theme: 'grey',
    icon: Network,
    subtitle: 'Enterprise Network Architecture & SD-WAN',
    description:
      'High-throughput network engineering, SD-WAN architecture, next-gen perimeter security, low-latency datacenters, and secure multi-cloud hybrid interconnects.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1000&q=80',
    alt: 'High-speed datacenter fiber optic routers and switches',
    tags: ['Cisco', 'Juniper', 'SD-WAN', 'BGP/OSPF', 'Palo Alto', 'Fortinet', 'Zero Trust'],
    highlights: ['Low-Latency Routing', 'Robust Perimeter Security', '24/7 NOC Monitoring'],
  },
  {
    id: 'java',
    title: 'JAVA',
    theme: 'teal',
    icon: Coffee,
    subtitle: 'High-Performance Enterprise Backends & Microservices',
    description:
      'High-concurrency enterprise Java applications, distributed microservices architectures, reactive streams, Kafka event streaming, and resilient cloud backends.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80',
    alt: 'Enterprise Java software development and code architecture',
    tags: ['Java 21', 'Spring Boot', 'Microservices', 'Hibernate', 'Kafka', 'GraphQL', 'JVM Tuning'],
    highlights: ['High-Concurrency Backends', 'Distributed Microservices', 'Enterprise Security'],
  },
  {
    id: 'cloud',
    title: 'CLOUD',
    theme: 'grey',
    icon: Cloud,
    subtitle: 'Multi-Cloud Architecture & Cloud-Native Modernization',
    description:
      'Comprehensive multi-cloud migration, hybrid cloud architecture, serverless application modernization, cloud security governance, and automated FinOps optimization.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80',
    alt: 'Cloud computing infrastructure and global data fabric',
    tags: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Cloud-Native', 'Serverless', 'FinOps'],
    highlights: ['Multi-Cloud Resilience', 'Automated Elastic Scaling', 'FinOps Cost Governance'],
  },
  {
    id: 'sap',
    title: 'SAP',
    theme: 'teal',
    icon: Layers,
    subtitle: 'SAP S/4HANA Migration & ERP Digital Core',
    description:
      'End-to-end SAP ERP implementation, SAP S/4HANA migration, ABAP custom development, Fiori UI/UX modernization, and seamless enterprise system integrations.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    alt: 'Enterprise SAP ERP digital core and business analytics',
    tags: ['SAP S/4HANA', 'ABAP', 'Fiori', 'SAP SuccessFactors', 'SAP Ariba', 'SAP BTP'],
    highlights: ['Process Automation', 'Real-Time ERP Analytics', 'Seamless S/4HANA Upgrades'],
  },
  {
    id: 'ui',
    title: 'UI',
    theme: 'grey',
    icon: Layout,
    subtitle: 'Modern UI/UX Design & Next-Gen Frontend Engineering',
    description:
      'User-centric UI/UX architectures, responsive web apps, reusable design systems, accessibility standards (WCAG), and high-performance interactive interfaces.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80',
    alt: 'Modern UI/UX design interface and interactive web design',
    tags: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'Vue.js', 'Design Systems'],
    highlights: ['Fluid Interactivity', 'Intuitive User Journeys', 'Cross-Platform Polish'],
  },
  {
    id: 'tibco',
    title: 'TIBCO',
    theme: 'teal',
    icon: Workflow,
    subtitle: 'Enterprise Application Integration & Messaging Brokers',
    description:
      'Mission-critical enterprise application integration (EAI), BusinessWorks workflow automation, EMS messaging fabrics, API management, and event telemetry.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
    alt: 'Enterprise middleware integration and event-driven data flow',
    tags: ['TIBCO ActiveMatrix', 'BusinessWorks (BW6)', 'EMS', 'Spotfire', 'API Exchange', 'Hawk'],
    highlights: ['Mission-Critical Messaging', 'Event-Driven Fabric', 'Legacy Modernization'],
  },
  {
    id: 'unix-linux',
    title: 'UNIX/LINUX',
    theme: 'grey',
    icon: Terminal,
    subtitle: 'Enterprise Linux Administration & Server Hardening',
    description:
      'Mission-critical Linux/Unix administration, RHEL/CentOS/Ubuntu server hardening, kernel optimization, Bash/Python automation, and bare-metal cluster management.',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1000&q=80',
    alt: 'Enterprise Unix Linux server terminal and kernel systems',
    tags: ['RHEL', 'Ubuntu Server', 'CentOS/Rocky', 'Shell Scripting', 'Kernel Tuning', 'SELinux'],
    highlights: ['Military-Grade Security', 'High-Availability Uptime', 'Automated SysAdmin'],
  },
  {
    id: 'database',
    title: 'DATABASE',
    theme: 'teal',
    icon: Database,
    subtitle: 'High-Throughput Relational & Distributed NoSQL Data',
    description:
      'Scalable relational & NoSQL database engineering, sharding, replication clusters, query optimization, high-throughput in-memory caching, and zero-loss backup.',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1000&q=80',
    alt: 'High-throughput database architecture and distributed storage',
    tags: ['PostgreSQL', 'Oracle DB', 'MySQL', 'MongoDB', 'Redis', 'Cassandra', 'Snowflake'],
    highlights: ['Sub-Millisecond Querying', 'High-Availability Replicas', 'Zero-Loss Disaster Recovery'],
  },
  {
    id: 'mulesoft',
    title: 'MULESOFT',
    theme: 'grey',
    icon: Shuffle,
    subtitle: 'API-Led Connectivity & Hybrid Integration Mesh',
    description:
      'API-led integration architecture, MuleSoft Anypoint Platform implementation, RESTful API orchestration, ESB connectivity, and seamless SaaS/legacy unification.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    alt: 'MuleSoft API-led connectivity and enterprise integration mesh',
    tags: ['Anypoint Platform', 'Mule Runtime', 'DataWeave', 'API Manager', 'CloudHub', 'RAML/OAS'],
    highlights: ['API-Led Connectivity', 'SaaS & Legacy Unification', 'Rapid System Integration'],
  },
  {
    id: 'bigdata',
    title: 'BIGDATA',
    theme: 'teal',
    icon: Flame,
    subtitle: 'Petabyte-Scale Data Engineering & Stream Processing',
    description:
      'Petabyte-scale distributed data engineering, real-time stream ingestion, lakehouse architecture, Apache Spark ecosystems, and automated ETL pipelines.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1000&q=80',
    alt: 'Petabyte-scale Big Data processing and streaming pipelines',
    tags: ['Apache Spark', 'Hadoop', 'Kafka Streams', 'Delta Lake', 'Databricks', 'Airflow'],
    highlights: ['Real-Time Stream Processing', 'Scalable Data Lakehouses', 'High-Speed Analytics'],
  },
  {
    id: 'machine-learning',
    title: 'MACHINE LEARNING',
    theme: 'grey',
    icon: BrainCircuit,
    subtitle: 'Autonomous AI Models, LLMs & Production MLOps',
    description:
      'Cutting-edge machine learning model development, LLM fine-tuning, computer vision, predictive algorithms, MLOps deployment pipelines, and neural networks.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1000&q=80',
    alt: 'Machine learning neural networks and autonomous AI systems',
    tags: ['PyTorch', 'TensorFlow', 'LLMs / GenAI', 'Scikit-Learn', 'MLflow', 'Kubeflow', 'HuggingFace'],
    highlights: ['Autonomous Intelligence', 'Production MLOps Pipelines', 'Custom AI Model Training'],
  },
  {
    id: 'data-science',
    title: 'DATA SCIENCE',
    theme: 'teal',
    icon: LineChart,
    subtitle: 'Predictive Analytics, Statistical Modeling & BI',
    description:
      'Advanced statistical modeling, executive business intelligence dashboards, exploratory data analysis, econometric forecasting, and actionable strategic insights.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
    alt: 'Data science statistical analytics and executive BI dashboards',
    tags: ['Python Data Stack', 'R', 'Pandas / NumPy', 'Tableau', 'Power BI', 'Statistical Modeling'],
    highlights: ['Predictive Insights', 'Executive KPI Dashboards', 'Decision Intelligence'],
  },
  {
    id: 'salesforce',
    title: 'SALESFORCE',
    theme: 'grey',
    icon: Users,
    subtitle: 'Salesforce CRM Customization & Cloud Architecture',
    description:
      'Comprehensive Salesforce CRM implementation, Sales & Service Cloud customization, Apex/LWC development, workflow automation, and custom AppExchange integrations.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80',
    alt: 'Salesforce CRM customer relationship platform and cloud workflows',
    tags: ['Salesforce CRM', 'Apex', 'Lightning Web Components', 'Sales Cloud', 'Service Cloud', 'Flows'],
    highlights: ['360-Degree Customer View', 'Automated Lead Cycles', 'Enterprise Integrations'],
  },
  {
    id: 'qa-ba',
    title: 'QA/BA',
    theme: 'teal',
    icon: CheckCircle2,
    subtitle: 'Automated Quality Assurance & Agile Business Analysis',
    description:
      'Comprehensive QA test automation, performance load testing, requirement traceability, user acceptance testing (UAT), and agile business analysis.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
    alt: 'Automated QA test engineering and agile business analysis',
    tags: ['Selenium', 'Cypress / Playwright', 'JMeter', 'Jira', 'Agile BA', 'Postman', 'Test Automation'],
    highlights: ['100% Test Automation Coverage', 'Rapid Agile Sprints', 'Zero-Defect Quality Assurance'],
  },
];
