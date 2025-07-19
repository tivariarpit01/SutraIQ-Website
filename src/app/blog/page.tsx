// src/app/blog/page.tsx
// Removed 'use client' - This page can be a Server Component if data is fetched on the server
// If you add client-side interactivity that requires hooks, you might need to add it back.

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { Metadata } from 'next'; // Import Metadata type for generateMetadata

// --- New: Metadata for the Blog Page ---
export const metadata: Metadata = {
  title: 'Our Blog - StackNova Insights',
  description: 'Explore insights, tutorials, and updates from StackNova on web development, AI, app development, and cloud solutions.',
  keywords: ['blog', 'tech blog', 'web development', 'AI', 'app development', 'cloud solutions', 'tutorials', 'insights'],
  openGraph: {
    title: 'StackNova Blog',
    description: 'Insights, tutorials, and updates from StackNova.',
    url: 'https://yourwebsite.com/blog', // Replace with your actual domain
    type: 'website',
  },
};

// 🧠 Dummy blog posts (would be fetched from a DB/CMS in a real app)
// In a real application, this data would likely come from a database (Mongoose/MongoDB)
// or a CMS. For a blog, this would typically be done in a Server Component.
const posts = [
  {
    id: '1',
    title: 'Building Scalable Web Apps with Next.js 15',
    description: 'Explore how to build fast and scalable applications using the latest features of Next.js 15, focusing on performance and maintainability.',
    tags: ['Next.js', 'Web Dev', 'Scalability'],
    image: '/images/blog/blog1.jpg', // Ensure this path is correct in your public folder
    slug: 'scalable-nextjs-apps',
    date: '2025-07-15' // Added a date for potential sorting/display
  },
  {
    id: '2',
    title: 'Mastering React Server Components for Modern Web',
    description: 'Deep dive into the power of React Server Components and how they change the way we think about rendering and data fetching.',
    tags: ['React', 'Frontend', 'SSR'],
    image: '/images/blog/blog2.jpg', // Ensure this path is correct in your public folder
    slug: 'mastering-react-server-components',
    date: '2025-07-10'
  },
  {
    id: '3',
    title: 'The Future of AI in Business Automation',
    description: 'Discover how AI-powered tools and workflows are revolutionizing business operations and unlocking unprecedented growth opportunities.',
    tags: ['AI', 'Automation', 'Business'],
    image: '/images/blog/blog3.jpg', // Placeholder, ensure you have this image
    slug: 'ai-in-business-automation',
    date: '2025-07-01'
  },
  {
    id: '4',
    title: 'Cloud Solutions: A Guide to Secure and Scalable Infrastructure',
    description: 'A comprehensive guide to building reliable and scalable cloud infrastructure tailored to your specific business needs.',
    tags: ['Cloud', 'Infrastructure', 'Security'],
    image: '/images/blog/blog4.jpg', // Placeholder, ensure you have this image
    slug: 'cloud-solutions-guide',
    date: '2025-06-25'
  }
];

// Function to format date (optional, for better display)
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export default function BlogPage() {
  // In a real app, 'posts' would be fetched here if this were a Server Component:
  // const posts = await fetchPostsFromDatabase(); // Example fetch

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 md:py-16">
      <div className="text-center mb-10 md:mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Our Blogs</h1>
        <p className="text-muted-foreground mt-2 md:text-lg max-w-2xl mx-auto">
          Insights, tutorials, and updates from StackNova. Stay informed with our latest articles on technology and innovation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden hover:shadow-xl transition duration-300 border border-muted-foreground/10 rounded-xl">
            {/* Image container: Added flex for centering and bg for clarity when object-contain is used */}
            <div className="relative w-full h-48 bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
              <Image
                src={post.image}
                alt={post.title}
                fill // Use fill to make the image cover the parent div
                // Changed object-cover to object-contain to prevent cropping
                className="object-contain transition-transform hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Added sizes for responsive images
              />
            </div>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag, i) => (
                  // Using post.id + tag as key for uniqueness
                  <Badge key={`${post.id}-${tag}`} variant="secondary" className="text-xs px-2 py-1 rounded-full">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{post.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{post.description}</p>
              {post.date && (
                <p className="text-xs text-muted-foreground mb-3">Published: {formatDate(post.date)}</p>
              )}
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1 text-primary mt-2 font-medium hover:underline hover:gap-2 transition-all duration-200"
              >
                Read More <ArrowRight size={16} />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}