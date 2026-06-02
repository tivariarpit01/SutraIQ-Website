import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Mobile App Development Company | SutraIQ",
  description:
    "Build high-performance, scalable iOS and Android applications. Partner with SutraIQ for future-ready mobile app development tailored to your business goals.",
  keywords: [
    "Mobile app development",
    "iOS app development",
    "Android app development",
    "custom mobile apps",
    "cross-platform apps",
    "SutraIQ",
  ],
  openGraph: {
    title: "Custom Mobile App Development Company | SutraIQ",
    description:
      "Build high-performance, scalable iOS and Android applications. Partner with SutraIQ for future-ready mobile app development tailored to your business goals.",
    url: "https://www.sutraiq.com/services/mobile-development",
    type: "website",
    images: [
      {
        url: "/images/services/mobile.jpg", // Yeh aapke page ki background image hai
        width: 1200,
        height: 630,
        alt: "SutraIQ Mobile Development",
      },
    ],
  },
};

export default function MobileDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}