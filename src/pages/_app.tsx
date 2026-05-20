import type { AppProps } from "next/app";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OlarkChat } from "@/components/OlarkChat";
import { Seo } from "@/components/Seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col font-sans`}>
      <Seo />
      <Header />
      <main className="flex-1">
        <Component {...pageProps} />
      </main>
      <Footer />
      <OlarkChat />
    </div>
  );
}
