
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

interface TeamMember {
    id: string;
    name: string;
    role: string;
    avatar: string;
}

export default function AdminTeamPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<TeamMember | null>(null);
  const router = useRouter();
  const { toast } = useToast();

  const fetchItems = async () => {
    try {
        setLoading(true);
        setError(null);
        const fetchedItems = await getCollectionData('teamMembers');
        setTeamMembers(fetchedItems as TeamMember[]);
    } catch (err) {
        setError("Failed to fetch team members. Please try again.");
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
        await deleteDocument('teamMembers', itemToDelete.id);
        toast({
            title: "Team Member Deleted",
            description: `"${itemToDelete.name}" has been successfully deleted.`,
        });
        setTeamMembers(teamMembers.filter(s => s.id !== itemToDelete.id));
    } catch (err) {
        toast({
            title: "Error",
            description: "Failed to delete the team member. Please try again.",
            variant: "destructive",
        });
        console.error(err);
    } finally {
        setShowDeleteDialog(false);
        setItemToDelete(null);
    }
  };

  const confirmDelete = (member: TeamMember) => {
    setItemToDelete(member);
    setShowDeleteDialog(true);
  };

  if (loading) return <div className="flex justify-center items-center h-full"><p>Loading team members...</p></div>;
  if (error) return <div className="flex justify-center items-center h-full"><p className="text-destructive">{error}</p></div>;

  return (
    <>
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Team Members</CardTitle>
            <CardDescription>Manage your team member profiles.</CardDescription>
          </div>
          <Button size="sm" onClick={() => router.push('/admin/dashboard/team/new')}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Member
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[80px]'>Avatar</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead><span className="sr-only">Actions</span></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {teamMembers.map((member) => (
              <TableRow key={member.id}>
                 <TableCell>
                    <Avatar>
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                 </TableCell>
                <TableCell className="font-medium">{member.name}</TableCell>
                <TableCell className="hidden md:table-cell">{member.role}</TableCell>
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
                      <DropdownMenuItem onClick={() => router.push(`/admin/dashboard/team/edit/${member.id}`)}>Edit</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive" onClick={() => confirmDelete(member)}>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
         {teamMembers.length === 0 && (
            <div className="text-center p-8 text-muted-foreground">
                <p>No team members found. Add your first one to get started!</p>
            </div>
        )}
      </CardContent>
    </Card>

    <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete the team member "{itemToDelete?.name}".
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
