import type { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui";
import { Seo } from "@/components/Seo";
import { Icon } from "@/components/Icon";
import { ArticleCard, CtaBand, formatDate } from "@/components/sections";
import { articles, getArticle } from "@/lib/insights";
import { img } from "@/lib/images";

export const getStaticPaths: GetStaticPaths = () => ({
  paths: articles.map((a) => ({ params: { slug: a.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<{ slug: string }> = ({ params }) => {
  const slug = params?.slug as string;
  if (!getArticle(slug)) return { notFound: true };
  return { props: { slug } };
};

export default function ArticlePage({ slug }: { slug: string }) {
  const article = getArticle(slug)!;
  const more = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <Seo title={article.title} description={article.excerpt} />
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <Image src={img[article.image]} alt="" fill priority sizes="100vw" className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/85 to-ink" />
        <Container className="relative py-16 sm:py-20">
          <nav className="flex items-center gap-2 text-sm text-slate-400">
            <Link href="/insights" className="hover:text-white">Insights</Link>
            <span>/</span>
            <span className="text-slate-300">{article.category}</span>
          </nav>
          <div className="mt-6 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-200">
              <Icon name={article.icon} className="h-4 w-4" /> {article.category}
            </span>
            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-balance">
              {article.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-400">
              <span className="font-medium text-slate-300">{article.author}</span>
              <span>·</span>
              <span>{formatDate(article.date)}</span>
              <span>·</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Body */}
      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <p className="text-lg font-medium leading-relaxed text-slate-700">{article.excerpt}</p>
            <div className="mt-8 space-y-10">
              {article.body.map((section) => (
                <div key={section.heading}>
                  <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{section.heading}</h2>
                  <div className="mt-3 space-y-4">
                    {section.paragraphs.map((p, i) => (
                      <p key={i} className="leading-relaxed text-slate-600">{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Key takeaways</h3>
              <ul className="mt-4 space-y-3">
                {article.takeaways.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-slate-700">
                    <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" strokeWidth={2} />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-slate-200 pt-5">
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700">
                  Talk to an engineer
                  <Icon name="arrow" className="h-4 w-4" strokeWidth={2} />
                </Link>
              </div>
            </div>
          </aside>
        </Container>
      </section>

      {/* More articles */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight text-ink">More insights</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
