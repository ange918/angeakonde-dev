import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import PhotoProfile from "@/components/PhotoProfile";
import ProcessSteps from "@/components/ProcessSteps";
import Testimonials from "@/components/Testimonials";
import Futurcraft from "@/components/Futurcraft";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Address from "@/components/Address";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ background: "var(--c-bg)", color: "var(--c-text)" }}>
      <Navbar />
      <Hero />
      <About />
      <Futurcraft />
      <Skills />
      <Projects />
      <PhotoProfile />
      <ProcessSteps />
      <Testimonials />
      <FAQ />
      <Contact />
      <Address />
      <Footer />
    </main>
  );
}
