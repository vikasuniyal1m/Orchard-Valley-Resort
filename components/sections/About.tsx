import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import CinematicImage from "@/components/ui/CinematicImage";

export default function About() {
  return (
    <section id="about" className="bg-brand-cream py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:px-8">
        <CinematicImage
          src="/images/gallery/room-3.jpeg"
          alt="Orchard Valley Resort interior"
          className="h-[420px] w-full rounded-2xl shadow-xl shadow-brand-dark/15"
        />

        <Reveal delay={0.15}>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">
            Our Story
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-brand-dark md:text-4xl">
            A Mountain Escape Rooted in the Orchard
          </h2>
          <p className="mt-5 text-brand-dark/80">
            Tucked away in the hills, Orchard Valley Resort was built around
            a simple idea — give travelers a warm, wood-cabin retreat
            surrounded by apple orchards and mountain air. From our
            treehouse cottage to our cozy mountain-view rooms, every corner
            is designed to slow you down and bring you closer to nature.
          </p>
          <p className="mt-4 text-brand-dark/80">
            Whether it&apos;s a quiet weekend getaway, a family holiday, or a
            retreat with friends, our handcrafted wooden interiors, bonfire
            evenings, and home-style hospitality make every stay feel like
            coming home to the mountains.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="font-serif text-2xl font-bold text-brand-gold">
                <Counter to={3} />
              </p>
              <p className="text-xs text-brand-dark/60">Unique Stay Types</p>
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-brand-gold">
                <Counter to={100} suffix="%" />
              </p>
              <p className="text-xs text-brand-dark/60">Mountain Views</p>
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-brand-gold">24/7</p>
              <p className="text-xs text-brand-dark/60">Guest Care</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
