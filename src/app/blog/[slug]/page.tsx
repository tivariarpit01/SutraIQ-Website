// src/app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import Image from "next/image";
import { notFound } from 'next/navigation';

// Define a type for your blog post data based on your backend model
interface BlogPost {
  _id: string;
  title: string;
  content: string;
  author?: string;
  image?: string; // image filename or URL
  tags: string[];
  createdAt: string; // Assuming a string format for date
  slug?: string; // Add slug here as well
}

// Function to generate a slug (should match the one in blog/page.tsx)
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9s-]/g, "") // Remove non-alphanumeric characters except spaces and hyphens
    .replace(/s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with a single hyphen
    .trim(); // Trim leading/trailing whitespace and hyphens
};

// Function to format date (optional, for better display)
const formatDate = (dateString: string) => {
  try {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  } catch (error) {
    console.error("Error formatting date:", error);
    return dateString; // Return original string if formatting fails
  }
};

// Fetch all blog posts to find the one matching the slug
// This is a workaround since your backend only supports fetching by ID.
// A more efficient approach would be to add a backend endpoint to fetch by slug.
async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog`, { cache: 'no-store' }); // Disable caching for development

    if (!res.ok) {
      console.error(`Failed to fetch blog posts for slug ${slug}: ${res.status} ${res.statusText}`);
      return null;
    }

    const data: BlogPost[] = await res.json();

    // Find the post with the matching slug
    const post = data.find(p => (p.slug || generateSlug(p.title)) === slug);
    
    return post || null; // Return the found post or null if not found

  } catch (error) {
    console.error(`Error fetching blog post by slug ${slug}:`, error);
    return null; // Return null on error
  }
}

// Define generateMetadata to set dynamic metadata for each blog post
export async function generateMetadata(
  { params }: { params: { slug: string } },
): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return {}; // Return empty metadata if post not found
  }

  return {
    title: post.title + " - StackNova Blog",
    description: post.content.substring(0, 160), // Use start of content as description
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 160),
      url: `https://yourwebsite.com/blog/${post.slug}`, // Replace with your actual domain
      type: "article",
      publishedTime: post.createdAt,
      authors: post.author ? [post.author] : [],
      images: post.image ? [
        {
          url: post.image, // Assuming image is a URL
          // width: 800, // Optional: Specify image width
          // height: 600, // Optional: Specify image height
          alt: post.title,
        },
      ] : [],
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    // If the post is not found, render the notFound page
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto py-10 md:py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        {post.title}
      </h1>
      <p className="text-muted-foreground text-sm mb-4">
        Published on {formatDate(post.createdAt)} {post.author && `by ${post.author}`}
      </p>

      {post.image && (
        <div className="relative w-full h-64 md:h-80 lg:h-96 mb-8 rounded-lg overflow-hidden">
           <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="prose dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
        {/* Render blog content - assuming it's plain text or markdown that can be rendered directly */}
        {/* If your content is markdown, you might need a library like remark-html or similar */}
        <p>{post.content}</p>
      </div>

      {post.tags && post.tags.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-2">
          {post.tags.map((tag, index) => (
            <span key={index} className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
