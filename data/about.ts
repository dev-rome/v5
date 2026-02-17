import { ExperienceItem, BioData } from "@/types/about";

export const SKILLS = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Vitest",
  "Framer Motion",
  "Storybook",
  "GraphQL",
];

export const BIO: BioData = {
  paragraphs: [
    "Software Engineer with strong frontend expertise and full-stack exposure, specializing in building scalable, high-performance web applications.",
    "Experienced with React, Next.js, TypeScript, and modern UI architecture, alongside API integration, testing, and database-driven features.",
    "Proven track record delivering production-ready software in agile environments and freelance settings.",
  ],
};

export const MISSION_LOG: ExperienceItem[] = [
  {
    role: "Front-End Software Engineer Intern",
    company: "Glassdoor",
    period: "05/2025 – 08/2025",
    tasks: [
      "Migrated core production UI modules to Next.js App Router using React and TypeScript, improving application scalability and long-term maintainability.",
      "Developed and Shipped multiple user-facing features (Joined Bowls, Company Bowls, Careers, Careers Advice) used across employer profiles.",
      "Integrated GraphQL APIs for efficient, type-safe data fetching and frontend state management.",
      "Implemented automated unit tests with Vitest to increase test coverage and ensure maintainable, high-quality code.",
    ],
  },
  {
    role: "Jr. Developer (Frontend)",
    company: "The Hero Company",
    period: "03/2024 – 09/2025",
    tasks: [
      "Authored and maintained 20+ responsive web applications using modern frontend frameworks, improving user experience and conversion flows.",
      "Maintained site security and performance through database updates, SQL workflows, and SSL certificate management.",
      "Utilized MySQL tools for data-driven frontend updates while supporting site reliability and optimization.",
    ],
  },
  {
    role: "Web Developer",
    company: "Freelance",
    period: "01/2018 – 09/2025",
    tasks: [
      "Developed 15+ production websites and web applications using HTML, CSS, JavaScript, React, Tailwind CSS, and WordPress.",
      "Achieved Top Rated Plus status and 100% Job Success Score on Upwork through consistent high-quality delivery and client satisfaction.",
      "Implemented secure payment gateways, API integrations, and documentation to support business operations and long-term maintainability.",
    ],
  },
];
