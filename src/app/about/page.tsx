import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Twitter, Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Alexandra Lee',
    role: 'Founder & CEO',
    avatar: 'https://placehold.co/400x400',
    dataAiHint: 'woman portrait professional',
    bio: 'With over 15 years in tech, Alexandra drives the vision of StackNova, ensuring innovation and excellence in every project.',
  },
  {
    name: 'Benjamin Carter',
    role: 'Chief Technology Officer',
    avatar: 'https://placehold.co/400x400',
    dataAiHint: 'man portrait professional',
    bio: 'Ben is the architectural mastermind behind our powerful solutions, specializing in AI and scalable systems.',
  },
  {
    name: 'Chloe Garcia',
    role: 'Head of Design',
    avatar: 'https://placehold.co/400x400',
    dataAiHint: 'woman face professional',
    bio: 'Chloe leads our creative team, transforming complex ideas into intuitive and beautiful user experiences.',
  },
   {
    name: 'David Singh',
    role: 'Director of Operations',
    avatar: 'https://placehold.co/400x400',
    dataAiHint: 'man face professional',
    bio: 'David ensures that our projects are delivered on time and beyond expectations, managing our global BPO services.',
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-28 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            The Minds Behind the Magic
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-6">
            We are a team of passionate creators, thinkers, and innovators dedicated to pushing the boundaries of technology and design.
          </p>
        </div>
      </section>

      {/* Our Story & Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our mission is to empower businesses with transformative digital solutions. We believe in the power of technology to solve complex problems, create opportunities, and drive meaningful progress. We are committed to building long-term partnerships with our clients, founded on trust, collaboration, and shared success.
              </p>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                Founded in 2020, StackNova began with a simple idea: to make cutting-edge technology accessible and impactful for businesses of all sizes. From a small team of enthusiasts, we have grown into a full-service digital agency serving clients worldwide. Our journey is one of constant learning, adaptation, and an unwavering commitment to quality.
              </p>
            </div>
            <div className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://placehold.co/600x400"
                alt="Our Team at Work"
                layout="fill"
                objectFit="cover"
                className="transform hover:scale-105 transition-transform duration-500"
                data-ai-hint="team collaboration office"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Leadership</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
              The driving force behind StackNova's innovation and success.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center bg-card p-6 border-transparent hover:border-primary transition-all duration-300 transform hover:-translate-y-2 shadow-xl hover:shadow-primary/25">
                <CardContent className="flex flex-col items-center">
                  <Avatar className="w-32 h-32 mb-4 border-4 border-primary/50">
                    <AvatarImage src={member.avatar} data-ai-hint={member.dataAiHint} />
                    <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold font-headline">{member.name}</h3>
                  <p className="text-primary font-semibold mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                   <div className="flex space-x-2">
                        <Button variant="ghost" size="icon" asChild>
                            <Link href="#" aria-label="Twitter">
                                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
                            </Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <Link href="#" aria-label="LinkedIn">
                                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
                            </Link>
                        </Button>
                    </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

       {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Team</h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground md:text-lg">
            We're always looking for talented individuals to join our mission. Explore our open positions.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg" className="font-semibold">
              <Link href="#">View Careers</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
