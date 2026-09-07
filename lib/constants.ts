export interface NavSubItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  isExternal?: boolean;
  subItems?: NavSubItem[];
}

export const SERVICE_NAV_ITEMS: NavSubItem[] = [
  { label: 'IT STAFFING', href: '/services/it-staffing', description: 'Enterprise engineering talent & tech consulting' },
  { label: 'PRODUCT DEVELOPMENT', href: '/services/product-development', description: 'End-to-end full lifecycle software engineering' },
  { label: 'MAINTENANCE AND SUPPORT', href: '/services/maintenance-and-support', description: '24/7 managed support & system maintenance' },
  { label: 'INFRASTRUCTURE', href: '/services/infrastructure', description: 'Cloud migration & network system modernization' },
  { label: 'RECRUITMENT', href: '/services/recruitment', description: 'Precision technical screening & talent placement' },
  { label: 'OUTSOURCING', href: '/services/outsourcing', description: 'Recruitment Process Outsourcing (RPO) models' },
];

export const FOCUS_NAV_ITEMS: NavSubItem[] = [
  { label: 'DEVOPS', href: '/our-focus#devops', description: 'Continuous delivery & automated infrastructure' },
  { label: 'NETWORKING', href: '/our-focus#networking', description: 'Enterprise network architecture & SD-WAN' },
  { label: 'JAVA', href: '/our-focus#java', description: 'High-performance backends & microservices' },
  { label: 'CLOUD', href: '/our-focus#cloud', description: 'Multi-cloud architecture & modernization' },
  { label: 'SAP', href: '/our-focus#sap', description: 'SAP S/4HANA migration & ERP digital core' },
  { label: 'UI / UX', href: '/our-focus#ui', description: 'Modern UI/UX design & frontend engineering' },
  { label: 'TIBCO', href: '/our-focus#tibco', description: 'Enterprise application integration & messaging' },
  { label: 'UNIX / LINUX', href: '/our-focus#unix-linux', description: 'Enterprise Linux administration & hardening' },
  { label: 'DATABASE', href: '/our-focus#database', description: 'High-throughput relational & NoSQL data' },
  { label: 'MULESOFT', href: '/our-focus#mulesoft', description: 'API-led connectivity & integration mesh' },
  { label: 'BIG DATA', href: '/our-focus#bigdata', description: 'Petabyte-scale data engineering & streaming' },
  { label: 'MACHINE LEARNING', href: '/our-focus#machine-learning', description: 'Autonomous AI models & production MLOps' },
  { label: 'DATA SCIENCE', href: '/our-focus#data-science', description: 'Predictive analytics & statistical modeling' },
  { label: 'SALESFORCE', href: '/our-focus#salesforce', description: 'Salesforce CRM customization & architecture' },
  { label: 'QA / BA', href: '/our-focus#qa-ba', description: 'Automated QA test engineering & agile analysis' },
];

export const INDUSTRY_NAV_ITEMS: NavSubItem[] = [
  { label: 'HEALTHCARE', href: '/industries/healthcare', description: 'HIPAA-compliant digital health & clinical telemetry' },
  { label: 'FINANCIAL SERVICES', href: '/industries/financial-services', description: 'PCI-DSS banking cores & algorithmic risk defense' },
  { label: 'RETAIL', href: '/industries/retail', description: 'Omnichannel commerce & real-time inventory mesh' },
  { label: 'TELECOMUNICATIONS', href: '/industries/telecommunications', description: '5G edge compute & carrier-grade network platforms' },
  { label: 'MANUFACTURING', href: '/industries/manufacturing', description: 'Smart factories, IIoT & predictive maintenance' },
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/#home' },
  { label: 'About Us', href: '/#about-us' },
  {
    label: 'Services',
    href: '/#services',
    subItems: SERVICE_NAV_ITEMS,
  },
  {
    label: 'Our Focus',
    href: '/our-focus',
    subItems: FOCUS_NAV_ITEMS,
  },
  {
    label: 'Industries',
    href: '/industries',
    subItems: INDUSTRY_NAV_ITEMS,
  },
  { label: 'Careers', href: '/#careers' },
  { label: 'Contact', href: '/contact' },
];

export const TRUST_BADGES = [
  { name: 'AWS Partner Network', label: 'Advanced Tier', icon: 'aws' },
  { name: 'Google Cloud Premier', label: 'Infrastructure Specialist', icon: 'gcp' },
  { name: 'Microsoft Azure', label: 'Gold Cloud Platform', icon: 'azure' },
  { name: 'CNCF Certified', label: 'Kubernetes Fabric', icon: 'k8s' },
  { name: 'HashiCorp Verified', label: 'Terraform & Vault', icon: 'hashicorp' },
  { name: 'Linux Foundation', label: 'eBPF Project Member', icon: 'linux' },
];

export const SYSTEM_METRICS = [
  {
    value: '99.999%',
    label: 'Global Uptime SLA',
    description: 'Zero single point of failure multi-region mesh',
    trend: '+0.009% vs legacy',
  },
  {
    value: '4.2x',
    label: 'Deployment Velocity',
    description: 'Automated canary rollouts and instant rollback',
    trend: 'Sub-60s sync time',
  },
  {
    value: '43.8%',
    label: 'FinOps Cost Reduction',
    description: 'Automated spot arbitrage and compute rightsizing',
    trend: 'Avg. $184k saved/yr',
  },
  {
    value: '18M+',
    label: 'Containers Fabricated',
    description: 'Daily eBPF-monitored microservice workloads',
    trend: 'Across 48 regions',
  },
];
