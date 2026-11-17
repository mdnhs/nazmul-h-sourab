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
      description: `${siteConfig.authorName} — Software Engineer specializing in React, Next.js, React Native, Expo, Flutter, TypeScript, and Tailwind CSS.`,
    },
  },
  skills: {
    title: "Skills",
    description:
      "A collection of frontend technologies, frameworks, and tools I work with.",
    metadata: {
      title: "Skills",
      description: `${siteConfig.authorName}’s professional skill set including React, Next.js, React Native, Expo, Flutter, Firebase, Push Notifications, TypeScript, Tailwind CSS, Redux, and REST API.`,
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
      description: `Get in touch with ${siteConfig.authorName} — Software Engineer building web and mobile apps from Dhaka, Bangladesh.`,
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
      description: `${siteConfig.authorName}’s professional resume — Software Engineer with 2.5 years of experience building web and mobile apps with React, Next.js, React Native, Expo, and TypeScript.`,
    },
  },
  experience: {
    title: "Experience",
    description:
      "My professional journey and milestones in software development.",
    metadata: {
      title: "Experience",
      description: `${siteConfig.authorName}’s experience as a Software Engineer at TechnoNext Software Ltd — building web and mobile applications using React, Next.js, React Native, Expo, Flutter, and TypeScript.`,
    },
  },
};
