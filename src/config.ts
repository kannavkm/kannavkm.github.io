import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://kannav.me",
  author: "Kannav Mehtaa",
  desc: "My space on the internet",
  title: "exclowd",
  ogImage: "exclowd-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 5,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/exclowd",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/kannav.1",
    linkTitle: `kannav.1 on Instagram`,
    active: false,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/kannavkmehta",
    linkTitle: `kmkannavkmehta on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/exclowd",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@kanmeh",
    linkTitle: `kanmeh on YouTube`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://gitlab.com/exclowd",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://reddit.com/exclowd",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
];
