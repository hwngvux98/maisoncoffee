import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { brewMethods } from "@/lib/brewing-guides";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/shop", "/cart", "/brewing-guides"];
  const entries: MetadataRoute.Sitemap = [];

  for (const path of staticPaths) {
    entries.push({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${SITE_URL}${path}`,
          vi: `${SITE_URL}/vi${path}`,
          zh: `${SITE_URL}/zh${path}`,
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
          zh: `${SITE_URL}/zh${path}`,
        },
      },
    });
  }

  for (const method of brewMethods) {
    const path = `/brewing-guides/${method.slug}`;
    entries.push({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${SITE_URL}${path}`,
          vi: `${SITE_URL}/vi${path}`,
          zh: `${SITE_URL}/zh${path}`,
        },
      },
    });
  }

  return entries;
}
