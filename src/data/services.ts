import { ServiceItem } from "@/types";

export const allServices: ServiceItem[] = [
  {
    id: "website-development",
    slug: "website-development",
    title: "Website Development",
    shortDescription: "High-performance, scalable, custom-engineered web applications designed to load in milliseconds and convert visitors into loyal clients.",
    category: "Development",
    icon: "Code2",
    heroHeadline: "Custom Web Engineering Built for Speed, Scale & Revenue",
    heroSubheadline: "Move beyond sluggish templates. We build modern, lightning-fast digital experiences with Next.js, React, and clean, enterprise-grade architecture.",
    problemsSolved: [
      {
        title: "Slow Page Speeds & High Bounce Rates",
        description: "Legacy websites bogged down by bloated code lose up to 53% of mobile visitors. We engineer sub-second loading architectures.",
      },
      {
        title: "Poor Conversion & Unintuitive Architecture",
        description: "Visitors leave when user flows are complicated. We design logical buyer journeys that direct traffic directly to high-intent actions.",
      },
      {
        title: "Inflexible, Fragile Technology",
        description: "Off-the-shelf templates break when scaling. Our modular codebases evolve seamlessly alongside your expanding business requirements.",
      },
    ],
    solutions: [
      {
        title: "Full-Stack Web Application Development",
        description: "Custom architectures engineered with Next.js, Node.js, and TypeScript, adhering to modern security standards and clean code principles.",
      },
      {
        title: "Headless & API-First Integrations",
        description: "Seamless connection to CRMs, payment gateways, ERPs, and marketing automation tools via resilient, secure APIs.",
      },
      {
        title: "Core Web Vitals Optimization",
        description: "Guaranteed 90+ Google PageSpeed benchmarks on mobile and desktop, improving both organic rankings and ad quality scores.",
      },
    ],
    keyFeatures: [
      {
        title: "Mobile-First Responsive Layouts",
        description: "Pixel-perfect rendering across 320px mobile screens, tablets, laptops, and ultra-wide 4K displays.",
      },
      {
        title: "Enterprise-Grade Security",
        description: "Built-in protection against XSS, CSRF, and SQL injections, paired with automated SSL and secure header policies.",
      },
      {
        title: "Automated CI/CD Deployment",
        description: "Modern automated pipelines enabling zero-downtime releases and rapid feature rollouts.",
      },
      {
        title: "Search-Engine Optimized Core",
        description: "Clean semantic HTML5 markup, automated XML sitemaps, dynamic OpenGraph cards, and schema structure baked in.",
      },
    ],
    process: [
      { step: "01", title: "Discovery & Architecture", description: "Analyzing technical scope, target user archetypes, performance requirements, and system architecture." },
      { step: "02", title: "UI/UX & Wireframing", description: "Designing high-fidelity prototypes and responsive design systems in Figma before touching code." },
      { step: "03", title: "Full-Stack Development", description: "Writing clean, modular TypeScript code with component-driven architecture and rigorous code reviews." },
      { step: "04", title: "QA, Performance & Launch", description: "Extensive cross-browser testing, accessibility audits, load testing, and seamless DNS cutover." },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Vercel", "AWS"],
    deliverables: ["Full Source Code & Repository Access", "Production Deployment Pipeline", "Technical Documentation", "Cross-Browser QA Report", "30-Day Post-Launch Support"],
    faqs: [
      { question: "How long does custom website development typically take?", answer: "A custom agency or corporate website generally takes 4 to 8 weeks depending on scope, design complexity, and third-party integrations." },
      { question: "Will my website be mobile responsive?", answer: "Yes, every website is engineered with a strict mobile-first paradigm, tested across 320px to 1920px viewports." },
      { question: "Do you provide post-launch maintenance?", answer: "Yes, we offer ongoing maintenance, security updates, feature scaling, and performance monitoring packages." },
    ],
    metaTitle: "Website Development Services | VGrow Technologies",
    metaDescription: "Partner with VGrow Technologies for custom website development. Fast, secure, SEO-optimized web applications built with Next.js, React, and modern tech.",
  },
  {
    id: "web-design",
    slug: "web-design",
    title: "Web Design",
    shortDescription: "Award-caliber, visually striking web designs that blend artistic finesse with strategic conversion psychology to elevate your brand prestige.",
    category: "Design",
    icon: "Layout",
    heroHeadline: "Bespoke Web Design That Commands Attention & Ignites Action",
    heroSubheadline: "First impressions are formed in 50 milliseconds. We craft distinctive, editorial-grade web designs that position your brand as an undisputed industry leader.",
    problemsSolved: [
      {
        title: "Dated, Commodity Visual Presence",
        description: "Generic site templates destroy brand trust. We craft proprietary visual languages that set you apart from competitors.",
      },
      {
        title: "Cluttered Information Architecture",
        description: "Information overload confuses prospective clients. We curate clear visual hierarchies that lead users naturally to conversion points.",
      },
      {
        title: "Inconsistent Cross-Platform Branding",
        description: "Fragmented styling across pages weakens credibility. We establish cohesive design systems for unified brand perception.",
      },
    ],
    solutions: [
      {
        title: "Editorial & Agency-Grade UI Design",
        description: "Bespoke visual styling featuring sophisticated typography, intentional whitespace, and custom digital illustrations.",
      },
      {
        title: "Conversion-Focused UX Architecture",
        description: "Strategic layout blueprints grounded in consumer psychology, heat-map insights, and frictionless micro-interactions.",
      },
      {
        title: "Comprehensive Design Systems",
        description: "Complete Figma libraries with standardized tokens, components, button states, and typography scales for brand consistency.",
      },
    ],
    keyFeatures: [
      {
        title: "Interactive Prototypes",
        description: "Clickable Figma prototypes simulating exact animations, transitions, and user journeys prior to coding.",
      },
      {
        title: "Accessibility Standards (WCAG 2.1)",
        description: "Color contrast compliance, readable typographic hierarchies, and intuitive visual cues accessible to all users.",
      },
      {
        title: "Custom Visual Assets",
        description: "Tailored iconography, bespoke banner graphics, and custom illustration assets designed specifically for your brand.",
      },
      {
        title: "Micro-Interactions & Motion Concepting",
        description: "Sophisticated hover feedback, scroll cues, and interactive elements designed to delight and engage users.",
      },
    ],
    process: [
      { step: "01", title: "Brand Immersion & Moodboarding", description: "Uncovering your brand essence, market position, and aesthetic aspirational targets." },
      { step: "02", title: "Wireframing & Flow Mapping", description: "Structuring page blueprints, information architecture, and core user pathways." },
      { step: "03", title: "Visual Design & Prototyping", description: "Designing high-fidelity responsive screens and interactive motion prototypes in Figma." },
      { step: "04", title: "Design System & Dev Handoff", description: "Documenting spacing, typography tokens, component states, and asset packages for developers." },
    ],
    technologies: ["Figma", "Adobe Creative Suite", "Spline 3D", "Protopie", "LottieFiles"],
    deliverables: ["Full High-Fidelity Figma Files", "Responsive Mobile & Tablet Screens", "Interactive Prototype Link", "Brand Design Token Guide", "Exported Vector Assets"],
    faqs: [
      { question: "What is included in the web design deliverable?", answer: "You receive complete Figma design files, responsive layouts for desktop, tablet, and mobile, design tokens, asset packages, and interactive prototypes." },
      { question: "Can you redesign our existing website?", answer: "Yes, we specialize in complete visual and UX overhauls that preserve your existing SEO equity while dramatically modernizing your brand." },
    ],
    metaTitle: "Bespoke Web Design Services | VGrow Technologies",
    metaDescription: "Elevate your digital presence with custom web design by VGrow Technologies. Sophisticated UI/UX, modern aesthetics, and conversion-optimized layouts.",
  },
  {
    id: "ecommerce-development",
    slug: "ecommerce-development",
    title: "E-Commerce Development",
    shortDescription: "End-to-end digital storefronts engineered for effortless product discovery, lightning-fast checkouts, and maximized average order value.",
    category: "Development",
    icon: "ShoppingBag",
    heroHeadline: "Scalable E-Commerce Platforms Engineered for High-Volume Sales",
    heroSubheadline: "Transform your digital shop into a conversion engine. We build custom headless and platform-based stores optimized for speed, retention, and peak shopping traffic.",
    problemsSolved: [
      {
        title: "High Cart Abandonment Rates",
        description: "Complex checkouts cost online retailers trillions. We engineer streamlined, 1-click payment flows with minimal friction.",
      },
      {
        title: "Slow Product Catalogs & Filtering",
        description: "Slow search and laggy filters frustrate shoppers. We implement instant sub-50ms catalog indexing and smart filtering.",
      },
      {
        title: "Inventory & ERP Disconnects",
        description: "Mismatched stock counts cause customer service nightmares. We build real-time inventory synchronization across all sales channels.",
      },
    ],
    solutions: [
      {
        title: "Custom Storefront Engineering",
        description: "Headless Commerce powered by Next.js and robust backend commerce APIs for unparalleled performance.",
      },
      {
        title: "Omnichannel Payment Gateways",
        description: "Integration with Stripe, Razorpay, Apple Pay, Google Pay, PayPal, and local regional payment systems.",
      },
      {
        title: "Smart Upsell & Retention Mechanics",
        description: "In-cart recommendations, dynamic bundle builders, and abandoned cart automations that boost Average Order Value (AOV).",
      },
    ],
    keyFeatures: [
      {
        title: "Instant Faceted Search & Filtering",
        description: "Frictionless exploration of thousands of SKUs by size, color, category, price, and customer rating.",
      },
      {
        title: "Mobile-First Shopping Experience",
        description: "Optimized thumb zones, swipeable galleries, and sticky add-to-cart buttons for mobile-first shoppers.",
      },
      {
        title: "Automated Tax & Shipping Engines",
        description: "Dynamic calculations with Shiprocket, Delhivery, FedEx, DHL, and automated tax compliance.",
      },
      {
        title: "Secure Customer Accounts & Portals",
        description: "Reordering, real-time shipment tracking, order history, and saved address books.",
      },
    ],
    process: [
      { step: "01", title: "Catalog & Workflow Mapping", description: "Auditing product architecture, SKU variations, shipping tiers, and inventory rules." },
      { step: "02", title: "Storefront UX Design", description: "Crafting customer-centric buyer journeys, PDPs (Product Display Pages), and frictionless checkouts." },
      { step: "03", title: "Commerce Integration", description: "Building custom checkout flows, payment gateway connections, and inventory sync." },
      { step: "04", title: "Stress Testing & Cutover", description: "Executing payment load tests, simulated flash-sale traffic, and secure store launch." },
    ],
    technologies: ["Shopify Plus", "WooCommerce", "Next.js Commerce", "Stripe", "Razorpay", "Tailwind CSS"],
    deliverables: ["Fully Configured Storefront", "Payment Gateway Setup & Verification", "Product Catalog Migration", "Inventory Management Setup", "Admin Staff Training Manual"],
    faqs: [
      { question: "Which e-commerce platform should our business choose?", answer: "Depending on your SKU complexity and budget, we recommend Shopify for rapid scale and ease of management, or custom Next.js commerce for maximum performance and bespoke user experiences." },
      { question: "Can you migrate products from our current platform?", answer: "Yes, we handle complete data migration including customer records, historical orders, and product catalogs without losing SEO rankings." },
    ],
    metaTitle: "E-Commerce Development Services | VGrow Technologies",
    metaDescription: "Accelerate online sales with VGrow Technologies. High-converting e-commerce development, custom storefronts, frictionless checkout, and omnichannel payments.",
  },
  {
    id: "wordpress-development",
    slug: "wordpress-development",
    title: "WordPress Development",
    shortDescription: "Custom, security-hardened WordPress themes and plugins crafted for effortless content editing, blazing speed, and enterprise reliability.",
    category: "Development",
    icon: "FileCode",
    heroHeadline: "Custom WordPress Solutions Without the Bloat or Vulnerabilities",
    heroSubheadline: "Experience WordPress the way it was meant to be: lightning fast, completely bespoke, bulletproof against security exploits, and effortless for your team to manage.",
    problemsSolved: [
      {
        title: "Bloated, Vulnerable Third-Party Plugins",
        description: "Relying on dozens of unstable plugins creates security holes and slows down loading times. We build lightweight, bespoke functionality.",
      },
      {
        title: "Rigid Page Builders That Break",
        description: "Messy visual builders produce spaghetti code and frequent layout bugs. We build tailored Gutenberg block systems.",
      },
      {
        title: "Difficult Content Editing Workflows",
        description: "Marketing teams should not have to touch code to update copy. We deliver custom fields tailored to your exact publishing workflow.",
      },
    ],
    solutions: [
      {
        title: "Bespoke Gutenberg Block Systems",
        description: "Modular, reusable block libraries built specifically for your brand styling, enabling marketing teams to construct rich pages safely.",
      },
      {
        title: "Enterprise Security Hardening",
        description: "Advanced firewall rules, two-factor authentication, database prefix security, and automated malware scanning.",
      },
      {
        title: "Speed & Caching Optimization",
        description: "Server-level Redis caching, database indexing, and WebP asset pipelines achieving sub-second load times.",
      },
    ],
    keyFeatures: [
      {
        title: "Zero Heavy Page Builder Dependency",
        description: "Clean, performant code written without bulky builders, ensuring long-term maintainability.",
      },
      {
        title: "Advanced Custom Fields (ACF Pro) Architecture",
        description: "Structured data modeling allowing you to update banners, case studies, and team profiles with ease.",
      },
      {
        title: "Automated Daily Backups & Staging Environments",
        description: "Safe staging workflows to preview changes before pushing updates to live production environments.",
      },
      {
        title: "SEO Plugin Configuration",
        description: "Deep configuration with RankMath or Yoast for instant sitemap generation, breadcrumbs, and schema injection.",
      },
    ],
    process: [
      { step: "01", title: "Theme Architecture", description: "Scaffolding custom starter themes and defining data structures for custom post types." },
      { step: "02", title: "Custom Block Development", description: "Coding bespoke Gutenberg blocks tailored to approved UI designs." },
      { step: "03", title: "Data Migration & Configuration", description: "Migrating legacy articles, media libraries, and configuring site-wide taxonomies." },
      { step: "04", title: "Security Hardening & Deployment", description: "Implementing SSL, Cloudflare CDN, firewall rules, and caching configurations." },
    ],
    technologies: ["WordPress Core", "PHP 8.3", "Gutenberg", "ACF Pro", "MySQL", "WP Engine / Kinsta", "Cloudflare"],
    deliverables: ["Custom WordPress Theme", "Custom Gutenberg Block Library", "Security Hardening Report", "Content Editor Video Walkthrough", "Database Backup Schedule"],
    faqs: [
      { question: "Is WordPress still a good choice for professional businesses?", answer: "Absolutely. When built custom without bloated third-party themes, WordPress powers over 40% of the web and offers unparalleled ease of content editing." },
      { question: "How do you protect WordPress against security vulnerabilities?", answer: "We enforce strict file permissions, custom login routes, 2FA, web application firewalls (WAF), and automated daily backups." },
    ],
    metaTitle: "Custom WordPress Development | VGrow Technologies",
    metaDescription: "Speed-optimized, custom WordPress development by VGrow Technologies. Secure themes, Gutenberg blocks, and scalable CMS architectures without the bloat.",
  },
  {
    id: "shopify-development",
    slug: "shopify-development",
    title: "Shopify Development",
    shortDescription: "High-converting Shopify and Shopify Plus storefronts engineered with bespoke Liquid code, conversion rate optimization, and seamless app integrations.",
    category: "Development",
    icon: "ShoppingBag",
    heroHeadline: "Bespoke Shopify Storefronts Built to Maximize Conversion & Scale",
    heroSubheadline: "Scale your Direct-to-Consumer (D2C) brand with custom Liquid theme development, optimized product display architecture, and automated operations.",
    problemsSolved: [
      {
        title: "Identical-Looking Cookie-Cutter Storefronts",
        description: "Standard off-the-shelf themes make your brand look like thousands of generic competitors. We develop bespoke, luxury shopping experiences.",
      },
      {
        title: "High App Monthly Fees & Slower Store Speed",
        description: "Stacking too many Shopify apps slows your store down. We code native features directly into your theme to eliminate bloat.",
      },
      {
        title: "Low Mobile Conversion Rates",
        description: "Mobile shoppers abandon clunky layouts. We optimize sticky call-to-actions, quick-buy drawers, and rapid checkout experiences.",
      },
    ],
    solutions: [
      {
        title: "Custom Shopify Liquid Development",
        description: "Clean, bespoke theme development engineered using Shopify's Theme Store 2.0 architecture and modular sections.",
      },
      {
        title: "Shopify Plus & Wholesale B2B",
        description: "Enterprise capabilities including custom checkout extensions, tiered customer pricing, and localized multi-currency stores.",
      },
      {
        title: "Conversion-Rate Optimization (CRO)",
        description: "Strategic placement of trust badges, social proof popups, countdowns, and bundle builders that lift conversion metrics.",
      },
    ],
    keyFeatures: [
      {
        title: "Shopify 2.0 JSON Template Architecture",
        description: "Allows marketing managers to drag, drop, and rearrange sections freely across any page.",
      },
      {
        title: "Dynamic Slide-Out Cart (Cart Drawer)",
        description: "Includes free shipping tier progress bars, one-click upsells, and discount code inputs inside the drawer.",
      },
      {
        title: "Multi-Currency & International Geolocation",
        description: "Automatically detects international visitors and displays local currencies and payment methods.",
      },
      {
        title: "Speed Audited & App Consolidation",
        description: "Replaces redundant JavaScript apps with native theme code for top-tier Google PageSpeed scores.",
      },
    ],
    process: [
      { step: "01", title: "Store Strategy & CRO Audit", description: "Analyzing target demographics, product margins, average order value, and competitor landscapes." },
      { step: "02", title: "Custom UI Storefront Design", description: "Designing high-converting PDPs, collection filtering systems, and mobile cart drawers." },
      { step: "03", title: "Liquid Coding & App Integration", description: "Developing custom sections and integrating essential apps for reviews, subscriptions, and shipping." },
      { step: "04", title: "Checkout Testing & Launch", description: "Testing live payments, inventory sync, abandoned cart email sequences, and domain launch." },
    ],
    technologies: ["Shopify Liquid", "Shopify CLI", "Tailwind CSS", "JavaScript", "Klaviyo", "Recharge", "Gorgias"],
    deliverables: ["Custom Shopify Theme (Online Store 2.0)", "Responsive Product & Collection Templates", "Cart Drawer with Upsell Logic", "App Setup & Optimization", "Staff Training Video"],
    faqs: [
      { question: "Can you build custom features without using paid apps?", answer: "Yes, we custom-code features like size charts, FAQ accordions, sticky add-to-cart bars, and bundle selectors directly into the theme." },
      { question: "Can you help migrate our store to Shopify?", answer: "Yes, we handle complete store migrations from WooCommerce, Magento, or custom carts with zero loss of order history or customer accounts." },
    ],
    metaTitle: "Shopify Development Services | VGrow Technologies",
    metaDescription: "Partner with VGrow Technologies for custom Shopify & Shopify Plus development. High-converting themes, speed optimization, and seamless app integrations.",
  },
  {
    id: "search-engine-optimization",
    slug: "search-engine-optimization",
    title: "Search Engine Optimization (SEO)",
    shortDescription: "Data-driven, white-hat SEO strategies that capture high-intent commercial search traffic, elevate domain authority, and drive sustainable inbound revenue.",
    category: "Marketing",
    icon: "TrendingUp",
    heroHeadline: "Dominate Search Results With Sustainable Organic Growth",
    heroSubheadline: "Stop burning ad budgets on clicks that disappear. We build enduring search visibility through rigorous technical foundations, authoritative content, and ethical link acquisition.",
    problemsSolved: [
      {
        title: "Invisibility on Commercial Search Keywords",
        description: "If your business isn't on Page 1, your competitors are getting your customers. We target commercial intent keywords that actually generate sales.",
      },
      {
        title: "Algorithmic Penalties & Traffic Drops",
        description: "Shady short-term tactics ruin domains. We employ 100% Google-compliant white-hat methods resilient to core algorithm updates.",
      },
      {
        title: "Traffic That Never Converts",
        description: "High impressions mean nothing without conversions. We optimize for keywords that capture qualified buyers ready to take action.",
      },
    ],
    solutions: [
      {
        title: "Comprehensive Keyword & Competitor Intelligence",
        description: "Deep competitor gap analysis, commercial intent clustering, and identifying underserved search opportunities in your industry.",
      },
      {
        title: "Full-Funnel On-Page Optimization",
        description: "Crafting optimized title tags, meta descriptions, semantic header hierarchies (H1-H6), internal linking silos, and engaging copy.",
      },
      {
        title: "Authority Link Building & Digital PR",
        description: "Securing editorial backlinks from reputable industry publications, establishing genuine domain authority and trust.",
      },
    ],
    keyFeatures: [
      {
        title: "Semantic Content Optimization",
        description: "Content mapped to user search intent (informational, commercial, navigational, and transactional).",
      },
      {
        title: "Internal Linking Architecture",
        description: "Strategic link silos that pass page rank from high-authority pages to high-priority service offerings.",
      },
      {
        title: "Competitor Market Share Tracking",
        description: "Ongoing rank tracking across desktop and mobile devices with weekly progress visibility.",
      },
      {
        title: "Google Analytics 4 & Search Console Setup",
        description: "Accurate conversion and lead tracking configured to measure tangible ROI from organic traffic.",
      },
    ],
    process: [
      { step: "01", title: "Comprehensive SEO Audit", description: "Analyzing technical health, backlink profile, content gaps, and competitor visibility." },
      { step: "02", title: "Strategy & Keyword Roadmap", description: "Mapping high-intent keyword clusters to dedicated service pages and educational landing pages." },
      { step: "03", title: "On-Page & Content Execution", description: "Optimizing metadata, page copy, internal linking structure, and publishing targeted content." },
      { step: "04", title: "Authority Growth & Reporting", description: "Acquiring editorial backlinks, monitoring rank shifts, and refining the search campaign monthly." },
    ],
    technologies: ["Ahrefs", "SEMrush", "Google Search Console", "Google Analytics 4", "Screaming Frog", "SurferSEO"],
    deliverables: ["Full Technical & On-Page SEO Audit", "Target Keyword Matrix & Map", "Monthly Ranking & Traffic Reports", "On-Page Content Optimization", "Ethical Backlink Acquisition Plan"],
    faqs: [
      { question: "How long does it take to see results from SEO?", answer: "SEO is a compounding growth engine. Meaningful ranking improvements and traffic growth typically become evident within 3 to 6 months, building durable long-term ROI." },
      { question: "Do you guarantee #1 rankings on Google?", answer: "No ethical agency guarantees specific rank positions because Google's algorithm is proprietary and constantly evolving. What we guarantee is rigorous, data-driven best practices that systematically improve visibility and qualified inbound traffic." },
    ],
    metaTitle: "SEO Services & Organic Growth Strategy | VGrow Technologies",
    metaDescription: "Grow your business organically with VGrow Technologies. Comprehensive SEO services, technical audits, on-page optimization, and authoritative link building.",
  },
  {
    id: "local-seo",
    slug: "local-seo",
    title: "Local SEO",
    shortDescription: "Dominate Google Maps and local search queries to capture customers searching for your products and services right in your geographical service areas.",
    category: "Marketing",
    icon: "MapPin",
    heroHeadline: "Capture Local Customers When They Need You Most",
    heroSubheadline: "Appear in the coveted Google Local 3-Pack and capture high-intent buyers searching in your city, neighborhood, or service territory.",
    problemsSolved: [
      {
        title: "Absence From Google Maps Pack",
        description: "Customers looking for local services check the Map Pack first. If you aren't in the top 3, nearby competitors win every enquiry.",
      },
      {
        title: "Inconsistent Business Name, Address & Phone (NAP)",
        description: "Conflicting citations across web directories confuse search engines and depress your rankings.",
      },
      {
        title: "Low Volume of Customer Reviews",
        description: "Prospects choose competitors with higher review counts. We implement automated review generation workflows.",
      },
    ],
    solutions: [
      {
        title: "Google Business Profile (GBP) Optimization",
        description: "Complete category optimization, keyword-rich business descriptions, high-resolution photo uploads, and weekly product posts.",
      },
      {
        title: "Local Citation & Directory Building",
        description: "Claiming, verifying, and synchronizing accurate NAP citations across all major local business directories.",
      },
      {
        title: "Localized Landing Page Creation",
        description: "Building geo-targeted service pages with embedded Google Maps, local customer testimonials, and localized schema markup.",
      },
    ],
    keyFeatures: [
      {
        title: "Google Map Pack Ranking Strategy",
        description: "Geo-targeted signals and local backlink acquisition designed to propel your profile into the top 3 positions.",
      },
      {
        title: "Review Acquisition Workflows",
        description: "Automated SMS and email templates prompting satisfied customers to leave genuine 5-star Google reviews.",
      },
      {
        title: "LocalBusiness Schema Markup",
        description: "Machine-readable structured data giving search engines precise details on your address, coordinates, hours, and phone.",
      },
      {
        title: "Spam Fighting & Competitor Audits",
        description: "Identifying and reporting fraudulent competitor listings that violate Google guidelines in your territory.",
      },
    ],
    process: [
      { step: "01", title: "Local Presence Audit", description: "Checking your GBP listing, ranking proximity, and citation consistency across 50+ local platforms." },
      { step: "02", title: "GBP Overhaul & Optimization", description: "Updating categories, service menus, operating hours, attributes, and uploading branded photography." },
      { step: "03", title: "Citation Cleanup & Expansion", description: "Fixing NAP inconsistencies and submitting to authoritative local and industry directories." },
      { step: "04", title: "Local Link & Review Building", description: "Acquiring local sponsorships, press mentions, and driving consistent customer review growth." },
    ],
    technologies: ["Google Business Profile", "BrightLocal", "Whitespark", "Google Maps Platform", "SEMrush Local"],
    deliverables: ["Optimized Google Business Profile", "Cleaned & Verified Citation Matrix", "Geo-Targeted Landing Pages", "Review Generation Template Kit", "Monthly Local Rank Tracking Report"],
    faqs: [
      { question: "How does Google determine local rankings?", answer: "Google ranks local businesses primarily on three factors: Relevance (how well your business matches the search), Distance (how close you are to the searcher), and Prominence (reputation, reviews, and backlinks)." },
      { question: "Can businesses without a physical storefront rank on Google Maps?", answer: "Yes, you can register as a Service Area Business (SAB), hiding your home or warehouse address while specifying the cities and zip codes you serve." },
    ],
    metaTitle: "Local SEO & Google Maps Optimization | VGrow Technologies",
    metaDescription: "Dominate Google Maps and local search with VGrow Technologies. Drive calls, foot traffic, and regional inquiries with targeted Local SEO strategies.",
  },
  {
    id: "technical-seo",
    slug: "technical-seo",
    title: "Technical SEO",
    shortDescription: "Engineered optimization of website architecture, crawlability, indexation, schema markup, and Core Web Vitals for maximum search visibility.",
    category: "Marketing",
    icon: "Cpu",
    heroHeadline: "Eliminate Search Bottlenecks With Precision Technical SEO",
    heroSubheadline: "Even the best content can't rank if search engine bots can't crawl and interpret your site efficiently. We build flawless technical foundations.",
    problemsSolved: [
      {
        title: "Indexation & Crawl Budget Waste",
        description: "Search bots getting trapped in redirect loops or thin query parameters miss your highest-value revenue pages.",
      },
      {
        title: "Failing Google Core Web Vitals",
        description: "Sluggish Largest Contentful Paint (LCP) and Cumulative Layout Shifts (CLS) hurt rankings and conversions directly.",
      },
      {
        title: "Missing Structured Data & Schema Markup",
        description: "Search engines struggle to parse your business entities, leading to lost rich snippet opportunities in search results.",
      },
    ],
    solutions: [
      {
        title: "Crawlability & Indexation Remediation",
        description: "Robots.txt optimization, XML sitemap restructuring, canonical tag enforcement, and resolving 404/301 crawl errors.",
      },
      {
        title: "Core Web Vitals Performance Engineering",
        description: "Code splitting, CSS and JS minification, image compression to WebP/AVIF, and eliminating render-blocking scripts.",
      },
      {
        title: "Advanced JSON-LD Schema Architecture",
        description: "Comprehensive implementation of Organization, Service, Product, FAQPage, Article, and BreadcrumbList schemas.",
      },
    ],
    keyFeatures: [
      {
        title: "Mobile Usability Auditing",
        description: "Ensuring faultless viewport configurations, responsive touch targets, and responsive font rendering across all devices.",
      },
      {
        title: "International & Hreflang Configuration",
        description: "Correct multi-regional targeting and language tags for businesses serving global audiences.",
      },
      {
        title: "Clean URL Siloing & Hierarchy",
        description: "Logically organized directory structures that establish clear topical authority for search algorithms.",
      },
      {
        title: "Server Response & Header Security",
        description: "Configuring HTTP/3, TLS 1.3, compression (Brotli), and canonical response headers for maximum speed.",
      },
    ],
    process: [
      { step: "01", title: "Full-Site Deep Crawl", description: "Crawling every URL with Screaming Frog to identify status codes, canonical mismatches, and orphan pages." },
      { step: "02", title: "Architecture & Hierarchy Audit", description: "Evaluating click depth, internal link distribution, and canonical tag implementation." },
      { step: "03", title: "Technical Remediation Execution", description: "Fixing redirects, optimizing sitemaps, repairing crawl anomalies, and injecting JSON-LD schemas." },
      { step: "04", title: "Search Console Validation", description: "Submitting validation requests in Google Search Console and monitoring index coverage reports." },
    ],
    technologies: ["Screaming Frog", "Google Search Console", "Lighthouse", "Sitebulb", "Cloudflare", "Schema App"],
    deliverables: ["Full Technical SEO Audit Document", "Robots.txt & Sitemap Reconfiguration", "Complete JSON-LD Schema Scripts", "Core Web Vitals Speed Optimization", "Index Coverage Health Report"],
    faqs: [
      { question: "What is Core Web Vitals and why does it affect SEO?", answer: "Core Web Vitals are Google's standardized metrics for measuring user experience: loading speed (LCP), interactivity/responsiveness (INP), and visual stability (CLS). Passing these is an official Google ranking signal." },
      { question: "How does schema markup help my search rankings?", answer: "Schema markup provides explicit clues to search engines about what your page content means, enabling rich search snippets like star ratings, FAQs, and pricing that increase organic click-through rates." },
    ],
    metaTitle: "Technical SEO Services | VGrow Technologies",
    metaDescription: "Resolve indexation, crawl errors, and Core Web Vitals issues with VGrow Technologies. Expert technical SEO engineering for high-performing websites.",
  },
  {
    id: "social-media-marketing",
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    shortDescription: "Strategic content creation, community engagement, and brand storytelling across LinkedIn, Instagram, Facebook, and Twitter to build loyal followings.",
    category: "Marketing",
    icon: "Share2",
    heroHeadline: "Build a Magnetic Brand That Commands Social Loyalty",
    heroSubheadline: "Transform passive scrollers into passionate brand advocates. We create platform-tailored social campaigns that blend aesthetic creativity with strategic messaging.",
    problemsSolved: [
      {
        title: "Low Engagement & Stagnant Follower Counts",
        description: "Generic company announcements fail to engage. We create scroll-stopping visual hooks and conversation-starting discussions.",
      },
      {
        title: "Inconsistent Posting & Lack of Direction",
        description: "Irregular activity hurts algorithmic reach. We establish consistent editorial calendars aligned with business milestones.",
      },
      {
        title: "Social Activity That Fails to Drive Leads",
        description: "Likes and views don't pay bills. We implement structured social funnels that guide followers directly to your website and sales pipeline.",
      },
    ],
    solutions: [
      {
        title: "Platform-Specific Content Strategy",
        description: "Tailored content pillars engineered specifically for LinkedIn (B2B thought leadership), Instagram (visual lifestyle & reels), and Facebook.",
      },
      {
        title: "High-Impact Visual Asset Creation",
        description: "Professional carousel graphics, short-form video reels, infographics, and editorial motion graphics produced by our in-house designers.",
      },
      {
        title: "Active Community Management",
        description: "Timely responses to comments and direct messages, turning social interactions into genuine sales opportunities.",
      },
    ],
    keyFeatures: [
      {
        title: "Monthly Content Calendar Planning",
        description: "Advance review and approval of all copy, visual creatives, and scheduled publishing dates.",
      },
      {
        title: "Short-Form Video & Reels Production",
        description: "Engaging vertical videos with captions, dynamic pacing, and trending sound cues.",
      },
      {
        title: "Hashtag & Social SEO Optimization",
        description: "Optimizing profile bios, captions, and tags for internal platform search algorithms.",
      },
      {
        title: "Competitor Benchmark Reporting",
        description: "Monthly tracking of engagement rates, audience demographics, follower acquisition, and referral traffic.",
      },
    ],
    process: [
      { step: "01", title: "Audience & Tone of Voice Definition", description: "Establishing your brand's unique social personality, design guidelines, and core audience personas." },
      { step: "02", title: "Content Pillar Formulation", description: "Defining weekly themes spanning educational value, behind-the-scenes, proof of work, and offers." },
      { step: "03", title: "Creative Production & Scheduling", description: "Designing visual graphics, editing reels, writing persuasive copy, and scheduling ahead." },
      { step: "04", title: "Engagement & Monthly Analysis", description: "Fostering discussions, analyzing top-performing posts, and adjusting strategy based on data." },
    ],
    technologies: ["Buffer", "Hootsuite", "Meta Business Suite", "Canva Pro", "Adobe Premiere Pro", "Figma"],
    deliverables: ["Monthly Social Media Content Calendar", "Custom Designed Visual Posts & Carousels", "Short-Form Video Reels", "Bio & Profile Optimization", "Monthly Social ROI & Engagement Report"],
    faqs: [
      { question: "Which social media platforms should my business focus on?", answer: "This depends on your target audience. For B2B and technology companies, LinkedIn and Twitter yield the highest quality business leads. For D2C and consumer services, Instagram and Facebook are indispensable." },
      { question: "Do you handle answering comments and messages?", answer: "Yes, our community management service includes responding to comments, direct inquiries, and forwarding qualified business leads directly to your sales team." },
    ],
    metaTitle: "Social Media Marketing Agency | VGrow Technologies",
    metaDescription: "Elevate your brand presence across LinkedIn, Instagram, and Facebook with VGrow Technologies. High-impact content creation, reels, and community growth.",
  },
  {
    id: "google-ads-ppc",
    slug: "google-ads-ppc",
    title: "Google Ads (PPC)",
    shortDescription: "High-ROI Pay-Per-Click advertising campaigns engineered to capture high-intent buyers at the precise moment they search for your services.",
    category: "Marketing",
    icon: "Target",
    heroHeadline: "Laser-Targeted Google Ads That Maximize Customer Acquisition ROI",
    heroSubheadline: "Stop burning ad budget on low-intent keywords and unqualified clicks. We construct high-converting Google Search, Performance Max, and Remarketing campaigns.",
    problemsSolved: [
      {
        title: "Wasted Ad Spend on Negative Keywords",
        description: "Unfiltered campaigns waste thousands of dollars on irrelevant clicks. We maintain rigorous negative keyword filters to safeguard your budget.",
      },
      {
        title: "Low Quality Scores & High Cost-Per-Click",
        description: "Generic ad copy and mismatched landing pages inflate bid costs. We align ads tightly to tailored landing pages for optimal Quality Scores.",
      },
      {
        title: "Lack of Conversion & Revenue Tracking",
        description: "Not knowing which keywords generate sales leads to guessing. We implement airtight conversion tracking through Google Tag Manager.",
      },
    ],
    solutions: [
      {
        title: "High-Intent Google Search Campaigns",
        description: "Single-intent ad group structuring targeting customers ready to hire your agency or purchase your products immediately.",
      },
      {
        title: "Performance Max & Shopping Campaigns",
        description: "Harnessing Google's machine learning across YouTube, Display, Search, Discover, and Maps for maximum reach at targeted target ROAS/CPA.",
      },
      {
        title: "Hyper-Targeted Dynamic Remarketing",
        description: "Re-engaging visitors who browsed your site or abandoned carts with tailored messaging that brings them back to complete the transaction.",
      },
    ],
    keyFeatures: [
      {
        title: "Granular Negative Keyword Lists",
        description: "Pre-emptively blocking searches containing 'free', 'jobs', 'tutorial', and competitor names that waste budget.",
      },
      {
        title: "A/B Responsive Search Ad Testing",
        description: "Testing multiple headline and description variations to systematically discover top-converting creative formulas.",
      },
      {
        title: "Landing Page Conversion Rate Optimization",
        description: "Designing fast-loading, highly relevant landing pages dedicated to specific ad campaigns.",
      },
      {
        title: "Server-Side Tagging & Enhanced Conversions",
        description: "Ensuring 100% conversion accuracy in an era of browser privacy restrictions and ad blockers.",
      },
    ],
    process: [
      { step: "01", title: "Commercial Keyword Research", description: "Isolating high-intent search terms with proven commercial intent and favorable cost-per-click dynamics." },
      { step: "02", title: "Campaign Architecture & Ad Copy", description: "Writing compelling responsive search ads, sitelinks, callouts, and call extensions." },
      { step: "03", title: "Conversion Tracking Setup", description: "Configuring Google Tag Manager, GA4 events, and offline conversion imports." },
      { step: "04", title: "Daily Bid Optimization & Scaling", description: "Adjusting keyword bids, negative search queries, and scaling winning ad groups to maximize ROI." },
    ],
    technologies: ["Google Ads", "Google Tag Manager", "Google Analytics 4", "Looker Studio", "SpyFu"],
    deliverables: ["Complete Campaign Account Architecture", "High-Converting Ad Copy & Asset Extensions", "Dedicated Campaign Landing Page Blueprint", "Google Tag Manager Conversion Setup", "Live Weekly Performance Dashboard"],
    faqs: [
      { question: "What is a realistic budget for Google Ads?", answer: "Budgets depend on your industry and competition. We typically recommend starting with a monthly ad spend that supports at least 15 to 20 clicks per day, allowing Google's algorithms to gather meaningful data quickly." },
      { question: "How quickly do Google Ads produce leads?", answer: "Unlike SEO which takes months to compound, Google Ads can begin generating qualified leads within 24 to 48 hours of campaign launch." },
    ],
    metaTitle: "Google Ads & PPC Management Agency | VGrow Technologies",
    metaDescription: "Accelerate qualified lead generation with VGrow Technologies. Expert Google Ads management, Search, Performance Max, and conversion-optimized PPC campaigns.",
  },
  {
    id: "meta-ads",
    slug: "meta-ads",
    title: "Meta Ads (Facebook & Instagram)",
    shortDescription: "High-performance Facebook and Instagram ad campaigns featuring scroll-stopping creatives, advanced audience modeling, and scaled customer acquisition.",
    category: "Marketing",
    icon: "Megaphone",
    heroHeadline: "Scale Customer Acquisition Across Facebook & Instagram",
    heroSubheadline: "Turn social media feeds into your highest-performing sales channel. We craft cinematic visual ads paired with algorithmic audience targeting that scales reliably.",
    problemsSolved: [
      {
        title: "Ad Creative Fatigue & Rising CPA",
        description: "When audiences see the same ad repeatedly, acquisition costs skyrocket. We maintain continuous creative refresh cycles to sustain low CPAs.",
      },
      {
        title: "iOS Privacy Tracking Drop-Offs",
        description: "Browser tracking restrictions blind standard pixels. We implement Meta Conversions API (CAPI) via server-side tracking.",
      },
      {
        title: "Weak Creative Hooks & Instant Drop-Off",
        description: "Viewers scroll past standard corporate ads. We script and design thumb-stopping visual hooks that stop users in their tracks.",
      },
    ],
    solutions: [
      {
        title: "Full-Funnel Meta Advertising Strategy",
        description: "Architecting TOFU (Top of Funnel awareness), MOFU (Consideration), and BOFU (Retargeting) campaigns with distinct creative angles.",
      },
      {
        title: "Meta Conversions API (CAPI) Integration",
        description: "Server-to-server tracking resilience that bypasses ad blockers and accurately attributes every purchase or lead generated.",
      },
      {
        title: "Dynamic Product Ads (DPA) & Catalogs",
        description: "Automatically serving the exact products shoppers browsed, complete with real-time pricing and stock availability.",
      },
    ],
    keyFeatures: [
      {
        title: "Thumb-Stopping Video Creatives",
        description: "Fast-paced, hook-driven video concepts designed specifically for mobile 9:16 story and reel placements.",
      },
      {
        title: "High-Converting Carousel Ads",
        description: "Multi-card storytelling showcasing product collections, customer transformations, and feature breakdowns.",
      },
      {
        title: "Lookalike & Broad Audience Targeting",
        description: "Leveraging Meta's machine learning and your customer list to target mirror audiences with highest propensity to purchase.",
      },
      {
        title: "A/B Testing Framework",
        description: "Rigorous testing of hooks, copy angles, call-to-action buttons, and post-click destination experiences.",
      },
    ],
    process: [
      { step: "01", title: "Creative & Competitor Audit", description: "Analyzing top competitor ads in Meta Ad Library to identify market creative fatigue and whitespace." },
      { step: "02", title: "Tracking & Pixel Setup", description: "Configuring Meta Pixel, Conversions API, and custom event attribution in Events Manager." },
      { step: "03", title: "Creative Production & Copywriting", description: "Designing motion graphics, recording UGC style videos, and writing persuasive direct-response copy." },
      { step: "04", title: "Campaign Launch & Rapid Scaling", description: "Monitoring cost-per-lead, turning off losing creative variants, and allocating budget to winning assets." },
    ],
    technologies: ["Meta Ads Manager", "Meta Conversions API", "CapCut / Premiere Pro", "Canva Pro", "Triple Whale"],
    deliverables: ["Custom Meta Ad Campaign Setup", "Library of High-Converting Static & Video Creatives", "Server-Side Conversions API Setup", "Target Audience Blueprint", "Weekly ROI Performance Dashboard"],
    faqs: [
      { question: "Is Facebook advertising still effective?", answer: "Yes. Meta platforms (Instagram, Facebook, Messenger) retain the largest active consumer audience in the world, with machine learning that out-targets almost every other platform when powered by strong creatives." },
      { question: "What creative formats work best for Meta Ads?", answer: "Short-form vertical video (reels), authentic customer testimonial formats, and high-contrast carousel designs consistently deliver the highest return on ad spend (ROAS)." },
    ],
    metaTitle: "Meta Ads & Paid Social Agency | VGrow Technologies",
    metaDescription: "Scale revenue with high-performing Facebook and Instagram Ads by VGrow Technologies. Creative production, audience targeting, and Meta Conversions API setup.",
  },
  {
    id: "content-marketing",
    slug: "content-marketing",
    title: "Content Marketing",
    shortDescription: "Authoritative, research-backed articles, whitepapers, case studies, and brand content that establishes industry leadership and fuels organic inbound pipelines.",
    category: "Marketing",
    icon: "FileText",
    heroHeadline: "Authoritative Content That Educates, Ranks & Converts",
    heroSubheadline: "Move beyond shallow, robotic articles. We produce insightful, industry-specific content that educates prospects, commands trust, and captures qualified organic traffic.",
    problemsSolved: [
      {
        title: "Shallow, AI-Generated Commodity Content",
        description: "Search engines de-index generic AI content. We create researched, expert-driven thought leadership that provides genuine value.",
      },
      {
        title: "Articles That Generate Views But No Enquiries",
        description: "Traffic without intent does not grow a business. We map every article to specific conversion actions and downloadable assets.",
      },
      {
        title: "Disorganized, Irregular Publishing Schedules",
        description: "Unplanned blogging wastes time. We establish thematic content clusters that build comprehensive topical authority.",
      },
    ],
    solutions: [
      {
        title: "Topical Authority Cluster Modeling",
        description: "Engineering pillar pages and supporting topic clusters that demonstrate deep domain expertise to search algorithms.",
      },
      {
        title: "Lead Magnet & Resource Asset Creation",
        description: "Producing downloadable guides, industry benchmarks, checklists, and whitepapers designed to capture business emails.",
      },
      {
        title: "Content Repurposing & Multi-Channel Distribution",
        description: "Transforming single long-form articles into LinkedIn carousel decks, Twitter threads, newsletter issues, and video scripts.",
      },
    ],
    keyFeatures: [
      {
        title: "In-Depth Subject Matter Research",
        description: "Interviews, case studies, and original industry statistics that position your company as the premier authority.",
      },
      {
        title: "SEO-Optimized Editorial Framework",
        description: "Natural keyword integration, optimized header architecture, engaging meta copy, and relevant internal cross-links.",
      },
      {
        title: "Actionable In-Text Conversion Hooks",
        description: "Embedded consultation CTA banners, product callouts, and lead capture forms integrated naturally into the reading experience.",
      },
      {
        title: "Editorial Proofreading & Brand Voice Guidelines",
        description: "Strict quality assurance ensuring consistent tone of voice, accurate industry terminology, and zero factual errors.",
      },
    ],
    process: [
      { step: "01", title: "Topical Gap & Search Intent Analysis", description: "Identifying high-value questions and commercial search queries your ideal customers research." },
      { step: "02", title: "Editorial Calendar Development", description: "Mapping out publication roadmaps with clear targets, outlines, target keywords, and conversion goals." },
      { step: "03", title: "Expert Writing & Visual Asset Design", description: "Drafting in-depth articles, custom infographics, comparison tables, and pull quotes." },
      { step: "04", title: "Publishing, Distribution & Tracking", description: "Publishing formatted articles, distributing across newsletters and social channels, and tracking lead generation." },
    ],
    technologies: ["SurferSEO", "Ahrefs", "Grammarly Business", "Notion", "Figma", "WordPress / Next.js CMS"],
    deliverables: ["Comprehensive Content Strategy Roadmap", "High-Authority Blog & Article Publications", "Custom Infographics & Diagrams", "Gated Lead Magnet Assets", "Quarterly Organic Content Performance Report"],
    faqs: [
      { question: "How does content marketing generate qualified leads?", answer: "By answering your prospects' most pressing challenges at the research phase, your brand earns trust early in the buyer journey, making you the obvious partner when they are ready to purchase." },
      { question: "Can content marketing help with our SEO rankings?", answer: "Yes, publishing comprehensive content that satisfies user search intent is the single most effective way to rank for hundreds of long-tail commercial search terms." },
    ],
    metaTitle: "Content Marketing & Editorial Strategy | VGrow Technologies",
    metaDescription: "Accelerate inbound growth with VGrow Technologies. Expert content marketing, thought leadership articles, SEO copy, and lead-generating editorial strategies.",
  },
  {
    id: "email-marketing",
    slug: "email-marketing",
    title: "Email Marketing",
    shortDescription: "Automated email sequences, customer nurture funnels, and retention campaigns designed to turn cold leads into buyers and maximize customer lifetime value.",
    category: "Marketing",
    icon: "Mail",
    heroHeadline: "Turn Your Subscriber List Into a Predictable Revenue Engine",
    heroSubheadline: "Own your audience independent of platform algorithms. We build automated email funnels that nurture prospects, resurrect lapsed customers, and maximize lifetime value.",
    problemsSolved: [
      {
        title: "Emails Landing in the Spam or Promotions Folder",
        description: "Poor technical domain setup ruins deliverability. We authenticate DKIM, SPF, and DMARC protocols to ensure inbox placement.",
      },
      {
        title: "Dull, Ignored Newsletters With Low Open Rates",
        description: "Boring corporate blasts get deleted. We write compelling subject lines and personalized copy that demands to be opened.",
      },
      {
        title: "No Automated Customer Nurture Flows",
        description: "Leads go cold without immediate follow-ups. We build 24/7 automated sequences that trigger instantly upon subscriber actions.",
      },
    ],
    solutions: [
      {
        title: "Automated Lifecycle Funnel Engineering",
        description: "Building automated Welcome Series, Abandoned Cart/Checkout recoveries, Post-Purchase cross-sells, and Win-Back sequences.",
      },
      {
        title: "Audience Segmentation & Behavioral Personalization",
        description: "Dividing your subscriber list by purchase history, engagement level, and industry to send hyper-relevant messages.",
      },
      {
        title: "Deliverability & Technical Domain Auditing",
        description: "Configuring dedicated sending domains, warming up IPs, and scrubbing inactive contacts to maintain 98%+ deliverability.",
      },
    ],
    keyFeatures: [
      {
        title: "Responsive HTML Email Templates",
        description: "Dark-mode compatible, mobile-responsive email layouts that render flawlessly across Gmail, Apple Mail, and Outlook.",
      },
      {
        title: "A/B Subject Line & Preview Text Testing",
        description: "Continuous testing of emotional hooks, curiosity gaps, and promotional angles to lift open rates.",
      },
      {
        title: "Klaviyo & Mailchimp Deep Integration",
        description: "Seamless synchronization with your e-commerce platform or CRM to trigger emails based on exact user behaviors.",
      },
      {
        title: "Revenue & Customer LTV Analytics",
        description: "Detailed reporting attributing every dollar generated directly to specific automated campaigns and broadcast emails.",
      },
    ],
    process: [
      { step: "01", title: "Deliverability & Technical Audit", description: "Verifying SPF, DKIM, DMARC, checking sender reputation, and cleaning bounces from your list." },
      { step: "02", title: "Lifecycle Flow Architecture", description: "Designing automated sequences for new subscribers, abandoned carts, and high-value customer VIPs." },
      { step: "03", title: "Copywriting & Template Design", description: "Writing persuasive, story-driven emails and designing branded responsive templates." },
      { step: "04", title: "A/B Testing & Broadcast Management", description: "Sending scheduled promotional broadcasts and refining flow trigger delays based on open/click data." },
    ],
    technologies: ["Klaviyo", "Mailchimp", "Brevo", "ActiveCampaign", "Figma", "Litmus"],
    deliverables: ["Domain Deliverability Setup (SPF/DKIM/DMARC)", "Core Automated Lifecycle Sequences (4-6 flows)", "Custom Branded Responsive Email Templates", "Audience Segmentation Matrix", "Monthly Revenue & Deliverability Report"],
    faqs: [
      { question: "What kind of ROI can we expect from email marketing?", answer: "Email marketing consistently delivers an average ROI of $36 to $42 for every $1 spent, making it the most profitable digital marketing channel for client retention and repeat sales." },
      { question: "How often should our company send email campaigns?", answer: "For B2B companies, a weekly or bi-weekly value-driven email works best. For e-commerce brands, 2 to 3 targeted segment broadcasts per week combined with automated trigger flows produces optimal revenue without causing list fatigue." },
    ],
    metaTitle: "Email Marketing & Automation Services | VGrow Technologies",
    metaDescription: "Drive predictable revenue with VGrow Technologies. Automated email flows, Klaviyo setup, newsletter campaigns, and high-deliverability email marketing.",
  },
  {
    id: "branding",
    slug: "branding",
    title: "Branding & Brand Identity",
    shortDescription: "Distinctive, cohesive brand identities including logos, typography systems, color palettes, and comprehensive brand books that command prestige.",
    category: "Design",
    icon: "Layers",
    heroHeadline: "Craft an Iconic Brand Identity That Commands Prestige",
    heroSubheadline: "Your brand is what people say about your business when you leave the room. We forge memorable, timeless brand identities that inspire customer trust and justify premium pricing.",
    problemsSolved: [
      {
        title: "Unmemorable, Inconsistent Visual Identity",
        description: "A patchwork of inconsistent logos and fonts creates an amateur impression. We deliver complete, unified brand ecosystems.",
      },
      {
        title: "Inability to Justify Premium Rates",
        description: "Commoditized branding forces you into price wars. Distinctive, luxury-grade identity allows you to command higher rates.",
      },
      {
        title: "Lack of Clear Brand Guidelines",
        description: "Internal teams and external vendors guessing fonts and colors dilute your reputation. We create definitive Brand Guidelines.",
      },
    ],
    solutions: [
      {
        title: "Comprehensive Visual Identity Systems",
        description: "Bespoke primary logos, secondary marks, favicons, custom color palettes, and typographic hierarchies.",
      },
      {
        title: "Definitive Brand Style Guides (Brand Books)",
        description: "Documented rules governing logo clear space, unacceptable color pairings, imagery styling, and stationery applications.",
      },
      {
        title: "Brand Voice & Positioning Strategy",
        description: "Articulating your brand mission, vision, core values, elevator pitch, and unique value proposition (UVP).",
      },
    ],
    keyFeatures: [
      {
        title: "Vector Logo Master Suite",
        description: "Delivered in all standard industry formats (SVG, EPS, PNG, PDF) optimized for digital screens and physical print.",
      },
      {
        title: "Typographic Architecture",
        description: "Curated pairings of display, body, and monospace font families with complete licensing documentation.",
      },
      {
        title: "Color Palette & Contrast Matrices",
        description: "Primary, secondary, and accent colors calibrated for digital web accessibility (WCAG) and Pantone print matching.",
      },
      {
        title: "Collateral & Social Media Starter Kit",
        description: "Branded business cards, email signature templates, presentation deck covers, and social media banner templates.",
      },
    ],
    process: [
      { step: "01", title: "Brand Discovery & Archetype Workshop", description: "Uncovering your company heritage, core audience values, emotional triggers, and competitor positioning." },
      { step: "02", title: "Concept Exploration & Moodboarding", description: "Developing distinct visual directions exploring typography, iconography, and color theories." },
      { step: "03", title: "Design Refinement & Application Testing", description: "Testing selected brand marks across real-world mockups: packaging, mobile apps, billboards, and apparel." },
      { step: "04", title: "Brand Guidelines & Asset Delivery", description: "Compiling the comprehensive Brand Book and delivering production-ready asset packages." },
    ],
    technologies: ["Adobe Illustrator", "Figma", "Adobe Photoshop", "InDesign"],
    deliverables: ["Primary & Secondary Logo Suite (All Vector Formats)", "Comprehensive Brand Style Guide PDF", "Color Palette (HEX, RGB, CMYK, Pantone)", "Typography System & Licensing Guide", "Social Media & Stationery Template Pack"],
    faqs: [
      { question: "What is the difference between a logo and a brand identity?", answer: "A logo is just a visual mark. A brand identity is the complete sensory system: typography, colors, tone of voice, visual rules, and emotional positioning that make your company instantly recognizable." },
      { question: "Do we receive full copyright and ownership of the designs?", answer: "Yes, upon final delivery and project completion, all intellectual property and copyright rights are transferred completely to your business." },
    ],
    metaTitle: "Brand Identity & Branding Agency | VGrow Technologies",
    metaDescription: "Define your market presence with VGrow Technologies. Comprehensive branding, bespoke logo design, typography systems, and complete brand identity guidelines.",
  },
  {
    id: "graphic-design",
    slug: "graphic-design",
    title: "Graphic Design",
    shortDescription: "Striking visual marketing collateral, advertising banners, infographics, presentation pitch decks, and digital illustrations that captivate your audience.",
    category: "Design",
    icon: "Image",
    heroHeadline: "Compelling Graphic Design That Elevates Every Marketing Touchpoint",
    heroSubheadline: "From high-stakes pitch decks to scroll-stopping digital advertising banners, our graphic design studio brings your brand story to life with visual brilliance.",
    problemsSolved: [
      {
        title: "Generic Stock Imagery & Lackluster Visuals",
        description: "Stock photos make brands look forgettable. We design custom marketing assets that reinforce your unique brand authority.",
      },
      {
        title: "Unprofessional Investor Presentation Decks",
        description: "Cluttered, poorly formatted pitch decks turn off investors and clients. We design sleek, persuasive presentations.",
      },
      {
        title: "Slow Turnarounds on Marketing Collateral",
        description: "Marketing campaigns stall when design takes weeks. We provide dependable, rapid graphic design workflows.",
      },
    ],
    solutions: [
      {
        title: "Digital Advertising & Social Creative Suites",
        description: "High-converting ad banners, social carousels, YouTube thumbnails, and display ads formatted for all digital platforms.",
      },
      {
        title: "Investor Pitch Decks & Corporate Presentations",
        description: "Executive presentation decks designed in Figma, Keynote, or PowerPoint that communicate complex value propositions clearly.",
      },
      {
        title: "Print & Environmental Collateral",
        description: "Brochures, corporate catalogs, conference trade-show booths, roll-up banners, and merchandise design ready for print.",
      },
    ],
    keyFeatures: [
      {
        title: "Pixel-Perfect Digital & Vector Formats",
        description: "High-resolution exports optimized for retina web screens and press-ready CMYK print files.",
      },
      {
        title: "Custom Infographics & Data Visualizations",
        description: "Translating dry spreadsheets and statistics into engaging, easily shareable visual narratives.",
      },
      {
        title: "Consistent Brand Alignment",
        description: "Strict adherence to your existing color palette, typography guidelines, and visual language.",
      },
      {
        title: "Rapid Asset Iteration",
        description: "Organized Figma source files allowing rapid resizing and localization for different marketing campaigns.",
      },
    ],
    process: [
      { step: "01", title: "Creative Brief & Asset Inventory", description: "Reviewing campaign objectives, copy outlines, target dimensions, and brand guidelines." },
      { step: "02", title: "Concept Ideation & Layout", description: "Exploring visual compositions, typography hierarchy, and key focal points." },
      { step: "03", title: "Refinement & Asset Variations", description: "Polishing details, color calibration, and rendering across multi-platform aspect ratios (1:1, 9:16, 16:9)." },
      { step: "04", title: "Final Export & Packaging", description: "Exporting optimized WebP/PNG formats and press-ready PDF vectors with embedded fonts." },
    ],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Adobe InDesign", "PowerPoint / Keynote"],
    deliverables: ["Complete Multi-Platform Ad Banners", "Executive Presentation Deck (Editable)", "Custom Infographic Vector Assets", "Print-Ready PDF Files with Bleed", "Organized Figma/Photoshop Source Files"],
    faqs: [
      { question: "Can you design in editable formats like PowerPoint or Figma?", answer: "Yes! We provide master files in Figma, PowerPoint, Keynote, or Illustrator depending on what your internal team prefers to use." },
      { question: "Do you handle print specifications and bleeds for physical collateral?", answer: "Yes, all print collateral is calibrated to exact commercial printer specifications with proper bleed margins, crop marks, and CMYK color spaces." },
    ],
    metaTitle: "Professional Graphic Design Services | VGrow Technologies",
    metaDescription: "Elevate your marketing materials with VGrow Technologies. Custom digital advertising banners, pitch decks, infographics, and corporate graphic design.",
  },
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortDescription: "User-centric interface and experience design engineered through rigorous user research, wireframing, usability testing, and interactive Figma prototyping.",
    category: "Design",
    icon: "Palette",
    heroHeadline: "Intuitive UI/UX Design Engineered for Human-Centric Delight",
    heroSubheadline: "Great software feels effortless. We merge rigorous usability research with modern design aesthetics to create interfaces that users love and convert with ease.",
    problemsSolved: [
      {
        title: "High Churn Rates & User Friction",
        description: "Confusing application layouts cause users to abandon software. We simplify complex workflows into frictionless, intuitive journeys.",
      },
      {
        title: "Costly Developer Rework Due to Unclear Specs",
        description: "Coding without validated prototypes results in endless revisions. We validate designs with interactive prototypes before a line of code is written.",
      },
      {
        title: "Inaccessible Interfaces That Fail Usability Standards",
        description: "Ignoring accessibility alienates users and invites legal liabilities. We design to strict WCAG 2.1 AA standards.",
      },
    ],
    solutions: [
      {
        title: "User Journey Mapping & Information Architecture",
        description: "Mapping end-to-end customer workflows, user states, edge cases, and intuitive navigation structures.",
      },
      {
        title: "Interactive High-Fidelity Prototyping",
        description: "Building clickable Figma prototypes that simulate realistic states, micro-interactions, modal overlays, and error flows.",
      },
      {
        title: "Scalable Design System Creation",
        description: "Building complete component libraries with auto-layout, interactive variants, design tokens, and documentation for developers.",
      },
    ],
    keyFeatures: [
      {
        title: "User Persona & Empathy Mapping",
        description: "Grounded in genuine user research, competitor bench-marking, and qualitative user interviews.",
      },
      {
        title: "Comprehensive Component State Matrix",
        description: "Designing default, hover, active, disabled, loading, and error states for every interactive component.",
      },
      {
        title: "Mobile & Web Responsive Paradigms",
        description: "Adapting complex desktop dashboards into intuitive mobile touch interfaces with bottom navigation and swipe gestures.",
      },
      {
        title: "Seamless Developer Handoff",
        description: "Precise CSS specifications, inspectable properties, exported assets, and spacing documentation in Figma.",
      },
    ],
    process: [
      { step: "01", title: "Research & Journey Mapping", description: "Auditing user pain points, competitor experiences, and creating detailed user journey maps." },
      { step: "02", title: "Low-Fidelity Wireframes", description: "Mapping out structural layout solutions and testing navigation logic rapidly without visual distraction." },
      { step: "03", title: "High-Fidelity UI & Design Systems", description: "Applying typography, color systems, micro-interactions, and building modular design components." },
      { step: "04", title: "Interactive Prototype & Usability Testing", description: "Conducting user testing sessions, gathering feedback, and polishing prior to developer handoff." },
    ],
    technologies: ["Figma", "FigJam", "Maze Usability Testing", "Miro", "Protopie"],
    deliverables: ["Full Interactive Figma Prototype", "Comprehensive Component Design System", "User Flow & Wireframe Documentation", "Usability Test Findings Report", "Developer Handoff Guide"],
    faqs: [
      { question: "What is the difference between UI and UX design?", answer: "UX (User Experience) is the functional architecture: how the product works, how easily users achieve goals, and information flow. UI (User Interface) is the aesthetic presentation: the typography, colors, spacing, and visual delight." },
      { question: "How do you ensure developers can build what is designed?", answer: "We design using Figma auto-layout and flexbox-compatible spacing systems, providing complete tokenized design systems that translate directly to Tailwind CSS or component code." },
    ],
    metaTitle: "UI/UX Design Services & Prototyping | VGrow Technologies",
    metaDescription: "Design intuitive digital products with VGrow Technologies. Human-centered UI/UX design, interactive Figma prototypes, design systems, and usability testing.",
  },
  {
    id: "ai-automation",
    slug: "ai-automation",
    title: "AI & Marketing Automation",
    shortDescription: "Intelligent AI workflows, automated lead nurturing, CRM integrations, and smart conversational agents that eliminate repetitive tasks and scale operations.",
    category: "AI & Automation",
    icon: "Sparkles",
    heroHeadline: "Scale Business Operations With Intelligent AI & Automation",
    heroSubheadline: "Eliminate manual data entry, automate lead qualification, and deliver 24/7 client support. We build custom AI-powered workflows that save hundreds of hours.",
    problemsSolved: [
      {
        title: "Manual, Repetitive Administrative Tasks",
        description: "Teams wasting hours copying leads between spreadsheets, CRMs, and email tools. We build automated synchronization pipelines.",
      },
      {
        title: "Slow Lead Response Times Losing Deals",
        description: "Leads not contacted within 5 minutes are 10x less likely to convert. Our automated AI systems respond within seconds.",
      },
      {
        title: "Disorganized Customer Data & Siloed Tools",
        description: "Siloed data prevents actionable insights. We unify your CRM, marketing platforms, and communication channels seamlessly.",
      },
    ],
    solutions: [
      {
        title: "Automated Lead Routing & Instant Nurturing",
        description: "Instant routing of new website leads into your CRM, sending automated WhatsApp/SMS notifications, and booking calendar meetings.",
      },
      {
        title: "Custom AI Chatbots & Customer Concierges",
        description: "Trained on your business documentation to answer customer FAQs, qualify prospects, and collect contact details 24/7.",
      },
      {
        title: "End-to-End Workflow Automation",
        description: "Connecting Make.com, Zapier, n8n, and custom webhooks to automate invoicing, onboarding, reporting, and fulfillment.",
      },
    ],
    keyFeatures: [
      {
        title: "24/7 Intelligent AI Response Systems",
        description: "Conversational agents that understand intent, maintain context, and answer detailed technical queries accurately.",
      },
      {
        title: "Multi-Platform CRM Synchronization",
        description: "Bi-directional sync between HubSpot, Salesforce, Zoho, ClickUp, and custom database backends.",
      },
      {
        title: "WhatsApp & SMS Automation",
        description: "Triggering transactional confirmations, appointment reminders, and follow-ups directly through WhatsApp Business API.",
      },
      {
        title: "Automated Executive Reporting Dashboards",
        description: "Consolidating marketing performance into automated weekly executive summaries delivered to Slack or email.",
      },
    ],
    process: [
      { step: "01", title: "Workflow Audit & Opportunity Mapping", description: "Mapping your team's repetitive tasks, manual handoffs, and customer touchpoints ripe for automation." },
      { step: "02", title: "Architecture & Integration Design", description: "Designing secure data pipelines, API integrations, and webhook triggers." },
      { step: "03", title: "AI Prompt Engineering & Development", description: "Training AI agents, building Make/n8n scenarios, and setting up error-handling protocols." },
      { step: "04", title: "Testing, Training & Handover", description: "Simulating edge-case failures, training your team, and launching the automated system." },
    ],
    technologies: ["OpenAI API", "Make.com", "n8n", "Zapier", "WhatsApp Business API", "HubSpot", "Python"],
    deliverables: ["Fully Configured Automation Workflows", "Trained AI Customer Service / Lead Agent", "CRM Webhook Integration & Mapping", "Error Notification & Monitoring System", "Workflow Architecture Documentation"],
    faqs: [
      { question: "How safe is integrating AI into our business workflows?", answer: "We implement strict security boundaries, ensuring proprietary customer data is never used to train public models, paired with human-in-the-loop fallback safeguards." },
      { question: "Can automation integrate with our existing CRM and software?", answer: "Yes, we integrate with all modern platforms via REST APIs, webhooks, or automation engines like Make, Zapier, and n8n." },
    ],
    metaTitle: "AI & Marketing Automation Services | VGrow Technologies",
    metaDescription: "Supercharge operational efficiency with VGrow Technologies. Custom AI agents, lead nurturing automation, CRM integration, and intelligent business workflows.",
  },
  {
    id: "lead-generation",
    slug: "lead-generation",
    title: "Lead Generation",
    shortDescription: "Predictable, multi-channel B2B and B2C lead generation systems that fill your pipeline with pre-qualified, sales-ready commercial opportunities.",
    category: "Marketing",
    icon: "Users",
    heroHeadline: "Fuel Your Sales Pipeline With High-Intent Qualified Leads",
    heroSubheadline: "Stop relying on unpredictable referrals. We architect systematic inbound and outbound lead acquisition funnels that deliver a continuous stream of sales-ready prospects.",
    problemsSolved: [
      {
        title: "Unpredictable Feast-or-Famine Revenue Cycles",
        description: "Relying on word-of-mouth makes revenue unpredictable. We build repeatable client acquisition pipelines that operate every day.",
      },
      {
        title: "Low-Quality Leads Wasting Sales Time",
        description: "Sales teams burn hours talking to tyre-kickers with no budget. We implement multi-step qualification filters before leads hit your calendar.",
      },
      {
        title: "High Customer Acquisition Costs (CAC)",
        description: "Scattered marketing tactics drive up acquisition costs. We optimize every touchpoint to reduce cost per qualified opportunity.",
      },
    ],
    solutions: [
      {
        title: "Multi-Channel Inbound Funnel Design",
        description: "Combining high-intent Google Search, targeted paid social ads, and interactive quote calculators to capture active buyers.",
      },
      {
        title: "Conversion-Engineered Landing Pages",
        description: "Fast-loading, distraction-free landing pages with compelling social proof, clear value propositions, and frictionless lead forms.",
      },
      {
        title: "Pre-Qualification & Appointment Booking",
        description: "Multi-step qualification forms that filter leads by budget and company size, directly scheduling calls into your calendar.",
      },
    ],
    keyFeatures: [
      {
        title: "Multi-Step Lead Qualification Quizzes",
        description: "Interactive forms that ask qualifying questions, increasing completion rates while ensuring lead quality.",
      },
      {
        title: "Instant Lead Notification & SMS Alerts",
        description: "Instant notifications sent to your sales team via WhatsApp, SMS, or Slack within 60 seconds of form submission.",
      },
      {
        title: "Lead Scoring & CRM Routing",
        description: "Automatically ranking leads based on company size, budget, and urgency, assigning high-value deals to senior reps.",
      },
      {
        title: "Comprehensive Lead Tracking Dashboard",
        description: "Tracking lead volume, cost per lead (CPL), qualification rate, and closed revenue in real time.",
      },
    ],
    process: [
      { step: "01", title: "Ideal Customer Profile (ICP) Targeting", description: "Defining target industry verticals, decision-maker job titles, minimum budgets, and geography." },
      { step: "02", title: "Funnel & Landing Page Build", description: "Engineering conversion-focused landing pages, qualification forms, and automated calendar scheduling." },
      { step: "03", title: "Multi-Channel Traffic Activation", description: "Deploying targeted PPC campaigns across Google and Meta to drive high-intent prospect traffic." },
      { step: "04", title: "Funnel Optimization & Scaling", description: "Analyzing form drop-off rates, testing value propositions, and scaling winning traffic channels." },
    ],
    technologies: ["Google Ads", "Meta Ads", "Typeform / React Hook Form", "HubSpot", "Calendly", "Zapier"],
    deliverables: ["Dedicated Lead Generation Landing Page", "Interactive Multi-Step Qualification Form", "Instant Lead Alert System (Slack / WhatsApp)", "Targeted PPC Campaign Setup", "Live Lead Volume & CPL Dashboard"],
    faqs: [
      { question: "What is the difference between a lead and a qualified lead?", answer: "A lead is simply contact information. A qualified lead is a prospective customer who fits your Ideal Customer Profile, possesses the required budget, and has an immediate need for your services." },
      { question: "How quickly do new leads reach our sales team?", answer: "Instantly. Through automated webhooks, lead details are dispatched to your team via SMS, email, or Slack within seconds of submission." },
    ],
    metaTitle: "B2B & B2C Lead Generation Services | VGrow Technologies",
    metaDescription: "Fill your sales pipeline with VGrow Technologies. Predictable lead generation systems, high-converting landing pages, and pre-qualified commercial prospects.",
  },
];
