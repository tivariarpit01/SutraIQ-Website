import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { WebDevIcon } from '@/components/icons/WebDevIcon';
import { AiAutomationIcon } from '@/components/icons/AiAutomationIcon';
import { AppDevIcon } from '@/components/icons/AppDevIcon';
import { CloudSupportIcon } from '@/components/icons/CloudSupportIcon';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <WebDevIcon className="h-16 w-16" />,
    title: 'Web Development',
    description: 'We build beautiful, responsive, and high-performance websites and web applications tailored to your business needs. From e-commerce platforms to corporate sites, our solutions are scalable, secure, and optimized for search engines.',
    details: ['Custom UI/UX Design', 'Frontend & Backend Development', 'E-commerce Solutions', 'CMS Integration', 'Ongoing Maintenance & Support'],
  },
  {
    icon: <AppDevIcon className="h-16 w-16" />,
    title: 'App Development',
    description: 'We design and develop intuitive, high-performance mobile applications for both iOS and Android platforms, ensuring a seamless user experience that aligns with your brand and business objectives.',
    details: ['iOS & Android App Development', 'Cross-Platform Solutions', 'UI/UX for Mobile', 'App Maintenance & Support', 'App Store Optimization'],
  },
  {
    icon: <AiAutomationIcon className="h-16 w-16" />,
    title: 'AI Solutions',
    description: 'Unlock efficiency and innovation with our AI services. We help businesses automate repetitive tasks, gain insights from data, and create intelligent systems that drive growth and reduce operational costs.',
    details: ['Process Automation (RPA)', 'AI-Powered Chatbots', 'Machine Learning Models', 'Data Analytics & Insights', 'Natural Language Processing (NLP)'],
  },
  {
    icon: <CloudSupportIcon className="h-16 w-16" />,
    title: 'Cloud Support',
    description: 'Leverage the power of the cloud with our expert support and management services. We ensure your cloud infrastructure is secure, scalable, and cost-effective, allowing you to focus on your core business.',
    details: ['Cloud Migration Services', 'Infrastructure as a Service (IaaS)', 'DevOps & CI/CD', 'Cloud Security & Compliance', '24/7 Monitoring & Support'],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-28 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Our Expertise, Your Success
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-6">
            Discover how our specialized services can empower your business to thrive in a competitive landscape.
          </p>
        </div>
      </section>

      {/* Services Details Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card key={service.title} className="p-6 md:p-8 lg:p-10 border-border/50 shadow-lg bg-card overflow-hidden">
                <div className={`grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center`}>
                  <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="flex items-center gap-4 mb-4">
                      {service.icon}
                      <CardTitle className="font-headline text-3xl font-bold tracking-tight">{service.title}</CardTitle>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-3">
                           <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent"></div>
                          <span className="font-medium">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild size="lg" className="mt-8 font-semibold">
                      <Link href="/get-started">Get a Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
                    </Button>
                  </div>
                  <div className={`relative w-full h-64 md:h-80 rounded-lg overflow-hidden ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                     <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-50"></div>
                     <div className="absolute inset-0 flex items-center justify-center">
                        {service.icon}
                     </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Start Your Project?</h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground md:text-lg">
            Let's discuss how StackNova can help you achieve your goals. Contact us for a free consultation.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="font-semibold bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/get-started">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
