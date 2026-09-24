"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Database, Bot, Frame, Cloud, Globe, MessageCircle } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";

const SkillLogos: Record<string, React.ReactNode> = {
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
  "Kotlin": (
    <svg viewBox="0 0 32 32" className="w-full h-full"><defs><linearGradient id="kt-dark-grad" x1="0" y1="32" x2="32" y2="0"><stop offset="0%" stopColor="#E44857"/><stop offset="50%" stopColor="#C711E1"/><stop offset="100%" stopColor="#7F52FF"/></linearGradient></defs><path fill="url(#kt-dark-grad)" d="M2 30V2h28L16 16l14 14z"/></svg>
  ),
  "Flutter": (
    <svg viewBox="0 0 32 32" className="w-full h-full"><path fill="#54C5F8" d="M18.4 2L4 16.4l4.5 4.5L27 2z"/><path fill="#54C5F8" d="M18.4 16.2l-5.3 5.3 4.5 4.5 9.8-9.8z"/><path fill="#01579B" d="M13.1 21.5l4.5 4.5-4.5 4.5-4.5-4.5z"/><path fill="#29B6F6" d="M13.1 21.5l2.2-2.3 2.3 2.3-2.3 2.2z"/></svg>
  ),
  "Expo": (
    <svg viewBox="0 0 32 32" className="w-full h-full"><circle cx="16" cy="16" r="14" fill="#000" stroke="#fff" strokeWidth="1"/><path d="M16 8c-1.5 0-2.5 1-3.5 3l-5 10c-.5 1-.5 1.5 0 2s1.5.5 2 0l6.5-12 6.5 12c.5.5 1.5.5 2 0s.5-1 0-2l-5-10c-1-2-2-3-3.5-3z" fill="#fff"/></svg>
  ),
  "Node.js": (
    <svg viewBox="0 0 32 32" className="w-full h-full"><path fill="#539E43" d="M16 2.3L3.5 9.5v14.1L16 30.7l12.5-7.1V9.5z"/><path fill="#fff" d="M16 7l-7 4v8l7 4 7-4v-8z" opacity="0.3"/><path fill="#fff" d="M14 14h4v6h-4z"/></svg>
  ),
  "Firebase": (
    <svg viewBox="0 0 32 32" className="w-full h-full"><path fill="#FFA000" d="M8 24l2.5-15.5 3.5 6.5z"/><path fill="#F57F17" d="M8 24L14 15l2-8-3.5-3z"/><path fill="#FFCA28" d="M8 24l16.5 2L21 7.5 14 15z"/><path fill="#FFA000" d="M24.5 26L21 7.5 14 15l-6 9z" opacity="0.3"/></svg>
  ),
  "Supabase": (
    <svg viewBox="0 0 32 32" className="w-full h-full"><path fill="#3ECF8E" d="M18 28c-.5.6-1.5.2-1.5-.6V18h10c1.6 0 2.5 1.9 1.4 3.1z"/><path fill="#3ECF8E" opacity="0.5" d="M14 4c.5-.6 1.5-.2 1.5.6V14H5.5c-1.6 0-2.5-1.9-1.4-3.1z"/></svg>
  ),
  "SQL": (
    <svg viewBox="0 0 32 32" className="w-full h-full"><ellipse cx="16" cy="8" rx="10" ry="4" fill="none" stroke="#60A5FA" strokeWidth="1.5"/><path d="M6 8v16c0 2.2 4.5 4 10 4s10-1.8 10-4V8" fill="none" stroke="#60A5FA" strokeWidth="1.5"/><ellipse cx="16" cy="16" rx="10" ry="4" fill="none" stroke="#60A5FA" strokeWidth="1.5" opacity="0.4"/></svg>
  ),
  "Figma": (
    <svg viewBox="0 0 32 32" className="w-full h-full"><circle cx="20" cy="11" r="5" fill="#1ABCFE"/><rect x="10" y="6" width="10" height="10" rx="5" fill="#A259FF"/><rect x="10" y="16" width="10" height="10" rx="5" fill="#0ACF83"/><circle cx="15" cy="11" r="5" fill="#F24E1E"/><circle cx="15" cy="21" r="5" fill="#0ACF83"/><rect x="10" y="6" width="5" height="10" fill="#F24E1E"/><rect x="10" y="16" width="5" height="10" fill="#0ACF83"/><path d="M15 6h5a5 5 0 010 10h-5z" fill="#FF7262"/><circle cx="20" cy="16" r="5" fill="#1ABCFE"/></svg>
  ),
  "Framer Motion": (
    <svg fill="#0055FF" viewBox="0 0 24 24" className="w-full h-full"><path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/></svg>
  ),
  "AWS": <Cloud className="w-full h-full text-orange-400" />,
  "Vercel": (
    <svg fill="#FFFFFF" viewBox="0 0 24 24" className="w-full h-full"><path d="m12 1.608 12 20.784H0Z"/></svg>
  ),
  "Netlify": (
    <svg fill="#00C7B7" viewBox="0 0 24 24" className="w-full h-full"><path d="M6.49 19.04h-.23L5.13 17.9v-.23l1.73-1.71h1.2l.15.15v1.2L6.5 19.04ZM5.13 6.31V6.1l1.13-1.13h.23L8.2 6.68v1.2l-.15.15h-1.2L5.13 6.31Zm9.96 9.09h-1.65l-.14-.13v-3.83c0-.68-.27-1.2-1.1-1.23-.42 0-.9 0-1.43.02l-.07.08v4.96l-.14.14H8.9l-.13-.14V8.73l.13-.14h3.7a2.6 2.6 0 0 1 2.61 2.6v4.08l-.13.14Zm-8.37-2.44H.14L0 12.82v-1.64l.14-.14h6.58l.14.14v1.64l-.14.14Zm17.14 0h-6.58l-.14-.14v-1.64l.14-.14h6.58l.14.14v1.64l-.14.14ZM11.05 6.55V1.64l.14-.14h1.65l.14.14v4.9l-.14.14h-1.65l-.14-.13Zm0 15.81v-4.9l.14-.14h1.65l.14.13v4.91l-.14.14h-1.65l-.14-.14Z"/></svg>
  ),
  "Git & GitHub": <GithubIcon className="w-full h-full text-white" />,
  "WhatsApp API": (
    <svg fill="#25D366" viewBox="0 0 24 24" className="w-full h-full"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
  ),
  "Android SDK": (
    <svg fill="#3DDC84" viewBox="0 0 24 24" className="w-full h-full"><path d="M18.4395 5.5586c-.675 1.1664-1.352 2.3318-2.0274 3.498-.0366-.0155-.0742-.0286-.1113-.043-1.8249-.6957-3.484-.8-4.42-.787-1.8551.0185-3.3544.4643-4.2597.8203-.084-.1494-1.7526-3.021-2.0215-3.4864a1.1451 1.1451 0 0 0-.1406-.1914c-.3312-.364-.9054-.4859-1.379-.203-.475.282-.7136.9361-.3886 1.5019 1.9466 3.3696-.0966-.2158 1.9473 3.3593.0172.031-.4946.2642-1.3926 1.0177C2.8987 12.176.452 14.772 0 18.9902h24c-.119-1.1108-.3686-2.099-.7461-3.0683-.7438-1.9118-1.8435-3.2928-2.7402-4.1836a12.1048 12.1048 0 0 0-2.1309-1.6875c.6594-1.122 1.312-2.2559 1.9649-3.3848.2077-.3615.1886-.7956-.0079-1.1191a1.1001 1.1001 0 0 0-.8515-.5332c-.5225-.0536-.9392.3128-1.0488.5449zm-.0391 8.461c.3944.5926.324 1.3306-.1563 1.6503-.4799.3197-1.188.0985-1.582-.4941-.3944-.5927-.324-1.3307.1563-1.6504.4727-.315 1.1812-.1086 1.582.4941zM7.207 13.5273c.4803.3197.5506 1.0577.1563 1.6504-.394.5926-1.1038.8138-1.584.4941-.48-.3197-.5503-1.0577-.1563-1.6504.4008-.6021 1.1087-.8106 1.584-.4941z"/></svg>
  ),
};

interface Category {
  title: string;
  skills: { name: string; logo?: React.ReactNode }[];
}

// (Assuming SkillLogos is intact at the top of the file)
// We will redefine skillCategories to include icons again

const skillCategories = [
  {
    title: "Frontend Systems",
    icon: <Monitor size={20} className="text-white/70" />,
    skills: [
      { name: "Next.js", logo: SkillLogos["Next.js"] },
      { name: "React", logo: SkillLogos["React"] },
      { name: "TypeScript", logo: SkillLogos["TypeScript"] },
      { name: "JavaScript", logo: SkillLogos["JavaScript"] },
      { name: "Tailwind CSS", logo: SkillLogos["Tailwind CSS"] },
      { name: "Framer Motion", logo: SkillLogos["Framer Motion"] },
      { name: "HTML/CSS", logo: SkillLogos["HTML5"] },
    ],
  },
  {
    title: "Mobile Architecture",
    icon: <Smartphone size={20} className="text-white/70" />,
    skills: [
      { name: "Kotlin", logo: SkillLogos["Kotlin"] },
      { name: "Flutter", logo: SkillLogos["Flutter"] },
      { name: "React Native", logo: SkillLogos["React"] },
      { name: "Expo", logo: SkillLogos["Expo"] },
      { name: "Android SDK", logo: SkillLogos["Android SDK"] },
    ],
  },
  {
    title: "Backend & Cloud",
    icon: <Database size={20} className="text-white/70" />,
    skills: [
      { name: "Node.js", logo: SkillLogos["Node.js"] },
      { name: "AWS", logo: SkillLogos["AWS"] },
      { name: "Firebase", logo: SkillLogos["Firebase"] },
      { name: "Supabase", logo: SkillLogos["Supabase"] },
      { name: "SQL", logo: SkillLogos["SQL"] },
    ],
  },
  {
    title: "Tools & Deployment",
    icon: <Bot size={20} className="text-white/70" />,
    skills: [
      { name: "Vercel", logo: SkillLogos["Vercel"] },
      { name: "Netlify", logo: SkillLogos["Netlify"] },
      { name: "Git & GitHub", logo: SkillLogos["Git & GitHub"] },
      { name: "Figma", logo: SkillLogos["Figma"] },
      { name: "WhatsApp API", logo: SkillLogos["WhatsApp API"] },
      { name: "AI APIs", logo: SkillLogos["AI Integration"] },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 relative border-t border-white/[0.06] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.015] rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-5 sm:px-10">
        
        {/* Normal Sized Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-3">
            Technical Expertise
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light">
            The frameworks and tools I use to build robust digital products.
          </p>
        </div>

        {/* 2x2 Premium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] overflow-hidden group hover:bg-white/[0.03] transition-colors duration-300"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                 <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:border-white/[0.15] transition-colors">
                    {category.icon}
                 </div>
                 <h3 className="text-lg sm:text-xl font-medium text-white tracking-tight">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 sm:gap-3 relative z-10">
                 {category.skills.map(skill => (
                    <div 
                      key={skill.name}
                      className="flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg bg-[#050505] border border-white/[0.08] hover:border-white/[0.2] transition-colors cursor-default shadow-sm"
                    >
                       {skill.logo && (
                         <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-80 group-hover:opacity-100 transition-opacity">
                           {skill.logo}
                         </div>
                       )}
                       <span className="text-xs sm:text-sm text-neutral-300 font-medium tracking-tight">
                         {skill.name}
                       </span>
                    </div>
                 ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
