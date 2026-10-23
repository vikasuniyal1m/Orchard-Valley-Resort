import { Search, MessageCircle, Luggage } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { buildWhatsAppLink } from "@/lib/config";

const steps = [
  {
    icon: Search,
    title: "Browse Rooms",
    desc: "Explore our treehouses, orchard house, and valley view cottages — pick what fits your group.",
  },
  {
    icon: MessageCircle,
    title: "Message on WhatsApp",
    desc: "Tap enquire and chat with us directly — check availability, dates, and pricing in minutes.",
  },
  {
    icon: Luggage,
    title: "Confirm & Pack Your Bags",
    desc: "We confirm your stay and you're all set for a mountain escape in the orchards.",
  },
];

export default function Process() {
  return (
    <section className="bg-brand-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">
            How It Works
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-brand-dark md:text-4xl">
            Plan Your Stay in 3 Steps
          </h2>
        </Reveal>

        <div className="relative mt-16 grid gap-10 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-brand-brown/20 md:block" />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12} className="relative text-center">
              <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-brown text-brand-cream shadow-lg">
                <s.icon className="h-7 w-7" />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                Step {i + 1}
              </p>
              <h3 className="mt-2 font-serif text-xl font-semibold text-brand-dark">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-brand-dark/70">{s.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-14 text-center">
          <a
            href={buildWhatsAppLink("Hi! I'd like to plan a stay at Orchard Valley Resort.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-brown px-7 py-3 text-sm font-semibold text-brand-cream transition-colors hover:bg-brand-dark"
          >
            Start on WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
