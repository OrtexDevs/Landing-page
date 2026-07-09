/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyOrtex from "./components/WhyOrtex";
import Process from "./components/Process";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-charcoal text-cream selection:bg-clay selection:text-cream scroll-smooth">
      {/* Premium Sticky Navigation */}
      <Navbar />

      {/* Hero Visual Segment */}
      <Hero />

      {/* Warm Contrast About Section */}
      <About />

      {/* Asymmetric Services Bento Grid */}
      <Services />

      {/* Brand Identity / Value Pillars with Diagonal Offsets */}
      <WhyOrtex />

      {/* Engineering Workflow / Timeline Nodes */}
      <Process />

      {/* State-Driven Project Inquiry Builder */}
      <ContactForm />

      {/* Responsive Studio Footer */}
      <Footer />
    </div>
  );
}
