import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { display, mono } from "../fonts";
import { CONTENT, LANGS, isLang } from "@/lib/content";
import "../globals.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map(lang => ({ lang }));
}

// URL publique du site (GitHub Pages), sans "/" final
const siteUrl = process.env.SITE_URL ?? "https://guillaumeducuing.github.io/wasntme-privacy";

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const t = CONTENT[lang];
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: {
      canonical: `${siteUrl}/${lang}/`,
      languages: Object.fromEntries(LANGS.map(l => [l, `${siteUrl}/${l}/`]))
    },
    openGraph: { title: t.metaTitle, description: t.metaDescription, type: "website" }
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" }
  ]
};

export default async function LangLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <html lang={lang} className={`${display.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
