import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ange Akonde | BigSixteen — Développeur Full Stack Cotonou Bénin",
  description:
    "Ange Akonde, développeur Full Stack basé à Cotonou, Bénin. Je crée des sites web modernes, applications mobiles Flutter et solutions digitales pour entreprises africaines et internationales.",
  keywords: [
    "développeur web Cotonou",
    "développeur full stack Bénin",
    "BigSixteen",
    "Ange Akonde",
    "création site web Bénin",
    "développeur React Next.js Afrique",
    "application mobile Flutter Bénin",
    "agence digitale Cotonou",
    "développeur web Afrique de l'Ouest",
    "freelance développeur web Bénin",
  ],
  authors: [{ name: "Ange Akonde", url: "https://angeakonde-dev.vercel.app" }],
  creator: "Ange Akonde",
  publisher: "Ange Akonde",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://angeakonde-dev.vercel.app",
    title: "Ange Akonde | BigSixteen — Développeur Full Stack Cotonou Bénin",
    description:
      "Développeur Full Stack basé à Cotonou, Bénin. Sites web, apps mobiles et solutions digitales pour l'Afrique et au-delà.",
    siteName: "Ange Akonde — BigSixteen",
    images: [
      {
        url: "https://angeakonde-dev.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ange Akonde — Développeur Full Stack Cotonou Bénin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ange Akonde | BigSixteen — Développeur Full Stack",
    description:
      "Développeur Full Stack basé à Cotonou, Bénin. Sites web, apps mobiles et solutions digitales.",
    images: ["https://angeakonde-dev.vercel.app/og-image.png"],
    creator: "@bigsixteen",
  },
  alternates: {
    canonical: "https://angeakonde-dev.vercel.app",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ange Akonde",
  alternateName: "BigSixteen",
  url: "https://angeakonde-dev.vercel.app",
  image: "https://angeakonde-dev.vercel.app/photo-ange.jpg",
  jobTitle: "Développeur Full Stack",
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cotonou",
    addressCountry: "BJ",
  },
  email: "akondejunior18@gmail.com",
  telephone: "+22965291352",
  sameAs: [
    "https://github.com/ange918",
    "https://linkedin.com/in/ange-akonde",
  ],
  knowsAbout: [
    "Développement Web",
    "React",
    "Next.js",
    "Node.js",
    "Flutter",
    "TypeScript",
    "Tailwind CSS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${inter.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <GoogleAnalytics />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
