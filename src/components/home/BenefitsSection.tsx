"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Users,
  Heart,
  Trophy,
  Target,
  UserCheck,
  BarChart3,
  MessagesSquare,
  School,
  Lightbulb,
  BookOpen,
  PieChart,
  Activity,
  PartyPopper,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const benefitsData = {
  kids: [
    {
      icon: <Trophy className="h-10 w-10 text-amber-500" />,
      title: "Fun Challenges",
      description: "Take on exciting quests that are actually fun to complete and earn cool rewards!"
    },
    {
      icon: <Heart className="h-10 w-10 text-pink-500" />,
      title: "Grow Confidence",
      description: "Build self-belief as you overcome challenges and develop new skills."
    },
    {
      icon: <Target className="h-10 w-10 text-blue-500" />,
      title: "Build Discipline",
      description: "Learn to stick with tasks and develop focus through engaging activities."
    },
    {
      icon: <PartyPopper className="h-10 w-10 text-purple-500" />,
      title: "Unlock Rewards",
      description: "Earn points, badges, and unlock special features for your avatar."
    }
  ],
  parents: [
    {
      icon: <BarChart3 className="h-10 w-10 text-green-500" />,
      title: "Track Progress",
      description: "Monitor your child's growth and celebrate their achievements along the way."
    },
    {
      icon: <UserCheck className="h-10 w-10 text-blue-500" />,
      title: "Parenting Support",
      description: "Access tips and strategies to help guide your child's resilience journey."
    },
    {
      icon: <MessagesSquare className="h-10 w-10 text-orange-500" />,
      title: "Improved Communication",
      description: "Create natural opportunities for meaningful conversations with your child."
    },
    {
      icon: <Activity className="h-10 w-10 text-red-500" />,
      title: "Reduced Screen Time",
      description: "Replace passive screen time with purposeful, growth-oriented digital engagement."
    }
  ],
  schools: [
    {
      icon: <School className="h-10 w-10 text-indigo-500" />,
      title: "Educational Integration",
      description: "Complement your curriculum with activities that reinforce resilience and discipline."
    },
    {
      icon: <Users className="h-10 w-10 text-teal-500" />,
      title: "Group Challenges",
      description: "Create classroom or school-wide challenges that build community and teamwork."
    },
    {
      icon: <PieChart className="h-10 w-10 text-violet-500" />,
      title: "Progress Analytics",
      description: "Access detailed insights on student engagement and skill development."
    },
    {
      icon: <BookOpen className="h-10 w-10 text-amber-500" />,
      title: "Customized Content",
      description: "Tailor challenges and quests to align with your specific educational goals."
    }
  ]
};

export default function BenefitsSection() {
  const [activeTab, setActiveTab] = useState("kids");

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Benefits for Everyone
          </h2>
          <p className="text-lg text-muted-foreground">
            AbtalQuest creates a supportive ecosystem where children, parents, and educators work together to build essential life skills.
          </p>
        </div>

        <Tabs defaultValue="kids" value={activeTab} onValueChange={setActiveTab} className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center mb-12" data-aos="fade-up">
            <TabsList className="grid w-full max-w-lg grid-cols-3">
              <TabsTrigger value="kids" className="text-base py-3 data-[state=active]:text-orange-500 data-[state=active]:bg-orange-50 dark:data-[state=active]:bg-orange-950/30">
                For Kids
              </TabsTrigger>
              <TabsTrigger value="parents" className="text-base py-3 data-[state=active]:text-blue-500 data-[state=active]:bg-blue-50 dark:data-[state=active]:bg-blue-950/30">
                For Parents
              </TabsTrigger>
              <TabsTrigger value="schools" className="text-base py-3 data-[state=active]:text-indigo-500 data-[state=active]:bg-indigo-50 dark:data-[state=active]:bg-indigo-950/30">
                For Schools
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.keys(benefitsData).map((key) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefitsData[key as keyof typeof benefitsData].map((benefit, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md text-center card-hover border border-border/30"
                  >
                    <div className="flex justify-center mb-4">
                      <div className={`rounded-full p-3 ${
                        key === "kids" ? "bg-orange-100 dark:bg-orange-900/30" :
                        key === "parents" ? "bg-blue-100 dark:bg-blue-900/30" :
                        "bg-indigo-100 dark:bg-indigo-900/30"
                      }`}>
                        {benefit.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12" data-aos="fade-up">
                <Button asChild size="lg" className={`btn-bounce ${
                  key === "kids" ? "bg-orange-500 hover:bg-orange-600" :
                  key === "parents" ? "bg-blue-500 hover:bg-blue-600" :
                  "bg-indigo-500 hover:bg-indigo-600"
                }`}>
                  <Link href={`/${key}`}>
                    Learn More for {key === "kids" ? "Children" : key === "parents" ? "Parents" : "Schools"} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
