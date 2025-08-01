// app/blog/[id]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Blog {
  _id: string;
  title: string;
  content: string;
  author: string;
  image: string;
  tags: string[];
  createdAt: string;
}

async function fetchBlogById(id: string): Promise<Blog> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs/${id}`, {
    next: { revalidate: 60 },
    cache: "force-cache",
  });

  if (!res.ok) return notFound();
  return res.json();
}

// Optional: Dynamic metadata (SEO-ready)
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const blog = await fetchBlogById(params.id);
  return {
    title: blog.title.replace(/\"/g, ''),
    description: blog.content.slice(0, 150),
    openGraph: {
      images: [`${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/blogs/${blog.image}`],
    },
  };
}

export default async function BlogDetailPage({ params }: { params: { id: string } }) {
  const blog = await fetchBlogById(params.id);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg mb-8 group">
          <Image
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/blogs/${blog.image}`}
            alt={blog.title}
            fill
            priority
            className="object-cover transition-transform duration-700 ease-in-out scale-100 group-hover:scale-105 group-hover:brightness-90 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        <h1 className="text-4xl font-bold mb-4">{blog.title.replace(/\"/g, '')}</h1>
        <p className="text-muted-foreground text-sm mb-6">
          By {blog.author} • {new Date(blog.createdAt).toLocaleDateString()}
        </p>

        <div className="prose prose-lg text-foreground max-w-none">
          <p>{blog.content}</p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
