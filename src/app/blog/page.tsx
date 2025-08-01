// src/app/blog/page.tsx
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import api from "@/lib/axios"; 

async function fetchBlogs() {
  try {
    const res = await api.get("api/blogs");
    return res.data;
  } catch (error) {
    console.error("❌ Error fetching blogs:", error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await fetchBlogs();

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 md:py-16">
      <div className="text-center mb-10 md:mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Our Blogs
        </h1>
        <p className="text-muted-foreground mt-2 md:text-lg max-w-2xl mx-auto">
          Insights, tutorials, and updates from StackNova. Stay informed with
          our latest articles on technology and innovation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: any) => (
          <Card
            key={post._id}
            className="overflow-hidden hover:shadow-xl transition duration-300 border border-muted-foreground/10 rounded-xl"
          >
            <div className="relative w-full h-48 bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
              <Image
                src={
                  post.image
                    ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/blogs/${post.image}`
                    : "/images/fallback.jpg"
                }
                alt={post.title}
                fill
                className="object-contain transition-transform hover:scale-105"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag: string, i: number) => (
                  <Badge
                    key={`${post._id}-${tag}`}
                    variant="secondary"
                    className="text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {post.content.slice(0, 120)}...
              </p>
              {post.createdAt && (
                <p className="text-xs text-muted-foreground mb-3">
                  Published: {formatDate(post.createdAt)}
                </p>
              )}
              <Link
                href={`/blog/${post._id}`}
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
