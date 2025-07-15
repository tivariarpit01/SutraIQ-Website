import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/lib/blog-data';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export default function BlogPage() {
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-28 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Insights & Ideas
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-6">
            Explore our latest articles on technology, design, and business innovation.
          </p>
        </div>
      </section>

      {/* Featured Post Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
           <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Featured Post</h2>
            <Link href={`/blog/${featuredPost.slug}`} passHref>
                <Card className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 p-6 md:p-8 border-border/50 shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer">
                    <div className="relative w-full h-80 rounded-lg overflow-hidden">
                        <Image
                            src={featuredPost.image}
                            alt={featuredPost.title}
                            layout="fill"
                            objectFit="cover"
                            data-ai-hint={featuredPost.imageAiHint}
                            className="transform hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="mb-4">
                        {featuredPost.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="mr-2 mb-2">{tag}</Badge>
                        ))}
                        </div>
                        <h3 className="font-headline text-3xl font-bold mb-4">{featuredPost.title}</h3>
                        <p className="text-muted-foreground text-lg mb-6">{featuredPost.excerpt}</p>
                        <div className="flex items-center gap-4 text-sm">
                            <Avatar>
                                <AvatarImage src={featuredPost.authorImage} data-ai-hint={featuredPost.authorAiHint} />
                                <AvatarFallback>{featuredPost.author.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold">{featuredPost.author}</p>
                                <p className="text-muted-foreground">{featuredPost.date}</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </Link>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl mb-12">More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} passHref>
                <Card className="flex flex-col h-full bg-card p-0 border-transparent hover:border-primary transition-all duration-300 transform hover:-translate-y-2 shadow-xl hover:shadow-primary/25 overflow-hidden cursor-pointer">
                    <div className="relative w-full h-48">
                         <Image
                            src={post.image}
                            alt={post.title}
                            layout="fill"
                            objectFit="cover"
                            data-ai-hint={post.imageAiHint}
                        />
                    </div>
                  <CardHeader>
                      <div className="mb-2">
                         {post.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="mr-2 mb-2">{tag}</Badge>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold font-headline">{post.title}</h3>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                  </CardContent>
                  <div className="p-6 pt-0 flex items-center justify-between text-sm">
                     <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={post.authorImage} data-ai-hint={post.authorAiHint}/>
                            <AvatarFallback>{post.author.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <span className="text-muted-foreground">{post.author}</span>
                     </div>
                     <span className="text-muted-foreground">{post.date}</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
