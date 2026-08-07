import type { Service } from "@/types/content";

export const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Powerful and modern web applications built with JavaScript & TypeScript on a robust, scalable architecture.",
    image: "/images/services/web.svg",
    features: [
      "React, Next.js & Angular",
      "Node.js APIs",
      "Scalable architecture",
    ],
  },
  {
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile apps using the best tools and technologies available.",
    image: "/images/services/mobile.svg",
    features: ["Cross-platform", "Native performance", "App Store ready"],
  },
  {
    title: "UI/UX Design",
    description:
      "Web and mobile apps with beautiful and smooth UI/UX designs that provide a better user experience.",
    image: "/images/services/design.svg",
    features: ["Design systems", "Responsive layouts", "Smooth interactions"],
  },
];
