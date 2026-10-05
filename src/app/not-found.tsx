import Link from "next/link";
import { Footer, Navbar, WhatsAppFab } from "@/components/portfolio/Chrome";

export default function NotFound() {
  return (
    <>
      <div className="bg-glow" aria-hidden />
      <Navbar />
      <main className="not-found">
        <div>
          <p className="eyebrow">404</p>
          <h1 className="display">Page introuvable</h1>
          <p>Ce lien ne mène nulle part. Revenons à l’accueil.</p>
          <Link className="btn btn-primary" href="/">
            Retour à l’accueil
          </Link>
        </div>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
