"use client";
import React from "react";

const engineeringFeatures = [
  {
    title: "Component",
    highlight: "Architecture",
    desc: "We build atomic design systems that ensure UI consistency across your entire ecosystem. By creating a unified library of isolated, reusable components, we accelerate future feature rollouts.",
    color: "bg-[#207DE9]",
    icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  },
  {
    title: "State-Driven",
    highlight: "Logic Patterns",
    desc: "From Redux Toolkit to TanStack Query, we implement predictable state machines. Your application data flows seamlessly, reducing side effects and ensuring a reactive user experience.",
    color: "bg-[#F97316]",
    icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  },
  {
    title: "Vitals &",
    highlight: "Performance",
    desc: "We prioritize LCP, INP, and CLS scores, ensuring users never experience layout shifts or interaction delays. We treat performance budgets as a critical acceptance criterion.",
    color: "bg-[#10B981]",
    icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  },
  {
    title: "TypeScript",
    highlight: "Type Safety",
    desc: "We eliminate runtime errors before they reach production. Our strict TypeScript configuration provides a self-documenting codebase that makes onboarding new engineers effortless.",
    color: "bg-[#8B5CF6]",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  },
  {
    title: "Headless",
    highlight: "Integration",
    desc: "We specialize in decoupled architectures. Whether using Next.js with GraphQL or REST APIs, we build lightning-fast frontends that consume data securely from any backend provider.",
    color: "bg-[#06B6D4]",
    icon: <circle cx="12" cy="12" r="10" />
  }
];

export const EngineeringProcess = () => {
  return (
    <div 
      className="w-full relative overflow-hidden"
      style={{
        backgroundColor: '#0E1623',
        backgroundImage: `
          radial-gradient(900px 500px at 10% 0%, rgba(124, 92, 255, 0.25), transparent 60%),
          radial-gradient(800px 500px at 90% 10%, rgba(0, 212, 255, 0.18), transparent 55%)
        `,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* --- SECTION 1: THE INTRO --- */}
      <section className="pt-[80px] pb-[40px] px-5 text-center relative z-10">
        <div className="max-w-[900px] mx-auto">
          {/* Subtitle: Pure White */}
          <span className="block text-[#FFFFFF] font-bold text-[0.85rem] uppercase tracking-[2px] mb-5">
            Engineering Methodology
          </span>

          {/* H2: Blue Base, White Highlight, Double Scratch */}
          <h2 className="text-[#3F5CE0] font-black text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.1] tracking-tight mb-[35px]">
            Engineering Interfaces to <br className="hidden md:block" />
            <span className="relative inline-block px-2 z-10 text-[#FFFFFF] mt-2 md:mt-0">
              Scale Your Product
              {/* Double Scratch Layer 1 (Darker Blue) */}
              <span className="absolute left-0 right-0 bottom-[4px] h-[10px] bg-[#2E476E] -z-20 skew-x-[-12deg] rounded-sm"></span>
              {/* Double Scratch Layer 2 (Lighter Blue) */}
              <span className="absolute left-0 right-0 bottom-[8px] h-[10px] bg-[#3C66A6] -z-10 skew-x-[-12deg] rounded-sm shadow-[0_2px_0_rgba(255,255,255,0.1)]"></span>
            </span>
          </h2>

          <div className="max-w-[700px] mx-auto">
            <p className="text-[#FFFFFF] text-[1.1rem] font-normal leading-[1.6] mb-6">
              <span className="font-black text-[#FFFFFF]">Mastery across modern stacks.</span> <br />
              Our engineering team builds high-performance applications using proprietary component patterns that prioritize maintainability and sub-second load times.
            </p>
            <a href="#tech" className="inline-block font-black text-[#3F5CE0] no-underline text-[1.1rem] transition-transform duration-200 hover:translate-x-1 mb-10">
              Learn how we work →
            </a>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: WHY CHOOSE (THE GRID) --- */}
      <section className="pb-[80px] px-5 w-full max-w-[1200px] mx-auto relative z-10">
        {/* SMALLER HEADER FOR THE GRID SECTION */}
        <div className="text-center mb-[50px] max-w-[800px] mx-auto">
           {/* H2: Blue Base, White Highlight */}
           <h2 className="text-[#3F5CE0] font-black text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.1] tracking-tight mb-5">
            Why Choose Our <br className="hidden md:block" />
            <span className="relative inline-block px-2 z-10 text-[#FFFFFF] mt-2 md:mt-0">
              Development Process?
              {/* Double Scratch Layer 1 */}
              <span className="absolute left-0 right-0 bottom-[4px] h-[10px] bg-[#2E476E] -z-20 skew-x-[-12deg] rounded-sm"></span>
              {/* Double Scratch Layer 2 */}
              <span className="absolute left-0 right-0 bottom-[8px] h-[10px] bg-[#3C66A6] -z-10 skew-x-[-12deg] rounded-sm shadow-[0_2px_0_rgba(255,255,255,0.1)]"></span>
            </span>
          </h2>
        </div>

        {/* THE GRID */}
        <div className="flex flex-wrap justify-center gap-[40px]">
          {engineeringFeatures.map((f, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center md:items-start gap-5 flex-[0_1_calc(33.333%-40px)] min-w-[300px] text-center md:text-left">
              <div className={`shrink-0 w-[60px] h-[60px] flex items-center justify-center rounded-xl shadow-lg shadow-black/20 ${f.color} border-b-4 border-black/20`}>
                <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                  {f.icon}
                </svg>
              </div>
              <div>
                {/* H3: Base Blue, Emphasis White */}
                <h3 className="text-[#3F5CE0] font-black text-[clamp(1.0rem,1vw,1.2rem)] mb-2 uppercase tracking-tight leading-tight">
                  {f.title} <span className="text-[#FFFFFF]">{f.highlight}</span>
                </h3>
                {/* Paragraph: Pure White */}
                <p className="text-[#FFFFFF] text-[0.95rem] font-normal leading-[1.6]">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};