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
  title: "Ayush Vishwakarma | Frontend Engineer & UI/UX Designer",
  description: "Futuristic developer portfolio of Ayush Vishwakarma. Premium, modern, and minimal design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-white flex flex-col relative">
        <div className="bg-noise"></div>
        {children}
        <AgentationProvider />
      </body>
    </html>
  );
}
