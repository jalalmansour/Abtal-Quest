"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function HowItWorksHero() {
  const scrollToContent = () => {
    const journeySection = document.getElementById("journey-section");
    if (journeySection) {
      journeySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-950 -z-10"></div>

      {/* Animated shapes */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/3 left-1/5 w-64 h-64 rounded-full bg-gradient-to-r from-orange-400 to-amber-300 opacity-10 blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 opacity-10 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container-custom text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            How <span className="gradient-primary gradient-text">AbtalQuest</span> Works
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Discover how our innovative approach combines digital engagement with real-world challenges to build resilience, discipline, and positive habits in children.
          </p>

          <div className="flex flex-col items-center">
            <Button
              onClick={scrollToContent}
              variant="ghost"
              size="lg"
              className="animate-bounce rounded-full h-16 w-16 flex items-center justify-center"
            >
              <ArrowDown className="h-8 w-8" />
            </Button>
            <span className="text-sm text-muted-foreground mt-2">Scroll to Learn More</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
