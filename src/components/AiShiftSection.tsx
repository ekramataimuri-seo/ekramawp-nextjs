"use client";
import React from "react";

// --- TypeScript Interfaces ---
interface BadgeData {
  icon: string;
  position: string;
}

interface NodeDataItem {
  label?: string;
  title: string;
  side: string;
  color: string;
  shortText: string;
  icon: string;
  badges?: BadgeData[]; 
}

interface MapNode extends NodeDataItem {
  id: string;
  cx: number;
  cy: number;
  isHub?: boolean;
}

// --- Data Configuration ---
// Cleaned up: Only 1 badge per outer node, placed at bottom-right. No badges on the hub.
const nodeData: Record<string, NodeDataItem> = {
  "student-data": { 
    label: "Traffic", title: "SIS Data", side: "left", color: "#34d399", shortText: "Secure Sync", icon: "play-outline",
    badges: [{ icon: "ai-brain", position: "-bottom-2 -right-2" }]
  },
  "curriculum": { 
    label: "Leads", title: "Curriculum", side: "left", color: "#34d399", shortText: "Resources", icon: "user",
    badges: [{ icon: "ai-network", position: "-bottom-2 -right-2" }]
  },
  "faculty": { 
    label: "Sales", title: "Faculty", side: "left", color: "#34d399", shortText: "Staff Hub", icon: "chart",
    badges: [{ icon: "dev-terminal", position: "-bottom-2 -right-2" }]
  },
  "policy": { 
    label: "Data", title: "Policy", side: "left", color: "#34d399", shortText: "Compliance", icon: "database",
    badges: [{ icon: "dev-brackets", position: "-bottom-2 -right-2" }]
  },
  
  "hub": { 
    title: "AI Hub", side: "center", color: "#2563eb", shortText: "AI Engine", icon: "play-solid",
    badges: [] // No badges on the middle circle
  },
  
  "grading": { 
    label: "Optimize Budget", title: "Grading", side: "right", color: "#2563eb", shortText: "Auto Grade", icon: "calculator",
    badges: [{ icon: "ai-brain", position: "-bottom-2 -right-2" }]
  },
  "personalization": { 
    label: "Expand Keywords", title: "Learning", side: "right", color: "#2563eb", shortText: "Custom Paths", icon: "list",
    badges: [{ icon: "ai-network", position: "-bottom-2 -right-2" }]
  },
  "automation": { 
    label: "Scale Winning Ads", title: "Workflows", side: "right", color: "#2563eb", shortText: "Milestones", icon: "sliders",
    badges: [{ icon: "dev-terminal", position: "-bottom-2 -right-2" }]
  },
  "support": { 
    label: "Content Gen", title: "Support", side: "right", color: "#2563eb", shortText: "AI Tutors", icon: "edit",
    badges: [{ icon: "dev-brackets", position: "-bottom-2 -right-2" }]
  },
};

export const AiShiftSection = () => {
  // Map data to coordinates
  const mapNodes: MapNode[] = [
    { id: "student-data", cx: 100, cy: 50, ...nodeData["student-data"] },
    { id: "curriculum", cx: 100, cy: 150, ...nodeData["curriculum"] },
    { id: "faculty", cx: 100, cy: 250, ...nodeData["faculty"] },
    { id: "policy", cx: 100, cy: 350, ...nodeData["policy"] },
    
    // Hub
    { id: "hub", cx: 400, cy: 200, ...nodeData["hub"], isHub: true }, 
    
    // Right nodes
    { id: "grading", cx: 700, cy: 50, ...nodeData["grading"] },
    { id: "personalization", cx: 700, cy: 150, ...nodeData["personalization"] },
    { id: "automation", cx: 700, cy: 250, ...nodeData["automation"] },
    { id: "support", cx: 700, cy: 350, ...nodeData["support"] },
  ];

  return (
    <section className="pt-10 pb-20 px-5 min-h-[5vh] flex items-center relative overflow-hidden bg-transparent">
      <style dangerouslySetInnerHTML={{ __html: `
        .coin-wrap { perspective: 1000px; width: 100%; height: 100%; }
        .coin-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
          border-radius: 50%;
        }
        .group:hover .coin-inner { transform: rotateY(180deg); }
        .coin-front, .coin-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }
        .coin-back { transform: rotateY(180deg); }
      `}} />

      <div className="max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">
        
        {/* --- LEFT COLUMN: DIAGRAM --- */}
        <div className="relative w-full h-[450px] flex items-center justify-center order-2 lg:order-1">
          <svg viewBox="0 0 800 400" className="w-full h-full overflow-visible">
            
            {/* Background Glows for the Hub */}
            <circle cx="400" cy="200" r="90" fill="#2563eb" opacity="0.04" />
            <circle cx="400" cy="200" r="70" fill="#2563eb" opacity="0.08" />

            {/* Render Paths and Arrows */}
            {[50, 150, 250, 350].map((y, i) => {
              const leftPath = `M 100 ${y} C 250 ${y}, 260 200, 400 200`;
              const rightPath = `M 400 200 C 540 200, 550 ${y}, 700 ${y}`;
              const delay = `${i * 0.3}s`;

              return (
                <React.Fragment key={i}>
                  {/* LEFT PATHS */}
                  <path d={leftPath} stroke="#34d399" strokeWidth="12" fill="none" opacity="0.15" strokeLinecap="round" />
<path d={leftPath} stroke="#34d399" strokeWidth="4" fill="none" opacity="0.4" strokeLinecap="round" strokeDasharray="6 12" />                  
                  <g fill="#34d399">
                    <path d="M -8 -6 L 8 0 L -8 6 Q -2 0 -8 -6 Z" />
                    <animateMotion dur="3s" repeatCount="indefinite" path={leftPath} rotate="auto" begin={delay} />
                  </g>

                  {/* RIGHT PATHS */}
                  <path d={rightPath} stroke="#2563eb" strokeWidth="12" fill="none" opacity="0.15" strokeLinecap="round" />
<path d={rightPath} stroke="#2563eb" strokeWidth="4" fill="none" opacity="0.4" strokeLinecap="round" strokeDasharray="6 12" />                  
                  <g fill="#3b82f6">
                    <path d="M -8 -6 L 8 0 L -8 6 Q -2 0 -8 -6 Z" />
                    <animateMotion dur="3s" repeatCount="indefinite" path={rightPath} rotate="auto" begin={delay} />
                  </g>
                </React.Fragment>
              );
            })}

            {/* Render Nodes */}
            {mapNodes.map((node) => {
              const coinSize = node.isHub ? 110 : 70; 
              const boxSize = node.isHub ? 160 : 120; 
              const radius = boxSize / 2;

              return (
                <g key={node.id} className="group cursor-pointer">
                  {/* Static Outer Labels */}
                  {!node.isHub && (
                    <text 
                      x={node.cx} 
                      y={node.cy - 45} 
                      textAnchor="middle" 
                      fill="white" 
                      fontSize="14" 
                      fontWeight="bold" 
                      className="opacity-90 tracking-wide"
                    >
                      {node.label}
                    </text>
                  )}

                  {/* 3D Flipping Circle Container */}
                  <foreignObject x={node.cx - radius} y={node.cy - radius} width={boxSize} height={boxSize} className="overflow-visible">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="coin-wrap" style={{ width: coinSize, height: coinSize }}>
                        <div className="coin-inner shadow-2xl">
                          
                          {/* Front: Icon + AI Badges */}
                          <div 
                            className="coin-front text-white border-[3px] border-white/10 relative"
                            style={{ backgroundColor: node.color }}
                          >
                            <svg width={node.isHub ? "40" : "24"} height={node.isHub ? "40" : "24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <DetailedIcon type={node.icon} />
                            </svg>

                            {/* Render attached Small Badges (Only 1 per outer circle now) */}
                            {node.badges?.map((badge, idx) => (
                              <div 
                                key={idx} 
                                className={`absolute w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-lg border border-slate-200 z-20 ${badge.position}`}
                              >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <BadgeIcon type={badge.icon} />
                                </svg>
                              </div>
                            ))}
                          </div>

                          {/* Back: Text Content */}
                          <div 
                            className="coin-back text-white flex-col border-[3px] border-white/20"
                            style={{ backgroundColor: node.color }}
                          >
                            <span className={`font-black text-center leading-tight drop-shadow-md ${node.isHub ? 'text-base' : 'text-[11px]'}`}>
                              {node.shortText.split(' ').map((word, i) => (
                                <React.Fragment key={i}>
                                  {word}<br/>
                                </React.Fragment>
                              ))}
                            </span>
                          </div>

                        </div>
                      </div>
                    </div>
                  </foreignObject>
                </g>
              );
            })}
          </svg>
        </div>

        {/* --- RIGHT COLUMN: TEXT CONTENT --- */}
        <div className="flex flex-col text-center lg:text-left z-20 w-full order-1 lg:order-2">
          <h1 className="text-white text-[clamp(1.5rem,4vw,2.5rem)] font-black leading-[1.1] mb-8">
            Shared AI Chat Platform for <br className="hidden lg:block" />
            <span className="text-emerald-400">Educational institutions</span>
          </h1>

          <div className="space-y-4">
            {[
              "AI Knowledge Base for curriculum resources",
              "Streamline project collaboration for lesson planning",
              "AI Workflow Automation for grading and scheduling",
              "Custom AI Agents for personalized student support"
            ].map((text, idx) => (
              <div key={idx} className="flex items-start justify-center lg:justify-start gap-4 group">
                <CheckIcon />
                <p className="text-white/80 text-lg leading-relaxed max-w-[500px] group-hover:text-white transition-colors">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center lg:justify-start">
            <button className="bg-[#34d399] hover:bg-[#10b981] hover:scale-105 transition-all text-gray-900 font-black py-4 px-10 rounded-full text-lg shadow-[0_0_20px_rgba(52,211,153,0.3)]">
              Start your Deployment Today
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

// Main Node Icons Matcher
const DetailedIcon = ({ type }: { type: string }) => {
  switch(type) {
    case "play-outline": return <><polygon points="5 3 19 12 5 21 5 3" fill="none" stroke="currentColor" strokeWidth="2"/></>;
    case "play-solid": return <><polygon points="5 3 19 12 5 21 5 3" fill="currentColor" stroke="none"/></>;
    case "user": return <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>;
    case "chart": return <><polyline points="3 3 3 21 21 21"/><polyline points="7 14 11 9 15 13 21 5"/></>;
    case "database": return <><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></>;
    case "calculator": return <><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="14.01"/><line x1="12" y1="14" x2="12" y2="14.01"/><line x1="8" y1="14" x2="8" y2="14.01"/><line x1="16" y1="18" x2="16" y2="18.01"/><line x1="12" y1="18" x2="12" y2="18.01"/><line x1="8" y1="18" x2="8" y2="18.01"/><line x1="16" y1="10" x2="16" y2="10.01"/><line x1="12" y1="10" x2="12" y2="10.01"/><line x1="8" y1="10" x2="8" y2="10.01"/></>;
    case "list": return <><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></>;
    case "sliders": return <><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></>;
    case "edit": return <><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></>;
    default: return <circle cx="12" cy="12" r="10" />;
  }
};

// Small Badge Icons Matcher (Neural, Terminal, Brackets)
const BadgeIcon = ({ type }: { type: string }) => {
  switch(type) {
    case "ai-brain": return <><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54zM14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54z" /></>;
    case "dev-terminal": return <><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></>;
    case "ai-network": return <><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></>;
    case "dev-brackets": return <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>;
    default: return <circle cx="12" cy="12" r="5" />;
  }
}

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="3" className="flex-shrink-0 mt-1">
    <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);