"use client";
import React from "react";
import Image from "next/image";

export const EvolutionServices = () => {
  return (
    /* Integrated the global section-container for pt-10, pb-0, px-5 */
    <section className="section-container relative overflow-hidden">
      
      {/* Integrated global-grid-layout for max-width, centering, and responsive grid */}
      <div className="global-grid-layout">
        
        {/* --- LEFT COLUMN: VISUAL & CTA --- */}
        {/* Changed order to 2 on mobile, 1 on desktop so text stays on top for mobile users */}
        <div className="flex flex-col gap-8 order-2 lg:order-1">
          
          {/* CTA Box */}
          <div className="bg-[#1a2436] border border-white/10 rounded-2xl p-8 w-full text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-emerald-500/20 blur-[50px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10 mb-5">
              <h4 className="text-xl mb-2 text-white">
                Is technical debt slowing you down?
              </h4>
              <p className="text-white/90 !mb-0"> {/* Override p margin for CTA interior */}
                Get a free architecture audit & modernization plan.
              </p>
            </div>
            
            <form className="relative z-10 flex flex-col gap-3">
              <input
                type="url"
                placeholder="Your current website URL..."
                className="bg-[#0E1623] border border-white/20 p-4 rounded-lg w-full text-white outline-none placeholder:text-gray-500 focus:border-emerald-500 transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-emerald-600 text-white p-4 rounded-lg font-bold uppercase hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-900/30"
              >
                Get Audit
              </button>
            </form>
          </div>

          {/* Optimized Image Container */}
         <div className="relative w-full rounded-3xl overflow-hidden h-[300px] lg:h-[450px]">
  <Image
    src="https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
    alt="Web Architect Expert"
    fill
    className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
    sizes="(max-width: 1024px) 100vw, 500px"
  />
</div>
        </div>

        {/* --- RIGHT COLUMN: CONTENT --- */}
        <div className="text-center lg:text-left order-1 lg:order-2">
       

          <h2 className="text-emerald-500 leading-tight">
            The Web Has Evolved. <br className="hidden lg:block" />
            Your Stack Should{" "}
            <span className="relative inline-block text-white px-1 z-10">
              Keep Up.
            </span>
          </h2>

          <div className="flex flex-col mt-10">
            <div className="mb-8">
              <h3 className="text-emerald-500 !mb-3">
                Legacy Monoliths Are <span className="text-white">Too Slow</span>
              </h3>
              <p className="max-w-[90%] mx-auto lg:mx-0">
                Heavy plugins and bloated themes kill your Core Web Vitals. I build 
                decoupled architectures where the frontend is lean, fast, and scores 100/100 
                on performance tests.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-emerald-500 !mb-3">
                Headless is the <span className="text-white">New Standard</span>
              </h3>
              <p className="max-w-[90%] mx-auto lg:mx-0">
                Don&apos;t let your CMS dictate your design. By using WordPress strictly as an API 
                and Next.js for the frontend, we get enterprise-grade security with 
                complete design freedom.
              </p>
            </div>

        
          </div>
        </div>
        
      </div>
    </section>
  );
};