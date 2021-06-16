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
    images: meta.images,
    site_name: "Umar Luqman's site",
  },

  twitter: {
    handle: meta.author.social.twitterHandle, // author handle
    site: meta.author.social.twitterHandle, // website hadle
    cardType: "summary_large_image",
  },
};

export default SEO;
