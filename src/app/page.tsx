"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { WebDevIcon } from "@/components/icons/WebDevIcon";
import { AiAutomationIcon } from "@/components/icons/AiAutomationIcon";
import { AppDevIcon } from "@/components/icons/AppDevIcon";
import { CloudSupportIcon } from "@/components/icons/CloudSupportIcon";
import TestimonialSwiper from "@/components/TestimonialSwiper";
import { HomeFAQ } from "@/components/layout/HomeFAQ"; 

import { Star, ArrowRight } from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiPython,
  SiGooglecloud,
  SiFirebase,
  SiTailwindcss,
  SiDocker,
  SiKubernetes,
  SiTensorflow,
} from "react-icons/si";

const AnimatedBackground = dynamic(
  () => import("@/components/ui/Animatedbaground"),
  { ssr: false }
);

// --- Animation Variants ---
const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const MotionCard = motion.create(Card);

// --- Data for Page Sections ---
const premiumServices = [
  {
    icon: WebDevIcon,
    title: "Web Development",
    description:
      "Beautiful, responsive, and high-performance websites tailored to your brand.",
    image: "/images/services/sutraiq-web-dev.png",
    link: "/services",
  },
  {
    icon: AppDevIcon,
    title: "Application Development",
    description:
      "Robust applications for mobile and web, optimized for scalability.",
    image: "/images/services/sutraiq-app-dev.png",
    link: "/services",
  },
  {
    icon: AiAutomationIcon,
    title: "AI & Automation",
    description: "Harness AI to streamline operations and unlock growth.",
    image: "/images/services/sutraiq-AI.png",
    link: "/services",
  },
  {
    icon: CloudSupportIcon,
    title: "Cloud Solutions",
    description:
      "Reliable and scalable cloud infrastructure, customized for you.",
    image: "/images/services/sutraiq-cloud.png",
    link: "/services",
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    title: "CEO, Tech Innovators",
    quote: "SutraIQ transformed our web presence. We saw 200% growth!",
    avatar: "/images/test/client1.jpg",
  },
  {
    name: "Sachin Malhotra",
    title: "Marketing Director, FutureGadget",
    quote: "Their campaign strategies boosted our ROI like crazy.",
    avatar: "/images/test/client2.png",
  },
  {
    name: "Pankaj Sharma",
    title: "CEO, Creative Solutions",
    quote: "Freed up internal time with smooth operations. Stellar team!",
    avatar: "/images/test/client3.jpg",
  },
  {
    name: "Priyanka Singh",
    title: "CEO, Global Enterprises",
    quote:
      "Incredible support and quality work. Our business has grown tremendously after working with them!",
    avatar: "/images/test/emily.jpg",
  },
  {
    name: "Shruti Tiwari",
    title: "CEO, Innovatech",
    quote: "SutraIQ transformed our web presence. We saw 200% growth!",
    avatar: "/images/test/client6.png",
  },
  {
    name: "Rahul Verma",
    title: "CEO, Tech Solutions",
    quote:
      "Incredible support and quality work. Our business has grown tremendously after working with them!",
    avatar: "/images/test/client4.png",
  },
];

const technologies = [
  {
    name: "Next.js",
    image: "/images/nextjs.png",
    glow: "from-white via-slate-300 to-white",
  },
  {
    name: "React",
    image: "/images/reactjss.png",
    glow: "from-cyan-400 via-blue-500 to-indigo-500",
  },
  {
    name: "Node.js",
    image: "/images/nodejs.png",
    glow: "from-green-400 via-emerald-500 to-green-600",
  },
  {
    name: "TypeScript",
    image: "/images/typescript.png",
    glow: "from-blue-400 via-blue-600 to-indigo-600",
  },
  {
    name: "Python",
    image: "/images/python.webp",
    glow: "from-yellow-400 via-orange-400 to-blue-500",
  },
  {
    name: "Google Cloud",
    image: "/images/googlecloud.png",
    glow: "from-blue-400 via-red-400 to-yellow-400",
  },
  {
    name: "Firebase",
    image: "/images/firebase.webp",
    glow: "from-amber-400 via-orange-500 to-yellow-500",
  },
  {
    name: "Tailwind CSS",
    image: "/images/tailwind.png",
    glow: "from-cyan-300 via-sky-400 to-blue-500",
  },
  {
    name: "Docker",
    image: "/images/docker.png",
    glow: "from-sky-400 via-blue-500 to-indigo-600",
  },
  {
    name: "Kubernetes",
    image: "/images/kubernet.webp",
    glow: "from-indigo-400 via-blue-600 to-indigo-700",
  },
  {
    name: "TensorFlow",
    image: "/images/tensorflow.png",
    glow: "from-orange-400 via-amber-500 to-yellow-500",
  },
  {
    name: "Katalon",
    image: "/images/Katalon.png",
    glow: "from-orange-400 via-amber-500 to-yellow-500",
  },
  {
    name: "N8n",
    image: "/images/n8n.png",
    glow: "from-orange-400 via-amber-500 to-yellow-500",
  },
  {
    name: "Zapier",
    image: "/images/zapier.webp",
    glow: "from-orange-400 via-amber-500 to-yellow-500",
  },
];

const trustedByLogos = [
  { name: "Google", image: "/images/trusted/google.webp" },
  { name: "Amazon", image: "/images/trusted/amazon-white.png" },
  { name: "Meta", image: "/images/trusted/meta.webp" },
  { name: "Freelancer", image: "/images/trusted/freel.webp" },
  { name: "Glassdoor", image: "/images/trusted/glassdoor.png" },
  { name: "India Mart", image: "/images/trusted/Indiamart.png" },
  { name: "Upwork", image: "/images/trusted/upwork.png" },
  { name: "Adobe", image: "/images/trusted/Adobe.png" },
  { name: "Apple", image: "/images/trusted/Apple.png" },
  { name: "aws", image: "/images/trusted/aws.png" },
  { name: "IBM", image: "/images/trusted/IBM.png" },
  { name: "Oracle", image: "/images/trusted/Oracle.png" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      
      <section className="relative w-full h-[700px] overflow-hidden text-white ">
        {/* 1️⃣ Animated Background */}
        <div className="absolute inset-0 z-0">
          <AnimatedBackground />
        </div>

        {/* 2️⃣ Image Wrapper (HEIGHT FIX HERE 🔥) */}
        <div className=" inset-0 z-[1] absolute h-[700px] sm:h-[700px] sm:min-w-4 w-full ">
          <Image
            src="/images/home2.jpeg"
            alt="SutraIQ Hero"
            fill
            priority
            sizes="90vw"
            className=" opacity-60 sm:object-contain md:object-cover object-center"
          />
        </div>

        {/* 3️⃣ Overlay */}
        <div className="absolute inset-0 bg-black/40 z-[1]" />

        {/* 4️⃣ Content */}
        <div className="relative z-[3] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center min-h-[100svh]">
            <div className="max-w-2xl">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl sm:text-6xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                Designing Tomorrow’s <br /> Innovations
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-xl md:text-xl text-slate-200 mb-8"
              >
                SutraIQ is your partner in building the future — one innovation
                at a time.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex gap-4 flex-wrap"
              >
                <Button asChild>
                  <Link href="/get-started">Get Started</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* SERVICES */}
      <motion.section
        className="py-20 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 relative">
          {premiumServices.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              
              <Card className="relative overflow-hidden group h-full sm:h-2/4 w-full sm:w-2/4 md:h-3xl lg:h-full lg:w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition" />

                <div className="relative z-10 p-6 text-white flex flex-col h-full">
                  <div className="mb-4">
                    {React.createElement(service.icon, {
                      className: "h-12 w-12 text-blue-400",
                    })}
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-slate-300 text-sm sm:xl md:2xl lg:3xl flex-grow">
                    {service.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
      {/* TECH STACK */}
      <motion.section
        // ye pehle wala comment className="py-20 bg-secondary"
        className="py-24 sm:h-xl md:h-2xl lg:h-full sm:w-xl md:w-2xl lg:w-full relative overflow-hidden 
bg-gradient-to-br from-[#0B1220] via-[#0E1730] to-[#111A2E]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
      >
        
        <div className="container mx-auto px-4 text-center relative ">
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-white"
          >
            Our Technology Stack
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-slate-300 mt-3 max-w-xl mx-auto"
          >
            Tools we love. Code we trust.
          </motion.p>

          <motion.div
            className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
            variants={sectionVariants}
          >
            {technologies.map((tech, index) => {
              const Icon = tech.image;
              return (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  //whileHover={{ scale: 1.15 }}
                  whileHover={{ scale: 1.18 }}
                  //transition={{ type: "spring", stiffness: 300 }}
                  transition={{ type: "spring", stiffness: 260 }}
                  
                  className="group relative mx-auto"
                >
                  <div
                    className="
    absolute inset-0 rounded-full
    bg-gradient-to-br from-blue-500 via-cyan-400 to-indigo-500
    opacity-30 blur-md
    group-hover:opacity-70
    transition-all duration-300
  "
                  />
                  <div
                    className="
    relative z-10
    w-28 h-28
    rounded-full
    bg-gradient-to-br from-[#0F1A33] to-[#0B1220]
    border border-white/10
    flex flex-col items-center justify-center
  "
                  >
                    
                    <Image
                      src={tech.image}
                      alt={tech.name}
                      width={40}
                      height={40}
                      className="mb-2 object-contain 
    drop-shadow-[0_0_6px_rgba(255,255,255,0.25)]
    group-hover:scale-110
    transition-transform duration-300"
                    />

                    
                    <span className="text-sm text-slate-300 font-medium">
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      <section className="py-20 relative bg-gradient-to-b  overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center">
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            We Understand Our Clients
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#d4af37] via-[#f5d76e] to-[#d4af37] mx-auto mb-12 rounded-full" />

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {[
              { title: "We Listen and Understand", image: "/images/icon1.png" },
              { title: "We Offer Real Solutions", image: "/images/icon2.png" },
              {
                title: "We Prioritize Strategic Thinking",
                image: "/images/icon3.png",
              },
              {
                title: "We Deliver Without Compromise",
                image: "/images/icon4.png",
              },
              {
                title: "We Believe in Unified Efforts",
                image: "/images/icon5.png",
              },
              {
                title: "We Are Supportive and Accessible",
                image: "/images/icon6.png",
              },
              {
                title: "We Think Strategically and Logically",
                image: "/images/icon7.png",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative text-center p-6 rounded-3xl  backdrop-blur-md border border-yellow-400  shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_rgba(212,175,55,0.4)]"
              >
                {/* Floating Icon */}
                <div className="w-20 h-20 mx-auto mb-4 relative animate-float">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]"
                  />
                </div>
                <p className="text-sm text-white font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Animation Keyframes */}
        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/*It services for business growth*/}
      <section className="py-24 relative bg-background">
  <div className="container mx-auto px-4 md:px-6">
    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-4xl sm:text-5xl font-bold mb-4">
        Our Projects
      </h2>
      <div className="h-[3px] w-24 bg-gradient-to-r from-[#d4af37] via-[#f5d76e] to-[#d4af37] mx-auto rounded-full" />
      <p className="text-muted-foreground max-w-2xl mx-auto mt-5">
        Real products we’ve built and launched — actively used by
        businesses today.
      </p>
    </div>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          name: "Ecommerce Website",
          image: "/images/ecommerce.jpg",
          description:
            "A modern gaming platform featuring multiplayer games, leaderboards and real-time stats.",
          tech: "Next.js • WebSockets • Node.js",
          link: "https://demo.vercel.store/",
        },
        {
          name: "GlowUp Studio",
          image: "/images/makeup.jpg",
          description:
            "Premium makeup & beauty brand website with product showcases and booking flow.",
          tech: "Next.js • Tailwind • Stripe",
          link: "https://www.nyxcosmetics.com/try-it-on.html?srsltid=AfmBOoqKCmwD5uLuxl4WoNfY4rZPbWRCrLpkHikgoyEBHREMKTt9_P4i1",
        },
        {
          name: "AI Analytics Tool",
          image: "/images/ai.jpg",
          description:
            "AI-powered analytics dashboard delivering deep business insights in real time.",
          tech: "React • Python • Machine Learning",
          link: "https://example-ai.com",
        },
      ].map((project, i) => (
        <div
          key={i}
          className="
            group rounded-2xl overflow-hidden
            border border-border/50
            bg-card
            hover:shadow-xl transition-all duration-300
          "
        >
          {/* Image */}
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.name}
              className="
                w-full h-56 object-cover
                transition-transform duration-500
                group-hover:scale-105
              "
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">
              {project.name}
            </h3>

            <p className="text-sm text-muted-foreground mb-3">
              {project.description}
            </p>

            <p className="text-xs text-slate-400 mb-5">
              {project.tech}
            </p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                text-sm font-medium
                text-[#d4af37]
                border-b border-[#d4af37]
                hover:opacity-80 transition
              "
            >
              Visit Project →
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/*industries we serve*/}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold mb-2">
            Industries We Serve
          </h2>
          <div className="h-1 w-24 bg-orange-400 mx-auto mb-10 rounded-full" />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-[1px] bg-border rounded-xl overflow-hidden">
            {[
              { title: "HealthCare", icon: "images/industries/Health.png" },
              { title: "E-Finance", icon: "images/industries/E-Finance.png" },
              { title: "Insurance", icon: "images/industries/Insurance.png" },
              { title: "Education", icon: "images/industries/Education.png" },
              {
                title: "Energy & Utilities",
                icon: "images/industries/Energy.png",
              },
              {
                title: "Media & Entertainment",
                icon: "images/industries/Media.png",
              },
              {
                title: "Oil, Gas & Mining",
                icon: "images/industries/Oil_gas.png",
              },
              { title: "Retail", icon: "images/industries/Retail.png" },
              {
                title: "Logistics & Distribution",
                icon: "images/industries/Logistic.png",
              },
              { title: "Telecoms", icon: "images/industries/Telecome.png" },
              {
                title: "Travel & Hospitality",
                icon: "images/industries/Travel.png",
              },
              { title: "Public Sector", icon: "images/industries/public.png" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-background p-6 flex flex-col items-center justify-center gap-2 hover:shadow-md transition-all"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-14 h-14 object-contain mb-2"
                />
                <h3 className="text-sm font-medium">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* TRUSTED BY */}
      
      <section className="py-24 relative overflow-hidden bg-secondary/20">
        <div className="container mx-auto px-4 relative">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14">
            Technologies & Platforms We Work With
          </h2>

          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          {/* ROW 1 → LEFT */}
          <div className="overflow-hidden mb-10">
            <div className="flex gap-16 animate-marquee-left hover:[animation-play-state:paused]">
              {[...trustedByLogos, ...trustedByLogos].map((logo, i) => (
                <div
                  key={`row1-${i}`}
                  className="flex flex-col items-center justify-center min-w-[100px]"
                >
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    width={140}
                    height={70}
                    className="object-contain mb-3 opacity-90"
                  />
                  <span className="text-sm font-medium text-muted-foreground">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ROW 2 → RIGHT */}
          <div className="overflow-hidden">
            <div className="flex gap-16 animate-marquee-right hover:[animation-play-state:paused]">
              {[...trustedByLogos, ...trustedByLogos].map((logo, i) => (
                <div
                  key={`row2-${i}`}
                  className="flex flex-col items-center justify-center min-w-[100px]"
                >
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    width={140}
                    height={70}
                    className="object-contain mb-3 opacity-90"
                  />
                  <span className="text-sm font-medium text-muted-foreground">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* TESTIMONIALS */}
      
      <motion.section
        className="py-20 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <motion.h2 variants={itemVariants} className="text-4xl font-bold">
              What Our Clients Say
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground mt-2 max-w-2xl mx-auto"
            >
              Proof in the praise. Here’s what they said.
            </motion.p>
          </div>

          <TestimonialSwiper testimonials={testimonials} />
        </div>
      </motion.section>

      {/* FAQs SECTION ADDED HERE */}
      {/* <HomeFAQ /> */}

    </div>
  );
}