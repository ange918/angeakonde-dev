import type { Metadata } from "next";
import { ProjectsIndex } from "@/components/portfolio/ProjectView";

export const metadata: Metadata = {
  title: "Réalisations",
  description: "Projets livrés par Ange Akonde : O’School, OCD App, FASHLINK, Zeno Finanzen, Africa Fashion Awards, ProAfrik.",
  alternates: { canonical: "https://angeakonde-dev.vercel.app/projets" },
};

export default function ProjectsPage() {
  return <ProjectsIndex />;
}
