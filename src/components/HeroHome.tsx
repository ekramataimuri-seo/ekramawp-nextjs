"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Added minimalist SVG icons to each node
const HERO_DATA: Record<string, any> = {
  "/": {
    titleStart: "Architecting High-Performance",
    highlight: "Digital Interfaces",
    desc: "Specializing in pixel-perfect Front End Engineering. Whether it's a scalable Design System, a blazing fast Next.js headless build, or a complex web application, I architect interfaces that drive engagement.",
    image: "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp",
    nodes: [
      { 
        title: "System Design", 
        nodeDesc: "Crafting scalable, atomic component architectures.",
        icon: (classes: string) => <svg className={classes} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
      },
      { 
        title: "Headless CMS", 
        nodeDesc: "Decoupling front-ends for omnichannel delivery.",
        icon: (classes: string) => <svg className={classes} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
      },
      { 
        title: "Web Vitals", 
        nodeDesc: "Optimizing LCP and CLS for flawless experiences.",
        icon: (classes: string) => <svg className={classes} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
      },
      { 
        title: "React Native", 
        nodeDesc: "Leveraging universal code for cross-platform apps.",
        icon: (classes: string) => <svg className={classes} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
      },
    ]
  },
  "/front-end-technologies": {
    titleStart: "The Tools That Power",
    highlight: "Modern Webs",
    desc: "I don't just write code; I architect solutions using the bleeding-edge stack. From server-side rendering with Next.js to type-safe logic with TypeScript, my stack ensures scalability and maintainability.",
    image: "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp", 
    nodes: [
      { 
        title: "React 19", 
        nodeDesc: "Server Components for zero-bundle-size speed.",
        icon: (classes: string) => <svg className={classes} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="3"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(45 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-45 12 12)"/></svg>
      },
      { 
        title: "Tailwind CSS", 
        nodeDesc: "Utility-first styling for rapid, consistent UI.",
        icon: (classes: string) => <svg className={classes} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/></svg>
      },
      { 
        title: "TypeScript", 
        nodeDesc: "Strict typing for enterprise-grade reliability.",
        icon: (classes: string) => <svg className={classes} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
      },
      { 
        title: "Automated CI/CD", 
        nodeDesc: "Streamlined pipelines for zero-downtime deploys.",
        icon: (classes: string) => <svg className={classes} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><polyline points="3 3 3 8 8 8"/></svg>
      },
    ]
  }
};

export const HeroHome = () => {
  const pathname = usePathname() || "/";
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  const content = HERO_DATA[normalizedPath] || HERO_DATA["/"];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered || !content.nodes) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % content.nodes.length);
    }, 3000); 
    
    return () => clearInterval(interval);
  }, [isHovered, content.nodes]);

  return (
    /* BOOM: Changed pt-28 to pt-40 to aggressively push it down on mobile */
<section className="relative w-full flex items-center overflow-hidden min-h-[5vh] pt-[42px] lg:pt-0 pb-20 lg:pb-0 px-5">      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes engine-spin { 100% { transform: rotate(360deg); } }
        @keyframes engine-reverse { 100% { transform: rotate(-360deg); } }
        .spin-slow { animation: engine-spin 20s linear infinite; }
        .spin-reverse { animation: engine-reverse 15s linear infinite; }
      `}} />

      <div className="container mx-auto flex flex-col lg:flex-row relative max-w-[1200px] z-10 gap-16 lg:gap-0 items-center">
        
        {/* --- LEFT COLUMN --- */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center text-left max-w-[650px] z-20">
          
          <h1 className="text-white mb-6">
            {content.titleStart} <br className="hidden lg:block"/> 
            <span className="text-emerald-400">{content.highlight}</span>
          </h1>

          <p className="text-white/90 max-w-[600px]">
            {content.desc}
          </p>

          <div className="flex justify-start">
             <a href="#contact" className="border border-white/40 text-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 inline-block rounded-sm">
               Get Started
             </a>
          </div>
        </div>

        {/* --- RIGHT COLUMN --- */}
        <div className="w-full lg:w-[55%] flex flex-row items-center justify-between relative min-h-[500px] lg:min-h-[550px]">
          
          {/* Engines & Boxes Container */}
          <div className="w-full lg:w-[70%] flex flex-col justify-center relative z-20">
            {content.nodes?.map((node: any, index: number) => {
               const isActive = activeIndex === index;

               return (
                 <div 
                   key={index} 
                   className={`flex items-center w-full relative group cursor-pointer ${index !== 0 ? '-mt-6' : ''}`}
                   style={{ zIndex: 10 + index }}
                   onMouseEnter={() => {
                     setActiveIndex(index);
                     setIsHovered(true);
                   }}
                   onMouseLeave={() => setIsHovered(false)}
                 >
                   
                   {/* Vertical Intersecting Engines */}
                   <div className="relative w-[130px] h-[130px] shrink-0 flex items-center justify-center">
                      <div className={`absolute inset-0 border-[1px] border-dashed rounded-full spin-slow transition-colors duration-500 ${isActive ? 'border-emerald-400' : 'border-white/20'}`} />
                      <div className={`absolute inset-[6px] border-[1px] border-dashed rounded-full spin-reverse transition-colors duration-500 ${isActive ? 'border-emerald-400/50' : 'border-white/10'}`} />
                      
                      <div className={`absolute inset-4 rounded-full flex flex-col items-center justify-center text-center p-2 z-10 transition-colors duration-500 ${isActive ? 'bg-emerald-500/20' : 'bg-transparent'}`}> 
                         <strong className={`block text-[11px] uppercase transition-colors duration-300 ${isActive ? 'text-emerald-400' : 'text-white'}`}>
                           {node.title.includes(' ') ? (
                             <>
                               {node.title.split(' ')[0]} <br/> {node.title.split(' ').slice(1).join(' ')}
                             </>
                           ) : (
                             node.title
                           )}
                         </strong>
                      </div>

                      {/* Dynamic SVG Icons */}
                      <div className={`absolute top-2 right-2 w-5 h-5 rounded-sm flex items-center justify-center shadow-lg border z-20 transition-all duration-500 transform ${isActive ? 'bg-emerald-400 border-emerald-300 scale-110' : 'bg-transparent border-white/30 scale-100'}`}>
                         {node.icon(`w-3 h-3 transition-colors duration-500 ${isActive ? 'text-black' : 'text-white/50'}`)}
                      </div>
                   </div>

                 {/* Description Box */}
                 <div className={`ml-6 flex flex-col backdrop-blur-md p-4 rounded-lg border transition-all duration-500 ease-out flex-1 max-w-[240px] ${isActive ? 'bg-emerald-500/30 border-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.15)] opacity-100 transform translate-x-2' : 'bg-transparent border-white/5 shadow-none opacity-50 transform translate-x-0'}`}>
                   <strong className="text-white text-[13px] uppercase mb-2 block">
                     {node.title}
                   </strong>
                   <span className={`text-[12px] transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/80'}`}>
                     {node.nodeDesc}
                   </span>
                 </div>

                 </div>
               );
            })}
          </div>

          {/* Main Image */}
          <div className="hidden lg:block absolute right-[0%] lg:right-[-10%] bottom-0 w-[60%] lg:w-[60%] h-[90%] z-10 pointer-events-none">
              <Image 
              src={content.image} 
              alt="Hero Visual" 
              fill
              priority 
              unoptimized
              className="object-contain object-bottom scale-110 lg:scale-125 origin-bottom"
              sizes="(max-width: 1024px) 50vw, 40vw"
            />          
          </div>

        </div>

      </div>
    </section>
  );
};