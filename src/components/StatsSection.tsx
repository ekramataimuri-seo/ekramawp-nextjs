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
      <div className="max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">
        
        {/* Left Side: Content */}
        <div className="flex flex-col">
          <h1 className="text-white font-black text-[clamp(2rem,4vw,5rem)] leading-[1.1] tracking-normal mb-6">
            Performance Metrics You <br className="hidden md:block" />
            <span className="text-emerald-400">Cannot Ignore</span>
          </h1>

          <p className="text-white/90 text-[clamp(0.83rem,1.2vw,1.23rem)] font-normal leading-[1.6] mb-10 max-w-[600px] mx-auto lg:mx-0">
Our data-driven approach ensures your digital infrastructure is optimized for maximum speed, high conversion, and long-term search engine dominance. By replacing guesswork with concrete, evidence-based insights, we transform your digital presence into a measurable, high-performance asset. 
          </p>
        </div>

        {/* Right Side: Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              /* Emerald Green Background Boxes for each item */
              className="bg-emerald-600 flex flex-col items-start p-3 md:p-8 rounded-2xl transition-transform duration-300 hover:scale-[1.03]"
            >
              <div className="mb-2">
                {/* H3 remains White as requested */}
                <h3 className="text-white font-black text-[clamp(2.5rem,4vw,4rem)] leading-none tracking-tighter">
                  {stat.value}
                </h3>
              </div>
              <p className="text-white/90 text-[clamp(0.83rem,1.1vw,1.1rem)] font-normal leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};