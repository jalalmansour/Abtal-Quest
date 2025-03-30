import { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";

export const metadata: Metadata = {
  title: "About Us | AbtalQuest",
  description: "Learn about our mission to build resilience and positive habits in children through engaging challenges and gamified learning.",
};

import AboutHero from "@/components/about/HeroSection";
import MissionSection from "@/components/about/MissionSection";
import StorySection from "@/components/about/StorySection";
import TeamSection from "@/components/about/TeamSection";
import ApproachSection from "@/components/about/ApproachSection";
import PartnersSection from "@/components/about/PartnersSection";
import CtaSection from "@/components/about/CtaSection";

export default function AboutPage() {
  return (
    <PageLayout>
      <AboutHero />
      <MissionSection />
      <StorySection />
      <TeamSection />
      <ApproachSection />
      <PartnersSection />
      <CtaSection />
    </PageLayout>
  );
}
