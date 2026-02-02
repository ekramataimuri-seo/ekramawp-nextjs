'use client';

import parse, { domToReact, Element } from 'html-react-parser';
import Image from 'next/image';
import React from 'react';

// Import All Components
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

const options = {
  replace: (domNode: any) => {
    if (!(domNode instanceof Element)) return;

    const attribs = domNode.attribs;
    if (!attribs) return;

    const className = attribs.class || "";

    // --- CASE A: Optimize WordPress Images ---
    if (domNode.name === 'img') {
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

    // --- CASE B: Custom Sections Mapping ---
    // These specifically look for your unique section classes
    if (className.includes('home-hero')) return <HeroHome />;
    if (className.includes('section-ai-shift')) return <AiShiftSection />;
    if (className.includes('section-geo-overlap')) return <GeoOverlapSection />;
    if (className.includes('section-services-tabs')) return <ServicesTabs />;
    if (className.includes('section-wpdev-carousel')) return <WPDevCarousel />;
    if (className.includes('section-pentagon-growth')) return <PentagonGrowthEngine />;
    if (className.includes('section-stats')) return <StatsSection />;
    if (className.includes('section-aifrontendeveloper-book')) return <AIfrontendeveloperBook />;
    if (className.includes('section-evolution')) return <EvolutionServices />;
    if (className.includes('section-market-intel')) return <MarketIntelligence />;
    if (className.includes('section-master-services')) return <MasterServices />;
    if (className.includes('section-code-portfolio')) return <CodePortfolio />;
    if (className.includes('section-engineering-success')) return <EngineeringSuccess />;
    if (className.includes('section-engineering-approach')) return <EngineeringApproach />;
    if (className.includes('section-engineering-process')) return <EngineeringProcess />;

    // --- CASE C: THE GLOBAL FIX (Fallback) ---
    // If it's a standard WordPress block or container, render it normally
    // This prevents pages from being blank if they don't use custom sections
    if (domNode.name === 'div' || domNode.name === 'section' || domNode.name === 'p') {
      return (
        <domNode.name className={className}>
          {domToReact(domNode.children as any, options)}
        </domNode.name>
      );
    }
  },
};

export default function BlockRenderer({ htmlContent }: { htmlContent: string }) {
  if (!htmlContent) return null;

  return (
    <div className="wp-content-renderer w-full overflow-x-hidden">
      {parse(htmlContent, options)}
    </div>
  );
}