import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { homeHref, localeHref, type Dictionary, type Locale } from "@/lib/i18n";

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
                {locale === "vi" ? "Tất cả cà phê" : "All coffee"}
              </Link>
            </li>
            <li>
              <Link
                href={localeHref(locale, "/cart")}
                className="hover:text-cream-050"
              >
                {locale === "vi" ? "Giỏ hàng" : "Cart"}
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
                {locale === "vi" ? "Câu chuyện" : "Our story"}
              </Link>
            </li>
            <li>
              <Link
                href={`${homeHref(locale)}#roasting`}
                className="hover:text-cream-050"
              >
                {locale === "vi" ? "Rang xay" : "Roasting"}
              </Link>
            </li>
            <li>
              <Link
                href={`${homeHref(locale)}#wholesale`}
                className="hover:text-cream-050"
              >
                {locale === "vi" ? "Bán sỉ" : "Wholesale"}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-gold-300">{dict.contactHeading}</p>
          <ul className="mt-4 flex flex-col gap-2 text-body-sm text-cream-050/80">
            <li>
              <a
                href="mailto:hello@maisoncoffee.vn"
                className="hover:text-cream-050"
              >
                hello@maisoncoffee.vn
              </a>
            </li>
            <li>Mai Sơn, Sơn La, Vietnam</li>
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
