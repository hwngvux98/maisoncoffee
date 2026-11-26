import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { BrewIconGlyph } from "@/components/brewing/BrewIcon";
import type { BrewMethod } from "@/lib/brewing-guides";
import { getOtherBrewMethods } from "@/lib/brewing-guides";
import { getDictionary, homeHref, localeHref, type Locale } from "@/lib/i18n";

export function BrewGuideDetailView({
  method,
  locale,
}: {
  method: BrewMethod;
  locale: Locale;
}) {
  const dict = getDictionary(locale);
  const bg = dict.brewingGuides;
  const otherMethods = getOtherBrewMethods(method.slug, 4);

  const specRows: { label: string; value: string }[] = [
    { label: bg.specLabels.bean, value: method.spec.bean },
    { label: bg.specLabels.grind, value: method.spec.grind },
    { label: bg.specLabels.water, value: method.spec.water },
    { label: bg.specLabels.temp, value: method.spec.temp },
    { label: bg.specLabels.time, value: method.spec.time },
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
              MAISƠN COFFEE
            </Link>
            <ChevronRight size={14} strokeWidth={1.5} aria-hidden="true" />
            <Link
              href={localeHref(locale, "/brewing-guides")}
              className="hover:text-green-700"
            >
              {bg.sectionHeading}
            </Link>
            <ChevronRight size={14} strokeWidth={1.5} aria-hidden="true" />
            <span className="text-ink-700">{method.name}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="flex aspect-[4/3] items-center justify-center rounded-md bg-green-700">
              <BrewIconGlyph icon={method.icon} size={96} className="text-gold-300" />
            </div>

            <div>
              <p className="eyebrow text-ink-500">{method.tagline}</p>
              <h1 className="mt-3 font-display text-display-md text-green-700">
                {method.name}
              </h1>
              <p className="mt-4 text-body-lg text-ink-700">{method.intro}</p>

              <div className="mt-8">
                <dl className="divide-y divide-line border-y border-line">
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

              <div className="mt-8">
                <h2 className="eyebrow text-green-700">{bg.equipmentLabel}</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {method.equipment.map((item) => (
                    <li
                      key={item}
                      className="rounded-pill border border-line px-4 py-2 text-body-sm text-ink-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream-050 py-16 md:py-24">
        <Container>
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {method.steps.map((step, index) => (
              <Reveal key={step.title} delayMs={(index % 4) * 80}>
                <div className="flex h-full flex-col gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-900 text-gold-300">
                    <BrewIconGlyph icon={step.icon} size={22} />
                  </div>
                  <p className="eyebrow text-ink-500">
                    {bg.stepLabel} {index + 1}
                  </p>
                  <h3 className="font-display text-heading-md text-ink-900">
                    {step.title}
                  </h3>
                  <p className="text-body-sm text-ink-700">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <h2 className="font-display text-heading-lg text-ink-900">
              {bg.otherMethodsHeading}
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {otherMethods.map((other, index) => (
              <Reveal key={other.slug} delayMs={index * 80}>
                <Link
                  href={localeHref(locale, `/brewing-guides/${other.slug}`)}
                  className="group flex h-full flex-col overflow-hidden rounded-md bg-white shadow-md transition-transform duration-150 ease-brand hover:-translate-y-1"
                >
                  <div className="flex aspect-[4/3] items-center justify-center bg-green-700">
                    <BrewIconGlyph
                      icon={other.icon}
                      size={40}
                      className="text-gold-300 transition-transform duration-150 ease-brand group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-1 p-5">
                    <h3 className="font-display text-heading-md text-green-700">
                      {other.name}
                    </h3>
                    <p className="text-body-sm text-ink-500">{other.tagline}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Link
            href={localeHref(locale, "/brewing-guides")}
            className="mt-10 inline-flex h-12 items-center justify-center rounded-pill border border-line px-8 text-body-md font-medium text-ink-700 transition-colors duration-150 ease-brand hover:border-line-strong hover:text-green-700"
          >
            {bg.backToGuides}
          </Link>
        </Container>
      </section>
    </>
  );
}
