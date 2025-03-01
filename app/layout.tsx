import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata = {
  title: {
    default: "zakafz – Canadian Design Engineer Based in Montreal",
    template: `%s | zakafz`,
  },
  description: "Showcasing minimalist, UX-focused dashboard designs by Zakary, a seasoned developer and UI designer based in Montreal, Quebec.",
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
  authors: [{ name: "Zakary", url: "https://zakary.dev" }],
  creator: "Zakary",
  metadataBase: new URL("https://zakary.dev"),
  openGraph: {
    title: "zakafz – Canadian Design Engineer Based in Montreal",
    description: "Showcasing minimalist, UX-focused dashboard designs by Zakary, a seasoned developer and UI designer based in Montreal, Quebec.",
    url: "https://zakary.dev",
    siteName: "zakafz",
    images: [
      {
        url: "https://zakary.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "zakafz – Canadian Design Engineer Based in Montreal",
      },
    ],
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "zakafz – Canadian Design Engineer Based in Montreal",
    description: "Showcasing minimalist, UX-focused dashboard designs by Zakary, a seasoned developer and UI designer based in Montreal, Quebec.",
    images: ["https://zakary.dev/og-image.png"],
    creator: "@zakafz",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://zakary.dev",
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
