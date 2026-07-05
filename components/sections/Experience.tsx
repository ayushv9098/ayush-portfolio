"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Search } from "lucide-react";

const experiences = [
  {
    role: "Full Stack & AI Developer",
    company: "Freelance / Self-Initiated",
    duration: "2026 - Present",
    desc: "Building and shipping real products — English Bolo (AI English tutor), School Fee App used by 2 schools daily, and exploring AI/ML integration in web apps. Actively freelancing and learning by building.",
    icon: <Code2 size={18} className="text-primary" />,
    color: "from-primary/10 to-transparent"
  },
  {
    role: "Learning & Building Phase",
    company: "Mentored by Brother (Software Engineer)",
    duration: "2024 - 2025",
    desc: "Learned React, Next.js, Firebase, and Tailwind under my brother's guidance — he's a Software Engineer and taught me everything hands-on. Built my first real apps and deployed them live on Vercel.",
    icon: <GraduationCap size={18} className="text-secondary" />,
    color: "from-secondary/10 to-transparent"
  },
  {
    role: "The Spark",
    company: "Curiosity & First Steps",
    duration: "Before 2024",
    desc: "Got introduced to coding by my brother. Started with basic HTML/CSS, spent hours watching him work, and slowly picked up things. That's when I realized — this is what I want to do for real.",
    icon: <Search size={18} className="text-accent" />,
    color: "from-accent/10 to-transparent"
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-spacing relative overflow-hidden">
      <div className="section-container z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 tracking-tight">
            The <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-neutral-500 text-sm md:text-base font-light max-w-xl">
            A concise timeline of my evolution from technology enthusiast to full-stack developer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl border border-white/10 group relative overflow-hidden flex flex-col hover:border-white/20"
            >
              {/* Animated Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    {exp.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-widest">{exp.duration}</span>
                </div>
                
                <h3 className="text-base font-bold text-white mb-1 tracking-tight group-hover:text-primary transition-colors">{exp.role}</h3>
                <h4 className="text-[10px] text-neutral-500 mb-4 font-semibold uppercase tracking-wider">{exp.company}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
