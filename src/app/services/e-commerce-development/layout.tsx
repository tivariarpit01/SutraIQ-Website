import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom E-Commerce Development Services | SutraIQ",
  description:
    "Build high-converting, scalable e-commerce platforms tailored to your brand. We deliver secure payment integrations, seamless UX, and robust backend architectures.",
  keywords: [
    "E-commerce development company",
    "Custom online stores",
    "E-commerce web design",
    "Scalable e-commerce platforms",
    "Payment gateway integration",
    "SutraIQ",
  ],
  openGraph: {
    title: "Custom E-Commerce Development Services | SutraIQ",
    description:
      "Build high-converting, scalable e-commerce platforms tailored to your brand with secure payment integrations and robust backend architectures.",
    url: "https://www.sutraiq.com/services/e-commerce-development",
    type: "website",
  },
};

export default function EcommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}