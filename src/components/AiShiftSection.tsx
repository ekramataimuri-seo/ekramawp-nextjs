"use client";
import React from "react";

export const AiShiftSection = () => {
  return (
    <section className="py-24 bg-[#0E1623] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* --- LEFT COLUMN: TEXT --- */}
        <div className="flex flex-col text-center lg:text-left">
          
          <h2 className="font-black text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.2] mb-10 text-white tracking-tight">
            Build High-Performance 
            <br className="hidden lg:block" />
            <span className="relative inline-block text-[#3F5CE0] px-2 z-10 mx-2 mt-2 lg:mt-0">
              Interfaces
              <span className="absolute left-0 right-0 bottom-2 h-3 bg-[#2E476E] -z-20 -skew-x-12 rounded-sm"></span>
              <span className="absolute left-0 right-0 bottom-[6px] h-3 bg-[#3C66A6] -z-10 -skew-x-12 rounded-sm shadow-[0_2px_0_rgba(255,255,255,0.1)]"></span>
            </span>
            <br className="hidden lg:block" />
            with Modern Architecture
          </h2>

          <h3 className="font-black text-[clamp(1.0rem,1vw,1.2rem)] mb-5 text-white leading-snug tracking-tight uppercase">
            The legacy monolith approach is <span className="text-[#3F5CE0]">obsolete</span>.
          </h3>

          <p className="text-[1.1rem] leading-relaxed text-white/90 mb-6 font-normal">
            Modern users demand sub-second load times and seamless interactions. Building a 
            successful product today requires moving beyond basic HTML to sophisticated, 
            component-driven architectures like Next.js and React.
          </p>

          <ul className="space-y-4 mb-8 text-left inline-block lg:block mx-auto">
            {[
              "How do we optimize Core Web Vitals for maximum performance?", 
              "Can we implement a type-safe API layer with GraphQL?", 
              "What is the best strategy for Scalable Design Systems?"
            ].map((item, index) => (
              <li key={index} className="relative pl-8 text-[1.1rem] text-white font-normal flex items-start">
                <span className="absolute left-0 text-[#3F5CE0] font-black text-xl leading-none top-[2px]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="border-l-4 border-[#3F5CE0] pl-5 text-[1.1rem] text-white italic text-left font-normal">
            <strong>WPFEDev</strong> specializes in engineering decoupled, headless 
            front-ends that turn complex technical requirements into high-speed digital realities.
          </div>
        </div>

        {/* --- RIGHT COLUMN: CHAT UI --- */}
        <div className="relative w-full max-w-md mx-auto lg:max-w-none">
          <div className="bg-[#1a2436] rounded-3xl shadow-2xl border border-white/10 overflow-hidden w-full">
            {/* Window Controls */}
            <div className="bg-[#0E1623] px-6 py-4 border-b border-white/5 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]">&nbsp;</div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]">&nbsp;</div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]">&nbsp;</div>
            </div>

            {/* Chat Body */}
            <div className="p-6 flex flex-col gap-5 bg-[#1a2436] min-h-[400px]">
              
              <div className="self-end bg-[#3F5CE0] text-white py-3 px-5 rounded-t-2xl rounded-bl-2xl max-w-[85%] shadow-md text-sm font-medium">
                We need a frontend that scores 100 on PageSpeed Insights.
              </div>

              <div className="self-start bg-[#0E1623] text-white py-4 px-5 rounded-t-2xl rounded-br-2xl max-w-[90%] shadow-sm leading-relaxed text-sm">
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-[#3F5CE0] rounded mb-2 shrink-0">&nbsp;</div>
                  <div>
                    Based on your requirements, <strong>WPFEDev Architecture</strong> is the ideal choice.
                    <br /><br />
                    I recommend a Headless Next.js setup with Server-Side Rendering (SSR).
                  </div>
                </div>
              </div>

              <div className="self-end bg-[#3F5CE0] text-white py-3 px-5 rounded-t-2xl rounded-bl-2xl max-w-[85%] shadow-md text-sm font-medium">
                Can it handle 10k+ concurrent users?
              </div>

              <div className="self-start bg-[#0E1623] text-white py-4 px-5 rounded-t-2xl rounded-br-2xl max-w-[90%] shadow-sm leading-relaxed text-sm">
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-[#3F5CE0] rounded mb-2 shrink-0">&nbsp;</div>
                  <div>
                    Yes. By leveraging Edge Caching and Incremental Static Regeneration (ISR), the system scales horizontally.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};