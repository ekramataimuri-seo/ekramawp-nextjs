"use client";
import React from 'react';

export const HtmlContent = () => {
  return (
    <section className="w-full bg-[#020617] py-20 px-5 box-border font-['Inter',sans-serif]">
      {/* SCOPED CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        .html-expertise-container {
            max-width: 1200px;
            margin: 0 auto;
            color: #ffffff;
            display: grid;
            grid-template-columns: 1fr;
            gap: 60px;
        }

        @media (min-width: 1024px) {
            .html-expertise-container {
                grid-template-columns: 1fr 1fr;
                align-items: start;
            }
        }

        /* --- HEADING AREA --- */
        .html-heading-wrapper {
            grid-column: 1 / -1;
            text-align: center;
            margin-bottom: 20px;
        }

        .html-heading-wrapper h2 {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 900;
            color: #ffffff;
            line-height: 1.1;
            letter-spacing: -0.04em;
            margin-bottom: 20px;
        }

        .html-highlight {
            color: #207DE9;
            position: relative;
            display: inline-block;
        }

        .html-heading-wrapper p {
            font-size: 1.25rem;
            color: #94a3b8;
            max-width: 800px;
            margin: 0 auto;
            line-height: 1.6;
        }

        /* --- LEFT COLUMN: CONTENT --- */
        .html-content-col {
            display: flex;
            flex-direction: column;
            gap: 40px;
        }

        .html-section-block {
            position: relative;
        }

        .html-section-block h3 {
            font-size: 1.5rem;
            font-weight: 800;
            color: #ffffff;
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .html-section-block h3::before {
            content: "";
            display: block;
            width: 8px;
            height: 24px;
            background-color: #207DE9;
            border-radius: 4px;
        }

        .html-section-block p {
            font-size: 1.1rem;
            color: #cbd5e1;
            line-height: 1.8;
            margin-bottom: 16px;
        }

        /* --- RIGHT COLUMN: VISUAL --- */
        .html-visual-col {
            position: sticky;
            top: 100px;
            display: flex;
            justify-content: center;
        }

        .html-gif-wrapper {
            width: 100%;
            max-width: 500px;
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(32, 125, 233, 0.15);
            background-color: #0E1623;
            position: relative;
        }

        /* Fake Window Header */
        .html-gif-wrapper::before {
            content: "• • •";
            display: block;
            background-color: #1a2333;
            color: #475569;
            font-size: 24px;
            line-height: 10px;
            padding: 12px 16px;
            letter-spacing: 2px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .html-gif-wrapper img {
            width: 100%;
            height: auto;
            display: block;
            object-fit: cover;
            /* Filtering to make standard GIFs look better on dark mode */
            filter: contrast(1.1) brightness(0.9);
        }

      `}} />

      <div className="html-expertise-container">
        
        {/* HEADER FULL WIDTH */}
        <div className="html-heading-wrapper">
          <h2>Architecting the <span className="html-highlight">Semantic Web</span></h2>
          <p>HTML is the skeleton of the internet. Before the styling, before the logic, there is the structure. I build pixel-perfect, accessible, and deeply semantic markup.</p>
        </div>

        {/* LEFT COLUMN: EXPERTISE CONTENT */}
        <div className="html-content-col">
          
          <div className="html-section-block">
            <h3>The Foundation of the Web</h3>
            <p>
              HyperText Markup Language (HTML) isn't just about throwing tags onto a page; it’s about defining meaning. While CSS dictates how a page looks and JavaScript determines how it behaves, HTML dictates what the content actually <em>is</em>. 
            </p>
            <p>
              By utilizing proper semantic elements—like <code>&lt;article&gt;</code>, <code>&lt;nav&gt;</code>, and <code>&lt;aside&gt;</code> instead of a sea of meaningless <code>&lt;div&gt;</code> tags—I ensure that browsers, screen readers, and search engine crawlers understand the exact hierarchy and context of your data.
            </p>
          </div>

          <div className="html-section-block">
            <h3>Accessibility (a11y) First</h3>
            <p>
              Writing expert-level HTML means writing inclusive code. A beautifully designed website is useless if a portion of your audience cannot navigate it. 
            </p>
            <p>
              I architect DOM structures with strict adherence to WCAG guidelines. This involves proper heading hierarchies, ARIA attributes when native HTML falls short, explicit form labeling, and keyboard-navigable focus states. Good HTML ensures your site is usable by everyone, regardless of how they access the web.
            </p>
          </div>

          <div className="html-section-block">
            <h3>Technical SEO at the Root</h3>
            <p>
              Search engines don't "see" your website's design; they read your markup. My approach to HTML is heavily optimized for technical SEO.
            </p>
            <p>
              This includes strategic placement of meta tags, proper implementation of microdata and schema markup for rich snippets, and ensuring a flat, crawlable link structure. By delivering clean, bloat-free HTML, I help guarantee faster parsing times and higher relevance scores from Google.
            </p>
          </div>

          <div className="html-section-block">
            <h3>Modern HTML5 Standards</h3>
            <p>
              The web platform evolves rapidly. I leverage the full power of modern HTML5 APIs. From native form validation and optimized responsive image loading via the <code>&lt;picture&gt;</code> element, to embedding rich media directly into the document tree without relying on heavy third-party scripts. 
            </p>
          </div>

        </div>

        {/* RIGHT COLUMN: STICKY VISUAL */}
        <div className="html-visual-col">
          <div className="html-gif-wrapper">
            {/* Using a high-quality coding GIF representation */}
            <img 
              src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif" 
              alt="HTML Coding Animation" 
            />
          </div>
        </div>

      </div>
    </section>
  );
};