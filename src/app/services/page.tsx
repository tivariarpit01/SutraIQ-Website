"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Service {
  _id: string;
  title: string;
  description: string;
  image?: string;
  features?: string[];
  technologies?: string[];
  cta?: {
    text: string;
    link: string;
  };
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchServices() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/services`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error("Failed to fetch services");
        const data = await res.json();
        setServices(data);
      } catch (error) {
        console.error("Error loading services:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-16">
        <p>Loading services...</p>
      </div>
    );
  }

  return (
    <div className="w-full relative">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-20 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4 font-headline">Our Services</h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          Empowering your business with tailored technology solutions.
        </p>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 space-y-24">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={service._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                isEven ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="md:w-1/2 w-full group overflow-hidden rounded-xl shadow-md">
                <Image
                  src={service.image || "/fallback.jpg"}
                  alt={service.title}
                  width={700}
                  height={500}
                  className="rounded-xl object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="md:w-1/2 w-full">
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                {/* Features */}
                {service.features && service.features.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {service.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                {service.technologies && service.technologies.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-2">Tech Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-sm px-3 py-1 rounded-full bg-secondary text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Button */}
                {service.cta && (
                  <Button asChild variant="outline">
                    <Link href={service.cta.link}>
                      {service.cta.text} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </motion.div>
          );
        })}
      </section>
    </div>
  );
}
