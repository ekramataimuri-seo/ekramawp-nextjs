"use client";
import React from 'react';

export const Threecolumnarch = () => {
  const phases = [
    {
      title: "PHASE 01: FOUNDATION",
      subtitle: "Scalable Architecture",
      price: "CLEAN",
      priceUnit: " CODE",
      icon: "https://cdn-icons-png.flaticon.com/512/1005/1005141.png", 
      bodyTitle: "Component-Driven Design",
      description: "We establish a robust foundation using Atomic Design principles. By breaking interfaces into reusable components, we ensure consistency and maintainability across the application lifecycle.",
      list: [
        "Strict TypeScript Typing",
        "Isolated Component Labs",
        "Design Token Integration"
      ]
    },
    {
      title: "PHASE 02: PERFORMANCE",
      subtitle: "Core Web Vitals Engineering",
      price: "FAST",
      priceUnit: " RENDER",
      icon: "https://cdn-icons-png.flaticon.com/512/3665/3665947.png",
      bodyTitle: "Optimization Pipeline",
      description: "Performance is engineered, not patched. We implement advanced loading strategies to minimize Total Blocking Time and ensure rapid First Contentful Paint for superior UX.",
      list: [
        "SSR & Static Generation",
        "Route-based Code Splitting",
        "Advanced Image Optimization"
      ]
    },
    {
      title: "PHASE 03: ORCHESTRATION",
      subtitle: "State & Data Flow",
      price: "SMART",
      priceUnit: " STATE",
      icon: "https://cdn-icons-png.flaticon.com/512/9676/9676564.png",
      bodyTitle: "Managing Complexity",
      description: "We decouple UI state from server-cache data. Using modern tools alongside context-based global state ensures predictable data flow and seamless user interactivity.",
      list: [
        "Server State Synchronization",
        "Optimistic UI Updates",
        "Complex Form Management"
      ]
    }
  ];

  return (
    <div className="fe-main-wrapper">
      {/* --- SCOPED CSS --- */}
      <style dangerouslySetInnerHTML={{ __html: `
        .fe-main-wrapper {
          position: relative;
          padding: 120px 20px;
          min-height: 100vh;
          background: transparent;
          overflow: visible;
          font-family: 'Inter', sans-serif;
        }

        /* DARK GRADIENT BOTTOM HALF */
        .fe-main-wrapper::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 50%;
          background-color: #0E1623;
          background-image: 
            radial-gradient(900px 500px at 10% 0%, rgba(124, 92, 255, 0.25), transparent 60%),
            radial-gradient(800px 500px at 90% 10%, rgba(0, 212, 255, 0.18), transparent 55%);
          z-index: -2;
        }

        .fe-main-wrapper::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 50%;
          background-image: radial-gradient(rgba(255,255,255,0.05) 1.5px, transparent 1.5px);
          background-size: 24px 24px;
          pointer-events: none;
          z-index: -1;
        }

        .fe-container { max-width: 1100px; margin: 0 auto; position: relative; z-index: 5; }
        .fe-intro { text-align: center; margin-bottom: 100px; }
        
        .fe-intro-subtitle {
          display: block;
          color: #FFFFFF;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 15px;
        }

        .fe-main-wrapper h2 {
          font-weight: 900;
          font-size: clamp(1.5rem, 3vw, 2.5rem);
          color: #3F5CE0;
          line-height: 1.1;
          margin-bottom: 25px;
        }

        .highlight-scratch {
          color: #FFFFFF;
          position: relative;
          display: inline-block;
          z-index: 1;
        }
        
        .highlight-scratch::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 5%;
          width: 100%;
          height: 14px;
          background-image: linear-gradient(#3C66A6, #3C66A6), linear-gradient(#2E476E, #2E476E);
          background-size: 100% 5px, 100% 4px;
          background-position: 0 0, 0 10px;
          background-repeat: no-repeat;
          z-index: -1;
        }

        .fe-intro p {
          color: #FFFFFF;
          font-weight: 400;
          font-size: 1.1rem;
          line-height: 1.7;
          max-width: 800px;
          margin: 0 auto;
        }

        /* --- UPDATED BLUE COLUMNS --- */
        .fe-pricing-table {
          display: flex;
          border-radius: 24px;
          overflow: visible; 
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
          min-height: 850px;
          background: transparent;
        }

        .fe-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          /* MAKING THE COLUMN BLUE */
          background: #083A74; 
          border-right: 1px solid rgba(255, 255, 255, 0.1);
          overflow: visible;
          transition: transform 0.3s ease;
        }

        .fe-item:first-child { border-top-left-radius: 24px; border-bottom-left-radius: 24px; }
        .fe-item:last-child { border-top-right-radius: 24px; border-bottom-right-radius: 24px; border-right: none; }

        .fe-head {
          /* DEEPER BLUE FOR HEADER */
          background: #062a54; 
          padding: 80px 30px 40px;
          text-align: center;
          position: relative;
          border-top-left-radius: inherit;
          border-top-right-radius: inherit;
          overflow: visible;
        }

        .fe-icon-float {
          position: absolute;
          top: -35px;
          left: 50%;
          transform: translateX(-50%);
          background: #FFFFFF;
          width: 80px;
          height: 80px;
          border-radius: 18px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 15px;
        }

        .fe-icon-float img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          display: block;
          /* Keeping original colors for visibility on white icon box */
        }

        .fe-title {
          font-weight: 900;
          font-size: clamp(1.0rem, 1vw, 1.2rem);
          color: #FFFFFF;
          text-transform: uppercase;
          margin-top: 20px;
        }

        .fe-stitle { color: #84B9F5; font-size: 0.9rem; font-weight: 700; margin: 8px 0; }
        .fe-price { font-weight: 900; font-size: 2.5rem; color: #41D48C; margin: 10px 0 0; }
        .fe-price span { font-size: 1.1rem; color: #FFFFFF; opacity: 0.8; font-weight: 400;}

        /* Body background matches the column blue */
        .fe-body { 
          padding: 50px 40px; 
          flex-grow: 1; 
          text-align: left; 
          background: #083A74; 
          border-bottom-left-radius: inherit;
          border-bottom-right-radius: inherit;
        }
        
        .fe-body p { color: #FFFFFF; font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px; font-weight: 400; }
        
        .fe-body-title { 
          color: #FFFFFF; 
          font-weight: 900; 
          text-transform: uppercase; 
          margin-bottom: 25px; 
          font-size: 0.95rem; 
          letter-spacing: 1.5px; 
        }

        .fe-list { list-style: none; padding: 0; margin-top: auto; }
        .fe-list li {
          position: relative;
          padding-left: 35px;
          margin-bottom: 18px;
          font-size: 1.05rem;
          color: #FFFFFF;
          line-height: 1.5;
        }

        .fe-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #41D48C;
          font-weight: 900;
          font-size: 1.2rem;
        }

        .fe-foot-link { text-align: center; margin-top: 60px; }
        
        .fx-btn {
          background: #41D48C;
          color: #FFFFFF !important;
          text-decoration: none;
          font-weight: 900;
          padding: 20px 60px;
          border-radius: 8px;
          display: inline-block;
          transition: 0.3s ease;
          font-size: 1.1rem;
        }

        .fx-btn:hover { 
          background: #3F5CE0; 
          transform: translateY(-5px); 
          box-shadow: 0 15px 30px rgba(63, 92, 224, 0.4); 
        }

        @media (max-width: 1100px) {
          .fe-pricing-table { flex-direction: column; min-height: auto; }
          .fe-item { 
              border-right: none; 
              border-bottom: 1px solid rgba(255,255,255,0.1); 
              border-radius: 24px !important; 
              margin-bottom: 40px;
          }
        }
      `}} />

      <div className="fe-container">
        <div className="fe-intro">
          <span className="fe-intro-subtitle">Technical Excellence</span>
          <h2>
            Engineering for <span className="highlight-scratch">Maximum Performance</span>
          </h2>
          <p>
            Modern interfaces require more than just aesthetics. They demand rigorous engineering. 
            We build high-fidelity, scalable frontend architectures that drive user engagement through speed and reliability.
          </p>
        </div>

        <div className="fe-pricing-table">
          {phases.map((phase, index) => (
            <div className="fe-item" key={index}>
              <div className="fe-head">
                <div className="fe-icon-float">
                  <img src={phase.icon} alt={phase.title} />
                </div>
                <h3 className="fe-title">{phase.title}</h3>
                <p className="fe-stitle">{phase.subtitle}</p>
                <p className="fe-price">{phase.price} <span>{phase.priceUnit}</span></p>
              </div>
              
              <div className="fe-body">
                <h4 className="fe-body-title">{phase.bodyTitle}</h4>
                <p>{phase.description}</p>
                <ul className="fe-list">
                  {phase.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="fe-foot-link">
          <a href="#" className="fx-btn">
            Audit My Interface Architecture
          </a>
        </div>
      </div>
    </div>
  );
};