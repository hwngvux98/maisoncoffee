import type { Metadata } from "next";
import { ShopView } from "@/components/shop/ShopView";

export const metadata: Metadata = {
  title: "商店 — 高地阿拉比卡,适配每一种冲煮方式",
  description:
    "越南山罗省单一产区咖啡:整豆与挂耳咖啡,产地蜜处理加工并现场烘焙。",
  alternates: {
    canonical: "/zh/shop",
    languages: {
      en: "/shop",
      vi: "/vi/shop",
      zh: "/zh/shop",
      "x-default": "/shop",
    },
  },
};

export default function Page() {
  return <ShopView locale="zh" />;
}
