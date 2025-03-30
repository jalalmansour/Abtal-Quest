"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="section-padding bg-secondary/10 dark:bg-secondary">
      <div className="container-custom text-center">
        <motion.div
          className="max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build a Resilient Future for Your Child?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            You've learned about our mission, our story, and our approach. Now, take the next step and discover how AbtalQuest can make a real difference in your child's life.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center items-center">
            <Button size="lg" className="btn-bounce btn-glow" asChild>
              <Link href="/how-it-works">
                Explore How AbtalQuest Works <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="btn-bounce" asChild>
              <Link href="/join">
                Join the Quest Today <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <motion.div
            className="mt-12 flex justify-center space-x-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="text-center">
              <div className="text-xl font-bold text-primary">Fun & Engaging</div>
              <div className="text-sm text-muted-foreground">For Children</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-primary">Supportive Tools</div>
              <div className="text-sm text-muted-foreground">For Parents</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-primary">Effective Learning</div>
              <div className="text-sm text-muted-foreground">For Life Skills</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
