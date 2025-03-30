import React from "react";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Download, Star, Shield, BookOpenCheck, Users, LayoutDashboard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
    title: "Join The Quest | AbtalQuest",
    description: "Embark on an adventure to build resilience, discipline, and positive habits with AbtalQuest. Join our community today!",
};

const JoinPage = () => {
    return (
        <PageLayout>
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden bg-card">
                <div className="absolute inset-0 -z-10 hero-gradient opacity-40" />
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                            Start Your Child's <span className="gradient-primary gradient-text">Resilience Quest</span> Today!
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                            Join AbtalQuest and unlock a world of fun, engaging challenges designed to build essential life skills and positive habits for your child.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button size="lg" className="btn-bounce btn-glow">
                                <Download className="mr-2 h-5 w-5" /> Download App
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <Link href="/how-it-works">
                                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-12"
                    >
                        {/* Placeholder for hero image/animation - Replace with your assets */}
                        <div className="aspect-video bg-muted rounded-xl border border-border/50 overflow-hidden">
                            <div className="flex items-center justify-center h-full text-muted-foreground italic">
                                [Hero Image / App Preview Here]
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Value Proposition Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Join AbtalQuest?</h2>
                        <p className="text-lg text-muted-foreground">
                            Discover the key benefits of becoming an AbtalQuest member and how we empower children and support parents.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Benefit Cards - Customize with your key selling points */}
                        <motion.div className="card-hover" data-aos="fade-up" data-aos-delay="100">
                            <Card>
                                <CardContent className="p-6 space-y-4">
                                    <div className="rounded-full bg-orange-100 dark:bg-orange-900/20 p-3 w-fit">
                                        <Star className="h-6 w-6 text-orange-500" />
                                    </div>
                                    <h3 className="text-xl font-bold">Fun & Engaging Challenges</h3>
                                    <p className="text-muted-foreground">Transform screen time into a positive and enjoyable learning experience.</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div className="card-hover" data-aos="fade-up" data-aos-delay="200">
                            <Card>
                                <CardContent className="p-6 space-y-4">
                                    <div className="rounded-full bg-blue-100 dark:bg-blue-900/20 p-3 w-fit">
                                        <Shield className="h-6 w-6 text-blue-500" />
                                    </div>
                                    <h3 className="text-xl font-bold">Build Real-World Resilience</h3>
                                    <p className="text-muted-foreground">Equip your child with the skills to overcome challenges and thrive in any situation.</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div className="card-hover" data-aos="fade-up" data-aos-delay="300">
                            <Card>
                                <CardContent className="p-6 space-y-4">
                                    <div className="rounded-full bg-green-100 dark:bg-green-900/20 p-3 w-fit">
                                        <BookOpenCheck className="h-6 w-6 text-green-500" />
                                    </div>
                                    <h3 className="text-xl font-bold">Educational & Purposeful</h3>
                                    <p className="text-muted-foreground">Ensure screen time contributes to your child's growth and development.</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Target Audience Sections - Kids, Parents, Schools */}
            <section className="section-padding bg-muted/50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Who Can Join the Quest?</h2>
                        <p className="text-lg text-muted-foreground">
                            AbtalQuest is designed for kids, parents, and schools, offering tailored experiences for each group to foster a collaborative learning environment.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Kids Section */}
                        <motion.div className="text-center" data-aos="fade-up" data-aos-delay="100">
                            <div className="rounded-full bg-orange-100 dark:bg-orange-900/20 p-4 inline-block mb-4">
                                <Star className="h-10 w-10 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">For Kids (Ages 6-12)</h3>
                            <p className="text-muted-foreground mb-4">
                                Embark on exciting quests, create your hero avatar, and earn rewards while building resilience and discipline.
                            </p>
                            <Button className="btn-bounce" size="sm">Learn More for Kids</Button>
                        </motion.div>

                        {/* Parents Section */}
                        <motion.div className="text-center" data-aos="fade-up" data-aos-delay="200">
                            <div className="rounded-full bg-blue-100 dark:bg-blue-900/20 p-4 inline-block mb-4">
                                <Users className="h-10 w-10 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">For Parents</h3>
                            <p className="text-muted-foreground mb-4">
                                Guide your child's journey, set personalized challenges, track progress, and strengthen your bond through shared goals.
                            </p>
                            <Button className="btn-bounce" variant="secondary" size="sm">Learn More for Parents</Button>
                        </motion.div>

                        {/* Schools Section */}
                        <motion.div className="text-center" data-aos="fade-up" data-aos-delay="300">
                            <div className="rounded-full bg-green-100 dark:bg-green-900/20 p-4 inline-block mb-4">
                                <LayoutDashboard className="h-10 w-10 text-green-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">For Schools & Educators</h3>
                            <p className="text-muted-foreground mb-4">
                                Integrate AbtalQuest into your curriculum to enhance student engagement and teach essential life skills in a fun way.
                            </p>
                            <Button className="btn-bounce" variant="outline" size="sm">Learn More for Schools</Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="section-padding text-center">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Adventure with AbtalQuest Today!</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Download the app now and join a community of families and educators committed to building stronger, more resilient children.
                        </p>
                        <Button size="lg" className="btn-bounce btn-glow">
                            <Download className="mr-2 h-5 w-5" /> Download AbtalQuest App
                        </Button>
                    </motion.div>
                </div>
            </section>
        </PageLayout>
    );
};

export default JoinPage;
