import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import { getDictionary, type Locale } from "@/lib/i18n";

export function ShopView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <>
      <section className="bg-green-900 py-20 md:py-28">
        <Container>
          <p className="eyebrow text-gold-300">{dict.shop.eyebrow}</p>
          <h1 className="mt-4 max-w-2xl font-display text-display-lg text-cream-050">
            {dict.shop.heading}
          </h1>
          <p className="mt-6 max-w-xl text-body-lg text-cream-050/85">{dict.shop.subhead}</p>
        </Container>
      </section>
      <section className="py-16 md:py-24">
        <Container>
          <div
            className="grid gap-6"
            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}
          >
            {products.map((product, index) => (
              <Reveal key={product.slug} delayMs={(index % 3) * 80}>
                <ProductCard
                  product={product}
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
