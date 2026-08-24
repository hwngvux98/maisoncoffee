import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/shop", "/cart"];
  const entries: MetadataRoute.Sitemap = [];

  for (const path of staticPaths) {
    entries.push({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${SITE_URL}${path}`,
          vi: `${SITE_URL}/vi${path}`,
        },
      },
    });
  }

  for (const product of products) {
    const path = `/shop/${product.slug}`;
    entries.push({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${SITE_URL}${path}`,
          vi: `${SITE_URL}/vi${path}`,
        },
      },
    });
  }

  return entries;
}
