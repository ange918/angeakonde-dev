import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Futurcraft from "@/components/Futurcraft";

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
