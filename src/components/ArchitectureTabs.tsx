"use client";
import React, { useState } from "react";

export const ArchitectureTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  // Data for the tabs and content to keep JSX clean
  const tabData = [
    {
      id: 1,
      label: "Components",
      icon: "fa-layer-group",
      items: [
        {
          title: "Atomic Design Implementation",
          desc: "Build scalable UI libraries using atomic design principles. Isolate logic from presentation to ensure reusability across micro-frontends and reduce technical debt.",
        },
        {
          title: "Server Components & Hydration",
          desc: "Leverage Server-Side Rendering (SSR) and React Server Components to minimize hydration boundaries. Deliver interactive experiences faster by shipping less JavaScript.",
        },
      ],
      cta: "Scale Your UI Library",
      image: "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp",
      alt: "Component Architecture",
    },
    {
      id: 2,
      label: "Performance",
      icon: "fa-bolt",
      items: [
        {
          title: "Core Web Vitals Optimization",
          desc: "Automate LCP and CLS improvements through intelligent asset pre-loading, font subsetting, and critical CSS extraction strategies embedded in the build process.",
        },
        {
          title: "Bundle Budgeting",
          desc: "Visualize dependency graphs and tree-shake unused modules automatically. Our tooling enforces performance budgets to prevent regression during pull requests.",
        },
      ],
      cta: "Optimize Performance",
      image: "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp",
      alt: "Performance Metrics",
    },
    {
      id: 3,
      label: "State",
      icon: "fa-database",
      items: [
        {
          title: "Global vs Server State",
          desc: "Decouple server cache from UI state using TanStack Query or similar tools. This separation ensures data consistency while keeping the client-side state predictable.",
        },
        {
          title: "Optimistic UI Updates",
          desc: "Implement optimistic mutations for immediate user feedback. Handle background synchronization and conflict resolution seamlessly without blocking user interaction.",
        },
      ],
      cta: "Manage App State",
      image: "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp",
      alt: "State Management",
    },
    {
      id: 4,
      label: "Styling",
      icon: "fa-css3-alt",
      isBrandIcon: true, // font-awesome brand icon
      items: [
        {
          title: "Tokenized Design Systems",
          desc: "Utilize modern CSS variables and design tokens to enforce consistency. Enable seamless dark mode switching and multi-brand theming from a centralized config.",
        },
        {
          title: "Scoped CSS Architecture",
          desc: "Eliminate style leakage with CSS Modules or Tailwind. Ensure type-safe styling that scales with your team size without creating specificity wars.",
        },
      ],
      cta: "Build Your System",
      image: "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp",
      alt: "CSS Styling",
    },
    {
      id: 5,
      label: "CI/CD",
      icon: "fa-code-branch",
      items: [
        {
          title: "Next-Gen Bundlers",
          desc: "Transition to Vite or Turbopack for instant Hot Module Replacement (HMR). Drastically reduce local development wait times and accelerate CI/CD pipeline builds.",
        },
        {
          title: "Automated Testing Pipelines",
          desc: "Integrate End-to-End (Playwright) and Unit Testing (Vitest) directly into the build pipeline. Catch regressions before they reach production.",
        },
      ],
      cta: "Automate Deployments",
      image: "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp",
      alt: "CI/CD Pipeline",
    },
  ];

  return (
    <section className="fe-section-wrapper">
      {/* Load Fonts & Icons */}
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      {/* --- SCOPED CSS --- */}
      <style dangerouslySetInnerHTML={{ __html: `
        .fe-section-wrapper {
            --fe-white: #FFFFFF;
            --fe-blue-brand: #3F5CE0;       /* Cobalt/Electric Main */
            --fe-highlight-1: #3C66A6;      /* Scratch Layer 1 */
            --fe-highlight-2: #2E476E;      /* Scratch Layer 2 */
            --fe-gray-inactive: #94a3b8;    /* Inactive tab color */
            --fe-font-main: 'Roboto Flex', sans-serif;
            
            font-family: var(--fe-font-main);
            color: var(--fe-white);
            box-sizing: border-box;
            padding: 80px 20px;
            width: 100%;
            max-width: 1400px;
            margin: 0 auto;
        }

        .fe-section-wrapper *, 
        .fe-section-wrapper *::before, 
        .fe-section-wrapper *::after {
            box-sizing: border-box;
        }

        /* 1. HEADER SECTION */
        .fe-header-group {
            text-align: center;
            margin-bottom: 50px;
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
        }

        .fe-subtitle {
            display: block;
            color: var(--fe-white);
            font-size: 0.875rem;
            font-weight: 700;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 16px;
        }

        .fe-main-heading {
            font-weight: 900;
            font-size: clamp(2rem, 4vw, 3rem);
            line-height: 1.1;
            color: var(--fe-blue-brand);
            margin: 0;
        }

        .highlight-scratch {
            color: var(--fe-white);
            position: relative;
            z-index: 1;
            padding: 0 5px;
            display: inline-block;
            background-image: 
                linear-gradient(to right, var(--fe-highlight-1), var(--fe-highlight-1)),
                linear-gradient(to right, var(--fe-highlight-2), var(--fe-highlight-2));
            background-size: 100% 12px, 100% 8px;
            background-position: 0 85%, 0 95%;
            background-repeat: no-repeat;
        }

        /* 2. HORIZONTAL TAB NAVIGATION */
        .fe-tabs-nav {
            margin-bottom: 60px;
            width: 100%;
        }

        .fe-tabs-nav ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
        }

        .fe-tab-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 140px;
            padding: 20px 10px;
            cursor: pointer;
            border-radius: 16px;
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
            text-align: center;
            background: transparent;
        }

        .fe-tab-item:not(.active):hover {
            background: rgba(255, 255, 255, 0.05);
            transform: translateY(-5px);
        }

        .fe-tab-icon {
            font-size: 32px;
            margin-bottom: 12px;
            color: var(--fe-gray-inactive);
            transition: color 0.3s ease;
        }

        .fe-tab-text {
            font-size: 0.95rem;
            font-weight: 500;
            color: var(--fe-gray-inactive);
            transition: color 0.3s ease;
        }

        /* ACTIVE STATE */
        .fe-tab-item.active {
            background-color: var(--fe-blue-brand);
            box-shadow: 0 10px 30px rgba(63, 92, 224, 0.4);
            transform: translateY(-5px);
        }

        .fe-tab-item.active .fe-tab-icon,
        .fe-tab-item.active .fe-tab-text {
            color: #FFFFFF;
            font-weight: 700;
        }

        /* 3. CONTENT PANELS */
        .fe-content-area {
            position: relative;
            min-height: 500px;
        }

        .fe-panel {
            display: none;
            animation: fadeIn 0.5s ease forwards;
        }

        .fe-panel.active {
            display: block;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .fe-panel-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 50px;
            align-items: center;
        }

        @media (min-width: 992px) {
            .fe-panel-grid {
                grid-template-columns: 1fr 1fr;
            }
        }

        .fe-text-col {
            padding-right: 20px;
        }

        .fe-detail-item {
            margin-bottom: 40px;
            padding-bottom: 30px;
            border-bottom: 1px solid rgba(132, 185, 245, 0.2);
        }

        .fe-detail-item:last-of-type {
            border-bottom: none;
        }

        .fe-detail-header {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 15px;
        }

        .fe-check-icon {
            color: var(--fe-blue-brand);
            font-size: 1.4rem;
            flex-shrink: 0;
        }

        .fe-h3 {
            color: var(--fe-white);
            font-weight: 900;
            font-size: clamp(1.1rem, 1.2vw, 1.4rem);
            margin: 0;
        }

        .fe-p {
            color: var(--fe-white);
            font-weight: 400;
            font-size: 1.1rem;
            line-height: 1.7;
            margin: 0;
            opacity: 0.9;
        }

        .fe-cta-wrapper {
            margin-top: 20px;
        }

        .fe-cta-button {
            display: inline-block;
            background-color: var(--fe-blue-brand);
            color: #FFFFFF;
            padding: 14px 32px;
            border-radius: 50px;
            font-weight: 700;
            font-size: 1rem;
            text-decoration: none;
            transition: all 0.2s ease;
            box-shadow: 0 4px 15px rgba(63, 92, 224, 0.3);
            cursor: pointer;
        }

        .fe-cta-button:hover {
            transform: translateY(-2px);
            background-color: #2E476E;
            box-shadow: 0 8px 25px rgba(63, 92, 224, 0.4);
        }

        .fe-image-wrapper {
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0,0,0,0.5);
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: #0E1623;
        }

        .fe-image-wrapper img {
            width: 100%;
            height: auto;
            display: block;
        }
      `}} />

      {/* --- HEADER --- */}
      <div className="fe-header-group">
        <span className="fe-subtitle">Front-End Architecture</span>
        <h2 className="fe-main-heading">
          Custom AI Agents for <br />
          <span className="highlight-scratch">Every Engineering Stack</span>
        </h2>
      </div>

      {/* --- TABS NAVIGATION --- */}
      <div className="fe-tabs-nav">
        <ul>
          {tabData.map((tab) => (
            <li
              key={tab.id}
              className={`fe-tab-item ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <i className={`${tab.isBrandIcon ? "fa-brands" : "fa-solid"} ${tab.icon} fe-tab-icon`}></i>
              <span className="fe-tab-text">{tab.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* --- CONTENT AREA --- */}
      <div className="fe-content-area">
        {tabData.map((tab) => (
          <div
            key={tab.id}
            id={`fe-tab-${tab.id}`}
            className={`fe-panel ${activeTab === tab.id ? "active" : ""}`}
          >
            <div className="fe-panel-grid">
              {/* Text Column */}
              <div className="fe-text-col">
                {tab.items.map((item, index) => (
                  <div className="fe-detail-item" key={index}>
                    <div className="fe-detail-header">
                      <i className="fa-solid fa-circle-check fe-check-icon"></i>
                      <h3 className="fe-h3">{item.title}</h3>
                    </div>
                    <p className="fe-p">{item.desc}</p>
                  </div>
                ))}

                <div className="fe-cta-wrapper">
                  <a href="#" className="fe-cta-button">
                    {tab.cta}
                  </a>
                </div>
              </div>

              {/* Image Column */}
              <div className="fe-img-col">
                <div className="fe-image-wrapper">
                  <img src={tab.image} alt={tab.alt} loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArchitectureTabs;