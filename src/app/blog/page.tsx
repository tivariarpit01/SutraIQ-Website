// app/blog/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { format } from "date-fns";
import BlogListClient from "./BlogListClient";


type BlogPost = {
  _id: string;
  title: string;
  content: string;
  author: string;
  image?: string;
  tags: string[];
  createdAt: string;
};

async function getBlogs(): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Failed to fetch blogs");
    return await res.json();
  } catch (error) {
    console.error("❌ Failed to fetch blogs:", error);
    return [];
  }
}

function getImageUrl(image: string | undefined): string {
  if (!image) return "/fallback.jpg";
  if (image.includes("cloudinary.com") || image.includes("res.cloudinary.com")) return image;
  if (image.startsWith("http")) return image;
  if (image.includes("/")) {
    return `https://res.cloudinary.com/dubvvkgjd/image/upload/${image}`;
  }
  return `${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/blogs/${image}`;
}

export default async function BlogPage() {
  const blogs = await getBlogs();
  if (!blogs.length) return notFound();

  return (
    <div className="container mx-auto px-4 py-16 relative">
      <h1 className="text-4xl font-bold mb-8 text-center font-headline text-white bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 py-10 rounded-xl shadow-xl">
        Latest Blogs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post._id}`}
            className="bg-card border rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col group"
          >
            {post.image && (
              <div className="w-full h-60 bg-card-foreground/5">
                <img
                  src={getImageUrl(post.image)}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-300"
                />
              </div>
            )}
            <div className="p-5 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                {post.content.replace(/<[^>]*>?/gm, "").slice(0, 150)}...
              </p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-xs text-gray-400">
                  {format(new Date(post.createdAt), "dd MMM yyyy")}
                </span>
                <span className="text-sm text-primary font-medium">Read More →
                  
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
