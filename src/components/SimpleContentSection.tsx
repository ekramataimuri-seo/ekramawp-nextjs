"use client";
import React from 'react';

// --- SVG Icons for Infographic ---
const GlobeIcon = ({className}) => <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>;
const LightbulbIcon = ({className}) => <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.829 1.58-2.148a5.25 5.25 0 10-7.66 0c.922.319 1.58 1.165 1.58 2.148v.192z" /></svg>;
const TargetIcon = ({className}) => <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const MoneyIcon = ({className}) => <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const GearIcon = ({className}) => <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.79l.75-1.3m7.5-12.98l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.79l-.75-1.3M7.5 4.21l-.75-1.3M19.5 17.785l-1.15-.964M5.106 6.215l-1.15-.964M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const ChartIcon = ({className}) => <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>;

const nodesData = [
  { id: '01', title: 'Ideation', desc: 'Conceptualize and refine core application logic.', icon: <LightbulbIcon className="w-5 h-5 md:w-6 md:h-6 text-black" /> },
  { id: '02', title: 'Targeting', desc: 'Identify user demographics and specific needs.', icon: <TargetIcon className="w-5 h-5 md:w-6 md:h-6 text-black" /> },
  { id: '03', title: 'Investment', desc: 'Allocate resources for maximum design ROI.', icon: <MoneyIcon className="w-5 h-5 md:w-6 md:h-6 text-black" /> },
  { id: '04', title: 'Development', desc: 'Build scalable architectures with Next.js.', icon: <GearIcon className="w-5 h-5 md:w-6 md:h-6 text-black" /> },
  { id: '05', title: 'Growth', desc: 'Scale systems dynamically for peak traffic.', icon: <ChartIcon className="w-5 h-5 md:w-6 md:h-6 text-black" /> }
];

export const SimpleContentSection = () => {
  return (
    <section className="w-full pt-2 pb-16 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 relative z-10 items-center justify-center text-center">
        
        {/* --- TOP CENTERED HEADER --- */}
        <div className="flex flex-col items-center text-center max-w-[800px] mx-auto mb-1 lg:mb-1">
          <h2 className="text-white mb-6">
            Component-Driven<br />
            <span className="text-emerald-500">Systems That Scale</span>
          </h2>
          
          <p className="text-white/70 text-[18px]">
            We move beyond simple page building to engineer robust, atomic design systems. By leveraging the advanced rendering capabilities of modern React and Next.js, we ensure your enterprise application is highly modular, deeply maintainable, and built for instantaneous user interactions with absolutely zero technical debt.
          </p>
        </div>

        {/* --- MAIN GRID LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12 items-center text-left">
          
          {/* --- LEFT COLUMN: FEATURES & STATS (Spans 5 cols) --- */}
          <div className="flex flex-col lg:col-span-5 h-full justify-center">
            
            <div className="flex flex-col gap-8 mb-1">
              <div className="flex gap-5 items-start group">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center transition-all duration-300 group-hover:bg-emerald-500/20 group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white mb-2 text-sm">Atomic Design Implementation</h3>
                  <p className="text-[16px] text-white/60">We rigorously isolate UI logic into reusable atoms, molecules, and organisms, guaranteeing absolute visual consistency and preventing code duplication.</p>
                </div>
              </div>

              <div className="flex gap-5 items-start group">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center transition-all duration-300 group-hover:bg-emerald-500/20 group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white mb-2 text-sm">State Management Optimization</h3>
                  <p className="text-[16px] text-white/60">Implementing efficient data flow strategies. We eliminate unnecessary React re-renders to ensure your interface reacts instantly to user input.</p>
                </div>
              </div>

              <div className="flex gap-5 items-start group">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center transition-all duration-300 group-hover:bg-emerald-500/20 group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white mb-2 text-sm">Performance First Metrics</h3>
                  <p className="text-[16px] text-white/60">Strict adherence to Core Web Vitals. We optimize JS bundles and prevent Cumulative Layout Shifts to guarantee sub-100ms interaction times.</p>
                </div>
              </div>
            </div>

            <button className="w-fit flex items-center gap-3 bg-emerald-500 text-black px-8 py-4 rounded-full text-[16px] transition-all duration-300 hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:-translate-y-1 mb-12">
              Explore Our Tech Stack
              <span className="text-xl">&rarr;</span>
            </button>

            <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div className="flex flex-col">
                <span className="text-[30px] lg:text-[36px] text-white mb-2">99<span className="text-emerald-500">%</span></span>
                <span className="text-[11px] lg:text-[12px] text-white/50">Lighthouse<br />Performance</span>
              </div>
              <div className="flex flex-col border-l border-white/10 pl-6">
                <span className="text-[30px] lg:text-[36px] text-white mb-2"><span className="text-emerald-500">&lt;</span>100<span className="text-emerald-500">ms</span></span>
                <span className="text-[11px] lg:text-[12px] text-white/50">Time to<br />Interactive</span>
              </div>
              <div className="flex flex-col border-l border-white/10 pl-6">
                <span className="text-[30px] lg:text-[36px] text-white mb-2">100<span className="text-emerald-500">%</span></span>
                <span className="text-[11px] lg:text-[12px] text-white/50">Type-Safe<br />Codebase</span>
              </div>
            </div>

          </div>

          {/* --- RIGHT COLUMN: TALL FLUID INFOGRAPHIC (Spans 7 cols) --- */}
          <div className="relative w-full h-full flex items-center justify-center lg:justify-end mt-8 lg:mt-0 z-10 lg:col-span-7">
            
            <div className="relative w-full h-[600px] lg:h-[750px] group">
              
              {/* Emerald Connecting Lines (Stretched vertically) */}
              <svg className="absolute left-[36%] w-[14%] top-[5%] h-[90%] z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M 0 50 Q 50 0 100 0" fill="none" stroke="#10b981" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
                <path d="M 0 50 Q 50 25 100 25" fill="none" stroke="#10b981" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
                <path d="M 0 50 L 100 50" fill="none" stroke="#10b981" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
                <path d="M 0 50 Q 50 75 100 75" fill="none" stroke="#10b981" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
                <path d="M 0 50 Q 50 100 100 100" fill="none" stroke="#10b981" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
              </svg>

              {/* Emerald Center Hub Circle */}
              <div className="absolute left-0 lg:left-[2%] top-[50%] -translate-y-1/2 w-[38%] max-w-[280px] aspect-square rounded-full bg-emerald-500 z-10 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.3)] ring-[12px] md:ring-[16px] ring-emerald-500/20 transition-transform duration-700 group-hover:scale-105">
                <GlobeIcon className="w-10 h-10 md:w-14 md:h-14 text-black mb-3" />
                <div className="text-black text-[14px] md:text-[18px] lg:text-[20px] text-center">
                  Business<br/>Infographic
                </div>
                {/* Dark Dotted Divider */}
                <div className="flex gap-[4px] my-4">
                  {[...Array(6)].map((_, i) => (
                    <span key={i} className="w-[4px] h-[4px] rounded-full bg-black/40"></span>
                  ))}
                </div>
                <p className="text-black/80 text-[10px] md:text-[12px] lg:text-[13px] text-center px-6 md:px-10">
                  Engineered for scale, speed, and absolute reliability.
                </p>
              </div>

              {/* Right Side Stacked Nodes (Distributed across full height) */}
              <div className="absolute left-[50%] w-[50%] top-[5%] h-[90%] flex flex-col justify-between z-10">
                {nodesData.map((node, i) => (
                  <div key={i} className="relative w-full flex items-center group/node">
                    
                    {/* Emerald Connecting Dot */}
                    <div className="absolute left-0 w-[10px] h-[10px] md:w-[12px] md:h-[12px] rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,1)] z-20 shrink-0 -translate-x-1/2 transition-transform duration-300 group-hover/node:scale-150 group-hover/node:bg-white"></div>
                    
                    {/* Emerald Icon Circle */}
                    <div className="absolute left-[20px] md:left-[30px] w-[46px] h-[46px] md:w-[56px] md:h-[56px] lg:w-[64px] lg:h-[64px] bg-emerald-500 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.6)] z-30 transition-transform duration-300 group-hover/node:scale-110">
                      {node.icon}
                    </div>

                    {/* Dark Arrow Card Container */}
                    <div className="ml-[40px] md:ml-[54px] lg:ml-[66px] w-[calc(100%-40px)] md:w-[calc(100%-54px)] lg:w-[calc(100%-66px)] relative flex items-center min-h-[60px] md:min-h-[80px] lg:min-h-[95px]">
                      
                      {/* Arrow Clipped Background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#18181b] to-[#27272a] shadow-2xl transition-all duration-300 group-hover/node:from-[#1f1f23] group-hover/node:to-[#2e2e33]"
                           style={{ clipPath: 'polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%)' }}>
                      </div>
                      
                      {/* Text Content */}
                      <div className="relative z-10 pl-[38px] md:pl-[48px] lg:pl-[56px] pr-[15%] py-3 flex flex-col justify-center">
                        <h4 className="text-white mb-[4px] transition-colors group-hover/node:text-emerald-400">
                          {node.title}
                        </h4>
                        <p className="text-white/60 text-[10px] md:text-[12px] lg:text-[13px]">
                          {node.desc}
                        </p>
                      </div>

                      {/* Floating Number Bubble */}
                      <div className="absolute right-[6%] -top-[12px] md:-top-[14px] w-[26px] h-[26px] md:w-[32px] md:h-[32px] rounded-full bg-zinc-900 border-[2px] border-emerald-500 flex items-center justify-center text-emerald-400 text-[11px] md:text-[13px] z-40 transition-colors duration-300 group-hover/node:bg-emerald-500 group-hover/node:text-black shadow-lg">
                        {node.id}
                      </div>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};