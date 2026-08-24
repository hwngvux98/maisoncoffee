"use client";

import Image from "next/image";
import Link from "next/link";
import { X, Minus, Plus } from "lucide-react";
import { useCartStore, cartSubtotal } from "@/lib/cart-store";
import { getProductBySlug } from "@/lib/products";
import { formatVnd } from "@/lib/format";
import { localeHref, type Dictionary, type Locale } from "@/lib/i18n";
import { useOverlay } from "@/lib/use-overlay";

export function CartDrawer({ locale, dict }: { locale: Locale; dict: Dictionary["cart"] }) {
  const isOpen = useCartStore((state) => state.isDrawerOpen);
  const items = useCartStore((state) => state.items);
  const closeDrawer = useCartStore((state) => state.closeDrawer);
  const setQuantity = useCartStore((state) => state.setQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  const panelRef = useOverlay(isOpen, closeDrawer);

  const subtotal = cartSubtotal(items);

  return (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      <div
        onClick={closeDrawer}
        className={`absolute inset-0 bg-ink-900/50 transition-opacity duration-[250ms] ease-brand ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={dict.title}
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-cream-050 shadow-lg transition-transform duration-[250ms] ease-brand ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <h2 className="font-display text-heading-md text-green-700">{dict.title}</h2>
          <button
            type="button"
            onClick={closeDrawer}
            aria-label="Close cart"
            className="flex h-11 w-11 items-center justify-center rounded-full text-ink-700 hover:text-green-700"
          >
            <X size={20} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <p className="text-body-md text-ink-500">{dict.empty}</p>
            <Link
              href={localeHref(locale, "/shop")}
              onClick={closeDrawer}
              className="inline-flex h-12 items-center justify-center rounded-pill bg-gold-500 px-8 font-sans text-body-md font-medium text-ink-900 transition-colors duration-150 ease-brand hover:bg-gold-600"
            >
              {dict.browse}
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto px-6 py-4">
              {items.map((line) => {
                const product = getProductBySlug(line.slug);
                if (!product) return null;
                return (
                  <li key={line.slug} className="flex gap-4 border-b border-line py-5 last:border-none">
                    <div className="relative h-20 w-20 shrink-0 rounded-sm bg-cream-200">
                      <Image
                        src={product.image}
                        alt={product.imageAlt}
                        fill
                        sizes="80px"
                        className="object-contain p-2"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-1">
                      <p className="font-display text-body-lg text-green-700">{product.name}</p>
                      <p className="text-body-sm text-ink-500">{product.variant}</p>
                      <div className="mt-auto flex items-center justify-between">
                        <div
                          className="inline-flex items-center rounded-pill border border-line"
                          role="group"
                          aria-label={dict.quantityLabel}
                        >
                          <button
                            type="button"
                            onClick={() => setQuantity(line.slug, line.quantity - 1)}
                            aria-label="Decrease quantity"
                            className="flex h-9 w-9 items-center justify-center text-ink-700 hover:text-green-700"
                          >
                            <Minus size={14} strokeWidth={1.5} aria-hidden="true" />
                          </button>
                          <span className="w-6 text-center text-body-sm tabular-nums">{line.quantity}</span>
                          <button
                            type="button"
                            onClick={() => setQuantity(line.slug, line.quantity + 1)}
                            aria-label="Increase quantity"
                            className="flex h-9 w-9 items-center justify-center text-ink-700 hover:text-green-700"
                          >
                            <Plus size={14} strokeWidth={1.5} aria-hidden="true" />
                          </button>
                        </div>
                        <p className="text-body-sm font-medium text-ink-900">
                          {formatVnd(product.priceVnd * line.quantity)}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(line.slug)}
                        className="self-start text-body-sm text-ink-500 underline decoration-line underline-offset-2 hover:text-green-700"
                      >
                        {dict.remove}
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="border-t border-line px-6 py-5">
              <div className="mb-1 flex items-center justify-between text-body-lg font-medium text-ink-900">
                <span>{dict.subtotal}</span>
                <span>{formatVnd(subtotal)}</span>
              </div>
              <p className="mb-4 text-body-sm text-ink-500">{dict.shippingNote}</p>
              <Link
                href={localeHref(locale, "/cart")}
                onClick={closeDrawer}
                className="flex h-12 w-full items-center justify-center rounded-pill bg-gold-500 font-sans text-body-md font-medium text-ink-900 transition-colors duration-150 ease-brand hover:bg-gold-600"
              >
                {dict.checkout}
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
