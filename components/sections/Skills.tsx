"use client";

import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Database,
  Monitor,
  PenTool,
  Cloud,
  Bot,
  ChevronDown,
} from "lucide-react";


// Skill logos as inline SVG components for crisp rendering
const SkillLogos: Record<string, React.ReactNode> = {
  // Frontend
  "HTML5": (
    <svg viewBox="0 0 32 32" className="w-full h-full"><path fill="#E44D26" d="M6 28.5l-2-22.5h24l-2 22.5-10 3z"/><path fill="#F16529" d="M16 28.7l8-2.2 1.7-19.5H16z"/><path fill="#EBEBEB" d="M16 13.5h-4.5l-.3-3.5H16V6.5H7.5l.1 1.5.9 10H16zm0 7.3l-.1.1-3.7-1-.2-2.6h-3.5l.5 5.1 7 1.9z"/><path fill="#fff" d="M16 13.5v3.5h4.2l-.4 4.5-3.8 1v3.5l7-1.9.1-.6.8-8.5.1-1.5h-1.5H16zm0-7v3.5h8.2l.1-1.1.2-2.4z"/></svg>
  ),
  "CSS3": (
    <svg viewBox="0 0 32 32" className="w-full h-full"><path fill="#1572B6" d="M6 28.5l-2-22.5h24l-2 22.5-10 3z"/><path fill="#33A9DC" d="M16 28.7l8-2.2 1.7-19.5H16z"/><path fill="#EBEBEB" d="M16 13.5H10l.3 3.5H16v-3.5zm0-7H7.5l.3 3.5H16V6.5zm0 17.3l-.1.1-3.7-1-.2-2.6h-3.5l.5 5.1 7 1.9v-3.5z"/><path fill="#fff" d="M16 13.5v3.5h3.8l-.4 4.5-3.4.9v3.5l6.6-1.8.1-.6.7-8 .1-1.5H16zm0-7v3.5h8.1l.1-.7.2-1.3.1-1.5H16z"/></svg>
  ),
  "JavaScript": (
    <svg viewBox="0 0 32 32" className="w-full h-full"><rect width="32" height="32" rx="2" fill="#F7DF1E"/><path d="M21.2 24.4c.7 1.2 1.7 2 3.3 2 1.4 0 2.3-.7 2.3-1.6 0-1.1-.9-1.5-2.5-2.2l-.9-.4c-2.5-1-4.1-2.3-4.1-5.1 0-2.5 1.9-4.5 4.9-4.5 2.2 0 3.7.7 4.8 2.6l-2.6 1.7c-.6-1-1.2-1.4-2.2-1.4s-1.6.6-1.6 1.4c0 1 .6 1.4 2 2l.9.4c2.9 1.2 4.5 2.5 4.5 5.3 0 3-2.4 4.7-5.6 4.7-3.1 0-5.2-1.5-6.1-3.4l2.8-1.5zM8.8 24.6c.5 1 1 1.8 2.2 1.8 1.1 0 1.8-.4 1.8-2.1v-11h3.4v11.1c0 3.5-2 5-5 5-2.7 0-4.2-1.4-5-3.1l2.6-1.7z" fill="#000"/></svg>
  ),
  "TypeScript": (
    <svg viewBox="0 0 32 32" className="w-full h-full"><rect width="32" height="32" rx="2" fill="#3178C6"/><path fill="#fff" d="M7 15.5h10.5v2.2H14v9.3h-2.7v-9.3H7v-2.2zm12.3 1c0 0 1.8-1.3 4.2-1.3 3.5 0 5.2 1.8 5.2 4.2v7.6h-2.5v-1.6c0 0-1.2 1.9-3.5 1.9-2.2 0-4-1.3-4-3.5 0-2.6 2.3-3.7 4.2-3.7 1.7 0 3.2.5 3.2.5v-.9c0-1.2-1-2.1-2.6-2.1-1.8 0-3.3 1-3.3 1l-.9-2.1z"/></svg>
  ),
  "React": (
    <svg viewBox="0 0 32 32" className="w-full h-full"><circle cx="16" cy="16" r="2.5" fill="#61DAFB"/><g stroke="#61DAFB" fill="none" strokeWidth="1.5"><ellipse cx="16" cy="16" rx="11" ry="4.2"/><ellipse cx="16" cy="16" rx="11" ry="4.2" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="11" ry="4.2" transform="rotate(120 16 16)"/></g></svg>
  ),
  "Next.js": (
    <svg viewBox="0 0 32 32" className="w-full h-full"><circle cx="16" cy="16" r="14" fill="#000" stroke="#fff" strokeWidth="1"/><path d="M12.7 11h2v10h-2zM21.3 11l-8 12.5h2.5l8-12.5z" fill="#fff"/></svg>
  ),
  "Tailwind CSS": (
    <svg viewBox="0 0 32 32" className="w-full h-full"><path fill="#38BDF8" d="M9 13.7C10.2 9.2 13 7 17 7c6 0 6.8 4.5 9.8 5.2 2 .5 3.7-.2 5.2-2.2-1.2 4.5-4 6.7-8 6.7-6 0-6.8-4.5-9.8-5.2-2-.5-3.7.2-5.2 2.2zm-9 10C1.2 19.2 4 17 8 17c6 0 6.8 4.5 9.8 5.2 2 .5 3.7-.2 5.2-2.2-1.2 4.5-4 6.7-8 6.7-6 0-6.8-4.5-9.8-5.2-2-.5-3.7.2-5.2 2.2z"/></svg>
  ),
  "Shadcn UI": (
    <svg viewBox="0 0 32 32" className="w-full h-full"><rect width="32" height="32" rx="16" fill="#000" stroke="#fff" strokeWidth="1.5"/><path d="M8 24L24 8" stroke="#fff" strokeWidth="3" strokeLinecap="round"/></svg>
  ),
  "Material UI": (
    <svg viewBox="0 0 32 32" className="w-full h-full"><path fill="#007FFF" d="M4 6l8 4.5v9L4 15v-9zm0 11l8 4.5v4.5L4 21.5V17zm10-6.5L22 6v9l-8 4.5v-9zm10 0l4-2.25V19l-8 4.5v-4.5l4-2.25v-6.25z"/></svg>
  ),
  "Responsive Design": (
    <svg viewBox="0 0 32 32" className="w-full h-full"><rect x="2" y="6" width="20" height="14" rx="1.5" fill="none" stroke="#60A5FA" strokeWidth="1.5"/><rect x="18" y="12" width="12" height="16" rx="1.5" fill="none" stroke="#60A5FA" strokeWidth="1.5"/><line x1="12" y1="22" x2="12" y2="25" stroke="#60A5FA" strokeWidth="1.5"/><line x1="8" y1="25" x2="16" y2="25" stroke="#60A5FA" strokeWidth="1.5"/></svg>
  ),
  // Mobile
  "Kotlin": (
    <svg viewBox="0 0 32 32" className="w-full h-full"><defs><linearGradient id="kt" x1="0" y1="32" x2="32" y2="0"><stop offset="0%" stopColor="#E44857"/><stop offset="50%" stopColor="#C711E1"/><stop offset="100%" stopColor="#7F52FF"/></linearGradient></defs><path fill="url(#kt)" d="M2 30V2h28L16 16l14 14z"/></svg>
  ),
  "Flutter": (
    <svg viewBox="0 0 32 32" className="w-full h-full"><path fill="#54C5F8" d="M18.4 2L4 16.4l4.5 4.5L27 2z"/><path fill="#54C5F8" d="M18.4 16.2l-5.3 5.3 4.5 4.5 9.8-9.8z"/><path fill="#01579B" d="M13.1 21.5l4.5 4.5-4.5 4.5-4.5-4.5z"/><path fill="#29B6F6" d="M13.1 21.5l2.2-2.3 2.3 2.3-2.3 2.2z"/></svg>
  ),
  "Expo": (
    <svg viewBox="0 0 32 32" className="w-full h-full"><circle cx="16" cy="16" r="14" fill="#000" stroke="#fff" strokeWidth="1"/><path d="M16 8c-1.5 0-2.5 1-3.5 3l-5 10c-.5 1-.5 1.5 0 2s1.5.5 2 0l6.5-12 6.5 12c.5.5 1.5.5 2 0s.5-1 0-2l-5-10c-1-2-2-3-3.5-3z" fill="#fff"/></svg>
  ),
  // Backend
  "Node.js": (
    <svg viewBox="0 0 32 32" className="w-full h-full"><path fill="#539E43" d="M16 2.3L3.5 9.5v14.1L16 30.7l12.5-7.1V9.5z"/><path fill="#fff" d="M16 7l-7 4v8l7 4 7-4v-8z" opacity="0.3"/><path fill="#fff" d="M14 14h4v6h-4z"/></svg>
  ),
  "Firebase": (
    <svg viewBox="0 0 32 32" className="w-full h-full"><path fill="#FFA000" d="M8 24l2.5-15.5 3.5 6.5z"/><path fill="#F57F17" d="M8 24L14 15l2-8-3.5-3z"/><path fill="#FFCA28" d="M8 24l16.5 2L21 7.5 14 15z"/><path fill="#FFA000" d="M24.5 26L21 7.5 14 15l-6 9z" opacity="0.3"/></svg>
  ),
  "Firebase Auth": (
    <svg viewBox="0 0 32 32" className="w-full h-full"><path fill="#FFA000" d="M8 24l2.5-15.5 3.5 6.5z"/><path fill="#FFCA28" d="M8 24l16.5 2L21 7.5 14 15z"/><circle cx="20" cy="12" r="3" fill="#fff" stroke="#FFA000" strokeWidth="1.5"/><path d="M17 16h6v3c0 1.5-1.3 3-3 3s-3-1.5-3-3z" fill="#fff" stroke="#FFA000" strokeWidth="1"/></svg>
  ),
  "Supabase": (
    <svg viewBox="0 0 32 32" className="w-full h-full"><path fill="#3ECF8E" d="M18 28c-.5.6-1.5.2-1.5-.6V18h10c1.6 0 2.5 1.9 1.4 3.1z"/><path fill="#3ECF8E" opacity="0.5" d="M14 4c.5-.6 1.5-.2 1.5.6V14H5.5c-1.6 0-2.5-1.9-1.4-3.1z"/></svg>
  ),
  "SQL": (
    <svg viewBox="0 0 32 32" className="w-full h-full"><ellipse cx="16" cy="8" rx="10" ry="4" fill="none" stroke="#60A5FA" strokeWidth="1.5"/><path d="M6 8v16c0 2.2 4.5 4 10 4s10-1.8 10-4V8" fill="none" stroke="#60A5FA" strokeWidth="1.5"/><ellipse cx="16" cy="16" rx="10" ry="4" fill="none" stroke="#60A5FA" strokeWidth="1.5" opacity="0.4"/></svg>
  ),
  // Cloud
  "AWS": (
    <svg viewBox="0 0 32 32" className="w-full h-full"><path fill="#FF9900" d="M9.2 22.5c-2.5-1.3-4.2-3.2-4.2-5.5 0-4.4 5-8 11-8s11 3.6 11 8-5 8-11 8c-2.5 0-4.8-.6-6.8-1.5"/><path fill="#FF9900" d="M26 22l3 2-3 2v-4z"/><path fill="#252F3E" d="M16 11a7 4 0 100 8 7 4 0 000-8z"/></svg>
  ),
  "Vercel": (
    <svg viewBox="0 0 32 32" className="w-full h-full"><path fill="#fff" d="M16 4L2 28h28z"/></svg>
  ),
  "Netlify": (
    <svg viewBox="0 0 32 32" className="w-full h-full"><path fill="#00C7B7" d="M22.5 16.2l-3.3-3.3 3.6-1.5.9.9zm-5-5l-1.2-1.2-5.2 2.1 3.2 3.2zm7.5-2l-1.8-1.8-3.3 1.4 3 3zM16 2L4 14l12 12 12-12zm0 3l9 9-9 9-9-9z"/></svg>
  ),
  // AI
  "AI API Integration": (
    <svg viewBox="0 0 32 32" className="w-full h-full"><rect x="4" y="10" width="10" height="12" rx="2" fill="none" stroke="#A78BFA" strokeWidth="1.5"/><rect x="18" y="10" width="10" height="12" rx="2" fill="none" stroke="#A78BFA" strokeWidth="1.5"/><path d="M14 14h4M14 18h4" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round"/><circle cx="9" cy="16" r="2" fill="#A78BFA"/><circle cx="23" cy="16" r="2" fill="#A78BFA"/></svg>
  ),
  "AI Chatbots": (
    <svg viewBox="0 0 32 32" className="w-full h-full"><rect x="4" y="4" width="24" height="18" rx="3" fill="none" stroke="#A78BFA" strokeWidth="1.5"/><circle cx="12" cy="13" r="2" fill="#A78BFA"/><circle cx="20" cy="13" r="2" fill="#A78BFA"/><path d="M12 17c0 2.2 1.8 4 4 4s4-1.8 4-4" fill="none" stroke="#A78BFA" strokeWidth="1.5"/><path d="M10 22l-3 6M22 22l3 6" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round"/></svg>
  ),
  "AI Integration": (
    <svg viewBox="0 0 32 32" className="w-full h-full"><circle cx="16" cy="16" r="4" fill="none" stroke="#A78BFA" strokeWidth="1.5"/><circle cx="16" cy="5" r="2.5" fill="#A78BFA"/><circle cx="16" cy="27" r="2.5" fill="#A78BFA"/><circle cx="5" cy="16" r="2.5" fill="#A78BFA"/><circle cx="27" cy="16" r="2.5" fill="#A78BFA"/><path d="M16 7.5v4.5M16 20v4.5M7.5 16H12M20 16h4.5" stroke="#A78BFA" strokeWidth="1.5"/></svg>
  ),
  // Design
  "Figma": (
    <svg viewBox="0 0 32 32" className="w-full h-full"><circle cx="20" cy="11" r="5" fill="#1ABCFE"/><rect x="10" y="6" width="10" height="10" rx="5" fill="#A259FF"/><rect x="10" y="16" width="10" height="10" rx="5" fill="#0ACF83"/><circle cx="15" cy="11" r="5" fill="#F24E1E"/><circle cx="15" cy="21" r="5" fill="#0ACF83"/><rect x="10" y="6" width="5" height="10" fill="#F24E1E"/><rect x="10" y="16" width="5" height="10" fill="#0ACF83"/><path d="M15 6h5a5 5 0 010 10h-5z" fill="#FF7262"/><circle cx="20" cy="16" r="5" fill="#1ABCFE"/></svg>
  ),
};

interface Skill {
  name: string;
  logo: React.ReactNode;
}

interface Category {
  title: string;
  icon: React.ReactNode;
  color: string;
  iconColor: string;
  borderColor: string;
  skills: Skill[];
}

const skillCategories: Category[] = [
  {
    title: "Frontend",
    icon: <Monitor size={18} />,
    iconColor: "text-blue-400",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "group-hover:border-blue-500/30",
    skills: [
      { name: "HTML5", logo: SkillLogos["HTML5"] },
      { name: "CSS3", logo: SkillLogos["CSS3"] },
      { name: "JavaScript", logo: SkillLogos["JavaScript"] },
      { name: "TypeScript", logo: SkillLogos["TypeScript"] },
      { name: "React.js", logo: SkillLogos["React"] },
      { name: "Next.js", logo: SkillLogos["Next.js"] },
      { name: "Tailwind CSS", logo: SkillLogos["Tailwind CSS"] },
      { name: "Shadcn UI", logo: SkillLogos["Shadcn UI"] },
      { name: "Material UI", logo: SkillLogos["Material UI"] },
      { name: "Responsive Design", logo: SkillLogos["Responsive Design"] },
    ],
  },
  {
    title: "Mobile Development",
    icon: <Smartphone size={18} />,
    iconColor: "text-purple-400",
    color: "from-purple-500/20 to-indigo-500/20",
    borderColor: "group-hover:border-purple-500/30",
    skills: [
      { name: "Kotlin", logo: SkillLogos["Kotlin"] },
      { name: "Flutter", logo: SkillLogos["Flutter"] },
      { name: "Expo", logo: SkillLogos["Expo"] },
    ],
  },
  {
    title: "Backend & Database",
    icon: <Database size={18} />,
    iconColor: "text-emerald-400",
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "group-hover:border-emerald-500/30",
    skills: [
      { name: "Node.js", logo: SkillLogos["Node.js"] },
      { name: "Firebase", logo: SkillLogos["Firebase"] },
      { name: "Firebase Auth", logo: SkillLogos["Firebase Auth"] },
      { name: "Supabase", logo: SkillLogos["Supabase"] },
      { name: "SQL", logo: SkillLogos["SQL"] },
    ],
  },
  {
    title: "Cloud & Deployment",
    icon: <Cloud size={18} />,
    iconColor: "text-orange-400",
    color: "from-orange-500/20 to-amber-500/20",
    borderColor: "group-hover:border-orange-500/30",
    skills: [
      { name: "AWS (Learning)", logo: SkillLogos["AWS"] },
      { name: "Vercel", logo: SkillLogos["Vercel"] },
      { name: "Netlify", logo: SkillLogos["Netlify"] },
    ],
  },
  {
    title: "AI",
    icon: <Bot size={18} />,
    iconColor: "text-violet-400",
    color: "from-violet-500/20 to-purple-500/20",
    borderColor: "group-hover:border-violet-500/30",
    skills: [
      { name: "AI API Integration", logo: SkillLogos["AI API Integration"] },
      { name: "AI Chatbots", logo: SkillLogos["AI Chatbots"] },
      { name: "AI Integration", logo: SkillLogos["AI Integration"] },
    ],
  },
  {
    title: "Design",
    icon: <PenTool size={18} />,
    iconColor: "text-pink-400",
    color: "from-pink-500/20 to-rose-500/20",
    borderColor: "group-hover:border-pink-500/30",
    skills: [
      { name: "Figma", logo: SkillLogos["Figma"] },
    ],
  },
];

export default function Skills() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

  const toggleCategory = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="skills" className="py-6 md:py-24 relative overflow-hidden">
      <div className="section-container z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 md:mb-16"
        >
          <h2 className="text-2xl md:text-5xl font-bold mb-2 md:mb-6 tracking-tight">
            Skills & <span className="text-gradient">Tools</span>
          </h2>
          <p className="text-neutral-500 max-w-[280px] md:max-w-xl mx-auto text-[12px] md:text-base font-light leading-relaxed px-4">
            Technologies I use to build high-performance web, mobile, and AI-powered experiences.
          </p>
        </motion.div>

        {/* Desktop Grid - unchanged */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass-card rounded-2xl p-6 border border-white/[0.03] relative group overflow-hidden h-full flex flex-col hover:border-white/10 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center ${category.iconColor} group-hover:scale-110 transition-transform duration-500 shrink-0`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight leading-tight">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2.5 mt-auto">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] ${category.borderColor} hover:bg-white/[0.08] transition-all duration-300 cursor-default`}
                    >
                      <div className="w-5 h-5 shrink-0">
                        {skill.logo}
                      </div>
                      <span className="text-[13px] font-medium text-neutral-400 group-hover:text-neutral-300 whitespace-nowrap">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Accordion */}
        <div className="md:hidden flex flex-col gap-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-card rounded-xl border border-white/[0.03] overflow-hidden transition-all duration-300"
            >
              {/* Accordion Header - always visible */}
              <button
                onClick={() => toggleCategory(index)}
                className="w-full flex items-center justify-between p-3.5 text-left"
              >
                <div className="flex items-center gap-2.5">
                  <div className={`w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center ${category.iconColor} shrink-0`}>
                    <div className="scale-[0.85]">{category.icon}</div>
                  </div>
                  <h3 className="text-[13px] font-bold text-white tracking-tight">{category.title}</h3>
                  <span className="text-[10px] font-medium text-neutral-600 bg-white/[0.03] px-1.5 py-0.5 rounded-md">{category.skills.length}</span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-neutral-500"
                >
                  <ChevronDown size={16} />
                </motion.div>
              </button>

              {/* Accordion Content - collapsible */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-wrap gap-1.5 px-3.5 pb-3.5">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]"
                        >
                          <div className="w-3.5 h-3.5 shrink-0">
                            {skill.logo}
                          </div>
                          <span className="text-[10px] font-medium text-neutral-400 whitespace-nowrap">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent w-full pointer-events-none opacity-20" />
    </section>
  );
}
