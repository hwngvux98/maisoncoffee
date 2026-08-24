"use client";

import { ShoppingBag } from "lucide-react";
import { useCartStore } from "@/lib/cart-store";

export function AddToCartButton({
  slug,
  quantity = 1,
  label,
  compact = false,
}: {
  slug: string;
  quantity?: number;
  label: string;
  compact?: boolean;
}) {
  const addItem = useCartStore((state) => state.addItem);

  if (compact) {
    return (
      <button
        type="button"
        onClick={() => addItem(slug, quantity)}
        aria-label={label}
        className="flex h-11 w-11 items-center justify-center rounded-full bg-green-700 text-cream-050 shadow-sm transition-transform duration-150 ease-brand hover:-translate-y-0.5 hover:bg-green-800"
      >
        <ShoppingBag size={18} strokeWidth={1.5} aria-hidden="true" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => addItem(slug, quantity)}
      className="inline-flex h-12 min-w-44 items-center justify-center gap-2 rounded-pill bg-gold-500 px-8 font-sans text-body-md font-medium text-ink-900 shadow-sm transition-all duration-150 ease-brand hover:-translate-y-0.5 hover:bg-gold-600"
    >
      <ShoppingBag size={18} strokeWidth={1.5} aria-hidden="true" />
      {label}
    </button>
  );
}
