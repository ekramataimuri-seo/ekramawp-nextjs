'use client';

import parse, { domToReact, Element } from 'html-react-parser';
import Image from 'next/image';
import React from 'react';

// 👇 IMPORT YOUR NEW HERO COMPONENT
import { HeroHome } from "./HeroHome"; 
import { AiShiftSection } from "./AiShiftSection";
import { GeoOverlapSection } from "./GeoOverlapSection";
import { ServicesTabs } from "./ServicesTabs";
import { WPDevCarousel } from "./WPDevCarousel";
import { PentagonGrowthEngine } from "./PentagonGrowthEngine";
import { StatsSection } from "./StatsSection";
import { AIfrontendeveloperBook } from "./AIfrontendeveloperBook";
import { EvolutionServices } from "./EvolutionServices";
import { MarketIntelligence } from "./MarketIntelligence";
import { MasterServices } from "./MasterServices";
import { CodePortfolio } from "./CodePortfolio";
import { EngineeringSuccess } from "./EngineeringSuccess";
import { EngineeringApproach } from "./EngineeringApproach";
import { EngineeringProcess } from "./EngineeringProcess";
// 1. Define options for the parser
const options = {
  replace: (domNode: any) => {
    // Check if domNode is an element to access attributes
    if (!(domNode instanceof Element)) return;

    const attribs = domNode.attribs;

    // 👇 ADD THIS LINE TEMPORARILY
if (attribs && attribs.class) { console.log("Found class:", attribs.class); }

    // --- CASE A: Optimize WordPress Images ---
    if (domNode.name === 'img' && attribs) {
      const { src, alt, width, height } = attribs;
      return (
        <Image
          src={src}
          alt={alt || 'WordPress Image'}
          width={parseInt(width || '800')}
          height={parseInt(height || '600')}
          className="wp-image w-full h-auto my-5 rounded-lg shadow-md"
          style={{ objectFit: 'cover' }}
        />
      );
    }

    // --- CASE B: Custom Interactive Blocks (Alert) ---
    if (attribs && attribs.class && attribs.class.includes('custom-alert')) {
      return (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 my-4" role="alert">
          <p className="font-bold">Attention!</p>
          <p>{domToReact(domNode.children as any)}</p>
          <button 
            onClick={() => alert('You clicked the alert!')}
            className="mt-2 bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
          >
            Click Me (JS Test)
          </button>
        </div>
      );
    }

    // 👇 --- CASE C: HERO HOME SECTION (NEW) ---
    // If we find a block with class "home-hero", we ignore the text inside
    // and render your full React Hero Design instead.
    if (attribs && attribs.class && attribs.class.includes('home-hero')) {
      return <HeroHome />;
    }
    // --- CASE D: AI SHIFT SECTION ---
// Trigger with class: "section-ai-shift"
if (attribs && attribs.class && attribs.class.includes('section-ai-shift')) {
  return <AiShiftSection />;
}
// --- CASE E: GEO OVERLAP SECTION ---
// Trigger with class: "section-geo-overlap"
if (attribs && attribs.class && attribs.class.includes('section-geo-overlap')) {
  return <GeoOverlapSection />;
}
// --- CASE F: SERVICES TABS ---
// Trigger with class: "section-services-tabs"
if (attribs && attribs.class && attribs.class.includes('section-services-tabs')) {
  return <ServicesTabs />;
}
// --- CASE G: WP DEV CAROUSEL ---
// Trigger with class: "section-wpdev-carousel"
if (attribs && attribs.class && attribs.class.includes('section-wpdev-carousel')) {
  return <WPDevCarousel />;
}
// --- CASE H: PENTAGON GROWTH ENGINE ---
// Trigger with class: "section-pentagon-growth"
if (attribs && attribs.class && attribs.class.includes('section-pentagon-growth')) {
  return <PentagonGrowthEngine />;
}
// --- CASE I: STATS SECTION ---
// Trigger with class: "section-stats"
if (attribs && attribs.class && attribs.class.includes('section-stats')) {
  return <StatsSection />;
}
// --- CASE K: AI SEO BOOK ---
// Trigger with class: "section-aifrontendeveloper-book"
if (attribs && attribs.class && attribs.class.includes('section-aifrontendeveloper-book')) {
  return < AIfrontendeveloperBook/>;
}
// Trigger with class: "section-evolution"
if (attribs && attribs.class && attribs.class.includes('section-evolution')) {
  return <EvolutionServices />;
}
// Trigger with class: "section-market-intel"
if (attribs && attribs.class && attribs.class.includes('section-market-intel')) {
  return <MarketIntelligence />;
}
// Trigger with class: "section-master-services"
if (attribs && attribs.class && attribs.class.includes('section-master-services')) {
  return <MasterServices />;
}
// Trigger with class: "section-code-portfolio"
if (attribs && attribs.class && attribs.class.includes('section-code-portfolio')) {
  return <CodePortfolio />;
}
// Trigger with class: "section-engineering-success"
if (attribs && attribs.class && attribs.class.includes('section-engineering-success')) {
  return <EngineeringSuccess />;
}
// Trigger with class: "section-engineering-approach"
if (attribs && attribs.class && attribs.class.includes('section-engineering-approach')) {
  return <EngineeringApproach />;
}
// Inside your class checking logic
if (attribs && attribs.class && attribs.class.includes('section-engineering-process')) {
  return <EngineeringProcess />;
}
  },
};

// 2. Export the component
export default function BlockRenderer({ htmlContent }: { htmlContent: string }) {
  if (!htmlContent) return null;
  return <div className="wp-content-renderer">{parse(htmlContent, options)}</div>;
}