import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Services India — Next.js, React & Node.js | SutraIQ",
  description:
    "Custom website and web app development in India using Next.js, React & Node.js. Fast, scalable, SEO-optimised. Bengaluru-based team. Get a free project quote today.",
  keywords: [
    "web development company India",
    "Next.js development company India",
    "React development agency Delhi",
    "custom web application development India",
    "Node.js development India",
    "website development cost India",
    "SutraIQ",  
  ],
  alternates: {
    canonical: "https://www.sutraiq.com/services/web-development",
  },
  openGraph: {
    title: "Web Development Services India — Next.js, React & Node.js | SutraIQ",
    description:
      "Custom websites & web apps using Next.js, React & Node.js. SEO-optimised, fast, scalable. Bengaluru team.",
    url: "https://www.sutraiq.com/services/web-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Services India | SutraIQ",
    description:
      "Next.js, React & Node.js web development for Indian businesses. Fast, scalable, SEO-optimised.",
  },
};

export default function WebDevLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}