import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise AI & Machine Learning Solutions | SutraIQ",
  description:
    "Scale your operations with custom LLM integrations, intelligent workflow automation, and robust full-stack AI development. Partner with SutraIQ to build tomorrow's innovations.",
  keywords: [
    "AI development company",
    "Machine learning solutions",
    "LLM integration",
    "Python AI development",
    "Enterprise AI",
    "SutraIQ",
  ],
  openGraph: {
    title: "Enterprise AI & Machine Learning Solutions | SutraIQ",
    description:
      "Scale your operations with custom LLM integrations, intelligent workflow automation, and robust full-stack AI development. Partner with SutraIQ.",
    url: "https://www.sutraiq.com/services/ai-ml-projects",
    type: "website",
  },
};

export default function AIMLLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}