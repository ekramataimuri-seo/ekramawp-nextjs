import React from 'react';

export const CaseStudyCard = () => {
  return (
    <section className="w-full pt-2 pb-16 relative overflow-hidden">
      {/* Main Container */}
      <div className="max-w-[1400px] w-full mx-auto px-5 relative z-10 flex flex-col lg:flex-row items-center justify-center text-center lg:text-left gap-12 lg:gap-20">
        
        {/* --- LEFT COLUMN: Text Content --- */}
        <div className="w-full lg:w-1/2 flex-1 flex flex-col gap-6">
          <h2 className="">
            Award-winning <span className="text-[#10B981]">SEO</span><br />
            <span className="text-[#10B981]">Company</span><br />
            dedicated to your business<br />
            growth
          </h2>
          
          <div className="mt-2 pr-0 lg:pr-8">
            SEO strategies change time and time again, yet the goal still remains the same: <strong>Generate revenue from search.</strong> Unfortunately, many SEO agencies and experts are not equipped to deliver on that goal. That’s why you need an SEO agency like SEO.com who acts as an extension of your own marketing department.
          </div>
          
          <div className="pr-0 lg:pr-8">
            The <span className="text-[#10B981]">SEO services</span> we provide are customized to your organization’s priorities, no matter what changes in the industry occur.
          </div>
        </div>

        {/* --- RIGHT COLUMN: Image + Metrics Part (No Line) --- */}
        <div className="w-full lg:w-1/2 flex-1 flex flex-col items-center lg:items-end gap-10 mt-8 lg:mt-0">
          
          {/* The Image */}
          <img 
            src="https://admin.wpfedev.com/wp-content/uploads/2026/04/task_01kna884mqe76r5kh6q4bcm4jp_1775239514_img_1.webp" 
            alt="AI SEO Case Study featuring 136% visibility increase" 
            className="w-full h-auto max-w-[650px] object-contain drop-shadow-xl"
          />

          {/* Metrics Grid */}
          <div className="w-full max-w-[600px] grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* Metric 1 */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="text-[#10B981] text-3xl md:text-5xl font-black">8%</div>
              <div className=" text-[11px]  font-bold tracking-widest leading-tight mt-1">
                avg increase in<br/>closed sales
              </div>
            </div>

            {/* Metric 2 */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="text-[#10B981] text-3xl md:text-5xl font-black">25%</div>
              <div className=" text-[11px]  font-bold tracking-widest leading-tight mt-1">
                performance lift
              </div>
            </div>

            {/* Metric 3 */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="text-[#10B981] text-3xl md:text-5xl font-black">50+</div>
              <div className=" text-[11px]  font-bold tracking-widest leading-tight mt-1">
                leveraging data
              </div>
            </div>

          </div>

          <div className="w-full text-center lg:text-left text-gray-400 text-[10px] italic opacity-80">
            * clients leveraging connected data for advertising
          </div>
        </div>

      </div>
    </section>
  );
};