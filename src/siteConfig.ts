import type {
  SiteConfiguration,
  NavigationLinks,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "Astro Byte",
  description:
    "A barebones starter theme. Built with Astro, Tailwind CSS, and Markdown.",
  url: "https://barebones.superwebthemes.com",
  author: "SuperWeb Themes",
  locale: "en-US",
};

export const NAV_LINKS: NavigationLinks = {
  blog: {
    path: "/blog",
    label: "blog",
  },
  projects: {
    path: "/projects",
    label: "projects",
  },
};

export const SOCIAL_LINKS: SocialLinks = {
  email: {
    label: "Email",
    url: "mailto:support@superwebthemes.com",
  },
  github: {
    label: "GitHub",
    url: "https://github.com/superwebthemes",
  },
  discord: {
    label: "Discord",
    url: "https://discord.gg/V5MCBCsAjJ",
  },
  twitter: {
    label: "Twitter",
    url: "https://twitter.com/superwebthemes",
  },
};
