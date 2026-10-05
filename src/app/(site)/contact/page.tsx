import type { Metadata } from "next";
import { ContactView } from "@/components/portfolio/ContactView";

export const metadata: Metadata = {
  title: "Contact",
  description: "Parlons de votre projet. Message ou WhatsApp — réponse sous 24h. Ange Akonde, Cotonou.",
  alternates: { canonical: "https://angeakonde-dev.vercel.app/contact" },
};

export default function ContactPage() {
  return <ContactView />;
}
