"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useOverlay } from "@/lib/use-overlay";
import { localeHref, type Locale } from "@/lib/i18n";

export function MobileMenu({
  isOpen,
  onClose,
  links,
  shopLabel,
  closeLabel,
  locale,
}: {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
  shopLabel: string;
  closeLabel: string;
  locale: Locale;
}) {
  const panelRef = useOverlay(isOpen, onClose);

  return (
    <div className={`fixed inset-0 z-50 lg:hidden ${isOpen ? "" : "pointer-events-none"}`} aria-hidden={!isOpen}>
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`absolute inset-0 flex flex-col bg-green-900 text-cream-050 transition-opacity duration-200 ease-brand ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-20 items-center justify-between px-6">
          <span className="font-display text-heading-md text-cream-050">maison coffee</span>
          <button
            type="button"
            onClick={onClose}
            aria-label={closeLabel}
            className="flex h-11 w-11 items-center justify-center rounded-full text-cream-050"
          >
            <X size={22} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
        <nav className="flex flex-1 flex-col justify-center gap-6 px-6" aria-label="Mobile">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="font-display text-display-md text-cream-050"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={localeHref(locale, "/shop")}
            onClick={onClose}
            className="mt-6 inline-flex h-14 w-fit items-center justify-center rounded-pill bg-gold-500 px-8 text-body-lg font-medium text-ink-900"
          >
            {shopLabel}
          </Link>
        </nav>
      </div>
    </div>
  );
}
