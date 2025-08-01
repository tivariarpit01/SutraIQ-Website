import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import WhatsAppSupport from "@/components/WhatsAppSupport";
import ClientLayoutWrapper from "@/components/layout/ClientLayoutWrapper"; // <-- IMPORT THE NEW WRAPPER
import "./globals.css";

export const metadata: Metadata = {
  title: "StackNova Design System",
  description: "Innovative solutions for the modern web.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className="font-body antialiased">
        <div className="relative flex min-h-screen flex-col">
          {/* Use the client wrapper here */}
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