
'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
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
import { getDocument, updateDocument } from '@/lib/firestore';
import { ArrowLeft } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name is required.' }),
  title: z.string().min(3, { message: 'Title/Company is required.' }),
  quote: z.string().min(10, { message: 'Quote must be at least 10 characters.' }),
  avatar: z.string().url({ message: 'Please enter a valid image URL.' }),
  dataAiHint: z.string().optional(),
});

export default function EditTestimonialPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', title: '', quote: '', avatar: '' },
  });

  useEffect(() => {
    if (typeof id !== 'string') return;
    const fetchItem = async () => {
      try {
        setLoading(true);
        const item = await getDocument('testimonials', id);
        if (item) {
          form.reset(item);
        } else {
          setError('Testimonial not found.');
        }
      } catch (err) {
        setError('Failed to fetch testimonial. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchItem();
  }, [id, form]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (typeof id !== 'string') return;
    try {
      await updateDocument('testimonials', id, values);
      toast({
        title: 'Testimonial Updated!',
        description: 'Your changes have been saved successfully.',
      });
      router.push('/admin/dashboard/testimonials');
    } catch (err: any) {
        setError(err.message || "An unexpected error occurred.");
    }
  };
  
  if (loading) return <div className="flex justify-center items-center h-full"><p>Loading testimonial...</p></div>;

  return (
    <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" onClick={() => router.back()}>
                <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-2xl font-bold font-headline">Edit Testimonial</h1>
        </div>
        <Card>
            <CardHeader>
                <CardTitle>Edit Testimonial</CardTitle>
                <CardDescription>Update the details of the client testimonial.</CardDescription>
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
                         <FormField control={form.control} name="name" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Client Name</FormLabel>
                                <FormControl><Input placeholder="e.g. John Smith" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="title" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Client Title / Company</FormLabel>
                                <FormControl><Input placeholder="e.g. CEO, Example Inc." {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                         <FormField control={form.control} name="avatar" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Avatar Image URL</FormLabel>
                                <FormControl><Input placeholder="https://placehold.co/100x100" {...field} /></FormControl>
                                <FormDescription>Provide a direct URL to an image for the client's avatar.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="quote" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Quote</FormLabel>
                                <FormControl><Textarea placeholder="The client's testimonial quote..." className="min-h-[120px]" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <div className="flex justify-end gap-4">
                            <Button type="button" variant="outline" onClick={() => router.push('/admin/dashboard/testimonials')}>Cancel</Button>
                            <Button type="submit" disabled={form.formState.isSubmitting}>
                                {form.formState.isSubmitting ? 'Updating...' : 'Update Testimonial'}
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    </div>
  );
}
