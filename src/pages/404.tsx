import { Container, Button } from "@/components/ui";
import { Seo } from "@/components/Seo";

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Page not found" />
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-brand-600/30 blur-3xl" />
        <Container className="relative flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
          <span className="text-7xl font-bold text-brand-400">404</span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">This page couldn&apos;t be found</h1>
          <p className="mt-4 max-w-md text-slate-300">
            The page you&apos;re looking for may have moved. Let&apos;s get you back to solid ground.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/" variant="accent" withArrow>Back to home</Button>
            <Button href="/products" variant="outline">Browse products</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
