import type { MetadataRoute } from "next";
import { projects } from "@/lib/site";

const site = "https://angeakonde-dev.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${site}/a-propos`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site}/projets`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...projects.map((project) => ({
      url: `${site}/projets/${project.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
