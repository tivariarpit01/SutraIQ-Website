import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development Company India — iOS & Android | SutraIQ",
  description:
    "Build high-performance iOS & Android apps with SutraIQ. React Native & Flutter experts in Bengaluru, India. Scalable, future-ready mobile solutions. Get a free quote.",
  keywords: [
    "mobile app development company India",
    "iOS app development Delhi",
    "Android app development India",
    "React Native development India",
    "Flutter app development India",
    "hire mobile developer India",
    "SutraIQ",
  ],
  alternates: {
    canonical: "https://www.sutraiq.com/services/mobile-development",
  },
  openGraph: {
    title: "Mobile App Development Company India — iOS & Android | SutraIQ",
    description:
      "High-performance iOS & Android apps. React Native & Flutter experts in Delhi. Free quote.",
    url: "https://www.sutraiq.com/services/mobile-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development India — iOS & Android | SutraIQ",
    description:
      "React Native & Flutter mobile apps for Indian businesses. Delhi-based team.",
  },
};
  
export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}