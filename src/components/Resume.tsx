import { BriefcaseBusiness, GraduationCap, Languages } from "lucide-react";
import type { Translation } from "../i18n";
import { resumeItems } from "../lib/content";

const iconByType = {
  experience: BriefcaseBusiness,
  education: GraduationCap,
  certification: GraduationCap,
  award: GraduationCap,
  volunteer: BriefcaseBusiness,
  training: GraduationCap,
};

type ResumeProps = {
  t: Translation["resume"];
};

export function Resume({ t }: ResumeProps) {
  return (
    <section id="resume" className="section-pad resume-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">{t.kicker}</p>
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>
        <div className="resume-grid">
          <div className="timeline">
            {resumeItems.map((item) => {
              const Icon = iconByType[item.type] ?? BriefcaseBusiness;
              const translated = t.items[item.id as keyof typeof t.items];
              const title = translated?.title ?? item.title;
              const period = translated?.period ?? item.period;
              const organization = translated?.organization ?? item.organization;
              const description = translated?.description ?? item.description;
              const highlights = translated?.highlights ?? item.highlights;

              return (
                <article className="card timeline-card" key={item.id}>
                  <div className="timeline-icon">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="period">{period}</p>
                    <h3>{title}</h3>
                    <p className="organization">{organization}</p>
                    {description ? <p>{description}</p> : null}
                    <ul>
                      {highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
          <aside className="card language-card">
            <div className="timeline-icon">
              <Languages size={18} />
            </div>
            <h3>{t.languagesTitle}</h3>
            <div className="language-list">
              {t.languageRows.map((language) => (
                <div key={language.label}>
                  <span>{language.label}</span>
                  <strong>{language.value}</strong>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
