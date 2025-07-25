'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/icons/Logo";
import { Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  // State to store the current year. Initialize as an empty string for SSR.
  const [year, setYear] = useState<string>("");
  // State to track if the component has mounted on the client.
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This effect runs only on the client after the component mounts.
    // It sets the current year and marks the component as client-mounted.
    setYear(new Date().getFullYear().toString());
    setIsClient(true);
  }, []);

  // Define social media links with explicit aria-labels for consistent SSR and CSR.
  const socialLinks = [
    { Icon: Twitter, label: "Twitter", href: "#" },
    { Icon: Linkedin, label: "LinkedIn", href: "#" },
    { Icon: Github, label: "GitHub", href: "#" },
  ];

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
            <div className="mt-4 flex space-x-2">
              {/* Map over socialLinks to render each social media button */}
              {socialLinks.map((social, i) => {
                const Icon = social.Icon; // Get the Lucide React icon component
                return (
                  <Button variant="ghost" size="icon" asChild key={i}>
                    {/* Link component with explicit aria-label for accessibility */}
                    <Link href={social.href} aria-label={social.label}>
                      <Icon className="h-5 w-5" />
                    </Link>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Navigation Sections: Services, Company, Legal */}
          {[
            {
              title: "Services",
              links: ["Web Development", "App Development", "AI Solutions", "Cloud Support"],
              href: "/services", // Base href for services, individual links might be relative to this
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
                { name: "Carrier", href: "/carrier" },
              ],
            },
          ].map((section, idx) => (
            <div key={idx}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {/* Map over links within each section */}
                {(section.links as any[]).map((link: any) => (
                  <li key={typeof link === "string" ? link : link.name}>
                    <Link
                      href={typeof link === "string" ? section.href : link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {typeof link === "string" ? link : link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright Section */}
        <div className="mt-8 border-t border-border/40 pt-6 text-center text-sm text-muted-foreground">
          {/*
            FIX: Conditionally render the copyright text only on the client-side.
            During SSR, this <p> tag will be empty, ensuring no mismatch.
            On the client, once mounted, the 'year' will be populated and displayed.
            This is the most robust way to handle dynamic content that changes
            between server and client rendering.
          */}
          <p>
            {isClient ? `© ${year} StackNova. All Rights Reserved.` : ''}
          </p>
        </div>
      </div>
    </footer>
  );
}