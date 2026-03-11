"use client";
import React from "react";

export const GeoOverlapSection = () => {
  return (
    <section className="pt-10 pb-0 px-5 min-h-[5vh] flex items-center relative overflow-hidden">
      
      <div className="max-w-[1200px] w-full mx-auto flex flex-col relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center max-w-[900px] mx-auto mb-8">
          {/* Removed hardcoded fonts. Inherits global H1 */}
          <h1 className="mb-6">
            Legacy Frontends Are Dead.<br />
            Here is <span className="text-emerald-400">The Modern Stack.</span>
          </h1>
        </div>

        {/* --- CONTENT WRAPPER --- */}
        <div className="flex flex-col lg:flex-row items-start justify-between relative gap-12 lg:gap-16 mb-10">
          
          {/* --- LEFT COLUMN --- */}
          <div className="w-full lg:w-[45%] flex flex-col z-20">
            <div>
              {/* Changed to H2 and removed hardcoded fonts */}
              <h3 className="mb-2">
                Users Demand <span className="text-emerald-400">Instant Interactions</span>
              </h3>
              {/* Removed hardcoded fonts. Inherits global P */}
              <p className="mb-6 lg:mb-10 max-w-[600px] mx-auto lg:mx-0">
                Modern users refuse to wait for page reloads. If your application feels sluggish due to heavy legacy frameworks or bloated themes, you are actively losing user engagement and search engine rankings.
              </p>
            </div>

            <div>
              {/* Changed to H2 and removed hardcoded fonts */}
              <h3 className="mb-2">
                Technical Debt is <span className="text-emerald-400">Costing You Money.</span>
              </h3>
              <p className="mb-6 max-w-[600px] mx-auto lg:mx-0">
                Your competitors are shipping features rapidly using React and Next.js. Meanwhile, your legacy codebase forces your engineering team to spend all their time in maintenance mode rather than innovating.
              </p>
              
              <ul className="space-y-4 lg:space-y-6 mb-6 lg:mb-10 max-w-[600px] mx-auto lg:mx-0">
                {/* Cleaned up List Items */}
                <li className="relative pl-7">
                  <span className="absolute left-0 text-emerald-400 font-bold top-0">→</span>
                  <strong className="text-white">Excessive paint times:</strong> Legacy monolithic themes load massive, render-blocking scripts before displaying any text, pushing your Largest Contentful Paint (LCP) well past the 2.5-second threshold.
                </li>
                <li className="relative pl-7">
                  <span className="absolute left-0 text-emerald-400 text-lg font-bold  top-0">→</span>
                  <strong className="text-white">Tangled dependencies:</strong> In traditional setups, changing a single button's style can unpredictably break unrelated pages, extending quality assurance cycles from days to weeks.
                </li>
                <li className="relative pl-7">
                  <span className="absolute left-0 text-emerald-400 font-bold  top-0">→</span>
                  <strong className="text-white">Client-side bottlenecks:</strong> Older single-page applications force mobile phone processors to parse megabytes of JavaScript before the site becomes usable, draining battery and frustrating users.
                </li>
              </ul>

              <p className="mb-2 lg:mb-10 max-w-[600px] mx-auto lg:mx-0">
                Without a component-driven architecture, scaling your digital presence is nearly impossible. You need a complete shift in engineering strategy.
              </p>
            </div>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="w-full lg:w-[55%] z-10">
            
            {/* Changed to H2 and removed hardcoded fonts */}
            <h3 className="mb-2 text-center lg:text-left">
              We Build <span className="text-emerald-400">Atomic Systems</span>
            </h3>
            
            <p className="mb-8 max-w-[600px] mx-auto lg:mx-0 text-center lg:text-left">
              We replace outdated code with type-safe, headless architectures. Here are the core pillars of our front-end engineering methodology.
            </p>

            {/* --- 8 DETAILED TABS / CARDS --- */}
            {/* Maintained micro-typography (text-[13px]) so they fit in the grid layout, but stripped line heights and weights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-emerald-900/40 border border-emerald-500/20 rounded-lg p-4 transition-all duration-300 hover:bg-emerald-800/50">
                <h4 className="text-emerald-300 font-bold mb-1">Server-side rendering</h4>
                <p className="text-white/80">
                  Delivers fully populated HTML directly from the server, improving initial load speeds and ensuring optimal indexing for search engines.
                </p>
              </div>

              <div className="bg-emerald-900/40 border border-emerald-500/20 rounded-lg p-4 transition-all duration-300 hover:bg-emerald-800/50">
                <h4 className="text-emerald-300 font-bold mb-1">Static site generation</h4>
                <p className="text-white/80">
                  Pre-renders critical pages at build time to provide lightning-fast content delivery through global CDNs without expensive database hits.
                </p>
              </div>

              <div className="bg-emerald-900/40 border border-emerald-500/20 rounded-lg p-4 transition-all duration-300 hover:bg-emerald-800/50">
                <h4 className="text-emerald-300 font-bold mb-1">Incremental regeneration</h4>
                <p className="text-white/80">
                  Updates static content seamlessly in the background without needing a full site rebuild, keeping your dynamic data entirely fresh.
                </p>
              </div>

              <div className="bg-emerald-900/40 border border-emerald-500/20 rounded-lg p-4 transition-all duration-300 hover:bg-emerald-800/50">
                <h4 className="text-emerald-300 font-bold mb-1">Edge computing middleware</h4>
                <p className="text-white/80">
                  Executes routing, authentication, and personalized logic at the CDN level, reducing server latency to single-digit milliseconds globally.
                </p>
              </div>

              <div className="bg-emerald-900/40 border border-emerald-500/20 rounded-lg p-4 transition-all duration-300 hover:bg-emerald-800/50">
                <h4 className="text-emerald-300 font-bold mb-1">Atomic component design</h4>
                <p className="text-white/80">
                  Constructs interfaces using modular, reusable React components, ensuring high design consistency and drastically lower maintenance overhead.
                </p>
              </div>

              <div className="bg-emerald-900/40 border border-emerald-500/20 rounded-lg p-4 transition-all duration-300 hover:bg-emerald-800/50">
                <h4 className="text-emerald-300 font-bold mb-1">Core web vitals optimization</h4>
                <p className="text-white/80">
                  Strictly monitors and optimizes Largest Contentful Paint and entirely eliminates Cumulative Layout Shift for a flawless user experience.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* --- FOOTER CTA --- */}
        <div className="text-center mt-6 lg:mt-10">
          <a href="#audit" className="inline-block border border-white/40 text-white px-10 py-4 hover:bg-white hover:text-black transition-all duration-300 rounded-sm">
            Audit my architecture
          </a>
        </div>

      </div>
    </section>
  );
};