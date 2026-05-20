import { Container, SectionHeading } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { Seo } from "@/components/Seo";
import { ProductCard, CtaBand } from "@/components/sections";
import { Icon } from "@/components/Icon";
import { products } from "@/lib/data";

export default function ProductsPage() {
  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <>
      <Seo
        title="Products"
        description="Vacuum pumps, suction cups, robotic gripping, conveying, soft grippers, smart vacuum and ergonomic lifting systems."
      />
      <PageHero
        image="vacuumPumps"
        eyebrow="Products"
        title="Vacuum technology for every grip point"
        intro="Seven product families that share one philosophy: maximum reliability and minimum energy. Mix and match to build the exact gripping, moving and lifting solution your line needs."
      />

      <section className="border-b border-slate-200 bg-white py-6">
        <Container className="flex flex-wrap items-center gap-2">
          <span className="mr-2 text-xs font-semibold uppercase tracking-wider text-slate-400">Categories</span>
          {categories.map((c) => (
            <span key={c} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-medium text-slate-600">
              {c}
            </span>
          ))}
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* Engineering support band */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Application engineering"
            title="Send us your part — we'll design the grip"
            intro="Choosing between families is easier with help. Our engineers validate cycle time, hold force and reliability on your real components before you commit to anything."
          />
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              "Free application review",
              "Grip & cycle-time validation",
              "Energy-savings estimate",
              "CAD models & integration support",
            ].map((s) => (
              <li key={s} className="flex items-start gap-3 rounded-xl bg-white p-4 text-sm font-medium text-slate-700 ring-1 ring-slate-100">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" strokeWidth={2} />
                {s}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
