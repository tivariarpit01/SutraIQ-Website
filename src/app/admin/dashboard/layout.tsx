
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
import { useAuth } from '@/hooks/use-auth'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, loading, signOut } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

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

  const isBlogActive = pathname.startsWith('/admin/dashboard/blog');

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background">
        <Sidebar collapsible="icon">
          <SidebarContent>
            <SidebarHeader>
              <Link href="/admin/dashboard">
                <div className="flex items-center gap-2">
                  <Logo className="w-7 h-7" />
                  <span className="text-lg font-semibold font-headline">
                    StackNova
                  </span>
                </div>
              </Link>
            </SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <Link href="/admin/dashboard">
                  <SidebarMenuButton tooltip="Dashboard" isActive={pathname === '/admin/dashboard'}>
                    <Home />
                    <span>Dashboard</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link href="/admin/dashboard/blog">
                    <SidebarMenuButton tooltip="Blog Posts" isActive={isBlogActive}>
                        <Newspaper />
                        <span>Blog Posts</span>
                    </SidebarMenuButton>
                </Link>
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
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
