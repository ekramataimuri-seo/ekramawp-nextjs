"use client";
import React from 'react';

export const ThreeColumnBar = () => {
  return (
    <section className="w-full pt-2 pb-16 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 relative z-10 items-center justify-center text-center">
        
        {/* Heading Section */}
        <h2 className="mb-[20px]">
          Unlock a <span className="text-[#10B981]">10% increase</span> in organic traffic with our content marketing firm
        </h2>
        
        {/* Title Body Content */}
        <div className="max-w-[800px] mx-auto mb-[70px]">
          Our performance-driven approach ensures that your content doesn't just look good—it drives real, measurable revenue. Compare how our dedicated expertise stacks up against in-house teams and standard agencies.
        </div>

        {/* Features Comparison Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] items-start text-left">
          
          {/* Column 1: WPFEDEV (Transparent) */}
          <div className="flex flex-col h-full p-[35px_25px] bg-transparent">
            <div className="min-h-[60px] mb-[25px] flex items-center">
              <div className="text-[26px] font-black tracking-[-1px] text-white">
                WPFEDEV<span className="text-[#10B981]">.com</span>
              </div>
            </div>
            <ul className="list-none p-0 m-0 grow">
              <li className="flex items-start mb-[25px]">
                <div className="shrink-0 w-[24px] h-[24px] rounded-full flex items-center justify-center font-black text-[11px] bg-[#10B981]/15 text-[#10B981]">✔</div>
                <p className="text-white/90 text-[15px] ml-[16px] leading-[1.6] -mt-[2px]">Dedicated account manager, interfacing with a team of 500+ digital marketing experts</p>
              </li>
              <li className="flex items-start mb-[25px]">
                <div className="shrink-0 w-[24px] h-[24px] rounded-full flex items-center justify-center font-black text-[11px] bg-[#10B981]/15 text-[#10B981]">✔</div>
                <p className="text-white/90 text-[15px] ml-[16px] leading-[1.6] -mt-[2px]">RevenueCloudFX access for optimizing, measuring, and reporting ROI</p>
              </li>
              <li className="flex items-start">
                <div className="shrink-0 w-[24px] h-[24px] rounded-full flex items-center justify-center font-black text-[11px] bg-[#10B981]/15 text-[#10B981]">✔</div>
                <p className="text-white/90 text-[15px] ml-[16px] leading-[1.6] -mt-[2px]">In-depth analysis of your business goals, industry, and competitors</p>
              </li>
            </ul>
          </div>

          {/* Column 2: In-House (EMERALD GRADIENT + SHADOW) */}
          <div className="flex flex-col h-full rounded-[20px] p-[35px_25px] bg-gradient-to-br from-[#10B981] to-[#064e3b] shadow-[0_20px_50px_rgba(16,185,129,0.3)]">
            <div className="min-h-[60px] mb-[25px] flex items-center">
              {/* Added font-bold */}
              <p className="text-white font-bold">In-House Marketing</p>
            </div>
            <ul className="list-none p-0 m-0 grow">
              <li className="flex items-start mb-[25px]">
                <div className="shrink-0 w-[24px] h-[24px] rounded-full flex items-center justify-center font-black text-[10px] bg-white/20 text-white">✘</div>
                <p className="text-white/90 text-[15px] ml-[16px] leading-[1.6] -mt-[2px]">One or two team members trying to keep up with fast-paced marketing advancements</p>
              </li>
              <li className="flex items-start mb-[25px]">
                <div className="shrink-0 w-[24px] h-[24px] rounded-full flex items-center justify-center font-black text-[10px] bg-white/20 text-white">✘</div>
                <p className="text-white/90 text-[15px] ml-[16px] leading-[1.6] -mt-[2px]">Analytics suite for measuring and improving campaign performance</p>
              </li>
              <li className="flex items-start">
                <div className="shrink-0 w-[24px] h-[24px] rounded-full flex items-center justify-center font-black text-[11px] bg-white/20 text-white">✔</div>
                <p className="text-white/90 text-[15px] ml-[16px] leading-[1.6] -mt-[2px]">S.M.A.R.T. goals, but limited resources needed to execute</p>
              </li>
            </ul>
          </div>

          {/* Column 3: Typical Agency (Transparent) */}
          <div className="flex flex-col h-full p-[35px_25px] bg-transparent">
            <div className="min-h-[60px] mb-[25px] flex items-center">
              {/* Added font-bold */}
              <p className="font-bold">Typical Marketing Agency</p>
            </div>
            <ul className="list-none p-0 m-0 grow">
              <li className="flex items-start mb-[25px]">
                <div className="shrink-0 w-[24px] h-[24px] rounded-full flex items-center justify-center font-black text-[11px] bg-[#10B981]/15 text-[#10B981]">✔</div>
                <p className="text-white/90 text-[15px] ml-[16px] leading-[1.6] -mt-[2px]">Dedicated account manager responsible for strategy, but will need your help implementing solutions</p>
              </li>
              <li className="flex items-start mb-[25px]">
                <div className="shrink-0 w-[24px] h-[24px] rounded-full flex items-center justify-center font-black text-[10px] bg-[#cf2e2e]/15 text-[#cf2e2e]">✘</div>
                <p className="text-white/90 text-[15px] ml-[16px] leading-[1.6] -mt-[2px]">Third-party tracking and analysis with subscription costs passed to you</p>
              </li>
              <li className="flex items-start">
                <div className="shrink-0 w-[24px] h-[24px] rounded-full flex items-center justify-center font-black text-[10px] bg-[#cf2e2e]/15 text-[#cf2e2e]">✘</div>
                <p className="text-white/90 text-[15px] ml-[16px] leading-[1.6] -mt-[2px]">Cookie-cutter checklists and solutions for optimizing your campaigns</p>
              </li>
            </ul>
          </div>

          {/* Column 4: Standard Agency (EMERALD GRADIENT + SHADOW) */}
          <div className="flex flex-col h-full rounded-[20px] p-[35px_25px] bg-gradient-to-br from-[#10B981] to-[#064e3b] shadow-[0_20px_50px_rgba(16,185,129,0.3)]">
            <div className="min-h-[60px] mb-[25px] flex items-center">
              {/* Swapped class for className to match React standards and kept it bold */}
              <p className="text-white font-bold">Standard Agency</p>
            </div>
            <ul className="list-none p-0 m-0 grow">
              <li className="flex items-start mb-[25px]">
                <div className="shrink-0 w-[24px] h-[24px] rounded-full flex items-center justify-center font-black text-[11px] bg-white/20 text-white">✔</div>
                <p className="text-white/90 text-[15px] ml-[16px] leading-[1.6] -mt-[2px]">Dedicated account manager responsible for strategy, but will need your help implementing solutions</p>
              </li>
              <li className="flex items-start mb-[25px]">
                <div className="shrink-0 w-[24px] h-[24px] rounded-full flex items-center justify-center font-black text-[10px] bg-white/20 text-white">✘</div>
                <p className="text-white/90 text-[15px] ml-[16px] leading-[1.6] -mt-[2px]">Third-party tracking and analysis with subscription costs passed to you</p>
              </li>
              <li className="flex items-start">
                <div className="shrink-0 w-[24px] h-[24px] rounded-full flex items-center justify-center font-black text-[10px] bg-white/20 text-white">✘</div>
                <p className="text-white/90 text-[15px] ml-[16px] leading-[1.6] -mt-[2px]">Cookie-cutter checklists and solutions for optimizing your campaigns</p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};