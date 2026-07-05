"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { LinkedinIcon, GithubIcon, InstagramIcon, TwitterIcon, DiscordIcon } from "@/components/icons/SocialIcons";
import Link from "next/link";

// Get yours free at https://web3forms.com (enter your email, key is sent instantly).
// This key is safe to be public — it only allows sending mail to your inbox.
const WEB3FORMS_ACCESS_KEY = "ff3a96b5-ad7f-4304-bec0-9ea6ccd31df8";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New portfolio message from ${formData.name}`,
          from_name: "Portfolio Contact Form",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error(data.message);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const socials = [
    {
      name: "Email",
      icon: <Mail size={18} />,
      link: "mailto:ayushvishvakarma956@gmail.com",
      handle: "ayushvishvakarma956@gmail.com",
      color: "hover:text-primary"
    },
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
      name: "X (Twitter)",
      icon: <TwitterIcon size={18} />,
      link: "https://x.com/ayushv9098",
      handle: "@ayushv9098",
      color: "hover:text-white"
    },
    {
      name: "Discord",
      icon: <DiscordIcon size={18} />,
      link: "https://discord.com/users/1048510622851149865",
      handle: "ayusxh_.10",
      color: "hover:text-indigo-400"
    }
  ];

  return (
    <section id="contact" className="py-6 md:py-10 relative overflow-hidden">
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
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex flex-col gap-1.5 md:gap-2.5">
                  <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 ml-2">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe" 
                    className={`w-full bg-white/[0.02] border ${errors.name ? 'border-red-500/50' : 'border-white/5'} rounded-xl px-4 py-2.5 md:px-5 md:py-3 text-sm text-white focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 focus:bg-white/[0.04] transition-all duration-300 placeholder:text-neutral-700`}
                  />
                  {errors.name && <span className="text-[10px] text-red-500 ml-2 font-medium">{errors.name}</span>}
                </div>
                <div className="flex flex-col gap-1.5 md:gap-2.5">
                  <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 ml-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com" 
                    className={`w-full bg-white/[0.02] border ${errors.email ? 'border-red-500/50' : 'border-white/5'} rounded-xl px-4 py-2.5 md:px-5 md:py-3 text-sm text-white focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 focus:bg-white/[0.04] transition-all duration-300 placeholder:text-neutral-700`}
                  />
                  {errors.email && <span className="text-[10px] text-red-500 ml-2 font-medium">{errors.email}</span>}
                </div>
              </div>
              
              <div className="flex flex-col gap-1.5 md:gap-2.5">
                <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 ml-2">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..." 
                  className={`w-full bg-white/[0.02] border ${errors.message ? 'border-red-500/50' : 'border-white/5'} rounded-xl px-4 py-2.5 md:px-5 md:py-3 text-sm text-white focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 focus:bg-white/[0.04] transition-all duration-300 placeholder:text-neutral-700 resize-none`}
                />
                {errors.message && <span className="text-[10px] text-red-500 ml-2 font-medium">{errors.message}</span>}
              </div>

              <div className="relative flex flex-col items-center gap-4 mt-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`group relative flex items-center justify-center gap-2 w-full h-11 md:h-12 bg-gradient-to-r from-primary via-primary to-secondary text-white rounded-full font-bold text-sm transition-all shadow-[0_4px_20px_rgba(139,92,246,0.3)] ${status === "loading" ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.01] active:scale-[0.98]'}`}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 text-emerald-400 text-sm font-medium"
                    >
                      <CheckCircle2 size={16} />
                      <span>Message sent successfully!</span>
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 text-red-400 text-sm font-medium"
                    >
                      <AlertCircle size={16} />
                      <span>Something went wrong. Please try again.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
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
