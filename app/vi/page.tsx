import type { Metadata } from "next";
import { HomeView } from "@/components/home/HomeView";
import { faqJsonLd } from "@/lib/json-ld";
import { getDictionary } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Maison Coffee — Cà Phê Arabica Đặc Sản Rang Tại Sơn La, Việt Nam",
  description:
    "Maison Coffee trồng và rang 100% cà phê Arabica vùng cao tại Mai Sơn, Sơn La — chế biến honey, rang medium-light, trực tiếp từ nông dân đối tác Việt Nam. Nguyên hạt và túi lọc drip, giao hàng toàn cầu.",
  alternates: {
    canonical: "/vi",
    languages: {
      en: "/",
      vi: "/vi",
      "x-default": "/",
    },
  },
};

export default function Page() {
  const dict = getDictionary("vi");
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(dict.faq)) }}
      />
      <HomeView locale="vi" />
    </>
  );
}
