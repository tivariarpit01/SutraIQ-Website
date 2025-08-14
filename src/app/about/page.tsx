"use client";

import { useEffect, useState } from "react";
import { Users, Award, Globe, Heart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Twitter, Linkedin } from "lucide-react";
import api from "@/lib/axios";
import Image from "next/image";
import { motion } from "framer-motion";

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
  };
}

const values = [
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: "Collaboration",
    description: "We believe in the power of teamwork and open communication.",
  },
  {
    icon: <Award className="w-6 h-6 text-blue-600" />,
    title: "Excellence",
    description: "We strive for excellence in every project and interaction.",
  },
  {
    icon: <Globe className="w-6 h-6 text-blue-600" />,
    title: "Innovation",
    description: "We embrace new technologies and creative problem-solving.",
  },
  {
    icon: <Heart className="w-6 h-6 text-blue-600" />,
    title: "Passion",
    description: "We are passionate about technology and helping our clients succeed.",
  },
];

// FIXED getImageUrl
function getImageUrl(image?: string): string {
  if (!image) return "/fallback.jpg";

  // Full URL (Cloudinary, external API)
  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }

  // Static image from /public
  if (image.startsWith("/") && !image.startsWith("/uploads/")) {
    return image;
  }

  // Cloudinary relative path
  if (image.includes("/") && !image.startsWith("/uploads/")) {
    return `https://res.cloudinary.com/dubvvkgjd/image/upload/${image}`;
  }

  // Backend uploads
  return `${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/team/${image}`;
}

export default function AboutPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await api.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/team`);
        setTeamMembers(res.data?.data || []);
      } catch (err) {
        console.error("❌ Team fetch failed:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTeam();
  }, []);

  return (
    <div className="flex flex-col relative ">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-28 lg:py-12 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            The Minds Behind the Magic
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-6">
            A passionate team crafting bold technology and creative design experiences.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-headline text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Empowering businesses with transformative digital solutions. We believe in long-term partnerships built on trust, innovation, and excellence.
              </p>
              <h2 className="font-headline text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                Founded in 2020, StackNova started with a small group of tech enthusiasts. Now a full-service digital agency, our journey is driven by curiosity and craftsmanship.
              </p>
            </div>
            <div className=" w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl relative" >
              <Image
                src="/images/sutraiq Ai.jpg"
                alt="AI Service"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform hover:scale-105 "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

{/* Our Values */}
<section className="py-16 md:py-24 ">
  <div className="container mx-auto px-4 md:px-6">
    <div className="text-center mb-12">
      <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
        Our Values
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
        These core values guide everything we do and shape the way we work with our clients and each other.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {values.map((value, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.4 }}
          className="rounded-2xl border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.03]"
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
            {value.icon}
          </div>
          <h3 className="text-xl font-semibold">{value.title}</h3>
          <p className="text-muted-foreground text-sm mt-2">
            {value.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Team Section */}
      <section className="py-16 md:py-24 bg-secondary relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Meet Our Leadership
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
              The driving force behind StackNova’s innovation.
            </p>
          </div>

          {loading ? (
            <p className="text-center text-muted-foreground">Loading team...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => {
                const imageSrc = getImageUrl(member.image);
                return (
                  <Card
                    key={member._id}
                    className="text-center bg-card p-6 hover:shadow-xl transition-all duration-300 rounded-2xl"
                  >
                    <CardContent className="flex flex-col items-center">
                      <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-primary/50 relative">
                        <Image
                          src={imageSrc}
                          alt={member.name || "Team member"}
                          fill
                          className="object-contain bg-white p-1"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "/fallback.jpg";
                          }}
                        />
                      </div>
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-primary font-semibold mb-2">{member.role}</p>
                      <p className="text-muted-foreground text-sm mb-4">
                        {member.bio || "No bio available."}
                      </p>
                      <div className="flex gap-2">
                        {member.socials?.linkedin?.trim() && (
                          <Button variant="ghost" size="icon" asChild>
                            <Link href={member.socials.linkedin} target="_blank" aria-label="LinkedIn">
                              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
                            </Link>
                          </Button>
                        )}
                        {member.socials?.twitter?.trim() && (
                          <Button variant="ghost" size="icon" asChild>
                            <Link href={member.socials.twitter} target="_blank" aria-label="Twitter">
                              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
                            </Link>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}