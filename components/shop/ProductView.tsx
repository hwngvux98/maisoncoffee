import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { BrewingAccordion } from "@/components/shop/BrewingAccordion";
import { ProductDetailActions } from "@/components/shop/ProductDetailActions";
import { ProductGallery } from "@/components/shop/ProductGallery";
import { formatVnd } from "@/lib/format";
import { getOtherProducts, type Product } from "@/lib/products";
import { getDictionary, homeHref, localeHref, type Locale } from "@/lib/i18n";

export function ProductView({
  product,
  locale,
}: {
  product: Product;
  locale: Locale;
}) {
  const dict = getDictionary(locale);
  const crossSell = getOtherProducts(product.slug, 3);

  const specRows: { label: string; value: string }[] = [
    { label: dict.product.farmLabel, value: product.spec.farm },
    { label: dict.product.regionLabel, value: product.spec.region },
    { label: dict.product.altitudeLabel, value: product.spec.altitude },
    { label: dict.product.processLabel, value: product.spec.process },
    { label: dict.product.roastLabel, value: product.spec.roast },
    { label: dict.product.flavorLabel, value: product.flavorNotes.join(" · ") },
  ];

  return (
    <>
      <section className="py-10 md:py-14">
        <Container>
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-body-sm text-ink-500"
          >
            <Link href={homeHref(locale)} className="hover:text-green-700">
              maison coffee
            </Link>
            <ChevronRight size={14} strokeWidth={1.5} aria-hidden="true" />
            <Link
              href={localeHref(locale, "/shop")}
              className="hover:text-green-700"
            >
              {dict.product.breadcrumbShop}
            </Link>
            <ChevronRight size={14} strokeWidth={1.5} aria-hidden="true" />
            <span className="text-ink-700">{product.name}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-2">
            <ProductGallery
              images={product.images}
              badge={product.badge}
              prevLabel={dict.product.prevImageLabel}
              nextLabel={dict.product.nextImageLabel}
            />

            <div>
              <p className="eyebrow text-ink-500">{product.variant}</p>
              <h1 className="mt-3 font-display text-display-md text-green-700">
                {product.name}
              </h1>
              <p className="mt-3 text-body-lg text-ink-700">
                {product.flavorNotes.join(" · ")}
              </p>

              <div className="mt-6">
                <p className="text-heading-md font-medium text-ink-900">
                  {formatVnd(product.priceVnd)}
                </p>
                <p className="text-body-sm text-ink-500">
                  {dict.product.vatNote}
                </p>
              </div>

              <div className="mt-8">
                <ProductDetailActions
                  slug={product.slug}
                  quantityLabel={dict.product.quantityLabel}
                  addToCartLabel={dict.product.addToCart}
                />
              </div>

              <div className="mt-10">
                <h2 className="eyebrow text-green-700">
                  {dict.product.specTitle}
                </h2>
                <dl className="mt-4 divide-y divide-line border-y border-line">
                  {specRows.map((row) => (
                    <div
                      key={row.label}
                      className="flex justify-between gap-4 py-3"
                    >
                      <dt className="text-body-sm text-ink-500">{row.label}</dt>
                      <dd className="text-body-sm font-medium text-ink-900">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-10">
                <h2 className="eyebrow text-green-700">
                  {dict.product.brewingTitle}
                </h2>
                <div className="mt-4">
                  <BrewingAccordion guides={product.brewGuides} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream-050 py-16 md:py-24">
        <Container>
          <Reveal>
            <h2 className="font-display text-heading-lg text-ink-900">
              {dict.product.crossSellTitle}
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {crossSell.map((item, index) => (
              <Reveal key={item.slug} delayMs={index * 80}>
                <ProductCard
                  product={item}
                  locale={locale}
                  addToCartLabel={dict.shop.addToCart}
                  vatNote={dict.shop.vatNote}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
