"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { products } from "@/lib/data";

const inputClass =
  "w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-600 text-white">
          <Icon name="check" className="h-7 w-7" strokeWidth={2.5} />
        </span>
        <h3 className="mt-5 text-xl font-bold text-ink">Thanks — we&apos;ve got it.</h3>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-slate-600">
          An application engineer will reach out within one business day. (This is a demo — nothing
          was actually sent.)
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" required>
          <input className={inputClass} required placeholder="Jordan Rivera" />
        </Field>
        <Field label="Work email" required>
          <input type="email" className={inputClass} required placeholder="you@company.com" />
        </Field>
        <Field label="Company">
          <input className={inputClass} placeholder="Acme Manufacturing" />
        </Field>
        <Field label="Phone">
          <input type="tel" className={inputClass} placeholder="+1 (555) 000-0000" />
        </Field>
      </div>

      <Field label="Product of interest">
        <select className={inputClass} defaultValue="">
          <option value="" disabled>Select a product family…</option>
          {products.map((p) => (
            <option key={p.slug} value={p.slug}>{p.name}</option>
          ))}
          <option value="other">Not sure / other</option>
        </select>
      </Field>

      <Field label="How can we help?" required>
        <textarea
          className={`${inputClass} resize-none`}
          rows={5}
          required
          placeholder="Tell us about your parts, cycle times, and the challenge you're solving…"
        />
      </Field>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700 sm:w-auto"
      >
        Send request
        <Icon name="arrow" className="h-4 w-4" strokeWidth={2} />
      </button>
    </form>
  );
}

function Field({
  label,
  required = false,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
        {required && <span className="text-brand-600"> *</span>}
      </span>
      {children}
    </label>
  );
}
