import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Futurcraft from "@/components/Futurcraft";

export const metadata: Metadata = {
  title: "À propos — Ange Akonde | BigSixteen",
  description:
    "En savoir plus sur Ange Akonde, développeur Full Stack basé à Cotonou, Bénin. Formation, parcours, mission et valeurs.",
  alternates: {
    canonical: "https://angeakonde-dev.vercel.app/about",
  },
};

export default function AboutPage() {
  return (
    <main style={{ background: "var(--c-bg)", color: "var(--c-text)" }}>
      <Navbar />
      <div className="pt-20">
        <About />
        <Futurcraft />
      </div>
      <Footer />
    </main>
  );
}
