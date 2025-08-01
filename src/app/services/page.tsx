"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import type { Variants } from "framer-motion";
import api from "@/lib/axios"; // ✅ centralized axios

interface Service {
  _id: string;
  title: string;
  description: string;
  image: string;
}

const createCardVariants = (i: number): Variants => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
});

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await api.get("/api/services");
        setServices(data);
      } catch (err: any) {
        console.error("❌ Error fetching services:", err);
        setError("Unable to load services. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Empowering your business with cutting-edge technology solutions and
          strategic digital products.
        </p>
      </div>

      {loading ? (
        <p className="text-center text-muted-foreground">Loading services...</p>
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={service._id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={createCardVariants(i)}
            >
              <Card className="rounded-2xl overflow-hidden border hover:shadow-lg transition">
                <CardContent className="p-0">
                  <div className="relative w-full h-64">
                    <Image
                      src={
                        service.image?.startsWith("http")
                          ? service.image
                          : `${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/services/${service.image}`
                      }
                      alt={service.title || "Service Image"}
                      fill
                      sizes="100vw"
                      className="object-cover transition-transform hover:scale-105"
                      priority={i === 0}
                      onError={(e) => {
                        // @ts-ignore — only for dev use fallback img
                        e.currentTarget.src = "/fallback.jpg";
                      }}
                    />
                  </div>
                </CardContent>
                <div className="p-6">
                  <CardTitle className="text-2xl font-semibold mb-2">
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/get-started">
                      Let’s Talk <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
