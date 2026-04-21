"use client";
import React, { useState } from "react";
import Image from "next/image";

const approachData = {
  performance: {
    id: "performance",
    label: "Peak Performance",
    title: "Velocity & Optimization",
    desc: "Speed isn't just a metric; it's a feature. We engineer applications that load instantly by leveraging Server-Side Rendering (SSR), Edge Caching, and code-splitting strategies to keep users engaged.",
    list: [
      "Core Web Vitals Optimization",
      "Zero-Bundle-Size Architectures",
      "Next.js / React Server Components",
    ],
    img: "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp",
  },
  scalability: {
    id: "scalability",
    label: "Scalable Systems",
    title: "Modular Architecture",
    desc: "We don't just write code; we build systems. By using atomic design principles and strict TypeScript typing, we create maintainable codebases that scale effortlessly as your product grows.",
    list: [
      "Atomic Component Design",
      "Strict TypeScript Typing",
      "CI/CD Automated Pipelines",
    ],
    img: "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp",
  },
  ux: {
    id: "ux",
    label: "Accessible UX",
    title: "Inclusive Design",
    desc: "Great engineering is invisible. We prioritize semantic HTML and WCAG compliance to ensure your application delivers a seamless, accessible experience for every user, on every device.",
    list: [
      "WCAG 2.1 AA Compliance",
      "Semantic HTML Structure",
      "Adaptive Responsive Layouts",
    ],
    img: "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp",
  },
};

export const EngineeringApproach = () => {
  const [activeTab, setActiveTab] = useState("performance");
  
  // FIXED: Added proper line breaks and safety check
  const activeContent = approachData[activeTab as keyof typeof approachData] || approachData.performance;

  return (
    <section className="w-full pb-16 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 box-border relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center max-w-[900px] mx-auto mb-[10px]">
  
  {/* The H2 Heading */}
  <h2 className="text-[#10B981] font-black mb-3"> {/* Added mb-6 for space below the heading */}
    How We Engineer <br className="hidden md:block" />
    <span className="relative inline-block px-2 z-10 text-[#FFFFFF]">
      Digital Results
    </span>
  </h2>
  
  {/* The Paragraph (Moved outside the H2) */}
  <p className="text-[#FFFFFF] opacity-80 mt-6 text-base md:text-lg font-normal">
    It uses authoritative sources of system data and models to create a "digital thread," connecting data to applications in an efficient, repeatable, and auditable manner.
  </p>

</div>

        {/* --- TAB NAVIGATION --- */}
        <div className="flex justify-center gap-[10px] mb-[40px] flex-wrap">
          {Object.values(approachData).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
className={`
  px-[40px] py-[15px] font-bold rounded-[12px] transition-all duration-300 outline-none bg-[#10B981]
  ${
    activeTab === tab.id
      ? "text-white shadow-md" 
      : "text-white/70 hover:text-white"
  }
`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* --- MAIN HERO CARD --- */}
<div className="bg-gradient-to-br from-[#10B981]/15 to-[#10B981]/20 backdrop-blur-md border border-white/10 rounded-[24px] p-[40px_20px] md:p-[50px] flex flex-col lg:flex-row gap-[50px] items-center min-h-[480px] text-center lg:text-left transition-all duration-300 shadow-2xl relative overflow-hidden">          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

          <div className="flex-[1.2] w-full relative z-10">
            <h3 key={activeContent.title + "-title"} className="animate-fade-in-right text-[#FFFFFF] font-black ">
              {activeContent.title}
            </h3>

            <p key={activeContent.desc} className="animate-fade-in-right text-[#FFFFFF] ">
              {activeContent.desc}
            </p>

            <ul key={activeContent.title + "-list"} className="animate-fade-in-right list-none p-0 m-0 flex flex-col items-center lg:items-start">
              {activeContent.list.map((item, index) => (
                <li key={index} className="mb-[12px] font-bold text-[#FFFFFF] flex items-center gap-[10px]">
                  <span className="text-[#3F5CE0] font-black">→</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 max-w-[400px] w-full order-first lg:order-last relative z-10">
            <div className="relative w-full h-[300px] lg:h-[400px] overflow-hidden ">
               <Image
                key={activeContent.img}
                src={activeContent.img}
                alt={activeContent.title}
                fill
                className="object-cover animate-fade-in-right opacity-90 hover:opacity-100 transition-opacity duration-300"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-right {
          animation: fadeInRight 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};