import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { ContactForm } from "@/components/ContactForm";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to a Vactera application engineer about your vacuum handling challenge.",
};

const contactCards = [
  { icon: "mail" as const, label: "Email", value: company.email, href: `mailto:${company.email}` },
  { icon: "phone" as const, label: "Phone", value: company.phone, href: `tel:${company.phone.replace(/[^+\d]/g, "")}` },
  { icon: "pin" as const, label: "Headquarters", value: company.address },
  { icon: "clock" as const, label: "Hours", value: "Mon–Fri · 8:00–18:00 ET" },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-600/30 blur-3xl" />
        <Container className="relative py-16 sm:py-20">
          <div className="max-w-2xl">
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl text-balance">
              Let&apos;s engineer your grip
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              Tell us about your application and an engineer will get back to you within one business
              day — usually with a recommendation, not just a brochure.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-ink">Reach us directly</h2>
            <div className="mt-6 space-y-4">
              {contactCards.map((c) => {
                const inner = (
                  <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5">
                    <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600">
                      <Icon name={c.icon} className="h-6 w-6" />
                    </span>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">{c.label}</div>
                      <div className="mt-0.5 font-medium text-ink">{c.value}</div>
                    </div>
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} className="block transition-colors hover:[&>div]:border-brand-300">
                    {inner}
                  </a>
                ) : (
                  <div key={c.label}>{inner}</div>
                );
              })}
            </div>
            <div className="mt-6 rounded-xl bg-slate-50 p-5 text-sm leading-relaxed text-slate-600">
              <span className="font-semibold text-ink">Looking for support?</span> Existing customers can
              reach our service desk through the same channels — just mention your line or order number.
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
