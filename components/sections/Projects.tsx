"use client";

import { motion } from "framer-motion";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { ExternalLink, ChevronLeft, ChevronRight, GripHorizontal } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";

const projects = [
  {
    title: "English Bolo",
    desc: "An engaging platform to learn and practice English speaking. Features interactive lessons and real-time feedback to improve fluency and confidence.",
    tags: ["Next.js", "React", "Node.js", "Supabase", "TypeScript"],
    link: "https://english-bolo.vercel.app/",
    github: "https://github.com/ayushv9098/english-bolo",
    image: "/english-bolo-v2.png",
  },
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showDragHint, setShowDragHint] = useState(true);

  // Hide drag hint after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowDragHint(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  // Track which card is in view
  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).offsetWidth
      : 1;
    const gap = 24;
    const index = Math.round(scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(index, projects.length - 1));
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).offsetWidth
      : 300;
    const gap = 24;
    const scrollAmount = cardWidth + gap;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).offsetWidth
      : 300;
    const gap = 24;
    container.scrollTo({
      left: index * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="section-spacing relative overflow-hidden">
      <div className="section-container z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6"
        >
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
              Real-World <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-neutral-400 text-[15px] md:text-base font-light leading-relaxed">
              Focusing on building functional systems that solve real problems.
            </p>
          </div>

          {/* Navigation Arrows + Counter (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            {/* Project Counter Badge */}
            <span className="text-xs font-bold text-neutral-500 tracking-wider uppercase">
              {activeIndex + 1} / {projects.length}
            </span>
            <button
              onClick={() => scrollTo("left")}
              disabled={activeIndex === 0}
              className="w-10 h-10 rounded-full border border-white/10 glass-card flex items-center justify-center text-white hover:bg-white/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous project"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scrollTo("right")}
              disabled={activeIndex === projects.length - 1}
              className="w-10 h-10 rounded-full border border-white/10 glass-card flex items-center justify-center text-white hover:bg-white/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next project"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 lg:gap-8 pb-4 pl-6 pr-6 md:pl-0 md:pr-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] cursor-grab active:cursor-grabbing [scroll-padding-left:1.5rem]"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="w-[80vw] sm:w-[380px] shrink-0 snap-start glass-card rounded-2xl overflow-hidden group border border-white/5 transition-all duration-300 flex flex-col hover:border-white/10"
              >
                {project.image && (
                  <div className="w-full relative overflow-hidden bg-transparent p-3 sm:p-5 flex items-center justify-center border-b border-white/5">
                    
                    {/* Glow effect behind the image */}
                    <div className="absolute inset-0 bg-primary/10 blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />

                    {/* Image Container */}
                    <div className="relative w-full aspect-video rounded-xl shadow-2xl overflow-hidden flex flex-col transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-1 z-10">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        quality={100}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain"
                      />
                    </div>
                  </div>
                )}

                <div className="p-4 sm:p-6 flex-1 flex flex-col">
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

          {/* Drag Hint (shows initially then fades out) */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: showDragHint ? 1 : 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mt-1 pointer-events-none"
          >
            <motion.div
              animate={{ x: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <GripHorizontal size={16} className="text-neutral-600" />
            </motion.div>
            <span className="text-[11px] text-neutral-600 font-medium tracking-wide">Drag to explore more</span>
          </motion.div>

          {/* Dot Indicators */}
          <div className="flex items-center justify-center gap-2 mt-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                aria-label={`Go to project ${index + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 h-2 bg-primary"
                    : "w-2 h-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
