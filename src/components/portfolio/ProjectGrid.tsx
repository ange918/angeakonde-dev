"use client";

import { projects } from "@/lib/site";
import { ArrowIcon } from "./icons";
import { RiseLink, Stagger } from "./ui";

export function ProjectGrid() {
  return (
    <Stagger className="g2">
      {projects.map((project) => (
        <RiseLink
          key={project.slug}
          href={`/projets/${project.slug}`}
          className="card project-card"
          dataMotion="project-card"
        >
          <span className="viz" style={{ background: project.gradient }} />
          <div>
            <span className="tag tag-green" data-motion="project-tag">
              {project.category}
            </span>
          </div>
          <div className="project-foot">
            <div>
              <h3 className="project-title">{project.title}</h3>
              <div className="tag-row">
                {project.stack.slice(0, 3).map((tag) => (
                  <span key={tag} className="tag" data-motion="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <span className="arrow-btn">
              <ArrowIcon />
            </span>
          </div>
        </RiseLink>
      ))}
    </Stagger>
  );
}
