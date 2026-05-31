import { ArrowUpRight, Code2, GitFork, Star } from "lucide-react";
import type { CSSProperties } from "react";
import type { Translation } from "../i18n";
import type { Project } from "../types";

type ProjectsProps = {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  t: Translation["projects"];
};

export function Projects({ projects, onSelectProject, t }: ProjectsProps) {
  return (
    <section id="projects" className="section-pad projects-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">{t.kicker}</p>
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className="card project-card"
              key={project.id}
              style={{ "--delay": `${index * 55}ms` } as CSSProperties}
            >
              <div className="card-icon">
                <Code2 size={22} />
              </div>
              <div className="project-card-top">
                <div>
                  <p className="project-source">{project.source === "github" ? t.githubRepo : project.category}</p>
                  <h3>{project.shortTitle}</h3>
                </div>
                {project.source === "github" ? <span className="auto-badge">{t.auto}</span> : null}
              </div>
              <p className="project-summary">{project.summary}</p>
              <div className="tag-row">
                {project.stack.slice(0, 4).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-meta">
                {typeof project.stars === "number" ? (
                  <span>
                    <Star size={14} /> {project.stars}
                  </span>
                ) : null}
                {typeof project.forks === "number" ? (
                  <span>
                    <GitFork size={14} /> {project.forks}
                  </span>
                ) : null}
              </div>
              <div className="project-footer">
                <button className="text-button" type="button" onClick={() => onSelectProject(project)}>
                  {t.viewCaseStudy} <ArrowUpRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
