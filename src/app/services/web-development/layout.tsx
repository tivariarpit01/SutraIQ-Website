import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full-Stack Web Development Company | SutraIQ",
  description:
    "Develop fast, secure, and highly scalable web applications. We specialize in modern frontend and backend architectures using Next.js, React, and robust APIs.",
  keywords: [
    "Web development company",
    "Full-stack development",
    "Next.js web apps",
    "React development",
    "Custom web applications",
    "SutraIQ",
  ],
  openGraph: {
    title: "Full-Stack Web Development Company | SutraIQ",
    description:
      "Develop fast, secure, and highly scalable web applications. We specialize in modern frontend and backend architectures.",
    url: "https://www.sutraiq.com/services/web-development",
    type: "website",
  },
};

export default function WebDevLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}