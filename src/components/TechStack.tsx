import { skills } from "../data/skills";
import type { Translation } from "../i18n";
import { Icon } from "./Icon";

type TechStackProps = {
  t: Translation["tech"];
};

export function TechStack({ t }: TechStackProps) {
  return (
    <section className="stack-section" aria-labelledby="stack-title">
      <div className="container">
        <p className="section-kicker">{t.kicker}</p>
        <div className="stack-scroll" id="stack-title">
          {skills
            .slice()
            .sort((a, b) => a.priority - b.priority)
            .map((skill) => (
              <span className="skill-chip" key={skill.id}>
                <Icon name={skill.icon} />
                {skill.label}
              </span>
            ))}
        </div>
      </div>
    </section>
  );
}
