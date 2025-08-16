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
    avatar: "/images/test/client1.png",
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
    name: "Emily Johnson",
    title: "CEO, Global Enterprises",
    quote:
      "Incredible support and quality work. Our business has grown tremendously after working with them!",
    avatar: "/images/test/emily.jpg",
  },
  {
    name: "Michael Chen",
    title: "CEO, Innovatech",
    quote: "SutraIQ transformed our web presence. We saw 200% growth!",
    avatar: "/images/test/michael chen.avif",
  },
  {
    name: "Sarah Johnson",
    title: "CEO, Tech Solutions",
    quote:
      "Incredible support and quality work. Our business has grown tremendously after working with them!",
    avatar: "/images/test/sarah johnson.jpg",
  },
];

const technologies = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Python", icon: SiPython },
  { name: "Google Cloud", icon: SiGooglecloud },
  { name: "Firebase", icon: SiFirebase },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Docker", icon: SiDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "TensorFlow", icon: SiTensorflow },
];

const trustedByLogos = [
  { name: "Google", image: "/images/trusted/google.webp" },
  { name: "Amazon", image: "/images/trusted/amazon-white.png" },
  { name: "Meta", image: "/images/trusted/meta.webp" },
  { name: "Freelancer", image: "/images/trusted/freelencer.png" },
  { name: "Glassdoor", image: "/images/trusted/glassdoor.png" },
  { name: "India Mart", image: "/images/trusted/indiamart.png" },
  { name: "Upwork", image: "/images/trusted/upwork.png" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white min-h-screen flex items-center">
        <AnimatedBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 z-10">
          <div className="container mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Designing Tomorrow’s Innovations
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl ml-8 mx-auto"
            >
              SutraIQ is your partner in building the future — one innovation at
              a time.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Button asChild>
                <Link href="/get-started">Get Started</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/services">Our Services</Link>
              </Button>
            </motion.div>
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
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                <div className="grid md:grid-cols-2">
                  <div className="relative w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                    {/* Fixed Image with sizes */}
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col">
                    <div className="mb-4">
                      {React.createElement(service.icon, {
                        className: "h-12 w-12",
                      })}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground flex-grow">
                      {service.description}
                    </p>
                    <Button
                      asChild
                      variant="link"
                      className="mt-4 p-0 text-primary font-semibold justify-start"
                    >
                      <Link href={service.link}>
                        Learn More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* TECH STACK */}
      <motion.section
        className="py-20 bg-secondary"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 text-center relative">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold">
            Our Technology Stack
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground mt-2 max-w-xl mx-auto"
          >
            Tools we love. Code we trust.
          </motion.p>

          <motion.div
            className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
            variants={sectionVariants}
          >
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group relative bg-white dark:bg-slate-800 shadow-md rounded-full w-24 h-24 flex flex-col items-center justify-center mx-auto hover:shadow-lg transition-all duration-300"
                >
                  <Icon className="text-blue-600 dark:text-blue-400 h-8 w-8 mb-1 group-hover:animate-ping-once" />
                  <span className="text-xs text-center text-slate-700 dark:text-slate-300">
                    {tech.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>
      // Inside your HomePage component
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold mb-4">
            We Understand Our Clients
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-12 rounded-full" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {[
              {
                title: "We Listen and Understand",
                image: "/images/icon1.png",
              },
              {
                title: "We Offer Real Solutions",
                image: "/images/icon2.png",
              },
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
                className="text-center p-6 border rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.03] bg-card"
              >
                <div className="w-16 h-16 mx-auto mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*It services for business growth*/}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold mb-2">
            IT Services for Business Growth
          </h2>
          <div className="h-1 w-24 bg-orange-400 mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Technology should help your business grow, not just keep the lights
            on. <br />
            Our IT services for business look beyond just fixing problems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Transformation",
                description:
                  "Rethink how your business works with technology that opens new possibilities.",
                icon: "/images/one.png",
              },
              {
                title: "Business Process Automation",
                description:
                  "Let computers handle the boring, repetitive stuff so your team can focus on the work that matters.",
                icon: "/images/two.png",
              },
              {
                title: "Data Services",
                description:
                  "Turn the information you already have into insights that help you make better decisions.",
                icon: "/images/three.png",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-muted/30 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-4">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
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
              { title: "E-Finance", icon: "images/industries/E-finance.png" },
              { title: "Insurance", icon: "images/industries/insurance.png" },
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
            <motion.h2 variants={itemVariants} className="text-3xl font-bold">
              What Our Clients Say
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground mt-2 max-w-xl mx-auto"
            >
              Proof in the praise. Here’s what they said.
            </motion.p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <MotionCard
                key={testimonial.name}
                variants={itemVariants}
                className="p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground italic text-sm">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
                <div className="flex items-center mt-6">
                  <Avatar>
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
      </motion.section>
      {/* TRUSTED BY */}
      <section className="py-12 bg-secondary/20 relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-lg font-semibold uppercase tracking-wider text-muted-foreground mb-12">
            Trusted by Industry Leaders
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-x-8 gap-y-12 items-center">
            {trustedByLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center justify-center h-10"
              >
                <Image
                  src={logo.image}
                  alt={logo.name}
                  width={140}
                  height={100}
                  className="
          object-contain h-full w-auto max-w-full
          transition-all duration-300
          hover:scale-110
        "
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
