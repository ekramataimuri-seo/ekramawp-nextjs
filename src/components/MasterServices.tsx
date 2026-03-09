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
    <div className="w-full bg-[#020617] py-24">
      <style dangerouslySetInnerHTML={{ __html: `
        /* --- 1. PREVENT SITE OVERFLOW --- */
        #ek-rev-v17, 
        #ek-rev-v17 .fx-wrapper {
            overflow: visible !important;
            max-width: 100%;
        }

        /* --- 2. COMPONENT ISOLATION --- */
        #ek-rev-v17 {
            --brand-blue: #3b82f6;      
            --brand-navy: #ffffff;      
            --scratch-light: #60a5fa;   
            --border-subtle: rgba(255, 255, 255, 0.1);
            
            box-sizing: border-box;
            width: 100%;
            max-width: 1400px !important; 
            margin: 0 auto !important;
            padding: 0 40px; 
            background: transparent !important;
        }

        #ek-rev-v17 * {
            box-sizing: border-box;
        }

        /* --- 3. HEADING STYLES --- */
        #ek-rev-v17 .king-heading-wrap {
            text-align: center;
            /* Margin accounts for the top overlap of the image */
            margin-bottom: 180px; 
        }

        #ek-rev-v17 .king-kicker {
            display: block;
            color: var(--brand-blue);
            font-weight: 800;
            font-size: 0.95rem;
            text-transform: uppercase;
            letter-spacing: 2.5px;
            margin-bottom: 15px;
        }

        #ek-rev-v17 .king-heading-wrap h2 {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 900;
            color: var(--brand-navy);
            line-height: 1.1;
            letter-spacing: -0.04em;
            margin: 0 0 20px 0;
        }

        #ek-rev-v17 .king-heading-wrap p {
            font-size: 1.2rem;
            color: #94a3b8; 
            font-weight: 400;
            max-width: 800px;
            margin: 0 auto;
        }

        /* --- 4. MAIN LAYOUT --- */
        .fx-wrapper {
            display: flex !important;
            flex-direction: row !important;
            justify-content: space-between !important; 
            align-items: flex-start !important;
            position: relative;
            width: 100%;
            gap: 60px;
        }

        /* --- 5. MINIMAL VERTICAL TABS --- */
        .fx-tabs {
            flex: 0 0 280px !important; 
            display: flex;
            flex-direction: column;
            border-left: 1px solid var(--border-subtle);
            z-index: 20;
            padding-left: 0;
        }

        .fx-tab {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 24px 30px !important;
            cursor: pointer;
            color: #64748b !important; 
            transition: all 0.3s ease;
            background: transparent !important;
            border-left: 2px solid transparent;
            margin-left: -1px; 
            user-select: none;
        }

        .fx-tab:hover {
            color: #cbd5e1 !important;
            border-left-color: rgba(255, 255, 255, 0.3);
        }

        .fx-tab.active {
            border-left-color: var(--brand-blue);
            color: #ffffff !important;
            background: linear-gradient(90deg, rgba(59, 130, 246, 0.05) 0%, transparent 100%) !important;
        }

        .fx-icon-circle {
            display: flex;
            align-items: center;
            justify-content: center;
            color: inherit; 
            flex-shrink: 0;
            transition: all 0.3s ease;
        }

        .fx-tab.active .fx-icon-circle {
            color: var(--brand-blue) !important;
        }

        .fx-tab span {
            font-size: 17px;
            font-weight: 700 !important; 
            letter-spacing: -0.01em;
        }

/* --- 6. CLEAN CONTENT AREA --- */
        .fx-content-area {
            flex: 1 !important; /* Lets it shrink and grow to fill available space */
            width: 100% !important;
            max-width: 950px !important; /* Caps the size on huge monitors */
            position: relative;
            border-top: 1px solid var(--border-subtle);
            min-height: 400px;
            /* I removed the overflow: hidden; so your image won't get chopped in half! */
        }

        .fx-panel {
            display: none;
            width: 100%;
            height: 100%;
        }

        .fx-panel.active {
            display: block !important;
            animation: fx-fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fx-fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* --- 7. SMALL CENTERED OVERLAPPING IMAGE --- */
        .fx-img-overlap {
            position: absolute !important;
            width: 460px !important; /* Constrained small width */
            
            /* Perfectly centered horizontally and 50% vertically */
            top: 0 !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            z-index: 30;
        }

        .fx-img-overlap img {
            width: 100% !important;
            height: 280px !important; /* Fixed proportional height */
            border-radius: 12px !important;
            border: 1px solid rgba(255, 255, 255, 0.08);
            object-fit: cover; /* Prevents stretching completely */
            box-shadow: 0 25px 50px -12px rgba(0,0,0,0.6) !important;
            display: block !important;
            transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .fx-panel.active .fx-img-overlap img {
            animation: img-scale-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes img-scale-in {
            from { transform: scale(0.96); opacity: 0.8; }
            to { transform: scale(1); opacity: 1; }
        }

        /* --- 8. TEXT CONTENT --- */
        .fx-text-col { 
            color: #ffffff !important; 
            /* Push text down so the centered image has breathing room */
            padding-top: 180px; 
            max-width: 850px;
            margin: 0 auto; /* Keep text column centered within the 950px box */
        }
        
        .fx-text-col .panel-kicker {
            display: inline-block;
            color: var(--brand-blue);
            font-size: 0.85rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 12px;
        }

        .fx-text-col h3 { 
            font-size: 38px !important; 
            font-weight: 900 !important;
            margin: 0 0 24px 0 !important; 
            color: #ffffff !important;
            line-height: 1.1 !important;
            letter-spacing: -0.02em !important;
        }

        .fx-text-col p { 
            color: #cbd5e1 !important;
            font-size: 18px;
            font-weight: 400;
            line-height: 1.7;
            margin-bottom: 40px !important;
        }

        .fx-text-col ul { 
            list-style-type: none !important; 
            margin: 0 !important; 
            padding: 0 !important; 
            display: grid !important; 
            grid-template-columns: 1fr 1fr; 
            gap: 20px;
        } 

        .fx-text-col li { 
            display: flex !important; 
            align-items: flex-start !important;
            color: #e2e8f0 !important; 
            font-size: 16px !important; 
            line-height: 1.5 !important; 
            margin: 0 !important; 
            font-weight: 400;
        }

        .fx-text-col li::before {
            content: "—"; 
            color: var(--brand-blue);
            font-weight: 900;
            margin-right: 12px;
            font-size: 16px;
        }

        /* --- 9. MOBILE RESPONSIVE --- */
        @media (max-width: 992px) {
            #ek-rev-v17 .king-heading-wrap {
                margin-bottom: 60px; 
            }

            #ek-rev-v17 .fx-wrapper {
                flex-direction: column !important;
                gap: 50px !important;
            }

            #ek-rev-v17 .fx-tabs {
                width: 100% !important;
                flex-direction: row !important;
                border-left: none;
                border-bottom: 1px solid var(--border-subtle);
                overflow-x: auto !important;
                overflow-y: hidden !important;
                -webkit-overflow-scrolling: touch;
                scrollbar-width: none;
            }

            #ek-rev-v17 .fx-tabs::-webkit-scrollbar { display: none; }

            #ek-rev-v17 .fx-tab {
                flex: 0 0 auto !important;
                padding: 16px 20px !important;
                border-left: none;
                border-bottom: 2px solid transparent;
                margin-left: 0;
                margin-bottom: -1px; 
            }

            #ek-rev-v17 .fx-tab:hover {
                border-left-color: transparent;
                border-bottom-color: rgba(255,255,255,0.3);
            }

            #ek-rev-v17 .fx-tab.active {
                border-bottom-color: var(--brand-blue);
                background: linear-gradient(0deg, rgba(59, 130, 246, 0.05) 0%, transparent 100%) !important;
            }

            #ek-rev-v17 .fx-content-area {
                width: 100% !important;
                flex: 1 !important;
                border-top: none; 
            }

            #ek-rev-v17 .fx-img-overlap {
                position: relative !important;
                transform: translateX(-50%) !important;
                margin-bottom: 40px;
                width: 90% !important;
                max-width: 460px !important;
            }

            #ek-rev-v17 .fx-img-overlap img {
                height: 240px !important;
            }

            #ek-rev-v17 .fx-text-col {
                padding-top: 0; 
            }

            #ek-rev-v17 .fx-text-col ul {
                grid-template-columns: 1fr; 
            }
        }
      `}} />

      <div id="ek-rev-v17">
        
        {/* HEADING */}
        <div className="king-heading-wrap">
          <span className="king-kicker">End-to-End Solutions</span>
          <h2>Mastering <span className="blue-scratch">Modern Web</span></h2>
          <p>A complete suite of engineering services designed to maximize performance, scalability, and user experience.</p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="fx-wrapper">
          
          {/* TABS COLUMN */}
          <div className="fx-tabs">
            {SERVICES_DATA.map((service, index) => (
              <div 
                key={service.id}
                className={`fx-tab ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                <div className="fx-icon-circle">
                  {service.icon}
                </div>
                <span>{service.title}</span>
              </div>
            ))}
          </div>

          {/* CONTENT COLUMN */}
          <div className="fx-content-area">
            {SERVICES_DATA.map((service, index) => (
              <div 
                key={service.id} 
                className={`fx-panel ${activeTab === index ? 'active' : ''}`}
              >
                <div className="fx-clean-container">
                  <div className="fx-img-overlap">
                    <img src={service.img} alt={service.title} />
                  </div>
                  <div className="fx-text-col">
                    <span className="panel-kicker">{service.kicker}</span>
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                    <ul>
                      {service.bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};