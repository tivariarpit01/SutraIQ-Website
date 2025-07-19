import { ContactForm } from '@/components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-28 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Get in Touch
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-6">
            We're here to help and answer any question you might have. We look forward to hearing from you.
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="bg-card p-8 rounded-lg shadow-lg border border-border/50">
              <h2 className="font-headline text-3xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
            <div className="flex flex-col justify-center">
                <h2 className="font-headline text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8 text-lg">
                    Have a question or a project in mind? Reach out to us directly through any of the channels below. Our team is ready to assist you.
                </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-muted-foreground">hello@stacknova.com</p>
                    <a href="mailto:hello@stacknova.com" className="text-primary hover:underline">Send an email</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-muted-foreground">(+91) 7678181385</p>
                    <a href="tel:+7678181385" className="text-primary hover:underline">Call us</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Office</h3>
                    <p className="text-muted-foreground">South West Delhi</p>
                    <a href="#" className="text-primary hover:underline">Get directions</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="w-full h-[400px] bg-secondary">
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <p className="text-muted-foreground">Map Placeholder</p>
          <iframe
  width="400"
  height="400"
  scrolling="no"
  style={{ margin: 0 }}
  id="gmap_canvas"
  src="https://maps.google.com/maps?width=400&height=400&hl=en&q=nangloi%20jat%20laxmi%20park&z=13&ie=UTF8&i"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

          </div>
      </section>
    </div>
  );
}
