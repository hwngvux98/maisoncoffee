import type { Metadata } from "next";
import { HomeView } from "@/components/home/HomeView";
import { faqJsonLd } from "@/lib/json-ld";
import { getDictionary } from "@/lib/i18n";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      vi: "/vi",
      "x-default": "/",
    },
  },
};

export default function Page() {
  const dict = getDictionary("en");
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(dict.faq)) }}
      />
      <HomeView locale="en" />
    </>
  );
}
