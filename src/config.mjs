import defaultImage from "./assets/images/analyticedge.png";

const CONFIG = {
  name: "Incresco",

  origin: "https://www.increscotech.com",
  basePathname: "/",
  trailingSlash: false,
  description:
    "Incresco is a leading web and mobile app development company that offers customized solutions to help businesses transform digitally. Our services include web development, mobile app development, UI/UX design, e-commerce development, and digital marketing. We use agile methodologies and innovative techniques to deliver high-quality solutions that are scalable, secure, and user-friendly. Partner with us to achieve your business objectives and drive growth in the digital world.",

  defaultTheme: "system", // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: "en",
  textDirection: "ltr",

  dateFormatter: new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }),

  googleAnalyticsId: "G-VLLQV67JW6", // or "G-XXXXXXXXXX",
  googleSiteVerificationId: "orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M",

  blog: {
    disabled: false,
    postsPerPage: 4,

    post: {
      permalink: "/%slug%", // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      noindex: false,
      disabled: false,
    },

    list: {
      pathname: "blog", // Blog main path, you can change this to "articles" (/articles)
      noindex: false,
      disabled: false,
    },

    category: {
      pathname: "category", // Category main path /category/some-category
      noindex: true,
      disabled: false,
    },

    tag: {
      pathname: "tag", // Tag main path /tag/some-tag
      noindex: true,
      disabled: false,
    },
  },
};

export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
