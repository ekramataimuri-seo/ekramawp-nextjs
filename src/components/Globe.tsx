"use client";
import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography, Sphere, Graticule } from "react-simple-maps";

const geoUrl = "https://raw.githubusercontent.com/lotusms/world-map-data/main/world.json";

export default function RotatingGlobe() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    // FIX 1: Explicitly type animationFrameId as a number
    let animationFrameId: number; 

    const animate = () => {
      setRotation((prev) => (prev + 0.15) % 360); 
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="absolute left-0 lg:left-[-35%] top-1/2 -translate-y-1/2 w-full max-w-[450px] lg:max-w-[1200px] aspect-square z-0 pointer-events-none opacity-[0.35]">
      <ComposableMap 
        projection="geoOrthographic" 
        projectionConfig={{ 
          rotate: [rotation, -15, 0], 
          scale: 280 
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <Sphere stroke="#10b981" strokeWidth={0.8} fill="rgba(16, 185, 129, 0.03)" id="rsm-sphere" />
        <Graticule stroke="#34d399" strokeWidth={0.4} opacity={0.4} />
        
        <Geographies geography={geoUrl}>
          {/* FIX 2: Explicitly type the geographies array and geo object parameter */}
          {({ geographies }: { geographies: any[] }) =>
            geographies.map((geo: any) => (
              <Geography 
                key={geo.rsmKey} 
                geography={geo}
                fill="#34d399"
                stroke="#064e3b"
                strokeWidth={0.3}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}