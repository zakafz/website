export const siteTitle = "zakafz – Canadian Design Engineer Based in Montreal";
export const siteDescription =
  "Showcasing minimalist, UX-focused dashboard designs by Zakary, a seasoned developer and UI designer based in Montreal, Quebec.";
export const siteUrl = "https://zakary.dev";
export const siteImage = `${siteUrl}/og-image.jpg`;

export const metadata = {
  title: {
    default: siteTitle,
    template: `%s | zakafz`,
  },
  description: siteDescription,
  keywords: [
    "zakafz",
    "Zakary",
    "UX Design",
    "Deisgn Engineer",
    "UI/UX",
    "Frontend Developer",
    "Astro",
    "Next.js",
    "Montreal Designer",
  ],
  authors: [{ name: "Zakary", url: siteUrl }],
  creator: "Zakary",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "zakafz",
    images: [
      {
        url: siteImage,
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [siteImage],
    creator: "@zxk-afz",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};
