"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  UserCircle,
  Sparkles,
  Dumbbell,
  Trophy,
  Heart,
  BarChart4,
  ArrowRight
} from "lucide-react";

const journeySteps = [
  {
    id: 1,
    icon: <UserCircle className="h-12 w-12 text-purple-500" />,
    title: "Create Your Personalized Avatar",
    description: "Children begin their journey by designing a unique hero avatar that represents them in the AbtalQuest world.",
    color: "border-l-purple-500 dark:bg-purple-950/20"
  },
  {
    id: 2,
    icon: <Sparkles className="h-12 w-12 text-orange-500" />,
    title: "Explore the VIP Garden",
    description: "Access age-appropriate wisdom, mindfulness activities, and growth stories that build a resilient mindset.",
    color: "border-l-orange-500 dark:bg-orange-950/20"
  },
  {
    id: 3,
    icon: <Dumbbell className="h-12 w-12 text-blue-500" />,
    title: "Take on Real-Life Challenges",
    description: "Complete parent-set tasks that develop discipline, responsibility, and practical life skills.",
    color: "border-l-blue-500 dark:bg-blue-950/20"
  },
  {
    id: 4,
    icon: <Trophy className="h-12 w-12 text-amber-500" />,
    title: "Earn Rewards & Points",
    description: "Collect points, badges, and unlock new features as you progress through your resilience journey.",
    color: "border-l-amber-500 dark:bg-amber-950/20"
  },
  {
    id: 5,
    icon: <Heart className="h-12 w-12 text-pink-500" />,
    title: "Build Resilience & Confidence",
    description: "Develop lasting positive habits and a resilient mindset that transfer to all areas of life.",
    color: "border-l-pink-500 dark:bg-pink-950/20"
  },
  {
    id: 6,
    icon: <BarChart4 className="h-12 w-12 text-green-500" />,
    title: "Track Progress & Growth",
    description: "Parents and children can monitor development and celebrate achievements together.",
    color: "border-l-green-500 dark:bg-green-950/20"
  }
];

export default function JourneySection() {
  return (
    <section id="journey-section" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The AbtalQuest Journey
          </h2>
          <p className="text-lg text-muted-foreground">
            Follow the step-by-step journey that children and parents experience with AbtalQuest, from avatar creation to long-term resilience building.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={(index % 2) * 100}
            >
              <Card className={`card-hover h-full border-l-4 ${step.color} bg-white dark:bg-gray-800`}>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-muted/50 rounded-full p-3 mr-4">
                      {step.icon}
                    </div>
                    <div>
                      <div className="flex items-center">
                        <span className="text-lg font-bold mr-2 text-primary">Step {step.id}</span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <h3 className="text-xl font-bold mt-1 mb-3">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center" data-aos="fade-up">
          <p className="text-lg max-w-2xl mx-auto">
            This journey is designed to create a <span className="font-bold">continuous positive feedback loop</span> where mindset development and real-world actions reinforce each other, building lasting resilience.
          </p>
        </div>
      </div>
    </section>
  );
}
