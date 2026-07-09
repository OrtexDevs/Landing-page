import React from "react";
import { motion } from "motion/react";
import { Code2, Zap, Hourglass, HelpCircle } from "lucide-react";

export default function WhyOrtex() {
  const reasons = [
    {
      num: "I.",
      icon: Code2,
      title: "Young team, real skill",
      desc: "We build like our name is on it, because it is. We are hungry, meticulous, and fully invested in shipping software we are proud to show off.",
    },
    {
      num: "II.",
      icon: Zap,
      title: "Direct communication",
      desc: "Zero translation errors. You talk directly to the engineers writing your code — ensuring lightning-fast updates and extreme agility.",
    },
    {
      num: "III.",
      icon: Hourglass,
      title: "Long-term partners",
      desc: "We are not a one-time outsource shop. We act as your remote technical partners, monitoring, supporting, and maintaining your systems long-term.",
    },
    {
      num: "IV.",
      icon: HelpCircle,
      title: "Clean architecture",
      desc: "Using modular types, strict linting, and modern tech stacks. We take absolutely no shortcuts, ensuring your product remains easy to extend.",
    },
  ];

  return (
    <section
      id="why-us"
      className="py-24 md:py-32 bg-cream text-charcoal bg-grain relative overflow-hidden border-t border-clay/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Offset Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          
          {/* Left Column (40%): Slanted / Diagonal Offset Visual Pane */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-28">
              {/* Aesthetic floating offset container */}
              <div className="relative p-1 bg-charcoal rounded-2xl transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl border border-cream/10">
                <div className="bg-charcoal text-cream rounded-xl p-8 md:p-10 bg-grain">
                  <span className="font-mono text-xs text-clay font-bold tracking-[0.2em] uppercase mb-4 block">
                    // STUDIO IDENTITY
                  </span>
                  <h2 className="font-display font-black text-5xl md:text-6xl leading-[0.9] uppercase mb-6">
                    WE BUILD LIKE OUR <br />
                    <span className="text-clay">NAME IS ON IT.</span>
                  </h2>
                  <p className="font-sans text-cream/70 text-sm md:text-base font-light leading-relaxed mb-8">
                    We aren't a revolving door of contractors. We're a focused team of builders who take pride in execution.
                  </p>
                  
                  {/* Stylized code snippet element showing premium brand identity */}
                  <div className="font-mono text-[11px] text-clay bg-charcoal-light p-4 rounded-lg border border-cream/5 space-y-1">
                    <p className="text-cream/40">// Ortex Studio Config</p>
                    <p><span className="text-amber-accent">const</span> studio = &#123;</p>
                    <p className="pl-4">engineers: <span className="text-cream">"Hands-On Only"</span>,</p>
                    <p className="pl-4">shortcuts: <span className="text-cream">false</span>,</p>
                    <p className="pl-4">warranty: <span className="text-cream">"Continuous Support"</span></p>
                    <p>&#125;;</p>
                  </div>
                </div>
              </div>

              {/* Decorative background shadow offset layer */}
              <div className="absolute inset-0 bg-clay rounded-2xl transform lg:rotate-3 -z-10 opacity-80" />
            </div>
          </div>

          {/* Right Column (60%): The reasons layout */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            <div className="border-b border-charcoal/10 pb-6">
              <span className="font-mono text-xs text-clay font-bold tracking-[0.2em] uppercase mb-2 block">
                // OUR FOUNDATION
              </span>
              <h3 className="font-display font-extrabold text-3xl md:text-4xl uppercase tracking-tight text-charcoal">
                Four Pillars of the Ortex Guarantee
              </h3>
            </div>

            {/* Grid for items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col gap-4 p-6 bg-cream-dark/40 hover:bg-cream-dark/80 rounded-xl transition-all duration-300 group border border-charcoal/5"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-sm font-bold text-clay">
                        {reason.num}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-clay/10 text-clay flex items-center justify-center group-hover:bg-clay group-hover:text-cream transition-colors duration-300">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-display font-bold text-xl uppercase tracking-wide text-charcoal group-hover:text-clay transition-colors duration-300">
                        {reason.title}
                      </h4>
                      <p className="mt-2 text-sm text-charcoal/70 leading-relaxed font-light">
                        {reason.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
