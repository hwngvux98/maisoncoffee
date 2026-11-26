import type { Metadata } from "next";
import { BrewGuidesIndexView } from "@/components/brewing/BrewGuidesIndexView";

export const metadata: Metadata = {
  title: "冲煮指南 — 用每一种方式享用 Maison 咖啡",
  description:
    "Maison Specialty 的分步冲煮指南:意式浓缩、手冲、法压壶、摩卡壶、咖啡机、Chemex 与挂耳咖啡。",
  alternates: {
    canonical: "/zh/brewing-guides",
    languages: {
      en: "/brewing-guides",
      vi: "/vi/brewing-guides",
      zh: "/zh/brewing-guides",
      "x-default": "/brewing-guides",
    },
  },
};

export default function Page() {
  return <BrewGuidesIndexView locale="zh" />;
}
