// app/blog/page.tsx (or move this to a client component like BlogListClient.tsx and import it here)

"use client";

import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import BlogModal from "@/components/modals/BlogModal";

type BlogPost = {
  _id: string;
  title: string;
  content: string;
  author: string;
  image?: string;
  tags: string[];
  createdAt: string;
};

function getImageUrl(image: string | undefined): string {
  if (!image) return "/fallback.jpg";
  if (image.includes("cloudinary.com") || image.includes("res.cloudinary.com"))
    return image;
  if (image.startsWith("http")) return image;
  if (image.includes("/")) {
    return `https://res.cloudinary.com/dubvvkgjd/image/upload/${image}`;
  }
  return `${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/blogs/${image}`;
}

export default function BlogListClient() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    async function fetchBlogs() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs`);
      if (res.ok) {
        const data = await res.json();
        setBlogs(data);
      }
    }
    fetchBlogs();
  }, []);

  const openModal = (blog: BlogPost) => {
    setSelectedBlog(blog);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedBlog(null);
    setModalOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-16 relative">
      <h1 className="text-4xl font-bold mb-8 text-center font-headline">
        Latest Blogs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((post) => (
          <div
            key={post._id}
            className="bg-card border rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col cursor-pointer"
          >
            {post.image && (
              <div className="w-full h-60 bg-card-foreground/5 overflow-hidden">
                <img
                  src={getImageUrl(post.image)}
                  alt={post.title}
                  className="w-full h-full object-cover"
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

                <button
                  onClick={() => openModal(post)}
                  className="text-sm text-primary hover:underline font-medium"
                >
                  Read More →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedBlog && (
        <BlogModal
          isOpen={modalOpen}
          onClose={closeModal}
          title={selectedBlog.title}
          image={getImageUrl(selectedBlog.image)}
          content={selectedBlog.content}
          createdAt={selectedBlog.createdAt}
        />
      )}
    </div>
  );
}
