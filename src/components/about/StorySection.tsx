"use client";

import { motion } from "framer-motion";

export default function StorySection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Story
          </h2>
          <p className="text-lg text-muted-foreground">
            AbtalQuest was born from a personal observation and a powerful vision to transform how children interact with technology.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-blue-500 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12 relative">
            {/* Timeline item 1 */}
            <div className="md:grid md:grid-cols-2 items-center gap-8" data-aos="fade-up">
              {/* Left side content (on desktop) */}
              <div className="text-right mb-8 md:mb-0 md:pr-12">
                <span className="text-orange-500 font-bold mb-2 block">2019</span>
                <h3 className="text-2xl font-bold mb-4">The Observation</h3>
                <p className="text-muted-foreground">
                  Our founders, with backgrounds in education and technology, observed an alarming trend: children were becoming increasingly dependent on instant gratification from social media, leading to shorter attention spans and decreased resilience.
                </p>
              </div>

              {/* Timeline point (visible on desktop) */}
              <div className="hidden md:flex justify-start items-center">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 relative -left-3 shrink-0 z-10">
                  <div className="w-3 h-3 bg-white rounded-full absolute top-1.5 left-1.5"></div>
                </div>
                <div className="bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/20 dark:to-amber-900/20 rounded-lg p-6 shadow-md card-hover w-full">
                  <motion.div
                    className="aspect-video rounded-lg bg-white/50 dark:bg-gray-800/50 flex items-center justify-center p-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-center">
                      <p className="text-sm italic text-muted-foreground">
                        "We saw children becoming increasingly addicted to digital devices, but the problem wasn't technology itself—it was how technology was being used."
                      </p>
                      <p className="text-xs mt-2 font-medium">— Jalal Mansour, Co-founder</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Mobile-only content */}
              <div className="md:hidden bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/20 dark:to-amber-900/20 rounded-lg p-6 shadow-md">
                <p className="text-sm italic text-muted-foreground">
                  "We saw children becoming increasingly addicted to digital devices, but the problem wasn't technology itself—it was how technology was being used."
                </p>
                <p className="text-xs mt-2 font-medium">— Jalal Mansour, Co-founder</p>
              </div>
            </div>

            {/* Timeline item 2 */}
            <div className="md:grid md:grid-cols-2 items-center gap-8" data-aos="fade-up">
              {/* Timeline point (visible on desktop) */}
              <div className="hidden md:flex justify-end items-center">
                <div className="bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-lg p-6 shadow-md card-hover w-full">
                  <motion.div
                    className="aspect-video rounded-lg bg-white/50 dark:bg-gray-800/50 flex items-center justify-center p-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-red-500 mr-2"></div>
                        <span className="text-sm">Decreasing attention spans</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-orange-500 mr-2"></div>
                        <span className="text-sm">Lack of persistence through difficulty</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                        <span className="text-sm">Decreased face-to-face interactions</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 relative -right-3 shrink-0 z-10">
                  <div className="w-3 h-3 bg-white rounded-full absolute top-1.5 left-1.5"></div>
                </div>
              </div>

              {/* Right side content (on desktop) */}
              <div className="text-left mb-8 md:mb-0 md:pl-12">
                <span className="text-blue-500 font-bold mb-2 block">2020</span>
                <h3 className="text-2xl font-bold mb-4">The Problem Research</h3>
                <p className="text-muted-foreground">
                  We spent a year researching the impact of passive digital consumption on children's development, working with education experts, child psychologists, and parents to understand the core problems that needed addressing.
                </p>
              </div>

              {/* Mobile-only content */}
              <div className="md:hidden bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-lg p-6 shadow-md">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-red-500 mr-2"></div>
                    <span className="text-sm">Decreasing attention spans</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-orange-500 mr-2"></div>
                    <span className="text-sm">Lack of persistence through difficulty</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                    <span className="text-sm">Decreased face-to-face interactions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline item 3 */}
            <div className="md:grid md:grid-cols-2 items-center gap-8" data-aos="fade-up">
              {/* Left side content (on desktop) */}
              <div className="text-right mb-8 md:mb-0 md:pr-12">
                <span className="text-green-500 font-bold mb-2 block">2021</span>
                <h3 className="text-2xl font-bold mb-4">AbtalQuest Is Born</h3>
                <p className="text-muted-foreground">
                  We launched AbtalQuest with a mission to flip the script on children's digital engagement—creating an app that uses technology to build real-world skills rather than replace them, focusing on resilience, discipline, and positive habit formation.
                </p>
              </div>

              {/* Timeline point (visible on desktop) */}
              <div className="hidden md:flex justify-start items-center">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 relative -left-3 shrink-0 z-10">
                  <div className="w-3 h-3 bg-white rounded-full absolute top-1.5 left-1.5"></div>
                </div>
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6 shadow-md card-hover w-full">
                  <motion.div
                    className="rounded-lg bg-white/50 dark:bg-gray-800/50 p-4 flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center mx-auto mb-3">
                        <span className="text-white text-2xl font-bold">AQ</span>
                      </div>
                      <p className="text-sm font-medium">AbtalQuest officially launches</p>
                      <p className="text-xs text-muted-foreground mt-1">With support from education partners and seed investors</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Mobile-only content */}
              <div className="md:hidden bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6 shadow-md">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-2xl font-bold">AQ</span>
                  </div>
                  <p className="text-sm font-medium">AbtalQuest officially launches</p>
                  <p className="text-xs text-muted-foreground mt-1">With support from education partners and seed investors</p>
                </div>
              </div>
            </div>

            {/* Timeline item 4 */}
            <div className="md:grid md:grid-cols-2 items-center gap-8" data-aos="fade-up">
              {/* Timeline point (visible on desktop) */}
              <div className="hidden md:flex justify-end items-center">
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6 shadow-md card-hover w-full">
                  <motion.div
                    className="rounded-lg bg-white/50 dark:bg-gray-800/50 p-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-center">
                      <p className="text-sm font-medium mb-2">Growing Impact</p>
                      <div className="flex justify-around">
                        <div>
                          <p className="text-xl font-bold text-primary">10k+</p>
                          <p className="text-xs text-muted-foreground">Active Users</p>
                        </div>
                        <div>
                          <p className="text-xl font-bold text-primary">100+</p>
                          <p className="text-xs text-muted-foreground">School Partners</p>
                        </div>
                        <div>
                          <p className="text-xl font-bold text-primary">12</p>
                          <p className="text-xs text-muted-foreground">Team Members</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 relative -right-3 shrink-0 z-10">
                  <div className="w-3 h-3 bg-white rounded-full absolute top-1.5 left-1.5"></div>
                </div>
              </div>

              {/* Right side content (on desktop) */}
              <div className="text-left mb-8 md:mb-0 md:pl-12">
                <span className="text-purple-500 font-bold mb-2 block">Today</span>
                <h3 className="text-2xl font-bold mb-4">Growing Impact</h3>
                <p className="text-muted-foreground">
                  Today, AbtalQuest has grown into a flourishing community of children, parents, educators, and partners all working together to build a generation that embraces challenges and develops the resilience needed to thrive in an increasingly complex world.
                </p>
              </div>

              {/* Mobile-only content */}
              <div className="md:hidden bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6 shadow-md">
                <div className="text-center">
                  <p className="text-sm font-medium mb-2">Growing Impact</p>
                  <div className="flex justify-around">
                    <div>
                      <p className="text-xl font-bold text-primary">10k+</p>
                      <p className="text-xs text-muted-foreground">Active Users</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-primary">100+</p>
                      <p className="text-xs text-muted-foreground">School Partners</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-primary">12</p>
                      <p className="text-xs text-muted-foreground">Team Members</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center" data-aos="fade-up">
          <p className="text-lg max-w-2xl mx-auto">
            And this is just the beginning. We're continuously evolving our approach, incorporating new research, and expanding our impact to help more children develop the skills they need for future success.
          </p>
        </div>
      </div>
    </section>
  );
}
