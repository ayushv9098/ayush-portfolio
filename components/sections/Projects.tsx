"use client";

import { motion } from "framer-motion";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "School Fee App",
    desc: "A full-stack school management system that automates fee tracking, generates instant digital receipts, and sends real-time WhatsApp reminders to parents. Currently used by 2 schools managing 400+ students, replacing manual registers and follow-up calls.",
    tags: ["React", "Firebase", "Tailwind"],
    link: "https://school-fee-app.vercel.app",
    github: "https://github.com/ayushv9098",
    image: "/chatgpt-project.png",
  },
  {
    title: "Student Document Management App",
    desc: "A secure cloud platform that lets institutions upload, categorize, and instantly search student records — cutting document lookup from minutes to seconds with role-based access.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://student-duc.vercel.app",
    github: "https://github.com/ayushv9098",
    image: "/student-management-new.png",
  },
  {
    title: "Ayushman Educational",
    desc: "An interactive learning portal with structured course modules and a personal student dashboard for progress tracking — built for a clean, distraction-free study experience across devices.",
    tags: ["Next.js", "React", "Tailwind"],
    link: "https://ayushmanedu.vercel.app/",
    github: "https://github.com/ayushv9098",
    image: "/ayushman-edu-new.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-spacing relative overflow-hidden">
      <div className="section-container z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
              Real-World <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-neutral-400 text-[15px] md:text-base font-light leading-relaxed">
              Focusing on building functional systems that solve real problems.
            </p>
          </div>
          <Link href="https://github.com/ayushv9098" target="_blank" className="group inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-all pb-1.5 border-b border-white/5 hover:border-primary text-sm font-medium">
            <span>GitHub Profile</span>
            <ExternalLink size={14} className="group-hover:rotate-45 transition-transform duration-300" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="glass-card rounded-2xl overflow-hidden group border border-white/5 transition-all duration-300 flex flex-col hover:border-white/10"
            >
              {project.image && (
                 <div className="w-full aspect-video relative overflow-hidden bg-black/40 border-b border-white/5">
             <Image
               src={project.image}
               alt={project.title}
               fill
               sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-primary transition-colors pr-4">{project.title}</h3>
                  <div className="flex items-center gap-3 shrink-0">
                    <Link href={project.github} target="_blank" className="text-neutral-400 hover:text-white transition-colors">
                      <GithubIcon size={18} />
                    </Link>
                    <Link href={project.link} target="_blank" className="text-neutral-400 hover:text-white transition-colors">
                      <ExternalLink size={18} />
                    </Link>
                  </div>
                </div>
                <p className="text-neutral-400 mb-6 text-sm font-light leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-neutral-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
