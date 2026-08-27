import type { Metadata } from "next";
import type { ReactNode } from "react";
import { youngSerif, regloBold, interTight, crimson } from "@/app/fonts";
import { CartHydration } from "@/components/CartHydration";
import { organizationJsonLd, websiteJsonLd } from "@/lib/json-ld";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Maison Coffee — Specialty Arabica Roasted at Origin in Sơn La, Vietnam",
    template: `%s — ${SITE_NAME}`,
  },
  description:
    "Maison Coffee grows and roasts 100% highland Arabica in Mai Sơn, Sơn La — honey-processed, medium-light roast, direct from Vietnamese farmer partners. Whole bean and drip bags, shipped worldwide.",
  keywords: [
    "Vietnamese specialty coffee",
    "Sơn La Arabica",
    "honey processed coffee",
    "single origin Vietnam",
    "coffee drip bags",
    "wholesale green coffee Vietnam",
  ],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    alternateLocale: ["vi_VN"],
    url: SITE_URL,
    title:
      "Maison Coffee — Specialty Arabica Roasted at Origin in Sơn La, Vietnam",
    description:
      "100% highland Arabica grown at 800+ in Mai Sơn, Sơn La. Honey-processed, medium-light roast, direct from Vietnamese farmer partners.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Maison Coffee — specialty Arabica grown in the highlands of Sơn La, Vietnam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Maison Coffee — Specialty Arabica Roasted at Origin in Sơn La, Vietnam",
    description:
      "100% highland Arabica grown at 800+ in Mai Sơn, Sơn La. Honey-processed, medium-light roast, direct from Vietnamese farmer partners.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${youngSerif.variable} ${regloBold.variable} ${interTight.variable} ${crimson.variable}`}
    >
      <body className="min-h-screen bg-cream-100 text-ink-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
        />
        <CartHydration />
        {children}
      </body>
    </html>
  );
}
