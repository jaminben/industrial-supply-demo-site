import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import { CtaBand } from "@/components/sections";
import type { IconName } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "Energy efficiency is designed into every Vactera system. Our approach to compressed-air savings, circularity and measurable impact.",
};

const pillars: { icon: IconName; title: string; detail: string }[] = [
  {
    icon: "energy",
    title: "Energy by design",
    detail:
      "Every vacuum system is engineered to use the least possible compressed air. Efficiency is a design requirement, not a retrofit.",
  },
  {
    icon: "recycle",
    title: "Circular products",
    detail:
      "Modular, field-serviceable designs mean you replace a worn part, not a whole assembly — extending service life and cutting waste.",
  },
  {
    icon: "gauge",
    title: "Measurable impact",
    detail:
      "Connected systems report real air consumption per cycle, so customers can see — and reduce — their actual energy footprint.",
  },
];

const goals = [
  { year: "2025", text: "100% of new products specified with an energy-save option as standard.", done: true },
  { year: "2027", text: "Carbon-neutral operations across all manufacturing and distribution sites.", done: false },
  { year: "2030", text: "Net-zero across the full value chain, including supplier emissions.", done: false },
];

const metrics = [
  { value: "1.2 TWh", label: "Estimated annual energy saved by installed COAX systems" },
  { value: "90%", label: "Peak reduction in vacuum air consumption with energy-save" },
  { value: "100%", label: "Renewable electricity at our primary plant" },
  { value: "480+", label: "Patents extending product life and efficiency" },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        image="sustainability"
        eyebrow="Sustainability"
        title="The most sustainable air is the air you never use"
        intro="Compressed air is one of the most energy-intensive utilities in any plant. Reducing it is the heart of both our value to customers and our environmental commitment."
      />

      {/* Pillars */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Our approach"
            title="Three ways we design for the planet"
            intro="Sustainability at Vactera isn't a separate program — it's the same engineering that saves our customers money."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-xl border border-slate-200 bg-white p-6">
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-brand-600 text-white">
                  <Icon name={p.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Metrics */}
      <section className="bg-ink py-16 text-white sm:py-20">
        <Container>
          <SectionHeading eyebrow="Impact" title="The numbers behind the commitment" light />
          <dl className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="border-l-2 border-brand-500 pl-5">
                <dt className="text-4xl font-bold text-white">{m.value}</dt>
                <dd className="mt-2 text-sm leading-snug text-slate-400">{m.label}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 max-w-2xl text-xs text-slate-500">
            Figures are illustrative for this demonstration site and do not represent a real company.
          </p>
        </Container>
      </section>

      {/* Goals timeline */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Roadmap" title="Our commitments" />
          <ol className="mt-10 space-y-6">
            {goals.map((g) => (
              <li key={g.year} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <span
                    className={`grid h-10 w-10 flex-shrink-0 place-items-center rounded-full ${
                      g.done ? "bg-brand-600 text-white" : "border-2 border-slate-300 text-slate-400"
                    }`}
                  >
                    {g.done ? <Icon name="check" className="h-5 w-5" strokeWidth={2.5} /> : <Icon name="leaf" className="h-5 w-5" />}
                  </span>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <div className="text-sm font-bold text-brand-600">{g.year}</div>
                  <p className="mt-1 leading-relaxed text-slate-700">{g.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <CtaBand
        title="Build a more efficient line"
        intro="Ask us for an energy-savings estimate on your existing vacuum applications — it's usually the fastest payback on the floor."
      />
    </>
  );
}
