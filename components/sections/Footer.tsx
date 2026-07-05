import { GithubIcon, LinkedinIcon, InstagramIcon, TwitterIcon, DiscordIcon } from "@/components/icons/SocialIcons";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative py-10 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <Link href="/" className="flex items-center gap-2 justify-center md:justify-start">
            <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white text-[9px] font-bold">
              A
            </div>
            <span className="text-white text-sm font-semibold tracking-tight">Ayush Vishwakarma</span>
          </Link>
          <p className="text-neutral-600 text-[11px] mt-2 font-medium tracking-wide">
            © {new Date().getFullYear()} — DEVELOPER.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <Link 
            href="mailto:ayushvishvakarma956@gmail.com" 
            className="flex items-center gap-2 text-neutral-500 hover:text-primary transition-colors text-xs font-medium"
          >
            <Mail size={14} />
            <span>ayushvishvakarma956@gmail.com</span>
          </Link>

          <div className="flex items-center gap-3.5 text-neutral-500">
            <Link href="https://www.instagram.com/ayusxh_.10" target="_blank" className="hover:text-pink-400 transition-colors p-2 hover:bg-white/5 rounded-full">
              <InstagramIcon size={14} />
            </Link>
            <Link href="https://github.com/ayushv9098" target="_blank" className="hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
              <GithubIcon size={14} />
            </Link>
            <Link href="https://www.linkedin.com/in/ayush-vishwakarma-82573a358/" target="_blank" className="hover:text-blue-400 transition-colors p-2 hover:bg-white/5 rounded-full">
              <LinkedinIcon size={14} />
            </Link>
            <Link href="https://x.com/ayushv9098" target="_blank" className="hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
              <TwitterIcon size={14} />
            </Link>
            <Link href="https://discord.com/users/1048510622851149865" target="_blank" className="hover:text-indigo-400 transition-colors p-2 hover:bg-white/5 rounded-full">
              <DiscordIcon size={14} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
