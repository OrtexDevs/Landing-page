import React from "react";
import { motion } from "motion/react";
import { Cpu, Terminal, Shield, Compass, ArrowUpRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "01",
      icon: Terminal,
      title: "Custom Software Development",
      description:
        "Web apps, business tools, and platforms built specifically around what your business actually needs. No unnecessary features, no bloated frameworks.",
      colSpan: "md:col-span-7",
      hoverStyle: "hover:border-clay/50",
      accent: "text-clay",
    },
    {
      id: "02",
      icon: Cpu,
      title: "Full-Stack Web Development",
      description:
        "Modern, fast, responsive applications built using React, Spring Boot, and robust, enterprise-ready backend architecture for ultimate efficiency.",
      colSpan: "md:col-span-5",
      hoverStyle: "hover:border-clay/50",
      accent: "text-clay-light",
    },
    {
      id: "03",
      icon: Shield,
      title: "Maintenance & Support",
      description:
        "Bug fixes, security updates, and performance monitoring after launch, so your software keeps running smoothly and securely without unexpected downtime.",
      colSpan: "md:col-span-5 md:-translate-y-6",
      hoverStyle: "hover:border-cream/40",
      accent: "text-amber-accent",
      isClayBg: true, // Special full clay background block for asymmetrical variety
    },
    {
      id: "04",
      icon: Compass,
      title: "Consulting & Architecture",
      description:
        "Clean, highly scalable system design planned meticulously before a single line of code is written, saving you thousands in technical debt.",
      colSpan: "md:col-span-7 md:-translate-y-6",
      hoverStyle: "hover:border-clay/50",
      accent: "text-clay",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-charcoal text-cream bg-grain relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="font-mono text-xs text-clay font-bold tracking-[0.2em] uppercase mb-4 block">
              // SERVICES & CAPABILITIES
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none uppercase tracking-tight">
              WE BUILD SOFTWARE <br />
              <span className="text-clay">WITHOUT COMPROMISE.</span>
            </h2>
          </div>
          <p className="font-sans text-cream/60 max-w-sm text-base leading-relaxed">
            From strategic concept architecture to daily operational support, we offer direct developer access and transparent engineering solutions.
          </p>
        </div>

        {/* Asymmetrical Bento-style Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 pb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;

            if (service.isClayBg) {
              // Special accent card block
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`${service.colSpan} bg-clay text-cream p-10 rounded-xl flex flex-col justify-between min-h-[380px] shadow-2xl relative overflow-hidden group border border-clay-light/20 bg-grain`}
                >
                  {/* Decorative faint grid lines */}
                  <div className="absolute inset-0 bg-gradient-to-br from-charcoal/5 to-charcoal/20 pointer-events-none" />
                  
                  <div className="z-10 flex justify-between items-start">
                    <span className="font-mono text-xl font-bold text-charcoal/60">
                      {service.id} //
                    </span>
                    <div className="w-12 h-12 rounded-full border border-charcoal/15 flex items-center justify-center text-charcoal bg-cream/10">
                      <IconComponent className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="z-10 mt-12">
                    <h3 className="font-display font-black text-3xl md:text-4xl leading-none tracking-tight uppercase text-charcoal mb-4">
                      {service.title}
                    </h3>
                    <p className="text-cream/90 text-sm md:text-base font-light leading-relaxed max-w-md">
                      {service.description}
                    </p>
                  </div>

                  <div className="z-10 mt-8 pt-4 border-t border-charcoal/10 flex justify-end">
                    <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-charcoal tracking-widest uppercase group-hover:underline">
                      SECURE OPERATIONS <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              );
            }

            // Standard high-craft dark card
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${service.colSpan} bg-charcoal-light border border-cream/5 hover:border-clay/40 p-10 rounded-xl flex flex-col justify-between min-h-[380px] shadow-xl transition-all duration-300 relative group`}
              >
                <div className="flex justify-between items-start">
                  <span className="font-mono text-xl font-bold text-clay-light">
                    {service.id} //
                  </span>
                  <div className={`w-12 h-12 rounded-full border border-cream/10 flex items-center justify-center ${service.accent} bg-charcoal group-hover:bg-clay/5 group-hover:scale-105 transition-all duration-300`}>
                    <IconComponent className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="font-display font-extrabold text-3xl md:text-4xl leading-none tracking-tight uppercase mb-4 text-cream group-hover:text-clay-light transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-cream/60 text-sm md:text-base font-light leading-relaxed max-w-md">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-cream/5 flex justify-end">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-cream/40 group-hover:text-clay-light tracking-widest uppercase transition-colors duration-200">
                    LEARN CAPABILITIES <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
