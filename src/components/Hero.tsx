import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Code, Sparkles, ChevronDown } from "lucide-react";
import Logo from "./Logo";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-charcoal pt-32 pb-20 md:py-0 flex items-center justify-center overflow-hidden bg-grain"
    >
      {/* High-Craft Animated Background & Isometric Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4ded508_1px,transparent_1px),linear-gradient(to_bottom,#e4ded508_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none z-0" />
      
      {/* Drifting Ambient Glowing Spheres (Static high-craft layout for zero main-thread blocking) */}
      <div className="absolute top-1/4 left-6 md:left-1/4 w-[420px] h-[420px] rounded-full bg-clay/15 blur-[120px] pointer-events-none z-0" aria-hidden="true" />
      <div className="absolute bottom-1/3 right-6 md:right-1/4 w-[480px] h-[480px] rounded-full bg-amber-accent/10 blur-[140px] pointer-events-none z-0" aria-hidden="true" />
      <div className="absolute top-1/2 right-1/3 w-[550px] h-[550px] rounded-full bg-cream/5 blur-[160px] pointer-events-none z-0" aria-hidden="true" />

      {/* Technical Crosshairs */}
      <div className="absolute top-28 left-[12%] text-cream/40 font-mono text-xl select-none pointer-events-none z-0 hidden md:block" aria-hidden="true">+</div>
      <div className="absolute top-1/3 right-[15%] text-clay/50 font-mono text-2xl select-none pointer-events-none z-0 hidden md:block" aria-hidden="true">+</div>
      <div className="absolute bottom-1/4 left-[20%] text-amber-accent/40 font-mono text-xl select-none pointer-events-none z-0 hidden md:block" aria-hidden="true">+</div>

      {/* Editorial Grid */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Side: Editorial Typography & Copy */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
          {/* Subtle Studio Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-clay/10 border border-clay/20 rounded-full w-fit mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-accent" />
            <span className="font-mono text-xs text-clay-light tracking-widest uppercase">
              STUDIO ENERGY // NEW STANDARD
            </span>
          </motion.div>

          {/* Master Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-tighter text-cream mb-6 uppercase"
          >
            We Build Software <br />
            <span className="text-clay select-none hover:text-clay-light transition-colors duration-300">That Works</span> — <br />
            And Keep It That Way.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-cream/70 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-10"
          >
            A young, hands-on development team building modern web applications
            and custom software from scratch, with maintenance and support that doesn't
            disappear after launch.
          </motion.p>

          {/* Dynamic Interactive Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-5"
          >
            {/* Primary CTA */}
            <button
              onClick={() => handleScrollTo("contact")}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-clay hover:bg-clay-light text-cream font-bold tracking-wide rounded-sm transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-clay/20 cursor-pointer"
            >
              Start Your Project
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            {/* Secondary CTA */}
            <button
              onClick={() => handleScrollTo("process")}
              className="group inline-flex items-center gap-2 px-8 py-4 border border-cream/20 hover:border-clay hover:bg-clay/5 text-cream font-bold tracking-wide rounded-sm transition-all duration-300 cursor-pointer"
            >
              Explore Our Process
              <Code className="w-4 h-4 text-clay" />
            </button>
          </motion.div>

          {/* Bullet points footer in hero */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-16 pt-8 border-t border-cream/5 grid grid-cols-3 gap-4"
          >
            <div>
              <span className="block font-mono text-[10px] text-clay uppercase tracking-widest mb-1">// SPEED</span>
              <span className="font-display font-bold text-lg md:text-xl text-cream">Zero Bloat</span>
            </div>
            <div>
              <span className="block font-mono text-[10px] text-clay uppercase tracking-widest mb-1">// ETHOS</span>
              <span className="font-display font-bold text-lg md:text-xl text-cream">Real Craftsmanship</span>
            </div>
            <div>
              <span className="block font-mono text-[10px] text-clay uppercase tracking-widest mb-1">// RELATIONSHIP</span>
              <span className="font-display font-bold text-lg md:text-xl text-cream">Long-Term Partners</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Sculptural Terracotta Card Block */}
        <div className="lg:col-span-5 h-[400px] lg:h-[550px] w-full relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: [-1, 0.5, -1],
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 1, delay: 0.2, ease: "easeOut" },
              scale: { duration: 1, delay: 0.2, ease: "easeOut" },
              rotate: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
            }}
            className="relative w-full h-full bg-clay rounded-2xl p-8 flex flex-col justify-between shadow-2xl overflow-hidden bg-grain select-none group border border-clay-light/30"
          >
            {/* Animated Sheen / Light Sweep */}
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                repeatDelay: 5,
                ease: "easeInOut",
              }}
              className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-cream/15 to-transparent skew-x-12 pointer-events-none z-0"
            />

            {/* Design accents */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-cream/10 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none" />
            
            {/* Top accent */}
            <div className="flex justify-between items-start z-10">
              <span className="font-mono text-xs text-charcoal/60 font-bold uppercase tracking-wider">
                EST // 2026
              </span>
              <div className="w-2.5 h-2.5 rounded-full bg-charcoal animate-pulse" />
            </div>

            {/* Giant Center Logo Branding Display */}
            <div className="flex flex-col items-center justify-center py-10 z-10">
              <Logo
                size="xl"
                textColor="text-charcoal group-hover:text-charcoal-light"
                lightColor="text-cream"
              />
              <span className="font-mono text-xs text-charcoal/60 tracking-[0.2em] uppercase mt-4 block">
                DEVELOPMENT STUDIO
              </span>
            </div>

            {/* Clay Box Footer */}
            <div className="flex justify-between items-end border-t border-charcoal/10 pt-4 z-10">
              <div>
                <span className="block text-[10px] font-mono text-charcoal/50 uppercase tracking-widest">
                  LOCATION
                </span>
                <span className="text-sm font-semibold text-charcoal">
                  Remote // Worldwide
                </span>
              </div>
              <div className="text-right">
                <span className="block text-[10px] font-mono text-charcoal/50 uppercase tracking-widest">
                  CLIENT FOCUS
                </span>
                <span className="text-sm font-semibold text-charcoal">
                  End-To-End Delivery
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical coordinates */}
      <div className="absolute left-6 bottom-12 hidden xl:block font-mono text-xs text-cream/60 tracking-widest [writing-mode:vertical-lr]">
        CO-ORDINATES: 45.4215° N, 75.6972° W
      </div>
      <div className="absolute right-6 bottom-12 hidden xl:block font-mono text-xs text-cream/60 tracking-widest [writing-mode:vertical-lr]">
        LANDING // VOL. I
      </div>

      {/* Arrow down page scroll suggestion */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => handleScrollTo("about")}
          className="p-2 text-cream hover:text-clay transition-colors duration-200"
          aria-label="Scroll Down"
        >
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
