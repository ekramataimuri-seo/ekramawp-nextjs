"use client";
import React, { useState } from 'react';

const tabsData = [
  {
    id: 'core',
    label: 'Core Features',
    titlePre: 'Ship robust interfaces with',
    highlight: 'engineering precision',
    intro: 'Move beyond simple scripts. Architect scalable frontend ecosystems that handle complex state, enforce strict typing, and deliver pixel-perfect rendering.',
    features: [
      {
        title: 'State Management',
        desc: 'Predictable data flow using Redux or Context API for complex apps.',
        icon: <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2zm0-6h2v4h-2z"/>
      },
      {
        title: 'Component Logic',
        desc: 'Decoupled, reusable hooks and functional components.',
        icon: <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"/>
      },
      {
        title: 'CI/CD Pipelines',
        desc: 'Automated testing and deployment workflows for reliability.',
        icon: <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2z"/>
      }
    ]
  },
  {
    id: 'architecture',
    label: 'Architecture',
    titlePre: 'Built for',
    highlight: 'growth & scale',
    intro: 'Adopt micro-frontend architectures or modular monoliths. Ensure your codebase remains maintainable as your team grows from 5 to 50 engineers.',
    features: [
      {
        title: 'Atomic Design',
        desc: 'Organize components by complexity: atoms, molecules, organisms.',
        icon: <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
      },
      {
        title: 'Micro-frontends',
        desc: 'Split monolithic apps into smaller, deployable logic units.',
        icon: <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4zm6 6h4v-4h-4zm0 6h4v-4h-4z"/>
      },
      {
        title: 'Design Tokens',
        desc: 'Centralized style definitions for consistent UI scaling.',
        icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
      }
    ]
  },
  {
    id: 'performance',
    label: 'Performance',
    titlePre: 'Optimize your',
    highlight: 'critical path',
    intro: 'Achieve 100 Lighthouse scores by minimizing main-thread blocking, optimizing bundle sizes, and utilizing efficient caching strategies.',
    features: [
      {
        title: 'Core Web Vitals',
        desc: 'Monitor LCP, FID, and CLS in real-time environments.',
        icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
      },
      {
        title: 'Lazy Loading',
        desc: 'Defer non-critical resources to speed up initial paint time.',
        icon: <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
      },
      {
        title: 'Edge Caching',
        desc: 'Deliver static assets from CDNs closer to the user.',
        icon: <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
      }
    ]
  },
  {
    id: 'types',
    label: 'Type Safety',
    titlePre: 'Eliminate',
    highlight: 'runtime errors',
    intro: 'Leverage TypeScript to catch bugs at compile time. Define interfaces for API responses and prop types to ensure data integrity across your app.',
    features: [
      {
        title: 'Type Checking',
        desc: 'Catch null reference errors before deployment.',
        icon: <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
      },
      {
        title: 'Interfaces',
        desc: 'Strict contracts for props, state, and API responses.',
        icon: <path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"/>
      },
      {
        title: 'Generics',
        desc: 'Reusable components that work with a variety of data types.',
        icon: <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
      }
    ]
  }
];

export const BigTabsData = () => {
  const [activeTabId, setActiveTabId] = useState('core');

  // Find the active tab data
  const activeContent = tabsData.find(tab => tab.id === activeTabId) || tabsData[0];

  return (
    <section className="w-full pt-2 pb-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* Title Body Content Added */}
        <div className=" max-w-3xl">
          <h2>Platform Mastery <span className="text-emerald"> Overview</span></h2>
          <p>Explore the tools, architecture, and principles needed to build high-performance applications.</p>
        </div>

        <div className="w-full text-left max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] overflow-hidden min-h-[600px] ">
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
          `}} />

          {/* Navigation Sidebar */}
          <nav className="flex flex-row lg:flex-col py-0 lg:py-8 overflow-x-auto lg:overflow-visible">
            {tabsData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`
                  bg-transparent border-none text-left px-6 py-4 lg:px-8 lg:py-5 cursor-pointer 
                  font-inherit font-bold text-[1.1rem] transition-all duration-300 ease-in-out relative 
                  whitespace-nowrap lg:whitespace-normal
                  ${activeTabId === tab.id 
                    ? 'text-[#10B981] bg-[#10B981]/[0.08] before:content-[""] before:absolute before:left-0 before:bg-[#10B981] before:shadow-[0_0_15px_#10B981] before:w-full before:h-[3px] before:top-auto before:bottom-0 lg:before:w-[4px] lg:before:h-auto lg:before:top-0 lg:before:bottom-0' 
                    : 'text-white/60 hover:text-white hover:bg-[#10B981]/10'
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Main Content Area */}
          <main className="p-8 lg:p-[3rem_4rem] relative">
            <div key={activeTabId} className="animate-[fadeIn_0.4s_ease-out]">
              
              <h2 className="text-[#10B981] mb-6 max-w-[800px]">
                {activeContent.titlePre} <span className="text-[#10B981]">{activeContent.highlight}</span>
              </h2>
              
              <p className="text-white text-[1.1rem] font-normal leading-[1.7] mb-12 max-w-[700px] opacity-[0.95]">
                {activeContent.intro}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {activeContent.features.map((feature, idx) => (
                  <div key={idx} className="flex flex-col gap-3 group">
                    <svg className="w-8 h-8 mb-2 text-[#10B981]" fill="currentColor" viewBox="0 0 24 24">
                      {feature.icon}
                    </svg>
                    <h3 className="text-white m-0 flex items-center gap-2 after:content-['›'] after:text-[1.4rem] after:font-normal after:text-[#10B981] after:transition-transform after:duration-200 group-hover:after:translate-x-1">
                      {feature.title}
                    </h3>
                    <p className="text-white text-[0.9rem] leading-[1.5] opacity-80 m-0">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="w-full rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] border border-white/10 relative mt-auto group/img">
                <img 
                  src="https://admin.wpfedev.com/wp-content/uploads/2026/02/WPsample2.webp" 
                  alt="Dashboard" 
                  className="w-full h-auto block transition-transform duration-500 ease-in-out group-hover/img:scale-[1.02]" 
                  loading="lazy"
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};