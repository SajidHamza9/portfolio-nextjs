import type { Experience } from "@/types/content";

export const experiences: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Deloitte",
    type: "Full-time",
    period: "Nov 2023 — Present",
    location: "Grenoble, France",
    description:
      "Contributing to the development and improvement of a Data Portal for a global leader in industrial technology. Designed and implemented a module for integrating Power BI dashboards, established development best practices and improved the CI/CD pipeline, and designed and deployed a multi-region (3-region) AWS architecture that reduced latency and increased availability, with monitoring, alerting, and centralized logging.",
    tags: [
      "Angular",
      "NestJS",
      "TypeScript",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "AWS",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Neoxia",
    type: "Internship",
    period: "Mar 2023 — Aug 2023",
    location: "Grenoble, France",
    description:
      "End-of-studies internship. Developed and maintained internal tracking and management tools (CRA, Project Weather and Healthcheck).",
    tags: ["Angular", "Tailwind CSS", "NestJS", "GraphQL", "PostgreSQL"],
  },
  {
    role: "Cloud Full Stack Developer",
    company: "4D",
    type: "Internship",
    period: "Feb 2022 — Jun 2022",
    location: "Rabat, Morocco",
    description:
      "End-of-studies internship. Built an internal administration dashboard for the 4D Cloud platform.",
    tags: [
      "Next.js",
      "Node.js",
      "AWS Amplify",
      "Lambda",
      "API Gateway",
      "DynamoDB",
      "Cognito",
      "Serverless",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "BEAMTEL",
    type: "Internship",
    period: "Jul 2021 — Sep 2021",
    location: "Rabat, Morocco",
    description:
      "Designed, developed and deployed the 5G EVENT MOROCCO event website, including integration of the CMI payment gateway.",
    tags: ["React", "Material UI", "Node.js", "Express", "MongoDB"],
  },
];
