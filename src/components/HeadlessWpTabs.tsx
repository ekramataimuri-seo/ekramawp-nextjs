"use client";

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

// --- DATA DICTIONARY ---
const TABS_DATA: Record<string, any> = {
  // 1. Original Headless WordPress Data
  "/headless-wordpress-front-end": {
    header: "The Ultimate Decoupled Stack",
    description: "Discover the modern components that build lightning-fast, secure, and scalable Headless WordPress architectures.",
    tabs: [
      {
        id: 'nextjs',
        title: 'Next.js Frontend',
        iconUrl: 'https://admin.wpfedev.com/wp-content/uploads/2026/02/headless-icon-1.png',
        features: [
          {
            title: 'Server-Side Rendering & SSG',
            desc: 'Achieve sub-second load times and flawless Core Web Vitals. Next.js pre-renders your WordPress content into static HTML, serving it instantly to users while maintaining excellent SEO scores.'
          },
          {
            title: 'Component-Driven UI',
            desc: 'Break free from rigid PHP templates. We build bespoke, highly interactive React components that provide an app-like experience for your visitors without the limitations of traditional themes.'
          }
        ],
        buttonText: 'Explore Next.js Development',
        image: 'https://admin.wpfedev.com/wp-content/uploads/2026/04/task_01knfc1gsafcs9ndd14agxfz3j_1775411260_img_0.webp'
      },
      {
        id: 'vercel',
        title: 'Vercel Deployment',
        iconUrl: 'https://admin.wpfedev.com/wp-content/uploads/2026/02/headless-icon-3.png',
        features: [
          {
            title: 'Global Edge Network',
            desc: 'Deploy your Next.js application to Vercel’s Edge Network. Your content is cached and served from servers geographically closest to your users, virtually eliminating latency.'
          },
          {
            title: 'Instant Preview URLs',
            desc: 'Every code change generates a live preview URL. Your team can review frontend changes, layout updates, and new features in a production-like environment before going live.'
          }
        ],
        buttonText: 'Scale with Vercel',
        image: 'https://admin.wpfedev.com/wp-content/uploads/2026/04/task_01knfc1gsafcs9ndd14agxfz3j_1775411260_img_0.webp'
      },
      {
        id: 'github',
        title: 'GitHub Workflows',
        iconUrl: 'https://admin.wpfedev.com/wp-content/uploads/2026/02/headless-icon-4.png',
        features: [
          {
            title: 'Automated CI/CD Pipelines',
            desc: 'Say goodbye to manual FTP uploads. Pushing code to GitHub automatically triggers a build and deployment process on Vercel, ensuring zero-downtime releases.'
          },
          {
            title: 'Version Controlled Infrastructure',
            desc: 'Your entire frontend design and logic are stored in Git. This allows for precise version tracking, easy rollbacks, and seamless collaboration among multiple developers.'
          }
        ],
        buttonText: 'Optimize Your Pipeline',
        image: 'https://admin.wpfedev.com/wp-content/uploads/2026/04/task_01knfc1gsafcs9ndd14agxfz3j_1775411260_img_0.webp'
      },
      {
        id: 'wordpress',
        title: 'WPGraphQL Backend',
        iconUrl: 'https://admin.wpfedev.com/wp-content/uploads/2026/02/headless-icon-5.png',
        features: [
          {
            title: 'Familiar Authoring Experience',
            desc: 'Keep the WordPress dashboard your marketing team already loves. They continue to publish posts and manage ACF fields exactly as before, with no retraining required.'
          },
          {
            title: 'Efficient Data Querying',
            desc: 'Replace bloated REST API payloads with WPGraphQL. Fetch exactly the data your Next.js frontend needs—nothing more, nothing less—drastically reducing payload sizes and load times.'
          }
        ],
        buttonText: 'Decouple Your CMS',
        image: 'https://admin.wpfedev.com/wp-content/uploads/2026/04/task_01knfc1gsafcs9ndd14agxfz3j_1775411260_img_0.webp'
      },
      {
        id: 'security',
        title: 'Zero-Trust Security',
        iconUrl: 'https://admin.wpfedev.com/wp-content/uploads/2026/02/headless-icon-6.png',
        features: [
          {
            title: 'Hidden WordPress Admin',
            desc: 'By decoupling your site, your WordPress backend and database are completely removed from the public internet, eliminating risks from traditional plugin exploits and brute-force login attacks.'
          },
          {
            title: 'Enterprise-Grade DDoS Protection',
            desc: 'The public-facing Next.js frontend is served as static files on Vercel’s globally distributed CDN, inherently protecting your site from massive traffic spikes and denial-of-service attacks.'
          }
        ],
        buttonText: 'Secure Your Infrastructure',
        image: 'https://admin.wpfedev.com/wp-content/uploads/2026/04/task_01knfc1gsafcs9ndd14agxfz3j_1775411260_img_0.webp'
      }
    ]
  },

  // 2. Web App Front End Data
  "/wep-app-front-end": {
    header: "Web Application Architecture",
    description: "Explore the core technical components that power highly interactive, state-driven enterprise web applications.",
    tabs: [
      {
        id: 'react-ecosystem',
        title: 'React Ecosystem',
        iconUrl: 'https://admin.wpfedev.com/wp-content/uploads/2026/02/headless-icon-1.png',
        features: [
          {
            title: 'Component-Driven Engineering',
            desc: 'We architect modular, isolated UI components that enforce design consistency across massive applications. This approach significantly reduces technical debt and accelerates feature rollouts.'
          },
          {
            title: 'Hybrid Next.js Rendering',
            desc: 'Combining Server-Side Rendering (SSR) for dynamic, real-time user data with Static Site Generation (SSG) to ensure complex application layouts load instantaneously.'
          }
        ],
        buttonText: 'Build with React',
        image: 'https://admin.wpfedev.com/wp-content/uploads/2026/04/task_01knfc1gsafcs9ndd14agxfz3j_1775411260_img_0.webp'
      },
      {
        id: 'state-management',
        title: 'State Management',
        iconUrl: 'https://admin.wpfedev.com/wp-content/uploads/2026/02/headless-icon-3.png',
        features: [
          {
            title: 'Global Client State',
            desc: 'Complex apps require robust data handling. We utilize modern libraries like Zustand and Redux Toolkit to manage persistent user sessions, shopping carts, and multi-step UI wizards flawlessly.'
          },
          {
            title: 'Asynchronous Server State',
            desc: 'Implementing advanced data-fetching layers with React Query to handle background refetching, intelligent caching, and optimistic UI updates for a native-app-like feel.'
          }
        ],
        buttonText: 'Manage Application State',
        image: 'https://admin.wpfedev.com/wp-content/uploads/2026/04/task_01knfc1gsafcs9ndd14agxfz3j_1775411260_img_0.webp'
      },
      {
        id: 'api-integration',
        title: 'API Integrations',
        iconUrl: 'https://admin.wpfedev.com/wp-content/uploads/2026/02/headless-icon-4.png',
        features: [
          {
            title: 'Microservices & GraphQL',
            desc: 'Web apps act as the central nervous system of your business. We build resilient integration layers to securely query and mutate data across CRMs, payment gateways, and internal databases.'
          },
          {
            title: 'Real-Time WebSockets',
            desc: 'Enable live, bi-directional data flow for features like instant messaging, live trading dashboards, or collaborative editing tools without forcing manual browser refreshes.'
          }
        ],
        buttonText: 'Connect Your Data',
        image: 'https://admin.wpfedev.com/wp-content/uploads/2026/04/task_01knfc1gsafcs9ndd14agxfz3j_1775411260_img_0.webp'
      },
      {
        id: 'app-performance',
        title: 'App Performance',
        iconUrl: 'https://admin.wpfedev.com/wp-content/uploads/2026/02/headless-icon-5.png',
        features: [
          {
            title: 'Dynamic Code Splitting',
            desc: 'We utilize dynamic imports to break down massive JavaScript bundles into smaller chunks. The browser only downloads the specific code necessary for the current view, drastically improving Time to Interactive (TTI).'
          },
          {
            title: 'Advanced React Memoization',
            desc: 'Preventing costly and redundant React component re-renders through strategic memoization techniques, ensuring that heavy data grids and complex charts remain perfectly responsive.'
          }
        ],
        buttonText: 'Optimize Load Times',
        image: 'https://admin.wpfedev.com/wp-content/uploads/2026/04/task_01knfc1gsafcs9ndd14agxfz3j_1775411260_img_0.webp'
      },
      {
        id: 'testing-qa',
        title: 'Rigorous QA',
        iconUrl: 'https://admin.wpfedev.com/wp-content/uploads/2026/02/headless-icon-6.png',
        features: [
          {
            title: 'End-to-End Automation',
            desc: 'Automating the testing of critical user journeys with frameworks like Cypress or Playwright. We simulate real user interactions across different browsers to guarantee application stability.'
          },
          {
            title: 'Component Unit Testing',
            desc: 'Isolating and verifying the behavioral logic of individual UI components using Jest and React Testing Library, ensuring they render correctly under all possible data states and edge cases.'
          }
        ],
        buttonText: 'Ensure Reliability',
        image: 'https://admin.wpfedev.com/wp-content/uploads/2026/04/task_01knfc1gsafcs9ndd14agxfz3j_1775411260_img_0.webp'
      }
    ]
  }
};

// Helper function to color the last word of the title emerald
const renderEmeraldTitle = (text: string) => {
  const words = text.split(" ");
  const lastWord = words.pop();
  return (
    <>
      {words.join(" ")} <span className="text-emerald-500">{lastWord}</span>
    </>
  );
};

// --- COMPONENT ---
export const HeadlessWpTabs = () => {
  const pathname = usePathname() || "/";
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  
  const pageData = TABS_DATA[normalizedPath] || TABS_DATA["/headless-wordpress-front-end"];

  const [activeTab, setActiveTab] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleTabClick = (index: number) => {
    if (activeTab === index) return;
    
    setIsFading(true);
    setTimeout(() => {
      setActiveTab(index);
      setIsFading(false);
    }, 250);
  };

  if (!pageData.tabs || pageData.tabs.length === 0) return null;
  const currentTabInfo = pageData.tabs[activeTab];

  return (
    <section className="w-full pt-2 pb-16 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 relative z-10 items-center justify-center text-center">
        
        {/* Title & Body */}
        <h2 className="mb-[15px] text-white">
          {renderEmeraldTitle(pageData.header)}
        </h2>
        {pageData.description && (
          <p className="mb-[50px] text-white/75 max-w-[700px] mx-auto text-[18px]">
            {pageData.description}
          </p>
        )}

        {/* Tabs Container */}
        <div className="flex justify-center lg:justify-between items-start mb-[60px] gap-[15px] flex-wrap">
          {pageData.tabs.map((tab: any, index: number) => (
            <div 
              key={tab.id}
              className="flex-1 min-w-[120px] flex flex-col items-center text-center cursor-pointer p-[10px] transition-all duration-300 relative group"
              onClick={() => handleTabClick(index)}
            >
              <img 
                src={tab.iconUrl} 
                alt={tab.title} 
                className={`w-[60px] h-[60px] object-contain mb-[12px] transition-all duration-300 filter brightness-0 invert ${activeTab === index ? 'opacity-100' : 'opacity-60 group-hover:opacity-80'}`} 
              />
              <span className={`text-[15px] transition-colors duration-300 ${activeTab === index ? 'text-white' : 'text-white/50 group-hover:text-white/80'}`}>
                {tab.title}
              </span>
            </div>
          ))}
        </div>

        {/* Content Area */}
        <div className={`flex flex-col lg:flex-row gap-[60px] items-center text-left transition-opacity duration-250 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
          
          {/* Left Text / Features */}
          <div className="flex-1 w-full lg:max-w-[600px]">
            {currentTabInfo.features.map((feature: any, idx: number) => (
              <div className="mb-[30px] pb-[30px] border-b border-white/10 last:border-b-0 last:pb-0" key={idx}>
                <div className="flex items-center gap-[15px] mb-[10px]">
                  <svg className="shrink-0 w-[28px] h-[28px] text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div className="text-[22px] text-white">
                    {feature.title}
                  </div>
                </div>
                <div className="text-[16px] text-white/75 leading-[1.6] mt-[10px] md:mt-0 ml-0 md:ml-[43px]">
                  {feature.desc}
                </div>
              </div>
            ))}
            
            <button className="bg-emerald-500 text-black text-[16px] px-[32px] py-[16px] rounded-[30px] border-none cursor-pointer mt-[30px] transition-all duration-200 hover:bg-emerald-400 hover:-translate-y-[2px] shadow-[0_4px_6px_rgba(0,0,0,0.05)]">
              {currentTabInfo.buttonText}
            </button>
          </div>
          
          {/* Right Image */}
          <div className="flex-1 flex justify-center relative w-full">
            <img 
              src={currentTabInfo.image} 
              alt={currentTabInfo.title} 
              className="relative z-[2] w-full object-contain" 
            />
          </div>

        </div>
      </div>
    </section>
  );
};