import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    title: "My personal website",
    image: "/images/projects/pw.png",
    description:
      "My personal website was created in order to have an online presence and boost my online visibility.",
    github: "https://github.com/SajidHamza9/portfolio-nextjs",
    demo: "https://www.sajidhamza.dev/",
    tags: ["react", "styled-components", "next.js", "vercel"],
    animation: "fade-right",
  },
  {
    title: "Credit app",
    image: "/images/projects/ca.png",
    description:
      "The realization of a mobile application that allows Shopkeepers to manage credit transactions from their phones.",
    github: "https://github.com/SajidHamza9/Credit-app-with-flutter",
    demo: "https://drive.google.com/file/d/15zUqwWXNHHzti6tdrPqevOXm4BKCnU2m/view?usp=sharing",
    tags: ["flutter", "provider", "firebase", "android", "ios"],
    animation: "fade-left",
  },
  {
    title: "Social Network",
    image: "/images/projects/sm.png",
    description:
      "The creation of a social network with all of the essential features, such as content publishing (text and/or photos), comments, notifications, messaging system, etc.",
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
    animation: "fade-right",
  },
  {
    title: "5GEM Website (Internship)",
    image: "/images/projects/5GEM.png",
    description:
      "Design, development and deployment of an event website 5G EVENT MOROCCO.",
    demo: "https://www.5geventmorocco.com/",
    tags: [
      "react",
      "material UI",
      "styled-components",
      "node.js",
      "mongoDB",
      "CMI",
    ],
    animation: "fade-right",
  },
  {
    title: "Administration Dashboard (Internship)",
    image: "/images/projects/4Ddashboard.png",
    description:
      "Implementation of an internal administration dashboard for the 4D Cloud platform.",
    tags: [
      "next.js",
      "AWS Amplify",
      "AWS Lambda",
      "DynamoDB",
      "Amazon API Gateway",
      "Amazon Cognito",
      "Serverless Framework",
    ],
    animation: "fade-left",
  },
];
