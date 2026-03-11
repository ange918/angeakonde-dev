import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { Section } from "@/components/Section";
import { TechGrid } from "@/components/TechGrid";
import { Testimonials } from "@/components/Testimonials";
import { ContactCard } from "@/components/ContactCard";
import { TrustedStrip } from "@/components/TrustedStrip";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustedStrip />

      <Container>
        <Section id="about" title="About" eyebrow="About">
          <div className="grid gap-4 lg:grid-cols-5">
            <div className="glow-ring glass relative overflow-hidden rounded-2xl p-6 lg:col-span-3">
              <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-fuchsia-500/20 blur-[55px]" />
              <div className="relative">
                <div className="text-sm font-semibold text-white/90">
                  Ange morphism
                </div>
                <p className="muted mt-2 text-sm leading-6">
                  I design and build modern web experiences—balancing strong
                  aesthetics with performance and maintainability.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"].map(
                    (t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
                      >
                        {t}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>

            <div className="glow-ring glass grid gap-4 rounded-2xl p-6 lg:col-span-2">
              <div>
                <div className="text-sm font-semibold text-white/90">
                  Quick stats
                </div>
                <div className="muted mt-2 text-sm">
                  UI/UX • Development • Branding
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="glass rounded-xl p-3 text-center">
                  <div className="text-lg font-semibold">+30</div>
                  <div className="muted mt-1 text-xs">Projects</div>
                </div>
                <div className="glass rounded-xl p-3 text-center">
                  <div className="text-lg font-semibold">5★</div>
                  <div className="muted mt-1 text-xs">Reviews</div>
                </div>
                <div className="glass rounded-xl p-3 text-center">
                  <div className="text-lg font-semibold">24/7</div>
                  <div className="muted mt-1 text-xs">Support</div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Technologies" eyebrow="Technologies">
          <TechGrid />
        </Section>

        <Section id="projects" title="Latest creations" eyebrow="Projects">
          <ProjectsGrid />
        </Section>

        <Section title="Testimonials" eyebrow="Testimonials">
          <Testimonials />
        </Section>

        <Section id="contact" title="Contact" eyebrow="Contact">
          <ContactCard />
        </Section>

        <div id="blog" className="pb-10" />
      </Container>

      <Footer />
    </main>
  );
}
