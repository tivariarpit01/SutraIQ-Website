import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import WhatsAppSupport from "@/components/WhatsAppSupport";
import ClientLayoutWrapper from "@/components/layout/ClientLayoutWrapper";
import AnimatedBackground from "@/components/ui/Animatedbaground";
import { SchemaOrg } from '@/components/layout/SchemaOrg';
// app/page.tsx

export const metadata: Metadata = {
  title: 'SutraIQ — Web, Mobile & AI Development Company in India',
  description:
    'India-based software agency building AI-powered websites, mobile apps & automation solutions. Trusted by 50+ clients. Based in Bengaluru. Get a free consultation today.',
  keywords: [
    'web development company India',
    'mobile app development Bengaluru',
    'AI development company India',
    'Next.js development agency',
    'automation solutions India',
    'software development company Bengaluru',
    'hire AI developer India',
  ],
  authors: [{ name: 'SutraIQ', url: 'https://www.sutraiq.com' }],
  creator: 'SutraIQ',
  publisher: 'SutraIQ',
  metadataBase: new URL('https://www.sutraiq.com'),
  alternates: {
    canonical: 'https://www.sutraiq.com',
  },
  openGraph: {
    title: 'SutraIQ — Web, Mobile & AI Development Company in India',
    description:
      'India-based software agency building AI-powered websites, mobile apps & automation. Based in Bengaluru. 50+ clients served.',
    url: 'https://www.sutraiq.com',
    siteName: 'SutraIQ',
    images: [
      {
        url: 'https://www.sutraiq.com/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SutraIQ — Web, Mobile & AI Development Company India',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SutraIQ — Web, Mobile & AI Development Company in India',
    description:
      'India-based software agency: AI-powered websites, mobile apps & automation. Bengaluru.',
    images: ['https://www.sutraiq.com/images/og-image.png'],
    creator: '@sutra_iq',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <SchemaOrg />
      </head>
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
