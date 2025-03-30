"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    id: "personalization",
    title: "Personalized Experience",
    description: "AbtalQuest adapts to each child's age, interests, and development needs. Challenges and content grow with your child, ensuring they're always appropriately challenged without becoming overwhelmed.",
    details: [
      "Age-appropriate content filters",
      "Interest-based challenge categories",
      "Difficulty progression based on skill level",
      "Custom avatar creation with unlockable features"
    ]
  },
  {
    id: "vip-garden",
    title: "The VIP Garden - Mindset Building",
    description: "Our unique virtual space where children develop the mindset foundation for resilience. Through interactive stories, guided visualization, and wisdom teachings, kids learn the mental frameworks that help them overcome challenges.",
    details: [
      "Interactive growth mindset stories",
      "Age-appropriate mindfulness exercises",
      "Animated character guides that model resilient thinking",
      "Reflection prompts that build self-awareness"
    ]
  },
  {
    id: "challenge-system",
    title: "Real-Life Challenge System",
    description: "The core of AbtalQuest is our challenge system where parents set real-world tasks that children complete to earn rewards. This bridges the digital and physical worlds, creating practical skill development.",
    details: [
      "Parent-created custom challenges",
      "Pre-made challenge templates by age group",
      "Photo/video verification of completed tasks",
      "Point system with customizable rewards"
    ]
  },
  {
    id: "progress-tracking",
    title: "Progress & Growth Tracking",
    description: "Both parents and children can visualize growth over time with our comprehensive tracking system. Celebrate achievements and identify areas for continued development.",
    details: [
      "Visual progress dashboards",
      "Skill development tracking across categories",
      "Achievement badges and milestone celebrations",
      "Parent insights and reports"
    ]
  },
  {
    id: "reward-system",
    title: "Smart Reward System",
    description: "Our carefully designed reward system balances immediate gratification with longer-term goals, teaching delayed gratification while maintaining engagement.",
    details: [
      "In-app rewards (avatar upgrades, special features)",
      "Parent-approved physical rewards",
      "Achievement badges and collectibles",
      "Multi-level challenges with increasing rewards"
    ]
  },
  {
    id: "parent-controls",
    title: "Parent Controls & Involvement",
    description: "Parents are active participants in the AbtalQuest journey, with powerful tools to guide their child's experience while gaining valuable parenting insights.",
    details: [
      "Challenge approval and verification system",
      "Usage time limits and content filters",
      "Parenting tips and strategy suggestions",
      "Family activity suggestions to complement challenges"
    ]
  }
];

export default function FeaturesSection() {
  return (
    <section className="section-padding bg-muted/50" id="features-section">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Key Features
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore the innovative features that make AbtalQuest an effective tool for building resilience, discipline, and positive habits.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="sticky top-32"
            data-aos="fade-right"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-border/50">
              <div className="aspect-[4/3] bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/20 dark:to-amber-900/20 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 mx-auto flex items-center justify-center">
                    <Star className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mt-4">AbtalQuest App</h3>
                  <p className="text-muted-foreground mt-2">Comprehensive features for growth</p>
                </div>
              </div>

              <ul className="space-y-4 mb-6">
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                  <span>Science-backed approach to building resilience</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                  <span>Combines digital engagement with real-world action</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
                  <span>Parent involvement and control</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
                  <span>Progress tracking and milestone celebrations</span>
                </li>
              </ul>

              <Button asChild className="w-full btn-bounce">
                <Link href="/join">
                  Learn More About Joining <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            data-aos="fade-left"
          >
            <Accordion type="single" collapsible className="w-full">
              {features.map((feature, index) => (
                <AccordionItem key={feature.id} value={feature.id} className="bg-white dark:bg-gray-800 mb-4 rounded-lg border border-border/50">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/10 rounded-t-lg">
                    <div className="flex items-center text-left">
                      <div className="bg-primary/10 rounded-full p-2 mr-3">
                        <span className="text-primary font-bold">{index + 1}</span>
                      </div>
                      <span className="text-lg font-bold">{feature.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0">
                    <p className="mb-4 text-muted-foreground">
                      {feature.description}
                    </p>
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">Features Include:</h4>
                      <ul className="space-y-2">
                        {feature.details.map((detail, i) => (
                          <li key={i} className="flex items-start">
                            <ArrowRight className="h-4 w-4 text-primary mr-2 mt-1 shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
