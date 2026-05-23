"use client";

import { motion } from "framer-motion";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "School Fee App",
    desc: "A modern fee management platform with dashboards, student management, and WhatsApp sharing features.",
    tags: ["React", "Firebase", "Tailwind"],
    link: "https://school-fee-app.vercel.app",
    github: "https://github.com/ayushv9098",
    color: "from-blue-500/5 to-transparent",
    image: "/school-fee-app.png",
  },
  {
    title: "Student Education App",
    desc: "A modern educational platform with clean UI, responsive layouts, and student-focused features.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://student-duc.vercel.app",
    github: "https://github.com/ayushv9098",
    color: "from-purple-500/5 to-transparent",
    image: "/student-education-app.png",
  },
  {
    title: "Ayushman Educational",
    desc: "A modern educational platform with clean UI, responsive layouts, and modern dashboard design.",
    tags: ["Next.js", "React", "Tailwind"],
    link: "https://ayushmanedu.vercel.app/",
    github: "https://github.com/ayushv9098",
    color: "from-emerald-500/5 to-transparent",
    image: "/ayushman-edu.png",
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
              {/* Image Container - Switched to Contain for Full View */}
              <div 
                className="w-full aspect-video relative overflow-hidden bg-black/40 p-2 flex items-center justify-center border-b border-white/5"
              >
                {project.image.startsWith("/") ? (
                  <div className="relative w-full h-full">
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                      priority={index === 0}
                    />
                  </div>
                ) : (
                  <div className="absolute inset-0" style={{ background: project.image }} />
                )}
                
                {/* Glow Interaction */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                
                {/* Overlay Links - Always accessible and clear */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/60 backdrop-blur-[1px] translate-y-2 group-hover:translate-y-0">
                  <Link href={project.link} target="_blank" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-all shadow-2xl">
                    <ExternalLink size={18} />
                  </Link>
                  <Link href={project.github} target="_blank" className="w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-2xl border border-white/20">
                    <GithubIcon size={18} />
                  </Link>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-neutral-400 mb-6 text-sm font-light leading-relaxed line-clamp-2">
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
