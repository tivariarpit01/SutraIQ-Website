
'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
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
import { type Post } from '@/lib/blog-data'
import { useEffect, useState } from 'react'
import { getPosts, deletePost } from '@/lib/firestore'
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


export default function AdminBlogPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [postToDelete, setPostToDelete] = useState<Post | null>(null);
  const router = useRouter();
  const { toast } = useToast();

  const fetchPosts = async () => {
    try {
        setLoading(true);
        setError(null);
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts);
    } catch (err) {
        setError("Failed to fetch posts. Please check your connection or Firebase setup.");
        console.error(err);
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [])
  
  const handleDelete = async () => {
    if (!postToDelete) return;

    try {
        await deletePost(postToDelete.slug);
        toast({
            title: "Post Deleted",
            description: `"${postToDelete.title}" has been successfully deleted.`,
        });
        setPosts(posts.filter(p => p.id !== postToDelete.id));
    } catch (err) {
        toast({
            title: "Error",
            description: "Failed to delete the post. Please try again.",
            variant: "destructive",
        });
        console.error(err);
    } finally {
        setShowDeleteDialog(false);
        setPostToDelete(null);
    }
  };

  const confirmDelete = (post: Post) => {
    setPostToDelete(post);
    setShowDeleteDialog(true);
  };

  if (loading) {
    return (
        <div className="flex items-center justify-center h-full">
            <p>Loading posts...</p>
        </div>
    )
  }

  if (error) {
    return (
         <div className="flex items-center justify-center h-full">
            <p className="text-destructive">{error}</p>
        </div>
    )
  }


  return (
    <>
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Blog Posts</CardTitle>
            <CardDescription>
              Manage your articles and blog content.
            </CardDescription>
          </div>
          <Button size="sm" onClick={() => router.push('/admin/dashboard/blog/new')}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Post
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead className="hidden md:table-cell">Author</TableHead>
              <TableHead className="hidden md:table-cell">Tags</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id}>
                <TableCell className="font-medium">{post.title}</TableCell>
                <TableCell className="hidden md:table-cell">
                  {post.author}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <div className="flex gap-1 flex-wrap">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {post.date}
                </TableCell>
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
                      <DropdownMenuItem onClick={() => router.push(`/admin/dashboard/blog/edit/${post.slug}`)}>Edit</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive" onClick={() => confirmDelete(post)}>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
         {posts.length === 0 && (
            <div className="text-center p-8 text-muted-foreground">
                <p>No blog posts found. Add your first post to get started!</p>
            </div>
        )}
      </CardContent>
    </Card>

    <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete the post
                    "{postToDelete?.title}".
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                    onClick={handleDelete}
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                >
                    Continue
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
    </>
  )
}
