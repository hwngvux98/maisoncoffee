import type { Metadata } from "next";
import { BrewGuidesIndexView } from "@/components/brewing/BrewGuidesIndexView";

export const metadata: Metadata = {
  title: "Hướng Dẫn Pha — Mọi Cách Thưởng Thức Cà Phê Maison",
  description:
    "Hướng dẫn pha từng bước cho Maison Specialty: espresso, pour-over, French press, moka pot, coffee maker, Chemex và drip bag.",
  alternates: {
    canonical: "/vi/brewing-guides",
    languages: {
      en: "/brewing-guides",
      vi: "/vi/brewing-guides",
      zh: "/zh/brewing-guides",
      "x-default": "/brewing-guides",
    },
  },
};

export default function Page() {
  return <BrewGuidesIndexView locale="vi" />;
}
