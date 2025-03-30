"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  ArrowRight,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary/30 dark:bg-secondary pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-bold mb-4 font-nunito">AbtalQuest</h3>
            <p className="text-muted-foreground">
              Building resilience, discipline, and positive habits in children through fun, engaging challenges.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="https://instagram.com" className="text-foreground/70 hover:text-primary transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://linkedin.com" className="text-foreground/70 hover:text-primary transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://twitter.com" className="text-foreground/70 hover:text-primary transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://facebook.com" className="text-foreground/70 hover:text-primary transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://youtube.com" className="text-foreground/70 hover:text-primary transition-colors">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-bold mb-4 font-nunito">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/join" className="text-muted-foreground hover:text-primary transition-colors">
                  Join The Quest
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="text-muted-foreground hover:text-primary transition-colors">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="text-muted-foreground hover:text-primary transition-colors">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-bold mb-4 font-nunito">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  007,Hamriya | Meknes, 50000
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary shrink-0" />
                <a href="mailto:info@abtalquest.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@abtalquest.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary shrink-0" />
                <a href="tel:+212551234567" className="text-muted-foreground hover:text-primary transition-colors">
                  +212 614 75 11 35
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-xl font-bold mb-4 font-nunito">Join Our Newsletter</h3>
            <p className="text-muted-foreground">
              Subscribe to receive parenting tips, new features & updates!
            </p>
            <form className="flex flex-col sm:flex-row gap-2 mt-4">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-background border-primary/20 focus:border-primary"
                required
              />
              <Button className="shrink-0 btn-bounce">
                Subscribe <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} AbtalQuest. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/faq" className="hover:text-primary transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
