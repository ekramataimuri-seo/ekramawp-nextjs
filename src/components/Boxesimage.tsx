"use client";
import React from 'react';
import Image from 'next/image'; // IMPORT NEXT IMAGE

export const Boxesimage = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 relative">
      {/* Scoped CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
            --fe-white: #FFFFFF;
            --fe-highlight-1: #3C66A6;
            --fe-highlight-2: #2E476E;
            --fe-heading-base: #3F5CE0; 
            --fe-card-bg: #131C2D;
        }

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

        .fe-heading {
            font-weight: 900;
            font-size: clamp(1.5rem, 3vw, 2.5rem);
            color: var(--fe-heading-base);
            line-height: 1.2;
            margin-bottom: 0.5rem;
        }

        .fe-grid-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr); 
            gap: 1.5rem; 
            width: 100%;
            align-items: start; 
        }

        @media (max-width: 1024px) {
            .fe-grid-container { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
            .fe-grid-container { grid-template-columns: 1fr; gap: 2rem; }
        }

        .fe-card-title {
            font-weight: 900;
            font-size: clamp(1.0rem, 1vw, 1.2rem);
            color: #FFFFFF;
            margin-bottom: 0.75rem; 
        }

        .fe-paragraph {
            font-weight: 400;
            font-size: 1rem; 
            color: #FFFFFF;
            line-height: 1.5;
            opacity: 0.9;
            margin: 0; 
        }

        .fe-card {
            display: flex;
            flex-direction: column;
            background: var(--fe-card-bg);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            padding: 1.25rem; 
            transition: transform 0.3s ease, border-color 0.3s ease;
            position: relative;
            overflow: hidden;
            /* PERFORMANCE FIX: Tells browser to expect changes */
            will-change: transform; 
        }

        .fe-card:hover {
            transform: translateY(-5px);
            border-color: var(--fe-heading-base);
        }

        .fe-image-wrapper {
            width: 100%; 
            margin-bottom: 1rem;
            position: relative;
            border-radius: 8px;
            overflow: hidden;
    
            /* Enforce aspect ratio on container to prevent layout shift */
            aspect-ratio: 16/9; 
        }

        /* Styling for the Next.js Image */
        .fe-next-image {
            object-fit: contain; 
            transition: transform 0.5s ease;
        }

        .fe-card:hover .fe-next-image {
            transform: scale(1.03);
        }
      `}} />

      <div className="text-center mb-16 space-y-4">
        <span className="block text-sm font-bold tracking-widest uppercase text-white opacity-90">
          Next-Gen Web Development
        </span>
        
        <h2 className="fe-heading">
          Architecting the Future of <br className="hidden md:block" />
          <span className="highlight-scratch">Front End Engineering</span>
        </h2>
      </div>

      <div className="fe-grid-container">
        
        {/* Card 1 */}
        <div className="fe-card group">
          <h3 className="fe-card-title">Component-Driven UI</h3>
          <div className="fe-image-wrapper">
            <Image 
              src="https://admin.wpfedev.com/wp-content/uploads/2026/02/testedimage.webp" 
              alt="Component Architecture" 
              fill
              className="fe-next-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p className="fe-paragraph">
            We build modular, scalable component libraries that ensure design consistency and accelerate development cycles across apps.
          </p>
        </div>

        {/* Card 2 */}
        <div className="fe-card group">
          <h3 className="fe-card-title">Performance Optimization</h3>
          <div className="fe-image-wrapper">
            <Image 
              src="https://admin.wpfedev.com/wp-content/uploads/2026/02/testedimage.webp" 
              alt="Performance Optimization" 
              fill
              className="fe-next-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p className="fe-paragraph">
            Focusing on Core Web Vitals, we utilize advanced caching strategies and code-splitting to deliver lightning-fast experiences.
          </p>
        </div>

        {/* Card 3 */}
        <div className="fe-card group">
          <h3 className="fe-card-title">Responsive Interactivity</h3>
          <div className="fe-image-wrapper">
            <Image 
              src="https://admin.wpfedev.com/wp-content/uploads/2026/02/testedimage.webp" 
              alt="Interactive UI" 
              fill
              className="fe-next-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p className="fe-paragraph">
            Creating immersive interfaces that adapt seamlessly to any viewport. We blend fluid animations with intuitive layouts.
          </p>
        </div>

        {/* Card 4 */}
        <div className="fe-card group">
          <h3 className="fe-card-title">Advanced State Management</h3>
          <div className="fe-image-wrapper">
            <Image 
              src="https://admin.wpfedev.com/wp-content/uploads/2026/02/testedimage.webp" 
              alt="State Management" 
              fill
              className="fe-next-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p className="fe-paragraph">
            Managing complex data flows with precision using modern tools like Redux Toolkit and Zustand for predictable app behavior.
          </p>
        </div>

        {/* Card 5 */}
        <div className="fe-card group">
          <h3 className="fe-card-title">API Integration & GraphQL</h3>
          <div className="fe-image-wrapper">
            <Image 
              src="https://admin.wpfedev.com/wp-content/uploads/2026/02/testedimage.webp" 
              alt="API Integration" 
              fill
              className="fe-next-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p className="fe-paragraph">
            Seamlessly connecting front-ends to microservices with efficient data fetching strategies using Apollo GraphQL and React Query.
          </p>
        </div>

        {/* Card 6 */}
        <div className="fe-card group">
          <h3 className="fe-card-title">Design Systems</h3>
          <div className="fe-image-wrapper">
            <Image 
              src="https://admin.wpfedev.com/wp-content/uploads/2026/02/testedimage.webp" 
              alt="Design Systems" 
              fill
              className="fe-next-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p className="fe-paragraph">
            Bridging the gap between design and code with living style guides and Storybook integration for pixel-perfect implementation.
          </p>
        </div>

        {/* Card 7 */}
        <div className="fe-card group">
          <h3 className="fe-card-title">Accessibility (a11y)</h3>
          <div className="fe-image-wrapper">
            <Image 
              src="https://admin.wpfedev.com/wp-content/uploads/2026/02/testedimage.webp" 
              alt="Accessibility" 
              fill
              className="fe-next-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p className="fe-paragraph">
            Ensuring your web applications are inclusive and usable by everyone, adhering to strict WCAG 2.1 compliance standards.
          </p>
        </div>

        {/* Card 8 */}
        <div className="fe-card group">
          <h3 className="fe-card-title">Automated Testing</h3>
          <div className="fe-image-wrapper">
            <Image 
              src="https://admin.wpfedev.com/wp-content/uploads/2026/02/testedimage.webp" 
              alt="Testing" 
              fill
              className="fe-next-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p className="fe-paragraph">
            Deploying with confidence using comprehensive test suites. We implement Unit, Integration, and E2E testing with Jest and Cypress.
          </p>
        </div>

        {/* Card 9 */}
        <div className="fe-card group">
          <h3 className="fe-card-title">CI/CD Pipelines</h3>
          <div className="fe-image-wrapper">
            <Image 
              src="https://admin.wpfedev.com/wp-content/uploads/2026/02/testedimage.webp" 
              alt="CI CD" 
              fill
              className="fe-next-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p className="fe-paragraph">
            Streamlining deployment workflows with automated pipelines, ensuring rapid and reliable code delivery to production environments.
          </p>
        </div>

        {/* Card 10 */}
        <div className="fe-card group">
          <h3 className="fe-card-title">Headless CMS Architecture</h3>
          <div className="fe-image-wrapper">
            <Image 
              src="https://admin.wpfedev.com/wp-content/uploads/2026/02/testedimage.webp" 
              alt="Headless CMS" 
              fill
              className="fe-next-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p className="fe-paragraph">
            Decoupling content from presentation to offer omnichannel experiences, utilizing platforms like Strapi, Sanity, or Headless WordPress.
          </p>
        </div>

        {/* Card 11 */}
        <div className="fe-card group">
          <h3 className="fe-card-title">Internationalization (i18n)</h3>
          <div className="fe-image-wrapper">
            <Image 
              src="https://admin.wpfedev.com/wp-content/uploads/2026/02/testedimage.webp" 
              alt="Internationalization" 
              fill
              className="fe-next-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p className="fe-paragraph">
            Preparing your application for a global audience with robust localization frameworks that handle dynamic content translation effortlessly.
          </p>
        </div>

        {/* Card 12 */}
        <div className="fe-card group">
          <h3 className="fe-card-title">Progressive Web Apps</h3>
          <div className="fe-image-wrapper">
            <Image 
              src="https://admin.wpfedev.com/wp-content/uploads/2026/02/testedimage.webp" 
              alt="PWA" 
              fill
              className="fe-next-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p className="fe-paragraph">
            Building native-app-like experiences on the web with offline capabilities, push notifications, and installability on mobile devices.
          </p>
        </div>

      </div>
    </section>
  );
};