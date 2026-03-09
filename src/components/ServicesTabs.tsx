"use client";
import React, { useState } from "react";
import Image from "next/image";

const TABS = [
  { 
    id: "headless", 
    label: "Headless architecture", 
    title: "Decoupled Data Ecosystems",
    image: "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp", 

    bullets: [
      "Eliminate monolithic security vulnerabilities by fully isolating your frontend from the backend database and CMS.",
      "Distribute static assets globally via edge networks to ensure instant data retrieval regardless of user location.",
      "Empower marketing teams to publish seamlessly using Sanity or Contentful without requiring developer intervention.",
      "Future-proof your stack by allowing backend migrations without ever touching the user-facing interface."
    ]
  },
  { 
    id: "performance", 
    label: "Performance optimization", 
    title: "Sub-Second Rendering",
    image:"https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp", 
    bullets: [
      "Aggressively optimize Core Web Vitals, ensuring Largest Contentful Paint (LCP) triggers in under 1.2 seconds.",
      "Implement advanced code-splitting and dynamic imports to drastically reduce initial JavaScript payload sizes.",
      "Utilize Incremental Static Regeneration (ISR) to serve lightning-fast static pages that update data in the background.",
      "Optimize and format all media assets to modern WebP/AVIF standards with lazy-loading intersecting observers."
    ]
  },
  { 
    id: "systems", 
    label: "Design systems", 
    title: "Atomic Component Libraries",
    image:"https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp", 
    bullets: [
      "Construct strictly typed, modular UI libraries using React and TypeScript to eliminate redundant code.",
      "Implement Storybook environments to document components in isolation for rapid scaling and team onboarding.",
      "Enforce strict design token integration to ensure brand consistency across every digital touchpoint.",
      "Reduce QA testing cycles by reusing pre-tested, accessible, and highly resilient component blocks."
    ]
  },
  { 
    id: "uiux", 
    label: "Interactive experiences", 
    title: "Physics-Based UI/UX",
        image:"https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp", 

    bullets: [
      "Integrate Framer Motion to craft fluid, physics-based animations that guide the user journey intuitively.",
      "Engineer complex micro-interactions that provide immediate feedback without blocking the main execution thread.",
      "Maintain strict 60fps animation performance on mobile devices using hardware-accelerated CSS transforms.",
      "Ensure all dynamic interactions remain fully WCAG compliant with respectful reduced-motion fallbacks."
    ]
  },
  {
    id: "seo",
    label: "SEO architecture",
    title: "Programmatic Search Visibility",
        image:"https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp", 

    bullets: [
      "Leverage Next.js Server-Side Rendering (SSR) to deliver fully populated HTML directly to search engine crawlers.",
      "Automate dynamic schema markup generation for articles, products, and breadcrumbs to win rich snippets.",
      "Engineer dynamic sitemap generation and canonical URL routing to prevent duplicate content penalties.",
      "Optimize semantic HTML5 structure and heading hierarchies to maximize accessibility and crawl budgets."
    ]
  },
  {
    id: "edge",
    label: "Edge computing",
    title: "Global Middleware Logic",
        image:"https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp", 

    bullets: [
      "Execute routing, A/B testing, and authentication directly at the CDN edge to eliminate server round-trips.",
      "Deliver hyper-personalized content based on geolocation in single-digit milliseconds.",
      "Protect your application with edge-level rate limiting and bot mitigation before traffic hits your primary servers.",
      "Reduce cloud infrastructure costs by offloading heavy computational logic to distributed edge networks."
    ]
  },
  {
    id: "state",
    label: "State management",
    title: "Predictable Data Flow",
        image:"https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp", 

    bullets: [
      "Implement Zustand or Redux Toolkit for clean, predictable, and heavily optimized global state trees.",
      "Utilize React Query for robust server-state management, automated caching, and background data synchronization.",
      "Eliminate prop-drilling in deep component trees using strictly scoped React Context providers.",
      "Ensure seamless offline experiences and optimistic UI updates for instant perceived performance."
    ]
  },
  {
    id: "api",
    label: "API orchestration",
    title: "Seamless Integrations",
        image:"https://teamai.com/wp-content/uploads/2024/05/image8-prompts-v2.png", 

    bullets: [
      "Construct strongly typed GraphQL or REST API clients to ensure data consistency between the client and server.",
      "Orchestrate complex third-party webhooks (Stripe, Algolia, SendGrid) securely via Next.js server actions.",
      "Implement exponential backoff and retry logic for highly resilient network request handling.",
      "Secure all API routes with strict CORS policies, JWT validation, and environment variable encryption."
    ]
  }
];

export const ServicesTabs = () => {
  const [activeTab, setActiveTab] = useState("headless");

  return (
    <section className="pt-10 pb-0 px-5 min-h-[5vh] flex items-center relative overflow-hidden bg-transparent">
      
      <div className="w-full mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center w-full flex flex-col items-center justify-center mb-10">
          <h1 className="text-white font-black text-[clamp(2rem,4vw,5rem)] leading-[1.1] tracking-normal mb-6">
            I Engineer Digital Growth with <br />
            <span className="text-emerald-400">Modern Web Architecture</span>
          </h1>
        </div>

        {/* --- TAB NAVIGATION (No background or borders) --- */}
<div className="flex justify-center gap-4 lg:gap-6 mb-16 flex-wrap w-full mx-auto" role="tablist">
  {TABS.map((tab) => {
    const isActive = activeTab === tab.id;
    return (
<button 
  key={tab.id}
  role="tab"
  aria-selected={activeTab === tab.id}
  onClick={() => setActiveTab(tab.id)}
  /* - px-8: High left/right padding
     - py-2: Low vertical padding to keep it "small"
     - text-[15px]: Small font size
     - bg-emerald-600/80: Stable emerald green background
     - border-none: Ensures no border linings
  */
className={`px-8 py-1.5 text-[15px] font-normal rounded-lg bg-emerald-600/60 outline-none border-none ${    activeTab === tab.id 
      ? "text-white brightness-150" 
      : "text-white/100 hover:brightness-125"
  }`} 
>
  {tab.label}
</button>
    );
  })}
</div>

        {/* --- TAB CONTENT WRAPPER --- */}
        <div className="w-full">
          {TABS.map((tab) => activeTab === tab.id && (
            
            /* --- APPLIED REQUESTED GRID STRING --- */
            <div key={tab.id} className="max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">
              
              <div className="flex flex-col text-center lg:text-left">
                {/* H3 using white color, no emerald */}
                <h3 className="text-white text-[clamp(1.5rem,2vw,1.8rem)] font-black mb-6 leading-tight">
                  {tab.title}
                </h3>
                
                <ul className="w-full list-none p-0">
                  {tab.bullets.map((bullet, index) => (
                    <li key={index} className="relative pl-6 text-left">
                      <span className="absolute left-0 top-1 text-white font-bold">✓</span>
                      <p className="text-white/90 text-[clamp(0.83rem,1.2vw,1.23rem)] font-normal leading-[1.6] mb-10 max-w-[600px] mx-auto lg:mx-0">
                        {bullet}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative w-full aspect-[16/10] overflow-hidden bg-transparent">
  <Image 
    src={tab.image} // Changed from hardcoded URL to dynamic variable
    alt={tab.label} 
    fill
    unoptimized
    className="object-cover opacity-90 transition-opacity duration-500" // Added a smooth transition
    sizes="(max-width: 1024px) 100vw, 50vw"
  />
</div>

            </div>

          ))}
        </div>

      </div>
    </section>
  );
};