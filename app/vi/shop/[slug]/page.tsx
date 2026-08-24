import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductView } from "@/components/shop/ProductView";
import { getProductBySlug, products } from "@/lib/products";
import { breadcrumbJsonLd, productJsonLd } from "@/lib/json-ld";
import { formatVnd } from "@/lib/format";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  const title = `${product.name} — ${product.variant}`;
  const description = `${product.flavorNotes.join(", ")}. Chế biến ${product.spec.process.toLowerCase()}, rang ${product.spec.roast.toLowerCase()}, ${formatVnd(product.priceVnd)} — trồng ở độ cao ${product.spec.altitude} tại ${product.spec.region}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/vi/shop/${slug}`,
      languages: {
        en: `/shop/${slug}`,
        vi: `/vi/shop/${slug}`,
        "x-default": `/shop/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      images: [{ url: product.image, alt: product.imageAlt }],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd(product, "vi")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Trang chủ", path: "/vi" },
              { name: "Cửa hàng", path: "/vi/shop" },
              { name: product.name, path: `/vi/shop/${product.slug}` },
            ])
          ),
        }}
      />
      <ProductView product={product} locale="vi" />
    </>
  );
}
