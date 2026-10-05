import type { Metadata } from "next";
import { AboutView } from "@/components/portfolio/AboutView";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Ange Akonde, développeur full-stack et formateur à Cotonou. BigSixTeen / JRC DIGIT — Next.js, TypeScript, Tailwind, Supabase.",
  alternates: { canonical: "https://angeakonde-dev.vercel.app/a-propos" },
};

export default function AboutPage() {
  return <AboutView />;
}
