"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { LinkedinIcon, GithubIcon, InstagramIcon, DiscordIcon } from "@/components/icons/SocialIcons";
import Link from "next/link";

export default function Contact() {
  const socials = [
    {
      name: "LinkedIn",
      icon: <LinkedinIcon size={18} />,
      link: "https://www.linkedin.com/in/ayush-vishwakarma-82573a358/",
      handle: "Ayush Vishwakarma",
      color: "hover:text-blue-400"
    },
    {
      name: "GitHub",
      icon: <GithubIcon size={18} />,
      link: "https://github.com/ayushv9098",
      handle: "@ayushv9098",
      color: "hover:text-white"
    },
    {
      name: "Instagram",
      icon: <InstagramIcon size={18} />,
      link: "https://www.instagram.com/ayusxh_.10",
      handle: "@ayusxh_.10",
      color: "hover:text-pink-400"
    },
    {
      name: "Discord",
      icon: <DiscordIcon size={18} />,
      link: "#",
      handle: "ayusxh_.10",
      color: "hover:text-indigo-400"
    }
  ];

  return (
    <section id="contact" className="py-10 md:py-24 relative overflow-hidden">
      <div className="section-container z-10 relative max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-neutral-400 text-[14px] md:text-base font-light leading-relaxed max-w-md mx-auto px-4 md:px-0">
            Ready to start your next project? Drop a message or connect through socials.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 glass-card p-6 md:p-8 rounded-2xl border border-white/5 relative overflow-hidden"
          >
            <form className="flex flex-col gap-4 md:gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex flex-col gap-1.5 md:gap-2.5">
                  <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 ml-2">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="John Doe" 
                    className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-2.5 md:px-5 md:py-3 text-sm text-white focus:outline-none focus:border-primary/40 focus:bg-white/[0.04] transition-all duration-300 placeholder:text-neutral-700"
                  />
                </div>
                <div className="flex flex-col gap-1.5 md:gap-2.5">
                  <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 ml-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="john@example.com" 
                    className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-2.5 md:px-5 md:py-3 text-sm text-white focus:outline-none focus:border-primary/40 focus:bg-white/[0.04] transition-all duration-300 placeholder:text-neutral-700"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-1.5 md:gap-2.5">
                <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 ml-2">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  placeholder="Tell me about your project..." 
                  className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-2.5 md:px-5 md:py-3 text-sm text-white focus:outline-none focus:border-primary/40 focus:bg-white/[0.04] transition-all duration-300 placeholder:text-neutral-700 resize-none"
                />
              </div>

              <button
                type="button"
                className="group relative flex items-center justify-center gap-2 w-52 h-11 md:h-12 bg-gradient-to-r from-primary via-primary to-secondary text-white rounded-full font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_20px_rgba(139,92,246,0.3)] mx-auto md:w-full"
              >
                <span>Send Message</span>
                <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 flex flex-col gap-3 md:gap-4"
          >
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.link}
                target="_blank"
                className={`glass-card p-3 md:p-4 rounded-xl border border-white/5 flex items-center gap-3 md:gap-4 transition-all duration-300 hover:border-white/10 group ${social.color}`}
              >
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </div>
                <div>
                  <h3 className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-neutral-500">{social.name}</h3>
                  <p className="text-xs md:text-sm font-medium text-neutral-300 group-hover:text-white transition-colors">{social.handle}</p>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
