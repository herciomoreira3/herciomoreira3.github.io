import githubRepos from "../data/githubRepos.snapshot.json";
import { curatedProjects } from "../data/projects";
import type { GithubRepoSnapshot, Project } from "../types";

const repoSnapshot = githubRepos as GithubRepoSnapshot[];

const repoOverrides: Record<string, Partial<GithubRepoSnapshot>> = {
  "SIPOLAI-Sistema-Manajementu-Dadus-Populasaun-CI4": {
    homepageUrl: "https://sipolai-sistema-manajementu-dadus.onrender.com/",
  },
};

function applyRepoOverrides(repo: GithubRepoSnapshot): GithubRepoSnapshot {
  return {
    ...repo,
    ...repoOverrides[repo.name],
  };
}

function titleFromRepoName(name: string) {
  const cleaned = name
    .replace(/-/g, " ")
    .replace(/\bCI4\b/i, "CodeIgniter 4")
    .replace(/\bHRIS\b/i, "HRIS")
    .replace(/\bIoT\b/i, "IoT");

  return cleaned.replace(/\w\S*/g, (word) => {
    if (["IoT", "HRIS", "PHP"].includes(word.toUpperCase())) {
      return word.toUpperCase();
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
}

function categoryFromLanguage(language: string) {
  if (language === "Dart") return "Mobile App";
  if (language === "PHP") return "Web App";
  if (language === "JavaScript") return "Web System";
  return "Repository";
}

function githubRepoToProject(repo: GithubRepoSnapshot): Project {
  const repoWithOverrides = applyRepoOverrides(repo);
  const title = titleFromRepoName(repoWithOverrides.name);
  const summary = repoWithOverrides.readmeSummary || repoWithOverrides.description || "GitHub repository project.";
  const tags = [repoWithOverrides.primaryLanguage, ...repoWithOverrides.topics].filter(Boolean).slice(0, 5);

  return {
    id: `github-${repoWithOverrides.name}`,
    title,
    shortTitle: title.split(" - ")[0],
    slug: repoWithOverrides.name.toLowerCase(),
    summary,
    category: categoryFromLanguage(repoWithOverrides.primaryLanguage),
    tags,
    features: [
      repoWithOverrides.description || "Repository metadata is synced automatically from GitHub.",
      "Appears in the portfolio through the GitHub auto-discovery pipeline.",
      "Links directly to source code and demo/homepage when available.",
    ],
    technicalImplementation: [
      `Primary language: ${repoWithOverrides.primaryLanguage}.`,
      `Default branch: ${repoWithOverrides.defaultBranch}.`,
      `Last pushed: ${new Date(repoWithOverrides.pushedAt).toLocaleDateString("en", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}.`,
    ],
    stack: tags.length ? tags : [repoWithOverrides.primaryLanguage],
    benefits: [
      "Keeps the public portfolio aligned with current GitHub work.",
      "Requires no manual component edits when a new repository is added.",
    ],
    links: [
      { label: "View Code", href: repoWithOverrides.htmlUrl },
      ...(repoWithOverrides.homepageUrl ? [{ label: "Live Demo", href: repoWithOverrides.homepageUrl }] : []),
    ],
    source: "github",
    repoUrl: repoWithOverrides.htmlUrl,
    homepageUrl: repoWithOverrides.homepageUrl,
    primaryLanguage: repoWithOverrides.primaryLanguage,
    topics: repoWithOverrides.topics,
    stars: repoWithOverrides.stars,
    forks: repoWithOverrides.forks,
    pushedAt: repoWithOverrides.pushedAt,
    isAutoDiscovered: true,
  };
}

export function getPortfolioProjects(): Project[] {
  const repoByName = new Map(repoSnapshot.map((repo) => [repo.name, repo]));
  const usedRepos = new Set<string>();

  const curated = curatedProjects.map((project) => {
    if (!project.githubRepo) return project;
    const rawRepo = repoByName.get(project.githubRepo);
    const repo = rawRepo ? applyRepoOverrides(rawRepo) : undefined;
    if (!repo) return project;
    usedRepos.add(repo.name);

    return {
      ...project,
      source: "merged" as const,
      repoUrl: repo.htmlUrl,
      homepageUrl: repo.homepageUrl,
      primaryLanguage: repo.primaryLanguage,
      stars: repo.stars,
      forks: repo.forks,
      pushedAt: repo.pushedAt,
      links: [
        ...project.links.filter((link) => link.href !== repo.htmlUrl),
        { label: "View Code", href: repo.htmlUrl },
        ...(repo.homepageUrl ? [{ label: "Live Demo", href: repo.homepageUrl }] : []),
      ],
    };
  });

  const discovered = repoSnapshot
    .filter((repo) => !usedRepos.has(repo.name))
    .filter((repo) => !repo.isArchived && !repo.isFork)
    .sort((a, b) => new Date(b.pushedAt).getTime() - new Date(a.pushedAt).getTime())
    .map(githubRepoToProject);

  return [...curated, ...discovered];
}

export const githubSyncInfo = {
  count: repoSnapshot.length,
  lastSyncedAt: repoSnapshot[0]?.lastSyncedAt || "",
};
