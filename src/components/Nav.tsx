import type { LanguageCode } from "../i18n";

type NavItem = {
  id: string;
  label: string;
};

type NavProps = {
  items: NavItem[];
  activeSection: string;
  language: LanguageCode;
  languages: readonly { code: LanguageCode; label: string; short: string }[];
  onLanguageChange: (language: LanguageCode) => void;
};

export function Nav({ items, activeSection, language, languages, onLanguageChange }: NavProps) {
  return (
    <>
      <nav className="site-nav" aria-label="Primary navigation">
        <div className="nav-inner">
          {items.map((item) => (
            <a
              key={item.id}
              className={activeSection === item.id ? "nav-link active" : "nav-link"}
              href={`#${item.id}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
      <div className="language-switch" aria-label="Select language">
        {languages.map((item) => (
          <button
            key={item.code}
            className={language === item.code ? "language-option active" : "language-option"}
            type="button"
            onClick={() => onLanguageChange(item.code)}
            title={item.label}
          >
            {item.short}
          </button>
        ))}
      </div>
    </>
  );
}
