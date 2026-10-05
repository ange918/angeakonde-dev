import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = "https://angeakonde-dev.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ange Akonde | BigSixTeen — Développeur full-stack à Cotonou",
    template: "%s · Ange Akonde",
  },
  description:
    "Ange Akonde (BigSixTeen / JRC DIGIT), développeur full-stack et formateur à Cotonou. Sites, applications et plateformes sur mesure.",
  keywords: [
    "développeur web Cotonou",
    "développeur full stack Bénin",
    "BigSixTeen",
    "JRC DIGIT",
    "Ange Akonde",
    "création site web Bénin",
    "Next.js",
    "freelance développeur web Bénin",
  ],
  authors: [{ name: "Ange Akonde", url: siteUrl }],
  creator: "Ange Akonde",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    title: "Ange Akonde | BigSixTeen — Développeur full-stack",
    description:
      "Sites et applications sur mesure, pensés pour votre croissance. Cotonou, Bénin.",
    siteName: "Ange Akonde — BigSixTeen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ange Akonde | BigSixTeen",
    description: "Développeur full-stack à Cotonou. Sites, apps et plateformes sur mesure.",
  },
  alternates: { canonical: siteUrl },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ange Akonde",
  alternateName: ["BigSixTeen", "JRC DIGIT"],
  url: siteUrl,
  jobTitle: "Développeur full-stack",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cotonou",
    addressCountry: "BJ",
  },
  email: "ange@jrcdigit.com",
  telephone: "+22965291352",
  sameAs: ["https://github.com/ange918", "https://linkedin.com/in/ange-akonde"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${syne.variable} ${manrope.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="antialiased">
        {children}
        <GoogleAnalytics />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
