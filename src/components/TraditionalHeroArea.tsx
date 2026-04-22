"use client";
import React from 'react';

export const TraditionalHeroArea = () => {
  // Helper to render the dense floating icons inside each glass box
const renderFloatingIcons = (count: number, seedOffset: number) => {
      return Array.from({ length: count }).map((_, i) => {
      const isVertical = i % 2 === 0;
      const iconType = (i + seedOffset) % 4;
      const size = 16 + ((i * 7) % 18); 
      const duration = 15 + ((i * 3) % 20); 
      const delay = ((i * 5) % 30) * -1; 
      const pos = ((i * 13) + seedOffset * 17) % 100; 

      return (
        <div
          key={i}
          className="absolute text-emerald-400/30 flex items-center justify-center opacity-[0.2]"        
          style={{
            [isVertical ? 'left' : 'top']: `${pos}%`,
            [isVertical ? 'top' : 'left']: '-30%',
            animation: `${isVertical ? 'drift-vertical' : 'drift-horizontal'} ${duration}s linear infinite`,
            animationDelay: `${delay}s`,
            width: size,
            height: size,
          }}
        >
          {iconType === 0 && (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-2 14H8V8h2v8zm6 0h-4v-2h4v2zm0-3h-4v-2h4v2zm0-3h-4V8h4v2z" />
            </svg>
          )}
          {iconType === 1 && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
              <circle cx="12" cy="12" r="10" />
              <path d="M9 8h4.5a3.5 3.5 0 010 7H9V8z" fill="currentColor" stroke="none"/>
            </svg>
          )}
          {iconType === 2 && (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 2L2 22h20L12 2zm0 5l5 10H7l5-10z" />
            </svg>
          )}
          {iconType === 3 && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <rect x="7" y="7" width="4" height="4" />
              <rect x="13" y="7" width="4" height="4" />
              <rect x="7" y="13" width="10" height="4" />
            </svg>
          )}
        </div>
      );
    });
  };

  return (
    <section className="w-full pt-2 relative overflow-hidden">
      {/* Custom Keyframes */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float-bubble {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
        }
        @keyframes drift-vertical {
            0% { transform: translateY(-50px) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(200px) rotate(180deg); opacity: 0; }
        }
        @keyframes drift-horizontal {
            0% { transform: translateX(-50px) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateX(200px) rotate(-180deg); opacity: 0; }
        }
        .animate-float-1 { animation: float-bubble 7s ease-in-out infinite; }
        .animate-float-2 { animation: float-bubble 8s ease-in-out infinite 1.5s; }
        .animate-float-3 { animation: float-bubble 9s ease-in-out infinite 0.7s; }
      `}} />

      <div className="max-w-[1400px] mx-auto px-5 relative z-10 items-center justify-center text-center flex flex-col lg:flex-row gap-[50px] lg:justify-between lg:text-left">
        
        {/* --- LEFT COLUMN --- */}
        <div className="flex-1 max-w-[500px] z-20">
          <h2 className="mb-6 text-white">
            Bespoke WordPress Themes <br/>
            <span className="text-emerald-500">Without the Bloat.</span>
          </h2>
          <p className="text-[#A9B4BC] text-[1.05rem] leading-[1.7] mb-8 pr-0 md:pr-4">
            We architect high-performance, custom WordPress websites from the ground up. 
            By avoiding heavy page builders and relying on clean PHP, Advanced Custom Fields (ACF), 
            and optimized CSS/JS, we deliver fully editable backends with lightning-fast frontends.
          </p>
          <a href="#contact" className="bg-emerald-500 text-white py-[14px] px-[28px] font-bold text-[0.95rem] rounded-lg inline-block transition-transform duration-200 hover:-translate-y-[2px] hover:shadow-[0_10px_20px_rgba(16,185,129,0.3)] decoration-none">
            Explore Our WP Services
          </a>
        </div>

        {/* --- RIGHT COLUMN --- */}
        <div className="flex-[1.3] relative flex justify-center items-center min-h-[500px] md:min-h-[550px] w-full">
          
          <div className="absolute top-[20%] left-[20%] w-[200px] h-[200px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-[20%] right-[40%] w-[200px] h-[200px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative w-full max-w-[700px] h-[500px]">
            
            {/* Main Center Card (Sits on top of the overlaps z-30) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[320px] bg-[#0E1623]/80 backdrop-blur-xl rounded-[24px] border border-emerald-500 px-5 py-3 shadow-[0_0_40px_rgba(16,185,129,0.15)] z-30 flex flex-col justify-between">
              
              <div className="flex justify-between items-center mb-2 opacity-60">
                <div className="flex items-center gap-1.5 text-white">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-emerald-500">
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-2 14H8V8h2v8zm6 0h-4v-2h4v2zm0-3h-4v-2h4v2zm0-3h-4V8h4v2z" />
                  </svg>
                  <span className="text-[0.65rem] font-medium italic tracking-wide">elementor</span>
                  <span className="bg-white/20 px-1 py-[1px] rounded-[3px] text-[0.55rem] font-bold">Pro</span>
                </div>
                <div className="flex items-center gap-1 text-white">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-emerald-500">
                    <path d="M12 2L2 22h20L12 2zm0 5l5 10H7l5-10z" />
                  </svg>
                  <span className="text-[0.7rem] font-medium tracking-wide">Avada</span>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-white mb-3">
                  Advanced Builder<br/>Philosophy
                </h3>
                <p className="text-[#A9B4BC] text-[0.8rem] leading-[1.6] m-0 px-1">
                  Utilize advanced WordPress page builders—such as Elementor Pro, Avada, and Divi—paired with professional frontend expertise to build either modular, reusable UI components or full-scale, custom websites from scratch.
                </p>
              </div>

              <div className="flex justify-between items-end mt-2 opacity-40">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-emerald-500">
                  <path d="M12 2L2 22h20L12 2zm0 5l5 10H7l5-10z" />
                </svg>
                <div className="w-6 h-6 rounded-full border border-emerald-500 flex items-center justify-center text-emerald-500 font-bold text-[0.6rem]">
                  D
                </div>
              </div>

              <div className="absolute top-[40%] -right-4 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/5 opacity-50">
                 <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-white"><path d="M12 2L2 22h20L12 2zm0 5l5 10H7l5-10z" /></svg>
              </div>
            </div>

            {/* Box 1 (Top Left) */}
            <div className="absolute top-[-2%] left-[-2%] md:left-[3%] w-[140px] h-[140px] md:w-[170px] md:h-[170px] [perspective:1000px] group z-20 animate-float-1">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] cursor-pointer group-hover:[transform:rotateY(180deg)]">
                
                <div className="absolute inset-0 [-webkit-backface-visibility:hidden] [backface-visibility:hidden] bg-[#0E1623]/80 backdrop-blur-xl border border-emerald-500 rounded-[24px] overflow-hidden flex flex-col items-center justify-center shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
                  <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                  <div className="absolute inset-0 z-0">{renderFloatingIcons(15, 1)}</div>
                  <div className="relative z-10 text-center drop-shadow-md">
                    <span className="text-3xl font-black text-emerald-500 block leading-none">99%</span>
                    <span className="text-white mt-2 font-bold tracking-widest uppercase block">Performance</span>
                  </div>
                </div>

                <div className="absolute inset-0 [-webkit-backface-visibility:hidden] [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#0E1623]/95 backdrop-blur-2xl border border-emerald-500 rounded-[24px] flex flex-col items-center justify-center p-4 text-center shadow-[0_15px_35px_rgba(16,185,129,0.2)]">
                  <h4 className="text-emerald-500 mb-1.5 uppercase">Top Speeds</h4>
                  <p className="text-[#A9B4BC] text-[0.7rem] leading-relaxed m-0">
                    Lightning fast load times mapped closely to Core Web Vitals.
                  </p>
                </div>

              </div>
            </div>

            {/* Box 2 (Bottom Left) */}
            <div className="absolute bottom-[2%] md:bottom-[5%] left-[-2%] md:left-[6%] w-[140px] h-[140px] md:w-[170px] md:h-[170px] [perspective:1000px] group z-20 animate-float-2">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] cursor-pointer group-hover:[transform:rotateY(180deg)]">
                
                <div className="absolute inset-0 [-webkit-backface-visibility:hidden] [backface-visibility:hidden] bg-[#0E1623]/80 backdrop-blur-xl border border-emerald-500 rounded-[24px] overflow-hidden flex flex-col items-center justify-center shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
                  <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                  <div className="absolute inset-0 z-0">{renderFloatingIcons(15, 5)}</div>
                  <div className="relative z-10 text-center drop-shadow-md">
                    <span className="text-3xl font-black text-emerald-500 block leading-none">100%</span>
                    <span className="text-white  mt-2 font-bold tracking-widest uppercase block">Custom</span>
                  </div>
                </div>

                <div className="absolute inset-0 [-webkit-backface-visibility:hidden] [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#0E1623]/95 backdrop-blur-2xl border border-emerald-500 rounded-[24px] flex flex-col items-center justify-center p-4 text-center shadow-[0_15px_35px_rgba(16,185,129,0.2)]">
                  <h4 className="text-emerald-500 mb-1.5 uppercase">Bespoke</h4>
                  <p className="text-[#A9B4BC] text-[0.7rem] leading-relaxed m-0">
                    Total architectural control over every single pixel and template.
                  </p>
                </div>

              </div>
            </div>

            {/* Box 3 (Top Right) */}
            <div className="absolute top-[8%] right-[-2%] md:right-[3%] w-[140px] h-[140px] md:w-[170px] md:h-[170px] [perspective:1000px] group z-20 animate-float-3">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] cursor-pointer group-hover:[transform:rotateY(180deg)]">
                
                <div className="absolute inset-0 [-webkit-backface-visibility:hidden] [backface-visibility:hidden] bg-[#0E1623]/80 backdrop-blur-xl border border-emerald-500 rounded-[24px] overflow-hidden flex flex-col items-center justify-center shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
                  <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                  <div className="absolute inset-0 z-0">{renderFloatingIcons(15, 9)}</div>
                  <div className="relative z-10 text-center drop-shadow-md">
                    <span className="text-3xl font-black text-emerald-500 block leading-none">3x</span>
                    <span className="text-white mt-2 font-bold tracking-widest uppercase block">Faster Dev</span>
                  </div>
                </div>

                <div className="absolute inset-0 [-webkit-backface-visibility:hidden] [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#0E1623]/95 backdrop-blur-2xl border border-emerald-500 rounded-[24px] flex flex-col items-center justify-center p-4 text-center shadow-[0_15px_35px_rgba(16,185,129,0.2)]">
                  <h4 className="text-emerald-500 mb-1.5 uppercase">Speed</h4>
                  <p className="text-[#A9B4BC] text-[0.7rem] leading-relaxed m-0">
                    Modular components drastically speed up deployment timelines.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};