"use client";
import React from "react";

const engineeringFeatures = [
  {
    title: "Component",
    highlight: "Architecture",
    desc: "We build atomic design systems that ensure UI consistency across your entire ecosystem. By creating a unified library of isolated, reusable components, we accelerate future feature rollouts.",
    color: "bg-[#207DE9]",
    icon: (
      <g>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </g>
    )
  },
  {
    title: "State-Driven",
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
    title: "Vitals &",
    highlight: "Performance",
    desc: "We prioritize LCP, INP, and CLS scores, ensuring users never experience layout shifts or interaction delays. We treat performance budgets as a critical acceptance criterion.",
    color: "bg-[#10B981]",
    icon: (
      <g>
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    )
  },
  {
    title: "TypeScript",
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
    title: "Headless",
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
    <div className="w-full relative overflow-hidden bg-[#0E1623]">
      <section className="pt-[80px] pb-[40px] px-5 text-center relative z-10">
        <div className="max-w-[900px] mx-auto">
          <span className="block text-[#FFFFFF] font-bold text-[0.85rem] uppercase tracking-[2px] mb-5">
            Engineering Methodology
          </span>

          <h2 className="text-[#3F5CE0] font-black text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.1] tracking-tight mb-[35px]">
            Engineering Interfaces to <br className="hidden md:block" />
            <span className="relative inline-block px-2 z-10 text-[#FFFFFF] mt-2 md:mt-0">
              Scale Your Product
              <span className="absolute left-0 right-0 bottom-[4px] h-[10px] bg-[#2E476E] -z-20 skew-x-[-12deg] rounded-sm"></span>
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

      <section className="pb-[80px] px-5 w-full max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-[50px] max-w-[800px] mx-auto">
           <h2 className="text-[#3F5CE0] font-black text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.1] tracking-tight mb-5">
             Why Choose Our <br className="hidden md:block" />
             <span className="relative inline-block px-2 z-10 text-[#FFFFFF] mt-2 md:mt-0">
               Development Process?
               <span className="absolute left-0 right-0 bottom-[4px] h-[10px] bg-[#2E476E] -z-20 skew-x-[-12deg] rounded-sm"></span>
               <span className="absolute left-0 right-0 bottom-[8px] h-[10px] bg-[#3C66A6] -z-10 skew-x-[-12deg] rounded-sm shadow-[0_2px_0_rgba(255,255,255,0.1)]"></span>
             </span>
           </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-[40px]">
          {engineeringFeatures.map((f, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center md:items-start gap-5 flex-[0_1_calc(33.333%-40px)] min-w-[300px] text-center md:text-left">
              <div className={`shrink-0 w-[60px] h-[60px] flex items-center justify-center rounded-xl shadow-lg shadow-black/20 ${f.color} border-b-4 border-black/20`}>
                <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {f.icon}
                </svg>
              </div>
              <div>
                <h3 className="text-[#3F5CE0] font-black text-[1.1rem] mb-2 uppercase tracking-tight leading-tight">
                  {f.title} <span className="text-[#FFFFFF]">{f.highlight}</span>
                </h3>
                <p className="text-[#FFFFFF] text-[0.95rem] font-normal leading-[1.6] opacity-90">
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