import React from 'react';

export const SimpleContentSection = () => {
  return (
    <section className="fe-section-wrapper">
      {/* Scoped CSS for this component */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* 1. Layout & Spacing */
        .fe-section-wrapper {
            position: relative;
            padding: 80px 0;
            overflow: hidden;
            width: 100%;
            background-color: #0E1623;
        }

        .fe-container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 24px;
        }

        .fe-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 60px;
            align-items: center;
        }

        @media (min-width: 1024px) {
            .fe-grid {
                grid-template-columns: 1fr 1fr;
            }
        }

        /* 2. Typography - Subtitle */
        .fe-subtitle {
            display: block;
            font-size: 0.875rem; 
            font-weight: 700;
            color: #FFFFFF; 
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-bottom: 16px;
            opacity: 0.9;
        }

        /* 3. Typography - Main Heading (H2) */
        .fe-heading {
            font-family: var(--font-base-default, sans-serif);
            font-weight: 900;
            font-size: clamp(1.5rem, 3vw, 2.5rem);
            color: #FFFFFF;
            line-height: 1.1;
            margin-bottom: 24px;
            
            /* Double Scratch Highlight Logic */
            background-image: 
                linear-gradient(to right, #3C66A6, #3C66A6), 
                linear-gradient(to right, #2E476E, #2E476E); 
            background-repeat: no-repeat;
            background-size: 100% 4px, 100% 4px; 
            background-position: 0% 100%, 0% 92%; 
            padding-bottom: 8px; 
            display: inline-block; 
            width: fit-content;
        }

        /* 4. Typography - Paragraph */
        .fe-paragraph {
            font-family: var(--font-base-default, sans-serif);
            font-weight: 400;
            font-size: 1.1rem;
            color: #FFFFFF;
            line-height: 1.6;
            margin-bottom: 40px;
            max-width: 600px;
        }

        /* 5. Feature List (H3s) */
        .fe-feature-list {
            display: flex;
            flex-direction: column;
            gap: 24px;
            margin-bottom: 40px;
        }

        .fe-feature-item {
            display: flex;
            gap: 16px;
            align-items: flex-start;
        }

        .fe-check-icon {
            flex-shrink: 0;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            border: 2px solid #3F5CE0; 
            color: #3F5CE0;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 2px;
        }
        .fe-check-icon svg { width: 14px; height: 14px; }

        .fe-feature-text h3 {
            font-family: var(--font-base-default, sans-serif);
            font-weight: 900;
            font-size: clamp(1.0rem, 1vw, 1.2rem);
            color: #FFFFFF;
            margin: 0 0 4px 0;
        }

        .fe-feature-text p {
            font-size: 1rem;
            color: #cbd5e0; 
            margin: 0;
            line-height: 1.4;
        }

        /* 6. CTA Button */
        .fe-cta-link {
            display: inline-flex;
            align-items: center;
            font-weight: 700;
            font-size: 1.1rem;
            color: #3F5CE0; 
            text-decoration: none;
            transition: color 0.2s ease;
            margin-bottom: 40px;
        }
        .fe-cta-link span { margin-left: 8px; transition: transform 0.2s ease; }
        .fe-cta-link:hover { color: #ffffff; }
        .fe-cta-link:hover span { transform: translateX(5px); }

        /* 7. Stats Row */
        .fe-stats-row {
            display: flex;
            gap: 40px;
            border-top: 1px solid rgba(255,255,255,0.1);
            padding-top: 24px;
        }
        .fe-stat-val {
            display: block;
            font-weight: 900;
            font-size: 1.8rem;
            color: #41D48C; 
            line-height: 1;
            margin-bottom: 4px;
        }
        .fe-stat-label {
            display: block;
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            color: #FFFFFF;
            letter-spacing: 0.05em;
        }

        /* 8. Image Column Styling */
        .fe-image-col {
            position: relative;
        }

        .fe-image-wrapper {
            position: relative;
            border-radius: 12px;
            overflow: visible;
        }

        .fe-img-main {
            width: 100%;
            height: auto;
            border-radius: 12px;
            box-shadow: 0 20px 50px rgba(0,0,0,0.3);
            border: 1px solid rgba(255,255,255,0.1);
            display: block;
        }

        /* Decorative Floating Mockup */
        .fe-floating-card {
            position: absolute;
            bottom: -20px;
            left: -20px;
            background: #1A2636;
            border: 1px solid rgba(255,255,255,0.1);
            padding: 16px;
            border-radius: 8px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.4);
            width: 160px;
            z-index: 10;
        }
        .fe-code-mockup { display: flex; gap: 6px; margin-bottom: 12px; }
        .dot { width: 8px; height: 8px; border-radius: 50%; }
        .red { background: #FF5F56; }
        .yellow { background: #FFBD2E; }
        .green { background: #27C93F; }
        
        .fe-code-lines .line { height: 6px; background: rgba(255,255,255,0.1); margin-bottom: 6px; border-radius: 3px; }
      `}} />

      <div className="fe-container">
        
        <div className="fe-grid">
          
          <div className="fe-content-col">
            
            <span className="fe-subtitle">NEXT-GEN UI ARCHITECTURE</span>
            
            <h2 className="fe-heading">
              Component-Driven<br />
              Systems That Scale
            </h2>
            
            <p className="fe-paragraph">
              We move beyond simple page building to engineer robust, atomic design systems. By leveraging modern frameworks like React and Next.js, we ensure your application is modular, maintainable, and built for high-performance user interactions without technical debt.
            </p>

            <div className="fe-feature-list">
              
              <div className="fe-feature-item">
                <div className="fe-check-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div className="fe-feature-text">
                  <h3>Atomic Design Implementation</h3>
                  <p>Isolate UI logic into reusable atoms and molecules for consistent styling across your entire platform.</p>
                </div>
              </div>

              <div className="fe-feature-item">
                <div className="fe-check-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div className="fe-feature-text">
                  <h3>State Management Optimization</h3>
                  <p>Efficient data flow strategies that reduce re-renders and ensure instant UI feedback.</p>
                </div>
              </div>

              <div className="fe-feature-item">
                <div className="fe-check-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div className="fe-feature-text">
                  <h3>Performance First Metrics</h3>
                  <p>Zero layout shifts (CLS) and optimized bundle sizes for sub-100ms interaction times.</p>
                </div>
              </div>

            </div>

            <a href="#" className="fe-cta-link">
              Explore Our Tech Stack <span>&rarr;</span>
            </a>

            <div className="fe-stats-row">
              <div className="fe-stat">
                <span className="fe-stat-val">99%</span>
                <span className="fe-stat-label">Lighthouse<br />Performance</span>
              </div>
              <div className="fe-stat">
                <span className="fe-stat-val">&lt;100ms</span>
                <span className="fe-stat-label">Time to<br />Interactive</span>
              </div>
              <div className="fe-stat">
                <span className="fe-stat-val">100%</span>
                <span className="fe-stat-label">Type-Safe<br />Codebase</span>
              </div>
            </div>

          </div>

          <div className="fe-image-col">
            <div className="fe-image-wrapper">
              <img src="https://www.webfx.com/wp-content/uploads/2023/12/CompanyTrackerFX.png" alt="Front End Dashboard UI" className="fe-img-main" />
              
              <div className="fe-floating-card">
                <div className="fe-code-mockup">
                  <div className="dot red"></div>
                  <div className="dot yellow"></div>
                  <div className="dot green"></div>
                </div>
                <div className="fe-code-lines">
                  <div className="line w-3/4"></div>
                  <div className="line w-1/2"></div>
                  <div className="line w-2/3"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};