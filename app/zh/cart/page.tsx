import type { Metadata } from "next";
import { CartView } from "@/components/cart/CartView";
import { getDictionary } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "购物车",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "/zh/cart",
    languages: {
      en: "/cart",
      vi: "/vi/cart",
      zh: "/zh/cart",
      "x-default": "/cart",
    },
  },
};

export default function Page() {
  const dict = getDictionary("zh");
  return <CartView locale="zh" dict={dict.cart} />;
}
