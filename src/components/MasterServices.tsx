"use client";
import React, { useState } from "react";

// --- DATA ---
const SERVICES_DATA = [
  {
    id: "react-arch",
    title: "React Architecture",
    desc: "I don't just write code; I build scalable systems. Using React's component-based architecture, I create modular, maintainable, and reusable UI libraries.",
    bullets: ["Atomic Design.", "Custom Hooks.", "TypeScript."],
    // Using your specific URL
    img: "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp", 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
    )
  },
  {
    id: "next-perf",
    title: "Next.js Performance",
    desc: "Speed is a feature. I leverage Next.js Server Side Rendering (SSR) to deliver HTML instantly.",
    bullets: ["Zero-layout shift.", "Edge Caching.", "Image optimization."],
    img: "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
    )
  },
  {
    id: "headless-wp",
    title: "Headless WordPress",
    desc: "The easy editing experience of WordPress combined with the speed of React.",
    bullets: ["Decoupled CMS.", "Secure API.", "Instant updates."],
    img: "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2" y2="20"></line></svg>
    )
  },
  {
    id: "ui-ux",
    title: "UI/UX Engineering",
    desc: "Pixel-perfect code focused on micro-interactions and smooth animations.",
    bullets: ["Framer Motion.", "Responsive layouts.", "Accessibility."],
    img: "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
    )
  },
  {
    id: "sys-arch",
    title: "System Architecture",
    desc: "Robust infrastructure with strict testing and automated pipelines.",
    bullets: ["End-to-End testing.", "Strict TypeScript.", "CI/CD Pipelines."],
    img: "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
    )
  }
];

export const MasterServices = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative w-full py-[100px] px-5 box-border overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-[50px]">
          <h2 className="text-4xl font-black text-[#3F5CE0] mb-5">
            Mastering <span className="text-white">Modern Web</span>
          </h2>
          <p className="text-white text-lg">End-to-End Engineering Solutions.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-5">
          
          {/* TABS */}
          <div className="flex flex-row lg:flex-col gap-3 w-full lg:w-[280px]">
            {SERVICES_DATA.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all text-left ${activeTab === index ? "bg-[#3F5CE0] text-white" : "text-white hover:bg-white/10"}`}
              >
                <div className="w-8 h-8">{service.icon}</div>
                <span className="font-bold">{service.title}</span>
              </button>
            ))}
          </div>

          {/* CONTENT */}
          <div className="w-full lg:w-[700px] min-h-[500px] relative">
            {SERVICES_DATA.map((service, index) => (
              <div
                key={service.id}
                className={`absolute top-0 left-0 w-full transition-opacity duration-500 ${activeTab === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
              >
                <div className="bg-[#155db5] rounded-3xl p-10 lg:pl-[200px] relative min-h-[420px] mt-[60px] lg:mt-0">
                  
                  {/* IMAGE - USING STANDARD IMG TAG TO PREVENT CRASHES */}
                  <div className="absolute left-0 lg:-left-[50px] top-0 lg:top-1/2 lg:-translate-y-1/2 w-[300px] h-[200px] bg-white rounded-2xl p-2 shadow-2xl z-20">
                     <img 
                        src={service.img} 
                        alt={service.title} 
                        className="w-full h-full object-cover rounded-xl"
                     />
                  </div>

                  <div className="text-white relative z-10 pl-4">
                    <h3 className="text-2xl font-black mb-4">{service.title}</h3>
                    <p className="mb-4 opacity-90">{service.desc}</p>
                    <ul className="list-disc pl-5 space-y-2">
                      {service.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};