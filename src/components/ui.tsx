import Link from "next/link";
import { Icon } from "./Icon";

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "accent" | "ghost" | "outline";
  className?: string;
  withArrow?: boolean;
};

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-brand-600 text-white hover:bg-brand-700",
  accent: "bg-accent-400 text-ink hover:bg-accent-300",
  ghost: "text-white hover:bg-white/10",
  outline: "border border-white/30 text-white hover:bg-white/10",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  withArrow = false,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold tracking-wide transition-colors ${variants[variant]} ${className}`}
    >
      {children}
      {withArrow && (
        <Icon
          name="arrow"
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          strokeWidth={2}
        />
      )}
    </Link>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
      <span className="h-px w-6 bg-accent-500" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-balance ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-brand-100/80" : "text-slate-600"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-md bg-brand-600 text-white shadow-sm">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 4v8l5 3" />
        </svg>
      </span>
      <span className={`text-lg font-bold tracking-tight ${light ? "text-white" : "text-ink"}`}>
        Vac<span className="text-brand-600">tera</span>
      </span>
    </Link>
  );
}
