'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import api from '@/lib/axios'; 
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

interface Blog {
  _id: string;
  title: string;
  content: string;
  author: string;
  image: string;
  tags: string[];
  createdAt: string;
}

export default function BlogDetailPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await api.get(`api/blogs/${id}`);
        setBlog(res.data);
      } catch (err: any) {
        console.error("Error fetching blog:", err);
        setError('Failed to load blog');
      }
    };
    if (id) fetchBlog();
  }, [id]);

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  if (error) return <div className="text-red-500">{error}</div>;
  if (!blog) return <div>Loading...</div>;

  return (
    <section className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <h1 className="text-4xl font-bold mb-6 text-foreground">{blog.title}</h1>
      <p className="text-muted-foreground text-sm mb-4">
        By {blog.author} | Published on {formatDate(blog.createdAt)}
      </p>
      <div className="relative w-full h-72 mb-6 bg-gray-100 dark:bg-gray-800">
        <Image
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/blogs/${blog.image}`}
          alt={blog.title}
          fill
          className="object-contain"
        />
      </div>
      <div className="prose dark:prose-invert max-w-none">
        <p>{blog.content}</p>
      </div>
      <div className="flex flex-wrap gap-2 mt-6">
        {blog.tags.map((tag, i) => (
          <Badge key={i} variant="secondary" className="text-xs px-2 py-1">
            #{tag}
          </Badge>
        ))}
      </div>
    </section>
  );
}
