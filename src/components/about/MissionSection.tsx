"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Goal, Eye, Lightbulb, Heart } from "lucide-react";

export default function MissionSection() {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Mission & Vision
          </h2>
          <p className="text-lg text-muted-foreground">
            At AbtalQuest, we believe that the next generation deserves more than digital distractions. We're committed to transforming how children interact with technology and develop essential life skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            data-aos="fade-right"
          >
            <Card className="h-full border-l-4 border-l-orange-500 card-hover bg-white dark:bg-gray-800">
              <CardContent className="p-8">
                <div className="flex flex-col h-full">
                  <div className="mb-6 flex items-center">
                    <div className="bg-orange-100 dark:bg-orange-900/20 p-3 rounded-full mr-4">
                      <Goal className="h-8 w-8 text-orange-500" />
                    </div>
                    <h3 className="text-2xl font-bold">Our Mission</h3>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    To empower children with resilience and discipline through fun, engaging, real-world inspired challenges that replace passive screen time with meaningful growth opportunities.
                  </p>

                  <div className="mt-auto space-y-4">
                    <div className="flex items-start">
                      <div className="bg-orange-100 dark:bg-orange-900/20 p-2 rounded-full mr-3 shrink-0">
                        <Lightbulb className="h-5 w-5 text-orange-500" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Meaningful Engagement</h4>
                        <p className="text-sm text-muted-foreground">We transform screen time into an opportunity for real-world growth</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-orange-100 dark:bg-orange-900/20 p-2 rounded-full mr-3 shrink-0">
                        <Heart className="h-5 w-5 text-orange-500" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Parent-Child Connection</h4>
                        <p className="text-sm text-muted-foreground">We strengthen the bond between parents and children through shared goals</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            data-aos="fade-left"
          >
            <Card className="h-full border-l-4 border-l-blue-500 card-hover bg-white dark:bg-gray-800">
              <CardContent className="p-8">
                <div className="flex flex-col h-full">
                  <div className="mb-6 flex items-center">
                    <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-full mr-4">
                      <Eye className="h-8 w-8 text-blue-500" />
                    </div>
                    <h3 className="text-2xl font-bold">Our Vision</h3>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    A world where technology enhances rather than diminishes children's resilience, where digital experiences build rather than erode discipline, and where the next generation embraces challenges as opportunities for growth.
                  </p>

                  <div className="mt-auto">
                    <blockquote className="border-l-4 border-blue-500 pl-4 italic">
                      "We envision a future where technology serves as a tool for developing character rather than replacing it, where children use digital platforms to become more engaged with the real world, not less."
                      <footer className="text-sm text-muted-foreground mt-2 not-italic">
                        — AbtalQuest Founding Team
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/20 dark:to-amber-900/20 rounded-xl p-8 text-center" data-aos="fade-up">
          <h3 className="text-2xl font-bold mb-4">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {[
              {
                value: "Growth Mindset",
                description: "We believe challenges are opportunities for development"
              },
              {
                value: "Balance",
                description: "We promote harmony between digital and real-world experiences"
              },
              {
                value: "Empowerment",
                description: "We equip children with skills for lifelong success"
              },
              {
                value: "Inclusivity",
                description: "We create accessible experiences for children of all backgrounds"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-5 text-center shadow-sm"
                data-aos="fade-up"
                data-aos-delay={(index * 100).toString()}
              >
                <h4 className="font-bold mb-2">{item.value}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
