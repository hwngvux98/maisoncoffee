"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, ShoppingBag } from "lucide-react";
import { Container } from "@/components/Container";
import { MobileMenu } from "@/components/MobileMenu";
import { useCartStore, cartCount } from "@/lib/cart-store";
import { homeHref, localeHref, type Dictionary, type Locale } from "@/lib/i18n";

export function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary["nav"];
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const items = useCartStore((state) => state.items);
  const openDrawer = useCartStore((state) => state.openDrawer);
  const count = cartCount(items);

  const navLinks = [
    { label: dict.coffee, href: localeHref(locale, "/shop") },
    { label: dict.story, href: `${homeHref(locale)}#story` },
    { label: dict.roasting, href: `${homeHref(locale)}#roasting` },
    { label: dict.wholesale, href: `${homeHref(locale)}#wholesale` },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-cream-100/95 backdrop-blur">
        <Container className="flex h-20 items-center justify-between">
          <Link href={homeHref(locale)} aria-label="Maison Coffee, home">
            <Image
              src="/assets/logo-maison-green.png"
              alt="Maison Coffee"
              width={800}
              height={800}
              priority
              className="h-12 w-12"
            />
          </Link>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-body-md text-ink-700 transition-colors duration-150 ease-brand hover:text-green-700"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={localeHref(locale, "/shop")}
              className="hidden h-11 items-center justify-center rounded-pill bg-gold-500 px-6 text-body-md font-medium text-ink-900 transition-colors duration-150 ease-brand hover:bg-gold-600 sm:flex"
            >
              {dict.shop}
            </Link>
            <button
              type="button"
              onClick={openDrawer}
              aria-label={dict.cartLabel}
              className="relative flex h-11 w-11 items-center justify-center rounded-full text-ink-700 transition-colors duration-150 ease-brand hover:text-green-700"
            >
              <ShoppingBag size={20} strokeWidth={1.5} aria-hidden="true" />
              {count > 0 && (
                <span className="absolute right-0 top-0 flex h-5 min-w-5 items-center justify-center rounded-full bg-green-700 px-1 text-[11px] font-medium text-cream-050">
                  {count}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label={dict.menuLabel}
              className="flex h-11 w-11 items-center justify-center rounded-full text-ink-700 transition-colors duration-150 ease-brand hover:text-green-700 lg:hidden"
            >
              <Menu size={22} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>
        </Container>
      </header>
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        links={navLinks}
        shopLabel={dict.shop}
        closeLabel={dict.closeMenuLabel}
        locale={locale}
      />
    </>
  );
}
