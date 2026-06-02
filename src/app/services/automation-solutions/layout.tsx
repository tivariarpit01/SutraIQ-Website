import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Process & Workflow Automation Solutions | SutraIQ",
  description:
    "Streamline your operations and increase efficiency with custom business process automation, API integrations, and low-code solutions like n8n.",
  keywords: [
    "Business process automation",
    "Workflow automation",
    "API integration",
    "n8n automation",
    "Custom automation solutions",
    "SutraIQ",
  ],
  openGraph: {
    title: "Business Process & Workflow Automation Solutions | SutraIQ",
    description:
      "Streamline your operations and increase efficiency with custom business process automation, API integrations, and low-code solutions.",
    url: "https://www.sutraiq.com/services/automation-solutions",
    type: "website",
  },
};

export default function AutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}