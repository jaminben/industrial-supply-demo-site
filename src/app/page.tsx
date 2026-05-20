import Image from "next/image";
import Link from "next/link";
import { Container, Button, SectionHeading, Eyebrow } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { ProductCard, ArticleCard, CtaBand } from "@/components/sections";
import { products, industries, stats, differentiators } from "@/lib/data";
import { articles } from "@/lib/insights";
import { img } from "@/lib/images";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <Image src={img.heroFactory} alt="" fill priority sizes="100vw" className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/95 to-ink/60" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-accent-400/10 blur-3xl" />
        <Container className="relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <Eyebrow>Vacuum · Gripping · Automation</Eyebrow>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl text-balance">
              Move anything.
              <span className="block text-brand-400">Waste nothing.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Vactera builds energy-efficient vacuum technology that grips, lifts, and conveys the
              products your line depends on — using up to 90% less compressed air.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/products" variant="accent" withArrow>
                Explore products
              </Button>
              <Button href="/contact" variant="outline">
                Talk to an engineer
              </Button>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-2xl font-bold text-white">{s.value}</dt>
                  <dd className="mt-1 text-xs leading-snug text-slate-400">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative hidden lg:block">
            <HeroPanel />
          </div>
        </Container>
      </section>

      {/* Trust bar */}
      <section className="border-b border-slate-200 bg-slate-50">
        <Container className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-6 text-sm font-medium text-slate-500">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Trusted on production lines worldwide
          </span>
          {["NordVolt", "AeroFab", "PureFoods", "Medipack", "SiliconWorks", "PrintLine"].map((n) => (
            <span key={n} className="font-semibold text-slate-400">{n}</span>
          ))}
        </Container>
      </section>

      {/* Products */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="What we build"
              title="A complete vacuum automation toolkit"
              intro="From the suction cup at the part to the smart sensor in the cloud — engineered to work together."
            />
            <Button href="/products" variant="primary" withArrow className="flex-shrink-0">
              All products
            </Button>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* Differentiators */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Why Vactera"
            title="Engineering that pays for itself"
            intro="Compressed air is one of the most expensive utilities in any plant. We design every system to do more with less of it."
            align="center"
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((d) => (
              <div key={d.title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-brand-600 text-white">
                  <Icon name={d.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{d.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured energy story */}
      <section className="py-20 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 overflow-hidden rounded-2xl bg-ink p-8 text-white lg:order-1">
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="relative space-y-6">
              <div className="flex items-end justify-between">
                <span className="text-sm font-medium text-slate-400">Compressed-air use</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-accent-400">
                  per 1M cycles
                </span>
              </div>
              <Bar label="Conventional ejector" pct={100} value="100%" muted />
              <Bar label="Vactera COAX" pct={42} value="42%" />
              <Bar label="COAX + Energy Save" pct={11} value="11%" highlight />
              <p className="border-t border-white/10 pt-5 text-sm leading-relaxed text-slate-300">
                A typical retrofit pays back in under nine months on energy savings alone — before
                counting faster cycles and fewer stoppages.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Energy at the core"
              title="Cut compressed-air consumption by up to 90%"
              intro="Vacuum sensing shuts off the air supply the instant your set level is reached, and only sips again when it drops. Multiply that across every grip point and the savings compound fast."
            />
            <ul className="mt-6 space-y-3">
              {[
                "Automatic air-save valve on every smart pump",
                "Energy dashboards that pinpoint your costliest grip points",
                "Decentralized generation that removes hose losses",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                  <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/products/smart-vacuum-iot" variant="primary" withArrow>
                See smart vacuum
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Industries */}
      <section className="bg-ink py-20 text-white sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Industries"
            title="Built for demanding production"
            intro="Whatever you make, we have proven, application-engineered handling for it."
            light
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-brand-400/50 hover:bg-white/[0.06]"
              >
                <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-lg bg-brand-600/20 text-brand-300">
                  <Icon name={ind.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-semibold text-white">{ind.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{ind.blurb}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Latest insights */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Insights"
              title="Knowledge from the vacuum experts"
              intro="Practical engineering on energy, gripping and automation — written by the people who build the technology."
            />
            <Button href="/insights" variant="primary" withArrow className="flex-shrink-0">
              All insights
            </Button>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.slice(0, 3).map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

function HeroPanel() {
  const rows = [
    { label: "System vacuum", value: "-82 kPa", pct: 82 },
    { label: "Air consumption", value: "0.2 Nl/s", pct: 18 },
    { label: "Cycle time", value: "0.38 s", pct: 30 },
    { label: "Grip confidence", value: "99.9%", pct: 99 },
  ];
  return (
    <div className="relative mx-auto max-w-md rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-accent-400" />
          <span className="text-sm font-semibold text-white">Line 4 · Palletizer</span>
        </div>
        <span className="rounded-full bg-brand-600/30 px-3 py-1 text-xs font-semibold text-brand-200">
          Live
        </span>
      </div>
      <div className="mt-6 space-y-4">
        {rows.map((r) => (
          <div key={r.label}>
            <div className="flex justify-between text-xs text-slate-400">
              <span>{r.label}</span>
              <span className="font-semibold text-white">{r.value}</span>
            </div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-300" style={{ width: `${r.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-5 text-center">
        {[
          { k: "Uptime", v: "99.4%" },
          { k: "Cycles", v: "1.2M" },
          { k: "Saved", v: "$48k" },
        ].map((s) => (
          <div key={s.k}>
            <div className="text-lg font-bold text-white">{s.v}</div>
            <div className="text-[11px] uppercase tracking-wide text-slate-500">{s.k}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Bar({
  label,
  pct,
  value,
  highlight = false,
  muted = false,
}: {
  label: string;
  pct: number;
  value: string;
  highlight?: boolean;
  muted?: boolean;
}) {
  return (
    <div>
      <div className="flex justify-between text-sm">
        <span className={muted ? "text-slate-400" : "text-slate-200"}>{label}</span>
        <span className={`font-semibold ${highlight ? "text-accent-400" : "text-white"}`}>{value}</span>
      </div>
      <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-white/10">
        <div
          className={`h-full rounded-full ${
            highlight ? "bg-accent-400" : muted ? "bg-slate-500" : "bg-brand-500"
          }`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
