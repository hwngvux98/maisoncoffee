"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

function otherLocalePath(pathname: string, locale: Locale): string {
  if (locale === "en") {
    return pathname === "/" ? "/vi" : `/vi${pathname}`;
  }
  const stripped = pathname.replace(/^\/vi/, "");
  return stripped === "" ? "/" : stripped;
}

export function LanguageSwitcher({
  locale,
  variant = "light",
  onNavigate,
}: {
  locale: Locale;
  variant?: "light" | "dark";
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const targetLocale: Locale = locale === "en" ? "vi" : "en";
  const href = otherLocalePath(pathname, locale);

  const style =
    variant === "dark"
      ? "border-line-inverse text-cream-050 hover:border-cream-050/60"
      : "border-line text-ink-700 hover:border-line-strong hover:text-green-700";

  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-label={targetLocale === "en" ? "Switch to English" : "Chuyển sang tiếng Việt"}
      className={`flex h-11 items-center justify-center rounded-pill border px-4 text-body-sm font-medium transition-colors duration-150 ease-brand ${style}`}
    >
      {targetLocale === "en" ? "EN" : "VI"}
    </Link>
  );
}
