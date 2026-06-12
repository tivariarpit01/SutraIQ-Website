import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX Design Services India — Figma & Product Design | SutraIQ",
  description:
    "User-centred UI/UX design for web and mobile products. Figma prototyping, design systems, and conversion-focused interfaces by SutraIQ's Bengaluru design team. Free audit.",
  keywords: [
    "UI UX design company India",
    "Figma design agency Bengaluru",
    "product design company India",
    "UX design services India",
    "app UI design India",
    "design system India",
    "SutraIQ",
  ],
  alternates: {
    canonical: "https://www.sutraiq.com/services/ui-ux-design",
  },
  openGraph: {
    title: "UI/UX Design Services India — Figma & Product Design | SutraIQ",
    description:
      "User-centred Figma design for web & mobile. Design systems, prototyping, conversion-focused UI. Bengaluru.",
    url: "https://www.sutraiq.com/services/ui-ux-design",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UI/UX Design Services India | SutraIQ",
    description:
      "Figma UI/UX design for web & mobile apps. Design systems & prototyping. Bengaluru-based.",
  },
};

export default function UIUXLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}