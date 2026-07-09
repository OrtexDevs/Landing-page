import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, Loader2, Sparkles } from "lucide-react";

export default function ContactForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const availableServices = [
    "Custom Software Development",
    "Full-Stack Web Development",
    "Maintenance & Support",
    "Consulting & Architecture",
  ];

  const handleToggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setLoading(true);
    try {
      await fetch("https://formsubmit.co/ajax/ortexdevs@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          services: selectedServices.join(", ") || "General Inquiry",
          message,
          _subject: `New Ortex Studio Inquiry: ${name} (${selectedServices.join(", ") || "General"})`,
        }),
      });
    } catch (err) {
      console.error("Form dispatch error:", err);
    } finally {
      setLoading(false);
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
      setSelectedServices([]);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-charcoal text-cream bg-grain relative overflow-hidden"
    >
      {/* Visual background shapes */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-clay/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Block: Narrative CTA */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <span className="font-mono text-xs text-clay font-bold tracking-[0.2em] uppercase mb-4 block">
              // CONNECT WITH US
            </span>
            <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-[5rem] leading-[0.95] tracking-tight uppercase text-cream mb-8">
              Got an idea? <br />
              Let's build it <br />
              <span className="text-clay">together.</span>
            </h2>
            
            <p className="font-sans text-cream/70 text-base md:text-lg font-light leading-relaxed mb-10 max-w-md">
              We answer all inquiries within one business day. You'll discuss project scope directly with one of our core full-stack engineers — no sales fluff.
            </p>

            {/* Visual studio contact card info */}
            <div className="space-y-4 border-t border-cream/10 pt-8 max-w-sm">
              <div>
                <span className="block text-[10px] font-mono text-clay uppercase tracking-widest mb-1">
                  DIRECT DEV DIRECTORY
                </span>
                <a
                  href="mailto:ortexdevs@gmail.com"
                  className="text-sm text-cream/90 hover:text-clay transition-colors duration-200 block font-semibold underline decoration-clay/40 underline-offset-4"
                >
                  ortexdevs@gmail.com
                </a>
              </div>
              <div>
                <span className="block text-[10px] font-mono text-clay uppercase tracking-widest mb-1">
                  AVAILABILITY STATUS
                </span>
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-amber-accent">
                  <span className="w-2 h-2 rounded-full bg-amber-accent animate-ping" />
                  Accepting Q3 Project Booking
                </span>
              </div>
            </div>
          </div>

          {/* Right Block: Fully Interactive Form Engine */}
          <div className="lg:col-span-7">
            <div className="bg-charcoal-light border border-cream/5 rounded-2xl p-8 md:p-10 shadow-2xl relative">
              
              <AnimatePresence mode="wait">
                {!success ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-8"
                  >
                    
                    {/* Inquiry Service Selection */}
                    <div>
                      <label className="block text-xs font-mono text-clay uppercase tracking-widest mb-4">
                        1. Which services do you need? (Multi-select)
                      </label>
                      <div className="flex flex-wrap gap-3">
                        {availableServices.map((service) => {
                          const isSelected = selectedServices.includes(service);
                          return (
                            <button
                              type="button"
                              key={service}
                              onClick={() => handleToggleService(service)}
                              className={`px-4 py-2 text-xs font-semibold tracking-wide rounded-sm border transition-all duration-300 cursor-pointer ${
                                isSelected
                                  ? "bg-clay border-clay text-cream shadow-lg shadow-clay/15"
                                  : "bg-charcoal border-cream/10 text-cream/60 hover:border-clay/50 hover:text-cream"
                              }`}
                            >
                              {service}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-mono text-clay uppercase tracking-widest mb-2"
                        >
                          2. What is your name?
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          placeholder="Jane Doe"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-3 bg-charcoal border border-cream/10 hover:border-clay/40 focus:border-clay focus:outline-none rounded-sm text-sm text-cream placeholder-cream/20 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-mono text-clay uppercase tracking-widest mb-2"
                        >
                          3. Your email address
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          placeholder="jane@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 bg-charcoal border border-cream/10 hover:border-clay/40 focus:border-clay focus:outline-none rounded-sm text-sm text-cream placeholder-cream/20 transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-mono text-clay uppercase tracking-widest mb-2"
                      >
                        4. Tell us about your project
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        placeholder="Provide details about what you want to build, timelines, integrations..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-3 bg-charcoal border border-cream/10 hover:border-clay/40 focus:border-clay focus:outline-none rounded-sm text-sm text-cream placeholder-cream/20 transition-all duration-300 resize-none"
                      />
                    </div>

                    {/* Submit Action */}
                    <button
                      type="submit"
                      disabled={loading || !name || !email || !message}
                      className="group w-full py-4 bg-clay hover:bg-clay-light disabled:bg-cream/5 disabled:text-cream/20 disabled:cursor-not-allowed text-cream font-bold tracking-wide rounded-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-clay/10"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-cream" />
                          Analyzing Scope & Dispatching...
                        </>
                      ) : (
                        <>
                          Send Project Inquiry
                          <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </>
                      )}
                    </button>

                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ type: "spring", damping: 15 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-clay/10 text-clay flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-display font-extrabold text-3xl uppercase tracking-wide text-cream mb-2">
                      Inquiry Dispatched Successfully
                    </h3>
                    <p className="text-cream/60 max-w-md text-sm font-light leading-relaxed mb-8">
                      Thank you, <strong className="text-cream">{name}</strong>! Your inquiry has been sent directly to <strong className="text-clay">ortexdevs@gmail.com</strong>. A full-stack engineer will reach out to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSuccess(false)}
                      className="inline-flex items-center gap-2 px-6 py-2 border border-cream/15 hover:border-clay hover:bg-clay/5 text-xs font-mono uppercase tracking-widest text-cream transition-all duration-300"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-accent" />
                      Send Another Request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
