"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from "@/components/icons/SocialIcons";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-32 pb-4 sm:pt-40 sm:pb-6 lg:pt-48 lg:pb-8 relative overflow-hidden">
      {/* Ambient Luxury Spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-b from-white/[0.04] to-transparent rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto"
        >
          {/* Top Label */}
          <div className="text-[10px] sm:text-xs font-mono tracking-[0.2em] sm:tracking-[0.3em] text-neutral-400 uppercase mb-8 sm:mb-10">
            Software Builder & Digital Architect
          </div>

          {/* Typographic Headline with Inline Photo */}
          <h1 className="text-4xl sm:text-5xl lg:text-[4.25rem] font-bold tracking-tight text-white mb-6 sm:mb-8 leading-[1.2] sm:leading-[1.15] max-w-4xl mx-auto">
            Hello, I am{" "}
            <span className="inline-block align-middle mx-2 sm:mx-3 w-14 sm:w-16 lg:w-[4.5rem] h-14 sm:h-16 lg:h-[4.5rem] rounded-full relative overflow-hidden bg-gradient-to-b from-white/[0.12] to-transparent backdrop-blur-[40px] border border-white/[0.15] shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.3)] group cursor-pointer">
              <span className="absolute inset-[1.5px] rounded-full overflow-hidden bg-neutral-900">
                <Image
                  src="/ayush-profile.png"
                  alt="Ayush Vishwakarma"
                  fill
                  priority
                  sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 96px"
                  className="object-cover object-[center_35%] scale-[1.35] group-hover:scale-[1.45] transition-transform duration-700"
                />
              </span>
            </span>{" "}
            Ayush Vishwakarma.
          </h1>

          {/* Bio Statement */}
          <p className="text-sm sm:text-lg lg:text-xl text-neutral-400 leading-relaxed max-w-3xl mx-auto font-light">
            Architecting bespoke web applications, robust mobile software, and high-performance digital ecosystems with clean architecture and meticulous precision.
          </p>

        </motion.div>
      </div>
    </section>
  );
}
