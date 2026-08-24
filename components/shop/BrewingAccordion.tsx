"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { BrewGuide } from "@/lib/products";

export function BrewingAccordion({ guides }: { guides: readonly BrewGuide[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {guides.map((guide, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={guide.title}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-4 text-left"
            >
              <span className="text-body-md font-medium text-ink-900">{guide.title}</span>
              <ChevronDown
                size={18}
                strokeWidth={1.5}
                aria-hidden="true"
                className={`shrink-0 text-ink-500 transition-transform duration-200 ease-brand ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && <p className="pb-4 text-body-md text-ink-700">{guide.body}</p>}
          </div>
        );
      })}
    </div>
  );
}
