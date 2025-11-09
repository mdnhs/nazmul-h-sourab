export interface EducationsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const EducationsUnsorted: EducationsInterface[] = [
  {
    repo: "BSc in Computer Science & Engineering",
    contibutionDescription:
      "Completed Bachelor of Science (BSc) in Computer Science & Engineering with strong focus on web technologies, software engineering, and system design principles.",
    repoOwner: "Green University of Bangladesh",
    link: "https://www.green.edu.bd/",
  },
  {
    repo: "Diploma in Computer Engineering",
    contibutionDescription:
      "Completed a 4-year Diploma in Computer Engineering program emphasizing programming fundamentals, database management, networking, and software development skills.",
    repoOwner: "Shariatpur Polytechnic Institute",
    link: "https://shariatpur.polytech.gov.bd",
  },
  {
    repo: "Secondary School Certificate (SSC)",
    contibutionDescription:
      "Completed SSC in Science with a strong academic foundation in mathematics, physics, and computer studies, fostering analytical thinking and problem-solving ability.",
    repoOwner: "Rev. Pauls High School",
    link: "https://rphs.cssbd.org/",
  },
];

export const featuredEducations: EducationsInterface[] =
  EducationsUnsorted.slice(0, 3);
