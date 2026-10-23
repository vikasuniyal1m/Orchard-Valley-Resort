import { Star, ExternalLink } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/config";

const testimonials = [
  {
    name: "Verified Guest",
    text: "Incredible treehouse experience with stunning valley views — a truly unique stay in the mountains.",
  },
  {
    name: "Verified Guest",
    text: "Loved the bonfire evenings and the orchard surroundings. Clean rooms and very helpful staff throughout our stay.",
  },
  {
    name: "Verified Guest",
    text: "Peaceful and beautiful — perfect for a family trip. The kids loved exploring the orchard and the mountain air.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">
            Guest Reviews
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-brand-dark md:text-4xl">
            What Our Guests Say
          </h2>
          <p className="mt-4 text-sm text-brand-dark/50">
            Rated 4.6–4.9★ by our guests — see full reviews on Google below.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="h-full rounded-2xl bg-brand-cream p-7 shadow-sm">
                <div className="flex gap-1 text-brand-gold">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-brand-gold" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-brand-dark/80">{t.text}</p>
                <p className="mt-5 text-sm font-semibold text-brand-dark">
                  {t.name}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={siteConfig.googleListingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-brown underline-offset-4 hover:underline"
          >
            See more reviews, photos &amp; overview on Google
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
