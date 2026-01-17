import React from "react";
import Image from "next/image";

export const HeroHome = () => {
  return (
    <section className="relative w-full min-h-[650px] lg:h-[90vh] bg-[radial-gradient(circle_at_80%_20%,_#f0f9ff_0%,_#e0f2fe_100%)] overflow-hidden flex items-center">
      
      <div className="container mx-auto px-5 lg:px-0 flex flex-col lg:flex-row h-full relative max-w-[1400px]">
        
        {/* --- ZONE A: TEXT CONTENT (45%) --- */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center z-10 lg:pl-[8%] mb-12 lg:mb-0 text-center lg:text-left pt-10 lg:pt-0">
          <span className="text-blue-600 uppercase tracking-[3px] font-extrabold text-sm mb-3">
            Premium Front-End Solutions
          </span>
          <h1 className="text-slate-800 text-4xl lg:text-[3.2rem] font-black leading-[1.1] mb-5">
            Crafting High-Performance Web Experiences
          </h1>
          <h2 className="text-slate-600 text-lg font-semibold mb-3">
            Traditional WordPress • Headless Architect • Web App Developer
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
            Specializing in pixel-perfect Front End Development. Whether it's a classic theme, a blazing fast Next.js headless build, or a complex web application, I build interfaces that drive results.
          </p>

          {/* Proposal Form */}
          <form className="bg-white p-2 rounded-xl flex shadow-xl border border-slate-200 w-full max-w-[450px] mx-auto lg:mx-0">
            <input 
              placeholder="Your website URL..." 
              type="url" 
              className="flex-1 border-none p-3 outline-none text-slate-800"
              required 
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition">
              Get Proposal
            </button>
          </form>
        </div>

        {/* --- VISUAL ZONE (55%) --- */}
        <div className="w-full lg:w-[55%] relative flex justify-center lg:justify-end items-end h-[400px] lg:h-full">
          
          {/* Floating Nodes (Hidden on mobile or stacked) */}
          <div className="absolute inset-0 z-20 pointer-events-none hidden lg:block">
            {/* Step 1 */}
            <div className="absolute top-[15%] right-[40%] bg-white/95 p-3 rounded-xl border border-blue-500/20 shadow-lg w-[140px]">
              <strong className="block text-slate-800 text-sm">100% Pixel Perfect</strong>
              <small className="text-slate-500 text-[10px] font-bold uppercase">Figma to Code</small>
            </div>
            {/* Step 2 */}
            <div className="absolute top-[35%] right-[65%] bg-white/95 p-3 rounded-xl border border-blue-500/20 shadow-lg w-[140px]">
              <strong className="block text-slate-800 text-sm">Headless WP</strong>
              <small className="text-slate-500 text-[10px] font-bold uppercase">Next.js & GraphQL</small>
            </div>
            {/* Step 3 */}
            <div className="absolute top-[58%] right-[45%] bg-white/95 p-3 rounded-xl border border-blue-500/20 shadow-lg w-[140px]">
              <strong className="block text-slate-800 text-sm">Core Web Vitals</strong>
              <small className="text-slate-500 text-[10px] font-bold uppercase">Performance First</small>
            </div>
            {/* Step 4 */}
            <div className="absolute top-[78%] right-[60%] bg-white/95 p-3 rounded-xl border border-blue-500/20 shadow-lg w-[140px]">
              <strong className="block text-slate-800 text-sm">React / Vue</strong>
              <small className="text-slate-500 text-[10px] font-bold uppercase">Modern Web Apps</small>
            </div>
          </div>

          {/* Main Image */}
          <div className="relative z-10 w-[80%] h-[90%] flex items-end justify-end">
             {/* Replace src with your actual image URL */}
             <img 
               src="https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp" 
               alt="Ekrama Taimuri Developer" 
               className="h-full w-auto object-contain drop-shadow-2xl"
             />
          </div>

        </div>
      </div>
    </section>
  );
};