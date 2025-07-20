import Link from 'next/link';
import { Logo } from '@/components/icons/Logo';
import { Twitter, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Logo className="h-8 w-8" />
              <span className="text-xl font-bold font-headline">StackNova</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Designing Tomorrow's Innovations.
            </p>
            <div className="mt-4 flex space-x-2">
                <Button variant="ghost" size="icon" asChild>
                    <Link href="#" aria-label="Twitter">
                        <Twitter className="h-5 w-5" />
                    </Link>
                </Button>
                 <Button variant="ghost" size="icon" asChild>
                    <Link href="#" aria-label="LinkedIn">
                        <Linkedin className="h-5 w-5" />
                    </Link>
                </Button>
                 <Button variant="ghost" size="icon" asChild>
                    <Link href="#" aria-label="GitHub">
                        <Github className="h-5 w-5" />
                    </Link>
                </Button>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">App Development</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">AI Solutions</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Cloud Support</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/get-started" className="text-muted-foreground hover:text-primary transition-colors">Get Started</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/carrier" className="text-muted-foreground hover:text-primary transition-colors">Carrier</Link></li>
              {/* <li><Link href="/admin/dashboard" className="text-muted-foreground hover:text-primary transition-colors">Admin Login</Link></li> */}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} StackNova. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
