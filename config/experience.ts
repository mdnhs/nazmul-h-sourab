import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "ibox",
    position: "Software Engineer",
    company: "iBox Lab Ltd.",
    location: "Dhaka, Bangladesh",
    startDate: new Date("2026-08-01"),
    endDate: "Present",
    description: [
      "Own features end-to-end from planning through deployment, translating business requirements into scalable technical solutions.",
      "Design frontend architectures and reusable component systems, driving technical decisions around performance and scalability.",
      "Build AI workflows with coding agents, MCP, and external tools to automate repetitive engineering tasks and accelerate delivery.",
      "Improve code quality and engineering practices through code reviews and technical guidance across the team.",
    ],
    achievements: [],
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MCP",
      "Claude Code",
      "Git",
    ],
  },
  {
    id: "tn",
    position: "Software Engineer",
    company: "TechnoNext Software Ltd",
    location: "Dhaka, Bangladesh",
    startDate: new Date("2025-07-01"),
    endDate: new Date("2026-08-01"),
    description: [
      "Developed B2C and B2B applications with React, Next.js, TypeScript, and Node.js, covering REST APIs, authentication and authorization, and real-time features over WebSockets.",
      "Delivered AI-powered search, chat, and content generation features, integrating Claude, Codex, Gemini, MCP, and external AI tools.",
      "Built reusable UI components and shared design systems adopted across multiple products, with a focus on accessibility, SEO, and maintainability.",
    ],
    achievements: [
      "Reduced initial page load time by 30% through targeted performance optimization.",
      "Worked across PostgreSQL, GraphQL, and GitHub Actions pipelines; wrote automated tests.",
      "Mentored junior developers through code reviews.",
    ],
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "REST API",
      "GraphQL",
      "PostgreSQL",
      "Tailwind CSS",
      "Redux",
      "Zustand",
      "MCP",
      "Claude Code",
    ],
    companyUrl: "https://technonext.com",
    logo: "/experience/technonext.png",
  },
  {
    id: "tn-jr",
    position: "Jr. Software Engineer",
    company: "TechnoNext Software Ltd",
    location: "Dhaka, Bangladesh",
    startDate: new Date("2022-10-16"),
    endDate: new Date("2025-06-30"),
    description: [
      "Developed responsive, pixel-perfect user interfaces using React, Next.js, and Tailwind CSS.",
      "Integrated RESTful APIs and dynamic data handling for real-time content updates.",
      "Assisted in migrating legacy codebases to modern TypeScript-based architecture.",
      "Collaborated with designers to ensure brand consistency and accessibility standards.",
    ],
    achievements: [
      "Contributed to the development of FirstTrip and TechnoNext company websites using Next.js.",
      "Optimized bundle size and reduced load times by implementing dynamic imports and lazy loading.",
      "Created modular UI components for internal projects to improve development efficiency.",
      "Worked with REST API integrations to display dynamic airline and travel-related data.",
      "Actively participated in code reviews, debugging, and cross-team collaboration.",
    ],
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "Git",
      "React Native",
    ],
    companyUrl: "https://technonext.com",
    logo: "/experience/technonext.png",
  },
];
