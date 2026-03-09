"use client";
import React from "react";
import parse, { DOMNode, Element } from "html-react-parser";

// --------------------------------------------------------
// 1. IMPORTS
// --------------------------------------------------------
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
import { WpHeroVisual } from "./WpHeroVisual"; // ✅ Correct Capital Import
import { ArchitectureTabs } from "./ArchitectureTabs";
import { Leftcolumntab } from "./Leftcolumntab";
import { Threecolumnarch } from "./Threecolumnarch";
import { SimpleContentSection } from "./SimpleContentSection";
import { FourBoxes } from "./FourBoxes";
import { FAQSection } from "./FAQSection";
import { TraditionalHeroArea } from "./TraditionalHeroArea";
import { Boxesimage } from "./Boxesimage";
import { ThreeColumnBar } from "./ThreeColumnBar";
import { FiveCirclesBox } from "./FiveCirclesBox";
import { BigTabsData } from "./BigTabsData";
import { WptwoPageVisual } from "./WptwoPageVisual";
import { Shutterupanddown } from "./Shutterupanddown";
import { Contentdouble } from "./Contentdouble";
import { HeadlessfiveElements } from "./HeadlessfiveElements";
import { Headwpcarousal } from "./Headwpcarousal";
import { Fourblockswphead } from "./Fourblockswphead";
import { HeadlessWpTabs } from "./HeadlessWpTabs";
import { FAQheadlesswp } from "./FAQheadlesswp";
import { HtmlContent } from "./HtmlContent";
import { HtmlSecondContent } from "./HtmlSecondContent";
import { HtmlCheatsheet } from "./HtmlCheatsheet";



interface Props {
  htmlContent: string;
}

export const BlockRenderer = ({ htmlContent }: Props) => {
  
  const options = {
    replace: (domNode: DOMNode) => {
      if (domNode instanceof Element && domNode.attribs && domNode.attribs.class) {
        
        const classes = domNode.attribs.class;

        // --- COMPONENT MAPPING ---
        
        // 1. HOME & HERO (CRITICAL: CHECK SPECIFIC FIRST)
        
        // ✅ PRIORITY 1: Check for the new visual hero FIRST
        // (I included both cases just to be safe)
        if (classes.includes("section-Wphero-visual")) return <WpHeroVisual />;

        // ⬇️ PRIORITY 2: Check for the standard home hero LAST
        if (classes.includes("home-hero")) return <HeroHome />;
        if (classes.includes("section-hero")) return <HeroHome />;

        // 2. STATS & AI SHIFT
        if (classes.includes("section-stats")) return <StatsSection />;
        if (classes.includes("section-ai-shift")) return <AiShiftSection />;
        
        // 3. SERVICES & TABS
        if (classes.includes("section-services-tabs")) return <ServicesTabs />;
        if (classes.includes("section-master-services")) return <MasterServices />;
        if (classes.includes("section-evolution")) return <EvolutionServices />;
        
        // 4. INTELLIGENCE & GEO
        if (classes.includes("section-market-intel")) return <MarketIntelligence />;
        if (classes.includes("section-geo-overlap")) return <GeoOverlapSection />;
        if (classes.includes("section-pentagon-growth")) return <PentagonGrowthEngine />;
        
        // 5. ENGINEERING SERIES
        if (classes.includes("section-engineering-success")) return <EngineeringSuccess />;
        if (classes.includes("section-engineering-approach")) return <EngineeringApproach />;
        if (classes.includes("section-engineering-process")) return <EngineeringProcess />;
        
        // 6. PORTFOLIO & CAROUSELS
        if (classes.includes("section-code-portfolio")) return <CodePortfolio />;
        if (classes.includes("section-portfolio")) return <CodePortfolio />;
        if (classes.includes("section-wpdev-carousel")) return <WPDevCarousel />;
        
        // 7. BOOKS & EXTRAS
        if (classes.includes("section-aifrontendeveloper-book")) return <AIfrontendeveloperBook />;
        if (classes.includes("section-architecture-tabs")) return <ArchitectureTabs />;
        if (classes.includes("section-Leftcolumn-tab")) return <Leftcolumntab />;
        if (classes.includes("section-Threecolumn-arch")) return <Threecolumnarch />;
       if (classes.includes("section-Simple-Content")) return <SimpleContentSection />;
        if (classes.includes("section-Four-Boxes")) return <FourBoxes/>;
      if (classes.includes("section-FAQ")) return <FAQSection/>;
      if (classes.includes("section-TraditionalHeroArea")) return <TraditionalHeroArea/>;
      if (classes.includes("section-Boxesimage")) return <Boxesimage/>;
      if (classes.includes("section-ThreeColumnBar")) return <ThreeColumnBar/>;
      if (classes.includes("section-FiveCirclesBox")) return <FiveCirclesBox/>;
      if (classes.includes("section-BigTabsData")) return <BigTabsData/>;
      if (classes.includes("section-WptwoPageVisual")) return <WptwoPageVisual/>;
      if (classes.includes("section-Shutterupanddown")) return <Shutterupanddown/>;
      if (classes.includes("section-Contentdouble")) return <Contentdouble/>;
      if (classes.includes("section-HeadlessfiveElements")) return <HeadlessfiveElements/>;
      if (classes.includes("section-Headwpcarousal")) return <Headwpcarousal/>;
      if (classes.includes("section-Fourblockswphead")) return <Fourblockswphead/>;
      if (classes.includes("section-HeadlessWpTabs")) return <HeadlessWpTabs/>;
      if (classes.includes("section-FAQheadlesswp")) return <FAQheadlesswp/>;
      if (classes.includes("section-HtmlContent")) return <HtmlContent/>;
      if (classes.includes("section-HtmlSecondContent")) return <HtmlSecondContent/>;
      if (classes.includes("section-HtmlCheatsheet")) return <HtmlCheatsheet/>;


      }
    },
  };

  if (!htmlContent) return null;

  return (
    <div className="w-full flex flex-col">
      {parse(htmlContent, options)}
    </div>
  );
};

export default BlockRenderer;