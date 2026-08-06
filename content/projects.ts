import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    title: "My personal website",
    image: "/images/projects/pw.png",
    description:
      "A personal portfolio built to establish my online presence and showcase my work and background.",
    category: "web app",
    github: "https://github.com/SajidHamza9/portfolio-nextjs",
    demo: "https://www.sajidhamza.dev/",
    tags: ["react", "styled-components", "next.js", "TypeScript", "vercel"],
    animation: "fade-up",
  },
  {
    title: "dynamodels (open source contribution)",
    image: "/images/projects/github-prs.svg",
    description:
      "Open-source contribution to dynamodels, a TypeScript library that simplifies working with DynamoDB. Authored 5 pull requests merged into the public repository.",
    category: "open source",
    github: "https://github.com/neoxia/dynamodels",
    demo: "https://www.npmjs.com/package/dynamodels",
    tags: ["TypeScript", "DynamoDB", "AWS", "open source"],
    animation: "fade-up",
  },
  {
    title: "Social Network",
    image: "/images/projects/sm.png",
    description:
      "A full-featured social network with post sharing (text and photos), comments, real-time notifications, and instant messaging.",
    category: "web app",
    github: "https://github.com/SajidHamza9/social-media-mern-stack",
    demo: "https://drive.google.com/file/d/1e3SaBBuLZdJnCNDBu1M3OX10TaKk5qcm/view?usp=sharing",
    tags: [
      "react",
      "redux",
      "material UI",
      "styled-components",
      "node.js",
      "express",
      "socket.io",
      "mongoDB",
    ],
    animation: "fade-up",
  },
  {
    title: "Credit app",
    image: "/images/projects/ca.png",
    description:
      "A mobile app that lets shopkeepers track and manage credit transactions for their customers right from their phones.",
    category: "mobile app",
    github: "https://github.com/SajidHamza9/Credit-app-with-flutter",
    demo: "https://drive.google.com/file/d/15zUqwWXNHHzti6tdrPqevOXm4BKCnU2m/view?usp=sharing",
    tags: ["flutter", "provider", "firebase", "android", "ios"],
    animation: "fade-up",
  },
];
