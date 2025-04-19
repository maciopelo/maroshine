"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";

interface HoverTextProps {
  children: React.ReactNode;
}

const HoverText = ({ children }: HoverTextProps) => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const el = textRef.current;

    const enter = () => {
      gsap.to(el, {
        scale: 1.1,
        letterSpacing: "0.05em",
        duration: 0.4,
        ease: "power2.in",
      });
    };

    const leave = () => {
      gsap.to(el, {
        scale: 1,
        letterSpacing: "normal",
        duration: 0.6,
        ease: "power2.out",
      });
    };

    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);

    return () => {
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <span ref={textRef} className="inline-block cursor-pointer">
      {children}
    </span>
  );
};

export default HoverText;
