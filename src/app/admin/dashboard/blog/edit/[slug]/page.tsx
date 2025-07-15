
'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { getPost, updatePost } from '@/lib/firestore';
import type { Post } from '@/lib/blog-data';
import { ArrowLeft } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

const formSchema = z.object({
  title: z.string().min(5, { message: 'Title must be at least 5 characters.' }),
  author: z.string().min(2, { message: 'Author name is required.' }),
  tags: z.string().min(1, { message: 'Please add at least one tag, comma-separated.'}),
  content: z.string().min(20, { message: 'Content must be at least 20 characters.' }),
});

export default function EditPostPage() {
  const router = useRouter();
  const params = useParams();
  const { slug } = params;
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      author: '',
      tags: '',
      content: '',
    },
  });

  useEffect(() => {
    if (typeof slug !== 'string') return;

    const fetchPost = async () => {
      try {
        setLoading(true);
        const post = await getPost(slug);
        if (post) {
          form.reset({
            title: post.title,
            author: post.author,
            tags: post.tags.join(', '),
            content: post.content.replace(/<[^>]+>/g, ''), // Strip HTML for textarea
          });
        } else {
          setError('Post not found.');
        }
      } catch (err) {
        setError('Failed to fetch post. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug, form]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (typeof slug !== 'string') return;
    try {
      // Create a simple slug from the title
      const newSlug = values.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

      // Prepare post data for Firestore update
      const postData: Partial<Post> = {
        title: values.title,
        slug: newSlug,
        author: values.author,
        tags: values.tags.split(',').map(tag => tag.trim()),
        content: `<p>${values.content.replace(/\n/g, '</p><p>')}</p>`, // Simple conversion
        excerpt: values.content.substring(0, 150) + '...',
      };

      await updatePost(slug, postData);
      
      toast({
        title: 'Post Updated!',
        description: 'Your changes have been saved successfully.',
      });
      router.push('/admin/dashboard/blog');
    } catch (err: any) {
        setError(err.message || "An unexpected error occurred.");
    }
  };
  
  if (loading) {
    return <div className="flex justify-center items-center h-full"><p>Loading post...</p></div>;
  }

  return (
    <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" onClick={() => router.back()}>
                <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-2xl font-bold font-headline">Edit Post</h1>
        </div>
        <Card>
            <CardHeader>
                <CardTitle>Edit Blog Post</CardTitle>
                <CardDescription>Update the details of your blog post below.</CardDescription>
            </CardHeader>
            <CardContent>
                 <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        {error && (
                            <Alert variant="destructive">
                                <AlertCircle className="h-4 w-4" />
                                <AlertTitle>Error</AlertTitle>
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}
                        <FormField control={form.control} name="title" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl><Input placeholder="Your Post Title" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="author" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Author</FormLabel>
                                <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="tags" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tags</FormLabel>
                                <FormControl><Input placeholder="AI, Web Development, Future" {...field} /></FormControl>
                                <FormDescription>Enter tags separated by commas.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )} />
                         <FormField control={form.control} name="content" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Content</FormLabel>
                                <FormControl><Textarea placeholder="Write your blog post content here..." className="min-h-[250px]" {...field} /></FormControl>
                                 <FormDescription>The content supports basic HTML for paragraphs. New lines will be converted to paragraphs.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <div className="flex justify-end gap-4">
                            <Button type="button" variant="outline" onClick={() => router.push('/admin/dashboard/blog')}>Cancel</Button>
                            <Button type="submit" disabled={form.formState.isSubmitting}>
                                {form.formState.isSubmitting ? 'Updating...' : 'Update Post'}
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    </div>
  );
}
