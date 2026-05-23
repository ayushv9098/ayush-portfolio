import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AgentationProvider } from "@/components/AgentationProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayush Vishwakarma | Full Stack & Android Developer",
  description: "Self-taught Full Stack & Android Developer building modern web applications, Android apps and futuristic digital experiences.",
  keywords: ["Ayush Vishwakarma", "Full Stack Developer", "Android Developer", "Software Engineer", "Frontend Developer", "Next.js", "Kotlin", "Portfolio"],
  authors: [{ name: "Ayush Vishwakarma" }],
  creator: "Ayush Vishwakarma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ayushv9098.github.io/ayush-portfolio/",
    title: "Ayush Vishwakarma | Full Stack & Android Developer",
    description: "Self-taught Full Stack & Android Developer building modern web applications, Android apps and futuristic digital experiences.",
    siteName: "Ayush Vishwakarma Portfolio",
    images: [
      {
        url: "/ayush-profile.png",
        width: 1200,
        height: 630,
        alt: "Ayush Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Vishwakarma | Full Stack & Android Developer",
    description: "Self-taught Full Stack & Android Developer building modern web applications, Android apps and futuristic digital experiences.",
    images: ["/ayush-profile.png"],
    creator: "@ayusxh_.10",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ayush Vishwakarma",
    "url": "https://github.com/ayushv9098",
    "jobTitle": "Full Stack & Android Developer",
    "sameAs": [
      "https://www.linkedin.com/in/ayush-vishwakarma-82573a358/",
      "https://github.com/ayushv9098",
      "https://www.instagram.com/ayusxh_.10"
    ],
    "description": "Self-taught Full Stack & Android Developer building modern web applications, Android apps and futuristic digital experiences."
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-white flex flex-col relative">
        <div className="bg-noise"></div>
        {children}
        <AgentationProvider />
      </body>
    </html>
  );
}
