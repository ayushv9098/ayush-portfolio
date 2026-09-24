"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { LinkedinIcon, GithubIcon, InstagramIcon, TwitterIcon, DiscordIcon } from "@/components/icons/SocialIcons";
import Link from "next/link";

const WEB3FORMS_ACCESS_KEY = "ff3a96b5-ad7f-4304-bec0-9ea6ccd31df8";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string; general?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    if (Object.keys(newErrors).length > 0) {
      newErrors.general = "Please fill in all required fields.";
      setErrors(newErrors);
      return false;
    }
    
    setErrors({});
    return true;
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
          subject: `Portfolio message from ${formData.name}`,
          from_name: "Ayush Portfolio",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else throw new Error();
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const socials = [
    { 
      name: "Email", 
      link: "mailto:ayushvishvakarma956@gmail.com", 
      icon: <Mail size={18} />, 
      textColor: "text-[#f43f5e]", // Rose
      hoverEffect: "hover:bg-[#f43f5e]/10 hover:border-[#f43f5e]/30 hover:shadow-[0_0_15px_rgba(244,63,94,0.3)]" 
    },
    { 
      name: "LinkedIn", 
      link: "https://www.linkedin.com/in/ayush-vishwakarma-82573a358/", 
      icon: <LinkedinIcon size={18} />, 
      textColor: "text-[#3b82f6]", // Bright Blue (LinkedIn style for dark mode)
      hoverEffect: "hover:bg-[#3b82f6]/10 hover:border-[#3b82f6]/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]" 
    },
    { 
      name: "GitHub", 
      link: "https://github.com/ayushv9098", 
      icon: <GithubIcon size={18} />, 
      textColor: "text-white", // White
      hoverEffect: "hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]" 
    },
    { 
      name: "Twitter", 
      link: "https://x.com/ayushv9098", 
      icon: <TwitterIcon size={18} />, 
      textColor: "text-[#38bdf8]", // Sky Blue
      hoverEffect: "hover:bg-[#38bdf8]/10 hover:border-[#38bdf8]/30 hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]" 
    },
    { 
      name: "Instagram", 
      link: "https://www.instagram.com/ayusxh_.10", 
      icon: <InstagramIcon size={18} />, 
      textColor: "text-[#f472b6]", // Pink
      hoverEffect: "hover:bg-[#f472b6]/10 hover:border-[#f472b6]/30 hover:shadow-[0_0_15px_rgba(244,114,182,0.3)]" 
    },
    { 
      name: "Discord", 
      link: "https://discord.com/users/1048510622851149865", 
      icon: <DiscordIcon size={18} />, 
      textColor: "text-[#818cf8]", // Indigo/Discord
      hoverEffect: "hover:bg-[#818cf8]/10 hover:border-[#818cf8]/30 hover:shadow-[0_0_15px_rgba(129,140,248,0.3)]" 
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-24 relative border-t border-white/[0.06]">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] max-w-full h-[300px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
            <span>Direct Inquiry</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-3">
            Let's Build <span className="text-gradient">Together</span>
          </h2>
          <p className="text-sm text-neutral-400 font-light leading-relaxed">
            Have a project in mind or want to discuss opportunities? Send me a message below.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          
          {/* Centered Wide Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/[0.03] border border-white/[0.08] rounded-3xl p-6 sm:p-8 shadow-sm backdrop-blur-md relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
            
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center ml-1">
                    <label htmlFor="name" className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">Your Name</label>
                    {errors.name && <span className="text-[10px] text-rose-400 font-medium">{errors.name}</span>}
                  </div>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined, general: undefined });
                    }}
                    className={`w-full bg-[#050505] border ${errors.name ? 'border-rose-500/50' : 'border-white/[0.08]'} rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 focus:bg-white/[0.03] transition-all`}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center ml-1">
                    <label htmlFor="email" className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">Your Email</label>
                    {errors.email && <span className="text-[10px] text-rose-400 font-medium">{errors.email}</span>}
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined, general: undefined });
                    }}
                    className={`w-full bg-[#050505] border ${errors.email ? 'border-rose-500/50' : 'border-white/[0.08]'} rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 focus:bg-white/[0.03] transition-all`}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center ml-1">
                  <label htmlFor="message" className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">Project Details</label>
                  {errors.message && <span className="text-[10px] text-rose-400 font-medium">{errors.message}</span>}
                </div>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: undefined, general: undefined });
                  }}
                  className={`w-full bg-[#050505] border ${errors.message ? 'border-rose-500/50' : 'border-white/[0.08]'} rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 focus:bg-white/[0.03] transition-all resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full mt-2 h-12 bg-white hover:bg-neutral-200 text-black rounded-xl font-medium text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                {status === "loading" ? <Loader2 size={16} className="animate-spin" /> : "Send Message"}
              </button>

              <AnimatePresence>
                {errors.general && (
                  <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="flex items-center justify-center gap-1.5 text-rose-400 text-xs font-medium pt-2">
                    <AlertCircle size={15} /> {errors.general}
                  </motion.div>
                )}
                {status === "success" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center justify-center gap-1.5 text-emerald-400 text-xs font-medium pt-2">
                    <CheckCircle2 size={15} /> Message sent successfully! I will respond shortly.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center justify-center gap-1.5 text-rose-400 text-xs font-medium pt-2">
                    <AlertCircle size={15} /> Failed to send message. Please reach out via email.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
