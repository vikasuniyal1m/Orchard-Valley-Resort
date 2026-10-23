"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex h-screen min-h-[600px] w-full items-center justify-center overflow-hidden"
    >
      <motion.div
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        animate={{ clipPath: "inset(0 0 0% 0)" }}
        transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
        style={{ y, scale }}
        className="absolute inset-0"
      >
        <motion.div
          initial={{ scale: 1.25 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="/images/gallery/room-11.jpeg"
            alt="Orchard Valley Resort cottage"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-brand-dark/80" />

      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 text-center text-white"
      >
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-gold-light/40 bg-black/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold-light backdrop-blur-sm"
        >
          ★ Rated 4.6–4.9 by Guests
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-5xl font-extrabold leading-[1.05] tracking-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)] sm:text-7xl md:text-8xl"
        >
          {siteConfig.resortName}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-5 font-serif text-xl italic tracking-wide text-brand-gold-light md:text-2xl"
        >
          {siteConfig.tagline}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-5 max-w-xl text-sm text-brand-cream/80 md:text-base"
        >
          Wooden cottages, treehouse stays and orchard views tucked away in
          the hills — your perfect escape from the everyday.
        </motion.p>
      </motion.div>

      <svg
        className="absolute bottom-0 left-0 z-10 w-full text-brand-dark"
        viewBox="0 0 1440 80"
        fill="currentColor"
        preserveAspectRatio="none"
      >
        <path d="M0,40 C240,90 480,0 720,30 C960,60 1200,10 1440,40 L1440,80 L0,80 Z" />
      </svg>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/80"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}
