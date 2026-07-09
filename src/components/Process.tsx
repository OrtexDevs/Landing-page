import React from "react";
import { motion } from "motion/react";
import { Compass, Hammer, Sparkles, Rocket } from "lucide-react";

export default function Process() {
  const steps = [
    {
      step: "01",
      title: "Discovery",
      subTitle: "Understanding Your Goals",
      desc: "We dive deep into your workflow, business model, and user requirements. No assumptions are made. We align on technical scope, deliverables, and timelines.",
      icon: Compass,
      align: "left",
    },
    {
      step: "02",
      title: "Design",
      subTitle: "Clean Systems Architecture",
      desc: "We draft high-fidelity systems design, database schemas, and clean software architecture. Every component is meticulously planned before a single line of code is written.",
      icon: Sparkles,
      align: "right",
    },
    {
      step: "03",
      title: "Build",
      subTitle: "Agile, Rapid Development",
      desc: "Clean code execution with full type safety. We deploy in rapid agile iterations, giving you access to a live staging sandbox to view and test updates regularly.",
      icon: Hammer,
      align: "left",
    },
    {
      step: "04",
      title: "Launch & Support",
      subTitle: "Seamless Deployment & Security",
      desc: "Smooth launch onto durable cloud infrastructure, followed by active performance monitoring, security sweeps, and ongoing support to ensure zero service disruption.",
      icon: Rocket,
      align: "right",
    },
  ];

  return (
    <section
      id="process"
      className="py-24 md:py-32 bg-charcoal text-cream bg-grain relative overflow-hidden"
    >
      {/* Background visual accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-clay/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-clay/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-mono text-xs text-clay font-bold tracking-[0.2em] uppercase mb-4 block">
            // OUR ENGINEERING WORKFLOW
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight">
            How We Take You From <br />
            <span className="text-clay">Concept to Production</span>
          </h2>
          <p className="mt-4 font-sans text-cream/75 text-sm md:text-base font-light">
            We operate with complete clarity. Our process guarantees you know exactly what is being built, when it will ship, and how it is secured.
          </p>
        </div>

        {/* Customized Premium Vertical Timeline */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Centered connecting timeline track line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-clay via-clay-light to-amber-accent/30 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-6 top-4 bottom-4 w-[2px] bg-gradient-to-b from-clay via-clay-light to-amber-accent/30 md:hidden" />

          <div className="space-y-12 md:space-y-24">
            {steps.map((item, index) => {
              const StepIcon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.step}
                  className={`relative flex flex-col md:flex-row ${
                    isEven ? "md:flex-row-reverse" : ""
                  } justify-between items-stretch md:items-center`}
                >
                  
                  {/* Timeline bullet node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-clay border-4 border-charcoal z-20 shadow-lg shadow-clay/50 hidden md:block" />
                  <div className="absolute left-6 -translate-x-1/2 w-4 h-4 rounded-full bg-clay border-4 border-charcoal z-20 shadow-lg shadow-clay/50 md:hidden" />

                  {/* Visual card content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="w-full md:w-[45%] pl-12 md:pl-0"
                  >
                    <div className="bg-charcoal-light border border-cream/5 p-8 rounded-xl shadow-xl hover:border-clay/30 transition-all duration-300 relative group">
                      
                      {/* Step Indicator on Card */}
                      <span className="absolute top-4 right-6 font-display font-black text-6xl text-clay/10 group-hover:text-clay/20 transition-colors duration-300">
                        {item.step}
                      </span>

                      {/* Header layout */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-full bg-clay/10 text-clay flex items-center justify-center">
                          <StepIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="font-mono text-[10px] text-clay-light uppercase tracking-wider block">
                            STAGE {item.step}
                          </span>
                          <h3 className="font-display font-extrabold text-2xl uppercase tracking-wide text-cream">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      {/* Detailed Subtitle */}
                      <h4 className="text-sm font-semibold text-amber-accent/80 mb-2 font-mono">
                        // {item.subTitle}
                      </h4>

                      {/* Paragraph copy */}
                      <p className="text-cream/75 text-sm font-light leading-relaxed">
                        {item.desc}
                      </p>

                    </div>
                  </motion.div>

                  {/* Invisible spacer block for desktop alignment symmetry */}
                  <div className="hidden md:block w-[45%]" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
