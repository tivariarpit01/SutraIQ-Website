'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/icons/Logo";
import { Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

// --- Data defined outside the component for better organization ---

const socialLinks = [
  { Icon: Twitter, label: "Twitter", href: "https://twitter.com/your-profile" },
  { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/your-profile" },
  { Icon: Github, label: "GitHub", href: "https://github.com/your-profile" },
];

const footerSections = [
  {
    title: "Services",
    links: [
      { name: "Web Development", href: "/services#web" },
      { name: "App Development", href: "/services#app" },
      { name: "AI Solutions", href: "/services#ai" },
      { name: "Cloud Support", href: "/services#cloud" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
      { name: "Get Started", href: "/get-started" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "carrier", href: "/careers" },
    ],
  },
];


export default function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    // This effect runs only on the client, preventing a hydration mismatch.
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo & Social Links Section */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Logo className="h-8 w-8" />
              <span className="text-xl font-bold font-headline">StackNova</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Designing Tomorrow's Innovations.
            </p>
            <div className="mt-4 flex space-x-1">
              {socialLinks.map((social) => (
                <Button variant="ghost" size="icon" asChild key={social.label}>
                  <Link href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                    <social.Icon className="h-5 w-5" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {/* REFACTOR: Simplified mapping logic with a consistent data structure */}
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright Section */}
        <div className="mt-8 border-t border-border/40 pt-6 text-center text-sm text-muted-foreground">
          {/* REFACTOR: Simplified the client-side check */}
          <p>
            {year && `© ${year} StackNova. All Rights Reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
}