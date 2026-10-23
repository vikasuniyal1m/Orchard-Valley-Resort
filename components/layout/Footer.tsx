import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/config";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3 md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo/logo.jpeg"
              alt={siteConfig.resortName}
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <p className="font-serif text-lg font-bold">{siteConfig.resortName}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-brand-light">
                {siteConfig.tagline}
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-brand-cream/70">
            {siteConfig.description}
          </p>
          <div className="mt-5 flex gap-4">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-brand-cream/30 p-2 transition hover:bg-brand-cream/10"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-full border border-brand-cream/30 p-2 transition hover:bg-brand-cream/10"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="font-serif text-base font-semibold text-brand-light">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2 text-sm text-brand-cream/80">
            <li><Link href="/#about" className="hover:text-white">About</Link></li>
            <li><Link href="/#rooms" className="hover:text-white">Rooms &amp; Cottages</Link></li>
            <li><Link href="/#amenities" className="hover:text-white">Amenities</Link></li>
            <li><Link href="/#gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link href="/#contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-serif text-base font-semibold text-brand-light">
            Get in Touch
          </p>
          <ul className="mt-4 space-y-3 text-sm text-brand-cream/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" />
              {siteConfig.address}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-brand-light" />
              {siteConfig.phoneDisplay}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-brand-light" />
              {siteConfig.email}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-cream/10 py-5 text-center text-xs text-brand-cream/50">
        © 2026 {siteConfig.resortName}. All rights reserved.
      </div>
    </footer>
  );
}
