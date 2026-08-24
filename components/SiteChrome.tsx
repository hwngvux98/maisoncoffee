import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { getDictionary, type Locale } from "@/lib/i18n";

export function SiteChrome({ locale, children }: { locale: Locale; children: ReactNode }) {
  const dict = getDictionary(locale);
  return (
    <>
      <Header locale={locale} dict={dict.nav} />
      <main>{children}</main>
      <Footer locale={locale} dict={dict.footer} />
      <CartDrawer locale={locale} dict={dict.cart} />
    </>
  );
}
