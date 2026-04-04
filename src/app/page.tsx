import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Statistics from "@/components/Statistics";
import ProcessSteps from "@/components/ProcessSteps";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import CTAWhatsApp from "@/components/CTAWhatsApp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ background: "var(--c-bg)", color: "var(--c-text)" }}>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Skills />
      <Statistics />
      <ProcessSteps />
      <FAQ />
      <Testimonials />
      <CTAWhatsApp />
      <Footer />
    </main>
  );
}
