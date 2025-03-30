"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Or <img> if you prefer unoptimized images as per your next.config.js
import Link from "next/link";

const PartnersSection = () => {
  const partners = [
    {
      name: "Partner 1",
      logo: "/placeholder-logo.png", // Replace with actual logo path or URL
      link: "https://partner1.com", // Replace with actual partner link
    },
    {
      name: "Partner 2",
      logo: "/placeholder-logo.png", // Replace with actual logo path or URL
      link: "https://partner2.com", // Replace with actual partner link
    },
    {
      name: "Partner 3",
      logo: "/placeholder-logo.png", // Replace with actual logo path or URL
      link: "https://partner3.com", // Replace with actual partner link
    },
    {
      name: "Partner 4",
      logo: "/placeholder-logo.png", // Replace with actual logo path or URL
      link: "https://partner4.com", // Replace with actual partner link
    },
    // Add more partners as needed
  ];

  return (
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Trusted Partners
          </h2>
          <p className="text-lg text-muted-foreground">
            AbtalQuest is proud to collaborate with leading organizations and institutions who share our vision for empowering children and building a stronger future generation.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="card-hover"
              data-aos="fade-up"
              data-aos-delay={(index + 2) * 100}
            >
              <Link href={partner.link} target="_blank" rel="noopener noreferrer" className="block bg-white dark:bg-gray-800 rounded-xl p-4 border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-24 h-16 relative">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} Logo`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain"
                      priority // Consider removing priority and optimizing loading strategy for many partners
                    />
                  </div>
                  <h4 className="font-bold text-center text-sm">{partner.name}</h4>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="200">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are always looking for new partners who are passionate about children's education and well-being. <Link href="/partnerships" className="text-primary font-medium hover:underline">Explore partnership opportunities</Link> with AbtalQuest.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
