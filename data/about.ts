import { ExperienceItem, BioData } from "@/types/about";

export const SKILLS = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Storybook",
  "GraphQL",
];

export const BIO: BioData = {
  paragraphs: [
    "Results-driven Frontend Engineer with hands-on experience building responsive, user-focused interfaces using React, Next.js, and TypeScript. I have contributed to projects at Glassdoor and as a freelance developer, crafting reusable, efficient UI components that enhance user experience, streamline development, and ensure smooth, reliable performance.",
    "I love learning and building for the web, turning ideas into functional, engaging experiences that help clients bring their visions to life. Outside of coding, I enjoy streaming Valorant, playing and watching sports, going to the gym, and baking.",
  ],
};

export const MISSION_LOG: ExperienceItem[] = [
  {
    role: "Front-End Software Engineer Intern",
    company: "Glassdoor",
    period: "05/2025 – 08/2025",
    tasks: [
      "Migrated core UI modules (Left & Right Rail) to Next.js App Router.",
      "Developed reusable UI components in Storybook for design consistency.",
      "Integrated GraphQL for efficient, type-safe data fetching.",
      "Implemented unit tests with Vitest, increasing coverage.",
    ],
  },
  {
    role: "Jr. Developer (Frontend)",
    company: "The Hero Company",
    period: "03/2024 – 09/2025",
    tasks: [
      "Authored 20+ responsive websites, increasing validation rates by 10%.",
      "Maintained security/performance via MySQL Workbench & SSL management.",
      "Managed SSL renewals to reduce security vulnerabilities.",
    ],
  },
  {
    role: "Web Developer",
    company: "Freelance",
    period: "01/2018 – 09/2025",
    tasks: [
      "Developed 15+ websites for e-commerce and small businesses.",
      "Achieved Top Rated Plus status and 100% Job Success Score on Upwork.",
      "Improved revenue/trust by integrating secure payment gateways.",
    ],
  },
];
