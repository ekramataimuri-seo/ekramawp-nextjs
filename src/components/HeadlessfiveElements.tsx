"use client";

import React, { useState } from 'react';

export const HeadlessfiveElements = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabData = [
    {
      title: "Content Modeling",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      ),
      content: (
        <>
          <p>
            Content modeling is the fundamental backbone of any successful Headless WordPress architecture. When you decouple the frontend presentation layer from the backend content management system, you can no longer rely on traditional page builders or WYSIWYG editors to dictate the visual layout. 
          </p>
          <p>
            Instead, content must be broken down into structured, logical, and reusable pieces. This approach ensures consistency and flexibility across your entire digital ecosystem:
          </p>
          <ul>
            <li><strong>Abstracted Design:</strong> By leveraging tools like Advanced Custom Fields (ACF) or Custom Post Types UI, you define exact data schemas. Your editorial team focuses strictly on creating content without worrying about how it renders on different devices.</li>
            <li><strong>Predictable APIs:</strong> Robust content modeling allows developers to map specific fields directly to GraphQL types, resulting in a clean, strictly typed, and predictable API.</li>
            <li><strong>Reusable Blocks:</strong> When content is treated as pure data, it becomes incredibly malleable. A single "Testimonial" block can be reused across the homepage, landing pages, and even a mobile app.</li>
          </ul>
          <p>
            Ultimately, investing time in thoughtful content modeling at the beginning of a headless project pays massive dividends. It drastically reduces technical debt, accelerates frontend development, and provides content creators with an intuitive, clutter-free authoring environment that scales effortlessly.
          </p>
        </>
      )
    },
    {
      title: "GraphQL APIs",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      ),
      content: (
        <>
          <p>
            Transitioning to a headless architecture often involves replacing the traditional WordPress REST API with WPGraphQL. This represents a paradigm shift that revolutionizes how your frontend requests data. 
          </p>
          <p>
            In a standard REST architecture, hitting an endpoint often returns a massive JSON payload filled with redundant data, bloating network requests and slowing down page load times. WPGraphQL solves this dynamically:
          </p>
          <ul>
            <li><strong>Declarative Data-Fetching:</strong> GraphQL allows your front end to ask for exactly what it needs, and absolutely nothing more. If a component only requires a title and a slug, the response contains only those two fields.</li>
            <li><strong>Eliminating Under-Fetching:</strong> Instead of making multiple round-trip requests to fetch a post, its author, and related categories, a single query retrieves all nested relational data in one efficient network call.</li>
            <li><strong>Self-Documenting Schema:</strong> The strongly typed schema enables frontend and backend teams to work autonomously. Frontend engineers can explore the GraphiQL interface to see exactly what data is available without digging through backend code.</li>
          </ul>
          <p>
            This seamless data orchestration drastically improves the performance metrics of your Next.js application, serving as the ultimate catalyst for lightning-fast headless experiences.
          </p>
        </>
      )
    },
    {
      title: "Next.js Frontend",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      ),
      content: (
        <>
          <p>
            The true power of a Headless WordPress setup is unleashed when paired with a modern frontend framework like Next.js. By decoupling the presentation layer, you are no longer bound by the legacy constraints of the PHP templating engine.
          </p>
          <p>
            Next.js offers a flexible, hybrid rendering approach that radically improves both user experience and search engine visibility:
          </p>
          <ul>
            <li><strong>Static Site Generation (SSG):</strong> Pages are pre-rendered at build time and served as ultra-fast static HTML files directly from a global CDN. This guarantees sub-second page loads and top-tier Core Web Vitals.</li>
            <li><strong>Incremental Static Regeneration (ISR):</strong> When content updates in WordPress, ISR automatically rebuilds specific pages in the background without requiring a full site deployment, ensuring visitors always see fresh content without sacrificing speed.</li>
            <li><strong>Component-Driven UI:</strong> React allows your team to build highly interactive user interfaces. Complex state management and smooth page transitions become trivial to implement compared to traditional jQuery-laden setups.</li>
          </ul>
          <p>
            Ultimately, swapping a traditional WordPress theme for a Next.js frontend transforms your website from a simple collection of webpages into a highly scalable, resilient, and blazing-fast modern web application.
          </p>
        </>
      )
    },
    {
      title: "Zero-Trust Security",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      ),
      content: (
        <>
          <p>
            Security is often a primary catalyst for enterprises migrating to a Headless WordPress architecture. In a traditional monolithic setup, the frontend, backend, and database are inextricably linked. If a malicious actor discovers a frontend vulnerability, they potentially gain direct access to the entire system.
          </p>
          <p>
            Headless WordPress fundamentally alters this risk profile by separating concerns and hiding your sensitive infrastructure:
          </p>
          <ul>
            <li><strong>Isolated Admin Panel:</strong> The WordPress backend can be completely isolated from the public internet, placed behind a VPN or strict IP allowlist, serving only as an internal content repository.</li>
            <li><strong>Neutralized Attack Vectors:</strong> The public-facing website is entirely static or edge-rendered, containing no database connections and no PHP execution environment. Standard attacks against <code>wp-login.php</code> or <code>xmlrpc.php</code> simply hit a dead end.</li>
            <li><strong>Enterprise Edge Protection:</strong> Hosting the decoupled frontend on platforms like Vercel or Cloudflare provides enterprise-grade DDoS protection by default.</li>
          </ul>
          <p>
            Even if the WordPress backend experiences downtime or is taken offline for maintenance, the static frontend remains fully accessible to users. This robust, zero-trust architecture provides unparalleled peace of mind.
          </p>
        </>
      )
    },
    {
      title: "Omnichannel Scale",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      ),
      content: (
        <>
          <p>
            One of the most strategic advantages of adopting a Headless WordPress architecture is the ability to achieve true omnichannel content delivery. In today's digital landscape, users consume content across desktop browsers, mobile apps, smartwatches, and even IoT devices.
          </p>
          <p>
            A traditional CMS traps your content within HTML templates. Headless WordPress liberates it, transforming your CMS into a central, API-first content hub:
          </p>
          <ul>
            <li><strong>Platform-Agnostic Data:</strong> Because content is served as raw JSON data via GraphQL, you can distribute that exact same data to your Next.js website, native iOS/Android apps, and digital kiosks simultaneously.</li>
            <li><strong>COPE Methodology:</strong> "Create Once, Publish Everywhere" drastically reduces editorial overhead and eliminates the risk of fragmented, out-of-date information existing across different channels.</li>
            <li><strong>Technology Freedom:</strong> It empowers your engineering teams to use the best possible technology stack for each specific platform without being forced to change the backend content infrastructure.</li>
          </ul>
          <p>
            As new technologies and devices emerge in the future, your headless content repository is already prepared to serve them, ensuring your brand remains agile, consistent, and ready to meet your audience wherever they are.
          </p>
        </>
      )
    }
  ];

  return (
    <div id="ek-headless-tabs" className="w-full">
      <style dangerouslySetInnerHTML={{ __html: `
        /* --- 1. PREVENT SITE OVERFLOW --- */
        #ek-headless-tabs {
            box-sizing: border-box;
            width: 100%;
            max-width: 1200px !important; 
            margin: 40px auto !important;
            padding: 0 20px;
            background: transparent !important;
            font-family: 'Inter', sans-serif;
            color: #ffffff;
        }

        #ek-headless-tabs * {
            box-sizing: border-box;
        }

        /* --- 2. HEADING STYLES --- */
        #ek-headless-tabs .king-heading-wrap {
            text-align: center;
            margin-bottom: 50px;
        }

        #ek-headless-tabs .king-heading-wrap h2 {
            font-size: clamp(2.2rem, 4.5vw, 3.2rem);
            font-weight: 800;
            color: #ffffff;
            line-height: 1.1;
            letter-spacing: -0.04em;
            margin: 0 0 20px 0;
        }

        #ek-headless-tabs .king-heading-wrap p {
            font-size: 1.15rem;
            color: #ffffff;
            opacity: 0.8;
            font-weight: 400;
            max-width: 700px;
            margin: 0 auto;
        }

        /* --- 3. MAIN LAYOUT --- */
        #ek-headless-tabs .fx-wrapper {
            display: flex !important;
            flex-direction: row !important;
            justify-content: space-between !important; 
            align-items: flex-start !important;
            position: relative;
            width: 100%;
            gap: 50px;
        }

        /* --- 4. TABS --- */
        #ek-headless-tabs .fx-tabs {
            flex: 0 0 300px !important;
            display: flex;
            flex-direction: column;
            gap: 16px;
            z-index: 20;
        }

        #ek-headless-tabs .fx-tab {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 10px 0 !important;
            cursor: pointer;
            color: #ffffff !important;
            opacity: 0.5;
            transition: all 0.3s ease;
            background: transparent !important;
            border: none !important;
            user-select: none;
        }

        #ek-headless-tabs .fx-tab:hover {
            opacity: 0.8;
        }

        #ek-headless-tabs .fx-tab.active {
            opacity: 1;
        }

        #ek-headless-tabs .fx-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff !important;
            flex-shrink: 0;
            transition: all 0.3s ease;
        }

        #ek-headless-tabs .fx-tab.active .fx-icon {
            transform: scale(1.1);
        }

        #ek-headless-tabs .fx-tab span {
            font-size: 20px;
            font-weight: 600 !important;
        }

        /* --- 5. CONTENT AREA --- */
        #ek-headless-tabs .fx-content-area {
            flex: 1 !important;
            position: relative;
            overflow: visible !important; 
        }

        #ek-headless-tabs .fx-panel {
            display: none;
            width: 100%;
            height: 100%;
            padding: 0;
            background: transparent;
        }

        #ek-headless-tabs .fx-panel.active {
            display: block !important;
            animation: fx-fade-in 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }

        @keyframes fx-fade-in {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* --- 6. TEXT CONTENT & FORMATTING --- */
        #ek-headless-tabs .fx-text-col h3 { 
            font-size: 32px !important; 
            font-weight: 800 !important;
            margin: 0 0 24px 0 !important; 
            color: #ffffff !important;
            line-height: 1.25 !important;
            letter-spacing: -0.02em !important;
        }

        /* Paragraph styling */
        #ek-headless-tabs .fx-text-col p { 
            opacity: 0.85 !important; 
            color: #ffffff !important;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.8;
            margin: 0 0 20px 0;
        }

        /* List styling */
        #ek-headless-tabs .fx-text-col ul {
            margin: 0 0 24px 24px;
            padding: 0;
            list-style-type: disc;
            color: #ffffff;
            opacity: 0.85;
        }

        #ek-headless-tabs .fx-text-col li {
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 12px;
        }

        #ek-headless-tabs .fx-text-col li strong {
            font-weight: 700;
            color: #ffffff;
        }

        /* --- 7. MOBILE RESPONSIVE --- */
        @media (max-width: 968px) {
            #ek-headless-tabs .fx-wrapper {
                flex-direction: column !important;
                gap: 40px !important;
            }

            #ek-headless-tabs .fx-tabs {
                width: 100% !important;
                flex-direction: row !important;
                overflow-x: auto !important;
                overflow-y: hidden !important;
                padding: 10px 0 !important;
                justify-content: flex-start !important;
                -webkit-overflow-scrolling: touch;
                scrollbar-width: none;
                gap: 24px;
            }

            #ek-headless-tabs .fx-tabs::-webkit-scrollbar { display: none; }

            #ek-headless-tabs .fx-tab {
                flex: 0 0 auto !important;
                padding: 0 !important;
            }

            #ek-headless-tabs .fx-tab span {
                font-size: 16px !important;
                white-space: nowrap !important;
            }

            #ek-headless-tabs .fx-content-area {
                width: 100% !important;
            }
        }
      `}} />

      <div className="king-heading-wrap">
        <h2>The Headless Architecture</h2>
        <p>Explore the core technical components that power modern decoupled WordPress applications.</p>
      </div>

      <div className="fx-wrapper">
        <div className="fx-tabs">
          {tabData.map((tab, index) => (
            <button 
              key={index}
              className={`fx-tab ${activeTab === index ? 'active' : ''}`} 
              onClick={() => setActiveTab(index)}
              aria-selected={activeTab === index}
              role="tab"
            >
              <div className="fx-icon">
                {tab.icon}
              </div>
              <span>{tab.title}</span>
            </button>
          ))}
        </div>

        <div className="fx-content-area">
          {tabData.map((tab, index) => (
            <div key={index} className={`fx-panel ${activeTab === index ? 'active' : ''}`} role="tabpanel">
              <div className="fx-text-col">
                <h3>{tab.title}</h3>
                {tab.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};