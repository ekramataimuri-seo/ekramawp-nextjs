"use client";
import React, { useState } from "react";

// --- CONTENT DATA (Front End Engineering Focus) ---
const engineeringData = [
  {
    id: "architecture",
    label: "Component Architecture",
    heading: "Scalable Design Systems",
    highlight: "Modular & Reusable",
    description:
      "Modern interfaces require a component-driven approach. I build atomic design systems using React and Tailwind CSS that ensure consistency, reduce technical debt, and make your application easy to scale across multiple teams.",
    metric: "Efficiency:",
    metricText: "Reduces development time by 40% through reusable patterns.",
    img: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "performance",
    label: "Performance Engineering",
    heading: "Optimization Strategy",
    highlight: "100/100 Vitals",
    description:
      "Speed is a feature. By leveraging Next.js Server Side Rendering (SSR) and Edge Caching, I ensure your application loads instantly. We optimize critical rendering paths to meet strict Core Web Vitals standards.",
    metric: "Impact:",
    metricText: "Faster load times correlate directly with higher user retention.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "integration",
    label: "Headless Architecture",
    heading: "API-First Development",
    highlight: "Decoupled Data",
    description:
      "Don't let your CMS dictate your frontend. I specialize in Headless architectures where the backend manages content and Next.js delivers a premium user experience via GraphQL, giving you the best of both worlds.",
    metric: "Flexibility:",
    metricText: "Decoupled architectures offer 100% design freedom and better security.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop",
  },
];

export const EngineeringSuccess = () => {
  const [activeTab, setActiveTab] = useState("architecture");

  // Helper to find active content
  const activeContent = engineeringData.find((d) => d.id === activeTab) || engineeringData[0];

  return (
    <section 
      className="w-full pt-[80px] pb-[80px] relative overflow-hidden"
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
      {/* --- HEADING AREA --- */}
      <div className="max-w-[1000px] mx-auto px-5 text-center mb-[60px] relative z-10">
        {/* Subtitle: Pure White */}
        <span className="block text-[#FFFFFF] font-bold text-[0.85rem] uppercase tracking-[2px] mb-[15px]">
          Engineering Excellence
        </span>
        
        {/* H2: Blue Base, White Highlight, Double Scratch */}
        <h2 className="text-[#3F5CE0] font-black text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.1] tracking-tight">
          Building the Future of <br className="hidden md:block" />
          <span className="relative inline-block px-2 z-10 text-[#FFFFFF] mt-2 md:mt-0">
            Digital Experiences.
            {/* Double Scratch Layer 1 (Darker Blue - #2E476E) */}
            <span className="absolute left-0 right-0 bottom-[4px] h-[10px] bg-[#2E476E] -z-20 skew-x-[-12deg] rounded-sm"></span>
            {/* Double Scratch Layer 2 (Lighter Blue - #3C66A6) */}
            <span className="absolute left-0 right-0 bottom-[8px] h-[10px] bg-[#3C66A6] -z-10 skew-x-[-12deg] rounded-sm shadow-[0_1px_0_rgba(255,255,255,0.1)]"></span>
          </span>
        </h2>
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="max-w-[1500px] mx-auto px-5 flex flex-col lg:flex-row gap-[40px] lg:gap-[60px] items-start relative z-10">
        
        {/* SIDEBAR TABS */}
        <div className="w-full lg:flex-[0_0_280px] flex flex-col">
          <div className="text-[13px] uppercase tracking-[1px] text-[#94a3b8] font-extrabold mb-3 pl-5">
            Core Competencies
          </div>
          <div className="flex flex-col gap-2">
            {engineeringData.map((tab) => (
              <button
                key={tab.id}
                onMouseEnter={() => setActiveTab(tab.id)}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  p-[18px_20px] text-left text-[16px] font-bold border-l-4 transition-all duration-300 rounded-r-lg
                  ${
                    activeTab === tab.id
                      ? "text-[#3F5CE0] border-[#3F5CE0] bg-white/10"
                      : "text-[#94a3b8] border-transparent hover:text-white hover:bg-white/5"
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="flex-1 w-full min-h-[400px]">
          {/* Key forces re-render animation */}
          <div key={activeTab} className="animate-fade-in-up flex flex-col md:flex-row gap-[40px] items-start">
            
            {/* TEXT COLUMN */}
            <div className="flex-1">
              {/* H3: Base Blue, Highlight White */}
              <h3 className="text-[#3F5CE0] font-black text-[clamp(1.0rem,1vw,1.2rem)] mb-[18px] tracking-tight uppercase">
                {activeContent.heading}{" "}
                <span className="text-[#FFFFFF]">{activeContent.highlight}</span>
              </h3>
              
              {/* Paragraphs: Pure White */}
              <p className="text-[#FFFFFF] text-[1.1rem] font-normal leading-[1.7] mb-5">
                {activeContent.description}
              </p>
              
              <p className="text-[#FFFFFF] text-[1.1rem] font-normal leading-[1.7]">
                <strong className="text-[#FFFFFF] font-black">{activeContent.metric}</strong>{" "}
                {activeContent.metricText}
              </p>
            </div>

            {/* IMAGE COLUMN */}
            <div className="w-full md:w-[350px] flex-shrink-0">
              <div className="relative w-full h-[250px] rounded-[20px] overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={activeContent.img}
                  alt={activeContent.heading}
                  className="w-full h-full object-cover block"
                />
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};