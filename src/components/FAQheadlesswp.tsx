"use client";
import React, { useState } from 'react';

// FAQ Data - Tailored to Headless WordPress
const headlessFaqData = [
  {
    question: "Why choose Headless WordPress over Traditional?",
    answer: "Headless architecture decouples the frontend from the backend. This allows us to use modern frameworks like Next.js for the UI, resulting in significantly faster load times, better security by hiding the WP Admin, and a richer, app-like user experience."
  },
  {
    question: "How do you handle SEO with Headless WP?",
    answer: "We use Static Site Generation (SSG) in Next.js to pre-render your WordPress content into static HTML. This ensures lightning-fast page speeds and guarantees that search engine crawlers see fully rendered content immediately, maximizing visibility."
  },
  {
    question: "Will my team still use the WordPress Dashboard?",
    answer: "Yes! Your marketing and editorial teams will continue to log into the familiar WordPress dashboard to publish posts, upload media, and manage Custom Fields. The only difference is how the content is displayed to the public."
  },
  {
    question: "What happens to my existing WordPress plugins?",
    answer: "Plugins that affect the visual frontend (like page builders or slider plugins) will no longer work, as we are completely replacing the frontend. However, backend plugins for SEO (like Yoast), custom fields (like ACF), and security will continue to function normally."
  }
];

export const FAQheadlesswp = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // 0 = First one open by default

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full pt-2 pb-16 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 relative z-10 items-center justify-center text-center">
        
        <div className="max-w-[900px] mx-auto text-left">
          
          {/* Header */}
          <div className="text-center mb-[60px]">
            <h2 className="text-white mb-4">
              Headless WordPress <span className="text-emerald-500">FAQ</span>
            </h2>
            <p className="text-white/70">
              Explore our most frequently asked questions to understand how a decoupled architecture can elevate your digital presence, enhance security, and dramatically improve site performance.
            </p>
          </div>

          {/* FAQ List */}
          <div>
            {headlessFaqData.map((item, index) => {
              const isActive = activeIndex === index;
              
              return (
                <div 
                  key={index} 
                  className={`rounded-xl mb-[16px] overflow-hidden transition-all duration-300 backdrop-blur-md border ${
                    isActive 
                      ? 'border-emerald-500 shadow-[0_0_25px_rgba(16,185,129,0.5)] bg-emerald-500/5' 
                      : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'
                  }`}
                >
                  <button 
                    className="w-full text-left bg-transparent border-none px-[30px] py-[24px] flex justify-between items-center cursor-pointer"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isActive}
                  >
                    <span className={`mr-[20px] transition-colors duration-300 ${isActive ? 'text-emerald-500' : 'text-white'}`}>
                      {item.question}
                    </span>
                    <div 
                      className={`w-[24px] h-[24px] relative shrink-0 before:absolute before:transition-all before:duration-300 before:rounded-[2px] before:top-1/2 before:left-0 before:w-full before:h-[2px] before:-mt-[1px] after:absolute after:transition-all after:duration-300 after:rounded-[2px] after:top-0 after:left-1/2 after:w-[2px] after:h-full after:-ml-[1px] ${
                        isActive 
                          ? 'before:bg-emerald-500 after:bg-emerald-500 after:rotate-90' 
                          : 'before:bg-white after:bg-white'
                      }`} 
                      aria-hidden="true"
                    ></div>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      isActive ? 'max-h-[500px]' : 'max-h-0'
                    }`}
                  >
                    <div className="px-[30px] pb-[30px] text-[#cbd5e0] leading-[1.7]">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};