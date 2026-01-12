"use client";

import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, Search, Layout } from "lucide-react";



export default function WebDevelopmentPage() {
  return (
    <div className="flex flex-col relative">
      {/* HERO SECTION */}
      <section className="relative py-20 md:py-28  overflow-hidden h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
        {/* BACKGROUND IMAGE */}
        <Image
          src="/images/services/mobile.jpg"
          alt="Mobile Development Background"
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
                Ecommerce Development Services
              </h1>

              <p className="mt-6 max-w-xl text-white/90 text-xl md:3xl ">
                It focus on building powerful, secure, and conversion-driven online stores tailored to your business goals. We create seamless shopping experiences with fast performance, intuitive navigation, and scalable architecture—helping brands sell more and grow faster in the digital marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-20 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ecommerce Development Services
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
                title: "Custom Ecommerce Development",
                desc: "We build tailor-made ecommerce platforms designed around your brand, products, and customer journey.",
                img: "/images/services/custom-ecommerce.jpg",
              },
              {
                title: "Shopify & WooCommerce Development",
                desc: "Powerful, flexible online stores built on trusted platforms with seamless customization.",
                img: "/images/services/shopify.jpg",
              },
              {
                title: "Product & Inventory Management",
                desc: "Smart systems to manage products, categories, stock, and pricing efficiently.",
                img: "/images/services/inovantry.jpg",
              },
              {
                title: "Secure Payment Gateway Integration",
                desc: "Safe and reliable payment solutions with multiple payment options for smooth checkout experiences.",
                img: "/images/services/secure.jpg",
              },
              {
                title: "Mobile-Optimized Ecommerce Stores",
                desc: "Fully responsive stores that deliver flawless shopping experiences across all devices.",
                img: "/images/services/mobile-optimization.jpg",
              },
              {
                title: "Performance & Conversion Optimization",
                desc: "Speed, UX, and funnel optimization to increase conversions and reduce cart abandonment.",
                img: "/images/services/performance-conversion.jpg",
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
          title: "Business-First Strategy",
          text: "We understand your products, customers, and goals before writing a single line of code, ensuring the store is built to sell — not just to look good.",
          img: "/images/services/business.jpg",
        },
        {
          title: "Conversion-Focused Design",
          text: "Every layout, CTA, and flow is designed to guide users smoothly from browsing to checkout.",
          img: "/images/services/conversion.jpg",
        },
        {
          title: "Scalable & Secure Architecture",
          text: "Our ecommerce solutions are built to grow with your business while keeping performance and security at the core.",
          img: "/images/services/scalable.jpg",
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

          {/* GOLD ACCENT LINE (optional decoration) */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 opacity-80" />
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
 