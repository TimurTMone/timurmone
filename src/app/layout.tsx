import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const serif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Timur Mone",
  description:
    "Founder of Altai Labs. I build AI-native companies in industries no one else touches.",
  keywords: [
    "Timur Mone",
    "Altai Labs",
    "AI Automation",
    "Founder",
    "AI Engineer",
  ],
  authors: [{ name: "Timur Mone" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Timur Mone",
    description:
      "Founder of Altai Labs. I build AI-native companies in industries no one else touches.",
    siteName: "Timur Mone",
  },
  twitter: {
    card: "summary",
    title: "Timur Mone",
    description:
      "Founder of Altai Labs. I build AI-native companies.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${serif.variable} ${mono.variable}`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
