"use client";

import Link from "next/link";
import { GithubIcon, LinkedinIcon, InstagramIcon, TwitterIcon } from "@/components/icons/SocialIcons";

export default function Footer() {
  return (
    <footer className="py-10 sm:py-12 border-t border-white/[0.06] bg-[#050505] relative z-10">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Copyright & Company */}
        <div className="flex flex-col md:flex-row items-center text-sm font-medium text-neutral-400 text-center md:text-left gap-1 md:gap-0">
          <span>© {new Date().getFullYear()} Ayush Vishwakarma</span>
          <span className="hidden md:block mx-2.5 opacity-40">|</span>
          <span>Founder of <Link href="https://avinfra.vercel.app/" target="_blank" className="text-neutral-400 hover:text-sky-400 transition-colors">AV Infra Tech</Link></span>
        </div>

        {/* Right Side: Social Links */}
        <div className="flex items-center gap-5 sm:gap-6">
          <Link href="https://www.linkedin.com/in/ayush-vishwakarma-82573a358/" target="_blank" className="text-neutral-500 hover:text-[#3b82f6] hover:-translate-y-0.5 transition-all" aria-label="LinkedIn">
            <LinkedinIcon size={18} />
          </Link>
          <Link href="https://github.com/ayushv9098" target="_blank" className="text-neutral-500 hover:text-white hover:-translate-y-0.5 transition-all" aria-label="GitHub">
            <GithubIcon size={18} />
          </Link>
          <Link href="https://x.com/ayushv9098" target="_blank" className="text-neutral-500 hover:text-[#38bdf8] hover:-translate-y-0.5 transition-all" aria-label="Twitter">
            <TwitterIcon size={18} />
          </Link>
          <Link href="https://www.instagram.com/ayusxh_.10" target="_blank" className="text-neutral-500 hover:text-[#f472b6] hover:-translate-y-0.5 transition-all" aria-label="Instagram">
            <InstagramIcon size={18} />
          </Link>
        </div>

      </div>
    </footer>
  );
}
