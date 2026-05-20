import type { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container, Button } from "@/components/ui";
import { Seo } from "@/components/Seo";
import { Icon } from "@/components/Icon";
import { CtaBand } from "@/components/sections";
import { FaqAccordion } from "@/components/FaqAccordion";
import { products, getProduct, getIndustry } from "@/lib/data";
import { img } from "@/lib/images";

export const getStaticPaths: GetStaticPaths = () => ({
  paths: products.map((p) => ({ params: { slug: p.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<{ slug: string }> = ({ params }) => {
  const slug = params?.slug as string;
  if (!getProduct(slug)) return { notFound: true };
  return { props: { slug } };
};

export default function ProductDetailPage({ slug }: { slug: string }) {
  const product = getProduct(slug)!;
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);
  const segments = product.segments.map(getIndustry).filter(Boolean);

  return (
    <>
      <Seo title={product.name} description={product.summary} />
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <Image src={img[product.image]} alt="" fill priority sizes="100vw" className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/50" />
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <Container className="relative py-14 sm:py-20">
          <nav className="flex items-center gap-2 text-sm text-slate-400">
            <Link href="/products" className="hover:text-white">Products</Link>
            <span>/</span>
            <span className="text-slate-300">{product.name}</span>
          </nav>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-200">
                <Icon name={product.icon} className="h-4 w-4" /> {product.family}
              </span>
              <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
                {product.name}
              </h1>
              <p className="mt-3 text-lg font-medium text-brand-300">{product.tagline}</p>
              <p className="mt-5 max-w-xl leading-relaxed text-slate-300">{product.summary}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact" variant="accent" withArrow>Request a quote</Button>
                <Button href="/contact" variant="outline">Download datasheet</Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={img[product.image]}
                  alt={product.name}
                  width={800}
                  height={600}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Overview */}
      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">Overview</h2>
            <div className="mt-5 space-y-4">
              {product.overview.map((p, i) => (
                <p key={i} className="leading-relaxed text-slate-600">{p}</p>
              ))}
            </div>
          </div>
          <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">At a glance</h3>
            <dl className="mt-4 space-y-3">
              {product.specs.slice(0, 4).map((s) => (
                <div key={s.label} className="flex justify-between gap-4 text-sm">
                  <dt className="text-slate-500">{s.label}</dt>
                  <dd className="text-right font-semibold text-ink">{s.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 border-t border-slate-200 pt-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Product family</p>
              <p className="mt-1 font-bold text-brand-600">{product.family}</p>
            </div>
          </aside>
        </Container>
      </section>

      {/* Benefits */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">Key benefits</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {product.benefits.map((b) => (
              <div key={b.title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-brand-600 text-white">
                  <Icon name={b.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-base font-bold text-ink">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">How it works</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {product.howItWorks.map((step, i) => (
              <li key={step.title} className="relative rounded-xl border border-slate-200 bg-white p-6">
                <span className="text-3xl font-bold text-brand-100">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.detail}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Series + Specs */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-ink">Product series</h2>
            <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-100 text-xs uppercase tracking-wider text-slate-500">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Series</th>
                    <th className="px-5 py-3 font-semibold">Best for</th>
                    <th className="px-5 py-3 text-right font-semibold">Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {product.series.map((s) => (
                    <tr key={s.name}>
                      <td className="px-5 py-4 font-bold text-ink">{s.name}</td>
                      <td className="px-5 py-4 text-slate-600">{s.description}</td>
                      <td className="px-5 py-4 text-right font-semibold text-brand-600">{s.spec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-ink">Technical specifications</h2>
            <dl className="mt-6 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
              {product.specs.map((s) => (
                <div key={s.label} className="flex items-center justify-between px-5 py-3.5">
                  <dt className="text-sm font-medium text-slate-500">{s.label}</dt>
                  <dd className="text-sm font-semibold text-ink">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* Applications + Documents */}
      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight text-ink">Typical applications</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {product.applications.map((a) => (
                <li key={a} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-medium text-slate-700">
                  <Icon name="check" className="h-5 w-5 flex-shrink-0 text-brand-600" strokeWidth={2} />
                  {a}
                </li>
              ))}
            </ul>

            {segments.length > 0 && (
              <div className="mt-10">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Industries served</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {segments.map((s) => (
                    <Link
                      key={s!.slug}
                      href={`/industries/${s!.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-medium text-slate-700 hover:border-brand-300 hover:text-brand-600"
                    >
                      <Icon name={s!.icon} className="h-4 w-4" /> {s!.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-ink">Documents</h2>
            <ul className="mt-6 space-y-3">
              {product.documents.map((d) => (
                <li key={d.name}>
                  <a
                    href="#"
                    className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 transition-colors hover:border-brand-300"
                  >
                    <Icon name="doc" className="h-5 w-5 flex-shrink-0 text-brand-600" />
                    <span className="flex-1 text-sm font-medium text-ink">{d.name}</span>
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-500">{d.type}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">Frequently asked questions</h2>
          <div className="mt-8">
            <FaqAccordion faqs={product.faqs} />
          </div>
        </Container>
      </section>

      {/* Related */}
      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight text-ink">Related products</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-brand-300 hover:shadow-sm"
              >
                <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600">
                  <Icon name={p.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-semibold text-ink group-hover:text-brand-600">{p.name}</h3>
                  <span className="text-xs text-slate-400">{p.family}</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
