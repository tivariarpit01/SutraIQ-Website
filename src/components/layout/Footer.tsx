"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Linkedin, ArrowRight } from "lucide-react";
import { HomeFAQ } from "@/components/layout/HomeFAQ"; // 🔥 FAQ Yahan Import Kiya Hai

const gradientUnderline = "relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#d4af37] after:via-[#f5d76e] after:to-[#d4af37] after:transition-all after:duration-300 hover:after:w-full";

export default function Footer() {
  return (
    <>
      {/* ================= GLOBAL FAQ SECTION ================= */}
      <HomeFAQ />

      <footer className="border-t border-border/40 bg-background relative mt-24">
        
        {/* ================= FLOATING CTA CARD ================= */}
        <div className="container mx-auto px-4 relative z-10 -mt-20 sm:-mt-28 mb-12">
          <div className="bg-gradient-to-br from-black/80 to-[#0B1220] backdrop-blur-xl border border-yellow-500/30 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            
            {/* Subtle background glow for the card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center md:text-left z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Ready to scale your business?
              </h3>
              <p className="text-slate-300 text-lg max-w-xl">
                Let's build something extraordinary together. Get a free consultation and project estimate today.
              </p>
            </div>

            <div className="z-10 flex-shrink-0">
              <Link href="/contact">
                <button className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#f5d76e] text-black font-bold rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
                  Start a Project <ArrowRight size={20} />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* ================= DESKTOP FOOTER ================= */}
        <div className="hidden md:block container mx-auto px-4 pt-2 pb-6">
          <div className="grid grid-cols-4 gap-10">
            {/* LOGO + SOCIAL */}
            <div>
              <Image
                src="/images/Logo.png"
                alt="SutraIQ Logo"
                width={170}
                height={50}
              />

              <div className="flex gap-3 mt-6">
                <Link
                  className="p-2 rounded-full border border-white/10 hover:border-pink-500 hover:bg-pink-500 hover:text-white transition"
                  href="https://www.instagram.com/sutra_iq/"
                  target="_blank"
                >
                  <Instagram size={18} />
                </Link>

                <Link
                  className="p-2 rounded-full border border-white/10 hover:border-blue-600 hover:bg-blue-600 hover:text-white transition"
                  href="#"
                >
                  <Facebook size={18} />
                </Link>

                <Link
                  className="p-2 rounded-full border border-white/10 hover:border-sky-600 hover:bg-sky-600 hover:text-white transition"
                  href="https://www.linkedin.com/company/sutraiq"
                  target="_blank"
                >
                  <Linkedin size={18} />
                </Link>
              </div>
            </div>

            {/* SERVICES */}
            <div>
              <h4
                className={`text-lg font-semibold mb-4 cursor-pointer ${gradientUnderline}`}
              >
                SutraIQ Services
              </h4>

              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link className="hover:text-white transition-colors" href="/services/web-development">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition-colors" href="/services/mobile-development">
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition-colors" href="/services/ui-ux-design">
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition-colors" href="/services/ai-ml-projects">
                    AI / ML Solutions
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition-colors" href="/services/e-commerce-development">
                    Ecommerce Development
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition-colors" href="/services/automation-solutions">
                    Automation Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* ABOUT */}
            <div>
              <h4
                className={`text-lg font-semibold mb-4 cursor-pointer ${gradientUnderline}`}
              >
                About SutraIQ
              </h4>

              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link className="hover:text-white transition-colors" href="/about">About Us</Link>
                </li>
                <li>
                  <Link className="hover:text-white transition-colors" href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* LEGAL */}
            <div>
              <h4
                className={`text-lg font-semibold mb-4 cursor-pointer ${gradientUnderline}`}
              >
                Legal
              </h4>

              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link className="hover:text-white transition-colors" href="/privacy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* TECHTTUSAI */}
          <div className="mt-8 pt-4 border-t border-border/40 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              In Collaboration with{" "}
              <a
                href="https://techttusai.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white hover:text-[#d4af37] transition-colors"
              >
                TechttusAI
              </a>
            </p>
          </div>

          {/* COPYRIGHT */}
          <div className="mt-4 text-sm text-muted-foreground flex justify-between">
            <p>
              © {new Date().getFullYear()} SutraIQ. All rights reserved.
            </p>
          </div>
        </div>

        {/* ================= MOBILE FOOTER ================= */}
        <div className="md:hidden container mx-auto px-6 py-8">
          {/* LOGO */}
          <div className="flex justify-start mb-6">
            <Image
              src="/images/Logo.png"
              alt="SutraIQ Logo"
              width={150}
              height={45}
            />
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-3 mb-6">
            <Link
              className="p-2 rounded-full border border-white/10 hover:bg-pink-500 hover:text-white transition"
              href="https://www.instagram.com/sutra_iq/"
              target="_blank"
            >
              <Instagram size={18} />
            </Link>

            <Link
              className="p-2 rounded-full border border-white/10 hover:bg-blue-600 hover:text-white transition"
              href="#"
            >
              <Facebook size={18} />
            </Link>

            <Link
              className="p-2 rounded-full border border-white/10 hover:bg-sky-600 hover:text-white transition"
              href="https://www.linkedin.com/company/sutraiq"
              target="_blank"
            >
              <Linkedin size={18} />
            </Link>
          </div>

          {/* SERVICES */}
          <div className="mb-6">
            <h4
              className={`text-lg font-semibold mb-2 cursor-pointer ${gradientUnderline}`}
            >
              SutraIQ Services
            </h4>

            <ul className="space-y-2 mt-3 text-muted-foreground">
              <li>
                <Link className="hover:text-white" href="/services/web-development">Web Development</Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/services/mobile-development">Mobile App Development</Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/services/ui-ux-design">UI/UX Design</Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/services/ai-ml-projects">AI / ML Solutions</Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/services/e-commerce-development">Ecommerce Development</Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/services/automation-solutions">Automation Services</Link>
              </li>
            </ul>
          </div>

          {/* ABOUT */}
          <div className="mb-6">
            <h4
              className={`text-lg font-semibold mb-2 cursor-pointer ${gradientUnderline}`}
            >
              About SutraIQ
            </h4>

            <ul className="space-y-2 mt-3 text-muted-foreground">
              <li>
                <Link className="hover:text-white" href="/about">About Us</Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div className="mb-6">
            <h4
              className={`text-lg font-semibold mb-2 cursor-pointer ${gradientUnderline}`}
            >
              Legal
            </h4>

            <ul className="space-y-2 mt-3 text-muted-foreground">
              <li>
                <Link className="hover:text-white" href="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* TECHTTUSAI */}
          <div className="pt-4 border-t border-border/40 text-left">
            <p className="text-sm text-muted-foreground">
               In Collaboration with{" "}
              <a
                href="https://techttusai.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white hover:text-[#d4af37] transition-colors"
              >
                TechttusAI
              </a>
            </p>
          </div>

          {/* COPYRIGHT */}
          <div className="pt-2 text-sm text-muted-foreground text-left">
            <p>
              © {new Date().getFullYear()} SutraIQ. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}