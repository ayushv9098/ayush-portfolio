"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.matchMedia("(max-width: 768px)").matches ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0
      );
    };

    checkMobile();
    if (window.matchMedia("(max-width: 768px)").matches || "ontouchstart" in window) {
      return;
    }

    const xOuterTo = gsap.quickTo(cursorOuterRef.current, "x", { duration: 0.18, ease: "power2.out" });
    const yOuterTo = gsap.quickTo(cursorOuterRef.current, "y", { duration: 0.18, ease: "power2.out" });

    const xInnerTo = gsap.quickTo(cursorInnerRef.current, "x", { duration: 0.02, ease: "none" });
    const yInnerTo = gsap.quickTo(cursorInnerRef.current, "y", { duration: 0.02, ease: "none" });

    const handleMouseMove = (e: MouseEvent) => {
      xOuterTo(e.clientX);
      yOuterTo(e.clientY);
      xInnerTo(e.clientX);
      yInnerTo(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHoverable =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer");

      if (isHoverable) {
        gsap.to(cursorOuterRef.current, {
          scale: 1.5,
          borderColor: "rgba(255, 255, 255, 0.4)",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          duration: 0.2,
        });
        gsap.to(cursorInnerRef.current, {
          scale: 0.5,
          backgroundColor: "#ffffff",
          duration: 0.2,
        });
      } else {
        gsap.to(cursorOuterRef.current, {
          scale: 1,
          borderColor: "rgba(255, 255, 255, 0.2)",
          backgroundColor: "transparent",
          duration: 0.2,
        });
        gsap.to(cursorInnerRef.current, {
          scale: 1,
          backgroundColor: "#ffffff",
          duration: 0.2,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      <div
        ref={cursorOuterRef}
        className="absolute top-0 left-0 w-7 h-7 rounded-full border border-white/20 -translate-x-1/2 -translate-y-1/2 will-change-transform"
      />
      <div
        ref={cursorInnerRef}
        className="absolute top-0 left-0 w-1.5 h-1.5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 will-change-transform shadow-[0_0_8px_rgba(255,255,255,0.8)]"
      />
    </div>
  );
}
