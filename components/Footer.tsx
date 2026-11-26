import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { homeHref, localeHref, type Dictionary, type Locale } from "@/lib/i18n";
import { CONTACT_EMAIL, INSTAGRAM_URL } from "@/lib/site";

export function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary["footer"];
}) {
  return (
    <footer className="bg-green-900 text-cream-050">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          {/* <Image
            src="/assets/logo-maison-beige.png"
            alt="Maison Coffee"
            width={1942}
            height={1776}
            className="h-30 w-auto"
          /> */}
          <p className="font-display text-heading-lg text-cream-050">
            MAISƠN COFFEE
          </p>
          <p className="mt-3 max-w-xs text-body-sm text-cream-050/70">
            {dict.description}
          </p>
        </div>
        <div>
          <p className="eyebrow text-gold-300">{dict.shopHeading}</p>
          <ul className="mt-4 flex flex-col gap-2 text-body-sm text-cream-050/80">
            <li>
              <Link
                href={localeHref(locale, "/shop")}
                className="hover:text-cream-050"
              >
                {dict.shopAllLink}
              </Link>
            </li>
            <li>
              <Link
                href={localeHref(locale, "/cart")}
                className="hover:text-cream-050"
              >
                {dict.cartLink}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-gold-300">{dict.companyHeading}</p>
          <ul className="mt-4 flex flex-col gap-2 text-body-sm text-cream-050/80">
            <li>
              <Link
                href={`${homeHref(locale)}#story`}
                className="hover:text-cream-050"
              >
                {dict.ourStoryLink}
              </Link>
            </li>
            <li>
              <Link
                href={`${homeHref(locale)}#roasting`}
                className="hover:text-cream-050"
              >
                {dict.roastingLink}
              </Link>
            </li>
            <li>
              <Link
                href={localeHref(locale, "/brewing-guides")}
                className="hover:text-cream-050"
              >
                {dict.brewGuideLink}
              </Link>
            </li>
            <li>
              <Link
                href={`${homeHref(locale)}#wholesale`}
                className="hover:text-cream-050"
              >
                {dict.wholesaleLink}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-gold-300">{dict.contactHeading}</p>
          <ul className="mt-4 flex flex-col gap-2 text-body-sm text-cream-050/80">
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="hover:text-cream-050"
              >
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>{dict.address}</li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Maison Coffee on Instagram"
                className="hover:text-cream-050"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-line-inverse py-6">
        <Container>
          <p className="text-body-sm text-cream-050/60">{dict.copyright}</p>
        </Container>
      </div>
    </footer>
  );
}
