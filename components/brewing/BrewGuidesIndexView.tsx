import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { BrewIconGlyph } from "@/components/brewing/BrewIcon";
import { brewMethods } from "@/lib/brewing-guides";
import { getDictionary, localeHref, type Locale } from "@/lib/i18n";

export function BrewGuidesIndexView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const bg = dict.brewingGuides;

  return (
    <>
      <section className="bg-green-900 py-20 md:py-28">
        <Container>
          <p className="eyebrow text-gold-300">{bg.sectionHeading}</p>
          <h1 className="mt-4 max-w-2xl font-display text-display-lg text-cream-050">
            {bg.heroHeading}
          </h1>
          <p className="mt-6 max-w-xl text-body-lg text-cream-050/85">{bg.heroSubhead}</p>
        </Container>
      </section>
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {brewMethods.map((method, index) => (
              <Reveal key={method.slug} delayMs={(index % 3) * 80}>
                <Link
                  href={localeHref(locale, `/brewing-guides/${method.slug}`)}
                  className="group flex h-full flex-col overflow-hidden rounded-md bg-white shadow-md transition-transform duration-150 ease-brand hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-green-700">
                    <Image
                      src={method.image}
                      alt={method.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
                      className="object-cover transition-transform duration-150 ease-brand group-hover:scale-105"
                    />
                    <span className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-900/80 text-gold-300 backdrop-blur">
                      <BrewIconGlyph icon={method.icon} size={18} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-1 p-6">
                    <h2 className="font-display text-heading-md text-green-700">
                      {method.name}
                    </h2>
                    <p className="text-body-sm text-ink-500">{method.tagline}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
