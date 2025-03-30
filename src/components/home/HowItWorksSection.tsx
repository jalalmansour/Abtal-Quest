"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Create Your Avatar",
    description: "Children create their personalized hero character who will accompany them on their quest for resilience.",
    color: "from-purple-500 to-pink-500",
    textColor: "text-purple-600 dark:text-purple-400"
  },
  {
    number: "02",
    title: "Explore the VIP Garden",
    description: "Access mindfulness activities, growth stories, and wisdom that build a resilient mindset.",
    color: "from-orange-500 to-amber-500",
    textColor: "text-orange-600 dark:text-orange-400"
  },
  {
    number: "03",
    title: "Complete Real-Life Challenges",
    description: "Tackle age-appropriate challenges set by parents that develop real-world skills and discipline.",
    color: "from-blue-500 to-cyan-500",
    textColor: "text-blue-600 dark:text-blue-400"
  },
  {
    number: "04",
    title: "Earn Rewards & Track Progress",
    description: "Collect points, badges, and unlock new avatar features as you build your resilience streak.",
    color: "from-green-500 to-emerald-500",
    textColor: "text-green-600 dark:text-green-400"
  }
];

export default function HowItWorksSection() {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How AbtalQuest Works
          </h2>
          <p className="text-lg text-muted-foreground">
            AbtalQuest combines digital engagement with real-world action to create a comprehensive system that builds resilience in children.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute left-1/2 top-24 bottom-24 w-0.5 bg-gradient-to-b from-purple-500 via-orange-500 to-green-500 -translate-x-1/2 opacity-30"></div>

          <div className="space-y-16 lg:space-y-0 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`lg:flex items-center gap-8 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <motion.div
                  className="lg:w-1/2 mb-8 lg:mb-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div
                    className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md card-hover relative overflow-hidden border border-border/30"
                    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  >
                    {/* Number badge */}
                    <div className={`absolute -top-6 ${index % 2 === 0 ? "-right-6" : "-left-6"} h-16 w-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg text-white font-bold text-xl`}>
                      {step.number}
                    </div>

                    <div className="pt-4">
                      <h3 className={`text-2xl font-bold mb-4 ${step.textColor}`}>
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>

                <div className="hidden lg:block lg:w-1/2">
                  {/* Circle marker on the timeline */}
                  <div className="flex justify-center">
                    <div className={`h-12 w-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}>
                      <div className="h-4 w-4 rounded-full bg-white"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16" data-aos="fade-up">
          <Button asChild size="lg" className="btn-bounce">
            <Link href="/how-it-works">
              Learn More About How It Works <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
