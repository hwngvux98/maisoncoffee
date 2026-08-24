import type { Metadata } from "next";
import { ShopView } from "@/components/shop/ShopView";

export const metadata: Metadata = {
  title: "Cửa Hàng — Arabica Vùng Cao, Mọi Cách Pha",
  description:
    "Cà phê đơn vùng Sơn La: nguyên hạt và túi lọc drip, chế biến honey và rang tại vùng nguyên liệu cao nguyên Việt Nam.",
  alternates: {
    canonical: "/vi/shop",
    languages: {
      en: "/shop",
      vi: "/vi/shop",
      "x-default": "/shop",
    },
  },
};

export default function Page() {
  return <ShopView locale="vi" />;
}
