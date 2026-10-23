"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig, buildWhatsAppLink } from "@/lib/config";

const links = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Rooms", href: "/#rooms" },
  { label: "Amenities", href: "/#amenities" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-brand-cream/95 shadow-md shadow-brand-dark/10 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="/#home" className="flex items-center gap-3">
          <Image
            src="/images/logo/logo.jpeg"
            alt={siteConfig.resortName}
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
          />
          <div className="leading-tight">
            <p
              className={`font-serif text-lg font-bold ${
                scrolled ? "text-brand-dark" : "text-white"
              }`}
            >
              {siteConfig.resortName}
            </p>
            <p
              className={`text-[11px] uppercase tracking-[0.2em] ${
                scrolled ? "text-brand-mid" : "text-brand-cream/90"
              }`}
            >
              {siteConfig.tagline}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brand-light ${
                scrolled ? "text-brand-dark" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-brown px-5 py-2 text-sm font-semibold text-brand-cream transition-colors hover:bg-brand-dark"
          >
            Book Now
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden"
        >
          {open ? (
            <X className={scrolled ? "text-brand-dark" : "text-white"} />
          ) : (
            <Menu className={scrolled ? "text-brand-dark" : "text-white"} />
          )}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-brand-cream shadow-lg md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 pb-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-brand-dark transition hover:bg-brand-cream-dark"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-brand-brown px-5 py-3 text-center text-sm font-semibold text-brand-cream"
              >
                Book Now
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
