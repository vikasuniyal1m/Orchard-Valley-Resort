import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Star, Users, ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Card from "@/components/ui/Card";
import { buildWhatsAppLink } from "@/lib/config";
import { rooms } from "@/lib/rooms";

export default function Rooms() {
  return (
    <section id="rooms" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">
            Stay With Us
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-brand-dark md:text-4xl">
            Rooms &amp; Cottages
          </h2>
          <p className="mt-4 text-brand-dark/70">
            Handpicked wooden cottages and mountain-view rooms, each with its
            own character and warmth.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, i) => (
            <Reveal key={room.slug} delay={i * 0.08}>
              <Card>
                <Link href={`/rooms/${room.slug}`} className="block">
                  <div className="relative h-56 w-full">
                    <Image
                      src={`/images/gallery/${room.images[0]}`}
                      alt={room.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-brand-dark shadow-sm">
                      <Star className="h-3.5 w-3.5 fill-brand-gold text-brand-gold" />
                      {room.rating}
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <Link href={`/rooms/${room.slug}`}>
                    <h3 className="font-serif text-xl font-semibold text-brand-dark hover:text-brand-brown">
                      {room.name}
                    </h3>
                  </Link>
                  <div className="mt-1 flex items-baseline gap-2">
                    <p className="text-lg font-bold text-brand-gold">
                      {room.price}
                    </p>
                    {room.note && (
                      <p className="text-xs text-brand-dark/50">{room.note}</p>
                    )}
                  </div>
                  <p className="mt-1 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-brand-dark/50">
                    <Users className="h-3.5 w-3.5" />
                    {room.capacity}
                  </p>
                  <p className="mt-3 text-sm text-brand-dark/70">
                    {room.description[0]}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {room.features.slice(0, 4).map((f) => (
                      <span
                        key={f}
                        className="rounded-full bg-brand-cream px-3 py-1 text-[11px] font-medium text-brand-dark/70"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <a
                      href={buildWhatsAppLink(
                        `Hi! I'd like to enquire about the ${room.name} at Orchard Valley Resort.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-brand-brown px-5 py-2.5 text-xs font-semibold text-brand-cream transition-colors hover:bg-brand-dark"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Enquire on WhatsApp
                    </a>
                    <Link
                      href={`/rooms/${room.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-brand-brown underline-offset-4 hover:underline"
                    >
                      View Details
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
