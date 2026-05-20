import Image from "next/image";
import { Container, SectionHeading, Eyebrow } from "@/components/ui";
import { Seo } from "@/components/Seo";
import { Icon } from "@/components/Icon";
import { CtaBand } from "@/components/sections";
import { company, stats } from "@/lib/data";
import { img } from "@/lib/images";

const timeline = [
  { year: "1972", text: "Founded in Cleveland as a vacuum-pump workshop for the regional steel industry." },
  { year: "1989", text: "Introduced our first multi-stage COAX ejector, tripling flow per liter of air." },
  { year: "2004", text: "Launched the modular piGRIP suction cup platform and opened operations across Europe." },
  { year: "2016", text: "Released connected, IO-Link smart vacuum with predictive diagnostics." },
  { year: "2023", text: "Expanded soft robotic gripping for food and e-grocery fulfillment." },
];

const values = [
  { icon: "leaf" as const, title: "Sustainability", text: "We measure success in compressed air saved. Efficiency is designed in, never bolted on." },
  { icon: "wrench" as const, title: "Engineering rigor", text: "Every solution is validated on real parts before it ships. No surprises on your line." },
  { icon: "globe" as const, title: "Close to customers", text: "Local stock, service, and specialists in 70 countries — support that shows up." },
];

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About"
        description={`${company.name} has spent five decades engineering energy-efficient vacuum automation.`}
      />
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <Image src={img.aboutPlant} alt="" fill priority sizes="100vw" className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/50" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-brand-600/30 blur-3xl" />
        <Container className="relative py-16 sm:py-20">
          <div className="max-w-3xl">
            <Eyebrow>About Vactera</Eyebrow>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl text-balance">
              Fifty years of moving things with air
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              {company.description}
            </p>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-3xl font-bold text-white">{s.value}</dt>
                <dd className="mt-1 text-sm text-slate-400">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Our mission"
            title="Make automation faster, cleaner, and far more efficient"
            intro="Vacuum is everywhere in modern manufacturing — and quietly responsible for an enormous share of compressed-air energy. We exist to change that, one grip point at a time."
          />
          <div className="space-y-6 self-center">
            <p className="leading-relaxed text-slate-600">
              From a single workshop in Cleveland, Vactera grew by solving the problems competitors
              walked away from: oily panels, fragile produce, abrasive powders, surfaces that couldn't
              be marked. That obsession with the hard cases became our engineering culture.
            </p>
            <p className="leading-relaxed text-slate-600">
              Today our pumps, cups, grippers, and conveyors run on production lines in {company.countries}{" "}
              countries — and every one of them is built to do its job with the least possible energy.
            </p>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeading align="center" eyebrow="What guides us" title="Principles we build on" />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-brand-600 text-white">
                  <Icon name={v.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Our history" title="Five decades of vacuum innovation" />
          <ol className="mt-12 space-y-8 border-l-2 border-slate-200 pl-8">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[41px] grid h-5 w-5 place-items-center rounded-full border-2 border-brand-600 bg-white">
                  <span className="h-2 w-2 rounded-full bg-brand-600" />
                </span>
                <div className="text-sm font-bold text-brand-600">{t.year}</div>
                <p className="mt-1 max-w-2xl leading-relaxed text-slate-700">{t.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Global presence */}
      <section className="bg-ink py-16 text-white sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Global presence"
            title="Local expertise, worldwide"
            intro="Stock, service and application engineers close to your operations — wherever they run."
            light
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { region: "North America", note: "HQ & manufacturing — Cleveland, OH" },
              { region: "Europe", note: "Engineering & distribution hubs" },
              { region: "Asia-Pacific", note: "Regional stock & service centers" },
              { region: "Latin America", note: "Partner network & support" },
            ].map((loc) => (
              <div key={loc.region} className="border-l-2 border-brand-500 pl-5">
                <div className="flex items-center gap-2 text-lg font-bold text-white">
                  <Icon name="pin" className="h-5 w-5 text-brand-400" /> {loc.region}
                </div>
                <p className="mt-2 text-sm leading-snug text-slate-400">{loc.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-slate-400">
            Serving <span className="font-semibold text-white">{company.countries} countries</span> with{" "}
            <span className="font-semibold text-white">{company.employees}</span> employees worldwide.
          </p>
        </Container>
      </section>

      <CtaBand
        title="Want to work with our engineers?"
        intro="Whether you're specifying a new line or optimizing an existing one, our team is ready to help."
      />
    </>
  );
}
