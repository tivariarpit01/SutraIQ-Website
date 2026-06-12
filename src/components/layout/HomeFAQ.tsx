"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const homeFAQs = [
  {
    q: 'What services does SutraIQ offer?',
    a: 'SutraIQ offers custom web development, mobile app development (iOS & Android), AI/ML solutions, business automation (n8n, Zapier, custom), and cloud infrastructure services. We are based in Delhi, India and serve clients across India and internationally.',
  },
  {
    q: 'Where is SutraIQ located?',
    a: 'SutraIQ is headquartered in Delhi, India. We work with clients across India including Delhi NCR, Mumbai, Hyderabad, and internationally.',
  },
  {
    q: 'How much does a website development project cost at SutraIQ?',
    a: 'Website development projects at SutraIQ typically range from ₹50,000 for a basic business website to ₹5,00,000+ for a complex web application. Pricing depends on features, design complexity, and integrations required. Contact us for a free custom quote.',
  },
  {
    q: 'What technologies does SutraIQ use for web development?',
    a: 'Our core tech stack includes Next.js, React, Node.js, TypeScript, Python, Firebase, Google Cloud, Tailwind CSS, Docker, and Kubernetes. We choose the best technology based on your specific project requirements.',
  },
  {
    q: 'How long does it take to build a mobile app?',
    a: 'A standard mobile app (iOS or Android) takes 8–16 weeks depending on complexity. A simple MVP with core features typically takes 6–8 weeks. Full-featured apps with integrations take 12–20 weeks. We provide a detailed timeline during our free consultation.',
  },
  {
    q: 'Does SutraIQ offer AI chatbot development?',
    a: 'Yes. SutraIQ builds custom AI chatbots using LLMs (Gemini, Claude, GPT), NLP pipelines, and retrieval-augmented generation (RAG). We integrate chatbots into websites, WhatsApp, Slack, and internal tools.',
  },
  {
    q: 'Can SutraIQ help automate my business processes?',
    a: 'Absolutely. We automate workflows using n8n, Zapier, Make (Integromat), and custom Python scripts. Common automation projects include CRM sync, invoice generation, lead management, report generation, and data pipelines.',
  },
];

export function HomeFAQ() {
  // Keeps track of which FAQ is currently open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    // If clicking the already open one, close it. Otherwise, open the new one.
    setOpenIndex(openIndex === index ? null : index);
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFAQs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <section className="py-20 mt-8 relative z-10" aria-labelledby="faq-heading">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Frequently Asked Questions
        </h2>
        
        {/* Google SEO Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        
        {/* Interactive Accordion FAQs */}
        <div className="space-y-4">
          {homeFAQs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`border rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-300 ${
                  isOpen 
                    ? 'bg-black/60 border-yellow-500/50 shadow-[0_4px_20px_rgba(212,175,55,0.15)]' 
                    : 'bg-black/40 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <h3 
                    className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                      isOpen ? 'text-yellow-400' : 'text-gray-200 hover:text-white'
                    }`}
                  >
                    {faq.q}
                  </h3>
                  <div 
                    className={`flex-shrink-0 ml-4 p-1 rounded-full transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-yellow-500/10' : ''
                    }`}
                  >
                    <ChevronDown className={`w-6 h-6 ${isOpen ? 'text-yellow-500' : 'text-gray-400'}`} />
                  </div>
                </button>

                {/* Smooth open/close animation */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-white/5 pt-4 mt-2">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}