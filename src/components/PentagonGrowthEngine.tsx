import React, { useState } from 'react';

export const PentagonGrowthEngine = () => {
  const [activeTab, setActiveTab] = useState('p-2'); // Set default to 'SEO Copywriting' to match your reference image

  const tabsData = [
    {
      id: 'p-1',
      title: 'Keyword Research',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      ),
      imgSrc: 'https://www.webfx.com/wp-content/uploads/2024/01/LeadManagerFX.png',
      imgAlt: 'Keyword Research',
      heading: 'Keyword Research',
      desc: 'Expect a website infused with the most relevant keywords tailored specifically for your real estate business. Through meticulous keyword research, we identify the top search terms that attract potential clients, helping your site rank higher and connect with the right audience.',
      list: [
        'Infused with the most relevant keywords tailored for real estate.',
        'Identifies top search terms that attract potential clients.',
        'Helps your site rank higher and connect with the right audience.'
      ]
    },
    {
      id: 'p-2',
      title: 'SEO Copywriting',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
      ),
      imgSrc: 'https://www.webfx.com/wp-content/uploads/2023/12/AdTechFX.png',
      imgAlt: 'SEO Copywriting',
      heading: 'SEO Copywriting',
      desc: 'Receive expertly crafted content designed to optimize your real estate website. Our SEO copywriting focuses on delivering engaging property descriptions, blogs, and landing pages, all enriched with the perfect keywords to ensure both search engine visibility and user engagement.',
      list: [
        'Expertly crafted content designed to optimize your website.',
        'Focuses on engaging property descriptions, blogs, and landing pages.',
        'Enriched with keywords for visibility and user engagement.'
      ]
    },
    {
      id: 'p-3',
      title: 'Technical SEO',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      ),
      imgSrc: 'https://www.webfx.com/wp-content/uploads/2024/01/LeadManagerFX.png',
      imgAlt: 'Technical SEO',
      heading: 'Technical SEO',
      desc: 'Your website will be finely tuned for superior speed, mobile compatibility, and seamless performance. Technical SEO addresses factors such as site structure, crawlability, and loading times, ensuring your site performs efficiently, providing a smooth experience for visitors and improving rankings.',
      list: [
        'Finely tuned for superior speed and mobile compatibility.',
        'Addresses site structure, crawlability, and loading times.',
        'Ensures efficient performance and improved rankings.'
      ]
    },
    {
      id: 'p-4',
      title: 'Backlinking',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
      ),
      imgSrc: 'https://www.webfx.com/wp-content/uploads/2024/01/LeadManagerFX.png',
      imgAlt: 'Backlinking',
      heading: 'Backlinking',
      desc: 'Gain valuable, high-quality backlinks from respected sources in the real estate industry. We secure authoritative links to enhance your site’s credibility, increase its domain authority, and boost organic traffic, ultimately strengthening your site\'s position and visibility in search results.',
      list: [
        'Gain high-quality backlinks from respected industry sources.',
        'Enhances credibility and increases domain authority.',
        'Boosts organic traffic and strengthens search visibility.'
      ]
    },
    {
      id: 'p-5',
      title: 'Local SEO',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      imgSrc: 'https://www.webfx.com/wp-content/uploads/2023/12/AdTechFX.png',
      imgAlt: 'Local SEO',
      heading: 'Local SEO',
      desc: 'Experience enhanced visibility for local searches, ensuring your real estate business stands out in your specific geographic area. Through targeted local keyword optimization, Google My Business management, and local directory listings, we position your site to capture relevant, nearby clients.',
      list: [
        'Enhanced visibility for local searches in your geographic area.',
        'Includes targeted local keyword optimization and GMB management.',
        'Positions your site to capture relevant, nearby clients.'
      ]
    }
  ];

  return (
    <section className="pt-10 pb-16 px-5 min-h-[5vh] items-center flex flex-col bg-black text-white">
      
      {/* 1. Heading Section - Intact */}
      <div className="w-full text-center mb-16 max-w-[1440px] mx-auto">
        <h2 className="text-[clamp(2.2rem,4.5vw,3.2rem)] font-black leading-[1.1] tracking-normal mb-6">
          Mastering <span className="text-emerald-500">Real Estate SEO</span>
        </h2>
      </div>

      {/* 2. Main Three-Column Grid for Centered Image and WIDER Content */}
      <div className="max-w-[1440px] w-full mx-auto grid grid-cols-[190px_1fr_1.8fr] gap-12 items-center relative z-10">
        
        {/* Column A: Tabs (Vertical, Left-aligned) - Cleaned */}
        <div className="flex flex-col gap-5 self-start pt-6">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-4 px-2 py-3 cursor-pointer transition-all duration-300 outline-none text-left w-full ${
                activeTab === tab.id ? 'opacity-100' : 'opacity-40 hover:opacity-100'
              }`}
            >
              <div className="w-6 h-6 flex items-center justify-center shrink-0">
                {tab.icon}
              </div>
              <span className="text-[18px] font-semibold whitespace-nowrap">{tab.title}</span>
            </button>
          ))}
        </div>

        {/* Column B: IMAGE (Strictly Centered horizontally between Tabs and Text) */}
        <div className="relative w-full flex justify-center items-center">
          {tabsData.map((tab) => (
            <div
              key={tab.id}
              className={`w-[320px] transition-all duration-500 ease-in-out absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                activeTab === tab.id 
                  ? 'opacity-100 scale-100 z-10' 
                  : 'opacity-0 scale-95 z-0 pointer-events-none'
              }`}
            >
              <img
                src={tab.imgSrc}
                alt={tab.imgAlt}
                className="w-full h-auto block"
              />
            </div>
          ))}
          {/* Empty spacer to maintain height/width in the grid flow */}
          <div className="w-[320px] h-[240px]"></div>
        </div>

  {/* Column C: TEXT CONTENT */}
<div className="relative w-full h-full flex items-end pb-32 -translate-y-10"> 
  {tabsData.map((tab) => (
    <div
      key={tab.id}
      /* CHANGE: top-0 replaced with bottom-0 to pull content down */
      className={`w-full transition-all duration-500 ease-in-out absolute bottom-0 left-0 ${
        activeTab === tab.id 
          ? 'opacity-100 translate-y-0 z-10 pointer-events-auto' 
          : 'opacity-0 translate-y-4 z-0 pointer-events-none'
      }`}
    >
      <div className="w-full text-left">
        <h3 className="text-[28px] font-extrabold mb-[20px] leading-[1.25] tracking-tight text-white">
          {tab.heading}
        </h3>
        <p className="text-white/90 text-[clamp(0.83rem,1.2vw,1.1rem)] font-normal leading-[1.6] mb-8 max-w-[650px]">
          {tab.desc}
        </p>
        <ul className="list-disc pl-5 m-0 text-left max-w-[650px] space-y-3">
          {tab.list.map((item, idx) => (
            <li key={idx} className="text-white/90 text-[clamp(0.83rem,1.2vw,1.1rem)] font-normal leading-[1.6]">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ))}

  {/* Invisible spacer: Ensures the parent div has enough height to contain the absolute items */}
  <div className="w-full text-left opacity-0 pointer-events-none">
    <h3 className="text-[28px] mb-[20px] leading-[1.25]">Spacer</h3>
    <p className="mb-8 max-w-[650px] leading-[1.6]">Filler text</p>
    <ul className="pl-5 list-disc space-y-3">
      <li>Spacer</li>
      <li>Spacer</li>
    </ul>
  </div>
</div>
</div>
    </section>
  );
};