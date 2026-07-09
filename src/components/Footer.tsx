import React from "react";
import { Github, Twitter, Linkedin, ArrowUp } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-charcoal text-cream border-t border-cream/5 pt-16 pb-12 bg-grain">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-cream/5">
          
          {/* Logo, tagline, and social column */}
          <div className="md:col-span-5 flex flex-col gap-6 justify-between">
            <div className="flex flex-col gap-4">
              <Logo size="md" textColor="text-cream" lightColor="text-amber-accent" />
              <p className="font-sans text-cream/70 text-sm font-light leading-relaxed max-w-sm">
                Ortex Studio (OrtexDevs) is a premier full-stack software development agency and consultancy executing beautiful web architectures, custom software platforms, and continuous engineering support.
              </p>
              <a
                href="mailto:ortexdevs@gmail.com"
                className="text-xs font-mono text-clay hover:text-clay-light tracking-wider uppercase underline decoration-clay/30 underline-offset-4 transition-colors duration-200"
              >
                ortexdevs@gmail.com
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 items-center">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-cream/10 hover:border-clay hover:text-clay flex items-center justify-center text-cream/60 transition-all duration-300"
                aria-label="Ortex GitHub"
              >
                <Github className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-cream/10 hover:border-clay hover:text-clay flex items-center justify-center text-cream/60 transition-all duration-300"
                aria-label="Ortex Twitter"
              >
                <Twitter className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-cream/10 hover:border-clay hover:text-clay flex items-center justify-center text-cream/60 transition-all duration-300"
                aria-label="Ortex LinkedIn"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Quick links columns */}
          <div className="md:col-span-3">
            <span className="block text-[10px] font-mono text-clay uppercase tracking-widest mb-6">
              // STUDIO MAP
            </span>
            <ul className="space-y-4">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleScrollTo(e, "#about")}
                  className="text-sm text-cream/60 hover:text-cream transition-colors duration-200"
                >
                  About the Studio
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleScrollTo(e, "#services")}
                  className="text-sm text-cream/60 hover:text-cream transition-colors duration-200"
                >
                  What We Build
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  onClick={(e) => handleScrollTo(e, "#why-us")}
                  className="text-sm text-cream/60 hover:text-cream transition-colors duration-200"
                >
                  Why Our Ethos Works
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  onClick={(e) => handleScrollTo(e, "#process")}
                  className="text-sm text-cream/60 hover:text-cream transition-colors duration-200"
                >
                  Timeline & Method
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <span className="block text-[10px] font-mono text-clay uppercase tracking-widest mb-6">
              // CORE CAPABILITIES
            </span>
            <ul className="space-y-4">
              <li className="text-sm text-cream/60">Custom Web Applications</li>
              <li className="text-sm text-cream/60">Full-Stack Architectures</li>
              <li className="text-sm text-cream/60">System Integration & Scale</li>
              <li className="text-sm text-cream/60">Ongoing Engineering Support</li>
            </ul>
          </div>

          {/* Back to top scroll button */}
          <div className="md:col-span-1 flex justify-end items-start">
            <button
              onClick={handleScrollToTop}
              className="p-3 rounded-full border border-cream/10 hover:border-clay hover:text-clay flex items-center justify-center text-cream/60 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Small Tagline, Copyright, and Meta detail info */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-cream/60 font-mono text-xs tracking-widest">
          <span>ORTEX STUDIO © {new Date().getFullYear()} // ALL RIGHTS RESERVED</span>
          <span>HANDCRAFTED IN THE WORKSPACE</span>
          <span>SYSTEM STATE: STABLE // v1.1.2</span>
        </div>

      </div>
    </footer>
  );
}
