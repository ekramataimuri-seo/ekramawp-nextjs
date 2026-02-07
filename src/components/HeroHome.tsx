"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

// 2. Define the Content for each page
const HERO_DATA: Record<string, any> = {
  "/": {
    badge: "Front-End Engineering",
    titleStart: "Architecting High-Performance",
    highlight: "Digital Interfaces",
    subTitle: "Next.js • Headless • System Architecture",
    desc: "Specializing in pixel-perfect Front End Engineering. Whether it's a scalable Design System, a blazing fast Next.js headless build, or a complex web application, I architect interfaces that drive engagement.",
    image: "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp",
    nodes: [
      { title: "System Design", sub: "Atomic Components", top: "15%", right: "40%" },
      { title: "Headless", sub: "Decoupled Data", top: "35%", right: "65%" },
      { title: "Vitals", sub: "100/100 Score", top: "58%", right: "45%" },
      { title: "React", sub: "Server Components", top: "78%", right: "60%" },
    ]
  },
  "/front-end-technologies": {
    badge: "Modern Tech Stack",
    titleStart: "The Tools That Power",
    highlight: "Modern Webs",
    subTitle: "React • Tailwind • TypeScript • GraphQL",
    desc: "I don't just write code; I architect solutions using the bleeding-edge stack. From server-side rendering with Next.js to type-safe logic with TypeScript, my stack ensures scalability and maintainability.",
    image: "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp", 
    nodes: [
      { title: "React 19", sub: "Server Actions", top: "15%", right: "40%" },
      { title: "Tailwind", sub: "Utility First", top: "35%", right: "65%" },
      { title: "TypeScript", sub: "Strict Typing", top: "58%", right: "45%" },
      { title: "CI/CD", sub: "Automated Build", top: "78%", right: "60%" },
    ]
  }
};

export const HeroHome = () => {
  const pathname = usePathname() || "/";
  
  // Normalize path
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  const content = HERO_DATA[normalizedPath] || HERO_DATA["/"];

  return (
    <section className="relative w-full min-h-[650px] lg:h-[90vh] overflow-hidden flex items-center">
      <div className="container mx-auto px-5 lg:px-0 flex flex-col lg:flex-row h-full relative max-w-[1400px] z-10">
        
        {/* --- TEXT ZONE --- */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center z-10 lg:pl-[8%] mb-12 lg:mb-0 text-center lg:text-left pt-10 lg:pt-0">
          <span className="text-[#FFFFFF] uppercase tracking-[3px] font-bold text-sm mb-3 block">
            {content.badge}
          </span>
          
          <h1 className="text-[#3F5CE0] text-4xl lg:text-[3.5rem] font-black leading-[1.1] mb-5 tracking-tight">
            {content.titleStart} <br className="hidden lg:block" />
            <span className="relative inline-block px-1 z-10 text-[#FFFFFF]">
              {content.highlight}
              <span className="absolute left-0 right-0 bottom-[6px] h-[12px] bg-[#2E476E] -z-20 -skew-x-12 rounded-sm"></span>
              <span className="absolute left-0 right-0 bottom-[10px] h-[12px] bg-[#3C66A6] -z-10 -skew-x-12 rounded-sm shadow-[0_2px_0_rgba(255,255,255,0.1)]"></span>
            </span>
          </h1>

          <h2 className="text-[#3F5CE0] text-lg font-black mb-4 uppercase tracking-wide">
            <span className="text-[#FFFFFF]">{content.subTitle}</span>
          </h2>

          <p className="text-[#FFFFFF] text-[1.1rem] font-normal leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
            {content.desc}
          </p>

          <form className="bg-[#1a2436] p-2 rounded-xl flex shadow-2xl border border-white/10 w-full max-w-[450px] mx-auto lg:mx-0">
            <input 
              placeholder="Your website URL..." 
              type="url" 
              className="flex-1 bg-transparent border-none p-3 outline-none text-white placeholder:text-gray-500"
              required 
            />
            <button type="submit" className="bg-[#3F5CE0] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#344dbd] transition-colors shadow-lg shadow-[#3F5CE0]/20">
              Get Proposal
            </button>
          </form>
        </div>

        {/* --- VISUAL ZONE --- */}
        <div className="w-full lg:w-[55%] relative flex justify-center lg:justify-end items-end h-[400px] lg:h-full">
          
          {/* Safety Check on nodes mapping using Optional Chaining */}
          <div className="absolute inset-0 z-20 pointer-events-none hidden lg:block">
            {content.nodes?.map((node: any, index: number) => (
               <div 
                 key={index}
                 className="absolute bg-[#1a2436] p-3 rounded-xl border border-white/10 shadow-2xl w-[150px] backdrop-blur-sm"
                 style={{ top: node.top, right: node.right }} 
               >
                 <strong className="block text-[#FFFFFF] text-sm font-bold">{node.title}</strong>
                 <small className="text-[#3F5CE0] text-[10px] font-bold uppercase tracking-wider">{node.sub}</small>
               </div>
            ))}
          </div>

          {/* Main Image - Corrected to Next/Image */}
          <div className="relative z-10 w-[80%] h-[90%] flex items-end justify-end">
             <div className="relative w-full h-full">
                <Image 
                  src={content.image} 
                  alt="Front End Engineer" 
                  fill
                  priority // Critical for LCP/Hero performance
                  className="object-contain drop-shadow-2xl opacity-90 hover:opacity-100 transition-opacity duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};