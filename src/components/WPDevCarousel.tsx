"use client";

import React, { useEffect, useMemo, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const WPDevCarousel = () => {
  const [mounted, setMounted] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(2);

  useEffect(() => {
    const updateSlides = () => {
      setSlidesToShow(window.innerWidth <= 768 ? 1 : 2);
    };

    updateSlides();
    setMounted(true);

    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const settings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow,
      slidesToScroll: 1,
      arrows: true,
      cssEase: "cubic-bezier(0.25, 0.1, 0.25, 1)",
    }),
    [slidesToShow]
  );

  if (!mounted) return null;

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
          --sc-card-bg: rgba(5, 150, 105, 0.2);
          --sc-text: #ffffff;
          --sc-border: rgba(255, 255, 255, 0.2);
          --sc-radius: 12px;
        }

        #strategy-carousel-isolated {
          display: block;
          width: 100%;
          margin: 0 auto;
          padding: 80px 20px 100px;
          box-sizing: border-box;
          position: relative;
        }

        .header-section {
          max-width: 900px;
          margin: 0 auto 60px;
          text-align: center;
          padding: 0 20px;
          position: relative;
          z-index: 10;
        }

        .main-heading {
          margin-bottom: 25px;
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
          content: "";
          position: absolute;
          left: 0;
          width: 100%;
          z-index: -1;
          border-radius: 4px;
        }

        .intro-text {
          max-width: 700px;
          margin: 0 auto;
        }

       .split-layout {
  max-width: 1300px;
  width: 100%;             /* Ensure it takes full available width */
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: stretch;
  padding: 0 20px;         /* ADD THIS: Provides a safety gutter at 100% zoom */
  box-sizing: border-box;  /* Ensures padding doesn't add to the width */
}

        @media (min-width: 1024px) {
          .split-layout {
            grid-template-columns: 1.2fr 0.8fr;
          }
        }

        .carousel-column {
          min-width: 0;
        }

        #strategy-carousel-isolated .slick-slider {
          width: 100%;
        }

        #strategy-carousel-isolated .slick-list {
          padding-top: 15px;
          padding-bottom: 100px !important;
          margin: 0 -10px;
          overflow: hidden;
        }

        #strategy-carousel-isolated .slick-track {
          display: block !important;
        }

        #strategy-carousel-isolated .slick-slide {
          display: block !important;
          float: left !important;
          height: auto !important;
        }

        #strategy-carousel-isolated .slick-slide > div {
          width: 100%;
          padding: 0 10px;
          box-sizing: border-box;
        }

        #strategy-carousel-isolated .sc-card {
          background: var(--sc-card-bg);
          box-shadow: 4px -4px 15px 2px rgba(49, 44, 44, 0.5);
          border-radius: var(--sc-radius);
          padding: 20px;
          padding-top: 60px;
          width: 100%;
          min-height: 420px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          transition: transform 0.3s ease, border-color 0.3s ease;
          transform: translateZ(0);
          will-change: transform;
          box-sizing: border-box;
        }

        #strategy-carousel-isolated .sc-card:hover {
          transform: translateY(-5px);
          border-color: var(--sc-brand);
        }

        #strategy-carousel-isolated .sc-badge {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          margin: 0;
          padding: 12px 10px;
          background: var(--sc-brand);
          color: #ffffff !important;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-align: center;
          z-index: 10;
          border-radius: var(--sc-radius) var(--sc-radius) 0 0;
        }

        #strategy-carousel-isolated .sc-card ul {
          padding-left: 12px;
          margin: 0;
          list-style-type: none;
          text-align: left;
        }

        #strategy-carousel-isolated .sc-card ul li {
          margin-bottom: 12px;
          position: relative;
        }

        #strategy-carousel-isolated .sc-card ul li::before {
          content: "•";
          color: var(--sc-brand);
          font-weight: bold;
          display: inline-block;
          width: 1em;
          margin-left: -1em;
        }

        #strategy-carousel-isolated strong {
          color: var(--sc-brand);
        }

        #strategy-carousel-isolated .sc-stat-row {
          margin-top: auto;
          padding-top: 15px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: left;
        }

        #strategy-carousel-isolated .sc-stat-val {
          font-size: 32px;
          font-weight: 900;
          color: var(--sc-brand);
          line-height: 1;
          margin-bottom: 6px;
        }

        #strategy-carousel-isolated .sc-stat-lbl {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }

        #strategy-carousel-isolated .slick-prev,
        #strategy-carousel-isolated .slick-next {
          width: 38px;
          height: 38px;
          z-index: 100;
          background-color: var(--sc-card-bg);
          border: 1px solid var(--sc-border);
          border-radius: 50%;
          transition: all 0.2s ease;
          display: flex !important;
          align-items: center;
          justify-content: center;
          top: auto !important;
          bottom: 30px !important;
          transform: none !important;
        }

        #strategy-carousel-isolated .slick-prev:hover,
        #strategy-carousel-isolated .slick-next:hover {
          background-color: var(--sc-brand);
          border-color: var(--sc-brand);
        }

        #strategy-carousel-isolated .slick-prev {
          left: calc(50% - 45px) !important;
        }

        #strategy-carousel-isolated .slick-next {
          right: auto !important;
          left: calc(50% + 5px) !important;
        }

        #strategy-carousel-isolated .slick-prev:before,
        #strategy-carousel-isolated .slick-next:before {
          font-family: sans-serif !important;
          font-size: 16px !important;
          color: var(--sc-text) !important;
          opacity: 1 !important;
          line-height: 1;
        }

        #strategy-carousel-isolated .slick-prev:before {
          content: "❮";
        }

        #strategy-carousel-isolated .slick-next:before {
          content: "❯";
        }

        #strategy-carousel-isolated .slick-dots {
          bottom: -5px !important;
        }

        #strategy-carousel-isolated .slick-dots li button:before {
          color: var(--text-white);
          opacity: 0.25;
          font-size: 10px;
        }

        #strategy-carousel-isolated .slick-dots li.slick-active button:before {
          color: var(--brand-blue);
          opacity: 1;
        }

        .content-column {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-top: -60px;
        }

        /* --- STYLES FOR THE NEW SEO STRATEGY CARD --- */
        .seo-strategy-card {
          border-radius: var(--sc-radius);
          padding: 30px 30px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .seo-icon {
          color: var(--sc-brand);
          margin-bottom: 10px;
        }

        .seo-card-title {
           line-height: 1.2;
           margin-bottom: 10px;
        }

        .seo-card-title span {
          color: var(--sc-brand);
          display: block;
        }

        .seo-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--sc-border);
          border-radius: 8px;
          padding: 14px 16px;
          color: white;
          outline: none;
        }

        .seo-button {
          background: var(--sc-brand);
          color: white;
          border: none;
          border-radius: 8px;
          padding: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: filter 0.2s ease;
        }

        .seo-button:hover {
          filter: brightness(1.2);
        }

        @media (max-width: 768px) {
          #strategy-carousel-isolated {
            padding: 60px 16px 0px;
          }

          #strategy-carousel-isolated .slick-list {
            margin: 0 -6px;
            padding-bottom: 90px !important;
          }

          #strategy-carousel-isolated .slick-slide > div {
            padding: 0 18px;
          }

          #strategy-carousel-isolated .sc-card {
            min-height: 400px;
          }

          .content-column {
            margin-top: 0;
          }
        }
      `}</style>

      <div className="header-section">
        <h2 className="main-heading">
          Technical Solutions for <br />
          <span className="white-highlight"> Modern Digital Business </span>
        </h2>
        <p className="intro-text">
          Architecture is not one-size-fits-all. Whether you are an Agency
          requiring white-label precision, or an Enterprise needing
          micro-frontend scalability, I engineer the stack to fit your goals.
        </p>
      </div>

      <div className="split-layout">
        <div className="carousel-column">
          <Slider key={slidesToShow} {...settings} className="sc-carousel-track">
            <div>
              <div className="sc-card">
                <p className="sc-badge">Digital Agencies</p>
                <div>
                  <ul>
                    <li>
                      <strong>Strategy:</strong> White Label Components.
                    </li>
                    <li>
                      <strong>Tech:</strong> React / Storybook.
                    </li>
                    <li>
                      <strong>Benefit:</strong> Handle complex engineering and
                      deliver pixel-perfect sites.
                    </li>
                  </ul>
                </div>
                <div className="sc-stat-row">
                  <div className="sc-stat-val">100%</div>
                  <div className="sc-stat-lbl">Brand Fidelity</div>
                </div>
              </div>
            </div>

            <div>
              <div className="sc-card">
                <p className="sc-badge">Enterprise &amp; B2B</p>
                <div>
                  <ul>
                    <li>
                      <strong>Strategy:</strong> Micro-Frontend Arch.
                    </li>
                    <li>
                      <strong>Tech:</strong> Next.js / GraphQL.
                    </li>
                    <li>
                      <strong>Benefit:</strong> Decoupled systems for high
                      security and scalability.
                    </li>
                  </ul>
                </div>
                <div className="sc-stat-row">
                  <div className="sc-stat-val">99.9%</div>
                  <div className="sc-stat-lbl">System Uptime</div>
                </div>
              </div>
            </div>

            <div>
              <div className="sc-card">
                <p className="sc-badge">Headless Commerce</p>
                <div>
                  <ul>
                    <li>
                      <strong>Strategy:</strong> Composable Stack.
                    </li>
                    <li>
                      <strong>Tech:</strong> Shopify / Sanity.
                    </li>
                    <li>
                      <strong>Benefit:</strong> Bypass template limits.
                      High-speed shopping experiences.
                    </li>
                  </ul>
                </div>
                <div className="sc-stat-row">
                  <div className="sc-stat-val">2x</div>
                  <div className="sc-stat-lbl">Conversion Rate</div>
                </div>
              </div>
            </div>

            <div>
              <div className="sc-card">
                <p className="sc-badge">SaaS &amp; Startups</p>
                <div>
                  <ul>
                    <li>
                      <strong>Strategy:</strong> Rapid MVP Eng.
                    </li>
                    <li>
                      <strong>Tech:</strong> Supabase / Stripe.
                    </li>
                    <li>
                      <strong>Benefit:</strong> Modular architecture that
                      scales. Launch weeks ahead.
                    </li>
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

        {/* --- RIGHT COLUMN: NEW STRATEGY CARD --- */}
        <div className="content-column">
          <div className="seo-strategy-card">
            <div className="seo-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            
            <h3 className="seo-card-title">
              SEO Services That <br />
              <span>Aren't Cookie Cutter</span>
            </h3>

            <p>
              Get an SEO strategy that's tailored for your business, industry, and revenue goals.
            </p>

            <input 
              type="text" 
              placeholder="Enter your website" 
              className="seo-input" 
            />

            <button className="seo-button">
              Get My SEO Strategy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};