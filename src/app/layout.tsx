import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import { AIChat } from "@/components/ai-chat";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Alt AI Lab — AI Software Factory",
    template: "%s | Alt AI Lab",
  },
  description:
    "We don't take projects. We build companies. An independent AI software factory shipping AI-native ventures into underserved industries. 12 built. Zero VC.",
  keywords: [
    "Alt AI Lab",
    "AI Software Factory",
    "AI Venture Studio",
    "Vertical AI",
    "AI Native Companies",
    "AI Agents",
    "Claude API",
    "Timur Mone",
  ],
  authors: [{ name: "Alt AI Lab" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Alt AI Lab — AI Software Factory",
    description:
      "We don't take projects. We build companies. 12 AI-native ventures shipped. Zero VC.",
    siteName: "Alt AI Lab",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alt AI Lab — AI Software Factory",
    description:
      "We don't take projects. We build companies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          {children}
          <AIChat />
        </Providers>
        <div className="noise" />
      </body>
    </html>
  );
}
