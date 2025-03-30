"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export default function DemoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section className="section-padding bg-black/95 text-white" id="demo-section">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See AbtalQuest in Action
          </h2>
          <p className="text-lg text-gray-400">
            Watch our interactive demo to see how AbtalQuest works for both children and parents. Experience the journey from avatar creation to real-world challenge completion.
          </p>
        </div>

        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-r from-orange-500/20 to-blue-500/20 shadow-2xl border border-white/10">
            {/* Video placeholder - replace with actual video component in production */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-md p-6">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center">
                  <Play className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">AbtalQuest Demo</h3>
                <p className="text-gray-300">
                  See how children navigate challenges, earn rewards, and build resilience.
                </p>
              </div>
            </div>

            {/* Video controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <div className="flex items-center justify-between">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                  onClick={togglePlay}
                >
                  {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                </Button>

                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/20"
                    onClick={toggleMute}
                  >
                    {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                  </Button>

                  <div className="bg-white/20 rounded-full h-1 w-32 sm:w-64">
                    <div className="bg-primary h-1 rounded-full w-1/3"></div>
                  </div>

                  <span className="text-sm text-white/70">1:45 / 5:23</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-4 text-center">
            {[
              {
                title: "Avatar Creation",
                description: "See how kids personalize their hero",
                time: "0:25"
              },
              {
                title: "Challenge System",
                description: "Watch how challenges are completed",
                time: "2:14"
              },
              {
                title: "Parent Controls",
                description: "Learn about parental features",
                time: "3:45"
              }
            ].map((section, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 p-4 rounded-lg cursor-pointer border border-white/10"
              >
                <h4 className="font-bold mb-1">{section.title}</h4>
                <p className="text-sm text-gray-400 mb-2">{section.description}</p>
                <span className="text-xs text-primary">Jump to {section.time}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
