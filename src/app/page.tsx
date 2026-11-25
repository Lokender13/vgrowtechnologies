import React from "react";
import { Hero } from "@/components/sections/Hero";
import { TrustValues } from "@/components/sections/TrustValues";
import { AboutOverview } from "@/components/sections/AboutOverview";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustValues />
      <AboutOverview />
      <ServicesOverview />
      <WhyChooseUs />
      <ProcessTimeline />
      <FeaturedProjects />
      <StatsSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
