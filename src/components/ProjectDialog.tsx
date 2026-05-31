import { ExternalLink, X } from "lucide-react";
import { useEffect } from "react";
import type { Translation } from "../i18n";
import type { Project } from "../types";

type ProjectDialogProps = {
  project: Project;
  onClose: () => void;
  t: Translation["dialog"];
};

export function ProjectDialog({ project, onClose, t }: ProjectDialogProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.classList.add("modal-open");

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("modal-open");
    };
  }, [onClose]);

  return (
    <div className="dialog-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="project-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="icon-button dialog-close" type="button" onClick={onClose} aria-label={t.close}>
          <X size={20} />
        </button>
        <p className="section-kicker">{project.category}</p>
        <h2 id="project-dialog-title">{project.title}</h2>
        <p className="dialog-summary">{project.summary}</p>
        <div className="dialog-grid">
          <DetailBlock title={t.problem} items={project.problem ? [project.problem] : []} />
          <DetailBlock title={t.features} items={project.features} />
          <DetailBlock title={t.technical} items={project.technicalImplementation} />
          <DetailBlock title={t.benefits} items={project.benefits} />
        </div>
        <div className="dialog-stack">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        {project.links.length ? (
          <div className="dialog-links">
            {project.links.map((link) => (
              <a className="btn btn-glass" href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                {link.label} <ExternalLink size={16} />
              </a>
            ))}
          </div>
        ) : null}
      </section>
    </div>
  );
}

function DetailBlock({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null;

  return (
    <div className="detail-block">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
