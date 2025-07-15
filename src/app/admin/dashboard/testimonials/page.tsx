
'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { PlusCircle, MoreHorizontal, Star } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { useEffect, useState } from 'react'
import { getCollectionData, deleteDocument } from '@/lib/firestore'
import { useRouter } from 'next/navigation'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useToast } from '@/hooks/use-toast'

interface Testimonial {
    id: string;
    name: string;
    title: string;
    quote: string;
    avatar: string;
}

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<Testimonial | null>(null);
  const router = useRouter();
  const { toast } = useToast();

  const fetchItems = async () => {
    try {
        setLoading(true);
        setError(null);
        const fetchedItems = await getCollectionData('testimonials');
        setTestimonials(fetchedItems as Testimonial[]);
    } catch (err) {
        setError("Failed to fetch testimonials. Please try again.");
        console.error(err);
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [])
  
  const handleDelete = async () => {
    if (!itemToDelete) return;

    try {
        await deleteDocument('testimonials', itemToDelete.id);
        toast({
            title: "Testimonial Deleted",
            description: `Testimonial from "${itemToDelete.name}" has been successfully deleted.`,
        });
        setTestimonials(testimonials.filter(s => s.id !== itemToDelete.id));
    } catch (err) {
        toast({
            title: "Error",
            description: "Failed to delete the testimonial. Please try again.",
            variant: "destructive",
        });
        console.error(err);
    } finally {
        setShowDeleteDialog(false);
        setItemToDelete(null);
    }
  };

  const confirmDelete = (testimonial: Testimonial) => {
    setItemToDelete(testimonial);
    setShowDeleteDialog(true);
  };

  if (loading) return <div className="flex justify-center items-center h-full"><p>Loading testimonials...</p></div>;
  if (error) return <div className="flex justify-center items-center h-full"><p className="text-destructive">{error}</p></div>;

  return (
    <>
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Testimonials</CardTitle>
            <CardDescription>Manage your client testimonials.</CardDescription>
          </div>
          <Button size="sm" onClick={() => router.push('/admin/dashboard/testimonials/new')}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Testimonial
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[80px]'>Avatar</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Quote</TableHead>
              <TableHead><span className="sr-only">Actions</span></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {testimonials.map((item) => (
              <TableRow key={item.id}>
                 <TableCell>
                    <Avatar>
                        <AvatarImage src={item.avatar} alt={item.name} />
                        <AvatarFallback>{item.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                 </TableCell>
                <TableCell className="font-medium">{item.name}<br/><span className='text-xs text-muted-foreground'>{item.title}</span></TableCell>
                <TableCell className="hidden md:table-cell italic">"{item.quote.substring(0, 80)}..."</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem onClick={() => router.push(`/admin/dashboard/testimonials/edit/${item.id}`)}>Edit</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive" onClick={() => confirmDelete(item)}>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
         {testimonials.length === 0 && (
            <div className="text-center p-8 text-muted-foreground">
                <p>No testimonials found. Add your first one to get started!</p>
            </div>
        )}
      </CardContent>
    </Card>

    <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete the testimonial from "{itemToDelete?.name}".
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDelete} className="bg-destructive hover:bg-destructive/90">
                    Continue
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
    </>
  )
}
