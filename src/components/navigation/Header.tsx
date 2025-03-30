"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Team", path: "/team" },
    { name: "Join The Quest", path: "/join" }, // Make sure this is present and correct
    { name: "Marketplace", path: "/marketplace" },
    { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  // Track scroll position to change header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Update active link based on current path
    setActiveLink(window.location.pathname);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center" data-aos="fade-right">
          <div className="flex items-center">
            <span className="text-2xl font-bold font-nunito gradient-primary gradient-text">
              AbtalQuest
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1" data-aos="fade-left">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors relative ${
                activeLink === link.path
                  ? "text-primary"
                  : "text-foreground/80 hover:text-primary hover:bg-primary/5"
              }`}
            >
              {link.name}
              {activeLink === link.path && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          ))}
          <div className="ml-4">
            <Button className="btn-bounce btn-glow" data-aos="fade-up">
              Download App
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    activeLink === link.path
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-secondary/80"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="mt-4 w-full">Download App</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
