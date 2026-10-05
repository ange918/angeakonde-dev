import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectView } from "@/components/portfolio/ProjectView";
import { getProject, projects } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Projet" };
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `https://angeakonde-dev.vercel.app/projets/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <ProjectView project={project} />;
}
