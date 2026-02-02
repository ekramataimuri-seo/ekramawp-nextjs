"use client";

import React from "react";

export const StatsSection = () => {
  // Data array for Front End Engineering stats
  const stats = [
    {
      value: "53%",
      desc: "of mobile users abandon a site if it takes longer than 3 seconds to load.",
    },
    {
      value: "7%",
      desc: "Drop in conversion rates for every 100-millisecond delay in load time.",
    },
    {
      value: "100%",
      desc: "Performance score on Lighthouse correlates with higher SEO rankings.",
    },
    {
      value: "400%",
      desc: "Return on Investment (ROI) for every dollar spent on UX engineering.",
    },
  ];

  return (
    <section 
      className="stats-section relative overflow-hidden"
      style={{
        backgroundColor: '#0E1623',
        backgroundImage: `
          radial-gradient(900px 500px at 10% 0%, rgba(124, 92, 255, 0.25), transparent 60%),
          radial-gradient(800px 500px at 90% 10%, rgba(0, 212, 255, 0.18), transparent 55%)
        `,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <style>{`
        :root {
           --brand-blue: #3F5CE0;
           --scratch-1: #2E476E;
           --scratch-2: #3C66A6;
           --text-white: #ffffff;
        }

        .stats-section {
            width: 100%;
            padding: 80px 20px;
            text-align: center;
        }

        .stats-container {
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
            z-index: 10;
        }

        /* Main Heading (H2) */
        .stats-heading {
            font-weight: 900;
            font-size: clamp(2.5rem, 4vw, 3.5rem);
            color: var(--brand-blue);
            margin-bottom: 60px;
            line-height: 1.1;
            letter-spacing: -1px;
        }

        /* White Highlight Text */
        .white-highlight {
            position: relative;
            display: inline-block;
            color: var(--text-white);
            z-index: 1;
            padding: 0 5px;
        }

        /* Double-Scratch Highlight */
        .white-highlight::before, 
        .white-highlight::after {
            content: '';
            position: absolute;
            left: 0;
            width: 100%;
            z-index: -1;
            border-radius: 4px;
        }

        .white-highlight::before {
            bottom: 6px;
            height: 10px;
            background-color: var(--scratch-1);
            transform: skewX(-12deg);
        }

        .white-highlight::after {
            bottom: 10px;
            height: 10px;
            background-color: var(--scratch-2);
            transform: skewX(-12deg);
            opacity: 1;
        }

        /* Grid Layout */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            margin-top: 40px;
            align-items: stretch;
        }

        /* Card Styling */
        .stat-box {
            background-color: #1a2436; /* Dark Card BG */
            border: 1px solid rgba(255,255,255,0.1);
            padding: 50px 30px;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .stat-box:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.4);
            border-color: var(--brand-blue);
        }

        /* Wrapper to align numbers */
        .stat-number-wrapper {
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            margin-bottom: 20px;
        }

        /* Big Stat Numbers */
        .stat-number {
            font-weight: 900;
            font-size: clamp(3.5rem, 5vw, 5rem); 
            color: var(--brand-blue); 
            margin: 0;
            line-height: 1;
            letter-spacing: -2px;
            text-shadow: 0 0 30px rgba(63, 92, 224, 0.3);
        }

        /* Description Text */
        .stat-desc {
            font-weight: 500;
            font-size: 1.1rem;
            color: var(--text-white);
            line-height: 1.6;
            margin: 0 auto;
            max-width: 260px;
            opacity: 0.9;
        }

        @media (max-width: 768px) {
            .stat-number-wrapper { height: auto; margin-bottom: 10px; }
            .stat-number { font-size: 3.5rem; }
        }
      `}</style>
      
      <div className="stats-container">
        {/* Subtitle */}
        <div className="mb-4">
             <span className="text-[#FFFFFF] font-bold text-sm uppercase tracking-[2px]">
                Market Reality
             </span>
        </div>

        <h2 className="stats-heading">
          Performance Metrics You <br className="hidden md:block" />
          <span className="white-highlight">Cannot Ignore</span>
        </h2>
        
        

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-box" key={index}>
              <div className="stat-number-wrapper">
                <h3 className="stat-number">{stat.value}</h3>
              </div>
              <p className="stat-desc">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};