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
  metadataBase: new URL("https://ayushh.me"),
  title: "Ayush Vishwakarma | Full Stack & Android Architect",
  description: "Self-taught Full Stack & Android Architect crafting modern web applications, Android apps and futuristic digital experiences.",
  keywords: ["Ayush Vishwakarma", "Full Stack Architect", "Android Architect", "Software Builder", "Frontend Builder", "Next.js", "Kotlin", "Portfolio"],
  authors: [{ name: "Ayush Vishwakarma" }],
  creator: "Ayush Vishwakarma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ayushh.me",
    title: "Ayush Vishwakarma | Full Stack & Android Architect",
    description: "Self-taught Full Stack & Android Architect crafting modern web applications, Android apps and futuristic digital experiences.",
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
    title: "Ayush Vishwakarma | Full Stack & Android Architect",
    description: "Self-taught Full Stack & Android Architect crafting modern web applications, Android apps and futuristic digital experiences.",
    images: ["/ayush-profile.png"],
    creator: "@ayushv9098",
  },
  icons: {
    icon: "/favicon.svg",
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
    "jobTitle": "Full Stack & Android Architect",
    "sameAs": [
      "https://www.linkedin.com/in/ayush-vishwakarma-82573a358/",
      "https://github.com/ayushv9098",
      "https://www.instagram.com/ayusxh_.10",
      "https://x.com/ayushv9098"
    ],
    "description": "Self-taught Full Stack & Android Architect crafting modern web applications, Android apps and futuristic digital experiences."
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
      <body className="min-h-screen bg-[#060608] text-[#f5f5f7] antialiased selection:bg-white/20 selection:text-white flex flex-col relative">
        {children}
        <AgentationProvider />
      </body>
    </html>
  );
}
