import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";

const stats = [
  { to: 3000, prefix: "₹", label: "Starting Price / Night" },
  { to: 10, suffix: "+", label: "Max Guests per Stay" },
  { to: 49, suffix: "/10", label: "Avg. Guest Rating ×10" },
  { to: 24, suffix: "/7", label: "Guest Support" },
];

export default function StatsStrip() {
  return (
    <section className="relative bg-brand-dark py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 md:grid-cols-4 md:px-8">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center">
            <p className="font-serif text-3xl font-extrabold text-brand-gold-light md:text-4xl">
              {s.prefix}
              <Counter to={s.to} />
              {s.suffix}
            </p>
            <p className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-brand-cream/60">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
