"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/icons/SocialIcons";
import { Mail } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none"
    >
      <nav className="glass-card px-5 py-2 rounded-full flex items-center gap-6 border border-white/5 bg-black/40 backdrop-blur-lg pointer-events-auto shadow-sm">
        <Link href="/" className="flex items-center gap-2 group mr-2">
          <div className="w-8 h-8 relative flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            <Image
              src="/logo.png"
              alt="AV Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-white text-sm font-semibold tracking-tight hidden sm:block">Ayush</span>
        </Link>

        <ul className="hidden md:flex items-center gap-5 text-[13px] font-medium text-neutral-400">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="hover:text-white transition-colors duration-300 py-1"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3.5 text-neutral-400 border-l border-white/10 pl-4">
          <Link href="https://github.com/ayushv9098" target="_blank" className="hover:text-white transition-colors">
            <GithubIcon size={15} />
          </Link>
          <Link href="https://www.linkedin.com/in/ayush-vishwakarma-82573a358/" target="_blank" className="hover:text-white transition-colors">
            <LinkedinIcon size={15} />
          </Link>
          <Link href="https://www.instagram.com/ayusxh_.10" target="_blank" className="hover:text-white transition-colors">
            <InstagramIcon size={15} />
          </Link>
          <Link href="#contact" className="flex items-center gap-1.5 bg-white/5 text-white px-4 py-2 rounded-full text-[11px] font-bold transition-all border border-white/10 hover:bg-white/10 hover:border-primary/50 group/btn">
            <Mail size={11} className="text-primary group-hover/btn:scale-110 transition-transform" />
            Connect
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
