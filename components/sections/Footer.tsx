"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon, TwitterIcon } from "@/components/icons/SocialIcons";

export default function Footer() {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ayush-vishwakarma-82573a358/",
      icon: <LinkedinIcon size={18} />,
      hoverColor: "hover:text-[#3b82f6]",
    },
    {
      name: "GitHub",
      href: "https://github.com/ayushv9098",
      icon: <GithubIcon size={18} />,
      hoverColor: "hover:text-white",
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/ayushv9098",
      icon: <TwitterIcon size={18} />,
      hoverColor: "hover:text-white",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/ayusxh_.10",
      icon: <InstagramIcon size={18} />,
      hoverColor: "hover:text-[#f472b6]",
    },
  ];

  return (
    <footer className="border-t border-white/[0.08] bg-[#060608] relative z-10 py-8 sm:py-10">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">
        
        {/* Left Side: Copyright & Company */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-xs sm:text-sm text-neutral-400 text-center sm:text-left">
          <span>© {new Date().getFullYear()} Ayush Vishwakarma. All rights reserved.</span>
          <span className="hidden sm:inline opacity-30">•</span>
          <span className="inline-flex items-center gap-1.5">
            <span>Founder of</span>
            <Link
              href="https://avinfra.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-sky-400 transition-colors inline-flex items-center gap-0.5 font-medium"
            >
              <span>AV Infra Tech</span>
              <ArrowUpRight size={13} className="opacity-70" />
            </Link>
          </span>
        </div>

        {/* Right Side: Social Media Icons without outer circle */}
        <div className="flex items-center gap-5 sm:gap-6">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className={`text-neutral-500 transition-all duration-200 hover:-translate-y-0.5 ${social.hoverColor}`}
            >
              {social.icon}
            </Link>
          ))}
        </div>

      </div>
    </footer>
  );
}
