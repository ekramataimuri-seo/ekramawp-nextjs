'use client';

import React, { useState, useRef } from 'react';

// Define the expected props from your WordPress block renderer
interface AiShiftSectionProps {
  title?: string;
  body?: string;
}

export function AiShiftSection({ 
  title = "The Evolution of Front-End", 
  body = "Hover your mouse over the image below to explore the difference between a fragmented traditional workflow and a modern, AI-accelerated architecture. Click anywhere on the image to lock the slider in place." 
}: AiShiftSectionProps) {
  
  // ==========================================
  // 🛠️ FINE-TUNE YOUR CENTER LINE HERE
  // ==========================================
  const CENTER_SPLIT = 47; 

  const [sliderPos, setSliderPos] = useState(CENTER_SPLIT);
  const [isHovered, setIsHovered] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculates the X position of the mouse relative to the container
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isPinned) return; 
    handleMove(e.clientX);
  };

  const handlePointerEnter = () => {
    setIsHovered(true);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
  };

  const handleClick = (e: React.MouseEvent) => {
    setIsPinned(!isPinned);
    if (isPinned) {
      handleMove(e.clientX);
    }
  };

  const isActivelyTracking = isHovered && !isPinned;

  return (
    <section className="w-full py-12 md:py-16 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* THE TEXT ZONE (Normal, selectable, non-interactive text)  */}
        {/* ========================================================= */}
        {(title || body) && (
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto relative z-30">
            {title && (
              // Changed text-[#001a36] to text-[#10b981] for Emerald Green
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#10b981] tracking-tight mb-4">
                {title}
              </h2>
            )}
            {body && (
              <div 
                className="text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: body }}
              />
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* THE IMAGE ZONE (Hover and click only works inside here)   */}
        {/* ========================================================= */}
        <div 
          ref={containerRef}
          onPointerEnter={handlePointerEnter}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          onClick={handleClick}
          // Added select-none here to prevent dragging ghost images
          className={`relative w-full aspect-[4/3] md:aspect-[16/9] lg:min-h-[600px] overflow-hidden bg-transparent flex items-center justify-center select-none touch-none transition-colors duration-300
            ${isPinned ? 'cursor-default' : 'cursor-ew-resize'}
          `}
        >
          
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-0" 
            preserveAspectRatio="none" 
            viewBox="0 0 1000 500" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#4dc1b9" opacity="0.1" />
              </marker>
            </defs>
            <path 
              d="M -50,300 C 100,450 200,100 350,250 S 450,350 500,250" 
              fill="none" 
              stroke="#cbd5e1" 
              strokeWidth="1.1" 
              strokeDasharray="8 8" 
              vectorEffect="non-scaling-stroke"
              opacity="0.1"
            />
            <path 
              d="M 500,250 C 550,150 700,450 850,250 S 950,50 1050,100" 
              fill="none" 
              stroke="#4dc1b9" 
              strokeWidth="1.2" 
              strokeDasharray="8 8" 
              vectorEffect="non-scaling-stroke"
              markerEnd="url(#arrowhead)"
              opacity="0.1"
            />
          </svg>

          {/* Right Image: Modern/AI (Colored) */}
          <div 
            className={`absolute inset-0 w-full h-full pointer-events-none z-10 will-change-[clip-path]
              ${!isActivelyTracking ? 'transition-[clip-path] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]' : ''}
            `}
            style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
          >
            <img 
              src="https://admin.wpfedev.com/wp-content/uploads/2026/03/Your-paragraph-text-11.png" 
              alt="AI-Powered Front-End" 
              className="absolute inset-0 w-full h-full object-contain p-8 md:p-16"
              loading="lazy"
            />
          </div>

          {/* Left Image: Traditional (Broken) */}
          <div 
            className={`absolute inset-0 w-full h-full pointer-events-none z-10 will-change-[clip-path]
              ${!isActivelyTracking ? 'transition-[clip-path] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]' : ''}
            `}
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img 
              src="https://admin.wpfedev.com/wp-content/uploads/2026/03/Your-paragraph-text.png" 
              alt="Traditional Front-End" 
              className="absolute inset-0 w-full h-full object-contain p-8 md:p-16"
              loading="lazy"
            />
          </div>

          {/* The Vertical Divider Line */}
          <div 
            className={`absolute top-[5%] bottom-[5%] w-[1px] bg-[#10b981] z-20 pointer-events-none flex flex-col justify-between items-center will-change-[left]
              ${!isActivelyTracking ? 'transition-[left] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] opacity-70' : 'opacity-100 shadow-[0_0_15px_rgba(16,185,129,0.4)]'}
            `}
            style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
          >
             <div className="w-2 h-2 bg-[#10b981]" />
             <div className="w-2 h-2 bg-[#10b981]" />
          </div>

        </div>
      </div>
    </section>
  );
}