'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { WebDevIcon } from '@/components/icons/WebDevIcon'
import { AiAutomationIcon } from '@/components/icons/AiAutomationIcon'
import { AppDevIcon } from '@/components/icons/AppDevIcon'
import { CloudSupportIcon } from '@/components/icons/CloudSupportIcon'
import { Star, ArrowRight } from 'lucide-react'

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

const MotionCard = motion(Card);

// --- Data for Page Sections ---
const premiumServices = [
  {
    icon: WebDevIcon,
    title: 'Web Development',
    description:
      'Beautiful, responsive, and high-performance websites tailored to your brand.',
    image: '/images/services/web.png',
    link: '/services',
  },
  {
    icon: AppDevIcon,
    title: 'Application Development',
    description:
      'Robust applications for mobile and web, optimized for scalability.',
    image: '/images/services/app.png',
    link: '/services',
  },
  {
    icon: AiAutomationIcon,
    title: 'AI & Automation',
    description: 'Harness AI to streamline operations and unlock growth.',
    image: '/images/services/AI.png',
    link: '/services',
  },
  {
    icon: CloudSupportIcon,
    title: 'Cloud Solutions',
    description: 'Reliable and scalable cloud infrastructure, customized for you.',
    image: '/images/services/cloud.png',
    link: '/services',
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'CEO, Tech Innovators',
    quote: 'StackNova transformed our web presence. We saw 200% growth!',
    avatar: '/images/team/arpit.jpeg',
  },
  {
    name: 'Michael Chen',
    title: 'Marketing Director, FutureGadget',
    quote: 'Their campaign strategies boosted our ROI like crazy.',
    avatar: '/images/team/mukund.jpg',
  },
  {
    name: 'Emily Rodriguez',
    title: 'COO, Creative Solutions',
    quote: 'Freed up internal time with smooth operations. Stellar team!',
    avatar: '/images/team/shashank.png',
  },
];

const technologies = [
  'Next.js', 'React', 'Node.js', 'TypeScript', 'Python', 'Google Cloud',
  'Firebase', 'Tailwind CSS', 'Docker', 'Kubernetes', 'Genkit', 'TensorFlow',
];

const trustedByLogos = [
  'Innovate Inc.', 'QuantumLeap', 'Stellar Solutions',
  'Apex Enterprises', 'Visionary Ventures',
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent"
            >
              Designing Tomorrow’s Innovations
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-muted-foreground max-w-xl mx-auto"
            >
              StackNova is your partner in building the future — one innovation at a time.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 flex justify-center gap-4"
            >
              <Button asChild>
                <Link href="/get-started">Get Started</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/services">Our Services</Link>
              </Button>
            </motion.div>
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
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10">
          {premiumServices.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                <div className="grid md:grid-cols-2">
                  <div className="relative w-full h-64 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col">
                    <div className="mb-4">
                      {React.createElement(service.icon, { className: "h-12 w-12" })}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground flex-grow">{service.description}</p>
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
        <div className="container mx-auto px-4 text-center">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold">Our Technology Stack</motion.h2>
          <motion.p variants={itemVariants} className="text-muted-foreground mt-2 max-w-xl mx-auto">
            Tools we love. Code we trust.
          </motion.p>
          <motion.div
            className="mt-6 flex flex-wrap justify-center gap-4"
            variants={sectionVariants}
          >
            {technologies.map((tech) => (
              <motion.span
                key={tech}
                variants={itemVariants}
                className="bg-card px-4 py-2 rounded border text-sm"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* TESTIMONIALS */}
      <motion.section
        className="py-20 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
         <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <motion.h2 variants={itemVariants} className="text-3xl font-bold">What Our Clients Say</motion.h2>
              <motion.p variants={itemVariants} className="text-muted-foreground mt-2 max-w-xl mx-auto">
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
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
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
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-lg font-semibold text-muted-foreground mb-8">
            TRUSTED BY INDUSTRY LEADERS
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {trustedByLogos.map((logo) => (
              <span
                key={logo}
                className="text-xl font-medium text-muted-foreground hover:text-foreground transition"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}