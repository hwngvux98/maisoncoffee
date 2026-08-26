"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

const INTERVAL_MS = 5600;
const FADE_MS = 1100;

export function HeroSlideshow({
  images,
  prevLabel,
  nextLabel,
  slideLabel,
  children,
}: {
  images: { src: string; alt: string }[];
  prevLabel: string;
  nextLabel: string;
  slideLabel: string;
  children: ReactNode;
}) {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      setActive(((index % images.length) + images.length) % images.length);
    },
    [images.length]
  );

  useEffect(() => {
    if (isPaused || reducedMotion) return;
    timerRef.current = setInterval(() => {
      setActive((current) => (current + 1) % images.length);
    }, INTERVAL_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, reducedMotion, images.length]);

  return (
    <section
      className="relative flex min-h-[min(94vh,900px)] items-end overflow-hidden bg-green-900"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {images.map((image, index) => (
        <div
          key={image.src + index}
          className="absolute inset-0 transition-opacity ease-brand"
          style={{
            opacity: index === active ? 1 : 0,
            transitionDuration: `${FADE_MS}ms`,
          }}
          aria-hidden={index !== active}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(18,48,26,0.86), rgba(18,48,26,0.30))",
        }}
      />

      <div className="relative z-10 w-full pb-16 pt-32 md:pb-24">
        {children}
      </div>

      <div className="absolute bottom-8 right-6 z-10 flex items-center gap-4 md:right-10">
        <button
          type="button"
          onClick={() => goTo(active - 1)}
          aria-label={prevLabel}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line-inverse text-cream-050 transition-colors duration-150 ease-brand hover:bg-cream-050/10"
        >
          <ChevronLeft size={18} strokeWidth={1.5} aria-hidden="true" />
        </button>
        <div className="flex items-center gap-2">
          {images.map((image, index) => (
            <button
              key={image.src + index}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`${slideLabel} ${index + 1}`}
              aria-current={index === active}
              className="h-1.5 w-8 overflow-hidden rounded-pill bg-cream-050/25"
            >
              <span
                className="block h-full bg-gold-500 transition-transform ease-brand"
                style={{
                  transformOrigin: "left",
                  transform: `scaleX(${index === active ? 1 : 0})`,
                  transitionDuration:
                    index === active ? `${INTERVAL_MS}ms` : "150ms",
                }}
              />
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => goTo(active + 1)}
          aria-label={nextLabel}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line-inverse text-cream-050 transition-colors duration-150 ease-brand hover:bg-cream-050/10"
        >
          <ChevronRight size={18} strokeWidth={1.5} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
