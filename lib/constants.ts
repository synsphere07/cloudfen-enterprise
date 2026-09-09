export interface NavSubItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  isExternal?: boolean;
  subItems?: NavSubItem[];
}

export const SOLUTIONS_NAV_ITEMS: NavSubItem[] = [
  {
    label: 'AGENT READINESS SPRINT',
    href: '/readiness-sprint',
    description: '4-week fixed-price engagement to take 1 workflow to production',
    badge: 'The Wedge',
  },
  {
    label: 'AGENTIC SOURCING DESK',
    href: '/solutions/sourcing',
    description: 'AI-powered candidate discovery, qualification & shortlists',
    badge: 'Talent AI',
  },
  {
    label: 'ONBOARDING & COMPLIANCE',
    href: '/solutions/onboarding',
    description: 'Automated doc verification, policy checks & HR/IT workflows',
    badge: 'The Moat',
  },
  {
    label: 'BACK-OFFICE OPERATIONS',
    href: '/solutions/back-office',
    description: 'Invoice AP, PO matching, contractor admin & reconciliation',
    badge: 'Finance Ops',
  },
  {
    label: 'MANAGED AGENT OPERATIONS',
    href: '/agent-operations',
    description: '24/7 monitoring, evaluations, guardrails & cost control',
    badge: 'The Annuity',
  },
];

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Solutions',
    href: '/solutions',
    subItems: SOLUTIONS_NAV_ITEMS,
  },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Agent Operations', href: '/agent-operations' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const ENTERPRISE_METRICS = [
  {
    value: '4 Weeks',
    label: 'Readiness Sprint',
    description: 'From workflow mapping to live production deployment',
    trend: 'Fixed-price guarantee',
  },
  {
    value: '75%',
    label: 'Cycle Time Reduction',
    description: 'Average workflow duration decrease across automated processes',
    trend: 'Measured vs baseline',
  },
  {
    value: '0.2%',
    label: 'Exception Error Rate',
    description: 'Rigorous deterministic guardrails and eval frameworks',
    trend: 'Sub-1% intervention',
  },
  {
    value: '5.8x',
    label: 'First-Year Net ROI',
    description: 'Demonstrated operational return on automated workflow spend',
    trend: 'Audited metrics',
  },
];

export const WORKFLOW_USE_CASES = [
  {
    category: 'Human Resources',
    icon: 'Users',
    summary: 'Candidate sourcing, screening, onboarding coordination, and compliance verification.',
    items: [
      'Candidate discovery & automated profile analysis',
      'Shortlist qualification against technical rubrics',
      'Employee & contractor onboarding workflows',
      'Right-to-work, I-9 & compliance document checks',
      'Automated HRIS updates & IT provisioning triggers',
    ],
  },
  {
    category: 'Finance & Accounting',
    icon: 'ReceiptText',
    summary: 'Accounts payable, invoice extraction, PO three-way matching, and ledger reconciliation.',
    items: [
      'Multi-format invoice data extraction & validation',
      'Automated PO three-way matching & anomaly detection',
      'Contractor payment schedules & timesheet auditing',
      'Intercompany ledger reconciliation',
      'Automated exception routing & escalation',
    ],
  },
  {
    category: 'Procurement & Vendor Ops',
    icon: 'Building2',
    summary: 'Vendor onboarding, compliance tracking, contract extraction, and purchasing workflows.',
    items: [
      'Vendor risk & compliance documentation vetting',
      'Contract clause extraction & renewal alerts',
      'Automated purchase order intake & approvals',
      'Supplier scorecarding & performance tracking',
    ],
  },
  {
    category: 'Operations & Logistics',
    icon: 'Layers',
    summary: 'Contractor management, cross-system data sync, workflow coordination, and reporting.',
    items: [
      'Cross-system record synchronization & deduplication',
      'Daily operational audit reporting & anomaly alerts',
      'Contractor compliance renewals & credential verification',
      'SLA tracking & bottleneck identification',
    ],
  },
  {
    category: 'Customer & Internal Support Ops',
    icon: 'Headphones',
    summary: 'Tier-1 case triage, knowledge extraction, and multi-system workflow execution.',
    items: [
      'Complex inquiry classification & metadata tagging',
      'Automated information retrieval across unstructured docs',
      'Multi-step system updates across CRM & ticketing',
      'Automated customer communication & status dispatch',
    ],
  },
];
