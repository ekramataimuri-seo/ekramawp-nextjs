"use client";

import React from "react";
import Slider from "react-slick";

// Ensure slick CSS is imported
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const WPDevCarousel = () => {
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
            --brand-blue: rgba(5, 150, 105, 0.8);
            --text-white: #ffffff;
            --sc-brand: rgba(5, 150, 105, 0.8); 
            --sc-card-bg:rgba(5, 150, 105, 0.2);
            --sc-text: #ffffff;
            --sc-border: rgba(255, 255, 255, 0.2); 
            --sc-radius: 12px; 
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
        .intro-text { font-size: 1.1rem; font-weight: 400; line-height: 1.6; color: var(--text-white); max-width: 700px; margin: 0 auto; }

        /* The Grid Split Layout */
        .split-layout {
            max-width: 1300px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr;
            gap: 40px;
            align-items: stretch;
        }

        @media (min-width: 1024px) {
            .split-layout {
                grid-template-columns: 1.2fr 0.8fr; 
            }
        }

        .carousel-column {
            min-width: 0; 
        }

        /* Increased bottom padding to make room for arrows & dots */
        #strategy-carousel-isolated .slick-list { margin: 0 -8px; padding-top: 15px; padding-bottom: 100px !important; }
        #strategy-carousel-isolated .slick-slide { padding: 0 8px; height: auto; display: flex !important; }
        #strategy-carousel-isolated .slick-track { display: flex !important; }

        /* Increased Card Height & Sizing */
        #strategy-carousel-isolated .sc-card {
          background: var(--sc-card-bg); 
          box-shadow: 4px -4px 15px 2px rgba(49, 44, 44, 0.5);
          border-radius: var(--sc-radius); 
          padding: 20px; padding-top: 60px; /* Restored slight padding */
          width: 100%; min-height: 420px; /* TALLER CARDS */
          height: 100%;
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
          position: absolute; top: 0; left: 0; right: 0; margin: 0; padding: 12px 10px;
          background: var(--sc-brand);
          color: #ffffff !important; font-size: 12px; font-weight: 800; text-transform: uppercase;
          letter-spacing: 1px; text-align: center; z-index: 10;
          border-radius: var(--sc-radius) var(--sc-radius) 0 0; 
        }

        #strategy-carousel-isolated .sc-card ul { padding-left: 12px; margin: 0; list-style-type: none; text-align: left; }
        #strategy-carousel-isolated .sc-card ul li { 
            margin-bottom: 12px; font-size: 0.9rem; /* Slightly larger text */
            color: var(--text-white); font-weight: 400; line-height: 1.5; 
            position: relative;
        }
        #strategy-carousel-isolated .sc-card ul li::before {
            content: "•"; color: var(--sc-brand); font-weight: bold; display: inline-block; width: 1em; margin-left: -1em;
        }
        #strategy-carousel-isolated strong { font-weight: 700; color: var(--sc-brand); }

        #strategy-carousel-isolated .sc-stat-row { margin-top: auto; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.1); text-align: left; }
        #strategy-carousel-isolated .sc-stat-val { font-size: 32px; font-weight: 900; color: var(--sc-brand); line-height: 1; margin-bottom: 6px; }
        #strategy-carousel-isolated .sc-stat-lbl { font-size: 11px; color: rgba(255,255,255,0.7); font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; }

        /* Centered Bottom Arrows */
        #strategy-carousel-isolated .slick-prev, 
        #strategy-carousel-isolated .slick-next {
          width: 38px; height: 38px; z-index: 100; 
          background-color: var(--sc-card-bg); 
          border: 1px solid var(--sc-border);
          border-radius: 50%; 
          transition: all 0.2s ease;
          display: flex !important;
          align-items: center;
          justify-content: center;
          
          /* Overriding Slick's default middle positioning */
          top: auto !important; 
          bottom: 30px !important; 
          transform: none !important;
        }
        
        #strategy-carousel-isolated .slick-prev:hover, 
        #strategy-carousel-isolated .slick-next:hover { 
            background-color: var(--sc-brand); border-color: var(--sc-brand); 
        }
        
        /* Positioning them perfectly in the center with a gap between them */
        #strategy-carousel-isolated .slick-prev { left: calc(50% - 45px) !important; }
        #strategy-carousel-isolated .slick-next { right: auto !important; left: calc(50% + 5px) !important; }
        
        #strategy-carousel-isolated .slick-prev:before, 
        #strategy-carousel-isolated .slick-next:before {
          font-family: sans-serif !important; font-size: 16px !important; color: var(--sc-text) !important;
          opacity: 1 !important; line-height: 1;
        }
        #strategy-carousel-isolated .slick-prev:before { content: "❮"; }
        #strategy-carousel-isolated .slick-next:before { content: "❯"; }
        
        /* Lowered dots to sit beneath the new arrow positions */
        #strategy-carousel-isolated .slick-dots { bottom: -5px !important; }
        #strategy-carousel-isolated .slick-dots li button:before { color: var(--text-white); opacity: 0.25; font-size: 10px; }
        #strategy-carousel-isolated .slick-dots li.slick-active button:before { color: var(--brand-blue); opacity: 1; }

        /* Right Column Detail Content */
        .content-column {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-top: -60px; /* Adjust this negative value to nudge it higher or lower */
        }
        
        .detail-content {
            background: rgba(255, 255, 255, 0.03);
            padding: 30px;
        }
        
        .detail-content h3 {
            font-size: 1.8rem;
            font-weight: 800;
            color: var(--brand-blue);
            margin-bottom: 15px;
            line-height: 1.2;
        }

        .detail-content h4 {
            font-size: 1.1rem;
            font-weight: 700;
            color: var(--text-white);
            margin-top: 20px;
            margin-bottom: 8px;
            padding-left: 10px;
        }

        .detail-content p {
            font-size: 0.95rem;
            line-height: 1.6;
            color: rgba(255, 255, 255, 0.7);
            margin-bottom: 15px;
        }

        @media (max-width: 768px) {
          #strategy-carousel-isolated { padding: 40px 15px 80px; }
          .split-layout { gap: 20px; }
          .detail-content { padding: 20px; }
        }
      `}</style>

      <div className="header-section">
        <h2 className="main-heading">
          Technical Solutions for <br />
          <span className="white-highlight"> Modern Digital Business </span>
        </h2>
        <p className="intro-text">
          Architecture is not one-size-fits-all. Whether you are an Agency requiring white-label precision, or an Enterprise needing micro-frontend scalability, I engineer the stack to fit your goals.
        </p>
      </div>

      <div className="split-layout">
        
        {/* LEFT COLUMN: The Carousel */}
        <div className="carousel-column">
          <Slider {...settings} className="sc-carousel-track">
            
            {/* SLIDE 1 */}
            <div>
              <div className="sc-card">
                <p className="sc-badge">Digital Agencies</p>
                <div>
                  <ul>
                    <li><strong>Strategy:</strong> White Label Components.</li>
                    <li><strong>Tech:</strong> React / Storybook.</li>
                    <li><strong>Benefit:</strong> Handle complex engineering and deliver pixel-perfect sites.</li>
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
                    <li><strong>Strategy:</strong> Micro-Frontend Arch.</li>
                    <li><strong>Tech:</strong> Next.js / GraphQL.</li>
                    <li><strong>Benefit:</strong> Decoupled systems for high security and scalability.</li>
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
                    <li><strong>Strategy:</strong> Composable Stack.</li>
                    <li><strong>Tech:</strong> Shopify / Sanity.</li>
                    <li><strong>Benefit:</strong> Bypass template limits. High-speed shopping experiences.</li>
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
                    <li><strong>Strategy:</strong> Rapid MVP Eng.</li>
                    <li><strong>Tech:</strong> Supabase / Stripe.</li>
                    <li><strong>Benefit:</strong> Modular architecture that scales. Launch weeks ahead.</li>
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

        {/* RIGHT COLUMN: Detailed Context */}
        <div className="content-column">
            <div className="detail-content">
                <h3>Deep-Dive Into The Stack</h3>
                <p>
                    Choosing the right architecture is the foundation of digital success. By isolating components and decoupling the front-end from the back-end, we ensure that your platform can adapt to future technological shifts without requiring a complete rewrite.
                </p>
                
                <h4>For Agencies & Enterprise</h4>
                <p>
                    <strong>Agencies</strong> need velocity without sacrificing quality. By leveraging modular design systems, we guarantee 100% brand fidelity. 
                </p>

                <h4>For Commerce & Startups</h4>
                <p>
                    A <strong>Headless Commerce</strong> approach separates presentation from the engine, drastically reducing page load times. 
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};