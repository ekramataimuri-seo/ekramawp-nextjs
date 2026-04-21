"use client";
import React, { useState, useEffect } from 'react';

// 1. STATIC DATA
const SLIDE_DATA = [
  {
    title: "Predictive AI Modeling",
    image: "https://www.webfx.com/wp-content/uploads/2023/12/CompanyTrackerFX.png",
    desc: "Leverage machine learning to predict user behavior and optimize paths.",
    list: [
      "Churn prediction metrics based on user activity",
      "Dynamic content personalization for engagement",
      "Automated A/B testing logic to improve conversions"
    ]
  },
  {
    title: "Company Identification Insights",
    image: "https://www.webfx.com/wp-content/uploads/2023/12/CompanyTrackerFX.png",
    desc: "Identify companies coming to your site for better insights, sales enablement, and targeted campaigns.",
    list: [
      "Identify what companies are on your site, before they fill out a form",
      "Notification capabilities to give you an advantage in the sales process",
      "User journey tracking to enable the sales team with prospect’s interests"
    ]
  },
  {
    title: "Targeted Email Communication",
    image: "https://www.webfx.com/wp-content/uploads/2023/12/EmailMarketingFX.png",
    desc: "Communicate with customers through updates, newsletters, and drip campaigns.",
    list: [
      "Send updates and drip campaigns to current and prospective customers",
      "Monitor the engagement of every email in the reporting dashboard",
      "Use first-party enabled customer data to create audiences"
    ]
  },
  {
    title: "Unified Digital Marketing Data",
    image: "https://www.webfx.com/wp-content/uploads/2024/01/IntegrationsFX.png",
    desc: "Connect disjointed data and leverage it for more effective digital marketing efforts.",
    list: [
      "Closed-loop reporting on customers and leads",
      "Push conversion data to advertising platforms",
      "Reach leads from your CRM with targeted ad campaigns"
    ]
  }
];

const INFINITE_TRACK = [...SLIDE_DATA.slice(-2), ...SLIDE_DATA, ...SLIDE_DATA.slice(0, 2)];

export const Leftcolumntab = () => {
  const [currentIndex, setCurrentIndex] = useState(2); 
  const [isTransitioning, setIsTransitioning] = useState(true);

  // JS CONSTANTS
  const cardWidth = 420; 
  const gap = 30;

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  useEffect(() => {
    if (currentIndex >= INFINITE_TRACK.length - 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(2); 
      }, 500);
      return () => clearTimeout(timer);
    }
    if (!isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isTransitioning]);

  return (
    <section className="w-full pt-16 pb-24 relative z-10">

      <div className="max-w-[1400px] mx-auto px-5 relative z-10 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-[clamp(40px,6vw,100px)] w-full">
        
        {/* CAROUSEL ON LEFT */}
        <div className="shrink-0 grow-0 relative w-[100vw] lg:w-[calc(100%-450px)] max-w-[850px]">
          {/* Edge shadow gradients completely removed. Overflow hidden handles the edge cleanly. */}
          <div className="w-full overflow-hidden py-[80px] px-4 lg:px-0 relative">
            
            <div 
              className="flex justify-start will-change-transform items-stretch h-full"
              style={{ 
                gap: `${gap}px`,
                transform: `translateX(calc(-${currentIndex * (cardWidth + gap)}px + 20px))`,
                transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
              }}
            >
              {INFINITE_TRACK.map((slide, idx) => {
                const isActive = idx === currentIndex;
                
                return (
                <div 
                  className={`w-[320px] sm:w-[380px] lg:w-[420px] bg-gradient-to-br from-emerald-400/10 to-teal-600/10 border border-emerald-500/20 rounded-[24px] shrink-0 relative px-8 pb-8 pt-[180px] flex flex-col shadow-[0_25px_50px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-500 ${isActive ? 'scale-100 opacity-100 z-20' : 'scale-95 opacity-50 z-10'}`} 
                  key={idx}
                >
                  <div className={`w-[90%] bg-zinc-900 p-2 rounded-xl absolute -top-[60px] left-1/2 -translate-x-1/2 shadow-[0_20px_40px_rgba(16,185,129,0.15)] z-20 border border-white/5 transition-transform duration-500 ${isActive ? 'translate-y-0' : 'translate-y-4'}`}>
                    <img src={slide.image} className="w-full rounded-lg block" alt={slide.title} />
                  </div>
                  
                  <div className="overflow-y-auto text-white grow pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-emerald-500/50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
                    <h3 className="mb-3 text-[24px] font-bold text-white tracking-tight leading-tight">{slide.title}</h3>
                    <p className="text-white/70 text-[15px] mb-6 leading-relaxed font-light">{slide.desc}</p>
                    <ul className="list-none p-0 m-0 space-y-3">
                      {slide.list.map((item, i) => (
                        <li key={i} className="text-white/90 relative pl-6 text-[14px] leading-snug">
                          <svg className="absolute left-0 top-[2px] w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )})}
            </div>
          </div>
        </div>

        {/* STATIC CONTENT ON RIGHT */}
        <div className="w-full lg:w-[400px] shrink-0 flex flex-col items-center lg:items-start z-20">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Proprietary Software
          </div>

          <h2 className="mb-6 text-[42px] lg:text-[48px] font-extrabold text-white leading-[1.1] tracking-tight">
            Data-Driven <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600">Lead Nurture</span>
          </h2>
          
          <p className="text-white/70 text-[17px] leading-relaxed mb-8 font-light">
            RevenueCloudFX is our proprietary marketing software built to enable website strategies via precise audience segmentation.
            <br/><br/>
            Identify high-value companies engaging with your site to unlock powerful insights, empower sales enablement, and launch hyper-targeted campaigns seamlessly integrated into your existing workflow.
          </p>
          
          <button 
            className="group flex items-center justify-between w-full sm:w-auto gap-6 bg-emerald-500 text-black px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] mb-12"
            onClick={handleNext}
          >
            <span>Explore Features</span>
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black/10 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>

          <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8 w-full">
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-[32px] font-black text-white tracking-tighter">14<span className="text-emerald-500">%</span></span>
              <span className="text-white/50 text-[11px] font-bold uppercase tracking-wider mt-1 text-center lg:text-left">Avg. Sales<br/>Increase</span>
            </div>
            <div className="flex flex-col items-center lg:items-start border-l border-white/10 pl-6">
              <span className="text-[32px] font-black text-white tracking-tighter"><span className="text-emerald-500">$</span>500<span className="text-emerald-500">K</span></span>
              <span className="text-white/50 text-[11px] font-bold uppercase tracking-wider mt-1 text-center lg:text-left">Built-In<br/>Value</span>
            </div>
            <div className="flex flex-col items-center lg:items-start border-l border-white/10 pl-6">
              <span className="text-[32px] font-black text-white tracking-tighter">1<span className="text-emerald-500">B+</span></span>
              <span className="text-white/50 text-[11px] font-bold uppercase tracking-wider mt-1 text-center lg:text-left">Data Points<br/>Tracked</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};