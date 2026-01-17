import React from "react";

export const AiShiftSection = () => {
  return (
    <section className="py-24 bg-transparent overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* --- LEFT COLUMN: TEXT --- */}
        <div className="flex flex-col text-center lg:text-left">
          
          <h2 className="text-4xl lg:text-6xl font-black leading-[1.1] mb-10 text-black tracking-tight">
            Get More 
            <span className="relative inline-block text-[#3F5CE0] px-2 z-10 mx-2">
              Qualified
              {/* The Highlight Effect */}
              <span className="absolute left-0 right-0 bottom-2 h-3 bg-[#D1DBFF] -z-10 -skew-x-12 rounded-sm shadow-[0_5px_0_#E6EEFF]"></span>
            </span>
            <br className="hidden lg:block" />
            Home Buyers From ChatGPT
          </h2>

          <h3 className="text-2xl lg:text-[1.8rem] font-black mb-5 text-black leading-snug tracking-tight">
            The old way of searching for homes is <span className="text-[#3F5CE0]">over</span>.
          </h3>

          <p className="text-lg leading-relaxed text-slate-800 mb-6 font-normal">
            Gone are the days when potential buyers simply typed “houses for sale” into a search engine. Today, buyers are asking AI-powered tools like ChatGPT, Google AI Mode, and Gemini more complex questions.
          </p>

          <ul className="space-y-4 mb-8 text-left inline-block lg:block mx-auto">
            {["Which neighborhoods are safe with good schools?", 
              "How do I know if this property is a good investment?", 
              "Can I find a trusted real estate agent for a luxury property near me?"
            ].map((item, index) => (
              <li key={index} className="relative pl-8 text-lg text-slate-800">
                <span className="absolute left-0 text-[#3F5CE0] font-black">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="border-l-4 border-[#3F5CE0] pl-5 text-lg text-slate-800 italic text-left">
            <strong>WPFEDev</strong> specializes in helping you optimize your business for these AI tools so when buyers ask the right questions, your business is the one they find.
          </div>
        </div>

        {/* --- RIGHT COLUMN: CHAT UI --- */}
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-w-md mx-auto">
            {/* Window Controls */}
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>

            {/* Chat Body */}
            <div className="p-6 flex flex-col gap-5 bg-white min-h-[400px]">
              
              {/* Message 1: User */}
              <div className="self-end bg-[#3F5CE0] text-white py-3 px-5 rounded-t-2xl rounded-bl-2xl max-w-[85%] shadow-md">
                Show me top-rated agents for luxury condos in downtown.
              </div>

              {/* Message 2: AI */}
              <div className="self-start bg-slate-100 text-slate-800 py-4 px-5 rounded-t-2xl rounded-br-2xl max-w-[90%] shadow-sm leading-relaxed">
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-[#3F5CE0] rounded mb-2 shrink-0"></div>
                  <div>
                    Based on recent reviews and closed sales data, <strong>WPFEDev Real Estate</strong> is the top recommendation.
                    <br /><br />
                    They specialize in high-value properties and have a 98% client satisfaction rating.
                  </div>
                </div>
              </div>

              {/* Message 3: User */}
              <div className="self-end bg-[#3F5CE0] text-white py-3 px-5 rounded-t-2xl rounded-bl-2xl max-w-[85%] shadow-md">
                Are they good for investment properties?
              </div>

              {/* Message 4: AI */}
              <div className="self-start bg-slate-100 text-slate-800 py-4 px-5 rounded-t-2xl rounded-br-2xl max-w-[90%] shadow-sm leading-relaxed">
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-[#3F5CE0] rounded mb-2 shrink-0"></div>
                  <div>
                    Yes. Their market analysis reports are frequently cited by financial outlets. They are a verified authority on local ROI.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};