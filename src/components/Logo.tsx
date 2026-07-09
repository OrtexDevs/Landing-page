import React, { useState } from "react";
import { motion } from "motion/react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  lightColor?: string;
  textColor?: string;
}

export default function Logo({
  className = "",
  size = "md",
  lightColor = "text-amber-accent",
  textColor = "text-charcoal",
}: LogoProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Responsive sizing configurations
  const sizeClasses = {
    sm: {
      text: "text-2xl tracking-[0.02em]",
      bulbWidth: 16,
      bulbHeight: 16,
      bulbTop: "-top-3.5",
      bulbRight: "right-[2px]",
    },
    md: {
      text: "text-4xl tracking-[0.03em] font-extrabold",
      bulbWidth: 22,
      bulbHeight: 22,
      bulbTop: "-top-5",
      bulbRight: "right-[3px]",
    },
    lg: {
      text: "text-6xl tracking-[0.04em] font-extrabold",
      bulbWidth: 32,
      bulbHeight: 32,
      bulbTop: "-top-7",
      bulbRight: "right-[4px]",
    },
    xl: {
      text: "text-8xl md:text-9xl tracking-[0.04em] font-black",
      bulbWidth: 48,
      bulbHeight: 48,
      bulbTop: "-top-10 md:-top-11",
      bulbRight: "right-[6px] md:right-[8px]",
    },
  };

  const currentSize = sizeClasses[size];

  // Flicker animation variants for the lightbulb glow and lines
  const bulbVariants = {
    idle: {
      opacity: 0.9,
      scale: 1,
    },
    flicker: {
      opacity: [1, 0.4, 0.9, 0.3, 1, 0.2, 1],
      scale: [1, 0.98, 1, 0.95, 1, 0.97, 1],
      transition: {
        duration: 0.6,
        times: [0, 0.1, 0.25, 0.3, 0.5, 0.6, 1],
        ease: "easeInOut",
      },
    },
  };

  const glowVariants = {
    idle: {
      opacity: 0.15,
      scale: 0.8,
    },
    hover: {
      opacity: [0.3, 0.8, 0.4, 0.9, 0.6, 1],
      scale: [1, 1.15, 1.05, 1.2, 1.1, 1.25],
      transition: {
        duration: 0.8,
        times: [0, 0.15, 0.3, 0.5, 0.7, 1],
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      className={`relative inline-block select-none cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Lightbulb wrapper positioned over the X */}
      <div
        className={`absolute ${currentSize.bulbTop} ${currentSize.bulbRight} z-10 flex flex-col items-center`}
        style={{ width: currentSize.bulbWidth, height: currentSize.bulbHeight }}
      >
        {/* Glow behind lightbulb */}
        <motion.div
          animate={isHovered ? "hover" : "idle"}
          variants={glowVariants}
          className="absolute rounded-full bg-amber-accent/40 blur-[8px]"
          style={{
            width: currentSize.bulbWidth * 1.8,
            height: currentSize.bulbHeight * 1.8,
            top: -currentSize.bulbHeight * 0.3,
          }}
        />

        {/* Minimalist Line-Art Lightbulb */}
        <motion.svg
          animate={isHovered ? "flicker" : "idle"}
          variants={bulbVariants}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`w-full h-full ${lightColor} transition-colors duration-300`}
        >
          {/* Bulb shape */}
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .6 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          {/* Screw base */}
          <line x1="9" y1="18" x2="15" y2="18" />
          <line x1="10" y1="21" x2="14" y2="21" />
          {/* Filament or light rays */}
          <line x1="12" y1="2" x2="12" y2="3" />
          <line x1="12" y1="11" x2="12" y2="15" />
          <line x1="5" y1="5" x2="6" y2="6" />
          <line x1="19" y1="5" x2="18" y2="6" />
        </motion.svg>
      </div>

      {/* Brand Text - Ultra Condensed Display Font */}
      <span
        className={`font-display font-black tracking-tight leading-none inline-block ${textColor} transition-colors duration-300 ${currentSize.text}`}
        style={{
          fontStretch: "condensed",
          letterSpacing: "-0.01em",
        }}
      >
        ORTEX
      </span>
    </div>
  );
}
