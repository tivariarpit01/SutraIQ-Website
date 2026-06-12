import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Automation Services India — n8n, Zapier & Custom | SutraIQ",
  description:
    "Automate workflows, eliminate manual tasks, and scale operations with SutraIQ. n8n, Zapier, Make & custom Python automation for Indian businesses. Free consultation.",
  keywords: [
    "business automation services India",
    "workflow automation company Bengaluru",
    "n8n automation India",
    "Zapier automation agency",
    "process automation company India",
    "RPA services India",
    "SutraIQ",
  ],
  alternates: {
    canonical: "https://www.sutraiq.com/services/automation-solutions",
  },
  openGraph: {
    title: "Business Automation Services India — n8n, Zapier & Custom | SutraIQ",
    description:
      "n8n, Zapier, Make & custom Python automation for Indian businesses. Eliminate manual work. Free consultation.",
    url: "https://www.sutraiq.com/services/automation-solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Automation Services India | SutraIQ",
    description:
      "n8n, Zapier & custom automation for Indian businesses. Eliminate manual work.",
  },
};

export default function AutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}