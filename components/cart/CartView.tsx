"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { Container } from "@/components/Container";
import { QuantityStepper } from "@/components/QuantityStepper";
import { useCartStore, cartSubtotal } from "@/lib/cart-store";
import { getProductBySlug } from "@/lib/products";
import { formatVnd } from "@/lib/format";
import { localeHref, type Dictionary, type Locale } from "@/lib/i18n";

export function CartView({ locale, dict }: { locale: Locale; dict: Dictionary["cart"] }) {
  const items = useCartStore((state) => state.items);
  const setQuantity = useCartStore((state) => state.setQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const subtotal = cartSubtotal(items);
  const [checkoutNotice, setCheckoutNotice] = useState(false);

  if (items.length === 0) {
    return (
      <section className="py-24 md:py-32">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h1 className="font-display text-display-md text-ink-900">{dict.title}</h1>
          <p className="text-body-lg text-ink-500">{dict.empty}</p>
          <Link
            href={localeHref(locale, "/shop")}
            className="inline-flex h-12 items-center justify-center rounded-pill bg-gold-500 px-8 text-body-md font-medium text-ink-900 transition-colors duration-150 ease-brand hover:bg-gold-600"
          >
            {dict.browse}
          </Link>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <Container>
        <h1 className="font-display text-display-md text-ink-900">{dict.title}</h1>
        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_360px]">
          <ul className="divide-y divide-line border-y border-line">
            {items.map((line) => {
              const product = getProductBySlug(line.slug);
              if (!product) return null;
              return (
                <li key={line.slug} className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center">
                  <div className="relative h-24 w-24 shrink-0 rounded-md bg-cream-200">
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      fill
                      sizes="96px"
                      className="object-contain p-3"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-display text-heading-md text-green-700">{product.name}</p>
                    <p className="text-body-sm text-ink-500">{product.variant}</p>
                  </div>
                  <QuantityStepper
                    quantity={line.quantity}
                    onChange={(next) => setQuantity(line.slug, next)}
                    label={dict.quantityLabel}
                  />
                  <p className="w-28 text-right text-body-md font-medium text-ink-900">
                    {formatVnd(product.priceVnd * line.quantity)}
                  </p>
                  <button
                    type="button"
                    onClick={() => removeItem(line.slug)}
                    aria-label={dict.remove}
                    className="flex h-11 w-11 items-center justify-center rounded-full text-ink-500 hover:text-green-700"
                  >
                    <Trash2 size={18} strokeWidth={1.5} aria-hidden="true" />
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="h-fit rounded-md bg-cream-050 p-6 shadow-sm">
            <div className="flex items-center justify-between text-body-lg font-medium text-ink-900">
              <span>{dict.subtotal}</span>
              <span>{formatVnd(subtotal)}</span>
            </div>
            <p className="mt-2 text-body-sm text-ink-500">{dict.shippingNote}</p>
            <button
              type="button"
              onClick={() => setCheckoutNotice(true)}
              className="mt-6 flex h-12 w-full items-center justify-center rounded-pill bg-gold-500 text-body-md font-medium text-ink-900 transition-colors duration-150 ease-brand hover:bg-gold-600"
            >
              {dict.checkout}
            </button>
            {checkoutNotice && (
              <p className="mt-3 text-body-sm text-ink-500" role="status">
                {locale === "vi"
                  ? "Thanh toán trực tuyến sắp ra mắt — vui lòng email hello@maisoncoffee.vn để đặt hàng."
                  : "Online checkout is coming soon — email hello@maisoncoffee.vn to place this order."}
              </p>
            )}
            <Link
              href={localeHref(locale, "/shop")}
              className="mt-4 block text-center text-body-sm text-ink-500 underline decoration-line underline-offset-2 hover:text-green-700"
            >
              {dict.continueShopping}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
