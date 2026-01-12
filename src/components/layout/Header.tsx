"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { services } from "@/data/services";
import { SheetTitle } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import { Menu, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/* ---------------- DATA ---------------- */

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/* ---------------- COMPONENTS ---------------- */

const NavLink = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={href}>
      <span
        className={cn(
          "text-lg font-medium transition-colors hover:text-primary",
          isActive ? "text-primary" : "text-muted-foreground"
        )}
      >
        {label}
      </span>
    </Link>
  );
};

const MobileNavLink = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <SheetClose asChild>
      <Link href={href}>
        <span
          className={cn(
            "block px-4 py-2 rounded-md text-xl",
            isActive
              ? "bg-primary text-primary-foreground"
              : "text-foreground hover:bg-muted"
          )}
        >
          {label}
        </span>
      </Link>
    </SheetClose>
  );
};

/* ---------------- HEADER ---------------- */

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* LOGO */}
        <Link href="/">
          <Image
            src="/images/Logo.png"
            alt="SutraIQ Logo"
            width={160}
            height={40}
            className="h-30 w-auto"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}

          {/* DESKTOP SERVICES */}
          {/* DESKTOP SERVICES */}
          {/* DESKTOP SERVICES */}
          <div className="relative group">
            <span className="flex items-center gap-1 cursor-pointer text-lg font-medium text-muted-foreground hover:text-primary">
              Services
              <ChevronDown
                className="
        h-4 w-4
        transition-transform duration-200
        -rotate-180
        group-hover:rotate-0
      "
              />
            </span>

            {/* DROPDOWN */}
            <div
              className="
      absolute left-0 top-full mt-2 w-72 rounded-xl border 
      bg-background shadow-xl
      opacity-0 invisible
      group-hover:opacity-100 group-hover:visible
      transition-all duration-200
    "
            >
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block px-5 py-3 text-sm hover:bg-muted"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden md:flex">
          <Button asChild className="bg-accent text-accent-foreground">
            <Link href="/get-started">Get Started</Link>
          </Button>
        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[80vw]">
              <SheetTitle></SheetTitle>

              <div className="flex flex-col gap-4 mt-6">
                {navLinks.map((link) => (
                  <MobileNavLink key={link.href} {...link} />
                ))}

                {/* SERVICES */}
                <div>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex w-full items-center justify-between px-4 py-2 text-xl font-semibold"
                  >
                    Services
                    <ChevronDown
                      className={`transition-transform ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {servicesOpen && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {services.map((service) => (
                        <SheetClose key={service.href} asChild>
                          <Link
                            href={service.href}
                            className="block px-4 py-2 text-base rounded-md hover:bg-muted"
                          >
                            {service.title}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  )}
                </div>

                <SheetClose asChild>
                  <Button
                    asChild
                    className="mt-4 w-full py-6 text-lg bg-accent text-accent-foreground"
                  >
                    <Link href="/get-started">Get Started</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
