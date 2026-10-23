import {
  Mountain,
  Flame,
  Wifi,
  Car,
  UtensilsCrossed,
  Trees,
  Users,
  Route,
  PhoneCall,
  ShieldCheck,
  Armchair,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const amenities = [
  { icon: Trees, label: "Apple Orchard Surroundings" },
  { icon: Flame, label: "Bonfire Area" },
  { icon: UtensilsCrossed, label: "In-House Restaurant" },
  { icon: Mountain, label: "Panoramic Valley Views" },
  { icon: Car, label: "Free Parking" },
  { icon: Armchair, label: "Outdoor Seating Areas" },
  { icon: Users, label: "Family Friendly Environment" },
  { icon: Route, label: "Easy Road Access" },
  { icon: Wifi, label: "Free WiFi" },
  { icon: PhoneCall, label: "24/7 Customer Support" },
  { icon: ShieldCheck, label: "Contactless Visits" },
];

export default function Amenities() {
  return (
    <section id="amenities" className="bg-brand-cream-dark py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">
            What We Offer
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-brand-dark md:text-4xl">
            Amenities &amp; Facilities
          </h2>
          <p className="mt-4 text-brand-dark/70">
            Everything you need for a comfortable, memorable mountain stay.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {amenities.map((a, i) => (
            <Reveal key={a.label} delay={i * 0.06}>
              <div className="group flex flex-col items-center gap-3 rounded-2xl bg-white/60 px-4 py-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-brand-gold/10">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-brown/10 text-brand-brown transition-colors duration-300 group-hover:bg-brand-gold group-hover:text-white">
                  <a.icon className="h-7 w-7" />
                </div>
                <p className="text-sm font-medium text-brand-dark">{a.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
