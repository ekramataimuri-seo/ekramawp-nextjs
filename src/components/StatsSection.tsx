"use client";

import React from "react";

export const StatsSection = () => {
  const stats = [
    {
      value: "53%",
      desc: "of mobile users abandon a site if it takes longer than 3 seconds to load.",
    },
    {
      value: "7%",
      desc: "Drop in conversion rates for every 100-millisecond delay in load time.",
    },
    {
      value: "100%",
      desc: "Performance score on Lighthouse correlates with higher SEO rankings.",
    },
    {
      value: "400%",
      desc: "Return on Investment (ROI) for every dollar spent on UX engineering.",
    },
  ];

  return (
    <section className="relative pt-10 pb-0 px-5 min-h-[5vh] flex items-center overflow-hidden">
      {/* Main Container */}
{/* Changed gap-16 to gap-8 for mobile */}
<div className="max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center relative z-10">        
        {/* Left Side: Content */}
        <div className="flex flex-col">
          <h1 className="text-white font-black text-[clamp(2rem,4vw,5rem)] leading-[1.1] tracking-normal mb-6">
            Performance Metrics You <br className="hidden md:block" />
            <span className="text-emerald-400">Cannot Ignore</span>
          </h1>

<p className="text-white/90 text-[clamp(0.83rem,1.2vw,1.23rem)] font-normal leading-[1.6] mb-0 lg:mb-2 max-w-[600px] mx-auto lg:mx-0">
Our data-driven approach ensures your digital infrastructure is optimized for maximum speed, high conversion, and long-term search engine dominance. By replacing guesswork with concrete, evidence-based insights, we transform your digital presence into a measurable, high-performance asset. 
          </p>
        </div>

{/* Right Side: Stats Grid */}
        {/* Changed grid-cols-1 to grid-cols-2 so squares fit nicely on mobile */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              /* Added aspect-square and justify-center for perfect mobile squares */
              className="bg-emerald-600 flex flex-col justify-center items-start p-4 md:p-8 rounded-2xl transition-transform duration-300 hover:scale-[1.03] aspect-square lg:aspect-auto lg:min-h-[220px]"
            >
              <div className="mb-2">
                {/* Slightly reduced minimum text size (2rem) to ensure it fits in mobile squares */}
                <h3 className="text-white font-black text-[clamp(2rem,5vw,4rem)] leading-none tracking-tighter">
                  {stat.value}
                </h3>
              </div>
              {/* Slightly reduced minimum text size (0.75rem) for the description to fit nicely */}
              <p className="text-white/90 text-[clamp(0.75rem,1.5vw,1.1rem)] font-normal leading-snug lg:leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};