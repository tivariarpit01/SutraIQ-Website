"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react"; // useState and useEffect are still needed for Sheet/Mobile navigation
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "@/components/icons/Logo";
import { cn } from "@/lib/utils";
import Image from "next/image"; // Assuming you have an Image component for the logo

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// FIX: Removed the 'hydrated' state and useEffect from NavLink
const NavLink = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();
  // isActive is now calculated directly and consistently on both server and client
  const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={href} passHref>
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

// FIX: Removed the 'hydrated' state and useEffect from MobileNavLink
const MobileNavLink = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();
  // isActive is now calculated directly and consistently on both server and client
  const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <SheetClose asChild>
      <Link href={href} passHref>
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

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className=" ">
          <Image
            src="/images/Logo.png" // Adjust the path to your logo image
            alt="SutraIQ Logo"
            width={40} // Adjust width as needed
            height={40} // Adjust height as needed
            className="h-38 w-38 md:h-40 md:w-40"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button
            asChild
            className="font-semibold bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Link href="/get-started">Get Started</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] sm:w-[50vw]">
              <div className="p-4">
                <Link
                  href="/"
                  className="flex items-center gap-2 mb-8"
                  onClick={() => setIsOpen(false)}
                >
                  <Logo className="h-8 w-8" />
                  <span className="text-xl font-bold font-headline">
                    SutraIQ
                  </span>
                </Link>
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <MobileNavLink key={link.href} {...link} />
                  ))}
                  <SheetClose asChild>
                    <Button
                      asChild
                      className="w-full mt-4 font-semibold text-lg py-6 bg-accent hover:bg-accent/90 text-accent-foreground"
                    >
                      <Link href="/get-started">Get Started</Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
