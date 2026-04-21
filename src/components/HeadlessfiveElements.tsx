"use client";

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

// --- DATA DICTIONARY ---
// Add new pages here as keys (e.g., "/new-page-url")
const TABS_DATA: Record<string, any> = {
  "/headless-wordpress-front-end": {
    heading: "The Headless Architecture",
    subheading: "Explore the core technical components that power modern decoupled WordPress applications.",
    tabs: [
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
    ]
  },
  "/wep-app-front-end": {
    heading: "Web App Front End Architecture",
    subheading: "Explore the core technical components that power interactive, state-driven web applications.",
    tabs: [
      {
        title: "React & Next.js Ecosystem",
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
        ),
        content: (
          <>
            <h3>Modern Component UI</h3>
            <p>
              Unlike traditional websites, web apps require highly interactive interfaces. We leverage React and Next.js to build modular, reusable components that provide instantaneous feedback to users without page reloads. 
            </p>
            <p>
              By utilizing Next.js Server Components and Client Components strategically, we ship less JavaScript to the browser, drastically improving initial load times while keeping complex UI elements highly interactive.
            </p>
          </>
        )
      },
      {
        title: "Complex State Management",
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        ),
        content: (
          <>
            <h3>Handling Application State</h3>
            <p>
              Web apps manage heavy data payloads like user sessions, shopping carts, and multi-step forms. We implement robust state management solutions tailored to your app's complexity.
            </p>
            <ul>
              <li><strong>Local State:</strong> Handled cleanly via React Hooks for isolated component behavior.</li>
              <li><strong>Global State:</strong> Scaled using Redux Toolkit, Zustand, or React Context to ensure data stays synchronized across every screen without prop-drilling.</li>
              <li><strong>Server State:</strong> Managed via React Query or SWR for automatic background fetching, caching, and optimistic UI updates.</li>
            </ul>
          </>
        )
      },
      {
        title: "API Integrations",
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        ),
        content: (
          <>
            <h3>Connecting the Web</h3>
            <p>
              Modern web apps rarely exist in isolation. They act as the central nervous system connecting various digital services.
            </p>
            <p>
              We seamlessly integrate your frontend with backend microservices, payment gateways (Stripe, PayPal), headless CRMs (Salesforce, HubSpot), internal databases, and AI endpoints. By using strictly typed API clients (like tRPC or GraphQL), we catch data errors at build-time rather than runtime, ensuring a bulletproof user experience.
            </p>
          </>
        )
      },
      {
        title: "Authentication & Security",
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        ),
        content: (
          <>
            <h3>Enterprise-Grade Protection</h3>
            <p>
              Protecting user data and gating premium content is non-negotiable. We implement highly secure authentication flows using OAuth 2.0, JWT (JSON Web Tokens), and SSO (Single Sign-On) providers.
            </p>
            <p>
              By leveraging libraries like NextAuth.js (Auth.js) and custom Next.js Edge Middleware, we ensure that protected API routes and client-side dashboards are strictly guarded against unauthorized access, XSS (Cross-Site Scripting), and CSRF attacks.
            </p>
          </>
        )
      },
      {
        title: "Real-Time Data",
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12h4l2-9 5 18 3-10 5 1"></path>
          </svg>
        ),
        content: (
          <>
            <h3>Live Synchronization</h3>
            <p>
              Many web applications—such as trading dashboards, live chat systems, or collaborative editing tools—require data that updates the moment a change occurs.
            </p>
            <p>
              We integrate WebSockets and Server-Sent Events (SSE) to push instant data updates directly from the server to the client. This event-driven architecture eliminates the need for constant, resource-heavy HTTP polling, drastically reducing your server costs while providing users with a magical, zero-latency experience.
            </p>
          </>
        )
      },
      {
        title: "PWA Capabilities",
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        ),
        content: (
          <>
            <h3>The Native App Experience</h3>
            <p>
              We can transform your web application into a Progressive Web App (PWA), giving it the power and feel of a native iOS or Android application without the App Store friction.
            </p>
            <ul>
              <li><strong>Offline-First:</strong> Using Service Workers to cache critical assets, ensuring the app remains usable even when the user loses internet connection.</li>
              <li><strong>Installability:</strong> Allowing users to install your web app directly to their mobile home screen or desktop environment.</li>
              <li><strong>Background Sync:</strong> Automatically syncing user actions (like form submissions) to the server once connectivity is restored.</li>
            </ul>
          </>
        )
      }
    ]
  }
};


// --- COMPONENT ---
export const HeadlessfiveElements = () => {
  const pathname = usePathname() || "/";
  // Normalize path by stripping trailing slash to ensure it matches dictionary keys
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  
  // Find data for current path, fallback to headless data if route not found
  const pageData = TABS_DATA[normalizedPath] || TABS_DATA["/headless-wordpress-front-end"];
  
 const { heading, subheading, tabs } = pageData; 
const [activeTab, setActiveTab] = useState(0);
// Logic to isolate the last word
const words = heading.split(" ");
const lastWord = words.pop();
const firstPart = words.join(" ");

if (!tabs || tabs.length === 0) return null;

return (
  <section id="ek-headless-tabs" className="w-full pt-2 pb-16 relative overflow-hidden">
    <div className="max-w-[1400px] mx-auto px-5 relative z-10 items-center justify-center text-center">
      
      <div className="king-heading-wrap text-center mb-[50px]">
        <h2>
    {firstPart} <span className="text-emerald-400">{lastWord}</span>
  </h2>
        
        {/* 2. Render the subheading here */}
        {subheading && (
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {subheading}
          </p>
        )}
      </div>

        <div className="fx-wrapper relative flex w-full justify-between items-start gap-[50px] text-left max-[968px]:flex-col max-[968px]:gap-10">
          <div
            className="fx-tabs z-20 flex flex-col gap-4 basis-[300px] shrink-0 grow-0 max-[968px]:w-full max-[968px]:flex-row max-[968px]:overflow-x-auto max-[968px]:overflow-y-hidden max-[968px]:py-[10px] max-[968px]:justify-start max-[968px]:gap-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            role="tablist"
          >
            {tabs.map((tab: any, index: number) => (
              <button
                key={index}
                className={`fx-tab flex items-center gap-[15px] py-[10px] cursor-pointer text-white transition-all duration-300 ease-in-out bg-transparent border-0 select-none text-left hover:opacity-80 max-[968px]:flex-none max-[968px]:p-0 ${
                  activeTab === index ? 'opacity-100' : 'opacity-50'
                }`}
                onClick={() => setActiveTab(index)}
                aria-selected={activeTab === index}
                role="tab"
                type="button"
              >
                <div
                  className={`fx-icon flex items-center justify-center text-white shrink-0 transition-all duration-300 ease-in-out ${
                    activeTab === index ? 'scale-110' : 'scale-100'
                  }`}
                >
                  {typeof tab.icon === 'string' ? (
                    <div dangerouslySetInnerHTML={{ __html: tab.icon }} />
                  ) : (
                    tab.icon
                  )}
                </div>
                <span className="text-[20px] font-semibold max-[968px]:text-base max-[968px]:whitespace-nowrap">
                  {tab.title}
                </span>
              </button>
            ))}
          </div>

          <div className="fx-content-area relative flex-1 overflow-visible max-[968px]:w-full">
            {tabs.map((tab: any, index: number) => (
              <div
                key={index}
                className={`fx-panel w-full h-full p-0 ${
                  activeTab === index ? 'block' : 'hidden'
                }`}
                role="tabpanel"
              >
                <div className="fx-text-col [&_h3]:mb-6 [&_p]:mb-5 [&_p]:text-base [&_p]:font-normal [&_p]:leading-[1.8] [&_p]:text-white/85 [&_ul]:mb-6 [&_ul]:ml-6 [&_ul]:list-disc [&_ul]:p-0 [&_ul]:text-white/85 [&_li]:mb-3 [&_li]:text-base [&_li]:leading-[1.6] [&_strong]:font-bold [&_strong]:text-white [&_code]:text-white">
                  {/* Fallback rendering in case h3 title isn't included in raw strings */}
                  {typeof tab.content === 'string' && !tab.content.includes('<h3') && (
                    <h3 className="mb-6">{tab.title}</h3>
                  )}
                  {typeof tab.content !== 'string' &&
                    !React.Children.toArray(tab.content.props.children).some(
                      child => (child as any).type === 'h3'
                    ) && <h3 className="mb-6">{tab.title}</h3>}

                  {typeof tab.content === 'string' ? (
                    <div dangerouslySetInnerHTML={{ __html: tab.content }} />
                  ) : (
                    tab.content
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};