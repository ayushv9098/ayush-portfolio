"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches || 'ontouchstart' in window);
    };
    
    checkMobile();
    if (isMobile) return;

    // HIGH PERFORMANCE: quickTo with minimal duration
    const xOuterTo = gsap.quickTo(cursorOuterRef.current, "x", { duration: 0.15, ease: "power2.out" });
    const yOuterTo = gsap.quickTo(cursorOuterRef.current, "y", { duration: 0.15, ease: "power2.out" });
    
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
        gsap.to(cursorOuterRef.current, { scale: 1.5, backgroundColor: "rgba(139, 92, 246, 0.1)", duration: 0.2 });
        gsap.to(cursorInnerRef.current, { scale: 1.5, duration: 0.2 });
      } else {
        gsap.to(cursorOuterRef.current, { scale: 1, backgroundColor: "transparent", duration: 0.2 });
        gsap.to(cursorInnerRef.current, { scale: 1, duration: 0.2 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <div
        ref={cursorOuterRef}
        className="absolute top-0 left-0 w-8 h-8 rounded-full border border-primary/40 -translate-x-1/2 -translate-y-1/2 will-change-transform"
      />
      <div
        ref={cursorInnerRef}
        className="absolute top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 will-change-transform"
      />
    </div>
  );
}
