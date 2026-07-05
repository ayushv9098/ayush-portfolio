"use client";

import { motion } from "framer-motion";
import { User, Target, Lightbulb, Rocket } from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: <Target className="text-primary" size={20} />,
      title: "Problem Solver",
      desc: "Transforming complex challenges into elegant, functional digital solutions."
    },
    {
      icon: <User className="text-secondary" size={20} />,
      title: "User Centric",
      desc: "Designing with the end-user in mind, ensuring every interaction feels natural."
    },
    {
      icon: <Lightbulb className="text-accent" size={20} />,
      title: "Self Taught",
      desc: "Driven by curiosity and a relentless passion for learning new technologies."
    },
    {
      icon: <Rocket className="text-primary" size={20} />,
      title: "Future Focused",
      desc: "Evolving with the tech landscape, from mobile apps to AI-integrated platforms."
    }
  ];

  return (
    <section id="about" className="section-spacing relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Side: Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:pt-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 mb-6 border border-white/5">
              <User size={10} className="text-primary" />
              <span>About Me</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight leading-tight">
              Behind the <span className="text-gradient">Code</span>
            </h2>
            
            <div className="text-neutral-400 font-light leading-relaxed text-sm md:text-base max-w-xl">
              <p>
                I am <span className="text-white font-medium">Ayush Vishwakarma</span>, a Developer focused on building high-performance apps and real-world digital solutions.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Key Pillars Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 grid grid-cols-2 gap-4"
          >
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                className="glass-card p-4 md:p-5 rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-500">
                  <div className="scale-90">{pillar.icon}</div>
                </div>
                <h3 className="text-xs font-bold text-white mb-1 tracking-tight">{pillar.title}</h3>
                <p className="text-[11px] md:text-xs text-neutral-500 leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />
    </section>
  );
}
