"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    // Check local storage or system preference on mount
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
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

  return (
    <button
      onClick={toggleTheme}
      className="p-1.5 hover:text-white text-neutral-300 transition-colors rounded-full hover:bg-white/10"
      aria-label="Toggle Theme"
    >
      {isLight ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
