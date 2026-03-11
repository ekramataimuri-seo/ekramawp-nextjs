import React, { useState } from 'react';

export const PentagonGrowthEngine = () => {
  const [activeTab, setActiveTab] = useState('p-1');

  const tabsData = [
    {
      id: 'p-1',
      title: 'Keyword Research',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      ),
      imgSrc: 'https://www.webfx.com/wp-content/uploads/2024/01/LeadManagerFX.png',
      heading: 'Keyword Research',
      desc: 'Expect a website infused with the most relevant keywords tailored specifically for your real estate business. Through meticulous keyword research, we identify the top search terms that attract potential clients.',
      list: ['Relevant keyword infusion', 'Top search term identification', 'Audience connection']
    },
    {
      id: 'p-2',
      title: 'SEO Copywriting',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
      ),
      imgSrc: 'https://www.webfx.com/wp-content/uploads/2023/12/AdTechFX.png',
      heading: 'SEO Copywriting',
      desc: 'Receive expertly crafted content designed to optimize your real estate website. Our SEO copywriting focuses on delivering engaging property descriptions and blogs.',
      list: ['Expertly crafted content', 'Engaging descriptions', 'Keyword enriched']
    },
    {
      id: 'p-3',
      title: 'Technical SEO',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      ),
      imgSrc: 'https://www.webfx.com/wp-content/uploads/2024/01/LeadManagerFX.png',
      heading: 'Technical SEO',
      desc: 'Your website will be finely tuned for superior speed, mobile compatibility, and seamless performance through technical structure optimization.',
      list: ['Speed optimization', 'Mobile compatibility', 'Rankings boost']
    },
    {
      id: 'p-4',
      title: 'Backlinking',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
      ),
      imgSrc: 'https://www.webfx.com/wp-content/uploads/2024/01/LeadManagerFX.png',
      heading: 'Backlinking',
      desc: 'Gain high-quality backlinks from respected sources to enhance your site’s credibility and increase its domain authority.',
      list: ['Industry backlinks', 'Site credibility', 'Organic traffic']
    },
    {
      id: 'p-5',
      title: 'Local SEO',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      imgSrc: 'https://www.webfx.com/wp-content/uploads/2023/12/AdTechFX.png',
      heading: 'Local SEO',
      desc: 'Experience enhanced visibility for local searches, ensuring your real estate business stands out in your specific area.',
      list: ['Local visibility', 'GMB management', 'Nearby client capture']
    }
  ];

  const activeData = tabsData.find(t => t.id === activeTab) || tabsData[0];

  return (
    <section className="py-16 px-6 lg:px-10  text-white overflow-hidden">
      <div className="max-w-[1300px] mx-auto">
        
        {/* --- 1. HEADING --- */}
        <div className="text-center mb-10 lg:mb-14">
          <h1>
            Mastering <span className="text-emerald-500">Real Estate SEO</span>
          </h1>
          <p className="text-gray-400 max-w-[700px] mx-auto text-base lg:text-lg opacity-90 leading-relaxed">
    Elevate your digital presence with our specialized strategies designed to dominate local search results 
    and capture high-quality property leads effortlessly.
  </p>
        </div>

        {/* --- 2. MAIN GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-[220px_0.8fr_1.7fr] gap-6 lg:gap-10 items-center">
          
          {/* COLUMN A: TABS */}
          <div className="flex flex-row lg:flex-col gap-1 lg:gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide snap-x">
            {tabsData.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 lg:gap-4 px-2.5 lg:px-6 py-3 lg:py-4 rounded-full lg:rounded-lg transition-all duration-300 shrink-0 snap-start text-left border-none outline-none w-auto lg:w-full ${
                    isActive 
                      ? 'text-emerald-400 opacity-100' 
                      : 'text-white opacity-40 hover:opacity-100'
                  }`}
                >
                  {isActive && (
                    <div className="absolute inset-0" />
                  )}

                  <div className="shrink-0 w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center">
                    {tab.icon}
                  </div>
<span className=" text-base lg:text-[19px] whitespace-nowrap">                    {tab.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* COLUMN B: IMAGE */}
          <div className="flex justify-center lg:justify-start items-center h-[280px] lg:h-auto">
            <img 
              key={`${activeTab}-img`}
              src={activeData.imgSrc} 
              alt={activeData.title}
              className="w-[280px] lg:w-[95%] h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] animate-in fade-in zoom-in duration-500" 
            />
          </div>

          {/* COLUMN C: TEXT CONTENT */}
          <div className="text-left">
            <div key={`${activeTab}-text`} className="animate-in fade-in slide-in-from-right-4 duration-500">
              <h3 className="mb-4 text-white">
                {activeData.heading}
              </h3>
              <p className="mb-6 opacity-90">
                {activeData.desc}
              </p>
              <ul className="space-y-3 list-none p-0 m-0">
                {activeData.list.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};