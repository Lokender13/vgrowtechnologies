export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  category: 'Development' | 'Marketing' | 'Design' | 'AI & Automation';
  icon: string;
  heroHeadline: string;
  heroSubheadline: string;
  problemsSolved: { title: string; description: string }[];
  solutions: { title: string; description: string }[];
  keyFeatures: { title: string; description: string; icon?: string }[];
  process: { step: string; title: string; description: string }[];
  technologies: string[];
  deliverables: string[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  industry: string;
  services: string[];
  summary: string;
  challenges: string;
  solution: string;
  results: { metric: string; label: string }[];
  image: string;
  demoUrl?: string;
  tags: string[];
  isFeatured?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  service: string;
}

export interface FAQItem {
  id: string;
  category: 'General' | 'Services' | 'Pricing' | 'Timeline' | 'SEO';
  question: string;
  answer: string;
}

export interface ContactFormData {
  fullName: string;
  businessEmail: string;
  phoneNumber: string;
  companyName: string;
  serviceRequired: string;
  estimatedBudget: string;
  projectDetails: string;
}
