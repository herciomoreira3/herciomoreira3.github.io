import { DownloadCloud, ExternalLink, Gamepad2, RefreshCw, Smartphone, Waves } from "lucide-react";
import type { LanguageCode, Translation } from "../i18n";
import { githubSyncInfo } from "../lib/github";

const sipolaiDemoUrl = "https://sipolai-sistema-manajementu-dadus.onrender.com/";
const henriqueDemoUrl = "https://herciomoreira3.github.io/Henrique-Rapido/";
const testoraAndroid32Url =
  "https://github.com/herciomoreira3/Testora-Online-Exam-Mobile-Aplication/releases/download/v2.0.0/app-armeabi-v7a-release.apk";
const testoraAndroid64Url =
  "https://github.com/herciomoreira3/Testora-Online-Exam-Mobile-Aplication/releases/download/v2.0.0/app-arm64-v8a-release.apk";
const smartpondAndroidUrl =
  "https://github.com/herciomoreira3/SmartPond-IoT-Monitoring-System/releases/download/v1.0.0/app-debug.apk";

type ToolboxProps = {
  t: Translation["toolbox"];
  language: LanguageCode;
};

const localeByLanguage: Record<LanguageCode, string> = {
  en: "en",
  id: "id-ID",
  tet: "en",
};

export function Toolbox({ t, language }: ToolboxProps) {
  const syncedDate = githubSyncInfo.lastSyncedAt
    ? new Date(githubSyncInfo.lastSyncedAt).toLocaleDateString(localeByLanguage[language], {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : t.notSynced;

  return (
    <section id="tools" className="section-pad toolbox-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">{t.kicker}</p>
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>
        <div className="tools-grid">
          <article className="card tool-card feature-tool">
            <span className="tool-card-icon">
              <ExternalLink size={24} />
            </span>
            <h3>{t.sipolaiTitle}</h3>
            <p>{t.sipolaiText}</p>
            <a className="tool-action" href={sipolaiDemoUrl} target="_blank" rel="noreferrer">
              {t.openDemo} <ExternalLink size={15} />
            </a>
          </article>

          <article className="card tool-card game-tool">
            <span className="tool-card-icon">
              <Gamepad2 size={24} />
            </span>
            <h3>{t.henriqueTitle}</h3>
            <p>{t.henriqueText}</p>
            <a className="tool-action" href={henriqueDemoUrl} target="_blank" rel="noreferrer">
              {t.openDemo} <ExternalLink size={15} />
            </a>
          </article>

          <article className="card tool-card download-tool">
            <span className="tool-card-icon">
              <Smartphone size={24} />
            </span>
            <h3>{t.testoraTitle}</h3>
            <p>{t.testoraText}</p>
            <div className="download-options" aria-label={t.testoraTitle}>
              <a className="download-link" href={testoraAndroid32Url} target="_blank" rel="noreferrer">
                <DownloadCloud size={17} />
                <span>
                  <strong>{t.android32}</strong>
                  <small>{t.android32Hint}</small>
                </span>
              </a>
              <a className="download-link" href={testoraAndroid64Url} target="_blank" rel="noreferrer">
                <DownloadCloud size={17} />
                <span>
                  <strong>{t.android64}</strong>
                  <small>{t.android64Hint}</small>
                </span>
              </a>
            </div>
          </article>

          <article className="card tool-card pond-tool">
            <span className="tool-card-icon">
              <Waves size={24} />
            </span>
            <h3>{t.smartpondTitle}</h3>
            <p>{t.smartpondText}</p>
            <a className="tool-action" href={smartpondAndroidUrl} target="_blank" rel="noreferrer">
              <DownloadCloud size={17} />
              {t.downloadApk}
            </a>
          </article>

          <article className="card tool-card pulse-tool">
            <span className="tool-card-icon">
              <RefreshCw size={24} />
            </span>
            <h3>{t.repoTitle}</h3>
            <p>{t.repoText(githubSyncInfo.count, syncedDate)}</p>
            <code>npm run sync:github</code>
          </article>
        </div>
      </div>
    </section>
  );
}
