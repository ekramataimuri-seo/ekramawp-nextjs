"use client";
import React, { useState, useEffect } from 'react';

// 1. STATIC DATA
const SLIDE_DATA = [
  {
    title: "Predictive AI Modeling",
    image: "https://www.webfx.com/wp-content/uploads/2023/12/CompanyTrackerFX.png",
    desc: "Leverage machine learning to predict user behavior and optimize paths.",
    list: [
      "Churn prediction metrics based on user activity",
      "Dynamic content personalization for engagement",
      "Automated A/B testing logic to improve conversions"
    ]
  },
  {
    title: "Company Identification Insights",
    image: "https://www.webfx.com/wp-content/uploads/2023/12/CompanyTrackerFX.png",
    desc: "Identify companies coming to your site for better insights, sales enablement, and targeted campaigns.",
    list: [
      "Identify what companies are on your site, before they fill out a form",
      "Notification capabilities to give you an advantage in the sales process",
      "User journey tracking to enable the sales team with prospect’s interests"
    ]
  },
  {
    title: "Targeted Email Communication",
    image: "https://www.webfx.com/wp-content/uploads/2023/12/EmailMarketingFX.png",
    desc: "Communicate with customers through updates, newsletters, and drip campaigns.",
    list: [
      "Send updates and drip campaigns to current and prospective customers",
      "Monitor the engagement of every email in the reporting dashboard",
      "Use first-party enabled customer data to create audiences"
    ]
  },
  {
    title: "Unified Digital Marketing Data",
    image: "https://www.webfx.com/wp-content/uploads/2024/01/IntegrationsFX.png",
    desc: "Connect disjointed data and leverage it for more effective digital marketing efforts.",
    list: [
      "Closed-loop reporting on customers and leads",
      "Push conversion data to advertising platforms",
      "Reach leads from your CRM with targeted ad campaigns"
    ]
  }
];

const INFINITE_TRACK = [...SLIDE_DATA.slice(-2), ...SLIDE_DATA, ...SLIDE_DATA.slice(0, 2)];

export const Leftcolumntab = () => {
  const [currentIndex, setCurrentIndex] = useState(2); 
  const [isTransitioning, setIsTransitioning] = useState(true);

  // JS CONSTANTS (Must match CSS values)
  const cardWidth = 300; 
  const gap = 20;

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  useEffect(() => {
    if (currentIndex >= INFINITE_TRACK.length - 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(2); 
      }, 500);
      return () => clearTimeout(timer);
    }
    if (!isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isTransitioning]);

  return (
    <section className="wpf-section">
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --wpf-blue: #083A74;
          --wpf-accent: #207DE9;
          --wpf-green: #41D48C;
          --c-w: 300px; /* JS assumes this width */
          --c-h: 360px; 
          --c-gap: 20px; /* JS assumes this gap */
        }

        .wpf-section {
          background: #000000;
          padding: 80px 0;
          font-family: 'Inter', sans-serif;
          width: 100%;
          overflow-x: clip; 
          position: relative;
          display: flex;
          justify-content: center;
        }

        .wpf-container {
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center; 
          gap: clamp(20px, 4vw, 60px);
          padding: 0 20px;
        }

        /* --- SLIDER (LEFT) --- */
        .wpf-slider-col {
          flex: 0 0 auto; 
          /* DESKTOP: Width calculated for exactly 2 cards + 1 gap */
          width: calc((var(--c-w) * 2) + var(--c-gap)); 
          position: relative;
        }

        .wpf-viewport {
          width: 100%;
          overflow: hidden;
          padding: 60px 0; 
        }

        .wpf-track {
          display: flex;
          gap: var(--c-gap);
          will-change: transform;
          transition: ${isTransitioning ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'};
        }

        /* --- CARD --- */
        .wpf-card {
          width: var(--c-w);
          height: var(--c-h);
          background: var(--wpf-blue);
          border-radius: 18px;
          flex-shrink: 0;
          position: relative;
          padding: 0 20px 20px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 15px 40px rgba(0,0,0,0.3);
        }

        .wpf-img-pop {
          width: 85%;
          background: #fff;
          padding: 5px;
          border-radius: 8px;
          position: absolute;
          top: -40px; 
          left: 50%;
          transform: translateX(-50%);
          box-shadow: 0 10px 30px rgba(0,0,0,0.25);
          z-index: 20;
        }

        .wpf-card-body {
          margin-top: 130px; 
          overflow-y: auto; 
          color: #fff;
          flex-grow: 1;
          padding-right: 5px;
        }

        .wpf-card-body::-webkit-scrollbar { width: 4px; }
        .wpf-card-body::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.3); border-radius: 10px; }

        .wpf-card h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 8px; color: #fff; line-height: 1.2; }
        .wpf-card p { font-size: 0.8rem; margin-bottom: 10px; opacity: 0.85; line-height: 1.4; }
        
        .wpf-list { list-style: none; padding: 0; margin: 0; }
        .wpf-list li { position: relative; padding-left: 15px; margin-bottom: 6px; font-size: 0.75rem; opacity: 0.9; }
        .wpf-list li::before { content: "•"; position: absolute; left: 0; color: #fff; font-weight: bold; }

        /* --- MIDDLE NAV BUTTON --- */
        .wpf-nav-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--wpf-accent);
          color: #fff;
          border: none;
          cursor: pointer;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          box-shadow: 0 4px 12px rgba(32, 125, 233, 0.3);
          transition: all 0.3s ease;
          z-index: 50;
        }
        .wpf-nav-btn:hover { background: #1a6cd1; transform: scale(1.1); }

        /* --- RIGHT CONTENT --- */
        .wpf-content-col {
          width: 420px;
          max-width: 100%;
          flex-shrink: 1;
        }

        .wpf-h2 { font-size: 2.5rem; font-weight: 900; line-height: 1.1; margin-bottom: 20px; color: #FFFFFF; letter-spacing: -0.5px; }
        .wpf-p { font-size: 0.95rem; color: #FFFFFF; line-height: 1.6; margin-bottom: 30px; opacity: 0.9; }

        .wpf-stats { display: flex; gap: 20px; border-top: 1px solid rgba(255,255,255,0.2); padding-top: 20px; }
        .wpf-stat-v { font-size: 2rem; font-weight: 900; color: var(--wpf-green); display: block; line-height: 1; }
        .wpf-stat-l { font-size: 0.6rem; font-weight: 800; color: #FFFFFF; text-transform: uppercase; margin-top: 6px; display: block; }

        /* --- MOBILE FIXES --- */
        @media (max-width: 1024px) {
          .wpf-container { 
            flex-direction: column; 
            text-align: center; 
          }
          
          .wpf-slider-col { 
            /* FORCE WIDTH TO 1 CARD + GAP (matches JS shift logic) */
            width: 320px; 
            max-width: 100vw; 
          }
          
          .wpf-viewport { 
             /* Ensure viewport masks the neighbors */
             width: 100%;
          }

          .wpf-track { 
             /* Center the active slide in the viewport */
             justify-content: flex-start; 
          }

          .wpf-card { 
            /* FORCE FIXED WIDTH to align with JS calculation */
            width: 300px !important; 
          }

          .wpf-content-col { 
            width: 100%; 
            display: flex; 
            flex-direction: column; 
            align-items: center; 
            margin-top: 30px; 
          }
          
          /* Rotate arrow to point down, indicating 'next' implies down/flow */
          .wpf-nav-btn { 
            margin: 20px 0; 
            transform: rotate(90deg); 
          }
          .wpf-nav-btn:hover { transform: rotate(90deg) scale(1.1); }
        }
      `}} />

      <div className="wpf-container">
        
        {/* CAROUSEL ON LEFT */}
        <div className="wpf-slider-col">
          <div className="wpf-viewport">
            <div 
              className="wpf-track"
              style={{ transform: `translateX(-${currentIndex * (cardWidth + gap)}px)` }}
            >
              {INFINITE_TRACK.map((slide, idx) => (
                <div className="wpf-card" key={idx}>
                  <div className="wpf-img-pop">
                    <img src={slide.image} style={{width:'100%', borderRadius:'6px', display:'block'}} alt="Dashboard UI" />
                  </div>
                  <div className="wpf-card-body">
                    <h3>{slide.title}</h3>
                    <p>{slide.desc}</p>
                    <ul className="wpf-list">
                      {slide.list.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MIDDLE ARROW BUTTON */}
        <button className="wpf-nav-btn" onClick={handleNext} aria-label="Next Slide">
          →
        </button>

        {/* STATIC CONTENT ON RIGHT */}
        <div className="wpf-content-col">
          <h2 className="wpf-h2">Data-Driven Lead Nurture Campaigns</h2>
          <p className="wpf-p">RevenueCloudFX is our proprietary marketing software built to enable website strategies via segmentation. <br></br>RevenueCloudFX is our proprietary marketing software built to enable website strategies via segmentation.</p>
          
          <div className="wpf-stats">
            <div><span className="wpf-stat-v">14%</span><span className="wpf-stat-l">Average Increase<br/>in sales</span></div>
            <div><span className="wpf-stat-v">$500K+</span><span className="wpf-stat-l">Built-In Value<br/>of tools</span></div>
            <div><span className="wpf-stat-v">1B+</span><span className="wpf-stat-l">Data Points<br/>tracked</span></div>
          </div>
        </div>

      </div>
    </section>
  );
};