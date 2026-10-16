import type { ReactNode } from "react";
import { SiteChrome } from "@/components/SiteChrome";

export default function ZhLayout({ children }: { children: ReactNode }) {
  return (
    <div lang="zh">
      <SiteChrome locale="zh">{children}</SiteChrome>
    </div>
  );
}
