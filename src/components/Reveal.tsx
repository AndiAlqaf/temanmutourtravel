"use client";

import { useEffect, useRef, ReactNode, CSSProperties } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number; // in seconds
  variant?: "fade-up" | "scale" | "fade-left" | "fade-right";
  threshold?: number;
  style?: CSSProperties;
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "fade-up",
  threshold = 0.1,
  style,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if IntersectionObserver is supported
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const variantClassMap = {
    "fade-up": "reveal",
    scale: "reveal-scale",
    "fade-left": "reveal-left",
    "fade-right": "reveal-right",
  };

  const baseClass = variantClassMap[variant] || "reveal";
  const inlineStyle: CSSProperties = {
    ...style,
    ...(delay > 0 ? { transitionDelay: `${delay}s` } : {}),
  };

  return (
    <div ref={ref} className={`${baseClass} ${className}`} style={inlineStyle}>
      {children}
    </div>
  );
}
