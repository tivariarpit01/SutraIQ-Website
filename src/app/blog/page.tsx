import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

// Define the structure of a blog post
interface BlogPost {
  _id: string;
  title: string;
  content: string;
  author: string;
  image?: string; // Image is optional
  tags?: string[]; // Tags are optional
  createdAt: string; // Date of creation
  slug?: string; // Optional slug for friendly URLs
}

// Function to generate a slug from the title (simple implementation)
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/s+/g, '-') // Replace spaces with hyphens
    .replace(/[^a-z0-9-]/g, '') // Remove non-alphanumeric characters except hyphens
    .replace(/-+/g, '-'); // Replace multiple hyphens with a single hyphen
}

// Define metadata for the blog page
export const metadata: Metadata = {
  title: 'Blog - Your Company Name',
  description: 'Read our latest blog posts about technology, AI, cloud, and more.',
};

// Function to fetch blog posts from your backend API
async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    console.log("Fetching blog posts from:", `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs`);
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs`, { cache: 'no-store' });
    console.log("Fetch response status:", res.status);

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Fetch error response:", errorText);
      throw new Error(`Failed to fetch blog posts: ${res.status} ${res.statusText} - ${errorText}`);
    }

    const data = await res.json();
    console.log("Fetched data:", data);
    return data.map((post: any) => ({
      _id: post._id,
      title: post.title,
      content: post.content,
      author: post.author,
      image: post.image,
      tags: post.tags || [],
      createdAt: post.createdAt,
      slug: post.slug || generateSlug(post.title),
    }));

  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}


export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post._id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {post.image && (
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
                {/* Display a summary or excerpt of the content */}
                <p className="text-gray-600 text-sm mb-4">{post.content.substring(0, 150)}...</p>
                <div className="flex items-center text-gray-500 text-xs mb-4">
                  <span>By {post.author}</span>
                  <span className="mx-2">|</span>
                  <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="mb-4">
                  {post.tags && post.tags.map(tag => (
                    <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
                  ))}
                </div>
                <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
                  Read More
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">No blog posts found.</p>
        )}
      </div>
    </div>
  );
}
