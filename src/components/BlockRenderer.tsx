'use client';

import parse, { domToReact, Element } from 'html-react-parser';
import Image from 'next/image';
import React from 'react';

// 👇 IMPORT YOUR NEW HERO COMPONENT
import { HeroHome } from "./HeroHome"; 
import { AiShiftSection } from "./AiShiftSection";

// 1. Define options for the parser
const options = {
  replace: (domNode: any) => {
    // Check if domNode is an element to access attributes
    if (!(domNode instanceof Element)) return;

    const attribs = domNode.attribs;

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
  },
};

// 2. Export the component
export default function BlockRenderer({ htmlContent }: { htmlContent: string }) {
  if (!htmlContent) return null;
  return <div className="wp-content-renderer">{parse(htmlContent, options)}</div>;
}