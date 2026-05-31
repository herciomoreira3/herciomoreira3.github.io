import experience from "../../content/resume/experience.json";
import education from "../../content/resume/education.json";
import certifications from "../../content/resume/certifications.json";
import type { ResumeItem } from "../types";

type ResumeFile = {
  items: ResumeItem[];
};

const files = [experience, education, certifications] as ResumeFile[];

export const resumeItems: ResumeItem[] = files
  .flatMap((file) => file.items)
  .filter((item) => item.visible !== false)
  .sort((a, b) => {
    if (a.featured !== b.featured) {
      return a.featured ? -1 : 1;
    }

    const aOrder = a.sortOrder ?? 999;
    const bOrder = b.sortOrder ?? 999;

    if (aOrder !== bOrder) {
      return aOrder - bOrder;
    }

    return (b.startDate || "").localeCompare(a.startDate || "");
  });

export const languages = [
  { label: "Tetun", value: "Native" },
  { label: "English", value: "Proficient" },
  { label: "Bahasa Indonesia", value: "Proficient" },
];
