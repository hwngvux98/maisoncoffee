"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ProductImage } from "@/lib/products";

const SWIPE_THRESHOLD_PX = 40;

export function ProductGallery({
  images,
  badge,
  main = false,
  prevLabel = "Previous image",
  nextLabel = "Next image",
}: {
  images: readonly ProductImage[];
  badge?: string;
  main?: boolean;
  prevLabel?: string;
  nextLabel?: string;
}) {
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);

  function goTo(index: number) {
    setActive(((index % images.length) + images.length) % images.length);
  }

  function onTouchStart(event: React.TouchEvent) {
    touchStartX.current = event.touches[0].clientX;
  }

  function onTouchEnd(event: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(deltaX) < SWIPE_THRESHOLD_PX) return;
    goTo(active + (deltaX < 0 ? 1 : -1));
  }

  function onKeyDown(event: React.KeyboardEvent) {
    if (event.key === "ArrowRight") goTo(active + 1);
    if (event.key === "ArrowLeft") goTo(active - 1);
  }

  const current = images[active];

  return (
    <div>
      <div
        role="group"
        aria-roledescription="carousel"
        aria-label="Product photos"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className="relative aspect-square touch-pan-y overflow-hidden rounded-lg bg-cream-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
      >
        {badge && (
          <span className="eyebrow absolute left-4 top-4 z-10 rounded-pill bg-gold-500 px-3 py-1 text-ink-900">
            {badge}
          </span>
        )}

        {images.map((image, index) => (
          <div
            key={image.src + index}
            className="absolute inset-0 transition-opacity duration-300 ease-brand"
            style={{ opacity: index === active ? 1 : 0 }}
            aria-hidden={index !== active}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}

        <p className="sr-only" aria-live="polite">
          {current.alt}
        </p>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(active - 1)}
              aria-label={prevLabel}
              className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream-050/90 text-ink-900 shadow-sm transition-colors duration-150 ease-brand hover:bg-cream-050"
            >
              <ChevronLeft size={18} strokeWidth={1.5} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => goTo(active + 1)}
              aria-label={nextLabel}
              className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream-050/90 text-ink-900 shadow-sm transition-colors duration-150 ease-brand hover:bg-cream-050"
            >
              <ChevronRight size={18} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && !main && (
        <div className="mt-4 p-1 flex gap-3 overflow-x-auto pb-1">
          {images.map((image, index) => {
            const isActive = index === active;
            return (
              <button
                key={image.src + index}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`View image ${index + 1} of ${images.length}`}
                aria-current={isActive}
                className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-sm bg-cream-200 transition-all duration-150 ease-brand ${
                  isActive
                    ? "ring-2 ring-green-500"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={image.src}
                  alt=""
                  fill
                  sizes="64px"
                  className="object-contain p-2"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
