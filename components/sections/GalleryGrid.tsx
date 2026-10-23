"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import Lightbox from "@/components/ui/Lightbox";

const images = Array.from({ length: 13 }, (_, i) => ({
  src: `/images/gallery/room-${i + 1}.jpeg`,
  alt: `Orchard Valley Resort room ${i + 1}`,
}));

export default function GalleryGrid({ limit }: { limit?: number }) {
  const [index, setIndex] = useState<number | null>(null);
  const shown = limit ? images.slice(0, limit) : images;

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {shown.map((img, i) => (
          <Reveal key={img.src} delay={(i % 8) * 0.05}>
            <button
              onClick={() => setIndex(i)}
              className="group relative block h-40 w-full overflow-hidden rounded-xl sm:h-48"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
            </button>
          </Reveal>
        ))}
      </div>

      <Lightbox
        images={images}
        index={index}
        onClose={() => setIndex(null)}
        onNavigate={setIndex}
      />
    </>
  );
}
