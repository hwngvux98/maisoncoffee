import type { Metadata } from "next";
import { ShopView } from "@/components/shop/ShopView";

export const metadata: Metadata = {
  title: "Shop — Highland Arabica, Every Way You Brew",
  description:
    "Single-origin Sơn La Arabica: whole bean bags and drip coffee bags, honey-processed and roasted at origin in Vietnam's highlands.",
  alternates: {
    canonical: "/shop",
    languages: {
      en: "/shop",
      vi: "/vi/shop",
      "x-default": "/shop",
    },
  },
};

export default function Page() {
  return <ShopView locale="en" />;
}
