"use client";
import React, { useState, useEffect, useRef } from 'react';

// Configuration Data
const cardImage = "https://admin.wpfedev.com/wp-content/uploads/2026/02/bluedeign-image.webp";

const sharedContent = {
    tag: "AI-Powered Intelligence for WordPress Success",
    title: "Make Smarter Decisions, Faster",
    bullets: [
        "Leverage AI to analyze website performance across industries and campaigns, uncovering opportunities that may go unnoticed.",
        "AI insights help guide optimization efforts, ensuring strategy and execution remain at the forefront of growth.",
        "Integrating AI into your WordPress site empowers your team to focus on what’s driving results, guiding smart investments, and compounding revenue over time."
    ],
    cta: "Explore Our Case Studies to See the Impact of AI-Driven Optimization!"
};

const serviceLabels = ["Architecture", "Performance", "Headless", "Quality", "Security", "SEO"];

export const FiveCirclesBox = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [lineWidth, setLineWidth] = useState(0);
    const nodesRef = useRef<(HTMLButtonElement | null)[]>([]);

    const updateProgressLine = (index: number) => {
        const activeNode = nodesRef.current[index];
        if (activeNode) {
            const centerOffset = activeNode.offsetLeft + (activeNode.offsetWidth / 2) - 40;
            setLineWidth(centerOffset);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => updateProgressLine(activeIndex), 50);
        const handleResize = () => updateProgressLine(activeIndex);
        
        window.addEventListener('resize', handleResize);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', handleResize);
        };
    }, [activeIndex]);

    return (
        <section className="five-circles-wrapper">
            <style dangerouslySetInnerHTML={{ __html: `
                .five-circles-wrapper {
                    --primary-blue: #007bff;
                    --accent-teal: #2db8b1;
                    --bg-dark: #0f172a;
                    --card-bg: rgba(30, 41, 59, 0.7);
                    --text-pure-white: #ffffff;
                    --halo-static: rgba(255, 255, 255, 0.2); 
                    --line-color: #ffffff; 
                    --highlight-1: #3C66A6;
                    --highlight-2: #2E476E;
                    width: 100%;
                    max-width: 1300px;
                    margin: 0 auto;
                    padding: 60px 20px;
                    display: flex;
                    flex-direction: column;
                    gap: 40px;
                }
                .fx-header-section { text-align: center; max-width: 800px; margin: 0 auto 20px auto; }
                .fx-main-heading { font-size: clamp(2rem, 4vw, 3rem); font-weight: 900; color: var(--text-pure-white); line-height: 1.2; margin-bottom: 20px; }
                .highlight-scratch {
                    position: relative; z-index: 1; padding: 0 5px; display: inline-block;
                    background-image: linear-gradient(to right, var(--highlight-1), var(--highlight-1)), linear-gradient(to right, var(--highlight-2), var(--highlight-2));
                    background-size: 100% 12px, 100% 8px; background-position: 0 85%, 0 95%; background-repeat: no-repeat;
                }
                .fx-body-content { font-size: 1.1rem; line-height: 1.6; color: rgba(255, 255, 255, 0.8); }
                .fx-nav-wrapper { position: relative; width: 100%; max-width: 750px; margin: 0 auto; padding: 20px 0; }
                .fx-nav-wrapper::before { content: ''; position: absolute; top: 45px; left: 40px; right: 40px; height: 1px; background: var(--line-color); z-index: 1; opacity: 0.3; }
                .fx-progress-line { position: absolute; top: 45px; left: 40px; height: 2px; background: var(--primary-blue); z-index: 2; transition: width 0.6s cubic-bezier(0.23, 1, 0.32, 1); }
                .fx-nodes-container { display: flex; justify-content: space-between; position: relative; z-index: 3; }
                .fx-node { background: none; border: none; cursor: pointer; display: flex; flex-direction: column; align-items: center; outline: none; transition: 0.3s; width: 80px; }
                .fx-icon-outer { width: 50px; height: 50px; background: var(--halo-static); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 10px; transition: all 0.4s ease; border: 1px solid rgba(255,255,255,0.1); }
                .fx-icon-inner { width: 32px; height: 32px; background: var(--primary-blue); border-radius: 50%; display: flex; align-items: center; justify-content: center; }
                .fx-icon-inner svg { width: 16px; height: 16px; fill: white; }
                .fx-node-label { font-size: 9px; font-weight: 800; text-transform: uppercase; color: rgba(255,255,255,0.6); letter-spacing: 1px; margin-top: 5px; }
                .fx-node.is-active .fx-node-label { color: var(--accent-teal); }
                .fx-node.is-active .fx-icon-outer { background: rgba(255, 255, 255, 0.9); transform: scale(1.1); box-shadow: 0 0 15px rgba(255,255,255,0.3); }
                .fx-content-area { position: relative; min-height: 550px; }
                .fx-slide { position: absolute; top: 0; left: 0; right: 0; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 60px; opacity: 0; visibility: hidden; transform: translateY(20px); transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1); background: var(--card-bg); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 24px; padding: 60px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); }
                .fx-slide.is-active { opacity: 1; visibility: visible; transform: translateY(0); position: relative; }
                .fx-slide-tag { color: var(--accent-teal); font-weight: 800; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 15px; }
                .fx-slide h3 { font-size: 2.5rem; font-weight: 900; color: var(--text-pure-white); margin: 0 0 25px 0; line-height: 1.1; }
                .fx-bullets { list-style: none; padding: 0; margin: 0 0 35px 0; }
                .fx-bullets li { position: relative; padding-left: 30px; margin-bottom: 15px; color: var(--text-pure-white); font-size: 1.05rem; line-height: 1.5; }
                .fx-bullets li::before { content: ''; position: absolute; left: 0; top: 10px; width: 8px; height: 8px; background-color: var(--accent-teal); border-radius: 50%; }
                .fx-cta { color: var(--primary-blue); font-weight: 800; text-decoration: none; display: inline-flex; align-items: center; gap: 12px; font-size: 1.1rem; }
                .visual-main-img { width: 100%; max-width: 480px; height: auto; border-radius: 15px; }
                @media (max-width: 1000px) {
                    .fx-nodes-container { gap: 15px; overflow-x: auto; padding-bottom: 20px; }
                    .fx-node { flex-shrink: 0; }
                    .fx-nav-wrapper::before, .fx-progress-line { display: none; }
                    .fx-slide { grid-template-columns: 1fr; padding: 30px; }
                    .fx-slide-visual { order: -1; }
                }
            `}} />

            <div className="fx-header-section">
                <h2 className="fx-main-heading">
                    Revolutionizing WordPress with <span className="highlight-scratch">AI-Driven Intelligence</span>
                </h2>
                <p className="fx-body-content">
                    Unlock the full potential of your digital presence. Our integrated AI solutions analyze and elevate your WordPress ecosystem.
                </p>
            </div>

            <div className="fx-nav-wrapper">
                <div className="fx-progress-line" style={{ width: `${lineWidth}px` }}></div>
                <div className="fx-nodes-container">
                    {serviceLabels.map((label, index) => (
                        <button
                            key={index}
                            // Fixed Ref Assignment
                            ref={(el) => { nodesRef.current[index] = el; }}
                            className={`fx-node ${activeIndex === index ? 'is-active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            <div className="fx-icon-outer">
                                <div className="fx-icon-inner">
                                    <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.5-4-7.5-4z"></path></svg>
                                </div>
                            </div>
                            <span className="fx-node-label">{label}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="fx-content-area">
                {serviceLabels.map((_, index) => (
                    <div key={index} className={`fx-slide ${activeIndex === index ? 'is-active' : ''}`}>
                        <div className="fx-slide-text">
                            <div className="fx-slide-tag">{sharedContent.tag}</div>
                            <h3>{sharedContent.title}</h3>
                            <ul className="fx-bullets">
                                {sharedContent.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
                            </ul>
                            <a href="#" className="fx-cta">{sharedContent.cta} &rarr;</a>
                        </div>
                        <div className="fx-slide-visual">
                            <img className="visual-main-img" src={cardImage} alt="AI Visual" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};