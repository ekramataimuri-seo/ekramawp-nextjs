"use client";
import React from 'react';

export const HtmlSecondContent = () => {
  return (
    <section className="w-full bg-[#020617] py-24 px-5 box-border font-['Inter',sans-serif]">
      {/* SCOPED CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        .html-grid-container {
            max-width: 1400px;
            margin: 0 auto;
            color: #ffffff;
            display: flex;
            flex-direction: column;
            gap: 60px;
        }

        /* --- HEADING AREA --- */
        .html-heading-top {
            text-align: center;
            max-width: 900px;
            margin: 0 auto;
        }

        .html-heading-top h2 {
            font-size: clamp(2.5rem, 4vw, 3.8rem);
            font-weight: 900;
            color: #ffffff;
            line-height: 1.1;
            letter-spacing: -0.04em;
            margin-bottom: 20px;
        }

        .html-highlight-text {
            color: #207DE9;
        }

        .html-heading-top p {
            font-size: 1.15rem;
            color: #94a3b8;
            line-height: 1.7;
            margin: 0;
        }

        /* --- 3-COLUMN LAYOUT STRUCTURE --- */
        .html-features-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 40px;
            width: 100%;
            align-items: start;
        }

        @media (min-width: 768px) {
            .html-features-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (min-width: 1024px) {
            .html-features-grid {
                /* Top row: 3 columns. Bottom row handled via explicit placement */
                grid-template-columns: repeat(3, 1fr);
            }
        }

        /* --- FEATURE BLOCKS --- */
        .html-feature-item {
            display: flex;
            flex-direction: column;
            gap: 16px;
            padding: 24px;
            background: rgba(255, 255, 255, 0.02);
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.05);
            transition: transform 0.3s ease, background 0.3s ease;
            height: 100%;
        }

        .html-feature-item:hover {
            background: rgba(255, 255, 255, 0.04);
            transform: translateY(-4px);
            border-color: rgba(32, 125, 233, 0.3);
        }

        /* Icons */
        .html-feature-icon {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 8px;
            /* Subtle gradients for icons based on the image style */
            background: linear-gradient(135deg, rgba(32, 125, 233, 0.2), rgba(32, 125, 233, 0.05));
            border: 1px solid rgba(32, 125, 233, 0.2);
            color: #207DE9;
        }

        .html-feature-item h3 {
            font-size: 1.4rem;
            font-weight: 800;
            color: #ffffff;
            margin: 0;
            line-height: 1.2;
            letter-spacing: -0.01em;
        }

        .html-feature-item p {
            font-size: 1rem;
            color: #cbd5e1;
            line-height: 1.7;
            margin: 0;
            font-weight: 400;
        }

        /* --- BOTTOM ROW PLACEMENT --- */
        /* Forces the 4th item to stay in column 1 */
        .html-item-4 {
            grid-column: 1;
        }

        /* The GIF takes up columns 2 and 3 on the second row */
        .html-gif-span {
            grid-column: 1 / -1;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
        }

        @media (min-width: 1024px) {
            .html-gif-span {
                grid-column: 2 / span 2;
                margin-top: -20px; /* Slight visual adjustment to align nicely */
            }
        }

        .html-gif-display {
            width: 100%;
            height: 100%;
            min-height: 250px;
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            background-color: #0E1623;
            position: relative;
            display: flex;
            flex-direction: column;
        }

        /* Fake Code Editor Header */
        .html-gif-display::before {
            content: "● ● ● \A0\A0\A0 structure.html";
            white-space: pre;
            display: block;
            background-color: #1a2333;
            color: #64748b;
            font-size: 13px;
            font-weight: 600;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            padding: 12px 16px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .html-gif-display img {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
            object-position: top center;
            flex-grow: 1;
            filter: contrast(1.1) brightness(0.9);
        }

      `}} />

      <div className="html-grid-container">
        
        {/* TOP HEADING */}
        <div className="html-heading-top">
          <h2>Beyond the <span className="html-highlight-text">Tags</span></h2>
          <p>
            Mastering HTML is more than knowing syntax; it’s understanding how machines read human intent. It is the invisible scaffolding that dictates pure performance, perfect accessibility, and raw search ranking power.
          </p>
        </div>

        {/* 3-COLUMN GRID */}
        <div className="html-features-grid">
          
          {/* Row 1, Column 1 */}
          <div className="html-feature-item">
            <div className="html-feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
            </div>
            <h3>Microdata & Rich Semantics</h3>
            <p>
              I embed deep semantics using Microdata, JSON-LD, and Schema.org vocabularies directly into the DOM. This transforms a flat document into a structured data graph, allowing search engines and aggregators to instantly understand the exact context of your content.
            </p>
          </div>

          {/* Row 1, Column 2 */}
          <div className="html-feature-item">
            <div className="html-feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
            <h3>Advanced Form Engineering</h3>
            <p>
              Forms are the critical conversion bottlenecks of the web. I leverage native HTML5 Constraint Validation APIs to provide robust, accessible, and instantaneous client-side feedback before a single line of JavaScript executes, ensuring strict data integrity.
            </p>
          </div>

          {/* Row 1, Column 3 */}
          <div className="html-feature-item">
            <div className="html-feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            </div>
            <h3>Responsive & Performant Media</h3>
            <p>
              Serving the exact right asset to the right device is crucial. I architect complex <code>&lt;picture&gt;</code> elements and utilize strict <code>srcset</code> attributes to deliver highly optimized images, guaranteeing rapid rendering paths and perfect Core Web Vitals.
            </p>
          </div>

          {/* Row 2, Column 1 */}
          <div className="html-feature-item html-item-4">
            <div className="html-feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h3>Standards Compliance</h3>
            <p>
              Writing bulletproof HTML means respecting the living standard while anticipating browser edge cases. I ensure strict HTML5 compliance, forcing browsers into strict standards mode to guarantee predictable rendering across the entire fragmented landscape of devices.
            </p>
          </div>

          {/* Row 2, Columns 2 & 3: THE GIF */}
          <div className="html-gif-span">
            <div className="html-gif-display">
              <img 
                src="https://admin.wpfedev.com/wp-content/uploads/2026/02/GIFHTML.gif" 
                alt="HTML Code Typing Animation" 
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};