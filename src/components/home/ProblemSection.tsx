"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Brain,
  Clock,
  Heart,
  Smartphone,
  Sparkles
} from "lucide-react";

const problems = [
  {
    icon: <Smartphone className="h-8 w-8 text-destructive" />,
    title: "Screen Addiction",
    description:
      "Children spending 6+ hours daily on social media and games, creating unhealthy dependencies.",
  },
  {
    icon: <Clock className="h-8 w-8 text-destructive" />,
    title: "Short Attention Spans",
    description:
      "Constant stimulation from social media reduces ability to focus on meaningful tasks.",
  },
  {
    icon: <AlertTriangle className="h-8 w-8 text-destructive" />,
    title: "Lack of Discipline",
    description:
      "Instant gratification culture undermines delayed gratification and effort.",
  },
  {
    icon: <Heart className="h-8 w-8 text-destructive" />,
    title: "Social Anxiety",
    description:
      "Reduced face-to-face interaction leads to difficulty with real-world social skills.",
  },
  {
    icon: <Brain className="h-8 w-8 text-destructive" />,
    title: "Low Resilience",
    description:
      "Limited experience with challenges creates fragility when facing difficulties.",
  },
  {
    icon: <Sparkles className="h-8 w-8 text-destructive" />,
    title: "Diminished Creativity",
    description:
      "Passive consumption reduces active creation and imagination development.",
  },
];

export default function ProblemSection() {
  return (
    <section className="section-padding bg-secondary/10">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Problem: Social Media Addiction & Its Impact
          </h2>
          <p className="text-lg text-muted-foreground">
            Today's children face unique challenges in the digital age. Social media and video games are designed to capture attention and create dependence, affecting critical developmental milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full card-hover border border-border/50">
                <CardContent className="p-6">
                  <div className="flex flex-col items-start">
                    <div className="mb-4 p-3 rounded-full bg-destructive/10">
                      {problem.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                    <p className="text-muted-foreground">{problem.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center" data-aos="fade-up">
          <p className="text-lg font-medium max-w-2xl mx-auto">
            <span className="text-primary font-bold">AbtalQuest</span> addresses these issues by replacing passive consumption with active, purposeful challenges that build real-world skills.
          </p>
        </div>
      </div>
    </section>
  );
}
