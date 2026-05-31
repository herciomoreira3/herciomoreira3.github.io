import { writeFile } from "node:fs/promises";
import { Buffer } from "node:buffer";

const username = process.env.GITHUB_USERNAME || "herciomoreira3";
const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || "";
const apiRoot = "https://api.github.com";
const hiddenRepositoryNames = new Set(["Portfolio"]);
const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": "hercio-portfolio-sync",
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
};

async function requestJson(url) {
  const response = await fetch(url, { headers });
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText} for ${url}`);
  }
  return response.json();
}

function summarizeReadme(readme) {
  const withoutBadges = readme
    .replace(/<div[\s\S]*?<\/div>/gi, "")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
    .replace(/\[[^\]]+\]\([^)]+\)/g, "")
    .split("\n")
    .map((line) => line.replace(/^#+\s*/, "").trim())
    .filter(Boolean)
    .filter((line) => !line.startsWith("---"))
    .filter((line) => !line.startsWith("|"))
    .filter((line) => !line.startsWith("[!"));

  return withoutBadges.slice(0, 3).join(" ").slice(0, 320);
}

async function getReadmeSummary(repo) {
  try {
    const readme = await requestJson(`${apiRoot}/repos/${username}/${repo.name}/readme`);
    const raw = Buffer.from(readme.content.replace(/\s/g, ""), "base64").toString("utf8");
    return summarizeReadme(raw);
  } catch {
    return "";
  }
}

async function main() {
  const repos = await requestJson(
    `${apiRoot}/users/${username}/repos?per_page=100&sort=pushed&type=owner`,
  );

  const filtered = repos.filter((repo) => !repo.fork && !repo.archived);
  const snapshot = [];

  for (const repo of filtered) {
    const topics = Array.isArray(repo.topics) ? repo.topics : [];
    if (hiddenRepositoryNames.has(repo.name) || topics.includes("portfolio-hidden") || topics.includes("draft")) {
      continue;
    }

    const readmeSummary = await getReadmeSummary(repo);
    snapshot.push({
      id: repo.id,
      name: repo.name,
      fullName: repo.full_name,
      description: repo.description || "",
      htmlUrl: repo.html_url,
      homepageUrl: repo.homepage || "",
      primaryLanguage: repo.language || "Unknown",
      topics,
      stars: repo.stargazers_count || 0,
      forks: repo.forks_count || 0,
      isFork: Boolean(repo.fork),
      isArchived: Boolean(repo.archived),
      defaultBranch: repo.default_branch || "main",
      createdAt: repo.created_at,
      updatedAt: repo.updated_at,
      pushedAt: repo.pushed_at,
      readmeSummary,
      matchedProjectId: "",
      visibility: repo.private ? "PRIVATE" : "PUBLIC",
      lastSyncedAt: new Date().toISOString(),
    });
  }

  await writeFile(
    new URL("../src/data/githubRepos.snapshot.json", import.meta.url),
    `${JSON.stringify(snapshot, null, 2)}\n`,
  );

  console.log(`Synced ${snapshot.length} GitHub repositories for ${username}.`);
}

main().catch((error) => {
  console.warn(`GitHub sync failed: ${error.message}`);
  console.warn("Keeping the existing snapshot file.");
  process.exitCode = 0;
});
