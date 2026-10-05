import { Footer, Navbar, WhatsAppFab } from "@/components/portfolio/Chrome";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bg-glow" aria-hidden />
      <Navbar />
      {children}
      <Footer />
      <WhatsAppFab />
    </>
  );
}
