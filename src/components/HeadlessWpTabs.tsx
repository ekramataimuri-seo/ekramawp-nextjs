"use client";

import React, { useState } from 'react';

// --- Data ---
const tabData = [
  {
    id: 'nextjs',
    title: 'Next.js Frontend',
    iconUrl: 'https://admin.wpfedev.com/wp-content/uploads/2026/02/headless-icon-1.png',
    features: [
      {
        title: 'Server-Side Rendering & SSG',
        desc: 'Achieve sub-second load times and flawless Core Web Vitals. Next.js pre-renders your WordPress content into static HTML, serving it instantly to users while maintaining excellent SEO scores.'
      },
      {
        title: 'Component-Driven UI',
        desc: 'Break free from rigid PHP templates. We build bespoke, highly interactive React components that provide an app-like experience for your visitors without the limitations of traditional themes.'
      }
    ],
    buttonText: 'Explore Next.js Development',
    image: 'https://admin.wpfedev.com/wp-content/uploads/2026/02/testedimage.webp'
  },
  {
    id: 'vercel',
    title: 'Vercel Deployment',
    iconUrl: 'https://admin.wpfedev.com/wp-content/uploads/2026/02/headless-icon-3.png',
    features: [
      {
        title: 'Global Edge Network',
        desc: 'Deploy your Next.js application to Vercel’s Edge Network. Your content is cached and served from servers geographically closest to your users, virtually eliminating latency.'
      },
      {
        title: 'Instant Preview URLs',
        desc: 'Every code change generates a live preview URL. Your team can review frontend changes, layout updates, and new features in a production-like environment before going live.'
      }
    ],
    buttonText: 'Scale with Vercel',
    image: 'https://admin.wpfedev.com/wp-content/uploads/2026/02/testedimage-300x300.webp'
  },
  {
    id: 'github',
    title: 'GitHub Workflows',
    iconUrl: 'https://admin.wpfedev.com/wp-content/uploads/2026/02/headless-icon-4.png',
    features: [
      {
        title: 'Automated CI/CD Pipelines',
        desc: 'Say goodbye to manual FTP uploads. Pushing code to GitHub automatically triggers a build and deployment process on Vercel, ensuring zero-downtime releases.'
      },
      {
        title: 'Version Controlled Infrastructure',
        desc: 'Your entire frontend design and logic are stored in Git. This allows for precise version tracking, easy rollbacks, and seamless collaboration among multiple developers.'
      }
    ],
    buttonText: 'Optimize Your Pipeline',
    image: 'https://admin.wpfedev.com/wp-content/uploads/2026/02/testedimage-300x300.webp'
  },
  {
    id: 'wordpress',
    title: 'WPGraphQL Backend',
    iconUrl: 'https://admin.wpfedev.com/wp-content/uploads/2026/02/headless-icon-5.png',
    features: [
      {
        title: 'Familiar Authoring Experience',
        desc: 'Keep the WordPress dashboard your marketing team already loves. They continue to publish posts and manage ACF fields exactly as before, with no retraining required.'
      },
      {
        title: 'Efficient Data Querying',
        desc: 'Replace bloated REST API payloads with WPGraphQL. Fetch exactly the data your Next.js frontend needs—nothing more, nothing less—drastically reducing payload sizes and load times.'
      }
    ],
    buttonText: 'Decouple Your CMS',
    image: 'https://admin.wpfedev.com/wp-content/uploads/2026/02/testedimage-300x300.webp'
  },
  {
    id: 'security',
    title: 'Zero-Trust Security',
    iconUrl: 'https://admin.wpfedev.com/wp-content/uploads/2026/02/headless-icon-6.png',
    features: [
      {
        title: 'Hidden WordPress Admin',
        desc: 'By decoupling your site, your WordPress backend and database are completely removed from the public internet, eliminating risks from traditional plugin exploits and brute-force login attacks.'
      },
      {
        title: 'Enterprise-Grade DDoS Protection',
        desc: 'The public-facing Next.js frontend is served as static files on Vercel’s globally distributed CDN, inherently protecting your site from massive traffic spikes and denial-of-service attacks.'
      }
    ],
    buttonText: 'Secure Your Infrastructure',
    image: 'https://admin.wpfedev.com/wp-content/uploads/2026/02/testedimage-300x300.webp'
  }
];

export const HeadlessWpTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleTabClick = (index: number) => {
    if (activeTab === index) return;
    
    setIsFading(true);
    // Wait for the fade out to finish before changing content
    setTimeout(() => {
      setActiveTab(index);
      setIsFading(false);
    }, 250);
  };

  const currentData = tabData[activeTab];

  return (
    <div className="headless-tabs-wrapper">
      <style dangerouslySetInnerHTML={{ __html: `
        .headless-tabs-wrapper {
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
            background-color: transparent; /* Inherits dark background */
            color: #ffffff;
            line-height: 1.6;
            padding: 60px 20px;
            width: 100%;
            box-sizing: border-box;
        }

        .headless-tabs-wrapper * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        .headless-tabs-wrapper .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        /* Header */
        .headless-tabs-wrapper .section-header {
            text-align: center;
            font-size: 42px;
            font-weight: 800;
            margin-bottom: 50px;
            letter-spacing: -0.5px;
            color: #ffffff;
        }

        /* Tabs Navigation */
        .headless-tabs-wrapper .tabs-container {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 60px;
            gap: 15px;
            flex-wrap: wrap;
        }

        .headless-tabs-wrapper .tab-item {
            flex: 1;
            min-width: 120px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            cursor: pointer;
            padding: 10px;
            transition: all 0.3s ease;
            position: relative;
        }

        /* Restored your original Image Icon Styles */
        .headless-tabs-wrapper .tab-icon {
            width: 60px;
            height: 60px;
            object-fit: contain;
            margin-bottom: 12px;
            filter: grayscale(100%) opacity(60%);
            transition: all 0.3s ease;
        }

        .headless-tabs-wrapper .tab-title {
            font-size: 15px;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.5);
            transition: color 0.3s ease;
        }

        /* Active Tab States */
        .headless-tabs-wrapper .tab-item:hover .tab-icon {
            filter: grayscale(0%) opacity(80%);
        }

        .headless-tabs-wrapper .tab-item:hover .tab-title {
            color: rgba(255, 255, 255, 0.8);
        }

        .headless-tabs-wrapper .tab-item.active .tab-icon {
            filter: grayscale(0%) opacity(100%);
        }

        .headless-tabs-wrapper .tab-item.active .tab-title {
            color: #ffffff;
            font-weight: 700;
        }

        /* Content Area */
        .headless-tabs-wrapper .content-area {
            display: flex;
            gap: 60px;
            align-items: center;
            opacity: 1;
            transition: opacity 0.25s ease;
        }

        .headless-tabs-wrapper .content-area.fade-out {
            opacity: 0;
        }

        /* Left Column (Text & Features) */
        .headless-tabs-wrapper .content-left {
            flex: 1;
            max-width: 600px;
        }

        .headless-tabs-wrapper .feature-item {
            margin-bottom: 30px;
            padding-bottom: 30px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .headless-tabs-wrapper .feature-item:last-of-type {
            border-bottom: none;
            padding-bottom: 0;
        }

        .headless-tabs-wrapper .feature-header {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 10px;
        }

        .headless-tabs-wrapper .check-icon {
            flex-shrink: 0;
            width: 28px;
            height: 28px;
            color: #3b82f6; 
        }

        .headless-tabs-wrapper .feature-title {
            font-size: 22px;
            font-weight: 600;
            color: #ffffff;
        }

        .headless-tabs-wrapper .feature-desc {
            font-size: 16px;
            color: rgba(255, 255, 255, 0.75);
            line-height: 1.6;
            margin-left: 43px; 
        }

        /* CTA Button */
        .headless-tabs-wrapper .cta-button {
            background-color: #ffd03b; /* Restored your yellow button color */
            color: #000000; /* Black text on yellow button */
            font-weight: 700;
            font-size: 16px;
            padding: 16px 32px;
            border-radius: 30px;
            border: none;
            cursor: pointer;
            margin-top: 30px;
            transition: background-color 0.2s ease, transform 0.2s ease;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        .headless-tabs-wrapper .cta-button:hover {
            background-color: #f5c423;
            transform: translateY(-2px);
        }

        /* Right Column (Image) */
        .headless-tabs-wrapper .content-right {
            flex: 1;
            display: flex;
            justify-content: center;
            position: relative;
        }

        .headless-tabs-wrapper .main-image {
            max-width: 100%;
            height: auto;
            border-radius: 12px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.5);
            position: relative;
            z-index: 2;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Responsive Design */
        @media (max-width: 992px) {
            .headless-tabs-wrapper .content-area {
                flex-direction: column;
                gap: 40px;
            }
            .headless-tabs-wrapper .content-left {
                max-width: 100%;
            }
        }

        @media (max-width: 768px) {
            .headless-tabs-wrapper .section-header {
                font-size: 32px;
            }
            .headless-tabs-wrapper .tabs-container {
                justify-content: center;
            }
            .headless-tabs-wrapper .feature-desc {
                margin-left: 0;
                margin-top: 10px;
            }
        }
      `}} />

      <div className="container">
        <h2 className="section-header">The Ultimate Decoupled Stack</h2>

        <div className="tabs-container">
          {tabData.map((tab, index) => (
            <div 
              key={tab.id}
              className={`tab-item ${activeTab === index ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {/* Using your original <img> tags here */}
              <img src={tab.iconUrl} alt={tab.title} className="tab-icon" />
              <span className="tab-title">{tab.title}</span>
            </div>
          ))}
        </div>

        <div className={`content-area ${isFading ? 'fade-out' : ''}`}>
          <div className="content-left">
            {currentData.features.map((feature, idx) => (
              <div className="feature-item" key={idx}>
                <div className="feature-header">
                  <svg className="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div className="feature-title">{feature.title}</div>
                </div>
                <div className="feature-desc">{feature.desc}</div>
              </div>
            ))}
            <button className="cta-button">{currentData.buttonText}</button>
          </div>
          
          <div className="content-right">
            <img src={currentData.image} alt={currentData.title} className="main-image" />
          </div>
        </div>
      </div>
    </div>
  );
};