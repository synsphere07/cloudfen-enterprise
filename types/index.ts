export interface SolutionItem {
  id: string;
  category: 'multicloud' | 'gitops' | 'finops' | 'security' | 'observability' | 'dr';
  categoryLabel: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  metrics: string;
  codeSnippet?: string;
  iconName: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  popular?: boolean;
  features: string[];
  specs: {
    clusters: string;
    nodes: string;
    regions: string;
    sla: string;
    support: string;
  };
  ctaText: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface PipelineStage {
  id: string;
  name: string;
  status: 'completed' | 'running' | 'pending' | 'failed';
  duration: string;
  details: string;
}
