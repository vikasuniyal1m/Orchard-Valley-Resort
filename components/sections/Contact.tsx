"use client";

import { useState, FormEvent } from "react";
import { MessageCircle, Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { siteConfig, buildWhatsAppLink } from "@/lib/config";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Hi! My name is ${name || "[your name]"}. ${
      message || "I'd like to know more about Orchard Valley Resort."
    }`;
    window.open(buildWhatsAppLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">
            Get in Touch
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-brand-dark md:text-4xl">
            Plan Your Stay
          </h2>
          <p className="mt-4 text-brand-dark/70">
            Reach out and we&apos;ll get back to you on WhatsApp.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <Reveal>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-brown/10 text-brand-brown">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-brand-dark">Address</p>
                  <p className="text-sm text-brand-dark/70">{siteConfig.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-brown/10 text-brand-brown">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-brand-dark">Phone</p>
                  <p className="text-sm text-brand-dark/70">{siteConfig.phoneDisplay}</p>
                  <p className="text-sm text-brand-dark/70">{siteConfig.phoneDisplaySecondary}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-brown/10 text-brand-brown">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-brand-dark">Email</p>
                  <p className="text-sm text-brand-dark/70">{siteConfig.email}</p>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl shadow-md">
                <iframe
                  src={siteConfig.mapEmbedUrl}
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Resort location map"
                />
              </div>

              <a
                href={siteConfig.googleListingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-brown underline-offset-4 hover:underline"
              >
                View overview, reviews &amp; photos on Google
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl bg-brand-cream p-7 shadow-sm md:p-8"
            >
              <div>
                <label className="mb-1 block text-sm font-medium text-brand-dark">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-brand-brown/20 bg-white px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-brown"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-brand-dark">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  placeholder="Tell us about your preferred dates, number of guests, etc."
                  className="w-full resize-none rounded-lg border border-brand-brown/20 bg-white px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-brown"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-brown px-6 py-3 text-sm font-semibold text-brand-cream transition-transform duration-300 hover:-translate-y-0.5 hover:bg-brand-dark"
              >
                <MessageCircle className="h-4 w-4" />
                Send via WhatsApp
              </button>
              <p className="text-center text-xs text-brand-dark/50">
                This opens WhatsApp with your message pre-filled — no data is
                stored on our server.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
