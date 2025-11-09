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
    id: "tn",
    position: "Software Engineer (Frontend Developer)",
    company: "TechnoNext Software Ltd",
    location: "Dhaka, Bangladesh",
    startDate: new Date("2025-07-01"),
    endDate: "Present",
    description: [
      "Developing, maintaining, and optimizing large-scale web applications using Next.js, React, and TypeScript.",
      "Collaborating closely with backend and design teams to deliver user-centric, responsive interfaces.",
      "Implementing authentication, routing, and API integrations with a focus on security and scalability.",
      "Enhancing UI performance through code-splitting, lazy loading, and advanced caching strategies.",
    ],
    achievements: [
      "Led frontend development for official websites of US-Bangla Airlines, FirstTrip, and TechnoNext Software Ltd using Next.js and Tailwind CSS.",
      "Improved page performance and SEO metrics, achieving a 90+ Lighthouse score across key pages.",
      "Developed reusable UI components and integrated global state management with Redux and Zustand.",
      "Implemented frontend authentication and secure session handling with NextAuth.js v5.",
      "Collaborated in building component-based design systems to ensure UI consistency and scalability.",
      "Mentored junior developers on modern frontend workflows, DevTools debugging, and clean code practices.",
    ],
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Redux",
      "Zustand",
      "NextAuth.js",
      "REST API",
    ],
    companyUrl: "https://technonext.com",
    logo: "/experience/technonext.png",
  },
  {
    id: "tn-jr",
    position: "Jr. Software Engineer (Frontend)",
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
    ],
    companyUrl: "https://technonext.com",
    logo: "/experience/technonext.png",
  },
];
