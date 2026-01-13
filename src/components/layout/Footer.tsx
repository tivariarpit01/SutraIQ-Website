"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Linkedin } from "lucide-react";

const gradientUnderline =
  "relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#d4af37] after:via-[#f5d76e] after:to-[#d4af37] after:transition-all after:duration-300 hover:after:w-full";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background relative">
      {/* ================= DESKTOP FOOTER ================= */}
      <div className="hidden md:block container mx-auto px-4 pt-2 pb-6 ">
        {/* Desktop Logo top-left */}
        <div className="grid grid-cols-4 gap-10">
          <Image
            src="/images/Logo.png"
            alt="SutraIQ Logo"
            width={170}
            height={50}
          />

          {/* SOCIAL ICONS (desktop top-left)
          <div className="flex flex-col gap-3">
            <Link className="p-2 rounded-full border hover:bg-pink-500 hover:text-white transition" href="#">
              <Instagram size={18} />
            </Link>
            <Link className="p-2 rounded-full border hover:bg-blue-600 hover:text-white transition" href="#">
              <Facebook size={18} />
            </Link>
            <Link className="p-2 rounded-full border hover:bg-sky-600 hover:text-white transition" href="#">
              <Linkedin size={18} />
            </Link>
          </div> */}
          <div className="flex gap-3 mb-6">
          <Link
            className="p-2 rounded-full border hover:bg-pink-500 hover:text-white transition"
            href="https://www.instagram.com/sutra_iq/"
          >
            <Instagram size={18} />
          </Link>
          <Link
            className="p-2 rounded-full border hover:bg-blue-600 hover:text-white transition"
            href="#"
          >
            <Facebook size={18} />
          </Link>
          <Link
            className="p-2 rounded-full border hover:bg-sky-600 hover:text-white transition"
            href="https://www.linkedin.com/company/sutraiq"
          >
            <Linkedin size={18} />
          </Link>
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
                <Link href="/services/web-development">Web Development</Link>
              </li>
              <li>
                <Link href="/services/mobile-development">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux-design">UI/UX Design</Link>
              </li>
              <li>
                <Link href="/services/ai-ml-projects">AI / ML Solutions</Link>
              </li>
               <li>
              <Link href="/services/e-commerce-development">Ecommerce development</Link>
            </li>
              <li>
                <Link href="/services/automation-solutions">Automation Services</Link>
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
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
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
                <Link href="/privacy">Privacy-Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-8 pt-4 border-t border-border/40 text-sm text-muted-foreground flex justify-between">
          <p>© {new Date().getFullYear()} SutraIQ. All rights reserved.</p>
        </div>
      </div>

      {/* ================= MOBILE FOOTER ================= */}
      <div className="md:hidden container mx-auto px-6 py-8">
        {/* Logo */}
        <div className="flex justify-start mb-6">
          <Image
            src="/images/Logo.png"
            alt="SutraIQ Logo"
            width={150}
            height={45}
          />
        </div>

        {/* Social Icons */}
        <div className="flex gap-3 mb-6">
          <Link
            className="p-2 rounded-full border hover:bg-pink-500 hover:text-white transition"
            href="https://www.instagram.com/sutra_iq/"
          >
            <Instagram size={18} />
          </Link>
          <Link
            className="p-2 rounded-full border hover:bg-blue-600 hover:text-white transition"
            href="#"
          >
            <Facebook size={18} />
          </Link>
          <Link
            className="p-2 rounded-full border hover:bg-sky-600 hover:text-white transition"
            href="https://www.linkedin.com/company/sutraiq"
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
          <ul className="space-y-1 text-muted-foreground">
            <li>
              <Link href="/Web-development">Web Development</Link>
            </li>
            <li>
              <Link href="/Mobile-development">Mobile App Development</Link>
            </li>
            <li>
              <Link href="/ui-ux-design">UI/UX Design</Link>
            </li>
            <li>
              <Link href="/ai-ml-projects">AI / ML Solutions</Link>
            </li>
            <li>
              <Link href="/e-commerce-development">Ecommerce development</Link>
            </li>
            <li>
              <Link href="/automation-solution">Automation Services</Link>
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
          <ul className="space-y-1 text-muted-foreground">
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
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
          <ul className="space-y-1 text-muted-foreground">
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* BOTTOM */}
        <div className="pt-4 border-t border-border/40 text-sm text-muted-foreground text-center">
          <p>© {new Date().getFullYear()} SutraIQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
