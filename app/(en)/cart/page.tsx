import type { Metadata } from "next";
import { CartView } from "@/components/cart/CartView";
import { getDictionary } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Your Cart",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "/cart",
    languages: {
      en: "/cart",
      vi: "/vi/cart",
      "x-default": "/cart",
    },
  },
};

export default function Page() {
  const dict = getDictionary("en");
  return <CartView locale="en" dict={dict.cart} />;
}
