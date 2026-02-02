"use client";
import React, { useState } from "react";

// --- DATA: Content for each Tab (Front End Engineering Focus) ---
const SERVICES_DATA = [
  {
    id: "react-arch",
    title: "React Architecture",
    desc: "I don't just write code; I build scalable systems. Using React's component-based architecture, I create modular, maintainable, and reusable UI libraries that ensure your application can grow without technical debt.",
    bullets: [
      "Atomic Design principles for scalability.",
      "Custom Hooks for clean logic separation.",
      "Type-safe component patterns with TypeScript."
    ],
    img: "https://www.webfx.com/wp-content/uploads/2024/01/LeadManagerFX.png", 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    )
  },
  {
    id: "next-perf",
    title: "Next.js Performance",
    desc: "Speed is a feature. I leverage Next.js Server Side Rendering (SSR) and Static Generation (SSG) to deliver HTML instantly. This results in 100/100 Core Web Vitals and superior user retention.",
    bullets: [
      "Zero-layout shift (CLS) optimization.",
      "Edge Caching on Vercel for global speed.",
      "Image optimization via Next/Image API."
    ],
    img: "https://www.webfx.com/wp-content/uploads/2023/12/AdTechFX.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
      </svg>
    )
  },
  {
    id: "headless-wp",
    title: "Headless WordPress",
    desc: "Get the best of both worlds: The easy editing experience of WordPress for your marketing team, combined with the security and blazing speed of a React frontend.",
    bullets: [
      "Decoupled CMS via WPGraphQL.",
      "Secure API routes hidden from the public.",
      "Instant content updates via ISR (Incremental Static Regeneration)."
    ],
    img: "https://www.webfx.com/wp-content/uploads/2024/01/LeadManagerFX.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
        <line x1="2" y1="20" x2="2" y2="20"></line>
      </svg>
    )
  },
  {
    id: "ui-ux",
    title: "UI/UX Engineering",
    desc: "I translate Figma designs into pixel-perfect code. My focus is on micro-interactions and smooth animations that delight users without slowing down the browser.",
    bullets: [
      "Framer Motion for complex animations.",
      "Responsive layouts that work on any device.",
      "Accessibility (WCAG) compliance built-in."
    ],
    img: "https://www.webfx.com/wp-content/uploads/2024/01/LeadManagerFX.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
      </svg>
    )
  },
  {
    id: "sys-arch",
    title: "System Architecture",
    desc: "A stable codebase requires robust infrastructure. I implement strict testing, type safety, and automated deployment pipelines to ensure your product scales reliably.",
    bullets: [
      "End-to-End testing with Playwright.",
      "Strict TypeScript configuration.",
      "CI/CD Pipelines via GitHub Actions."
    ],
    img: "https://www.webfx.com/wp-content/uploads/2023/12/AdTechFX.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
      </svg>
    )
  }
];

export const MasterServices = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section 
      className="relative w-full py-[100px] px-5 box-border overflow-hidden"
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
      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-[50px]">
          {/* Subtitle: Pure White */}
          <span className="block text-[#FFFFFF] font-bold text-sm uppercase tracking-[2px] mb-4">
            End-to-End Solutions
          </span>
          
          {/* H2: Cobalt Base, White Highlight, Double Scratch */}
          <h2 className="text-[clamp(2.2rem,4.5vw,3.2rem)] font-black text-[#3F5CE0] leading-[1.1] tracking-tight mb-5">
            Mastering <span className="relative inline-block text-[#FFFFFF] px-1 z-10">
              Modern Web
              {/* Double Scratch Layer 1 (Darker Blue) */}
              <span className="absolute left-0 right-0 bottom-[6px] h-[12px] bg-[#2E476E] -z-20 -skew-x-[10deg] rounded-sm"></span>
              {/* Double Scratch Layer 2 (Lighter Blue) */}
              <span className="absolute left-0 right-0 bottom-[10px] h-[12px] bg-[#3C66A6] -z-10 -skew-x-[10deg] rounded-sm shadow-[0_2px_0_rgba(255,255,255,0.1)]"></span>
            </span>
          </h2>
          
          <p className="text-[1.15rem] text-[#FFFFFF] font-normal max-w-[700px] mx-auto leading-relaxed">
            A complete suite of engineering services designed to maximize performance and scalability.
          </p>
        </div>

        {/* --- FLEX WRAPPER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-center relative w-full gap-5 lg:gap-0">
          
          {/* --- TABS SIDEBAR --- */}
          <div className="flex flex-row lg:flex-col gap-3 w-full lg:w-[280px] z-20 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide">
            {SERVICES_DATA.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`
                  flex items-center gap-4 px-[18px] py-[14px] cursor-pointer rounded-xl 
                  transition-all duration-400 border-none text-left min-w-[200px] lg:min-w-0 outline-none
                  ${activeTab === index 
                    ? "bg-[#3F5CE0] text-white shadow-lg shadow-[#3F5CE0]/30" 
                    : "bg-transparent text-[#FFFFFF] hover:bg-white/10"
                  }
                `}
              >
                {/* Icon Circle */}
                <div className={`
                  w-[38px] h-[38px] rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300
                  ${activeTab === index 
                    ? "bg-white text-[#3F5CE0] scale-105" 
                    : "bg-white/10 text-[#FFFFFF]"
                  }
                `}>
                  {service.icon}
                </div>
                <span className="text-[16px] lg:text-[18px] font-bold whitespace-nowrap lg:whitespace-normal">
                  {service.title}
                </span>
              </button>
            ))}
          </div>

          {/* --- CONTENT AREA --- */}
          <div className="w-full lg:w-[700px] relative min-h-[500px] lg:min-h-[420px]">
            {SERVICES_DATA.map((service, index) => (
              <div
                key={service.id}
                className={`
                  w-full transition-all duration-500 ease-out absolute top-0 left-0
                  ${activeTab === index 
                    ? "opacity-100 translate-y-0 relative z-10" 
                    : "opacity-0 translate-y-[15px] absolute z-0 pointer-events-none"
                  }
                `}
                style={{ display: activeTab === index ? 'block' : 'none' }} 
              >
                {/* Blue Box */}
                <div className="
                  flex flex-col justify-center items-start 
                  bg-[radial-gradient(circle_at_top_right,#207DE9,#155db5)] 
                  rounded-3xl p-10 lg:pl-[200px] shadow-2xl shadow-[#3F5CE0]/20
                  relative w-full min-h-[420px] mt-[60px] lg:mt-0 border border-white/10
                ">
                  
                  {/* Overlap Image (The Floating Image) */}
                  <div className="
                    relative lg:absolute lg:left-[-120px] lg:top-1/2 lg:-translate-y-1/2 
                    w-full lg:w-[300px] mb-8 lg:mb-0 z-30
                    -mt-[100px] lg:mt-0
                  ">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="
                        w-full h-auto rounded-2xl bg-white p-2.5 block 
                        shadow-2xl
                        transition-transform duration-500 hover:scale-105
                      "
                    />
                  </div>

                  {/* Text Content */}
                  <div className="text-white relative z-10">
                    <h3 className="text-[28px] font-black mb-[18px] leading-[1.25] tracking-tight text-white">
                      {service.title}
                    </h3>
                    <p className="opacity-90 text-[16px] font-normal leading-relaxed mb-4 text-white">
                      {service.desc}
                    </p>
                    <ul className="list-disc pl-5 m-0 space-y-2.5">
                      {service.bullets.map((bullet, i) => (
                        <li key={i} className="text-[16px] leading-[1.6] opacity-90 text-white">
                          {bullet}
                        </li>
                      ))}
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