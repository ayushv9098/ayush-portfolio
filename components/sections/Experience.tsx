"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Student & Software Developer",
    company: "Personal Projects & Learning",
    duration: "2026 - Present",
    desc: "Building AI-powered software, mobile apps, games, dashboards, automation tools, school management systems, and modern digital experiences while exploring AI/ML and advanced technologies.",
  },
  {
    role: "Started Software Development",
    company: "Foundational Phase",
    duration: "2024 - 2025",
    desc: "Learning programming, UI design, app development, responsive interfaces, animations, and building real-world personal projects.",
  },
  {
    role: "Exploring Technology",
    company: "Early Interest",
    duration: "Before 2024",
    desc: "Interested in computers, games, technology, design, and digital creativity which later turned into a passion for development.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-spacing relative overflow-hidden">
      <div className="section-container z-10 relative max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 md:mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
            The <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-neutral-400 text-[15px] md:text-base font-light leading-relaxed max-w-lg mx-auto">
            A chronicle of professional evolution and digital craftsmanship.
          </p>
        </motion.div>

        <div className="relative border-l border-white/5 ml-4 md:ml-0 md:pl-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="mb-12 relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 gap-8 items-start relative">
                {/* Timeline Dot */}
                <div className="absolute left-[-37px] md:left-auto md:right-[-6px] md:col-start-2 md:col-span-1 flex justify-end top-2 z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary)] border-2 border-[#030303]" />
                </div>
                
                {/* Duration */}
                <div className="md:col-span-2 md:text-right mb-2 md:mb-0 pt-1">
                  <span className="text-primary font-mono text-[10px] uppercase tracking-[0.2em] font-bold">{exp.duration}</span>
                </div>

                {/* Content */}
                <div className="md:col-span-3 md:pl-10">
                  <div className="glass-card p-6 rounded-xl border border-white/5 group hover:border-white/10 transition-all duration-500">
                    <h3 className="text-lg font-bold text-white mb-1 tracking-tight">{exp.role}</h3>
                    <h4 className="text-neutral-500 mb-4 font-semibold tracking-wide text-[11px] uppercase">{exp.company}</h4>
                    <p className="text-neutral-400 leading-relaxed text-sm font-light">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
