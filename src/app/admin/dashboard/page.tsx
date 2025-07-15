
'use client'
import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarInset,
} from '@/components/ui/sidebar'
import {
  Home,
  Newspaper,
  Settings,
  Briefcase,
  MessageSquare,
  Users,
  LogOut,
} from 'lucide-react'
import { Logo } from '@/components/icons/Logo'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { useAuth } from '@/hooks/use-auth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function AdminDashboard() {
  const { user, loading, signOut } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/admin/login')
    }
  }, [user, loading, router])

  const handleSignOut = async () => {
    await signOut()
    router.push('/admin/login')
  }

  if (loading || !user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background">
        <Sidebar collapsible="icon">
          <SidebarContent>
            <SidebarHeader>
              <div className="flex items-center gap-2">
                <Logo className="w-7 h-7" />
                <span className="text-lg font-semibold font-headline">
                  StackNova
                </span>
              </div>
            </SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Dashboard" isActive>
                  <Home />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Blog Posts">
                  <Newspaper />
                  <span>Blog Posts</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Services">
                  <Briefcase />
                  <span>Services</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Testimonials">
                  <MessageSquare />
                  <span>Testimonials</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Team">
                  <Users />
                  <span>Team</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
               <SidebarMenuItem>
                <SidebarMenuButton tooltip="Sign Out" onClick={handleSignOut}>
                  <LogOut />
                  <span>Sign Out</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Settings">
                  <Settings />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset className="max-w-full">
          <header className="flex items-center justify-between p-4 border-b">
            <SidebarTrigger />
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">{user.email}</span>
              <Avatar className="h-9 w-9">
                <AvatarImage src="https://placehold.co/100x100" />
                <AvatarFallback>AU</AvatarFallback>
              </Avatar>
            </div>
          </header>
          <main className="p-6">
            <h1 className="text-3xl font-bold font-headline mb-6">
              Admin Dashboard
            </h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Welcome, Admin!</CardTitle>
                  <CardDescription>
                    Here's a quick overview of your site.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    From this dashboard, you will be able to manage your site's
                    content, including blog posts, services, testimonials, and
                    more.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Manage Blog</CardTitle>
                  <CardDescription>
                    Create, edit, and delete blog posts.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button>Go to Blog Posts</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Manage Services</CardTitle>
                  <CardDescription>
                    Update your company's service offerings.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button>Go to Services</Button>
                </CardContent>
              </Card>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
