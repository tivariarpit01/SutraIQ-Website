import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppSupport from "@/components/WhatsAppSupport";
import "./globals.css";

// SEO Metadata
export const metadata: Metadata = {
  title: "StackNova Design System",
  description: "Innovative solutions for the modern web.",
};

// Root Layout Component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className="font-body antialiased">
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>

        {/* These are client-only components */}
        <Toaster />
        <WhatsAppSupport />
      </body>
    </html>
  );
}
