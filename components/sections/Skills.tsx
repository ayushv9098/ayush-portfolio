"use client";

import { motion, Variants } from "framer-motion";
import { 
  Code2, 
  Smartphone, 
  Database, 
  Layers, 
  Monitor, 
  Zap, 
  Cpu, 
  Layout, 
  PenTool, 
  Wind,
  Server
} from "lucide-react";

interface Skill {
  name: string;
  icon?: React.ReactNode;
}

interface Category {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: string[];
}

const skillCategories: Category[] = [
  {
    title: "Frontend",
    icon: <Monitor size={18} />,
    color: "from-blue-500/20 to-cyan-500/20",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"]
  },
  {
    title: "Mobile Development",
    icon: <Smartphone size={18} />,
    color: "from-purple-500/20 to-indigo-500/20",
    skills: ["Kotlin", "Jetpack Compose", "Flutter"]
  },
  {
    title: "Backend & Database",
    icon: <Database size={18} />,
    color: "from-emerald-500/20 to-teal-500/20",
    skills: ["Firebase", "Supabase", "PostgreSQL", "Python"]
  },
  {
    title: "Design & Animation",
    icon: <PenTool size={18} />,
    color: "from-pink-500/20 to-rose-500/20",
    skills: ["Figma", "Framer Motion", "GSAP"]
  }
];

export default function Skills() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="skills" className="py-8 md:py-24 relative overflow-hidden">
      <div className="section-container z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 md:mb-16"
        >
          <h2 className="text-2xl md:text-5xl font-bold mb-2 md:mb-6 tracking-tight">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-neutral-500 max-w-[280px] md:max-w-xl mx-auto text-[12px] md:text-base font-light leading-relaxed px-4">
            A specialized toolkit for building high-performance web, mobile, and digital experiences.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-2 gap-2.5 md:gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass-card rounded-xl md:rounded-2xl p-3 md:p-6 border border-white/[0.03] relative group overflow-hidden h-full flex flex-col"
            >
              {/* Animated Gradient Background - Subtler on mobile */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-2 md:gap-3 mb-2.5 md:mb-5">
                  <div className="w-7 h-7 md:w-10 md:h-10 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500 shrink-0">
                    <div className="scale-[0.6] md:scale-100">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-[11px] md:text-lg font-bold text-white tracking-tight leading-tight">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-1 md:gap-2 mt-auto">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-1.5 py-0.5 md:px-3 md:py-1.5 rounded-md bg-white/[0.02] border border-white/[0.05] text-[9px] md:text-[13px] font-medium text-neutral-500 hover:text-white hover:border-white/10 hover:bg-white/10 transition-all duration-300 cursor-default whitespace-nowrap"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent w-full pointer-events-none opacity-20" />
    </section>
  );
}
