export interface About {
  bio: string;
  email: string;
  tel: string;
  address: string;
  photo: string;
  github: string;
  linkedin: string;
  certifications: string[];
}

export type ProjectCategory = "web app" | "mobile app" | "open source";

export interface Project {
  title: string;
  image: string;
  description: string;
  category: ProjectCategory;
  demo?: string;
  github?: string;
  tags: string[];
  animation: "fade-right" | "fade-left" | "fade-up";
}

export interface Service {
  title: string;
  description: string;
  image: string;
  features: string[];
}

export type SkillCategory =
  | "Languages"
  | "Frontend"
  | "Backend"
  | "DevOps & Cloud"
  | "Tools";

export interface Skill {
  title: string;
  image: string;
  category: SkillCategory;
}

export interface Experience {
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  description: string;
  tags: string[];
}
