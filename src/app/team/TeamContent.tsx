"use client"; // This component NEEDS to be a client component

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
// Import necessary UI components and types used within the JSX
import { LucideArrowRight, LucideUsers, LucideHeart, LucideLightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Define TeamMember type again here or import from a shared types file
type TeamMember = {
    id: string;
    name: string;
    role: string;
    bio: string;
    avatar: string;
    level: number;
    skills: string[];
};

// Keep teamMembers data here or pass it as props from the page
const teamMembers: TeamMember[] = [
    // ... (same team member data as before)
    {
        id: "jalal",
        name: "Jalal Mansour",
        role: "Lead Quest Designer & AI Developer",
        bio: "A visionary game designer and AI enthusiast at AbtalQuest, Jalal leads the creation of engaging and educational quests while also developing AI-driven features to personalize the learning experience and enhance game dynamics.",
        avatar: "👨‍💻",
        level: 42,
        skills: ["Game Design", "Quest Design", "Educational Game Development", "Child Engagement", "Learning Experience Design", "AI Development", "Machine Learning", "Personalized Learning Systems", "Game AI"],
    },
    {
        id: "hajar",
        name: "Hajar Ouzif",
        role: "CEO & Strategy Department",
        bio: "CEO and Head of Strategy Department at AbtalQuest, responsible for defining the company vision, setting strategic goals, and ensuring effective execution across all departments.",
        avatar: "👑",
        level: 45,
        skills: ["Strategic Planning", "Leadership", "Vision Definition", "Goal Setting", "Execution Management"],
    },
    {
        id: "khalil",
        name: "Khalil Dadsi",
        role: "Lead Product Design Department",
        bio: "Responsible for leading the Product Design Department, overseeing the building, testing, and optimization of the AbtalQuest application to ensure a user-friendly and effective learning experience.",
        avatar: "🎨",
        level: 42,
        skills: ["Product Design", "UX/UI Design", "Application Development", "Testing & Optimization"],
    },
    {
        id: "mahdi",
        name: "Mahdi Akarkaou",
        role: "MarketingLead Department",
        bio: "Leads the Marketing Department at AbtalQuest, responsible for developing and implementing marketing strategies, managing social media presence, and defining brand positioning to reach and engage target audiences.",
        avatar: "📣",
        level: 39,
        skills: ["Marketing Strategy", "Social Media Management", "Brand Positioning", "Digital Marketing"],
    },
];


export default function TeamContent() {
    const teamRef = useRef<HTMLDivElement>(null);
    const isTeamInView = useInView(teamRef, { once: true, amount: 0.3 });

    return (
        <> {/* Use Fragment or a div wrapper */}
            {/* Hero section - Adapted for Team page */}
            <section className="relative py-20 overflow-hidden bg-card">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
                </div>
                <div className="container-custom px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-10"
                    >
                        <div className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">
                            <span className="mr-2">🏆</span>
                            LEVEL 2
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Our Team & Developers
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Meet the heroes behind AbtalQuest, united by a mission to empower the next generation with resilience and purpose.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Team section */}
            <section ref={teamRef} className="py-16">
                <div className="container-custom px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <div className="flex items-center justify-center mb-4">
                            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary-foreground mr-4">
                                <LucideUsers size={24} />
                            </div>
                            <h2 className="text-2xl font-bold">Meet the Team</h2>
                        </div>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Passionate individuals dedicated to building AbtalQuest and empowering children.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-card rounded-lg border border-border overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                            >
                                <div className={`p-3 text-center ${index % 4 === 0 ? "bg-primary/10" : index % 4 === 1 ? "bg-blue-100 dark:bg-blue-900/20" /* Example Color */ : index % 4 === 2 ? "bg-green-100 dark:bg-green-900/20" /* Example Color */ : "bg-accent/10"}`}>
                                    <div className="flex justify-between items-center text-xs mb-2">
                                        <span className="bg-background/50 backdrop-blur-sm px-2 py-1 rounded-full">
                                            LVL {member.level}
                                        </span>
                                        <span className="bg-background/50 backdrop-blur-sm px-2 py-1 rounded-full">
                                            Hero Card
                                        </span>
                                    </div>
                                    <div className="text-6xl mx-auto mb-2">
                                        {member.avatar}
                                    </div>
                                    <h3 className="text-xl font-bold">{member.name}</h3>
                                    <p className={`text-sm font-medium ${index % 4 === 0 ? "text-primary" : index % 4 === 1 ? "text-blue-500" /* Example Color */ : index % 4 === 2 ? "text-green-500" /* Example Color */ : "text-accent"}`}>
                                        {member.role}
                                    </p>
                                </div>
                                <div className="p-4">
                                    <p className="text-sm text-muted-foreground mb-4">
                                        {member.bio}
                                    </p>
                                    <div>
                                        <h4 className="text-xs uppercase font-medium text-muted-foreground mb-2">
                                            Hero Skills
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {member.skills.map((skill) => (
                                                <span
                                                    key={`${member.id}-${skill}`}
                                                    className="inline-block px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
