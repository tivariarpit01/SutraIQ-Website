// app/blog/[id]/page.tsx

import { Metadata } from "next";
import { format } from "date-fns";
import { notFound } from "next/navigation";

type BlogPost = {
  _id: string;
  title: string;
  content: string;
  author: string;
  image?: string;
  tags: string[];
  createdAt: string;
};

// 👇 Custom type banaya for params
interface Params {
  params: { id: string };
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

async function getBlog(id: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs/${id}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

// ✅ No PageProps, using our Params type
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const blog = await getBlog(params.id);
  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "This blog doesn't exist.",
    };
  }

  return {
    title: `${blog.title} | SutraIQ`,
    description: blog.content.slice(0, 120) + "...",
    openGraph: {
      images: [getImageUrl(blog.image)],
    },
  };
}

// ✅ Also using Params here
export default async function BlogDetailPage({ params }: Params) {
  const blog = await getBlog(params.id);
  if (!blog) return notFound();

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl relative">
      {blog.image && (
        <div className="mb-8 w-full h-[300px] rounded-lg overflow-hidden bg-muted">
          <img
            src={getImageUrl(blog.image)}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
      <div className="text-sm text-gray-500 mb-4">
        By {blog.author} • {format(new Date(blog.createdAt), "dd MMM yyyy")}
      </div>

      <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>

      {blog.tags.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {blog.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-gray-200 dark:bg-gray-700 px-3 py-1 text-sm rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
