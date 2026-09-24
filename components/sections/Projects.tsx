"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import Link from "next/link";
import BentoCard from "@/components/ui/BentoCard";

const projects = [
  {
    title: "School Fee Management Suite",
    badge: "Production • Live in 2 Schools",
    isFlagship: true,
    desc: "A full-scale automated fee management system running daily in 2 schools to streamline fee collections for 400+ students, issue instant digital invoices, and dispatch real-time WhatsApp payment receipts.",
    tags: ["React", "Firebase", "Tailwind CSS", "WhatsApp Cloud API"],
    link: "https://school-fee-app.vercel.app",
    github: "https://github.com/ayushv9098",
  },
  {
    title: "English Bolo",
    badge: "AI Spoken English Platform",
    isFlagship: false,
    desc: "An intelligent interactive platform built for conversational fluency, combining guided spoken dialogs, contextual grammar practice, and real-time audio/text pronunciation analysis.",
    tags: ["Next.js", "React", "Supabase", "TypeScript", "AI Integration"],
    link: "https://english-bolo.vercel.app/",
    github: "https://github.com/ayushv9098/english-bolo",
  },
  {
    title: "Student Document Cloud",
    badge: "Encrypted Cloud Storage",
    isFlagship: false,
    desc: "A secure digital archive tailored for institutes to index, encrypt, and instantly look up academic documents and student records with role-based security controls.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Cloud Storage"],
    link: "https://student-duc.vercel.app",
    github: "https://github.com/ayushv9098",
  },
  {
    title: "Ayushman Educational",
    badge: "E-Learning Ecosystem",
    isFlagship: false,
    desc: "A modern, modular e-learning platform providing structured curriculum paths, intuitive video modules, and multi-device student progress tracking.",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    link: "https://ayushmanedu.vercel.app/",
    github: "https://github.com/ayushv9098",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="pt-16 sm:pt-24 pb-8 sm:pb-12 relative border-t border-white/[0.06]">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] max-w-full h-[350px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
            <span>Selected Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Featured <span className="silver-gradient">Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-light">
            Real products and mission-critical applications I have architected, deployed, and actively maintain.
          </p>
        </div>

        {/* Sticky Stacking List */}
        <div className="w-full flex flex-col relative mt-8 sm:mt-12 pb-16 max-w-4xl mx-auto gap-8 sm:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="sticky w-full"
              style={{ top: `calc(7rem + ${index * 1.25}rem)` }}
            >
              <BentoCard className="p-6 sm:p-8 flex flex-col md:flex-row gap-6 md:gap-10 justify-between items-start md:items-center !bg-[#060608] hover:!bg-[#0a0a0c] border border-white/10 shadow-[0_-12px_40px_rgba(0,0,0,0.8)] group hover:border-white/20 transition-all duration-300 rounded-3xl !transform-none">
                
                {/* Info Container */}
                <div className="flex-1 w-full">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-neutral-200 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6 font-light max-w-2xl">
                    {project.desc}
                  </p>

                  {/* Technology Pills */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-row md:flex-col items-center md:items-end gap-3 w-full md:w-auto mt-2 md:mt-0 pt-4 md:pt-0 border-t border-white/10 md:border-t-0 shrink-0">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="flex-1 md:flex-none inline-flex justify-center items-center gap-2 bg-white hover:bg-neutral-100 text-neutral-950 text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 shadow-[0_2px_12px_rgba(255,255,255,0.2)]"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={14} className="stroke-[2.5]" />
                  </Link>

                  <Link
                    href={project.github}
                    target="_blank"
                    className="flex-1 md:flex-none inline-flex justify-center items-center gap-2 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-neutral-300 hover:text-white text-xs sm:text-sm font-medium px-6 py-2.5 rounded-full transition-colors duration-200"
                  >
                    <GithubIcon size={14} />
                    <span>Source Code</span>
                  </Link>
                </div>
              </BentoCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
