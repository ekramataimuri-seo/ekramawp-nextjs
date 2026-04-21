"use client";
import React, { useState } from 'react';

// 5-Pillar Dataset
const pillarData = [
  {
    id: 0,
    color: '#10B981', // Emerald 500
    bgLight: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(16, 185, 129, 0.05))',
    label: 'Revenue Platform',
    title: 'Attributable ROI From Marketing',
    bullets: [
      'We integrate RevenueCloudFX with your existing CRM or FSM with our team handling 100% of the setup for you.',
      'Our marketing efforts are tied directly to pipeline and ROI so that you get greater transparency into our data-backed recommendations.',
      'Clients who connect their systems see an average of 15% higher marketing ROI within the first 6 months.'
    ],
    cta: 'Discover RevenueCloudFX',
    icon: 'https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage.webp',
    mediaType: 'image',
    mediaSrc: 'https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage.webp'
  },
  {
    id: 1,
    color: '#059669', // Emerald 600
    bgLight: 'linear-gradient(135deg, rgba(5, 150, 105, 0.15), rgba(5, 150, 105, 0.05))',
    label: 'Strategic Execution',
    title: 'Turning Traffic into Leads & Pipeline',
    bullets: [
      'Your dedicated team of FXers leverage the data within our revenue platform to make data-driven decisions about your strategy.',
      'Your dedicated team will comprise of channel and industry experts that will help prioritize actions to keep your business ahead.',
      'With weekly updates and monthly calls, your team will remain informed on exactly what we\'re working on to drive performance.'
    ],
    cta: 'See Our Approach',
    icon: 'https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage.webp',
    mediaType: 'image',
    mediaSrc: 'https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage.webp'
  },
  {
    id: 2,
    color: '#34D399', // Emerald 400
    bgLight: 'linear-gradient(135deg, rgba(52, 211, 153, 0.15), rgba(52, 211, 153, 0.05))',
    label: 'AI-Powered Intelligence',
    title: 'Smarter Decisions at Scale',
    bullets: [
      'AI analyzes performance patterns across industries and campaigns to surface opportunities humans might miss.',
      'AI insights are used to prioritize optimizations, not replace strategy or execution.',
      'AI integration allows our team to focus on what’s working, where to invest next, and how to compound revenue over time.'
    ],
    cta: 'Explore Our Case Studies',
    icon: 'https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage.webp',
    mediaType: 'image',
    mediaSrc: 'https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage.webp'
  },
  {
    id: 3,
    color: '#047857', // Emerald 700
    bgLight: 'linear-gradient(135deg, rgba(4, 120, 87, 0.15), rgba(4, 120, 87, 0.05))',
    label: 'Market Intelligence',
    title: 'Focused Market Strategy',
    bullets: [
      'Define where to compete, what to prioritize, and how to sequence efforts for the biggest return.',
      'Translate research into a practical roadmap your team can actually follow without losing speed.',
      'Create alignment across messaging, targeting, offers, and long-term expansion decisions.'
    ],
    cta: 'View Strategy Model',
    icon: 'https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage.webp',
    mediaType: 'image',
    mediaSrc: 'https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage.webp'
  },
  {
    id: 4,
    color: '#6EE7B7', // Emerald 300
    bgLight: 'linear-gradient(135deg, rgba(110, 231, 183, 0.15), rgba(110, 231, 183, 0.05))',
    label: 'Process Automation',
    title: 'Continuous Growth Optimization',
    bullets: [
      'Use live performance signals to improve conversion paths, budget allocation, and messaging effectiveness over time.',
      'Continuously test, learn, and refine so growth compounds instead of resetting every quarter.',
      'Make optimization part of the system, not a last-minute fix when numbers fall short.'
    ],
    cta: 'See Optimization Plan',
    icon: 'https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage.webp',
    mediaType: 'image',
    mediaSrc: 'https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage.webp'
  }
];

export const FiveCirclesBox = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isStepping, setIsStepping] = useState(false);
  
  const totalPillars = pillarData.length;
  const activePillar = pillarData[activeIndex] || pillarData[0];

  // SMART ROTATION: Prevents criss-crossing ("swapping") by routing movement through the perimeter
  const handleSetActive = (idx: number) => {
    if (idx === activeIndex || isStepping) return;

    const diff = (idx - activeIndex + totalPillars) % totalPillars;
    
    if (diff === 2) {
      setIsStepping(true);
      setActiveIndex((prev) => (prev + 1) % totalPillars); 
      setTimeout(() => {
        setActiveIndex(idx); 
        setIsStepping(false);
      }, 250); 
    } else if (diff === 3) {
      setIsStepping(true);
      setActiveIndex((prev) => (prev + 4) % totalPillars); 
      setTimeout(() => {
        setActiveIndex(idx); 
        setIsStepping(false);
      }, 250);
    } else {
      setActiveIndex(idx);
    }
  };

  return (
    <section className="w-full pt-2 pb-16 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 relative z-10 items-center justify-center text-center">
        
        {/* --- HEADER --- */}
        <header className="max-w-[980px] mx-auto mb-8">
          <h2>
            Uniquely Positioned to <span style={{ color: activePillar.color }} className="transition-colors duration-500">Power Real Revenue Growth</span>
          </h2>
          <div className="mt-4 max-w-[860px] mx-auto">
            Every result we deliver is powered by five connected pillars — each one working together to create 
            clearer strategy, stronger execution, better intelligence, and scalable growth.
          </div>
        </header>

        {/* --- COMPRESSED DOWNWARD PENTAGON CAROUSEL NAVIGATION --- */}
        <div className="relative w-full max-w-[650px] mx-auto h-[170px] z-20 hidden md:block">
          
          <div className="absolute top-[0px] left-0 w-full h-[170px] z-0 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1000 170" fill="none" preserveAspectRatio="none">
              <polygon 
                points="500,170 820,85 660,15 340,15 180,85" 
                fill="none" 
                stroke="#5b5d60" 
                strokeWidth="2.5" 
                strokeDasharray="8 8" 
              />
            </svg>
          </div>

          {pillarData.map((item, idx) => {
            let posClass = '';
            let zIndex = 10;
            let opacityClass = 'opacity-100 hover:opacity-100';

            const offset = (idx - activeIndex + totalPillars) % totalPillars;
            const isActive = offset === 0;

            switch(offset) {
              case 0: // Active 
                posClass = 'left-[50%] top-[170px] scale-[1.1]';
                break;
              case 1: // Middle Right
                posClass = 'left-[82%] top-[85px] scale-[0.85]';
                zIndex = 20;
                break;
              case 2: // Top Right
                posClass = 'left-[66%] top-[15px] scale-[0.70]';
                zIndex = 10;
                break;
              case 3: // Top Left
                posClass = 'left-[34%] top-[15px] scale-[0.70]';
                zIndex = 10;
                break;
              case 4: // Middle Left
                posClass = 'left-[18%] top-[85px] scale-[0.85]';
                zIndex = 20;
                break;
              default:
                break;
            }

            return (
              <div 
                key={item.id} 
                className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-[500ms] ease-in-out flex flex-col items-center cursor-pointer ${posClass} ${opacityClass}`}
                style={{ zIndex }}
                onClick={() => handleSetActive(idx)}
              >
                <div 
                  className={`w-[80px] h-[80px] rounded-full flex items-center justify-center transition-all duration-500 shadow-md ${isActive ? 'shadow-2xl' : ''}`}
                  style={{ 
                    borderColor: item.color, 
                    backgroundColor: 'rgba(9, 11, 14, 0.45)'
                  }}
                >
                  <img 
                    src={item.icon} 
                    alt={item.label} 
                    className="w-[80%] h-[80%] object-contain transition-all duration-500"
                  />
                </div>
                
                <div className={`absolute top-[88px] w-[130px] text-center transition-all duration-500 ${isActive ? 'opacity-0 translate-y-3 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
                  <span 
                    className="text-[0.85rem] font-extrabold leading-tight drop-shadow-sm"
                    style={{ color: item.color }}
                  >
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- MOBILE NAVIGATION BUTTONS --- */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 md:hidden relative z-10">
           {pillarData.map((item, idx) => (
             <button
                key={idx}
                onClick={() => handleSetActive(idx)}
                className="px-5 py-2.5 rounded-full border-[2.5px] font-bold text-[0.85rem] transition-colors shadow-sm"
                style={{ 
                  backgroundColor: activeIndex === idx ? item.color : '#fff',
                  borderColor: item.color,
                  color: activeIndex === idx ? '#fff' : item.color
                }}
             >
                {item.label}
             </button>
           ))}
        </div>

        {/* --- DYNAMIC PILLAR CONTENT PANEL --- */}
        <div 
          className="relative rounded-[22px] p-8 lg:p-[64px_48px] pt-16 lg:pt-[70px] z-10 transition-all duration-500 shadow-[0_22px_60px_rgba(17,45,84,0.06)]"
          style={{ background: activePillar.bgLight }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-[40px] items-center text-left">
            
            <div className="animate-fade-in" key={`content-${activeIndex}`}>
              <h3 className="mb-6">
                {activePillar.title}
              </h3>
              
              <ul className="grid gap-5 mb-8 list-none p-0">
                {activePillar.bullets.map((bullet, i) => (
                  <li key={i} className="relative pl-7 text-[1.05rem] leading-relaxed">
                    <span 
                      className="absolute left-0 top-[0.6em] w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: activePillar.color }}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>

              <a 
                href="#" 
                className="inline-flex items-center gap-3 no-underline font-extrabold text-[1.05rem] group transition-all"
                style={{ color: activePillar.color }}
              >
                <span>{activePillar.cta}</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1.5" viewBox="0 0 19 16" fill="currentColor">
                  <path d="M18.7071 8.70711C19.0976 8.31658 19.0976 7.68342 18.7071 7.29289L12.3431 0.928932C11.9526 0.538408 11.3195 0.538408 10.9289 0.928932C10.5384 1.31946 10.5384 1.95262 10.9289 2.34315L16.5858 8L10.9289 13.6569C10.5384 14.0474 10.5384 14.6805 10.9289 15.0711C11.3195 15.4616 11.9526 15.4616 12.3431 15.0711L18.7071 8.70711ZM0 9H18V7H0V9Z" />
                </svg>
              </a>
            </div>

            <div className="flex justify-center w-full relative group" key={`media-${activeIndex}`}>
              <div className="relative w-full max-w-[500px] aspect-[16/10] rounded-[20px] overflow-hidden transition-all duration-500">
                <img 
                  src={activePillar.mediaSrc} 
                  alt={activePillar.label} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
            </div>

          </div>

          {/* PROGRESSIVE PAGINATION INDICATORS */}
          <div className="mt-8 pt-6 flex items-center justify-end gap-3">
            {pillarData.map((item, dotIdx) => {
              const isActive = activeIndex === dotIdx;
              return (
                <button 
                  key={dotIdx} 
                  onClick={() => handleSetActive(dotIdx)}
                  className="relative h-1.5 rounded-full bg-gray-200 overflow-hidden transition-all duration-500 ease-in-out"
                  style={{ 
                    width: isActive ? '40px' : '12px',
                  }}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                >
                  <div 
                    className={`absolute inset-0 transition-transform duration-[1000ms] ease-out ${isActive ? 'translate-x-0' : '-translate-x-full'}`}
                    style={{ 
                      backgroundColor: item.color,
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};