import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const siteTitle = "zakafz – Canadian Design Engineer Based in Montreal";
export const siteDescription =
  "Showcasing minimalist, UX-focused dashboard designs by Zakary, a seasoned developer and UI designer based in Montreal, Quebec.";
export const siteUrl = "https://zakary.dev";
export const siteImage = `${siteUrl}/og-image.png`;

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
    "Design Engineer",
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
    creator: "@zakafz",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
