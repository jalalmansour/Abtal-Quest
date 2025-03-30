"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Lightbulb, Rocket, Users2 } from "lucide-react";

const ApproachSection = () => {
  const approachPoints = [
    {
      icon: <GraduationCap className="h-8 w-8 text-orange-500" />,
      title: "Child-Centered Learning",
      description: "We prioritize the child's experience, making learning fun, engaging, and tailored to their developmental stage.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-blue-500" />,
      title: "Real-World Application",
      description: "AbtalQuest bridges the digital and physical worlds, ensuring skills learned are applicable in everyday life.",
    },
    {
      icon: <Rocket className="h-8 w-8 text-pink-500" />,
      title: "Gamified Challenges",
      description: "Challenges are designed with game-like elements to maximize motivation and make skill-building an enjoyable quest.",
    },
    {
      icon: <Users2 className="h-8 w-8 text-green-500" />,
      title: "Parent-Guided & Supported",
      description: "Parents are empowered to guide their child's journey, set personalized challenges, and celebrate progress together.",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Unique Approach
          </h2>
          <p className="text-lg text-muted-foreground">
            AbtalQuest is built on a foundation of key principles that ensure effective learning and lasting impact. We blend educational insights with engaging technology to create a unique experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {approachPoints.map((point, index) => (
            <motion.div
              key={index}
              className="card-hover"
              data-aos="fade-up"
              data-aos-delay={(index + 2) * 100}
            >
              <Card className="h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="p-3 rounded-full bg-primary/10 w-fit">
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-bold">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
