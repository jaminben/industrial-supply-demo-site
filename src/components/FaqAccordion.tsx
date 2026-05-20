import { useState } from "react";
import { Icon } from "./Icon";

export function FaqAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-semibold text-ink">{f.q}</span>
              <Icon
                name="arrow"
                strokeWidth={2}
                className={`h-5 w-5 flex-shrink-0 text-brand-600 transition-transform ${
                  isOpen ? "-rotate-90" : "rotate-90"
                }`}
              />
            </button>
            {isOpen && (
              <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{f.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
