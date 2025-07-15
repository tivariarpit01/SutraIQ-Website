
'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-bold font-headline">Settings</h1>
        <Card>
            <CardHeader>
                <CardTitle>Security</CardTitle>
                <CardDescription>Manage your account security settings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <h3 className="font-medium">Password</h3>
                    <p className="text-sm text-muted-foreground">For security, password changes are handled through your Firebase account.</p>
                </div>
                <div>
                    <h3 className="font-medium">Two-Factor Authentication (2FA)</h3>
                    <p className="text-sm text-muted-foreground mb-2">Add an additional layer of security to your account.</p>
                    <Button disabled>Enable 2FA (Coming Soon)</Button>
                </div>
            </CardContent>
        </Card>
         <Card>
            <CardHeader>
                <CardTitle>Site Configuration</CardTitle>
                <CardDescription>Global settings for your website.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className='text-sm text-muted-foreground'>Site configuration settings will be available here in a future update.</p>
            </CardContent>
        </Card>
    </div>
  );
}
