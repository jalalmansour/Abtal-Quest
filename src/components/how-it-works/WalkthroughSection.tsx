"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Plant, // <-- Changed from Plant to Plant
  LucideIcon,
  Medal,
  Sparkles,
  ListTodo,
  Users,
  BarChart3,
  Lock,
  Star,
  BookOpen,
  Medal as MedalIcon,
  Trophy,
  Heart
} from "lucide-react";
import { ReactNode } from "react";

interface TabContentProps {
  title: string;
  description: string;
  icon: ReactNode;
  content: ReactNode;
}

const TabContent = ({ title, description, icon, content }: TabContentProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6" data-aos="fade-right">
        <div className="inline-block p-3 bg-primary/10 rounded-lg mb-2">
          {icon}
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-muted-foreground">
          {description}
        </p>
      </div>

      <div className="relative" data-aos="fade-left">
        {content}
      </div>
    </div>
  );
};

export default function WalkthroughSection() {
  return (
    <section className="section-padding" id="walkthrough-section">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A Walk Through the App
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore the key components of the AbtalQuest experience and how they work together to build resilience and positive habits.
          </p>
        </div>

        <Tabs defaultValue="Plant" className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center mb-12" data-aos="fade-up">
            <TabsList className="grid sm:grid-cols-2 md:grid-cols-4 gap-2">
              <TabsTrigger value="Plant" className="text-base py-3 flex flex-col items-center">
                <Plant className="mb-1 h-5 w-5" />
                <span>VIP Plant</span>
              </TabsTrigger>
              <TabsTrigger value="challenges" className="text-base py-3 flex flex-col items-center">
                <ListTodo className="mb-1 h-5 w-5" />
                <span>Challenges</span>
              </TabsTrigger>
              <TabsTrigger value="rewards" className="text-base py-3 flex flex-col items-center">
                <Trophy className="mb-1 h-5 w-5" />
                <span>Rewards</span>
              </TabsTrigger>
              <TabsTrigger value="parent" className="text-base py-3 flex flex-col items-center">
                <Users className="mb-1 h-5 w-5" />
                <span>Parent Zone</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="Plant">
            <TabContent
              title="The VIP Plant: Mindset Development"
              description="The VIP Plant is a special virtual space where children develop the mental frameworks and mindset needed for real-world resilience. Here, kids engage with interactive content that teaches them how to approach challenges with a growth mindset."
              icon={<Plant className="h-8 w-8 text-orange-500" />}
              content={
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-border/50 p-6 card-3d">
                  <div className="absolute -top-4 -right-4 bg-orange-500 text-white text-sm font-bold py-1 px-3 rounded-full shadow-md">
                    VIP Plant
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-orange-50 dark:bg-orange-900/10 p-4 rounded-lg flex flex-col items-center text-center">
                      <BookOpen className="h-8 w-8 text-orange-500 mb-2" />
                      <h4 className="font-bold">Wisdom Stories</h4>
                      <p className="text-sm text-muted-foreground">Interactive tales that teach resilience</p>
                    </div>

                    <div className="bg-orange-50 dark:bg-orange-900/10 p-4 rounded-lg flex flex-col items-center text-center">
                      <Sparkles className="h-8 w-8 text-orange-500 mb-2" />
                      <h4 className="font-bold">Mindfulness</h4>
                      <p className="text-sm text-muted-foreground">Age-appropriate calming exercises</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/20 dark:to-amber-900/20 rounded-lg p-6 mb-4">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center mr-3">
                        <Star className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold">Today's Wisdom</h4>
                        <p className="text-sm text-muted-foreground">Growth mindset lesson</p>
                      </div>
                    </div>

                    <div className="bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg">
                      <p className="italic text-sm">
                        "The more we practice difficult things, the stronger our minds become. Just like exercise makes our muscles stronger!"
                      </p>
                      <div className="flex justify-between mt-3">
                        <span className="text-xs text-muted-foreground">Reflection activity available</span>
                        <Heart className="h-4 w-4 text-red-500" />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Lock className="h-5 w-5 text-muted-foreground mr-2" />
                      <span className="text-sm text-muted-foreground">Next lesson unlocks in 2 days</span>
                    </div>
                    <div className="flex items-center">
                      <MedalIcon className="h-5 w-5 text-amber-500 mr-1" />
                      <span className="text-sm font-bold">5 points earned</span>
                    </div>
                  </div>
                </div>
              }
            />
          </TabsContent>

          <TabsContent value="challenges">
            <TabContent
              title="Real-Life Challenge System"
              description="The challenge system is where digital engagement translates into real-world action. Parents set age-appropriate tasks that children complete to earn points and rewards, building practical skills and discipline through fun, gamified experiences."
              icon={<ListTodo className="h-8 w-8 text-blue-500" />}
              content={
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-border/50 p-6 card-3d">
                  <div className="absolute -top-4 -right-4 bg-blue-500 text-white text-sm font-bold py-1 px-3 rounded-full shadow-md">
                    Challenges
                  </div>

                  <h4 className="font-bold mb-4">Today's Challenges</h4>

                  <div className="space-y-4">
                    <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center">
                          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center mr-2">
                            <span className="text-white text-xs font-bold">1</span>
                          </div>
                          <span className="font-medium">Clean Your Room</span>
                        </div>
                        <span className="text-sm font-bold text-blue-500">15 pts</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full">
                        <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-2/3"></div>
                      </div>
                      <div className="flex justify-between mt-2">
                        <span className="text-xs text-muted-foreground">Requires photo verification</span>
                        <span className="text-xs text-blue-500 font-medium">2/3 completed</span>
                      </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center">
                          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center mr-2">
                            <span className="text-white text-xs font-bold">2</span>
                          </div>
                          <span className="font-medium">Reading Time</span>
                        </div>
                        <span className="text-sm font-bold text-blue-500">10 pts</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full">
                        <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-1/4"></div>
                      </div>
                      <div className="flex justify-between mt-2">
                        <span className="text-xs text-muted-foreground">Parent verification needed</span>
                        <span className="text-xs text-blue-500 font-medium">5/20 minutes</span>
                      </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg opacity-50">
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center">
                          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center mr-2">
                            <span className="text-white text-xs font-bold">3</span>
                          </div>
                          <span className="font-medium">Homework Helper</span>
                        </div>
                        <span className="text-sm font-bold text-blue-500">25 pts</span>
                      </div>
                      <div className="flex items-center justify-center py-2">
                        <Lock className="h-4 w-4 text-muted-foreground mr-1" />
                        <span className="text-xs text-muted-foreground">Complete challenge 1 to unlock</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <div className="text-xs text-muted-foreground">
                      Updated 10 minutes ago
                    </div>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-amber-500 mr-1" />
                      <span className="text-sm font-bold">Weekly Score: 45/100</span>
                    </div>
                  </div>
                </div>
              }
            />
          </TabsContent>

          <TabsContent value="rewards">
            <TabContent
              title="Smart Reward System"
              description="Our reward system is carefully designed to balance immediate gratification with longer-term goals, teaching children the value of perseverance and delayed gratification while maintaining their engagement and motivation."
              icon={<Trophy className="h-8 w-8 text-amber-500" />}
              content={
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-border/50 p-6 card-3d">
                  <div className="absolute -top-4 -right-4 bg-amber-500 text-white text-sm font-bold py-1 px-3 rounded-full shadow-md">
                    Rewards
                  </div>

                  <div className="flex justify-between items-center mb-6">
                    <h4 className="font-bold">Your Rewards</h4>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-amber-500 mr-1" />
                      <span className="font-bold">125 points available</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 p-4 rounded-lg flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-700 p-2 mb-2 flex items-center justify-center">
                        <Medal className="h-6 w-6 text-amber-500" />
                      </div>
                      <h4 className="font-bold text-sm mb-1">Avatar Items</h4>
                      <span className="text-xs">Unlock special items for your hero</span>
                    </div>

                    <div className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 p-4 rounded-lg flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-700 p-2 mb-2 flex items-center justify-center">
                        <Trophy className="h-6 w-6 text-amber-500" />
                      </div>
                      <h4 className="font-bold text-sm mb-1">Parent Rewards</h4>
                      <span className="text-xs">Exchange points for parent-approved rewards</span>
                    </div>
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-900/10 rounded-lg p-4 mb-4">
                    <h5 className="font-bold mb-2">Recent Achievement</h5>
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-full p-2 mr-3 flex items-center justify-center">
                        <Trophy className="h-8 w-8 text-amber-500" />
                      </div>
                      <div>
                        <p className="font-bold">5-Day Streak Master</p>
                        <p className="text-sm text-muted-foreground">Completed challenges 5 days in a row</p>
                        <p className="text-xs text-amber-500 font-medium mt-1">+25 bonus points awarded!</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <p className="text-sm text-muted-foreground mb-2">Next milestone in 2 days</p>
                    <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full">
                      <div className="h-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full w-5/6"></div>
                    </div>
                  </div>
                </div>
              }
            />
          </TabsContent>

          <TabsContent value="parent">
            <TabContent
              title="Parent Zone & Controls"
              description="Parents are active participants in the AbtalQuest journey. The Parent Zone provides powerful tools to guide children's experience, set appropriate challenges, and gain valuable insights into their development and progress."
              icon={<Users className="h-8 w-8 text-green-500" />}
              content={
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-border/50 p-6 card-3d">
                  <div className="absolute -top-4 -right-4 bg-green-500 text-white text-sm font-bold py-1 px-3 rounded-full shadow-md">
                    Parent Zone
                  </div>

                  <h4 className="font-bold mb-4">Parent Dashboard</h4>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg">
                      <ListTodo className="h-6 w-6 text-green-500 mb-2" />
                      <h5 className="font-bold text-sm mb-1">Create Challenges</h5>
                      <p className="text-xs text-muted-foreground">Set custom tasks or use templates</p>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg">
                      <BarChart3 className="h-6 w-6 text-green-500 mb-2" />
                      <h5 className="font-bold text-sm mb-1">Progress Tracking</h5>
                      <p className="text-xs text-muted-foreground">Monitor growth and achievements</p>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-700 border border-border/50 rounded-lg p-4 mb-4">
                    <h5 className="font-bold mb-3">This Week's Insights</h5>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Challenges Completed</span>
                        <span className="font-bold">7/12</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 dark:bg-gray-600 rounded-full">
                        <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-7/12"></div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm">Daily Engagement</span>
                        <span className="font-bold">5 days</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 dark:bg-gray-600 rounded-full">
                        <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-5/7"></div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm">VIP Plant Completion</span>
                        <span className="font-bold">4/5 lessons</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 dark:bg-gray-600 rounded-full">
                        <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-4/5"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <span>2 tasks pending verification</span>
                    </div>
                    <div className="text-xs text-green-500 font-medium">
                      Weekly report available
                    </div>
                  </div>
                </div>
              }
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
