import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import WhatsAppSupport from "@/components/WhatsAppSupport";
import ClientLayoutWrapper from "@/components/layout/ClientLayoutWrapper"; 
import "./globals.css";

// SEO Metadata remains the same.
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
          <ClientLayoutWrapper>
            {children}
          </ClientLayoutWrapper>
        </div>
        <Toaster />
        <WhatsAppSupport />
      </body>
    </html>
  );
}
