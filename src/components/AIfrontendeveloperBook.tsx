"use client";

import React, { useState } from "react";

export const AIfrontendeveloperBook = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const steps = [
    {
      badge: "Custom PPC Plans",
      label: "Starting at",
      amount: "$650",
      infoTitle: "How we determine pricing",
      items: [
        {
          title: "Your Ad Spend",
          desc: "Your advertising budget will not only determine your monthly management costs, it will also help determine which advertising channels we’d recommend investing in to maximize your marketing budget.",
          icon: <img src="https://www.webfx.com/wp-content/uploads/2023/06/accounts.png" alt="Ad Spend" style={{ width: "32px", height: "32px", objectFit: "contain" }} />
        },
        {
          title: "Networks and Targeting",
          desc: "Your custom strategy will depend on where you are looking to advertise- Google, Bing, Programmatic, etc. Your WebFX strategist can recommend PPC channels for you based on your business goals!",
          icon: <img src="https://www.webfx.com/wp-content/uploads/2023/06/accounts.png" alt="Networks" style={{ width: "32px", height: "32px", objectFit: "contain" }} />
        },
        {
          title: "Creative Needs",
          desc: "If you have an in-house designer, you may not need WebFX’s support with the creation of branded ad creative. However, many of our clients trust WebFX’s design team to create professional, branded display ads for any campaign type.",
          icon: <img src="https://www.webfx.com/wp-content/uploads/2023/06/accounts.png" alt="Creative" style={{ width: "32px", height: "32px", objectFit: "contain" }} />
        }
      ],
      rightTitle: "Included for All PPC Plans:",
      features: [
        "In-depth keyword research and advanced selection",
        "Competitor and industry analysis",
        "Data-backed keyword development",
        "Ongoing ad strategy management and optimization",
        "Access to our in-house revenue acceleration software RevenueCloudFX",
        "Closed-loop ROI and customer journey tracking",
        "Conversion-boosting and performance tested ad copy",
        "Expertise and support from a team of over 750 strategists",
        "Ad campaign performance, analysis, and revenue reporting",
        "Strategic bid management"
      ],
      btnText: "Get My Custom Quote"
    },
    {
      badge: "Enterprise Plans",
      label: "Starting at",
      amount: "$1,200",
      infoTitle: "How we determine pricing",
      items: [
        {
          title: "Your Ad Spend",
          desc: "Your advertising budget will not only determine your monthly management costs, it will also help determine which advertising channels we’d recommend investing in to maximize your marketing budget.",
          icon: <img src="https://www.webfx.com/wp-content/uploads/2023/06/accounts.png" alt="Ad Spend" style={{ width: "32px", height: "32px", objectFit: "contain" }} />
        },
        {
          title: "Networks and Targeting",
          desc: "Your custom strategy will depend on where you are looking to advertise- Google, Bing, Programmatic, etc. Your WebFX strategist can recommend PPC channels for you based on your business goals!",
          icon: <img src="https://www.webfx.com/wp-content/uploads/2023/06/accounts.png" alt="Networks" style={{ width: "32px", height: "32px", objectFit: "contain" }} />
        },
        {
          title: "Creative Needs",
          desc: "If you have an in-house designer, you may not need WebFX’s support with the creation of branded ad creative. However, many of our clients trust WebFX’s design team to create professional, branded display ads for any campaign type.",
          icon: <img src="https://www.webfx.com/wp-content/uploads/2023/06/accounts.png" alt="Creative" style={{ width: "32px", height: "32px", objectFit: "contain" }} />
        }
      ],
      rightTitle: "Included for All PPC Plans:",
      features: [
        "In-depth keyword research and advanced selection",
        "Competitor and industry analysis",
        "Data-backed keyword development",
        "Ongoing ad strategy management and optimization",
        "Access to our in-house revenue acceleration software RevenueCloudFX",
        "Closed-loop ROI and customer journey tracking",
        "Conversion-boosting and performance tested ad copy",
        "Expertise and support from a team of over 750 strategists",
        "Ad campaign performance, analysis, and revenue reporting",
        "Strategic bid management"
      ],
      btnText: "Get My Custom Quote"
    },
    {
      badge: "Global Strategy",
      label: "Starting at",
      amount: "$3,500",
      infoTitle: "How we determine pricing",
      items: [
        {
          title: "Your Ad Spend",
          desc: "Your advertising budget will not only determine your monthly management costs, it will also help determine which advertising channels we’d recommend investing in to maximize your marketing budget.",
          icon: <img src="https://www.webfx.com/wp-content/uploads/2023/06/accounts.png" alt="Ad Spend" style={{ width: "32px", height: "32px", objectFit: "contain" }} />
        },
        {
          title: "Networks and Targeting",
          desc: "Your custom strategy will depend on where you are looking to advertise- Google, Bing, Programmatic, etc. Your WebFX strategist can recommend PPC channels for you based on your business goals!",
          icon: <img src="https://www.webfx.com/wp-content/uploads/2023/06/accounts.png" alt="Networks" style={{ width: "32px", height: "32px", objectFit: "contain" }} />
        },
        {
          title: "Creative Needs",
          desc: "If you have an in-house designer, you may not need WebFX’s support with the creation of branded ad creative. However, many of our clients trust WebFX’s design team to create professional, branded display ads for any campaign type.",
          icon: <img src="https://www.webfx.com/wp-content/uploads/2023/06/accounts.png" alt="Creative" style={{ width: "32px", height: "32px", objectFit: "contain" }} />
        }
      ],
      rightTitle: "Included for All PPC Plans:",
      features: [
        "In-depth keyword research and advanced selection",
        "Competitor and industry analysis",
        "Data-backed keyword development",
        "Ongoing ad strategy management and optimization",
        "Access to our in-house revenue acceleration software RevenueCloudFX",
        "Closed-loop ROI and customer journey tracking",
        "Conversion-boosting and performance tested ad copy",
        "Expertise and support from a team of over 750 strategists",
        "Ad campaign performance, analysis, and revenue reporting",
        "Strategic bid management"
      ],
      btnText: "Get My Custom Quote"
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
  };

  const activeStep = steps[currentIndex];

  return (
    <section className="bofu-pricing-wrapper">
      <style jsx>{`
/* --- 1. THE MAIN WRAPPER --- */
.bofu-pricing-wrapper {
  background-color: #000000 !important; /* The top half remains black */
  color: #fafbfd !important;
  padding: 80px 20px 100px;
  font-family: 'Inter', sans-serif;
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: auto;
  isolation: isolate; /* Critical: Keeps backgrounds from sliding behind site body */
  overflow: visible !important; /* Fixes the floating icon cutting issue */
}

/* --- 2. THE DOTTED GREEN BOTTOM (Fixed to Top Anchor) --- */
.bofu-pricing-wrapper::before {
  content: "";
  position: absolute;
  left: 0;
  /* CHANGE: Fixed anchor point (e.g., 450px from top) stops the 'jumping' */
  top: 650px; 
  width: 100%;
  /* Use a large height to ensure it covers the bottom even on long mobile scrolls */
  height: 800px; 
  
  /* BASE COLOR: Using your site's --teal-01 or #EDF9F8 for the green block */
  background-color: #1b572c !important; 
  
  /* DOTS: These will only appear within this green area */
background-image: radial-gradient(#000000 1.2px, transparent 1.2px)
 !important;  
 background-repeat: no-repeat; 
  background-size: 100% 100%; /* Or keep your 14px 14px and use repeat-x if only 1 row */
  
  z-index: -1;
  pointer-events: none;
}

/* --- 3. DOTTED LIMITER --- */
/* If you want the dots to ONLY be at the top edge of the green block: */
.bofu-pricing-wrapper::after {
  content: "";
  position: absolute;
  left: 0;
  top: 450px; /* Must match the top of the green block */
  width: 100%;
  height: 300px; /* This limits the dots to just the first 300px of the green */
  background-image: radial-gradient(#000000 1px, transparent 1.5px) !important;
  background-size: 14px 14px !important;
  z-index: -1;
}

        /* --- 4. CONTAINER ALIGNMENT --- */
        .container-inner {
          max-width: 950px !important; 
          width: 100% !important;
          margin: 0 auto !important; 
          position: relative;
          z-index: 10;
        }

        /* --- 5. TOP INTRO TEXT --- */
        .intro-header {
          text-align: center;
          margin-bottom: 70px;
        }
        .intro-header h2 {
          font-size: clamp(1.8rem, 4vw, 2.4rem) !important;
          font-weight: 900 !important;
          color: #ffffff !important;
          line-height: 1.2 !important;
          margin-bottom: 20px !important;
        }
        .intro-header p {
          font-size: 1.05rem !important;
          color: #f0f2f4 !important;
          max-width: 800px;
          margin: 0 auto !important;
          line-height: 1.6 !important;
        }

        /* --- 6. MAIN PRICING CARD --- */
        .pricing-card {
          display: flex;
          background-color: #060505 !important;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4) !important;
          border: 1px solid #1f1a1a !important;
          position: relative;
          min-height: auto; 
          overflow: visible; 
        }

        /* --- 7. LEFT COLUMN --- */
        .card-left {
          flex: 1.2;
          display: flex;
          flex-direction: column;
          border-right: 1px solid #342b2b !important;
        }

        .card-left-top {
          background-color: #08743e !important;
          padding: 60px 30px 40px; 
          text-align: center;
          position: relative;
        }
        .floating-icon {
          position: absolute;
          top: -24px;
          left: 50%;
          transform: translateX(-50%);
          width: 48px;
          height: 48px;
          background-color: #ffffff !important;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2) !important;
        }
        .badge {
          color: #ffffff !important;
          font-size: 0.95rem !important;
          font-weight: 800 !important;
          text-transform: uppercase;
          margin: 0 0 8px 0 !important;
        }
        .label {
          color: #ffffff !important;
          font-size: 0.9rem !important;
          opacity: 0.8;
          margin: 0 0 10px 0 !important;
        }
        .price {
          color: #ffffff !important;
          font-size: 3.5rem !important;
          font-weight: 900 !important;
          margin: 0 !important;
          line-height: 1 !important;
        }
        .price span {
          color: #ffffff !important;
          font-size: 1.1rem !important;
          font-weight: 500 !important;
        }

        .card-left-bottom {
          background-color: #1A1A1A !important;
          padding: 35px 40px 50px !important; 
          flex-grow: 1; 
          display: flex;
          flex-direction: column;
        }
        .card-left-bottom h4 {
          color: #ffffff !important;
          font-size: 1.25rem !important;
          font-weight: 700 !important;
          margin: 0 0 25px 0 !important; 
        }
        .item-block {
          margin-bottom: 30px !important;
        }
        .item-block:last-child {
          margin-bottom: 0 !important;
        }
        .item-header {
          display: flex;
          align-items: center !important; 
          gap: 12px;
          margin-bottom: 12px !important;
        }
        .item-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .item-header h5 {
          color: #ffffff !important; 
          font-size: 1.05rem !important;
          font-weight: 700 !important; 
          margin: 0 !important; 
        }
        .item-block p {
          color: #e0e0e0 !important;
          font-size: 0.9rem !important;
          line-height: 1.6 !important; 
          margin: 0 !important;
          font-weight: 500 !important;
        }

        /* --- 8. RIGHT COLUMN --- */
        .card-right {
          flex: 1;
          background-color: #151515 !important;
          padding: 60px 40px; 
          display: flex;
          flex-direction: column;
        }
        .card-right h4 {
          color: #ffffff !important;
          font-size: 1.2rem !important;
          font-weight: 700 !important;
          margin: 0 0 30px 0 !important;
        }
        .feature-list {
          list-style: none !important;
          padding: 0 !important;
          margin: 0 0 40px 0 !important;
          display: flex;
          flex-direction: column;
          gap: 16px; 
        }
        .feature-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: #f0f2f4 !important;
          font-size: 0.9rem !important;
          font-weight: 500 !important;
          line-height: 1.4 !important;
        }
        .check-circle {
          width: 20px;
          height: 20px;
          background-color: #E9F7F0 !important;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #26B16D !important;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .cta-button {
          background-color: #26B16D !important;
          color: #ffffff !important;
          font-weight: 800 !important;
          font-size: 1rem !important;
          padding: 16px 20px !important;
          border-radius: 6px !important;
          border: none !important;
          cursor: pointer !important;
          text-align: center !important;
          width: 100% !important;
          margin-top: auto !important;
          transition: background-color 0.2s ease !important;
        }
        .cta-button:hover {
          background-color: #1e9258 !important;
        }

        /* --- 9. BOTTOM NAVIGATION LINK --- */
        .nav-link-area {
          text-align: center;
          margin-top: 40px;
          position: relative;
        }
        .nav-link-area button {
          background: none !important;
          border: none !important;
          color: #207DE9 !important;
          font-weight: 700 !important;
          font-size: 0.95rem !important;
          cursor: pointer !important;
          padding: 10px 15px !important;
        }
        .nav-link-area button:hover {
          text-decoration: underline;
        }
        .nav-link-area span {
          color: #ffffff !important;
          font-size: 0.9rem !important;
          margin: 0 15px !important;
        }

        /* --- 10. MOBILE RESPONSIVENESS --- */
        @media (max-width: 900px) {
          .pricing-card {
            flex-direction: column;
          }
          .card-left {
            border-right: none !important;
            border-bottom: 1px solid #342b2b !important;
          }
        }
      `}</style>

      <div className="container-inner">
        
        {/* Intro Header */}
        <div className="intro-header">
          <h2>
            Looking for plans and pricing?<br />
            Get a preview of our enterprise PPC services
          </h2>
          <p>
            Growing PPC’s performance starts with a plan customized to your business, industry, and audience. So, we build a customized enterprise PPC service plan for your organization, providing you with a roadmap for how we’ll achieve your goals for paid search, from greater brand awareness to bigger market share.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="pricing-card">
          
          {/* Left Side */}
          <div className="card-left">
            <div className="card-left-top">
              {/* Floating SVG Icon */}
              <div className="floating-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#207DE9">
                  <path d="M4 6h16v2H4zm2 3h12v10H6zm2 2v6h2v-6zm6 0v6h2v-6z"/>
                </svg>
              </div>
              <h3 className="badge">{activeStep.badge}</h3>
              <p className="label">{activeStep.label}</p>
              <h2 className="price">
                {activeStep.amount} <span>/ month</span>
              </h2>
            </div>

            <div className="card-left-bottom">
              <h4>{activeStep.infoTitle}</h4>
              
              {activeStep.items.map((item, idx) => (
                <div className="item-block" key={idx}>
                  {/* Icon and Title Inline */}
                  <div className="item-header">
                    <div className="item-icon-wrap">
                      {item.icon}
                    </div>
                    <h5>{item.title}</h5>
                  </div>
                  {/* Paragraph Underneath */}
                  <p>{item.desc}</p>
                </div>
              ))}

            </div>
          </div>

          {/* Right Side */}
          <div className="card-right">
            <h4>{activeStep.rightTitle}</h4>
            <ul className="feature-list">
              {activeStep.features.map((feature, idx) => (
                <li key={idx}>
                  {/* SVG Checkmark */}
                  <div className="check-circle">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="cta-button">
              {activeStep.btnText}
            </button>
          </div>

        </div>

        {/* Bottom Navigation */}
        <div className="nav-link-area">
          <button onClick={handlePrev}>← Previous Plan</button>
          <span>Plan {currentIndex + 1} of {steps.length}</span>
          <button onClick={handleNext}>Next Plan →</button>
        </div>

      </div>
    </section>
  );
};