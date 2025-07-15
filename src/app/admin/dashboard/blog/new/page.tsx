
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
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
import { addPost } from '@/lib/firestore';
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

export default function NewPostPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      author: 'Admin', // Default author
      tags: '',
      content: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setError(null);
      // Create a simple slug from the title
      const slug = values.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

      // Prepare post data for Firestore
      const newPost: Omit<Post, 'id'> = {
        slug,
        title: values.title,
        author: values.author,
        tags: values.tags.split(',').map(tag => tag.trim()),
        content: `<p>${values.content.replace(/\n/g, '</p><p>')}</p>`, // Simple conversion
        excerpt: values.content.substring(0, 150) + '...',
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        // Default placeholder images
        image: 'https://placehold.co/1200x600',
        imageAiHint: 'blog technology',
        authorImage: 'https://placehold.co/100x100',
        authorAiHint: 'portrait professional',
      };

      await addPost(newPost);
      
      toast({
        title: 'Post Created!',
        description: 'Your new blog post has been published.',
      });
      router.push('/admin/dashboard/blog');
    } catch (err: any) {
        if(err.message.includes('already exists')) {
             setError('A post with this title already exists. Please choose a different title.');
        } else {
            setError(err.message || "An unexpected error occurred.");
        }
    }
  };
  
  return (
    <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" onClick={() => router.back()}>
                <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-2xl font-bold font-headline">Add New Post</h1>
        </div>
        <Card>
            <CardHeader>
                <CardTitle>Create New Blog Post</CardTitle>
                <CardDescription>Fill out the form below to publish a new article.</CardDescription>
            </CardHeader>
            <CardContent>
                 <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        {error && (
                            <Alert variant="destructive">
                                <AlertCircle className="h-4 w-4" />
                                <AlertTitle>Error Creating Post</AlertTitle>
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
                                {form.formState.isSubmitting ? 'Publishing...' : 'Publish Post'}
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    </div>
  );
}
