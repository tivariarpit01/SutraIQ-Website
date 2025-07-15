import { posts } from '@/lib/blog-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
            <Button asChild variant="ghost">
                <Link href="/blog">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                </Link>
            </Button>
        </div>

        <article>
          <header className="mb-12 text-center">
            <div className="mb-4">
              {post.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="mr-2 mb-2">{tag}</Badge>
              ))}
            </div>
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={post.authorImage} data-ai-hint={post.authorAiHint}/>
                  <AvatarFallback>{post.author.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <span>{post.author}</span>
              </div>
              <span>•</span>
              <span>{post.date}</span>
            </div>
          </header>

          <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg mb-12">
            <Image
              src={post.image}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              data-ai-hint={post.imageAiHint}
            />
          </div>

          <div 
            className="prose prose-lg dark:prose-invert max-w-none mx-auto"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

        </article>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
