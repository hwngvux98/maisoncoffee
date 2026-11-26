import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BrewGuideDetailView } from "@/components/brewing/BrewGuideDetailView";
import { brewMethods, getBrewMethodBySlug } from "@/lib/brewing-guides";
import { breadcrumbJsonLd, howToJsonLd } from "@/lib/json-ld";

export function generateStaticParams() {
  return brewMethods.map((method) => ({ method: method.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ method: string }>;
}): Promise<Metadata> {
  const { method: slug } = await params;
  const method = getBrewMethodBySlug(slug);
  if (!method) return {};

  const title = `Cách Pha ${method.name}`;

  return {
    title,
    description: method.intro,
    alternates: {
      canonical: `/vi/brewing-guides/${slug}`,
      languages: {
        en: `/brewing-guides/${slug}`,
        vi: `/vi/brewing-guides/${slug}`,
        zh: `/zh/brewing-guides/${slug}`,
        "x-default": `/brewing-guides/${slug}`,
      },
    },
  };
}

export default async function Page({ params }: { params: Promise<{ method: string }> }) {
  const { method: slug } = await params;
  const method = getBrewMethodBySlug(slug);
  if (!method) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd(method, "vi")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Trang chủ", path: "/vi" },
              { name: "Hướng dẫn pha", path: "/vi/brewing-guides" },
              { name: method.name, path: `/vi/brewing-guides/${method.slug}` },
            ])
          ),
        }}
      />
      <BrewGuideDetailView method={method} locale="vi" />
    </>
  );
}
