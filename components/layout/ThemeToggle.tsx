"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsLight(true);
      document.documentElement.classList.add("light-mode");
    }
  }, []);

  const toggleTheme = () => {
    if (isLight) {
      document.documentElement.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
      setIsLight(false);
    } else {
      document.documentElement.classList.add("light-mode");
      localStorage.setItem("theme", "light");
      setIsLight(true);
    }
  };

  if (!mounted) {
    return (
      <div className="w-[28px] h-[28px]" aria-hidden="true" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-1.5 hover:text-white text-neutral-300 transition-colors rounded-full hover:bg-white/10"
      aria-label="Toggle Dark and Light Theme"
    >
      {isLight ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
