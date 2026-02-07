"use client";
import React from "react";
import parse, { DOMNode, Element } from "html-react-parser";

// 1. IMPORT ALL COMPONENTS
import { HeroHome } from "./HeroHome";
import { AiShiftSection } from "./AiShiftSection";
import { GeoOverlapSection } from "./GeoOverlapSection";
import { ServicesTabs } from "./ServicesTabs";
import { WPDevCarousel } from "./WPDevCarousel";
import { StatsSection } from "./StatsSection";
import { AIfrontendeveloperBook } from "./AIfrontendeveloperBook";
import { EvolutionServices } from "./EvolutionServices";
import { MarketIntelligence } from "./MarketIntelligence";
import { MasterServices } from "./MasterServices";
import { CodePortfolio } from "./CodePortfolio";
import { EngineeringSuccess } from "./EngineeringSuccess";
import { EngineeringApproach } from "./EngineeringApproach";
import { EngineeringProcess } from "./EngineeringProcess";
import { PentagonGrowthEngine } from "./PentagonGrowthEngine";

interface Props {
  htmlContent: string;
}

export const BlockRenderer = ({ htmlContent }: Props) => {
  
  const options = {
    replace: (domNode: DOMNode) => {
      // Check if the node is an HTML Element (like a div)
      if (domNode instanceof Element && domNode.attribs && domNode.attribs.class) {
        
        // --- COMPLETE COMPONENT MAPPING ---
        
        // 1. HOME & HERO
        if (domNode.attribs.class.includes("home-hero")) return <HeroHome />;
        if (domNode.attribs.class.includes("section-hero")) return <HeroHome />; // Fallback alias
        
        // 2. STATS & AI SHIFT
        if (domNode.attribs.class.includes("section-stats")) return <StatsSection />;
        if (domNode.attribs.class.includes("section-ai-shift")) return <AiShiftSection />;
        
        // 3. SERVICES & TABS
        if (domNode.attribs.class.includes("section-services-tabs")) return <ServicesTabs />;
        if (domNode.attribs.class.includes("section-master-services")) return <MasterServices />;
        if (domNode.attribs.class.includes("section-evolution")) return <EvolutionServices />;
        
        // 4. INTELLIGENCE & GEO
        if (domNode.attribs.class.includes("section-market-intel")) return <MarketIntelligence />;
        if (domNode.attribs.class.includes("section-geo-overlap")) return <GeoOverlapSection />;
        if (domNode.attribs.class.includes("section-pentagon-growth")) return <PentagonGrowthEngine />;
        
        // 5. ENGINEERING SERIES
        if (domNode.attribs.class.includes("section-engineering-success")) return <EngineeringSuccess />;
        if (domNode.attribs.class.includes("section-engineering-approach")) return <EngineeringApproach />;
        if (domNode.attribs.class.includes("section-engineering-process")) return <EngineeringProcess />;
        
        // 6. PORTFOLIO & CAROUSELS
        if (domNode.attribs.class.includes("section-code-portfolio")) return <CodePortfolio />;
        if (domNode.attribs.class.includes("section-portfolio")) return <CodePortfolio />; // Fallback alias
        if (domNode.attribs.class.includes("section-wpdev-carousel")) return <WPDevCarousel />;
        
        // 7. BOOKS & EXTRAS
        if (domNode.attribs.class.includes("section-aifrontendeveloper-book")) return <AIfrontendeveloperBook />;
      }
    },
  };

  // ⚠️ SAFETY CHECK: If htmlContent is null, render nothing.
  if (!htmlContent) return null;

  return (
    <div className="w-full flex flex-col">
      {/* Parse the HTML and swap div classes for React Components */}
      {parse(htmlContent || "", options)}
    </div>
  );
};