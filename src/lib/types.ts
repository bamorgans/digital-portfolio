export type SectionType = "about" | "career" | "projects";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
}

export interface CareerItem {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}
