"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section className="relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 hero-gradient opacity-40" />

      {/* Animated shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-orange-400 to-amber-300 opacity-20 blur-3xl"
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
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 opacity-20 blur-3xl"
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

      <div className="container-custom min-h-[90vh] flex flex-col justify-center py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero text content */}
          <div className="space-y-8" data-aos="fade-right">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="gradient-primary gradient-text">Building Stronger Kids,</span>
              <br /> One Challenge at a Time!
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              AbtalQuest is an educational tool focused on building resilience, discipline, and positive habits in children through fun, engaging challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="btn-bounce btn-glow">
                <Download className="mr-2 h-5 w-5" /> Download App
              </Button>
              <Link href="/how-it-works">
                <Button variant="outline" size="lg" className="group">
                  Learn How It Works
                  <motion.span
                    animate={{ x: isHovering ? 5 : 0 }}
                    className="inline-block ml-2"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero image/3D elements */}
          <div className="relative" data-aos="fade-left" data-aos-delay="200">
            <div className="relative">
              <motion.div
                className="card-3d bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 border border-border/50"
                whileHover={{
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                  transition: { duration: 0.5 },
                }}
                onHoverStart={() => setIsHovering(true)}
                onHoverEnd={() => setIsHovering(false)}
              >
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-gradient-to-r from-orange-100 to-amber-100">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white text-3xl font-bold">AQ</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Child Avatar</h3>
                      <p className="text-sm text-muted-foreground">
                        Create your unique hero and start your resilience journey
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center">
                      <span className="text-white font-bold text-xs">1</span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700 flex-grow">
                      <div className="h-2 rounded-full gradient-primary w-[70%]"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-md p-2 text-center">
                      <p className="text-xs text-muted-foreground">Completed</p>
                      <p className="font-bold">7/10</p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-md p-2 text-center">
                      <p className="text-xs text-muted-foreground">Streak</p>
                      <p className="font-bold">5 days</p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-md p-2 text-center">
                      <p className="text-xs text-muted-foreground">Rewards</p>
                      <p className="font-bold">12</p>
                    </div>
                  </div>

                  <Button className="w-full">
                    Continue Your Quest <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>

              {/* Decorative elements behind the card */}
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 blur-xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full opacity-20 blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
