import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { ArticleCard, CtaBand } from "@/components/sections";
import { articles } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical engineering knowledge on vacuum, gripping, energy efficiency, automation and sustainability from the Vactera team.",
};

export default function InsightsPage() {
  const [featured, ...rest] = articles;
  const categories = [...new Set(articles.map((a) => a.category))];

  return (
    <>
      <PageHero
        image="insightEnergy"
        eyebrow="Insights"
        title="Knowledge from the vacuum experts"
        intro="Practical, no-nonsense engineering knowledge on gripping, energy efficiency, automation and sustainability — written by the people who build the technology."
      />

      <section className="border-b border-slate-200 bg-white py-6">
        <Container className="flex flex-wrap items-center gap-2">
          <span className="mr-2 text-xs font-semibold uppercase tracking-wider text-slate-400">Topics</span>
          {categories.map((c) => (
            <span key={c} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-medium text-slate-600">
              {c}
            </span>
          ))}
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mb-10">
            <ArticleCard article={featured} />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Want this expertise on your line?"
        intro="Our application engineers bring the same thinking to your specific parts, cycle times and energy goals."
      />
    </>
  );
}
