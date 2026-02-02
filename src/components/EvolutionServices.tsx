"use client";
import React from "react";
import Image from "next/image";

export const EvolutionServices = () => {
  return (
    <section 
      className="relative py-[100px] overflow-hidden"
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
      <div className="max-w-[1200px] mx-auto px-10 flex flex-col lg:flex-row gap-20 items-start relative z-10">
        
        {/* --- LEFT ZONE: VISUAL & CTA --- */}
        <div className="w-full lg:max-w-[500px] flex flex-col gap-[30px] order-2 lg:order-1">
          
          {/* CTA Box - Adjusted for Dark Theme */}
          <div className="bg-[#1a2436] border border-white/10 rounded-2xl p-[30px] w-full text-white shadow-2xl relative overflow-hidden">
            {/* Subtle glow effect inside box */}
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[#3F5CE0]/20 blur-[50px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10 mb-5">
              <h4 className="text-[1.35rem] font-black tracking-tighter mb-2 text-white">
                Is technical debt slowing you down?
              </h4>
              <p className="text-base font-medium text-white/90">
                Get a free architecture audit & modernization plan.
              </p>
            </div>
            <form className="relative z-10 flex flex-col gap-3">
              <input
                type="url"
                placeholder="Your current website URL..."
                className="bg-[#0E1623] border border-white/20 p-[14px] rounded-lg w-full text-white outline-none placeholder:text-gray-500 focus:border-[#3F5CE0] transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-[#3F5CE0] text-white p-[14px] rounded-lg font-extrabold uppercase tracking-wide hover:bg-[#344dbd] transition-colors shadow-lg shadow-[#3F5CE0]/30"
              >
                Get Audit
              </button>
            </form>
          </div>

          {/* Image Container */}
          <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
              alt="Web Architect Expert"
              className="w-full h-auto block opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>

        {/* --- RIGHT ZONE: CONTENT --- */}
        <div className="flex-[1.5] pt-[10px] w-full text-center lg:text-left order-1 lg:order-2">
          
          {/* Kicker: Pure White */}
          <span className="inline-block text-[#FFFFFF] font-black text-[0.85rem] uppercase tracking-[2px] mb-[25px]">
            Future-Proof Engineering
          </span>

          {/* H2 Headline: Cobalt Blue Base, White Highlight, Double Scratch */}
          <h2 className="text-[#3F5CE0] text-[clamp(2.5rem,4vw,3.5rem)] font-black leading-[1.1] mb-[40px] tracking-tight">
            The Web Has Evolved. <br className="hidden lg:block" />
            Your Stack Should{" "}
            <span className="relative inline-block text-[#FFFFFF] px-1 z-10">
              Keep Up.
              {/* Double Scratch Layer 1 (Darker Blue - #2E476E) */}
              <span className="absolute left-0 right-0 bottom-[6px] h-[10px] bg-[#2E476E] -z-20 skew-x-[-12deg] rounded-sm"></span>
              {/* Double Scratch Layer 2 (Lighter Blue - #3C66A6) */}
              <span className="absolute left-0 right-0 bottom-[8px] h-[10px] bg-[#3C66A6] -z-10 skew-x-[-12deg] rounded-sm shadow-[0_2px_0_rgba(255,255,255,0.1)]"></span>
            </span>
          </h2>

          {/* Features Wrapper */}
          <div className="flex flex-col gap-0">
            
            {/* Feature 1 */}
            <div className="pb-[30px]">
              {/* H3: Cobalt Blue Base, White Emphasis */}
              <h3 className="text-[#3F5CE0] text-[clamp(1.4rem,2vw,1.8rem)] font-black leading-[1.25] mb-[12px] tracking-tight">
                Legacy Monoliths Are <span className="text-[#FFFFFF]">Too Slow</span>
              </h3>
              {/* Paragraph: Pure White */}
              <p className="text-[1.1rem] leading-[1.6] text-[#FFFFFF] font-normal max-w-[90%] mx-auto lg:mx-0">
                Heavy plugins and bloated themes kill your Core Web Vitals. I build 
                decoupled architectures where the frontend is lean, fast, and scores 100/100 
                on performance tests.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="py-[10px] pb-[30px]">
              <h3 className="text-[#3F5CE0] text-[clamp(1.4rem,2vw,1.8rem)] font-black leading-[1.25] mb-[12px] tracking-tight">
                Headless is the <span className="text-[#FFFFFF]">New Standard</span>
              </h3>
              <p className="text-[1.1rem] leading-[1.6] text-[#FFFFFF] font-normal max-w-[90%] mx-auto lg:mx-0">
                Don't let your CMS dictate your design. By using WordPress strictly as an API 
                and Next.js for the frontend, we get enterprise-grade security with 
                complete design freedom.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="py-[10px] pb-[30px]">
              <h3 className="text-[#3F5CE0] text-[clamp(1.4rem,2vw,1.8rem)] font-black leading-[1.25] mb-[12px] tracking-tight">
                Component-Driven <span className="text-[#FFFFFF]">Scalability</span>
              </h3>
              <p className="text-[1.1rem] leading-[1.6] text-[#FFFFFF] font-normal max-w-[90%] mx-auto lg:mx-0">
                Stop duplicating code. I build reusable, type-safe React components. 
                This means your site is easier to maintain, easier to scale, and 
                impossible to break by accident.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};