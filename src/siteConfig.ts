import type {
  SiteConfiguration,
  NavigationLinks,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "Astro Atomic",
  description: "Fast & minimal theme for Astro. Search and comments built in.",
  url: "https://astro-atomic.vercel.app",
  author: "Trevor Tyler Lee",
  locale: "en-CA",
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
