"use client";

import React from 'react';

export const Fourblockswphead = () => {
  return (
    <section className="fourblocks-wrapper">
      <style dangerouslySetInnerHTML={{ __html: `
        .fourblocks-wrapper {
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
            background-color: transparent; /* Inherits your dark background */
            color: #ffffff; /* Forces white text */
            line-height: 1.5;
            padding: 60px 20px;
            width: 100%;
            box-sizing: border-box;
        }

        .fourblocks-wrapper * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        /* Layout Container */
        .fourblocks-wrapper .container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            gap: 50px;
            flex-wrap: wrap;
        }

        /* Left Column: CTA Card & Image */
        .fourblocks-wrapper .sidebar {
            flex: 0 0 320px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .fourblocks-wrapper .team-image {
            width: 100%;
            max-width: 320px;
            z-index: 2;
            position: relative;
            margin-bottom: -30px; /* Pulls the card up under the image */
            display: block;
            border-radius: 12px 12px 0 0;
        }

        .fourblocks-wrapper .cta-card {
            background-color: #1a1a24; /* Dark sleek background */
            border: 1px solid rgba(255, 255, 255, 0.1);
            width: 100%;
            border-radius: 12px;
            padding: 50px 30px 40px;
            position: relative;
            z-index: 1;
            box-shadow: 0 20px 40px rgba(0,0,0,0.5);
        }

        .fourblocks-wrapper .cta-card h2 {
            color: #ffffff;
            font-size: 28px;
            text-align: center;
            margin-bottom: 15px;
            font-weight: 700;
        }

        .fourblocks-wrapper .cta-card h2 span {
            color: #ffffff;
            font-weight: 400;
        }

        .fourblocks-wrapper .cta-card p {
            color: #ffffff;
            font-size: 14px;
            text-align: center;
            margin-bottom: 25px;
            line-height: 1.6;
        }

        .fourblocks-wrapper .form-group {
            display: flex;
            gap: 10px;
        }

        .fourblocks-wrapper .form-group input {
            flex: 1;
            padding: 12px 15px;
            border-radius: 6px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            background-color: rgba(255, 255, 255, 0.05);
            color: #ffffff;
            font-size: 14px;
            font-family: 'Inter', sans-serif;
            outline: none;
        }
        
        .fourblocks-wrapper .form-group input::placeholder {
            color: #ffffff;
            opacity: 0.6;
        }

        .fourblocks-wrapper .form-group button {
            background-color: #8b3dff; /* Bright purple accent */
            color: #ffffff;
            border: none;
            border-radius: 6px;
            padding: 0 15px;
            cursor: pointer;
            font-size: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.2s;
        }

        .fourblocks-wrapper .form-group button:hover {
            background-color: #722bd4;
        }

        /* Right Column: Content & Grid */
        .fourblocks-wrapper .content-area {
            flex: 1;
            min-width: 0; 
        }

        .fourblocks-wrapper .header-section {
            margin-bottom: 40px;
        }

        .fourblocks-wrapper .header-section h1 {
            font-size: 36px;
            color: #ffffff;
            font-weight: 800;
            margin-bottom: 15px;
            letter-spacing: -0.5px;
        }

        .fourblocks-wrapper .header-section p {
            font-size: 16px;
            color: #ffffff;
            max-width: 800px;
            line-height: 1.6;
        }

        .fourblocks-wrapper .header-section strong {
            color: #ffffff;
            font-weight: 700;
        }

        /* Cards Grid */
        .fourblocks-wrapper .grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
        }

        .fourblocks-wrapper .resource-card {
            background-color: rgba(255, 255, 255, 0.03); 
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            padding: 30px 25px;
            position: relative;
            text-decoration: none;
            display: flex;
            flex-direction: column;
            transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .fourblocks-wrapper .resource-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
            border-color: rgba(255, 255, 255, 0.25);
        }

        .fourblocks-wrapper .resource-card h3 {
            color: #ffffff; 
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 15px;
            padding-right: 20px;
            line-height: 1.4;
        }

        .fourblocks-wrapper .resource-card p {
            color: #ffffff;
            font-size: 14px;
            line-height: 1.6;
            margin: 0;
            opacity: 0.9;
        }

        .fourblocks-wrapper .resource-card .arrow {
            position: absolute;
            top: 30px;
            right: 20px;
            color: #ffffff;
            font-size: 18px;
            font-weight: bold;
            transition: transform 0.2s ease;
        }
        
        .fourblocks-wrapper .resource-card:hover .arrow {
            transform: translateX(4px);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
            .fourblocks-wrapper .grid {
                grid-template-columns: repeat(2, 1fr);
            }
            .fourblocks-wrapper .sidebar {
                flex: 0 0 280px;
            }
        }

        @media (max-width: 768px) {
            .fourblocks-wrapper .container {
                flex-direction: column;
                align-items: center;
            }
            .fourblocks-wrapper .sidebar {
                width: 100%;
                max-width: 400px;
                margin-bottom: 40px;
            }
            .fourblocks-wrapper .content-area {
                width: 100%;
            }
        }

        @media (max-width: 480px) {
            .fourblocks-wrapper .grid {
                grid-template-columns: 1fr;
            }
            .fourblocks-wrapper .header-section h1 {
                font-size: 28px;
            }
        }
      `}} />

      <div className="container">
        
        <div className="sidebar">
          <img 
            src="https://www.wpfedev.com/_next/image/?url=https%3A%2F%2Fadmin.wpfedev.com%2Fwp-content%2Fuploads%2F2026%2F01%2FSampleimage-scaled.webp&w=1080&q=75" 
            alt="Headless WordPress Experts" 
            className="team-image" 
          />
          <div className="cta-card">
            <h2>Meet <span>WPfeDev</span></h2>
            <p>Get started with professional Headless WordPress development services by requesting a strategy proposal today from our top-rated Next.js & Vercel engineers!</p>
            <form className="form-group" onSubmit={(e) => e.preventDefault()}>
              <input type="url" placeholder="Enter your website" required />
              <button type="submit" aria-label="Submit">&#8594;</button>
            </form>
          </div>
        </div>

        <div className="content-area">
          <div className="header-section">
            <h1>Headless WordPress Expertise</h1>
            <p><strong>What is Headless WordPress?</strong> It's the modern architecture that decouples your backend content management from your frontend display. By pairing the familiar WordPress backend with modern frontend frameworks like Next.js and hosting platforms like Vercel, our headless solutions deliver blazing-fast performance, enhanced security, and infinite scalability to meet your audience where they are.</p>
          </div>

          <div className="grid">
            <a href="#" className="resource-card">
              <h3>45 Headless WP Statistics to Know in 2026</h3>
              <span className="arrow">&#8594;</span>
              <p>Read the latest performance and conversion statistics to give your decoupled WordPress strategy the boost it needs.</p>
            </a>

            <a href="#" className="resource-card">
              <h3>What Do Vercel & Next.js Migrations Include?</h3>
              <span className="arrow">&#8594;</span>
              <p>Learn exactly what to expect when decoupling your site and moving your frontend deployment to Vercel's edge network.</p>
            </a>

            <a href="#" className="resource-card">
              <h3>How Much Does Headless WP Development Cost?</h3>
              <span className="arrow">&#8594;</span>
              <p>Know the average cost of decoupled development services, API integrations, and the factors affecting long-term hosting pricing.</p>
            </a>

            <a href="#" className="resource-card">
              <h3>Headless Migration Case Studies</h3>
              <span className="arrow">&#8594;</span>
              <p>Discover the massive impact on Core Web Vitals and SEO rankings with these real-world Next.js success stories.</p>
            </a>

            <a href="#" className="resource-card">
              <h3>API & Headless CMS Trends</h3>
              <span className="arrow">&#8594;</span>
              <p>Find out how GraphQL, REST, and AI-driven content rendering are shaping the headless WordPress landscape in 2026.</p>
            </a>

            <a href="#" className="resource-card">
              <h3>FAQs on Vercel and Headless Services</h3>
              <span className="arrow">&#8594;</span>
              <p>Get answers to frequently asked questions about maintaining, scaling, and optimizing decoupled WordPress architectures.</p>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};