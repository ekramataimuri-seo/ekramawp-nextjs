"use client";
import React from 'react';

export const HtmlCheatsheet = () => {
  const INLINE_ELEMENTS = [
    { tag: "<a>", desc: "A link" },
    { tag: "<img>", desc: "An image" },
    { tag: "<span>", desc: "Inline container" },
    { tag: "<em>", desc: "Emphasize text" },
    { tag: "<i>", desc: "Italic text" },
    { tag: "<b>", desc: "Bold text" },
    { tag: "<strong>", desc: "Important text" },
    { tag: "<mark>", desc: "Highlight text" },
    { tag: "<s>", desc: "Strikethrough text" },
    { tag: "<sub>", desc: "Subscript" },
    { tag: "<sup>", desc: "Superscript" },
    { tag: "<small>", desc: "Small text" },
    { tag: "<address>", desc: "Address" },
    { tag: "<cite>", desc: "Textual citation" },
    { tag: "<q>", desc: "Inline quotation" },
    { tag: "<br>", desc: "Line break" },
    { tag: "<wbr>", desc: "Possible line break" },
    { tag: "<time>", desc: "Date formatting" },
    { tag: "<code>", desc: "Code format" },
    { tag: "<audio>", desc: "Audio element" },
    { tag: "<video>", desc: "Video element" },
  ];

  const BLOCK_ELEMENTS = [
    { tag: "<p>", desc: "Simple paragraph" },
    { tag: "<blockquote>", desc: "Extended quotation" },
    { tag: "<details>", desc: "Additional information" },
    { tag: "<ul>", desc: "Unordered list" },
    { tag: "<ol>", desc: "Ordered list" },
    { tag: "<dl>", desc: "Definition list" },
    { tag: "<hr>", desc: "Horizontal rule" },
    { tag: "<h1>-<h6>", desc: "Headings (1 through 6)" },
  ];

  return (
    <section className="w-full bg-[#020617] py-24 px-5 box-border font-['Inter',sans-serif]">
      {/* SCOPED CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        .cheatsheet-container {
            max-width: 1400px;
            margin: 0 auto;
            color: #ffffff;
            display: flex;
            flex-direction: column;
            gap: 60px;
        }

        /* --- HEADING AREA --- */
        .cheatsheet-heading-wrap {
            text-align: center;
            max-width: 900px;
            margin: 0 auto;
        }

        .cheatsheet-heading-wrap h2 {
            font-size: clamp(2.5rem, 4vw, 3.8rem);
            font-weight: 900;
            color: #ffffff;
            line-height: 1.1;
            letter-spacing: -0.04em;
            margin-bottom: 20px;
        }

        .cheatsheet-highlight {
            color: #3b82f6;
        }

        .cheatsheet-heading-wrap p {
            font-size: 1.15rem;
            color: #94a3b8;
            line-height: 1.7;
            margin: 0;
        }

        /* --- SECTION HEADERS --- */
        .cheatsheet-section {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        .cheatsheet-section-header h3 {
            font-size: 1.8rem;
            font-weight: 800;
            color: #ffffff;
            margin-bottom: 12px;
            letter-spacing: -0.02em;
        }

        .cheatsheet-section-header p {
            font-size: 1.05rem;
            color: #cbd5e1;
            line-height: 1.6;
            margin: 0;
            max-width: 800px;
        }

        /* --- HORIZONTAL FLEX CARDS --- */
        .tags-horizontal-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
        }

        .tag-card {
            display: flex;
            align-items: center;
            gap: 16px;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.08);
            padding: 14px 24px;
            border-radius: 50px; /* Creates a smooth pill shape */
            transition: all 0.2s ease;
            flex: 0 1 auto; /* Allows them to fit their content perfectly */
        }

        .tag-card:hover {
            background: rgba(59, 130, 246, 0.08);
            border-color: rgba(59, 130, 246, 0.4);
            transform: translateY(-2px);
        }

        .tag-name {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            color: #3b82f6;
            font-weight: 800;
            font-size: 1.15rem;
            letter-spacing: -0.5px;
        }

        .tag-desc {
            color: #e2e8f0;
            font-size: 1rem;
            font-weight: 400;
            white-space: nowrap; /* Keeps text horizontal inside the card */
        }

        /* Mobile specific adjustments */
        @media (max-width: 600px) {
            .tag-card {
                width: 100%;
                justify-content: space-between;
                border-radius: 12px;
            }
            .tag-desc {
                white-space: normal;
                text-align: right;
            }
        }
      `}} />

      <div className="cheatsheet-container">
        
        {/* HEADER */}
        <div className="cheatsheet-heading-wrap">
          <h2>HTML Syntax <span className="cheatsheet-highlight">Cheatsheet</span></h2>
          <p>
            Always use tags for their semantic value, not their appearance. Focus on meaning and document structure, and leave the visual presentation to CSS.
          </p>
        </div>

        {/* INLINE ELEMENTS SECTION */}
        <div className="cheatsheet-section">
          <div className="cheatsheet-section-header">
            <h3>Inline Elements</h3>
            <p>
              Nested inside larger containers, inline elements appear next to one another. They take up only as much width as they need, fitting together horizontally like words in a sentence.
            </p>
          </div>
          
          <div className="tags-horizontal-grid">
            {INLINE_ELEMENTS.map((item, index) => (
              <div className="tag-card" key={index}>
                <span className="tag-name">{item.tag}</span>
                <span className="tag-desc">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-t border-white/5 my-4" />

        {/* BLOCK ELEMENTS SECTION */}
        <div className="cheatsheet-section">
          <div className="cheatsheet-section-header">
            <h3>Block Elements</h3>
            <p>
              Block elements command the entire width of a webpage. They do not fit side-by-side; instead, they stack vertically like paragraphs in an essay or toy blocks in a tower.
            </p>
          </div>
          
          <div className="tags-horizontal-grid">
            {BLOCK_ELEMENTS.map((item, index) => (
              <div className="tag-card" key={index}>
                <span className="tag-name">{item.tag}</span>
                <span className="tag-desc">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};