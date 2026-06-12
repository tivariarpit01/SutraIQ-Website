import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Machine Learning Development Company India | SutraIQ",
  description: "Custom AI/ML solutions, LLM integrations, chatbots & predictive analytics for Indian businesses. Bengaluru-based AI development experts. Book a free strategy call.",
  keywords: ["AI development company India","machine learning solutions Bengaluru","LLM integration services","hire AI developer India","AI ML company India","ChatGPT integration India","SutraIQ"],
  openGraph: {
    title: "Enterprise AI & Machine Learning Solutions | SutraIQ",
    description:
      "Scale your operations with custom LLM integrations, intelligent workflow automation, and robust full-stack AI development. Partner with SutraIQ.",
    url: "https://www.sutraiq.com/services/ai-ml-projects",
    type: "website",
    },
  alternates: {
    canonical: "https://www.sutraiq.com/services/ai-ml-projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Machine Learning Development Company India | SutraIQ",
    description: "Custom AI/ML, LLM integrations & chatbots for Indian businesses. Bengaluru-based experts.",
  },
};

export default function AIMLLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}