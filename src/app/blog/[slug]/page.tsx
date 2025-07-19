'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

// Dummy blog post data (replace with your own backend or CMS later)
const posts = [
  {
    id: '1',
    title: 'How AI is Changing Web Development',
    description: 'Exploring the impact of artificial intelligence on frontend and backend workflows.',
    tag: 'AI & Dev',
    image: 'https://placehold.co/600x400',
    href: '/blog/ai-web-dev',
  },
  {
    id: '2',
    title: '10 Tips for Responsive Design in 2025',
    description: 'These modern UI/UX techniques will make your websites look slick on any device.',
    tag: 'UI/UX',
    image: 'https://placehold.co/600x400',
    href: '/blog/responsive-design-2025',
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Latest Insights</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link key={post.id} href={post.href}>
            <Card className="transition-all hover:shadow-xl hover:scale-[1.02] duration-200">
              <CardHeader className="p-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="rounded-t-xl object-cover"
                />
              </CardHeader>
              <CardContent className="p-4 space-y-2">
                <Badge variant="outline">{post.tag}</Badge>
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-muted-foreground">{post.description}</p>
                <span className="text-primary flex items-center gap-1">
                  Read More <ArrowRight size={18} />
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
