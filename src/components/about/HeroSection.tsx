"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-950 -z-10"></div>

      {/* Animated background shapes */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 left-1/5 w-64 h-64 rounded-full bg-gradient-to-r from-orange-400 to-amber-300 opacity-10 blur-3xl"
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
          className="absolute bottom-1/4 right-1/5 w-72 h-72 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 opacity-10 blur-3xl"
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

      <div className="container-custom py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6" data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="gradient-primary gradient-text">About</span> AbtalQuest
            </h1>

            <p className="text-xl text-muted-foreground">
              We're on a mission to transform how children develop resilience and discipline through engaging, meaningful digital experiences.
            </p>

            <div className="flex items-center space-x-6 pt-4">
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
              <p className="text-lg font-medium">
                Building stronger kids, one challenge at a time
              </p>
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="relative z-10">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/20 dark:to-amber-900/20 p-8 shadow-xl border border-border/50">
                <div className="h-full w-full flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center mb-6">
                    <span className="text-white text-4xl font-bold">AQ</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3">Our Purpose</h2>
                  <p className="text-muted-foreground mb-6">
                    To create a world where children embrace challenges, develop discipline, and build the resilience needed to thrive in an increasingly complex world.
                  </p>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="h-3 w-3 rounded-full bg-orange-500"></span>
                    <span className="h-3 w-3 rounded-full bg-amber-400"></span>
                    <span className="h-3 w-3 rounded-full bg-blue-500"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full opacity-20 blur-xl -z-10"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-orange-400 to-amber-300 rounded-full opacity-20 blur-xl -z-10"></div>
          </div>
        </div>

        <div className="flex justify-center mt-16" data-aos="fade-up">
          <div className="flex flex-wrap justify-center gap-4 md:gap-10">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">2021</div>
              <div className="text-sm text-muted-foreground">Founded</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">10k+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Partner Schools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">12</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
