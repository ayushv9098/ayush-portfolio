"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons/SocialIcons";
import ThemeToggle from "@/components/layout/ThemeToggle";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 sm:pt-5 px-3 sm:px-4 pointer-events-none transition-all">
      <nav
        className={`w-full max-w-3xl rounded-full px-4 sm:px-5 py-2.5 flex items-center justify-between pointer-events-auto transition-all duration-500 relative ${
          scrolled
            ? "bg-gradient-to-b from-white/[0.12] to-transparent backdrop-blur-[40px] border border-white/[0.15] shadow-[0_16px_40px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.3),inset_0_0_0_1px_rgba(255,255,255,0.05)]"
            : "bg-gradient-to-b from-white/[0.08] to-transparent backdrop-blur-[30px] border border-white/[0.08] shadow-[0_8px_24px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.15)]"
        }`}
      >

        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group relative z-10">
          <span className="w-7 h-7 rounded-full bg-gradient-to-b from-white via-neutral-100 to-neutral-300 text-neutral-950 text-xs font-bold flex items-center justify-center shadow-[0_2px_8px_rgba(255,255,255,0.3),inset_0_1px_1px_rgba(255,255,255,0.9)] transition-transform duration-300 group-hover:scale-105">
            A
          </span>
          <div className="flex flex-col">
            <span className="text-white text-sm font-semibold tracking-tight leading-none group-hover:text-neutral-200 transition-colors drop-shadow-xs">
              Ayush
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-6 text-xs font-medium text-neutral-300 relative z-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="hover:text-white transition-colors duration-200 py-1 tracking-wide hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-1 sm:gap-3 relative z-10">
          {/* Desktop Socials & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-1 text-neutral-300 border-r border-white/20 pr-2.5">
              <Link href="https://github.com/ayushv9098" target="_blank" aria-label="GitHub" className="p-1.5 hover:text-white transition-colors rounded-full hover:bg-white/10">
                <GithubIcon size={14} />
              </Link>
              <Link href="https://www.linkedin.com/in/ayush-vishwakarma-82573a358/" target="_blank" aria-label="LinkedIn" className="p-1.5 hover:text-white transition-colors rounded-full hover:bg-white/10">
                <LinkedinIcon size={14} />
              </Link>
            </div>
            <Link href="#contact" className="inline-flex items-center gap-1.5 bg-white hover:bg-blue-500 text-neutral-950 hover:text-white text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all duration-300 hover:scale-102 active:scale-98 shadow-[0_2px_14px_rgba(255,255,255,0.35)] hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]">
              <span>Get in touch</span>
              <ArrowUpRight size={12} className="stroke-[2.5]" />
            </Link>
          </div>

          {/* Always Visible Controls */}
          <div className="flex items-center gap-1 border-l border-white/10 pl-1 sm:border-none sm:pl-0">
            <ThemeToggle />
            
            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-1.5 text-neutral-200 hover:text-white focus:outline-none rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden fixed top-[72px] left-3 right-3 bg-gradient-to-b from-white/[0.12] to-transparent backdrop-blur-[40px] border border-white/[0.15] rounded-3xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.3),inset_0_0_0_1px_rgba(255,255,255,0.05)] flex flex-col gap-2 z-50 pointer-events-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-neutral-200 hover:text-white px-3 py-2 rounded-xl hover:bg-white/10 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3 border-t border-white/15 flex flex-wrap items-center justify-between gap-3 px-1 sm:px-2">
            <div className="flex items-center gap-1 sm:gap-2 text-neutral-300">
              <Link href="https://github.com/ayushv9098" target="_blank" aria-label="GitHub" className="p-1.5 hover:text-white transition-colors">
                <GithubIcon size={16} />
              </Link>
              <Link href="https://www.linkedin.com/in/ayush-vishwakarma-82573a358/" target="_blank" aria-label="LinkedIn" className="p-1.5 hover:text-white transition-colors">
                <LinkedinIcon size={16} />
              </Link>
              <Link href="https://x.com/ayushv9098" target="_blank" aria-label="Twitter" className="p-1.5 hover:text-white transition-colors">
                <TwitterIcon size={16} />
              </Link>
            </div>
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="bg-white hover:bg-blue-500 text-neutral-950 hover:text-white transition-colors duration-300 text-xs font-semibold px-4 py-2 rounded-full shadow-[0_2px_10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] shrink-0"
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
