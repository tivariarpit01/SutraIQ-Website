import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { WebDevIcon } from '@/components/icons/WebDevIcon';
import { AiAutomationIcon } from '@/components/icons/AiAutomationIcon';
import { DigitalMarketingIcon } from '@/components/icons/DigitalMarketingIcon';
import { BpoServicesIcon } from '@/components/icons/BpoServicesIcon';
import { Star } from 'lucide-react';

const services = [
  {
    icon: <WebDevIcon className="h-12 w-12" />,
    title: 'Web Development',
    description: 'Crafting stunning, high-performance websites that captivate and convert.',
  },
  {
    icon: <AiAutomationIcon className="h-12 w-12" />,
    title: 'AI Automation',
    description: 'Leveraging artificial intelligence to streamline operations and boost efficiency.',
  },
  {
    icon: <DigitalMarketingIcon className="h-12 w-12" />,
    title: 'Digital Marketing',
    description: 'Driving growth with data-driven strategies that expand your online reach.',
  },
  {
    icon: <BpoServicesIcon className="h-12 w-12" />,
    title: 'BPO Services',
    description: 'Providing reliable business process outsourcing to optimize your workflow.',
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'CEO, Tech Innovators',
    quote: 'StackNova transformed our online presence. Their expertise in web development and AI is unmatched. We saw a 200% increase in engagement!',
    avatar: 'https://placehold.co/100x100',
    dataAiHint: 'woman portrait',
  },
  {
    name: 'Michael Chen',
    title: 'Marketing Director, FutureGadget',
    quote: "The digital marketing campaign they ran for us was a game-changer. Our ROI has never been better. Highly recommend their strategic approach.",
    avatar: 'https://placehold.co/100x100',
     dataAiHint: 'man portrait',
  },
  {
    name: 'Emily Rodriguez',
    title: 'COO, Creative Solutions',
    quote: 'Their BPO services have freed up so much of our team\'s time, allowing us to focus on our core business. Professional, efficient, and reliable.',
    avatar: 'https://placehold.co/100x100',
     dataAiHint: 'woman face',
  },
];

const trustedByLogos = ['Innovate Inc.', 'QuantumLeap', 'Stellar Solutions', 'Apex Enterprises', 'Visionary Ventures'];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-32 lg:py-40 bg-grid-white/[0.05]">
         <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Designing Tomorrow's Innovations
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-6">
            StackNova is your partner in building the future. We merge cutting-edge design with powerful technology to create solutions that drive growth.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              <Link href="/get-started">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Our Core Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
              We provide a suite of services designed to elevate your business in the digital age.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-primary/20">
                <CardHeader className="items-center">
                  {service.icon}
                </CardHeader>
                <CardContent className="text-center">
                  <h3 className="text-xl font-bold font-headline">{service.title}</h3>
                  <p className="mt-2 text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">What Our Clients Say</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
              Real stories from businesses we've helped transform.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="bg-card p-6 flex flex-col">
                <div className="flex-grow">
                    <div className="flex text-yellow-400 mb-2">
                        {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                    </div>
                  <blockquote className="text-lg italic">"{testimonial.quote}"</blockquote>
                </div>
                <div className="mt-6 flex items-center">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} data-ai-hint={testimonial.dataAiHint} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-center text-xl font-semibold text-muted-foreground mb-8">
            TRUSTED BY INDUSTRY LEADERS
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {trustedByLogos.map((logo) => (
              <span key={logo} className="text-2xl font-semibold text-muted-foreground/60 hover:text-foreground transition-colors">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
