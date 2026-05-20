import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/data";
import type { Article } from "@/lib/insights";
import { img } from "@/lib/images";
import { Icon } from "./Icon";
import { Button, Container } from "./ui";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-900/5"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <Image
          src={img[product.image]}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-lg bg-white/90 text-brand-600 backdrop-blur">
          <Icon name={product.icon} className="h-5 w-5" />
        </span>
        <span className="absolute bottom-3 left-4 text-xs font-semibold uppercase tracking-wider text-white/90">
          {product.family}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          {product.category}
        </span>
        <h3 className="mt-1 text-lg font-bold text-ink">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{product.summary}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
          Explore
          <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
        </span>
      </div>
    </Link>
  );
}

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/insights/${article.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-900/5"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
        <Image
          src={img[article.image]}
          alt={article.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-600 backdrop-blur">
          {article.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span>{formatDate(article.date)}</span>
          <span>·</span>
          <span>{article.readTime}</span>
        </div>
        <h3 className="mt-2 text-lg font-bold leading-snug text-ink group-hover:text-brand-600">
          {article.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{article.excerpt}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
          Read article
          <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
        </span>
      </div>
    </Link>
  );
}

export function CtaBand({
  title = "Let's engineer your grip.",
  intro = "Tell us about your parts and cycle times. Our application engineers will recommend — and validate — the right vacuum solution.",
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-700">
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-400/20 blur-3xl" />
      <Container className="relative py-16 sm:py-20">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">{title}</h2>
            <p className="mt-4 text-base leading-relaxed text-brand-100">{intro}</p>
          </div>
          <div className="flex flex-shrink-0 flex-wrap gap-3">
            <Button href="/contact" variant="accent" withArrow>
              Request a quote
            </Button>
            <Button href="/products" variant="outline">
              Browse products
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function formatDate(date: string): string {
  return new Date(date + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
