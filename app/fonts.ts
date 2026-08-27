import localFont from "next/font/local";

export const youngSerif = localFont({
  src: "./fonts/YoungSerif-Regular.woff2",
  variable: "--font-young-serif",
  weight: "400",
  display: "swap",
});

export const regloBold = localFont({
  src: "./fonts/Reglo-Bold.woff2",
  variable: "--font-reglo",
  weight: "700",
  display: "swap",
});

export const interTight = localFont({
  src: "./fonts/InterTight-Variable.woff2",
  variable: "--font-inter-tight",
  weight: "100 900",
  display: "swap",
});

export const crimson = localFont({
  src: [
    { path: "./fonts/CrimsonText-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/CrimsonText-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/CrimsonText-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-crimson-text",
  display: "swap",
});
