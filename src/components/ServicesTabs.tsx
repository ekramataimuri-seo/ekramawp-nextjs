"use client";
import React, { useState } from "react";
import Image from "next/image";

export const ServicesTabs = () => {
  const [activeTab, setActiveTab] = useState("headless");

  return (
    <section 
      className="relative w-full py-[80px] px-5 overflow-hidden"
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
      <style>{`
        :root {
           --brand-blue: #3F5CE0;
           --scratch-1: #2E476E;
           --scratch-2: #3C66A6;
           --text-white: #ffffff;
           --card-bg: #1a2436;
           --tab-inactive: #94a3b8;
        }

        .playbook-container {
            max-width: 1100px;
            margin: 0 auto;
            position: relative;
            z-index: 10;
        }

        /* Main Heading (H2) */
        .main-heading {
            text-align: center;
            font-weight: 900;
            font-size: clamp(2.5rem, 4vw, 3.5rem);
            margin-bottom: 50px;
            line-height: 1.1;
            color: var(--brand-blue);
            letter-spacing: -1px;
        }

        /* Highlight Span within H2 */
        .white-highlight {
            position: relative;
            display: inline-block;
            color: var(--text-white);
            z-index: 1;
            padding: 0 5px;
        }

        /* Double Scratch Effect */
        .white-highlight::before, 
        .white-highlight::after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            z-index: -1;
            border-radius: 4px;
        }

        .white-highlight::before {
            bottom: 6px;
            height: 10px;
            background-color: var(--scratch-1);
            transform: skewX(-12deg);
        }

        .white-highlight::after {
            bottom: 10px;
            height: 10px;
            background-color: var(--scratch-2);
            transform: skewX(-12deg);
            opacity: 1;
            box-shadow: 0 2px 0 rgba(255,255,255,0.1);
        }

        /* Tab Navigation */
        .tab-nav {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-bottom: 30px;
            flex-wrap: wrap;
        }

        .tab-btn {
            background: transparent;
            border: 1px solid rgba(255,255,255,0.1);
            padding: 14px 24px;
            font-weight: 800;
            font-size: 1.1rem;
            color: var(--tab-inactive);
            cursor: pointer;
            transition: all 0.3s ease;
            border-radius: 8px;
        }

        .tab-btn:hover {
            color: var(--text-white);
            background: rgba(255,255,255,0.05);
        }

        .tab-btn.active {
            color: var(--text-white);
            background: var(--brand-blue);
            border-color: var(--brand-blue);
            box-shadow: 0 4px 15px rgba(63, 92, 224, 0.4);
        }

        /* Content Area */
        .tab-content-wrapper {
            background-color: var(--card-bg);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 20px;
            padding: 40px;
            min-height: 450px;
            box-shadow: 0 20px 50px rgba(0,0,0,0.3);
        }

        .tab-pane {
            display: none;
            grid-template-columns: 1.2fr 1fr;
            gap: 50px;
            animation: fadeIn 0.5s ease;
            align-items: center;
        }

        .tab-pane.active {
            display: grid;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Sub-headings (H3) */
        .tab-pane h3 {
            font-weight: 900;
            font-size: clamp(1.4rem, 2vw, 1.8rem);
            margin-top: 0;
            margin-bottom: 20px;
            line-height: 1.2;
            color: var(--brand-blue);
        }

        .white-text {
            color: var(--text-white);
        }

        /* Paragraphs */
        .content-left p {
            font-size: 1.1rem;
            font-weight: 400;
            margin-bottom: 25px;
            line-height: 1.6;
            color: var(--text-white);
        }

        /* Strategy Box */
        .strategy-box {
            margin-top: 25px;
            padding: 25px;
            border-left: 4px solid var(--brand-blue);
            background: rgba(255, 255, 255, 0.03);
            border-radius: 0 8px 8px 0;
        }
        
        .strategy-box p {
             margin-bottom: 0;
        }

        /* Image */
        .content-right {
            position: relative;
        }
        
        .image-wrapper {
             border-radius: 12px;
             overflow: hidden;
             border: 1px solid rgba(255,255,255,0.1);
             box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .content-right img {
            width: 100%;
            height: auto;
            display: block;
            opacity: 0.9;
        }

        @media (max-width: 900px) {
            .tab-pane { grid-template-columns: 1fr; gap: 30px; }
            .content-right { order: -1; }
            .main-heading { font-size: 2rem; }
            .tab-btn { flex: 1 1 40%; font-size: 0.9rem; }
        }
      `}</style>

      <div className="playbook-container">
        {/* Subtitle */}
        <div className="text-center mb-4">
             <span className="text-[#FFFFFF] font-bold text-sm uppercase tracking-[2px]">
                Technical Capabilities
             </span>
        </div>

        {/* H2 */}
        <h2 className="main-heading">
          I Engineer Digital Growth with <br />
          <span className="white-highlight">Modern Web Architecture</span>
        </h2>

        {/* Navigation */}
        <div className="tab-nav">
          <button 
            className={`tab-btn ${activeTab === "headless" ? "active" : ""}`} 
            onClick={() => setActiveTab("headless")}
          >
            Headless Architecture
          </button>
          <button 
            className={`tab-btn ${activeTab === "nextjs" ? "active" : ""}`} 
            onClick={() => setActiveTab("nextjs")}
          >
            Performance Engineering
          </button>
          <button 
            className={`tab-btn ${activeTab === "systems" ? "active" : ""}`} 
            onClick={() => setActiveTab("systems")}
          >
            Component Systems
          </button>
          <button 
            className={`tab-btn ${activeTab === "uiux" ? "active" : ""}`} 
            onClick={() => setActiveTab("uiux")}
          >
            Interactive UI
          </button>
        </div>

        {/* Panels */}
        <div className="tab-content-wrapper">
          
          {/* TAB 1: HEADLESS */}
          <div className={`tab-pane ${activeTab === "headless" ? "active" : ""}`}>
            <div className="content-left">
              <h3>The Power of <span className="white-text">Decoupled Data</span></h3>
              <p>
                <strong>How it works:</strong> Monolithic CMS setups are a security risk and performance bottleneck. I decouple the backend (WordPress/Shopify) from the frontend (Next.js), ensuring zero direct database exposure.
              </p>
              <div className="strategy-box">
                <p>
                  <strong>Engineering Strategy:</strong> I utilize Incremental Static Regeneration (ISR) to serve static HTML that updates in the background, combining security with instant scalability.
                </p>
              </div>
            </div>
            <div className="content-right">
                <div className="image-wrapper">
                  <img src="https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp" alt="Headless Architecture Diagram" />
                </div>
            </div>
          </div>

          {/* TAB 2: PERFORMANCE */}
          <div className={`tab-pane ${activeTab === "nextjs" ? "active" : ""}`}>
            <div className="content-left">
              <h3>Speed as a <span className="white-text">Core Feature</span></h3>
              <p>
                {/* FIXED: Replaced > with &gt; */}
                <strong>How it works:</strong> 53% of users abandon a site if it takes &gt;3 seconds to load. I engineer the critical rendering path to prioritize content visibility (LCP) and visual stability (CLS).
              </p>
              <div className="strategy-box">
                <p>
                  <strong>Engineering Strategy:</strong> Leveraging Vercel's Edge Network, I cache assets geographically closer to your users, reducing Time to First Byte (TTFB) to under 50ms globally.
                </p>
              </div>
            </div>
            <div className="content-right">
                <div className="image-wrapper">
                    <img src="https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp" alt="Performance Metrics" />
                </div>
            </div>
          </div>

          {/* TAB 3: SYSTEMS (Replaced SEO) */}
          <div className={`tab-pane ${activeTab === "systems" ? "active" : ""}`}>
            <div className="content-left">
              <h3>Scalable <span className="white-text">Atomic Systems</span></h3>
              <p>
                <strong>How it works:</strong> Spaghetti code kills growth. I build strictly typed (TypeScript) Component Libraries based on Atomic Design principles. This ensures every button, card, and input is reusable and consistent.
              </p>
              <div className="strategy-box">
                <p>
                  <strong>Engineering Strategy:</strong> I implement Storybook to document UI components in isolation, allowing for rapid prototyping and ensuring your brand system never breaks as the app grows.
                </p>
              </div>
            </div>
            <div className="content-right">
                <div className="image-wrapper">
                  <img src="https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp" alt="Design System Architecture" />
                </div>
            </div>
          </div>

          {/* TAB 4: UI/UX */}
          <div className={`tab-pane ${activeTab === "uiux" ? "active" : ""}`}>
            <div className="content-left">
              <h3>Physics-Based <span className="white-text">Interaction</span></h3>
              <p>
                <strong>How it works:</strong> Static pages feel dead. I use libraries like Framer Motion to add fluid, physics-based animations that guide the user's eye without blocking the main browser thread.
              </p>
              <div className="strategy-box">
                <p>
                  <strong>Engineering Strategy:</strong> I build responsive layouts that adapt to any viewport, ensuring 60fps animations on mobile devices while maintaining full WCAG accessibility compliance.
                </p>
              </div>
            </div>
            <div className="content-right">
                <div className="image-wrapper">
                    <img src="https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp" alt="Interactive UI" />
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};