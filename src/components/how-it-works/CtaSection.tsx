"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/5 via-transparent to-blue-500/5"></div>
      </div>

      {/* Animated elements */}
      <motion.div
        className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 md:p-12 border border-border/50" data-aos="fade-up">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join the <span className="gradient-primary gradient-text">AbtalQuest</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Start your child's journey to resilience, discipline, and positive habits today. Download the app and begin the adventure!
            </p>

            <div className="grid sm:grid-cols-2 gap-6 max-w-lg mx-auto mb-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-100 dark:bg-gray-700 rounded-xl p-5 border border-border/50"
              >
                <div className="mb-3">
                  <svg viewBox="0 0 24 24" className="h-8 w-8 text-black dark:text-white mx-auto" fill="currentColor">
                    <path d="M17.5639 12.4882C17.5391 9.81068 19.8135 8.65348 19.9106 8.59395C18.6615 6.80121 16.6801 6.56868 16.0033 6.54911C14.3396 6.37441 12.7335 7.52868 11.8905 7.52868C11.0278 7.52868 9.71545 6.56868 8.32689 6.59905C6.5244 6.62845 4.84692 7.65288 3.92392 9.25081C2.02143 12.5174 3.44698 17.2746 5.28444 19.9085C6.19965 21.1956 7.26427 22.6456 8.65283 22.5861C10.0009 22.5221 10.5213 21.7093 12.1354 21.7093C13.73 21.7093 14.2181 22.5861 15.6262 22.5478C17.0732 22.5221 17.9953 21.2437 18.8695 19.943C19.9106 18.4695 20.3297 17.0322 20.3493 16.9571C20.3102 16.9395 17.5938 15.8687 17.5639 12.4882Z"/>
                    <path d="M15.199 5.50628C15.9522 4.58328 16.4645 3.31868 16.3358 2.02441C15.223 2.06648 13.8296 2.75781 13.0374 3.65368C12.3304 4.44688 11.7096 5.75688 11.858 6.99848C13.0967 7.09368 14.4068 6.41018 15.199 5.50628Z"/>
                  </svg>
                </div>
                <h3 className="font-bold mb-1">App Store</h3>
                <p className="text-sm text-muted-foreground mb-3">Download for iOS devices</p>
                <Button className="w-full" size="sm">
                  <Download className="h-4 w-4 mr-1" /> Download
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-100 dark:bg-gray-700 rounded-xl p-5 border border-border/50"
              >
                <div className="mb-3">
                  <svg viewBox="0 0 24 24" className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto" fill="currentColor">
                    <path d="M3.00938 20.8995V3.10055C3.00938 2.54486 3.20938 2.10393 3.60938 1.77783L12.5625 12.0006L3.60938 22.2141C3.20938 21.8926 3.00938 21.4516 3.00938 20.8995Z" />
                    <path d="M16.0859 15.5391L5.90625 21.4313L14.0859 12.0016L16.0859 15.5391Z" />
                    <path d="M21.6516 10.9969C21.9281 11.4063 22.0516 11.8625 22.0203 12.3656C21.9938 12.8688 21.8422 13.325 21.5656 13.7344L19.4719 14.9969L17.2172 11.1L19.4719 7.19841L21.6516 10.9969Z" />
                    <path d="M5.90625 2.56868L16.0859 8.46087L14.0859 11.9984L5.90625 2.56868Z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-1">Google Play</h3>
                <p className="text-sm text-muted-foreground mb-3">Download for Android devices</p>
                <Button className="w-full" size="sm">
                  <Download className="h-4 w-4 mr-1" /> Download
                </Button>
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="outline">
                <Link href="/join">
                  Learn More About Joining <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button asChild variant="link">
                <Link href="/contact">
                  Contact Us For Support
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
