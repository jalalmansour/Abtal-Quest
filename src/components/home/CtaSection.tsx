"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>

      {/* Animated background shapes */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 left-10 w-36 h-36 rounded-full bg-orange-400 opacity-10 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-blue-400 opacity-10 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-border/50 relative card-3d" data-aos="fade-up">
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-orange-400 to-amber-300 rounded-full opacity-20 blur-xl -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full opacity-20 blur-xl -z-10"></div>

          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Join The <span className="gradient-primary gradient-text">AbtalQuest</span> Today!
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Take the first step toward building stronger, more resilient kids with fun, engaging challenges that create lasting positive habits.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="btn-bounce btn-glow">
                <Download className="mr-2 h-5 w-5" /> Download the App
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  <Mail className="mr-2 h-5 w-5" /> Contact Us
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10k+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50k+</div>
                <div className="text-sm text-muted-foreground">Completed Challenges</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Partner Schools</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
