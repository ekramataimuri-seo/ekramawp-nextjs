"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ComposableMap, Geographies, Geography, Sphere, Graticule } from "react-simple-maps";

const geoUrl = "https://raw.githubusercontent.com/lotusms/world-map-data/main/world.json";

// --- GLOBE SUB-COMPONENT (Using Custom Copied Styles & Fixed Rotation) ---
// --- GLOBE SUB-COMPONENT (Fully Visible & Responsive) ---
const RotatingGlobe = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
let animationFrameId: number;

    const animate = () => {
      setRotation((prev) => (prev + 0.15) % 360); 
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div 
      /* THE FIX: 
         1. Removed negative top/left pixels so it never bleeds off-screen.
         2. Used 'max-w-[800px]' and 'w-full' so it shrinks nicely on mobile but stays huge on desktop.
         3. 'aspect-square' keeps the bounding box a perfect circle container.
      */
      className="absolute left-0 lg:left-[-35%] top-1/2 -translate-y-1/2 w-full max-w-[450px] lg:max-w-[1200px] aspect-square z-0 pointer-events-none opacity-[0.35]"
    >
      <ComposableMap 
        projection="geoOrthographic" 
        projectionConfig={{ 
          rotate: [rotation, -15, 0], 
          scale: 280 // A safe scale ensuring the entire sphere fits inside the SVG viewBox
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <Sphere stroke="#10b981" strokeWidth={0.8} fill="rgba(16, 185, 129, 0.03)" />
        <Graticule stroke="#34d399" strokeWidth={0.4} opacity={0.4} />
        
        <Geographies geography={geoUrl}>
  {({ geographies }: { geographies: any[] }) =>
    geographies.map((geo: any) => (
      <Geography 
        key={geo.rsmKey} 
        geography={geo}
                fill="#34d399"
                stroke="#064e3b"
                strokeWidth={0.3}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

// --- DATA ---
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
    <section className="relative w-full flex items-center overflow-hidden min-h-[90vh] pt-[42px] lg:pt-0 pb-20 lg:pb-0 px-5">
      
      <RotatingGlobe />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes engine-spin { 100% { transform: rotate(360deg); } }
        @keyframes engine-reverse { 100% { transform: rotate(-360deg); } }
        .spin-slow { animation: engine-spin 20s linear infinite; }
        .spin-reverse { animation: engine-reverse 15s linear infinite; }
      `}} />

      <div className="container mx-auto flex flex-col lg:flex-row relative max-w-[1200px] z-10 gap-16 lg:gap-0 items-center">
        
        {/* --- LEFT COLUMN --- */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center text-left max-w-[650px] z-20">
          <h1 className="text-white">
            {content.titleStart} <br className="hidden lg:block"/> 
            <span className="text-emerald-400">{content.highlight}</span>
          </h1>

          <p className="text-white/80 max-w-[600px] mb-8 text-lg font-light leading-relaxed">
            {content.desc}
          </p>

          <div className="flex justify-start">
             <a href="#contact" className="border border-white/40 text-white px-8 py-3 hover:bg-emerald-400 hover:text-black hover:border-emerald-400 transition-all duration-300 inline-block rounded-sm font-medium">
               Get Started
             </a>
          </div>
        </div>

        {/* --- RIGHT COLUMN --- */}
        <div className="w-full lg:w-[55%] flex flex-row items-center justify-between relative min-h-[500px] lg:min-h-[550px]">
          
          <div className="hidden lg:block absolute right-[0%] lg:right-[-10%] bottom-0 w-[65%] lg:w-[70%] h-[95%] z-10 pointer-events-none">
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

          <div className="w-full lg:w-[75%] flex flex-col justify-center relative z-20">
            {content.nodes?.map((node: any, index: number) => {
               const isActive = activeIndex === index;
               return (
                 <div 
                   key={index} 
                   className={`flex items-center w-full relative group cursor-pointer ${index !== 0 ? '-mt-6' : ''}`}
                   style={{ zIndex: 30 + index }}
                   onMouseEnter={() => { setActiveIndex(index); setIsHovered(true); }}
                   onMouseLeave={() => setIsHovered(false)}
                 >
                   <div className="relative w-[130px] h-[130px] shrink-0 flex items-center justify-center">
                      <div className={`absolute inset-0 border-[1px] border-dashed rounded-full spin-slow transition-colors duration-500 ${isActive ? 'border-emerald-400' : 'border-white/20'}`} />
                      <div className={`absolute inset-[6px] border-[1px] border-dashed rounded-full spin-reverse transition-colors duration-500 ${isActive ? 'border-emerald-400/50' : 'border-white/10'}`} />
                      
                      <div className={`absolute inset-4 rounded-full flex flex-col items-center justify-center text-center p-2 z-10 transition-colors duration-500 ${isActive ? 'bg-emerald-500/20' : 'bg-transparent'}`}> 
                         <strong className={`block text-[11px] uppercase transition-colors duration-300 ${isActive ? 'text-emerald-400' : 'text-white'}`}>
                           {node.title.includes(' ') ? (
                             <>{node.title.split(' ')[0]} <br/> {node.title.split(' ').slice(1).join(' ')}</>
                           ) : node.title}
                         </strong>
                      </div>
                      <div className={`absolute top-2 right-2 w-5 h-5 rounded-sm flex items-center justify-center shadow-lg border z-20 transition-all duration-500 transform ${isActive ? 'bg-emerald-400 border-emerald-300 scale-110' : 'bg-transparent border-white/30 scale-100'}`}>
                         {node.icon(`w-3 h-3 transition-colors duration-500 ${isActive ? 'text-black' : 'text-white/50'}`)}
                      </div>
                   </div>

                   <div className={`ml-6 flex flex-col backdrop-blur-md p-4 rounded-lg border transition-all duration-500 ease-out flex-1 max-w-[240px] ${isActive ? 'bg-emerald-500/30 border-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.15)] opacity-100 transform translate-x-2' : 'bg-transparent border-white/5 shadow-none opacity-50 transform translate-x-0'}`}>
                     <strong className="text-white text-[13px] uppercase mb-1 block">{node.title}</strong>
                     <span className={`text-[12px] transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/80'}`}>{node.nodeDesc}</span>
                   </div>
                 </div>
               );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};