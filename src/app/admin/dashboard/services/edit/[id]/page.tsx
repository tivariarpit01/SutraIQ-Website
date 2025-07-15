
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
  title: z.string().min(3, { message: 'Title must be at least 3 characters.' }),
  description: z.string().min(10, { message: 'Description must be at least 10 characters.' }),
  details: z.string().min(3, { message: 'Please add at least one detail point.'}),
});

export default function EditServicePage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      details: '',
    },
  });

  useEffect(() => {
    if (typeof id !== 'string') return;

    const fetchItem = async () => {
      try {
        setLoading(true);
        const item = await getDocument('services', id);
        if (item) {
          form.reset({
            title: item.title,
            description: item.description,
            details: item.details.join('\n'),
          });
        } else {
          setError('Service not found.');
        }
      } catch (err) {
        setError('Failed to fetch service. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id, form]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (typeof id !== 'string') return;
    try {
      const updatedService = {
        title: values.title,
        description: values.description,
        details: values.details.split('\n').map(d => d.trim()).filter(Boolean),
      };

      await updateDocument('services', id, updatedService);
      
      toast({
        title: 'Service Updated!',
        description: 'Your changes have been saved successfully.',
      });
      router.push('/admin/dashboard/services');
    } catch (err: any) {
        setError(err.message || "An unexpected error occurred.");
    }
  };
  
  if (loading) return <div className="flex justify-center items-center h-full"><p>Loading service...</p></div>;

  return (
    <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" onClick={() => router.back()}>
                <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-2xl font-bold font-headline">Edit Service</h1>
        </div>
        <Card>
            <CardHeader>
                <CardTitle>Edit Service</CardTitle>
                <CardDescription>Update the details of the service below.</CardDescription>
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
                                <FormControl><Input placeholder="e.g. Web Development" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="description" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl><Textarea placeholder="Briefly describe the service..." {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="details" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Detail Points</FormLabel>
                                <FormControl><Textarea placeholder="Enter each detail point on a new line..." className="min-h-[150px]" {...field} /></FormControl>
                                <FormDescription>Each line will be treated as a separate bullet point on the services page.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <div className="flex justify-end gap-4">
                            <Button type="button" variant="outline" onClick={() => router.push('/admin/dashboard/services')}>Cancel</Button>
                            <Button type="submit" disabled={form.formState.isSubmitting}>
                                {form.formState.isSubmitting ? 'Updating...' : 'Update Service'}
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    </div>
  );
}
