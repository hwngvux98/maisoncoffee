import type { Product } from "@/lib/products";
import type { FaqItem } from "@/lib/i18n";
import { CONTACT_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    email: CONTACT_EMAIL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mai Sơn",
      addressRegion: "Sơn La",
      addressCountry: "VN",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };
}

export function productJsonLd(product: Product, locale: "en" | "vi") {
  const path = locale === "en" ? `/shop/${product.slug}` : `/vi/shop/${product.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.name} — ${product.variant}`,
    description: `${product.flavorNotes.join(", ")}. ${product.spec.process}, ${product.spec.roast.toLowerCase()} roast, grown at ${product.spec.altitude} in ${product.spec.region}.`,
    image: `${SITE_URL}${product.image}`,
    sku: product.slug,
    brand: { "@type": "Brand", name: SITE_NAME },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}${path}`,
      priceCurrency: "VND",
      price: product.priceVnd,
      availability: "https://schema.org/InStock",
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqJsonLd(faq: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
