import React from 'react';

export const WpHeroVisual = () => {
  return (
    <section id="ek-ai-hero" className="relative w-full bg-[#020617] flex items-center overflow-hidden py-5 box-border">
      {/* External Resources */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />

      {/* Scoped CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* 1. SECTION & BACKGROUND GUARD */
        .block-editor-block-list__layout #ek-ai-hero,
        .is-root-container #ek-ai-hero,
        .edit-post-visual-editor #ek-ai-hero {
            width: 100% !important;
            left: 0 !important;
            margin-left: 0 !important;
        }

        #ek-ai-hero {
            position: relative;
            /* FIX: Use 100% instead of 100vw to avoid scrollbar width conflict */
            width: 100%; 
            /* Breakout logic that respects scrollbars */
            margin-left: calc(-50vw + 50%);
            margin-right: calc(-50vw + 50%);
            max-width: 100vw;
            
            min-height: auto;
            height: auto;
            background-color: #0E1623;
            /* GEOMETRIC SQUARE BORDER BACKGROUND */
            background-image: 
                linear-gradient(rgba(255, 255, 255, 0.1) 1.5px, transparent 1.5px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1.5px, transparent 1.5px);
            background-size: 50px 50px;
            display: flex;
            align-items: center;
            
            /* CRITICAL FIX: prevents layout shift/scrollbars */
            overflow-x: clip !important; 
            overflow-y: hidden !important;

            padding: 40px 0;
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
            padding: 0 40px;
            box-sizing: border-box;
            align-items: center;
            z-index: 2;
        }

        /* ZONE A: CONTENT */
        .hero-zone-a {
            flex: 0 0 55%; 
            display: flex;
            flex-direction: column;
            justify-content: center;
            z-index: 100;
        }
        
        .hero-zone-a h1 { 
            font-size: clamp(2.2rem, 4vw, 3.8rem); 
            line-height: 1.05; 
            font-weight: 800; 
            margin-bottom: 24px; 
            color: #ffffff;
            letter-spacing: -1.5px;
        }

        .hero-zone-a p { 
            font-size: 1.15rem; 
            line-height: 1.6; 
            color: #cbd5e1; 
            margin-bottom: 40px; 
        }
        
        .form__proposal { 
            background: rgba(255, 255, 255, 0.07); 
            padding: 10px; 
            border-radius: 14px; 
            display: flex;
            box-shadow: 0 25px 50px rgba(0,0,0,0.5); 
            max-width: 500px;
            width: 100%;
            border: 1px solid rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(12px);
        }
        .form__proposal input { flex: 1; background: transparent; border: none; padding: 12px 20px; outline: none; font-size: 1rem; color: #fff; }
        .form__proposal button { background: #2563eb; color: #fff; border: none; padding: 0 32px; border-radius: 10px; font-weight: 700; cursor: pointer; transition: all 0.3s ease; }

        /* VISUAL ZONE */
        .visual-combined-zone {
            flex: 0 0 45%; 
            max-width: 650px; 
            position: relative;
            display: flex;
            justify-content: center; 
            align-items: center;
            margin-left: 0; 
        }

        /* PROCESS BOXES */
        .hp-box {
            border-radius: 50%;
            width: 180px; 
            height: 180px; 
            padding: 20px 15px;
            font-family: 'Inter', sans-serif;
            position: relative;
            margin-top: 30px; 
            transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            box-sizing: border-box;
            background-color: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(5px);
        }

        .hp-box strong { display: block; font-size: 15px; color: #ffffff !important; margin-bottom: 4px; font-weight: 800; }
        .hp-box p { font-size: 12px; color: rgba(255, 255, 255, 0.8) !important; margin: 0; line-height: 1.2; }

        .hp-icon {
            width: 44px; height: 44px; border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            color: #fff; font-size: 18px; position: absolute; z-index: 1100;
            top: -22px; left: 50%; transform: translateX(-50%);
            transition: transform 0.3s ease;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }
        
        .bg-blue { background: #207DE9; }
        .bg-teal { background: #4DC1B9; }
        .bg-green { background: #41D48C; }
        .bg-purple { background: #AF3FAC; }
        .bg-blue-dark { background: #5e35b1; }

        .hp-fo { overflow: visible !important; }
        .hp-fo:hover .hp-box { transform: scale(1.08); background-color: rgba(255,255,255,0.12); border-color: rgba(255,255,255,0.4); }

        /* ANIMATIONS */
        @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .rotate-cw { animation: rotate 60s linear infinite; }
        .rotate-ccw { animation: rotate 50s linear infinite reverse; }
        .rotate-cw-slow { animation: rotate 80s linear infinite; }

        @media (max-width: 1024px) {
            #ek-ai-hero { padding: 40px 0; margin-left: 0; margin-right: 0; width: 100%; }
            .ek-hero-container { flex-direction: column; }
            .hero-zone-a { width: 100%; text-align: center; align-items: center; flex: 0 0 100%; }
            .visual-combined-zone { width: 100%; transform: scale(0.6); margin-top: -100px; margin-left: 0; flex: 0 0 100%; }
        }
      `}} />

      <div className="ek-hero-container">
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
            Next-Gen Web Development
          </span>
          <h1>Be the Only Answer Buyers Find on ChatGPT</h1>
          <p>You will earn more commissions when your name becomes the primary source for AI-driven property searches.</p>
          <form className="form__proposal">
            <input placeholder="Enter your website URL..." type="url" required />
            <button type="submit">Analyze Now</button>
          </form>
        </div>

        <div className="visual-combined-zone">
          {/* SVG Container */}
          <svg viewBox="-120 -50 1100 850" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }}>
            <defs>
              <linearGradient id="seg-blue" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#207DE9" />
                <stop offset="100%" stopColor="#4A90E2" />
              </linearGradient>
              <linearGradient id="seg-teal" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4DC1B9" />
                <stop offset="100%" stopColor="#26A69A" />
              </linearGradient>
              <linearGradient id="seg-green" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#41D48C" />
                <stop offset="100%" stopColor="#66BB6A" />
              </linearGradient>
              <linearGradient id="seg-purple" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#AF3FAC" />
                <stop offset="100%" stopColor="#D88AD6" />
              </linearGradient>
              
              <path id="text-path-tl" d="M 385 350 A 165 165 0 0 1 550 185" />
              <path id="text-path-tr" d="M 550 185 A 165 165 0 0 1 715 350" />
              <path id="text-path-br" d="M 550 515 A 165 165 0 0 0 715 350" />
              <path id="text-path-bl" d="M 385 350 A 165 165 0 0 0 550 515" />
            </defs>

            <g className="rotate-cw" style={{ transformOrigin: '550px 350px' }}>
              <circle cx="550" cy="350" r="350" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="10 15" opacity="1" />
            </g>
            <g className="rotate-ccw" style={{ transformOrigin: '550px 350px' }}>
              <circle cx="550" cy="350" r="375" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="20 20" opacity="1" />
            </g>
            <g className="rotate-cw-slow" style={{ transformOrigin: '550px 350px' }}>
              <circle cx="550" cy="350" r="400" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="5 10" opacity="1" />
            </g>

            <g transform="translate(550, 350)">
              <circle cx="0" cy="0" r="140" fill="transparent" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="5 5" />
              <foreignObject x="-100" y="-80" width="200" height="160">
                <div style={{ fontFamily: "'Inter', sans-serif", height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                  <div style={{ fontWeight: 800, color: '#ffffff', fontSize: '28px' }}>WP<span style={{ color: '#207DE9' }}>FEDEV</span></div>
                  <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '16px' }}>Architecture</div>
                  <div style={{ color: '#207DE9', fontWeight: 700, fontSize: '13px', marginTop: '5px', background: 'rgba(32, 125, 233, 0.1)', padding: '4px 10px', borderRadius: '12px' }}>99.9% Uptime</div>
                </div>
              </foreignObject>
              <g strokeWidth="90" strokeLinecap="round" fill="none">
                <path d="M -162.5 -28.7 A 165 165 0 0 1 -28.7 -162.5" stroke="url(#seg-blue)" />
                <path d="M 28.7 -162.5 A 165 165 0 0 1 162.5 -28.7" stroke="url(#seg-teal)" />
                <path d="M 162.5 28.7 A 165 165 0 0 1 28.7 162.5" stroke="url(#seg-green)" />
                <path d="M -28.7 162.5 A 165 165 0 0 1 -162.5 28.7" stroke="url(#seg-purple)" />
              </g>
            </g>

            <g style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: '18px', fill: '#ffffff', pointerEvents: 'none' }}>
              <text dominantBaseline="middle" textAnchor="middle"><textPath href="#text-path-tl" startOffset="50%">Frontend</textPath></text>
              <text dominantBaseline="middle" textAnchor="middle"><textPath href="#text-path-tr" startOffset="50%">Backend</textPath></text>
              <text dominantBaseline="middle" textAnchor="middle"><textPath href="#text-path-br" startOffset="50%">Database</textPath></text>
              <text dominantBaseline="middle" textAnchor="middle"><textPath href="#text-path-bl" startOffset="50%">DevOps</textPath></text>
            </g>

            {/* PROCESS NODES */}
            <foreignObject x="180" y="-10" width="220" height="260" className="hp-fo">
              <div className="hp-box re-blue">
                <div className="hp-icon bg-blue"><i className="fas fa-laptop-code"></i></div>
                <strong>Frontend</strong><p>Next.js & Tailwind</p>
              </div>
            </foreignObject>
            <foreignObject x="720" y="-10" width="220" height="260" className="hp-fo">
              <div className="hp-box re-teal">
                <div className="hp-icon bg-teal"><i className="fas fa-server"></i></div>
                <strong>API Layer</strong><p>GraphQL & Node.js</p>
               </div>
            </foreignObject>
            
            <foreignObject x="815" y="220" width="220" height="260" className="hp-fo">
              <div className="hp-box re-teal">
                <div className="hp-icon bg-teal"><i className="fas fa-database"></i></div>
                <strong>Storage</strong><p>PostgreSQL & Redis</p>
              </div>
            </foreignObject>
            <foreignObject x="65" y="220" width="220" height="260" className="hp-fo">
              <div className="hp-box re-blue-dark">
                <div className="hp-icon bg-blue-dark"><i className="fas fa-brain"></i></div>
                <strong>AI Logic</strong><p>Vercel AI & OpenAI</p>
              </div>
            </foreignObject>

            <foreignObject x="720" y="500" width="220" height="260" className="hp-fo">
              <div className="hp-box re-green">
                <div className="hp-icon bg-green"><i className="fas fa-cloud-upload-alt"></i></div>
                <strong>Scale</strong><p>Kubernetes & Docker</p>
              </div>
            </foreignObject>
            <foreignObject x="180" y="500" width="220" height="260" className="hp-fo">
              <div className="hp-box re-purple">
                <div className="hp-icon bg-purple"><i className="fas fa-shield-alt"></i></div>
                <strong>Security</strong><p>JWT & Auth.js</p>
              </div>
            </foreignObject>
          </svg>
        </div>
      </div>
    </section>
  );
};