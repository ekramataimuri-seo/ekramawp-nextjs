"use client";
import React, { useState } from 'react';

const tabsData = [
  {
    id: 'core',
    label: 'Core Features',
    subtitle: 'FRONTEND MASTERY',
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
    subtitle: 'SCALABLE FOUNDATIONS',
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
    subtitle: 'SPEED MATTERS',
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
    subtitle: 'STRICT TYPING',
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
    <div className="fe-component-wrapper">
      <style dangerouslySetInnerHTML={{ __html: `
        /* --- Component Scoped Variables --- */
        .fe-component-wrapper {
            --fe-white: #FFFFFF;
            --fe-blue-main: #3F5CE0;
            --fe-highlight-1: #3C66A6;
            --fe-highlight-2: #2E476E;
            --fe-tab-bg-hover: rgba(63, 92, 224, 0.1);
            --fe-tab-border: rgba(255, 255, 255, 0.1);
        }

        /* --- Layout Grid --- */
        .fe-component-wrapper {
            max-width: 1200px;
            margin: 4rem auto;
            display: grid;
            grid-template-columns: 280px 1fr;
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            overflow: hidden;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            min-height: 800px;
        }

        /* --- Left Sidebar (Tabs) --- */
        .fe-sidebar {
            display: flex;
            flex-direction: column;
            border-right: 1px solid var(--fe-tab-border);
            padding: 2rem 0;
            background: rgba(0, 0, 0, 0.2);
        }

        .fe-tab-btn {
            background: transparent;
            border: none;
            text-align: left;
            padding: 1.25rem 2rem;
            cursor: pointer;
            color: rgba(255, 255, 255, 0.6);
            font-family: inherit;
            font-weight: 700;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            position: relative;
        }

        .fe-tab-btn:hover {
            color: var(--fe-white);
            background-color: var(--fe-tab-bg-hover);
        }

        .fe-tab-btn.active {
            color: var(--fe-blue-main);
            background-color: rgba(63, 92, 224, 0.08);
        }

        .fe-tab-btn.active::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 4px;
            background-color: var(--fe-blue-main);
            box-shadow: 0 0 15px var(--fe-blue-main);
        }

        /* --- Right Content Area --- */
        .fe-content-panel {
            padding: 3rem 4rem;
            position: relative;
        }

        /* --- Tab Pane Animation --- */
        .fe-tab-pane {
            animation: fadeIn 0.4s ease-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* --- Typography --- */
        .fe-subtitle {
            text-transform: uppercase;
            letter-spacing: 2px;
            font-size: 0.85rem;
            font-weight: 700;
            color: var(--fe-white);
            margin-bottom: 1rem;
            opacity: 0.9;
            display: block;
        }

        .fe-heading-main {
            font-weight: 900;
            font-size: clamp(1.5rem, 3vw, 2.5rem);
            color: var(--fe-blue-main);
            line-height: 1.2;
            margin-bottom: 1.5rem;
            max-width: 800px;
        }

        .highlight-scratch {
            color: var(--fe-white);
            position: relative;
            z-index: 1;
            padding: 0 8px;
            display: inline-block;
            background-image: 
                linear-gradient(to right, var(--fe-highlight-1), var(--fe-highlight-1)),
                linear-gradient(to right, var(--fe-highlight-2), var(--fe-highlight-2));
            background-size: 100% 12px, 100% 8px;
            background-position: 0 85%, 0 95%;
            background-repeat: no-repeat;
            transform: skewX(-2deg); 
        }

        .fe-intro-text {
            color: var(--fe-white);
            font-size: 1.1rem;
            font-weight: 400;
            line-height: 1.7;
            margin-bottom: 3rem;
            max-width: 700px;
            opacity: 0.95;
        }

        /* --- Feature Grid (3 Items) --- */
        .fe-features-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
            margin-bottom: 3rem;
        }

        .fe-feature-item {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
        }

        .fe-feature-icon {
            width: 32px;
            height: 32px;
            margin-bottom: 0.5rem;
            color: #FF7A00;
        }

        .fe-feature-title {
            color: var(--fe-white);
            font-weight: 900;
            font-size: 1.1rem;
            margin: 0;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .fe-feature-title::after {
            content: '›';
            font-size: 1.4rem;
            font-weight: 400;
            color: var(--fe-blue-main);
            transition: transform 0.2s;
        }
        
        .fe-feature-item:hover .fe-feature-title::after {
            transform: translateX(4px);
        }

        .fe-feature-desc {
            color: var(--fe-white);
            font-size: 0.9rem;
            line-height: 1.5;
            opacity: 0.8;
            margin: 0;
        }

        /* --- Image Styling --- */
        .fe-image-container {
            width: 100%;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
            border: 1px solid rgba(255, 255, 255, 0.1);
            position: relative;
            margin-top: auto; 
        }

        .fe-dashboard-img {
            width: 100%;
            height: auto;
            display: block;
            transition: transform 0.5s ease;
        }
        
        .fe-image-container:hover .fe-dashboard-img {
            transform: scale(1.02);
        }

        /* --- Responsive --- */
        @media (max-width: 900px) {
            .fe-component-wrapper {
                grid-template-columns: 1fr;
            }
            .fe-sidebar {
                flex-direction: row;
                overflow-x: auto;
                border-right: none;
                border-bottom: 1px solid var(--fe-tab-border);
                padding: 0;
            }
            .fe-tab-btn {
                white-space: nowrap;
                padding: 1rem 1.5rem;
            }
            .fe-tab-btn.active::before {
                width: 100%;
                height: 3px;
                top: auto;
                bottom: 0;
            }
            .fe-features-grid {
                grid-template-columns: 1fr; 
            }
            .fe-content-panel {
                padding: 2rem;
            }
        }
      `}} />

      {/* Navigation Sidebar */}
      <nav className="fe-sidebar">
        {tabsData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTabId(tab.id)}
            className={`fe-tab-btn ${activeTabId === tab.id ? 'active' : ''}`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Main Content Area */}
      <main className="fe-content-panel">
        <div key={activeTabId} className="fe-tab-pane">
          <span className="fe-subtitle">{activeContent.subtitle}</span>
          
          <h2 className="fe-heading-main">
            {activeContent.titlePre} <span className="highlight-scratch">{activeContent.highlight}</span>
          </h2>
          
          <p className="fe-intro-text">
            {activeContent.intro}
          </p>

          <div className="fe-features-grid">
            {activeContent.features.map((feature, idx) => (
              <div key={idx} className="fe-feature-item">
                <svg className="fe-feature-icon" fill="currentColor" viewBox="0 0 24 24">
                  {feature.icon}
                </svg>
                <h3 className="fe-feature-title">{feature.title}</h3>
                <p className="fe-feature-desc">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="fe-image-container">
            <img 
              src="https://admin.wpfedev.com/wp-content/uploads/2026/02/WPsample2.webp" 
              alt="Dashboard" 
              className="fe-dashboard-img" 
              loading="lazy"
            />
          </div>
        </div>
      </main>
    </div>
  );
};