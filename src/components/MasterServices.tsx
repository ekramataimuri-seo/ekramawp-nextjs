"use client";
import React, { useState } from 'react';

export const MasterServices = () => {
  const [activeTab, setActiveTab] = useState(0);

  // --- DATA ---
  const SERVICES_DATA = [
    {
      id: "react-arch",
      title: "React Architecture",
      kicker: "Scalable Systems",
      desc: "I don't just write code; I architect robust, scalable frontend systems. By leveraging React's component-based architecture, I create modular, maintainable, and highly reusable UI libraries that serve as the foundation for complex web applications. This approach ensures long-term stability and faster feature development cycles.",
      bullets: [
        "Implementation of Atomic Design principles for consistent UI.",
        "Development of highly optimized Custom Hooks for complex state management.",
        "Strict end-to-end type safety using TypeScript to eliminate runtime errors.",
        "Component-driven development using Storybook for isolated testing."
      ],
      img: "https://admin.wpfedev.com/wp-content/uploads/2026/02/WPsample2.webp",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      )
    },
    {
      id: "next-perf",
      title: "Next.js Performance",
      kicker: "Speed Optimization",
      desc: "Speed is not just a metric; it's a feature that directly impacts user retention and SEO. I leverage the full power of Next.js, utilizing Server-Side Rendering (SSR) and Static Site Generation (SSG) to deliver pre-rendered HTML instantly to the browser, bypassing the traditional client-side rendering bottlenecks.",
      bullets: [
        "Guaranteed zero Cumulative Layout Shift (CLS) for a stable browsing experience.",
        "Implementation of Edge Caching strategies for global, low-latency delivery.",
        "Automated, highly aggressive image and font optimization pipelines.",
        "Granular code-splitting to minimize the initial JavaScript payload."
      ],
      img: "https://admin.wpfedev.com/wp-content/uploads/2026/02/WPsample2.webp",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
      )
    },
    {
      id: "headless-wp",
      title: "Headless WordPress",
      kicker: "Decoupled Architecture",
      desc: "Experience the ultimate hybrid architecture: the familiar, easy-to-use editing experience of the WordPress dashboard combined with the lightning-fast, highly secure rendering capabilities of a React frontend. We completely decouple the CMS from the presentation layer.",
      bullets: [
        "Complete decoupling of the CMS for enhanced security (hidden WP Admin).",
        "Custom, high-performance GraphQL API development using WPGraphQL.",
        "Instant content updates via Next.js Incremental Static Regeneration (ISR).",
        "Seamless integration with Advanced Custom Fields (ACF) for complex data structures."
      ],
      img: "https://admin.wpfedev.com/wp-content/uploads/2026/02/WPsample2.webp",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
      )
    },
    {
      id: "ui-ux",
      title: "UI/UX Engineering",
      kicker: "Interactive Experiences",
      desc: "I bridge the gap between design and engineering, translating static Figma files into pixel-perfect, highly interactive code. My focus is on creating intuitive user experiences driven by smooth micro-interactions, flawless accessibility, and responsive layouts that perform perfectly across all devices.",
      bullets: [
        "Fluid, 60fps animations and transitions engineered with Framer Motion.",
        "Meticulous translation of complex Figma designs into responsive CSS.",
        "Strict adherence to WCAG accessibility standards for inclusive design.",
        "Implementation of robust, scalable CSS architectures (Tailwind/CSS Modules)."
      ],
      img: "https://admin.wpfedev.com/wp-content/uploads/2026/02/WPsample2.webp",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
      )
    },
    {
      id: "sys-arch",
      title: "System Architecture",
      kicker: "DevOps & Infrastructure",
      desc: "A great application requires a great foundation. I architect robust, cloud-native infrastructures designed for scale and reliability. This includes setting up automated deployment pipelines, configuring serverless environments, and implementing comprehensive testing strategies to ensure zero downtime.",
      bullets: [
        "Configuration of automated CI/CD pipelines via GitHub Actions.",
        "Deployment and management of serverless infrastructure (Vercel/AWS).",
        "Implementation of comprehensive End-to-End (E2E) testing with Cypress.",
        "Establishment of strict code formatting and linting rules (ESLint/Prettier)."
      ],
      img: "https://admin.wpfedev.com/wp-content/uploads/2026/02/WPsample2.webp",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
      )
    }
  ];

  return (
    <section className="section-container">
      <div className="global-grid-layout"></div>
    <div className="w-full bg-transparent overflow-visible">
      {/* Required for standardizing the custom animations without editing tailwind.config.js */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fx-fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes img-scale-in {
          from { transform: scale(0.96); opacity: 0.8; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fx-fade-in { animation: fx-fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-img-scale-in { animation: img-scale-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}} />

      <div className="box-border w-full max-w-[1400px] mx-auto bg-transparent overflow-visible">
        
        {/* HEADING */}
        <div className="text-center lg:mb-[180px]">
          <h2 className="font-black text-white">
            Mastering <span className="text-emerald-400">Modern Web</span>
          </h2>
          <p className="text-slate-400  max-w-[800px] mx-auto m-0">
            A complete suite of engineering services designed to maximize performance, scalability, and user experience.
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="flex flex-col lg:flex-row justify-between items-start relative w-full gap-[50px] lg:gap-[60px] overflow-visible">
          
          {/* TABS COLUMN */}
          <div className="flex flex-row lg:flex-col w-full lg:w-[280px] flex-none border-b lg:border-b-0 lg:border-l border-white/10 z-20 pl-0 overflow-x-auto lg:overflow-visible overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {SERVICES_DATA.map((service, index) => {
              const isActive = activeTab === index;
              return (
                <div 
                  key={service.id}
                  className={`flex flex-none items-center gap-4 py-4 px-5 lg:py-6 lg:px-[30px] cursor-pointer transition-all duration-300 bg-transparent border-b-2 lg:border-b-0 lg:border-l-2 select-none  ${
                    isActive 
                      ? 'text-white border-emerald-500 bg-gradient-to-t lg:bg-gradient-to-r from-emerald-500/5 to-transparent' 
                      : 'text-slate-500 border-transparent hover:text-slate-300 hover:border-white/30 lg:hover:border-b-transparent'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <div className={`flex items-center justify-center shrink-0 transition-all duration-300 ${isActive ? 'text-emerald-500' : 'text-inherit'}`}>
                    {service.icon}
                  </div>
                  <span className=" font-bold">{service.title}</span>
                </div>
              );
            })}
          </div>

          {/* CONTENT COLUMN */}
          <div className="flex-1 w-full lg:max-w-[950px] relative  border-white/10 min-h-[400px]">
            {SERVICES_DATA.map((service, index) => {
              const isActive = activeTab === index;
              return (
                <div 
                  key={service.id} 
                  className={`w-full h-full ${isActive ? 'block animate-fx-fade-in' : 'hidden'}`}
                >
                  <div>
                    <div className="relative lg:absolute w-[90%] lg:w-[460px] max-w-[460px] top-0 left-1/2 -translate-x-1/2 lg:-translate-y-1/2 z-30 ">
                      <img 
                        src={service.img} 
                        alt={service.title} 
                        className={`w-full h-[240px] lg:h-[280px] rounded-xl border border-white/10 object-cover shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] block transition-transform duration-700 ${isActive ? 'animate-img-scale-in' : ''}`}
                      />
                    </div>
                    <div className="text-white pt-0 lg:pt-[180px] max-w-[850px] mx-auto">
                      <span className="inline-block text-emerald-500 text-[0.85rem] font-bold uppercase tracking-[2px] mb-3">{service.kicker}</span>
                      <h3 className="text-[38px] font-black m-0 mb-6 text-white ">{service.title}</h3>
                      <p className="text-slate-300 text-[18px] font-normal mb-10">{service.desc}</p>
                      <ul className="list-none m-0 p-0 grid grid-cols-1 lg:grid-cols-2 gap-5">
                        {service.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start text-slate-200 m-0 before:content-['—'] before:text-emerald-500 before:font-black">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
    
    </section>
  );
};