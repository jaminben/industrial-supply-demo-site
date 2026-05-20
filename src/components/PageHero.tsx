import Image from "next/image";
import Link from "next/link";
import { img, type ImageKey } from "@/lib/images";
import { Container, Eyebrow } from "./ui";

export function PageHero({
  image,
  eyebrow,
  title,
  intro,
  breadcrumb,
  children,
}: {
  image: ImageKey;
  eyebrow?: string;
  title: string;
  intro?: string;
  breadcrumb?: { label: string; href?: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <Image
        src={img[image]}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <Container className="relative py-16 sm:py-24">
        {breadcrumb && (
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-400">
            {breadcrumb.map((b, i) => (
              <span key={b.label} className="flex items-center gap-2">
                {b.href ? (
                  <Link href={b.href} className="hover:text-white">{b.label}</Link>
                ) : (
                  <span className="text-slate-300">{b.label}</span>
                )}
                {i < breadcrumb.length - 1 && <span>/</span>}
              </span>
            ))}
          </nav>
        )}
        <div className="max-w-3xl">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl text-balance">
            {title}
          </h1>
          {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">{intro}</p>}
          {children}
        </div>
      </Container>
    </section>
  );
}
