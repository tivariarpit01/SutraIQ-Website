
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
            <Button onClick={() => router.push('/admin/dashboard/blog')}>Go to Blog Posts</Button>
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
    </div>
  )
}
