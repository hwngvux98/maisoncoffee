"use client";

import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import { useCartStore } from "@/lib/cart-store";
import { QuantityStepper } from "@/components/QuantityStepper";

export function ProductDetailActions({
  slug,
  quantityLabel,
  addToCartLabel,
}: {
  slug: string;
  quantityLabel: string;
  addToCartLabel: string;
}) {
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="flex flex-wrap items-center gap-4">
      <QuantityStepper quantity={quantity} onChange={setQuantity} label={quantityLabel} />
      <button
        type="button"
        onClick={() => addItem(slug, quantity)}
        className="inline-flex h-12 min-w-48 items-center justify-center gap-2 rounded-pill bg-gold-500 px-8 text-body-md font-medium text-ink-900 shadow-sm transition-all duration-150 ease-brand hover:-translate-y-0.5 hover:bg-gold-600"
      >
        <ShoppingBag size={18} strokeWidth={1.5} aria-hidden="true" />
        {addToCartLabel}
      </button>
    </div>
  );
}
