
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
import { PlusCircle, MoreHorizontal } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
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

interface Service {
    id: string;
    title: string;
    description: string;
    details: string[];
}

export default function AdminServicesPage() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<Service | null>(null);
  const router = useRouter();
  const { toast } = useToast();

  const fetchItems = async () => {
    try {
        setLoading(true);
        setError(null);
        const fetchedItems = await getCollectionData('services');
        setServices(fetchedItems as Service[]);
    } catch (err) {
        setError("Failed to fetch services. Please try again.");
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
        await deleteDocument('services', itemToDelete.id);
        toast({
            title: "Service Deleted",
            description: `"${itemToDelete.title}" has been successfully deleted.`,
        });
        setServices(services.filter(s => s.id !== itemToDelete.id));
    } catch (err) {
        toast({
            title: "Error",
            description: "Failed to delete the service. Please try again.",
            variant: "destructive",
        });
        console.error(err);
    } finally {
        setShowDeleteDialog(false);
        setItemToDelete(null);
    }
  };

  const confirmDelete = (service: Service) => {
    setItemToDelete(service);
    setShowDeleteDialog(true);
  };

  if (loading) return <div className="flex justify-center items-center h-full"><p>Loading services...</p></div>;
  if (error) return <div className="flex justify-center items-center h-full"><p className="text-destructive">{error}</p></div>;

  return (
    <>
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Services</CardTitle>
            <CardDescription>Manage your company's service offerings.</CardDescription>
          </div>
          <Button size="sm" onClick={() => router.push('/admin/dashboard/services/new')}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Service
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead><span className="sr-only">Actions</span></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {services.map((service) => (
              <TableRow key={service.id}>
                <TableCell className="font-medium">{service.title}</TableCell>
                <TableCell className="hidden md:table-cell">{service.description}</TableCell>
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
                      <DropdownMenuItem onClick={() => router.push(`/admin/dashboard/services/edit/${service.id}`)}>Edit</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive" onClick={() => confirmDelete(service)}>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
         {services.length === 0 && (
            <div className="text-center p-8 text-muted-foreground">
                <p>No services found. Add your first one to get started!</p>
            </div>
        )}
      </CardContent>
    </Card>

    <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete the service "{itemToDelete?.title}".
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
