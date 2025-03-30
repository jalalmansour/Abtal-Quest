"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, MedalIcon, Star, Lightbulb, CheckCircle, Award, Shield } from "lucide-react";
import Link from "next/link";

export default function SolutionSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-orange-200/20 to-transparent rounded-bl-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-200/20 to-transparent rounded-tr-full -z-10"></div>

      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The AbtalQuest Solution
          </h2>
          <p className="text-lg text-muted-foreground">
            AbtalQuest replaces digital distractions with a system that builds real-life skills through fun, engaging, and rewarding challenges.
          </p>
        </div>

        <Tabs defaultValue="mindset" className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center mb-8" data-aos="fade-up">
            <TabsList className="grid w-full max-w-lg grid-cols-2">
              <TabsTrigger value="mindset" className="text-base py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-amber-500 data-[state=active]:text-white">
                Resilient Mindset
              </TabsTrigger>
              <TabsTrigger value="actions" className="text-base py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-500 data-[state=active]:text-white">
                Resilient Actions
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="mindset" className="mt-0">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6" data-aos="fade-right">
                <div className="inline-block p-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg mb-2">
                  <Lightbulb className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold">The VIP Garden: Unlocking a Resilient Mindset</h3>
                <p className="text-muted-foreground">
                  Our specially designed virtual space provides children with age-appropriate wisdom, mindfulness techniques, and growth mindset training.
                </p>

                <ul className="space-y-3">
                  {[
                    "Interactive stories that teach resilience principles",
                    "Guided visualization and mindfulness exercises",
                    "Animated characters that model growth mindset responses",
                    "Regular reflection prompts that build self-awareness"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <Button asChild className="mt-4 btn-bounce">
                  <Link href="/how-it-works#vip-garden">
                    Explore the VIP Garden <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="relative p-6" data-aos="fade-left">
                <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-border/50 p-6 card-3d">
                  <div className="absolute -top-4 -right-4 bg-orange-500 text-white text-sm font-bold py-1 px-3 rounded-full shadow-md">
                    VIP Garden
                  </div>

                  <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-gradient-to-r from-orange-100/50 to-amber-100/50 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-orange-400 to-amber-400 mx-auto mb-4 flex items-center justify-center">
                        <Star className="h-10 w-10 text-white" />
                      </div>
                      <h4 className="text-lg font-bold mb-2">Wisdom & Growth</h4>
                      <p className="text-sm text-muted-foreground">Your journey to resilience starts here</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-orange-50 dark:bg-orange-900/10 rounded-lg">
                      <div className="flex items-center">
                        <MedalIcon className="h-5 w-5 text-orange-500 mr-2" />
                        <span className="font-medium">Mindfulness Zone</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-orange-500" />
                    </div>

                    <div className="flex items-center justify-between p-3 bg-orange-50 dark:bg-orange-900/10 rounded-lg">
                      <div className="flex items-center">
                        <Lightbulb className="h-5 w-5 text-orange-500 mr-2" />
                        <span className="font-medium">Growth Stories</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-orange-500" />
                    </div>

                    <div className="flex items-center justify-between p-3 bg-orange-50 dark:bg-orange-900/10 rounded-lg">
                      <div className="flex items-center">
                        <Shield className="h-5 w-5 text-orange-500 mr-2" />
                        <span className="font-medium">Resilience Training</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-orange-500" />
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-gradient-to-r from-orange-400 to-amber-300 rounded-full opacity-20 blur-xl -z-10"></div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="actions" className="mt-0">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 relative p-6" data-aos="fade-right">
                <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-border/50 p-6 card-3d">
                  <div className="absolute -top-4 -right-4 bg-blue-500 text-white text-sm font-bold py-1 px-3 rounded-full shadow-md">
                    Challenge System
                  </div>

                  <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-gradient-to-r from-blue-100/50 to-cyan-100/50 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-4 flex items-center justify-center">
                        <Award className="h-10 w-10 text-white" />
                      </div>
                      <h4 className="text-lg font-bold mb-2">Daily Challenges</h4>
                      <p className="text-sm text-muted-foreground">Turn learning into adventure</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/10 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Clean Room Challenge</span>
                        <span className="text-sm font-bold text-blue-500">10 points</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full">
                        <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-3/4"></div>
                      </div>
                    </div>

                    <div className="p-3 bg-blue-50 dark:bg-blue-900/10 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Homework Completion</span>
                        <span className="text-sm font-bold text-blue-500">15 points</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full">
                        <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-1/2"></div>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    See All Challenges <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full opacity-20 blur-xl -z-10"></div>
              </div>

              <div className="order-1 md:order-2 space-y-6" data-aos="fade-left">
                <div className="inline-block p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg mb-2">
                  <Award className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold">The Real-Life Challenge System</h3>
                <p className="text-muted-foreground">
                  Parents set real-world tasks and challenges that children complete to earn rewards, building practical skills while having fun.
                </p>

                <ul className="space-y-3">
                  {[
                    "Customizable challenges based on age and interests",
                    "Photo/video verification for completed tasks",
                    "Parent-approved rewards that motivate positive behavior",
                    "Skill progression tracking to visualize growth"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <Button asChild className="mt-4 btn-bounce">
                  <Link href="/how-it-works#challenge-system">
                    Explore the Challenge System <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center" data-aos="fade-up">
          <Button size="lg" className="btn-bounce btn-glow">
            Download App and Start Your Quest
          </Button>
        </div>
      </div>
    </section>
  );
}
