"use client";
import React from "react";

const engineeringFeatures = [
  {
    h3: "Component",
    highlight: "Architecture",
    desc: "We build atomic design systems that ensure UI consistency across your entire ecosystem. By creating a unified library of isolated, reusable components, we accelerate future feature rollouts.",
    color: "bg-emerald-500", 
    icon: (
      <g>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </g>
    )
  },
  {
    h3: "State-Driven",
    highlight: "Logic Patterns",
    desc: "From Redux Toolkit to TanStack Query, we implement predictable state machines. Your application data flows seamlessly, reducing side effects and ensuring a reactive user experience.",
    color: "bg-[#F97316]",
    icon: (
      <g>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </g>
    )
  },
  {
    h3: "Vitals &",
    highlight: "Performance",
    desc: "We prioritize LCP, INP, and CLS scores, ensuring users never experience layout shifts or interaction delays. We treat performance budgets as a critical acceptance criterion.",
    color: "bg-emerald-500", 
    icon: (
      <g>
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    )
  },
  {
    h3: "TypeScript",
    highlight: "Type Safety",
    desc: "We eliminate runtime errors before they reach production. Our strict TypeScript configuration provides a self-documenting codebase that makes onboarding new engineers effortlessly.",
    color: "bg-[#8B5CF6]",
    icon: (
      <g>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </g>
    )
  },
  {
    h3: "Headless",
    highlight: "Integration",
    desc: "We specialize in decoupled architectures. Whether using Next.js with GraphQL or REST APIs, we build lightning-fast frontends that consume data securely from any backend provider.",
    color: "bg-[#06B6D4]",
    icon: (
      <g>
        <circle cx="12" cy="12" r="10" />
      </g>
    )
  }
];

export const EngineeringProcess = () => {
  return (
    <div className="w-full relative overflow-hidden">
      <section className="w-full pt-2 pb-16 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 relative z-10 flex flex-col items-center justify-center text-center mb-16">
          <h2 className="block text-emerald-500 mb-4 text-3xl md:text-5xl">
            Why Choose Our <br className="hidden md:block" />
            <span className="relative inline-block px-2 z-10 text-[#FFFFFF] mt-2 md:mt-0">
              Development Process?
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            Expertly crafted interfaces meeting high-performance engineering. 
            I specialize in bridging the gap between complex backend logic 
            and fluid, user-centric frontends.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-[40px] px-5 max-w-[1400px] mx-auto">
          {engineeringFeatures.map((f, i) => (
            <div 
              key={i} 
              className="flex flex-col md:flex-row items-center md:items-start gap-5 w-full md:w-[calc(50%-20px)] lg:w-[calc(33.333%-27px)] text-center md:text-left"
            >
              <div className={`shrink-0 w-[60px] h-[60px] flex items-center justify-center rounded-xl shadow-lg shadow-black/20 ${f.color} border-b-4 border-black/20`}>
                <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {f.icon}
                </svg>
              </div>
              <div>
                <h3 className="block text-emerald-500 mb-2">
                  {f.h3} <span className="text-[#FFFFFF]">{f.highlight}</span>
                </h3>
                <p className="text-[#FFFFFF] opacity-90">
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