"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CinematicImage({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "100vw",
  position = "relative",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  position?: "relative" | "absolute";
}) {
  return (
    <div className={`${position} overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
