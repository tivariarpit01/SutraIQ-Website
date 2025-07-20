'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import type { Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'From static websites to dynamic full-stack applications, we build fast, scalable, and responsive websites using modern tech stacks.',
    image: '/images/services/web.png',
    link: '/get-started',
  },
  {
    title: 'App Development',
    description: 'We create mobile apps with beautiful UIs and seamless UX for both Android and iOS, using React Native and Flutter.',
    image: '/images/services/app.png',
    link: '/get-started',
  },
  {
    title: 'AI & Automation',
    description: 'Automate your business with AI-powered tools and workflows. We build LLM-integrated agents and custom AI systems.',
    image: '/images/services/new.jpg',
    link: '/get-started',
  },
  {
    title: 'UI/UX Design',
    description: 'Crafting delightful user experiences through intuitive interfaces, wireframes, and prototypes that convert.',
    image: '/images/services/ui_ux.png',
    link: '/get-started',
  },
  {
    title: 'Cloud Services',
    description: 'Reliable and scalable cloud infrastructure, customized for you.',
    image: '/images/services/cloud.png',
    link: '/get-started',
  },
];



const createCardVariants = (i: number): Variants => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
});


export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Empowering your business with cutting-edge technology solutions and strategic digital products.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={createCardVariants(i)}
          >
            <Card className="rounded-2xl overflow-hidden border hover:shadow-lg transition">
              <CardContent className="p-0">
                <div className="relative w-full h-64 bg-gray-100 dark:bg-gray-900">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain p-6"
                  />
                </div>
              </CardContent>
              <div className="p-6">
                <CardTitle className="text-2xl font-semibold mb-2">{service.title}</CardTitle>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Button asChild variant="outline">
                  <Link href={service.link}>
                    Let’s Talk <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
