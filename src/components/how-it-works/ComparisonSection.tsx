"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, X } from "lucide-react";

const comparisonData = {
  dopamine: {
    title: "Reward System",
    abtalquest: {
      heading: "AbtalQuest: Growth-Based Rewards",
      points: [
        "Rewards are earned through real-world effort and achievement",
        "Designed to create a sense of genuine accomplishment",
        "Balance of immediate and delayed gratification teaches discipline",
        "Points system connected to real skill development",
        "Rewards become more meaningful as challenges increase in difficulty"
      ],
      color: "text-green-500"
    },
    socialmedia: {
      heading: "Social Media: Addictive Dopamine Hits",
      points: [
        "Random rewards delivered without effort or achievement",
        "Designed to create dependency and addiction",
        "Immediate gratification with little to no delay",
        "Likes and notifications trigger dopamine without skill development",
        "Diminishing returns lead to increased usage to feel the same effect"
      ],
      color: "text-red-500"
    }
  },
  content: {
    title: "Content Approach",
    abtalquest: {
      heading: "AbtalQuest: Active Participation",
      points: [
        "Child is an active participant in their own development",
        "Content is personalized based on age, interests, and growth needs",
        "Focused on building skills that transfer to real life",
        "Limited, purposeful screen time with clear boundaries",
        "Parents involved in content selection and completion verification"
      ],
      color: "text-green-500"
    },
    socialmedia: {
      heading: "Social Media: Passive Consumption",
      points: [
        "Child is a passive consumer of endless content",
        "Content is selected by algorithms to maximize screen time, not growth",
        "Focused on entertainment with little real-world application",
        "Unlimited scrolling designed to extend usage time",
        "Parents often unaware of content being consumed"
      ],
      color: "text-red-500"
    }
  },
  mindset: {
    title: "Mindset Impact",
    abtalquest: {
      heading: "AbtalQuest: Building Resilience",
      points: [
        "Challenges designed to build tolerance for difficulty",
        "Failure is framed as a learning opportunity",
        "Progress tracking shows growth over time, building confidence",
        "Social comparison is minimized in favor of personal growth",
        "Mindfulness exercises develop emotional regulation"
      ],
      color: "text-green-500"
    },
    socialmedia: {
      heading: "Social Media: Creating Fragility",
      points: [
        "Easy escape from any discomfort with endless distractions",
        "Failure is avoided rather than learned from",
        "Constant comparison to others' highlight reels damages self-esteem",
        "Social validation becomes primary source of self-worth",
        "Emotional responses are often immediate and unregulated"
      ],
      color: "text-red-500"
    }
  }
};

export default function ComparisonSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            AbtalQuest vs. Social Media
          </h2>
          <p className="text-lg text-muted-foreground">
            See how AbtalQuest's purpose-driven approach differs from typical social media platforms designed for addiction and passive consumption.
          </p>
        </div>

        <Tabs defaultValue="dopamine" className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center mb-8" data-aos="fade-up">
            <TabsList className="grid w-full max-w-lg grid-cols-3">
              <TabsTrigger value="dopamine" className="text-base py-3">
                Reward System
              </TabsTrigger>
              <TabsTrigger value="content" className="text-base py-3">
                Content Approach
              </TabsTrigger>
              <TabsTrigger value="mindset" className="text-base py-3">
                Mindset Impact
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.keys(comparisonData).map((key) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="grid md:grid-cols-2 gap-8">
                {/* AbtalQuest Column */}
                <div
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-green-200 dark:border-green-900 shadow-md"
                  data-aos="fade-right"
                >
                  <h3 className="text-xl font-bold mb-4 text-green-600 dark:text-green-400 flex items-center">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full mr-3">
                      <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    {comparisonData[key as keyof typeof comparisonData].abtalquest.heading}
                  </h3>
                  <ul className="space-y-3">
                    {comparisonData[key as keyof typeof comparisonData].abtalquest.points.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Media Column */}
                <div
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-red-200 dark:border-red-900 shadow-md"
                  data-aos="fade-left"
                >
                  <h3 className="text-xl font-bold mb-4 text-red-600 dark:text-red-400 flex items-center">
                    <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full mr-3">
                      <X className="h-5 w-5 text-red-600 dark:text-red-400" />
                    </div>
                    {comparisonData[key as keyof typeof comparisonData].socialmedia.heading}
                  </h3>
                  <ul className="space-y-3">
                    {comparisonData[key as keyof typeof comparisonData].socialmedia.points.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <X className="h-5 w-5 text-red-500 mr-2 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 text-center" data-aos="fade-up">
          <p className="text-lg max-w-2xl mx-auto">
            AbtalQuest isn't about eliminating technology from children's lives - it's about <span className="font-bold">redesigning digital engagement</span> to serve growth, development, and real-world resilience.
          </p>
        </div>
      </div>
    </section>
  );
}
