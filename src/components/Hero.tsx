import { ArrowRight, BadgeCheck, Download, Github, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import type { Translation } from "../i18n";

type HeroProps = {
  profile: {
    name: string;
    initials: string;
    links: {
      github: string;
      whatsapp: string;
    };
    cvUrl: string;
    stats: Array<{ value: string; label: string }>;
  };
  t: Translation["hero"];
  statsLabels: string[];
};

export function Hero({ profile, t, statsLabels }: HeroProps) {
  const typedRole = useTypewriter(t.roles);

  return (
    <section id="home" className="hero section-pad">
      <div className="container hero-inner">
        <div className="status-pill reveal visible">
          <span className="status-dot" />
          {t.status}
        </div>
        <div className="avatar-orbit reveal reveal-delay-1 visible" aria-label={profile.name}>
          <div className="avatar">{profile.initials}</div>
        </div>
        <div className="hero-copy">
          <h1 className="reveal reveal-delay-2 visible">
            {profile.name}
            <span className="verified-mark" aria-label={t.verified}>
              <BadgeCheck size={34} />
            </span>
          </h1>
          <p className="rotating-role reveal reveal-delay-3 visible" aria-live="polite">
            <span>{typedRole}</span>
            <span className="type-caret" aria-hidden="true" />
          </p>
          <p className="hero-lead reveal reveal-delay-4 visible">{t.bio}</p>
          <div className="hero-ctas reveal reveal-delay-5 visible">
            <a className="btn btn-primary" href="#projects">
              {t.viewProjects} <ArrowRight size={18} />
            </a>
            <a className="btn btn-glass" href={profile.links.github} target="_blank" rel="noreferrer">
              <Github size={18} /> {t.github}
            </a>
            <a className="btn btn-glass" href={profile.links.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle size={18} /> {t.whatsapp}
            </a>
            {profile.cvUrl ? (
              <a className="btn btn-ghost" href={profile.cvUrl}>
                <Download size={18} /> {t.cv}
              </a>
            ) : null}
          </div>
          <div className="hero-stats reveal reveal-delay-5 visible" aria-label="Portfolio stats">
            {profile.stats.map((stat, index) => (
              <div key={stat.label} className="stat-item">
                <strong>{stat.value}</strong>
                <span>{statsLabels[index] ?? stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function useTypewriter(words: string[]) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setWordIndex(0);
    setText("");
    setIsDeleting(false);
  }, [words]);

  useEffect(() => {
    const currentWord = words[wordIndex] ?? "";
    const isWordComplete = !isDeleting && text === currentWord;
    const isWordDeleted = isDeleting && text === "";
    const delay = isWordComplete ? 1250 : isDeleting ? 28 : 48;

    const timeout = window.setTimeout(() => {
      if (isWordComplete) {
        setIsDeleting(true);
        return;
      }

      if (isWordDeleted) {
        setIsDeleting(false);
        setWordIndex((current) => (current + 1) % words.length);
        return;
      }

      const nextLength = text.length + (isDeleting ? -1 : 1);
      setText(currentWord.slice(0, nextLength));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [isDeleting, text, wordIndex, words]);

  return text;
}
