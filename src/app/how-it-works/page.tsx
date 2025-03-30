import { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import HowItWorksHero from "@/components/how-it-works/HeroSection";
import JourneySection from "@/components/how-it-works/JourneySection";
import ComparisonSection from "@/components/how-it-works/ComparisonSection";
import FeaturesSection from "@/components/how-it-works/FeaturesSection";
import WalkthroughSection from "@/components/how-it-works/WalkthroughSection";
import DemoSection from "@/components/how-it-works/DemoSection";
import CtaSection from "@/components/how-it-works/CtaSection";

export const metadata: Metadata = {
  title: "How It Works | AbtalQuest",
  description: "Learn how AbtalQuest builds resilience and discipline in children through fun, engaging challenges and a comprehensive reward system.",
};

export default function HowItWorksPage() {
  return (
    <PageLayout>
      <HowItWorksHero />
      <JourneySection />
      <ComparisonSection />
      <FeaturesSection />
      <WalkthroughSection />
      <DemoSection />
      <CtaSection />
    </PageLayout>
  );
}
