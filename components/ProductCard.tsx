import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import type { Locale } from "@/lib/i18n";
import { formatVnd } from "@/lib/format";
import { localeHref } from "@/lib/i18n";
import { AddToCartButton } from "@/components/AddToCartButton";

export function ProductCard({
  product,
  locale,
  addToCartLabel,
  vatNote,
}: {
  product: Product;
  locale: Locale;
  addToCartLabel: string;
  vatNote: string;
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-md bg-white shadow-md">
      <Link
        href={localeHref(locale, `/shop/${product.slug}`)}
        className="relative block aspect-square bg-cream-200"
      >
        {product.badge && (
          <span className="eyebrow absolute left-4 top-4 z-10 rounded-pill bg-gold-500 px-3 py-1 text-ink-900">
            {product.badge}
          </span>
        )}
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw"
          className="object-contain p-8"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <p className="eyebrow text-ink-500">{product.variant}</p>
        <Link href={localeHref(locale, `/shop/${product.slug}`)}>
          <h3 className="font-display text-heading-md text-green-700">{product.name}</h3>
        </Link>
        <p className="text-body-sm text-ink-500">{product.flavorNotes.join(" · ")}</p>
        <div className="mt-auto flex items-end justify-between pt-4">
          <div>
            <p className="text-body-lg font-medium text-ink-900">{formatVnd(product.priceVnd)}</p>
            <p className="text-body-sm text-ink-500">{vatNote}</p>
          </div>
          <AddToCartButton slug={product.slug} compact label={addToCartLabel} />
        </div>
      </div>
    </div>
  );
}
