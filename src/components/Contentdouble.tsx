"use client";

import React, { useEffect, useState } from 'react';

export const Contentdouble = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation shortly after mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="contentdouble-wrapper">
      {/* External Font Import (if needed, otherwise rely on global CSS) */}
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700;800&display=swap" rel="stylesheet" />

      {/* Scoped CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        .contentdouble-wrapper {
            --bg-color: #000000;
            --text-main: #ffffff;
            --text-muted: #a3a3a3;
            --card-bg: #121212;
            --card-border: #333333;
            --backdrop-bg: #1e1e1e;
            --check-color: #ffffff;
            
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-main);
            line-height: 1.6;
            overflow-x: hidden;
            width: 100%;
        }

        .contentdouble-wrapper .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 80px 20px;
        }

        .contentdouble-wrapper .layout-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            align-items: center;
        }

        /* --- Left Column: Text & Checklist --- */
        .contentdouble-wrapper .content-left h1 {
            font-family: 'Poppins', sans-serif;
            font-size: 2.75rem;
            font-weight: 800;
            line-height: 1.1;
            letter-spacing: -0.02em;
            margin-top: 0;
            margin-bottom: 24px;
            color: var(--text-main);
        }

        .contentdouble-wrapper .content-left p {
            color: var(--text-muted);
            margin-bottom: 20px;
            margin-top: 0;
            font-size: 0.95rem;
        }

        .contentdouble-wrapper .checklist {
            list-style: none;
            margin: 24px 0;
            padding: 0;
        }

        .contentdouble-wrapper .checklist li {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 14px;
            font-weight: 500;
            font-size: 0.95rem;
            color: var(--text-main);
        }

        .contentdouble-wrapper .check-icon {
            color: var(--check-color);
            flex-shrink: 0;
        }

        /* --- Right Column: Overlay Cards --- */
        .contentdouble-wrapper .content-right {
            position: relative;
            padding: 20px;
        }

        /* The Slanted Dark Backdrop */
        .contentdouble-wrapper .backdrop-shape {
            position: absolute;
            top: 40px;
            bottom: -60px;
            left: -20px;
            right: 40px;
            background-color: var(--backdrop-bg);
            border: 1px solid #2a2a2a;
            border-radius: 24px;
            transform: skew(-8deg); 
            z-index: 1;
        }

        /* The Main Dark Card */
        .contentdouble-wrapper .expertise-card {
            position: relative;
            background-color: var(--card-bg);
            border: 1px solid var(--card-border);
            color: var(--text-main);
            padding: 48px;
            border-radius: 16px;
            z-index: 2;
            box-shadow: 0 20px 40px rgba(0,0,0,0.5);
        }

        .contentdouble-wrapper .expertise-card h2 {
            font-family: 'Poppins', sans-serif;
            font-size: 2.25rem;
            font-weight: 800;
            margin-top: 0;
            margin-bottom: 20px;
            letter-spacing: -0.01em;
        }

        .contentdouble-wrapper .expertise-card > p {
            font-size: 0.9rem;
            line-height: 1.7;
            color: var(--text-muted);
            margin-bottom: 24px;
            margin-top: 0;
        }

        .contentdouble-wrapper .tip-item {
            margin-bottom: 24px;
            font-size: 0.9rem;
            line-height: 1.7;
            color: var(--text-muted);
        }

        .contentdouble-wrapper .tip-item:last-child {
            margin-bottom: 0;
        }

        .contentdouble-wrapper .tip-item strong {
            color: var(--text-main);
            font-weight: 600;
            display: block;
            margin-bottom: 4px;
        }

        /* --- Animation Classes --- */
        .contentdouble-wrapper .fade-up {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .contentdouble-wrapper .fade-up.visible {
            opacity: 1;
            transform: translateY(0);
        }

        /* Responsive Design */
        @media (max-width: 968px) {
            .contentdouble-wrapper .layout-grid {
                grid-template-columns: 1fr;
                gap: 60px;
            }
            .contentdouble-wrapper .content-left h1 {
                font-size: 2.25rem;
            }
            .contentdouble-wrapper .backdrop-shape {
                top: 20px; bottom: -20px; left: -10px; right: -10px;
                transform: skew(-4deg);
            }
            .contentdouble-wrapper .expertise-card {
                padding: 32px;
            }
        }
      `}} />

      <div className="container">
        <div className="layout-grid">
            
          <div className={`content-left fade-up ${isVisible ? 'visible' : ''}`}>
            <h1>Headless WordPress<br />Architecture</h1>
            <p>Traditional WordPress ties your frontend design directly to your backend database. Headless WordPress decouples them. By using WordPress solely as a Content Management System (CMS) via the REST API or GraphQL, we unlock limitless possibilities.</p>
            <p>We build lightning-fast, ultra-secure frontends using modern JavaScript frameworks like React, Next.js, and Vue. This approach gives you the familiar WordPress editing experience with the performance of a cutting-edge web application:</p>
            
            <ul className="checklist">
              {/* Note: In React, SVGs inside maps or direct code don't require changes, just standard attributes */}
              <li><svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Next.js & React integrations</li>
              <li><svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> GraphQL & REST API mastery</li>
              <li><svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Sub-second page load speeds</li>
              <li><svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Static Site Generation (SSG)</li>
              <li><svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Omnichannel content delivery</li>
              <li><svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Seamless third-party API connections</li>
              <li><svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Enterprise-grade security architecture</li>
            </ul>

            <p>This decoupled infrastructure future-proofs your digital presence, allowing your frontend to evolve independently of your backend content repository.</p>
          </div>

          <div 
            className={`content-right fade-up ${isVisible ? 'visible' : ''}`} 
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="backdrop-shape"></div>
            <div className="expertise-card">
              <h2>The Headless Advantage</h2>
              <p>Transitioning to a headless architecture solves the most common bottlenecks associated with traditional monolithic CMS setups.</p>
              
              <div className="tip-item">
                  <strong>Unmatched Performance & SEO</strong> 
                  By delivering pre-rendered static pages via a global CDN, load times are drastically reduced. This eliminates database lag, providing a superior user experience and effortlessly passing Google's Core Web Vitals.
              </div>
              
              <div className="tip-item">
                  <strong>Bulletproof Security</strong> 
                  Because the frontend is completely decoupled, your WordPress admin panel and database are hidden from public access. This effectively removes the attack surface for common vulnerabilities, DDoS attacks, and malicious plugins.
              </div>
              
              <div className="tip-item">
                  <strong>Ultimate Creative Flexibility</strong> 
                  Break free from PHP templates and theme constraints. We build bespoke, app-like user interfaces tailored exactly to your brand using the latest front-end technologies, creating highly interactive experiences.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};