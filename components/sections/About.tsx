"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Globe } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Globe className="text-primary" size={20} />,
      title: "Software Development",
      desc: "Developing robust and scalable software solutions with a focus on architecture, performance, and user-centric design.",
    },
    {
      icon: <Smartphone className="text-secondary" size={20} />,
      title: "Android Development",
      desc: "Crafting native Android applications with Kotlin and Jetpack Compose for a smooth and intuitive user experience.",
    },
    {
      icon: <Code2 className="text-accent" size={20} />,
      title: "Full Stack Systems",
      desc: "Designing complete real-world systems like fee management platforms and educational apps with robust backends.",
    },
  ];

  return (
    <section id="about" className="section-spacing relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="glass-card p-6 rounded-2xl relative group overflow-hidden border border-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-all duration-500 ease-out">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-light group-hover:text-neutral-300 transition-colors">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
