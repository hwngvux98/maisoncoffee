import type { ReactNode } from "react";
import { SiteChrome } from "@/components/SiteChrome";

export default function EnLayout({ children }: { children: ReactNode }) {
  return <SiteChrome locale="en">{children}</SiteChrome>;
}
