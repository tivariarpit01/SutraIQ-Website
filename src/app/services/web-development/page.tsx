
"use client";

import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, Search, Layout } from "lucide-react";
import { BreadcrumbSchema } from "@/components/layout/Breadcrumb";

export default function WebDevelopmentPage() {
  
  // --- STEP 4: SERVICE SCHEMA ---
  const webDevSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Development Services",
    "provider": {
      "@type": "Organization",
      "name": "SutraIQ",
      "@id": "https://www.sutraiq.com/#organization"
    },
    "serviceType": "Web Development",
    "description": "Custom website development using Next.js, React, and Node.js. Fast, scalable, and SEO-optimized websites tailored for Indian businesses.",
    "areaServed": { "@type": "Country", "name": "India" },
    "url": "https://www.sutraiq.com/services/web-development",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "priceRange": "₹50,000 – ₹5,00,000",
      "availability": "https://schema.org/InStock"
    }
  };

  // --- STEP 5: FAQ DATA & SCHEMA ---
  const webDevFAQs = [
    {
      q: 'Why should I choose Next.js for my website?',
      a: 'Next.js offers server-side rendering, static site generation, built-in SEO optimisation, and fast load times — making it ideal for business websites and web applications. It is the framework used by companies like Vercel, TikTok, and Twitch.',
    },
    {
      q: 'What is the difference between a website and a web application?',
      a: 'A website is primarily informational (blog, portfolio, brochure site). A web application is interactive and allows users to log in, create accounts, manage data, and perform tasks — like a SaaS product, dashboard, or booking system.',
    },
    {
      q: 'Do you build e-commerce websites?',
      a: 'Yes. We build custom e-commerce websites using Next.js with Stripe, Razorpay, or PayU payment integration. We also build on Shopify for merchants who prefer a managed platform.',
    },
    {
      q: 'Will my website be mobile-friendly?',
      a: 'Every website we build is fully responsive and tested on mobile, tablet, and desktop. We use Tailwind CSS for responsive design and test across Chrome, Safari, and Firefox on both iOS and Android.',
    },
    {
      q: 'Do you provide website maintenance after launch?',
      a: 'Yes. We offer monthly maintenance packages starting at ₹5,000/month covering security updates, performance monitoring, content changes, and bug fixes.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: webDevFAQs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <div className="flex flex-col relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webDevSchema) }}
      />
      
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.sutraiq.com' },
        { name: 'Services', url: 'https://www.sutraiq.com/services' },
        { name: 'Web Development', url: 'https://www.sutraiq.com/services/web-development' },
       ]}
      />


      {/* HERO SECTION */}
      <section className="relative py-20 md:py-28  overflow-hidden h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
        {/* BACKGROUND IMAGE */}
        <Image
          src="/images/services/web dev.jpg"
          alt="Web Development Background"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />

        {/* CONTENT */}
        <div className="relative z-5 container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 items-center">
            {/* EMPTY LEFT (for balance) */}

            {/* RIGHT CONTENT */}
            <div className="text-white text-left mt-4">
              <h1 className="text-3xl md:text-6xl  font-bold font-headline">
                Custom Web Development Services in India
              </h1>

              <p className="mt-6 max-w-xl text-white/90 text-xl md:3xl ">
                High-performance, SEO-optimized, and scalable websites crafted
                to align perfectly with your business goals. We build digital
                experiences that load fast, rank higher, and convert visitors
                into customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-20 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold">
              Web Development Services
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We craft high-impact digital products using modern web
              technologies, focused on performance, scalability, and user
              experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {[
              {
                title: "Website Development",
                desc: "Custom websites built for speed, SEO, and long-term scalability.",
                img: "/images/services/website.jpg",
              },
              {
                title: "Landing Pages",
                desc: "High-conversion landing pages designed to capture leads.",
                img: "/images/services/landing.jpg",
              },
              {
                title: "E-Commerce Solutions",
                desc: "Scalable e-commerce platforms with secure checkout systems.",
                img: "/images/services/ecommerce.jpg",
              },
              {
                title: "Web Applications",
                desc: "Robust web apps using modern frameworks and cloud-native stacks.",
                img: "/images/services/web-application.jpg",
              },
              {
                title: "CMS Development",
                desc: "Flexible content management systems tailored to your workflow.",
                img: "/images/services/Cms.jpg",
              },
              {
                title: "Performance Optimization",
                desc: "Speed, SEO, and performance audits to boost rankings.",
                img: "/images/services/pom.jpg",
              },
            ].map((service, i) => (
              <div key={i} className="group relative">
                {/* FLOATING IMAGE */}
                <div className="relative h-56 rounded-3xl overflow-hidden transform transition-all duration-500 group-hover:-translate-y-6 group-hover:scale-[1.03] shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* GLASS CARD */}
                <div className="relative -mt-16 rounded-3xl backdrop-blur-xl bg-black/40 border border-white/10 p-6 shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/80 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-25">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-4xl font-bold mb-20">
            Our Unique Approach
          </h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Innovative Design",
                text: "We create visually stunning and highly functional websites, blending creativity with performance.",
                img: "/images/services/ux.jpg",
              },
              {
                title: "Optimized Performance",
                text: "Our websites load fast, rank high, and are scalable for long-term growth.",
                img: "/images/services/performance.jpg",
              },
              {
                title: "SEO & Growth",
                text: "We integrate SEO and growth strategies from day one to ensure maximum visibility and ROI.",
                img: "/images/services/seo.jpg",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative rounded-3xl border-2 border-yellow-500/60 backdrop-blur-xl bg-white/10 shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl"
              >
                {/* CARD IMAGE */}
                <div className="relative h-60 w-full overflow-hidden rounded-t-3xl">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* CARD CONTENT */}
                <div className="p-6 text-left">
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    {item.text}
                  </p>
                </div>

                {/* GOLD ACCENT LINE */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 opacity-80" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- STEP 5: FAQ UI SECTION --- */}
      <section className="py-20 mt-8 relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Frequently Asked Questions
          </h2>

          {/* FAQ Schema Script for SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />

          <div className="space-y-6">
            {webDevFAQs.map((faq, i) => (
              <div 
                key={i} 
                className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg hover:border-yellow-500/50 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold text-yellow-500 mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 mt-8">
        <div className="container mx-auto px-6 max-w-3xl">
          {/* Glass card */}
          <div className="bg-black/40 backdrop-blur-xl border border-yellow-400 rounded-2xl p-12 text-center shadow-lg">
            <h2 className="text-4xl font-bold text-white mb-4">
              Let’s Build Something Amazing 🚀
            </h2>
            <p className="text-gray-200 text-lg mb-8">
              Partner with SutraIQ to build a powerful digital presence with websites that are fast, scalable, and beautifully designed.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/get-started">
                <button className="px-8 py-4 font-semibold text-white bg-yellow-500 rounded-xl shadow-md hover:bg-yellow-600 transition-colors duration-300">
                  Start Your Project
                </button>
              </Link>

              <Link href="/contact">
                <button className="px-8 py-4 font-semibold text-yellow-500 border-2 border-yellow-500 rounded-xl bg-transparent hover:bg-yellow-500 hover:text-white transition-colors duration-300">
                  Talk to Our Experts
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

