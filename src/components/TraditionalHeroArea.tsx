"use client";
import React from 'react';

export const TraditionalHeroArea = () => {
  return (
    <section className="trad-wp-wrapper">
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
            --primary-blue: #207DE9;
            --dark-blue: #083A74;
            --darker-blue: #0E1623;
            --light-blue: #CCE4FF;
            --white: #ffffff;
            --text-gray: #A9B4BC;
            --border-color: rgba(255, 255, 255, 0.1);
        }

        .trad-wp-wrapper {
            background-color: transparent; /* Inherits your dark theme */
            padding: 80px 20px;
            font-family: 'Inter', sans-serif;
            width: 100%;
            box-sizing: border-box;
            color: var(--white);
            overflow: hidden;
        }

        .trad-wp-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 60px;
            align-items: center;
        }

        @media (min-width: 992px) {
            .trad-wp-container {
                flex-direction: row;
                justify-content: space-between;
            }
        }

        /* --- LEFT COLUMN: TEXT --- */
        .trad-wp-text-col {
            flex: 1;
            max-width: 500px;
        }

        .trad-subtitle {
            color: var(--primary-blue);
            text-transform: uppercase;
            letter-spacing: 2px;
            font-size: 0.85rem;
            font-weight: 800;
            margin-bottom: 1rem;
            display: block;
        }

        .trad-wp-text-col h2 {
            color: var(--white);
            font-weight: 900;
            font-size: clamp(2rem, 3.5vw, 3rem);
            line-height: 1.15;
            letter-spacing: -0.02em;
            margin-bottom: 1.5rem;
        }

        .trad-highlight {
            color: var(--primary-blue);
        }

        .trad-wp-text-col p {
            color: var(--text-gray);
            font-size: 1.1rem;
            line-height: 1.6;
            margin-bottom: 2rem;
        }

        .trad-btn {
            background-color: var(--primary-blue);
            color: white;
            padding: 14px 28px;
            font-weight: 700;
            font-size: 1rem;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            text-decoration: none;
            display: inline-block;
        }
        
        .trad-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(32, 125, 233, 0.4);
        }

        /* --- RIGHT COLUMN: VISUALS --- */
        .trad-wp-visual-col {
            flex: 1.2;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 550px;
            width: 100%;
        }

        /* --- THE CENTRAL REVIEW CARD --- */
        .appr_hero-stat-card {
            background-color: var(--darker-blue);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 35px 30px;
            width: 100%;
            max-width: 420px;
            text-align: center;
            box-shadow: 0 20px 40px rgba(0,0,0,0.5);
            position: relative;
            z-index: 10;
        }

        .appr_hero-stat-card ._text {
            font-size: 1.1rem;
            font-weight: 500;
            line-height: 1.6;
            margin-bottom: 20px;
            font-style: italic;
            color: var(--white);
        }

        .appr_hero-stat-card ._by {
            font-size: 0.95rem;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            color: var(--light-blue);
            margin-bottom: 20px;
        }

        .appr_hero-stat-card ._border {
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
            margin-bottom: 20px;
        }

        .appr_hero-stat-card ._ratings {
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: center;
        }

        .appr_hero-stat-card ._rating {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 0.85rem;
            color: var(--text-gray);
        }

        /* --- THE FLIP BUBBLES --- */
        .appr_hero-stat-buble {
            position: absolute;
            width: 180px;
            height: 180px;
            perspective: 1000px;
            z-index: 5;
        }

        /* Positioning within the right column */
        .appr_hero-stat-buble._first { top: 0%; left: -5%; }
        .appr_hero-stat-buble._second { bottom: 5%; left: 0%; z-index: 12;}
        .appr_hero-stat-buble._third { top: 25%; right: -5%; }

        .appr_hero-stat-buble ._body {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);
            transform-style: preserve-3d;
            border-radius: 50%;
            box-shadow: 0 15px 35px rgba(0,0,0,0.6);
            cursor: pointer;
        }

        .appr_hero-stat-buble:hover ._body {
            transform: rotateY(180deg);
        }

        ._front, ._back {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            border-radius: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 15px;
            box-sizing: border-box;
            border: 1px solid var(--border-color);
        }

        /* Front Styling */
        ._front {
            background: linear-gradient(135deg, #1C2D47, #0E1623);
        }
        
        ._front ._value {
            font-size: 2.2rem;
            font-weight: 900;
            color: var(--primary-blue);
            line-height: 1;
            margin-bottom: 5px;
        }

        ._front ._title {
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 3px;
            color: var(--white);
        }

        ._front ._desc {
            font-size: 0.65rem;
            color: var(--text-gray);
            margin: 0;
        }

        /* Back Styling */
        ._back {
            background: var(--primary-blue);
            transform: rotateY(180deg);
            color: var(--white);
        }

        ._back h5 {
            font-size: 0.75rem;
            font-weight: 800;
            margin-bottom: 8px;
            line-height: 1.3;
        }

        ._back p {
            font-size: 0.7rem;
            line-height: 1.4;
            margin: 0;
            opacity: 0.9;
        }

        /* Floating Animation */
        @keyframes float-bubble {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
        }

        .appr_hero-stat-buble._first { animation: float-bubble 6s ease-in-out infinite; }
        .appr_hero-stat-buble._second { animation: float-bubble 7s ease-in-out infinite 1s; }
        .appr_hero-stat-buble._third { animation: float-bubble 8s ease-in-out infinite 0.5s; }

        /* Responsive Design */
        @media (max-width: 768px) {
            .trad-wp-visual-col {
                min-height: auto;
                padding-top: 40px;
                padding-bottom: 40px;
            }
            .appr_hero-stat-buble {
                width: 140px;
                height: 140px;
            }
            ._front ._value { font-size: 1.5rem; }
            ._front ._title { font-size: 0.6rem; }
            ._back h5 { font-size: 0.65rem; }
            ._back p { font-size: 0.6rem; }
            
            .appr_hero-stat-buble._first { top: -20px; left: 0; }
            .appr_hero-stat-buble._second { bottom: -20px; left: 10px; }
            .appr_hero-stat-buble._third { top: 40%; right: -10px; }
        }
      `}} />

      <div className="trad-wp-container">
        
        {/* --- LEFT COLUMN --- */}
        <div className="trad-wp-text-col">
          <span className="trad-subtitle">Traditional WP Expertise</span>
          <h2>Bespoke WordPress Themes <span className="trad-highlight">Without the Bloat.</span></h2>
          <p>
            We architect high-performance, custom WordPress websites from the ground up. 
            By avoiding heavy page builders and relying on clean PHP, Advanced Custom Fields (ACF), 
            and optimized CSS/JS, we deliver fully editable backends with lightning-fast frontends.
          </p>
          <a href="#contact" className="trad-btn">Explore Our WP Services</a>
        </div>

        {/* --- RIGHT COLUMN --- */}
        <div className="trad-wp-visual-col">
          
          {/* Bubble 1 */}
          <div className="appr_hero-stat-buble _first">
            <div className="_body">
              <div className="_front">
                <div className="_value">99%</div>
                <h5 className="_title">Custom Built</h5>
                <p className="_desc">No pre-made templates</p>
              </div>
              <div className="_back">
                <h5>WHY CUSTOM THEMES?</h5>
                <p>Zero plugin bloat<br/>Total design freedom<br/>Better security</p>
              </div>
            </div>
          </div>

          {/* Bubble 2 */}
          <div className="appr_hero-stat-buble _second">
            <div className="_body">
              <div className="_front">
                <div className="_value">100%</div>
                <h5 className="_title">ACF Powered</h5>
                <p className="_desc">Easy content management</p>
              </div>
              <div className="_back">
                <h5>SEAMLESS EDITING</h5>
                <p>Custom field groups<br/>Gutenberg blocks<br/>No code required</p>
              </div>
            </div>
          </div>

          {/* Bubble 3 */}
          <div className="appr_hero-stat-buble _third">
            <div className="_body">
              <div className="_front">
                <div className="_value">3x</div>
                <h5 className="_title">Faster Speeds</h5>
                <p className="_desc">Compared to builders</p>
              </div>
              <div className="_back">
                <h5>PERFORMANCE FIRST</h5>
                <p>Optimized database<br/>Clean PHP structure<br/>Efficient queries</p>
              </div>
            </div>
          </div>

          {/* Center Review Card */}
          <div className="appr_hero-stat-card">
            <p className="_text">
              “Their custom WordPress theme completely transformed our editorial workflow. The site is incredibly fast, the ACF integration is flawless, and our marketing team loves the new backend.”
            </p>
            <h4 className="_by">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#207DE9"/>
              </svg>
              Sarah J., Marketing Director
            </h4>
            
            <div className="_border"></div>
            
            <div className="_ratings">
              <div className="_rating">
                <span style={{ color: '#FFD12D', fontSize: '1.1rem', letterSpacing: '2px' }}>★★★★★</span>
                <span>Rated 5.0/5 on WordPress Architecture</span>
              </div>
              <div className="_rating">
                <span style={{ color: '#FFD12D', fontSize: '1.1rem', letterSpacing: '2px' }}>★★★★★</span>
                <span>100% Code Quality Score</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};