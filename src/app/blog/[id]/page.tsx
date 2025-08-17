// app/blog/[id]/page.tsx

import { Metadata } from "next";
import { format } from "date-fns";
import { notFound } from "next/navigation";

// --- TYPE DEFINITIONS ---
type BlogPost = {
  _id: string;
  title: string;
  content: string;
  author: string;
  image?: string;
  tags: string[];
  createdAt: string;
};

// This is the specific type for props in a dynamic route like [id]
type Props = {
  params: { id: string };
};

// --- HELPER FUNCTIONS ---
function getImageUrl(image: string | undefined): string {
  if (!image) return "/fallback.jpg"; // A fallback image if none is provided
  if (image.startsWith("http")) return image; // Already a full URL
  if (image.includes("/")) {
    // Assumes a Cloudinary public ID with folders
    return `https://res.cloudinary.com/dubvvkgjd/image/upload/${image}`;
  }
  // Fallback for local or direct backend paths
  return `${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/blogs/${image}`;
}

async function getBlog(id: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs/${id}`,
      {
        next: { revalidate: 60 }, // Revalidate data every 60 seconds
      }
    );
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

// --- METADATA GENERATION ---
// ✅ FIX: Changed props to use the specific `Props` type instead of `any`.
// ✅ FIX: Access `props.params.id` directly to work with Next.js 15.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = await getBlog(params.id);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "This blog post could not be found.",
    };
  }

  return {
    title: `${blog.title} | SutraIQ`,
    description: blog.content.slice(0, 155).trim() + "...",
    openGraph: {
      images: [getImageUrl(blog.image)],
    },
  };
}

// --- PAGE COMPONENT ---
// ✅ FIX: Changed props to use the specific `Props` type instead of `any`.
// ✅ FIX: Access `props.params.id` directly to work with Next.js 15.
export default async function BlogDetailPage({ params }: Props) {
  const blog = await getBlog(params.id);

  if (!blog) {
    return notFound(); // Triggers the not-found.tsx page
  }

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

      {blog.tags && blog.tags.length > 0 && (
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