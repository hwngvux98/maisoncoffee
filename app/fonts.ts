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
  src: "./fonts/CrimsonText-Bold.ttf",
  variable: "--font-crimson-text",
  weight: "100 900",
  display: "swap",
});
