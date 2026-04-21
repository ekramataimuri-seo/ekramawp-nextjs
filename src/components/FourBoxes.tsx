"use client";
import React, { useEffect, useRef } from 'react';

export const FourBoxes = () => {
  // Ref for the card that needs to blink
  const blinkingCardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const card = blinkingCardRef.current;
    
    if (!card) return;

    // Reset animation initially
    card.style.animation = 'none';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animation when visible
            (entry.target as HTMLElement).style.animation = 'border-pulse-emerald 3s infinite';
          } else {
            // Optional: Stop animation when out of view
            (entry.target as HTMLElement).style.animation = 'none';
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(card);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="w-full pt-2 pb-16 relative overflow-hidden">
      {/* Kept a tiny scoped style ONLY for the custom keyframe animation with updated Emerald colors */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes border-pulse-emerald {
          0% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);
            border-color: rgba(16, 185, 129, 0.4);
          }
          50% {
            box-shadow: 0 0 20px 0 rgba(16, 185, 129, 0.1);
            border-color: rgba(16, 185, 129, 1);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);
            border-color: rgba(16, 185, 129, 0.4);
          }
        }
      `}} />

      <div className="max-w-[1400px] mx-auto px-5 relative z-10 items-center justify-center text-center">
        
        {/* --- Header --- */}
        <div className="max-w-[800px] mx-auto mb-[60px] text-center">
          {/* Subtitle removed. H2 stripped of specific font classes. */}
          <h2 className="text-[#10B981] mb-[24px] m-0">
            Architecting <span className="text-white">Scalable Systems</span>
          </h2>
          {/* Title body content preserved */}
          <p className="text-[1.1rem] text-white font-normal leading-[1.6] opacity-90 m-0">
            From reducing Time-to-Interactive (TTI) to ensuring strict type safety, we engineer robust front-end architectures that drive high-performance user experiences.
          </p>
        </div>

        {/* --- Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] text-left">

          {/* Card 1: Performance */}
          {/* Background colors removed, layout margins/paddings precisely preserved */}
          <article className="border border-white/10 rounded-[12px] p-[40px] flex flex-col transition-transform duration-300 hover:-translate-y-[5px] backdrop-blur-[10px] bg-transparent">
            <div className="flex justify-between items-start mb-[30px]">
              <div>
                <h3 className="text-white m-0 mb-[12px]">High-Performance Rendering</h3>
                <p className="text-[0.95rem] text-slate-300 leading-[1.5] m-0 max-w-[90%] font-normal">Optimize Core Web Vitals by implementing advanced rendering strategies. We ensure your application loads instantly and remains responsive.</p>
              </div>
              <div className="shrink-0 w-[50px] h-[50px] bg-[#10B981]/15 rounded-[8px] flex items-center justify-center ml-[15px]">
                <svg className="w-[28px] h-[28px] text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div className="w-full h-[1px] bg-white/10 mb-[25px]"></div>
            <div className="grid grid-cols-1 min-[500px]:grid-cols-2 gap-[15px]">
              <div className="flex items-center text-[0.9rem] text-white font-medium">
                <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full border border-[#10B981] text-[#10B981] text-[10px] mr-[10px] font-black">✓</span> Server-Side Rendering (SSR)
              </div>
              <div className="flex items-center text-[0.9rem] text-white font-medium">
                <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full border border-[#10B981] text-[#10B981] text-[10px] mr-[10px] font-black">✓</span> Static Site Gen (SSG)
              </div>
              <div className="flex items-center text-[0.9rem] text-white font-medium">
                <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full border border-[#10B981] text-[#10B981] text-[10px] mr-[10px] font-black">✓</span> Code Splitting & Lazy Loading
              </div>
              <div className="flex items-center text-[0.9rem] text-white font-medium">
                <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full border border-[#10B981] text-[#10B981] text-[10px] mr-[10px] font-black">✓</span> Edge Caching Strategies
              </div>
            </div>
          </article>

          {/* Card 2: Scalability (BLINKING BLOCK) */}
          <article 
            className="relative border border-white/10 rounded-[12px] p-[40px] flex flex-col transition-transform duration-300 hover:-translate-y-[5px] backdrop-blur-[10px] bg-transparent shadow-[0_0_0_0_rgba(16,185,129,0.7)]" 
            ref={blinkingCardRef}
          >
            <div className="flex justify-between items-start mb-[30px]">
              <div>
                <h3 className="text-white m-0 mb-[12px]">Scalable Component Logic</h3>
                <p className="text-[0.95rem] text-slate-300 leading-[1.5] m-0 max-w-[90%] font-normal">Deconstruct complex UIs into atomic, reusable components. We build design systems that maintain consistency as your app grows.</p>
              </div>
              <div className="shrink-0 w-[50px] h-[50px] bg-[#10B981]/15 rounded-[8px] flex items-center justify-center ml-[15px]">
                <svg className="w-[28px] h-[28px] text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
            </div>
            <div className="w-full h-[1px] bg-white/10 mb-[25px]"></div>
            <div className="grid grid-cols-1 min-[500px]:grid-cols-2 gap-[15px]">
              <div className="flex items-center text-[0.9rem] text-white font-medium">
                <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full border border-[#10B981] text-[#10B981] text-[10px] mr-[10px] font-black">✓</span> Atomic Design Methodology
              </div>
              <div className="flex items-center text-[0.9rem] text-white font-medium">
                <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full border border-[#10B981] text-[#10B981] text-[10px] mr-[10px] font-black">✓</span> Custom React Hooks
              </div>
              <div className="flex items-center text-[0.9rem] text-white font-medium">
                <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full border border-[#10B981] text-[#10B981] text-[10px] mr-[10px] font-black">✓</span> Global State (Redux/Zustand)
              </div>
              <div className="flex items-center text-[0.9rem] text-white font-medium">
                <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full border border-[#10B981] text-[#10B981] text-[10px] mr-[10px] font-black">✓</span> Strict TypeScript Interfaces
              </div>
            </div>
          </article>

          {/* Card 3: Modern Ecosystem */}
          <article className="border border-white/10 rounded-[12px] p-[40px] flex flex-col transition-transform duration-300 hover:-translate-y-[5px] backdrop-blur-[10px] bg-transparent">
            <div className="flex justify-between items-start mb-[30px]">
              <div>
                <h3 className="text-white m-0 mb-[12px]">Modern Build Ecosystems</h3>
                <p className="text-[0.95rem] text-slate-300 leading-[1.5] m-0 max-w-[90%] font-normal">Leverage the power of Next.js and Vite. We configure robust CI/CD pipelines to automate testing and deployment.</p>
              </div>
              <div className="shrink-0 w-[50px] h-[50px] bg-[#10B981]/15 rounded-[8px] flex items-center justify-center ml-[15px]">
                <svg className="w-[28px] h-[28px] text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>
            <div className="w-full h-[1px] bg-white/10 mb-[25px]"></div>
            <div className="grid grid-cols-1 min-[500px]:grid-cols-2 gap-[15px]">
              <div className="flex items-center text-[0.9rem] text-white font-medium">
                <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full border border-[#10B981] text-[#10B981] text-[10px] mr-[10px] font-black">✓</span> Next.js App Router
              </div>
              <div className="flex items-center text-[0.9rem] text-white font-medium">
                <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full border border-[#10B981] text-[#10B981] text-[10px] mr-[10px] font-black">✓</span> Turborepo Integration
              </div>
              <div className="flex items-center text-[0.9rem] text-white font-medium">
                <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full border border-[#10B981] text-[#10B981] text-[10px] mr-[10px] font-black">✓</span> Automated Unit Testing
              </div>
              <div className="flex items-center text-[0.9rem] text-white font-medium">
                <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full border border-[#10B981] text-[#10B981] text-[10px] mr-[10px] font-black">✓</span> End-to-End Testing
              </div>
            </div>
          </article>

          {/* Card 4: UX & Accessibility */}
          <article className="border border-white/10 rounded-[12px] p-[40px] flex flex-col transition-transform duration-300 hover:-translate-y-[5px] backdrop-blur-[10px] bg-transparent">
            <div className="flex justify-between items-start mb-[30px]">
              <div>
                <h3 className="text-white m-0 mb-[12px]">Interactive UX & Accessibility</h3>
                <p className="text-[0.95rem] text-slate-300 leading-[1.5] m-0 max-w-[90%] font-normal">Ensure your application is accessible to all users (a11y) while providing fluid, physics-based micro-interactions.</p>
              </div>
              <div className="shrink-0 w-[50px] h-[50px] bg-[#10B981]/15 rounded-[8px] flex items-center justify-center ml-[15px]">
                <svg className="w-[28px] h-[28px] text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
            <div className="w-full h-[1px] bg-white/10 mb-[25px]"></div>
            <div className="grid grid-cols-1 min-[500px]:grid-cols-2 gap-[15px]">
              <div className="flex items-center text-[0.9rem] text-white font-medium">
                <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full border border-[#10B981] text-[#10B981] text-[10px] mr-[10px] font-black">✓</span> WCAG 2.1 Compliance
              </div>
              <div className="flex items-center text-[0.9rem] text-white font-medium">
                <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full border border-[#10B981] text-[#10B981] text-[10px] mr-[10px] font-black">✓</span> Framer Motion Animations
              </div>
              <div className="flex items-center text-[0.9rem] text-white font-medium">
                <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full border border-[#10B981] text-[#10B981] text-[10px] mr-[10px] font-black">✓</span> Responsive Layouts
              </div>
              <div className="flex items-center text-[0.9rem] text-white font-medium">
                <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full border border-[#10B981] text-[#10B981] text-[10px] mr-[10px] font-black">✓</span> Keyboard Navigation
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}