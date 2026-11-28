"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MessageCircle, X } from "lucide-react";
import { useOverlay } from "@/lib/use-overlay";
import { ZALO_URL, WHATSAPP_URL, INSTAGRAM_DM_URL, WECHAT_QR_IMAGE } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n";

export function ContactWidget({ dict }: { dict: Dictionary["contactWidget"] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isWechatOpen, setIsWechatOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    function onClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const wechatModalRef = useOverlay(isWechatOpen, () => setIsWechatOpen(false));

  return (
    <>
      <div ref={menuRef} className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {isOpen && (
          <div className="flex flex-col items-end gap-2.5">
            <a
              href={ZALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 items-center gap-2.5 rounded-pill bg-white px-5 text-body-md font-medium text-ink-900 shadow-md transition-transform duration-150 ease-brand hover:-translate-y-0.5"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0068FF] text-white">
                <MessageCircle size={17} strokeWidth={2} aria-hidden="true" />
              </span>
              {dict.zaloLabel}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 items-center gap-2.5 rounded-pill bg-white px-5 text-body-md font-medium text-ink-900 shadow-md transition-transform duration-150 ease-brand hover:-translate-y-0.5"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-white">
                <MessageCircle size={17} strokeWidth={2} aria-hidden="true" />
              </span>
              {dict.whatsappLabel}
            </a>
            <a
              href={INSTAGRAM_DM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 items-center gap-2.5 rounded-pill bg-white px-5 text-body-md font-medium text-ink-900 shadow-md transition-transform duration-150 ease-brand hover:-translate-y-0.5"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] text-white">
                <MessageCircle size={17} strokeWidth={2} aria-hidden="true" />
              </span>
              {dict.instagramLabel}
            </a>
            <button
              type="button"
              onClick={() => {
                setIsWechatOpen(true);
                setIsOpen(false);
              }}
              className="flex h-14 items-center gap-2.5 rounded-pill bg-white px-5 text-body-md font-medium text-ink-900 shadow-md transition-transform duration-150 ease-brand hover:-translate-y-0.5"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#07C160] text-white">
                <MessageCircle size={17} strokeWidth={2} aria-hidden="true" />
              </span>
              {dict.wechatLabel}
            </button>
          </div>
        )}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? dict.closeLabel : dict.toggleLabel}
          className="flex h-18 w-18 items-center justify-center rounded-full bg-green-700 text-cream-050 shadow-lg transition-transform duration-150 ease-brand hover:scale-105 hover:bg-green-800"
        >
          {isOpen ? (
            <X size={30} strokeWidth={1.5} aria-hidden="true" />
          ) : (
            <MessageCircle size={30} strokeWidth={1.5} aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-50 ${isWechatOpen ? "" : "pointer-events-none"}`}
        aria-hidden={!isWechatOpen}
      >
        <div
          onClick={() => setIsWechatOpen(false)}
          className={`absolute inset-0 bg-ink-900/50 transition-opacity duration-200 ease-brand ${
            isWechatOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          ref={wechatModalRef}
          role="dialog"
          aria-modal="true"
          aria-label={dict.wechatModalTitle}
          className={`absolute left-1/2 top-1/2 w-full max-w-sm -translate-x-1/2 rounded-md bg-white p-6 text-center shadow-lg transition-all duration-200 ease-brand ${
            isWechatOpen ? "-translate-y-1/2 opacity-100" : "-translate-y-[45%] opacity-0"
          }`}
        >
          <button
            type="button"
            onClick={() => setIsWechatOpen(false)}
            aria-label={dict.closeLabel}
            className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full text-ink-500 hover:text-green-700"
          >
            <X size={20} strokeWidth={1.5} aria-hidden="true" />
          </button>
          <h2 className="font-display text-heading-md text-green-700">{dict.wechatModalTitle}</h2>
          <p className="mt-2 text-body-sm text-ink-500">{dict.wechatModalBody}</p>
          <div className="relative mx-auto mt-5 aspect-[3/4] w-full max-w-[240px]">
            <Image
              src={WECHAT_QR_IMAGE}
              alt={dict.wechatModalTitle}
              fill
              sizes="240px"
              className="rounded-sm object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
