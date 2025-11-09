import { Icons } from "@/components/common/icons";
import { siteConfig } from "./site";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: siteConfig.links.github.replace("https://github.com/", ""),
    icon: Icons.gitHub,
    link: siteConfig.links.github,
  },
  {
    name: "LinkedIn",
    username: siteConfig.links.linkedIn.replace("https://linkedin.com/in/", ""),
    icon: Icons.linkedin,
    link: siteConfig.links.linkedIn,
  },
  {
    name: "Twitter",
    username: siteConfig.links.twitter.replace("https://twitter.com/", ""),
    icon: Icons.twitter,
    link: siteConfig.links.twitter,
  },
  {
    name: "Gmail",
    username: siteConfig.links.mail.replace("mailto:", ""),
    icon: Icons.gmail,
    link: siteConfig.links.mail,
  },
];
