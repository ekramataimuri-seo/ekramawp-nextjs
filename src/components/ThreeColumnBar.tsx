"use client";
import React from 'react';

export const ThreeColumnBar = () => {
  return (
    <div className="three-column-main-wrapper">
      {/* Scoped Component Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .three-column-main-wrapper {
            --white: #FFFFFF;
            --primary-blue-03: #207DE9;
            --gray-07: #FFFFFF;         
            --gray-08: rgba(255, 255, 255, 0.9);         
            --gray-list-text: rgba(255, 255, 255, 0.7);
            
            --green-06: #152238;      
            --green-02: #D4EFE2;        
            --green-04: #26B16D;        
            --red-bg: #fbeaea;          
            --vivid-red: #cf2e2e;
            
            --card-bg-standard: rgba(255, 255, 255, 0.03);

            max-width: 1400px; 
            width: 100%;
            margin: 0 auto;
            padding: 80px 20px;
            font-family: 'Inter', sans-serif;
            background-color: transparent;
        }

        .three-column-main-wrapper h1 {
            text-align: center;
            font-size: clamp(2rem, 3.5vw, 2.8rem);
            font-weight: 900;
            color: var(--gray-07);
            margin-bottom: 70px;
            line-height: 1.2;
            letter-spacing: -0.02em;
        }

        .three-column-main-wrapper .highlight {
            color: var(--primary-blue-03);
            position: relative;
            display: inline-block;
            z-index: 1;
        }

        .three-column-main-wrapper .features-comparison-table {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
            align-items: stretch;
        }

        /* --- STANDARD CARD (Columns 2 & 4) --- */
        .three-column-main-wrapper .card-content {
            padding: 40px 30px;
            height: 100%;
            border-radius: 20px;
            /* REMOVED BORDER */
            background-color: var(--card-bg-standard);
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            transition: transform 0.3s ease;
            /* REMOVED BOX SHADOW */
        }

        /* --- HIGHLIGHTED CARD (Columns 1 & 3) --- */
        .three-column-main-wrapper .webfx-style {
            background: linear-gradient(180deg, #1C2D47 0%, #0E1623 100%);
            /* REMOVED BORDER */
            /* REMOVED DEEP SHADOW */
            transform: translateY(-10px);
            position: relative;
            z-index: 2;
        }

        /* REMOVED ::before pseudo-element (the top blue bar) */

        .three-column-main-wrapper .card-header-area {
            min-height: 60px;
            margin-bottom: 25px;
            display: flex;
            align-items: center;
            padding-bottom: 20px;
            /* REMOVED BOTTOM BORDER LINE */
        }

        .three-column-main-wrapper .logo {
            font-size: 26px;
            font-weight: 900;
            letter-spacing: -1px;
            color: #FFFFFF;
        }
        .three-column-main-wrapper .logo span { color: var(--primary-blue-03); }

        .three-column-main-wrapper h3 {
            font-size: 20px;
            font-weight: 700;
            color: var(--gray-07);
            margin: 0;
            line-height: 1.3;
        }

        .three-column-main-wrapper ul {
            list-style: none;
            padding: 0;
            margin: 0;
            flex-grow: 1;
        }

        .three-column-main-wrapper li {
            display: flex;
            align-items: flex-start;
            margin-bottom: 25px;
        }
        .three-column-main-wrapper li:last-child {
            margin-bottom: 0;
        }

        .three-column-main-wrapper li p {
            font-size: 15px;
            margin-left: 16px;
            line-height: 1.6;
            margin-top: -2px;
            font-weight: 400;
        }

        .three-column-main-wrapper .webfx-style li p { color: var(--gray-08); }
        .three-column-main-wrapper .card-content:not(.webfx-style) li p { color: var(--gray-list-text); }

        /* Icons */
        .three-column-main-wrapper .icon {
            flex-shrink: 0;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 11px;
            font-weight: 900;
        }

        .three-column-main-wrapper .icon-check { 
            background-color: rgba(38, 177, 109, 0.15); 
            color: var(--green-04); 
        }
        .three-column-main-wrapper .icon-cross { 
            background-color: rgba(207, 46, 46, 0.15); 
            color: var(--vivid-red); 
            font-size: 10px; 
        }

        /* RESPONSIVE BREAKPOINTS */
        @media (max-width: 1200px) {
            .three-column-main-wrapper .features-comparison-table { 
                grid-template-columns: repeat(2, 1fr); 
                gap: 30px;
            }
            .three-column-main-wrapper .webfx-style {
                transform: translateY(0);
            }
        }
        @media (max-width: 768px) {
            .three-column-main-wrapper .features-comparison-table { 
                grid-template-columns: 1fr; 
                gap: 20px;
            }
        }
      `}} />

      <h1>Unlock a <span className="highlight">10% increase</span> in organic traffic with our content marketing firm</h1>

      <div className="features-comparison-table">
        
        {/* Column 1: WPFEDEV (HIGHLIGHTED - No Border/Shadow/TopBar) */}
        <div className="grid-column">
          <div className="card-content webfx-style">
            <div className="card-header-area">
              <div className="logo">WPFEDEV<span>.com</span></div>
            </div>
            <ul>
              <li>
                <div className="icon icon-check">✔</div>
                <p>Dedicated account manager, interfacing with a team of 500+ digital marketing experts</p>
              </li>
              <li>
                <div className="icon icon-check">✔</div>
                <p>RevenueCloudFX access for optimizing, measuring, and reporting ROI</p>
              </li>
              <li>
                <div className="icon icon-check">✔</div>
                <p>In-depth analysis of your business goals, industry, and competitors</p>
              </li>
              <li>
                <div className="icon icon-check">✔</div>
                <p>In-house project management software, 24/7 help desk, and direct client phone line</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 2: In-House (STANDARD - No Border/Shadow) */}
        <div className="grid-column">
          <div className="card-content">
            <div className="card-header-area">
              <h3>In-House Marketing</h3>
            </div>
            <ul>
              <li>
                <div className="icon icon-cross">✘</div>
                <p>One or two team members trying to keep up with fast-paced marketing advancements</p>
              </li>
              <li>
                <div className="icon icon-cross">✘</div>
                <p>Analytics suite for measuring and improving campaign performance</p>
              </li>
              <li>
                <div className="icon icon-check">✔</div>
                <p>S.M.A.R.T. goals, but limited resources needed to execute</p>
              </li>
              <li>
                <div className="icon icon-cross">✘</div>
                <p>Reporting roadblocks leading to project delays and wasted spend</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 3: Typical Agency (HIGHLIGHTED - No Border/Shadow/TopBar) */}
        <div className="grid-column">
          <div className="card-content webfx-style">
            <div className="card-header-area">
              <h3>Typical Marketing Agency</h3>
            </div>
            <ul>
              <li>
                <div className="icon icon-check">✔</div>
                <p>Dedicated account manager responsible for strategy, but will need your help implementing solutions</p>
              </li>
              <li>
                <div className="icon icon-cross">✘</div>
                <p>Third-party tracking and analysis with subscription costs passed to you</p>
              </li>
              <li>
                <div className="icon icon-cross">✘</div>
                <p>Cookie-cutter checklists and solutions for optimizing your campaigns</p>
              </li>
              <li>
                <div className="icon icon-check">✔</div>
                <p>Regular, but unreliable support when issues arise with your account</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 4: Standard Agency (STANDARD - No Border/Shadow) */}
        <div className="grid-column">
          <div className="card-content">
            <div className="card-header-area">
              <h3>Standard Agency</h3>
            </div>
            <ul>
              <li>
                <div className="icon icon-check">✔</div>
                <p>Dedicated account manager responsible for strategy, but will need your help implementing solutions</p>
              </li>
              <li>
                <div className="icon icon-cross">✘</div>
                <p>Third-party tracking and analysis with subscription costs passed to you</p>
              </li>
              <li>
                <div className="icon icon-cross">✘</div>
                <p>Cookie-cutter checklists and solutions for optimizing your campaigns</p>
              </li>
              <li>
                <div className="icon icon-check">✔</div>
                <p>Regular, but unreliable support when issues arise with your account</p>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};