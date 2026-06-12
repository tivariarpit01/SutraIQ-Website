"use client";

import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, Search, Layout } from "lucide-react";
import { BreadcrumbSchema } from "@/components/layout/Breadcrumb";

export default function AIMLPage() {
  
  // --- STEP 4: SERVICE SCHEMA ---
  const aischema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI & Machine Learning Development",
    "provider": {
      "@type": "Organization",
      "name": "SutraIQ",
      "@id": "https://www.sutraiq.com/#organization"
    },
    "serviceType": "Artificial Intelligence Development",
    "description": "Custom AI/ML models, LLM integrations, NLP chatbots, predictive analytics, and intelligent automation for Indian businesses.",
    "areaServed": { "@type": "Country", "name": "India" },
    "url": "https://www.sutraiq.com/services/ai-ml-projects",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "priceRange": "₹1,00,000 – ₹20,00,000",
      "availability": "https://schema.org/InStock"
    }
  };

  // --- STEP 5: FAQ DATA & SCHEMA FOR AI/ML ---
  const aimlFAQs = [
    {
      q: 'What is the difference between AI and Machine Learning?',
      a: 'Artificial Intelligence (AI) is the broad concept of machines performing tasks that require human-like intelligence. Machine Learning (ML) is a subset of AI where systems learn from data to improve over time without being explicitly programmed for each task.',
    },
    {
      q: 'Can SutraIQ integrate ChatGPT or Claude into my application?',
      a: 'Yes. We integrate OpenAI GPT, Anthropic Claude, Google Gemini, and open-source LLMs (Llama, Mistral) into web apps, mobile apps, and internal tools via API. We build RAG pipelines, fine-tuning workflows, and AI agent systems.',
    },
    {
      q: 'How much data do I need to build a machine learning model?',
      a: 'It depends on the model type. For structured data models (prediction, classification), 1,000–10,000 labelled rows is often sufficient to start. For computer vision or NLP models, you typically need 10,000+ samples. We assess your data during a free consultation.',
    },
    {
      q: 'What is RAG (Retrieval-Augmented Generation)?',
      a: 'RAG is a technique where an LLM (like GPT or Claude) is given access to your private documents, database, or knowledge base to answer questions accurately — without hallucinating. It is ideal for customer support bots, internal knowledge assistants, and document Q&A systems.',
    },
    {
      q: 'How long does an AI project take?',
      a: 'A simple LLM chatbot integration takes 2–4 weeks. A custom ML model (training, evaluation, deployment) takes 6–12 weeks. A full AI platform with pipelines and dashboards takes 3–6 months. We scope all projects with a free discovery call.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: aimlFAQs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <div className="flex flex-col relative">
      {/* Service Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aischema) }}
      />

      <BreadcrumbSchema items={[
              { name: 'Home', url: 'https://www.sutraiq.com' },
              { name: 'Services', url: 'https://www.sutraiq.com/services' },
              { name: 'AI & Machine Learning', url: 'https://www.sutraiq.com/services/ai-ml-projects' },
             ]}
            />
      
      {/* HERO SECTION */}
      <section className="relative py-20 md:py-28  overflow-hidden h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
        {/* BACKGROUND IMAGE */}
        <Image
          src="/images/services/Ai-Ml.jpg"
          alt="AI & Machine Learning Background"
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
                AI & Machine Learning Development Services India
              </h1>

              <p className="mt-6 max-w-xl text-white/90 text-xl md:3xl ">
                It focuses on building intelligent, data-driven solutions that automate processes, enhance decision-making, and unlock meaningful insights from data. We design and develop scalable AI/ML systems with optimized performance, accurate models, and real-world impact—helping businesses innovate faster and stay ahead in a competitive landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-20 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold">
              AI & Machine Learning Services
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
                title: "Custom AI/ML Solutions",
                desc: "We build tailored AI and machine learning models designed specifically for your business challenges, goals, and data.",
                img: "/images/services/custom-ai.jpg",
              },
              {
                title: "Predictive Analytics & Forecasting",
                desc: "Data-driven models that analyze patterns and predict trends to support smarter business decisions.",
                img: "/images/services/predictive-analytic.jpg",
              },
              {
                title: "Natural Language Processing (NLP)",
                desc: "Intelligent systems that understand, process, and generate human language for chatbots, search, and automation.",
                img: "/images/services/nlp.jpg",
              },
              {
                title: "Computer Vision Solutions",
                desc: "AI-powered image and video analysis for object detection, facial recognition, and visual insights.",
                img: "/images/services/computer-vision.jpg",
              },
              {
                title: "Recommendation Systems",
                desc: "Personalized recommendation engines that enhance user experience and increase engagement and conversions.",
                img: "/images/services/recommendation.jpg",
              },
              {
                title: "AI Model Optimization & Deployment",
                desc: "Optimized, scalable AI models deployed seamlessly into your existing systems for real-world performance.",
                img: "/images/services/Ai-model.jpg",
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
                title: "Problem-First AI Strategy",
                text: "We begin by understanding your real business problems, not just applying AI for the sake of it. Every model is built with a clear purpose and measurable outcomes.",
                img: "/images/services/problem-first.jpg",
              },
              {
                title: "Data-Driven Intelligence",
                text: "High-quality data is the backbone of powerful AI. We focus on clean data pipelines, feature engineering, and continuous learning for accurate results.",
                img: "/images/services/data-driven.jpg",
              },
              {
                title: "Human-Centric AI Design",
                text: "Our AI solutions are designed to be intuitive, explainable, and easy to integrate—ensuring adoption by real users, not just systems.",
                img: "/images/services/human-centric.jpg",
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
            {aimlFAQs.map((faq, i) => (
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
              Partner with SutraIQ to build a powerful digital presence with AI solutions that are fast, scalable, and beautifully designed.
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