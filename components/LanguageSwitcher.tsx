"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

const locales: Locale[] = ["en", "vi", "zh"];

const labels: Record<Locale, string> = {
  en: "EN",
  vi: "VI",
  zh: "中文",
};

const switchLabels: Record<Locale, string> = {
  en: "Switch to English",
  vi: "Chuyển sang tiếng Việt",
  zh: "切换到中文",
};

function pathForLocale(pathname: string, targetLocale: Locale): string {
  const stripped = pathname.replace(/^\/(vi|zh)(?=\/|$)/, "");
  const base = stripped === "" ? "/" : stripped;
  if (targetLocale === "en") return base;
  return base === "/" ? `/${targetLocale}` : `/${targetLocale}${base}`;
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

  const inactiveStyle =
    variant === "dark"
      ? "border-line-inverse text-cream-050/70 hover:border-cream-050/60 hover:text-cream-050"
      : "border-line text-ink-700 hover:border-line-strong hover:text-green-700";
  const activeStyle =
    variant === "dark"
      ? "border-cream-050 text-cream-050"
      : "border-green-700 text-green-700";

  return (
    <div
      role="group"
      aria-label="Language"
      className="flex items-center gap-1 rounded-pill border border-transparent p-0.5"
    >
      {locales.map((targetLocale) => {
        const isActive = targetLocale === locale;
        const href = pathForLocale(pathname, targetLocale);
        return (
          <Link
            key={targetLocale}
            href={href}
            onClick={onNavigate}
            aria-current={isActive ? "true" : undefined}
            aria-label={switchLabels[targetLocale]}
            className={`flex h-9 items-center justify-center rounded-pill border px-3 text-body-sm font-medium transition-colors duration-150 ease-brand ${
              isActive ? activeStyle : inactiveStyle
            }`}
          >
            {labels[targetLocale]}
          </Link>
        );
      })}
    </div>
  );
}
