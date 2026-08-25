export type ProductForm = "whole-bean" | "drip";

export interface ProductSpec {
  farm: string;
  region: string;
  altitude: string;
  process: string;
  roast: string;
}

export interface BrewGuide {
  title: string;
  body: string;
}

export interface Product {
  slug: string;
  name: string;
  variant: string;
  priceVnd: number;
  badge?: string;
  form: ProductForm;
  image: string;
  imageAlt: string;
  flavorNotes: readonly [string, string, string];
  spec: ProductSpec;
  brewGuides: readonly BrewGuide[];
}

const sharedSpec: ProductSpec = {
  farm: "Thái, H'Mông & Kinh farmer partners",
  region: "Mai Sơn, Sơn La, Vietnam",
  altitude: "1,400m+",
  process: "Honey processed",
  roast: "Medium-light",
};

const flavorNotes = ["Caramel", "Dark chocolate", "Black tea"] as const;

const wholeBeanBrewGuides: readonly BrewGuide[] = [
  {
    title: "Pour-over",
    body: "Grind medium-fine. 15g coffee to 250ml water at 92–94°C. Bloom 30 seconds, then pour in slow circles over 3 minutes.",
  },
  {
    title: "French press",
    body: "Grind coarse. 18g coffee to 300ml water at 96°C. Steep 4 minutes, break the crust, then plunge slowly.",
  },
  {
    title: "Moka pot",
    body: "Grind fine, level the basket without tamping. Brew on low-medium heat and pull off as soon as it sputters.",
  },
  {
    title: "Storage",
    body: "Keep the bag sealed and out of direct light. Best within 4 weeks of the roast date printed on the label.",
  },
];

const dripBrewGuides: readonly BrewGuide[] = [
  {
    title: "How to brew",
    body: "Tear along the notch, unfold the paper wings and hook them over your cup. Pour a small amount of hot water to bloom, wait 20 seconds, then pour the rest in two or three passes.",
  },
  {
    title: "Water",
    body: "Use about 160ml of water just off the boil (92–94°C) per drip bag for a balanced cup, or less for something stronger.",
  },
  {
    title: "On the go",
    body: "Each sachet is pre-ground and sealed fresh, so it travels well — no grinder or scale needed.",
  },
];

export const products: Product[] = [
  {
    slug: "whole-bean-250g",
    name: "Maison Specialty",
    variant: "Whole Bean · 250g",
    priceVnd: 200000,
    badge: "Bestseller",
    form: "whole-bean",
    image: "/assets/whole-bean-bag-image-english.png",
    imageAlt:
      "250g bag of Maison Specialty whole bean coffee from Sơn La, Vietnam",
    flavorNotes,
    spec: sharedSpec,
    brewGuides: wholeBeanBrewGuides,
  },
  {
    slug: "drip-bags-10",
    name: "Maison Specialty",
    variant: "Drip · 10 bags × 8g",
    priceVnd: 125000,
    form: "drip",
    image: "/assets/drip-bag-box-english.png",
    imageAlt:
      "Box of 10 Maison Specialty drip coffee bags from Sơn La, Vietnam",
    flavorNotes,
    spec: sharedSpec,
    brewGuides: dripBrewGuides,
  },
  {
    slug: "whole-bean-500g",
    name: "Maison Specialty",
    variant: "Whole Bean · 500g",
    priceVnd: 365000,
    form: "whole-bean",
    image: "/assets/whole-bean-bag-image-english.png",
    imageAlt:
      "500g bag of Maison Specialty whole bean coffee from Sơn La, Vietnam",
    flavorNotes,
    spec: sharedSpec,
    brewGuides: wholeBeanBrewGuides,
  },
  {
    slug: "drip-bags-5",
    name: "Maison Specialty",
    variant: "Drip · 5 bags × 8g",
    priceVnd: 62000,
    badge: "Dùng thử",
    form: "drip",
    image: "/assets/drip-bag-box-english.png",
    imageAlt: "Box of 5 Maison Specialty drip coffee bags from Sơn La, Vietnam",
    flavorNotes,
    spec: sharedSpec,
    brewGuides: dripBrewGuides,
  },
  {
    slug: "whole-bean-1kg",
    name: "Maison Specialty",
    variant: "Whole Bean · 1 kg",
    priceVnd: 700000,
    badge: "Tiết kiệm nhất",
    form: "whole-bean",
    image: "/assets/whole-bean-bag-image-english.png",
    imageAlt:
      "1kg bag of Maison Specialty whole bean coffee from Sơn La, Vietnam",
    flavorNotes,
    spec: sharedSpec,
    brewGuides: wholeBeanBrewGuides,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getOtherProducts(slug: string, limit = 3): Product[] {
  return products.filter((p) => p.slug !== slug).slice(0, limit);
}
