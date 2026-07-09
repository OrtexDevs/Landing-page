import React from "react";
import { motion } from "motion/react";
import { Hammer, Users, Cpu } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-cream text-charcoal bg-grain border-y border-clay/10 overflow-hidden"
    >
      {/* Structural grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Side: Massive, punchy statement display */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <span className="font-mono text-xs text-clay font-bold tracking-[0.2em] uppercase mb-4 block">
            // WHO WE ARE
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[0.95] tracking-tight uppercase text-charcoal">
            FOUNDED BY DEVELOPERS, <br />
            <span className="text-clay">FOR PEOPLE</span> <br />
            WHO NEED SOLUTIONS THAT WORK.
          </h2>
          
          {/* Subtle line decoration */}
          <div className="mt-8 w-24 h-1 bg-clay" />
        </div>

        {/* Right Side: The narrative and detailed value blocks */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <p className="text-xl md:text-2xl font-light text-charcoal/80 leading-relaxed mb-12">
            Founded by <strong className="font-semibold text-charcoal">Chethan HR, Harsha, and Rajath</strong>, Ortex Studio (<strong className="font-semibold text-charcoal">OrtexDevs</strong>) is a high-craft <strong className="font-semibold text-charcoal">software development agency and consultancy</strong> that cares about doing things right. 
            We're new to the industry, but <strong className="font-semibold text-charcoal">not new to building</strong> — from custom software development and AI-powered tools 
            to full-scale web platforms, we've shipped real engineering projects and we bring that same precision 
            to every client. No corporate bloat, no middlemen — just developers who show up and deliver.
          </p>

          {/* Quick value indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-clay/10 flex items-center justify-center text-clay">
                <Hammer className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg uppercase tracking-wide text-charcoal">
                Practical Craft
              </h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                We believe in clean architecture, type safety, and clean codebases. We don't over-engineer; we build to last.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-clay/10 flex items-center justify-center text-clay">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg uppercase tracking-wide text-charcoal">
                Modern Stack
              </h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                Harnessing React, Spring Boot, high-efficiency API design, and durable cloud architectures for high speed.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-clay/10 flex items-center justify-center text-clay">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg uppercase tracking-wide text-charcoal">
                Direct Line
              </h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                Skip the account managers. You speak directly with the developers writing and monitoring your platform code.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Background oversized decorative visual text */}
      <div className="absolute right-0 bottom-0 translate-y-12 translate-x-12 select-none opacity-[0.02] font-display font-black text-[12rem] pointer-events-none">
        ORTEX STUDIO
      </div>
    </section>
  );
}
