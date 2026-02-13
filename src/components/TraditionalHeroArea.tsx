"use client";
import React from 'react';

export const TraditionalHeroArea = () => {
  return (
    <div className="fe-hero-wrapper">
      {/* Scoped Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Scoped Variables */
        .fe-hero-wrapper {
            --fe-highlight-1: #3C66A6;
            --fe-highlight-2: #2E476E;
            --fe-main-blue: #3F5CE0;
            --fe-white: #FFFFFF;
            
            font-family: var(--font-base-default, sans-serif);
            
            /* --- FORCE FULL WIDTH BREAKOUT FIX --- */
            width: 100vw;
            position: relative;
            left: 50%;
            right: 50%;
            margin-left: -50vw;
            margin-right: -50vw;
            /* ------------------------------------- */

            overflow: hidden;
            /* Reduced padding for shorter height */
            padding: 2rem 1rem;
            background: #000000;
            box-sizing: border-box;
            
            background-image: url('https://admin.wpfedev.com/wp-content/uploads/2026/02/vector-lines.webp');
            background-repeat: no-repeat;
            background-position: right center; 
            background-size: 600px auto;
        }

        /* Layout Structure */
        .fe-hero-container {
            display: flex;
            flex-direction: column;
            max-width: 1200px;
            margin: 0 auto;
            gap: 2rem;
            position: relative;
            z-index: 2;
            box-sizing: border-box;
            padding: 0 20px; /* Safety padding for mobile edges */
        }

        @media (min-width: 992px) {
            .fe-hero-container {
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
            }
            
            /* 60% Left Column */
            .fe-col-left {
                flex: 0 0 60%;
                max-width: 60%;
                padding-right: 2rem;
            }

            /* 40% Right Column */
            .fe-col-right {
                flex: 0 0 40%;
                max-width: 40%;
                position: relative;
                height: 400px; 
                display: flex;
                align-items: center;
                justify-content: flex-start; 
                padding-left: 20px; 
            }
        }

        /* --- Left Column Typography --- */
        
        .fe-subtitle {
            color: var(--fe-white);
            text-transform: uppercase;
            letter-spacing: 2px;
            font-size: 0.875rem;
            font-weight: 700;
            margin-bottom: 0.75rem;
            display: block;
        }

        .fe-hero-wrapper h2 {
            color: var(--fe-main-blue);
            font-weight: 900;
            font-size: clamp(1.5rem, 3vw, 2.5rem);
            line-height: 1.1;
            margin-bottom: 1rem;
        }

        .highlight-scratch {
            color: var(--fe-white);
            position: relative;
            z-index: 1;
            padding: 0 8px; 
            display: inline-block;
            background-image: 
                linear-gradient(to right, var(--fe-highlight-1), var(--fe-highlight-1)),
                linear-gradient(to right, var(--fe-highlight-2), var(--fe-highlight-2));
            background-size: 100% 12px, 100% 8px;
            background-position: 0 85%, 0 95%;
            background-repeat: no-repeat;
        }

        .fe-hero-wrapper h3 {
            color: var(--fe-white);
            font-weight: 900;
            font-size: clamp(1.0rem, 1vw, 1.2rem);
            margin-bottom: 0.75rem;
        }

        .fe-hero-wrapper p {
            color: var(--fe-white);
            font-weight: 400;
            font-size: 1rem;
            line-height: 1.5;
            margin-bottom: 1.5rem;
            max-width: 95%;
        }

        .fe-cta-group {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        
        .fe-btn {
            background-color: var(--fe-main-blue);
            color: white;
            padding: 10px 22px;
            font-weight: 700;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            text-decoration: none;
            display: inline-block;
        }
        
        .fe-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(63, 92, 224, 0.4);
        }

        /* --- Right Column Visuals (The Circles) --- */

        .fe-circle-container {
            position: relative;
            width: 380px; 
            height: 380px;
            margin: 0; 
            transform: scale(0.85); 
            transform-origin: left center;
        }

        .fe-stat-circle {
            position: absolute;
            border-radius: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: white;
            box-shadow: 0 20px 40px rgba(0,0,0,0.5); 
            transition: all 0.3s ease;
            cursor: default;
        }

        .fe-stat-circle:hover {
            box-shadow: 0 0 25px var(--fe-main-blue), 0 0 50px rgba(63, 92, 224, 0.4);
            z-index: 100 !important;
            filter: brightness(1.1);
            animation-play-state: paused;
        }

        .fe-stat-num {
            font-weight: 900;
            font-size: 1.6rem;
            line-height: 1;
            margin-bottom: 4px;
        }
        .fe-stat-label {
            font-size: 0.75rem;
            font-weight: 500;
            opacity: 0.9;
            line-height: 1.2;
        }

        /* POSITIONING */
        
        /* 1. 98% (Blue) - Top Left */
        .c-1 {
            width: 170px;
            height: 170px;
            background: linear-gradient(135deg, #3F5CE0, #2E476E);
            top: 0px;
            left: 0px;
            z-index: 2;
            animation: float-1 6s ease-in-out infinite;
        }

        /* 2. React (Purple) - Top Right (Behind) */
        .c-2 {
            width: 140px;
            height: 140px;
            background: linear-gradient(135deg, #8E44AD, #6C3483);
            top: -10px;
            right: -10px;
            z-index: 1; 
            animation: float-2 7s ease-in-out infinite;
            animation-delay: 0.5s;
        }

        /* 3. 100% (Dark Blue) - Bottom Right */
        .c-3 {
            width: 190px;
            height: 190px;
            background: linear-gradient(135deg, #0056b3, #003d80);
            bottom: 0px;
            right: 0px;
            z-index: 3;
            animation: float-3 8s ease-in-out infinite;
            animation-delay: 1s;
        }

        /* 4. </> (Cyan) - Bottom Left */
        .c-4 {
            width: 120px;
            height: 120px;
            background: linear-gradient(135deg, #00d2ff, #3a7bd5);
            bottom: -10px;
            left: -10px;
            z-index: 4;
            animation: float-2 9s ease-in-out infinite;
            animation-delay: 2s;
        }

        /* 5. 60+ FPS (Grey) - CENTER PIN (On Top) */
        .c-5 {
            width: 130px;
            height: 130px;
            background: linear-gradient(135deg, #34495E, #2C3E50);
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%); 
            z-index: 10; 
            animation: float-center 5s ease-in-out infinite;
            animation-delay: 0s;
            border: 2px solid rgba(255,255,255,0.05);
        }

        /* Floating Animations */
        @keyframes float-1 {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
        }
        @keyframes float-2 {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-10px) translateX(8px); }
        }
        @keyframes float-3 {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-10px) scale(1.02); }
        }
        @keyframes float-center {
            0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
            50% { transform: translate(-50%, -50%) translateY(-8px); }
        }

        /* Mobile Adjustment */
        @media (max-width: 768px) {
            .fe-col-right {
                height: 350px; 
                margin-top: 2rem;
                justify-content: center;
                padding-left: 0;
            }
            .fe-circle-container {
                 transform: scale(0.75);
                 width: 320px;
                 height: 320px;
                 margin: 0 auto;
                 transform-origin: center center;
            }
            .fe-hero-wrapper {
                background-size: cover; 
                background-position: center bottom;
            }
        }
      `}} />

      <div className="fe-hero-container">
        
        <div className="fe-col-left">
          <span className="fe-subtitle">Front-End Architecture</span>
          
          <h2>
            Crafting High-Performance User Interfaces with <span className="highlight-scratch">Scalable Code</span>
          </h2>
          
          <h3>
            MODERN JAVASCRIPT & UI ENGINEERING
          </h3>
          
          <p>
            I specialize in building pixel-perfect, accessible, and responsive web applications. 
            Leveraging modern frameworks to bridge the gap between complex backend logic and 
            buttery-smooth frontend experiences. No bloat, just code.
          </p>

          <div className="fe-cta-group">
            <a href="#portfolio" className="fe-btn">View Projects &rarr;</a>
          </div>
        </div>

        <div className="fe-col-right">
          <div className="fe-circle-container">
            
            <div className="fe-stat-circle c-1">
              <span className="fe-stat-num">98%</span>
              <span className="fe-stat-label">Lighthouse<br />Performance</span>
            </div>

            <div className="fe-stat-circle c-2">
              <span className="fe-stat-num">React</span>
              <span className="fe-stat-label">Component<br />Architecture</span>
            </div>

            <div className="fe-stat-circle c-3">
              <span className="fe-stat-num">100%</span>
              <span className="fe-stat-label">Type-Safe<br />Codebase</span>
            </div>

            <div className="fe-stat-circle c-4">
              <span className="fe-stat-num">&lt;/&gt;</span>
              <span className="fe-stat-label">Clean<br />Syntax</span>
            </div>

            <div className="fe-stat-circle c-5">
              <span className="fe-stat-num">60+</span>
              <span className="fe-stat-label">FPS<br />Anim.</span>
            </div>

          </div>
        </div>
        
      </div>
    </div>
  );
};