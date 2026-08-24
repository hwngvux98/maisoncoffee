import type { ReactNode } from "react";
import { SiteChrome } from "@/components/SiteChrome";

export default function ViLayout({ children }: { children: ReactNode }) {
  return (
    <div lang="vi">
      <SiteChrome locale="vi">{children}</SiteChrome>
    </div>
  );
}
