
'use client'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { Newspaper, Briefcase, MessageSquare, Users } from 'lucide-react'

export default function AdminDashboard() {
    const router = useRouter()
  return (
    <div>
      <h1 className="text-3xl font-bold font-headline mb-6">
        Admin Dashboard
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Welcome, Admin!</CardTitle>
            <CardDescription>
              Manage your site's content from one place.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Use the navigation on the left to manage blog posts, services, testimonials, and team members.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex-row items-center gap-4 space-y-0'>
             <Newspaper className="w-8 h-8 text-primary" />
            <div>
                <CardTitle>Manage Blog</CardTitle>
                <CardDescription>
                  Create, edit, and delete blog posts.
                </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <Button onClick={() => router.push('/admin/dashboard/blog')}>Go to Blog Posts</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex-row items-center gap-4 space-y-0'>
             <Briefcase className="w-8 h-8 text-primary" />
            <div>
                <CardTitle>Manage Services</CardTitle>
                <CardDescription>
                  Update your company's service offerings.
                </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <Button onClick={() => router.push('/admin/dashboard/services')}>Go to Services</Button>
          </CardContent>
        </Card>
         <Card>
          <CardHeader className='flex-row items-center gap-4 space-y-0'>
             <MessageSquare className="w-8 h-8 text-primary" />
            <div>
                <CardTitle>Manage Testimonials</CardTitle>
                <CardDescription>
                  Add and update client testimonials.
                </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <Button onClick={() => router.push('/admin/dashboard/testimonials')}>Go to Testimonials</Button>
          </CardContent>
        </Card>
         <Card>
          <CardHeader className='flex-row items-center gap-4 space-y-0'>
             <Users className="w-8 h-8 text-primary" />
            <div>
                <CardTitle>Manage Team</CardTitle>
                <CardDescription>
                  Update your team member profiles.
                </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <Button onClick={() => router.push('/admin/dashboard/team')}>Go to Team</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
