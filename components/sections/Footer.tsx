import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/icons/SocialIcons";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative py-10 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <Link href="/" className="flex items-center gap-2 justify-center md:justify-start">
            <div className="w-6 h-6 relative flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="AV Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-white text-sm font-semibold tracking-tight">Ayush Vishwakarma</span>
          </Link>
          <p className="text-neutral-600 text-[11px] mt-2 font-medium tracking-wide">
            © {new Date().getFullYear()} — SOFTWARE DEVELOPER.
          </p>
        </div>

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
        </div>
      </div>
    </footer>
  );
}
