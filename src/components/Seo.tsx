import Head from "next/head";
import { company } from "@/lib/data";

export function Seo({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  const fullTitle = title ? `${title} | ${company.name}` : `${company.name} — ${company.tagline}`;
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description ?? company.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}
