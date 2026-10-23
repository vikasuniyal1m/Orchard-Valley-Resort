import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MessageCircle, Star, Users, Check } from "lucide-react";
import { rooms, getRoomBySlug } from "@/lib/rooms";
import { buildWhatsAppLink } from "@/lib/config";
import CinematicImage from "@/components/ui/CinematicImage";

export function generateStaticParams() {
  return rooms.map((r) => ({ slug: r.slug }));
}

export const instant = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) return {};
  return {
    title: `${room.name} | Orchard Valley Resort`,
    description: room.description[0],
  };
}

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) notFound();

  return (
    <div className="pt-20">
      <section className="relative h-[55vh] min-h-[380px] w-full overflow-hidden">
        <CinematicImage
          src={`/images/gallery/${room.images[0]}`}
          alt={room.name}
          priority
          position="absolute"
          className="inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-brand-dark/80" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-10 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-light">
            {room.tagline}
          </p>
          <h1 className="mt-2 font-serif text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            {room.name}
          </h1>
          <div className="mt-3 flex items-center gap-1.5 text-white/90">
            <Star className="h-4 w-4 fill-brand-light text-brand-light" />
            <span className="text-sm font-semibold">{room.rating} rating</span>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-3 md:px-8">
          <div className="md:col-span-2">
            <div className="space-y-4">
              {room.description.map((p, i) => (
                <p key={i} className="text-brand-dark/80">
                  {p}
                </p>
              ))}
            </div>

            <h2 className="mt-10 font-serif text-2xl font-bold text-brand-dark">
              Highlights
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {room.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2 text-sm text-brand-dark/80"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-brown" />
                  {h}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-serif text-2xl font-bold text-brand-dark">
              Amenities Included
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {room.features.map((f) => (
                <span
                  key={f}
                  className="rounded-full bg-brand-cream px-3.5 py-1.5 text-xs font-medium text-brand-dark/70"
                >
                  {f}
                </span>
              ))}
            </div>

            <h2 className="mt-10 font-serif text-2xl font-bold text-brand-dark">
              Gallery
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {room.images.map((img) => (
                <div
                  key={img}
                  className="relative h-28 overflow-hidden rounded-xl sm:h-32"
                >
                  <Image
                    src={`/images/gallery/${img}`}
                    alt={room.name}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-2xl bg-brand-cream p-6 shadow-sm md:sticky md:top-28">
            <p className="text-2xl font-bold text-brand-brown">{room.price}</p>
            {room.note && (
              <p className="mt-1 text-xs text-brand-dark/50">{room.note}</p>
            )}
            <p className="mt-3 flex items-center gap-1.5 text-sm font-medium text-brand-dark/70">
              <Users className="h-4 w-4" />
              {room.capacity}
            </p>
            <a
              href={buildWhatsAppLink(
                `Hi! I'd like to book the ${room.name} at Orchard Valley Resort.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-brown px-5 py-3 text-sm font-semibold text-brand-cream transition-colors hover:bg-brand-dark"
            >
              <MessageCircle className="h-4 w-4" />
              Book on WhatsApp
            </a>
            <Link
              href="/#rooms"
              className="mt-4 block text-center text-sm font-medium text-brand-brown underline-offset-4 hover:underline"
            >
              ← Back to all rooms
            </Link>
          </aside>
        </div>
      </section>
    </div>
  );
}
