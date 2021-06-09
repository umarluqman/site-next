const title = "Umar Luqman";
const description =
  "Life-long learner, front-end developer, and practising calisthenics";

const SEO = {
  title,
  description,
  canonical: "https://umarluqman.dev",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://umarluqman.dev",
    title,
    description,
  },
  images: [
    {
      url: "/favicon/android-chrome-512x512.png",
      width: 512,
      height: 512,
      alt: "Umar Luqman",
    },
  ],
  twitter: {
    handle: "@umarlqmn",
    site: "@umarlqmn",
    cardType: "summary_large_image",
  },
};

export default SEO;
