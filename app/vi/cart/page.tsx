import type { Metadata } from "next";
import { CartView } from "@/components/cart/CartView";
import { getDictionary } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Giỏ Hàng",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "/vi/cart",
    languages: {
      en: "/cart",
      vi: "/vi/cart",
      "x-default": "/cart",
    },
  },
};

export default function Page() {
  const dict = getDictionary("vi");
  return <CartView locale="vi" dict={dict.cart} />;
}
