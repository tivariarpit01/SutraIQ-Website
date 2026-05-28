"use client";

import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT SMALL IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-[280px] h-[360px] sm:w-[320px] sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/services/contact-me.png"
                alt="Contact SutraIQ"
                fill
                className="object-fit"
              />
              {/* subtle overlay */}
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative">
            <h1 className="text-4xl font-bold mb-4">
              Let’s Talk
            </h1>

            <p className="text-muted-foreground mb-8 max-w-xl">
              Have an idea, project, or collaboration in mind?  
              Share the details with us and we’ll help you turn it into a
              powerful digital solution.
            </p>

            {/* FORM */}
            <div className="bg-background border border-border/60 rounded-3xl p-8 shadow-lg">
              <ContactForm />
            </div>

            {/* CONTACT INFO */}
            <div className="mt-8 grid sm:grid-cols-2 gap-6">

              <div className="flex items-start gap-4">
  <Mail className="text-primary mt-1" />

  <div>
    <p className="text-sm text-muted-foreground">Email</p>

    <div className="flex flex-col gap-1">
      <a
        href="mailto:contact@sutraiq.com"
        className="font-medium hover:text-primary transition-colors"
      >
        contact@sutraiq.com
      </a>

      <a
        href="mailto:cmo@sutraiq.com"
        className="font-medium hover:text-primary transition-colors"
      >
        cmo@sutraiq.com
                  </a>
                </div>
              </div>
            </div>

              <div className="flex items-start gap-4">
                <Phone className="text-primary mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+91 8750709717</p>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:col-span-2">
                <MapPin className="text-primary mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">
                    India · Working with clients worldwide
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
