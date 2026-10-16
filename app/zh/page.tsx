import type { Metadata } from "next";
import { HomeView } from "@/components/home/HomeView";
import { faqJsonLd } from "@/lib/json-ld";
import { getDictionary } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Maison Coffee — 产自越南山罗省的精品阿拉比卡咖啡",
  description:
    "Maison Coffee 在越南山罗省梅山种植并烘焙100%高地阿拉比卡咖啡——蜜处理加工,中浅烘焙,直接来自越南农户伙伴。整豆与挂耳咖啡,全球配送。",
  alternates: {
    canonical: "/zh",
    languages: {
      en: "/",
      vi: "/vi",
      zh: "/zh",
      "x-default": "/",
    },
  },
};

export default function Page() {
  const dict = getDictionary("zh");
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(dict.faq)) }}
      />
      <HomeView locale="zh" />
    </>
  );
}
