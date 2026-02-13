"use client";
import React, { useState, useRef } from 'react';

// FAQ Data - Tailored to Front End Engineering
const faqData = [
  {
    question: "How do you ensure sub-100ms interaction times?",
    answer: "We utilize a combination of code-splitting, tree-shaking, and edge caching. By leveraging Next.js Server Components, we minimize the JavaScript bundle sent to the client, ensuring the main thread remains unblocked for immediate user interaction."
  },
  {
    question: "Why choose Headless WordPress over Traditional?",
    answer: "Headless architecture decouples the frontend from the backend. This allows us to use modern frameworks like React for the UI, resulting in significantly faster load times, better security, and a richer, app-like user experience compared to traditional PHP themes."
  },
  {
    question: "Do you build custom design systems?",
    answer: "Yes. We don't just build pages; we architect Atomic Design systems. We create reusable libraries of components (atoms, molecules, organisms) that ensure visual consistency and scalability across your entire application."
  },
  {
    question: "How do you handle SEO with React/Next.js?",
    answer: "We use Server-Side Rendering (SSR) and Static Site Generation (SSG) to ensure search engine crawlers see fully rendered HTML. We also implement semantic HTML5, dynamic metadata, and schema markup to maximize visibility."
  }
];

export const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // 0 = First one open by default

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section-wrapper">
      {/* Scoped Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --brand-blue: #3F5CE0;
          --brand-blue-glow: rgba(63, 92, 224, 0.5);
          --faq-bg: #0E1623;
          --faq-card-bg: rgba(255, 255, 255, 0.03);
          --faq-border: rgba(255, 255, 255, 0.1);
          --text-white: #ffffff;
          --text-gray: #cbd5e0;
        }

        .faq-section-wrapper {
          position: relative;
          padding: 100px 24px;
          background-color: var(--faq-bg);
          width: 100%;
        }

        .faq-container {
          max-width: 900px;
          margin: 0 auto;
        }

        /* --- Header Styling --- */
        .faq-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .faq-subtitle {
          display: block;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--text-white);
          text-transform: uppercase;
          margin-bottom: 16px;
          opacity: 0.8;
        }

        .faq-title {
          font-family: "Roboto Flex", sans-serif;
          font-weight: 900;
          font-size: clamp(2rem, 4vw, 3rem);
          color: var(--text-white);
          line-height: 1.1;
        }

        .highlight-blue {
          color: var(--brand-blue);
          position: relative;
          display: inline-block;
        }

        /* --- Accordion Item --- */
        .faq-item {
          background-color: var(--faq-card-bg);
          border: 1px solid var(--faq-border);
          border-radius: 12px;
          margin-bottom: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .faq-item:hover {
          border-color: rgba(255,255,255,0.2);
          background-color: rgba(255, 255, 255, 0.05);
        }

        /* Active State Glow */
        .faq-item.active {
          border-color: var(--brand-blue);
          box-shadow: 0 0 25px var(--brand-blue-glow);
          background-color: rgba(63, 92, 224, 0.05);
        }

        /* --- Question Button --- */
        .faq-question-btn {
          width: 100%;
          text-align: left;
          background: none;
          border: none;
          padding: 24px 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }

        .faq-question-text {
          font-family: "Roboto Flex", sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-white);
          margin-right: 20px;
          transition: color 0.3s ease;
        }

        .faq-item.active .faq-question-text {
          color: var(--brand-blue);
        }

        /* --- Icon Animation --- */
        .faq-icon {
          width: 24px;
          height: 24px;
          position: relative;
          flex-shrink: 0;
        }
        
        .faq-icon::before, .faq-icon::after {
          content: '';
          position: absolute;
          background-color: var(--text-white);
          transition: transform 0.3s ease, background-color 0.3s ease;
          border-radius: 2px;
        }

        /* Horizontal Line */
        .faq-icon::before {
          top: 50%; left: 0; width: 100%; height: 2px; margin-top: -1px;
        }
        /* Vertical Line */
        .faq-icon::after {
          top: 0; left: 50%; width: 2px; height: 100%; margin-left: -1px;
        }

        /* Rotate to Minus on Active */
        .faq-item.active .faq-icon::after {
          transform: rotate(90deg);
          background-color: var(--brand-blue);
        }
        .faq-item.active .faq-icon::before {
          background-color: var(--brand-blue);
        }

        /* --- Answer Area --- */
        .faq-answer-wrapper {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .faq-item.active .faq-answer-wrapper {
          max-height: 300px; /* Arbitrary large height to allow expansion */
        }

        .faq-answer-content {
          padding: 0 30px 30px 30px;
          font-size: 1.05rem;
          color: var(--text-gray);
          line-height: 1.7;
          font-weight: 400;
        }

      `}} />

      <div className="faq-container">
        
        {/* Header */}
        <div className="faq-header">
          <span className="faq-subtitle">COMMON QUERIES</span>
          <h2 className="faq-title">
            Engineering <span className="highlight-blue">Insights</span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="faq-list">
          {faqData.map((item, index) => {
            const isActive = activeIndex === index;
            
            return (
              <div 
                key={index} 
                className={`faq-item ${isActive ? 'active' : ''}`}
              >
                <button 
                  className="faq-question-btn" 
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isActive}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <div className="faq-icon" aria-hidden="true"></div>
                </button>
                
                <div className="faq-answer-wrapper">
                  <div className="faq-answer-content">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};