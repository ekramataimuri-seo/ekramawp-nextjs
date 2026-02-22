"use client";

import React, { useEffect, useRef } from 'react';

export const WptwoPageVisual = () => {
  const engineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!engineRef.current) return;

    const root = engineRef.current;
    let autoPlayTimer: ReturnType<typeof setInterval> | undefined;
    let currentIndex = 0;

    const CONFIG = {
      cx: 400, cy: 400,
      rOuter: 215, rInner: 150, rIcon: 215, gap: 6,
      sectors: [
        { 
           id: 'int', label: 'ChatGPT', color: '#10a37f', type: 'L',
           img: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
           subImg1: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
           subImg2: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
        },
        { 
           id: 'ret', label: 'Copilot', color: '#0078d4', type: 'S',
           img: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', 
           subImg1: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
           subImg2: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg'
        },
        { 
           id: 'nur', label: 'Jasper', color: '#ff6c37', type: 'L',
           img: 'https://upload.wikimedia.org/wikipedia/en/3/31/JasperPlace_Logo.svg', 
           subImg1: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
           subImg2: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg'
        },
        { 
           id: 'acq', label: 'Gemini', color: '#4285F4', type: 'L',
           img: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg',
           subImg1: 'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg',
           subImg2: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg'
        },
        { 
           id: 'con', label: 'Claude', color: '#d97757', type: 'S',
           img: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg',
           subImg1: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
           subImg2: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg'
        },
        { 
           id: 'rev', label: 'Perplexity', color: '#2e7d32', type: 'L',
           img: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg',
           subImg1: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
           subImg2: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'
        }
      ] as const
    };

    const qLayer = root.querySelector('.ma-quadrants-layer');
    const aLayer = root.querySelector('.ma-arrows-layer');
    const step = 360 / CONFIG.sectors.length;
    const rad = Math.PI / 180;
    const createSVG = (type: string) => document.createElementNS("http://www.w3.org/2000/svg", type);

    if (qLayer) qLayer.innerHTML = '';
    if (aLayer) aLayer.innerHTML = '';

    // --- GENERATE SVG ELEMENTS ---
    CONFIG.sectors.forEach((sec, i) => {
      const midA = (i * step) + (step / 2);
      const s = (i * step + CONFIG.gap - 90) * rad;
      const e = ((i + 1) * step - CONFIG.gap - 90) * rad;

      // 1. Box Path
      const pathData = [`M`, CONFIG.cx + CONFIG.rOuter * Math.cos(s), CONFIG.cy + CONFIG.rOuter * Math.sin(s), `A`, CONFIG.rOuter, CONFIG.rOuter, 0, 0, 1, CONFIG.cx + CONFIG.rOuter * Math.cos(e), CONFIG.cy + CONFIG.rOuter * Math.sin(e), `L`, CONFIG.cx + CONFIG.rInner * Math.cos(e), CONFIG.cy + CONFIG.rInner * Math.sin(e), `A`, CONFIG.rInner, CONFIG.rInner, 0, 0, 0, CONFIG.cx + CONFIG.rInner * Math.cos(s), CONFIG.cy + CONFIG.rInner * Math.sin(s), `Z`].join(" ");
      
      const g = createSVG('g');
      g.setAttribute('class', 'ma-quadrant-group');
      g.setAttribute('data-id', sec.id);
      g.setAttribute('data-index', i.toString());
      (g as unknown as HTMLElement).style.cursor = 'pointer';

      const path = createSVG('path');
      path.setAttribute('d', pathData);
      path.setAttribute('fill', sec.color);
      path.setAttribute('stroke', sec.color);
      path.setAttribute('stroke-width', '24');
      path.setAttribute('stroke-linejoin', 'round');
      path.setAttribute('class', 'ma-quadrant-path');
      g.appendChild(path);

      // 2. Curved Label
      const labelR = (CONFIG.rOuter + CONFIG.rInner) / 2 + 1;
      const pathId = `txtPath-${sec.id}`;
      const arcPath = ["M", CONFIG.cx + labelR * Math.cos(s), CONFIG.cy + labelR * Math.sin(s), "A", labelR, labelR, 0, 0, 1, CONFIG.cx + labelR * Math.cos(e), CONFIG.cy + labelR * Math.sin(e)].join(" ");
      const defPath = createSVG('path');
      defPath.setAttribute('id', pathId);
      defPath.setAttribute('d', arcPath);
      defPath.setAttribute('fill', 'none');
      g.appendChild(defPath);

      const text = createSVG('text');
      text.setAttribute('class', 'ma-box-label-curved');
      const textPath = createSVG('textPath');
      textPath.setAttribute('href', `#${pathId}`);
      textPath.setAttribute('startOffset', '50%');
      textPath.setAttribute('text-anchor', 'middle');
      textPath.textContent = sec.label;
      text.appendChild(textPath);
      g.appendChild(text);

      // 3. Main Icon
      const ip = { x: CONFIG.cx + CONFIG.rIcon * Math.cos(midA * rad - Math.PI/2), y: CONFIG.cy + CONFIG.rIcon * Math.sin(midA * rad - Math.PI/2) };
      const iG = createSVG('g');
      iG.setAttribute('transform', `translate(${ip.x},${ip.y})`);
      const bgCircle = createSVG('circle');
      bgCircle.setAttribute('r', '23');
      bgCircle.setAttribute('class', 'ma-icon-bg');
      iG.appendChild(bgCircle);
      const mainImg = createSVG('image');
      mainImg.setAttribute('href', sec.img);
      mainImg.setAttribute('x', '-11');
      mainImg.setAttribute('y', '-11');
      mainImg.setAttribute('width', '22');
      mainImg.setAttribute('height', '22');
      iG.appendChild(mainImg);
      g.appendChild(iG);

      // 4. Sub Icons
      const visualEdgeR = CONFIG.rInner - 14;
      const spreadAngle = 5;
      const bG = createSVG('g');
      bG.setAttribute('class', 'ma-bottom-icons-container');
      const createSubIcon = (angleOffset: number, imgUrl: string) => {
        const a = (midA + angleOffset) * rad - Math.PI/2;
        const p = { x: CONFIG.cx + visualEdgeR * Math.cos(a), y: CONFIG.cy + visualEdgeR * Math.sin(a) };
        const sG = createSVG('g');
        sG.setAttribute('transform', `translate(${p.x}, ${p.y})`);
        sG.setAttribute('class', 'ma-sub-icon-group');
        const sC = createSVG('circle');
        sC.setAttribute('r', '10');
        sC.setAttribute('fill', '#fff');
        sC.setAttribute('stroke', sec.color);
        sC.setAttribute('stroke-width', '1.5');
        sG.appendChild(sC);
        const sI = createSVG('image');
        sI.setAttribute('href', imgUrl);
        sI.setAttribute('x', '-7');
        sI.setAttribute('y', '-7');
        sI.setAttribute('width', '14');
        sI.setAttribute('height', '14');
        sG.appendChild(sI);
        return sG;
      };
      bG.appendChild(createSubIcon(-spreadAngle, sec.subImg1));
      bG.appendChild(createSubIcon(spreadAngle, sec.subImg2));
      g.appendChild(bG);
      if (qLayer) qLayer.appendChild(g);

      // 5. Arrows
      const startR = 265, endR = 340;
      const p1_arr = { x: CONFIG.cx + startR * Math.cos(midA * rad - Math.PI/2), y: CONFIG.cy + startR * Math.sin(midA * rad - Math.PI/2) };
      const p2_arr = { x: CONFIG.cx + endR * Math.cos(midA * rad - Math.PI/2), y: CONFIG.cy + endR * Math.sin(midA * rad - Math.PI/2) };
      let d = `M ${p1_arr.x} ${p1_arr.y} L ${p2_arr.x} ${p2_arr.y}`;
      let tipPos = { x: p2_arr.x, y: p2_arr.y };

      // @ts-ignore
      if (sec.type === 'L') {
        const pivotR = startR + 45;
        const pivot = { x: CONFIG.cx + pivotR * Math.cos(midA * rad - Math.PI/2), y: CONFIG.cy + pivotR * Math.sin(midA * rad - Math.PI/2) };
        const tx = (midA > 180) ? p2_arr.x - 30 : p2_arr.x + 30;
        d = `M ${p1_arr.x} ${p1_arr.y} L ${pivot.x} ${pivot.y} L ${tx} ${pivot.y}`;
        tipPos = { x: tx, y: pivot.y };
      }

      const arrowG = createSVG('g');
      arrowG.setAttribute('class', 'ma-flow-arrow-group');
      arrowG.setAttribute('data-id', sec.id);
      const arrowPath = createSVG('path');
      arrowPath.setAttribute('d', d);
      arrowPath.setAttribute('stroke', sec.color);
      arrowPath.setAttribute('class', 'ma-flow-arrow');
      arrowG.appendChild(arrowPath);
      const arrowTip = createSVG('circle');
      arrowTip.setAttribute('cx', tipPos.x.toString());
      arrowTip.setAttribute('cy', tipPos.y.toString());
      arrowTip.setAttribute('r', '3'); 
      arrowTip.setAttribute('fill', sec.color);
      arrowG.appendChild(arrowTip);
      if (aLayer) aLayer.appendChild(arrowG);
    });

    // --- INTERACTION ---
    const setActiveState = (index: number) => {
      if(index < 0 || index >= CONFIG.sectors.length) return;
      const sector = CONFIG.sectors[index];
      root.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
      
      const q = root.querySelector(`.ma-quadrant-group[data-id="${sector.id}"]`);
      const a = root.querySelector(`.ma-flow-arrow-group[data-id="${sector.id}"]`);
      const c = root.querySelector(`.ma-content-block[data-id="${sector.id}"]`);
      
      if(q) q.classList.add('active');
      if(a) a.classList.add('active');
      if(c) c.classList.add('active');
    };

    const startAutoPlay = () => {
      if (autoPlayTimer) clearInterval(autoPlayTimer);
      autoPlayTimer = setInterval(() => {
        currentIndex = (currentIndex + 1) % CONFIG.sectors.length;
        setActiveState(currentIndex);
      }, 3000);
    };

    const stopAutoPlay = () => { if (autoPlayTimer) clearInterval(autoPlayTimer); };

    // Listeners
    const groups = root.querySelectorAll('.ma-quadrant-group');
    groups.forEach((group) => {
      const el = group as Element;
      el.addEventListener('mouseenter', (e) => {
        stopAutoPlay();
        const target = e.currentTarget as Element;
        const idx = target.getAttribute('data-index');
        if (idx) {
            currentIndex = parseInt(idx);
            setActiveState(currentIndex);
        }
      });
      el.addEventListener('mouseleave', startAutoPlay);
    });

    setActiveState(0);
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  return (
    <section id="ek-ai-hero" className="relative w-full bg-[#020617] flex items-center overflow-hidden box-border">
      {/* External Resources */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />

      {/* Scoped CSS for Layout */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* 1. SECTION & BACKGROUND */
        #ek-ai-hero {
            position: relative;
            width: 100%; 
            min-height: 600px;
            height: auto;
            background-color: #0E1623;
            background-image: 
                linear-gradient(rgba(255, 255, 255, 0.1) 1.5px, transparent 1.5px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1.5px, transparent 1.5px);
            background-size: 50px 50px;
            display: flex;
            align-items: center; 
            padding: 20px 20px 60px 20px; 
            box-sizing: border-box;
            color: #f8fafc;
        }

        #ek-ai-hero::after {
            content: "";
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at 50% 50%, transparent 10%, #020617 85%);
            pointer-events: none;
            z-index: 1;
        }

        .ek-hero-container {
            display: flex;
            width: 100%;
            max-width: 1400px;
            margin: 0 auto;
            position: relative;
            box-sizing: border-box;
            align-items: center;
            gap: 20px; 
            z-index: 2;
        }

        /* ZONE A: CONTENT (LEFT COLUMN - 55%) */
        .hero-zone-a {
            flex: 0 0 55%;
            max-width: 55%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            z-index: 100;
            padding-right: 30px;
            box-sizing: border-box;
            margin-top: 0; 
        }
        
        .hero-zone-a h1 { 
            font-size: clamp(2.5rem, 5vw, 4rem); 
            line-height: 1.1; 
            font-weight: 800; 
            margin-bottom: 24px; 
            color: #ffffff;
            letter-spacing: -1px;
        }

        .hero-zone-a p { 
            font-size: 1.125rem; 
            line-height: 1.6; 
            color: #94a3b8; 
            margin-bottom: 40px; 
            max-width: 90%; 
        }
        
        .form__proposal { 
            background: rgba(255, 255, 255, 0.03); 
            padding: 8px; 
            border-radius: 12px; 
            display: flex;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); 
            max-width: 480px;
            width: 100%;
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(8px);
        }
        .form__proposal input { flex: 1; background: transparent; border: none; padding: 12px 16px; outline: none; font-size: 1rem; color: #fff; min-width: 0; }
        .form__proposal button { background: #2563eb; color: #fff; border: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; transition: all 0.2s ease; white-space: nowrap; }
        .form__proposal button:hover { background: #1d4ed8; }

        /* VISUAL ZONE (RIGHT COLUMN - 45%) */
        .visual-combined-zone {
            flex: 0 0 45%;
            max-width: 45%;
            display: flex;
            justify-content: center; 
            align-items: center;
            box-sizing: border-box;
            position: relative;
        }

        @media (max-width: 1024px) {
            .ek-hero-container { flex-direction: column; text-align: center; align-items: center; }
            .hero-zone-a { flex: 0 0 100%; max-width: 100%; padding-right: 0; align-items: center; margin-top: 0; }
            .visual-combined-zone { flex: 0 0 100%; max-width: 100%; margin-top: 20px; }
            #ek-ai-hero { padding: 40px 20px; }
            .hero-zone-a p { max-width: 100%; }
        }

        /* --- MIXED ARROW ENGINE STYLES --- */
        #mixed-arrow-engine {
            position: relative;
            width: 100%;
            max-width: 1000px;
            margin: 0 auto;
            margin-top: 0; 
            box-sizing: border-box;
            color: #202124;
            /* ADJUSTED: translateX to move diagram left, scale to keep it large */
            transform: translateX(-70px) scale(1.4);
        }

        #mixed-arrow-engine .ma-container-box {
            position: relative;
            width: 100%;
            padding-bottom: 80%;
            height: 0;
            overflow: visible;
        }

        #mixed-arrow-engine .ma-svg-layer {
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            overflow: visible;
        }
        
        #mixed-arrow-engine .ma-content-block { position: absolute; z-index: 20; pointer-events: none; max-width: 180px; padding-left: 18px; opacity: 0; transform: translateY(10px); transition: opacity 0.4s ease, transform 0.4s ease; }
        #mixed-arrow-engine .ma-content-block.active { opacity: 1; transform: translateY(0); }
        #mixed-arrow-engine .ma-content-block::before { content: ''; position: absolute; left: 0; top: 50%; transform: translateY(-50%); width: 6px; height: 0%; background: currentColor; border-radius: 10px; box-shadow: 1px 0 4px rgba(0,0,0,0.2); transition: height 0.4s cubic-bezier(0.25, 1, 0.5, 1); }

        #mixed-arrow-engine .ma-pos-ret, #mixed-arrow-engine .ma-pos-int, #mixed-arrow-engine .ma-pos-nur { text-align: right; padding-left: 0; padding-right: 18px; }
        #mixed-arrow-engine .ma-pos-ret::before, #mixed-arrow-engine .ma-pos-int::before, #mixed-arrow-engine .ma-pos-nur::before { left: auto; right: 0; }

        #mixed-arrow-engine .ma-heading { font-size: 14px; font-weight: 800; text-transform: uppercase; margin: 0 0 6px 0; line-height: 1.1; letter-spacing: 0.5px; color: #ffffff; text-shadow: 0 2px 4px rgba(0,0,0,0.5); }
        #mixed-arrow-engine .ma-desc { font-size: 10px; color: #f7f8f9; margin: 0; line-height: 1.4; font-weight: 500; }

        #mixed-arrow-engine .ma-pos-con { top:15%; left: 8%; transform: translateY(-50%); text-align: left;  width: 125px;}
        #mixed-arrow-engine .ma-pos-ret { top: 70%; right: 10%; transform: translateY(-50%); text-align: right;  width: 125px;}
        #mixed-arrow-engine .ma-pos-rev { top:14%; left: 69%; text-align: left; width: 125px; }
        #mixed-arrow-engine .ma-pos-int { top: 53%; right: 5%; text-align: right; width: 125px;}
        #mixed-arrow-engine .ma-pos-acq { bottom: 34%; left: 5%;width: 125px; text-align: left;  width: 125px;}
        #mixed-arrow-engine .ma-pos-nur { bottom: 16%; right: 68%; text-align: right;  width: 125px;}

        #mixed-arrow-engine .ma-quadrant-group { transform-origin: 400px 400px; transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.4s ease; cursor: pointer; }
        #mixed-arrow-engine .ma-quadrant-group.active, #mixed-arrow-engine .ma-quadrant-group:hover { transform: scale(1.025); filter: drop-shadow(0 15px 25px rgba(0,0,0,0.15)); z-index: 10; }

        #mixed-arrow-engine .ma-quadrant-path { stroke-width: 24px; stroke-linejoin: round; paint-order: stroke; transition: stroke 0.3s ease; }
        #mixed-arrow-engine image { image-rendering: -webkit-optimize-contrast; pointer-events: none; }
        #mixed-arrow-engine .ma-icon-bg { stroke: #1A73E8; stroke-width: 2px; fill: #ffffff; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.15)); }

        #mixed-arrow-engine .ma-bottom-icons-container { opacity: 0; transform: scale(0.5); transform-origin: center; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        #mixed-arrow-engine .ma-quadrant-group.active .ma-bottom-icons-container, #mixed-arrow-engine .ma-quadrant-group:hover .ma-bottom-icons-container { opacity: 1; transform: scale(1); }

        #mixed-arrow-engine .ma-box-label-curved { fill: #ffffff; font-size: 11px; font-weight: 800; text-transform: uppercase; pointer-events: none; letter-spacing: 2px; dominant-baseline: middle;}

        /* ADJUSTED: Thinner track so it doesn't look like a "bold line" intersecting text */
        #mixed-arrow-engine .ma-orbit-track-near { fill: none; stroke: #FFFFFF; stroke-width: 0.5px; stroke-dasharray: 4 6; opacity: 0.4; }
        #mixed-arrow-engine .ma-orbit-track-inner { fill: none; stroke: #FFFFFF; stroke-width: 1.5; stroke-dasharray: 2 5; opacity: 0.5; }
        
        /* ADJUSTED: Explicitly removed all strokes and paint-orders */
        #mixed-arrow-engine .ma-orbit-text { 
            font-size: 8px; 
            font-weight: 400; 
            text-transform: uppercase; 
            fill: #ffffff; 
            letter-spacing: 2px; 
            pointer-events: none; 
            stroke: none; 
            stroke-width: 0;
            paint-order: normal;
        }
        
        @keyframes ma-spin-cw { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        #mixed-arrow-engine .ma-red-orbit-spin-cw { animation: ma-spin-cw 25s linear infinite; transform-origin: 400px 400px; }
        #mixed-arrow-engine .ma-red-orbit-spin-ccw { animation: ma-spin-cw 35s linear reverse infinite; transform-origin: 400px 400px; }
        #mixed-arrow-engine .ma-blue-orbit-spin { animation: ma-spin-cw 18s linear infinite; transform-origin: 400px 400px; }

        #mixed-arrow-engine .ma-flow-arrow-group { opacity: 0; transition: opacity 0.5s ease; }
        #mixed-arrow-engine .ma-flow-arrow-group.active { opacity: 1; }
        
        #mixed-arrow-engine .ma-flow-arrow { 
            fill: none; 
            stroke-width: 1.5px; 
            stroke-linecap: round; 
            stroke-linejoin: round; 
        }
        #mixed-arrow-engine .ma-hub-val { font-size: 46px; font-weight: 900; fill: #1A73E8; letter-spacing: -1px; }

        @media (max-width: 850px) {
            #mixed-arrow-engine .ma-content-block { display: none; }
        }
      `}} />

      <div className="ek-hero-container">
        {/* LEFT COLUMN: Content (55%) */}
        <div className="hero-zone-a">
          <span 
            className="kicker" 
            style={{
              background: 'rgba(37, 99, 235, 0.2)', 
              color: '#60a5fa', 
              padding: '4px 12px', 
              borderRadius: '4px', 
              textTransform: 'uppercase', 
              letterSpacing: '2px', 
              fontWeight: 700, 
              fontSize: '0.75rem', 
              border: '1px solid rgba(96, 165, 250, 0.3)', 
              width: 'fit-content', 
              marginBottom: '20px'
            }}
          >
            Headless WordPress Architecture
          </span>
          <h1>The Ultimate Headless Stack</h1>
          <p>Decouple your architecture. Combine the best-in-class content management of WordPress with the incredible performance and scalability of Next.js and GraphQL.</p>
          <form className="form__proposal">
            <input placeholder="Enter your WP Site URL..." type="url" required />
            <button type="submit">Analyze Stack</button>
          </form>
        </div>

        {/* RIGHT COLUMN: Visual (45%) */}
        <div className="visual-combined-zone">
            <div id="mixed-arrow-engine" ref={engineRef}>
                <div className="ma-container-box">
                    {/* LABELS */}
                    <div className="ma-content-block ma-pos-rev" data-id="int">
                        <h4 className="ma-heading">ChatGPT</h4><p className="ma-desc">AI-driven insights to uncover hidden opportunities.</p>
                    </div>
                    <div className="ma-content-block ma-pos-int" data-id="ret" >
                        <h4 className="ma-heading">Copilot</h4><p className="ma-desc">Accelerate deal cycles with automated workflows.</p>
                    </div>
                    <div className="ma-content-block ma-pos-ret" data-id="nur" >
                        <h4 className="ma-heading">Jasper</h4><p className="ma-desc">Personalized engagement to warm up cold leads.</p>
                    </div>
                    <div className="ma-content-block ma-pos-nur" data-id="acq">
                        <h4 className="ma-heading">Gemini</h4><p className="ma-desc">Target high-value accounts with precision outreach.</p>
                    </div>
                    <div className="ma-content-block ma-pos-acq" data-id="con" >
                        <h4 className="ma-heading">Claude</h4><p className="ma-desc">Turn interested prospects into loyal customers.</p>
                    </div>
                    <div className="ma-content-block ma-pos-con active" data-id="rev">
                        <h4 className="ma-heading">Perplexity</h4><p className="ma-desc">Predictive pipeline analysis for accurate forecasting.</p>
                    </div>

                    {/* SVG LAYER */}
                    <svg className="ma-svg-layer" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <path id="ma-top-path" d="M 145, 400 a 255, 255 0 0, 1 510, 0" />
                            <path id="ma-bottom-path" d="M 655, 400 a 255, 255 0 0, 1 -510, 0" />
                        </defs>

                        <g className="ma-exterior-orbits">
                            <circle cx="400" cy="400" r="240" className="ma-orbit-track-near" />
                            <g className="ma-red-orbit-spin-cw"> <circle cx="400" cy="160" r="4" fill="#4110d4" /> </g>
                            <circle cx="400" cy="400" r="255" className="ma-orbit-track-near" />
                            <g className="ma-red-orbit-spin-ccw"> <circle cx="400" cy="655" r="4" fill="#2213f2" /> </g>
                            <text className="ma-orbit-text">
                                <textPath href="#ma-top-path" startOffset="50%" textAnchor="middle">Acquisition & Traffic / Nurture & CRM / AI Intelligence</textPath>
                            </text>
                            <text className="ma-orbit-text">
                                <textPath href="#ma-bottom-path" startOffset="50%" textAnchor="middle">Repeatable Growth / Predictive Pipeline / Revenue</textPath>
                            </text>
                        </g>

                        <g className="ma-quadrants-layer"></g>
                        <g className="ma-arrows-layer"></g>

                        <g className="ma-inner-orbits">
                            <circle cx="400" cy="400" r="118" className="ma-orbit-track-inner" />    
                            <g className="ma-blue-orbit-spin">
                                <circle cx="400" cy="282" r="5" fill="#1A73E8" stroke="white" strokeWidth="2" /> 
                            </g>
                        </g>

                        <g transform="translate(400,400)">
                            <circle r="95" fill="transparent" stroke="#1A73E8" strokeWidth="3" filter="drop-shadow(0 15px 35px rgba(247, 247, 248, 0.25))"></circle>
                            <text y="-5" textAnchor="middle" className="ma-hub-val">$10B+</text>
                            <text y="25" textAnchor="middle" style={{fontSize:'12px', fontWeight:900, fill:'#efefef', letterSpacing:'1.5px'}}>Revenue Generated</text>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};