import Reveal from "@/components/ui/Reveal";
import GalleryGrid from "@/components/sections/GalleryGrid";

export default function GalleryPreview() {
  return (
    <section id="gallery" className="bg-brand-cream-dark py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">
            Take a Look
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-brand-dark md:text-4xl">
            Photo Gallery
          </h2>
        </Reveal>

        <div className="mt-12">
          <GalleryGrid />
        </div>
      </div>
    </section>
  );
}
