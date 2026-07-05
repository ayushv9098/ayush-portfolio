"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageSquare, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, DiscordIcon } from "@/components/icons/SocialIcons";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 pb-8 md:pt-40 md:pb-20">
      {/* Background Cinematic Lighting - Highly optimized */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] opacity-[0.08] pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-[200px] h-[200px] bg-primary rounded-full blur-[50px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-secondary rounded-full blur-[70px]" />
      </div>

      <div className="section-container z-10 relative flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
        {/* Left Content - Wider and more balanced */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center lg:text-left flex-1 max-w-xl order-2 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 mb-6 border border-white/5 mx-auto lg:mx-0"
          >
            <Sparkles size={10} className="text-primary" />
            <span>Full Stack & Android Developer</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1] text-white"
          >
            Ayush <br className="hidden lg:block" /> 
            <span className="text-gradient">Vishwakarma</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-neutral-400 mb-10 leading-relaxed font-light"
          >
            I'm a developer who builds fast, modern web and mobile apps. I enjoy turning ideas into fully working products, from the frontend to the backend.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <Link
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-white text-black rounded-full font-bold text-sm transition-all hover:bg-neutral-200"
            >
              <span>View Projects</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/resume.pdf"
              target="_blank"
              download
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 glass-card border border-white/10 text-white rounded-full font-bold text-sm transition-all hover:bg-white/5"
            >
              <Download size={14} className="group-hover:-translate-y-0.5 transition-transform" />
              <span>Resume</span>
            </Link>
            
            <div className="flex items-center gap-2.5">
              <Link
                href="https://github.com/ayushv9098"
                target="_blank"
                className="w-10 h-10 rounded-full border border-white/5 glass-card flex items-center justify-center text-white hover:bg-white/5 transition-all"
              >
                <GithubIcon size={16} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/ayush-vishwakarma-82573a358/"
                target="_blank"
                className="w-10 h-10 rounded-full border border-white/5 glass-card flex items-center justify-center text-white hover:bg-white/5 transition-all"
              >
                <LinkedinIcon size={16} />
              </Link>
              <Link
                href="https://x.com/ayushv9098"
                target="_blank"
                className="w-10 h-10 rounded-full border border-white/5 glass-card flex items-center justify-center text-white hover:bg-white/5 transition-all"
              >
                <TwitterIcon size={16} />
              </Link>
              <Link
                href="https://discord.com/users/1048510622851149865"
                target="_blank"
                className="w-10 h-10 rounded-full border border-white/5 glass-card flex items-center justify-center text-white hover:bg-white/5 transition-all"
              >
                <DiscordIcon size={16} />
              </Link>
              <Link
                href="#contact"
                className="w-10 h-10 rounded-full border border-white/5 glass-card flex items-center justify-center text-white hover:bg-white/5 transition-all"
              >
                <MessageSquare size={16} />
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image - Redesigned as a futuristic circular container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center order-1 lg:order-2"
        >
          {/* Animated Outer Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-15px] border border-dashed border-primary/20 rounded-full pointer-events-none"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-25px] border border-dotted border-secondary/10 rounded-full pointer-events-none"
          />

          <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full p-2 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 border border-white/5 shadow-2xl overflow-visible">
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full h-full rounded-full overflow-hidden glass border border-white/10 group"
            >
              <Image
                src="/ayush-profile.png"
                alt="Ayush Vishwakarma"
                fill
                priority
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Cinematic Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>

            {/* Floating Badge - Repositioned for Circle */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute bottom-2 -right-4 glass-card px-4 py-2 rounded-full border border-white/10 backdrop-blur-xl z-20"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.6)]" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-300">Available for Projects</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Grid Pattern Overlay - Extremely subtle */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.002)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.002)_1px,transparent_1px)] bg-[size:120px_120px] pointer-events-none -z-10" />
    </section>
  );
}
