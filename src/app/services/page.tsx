"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Twitter, Linkedin } from "lucide-react";
import api from "@/lib/axios";

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

function getImageUrl(image: string | undefined): string {
  if (!image) return "/fallback.jpg";
  if (image.includes("cloudinary.com") || image.includes("res.cloudinary.com")) return image;
  if (image.startsWith("http")) return image;
  if (image.includes("/")) {
    return `https://res.cloudinary.com/dubvvkgjd/image/upload/${image}`;
  }
  return `${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/team/${image}`;
}

export default function AboutPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await api.get("/api/team");
        const data = res.data?.data || res.data; // <-- handles both shapes
        setTeamMembers(data);
        console.log("✅ Team data:", data);
      } catch (err) {
        console.error("❌ Team fetch failed:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-28 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            The Minds Behind the Magic
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-6">
            A passionate team crafting bold technology and creative design experiences.
          </p>
        </div>
      </section>

      {/* Mission & Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-headline text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Empowering businesses with transformative digital solutions. We believe in long-term
                partnerships built on trust, innovation, and excellence.
              </p>
              <h2 className="font-headline text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                Founded in 2020, StackNova started with a small group of tech enthusiasts. Now a
                full-service digital agency, our journey is driven by curiosity and craftsmanship.
              </p>
            </div>
            <div className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/box8_image.jpg"
                alt="Team collaborating"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-secondary">
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
          ) : teamMembers.length === 0 ? (
            <p className="text-center text-muted-foreground">No team members found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <Card
                  key={member._id}
                  className="text-center bg-card p-6 hover:shadow-xl transition-all duration-300 rounded-2xl"
                >
                  <CardContent className="flex flex-col items-center">
                    <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-primary/50">
                      <img
                        src={getImageUrl(member.image)}
                        alt={member.name}
                        className="w-full h-full object-contain bg-white p-1"
                      />
                    </div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-primary font-semibold mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>

                    <div className="flex gap-2">
                      {member.socials?.linkedin && member.socials.linkedin.trim() && (
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={member.socials.linkedin} target="_blank" aria-label="LinkedIn">
                            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
                          </Link>
                        </Button>
                      )}
                      {member.socials?.twitter && member.socials.twitter.trim() && (
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={member.socials.twitter} target="_blank" aria-label="Twitter">
                            <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
