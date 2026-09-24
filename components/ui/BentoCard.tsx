"use client";

import React, { useRef } from "react";

interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export default function BentoCard({ children, className = "", ...props }: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`bento-card ${className}`}
      {...props}
    >
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
