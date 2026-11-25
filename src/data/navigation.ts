export interface NavItem {
  title: string;
  href: string;
  description?: string;
  children?: {
    title: string;
    href: string;
    description: string;
    icon: string;
    badge?: string;
  }[];
}

export const navigationLinks: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  {
    title: "Services",
    href: "/services",
    children: [
      {
        title: "Website Development",
        href: "/services/website-development",
        description: "Custom, fast, high-converting modern web applications.",
        icon: "Code2",
      },
      {
        title: "UI/UX Design",
        href: "/services/ui-ux-design",
        description: "Aesthetic, conversion-focused user interfaces and journeys.",
        icon: "Palette",
      },
      {
        title: "Search Engine Optimization (SEO)",
        href: "/services/search-engine-optimization",
        description: "Organic search visibility that drives qualified inbound leads.",
        icon: "TrendingUp",
      },
      {
        title: "Google Ads & PPC",
        href: "/services/google-ads-ppc",
        description: "High-ROI paid search campaigns targeted at high-intent buyers.",
        icon: "Target",
      },
      {
        title: "Meta Ads & Social Advertising",
        href: "/services/meta-ads",
        description: "Scale customer acquisition across Instagram and Facebook.",
        icon: "Megaphone",
      },
      {
        title: "AI & Marketing Automation",
        href: "/services/ai-automation",
        description: "Intelligent workflows, automated nurturing, and smart chatbots.",
        icon: "Sparkles",
        badge: "Trending",
      },
      {
        title: "E-Commerce Development",
        href: "/services/ecommerce-development",
        description: "High-performance digital storefronts built to scale.",
        icon: "ShoppingBag",
      },
      {
        title: "Branding & Identity",
        href: "/services/branding",
        description: "Cohesive brand identities that resonate with your target market.",
        icon: "Layers",
      },
    ],
  },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Case Studies", href: "/case-studies" },
  { title: "Contact", href: "/contact" },
];

export const serviceCategories = [
  {
    name: "Web & E-Commerce Development",
    services: [
      { title: "Website Development", href: "/services/website-development" },
      { title: "Web Design", href: "/services/web-design" },
      { title: "E-Commerce Development", href: "/services/ecommerce-development" },
      { title: "WordPress Development", href: "/services/wordpress-development" },
      { title: "Shopify Development", href: "/services/shopify-development" },
    ],
  },
  {
    name: "Search Engine Optimization",
    services: [
      { title: "Search Engine Optimization", href: "/services/search-engine-optimization" },
      { title: "Local SEO", href: "/services/local-seo" },
      { title: "Technical SEO", href: "/services/technical-seo" },
    ],
  },
  {
    name: "Performance & Paid Advertising",
    services: [
      { title: "Google Ads (PPC)", href: "/services/google-ads-ppc" },
      { title: "Meta Ads (FB & Insta)", href: "/services/meta-ads" },
      { title: "Lead Generation", href: "/services/lead-generation" },
    ],
  },
  {
    name: "Creative, Design & Content",
    services: [
      { title: "UI/UX Design", href: "/services/ui-ux-design" },
      { title: "Branding & Identity", href: "/services/branding" },
      { title: "Graphic Design", href: "/services/graphic-design" },
      { title: "Content Marketing", href: "/services/content-marketing" },
      { title: "Social Media Marketing", href: "/services/social-media-marketing" },
      { title: "Email Marketing", href: "/services/email-marketing" },
    ],
  },
  {
    name: "Intelligent Systems",
    services: [
      { title: "AI & Marketing Automation", href: "/services/ai-automation" },
    ],
  },
];
