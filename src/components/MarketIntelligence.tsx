"use client";
import React, { useState } from "react";

// --- DATA: Content for each Hotspot (Front End Engineering Focus) ---
const INTELLIGENCE_DATA = {
  1: {
    title: (
      <>
        Performance is the <span className="relative inline-block text-[#3F5CE0] px-1 z-10">New Standard</span>
      </>
    ),
    desc: "Google's Core Web Vitals are now a critical success metric. React apps that score 100/100 on LightHouse rank higher and convert better. I build high-performance frontends that users love."
  },
  2: {
    title: (
      <>
        Headless CMS <span className="relative inline-block text-[#3F5CE0] px-1 z-10">Scalability</span>
      </>
    ),
    desc: "Traditional monoliths crash under high traffic. Decoupled architectures (Next.js + WordPress) allow you to handle global traffic spikes without server downtime or security risks."
  },
  3: {
    title: (
      <>
        User Experience <span className="relative inline-block text-[#3F5CE0] px-1 z-10">= Revenue</span>
      </>
    ),
    desc: "Every 100ms of latency costs 1% in sales. My front-end code is optimized for 'Instant Load' via Edge Caching, reducing bounce rates and directly increasing conversions."
  },
  4: {
    title: (
      <>
        Global <span className="relative inline-block text-[#3F5CE0] px-1 z-10">Accessibility</span>
      </>
    ),
    desc: "Modern web apps must work on all devices. I implement strict WCAG accessibility standards, ensuring your application reaches the widest possible audience and avoids legal liabilities."
  }
};

export const MarketIntelligence = () => {
  const [activeId, setActiveId] = useState<1 | 2 | 3 | 4>(2); // Default to #2
  const [isFading, setIsFading] = useState(false);
  const [displayData, setDisplayData] = useState(INTELLIGENCE_DATA[2]);

  // Handle Hotspot Click
  const handleHotspotClick = (id: 1 | 2 | 3 | 4) => {
    if (id === activeId) return;

    // Trigger Fade Out
    setIsFading(true);

    // Swap Content after fade-out completes (200ms)
    setTimeout(() => {
      setActiveId(id);
      setDisplayData(INTELLIGENCE_DATA[id]);
      setIsFading(false); // Trigger Fade In
    }, 200);
  };

  return (
    <div 
      className="w-full py-[80px] px-5 flex flex-col items-center relative overflow-hidden"
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
      
      {/* --- HEADER --- */}
      <div className="text-center max-w-[900px] mb-[60px] relative z-10">
        {/* Subtitle: Pure White */}
        <span className="block text-[#FFFFFF] font-bold text-[0.85rem] uppercase tracking-[2px] mb-[15px]">
          Global Architecture Standards
        </span>
        
        {/* H2: Cobalt Base, White Highlight, Double Scratch */}
        <h2 className="text-[clamp(2.2rem,4.5vw,3.2rem)] font-black text-[#3F5CE0] leading-[1.1] tracking-tight m-0">
          Engineering Insights for{" "}
          <span className="relative inline-block text-[#FFFFFF] px-1 z-10">
            Strategic Growth
            {/* Double Scratch Layer 1 (Darker Blue) */}
            <span className="absolute left-0 right-0 bottom-[6px] h-[12px] bg-[#2E476E] -z-20 skew-x-[-10deg] rounded-sm"></span>
            {/* Double Scratch Layer 2 (Lighter Blue) */}
            <span className="absolute left-0 right-0 bottom-[10px] h-[12px] bg-[#3C66A6] -z-10 skew-x-[-10deg] rounded-sm shadow-[0_2px_0_rgba(255,255,255,0.1)]"></span>
          </span>
        </h2>
      </div>

      {/* --- WIDGET AREA --- */}
      <div className="flex flex-col lg:flex-row w-full max-w-[1100px] items-center justify-center gap-[5%] mb-[40px] relative z-10">
        
        {/* 1. LAPTOP VISUALIZER */}
        <div className="relative flex-[1.2] max-w-[600px] min-w-[300px] flex flex-col items-center w-full mb-[30px] lg:mb-0">
          
          {/* Screen Frame - Darkened for theme */}
          <div className="relative w-full border-[8px] border-[#2c2e31] border-b-0 rounded-t-xl bg-black overflow-hidden z-[2] shadow-2xl">
            <img
              src="https://www.webfx.com/wp-content/uploads/2025/10/ai-seo-results-768x536.png"
              alt="Performance Dashboard"
              className="w-full h-auto block opacity-90"
            />
          </div>
          
          {/* Device Base */}
          <div className="w-[104%] h-[12px] bg-[#3c4043] rounded-b-xl shadow-xl relative z-[2]"></div>

          {/* HOTSPOTS */}
          {[
             { id: 1, pos: "top-[15%] -right-[5%] lg:-right-[5%] right-0" }, 
             { id: 2, pos: "top-[40%] -left-[5%] lg:-left-[5%] left-0" },   
             { id: 3, pos: "bottom-[20%] -right-[5%] lg:-right-[5%] right-0" }, 
             { id: 4, pos: "bottom-[20%] -left-[5%] lg:-left-[5%] left-0" }   
          ].map((spot) => (
            <button
              key={spot.id}
              onClick={() => handleHotspotClick(spot.id as 1 | 2 | 3 | 4)}
              className={`
                absolute w-[44px] h-[44px] bg-[#3F5CE0] border-[3px] border-[#0E1623] rounded-full 
                text-white text-[28px] flex items-center justify-center z-10 cursor-pointer 
                transition-all duration-300 pb-1 shadow-lg shadow-[#3F5CE0]/40
                ${spot.pos}
                ${activeId === spot.id 
                  ? "scale-115 bg-[#344dbd] shadow-[0_0_0_4px_rgba(63,92,224,0.4)]" 
                  : "hover:scale-110"
                }
              `}
              aria-label={`View Insight ${spot.id}`}
            >
              +
              {/* Pulse Animation Ring */}
              <span className="absolute -inset-1 rounded-full border-[2px] border-[#3F5CE0] animate-ping opacity-75"></span>
            </button>
          ))}
        </div>

        {/* 2. DYNAMIC CONTENT BOX */}
        {/* Dark Box with White Text */}
        <div className="flex-1 w-full bg-[#1a2436] border border-white/10 p-[40px] rounded-2xl min-h-[280px] flex flex-col justify-center relative z-[1] shadow-2xl">
          
          <div 
            className={`transition-all duration-300 transform ${
              isFading ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"
            }`}
          >
            {/* Title: White Base with Blue Highlight */}
            <h2 className="text-[1.8rem] font-black text-[#FFFFFF] mb-[15px] leading-[1.25] tracking-tight">
              {displayData.title}
            </h2>
            {/* Paragraph: Pure White */}
            <p className="text-[1.1rem] leading-[1.6] text-[#FFFFFF]">
              {displayData.desc}
            </p>
          </div>

        </div>
      </div>

      {/* --- CTA BUTTON --- */}
      <div className="relative z-10">
        <a href="#contact" className="bg-[#3F5CE0] text-white py-[16px] px-[40px] text-[18px] font-extrabold rounded-lg hover:-translate-y-[2px] transition-transform uppercase tracking-wide no-underline shadow-lg shadow-[#3F5CE0]/30">
          Audit My Architecture →
        </a>
      </div>

    </div>
  );
};