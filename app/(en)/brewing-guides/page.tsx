import type { Metadata } from "next";
import { BrewGuidesIndexView } from "@/components/brewing/BrewGuidesIndexView";

export const metadata: Metadata = {
  title: "Brewing Guides — Every Way to Brew Maison Coffee",
  description:
    "Step-by-step brewing guides for Maison Specialty: espresso, pour-over, French press, moka pot, coffee maker, Chemex, and drip bags.",
  alternates: {
    canonical: "/brewing-guides",
    languages: {
      en: "/brewing-guides",
      vi: "/vi/brewing-guides",
      zh: "/zh/brewing-guides",
      "x-default": "/brewing-guides",
    },
  },
};

export default function Page() {
  return <BrewGuidesIndexView locale="en" />;
}
