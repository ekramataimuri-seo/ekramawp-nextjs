"use client";

import React, { useState } from "react";

export const AIfrontendeveloperBook = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const steps = [
    {
      badge: "The Architecture",
      label: "System Design",
      amount: "Scalable",
      infoTitle: "Why Modular Code Matters",
      items: [
        {
          title: "Component Atoms",
          desc: "We build interfaces using atomic design principles, ensuring every button and input is a reusable asset.",
          icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        },
        {
          title: "State Management",
          desc: "Predictable data flow using modern tools ensures your application remains stable as features grow.",
          icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        },
        {
          title: "TypeScript Safety",
          desc: "Static typing eliminates runtime errors and provides a self-documenting codebase for engineering teams.",
          icon: <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
        }
      ],
      rightTitle: "Architectural Wins:",
      features: [
        "Reduced Technical Debt",
        "Faster Feature Onboarding",
        "Consistent Design Language",
        "Simplified Unit Testing",
        "Better Developer Experience",
        "Future-Proof Tech Stack",
        "Enterprise-Grade Stability"
      ],
      btnText: "Audit Architecture"
    },
    {
      badge: "The Performance",
      label: "Core Web Vitals",
      amount: "99+ Score",
      infoTitle: "Optimizing for Speed",
      items: [
        {
          title: "Next.js SSR/ISR",
          desc: "We leverage server-side rendering to deliver content instantly to the user's browser.",
          icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        },
        {
          title: "Image Optimization",
          desc: "Modern formats and lazy loading ensure high-fidelity visuals don't compromise load times.",
          icon: <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
        },
        {
          title: "Code Splitting",
          desc: "Dynamically loading only what is needed keeps your JavaScript bundles lean and fast.",
          icon: <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
        }
      ],
      rightTitle: "Performance Metrics:",
      features: [
        "Sub-second First Paint",
        "Zero Layout Shifts (CLS)",
        "Optimized Time to Interactive",
        "Search Engine Dominance",
        "Lower Bounce Rates",
        "Higher User Engagement",
        "Native-like Responsiveness"
      ],
      btnText: "Check Performance"
    },
    {
      badge: "The Interface",
      label: "Precision UX",
      amount: "Pixel Perfect",
      infoTitle: "Beyond Visuals",
      items: [
        {
          title: "Responsive Logic",
          desc: "Interfaces that adapt flawlessly across mobile, tablet, and ultra-wide desktop screens.",
          icon: <path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z" />
        },
        {
          title: "Accessibility (a11y)",
          desc: "WCAG compliant markup ensures your product is usable by everyone, everywhere.",
          icon: <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
        },
        {
          title: "Interaction Design",
          desc: "Subtle micro-interactions and animations that guide users through your workflow.",
          icon: <path d="M7 2v11h10V2H7zm5 9L9 8l1.41-1.41L12 8.17l1.59-1.58L15 8l-3 3z" />
        }
      ],
      rightTitle: "UX Deliverables:",
      features: [
        "Semantic HTML5 Structure",
        "Touch-Friendly Navigation",
        "Adaptive Typography",
        "Dark/Light Mode Support",
        "Cross-Browser Consistency",
        "User Flow Optimization",
        "Intuitive Feedback Loops"
      ],
      btnText: "Review My UI"
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
  };

  return (
    <div className="AISEO-scope" id="AISEOBookComponent">
      <style jsx>{`
        .AISEO-scope {
            --brand-color: #3F5CE0;
            --brand-light: rgba(63, 92, 224, 0.1);
            --success-color: #3F5CE0;
            --txt-main: #FFFFFF;
            --txt-light: #E2E8F0;
            padding: 80px 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            width: 100%;
            box-sizing: border-box;
            overflow: hidden;
            background: #0a0f1a;
        }

        .main-wrapper { max-width: 900px; width: 100%; text-align: center; z-index: 2; }
        .header { margin-bottom: 50px; }
        .subtitle { color: #FFFFFF; font-weight: 900; font-size: 0.85rem; letter-spacing: 2px; margin-bottom: 12px; text-transform: uppercase; }
        .title { font-size: clamp(1.5rem, 3vw, 2.5rem); color: #3F5CE0; margin-bottom: 20px; font-weight: 900; line-height: 1.1; letter-spacing: -0.04em; }

        .double-scratch {
            position: relative;
            display: inline-block;
            color: #FFFFFF;
            z-index: 1;
            padding: 0 4px;
        }
        .double-scratch::before { content: ''; position: absolute; left: 0; right: 0; bottom: 4px; height: 10px; background: #2e476e; z-index: -2; transform: skewX(-12deg); border-radius: 2px; }
        .double-scratch::after { content: ''; position: absolute; left: 0; right: 0; bottom: 8px; height: 10px; background: #3C66A6; z-index: -1; transform: skewX(-12deg); border-radius: 2px; }

        .description { color: #FFFFFF; font-size: 1.1rem; line-height: 1.7; font-weight: 400; max-width: 600px; margin: 0 auto; opacity: 0.9; }

        .book-viewport { perspective: 2000px; margin: 0 auto; width: 100%; height: 750px; position: relative; }
        .book-container { position: relative; width: 100%; height: 100%; transform-style: preserve-3d; }

        .spread {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            opacity: 0; pointer-events: none;
            transition: transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.5s;
            transform: rotateY(90deg); transform-origin: center;
            will-change: transform, opacity;
        }

        .spread.active { opacity: 1; pointer-events: all; transform: rotateY(0deg); z-index: 5; }
        .spread.turned { transform: rotateY(-90deg); opacity: 0; }

        .card { background: #1a2436; border-radius: 12px; box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4); display: flex; text-align: left; border: 1px solid rgba(255,255,255,0.1); height: 100%; }
        .card-left { flex: 1.2; border-top-left-radius: 12px; border-bottom-left-radius: 12px; display: flex; flex-direction: column; border-right: 1px solid rgba(255,255,255,0.1); }
        .card-right { flex: 1; background-color: rgba(255,255,255,0.02); border-top-right-radius: 12px; border-bottom-right-radius: 12px; display: flex; flex-direction: column; padding: 20px; }

        .AISEO-box { background-color: #3F5CE0; color: white; padding: 30px; text-align: center; position: relative; flex-shrink: 0; border-top-left-radius: 12px; }
        .badge { font-size: 0.75rem; background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 20px; display: inline-block; margin-bottom: 10px; font-weight: 900; text-transform: uppercase; }
        .start-text { font-size: 0.9rem; margin-bottom: 5px; opacity: 0.9; font-weight: 400; }
        .amount { font-size: 2.8rem; font-weight: 900; line-height: 1.1; }

        .scroll-area { flex-grow: 1; overflow-y: auto; padding: 30px 40px; scrollbar-width: thin; scrollbar-color: #3F5CE0 transparent; }
        .scroll-area::-webkit-scrollbar { width: 6px; }
        .scroll-area::-webkit-scrollbar-thumb { background-color: #3F5CE0; border-radius: 10px;}

        .info-title { font-size: 1.1rem; color: #FFFFFF; margin-bottom: 25px; font-weight: 900; text-transform: uppercase; }
        .info-item { display: flex; gap: 15px; margin-bottom: 25px; }
        .icon-bg { width: 40px; height: 40px; background: rgba(63, 92, 224, 0.2); border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .info-text h3 { font-size: 1.1rem; margin-bottom: 4px; color: #3F5CE0; font-weight: 900; margin-top: 0; }
        .info-text p { font-size: 0.9rem; color: #E2E8F0; line-height: 1.5; margin: 0; font-weight: 400; }

        .list-title { font-size: 1.05rem; font-weight: 900; margin-bottom: 20px; color: #FFFFFF; text-transform: uppercase; }
        .feature-list { list-style: none; padding: 0; margin-bottom: 10px; }
        .feature-list li { font-size: 1rem; color: #FFFFFF; margin-bottom: 12px; display: flex; align-items: flex-start; gap: 10px; line-height: 1.4; font-weight: 400; }
        .feature-list li::before { content: '→'; color: #3F5CE0; font-weight: 900; }

        .btn-wrap { margin-top: auto; padding-top: 20px; }
        .cta-btn { background-color: #3F5CE0; color: white; border: none; padding: 16px 40px; border-radius: 8px; font-size: 1.05rem; font-weight: 900; cursor: pointer; transition: 0.3s; width: fit-content; display: block; margin: 0 auto; min-width: 200px; text-transform: uppercase; }
        .cta-btn:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(63, 92, 224, 0.3); }

        .nav-wrap { display: flex; justify-content: center; align-items: center; gap: 30px; margin-top: 40px; position: relative; z-index: 10; }
        .nav-trigger { background: transparent; border: 2px solid #3F5CE0; color: #3F5CE0; padding: 10px 25px; border-radius: 30px; font-weight: 900; cursor: pointer; transition: 0.3s; text-transform: uppercase; }
        .nav-trigger:hover { background: #3F5CE0; color: #fff; }
        .page-counter { color: #fff; font-weight: 900; font-size: 1.1rem; }

        @media (max-width: 850px) {
            .card { flex-direction: column; height: auto; margin-top: 40px; }
            .AISEO-box { border-radius: 12px 12px 0 0; }
            .book-viewport { height: auto; min-height: 850px; perspective: none; }
            .spread { position: relative; transform: none !important; opacity: 0; display: none; }
            .spread.active { opacity: 1; display: block; }
            .card-right { border-radius: 0 0 12px 12px; }
        }
      `}</style>

      <div className="main-wrapper">
        <header className="header">
          <p className="subtitle">Modern Engineering Workflow</p>
          <h2 className="title">
            Scaling Products Through <br />
            <span className="double-scratch">Precision Engineering</span>
          </h2>
          <p className="description">
            We build high-performance front-end systems that combine modular architecture 
            with pixel-perfect implementation to deliver world-class user experiences.
          </p>
        </header>

        <div className="book-viewport">
          <div className="book-container">
            {steps.map((step, index) => {
              let statusClass = "";
              if (index === currentIndex) statusClass = "active";
              else if (index < currentIndex) statusClass = "turned";

              return (
                <div key={index} className={`spread ${statusClass}`}>
                  <section className="card">
                    <div className="card-left">
                      <div className="AISEO-box">
                        <span className="badge">{step.badge}</span>
                        <p className="start-text">{step.label}</p>
                        <div className="amount">
                          {step.amount}
                        </div>
                      </div>
                      <div className="scroll-area">
                        <h3 className="info-title">{step.infoTitle}</h3>
                        {step.items.map((item, i) => (
                          <div className="info-item" key={i}>
                            <div className="icon-bg">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF">
                                {item.icon}
                              </svg>
                            </div>
                            <div className="info-text">
                              <h3>{item.title}</h3>
                              <p>{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="card-right">
                      <div className="scroll-area">
                        <h3 className="list-title">{step.rightTitle}</h3>
                        <ul className="feature-list">
                          {step.features.map((feat, i) => (
                            <li key={i}>{feat}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="btn-wrap">
                        <button className="cta-btn">{step.btnText}</button>
                      </div>
                    </div>
                  </section>
                </div>
              );
            })}
          </div>
        </div>

        <div className="nav-wrap">
          <button className="nav-trigger prev" onClick={handlePrev}>
            ← Back
          </button>
          <div className="page-counter">
            Step <span>{currentIndex + 1}</span> of {steps.length}
          </div>
          <button className="nav-trigger next" onClick={handleNext}>
            Next Step →
          </button>
        </div>
      </div>
    </div>
  );
};