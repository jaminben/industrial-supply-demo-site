import Link from "next/link";
import { company, products, industries } from "@/lib/data";
import { Icon } from "./Icon";
import { Container, Logo } from "./ui";

export function Footer() {
  return (
    <footer className="mt-auto bg-ink text-slate-300">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo light />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              {company.description}
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a href={`mailto:${company.email}`} className="flex items-center gap-2 hover:text-white">
                <Icon name="mail" className="h-4 w-4 text-brand-400" /> {company.email}
              </a>
              <a href={`tel:${company.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-2 hover:text-white">
                <Icon name="phone" className="h-4 w-4 text-brand-400" /> {company.phone}
              </a>
              <p className="flex items-center gap-2 text-slate-400">
                <Icon name="pin" className="h-4 w-4 text-brand-400" /> {company.address}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Products</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link href={`/products/${p.slug}`} className="text-slate-400 hover:text-white">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Industries</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {industries.map((i) => (
                <li key={i.slug}>
                  <Link href="/industries" className="text-slate-400 hover:text-white">
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/about" className="text-slate-400 hover:text-white">About us</Link></li>
              <li><Link href="/sustainability" className="text-slate-400 hover:text-white">Sustainability</Link></li>
              <li><Link href="/insights" className="text-slate-400 hover:text-white">Insights</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved. This is a fictional
            demonstration site.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-slate-300">Privacy</Link>
            <Link href="#" className="hover:text-slate-300">Terms</Link>
            <Link href="#" className="hover:text-slate-300">Cookies</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
