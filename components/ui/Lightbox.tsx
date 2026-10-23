"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type LightboxProps = {
  images: { src: string; alt: string }[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export default function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: LightboxProps) {
  if (index === null) return null;

  const prev = () => onNavigate((index - 1 + images.length) % images.length);
  const next = () => onNavigate((index + 1) % images.length);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
        onClick={onClose}
      >
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute right-5 top-5 text-white/80 transition hover:text-white"
        >
          <X className="h-8 w-8" />
        </button>

        <button
          aria-label="Previous"
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          className="absolute left-3 text-white/70 transition hover:text-white md:left-8"
        >
          <ChevronLeft className="h-10 w-10" />
        </button>

        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="relative h-[70vh] w-full max-w-3xl"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={images[index].src}
            alt={images[index].alt}
            fill
            className="object-contain"
            sizes="100vw"
          />
        </motion.div>

        <button
          aria-label="Next"
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          className="absolute right-3 text-white/70 transition hover:text-white md:right-8"
        >
          <ChevronRight className="h-10 w-10" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
