"use client";

import React from "react";
import Slider from "react-slick";

// Ensure slick CSS is imported
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const WPDevCarousel = () => {
  // Slider Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    cssEase: "cubic-bezier(0.25, 0.1, 0.25, 1)",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, arrows: false }
      }
    ]
  };

  return (
    <section 
      id="strategy-carousel-isolated"
      className="relative overflow-hidden hardware-accelerated"
    >
      <style jsx global>{`
        .hardware-accelerated {
            will-change: transform;
            transform: translateZ(0);
            backface-visibility: hidden;
        }

        :root { 
            --brand-blue: #3F5CE0; 
            --scratch-1: #2E476E; 
            --scratch-2: #3C66A6; 
            --text-white: #ffffff;
            --sc-brand: #3F5CE0; 
            --sc-card-bg: #1a2436; 
            --sc-text: #ffffff;
            --sc-border: rgba(255, 255, 255, 0.1); 
            --sc-radius: 20px;
        }
        
        #strategy-carousel-isolated {
          display: block; width: 100%; margin: 0 auto; padding: 80px 20px 100px;
          color: var(--text-white);
          box-sizing: border-box; position: relative;
        }
        
        .header-section { max-width: 900px; margin: 0 auto 60px; text-align: center; padding: 0 20px; position: relative; z-index: 10; }

        .main-heading { 
            font-weight: 900; 
            font-size: clamp(2.5rem, 4vw, 3.5rem); 
            margin-bottom: 25px; 
            line-height: 1.1; 
            color: var(--brand-blue); 
        }
        
        .white-highlight {
            position: relative;
            display: inline-block;
            color: var(--text-white);
            z-index: 1;
            padding: 0 5px;
        }

        .white-highlight::before, 
        .white-highlight::after {
            content: ''; position: absolute; left: 0; width: 100%; z-index: -1; border-radius: 4px;
        }
        .white-highlight::before { bottom: 6px; height: 10px; background-color: var(--scratch-1); transform: skewX(-12deg); }
        .white-highlight::after { bottom: 10px; height: 10px; background-color: var(--scratch-2); transform: skewX(-12deg); opacity: 1; }
        
        .intro-text { font-size: 1.1rem; font-weight: 400; line-height: 1.6; color: var(--text-white); max-width: 700px; margin: 0 auto; }

        #strategy-carousel-isolated .slick-list { margin: 0 -15px; padding-top: 25px; padding-bottom: 30px; }
        #strategy-carousel-isolated .slick-slide { padding: 0 15px; height: auto; display: flex !important; }
        #strategy-carousel-isolated .slick-track { display: flex !important; }

        #strategy-carousel-isolated .sc-card {
          background: var(--sc-card-bg); 
          border: 1px solid var(--sc-border); 
          box-shadow: 0 4px 10px rgba(0,0,0,0.2); 
          border-radius: var(--sc-radius); 
          padding: 30px; padding-top: 75px; 
          width: 100%; min-height: 520px; height: 100%;
          display: flex; flex-direction: column; justify-content: space-between; position: relative;
          transition: transform 0.3s ease, border-color 0.3s ease;
          transform: translateZ(0); 
          will-change: transform; 
        }

        #strategy-carousel-isolated .sc-card:hover { 
            transform: translateY(-5px); 
            border-color: var(--sc-brand);
        }

        #strategy-carousel-isolated .sc-badge {
          position: absolute; top: 0; left: 0; right: 0; margin: 0; padding: 16px 10px;
          background: var(--sc-brand);
          color: #ffffff !important; font-size: 13px; font-weight: 800; text-transform: uppercase;
          letter-spacing: 1.5px; text-align: center; z-index: 10;
          border-radius: var(--sc-radius) var(--sc-radius) 0 0; 
        }

        #strategy-carousel-isolated .sc-card ul { padding-left: 20px; margin: 0; list-style-type: none; text-align: left; }
        #strategy-carousel-isolated .sc-card ul li { 
            margin-bottom: 16px; font-size: 1.05rem; color: var(--text-white); font-weight: 400; line-height: 1.6; 
            position: relative;
        }
        #strategy-carousel-isolated .sc-card ul li::before {
            content: "•"; color: var(--sc-brand); font-weight: bold; display: inline-block; width: 1em; margin-left: -1em;
        }
        #strategy-carousel-isolated strong { font-weight: 700; color: var(--sc-brand); }

        #strategy-carousel-isolated .sc-stat-row { margin-top: auto; padding-top: 25px; border-top: 1px solid rgba(255,255,255,0.1); text-align: left; }
        #strategy-carousel-isolated .sc-stat-val { font-size: 48px; font-weight: 900; color: var(--sc-brand); line-height: 1; margin-bottom: 8px; }
        #strategy-carousel-isolated .sc-stat-lbl { font-size: 12px; color: rgba(255,255,255,0.7); font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; }

        #strategy-carousel-isolated .slick-prev, #strategy-carousel-isolated .slick-next {
          width: 48px; height: 48px; z-index: 100; 
          background-color: var(--sc-card-bg); 
          border: 1px solid var(--sc-border);
          border-radius: 50%; 
          transition: all 0.2s ease;
          display: flex !important;
          align-items: center;
          justify-content: center;
        }
        #strategy-carousel-isolated .slick-prev:hover, #strategy-carousel-isolated .slick-next:hover { 
            background-color: var(--sc-brand); border-color: var(--sc-brand); 
        }
        #strategy-carousel-isolated .slick-prev { left: -60px; }
        #strategy-carousel-isolated .slick-next { right: -60px; }
        #strategy-carousel-isolated .slick-prev:before, #strategy-carousel-isolated .slick-next:before {
          font-family: sans-serif !important; font-size: 20px !important; color: var(--sc-text) !important;
          opacity: 1 !important; line-height: 1;
        }
        #strategy-carousel-isolated .slick-prev:before { content: "❮"; }
        #strategy-carousel-isolated .slick-next:before { content: "❯"; }
        
        #strategy-carousel-isolated .slick-dots li button:before { color: var(--text-white); opacity: 0.25; font-size: 12px; }
        #strategy-carousel-isolated .slick-dots li.slick-active button:before { color: var(--brand-blue); opacity: 1; }

        @media (max-width: 850px) { #strategy-carousel-isolated .slick-prev { left: -20px; } #strategy-carousel-isolated .slick-next { right: -20px; } }
        @media (max-width: 768px) {
          #strategy-carousel-isolated { padding: 60px 15px; }
          #strategy-carousel-isolated .slick-list { padding-bottom: 40px; }
          #strategy-carousel-isolated .sc-card { min-height: auto; }
        }
      `}</style>

      <div className="header-section">
        <span className="block text-[#FFFFFF] font-bold text-sm uppercase tracking-[2px] mb-4">
          Tailored Engineering
        </span>
        <h2 className="main-heading">
          Technical Solutions for <br />
          <span className="white-highlight"> Modern Digital Business </span>
        </h2>
        <p className="intro-text">
          Architecture is not one-size-fits-all. Whether you are an Agency requiring white-label precision, or an Enterprise needing micro-frontend scalability, I engineer the stack to fit your goals.
        </p>
      </div>

      <div className="max-w-[1000px] mx-auto">
        <Slider {...settings} className="sc-carousel-track">
          
          {/* SLIDE 1 */}
          <div>
            <div className="sc-card">
              <p className="sc-badge">Digital Agencies</p>
              <div>
                <ul>
                  <li><strong>Strategy:</strong> White Label Component Development.</li>
                  <li><strong>Tech:</strong> React / Storybook / Tailwind.</li>
                  <li><strong>Benefit:</strong> I handle the complex engineering; you take the credit. Deliver pixel-perfect Next.js sites without expanding your in-house team.</li>
                </ul>
              </div>
              <div className="sc-stat-row">
                <div className="sc-stat-val">100%</div>
                <div className="sc-stat-lbl">Brand Fidelity</div>
              </div>
            </div>
          </div>

          {/* SLIDE 2 */}
          <div>
            <div className="sc-card">
              <p className="sc-badge">Enterprise & B2B</p>
              <div>
                <ul>
                  <li><strong>Strategy:</strong> Micro-Frontend Architecture.</li>
                  <li><strong>Tech:</strong> Next.js (App Router) / GraphQL / Docker.</li>
                  <li><strong>Benefit:</strong> Decoupled systems that allow independent team deployment, high security, and zero-downtime scalability.</li>
                </ul>
              </div>
              <div className="sc-stat-row">
                <div className="sc-stat-val">99.9%</div>
                <div className="sc-stat-lbl">System Uptime</div>
              </div>
            </div>
          </div>

          {/* SLIDE 3 */}
          <div>
            <div className="sc-card">
              <p className="sc-badge">Headless Commerce</p>
              <div>
                <ul>
                  <li><strong>Strategy:</strong> Composable Commerce Stack.</li>
                  <li><strong>Tech:</strong> Shopify Headless / Next.js / Sanity.</li>
                  <li><strong>Benefit:</strong> Bypass template limitations. Create custom, high-speed shopping experiences with instant checkout flows.</li>
                </ul>
              </div>
              <div className="sc-stat-row">
                <div className="sc-stat-val">2x</div>
                <div className="sc-stat-lbl">Conversion Rate</div>
              </div>
            </div>
          </div>

          {/* SLIDE 4 */}
          <div>
            <div className="sc-card">
              <p className="sc-badge">SaaS & Startups</p>
              <div>
                <ul>
                  <li><strong>Strategy:</strong> Rapid MVP Engineering.</li>
                  <li><strong>Tech:</strong> Supabase / Next.js / Stripe.</li>
                  <li><strong>Benefit:</strong> Modular architecture that scales as you grow. Launch your product weeks ahead of competitors with a solid code foundation.</li>
                </ul>
              </div>
              <div className="sc-stat-row">
                <div className="sc-stat-val">Fast</div>
                <div className="sc-stat-lbl">Time-to-Market</div>
              </div>
            </div>
          </div>

        </Slider>
      </div>
    </section>
  );
};