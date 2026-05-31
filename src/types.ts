export type Link = {
  label: string;
  href: string;
  kind?: "primary" | "secondary" | "ghost";
};

export type Project = {
  id: string;
  title: string;
  shortTitle: string;
  slug: string;
  summary: string;
  category: string;
  tags: string[];
  year?: string;
  role?: string;
  problem?: string;
  features: string[];
  technicalImplementation: string[];
  stack: string[];
  benefits: string[];
  links: Link[];
  featured?: boolean;
  source: "curated" | "github" | "merged";
  githubRepo?: string;
  repoUrl?: string;
  homepageUrl?: string;
  primaryLanguage?: string;
  topics?: string[];
  stars?: number;
  forks?: number;
  pushedAt?: string;
  isAutoDiscovered?: boolean;
};

export type GithubRepoSnapshot = {
  id: number;
  name: string;
  fullName: string;
  description: string;
  htmlUrl: string;
  homepageUrl: string;
  primaryLanguage: string;
  topics: string[];
  stars: number;
  forks: number;
  isFork: boolean;
  isArchived: boolean;
  defaultBranch: string;
  createdAt: string;
  updatedAt: string;
  pushedAt: string;
  readmeSummary: string;
  matchedProjectId: string;
  visibility: "PUBLIC" | "PRIVATE";
  lastSyncedAt: string;
};

export type ResumeItem = {
  id: string;
  type: "experience" | "education" | "certification" | "award" | "volunteer" | "training";
  title: string;
  organization: string;
  period: string;
  startDate?: string;
  endDate?: string;
  current?: boolean;
  location?: string;
  description?: string;
  highlights: string[];
  tags?: string[];
  links?: Link[];
  visible?: boolean;
  featured?: boolean;
  sortOrder?: number;
};

export type Skill = {
  id: string;
  label: string;
  category: "support" | "mobile" | "iot" | "web" | "cloud" | "media";
  icon: string;
  priority: number;
};
