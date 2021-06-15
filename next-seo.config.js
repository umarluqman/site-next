import { meta } from "./src/meta";

const SEO = {
  title: meta.name,
  description: meta.description,
  canonical: "https://umarluqman.dev",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://umarluqman.dev",
    title: meta.name,
    description: meta.description,
    images: [
      {
        url: "/^.jpeg",
        width: 1200,
        height: 628,
        alt: "Umar Luqman",
      },
    ],
  },

  twitter: {
    handle: meta.author.social.twitterHandle,
    site: meta.author.social.twitterHandle,
    cardType: "summary_large_image",
  },
};

export default SEO;
