import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="h-full">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-white text-ink antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
