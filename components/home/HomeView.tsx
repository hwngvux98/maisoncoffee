import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { ProductCard } from "@/components/ProductCard";
import { WholesaleForm } from "@/components/WholesaleForm";
import { products } from "@/lib/products";
import { getDictionary, homeHref, localeHref, type Locale } from "@/lib/i18n";
import { ProductGallery } from "@/components/shop/ProductGallery";

const heroImages = [
  "/assets/coffee-hill.png",
  "/assets/Cherry_32_16.jpg",
  "/assets/cafe-nguyen-ban-minh-tien.jpg",
  "/assets/coffee-fruit.webp",
];

const heroImages2 = [
  "/assets/coffee-expo/maison-expo-1.jpg",
  "/assets/coffee-expo/maison-expo-5.jpg",
  "/assets/coffee-expo/maison-expo-8.jpg",
  "/assets/coffee-expo/maison-expo-6.jpg",
  "/assets/coffee-expo/maison-expo-2.jpeg",
  "/assets/coffee-expo/maison-expo-11.jpg",
  "/assets/coffee-expo/maison-expo-9.jpg",
  "/assets/coffee-expo/maison-expo-12.jpg",
  "/assets/coffee-expo/maison-expo-10.jpg",
];

export function HomeView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const featured = products.slice(0, 3);

  const listStoryImage = {
    slug: "whole-bean-250g",
    name: "Maison Specialty",
    variant: "Whole Bean · 250g",
    priceVnd: 200000,
    badge: "Bestseller",
    form: "whole-bean",
    image: "/assets/whole-bean-bag-image-english.png",
    imageAlt:
      "250g bag of Maison Specialty whole bean coffee from Sơn La, Vietnam",
    images: [
      {
        src: "/assets/whole-bean-on-honey.jpg",
        alt: "250g bag of Maison Specialty whole bean coffee from Sơn La, Vietnam",
      },
      {
        src: "/assets/drip-bag-on-honey.jpg",
        alt: "Terraced Arabica coffee farm in Mai Sơn, Sơn La, where Maison Specialty Whole Bean 250g is grown",
      },
      {
        src: "/assets/roaster-probat.png",
        alt: "Highland coffee ridges in Sơn La, Vietnam, the origin of Maison Specialty Whole Bean 250g",
      },
      {
        src: "/assets/roaster.gif",
        alt: "Highland coffee ridges in Sơn La, Vietnam, the origin of Maison Specialty Whole Bean 250g",
      },
      {
        src: "/assets/cafe-show-hanoi-2025.jpg",
        alt: "Highland coffee ridges in Sơn La, Vietnam, the origin of Maison Specialty Whole Bean 250g",
      },
    ],
    flavorNotes: ["Caramel", "Dark chocolate", "Black tea"],
    spec: {
      farm: "Thái, H'Mông & Kinh farmer partners",
      region: "Mai Sơn, Sơn La, Vietnam",
      altitude: "800+",
      process: "Honey processed",
      roast: "Medium-light",
    },
    brewGuides: [
      {
        title: "Pour-over",
        body: "Grind medium-fine. 15g coffee to 250ml water at 92–94°C. Bloom 30 seconds, then pour in slow circles over 3 minutes.",
      },
      {
        title: "French press",
        body: "Grind coarse. 18g coffee to 300ml water at 96°C. Steep 4 minutes, break the crust, then plunge slowly.",
      },
      {
        title: "Moka pot",
        body: "Grind fine, level the basket without tamping. Brew on low-medium heat and pull off as soon as it sputters.",
      },
      {
        title: "Storage",
        body: "Keep the bag sealed and out of direct light. Best within 4 weeks of the roast date printed on the label.",
      },
    ],
  };
  return (
    <>
      <HeroSlideshow
        images={dict.hero.slideAlts.map((alt, index) => ({
          src: heroImages[index],
          alt,
        }))}
        prevLabel={dict.hero.prevLabel}
        nextLabel={dict.hero.nextLabel}
        slideLabel={dict.hero.slideLabel}
      >
        <Container>
          <div className="max-w-2xl">
            <p className="eyebrow text-gold-300">{dict.hero.eyebrow}</p>
            <h1 className="mt-4 font-display text-display-xl text-cream-050">
              {dict.hero.heading}
            </h1>
            <p className="mt-6 max-w-xl text-body-lg text-cream-050/90">
              {dict.hero.subhead}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={localeHref(locale, "/shop")}
                className="inline-flex h-12 items-center justify-center rounded-pill bg-gold-500 px-8 text-body-md font-medium text-ink-900 transition-all duration-150 ease-brand hover:-translate-y-0.5 hover:bg-gold-600"
              >
                {dict.hero.ctaShop}
              </Link>
              <Link
                href={`${homeHref(locale)}#story`}
                className="inline-flex h-12 items-center justify-center rounded-pill border border-cream-050/60 px-8 text-body-md font-medium text-cream-050 transition-all duration-150 ease-brand hover:-translate-y-0.5 hover:bg-cream-050/10"
              >
                {dict.hero.ctaStory}
              </Link>
            </div>
          </div>
        </Container>
      </HeroSlideshow>

      <section className="bg-green-900 py-9 md:py-8">
        <Container>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {dict.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-display-md text-gold-300">
                  {stat.value}
                </p>
                <p className="mt-2 text-body-sm text-cream-050/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="story" className="py-24 md:py-32">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <Reveal>
              <div className="relative overflow-hidden rounded-lg">
                <ProductGallery
                  images={listStoryImage.images}
                  prevLabel={dict.product.prevImageLabel}
                  nextLabel={dict.product.nextImageLabel}
                  main
                />
                {/* <Image
                  src="/assets/farm-harvest.jpg"
                  alt={dict.story.imageAlt}
                  fill
                  sizes="(min-width: 768px) 45vw, 90vw"
                  className="object-cover"
                /> */}
              </div>
            </Reveal>
            <Reveal delayMs={80}>
              <p className="eyebrow text-green-700">{dict.story.eyebrow}</p>
              <h2 className="mt-4 font-display text-display-md text-ink-900">
                {dict.story.heading}
              </h2>
              <div className="mt-6 flex flex-col gap-4">
                {dict.story.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-body-lg text-ink-700">
                    {paragraph}
                  </p>
                ))}
              </div>
              <Link
                href={`${homeHref(locale)}#wholesale`}
                className="mt-8 inline-flex h-12 items-center justify-center rounded-pill bg-green-700 px-8 text-body-md font-medium text-cream-050 transition-all duration-150 ease-brand hover:-translate-y-0.5 hover:bg-green-800"
              >
                {dict.story.cta}
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="roasting" className="bg-cream-050 py-24 md:py-32">
        <Container>
          <Reveal>
            <p className="eyebrow text-green-700">{dict.roasting.eyebrow}</p>
            <h2 className="mt-4 max-w-2xl font-display text-display-md text-ink-900">
              {dict.roasting.heading}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {dict.roasting.steps.map((step, index) => (
              <Reveal key={step.number} delayMs={index * 80}>
                <p className="font-display text-display-md text-gold-500">
                  {step.number}
                </p>
                <h3 className="mt-3 font-display text-heading-md text-ink-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-body-md text-ink-700">{step.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <Reveal>
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-display text-display-md text-ink-900">
                {dict.featured.heading}
              </h2>
              <Link
                href={localeHref(locale, "/shop")}
                className="hidden text-body-md font-medium text-green-700 hover:text-green-800 sm:block"
              >
                {dict.featured.viewAll}
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product, index) => (
              <Reveal key={product.slug} delayMs={index * 80}>
                <ProductCard
                  product={product}
                  locale={locale}
                  addToCartLabel={dict.shop.addToCart}
                  vatNote={dict.shop.vatNote}
                />
              </Reveal>
            ))}
          </div>
          <Link
            href={localeHref(locale, "/shop")}
            className="mt-8 flex items-center gap-2 text-body-md font-medium text-green-700 hover:text-green-800 sm:hidden"
          >
            {dict.featured.viewAll}
          </Link>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-green-900 text-center">
        <HeroSlideshow
          images={dict.hero.slideAlts2.map((alt, index) => ({
            src: heroImages2[index],
            alt,
          }))}
          prevLabel={dict.hero.prevLabel}
          nextLabel={dict.hero.nextLabel}
          slideLabel={dict.hero.slideLabel}
        >
          <Container>
            <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center">
              <div className="relative flex flex-wrap items-center justify-center gap-4">
                <span className="eyebrow inline-block -rotate-3 rounded-pill bg-gold-500 px-5 py-2 text-ink-900">
                  {dict.provenance.ribbon1}
                </span>
                <span className="eyebrow inline-block rotate-2 rounded-pill bg-gold-500 px-5 py-2 text-ink-900">
                  {dict.provenance.ribbon2}
                </span>
              </div>
              <p className="mt-10 font-display text-display-md text-cream-050">
                {dict.provenance.line}
              </p>
            </Reveal>
          </Container>
        </HeroSlideshow>
      </section>

      <section id="wholesale" className="py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow text-green-700">{dict.wholesale.eyebrow}</p>
              <h2 className="mt-4 font-display text-display-md text-ink-900">
                {dict.wholesale.heading}
              </h2>
              <p className="mt-6 text-body-lg text-ink-700">
                {dict.wholesale.body}
              </p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {dict.wholesale.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-pill border border-line px-4 py-2 text-body-sm text-ink-700"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delayMs={80}>
              <div className="rounded-lg bg-green-900 p-8 md:p-10">
                <WholesaleForm dict={dict.wholesale} />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
