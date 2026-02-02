"use client";

import React, { useState } from "react";

export const PentagonGrowthEngine = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // The 5 positions for the rotation logic
  const positions = [
    "anchor",       // 0: Bottom Center (Active)
    "bottom-right", // 1
    "top-right",    // 2
    "top-left",     // 3
    "bottom-left",  // 4
  ];

  // Data for the 5 Services (Front End Engineering Focus)
  const services = [
    {
      id: 0,
      label: "Architecture",
      title: "Component Architecture",
      theme: "blue-theme",
      desc: "We build scalable, atomic design systems. By breaking interfaces down into reusable, isolated components, we ensure your application remains maintainable and consistent as it grows.",
      bullets: [
        "Atomic Design principles for modularity.",
        "Strict TypeScript typing for reliability.",
        "Reusable UI libraries (Storybook integration).",
      ],
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.5-4-7.5-4z"></path>
        </svg>
      ),
    },
    {
      id: 1,
      label: "Performance",
      title: "Performance Engineering",
      theme: "purple-theme",
      desc: "Speed is a feature. We optimize the critical rendering path, leverage Next.js Server Components, and implement edge caching to ensure instant load times and 100/100 Web Vitals.",
      bullets: [
        "Core Web Vitals (LCP, CLS, INP) optimization.",
        "Code-splitting and bundle size reduction.",
        "Server-Side Rendering (SSR) for speed.",
      ],
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
        </svg>
      ),
    },
    {
      id: 2,
      label: "Headless",
      title: "Headless Integration",
      theme: "teal-theme",
      desc: "Decouple your data from your display. We architect headless solutions connecting Next.js frontends to WordPress, Shopify, or Contentful backends via secure GraphQL APIs.",
      bullets: [
        "Secure API routes & middleware protection.",
        "Incremental Static Regeneration (ISR).",
        "Omnichannel content delivery architectures.",
      ],
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
          <line x1="2" y1="20" x2="2" y2="20"></line>
        </svg>
      ),
    },
    {
      id: 3,
      label: "Quality",
      title: "Automated Quality Assurance",
      theme: "indigo-theme",
      desc: "We don't ship bugs. Our engineering process includes rigid CI/CD pipelines, automated unit testing, and end-to-end (E2E) testing to catch regressions before deployment.",
      bullets: [
        "Jest & React Testing Library for units.",
        "Playwright/Cypress for E2E workflows.",
        "Automated linting & formatting pipelines.",
      ],
      icon: (
        <svg viewBox="0 0 24 24">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      ),
    },
    {
      id: 4,
      label: "UX/UI",
      title: "Interaction Engineering",
      theme: "navy-theme",
      desc: "We bridge the gap between design and code. Using tools like Framer Motion and GSAP, we create fluid, 60fps animations that delight users without blocking the main thread.",
      bullets: [
        "Smooth, physics-based micro-interactions.",
        "WCAG 2.1 AA Accessibility compliance.",
        "Responsive layouts for all viewports.",
      ],
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
          <path d="M2 2l7.586 7.586"></path>
          <circle cx="11" cy="11" r="2"></circle>
        </svg>
      ),
    },
  ];

  const handleNodeClick = (index: number) => {
    // If clicking the active one, rotate next. If clicking another, jump to it.
    if (index === activeIndex) {
      setActiveIndex((prev) => (prev + 1) % 5);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section 
      className="fx-pentagon-section relative overflow-hidden"
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
      {/* --- INJECTED CSS (Scoped styles for dark theme) --- */}
      <style>{`
        .fx-pentagon-section { padding: 80px 20px; color: #ffffff; }

        .header-section {
            max-width: 900px;
            margin: 0 auto 60px auto;
            text-align: center;
            padding: 0 20px;
            position: relative;
            z-index: 10;
        }

        /* PENTAGON STYLES */
        .fx-main-flex-container { 
            max-width: 900px; 
            margin: 0 auto; 
            display: flex; 
            flex-direction: column; 
            align-items: center; 
            position: relative;
            z-index: 10;
        }
        
        .fx-nav-column { 
            position: relative; 
            z-index: 10; 
            width: 100%; 
            display: flex; 
            justify-content: center; 
            margin-bottom: -30px; 
        }
        .fx-pentagon-canvas { width: 300px; height: 240px; position: relative; }
        .fx-svg-path { position: absolute; width: 100%; height: 100%; overflow: visible; }
        
        .dashed-line { 
          fill: none; 
          stroke: rgba(255, 255, 255, 0.2); 
          stroke-width: 1px; 
          stroke-dasharray: 4 4; 
        }

        .fx-node { 
          position: absolute; background: none; border: none; cursor: pointer; 
          display: flex; flex-direction: column; align-items: center; width: 100px; 
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1); outline: none; z-index: 5; 
        }

        /* Node Positions */
        .fx-node[data-pos="anchor"] { top: 220px; left: 150px; transform: translate(-50%, -50%); z-index: 20; }
        .fx-node[data-pos="bottom-right"] { top: 140px; left: 280px; transform: translate(-50%, -50%); }
        .fx-node[data-pos="top-right"] { top: 20px; left: 230px; transform: translate(-50%, -50%); }
        .fx-node[data-pos="top-left"] { top: 20px; left: 70px; transform: translate(-50%, -50%); }
        .fx-node[data-pos="bottom-left"] { top: 140px; left: 20px; transform: translate(-50%, -50%); }

        .fx-icon-inner { 
          width: 55px; height: 55px; background: #1a2436; border-radius: 50%; 
          display: flex; align-items: center; justify-content: center; 
          border: 1px solid rgba(255,255,255,0.2); transition: 0.3s; 
          box-shadow: 0 4px 15px rgba(0,0,0,0.3); 
        }
        .fx-icon-inner svg { width: 24px; height: 24px; fill: #ffffff; }
        
        .fx-node-label { 
          margin-top: 8px; font-size: 10px; font-weight: 700; color: rgba(255,255,255,0.7); 
          text-transform: uppercase; text-align: center; width: 80px; pointer-events: none; 
          letter-spacing: 0.5px;
        }

        /* Active State */
        .fx-node.is-active .fx-icon-inner { 
          background: #3F5CE0; border-color: #3F5CE0; transform: scale(1.15); 
          box-shadow: 0 0 20px rgba(63, 92, 224, 0.5);
        }
        .fx-node.is-active .fx-icon-inner svg { fill: #ffffff; }
        .fx-node.is-active .fx-node-label { color: #3F5CE0; }

        .fx-content-column { width: 100%; position: relative; z-index: 1; min-height: 400px; }
        
        .fx-slide { 
          display: none; padding: 70px 40px 50px 40px; border-radius: 20px; 
          border: 1px solid rgba(255,255,255,0.1); opacity: 0; 
          transition: opacity 0.4s ease; animation: fadeIn 0.5s forwards;
          background: #1a2436; /* Dark card background */
          box-shadow: 0 20px 50px rgba(0,0,0,0.3);
        }
        .fx-slide.is-active { display: block; opacity: 1; }
        
        @keyframes fadeIn { to { opacity: 1; } }

        /* Slide Content Typography */
        .fx-slide h3 { 
            font-weight: 900; 
            font-size: clamp(1.4rem, 2vw, 1.8rem); 
            color: #3F5CE0; 
            margin-bottom: 15px; 
            text-align: center; 
        }
        .fx-description { 
            font-size: 1.1rem; 
            font-weight: 400; 
            line-height: 1.6; 
            color: #ffffff; 
            margin-bottom: 25px; 
            text-align: center; 
        }
        .fx-bullets { 
            list-style: none; 
            padding: 25px 0 0 0; 
            margin: 0; 
            text-align: left; 
            border-top: 1px solid rgba(255,255,255,0.1); 
        }
        .fx-bullets li { 
            margin-bottom: 12px; 
            font-size: 1.1rem; 
            font-weight: 400; 
            position: relative; 
            padding-left: 30px; 
            color: #ffffff; 
            line-height: 1.5; 
        }
        .fx-bullets li::before { 
            content: '→'; 
            position: absolute; 
            left: 0; 
            color: #3F5CE0; 
            font-weight: 900; 
            font-size: 1.2rem;
        }
      `}</style>

      {/* --- HEADER --- */}
      <div className="header-section">
        {/* Subtitle */}
        <span className="block text-[#FFFFFF] font-bold text-sm uppercase tracking-[2px] mb-4">
          Integrated Capabilities
        </span>

        {/* H2: Cobalt Base, White Highlight, Double Scratch */}
        <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-black leading-[1.1] mb-[25px] text-[#3F5CE0] tracking-tight">
          Services That Build Your <br />
          <span className="relative inline-block text-[#FFFFFF] px-2 z-10 mt-2">
            Digital Empire
            {/* Double Scratch Layer 1 (Darker Blue) */}
            <span className="absolute left-0 right-0 bottom-[6px] h-[12px] bg-[#2E476E] -z-20 -skew-x-[12deg] rounded-sm"></span>
            {/* Double Scratch Layer 2 (Lighter Blue) */}
            <span className="absolute left-0 right-0 bottom-[10px] h-[12px] bg-[#3C66A6] -z-10 -skew-x-[12deg] rounded-sm shadow-[0_2px_0_rgba(255,255,255,0.1)]"></span>
          </span>
        </h2>

        <p className="text-[#FFFFFF] text-[1.1rem] font-normal leading-[1.6] max-w-[700px] mx-auto">
          We provide the full spectrum of Front-End Engineering services to help your 
          application scale. You’ll get:
        </p>
      </div>

      {/* --- PENTAGON INTERACTIVE --- */}
      <div className="fx-main-flex-container">
        
        {/* Navigation Pentagon */}
        <div className="fx-nav-column">
          <div className="fx-pentagon-canvas">
            {/* Pentagon SVG Lines */}
            <svg className="fx-svg-path" viewBox="0 0 300 240">
              <path
                className="dashed-line"
                d="M150,220 L280,140 L230,20 L70,20 L20,140 Z"
              />
            </svg>

            {/* Nodes */}
            {services.map((service, index) => {
              // Calculate Rotation Position based on activeIndex
              // Logic: (index - activeIndex + 5) % 5
              const posIndex = (index - activeIndex + 5) % 5;
              const currentPos = positions[posIndex];
              const isActive = index === activeIndex;

              return (
                <button
                  key={service.id}
                  className={`fx-node ${isActive ? "is-active" : ""}`}
                  data-pos={currentPos}
                  onClick={() => handleNodeClick(index)}
                  aria-label={`Select ${service.label}`}
                >
                  <div className="fx-icon-inner">{service.icon}</div>
                  <span className="fx-node-label">{service.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Slides */}
        <div className="fx-content-column">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`fx-slide ${index === activeIndex ? "is-active" : ""}`}
            >
              {/* H3 with White text inside Blue Highlight */}
              <h3>{service.title}</h3>
              <p className="fx-description">{service.desc}</p>
              
              <ul className="fx-bullets">
                {service.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};