import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import { CtaBand } from "@/components/sections";
import { industries, getIndustry, getProduct } from "@/lib/data";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return { title: "Industry not found" };
  return { title: industry.name, description: industry.blurb };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const recommended = industry.recommendedProducts.map(getProduct).filter(Boolean);

  return (
    <>
      <PageHero
        image={industry.image}
        eyebrow="Industries"
        title={industry.name}
        intro={industry.tagline}
        breadcrumb={[
          { label: "Industries", href: "/industries" },
          { label: industry.name },
        ]}
      />

      {/* Overview */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <div className="space-y-4">
            {industry.overview.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-slate-600">{p}</p>
            ))}
          </div>
        </Container>
      </section>

      {/* Challenges + Solutions */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="flex items-center gap-3 text-2xl font-bold tracking-tight text-ink">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-slate-200 text-slate-600">
                <Icon name="wrench" className="h-5 w-5" />
              </span>
              The challenges
            </h2>
            <ul className="mt-6 space-y-4">
              {industry.challenges.map((c) => (
                <li key={c.title} className="rounded-xl border border-slate-200 bg-white p-5">
                  <h3 className="font-bold text-ink">{c.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{c.detail}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="flex items-center gap-3 text-2xl font-bold tracking-tight text-ink">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-600 text-white">
                <Icon name="spark" className="h-5 w-5" />
              </span>
              How Vactera helps
            </h2>
            <ul className="mt-6 space-y-4">
              {industry.solutions.map((s) => (
                <li key={s.title} className="rounded-xl border border-brand-100 bg-white p-5">
                  <h3 className="flex items-center gap-2 font-bold text-ink">
                    <Icon name="check" className="h-5 w-5 flex-shrink-0 text-brand-600" strokeWidth={2} />
                    {s.title}
                  </h3>
                  <p className="mt-1.5 pl-7 text-sm leading-relaxed text-slate-600">{s.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Applications */}
      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">Typical applications</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {industry.applications.map((a) => (
              <div key={a} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-700">
                <Icon name="check" className="h-5 w-5 flex-shrink-0 text-brand-600" strokeWidth={2} />
                {a}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Case study */}
      <section className="bg-ink py-16 text-white sm:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">Case study</span>
              <div className="mt-4 text-5xl font-bold text-white">{industry.caseStudy.metric}</div>
              <p className="mt-3 text-sm text-slate-400">{industry.caseStudy.title}</p>
            </div>
            <blockquote className="lg:col-span-2">
              <p className="text-2xl font-medium leading-relaxed text-balance">
                &ldquo;{industry.caseStudy.quote}&rdquo;
              </p>
              <footer className="mt-5 text-sm text-slate-400">— {industry.caseStudy.author}</footer>
            </blockquote>
          </div>
        </Container>
      </section>

      {/* Recommended products */}
      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">Recommended products</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {recommended.map((p) => (
              <Link
                key={p!.slug}
                href={`/products/${p!.slug}`}
                className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-brand-300 hover:shadow-sm"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-50 text-brand-600">
                  <Icon name={p!.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-semibold text-ink group-hover:text-brand-600">{p!.name}</h3>
                <span className="mt-1 text-xs text-slate-400">{p!.family}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
