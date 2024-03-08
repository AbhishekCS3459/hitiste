export const currentYear = new Date().getFullYear();

export const staggerContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const fadeUpAnimationVariants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};
export interface Team {
  id: string;
  imgUrl: string;
  title: string;
  description: string;
}

export const exploreTeams: Team[] = [
  {
    id: "technical",
    imgUrl: "/technical-team.png",
    title: "Technical",
    description:
      "In a technical team, members collaborate to apply their expertise in solving specific problems or achieving project goals within their domain, working collectively to leverage their skills for successful outcomes.",
  },
  {
    id: "media",
    imgUrl: "/media-team.png",
    title: "Media",
    description:
      "In a technical team, members collaborate to apply their expertise in solving specific problems or achieving project goals within their domain, working collectively to leverage their skills for successful outcomes.",
  },
  {
    id: "public_relation",
    imgUrl: "/public-relation.png",
    title: "Public Relation",
    description:
      "In a technical team, members collaborate to apply their expertise in solving specific problems or achieving project goals within their domain, working collectively to leverage their skills for successful outcomes.",
  },
];

export const startingFeatures: string[] = [
  "All time membership benifit till you graduated at one time",
  "Chance to participate in regular events organised all over India",
  "Upskill yourself to next level",
];

export interface Social {
  name: string;
  icon: string;
  url: string;
}

export const socials: Social[] = [
  {
    name: "linkedin",
    icon: "/linkedin.svg",
    url: "#",
  },
  {
    name: "instagram",
    icon: "/instagram.svg",
    url: "https://www.instagram.com/iste_hit_haldia/",
  },
  {
    name: "facebook",
    icon: "/facebook.svg",
    url: "#",
  },
];
