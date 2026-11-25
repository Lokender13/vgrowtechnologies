import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { COMPANY_DETAILS } from "@/lib/utils";

export const viewport: Viewport = {
  themeColor: "#040812",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vgrowtechnologies.com"),
  title: {
    default: "VGrow Technologies | Elevating Brands. Defining Excellence.",
    template: "%s | VGrow Technologies",
  },
  description:
    "High-end digital marketing and technology agency. We engineer custom high-converting web applications, authoritative SEO strategies, and automated growth engines.",
  keywords: [
    "Digital Marketing Agency",
    "Website Development",
    "SEO Services",
    "Google Ads PPC",
    "Meta Ads",
    "UI/UX Design",
    "AI Automation",
    "E-Commerce Development",
    "VGrow Technologies",
  ],
  authors: [{ name: "VGrow Technologies" }],
  creator: "VGrow Technologies",
  publisher: "VGrow Technologies",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vgrowtechnologies.com",
    siteName: "VGrow Technologies",
    title: "VGrow Technologies | Elevating Brands. Defining Excellence.",
    description:
      "Transform your digital presence into measurable business growth. High-performance web development, SEO, and paid media.",
    images: [
      {
        url: "/images/logo.png",
        width: 861,
        height: 443,
        alt: "VGrow Technologies Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VGrow Technologies | Digital Marketing & Web Development",
    description:
      "Transform your digital presence into measurable growth with VGrow Technologies.",
    creator: "@vgrowtech",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_DETAILS.name,
    legalName: COMPANY_DETAILS.legalName,
    url: "https://vgrowtechnologies.com",
    logo: "https://vgrowtechnologies.com/images/logo.png",
    description:
      "VGrow Technologies is an international digital marketing agency and custom software development company.",
    telephone: COMPANY_DETAILS.phone,
    email: COMPANY_DETAILS.email,
    sameAs: [
      COMPANY_DETAILS.socials.linkedin,
      COMPANY_DETAILS.socials.twitter,
      COMPANY_DETAILS.socials.instagram,
      COMPANY_DETAILS.socials.github,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY_DETAILS.phone,
      contactType: "customer service",
      email: COMPANY_DETAILS.email,
      availableLanguage: ["English", "Hindi"],
    },
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-screen bg-brand-dark text-slate-100 font-sans antialiased selection:bg-brand-orange selection:text-white flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
