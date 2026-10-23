import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  target?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  target,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5";
  const styles =
    variant === "primary"
      ? "bg-brand-brown text-brand-cream hover:bg-brand-dark shadow-lg shadow-brand-brown/20"
      : "border-2 border-brand-cream text-brand-cream hover:bg-brand-cream hover:text-brand-dark";

  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        target={target || "_blank"}
        rel="noopener noreferrer"
        className={`${base} ${styles} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
