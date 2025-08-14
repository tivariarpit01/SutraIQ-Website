import { notFound } from "next/navigation";
import Image from "next/image";

interface Service {
  _id: string;
  title: string;
  description: string;
  image?: string;
  tags?: null;
}

const FALLBACK_IMAGE = "/fallback.jpg";

function getImageUrl(image?: string) {
  if (!image) return FALLBACK_IMAGE;
  if (image.includes("cloudinary.com") || image.includes("res.cloudinary.com")) return image;
  if (image.startsWith("http")) return image;
  if (image.includes("/")) {
    return `https://res.cloudinary.com/dubvvkgjd/image/upload/${image}`;
  }
  return `${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/services/${image}`;
}

async function getService(id: string): Promise<Service | null> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/services/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;
  return res.json();
}

export default async function ServiceDetailPage({ params }: { params: { id: string } }) {
  const service = await getService(params.id);

  if (!service) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16 relative">
      <h1 className="text-3xl font-bold mb-6">{service.title}</h1>
      <Image
        src={getImageUrl(service.image)}
        alt={service.title}
        width={800}
        height={400}
        className="rounded-lg mb-6 object-cover"
      />
      
    </div>
  );
}
