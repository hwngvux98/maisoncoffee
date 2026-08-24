"use client";

import { Minus, Plus } from "lucide-react";

export function QuantityStepper({
  quantity,
  onChange,
  label,
  min = 1,
  max = 99,
}: {
  quantity: number;
  onChange: (next: number) => void;
  label: string;
  min?: number;
  max?: number;
}) {
  return (
    <div
      className="inline-flex items-center rounded-pill border border-line"
      role="group"
      aria-label={label}
    >
      <button
        type="button"
        onClick={() => onChange(Math.max(min, quantity - 1))}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
        className="flex h-11 w-11 items-center justify-center rounded-full text-ink-700 transition-colors duration-150 ease-brand hover:text-green-700 disabled:opacity-30"
      >
        <Minus size={16} strokeWidth={1.5} aria-hidden="true" />
      </button>
      <span className="w-8 text-center font-sans text-body-md tabular-nums" aria-live="polite">
        {quantity}
      </span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, quantity + 1))}
        disabled={quantity >= max}
        aria-label="Increase quantity"
        className="flex h-11 w-11 items-center justify-center rounded-full text-ink-700 transition-colors duration-150 ease-brand hover:text-green-700 disabled:opacity-30"
      >
        <Plus size={16} strokeWidth={1.5} aria-hidden="true" />
      </button>
    </div>
  );
}
