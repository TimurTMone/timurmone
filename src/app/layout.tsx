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
    default: "Timur Mone — AI Automation Engineer",
    template: "%s | Timur Mone",
  },
  description:
    "We build AI operating systems for industries no one else touches. 12+ shipped products.",
  keywords: [
    "AI Automation Engineer",
    "AI Development",
    "AI Agents",
    "Vertical SaaS",
    "Flutter Developer",
    "Next.js Developer",
    "Claude API",
    "AI Products",
    "Full Stack Engineer",
  ],
  authors: [{ name: "Timur Mone" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Timur Mone — AI Automation Engineer",
    description:
      "We build AI operating systems for industries no one else touches. 12+ shipped products.",
    siteName: "Timur Mone",
  },
  twitter: {
    card: "summary_large_image",
    title: "Timur Mone — AI Automation Engineer",
    description:
      "We build AI operating systems for industries no one else touches.",
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
