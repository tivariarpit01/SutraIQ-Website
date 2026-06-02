import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative UI/UX Design & Prototyping Services | SutraIQ",
  description:
    "Craft intuitive and visually stunning user interfaces. Our UI/UX design services focus on user-centric digital experiences that drive engagement and conversions.",
  keywords: [
    "UI/UX design agency",
    "User interface design",
    "User experience design",
    "Web design services",
    "App prototyping",
    "SutraIQ",
  ],
  openGraph: {
    title: "Creative UI/UX Design & Prototyping Services | SutraIQ",
    description:
      "Craft intuitive and visually stunning user interfaces focused on user-centric digital experiences that drive engagement and conversions.",
    url: "https://www.sutraiq.com/services/ui-ux-design",
    type: "website",
  },
};

export default function UIUXLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}