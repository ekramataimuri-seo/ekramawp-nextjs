"use client";
import React, { useState } from "react";
import Image from "next/image"; // ADDED

const engineeringData = [
  {
    id: "architecture",
    label: "Component Architecture",
    heading: "Scalable Design Systems Modular & Reusable",
    description:
      "Modern interfaces require a component-driven approach. I build atomic design systems using React and Tailwind CSS that ensure consistency, reduce technical debt, and make your application easy to scale across multiple teams.",
    metric: "Efficiency:",
    metricText: "Reduces development time by 40% through reusable patterns.",
    img: "https://admin.wpfedev.com/wp-content/uploads/2026/02/WPsample2.webp",
  },
  {
    id: "performance",
    label: "Performance Engineering",
    heading: "Optimization Strategy 100/100 Vitals",
    description:
      "Speed is a feature. By leveraging Next.js Server Side Rendering (SSR) and Edge Caching, I ensure your application loads instantly. We optimize critical rendering paths to meet strict Core Web Vitals standards.",
    metric: "Impact:",
    metricText: "Faster load times correlate directly with higher user retention.",
    img: "https://admin.wpfedev.com/wp-content/uploads/2026/02/WPsample2.webp",
  },
  {
    id: "integration",
    label: "Headless Architecture",
    heading: "API-First Development Decoupled Data",
    description:
      "Don't let your CMS dictate your frontend. I specialize in Headless architectures where the backend manages content and Next.js delivers a premium user experience via GraphQL, giving you the best of both worlds.",
    metric: "Flexibility:",
    metricText: "Decoupled architectures offer 100% design freedom and better security.",
    img: "https://admin.wpfedev.com/wp-content/uploads/2026/02/WPsample2.webp",
  },
];

export const EngineeringSuccess = () => {
  const [activeTab, setActiveTab] = useState("architecture");

  // Safety check: ensure activeContent always exists
  const activeContent = engineeringData.find((d) => d.id === activeTab) || engineeringData[0];

  return (
    <section className="w-full pb-8 relative overflow-hidden">
  <div className="max-w-[1400px] mx-auto px-5 relative z-10 flex flex-col items-center justify-center text-center">
    <h2 className="text-[#10B981] font-black text-3xl md:text-5xl mb-4">
      Building the Future of <br className="hidden md:block" />
      <span className="relative inline-block px-2 z-10 text-[#FFFFFF] mt-2 md:mt-0">
        Digital Experiences.
      </span>
    </h2>
    <p className="max-w-2xl mx-auto text-gray-300 text-lg mb-20 mt-10">
      Expertly crafted interfaces meeting high-performance engineering. 
      I specialize in bridging the gap between complex backend logic 
      and fluid, user-centric frontends.
    </p>
  </div>

      <div className="max-w-[1500px] mx-auto px-5 flex flex-col lg:flex-row gap-[40px] lg:gap-[60px] items-start relative z-10">
        
        <div className="w-full lg:flex-[0_0_280px] flex flex-col">
          
          <div className="flex flex-col gap-2">
            {engineeringData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  p-[18px_20px] text-left text-[16px] font-bold border-l-4 transition-all duration-300 rounded-r-lg
                  ${
                    activeTab === tab.id
                      ? "text-[#10B981] border-[#10B981] bg-white/10"
                      : "text-[#94a3b8] border-transparent hover:text-white hover:bg-white/5"
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

{/* Content Display Area */}
<div className="flex-1 w-full min-h-[400px]">
  <div key={activeTab} className="animate-fade-in-up flex flex-col md:flex-row gap-[40px] items-start">
    
    {/* Text Content Area */}
<div className="flex-1">
  
  {/* Heading Block: Matches your uploaded image layout */}
  <div className="flex items-center gap-4 mb-8 text-emerald-500">
    
    {/* Icon Container with soft circular background */}
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 flex-shrink-0">
      <svg 
        className="w-6 h-6" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </div>
    
    {/* Heading Text */}
    <div className="text-xl font-bold">
      {activeContent.heading}{" "}
      
    </div>

  </div>
  
  {/* Body Content */}
  <p className="leading-[1.7] mb-5 opacity-90">
    {activeContent.description}
  </p>
  
  <p className="leading-[1.7] opacity-90">
    <span className="font-semibold">{activeContent.metric}</span>{" "}
    {activeContent.metricText}
  </p>

</div>

    {/* Image Wrapper - Preserved positioning */}
    <div className="w-full md:w-[350px] flex-shrink-0 md:mt-12">
      <div className="relative w-full h-[250px] rounded-[20px] overflow-hidden shadow-2xl border border-white/10">
        <Image
          src={activeContent.img}
          alt={activeContent.heading}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 350px"
        />
      </div>
    </div>

  </div>
</div>
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};