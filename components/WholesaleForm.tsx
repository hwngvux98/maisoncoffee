"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/lib/i18n";

type Status = "idle" | "submitting" | "success" | "error";

export function WholesaleForm({ dict }: { dict: Dictionary["wholesale"] }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const form = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/wholesale", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessName: form.get("businessName"),
          workEmail: form.get("workEmail"),
        }),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-md bg-cream-050 p-6 text-body-md text-green-900" role="status">
        {dict.success}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <h3 className="font-display text-heading-md text-cream-050">{dict.formTitle}</h3>
      <div className="flex flex-col gap-1">
        <label htmlFor="businessName" className="text-body-sm text-cream-050/80">
          {dict.businessNameLabel}
        </label>
        <input
          id="businessName"
          name="businessName"
          type="text"
          required
          className="h-12 rounded-sm border border-line-inverse bg-cream-050/10 px-4 text-body-md text-cream-050 outline-none placeholder:text-cream-050/40 focus-visible:border-gold-500"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="workEmail" className="text-body-sm text-cream-050/80">
          {dict.workEmailLabel}
        </label>
        <input
          id="workEmail"
          name="workEmail"
          type="email"
          required
          className="h-12 rounded-sm border border-line-inverse bg-cream-050/10 px-4 text-body-md text-cream-050 outline-none placeholder:text-cream-050/40 focus-visible:border-gold-500"
        />
      </div>
      {status === "error" && (
        <p className="text-body-sm text-gold-300" role="alert">
          {dict.error}
        </p>
      )}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex h-12 items-center justify-center rounded-pill bg-gold-500 px-8 text-body-md font-medium text-ink-900 transition-colors duration-150 ease-brand hover:bg-gold-600 disabled:opacity-60"
      >
        {status === "submitting" ? dict.submitting : dict.submit}
      </button>
    </form>
  );
}
