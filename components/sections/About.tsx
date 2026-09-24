"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-10 sm:py-16 relative border-t border-white/[0.06] overflow-hidden">
      {/* Ambient Luxury Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-white/[0.015] rounded-full blur-[120px] sm:blur-[150px] pointer-events-none -z-10" />

      <div className="section-container flex flex-col items-center justify-center text-center">
        
        {/* Massive Typographic Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-[2.5rem] sm:text-[4.5rem] lg:text-[6rem] font-light tracking-tighter text-white leading-[1.1] sm:leading-[1.05]">
            Clean code.<br />
            <span className="text-neutral-500">Simple interfaces.</span><br />
            <span className="italic font-serif silver-gradient">Products that just work.</span>
          </h2>
        </motion.div>

        {/* Minimal Impact Metrics */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.6, duration: 1.5 }}
           className="mt-12 sm:mt-20 flex flex-row items-center justify-center gap-6 sm:gap-20 text-center w-full max-w-2xl mx-auto"
        >
           <div className="flex-1">
              <div className="text-3xl sm:text-5xl font-light text-white mb-2 sm:mb-3 tracking-tight">400+</div>
              <div className="text-[9px] sm:text-xs font-mono uppercase tracking-widest text-neutral-500 leading-relaxed">Students rely on<br className="hidden sm:block"/> my systems daily</div>
           </div>
           
           <div className="w-px h-16 sm:h-20 bg-gradient-to-b from-transparent via-white/[0.15] to-transparent shrink-0" />
           
           <div className="flex-1">
              <div className="text-3xl sm:text-5xl font-light text-white mb-2 sm:mb-3 tracking-tight">Zero</div>
              <div className="text-[9px] sm:text-xs font-mono uppercase tracking-widest text-neutral-500 leading-relaxed">Downtime in<br className="hidden sm:block"/> production</div>
           </div>
        </motion.div>

      </div>
    </section>
  );
}
