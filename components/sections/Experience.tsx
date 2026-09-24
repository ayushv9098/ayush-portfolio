"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    period: "2026 — Present",
    role: "Independent Creator",
    desc: "I build and launch real applications. Right now, my custom school software handles daily operations and automated WhatsApp billing for over 400 students.",
  },
  {
    period: "2024 — 2025",
    role: "Learning & Mentorship",
    desc: "I learned how to build modern websites using React and Next.js under the guidance of my elder brother (a Senior Tech Lead), and launched my first projects to the web.",
  },
  {
    period: "Before 2024",
    role: "The Beginning",
    desc: "I started by learning the basics of coding (HTML, CSS, JavaScript). I built small logic games and discovered my passion for creating software.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="pt-8 sm:pt-12 pb-16 sm:pb-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 sm:px-10">
        
        {/* Minimal Sized Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-3">
            My Journey
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light">
            A quick look at how I started and what I am doing now.
          </p>
        </div>

        {/* Premium Horizontal Split Timeline */}
        <div className="flex flex-col border-t border-white/[0.06]">
          {milestones.map((exp, index) => (
            <motion.div
              key={exp.period}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col md:flex-row gap-4 md:gap-16 py-8 sm:py-10 border-b border-white/[0.06] hover:bg-white/[0.01] transition-colors -mx-5 px-5 sm:-mx-10 sm:px-10"
            >
              <div className="md:w-1/3 shrink-0">
                <div className="text-xl sm:text-2xl font-light text-white mb-2 transition-transform duration-500 group-hover:translate-x-2">
                  {exp.period}
                </div>
                <div className="text-[11px] font-mono tracking-widest uppercase text-neutral-500 transition-transform duration-500 group-hover:translate-x-2">
                  {exp.role}
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl">
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
