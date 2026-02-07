import React from "react";

export const GeoOverlapSection = () => {
  return (
    <section 
      className="py-24 px-5 relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center max-w-[900px] mx-auto mb-16">
          {/* Subtitle: Pure White */}
          <span className="block text-[#FFFFFF] font-bold text-sm uppercase tracking-widest mb-4">
            System Evolution
          </span>

          {/* H2: Cobalt Base, White Highlight, Double Scratch */}
          <h2 className="text-[#3F5CE0] text-[clamp(2.0rem,4vw,3.5rem)] font-black leading-[1.1] tracking-tight mb-5">
            Legacy Frontends Are Dead.<br />
            Here is 
            <span className="relative inline-block text-[#FFFFFF] px-2 ml-2 z-10">
              The Modern Stack.
              {/* Double Scratch Layer 1 (Darker Blue) */}
              <span className="absolute left-0 right-0 bottom-2 h-2.5 bg-[#2E476E] -z-20 -skew-x-12 rounded-sm"></span>
              {/* Double Scratch Layer 2 (Lighter Blue) */}
              <span className="absolute left-0 right-0 bottom-[6px] h-2.5 bg-[#3C66A6] -z-10 -skew-x-12 rounded-sm shadow-[0_2px_0_rgba(255,255,255,0.1)]"></span>
            </span>
          </h2>
        </div>

        {/* --- CARDS WRAPPER --- */}
        <div className="flex flex-col lg:flex-row items-center justify-center relative py-10 mb-10">
          
          {/* --- LEFT CARD (The Problem) --- */}
          {/* Using dark gradient and borders */}
          <div className="w-full lg:w-[55%] bg-gradient-to-br from-[#1a2436] to-[#0E1623] rounded-3xl p-10 flex flex-col gap-6 border border-white/10 shadow-2xl z-20 lg:-mr-[5%] translate-y-0 lg:translate-y-[15px]">
            <div>
              {/* H3: Cobalt Base, White Emphasis */}
              <h3 className="text-[#3F5CE0] text-[clamp(1.5rem,2vw,1.8rem)] font-black mb-2 leading-tight tracking-tight">
                Users Demand <span className="text-[#FFFFFF]">Instant Interactions</span>
              </h3>
              <p className="text-[1.1rem] leading-relaxed text-[#FFFFFF] font-normal">
                Modern users don't wait for page reloads. If your application feels slow or clunky due to legacy jQuery or heavy PHP themes, you are losing engagement.
              </p>
            </div>

            <div>
              <h3 className="text-[#3F5CE0] text-[clamp(1.5rem,2vw,1.8rem)] font-black mb-2 leading-tight tracking-tight">
                Technical Debt is <span className="text-[#FFFFFF]">Costing You Money.</span>
              </h3>
              <p className="text-[1.1rem] leading-relaxed text-[#FFFFFF] font-normal mb-4">
                Your competitors are shipping features faster using React and Next.js. Meanwhile, your legacy codebase is stuck in maintenance mode.
              </p>
              
              <ul className="space-y-2 mb-4">
                {[
                  "“Why is the Largest Contentful Paint (LCP) over 2.5s?”", 
                  "“It takes weeks to update a simple UI component.”", 
                  "“Our mobile experience is unresponsive and buggy.”"
                ].map((item, i) => (
                  <li key={i} className="relative pl-7 text-[1.1rem] text-[#FFFFFF]">
                    <span className="absolute left-0 text-[#F43F5E] font-black text-sm top-1">✕</span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-[1.1rem] leading-relaxed text-[#FFFFFF] font-normal">
                Without a component-driven architecture, scaling is impossible. You need a shift in engineering strategy.
              </p>
            </div>
          </div>

          {/* --- RIGHT CARD (The Solution) --- */}
          {/* Dark solid BG to stand out */}
          <div className="w-full lg:w-[50%] bg-[#1a2436] rounded-3xl p-10 lg:pl-[8%] border border-white/10 shadow-xl z-10 translate-y-0 lg:translate-y-[50px] mt-8 lg:mt-0">
            
            <h3 className="text-[#3F5CE0] text-[clamp(1.5rem,2vw,1.8rem)] font-black mb-2 leading-tight tracking-tight">
              We Build <span className="text-[#FFFFFF]">Atomic Systems</span>
            </h3>
            
            <p className="text-[1.1rem] leading-relaxed text-[#FFFFFF] font-normal mb-8">
              With WPFEDev, we engineer Type-Safe, Headless architectures. We treat your frontend as a product, not just a theme.
            </p>

            {/* Stats Grid - Adjusted colors for dark mode */}
            <div className="grid grid-cols-2 mt-4 border-t border-white/10 border-dashed">
              
              {/* Stat 1 */}
              <div className="p-5 flex flex-col justify-center gap-1 border-r border-b border-white/10 border-dashed">
                <span className="text-[2.2rem] font-black text-[#3F5CE0] leading-none">99+</span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FFFFFF]">Performance Score</span>
              </div>

              {/* Stat 2 (Logo Badge) */}
              <div className="p-5 flex flex-col items-center justify-center border-b border-white/10 border-dashed">
                <div className="bg-[#3F5CE0] text-white font-black text-xl px-4 py-1 rounded shadow-md shadow-[#3F5CE0]/30">
                  WPFEDev
                </div>
              </div>

              {/* Stat 3 (Graph) */}
              <div className="p-5 flex flex-col justify-center gap-1 border-r border-white/10 border-dashed">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FFFFFF] mb-1">Velocity Growth</span>
                <div 
                  className="w-full h-10 mt-1 bg-gradient-to-t from-[#3F5CE0]/40 to-transparent border-t-2 border-[#3F5CE0]"
                  style={{ clipPath: "polygon(0% 100%, 10% 70%, 25% 85%, 40% 50%, 60% 65%, 80% 30%, 100% 10%, 100% 100%)" }}
                ></div>
              </div>

              {/* Stat 4 */}
              <div className="p-5 flex flex-col justify-center gap-1">
                <span className="text-[2.2rem] font-black text-[#3F5CE0] leading-none">40%</span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FFFFFF]">Less Dev Time</span>
              </div>

            </div>
          </div>

        </div>

        {/* --- FOOTER CTA --- */}
        <div className="text-center mt-12 lg:mt-24">
          <a href="#" className="inline-block bg-[#3F5CE0] text-white px-10 py-4 rounded-lg font-black uppercase tracking-wide hover:-translate-y-1 hover:bg-[#344dbd] transition-all duration-200 shadow-lg shadow-[#3F5CE0]/30">
            Audit My Architecture
          </a>
        </div>

      </div>
    </section>
  );
};