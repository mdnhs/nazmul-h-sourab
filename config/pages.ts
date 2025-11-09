import { ValidPages } from "./constants";
import { siteConfig } from "./site";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: `${siteConfig.authorName} — Frontend Developer specializing in React, Next.js, TypeScript, and Tailwind CSS.`,
    },
  },
  skills: {
    title: "Skills",
    description:
      "A collection of frontend technologies, frameworks, and tools I work with.",
    metadata: {
      title: "Skills",
      description: `${siteConfig.authorName}’s professional skill set including React, Next.js, TypeScript, Tailwind CSS, Redux, and REST API.`,
    },
  },
  projects: {
    title: "Projects",
    description:
      "Showcasing impactful web projects and real-world applications I’ve built.",
    metadata: {
      title: "Projects",
      description: `${siteConfig.authorName}’s notable projects including US-Bangla Airlines, FirstTrip, and TechnoNext Software websites built with Next.js and TypeScript.`,
    },
  },
  contact: {
    title: "Contact",
    description: "Let’s connect and collaborate on something great.",
    metadata: {
      title: "Contact",
      description: `Get in touch with ${siteConfig.authorName} — Frontend Developer from Dhaka, Bangladesh.`,
    },
  },
  Educations: {
    title: "Educations",
    description:
      "Academic background and continuous learning that shaped my technical foundation.",
    metadata: {
      title: "Educations",
      description: `${siteConfig.authorName}’s academic journey — BSc in Computer Science & Engineering, Diploma in Computer Engineering, and SSC in Science.`,
    },
  },
  resume: {
    title: "Resume",
    description:
      "Explore my professional background, technical skills, and experience timeline.",
    metadata: {
      title: "Resume",
      description: `${siteConfig.authorName}’s professional resume — Frontend Developer with 2.5 years of experience in React, Next.js, and TypeScript.`,
    },
  },
  experience: {
    title: "Experience",
    description:
      "My professional journey and milestones in software development.",
    metadata: {
      title: "Experience",
      description: `${siteConfig.authorName}’s experience as a Frontend Developer at TechnoNext Software Ltd — building modern web applications using React, Next.js, and TypeScript.`,
    },
  },
};
