import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { Seo } from "@/components/Seo";
import { Icon } from "@/components/Icon";
import { CtaBand } from "@/components/sections";
import { industries } from "@/lib/data";
import { img } from "@/lib/images";

export default function IndustriesPage() {
  return (
    <>
      <Seo
        title="Industries"
        description="Application-engineered vacuum handling for automotive, food & beverage, packaging & logistics, pharma, electronics and print."
      />
      <PageHero
        image="heroFactory"
        eyebrow="Industries"
        title="Proven where it matters most"
        intro="Five decades of application engineering across the industries that move the world. Explore how Vactera goes to work in yours."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-900/5"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={img[ind.image]}
                    alt={ind.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2.5">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/90 text-brand-600 backdrop-blur">
                      <Icon name={ind.icon} className="h-5 w-5" />
                    </span>
                    <h2 className="text-lg font-bold text-white">{ind.name}</h2>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="flex-1 text-sm leading-relaxed text-slate-600">{ind.blurb}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                    Explore solutions
                    <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Have a tricky handling problem?"
        intro="Odd geometries, fragile surfaces, washdown environments — these are exactly the challenges our engineers enjoy. Let's solve yours."
      />
    </>
  );
}
