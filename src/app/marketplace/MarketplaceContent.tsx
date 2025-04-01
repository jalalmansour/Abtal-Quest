// src/app/marketplace/MarketplaceContent.tsx
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// --- V V V --- ADD Medal HERE --- V V V ---
import { Star, Zap, ToyBrick, TShirt, Gift, ArrowRight, Coins, Medal, Lock, Heart, BookOpen, BarChart3, Users, ListTodo, Sparkles, Trophy } from 'lucide-react';
// --- ^ ^ ^ --- ADD Medal HERE --- ^ ^ ^ ---
import Image from 'next/image'; // Using Next/Image

// Placeholder data for rewards - Replace with actual data fetching
const rewardItems = {
  avatar: [
    { id: 'avatar1', name: 'Hero Cape', description: 'A cool flowing cape for your avatar.', points: 50, image: '/placeholders/cape.png' },
    { id: 'avatar2', name: 'Super Boots', description: 'Boots that make your avatar look faster!', points: 75, image: '/placeholders/boots.png' },
    { id: 'avatar3', name: 'Star Helmet', description: 'A shiny helmet adorned with stars.', points: 100, image: '/placeholders/helmet.png' },
    { id: 'avatar4', name: 'Energy Shield', description: 'A glowing shield for protection.', points: 120, image: '/placeholders/shield.png' },
  ],
  real: [
    { id: 'real1', name: 'Sticker Pack', description: 'A pack of exclusive AbtalQuest stickers.', points: 150, image: '/placeholders/stickers.png' },
    { id: 'real2', name: '$5 Gift Card', description: 'A gift card for a popular online store.', points: 500, image: '/placeholders/giftcard.png' },
    { id: 'real3', name: 'AbtalQuest T-Shirt', description: 'Show off your hero status!', points: 1000, image: '/placeholders/tshirt.png' },
    { id: 'real4', name: 'Small Lego Set', description: 'Build something awesome!', points: 1500, image: '/placeholders/lego.png' },
  ],
  digital: [
    { id: 'digital1', name: 'Exclusive Wallpaper', description: 'A cool background for your device.', points: 25, image: '/placeholders/wallpaper.png' },
    { id: 'digital2', name: 'Mini-Game Access', description: 'Unlock a fun AbtalQuest mini-game.', points: 80, image: '/placeholders/minigame.png' },
    { id: 'digital3', name: 'Custom Avatar Frame', description: 'A special frame for your profile.', points: 40, image: '/placeholders/frame.png' },
  ],
  special: [
    { id: 'special1', name: 'Limited Edition Badge', description: 'A rare badge for early achievers.', points: 250, image: '/placeholders/badge-special.png' },
    { id: 'special2', name: 'Bonus Points Pack', description: 'Get extra points to spend!', points: 400, image: '/placeholders/points-pack.png' },
  ],
};

// Placeholder for user points - Replace with actual state/context
const userPoints = 850;

export default function MarketplaceContent() {
  const [activeTab, setActiveTab] = useState("avatar");

  const handleRedeem = (itemName: string, itemPoints: number) => {
    if (userPoints >= itemPoints) {
      // In a real app, trigger API call to redeem
      alert(`Redeeming ${itemName} for ${itemPoints} points! (Points would be deducted)`);
      // Update user points state here
    } else {
      alert(`Not enough points to redeem ${itemName}. Keep completing challenges!`);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
        <div className="absolute inset-0 -z-10">
             <motion.div
               className="absolute top-1/4 left-1/5 w-64 h-64 rounded-full bg-gradient-to-r from-purple-400 to-pink-300 opacity-10 blur-3xl"
               animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
               transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
             />
             <motion.div
               className="absolute bottom-1/4 right-1/5 w-72 h-72 rounded-full bg-gradient-to-r from-orange-400 to-amber-300 opacity-10 blur-3xl"
               animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
               transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
        <div className="container-custom text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto"
            >
                <div className="inline-block mb-6 p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg">
                  <Gift className="h-10 w-10 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                    AbtalQuest <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Reward Zone</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                    Spend the points you've earned from completing challenges! Unlock cool avatar items, real-world goodies, and more.
                </p>
                <div className="inline-flex items-center justify-center bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-md border border-border/50">
                    <Coins className="h-6 w-6 text-amber-500 mr-3" />
                    <span className="text-2xl font-bold mr-2">{userPoints}</span>
                    <span className="text-muted-foreground">Points Available</span>
                </div>
            </motion.div>
        </div>
      </section>

      {/* Marketplace Tabs & Items */}
      <section className="section-padding">
        <div className="container-custom">
          <Tabs defaultValue="avatar" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-12" data-aos="fade-up">
                <TabsList className="grid w-full max-w-xl grid-cols-2 sm:grid-cols-4 gap-2 h-auto p-2">
                    <TabsTrigger value="avatar" className="text-base py-3 flex flex-col items-center h-full data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-blue-900/30 data-[state=active]:text-blue-600">
                        <TShirt className="mb-1 h-5 w-5" />
                        <span>Avatar Gear</span>
                    </TabsTrigger>
                    <TabsTrigger value="real" className="text-base py-3 flex flex-col items-center h-full data-[state=active]:bg-green-100 dark:data-[state=active]:bg-green-900/30 data-[state=active]:text-green-600">
                        <Gift className="mb-1 h-5 w-5" />
                        <span>Real Rewards</span>
                    </TabsTrigger>
                    <TabsTrigger value="digital" className="text-base py-3 flex flex-col items-center h-full data-[state=active]:bg-purple-100 dark:data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-600">
                        <Zap className="mb-1 h-5 w-5" />
                        <span>Digital Fun</span>
                    </TabsTrigger>
                     <TabsTrigger value="special" className="text-base py-3 flex flex-col items-center h-full data-[state=active]:bg-orange-100 dark:data-[state=active]:bg-orange-900/30 data-[state=active]:text-orange-600">
                        <Star className="mb-1 h-5 w-5" />
                        <span>Special Offers</span>
                    </TabsTrigger>
                </TabsList>
            </div>

            {Object.keys(rewardItems).map((key) => (
                <TabsContent key={key} value={key} className="mt-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {rewardItems[key as keyof typeof rewardItems].map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                            >
                                <Card className="h-full flex flex-col overflow-hidden card-hover border border-border/50 shadow-sm">
                                    <CardHeader className="p-0">
                                        <div className="aspect-square w-full relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                                            {/* Replace with actual Image component when assets are ready */}
                                            <div className="flex items-center justify-center h-full">
                                                 <ToyBrick className="h-16 w-16 text-gray-400 opacity-50" />
                                                {/* <Image src={item.image} alt={item.name} layout="fill" objectFit="cover" /> */}
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="p-4 flex-grow">
                                        <CardTitle className="text-lg mb-2">{item.name}</CardTitle>
                                        <p className="text-sm text-muted-foreground">{item.description}</p>
                                    </CardContent>
                                    <CardFooter className="p-4 bg-muted/30 dark:bg-muted/10 flex justify-between items-center">
                                        <div className="flex items-center font-bold text-primary">
                                            <Star className="h-4 w-4 mr-1 fill-amber-400 text-amber-500" />
                                            {item.points} pts
                                        </div>
                                        <Button
                                            size="sm"
                                            className="btn-bounce"
                                            onClick={() => handleRedeem(item.name, item.points)}
                                            disabled={userPoints < item.points}
                                        >
                                            Redeem
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                    {rewardItems[key as keyof typeof rewardItems].length === 0 && (
                         <div className="text-center py-12 text-muted-foreground" data-aos="fade-up">
                             <Gift className="h-12 w-12 mx-auto mb-4 opacity-50"/>
                             <p>No rewards available in this category yet. Check back soon!</p>
                         </div>
                    )}
                </TabsContent>
            ))}
          </Tabs>

           {/* How to Earn More Section */}
           <div className="mt-20 text-center bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/20 dark:to-amber-900/20 rounded-xl p-8" data-aos="fade-up">
               <h3 className="text-2xl font-bold mb-4">Want More Rewards?</h3>
               <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                   Keep completing your daily challenges, participate in special quests, and maintain your streaks to earn more points!
               </p>
               <Button asChild size="lg" className="btn-bounce btn-glow">
                   <a href="/challenges"> {/* Link to challenges page if it exists */}
                       View Your Challenges <ArrowRight className="ml-2 h-4 w-4" />
                   </a>
               </Button>
           </div>

        </div>
      </section>
    </>
  );
}

// --- NO CHANGES NEEDED in src/app/marketplace/page.tsx ---
// It should already look like this:
/*
// src/app/marketplace/page.tsx
import PageLayout from "@/components/layout/PageLayout";
import MarketplaceContent from "./MarketplaceContent"; // Import the client component

export const metadata = {
    title: "Reward Zone | AbtalQuest Marketplace",
    description: "Spend your hard-earned AbtalQuest points on cool avatar items, real-world rewards, and digital goodies in the marketplace.",
};

export default function MarketplacePage() {
    return (
        <PageLayout>
            <MarketplaceContent />
        </PageLayout>
    );
}
*/
