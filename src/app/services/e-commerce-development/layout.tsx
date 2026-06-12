import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Commerce Development Company India — Shopify & Next.js | SutraIQ",
  description:
    "Custom e-commerce websites and stores built for Indian businesses. Shopify, Next.js + Stripe/Razorpay integration. Fast, scalable, conversion-optimised. Free quote.",
  keywords: [
    "e-commerce development company India",
    "Shopify development India",
    "custom online store development Bengaluru",
    "Next.js e-commerce India",
    "Razorpay integration India",
    "e-commerce website cost India",
    "SutraIQ",
  ],
  alternates: {
    canonical: "https://www.sutraiq.com/services/e-commerce-development",
  },
  openGraph: {
    title: "E-Commerce Development Company India | SutraIQ",
    description:
      "Custom e-commerce stores with Shopify, Next.js & Razorpay. Fast, scalable, conversion-optimised. Bengaluru-based team.",
    url: "https://www.sutraiq.com/services/e-commerce-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Development Company India | SutraIQ",
    description:
      "Shopify & Next.js e-commerce stores for Indian businesses. Razorpay, Stripe, fast & scalable.",
  },
};

export default function EcommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}