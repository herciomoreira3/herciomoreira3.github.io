import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Github, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { ProjectDialog } from "./components/ProjectDialog";
import { Projects } from "./components/Projects";
import { Resume } from "./components/Resume";
import { TechStack } from "./components/TechStack";
import { Toolbox } from "./components/Toolbox";
import { profile } from "./data/profile";
import { languageOptions, translations, type LanguageCode } from "./i18n";
import { getPortfolioProjects } from "./lib/github";
import type { Project } from "./types";

const navIds = ["home", "projects", "resume", "tools", "contact"] as const;

function getInitialLanguage(): LanguageCode {
  const saved = window.localStorage.getItem("portfolio-language") as LanguageCode | null;
  if (saved && saved in translations) return saved;
  if (navigator.language.toLowerCase().startsWith("id")) return "id";
  return "en";
}

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const activeSectionRef = useRef<(typeof navIds)[number]>("home");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [language, setLanguage] = useState<LanguageCode>(getInitialLanguage);
  const t = translations[language];
  const projects = useMemo(() => getPortfolioProjects(), []);
  const heroProfile = useMemo(
    () => ({
      ...profile,
      stats: profile.stats.map((stat, index) =>
        index === 0 ? { ...stat, value: projects.length.toString() } : stat,
      ),
    }),
    [projects.length],
  );
  const navItems = useMemo(
    () => navIds.map((id) => ({ id, label: t.nav[id] })),
    [t.nav],
  );

  useEffect(() => {
    let frame = 0;
    let settleTimer = 0;

    const updateActiveSection = () => {
      let current: (typeof navIds)[number] = navIds[0];
      let bestVisibleArea = 0;

      for (const id of navIds) {
        const section = document.getElementById(id);
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        const visibleTop = Math.max(rect.top, 0);
        const visibleBottom = Math.min(rect.bottom, window.innerHeight);
        const visibleArea = Math.max(0, visibleBottom - visibleTop);

        if (visibleArea > bestVisibleArea) {
          bestVisibleArea = visibleArea;
          current = id;
        }
      }

      const pageBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8;
      const nextSection = pageBottom ? navIds[navIds.length - 1] : current;
      if (activeSectionRef.current !== nextSection) {
        activeSectionRef.current = nextSection;
        setActiveSection(nextSection);
      }
    };

    const onScroll = () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(settleTimer);
      frame = window.requestAnimationFrame(updateActiveSection);
      settleTimer = window.setTimeout(updateActiveSection, 140);
    };

    const syncHashSection = () => {
      const id = window.location.hash.slice(1);
      const section = id ? document.getElementById(id) : null;
      if (section) {
        section.scrollIntoView({ block: "start", behavior: "auto" });
      }
      onScroll();
    };

    updateActiveSection();
    settleTimer = window.setTimeout(window.location.hash ? syncHashSection : updateActiveSection, 250);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("hashchange", syncHashSection);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(settleTimer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", syncHashSection);
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("portfolio-language", language);
  }, [language]);

  return (
    <>
      <div className="bg-canvas" aria-hidden="true" />
      <Nav
        items={navItems}
        activeSection={activeSection}
        language={language}
        languages={languageOptions}
        onLanguageChange={setLanguage}
      />
      <main>
        <Hero profile={heroProfile} t={t.hero} statsLabels={t.stats} />
        <TechStack t={t.tech} />
        <Projects projects={projects} onSelectProject={setSelectedProject} t={t.projects} />
        <Resume t={t.resume} />
        <Toolbox t={t.toolbox} language={language} />
        <Contact profile={profile} t={t.contact} />
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <p>(c) 2026 {profile.name}. {t.footer.rights}</p>
          <p>{t.footer.built}</p>
        </div>
      </footer>
      <a className="floating-contact" href={profile.links.whatsapp} aria-label="Contact on WhatsApp">
        <MessageCircle size={22} />
      </a>
      {selectedProject ? (
        <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} t={t.dialog} />
      ) : null}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: profile.name,
            jobTitle: profile.displayRole,
            email: profile.email,
            telephone: profile.phone,
            url: window.location.origin,
            sameAs: [profile.links.github, profile.links.linkedin],
          }),
        }}
      />
    </>
  );
}

export const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  phone: Phone,
  arrow: ArrowRight,
};
