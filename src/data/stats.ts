export interface StatItem {
  id: string;
  metric: string;
  label: string;
  description: string;
  note?: string;
}

export const benchmarkStats: StatItem[] = [
  {
    id: "speed",
    metric: "< 1.0s",
    label: "Target Page Load Time",
    description: "Average mobile loading speed achieved on our modern Next.js architectures.",
    note: "Engineered Core Web Vitals benchmark",
  },
  {
    id: "retention",
    metric: "98%+",
    label: "Client Partnership Rate",
    description: "Commitment to long-term digital growth partnerships and transparent delivery.",
    note: "Annual ongoing partnership benchmark",
  },
  {
    id: "services",
    metric: "18+",
    label: "Specialized Digital Services",
    description: "From custom engineering and technical SEO to full-funnel paid advertising.",
    note: "Comprehensive in-house capabilities",
  },
  {
    id: "uptime",
    metric: "99.9%",
    label: "Cloud Reliability",
    description: "High-availability deployment architecture built on enterprise CDN networks.",
    note: "Standard SLA infrastructure target",
  },
];
