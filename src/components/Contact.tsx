import { Github, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import type { Translation } from "../i18n";

type ContactProps = {
  profile: {
    name: string;
    email: string;
    phone: string;
    links: {
      github: string;
      linkedin: string;
      whatsapp: string;
      email: string;
    };
  };
  t: Translation["contact"];
};

export function Contact({ profile, t }: ContactProps) {
  return (
    <section id="contact" className="section-pad contact-section">
      <div className="container contact-wrap">
        <div className="contact-card">
          <p className="section-kicker">{t.kicker}</p>
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
          <div className="contact-list">
            <span>
              <Mail size={16} /> {profile.email}
            </span>
            <span>
              <Phone size={16} /> {profile.phone}
            </span>
          </div>
          <div className="contact-links">
            <a className="btn btn-primary" href={profile.links.email}>
              <Mail size={18} /> {t.emailMe}
            </a>
            <a className="btn btn-glass" href={profile.links.github} target="_blank" rel="noreferrer">
              <Github size={18} /> GitHub
            </a>
            <a className="btn btn-glass" href={profile.links.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a className="btn btn-glass" href={profile.links.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle size={18} /> {t.whatsapp}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
