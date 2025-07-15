import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { WebDevIcon } from '@/components/icons/WebDevIcon';
import { AiAutomationIcon } from '@/components/icons/AiAutomationIcon';
import { AppDevIcon } from '@/components/icons/AppDevIcon';
import { CloudSupportIcon } from '@/components/icons/CloudSupportIcon';
import { Star, ArrowRight } from 'lucide-react';

const premiumServices = [
  {
    icon: <WebDevIcon className="h-12 w-12" />,
    title: 'Web Development',
    description: 'We build beautiful, responsive, and high-performance websites and web applications tailored to your business needs, ensuring a great user experience.',
    image: 'https://placehold.co/600x400',
    dataAiHint: 'modern website design',
    link: '/services'
  },
  {
    icon: <AppDevIcon className="h-12 w-12" />,
    title: 'Application Development',
    description: 'We build scalable and robust applications for web and mobile platforms, tailored to your specific business needs, ensuring a seamless user experience.',
    image: 'https://placehold.co/600x400',
    dataAiHint: 'mobile app interface',
    link: '/services'
  },
  {
    icon: <AiAutomationIcon className="h-12 w-12" />,
    title: 'AI & Automation',
    description: 'Leverage the power of Artificial Intelligence to automate processes, gain insights from data, and create intelligent solutions that drive growth.',
    image: 'https://placehold.co/600x400',
    dataAiHint: 'abstract robot brain',
    link: '/services'
  },
  {
    icon: <CloudSupportIcon className="h-12 w-12" />,
    title: 'Cloud Solutions',
    description: 'Our cloud services provide a secure, scalable, and reliable infrastructure, enabling your business to operate with agility and efficiency.',
    image: 'https://placehold.co/600x400',
    dataAiHint: 'server room network',
    link: '/services'
  }
];

const technologies = [
  "Next.js", "React", "Node.js", "TypeScript", "Python", "Google Cloud", "Firebase", "Tailwind CSS", "Docker", "Kubernetes", "Genkit", "TensorFlow"
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
   {
    name: 'James White',
    title: 'Founder, StartupX',
    quote: 'Working with StackNova on our app was a breeze. They delivered a high-quality product on time and within budget. Their team is incredibly talented.',
    avatar: 'https://placehold.co/100x100',
    dataAiHint: 'man face professional',
  },
  {
    name: 'Jessica Brown',
    title: 'CTO, DataCorp',
    quote: 'The cloud solutions provided by StackNova have been instrumental in our ability to scale. Their support team is responsive and knowledgeable.',
    avatar: 'https://placehold.co/100x100',
    dataAiHint: 'woman portrait professional',
  }
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
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-6">
            StackNova is your partner in building the future. We merge cutting-edge design with powerful technology to create solutions that drive growth.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              <Link href="/get-started">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Premium Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Our Premium Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
              Driving innovation and excellence with our core technology offerings.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {premiumServices.map((service, index) => (
              <Card key={service.title} className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/20 overflow-hidden">
                <div className={`grid grid-cols-1 md:grid-cols-2 items-center`}>
                  <div className={`relative h-64 md:h-full w-full ${index % 2 !== 0 ? 'md:order-2' : 'md:order-1'}`}>
                     <Image
                        src={service.image}
                        alt={service.title}
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint={service.dataAiHint}
                        className="transform hover:scale-105 transition-transform duration-500"
                      />
                  </div>
                   <div className={`p-8 ${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold font-headline mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <Button asChild variant="link" className="p-0 font-semibold">
                      <Link href={service.link}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Technology Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Our Technology Stack</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
              We use the best and latest technologies to build powerful, scalable, and secure solutions.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {technologies.map((tech) => (
              <div key={tech} className="bg-card border rounded-lg px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background">
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
                  <blockquote className="text-lg italic text-muted-foreground">"{testimonial.quote}"</blockquote>
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
          <h2 className="text-center text-xl font-semibold text-muted-foreground mb-8 tracking-widest">
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
