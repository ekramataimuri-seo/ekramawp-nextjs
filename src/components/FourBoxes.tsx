"use client";
import React, { useEffect, useRef } from 'react';

export const FourBoxes = () => {
    // Ref for the card that needs to blink
  const blinkingCardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const card = blinkingCardRef.current;
    
    if (!card) return;

    // Reset animation initially
    card.style.animation = 'none';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animation when visible
            (entry.target as HTMLElement).style.animation = 'border-pulse 3s infinite';
          } else {
            // Optional: Stop animation when out of view
            (entry.target as HTMLElement).style.animation = 'none';
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(card);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="fe-app-section">
      {/* Scoped Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --fe-white: #ffffff;
          --fe-highlight-1: #3C66A6;
          --fe-highlight-2: #2E476E;
          --fe-card-bg: rgba(255, 255, 255, 0.03);
          --fe-card-border: rgba(255, 255, 255, 0.1);
          --brand-blue: #3F5CE0;
          --text-gray: #cbd5e0;
          --font-base-default: "Roboto Flex", sans-serif;
        }

        .fe-app-section {
          padding: 100px 24px;
          width: 100%;
          position: relative;
          background-color: #0E1623; /* Fallback if global bg fails */
        }

        .fe-max-width {
          max-width: 1280px;
          margin: 0 auto;
        }

        /* --- Header --- */
        .fe-header-wrapper {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 60px auto;
        }

        .fe-subtitle {
          display: block;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--fe-white);
          text-transform: uppercase;
          margin-bottom: 16px;
          opacity: 0.9;
        }

        .fe-section-title {
          font-family: var(--font-base-default);
          font-weight: 900;
          font-size: clamp(1.5rem, 3vw, 2.5rem);
          color: var(--brand-blue);
          line-height: 1.2;
          margin-bottom: 24px;
        }

        /* Double Scratch Highlight */
        .highlight-scratch {
          color: var(--fe-white);
          position: relative;
          z-index: 1;
          padding: 0 5px;
          display: inline-block;
          background-image: 
              linear-gradient(to right, var(--fe-highlight-1), var(--fe-highlight-1)),
              linear-gradient(to right, var(--fe-highlight-2), var(--fe-highlight-2));
          background-size: 100% 12px, 100% 8px;
          background-position: 0 85%, 0 95%;
          background-repeat: no-repeat;
        }

        .fe-intro-text {
          font-size: 1.1rem;
          font-weight: 400;
          color: var(--fe-white);
          line-height: 1.6;
        }

        /* --- Grid --- */
        .fe-challenges-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
        }

        @media (min-width: 768px) {
          .fe-challenges-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* --- Cards --- */
        .fe-card {
          background-color: var(--fe-card-bg);
          border: 1px solid var(--fe-card-border);
          border-radius: 12px;
          padding: 40px;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, background-color 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .fe-card:hover {
          background-color: rgba(255, 255, 255, 0.06);
          transform: translateY(-5px);
        }

        /* Blinking Animation */
        .active-blink {
          position: relative;
          box-shadow: 0 0 0 0 rgba(63, 92, 224, 0.7);
        }

        @keyframes border-pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(63, 92, 224, 0.4);
            border-color: rgba(63, 92, 224, 0.4);
          }
          50% {
            box-shadow: 0 0 20px 0 rgba(63, 92, 224, 0.1);
            border-color: rgba(63, 92, 224, 1);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(63, 92, 224, 0.4);
            border-color: rgba(63, 92, 224, 0.4);
          }
        }

        /* Card Internals */
        .fe-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 30px;
        }

        .fe-card-text h3 {
          font-family: var(--font-base-default);
          font-weight: 900;
          font-size: clamp(1.0rem, 1vw, 1.2rem);
          color: var(--fe-white);
          margin-bottom: 12px;
          margin-top: 0;
        }

        .fe-card-text p {
          font-size: 0.95rem;
          color: var(--text-gray);
          line-height: 1.5;
          margin: 0;
          max-width: 90%;
        }

        .fe-icon-box {
          flex-shrink: 0;
          width: 50px;
          height: 50px;
          background: rgba(63, 92, 224, 0.15); 
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 15px;
        }

        .fe-svg-icon {
          width: 28px;
          height: 28px;
          color: var(--brand-blue);
        }

        .fe-card-divider {
          width: 100%;
          height: 1px;
          background-color: var(--fe-card-border);
          margin-bottom: 25px;
        }

        /* Checklist */
        .fe-checklist-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 15px;
        }
        @media (min-width: 500px) {
          .fe-checklist-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .fe-check-item {
          display: flex;
          align-items: center;
          font-size: 0.9rem;
          color: var(--fe-white);
          font-weight: 500;
        }

        .check-circle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 1px solid var(--brand-blue);
          color: var(--brand-blue);
          font-size: 10px;
          margin-right: 10px;
          font-weight: 900;
        }
      `}} />

      <div className="fe-max-width">
        
        {/* Section Header */}
        <div className="fe-header-wrapper">
          <span className="fe-subtitle">TECHNICAL SOLUTIONS</span>
          <h2 className="fe-section-title">
            Architecting <span className="highlight-scratch">Scalable Systems</span>
          </h2>
          <p className="fe-intro-text">
            From reducing Time-to-Interactive (TTI) to ensuring strict type safety, we engineer robust front-end architectures that drive high-performance user experiences.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="fe-challenges-grid">

          {/* Card 1: Performance */}
          <article className="fe-card">
            <div className="fe-card-top">
              <div className="fe-card-text">
                <h3>High-Performance Rendering</h3>
                <p>Optimize Core Web Vitals by implementing advanced rendering strategies. We ensure your application loads instantly and remains responsive.</p>
              </div>
              <div className="fe-icon-box">
                <svg className="fe-svg-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div className="fe-card-divider"></div>
            <div className="fe-checklist-grid">
              <div className="fe-check-item">
                <span className="check-circle">✓</span> Server-Side Rendering (SSR)
              </div>
              <div className="fe-check-item">
                <span className="check-circle">✓</span> Static Site Gen (SSG)
              </div>
              <div className="fe-check-item">
                <span className="check-circle">✓</span> Code Splitting & Lazy Loading
              </div>
              <div className="fe-check-item">
                <span className="check-circle">✓</span> Edge Caching Strategies
              </div>
            </div>
          </article>

          {/* Card 2: Scalability (BLINKING BLOCK) */}
          <article className="fe-card active-blink" ref={blinkingCardRef}>
            <div className="fe-card-top">
              <div className="fe-card-text">
                <h3>Scalable Component Logic</h3>
                <p>Deconstruct complex UIs into atomic, reusable components. We build design systems that maintain consistency as your app grows.</p>
              </div>
              <div className="fe-icon-box">
                <svg className="fe-svg-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
            </div>
            <div className="fe-card-divider"></div>
            <div className="fe-checklist-grid">
              <div className="fe-check-item">
                <span className="check-circle">✓</span> Atomic Design Methodology
              </div>
              <div className="fe-check-item">
                <span className="check-circle">✓</span> Custom React Hooks
              </div>
              <div className="fe-check-item">
                <span className="check-circle">✓</span> Global State (Redux/Zustand)
              </div>
              <div className="fe-check-item">
                <span className="check-circle">✓</span> Strict TypeScript Interfaces
              </div>
            </div>
          </article>

          {/* Card 3: Modern Ecosystem */}
          <article className="fe-card">
            <div className="fe-card-top">
              <div className="fe-card-text">
                <h3>Modern Build Ecosystems</h3>
                <p>Leverage the power of Next.js and Vite. We configure robust CI/CD pipelines to automate testing and deployment.</p>
              </div>
              <div className="fe-icon-box">
                <svg className="fe-svg-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>
            <div className="fe-card-divider"></div>
            <div className="fe-checklist-grid">
              <div className="fe-check-item">
                <span className="check-circle">✓</span> Next.js App Router
              </div>
              <div className="fe-check-item">
                <span className="check-circle">✓</span> Turborepo Integration
              </div>
              <div className="fe-check-item">
                <span className="check-circle">✓</span> Automated Unit Testing
              </div>
              <div className="fe-check-item">
                <span className="check-circle">✓</span> End-to-End Testing (Cypress)
              </div>
            </div>
          </article>

          {/* Card 4: UX & Accessibility */}
          <article className="fe-card">
            <div className="fe-card-top">
              <div className="fe-card-text">
                <h3>Interactive UX & Accessibility</h3>
                <p>Ensure your application is accessible to all users (a11y) while providing fluid, physics-based micro-interactions.</p>
              </div>
              <div className="fe-icon-box">
                <svg className="fe-svg-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
            <div className="fe-card-divider"></div>
            <div className="fe-checklist-grid">
              <div className="fe-check-item">
                <span className="check-circle">✓</span> WCAG 2.1 Compliance
              </div>
              <div className="fe-check-item">
                <span className="check-circle">✓</span> Framer Motion Animations
              </div>
              <div className="fe-check-item">
                <span className="check-circle">✓</span> Responsive Layouts
              </div>
              <div className="fe-check-item">
                <span className="check-circle">✓</span> Keyboard Navigation
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}