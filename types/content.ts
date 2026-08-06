export interface About {
  bio: string;
  email: string;
  tel: string;
  address: string;
  photos: string[];
}

export interface Project {
  title: string;
  image: string;
  description: string;
  demo?: string;
  github?: string;
  tags: string[];
  animation: "fade-right" | "fade-left";
}

export interface Service {
  title: string;
  description: string;
  image: string;
}

export interface Skill {
  title: string;
  image: string;
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
