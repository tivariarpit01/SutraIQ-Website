import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import WhatsAppSupport from "@/components/WhatsAppSupport";
import ClientLayoutWrapper from "@/components/layout/ClientLayoutWrapper";
import AnimatedBackground from "@/components/ui/Animatedbaground";

export const metadata: Metadata = {
   metadataBase: new URL("https://sutraiq.com"),
   
  title: "SutraIQ | Web, Mobile, AI & Automation Solutions",
  description:
    "SutraIQ builds high-performance websites, mobile applications, AI/ML systems, and automation solutions to help businesses scale faster with modern technology.",

  keywords: [
    "SutraIQ",
    "Web Development Company",
    "Mobile App Development",
    "AI ML Solutions",
    "Automation Services",
    "UI UX Design",
    "Digital Transformation",
    "Software Development Company",
  ],

  authors: [{ name: "SutraIQ" }],
  creator: "SutraIQ",

  icons: {
    icon: "/favicon.ico", // ✅ browser tab icon
  },

  openGraph: {
    title: "SutraIQ | AI Solutions Company",
    description:
      "High-performance web, mobile, AI & automation solutions built for modern businesses.",
    url: "https://sutraiq.com",
    siteName: "SutraIQ",
    images: [
      {
        url: "/images/og-image.png", // ⚠️ make sure this exists
        width: 1200,
        height: 630,
        alt: "SutraIQ AI Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SutraIQ | AI Solutions Company",
    description:
      "Web, Mobile, AI & Automation solutions designed for performance, scale, and growth.",
    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className="font-body antialiased bg-background text-foreground">
        <div className="relative flex min-h-screen flex-col overflow-hidden">
          {/* Animated background */}
          <AnimatedBackground />

          {/* Client-side layout (Navbar, Footer, etc.) */}
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        </div>

        {/* Global UI helpers */}
        <Toaster />
        <WhatsAppSupport />
      </body>
    </html>
  );
}
