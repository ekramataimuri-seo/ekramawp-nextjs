"use client";
import React, { useState } from 'react';

// FAQ Data - Tailored to Front End Engineering
const faqData = [
  {
    question: "How do you ensure sub-100ms interaction times?",
    answer: "We utilize a combination of code-splitting, tree-shaking, and edge caching. By leveraging Next.js Server Components, we minimize the JavaScript bundle sent to the client, ensuring the main thread remains unblocked for immediate user interaction."
  },
  {
    question: "Why choose Headless WordPress over Traditional?",
    answer: "Headless architecture decouples the frontend from the backend. This allows us to use modern frameworks like React for the UI, resulting in significantly faster load times, better security, and a richer, app-like user experience compared to traditional PHP themes."
  },
  {
    question: "Do you build custom design systems?",
    answer: "Yes. We don't just build pages; we architect Atomic Design systems. We create reusable libraries of components (atoms, molecules, organisms) that ensure visual consistency and scalability across your entire application."
  },
  {
    question: "How do you handle SEO with React/Next.js?",
    answer: "We use Server-Side Rendering (SSR) and Static Site Generation (SSG) to ensure search engine crawlers see fully rendered HTML. We also implement semantic HTML5, dynamic metadata, and schema markup to maximize visibility."
  }
];

export const FAQSection = () => {
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
              Engineering <span className="text-emerald-500">Insights</span>
            </h2>
            <p className="text-white/70">
              Explore our most frequently asked questions to understand our approach to front-end architecture, performance optimization, and scalable design systems.
            </p>
          </div>

          {/* FAQ List */}
          <div>
            {faqData.map((item, index) => {
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