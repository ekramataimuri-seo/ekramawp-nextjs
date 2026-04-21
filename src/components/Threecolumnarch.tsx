"use client";
import React from 'react';

export const Threecolumnarch = () => {
  const phases = [
    {
      title: "PHASE 01: FOUNDATION",
      subtitle: "Scalable Architecture",
      price: "CLEAN",
      priceUnit: " CODE",
      icon: "https://admin.wpfedev.com/wp-content/uploads/2026/03/icons8-data-pipeline-64.png", 
      bodyTitle: "Component-Driven Design",
      description: "We establish a robust foundation using Atomic Design principles. By breaking interfaces into reusable components, we ensure consistency and maintainability across the application lifecycle.",
      list: [
        "Strict TypeScript Typing",
        "Isolated Component Labs",
        "Design Token Integration"
      ]
    },
    {
      title: "PHASE 02: PERFORMANCE",
      subtitle: "Core Web Vitals Engineering",
      price: "FAST",
      priceUnit: " RENDER",
      icon: "https://admin.wpfedev.com/wp-content/uploads/2026/03/icons8-performance-50.png",
      bodyTitle: "Optimization Pipeline",
      description: "Performance is engineered, not patched. We implement advanced loading strategies to minimize Total Blocking Time and ensure rapid First Contentful Paint for superior UX.",
      list: [
        "SSR & Static Generation",
        "Route-based Code Splitting",
        "Advanced Image Optimization"
      ]
    },
    {
      title: "PHASE 03: ORCHESTRATION",
      subtitle: "State & Data Flow",
      price: "SMART",
      priceUnit: " STATE",
      icon: "https://admin.wpfedev.com/wp-content/uploads/2026/03/icons8-foundation-60.png",
      bodyTitle: "Managing Complexity",
      description: "We decouple UI state from server-cache data. Using modern tools alongside context-based global state ensures predictable data flow and seamless user interactivity.",
      list: [
        "Server State Synchronization",
        "Optimistic UI Updates",
        "Complex Form Management"
      ]
    }
  ];

  return (
    <section className="w-full pt-2 pb-16 relative overflow-hidden flex justify-center">
      <div className="max-w-[1400px] mx-auto px-5 relative z-10 flex flex-col items-center justify-center text-center w-full">
        
        {/* --- INTRO SECTION --- */}
        <div className="text-center mb-[100px] max-w-[800px] mx-auto">
          <h2 className="text-[#10B981] mb-[25px] m-0">
            Engineering for <span className="text-white">Maximum Performance</span>
          </h2>
          <p className="text-white text-[1.1rem] leading-[1.7] max-w-2xl mx-auto m-0 opacity-90">
            Modern interfaces require more than just aesthetics. They demand rigorous engineering. 
            We build high-fidelity, scalable frontend architectures that drive user engagement through speed and reliability.
          </p>
        </div>

        {/* --- PRICING/PHASE TABLE --- */}
        <div className="flex flex-col min-[1100px]:flex-row rounded-[24px] min-[1100px]:shadow-[0_30px_60px_rgba(0,0,0,0.5)] min-[1100px]:min-h-[850px] w-full max-w-[1100px] mx-auto">
          {phases.map((phase, index) => (
            <div 
              className="relative flex-1 flex flex-col mb-[60px] min-[1100px]:mb-0 shadow-[0_30px_60px_rgba(0,0,0,0.5)] min-[1100px]:shadow-none rounded-[24px] min-[1100px]:rounded-none min-[1100px]:first:rounded-l-[24px] min-[1100px]:last:rounded-r-[24px]" 
              key={index}
            >
              
              {/* Sibling Icon - Floats seamlessly in the notch. Filter removed to keep original green color. */}
              <div className="absolute -top-[40px] left-1/2 -translate-x-1/2 w-[80px] h-[80px] z-20 flex items-center justify-center">
                <img 
                  src={phase.icon} 
                  alt={phase.title} 
                  className="max-w-[48px] max-h-[48px] object-contain block" 
                />
              </div>

              {/* Masked Card Wrapper - The radial-gradient mask dynamically cuts a 48px semi-circle from the top center */}
              <div 
                className="flex-1 flex flex-col border border-white/10 min-[1100px]:border-r-0 min-[1100px]:last:border-r rounded-[24px] min-[1100px]:rounded-none min-[1100px]:first:rounded-l-[24px] min-[1100px]:last:rounded-r-[24px]"
                style={{ 
                  WebkitMaskImage: 'radial-gradient(circle at 50% 0, transparent 48px, black 49px)',
                  maskImage: 'radial-gradient(circle at 50% 0, transparent 48px, black 49px)'
                }}
              >
                {/* HEAD - Emerald Green */}
                <div className="bg-[#10B981] pt-[80px] px-[30px] pb-[30px] text-center rounded-t-[24px] min-[1100px]:rounded-t-none min-[1100px]:first:rounded-tl-[24px] min-[1100px]:last:rounded-tr-[24px]">
                  <h3 className="text-white mt-[10px] uppercase m-0">{phase.title}</h3>
                  <p className="text-white/90 text-[0.9rem] font-bold my-[8px]">{phase.subtitle}</p>
                  <p className="text-white text-[2.5rem] font-black mt-[10px] mb-0">
                    {phase.price} <span className="text-[1.1rem] text-white/80 font-normal">{phase.priceUnit}</span>
                  </p>
                </div>
                
                {/* BODY */}
                <div className="p-[50px_40px] grow text-left rounded-b-[24px] min-[1100px]:rounded-b-none min-[1100px]:first:rounded-bl-[24px] min-[1100px]:last:rounded-br-[24px]">
                  <h4 className="text-white uppercase mb-[25px] m-0">{phase.bodyTitle}</h4>
                  <p className="text-white text-[1.1rem] leading-[1.6] mb-[20px] font-normal">{phase.description}</p>
                  
                  <ul className="list-none p-0 mt-auto">
                    {phase.list.map((item, i) => (
                      <li 
                        key={i} 
                        className="relative pl-[35px] mb-[18px] text-[1.05rem] text-white leading-[1.5] before:content-['✓'] before:absolute before:left-0 before:text-[#10B981] before:font-black before:text-[1.2rem]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- FOOTER CTA --- */}
        <div className="text-center mt-[60px]">
          <a 
            href="#" 
            className="bg-[#10B981] text-white font-black py-[20px] px-[60px] rounded-[8px] inline-block transition-all duration-300 text-[1.1rem] no-underline hover:-translate-y-[5px] hover:bg-[#059669] hover:shadow-[0_15px_30px_rgba(16,185,129,0.4)]"
          >
            Audit My Interface Architecture
          </a>
        </div>
        
      </div>
    </section>
  );
};