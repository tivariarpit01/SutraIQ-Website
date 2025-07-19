'use client' // <--- Keep this if you need client-side interactivity like hover effects

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { WebDevIcon } from '@/components/icons/WebDevIcon'
import { AiAutomationIcon } from '@/components/icons/AiAutomationIcon'
import { AppDevIcon } from '@/components/icons/AppDevIcon'
import { CloudSupportIcon } from '@/components/icons/CloudSupportIcon'
import { Star, ArrowRight } from 'lucide-react'

// ✅ Service data with real image paths - ENSURE THESE ARE THE ONLY IMAGES USED
const premiumServices = [
  {
    icon: <WebDevIcon className="h-12 w-12" />,
    title: 'Web Development',
    description: 'Beautiful, responsive, and high-performance websites tailored to your brand.',
    image: '/images/services/web.png', // Keep this path
    link: '/services',
  },
  {
    icon: <AppDevIcon className="h-12 w-12" />,
    title: 'Application Development',
    description: 'Robust applications for mobile and web, optimized for scalability.',
    image: '/images/services/app.png', // Keep this path
    link: '/services',
  },
  {
    icon: <AiAutomationIcon className="h-12 w-12" />,
    title: 'AI & Automation',
    description: 'Harness AI to streamline operations and unlock growth.',
    image: '/images/services/Ai.png', // Keep this path
    link: '/services',
  },
  {
    icon: <CloudSupportIcon className="h-12 w-12" />,
    title: 'Cloud Solutions',
    description: 'Reliable and scalable cloud infrastructure, customized for you.',
    image: '/images/services/cloud.png', // Keep this path
    link: '/services',
  },
]

// ✅ Testimonials with image avatars
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
    avatar: '/images/team/arpit.jpeg',
  },
  {
    name: 'Emily Rodriguez',
    title: 'COO, Creative Solutions',
    quote: 'Freed up internal time with smooth operations. Stellar team!',
    avatar: '/images/team/arpit.jpeg',
  },
]

const technologies = [
  'Next.js', 'React', 'Node.js', 'TypeScript', 'Python', 'Google Cloud',
  'Firebase', 'Tailwind CSS', 'Docker', 'Kubernetes', 'Genkit', 'TensorFlow',
]

const trustedByLogos = ['Innovate Inc.', 'QuantumLeap', 'Stellar Solutions', 'Apex Enterprises', 'Visionary Ventures']

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="py-24 text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
          Designing Tomorrow’s Innovations
        </h1>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          StackNova is your partner in building the future — one innovation at a time.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button asChild><Link href="/get-started">Get Started</Link></Button>
          <Button variant="outline" asChild><Link href="/services">Our Services</Link></Button>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-background">
        <div className="container px-4 grid md:grid-cols-2 gap-10">
          {premiumServices.map((service) => (
            <Card key={service.title} className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="grid md:grid-cols-2">
                {/* Image container: Ensure className is IDENTICAL on server and client */}
                <div className="relative w-full h-64 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={service.image} // This MUST match the server-rendered src
                    alt={service.title}
                    fill // Keep fill if you want the image to stretch within the container
                    // Ensure object-fit is consistent. You previously wanted object-contain.
                    className="object-contain transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                  <Button asChild variant="link" className="mt-4 p-0 text-primary font-semibold">
                    <Link href={service.link}>Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section className="py-20 bg-secondary">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Our Technology Stack</h2>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
            Tools we love. Code we trust.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <span key={tech} className="bg-card px-4 py-2 rounded border text-sm">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-background">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">What Our Clients Say</h2>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto">Proof in the praise. Here’s what they said.</p>
        </div>
        <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="p-6 flex flex-col justify-between">
              <div>
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground italic text-sm">"{testimonial.quote}"</blockquote>
              </div>
              <div className="flex items-center mt-6">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="py-16 bg-secondary/20">
        <div className="container text-center">
          <h2 className="text-lg font-semibold text-muted-foreground mb-8">TRUSTED BY INDUSTRY LEADERS</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {trustedByLogos.map((logo) => (
              <span key={logo} className="text-xl font-medium text-muted-foreground hover:text-foreground transition">{logo}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}