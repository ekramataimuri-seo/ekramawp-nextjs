"use client";
import React, { useState, useEffect, useMemo } from "react";

// --- 1. DATA: ALL 6 OF YOUR ORIGINAL PROJECTS ---
const PROJECT_SOURCES: Record<string, string> = {
  project1: `<!DOCTYPE html><html><head><style>.counter-card { background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); text-align: center; width: 250px; } h2 { margin: 0 0 20px 0; color: #374151; } .count-display { font-size: 4rem; font-weight: 800; color: #4F46E5; margin: 20px 0; } .btn-group { display: flex; gap: 10px; justify-content: center; } button { padding: 10px 20px; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; transition: 0.2s; } .inc { background: #4F46E5; color: white; } .dec { background: #E5E7EB; color: #374151; } button:hover { transform: scale(1.05); }</style></head><body><div class="counter-card"><h2>State Manager</h2><div class="count-display" id="count">0</div><div class="btn-group"><button class="dec" onclick="update(-1)">-</button><button class="inc" onclick="update(1)">+</button></div></div><script>let state = 0;const display = document.getElementById('count');function update(val) { state += val; display.innerText = state; display.style.transform = 'scale(1.2)'; setTimeout(() => display.style.transform = 'scale(1)', 100); }</script></body></html>`,
  project2: `<!DOCTYPE html><html><head><style>body { font-family: sans-serif; padding: 20px; background: #ECFDF5; } input { width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 20px; } li { background: white; padding: 15px; margin-bottom: 10px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; } .tag { background: #10B981; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; }</style></head><body><input type="text" id="search" placeholder="Filter Frameworks..." onkeyup="filterList()"><ul id="list"><li><span>React.js</span> <span class="tag">Library</span></li><li><span>Next.js</span> <span class="tag">Framework</span></li><li><span>Vue.js</span> <span class="tag">Framework</span></li><li><span>Angular</span> <span class="tag">MVC</span></li><li><span>Svelte</span> <span class="tag">Compiler</span></li></ul><script>function filterList() { const input = document.getElementById('search').value.toUpperCase(); const li = document.getElementsByTagName('li'); for (let i = 0; i < li.length; i++) { const txt = li[i].innerText; li[i].style.display = txt.toUpperCase().indexOf(input) > -1 ? "" : "none"; } }</script></body></html>`,
  project3: `<!DOCTYPE html><html><head><style>body { font-family: sans-serif; background: #FFFBEB; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; } .card { background: white; width: 300px; padding: 20px; border-radius: 12px; } .task { background: #FEF3C7; padding: 10px; margin: 8px 0; border-radius: 6px; cursor: move; border: 1px dashed #D97706; } .drop-zone { min-height: 100px; border: 2px dashed #ddd; border-radius: 8px; padding: 10px; }</style></head><body><div class="card"><h3>Kanban Logic</h3><div id="zone" class="drop-zone" ondrop="drop(event)" ondragover="allowDrop(event)"><div id="drag1" class="task" draggable="true" ondragstart="drag(event)">Fix Navbar Bug</div><div id="drag2" class="task" draggable="true" ondragstart="drag(event)">API Integration</div></div></div><script>function allowDrop(ev) { ev.preventDefault(); } function drag(ev) { ev.dataTransfer.setData("text", ev.target.id); } function drop(ev) { ev.preventDefault(); var data = ev.dataTransfer.getData("text"); ev.target.appendChild(document.getElementById(data)); }</script></body></html>`,
  project4: `<!DOCTYPE html><html><head><style>body { font-family: monospace; background: #F5F3FF; display: flex; justify-content: center; align-items: center; height: 100vh; } .loader { border: 4px solid #f3f3f3; border-top: 4px solid #8B5CF6; border-radius: 50%; width: 30px; height: 30px; animation: spin 1s linear infinite; display: none; margin: 10px auto; } @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }</style></head><body><div style="text-align:center"><h3>Async Fetcher</h3><button onclick="loadData()">Fetch Users</button><div class="loader" id="loader"></div><div id="data" style="margin-top:20px"></div></div><script>function loadData() { const l = document.getElementById('loader'); const o = document.getElementById('data'); o.innerHTML = ""; l.style.display = "block"; setTimeout(() => { l.style.display = "none"; o.innerHTML = "ID: 1 | Ekrama T. (Admin)<br>ID: 2 | Sarah J. (Editor)"; }, 1500); }</script></body></html>`,
  project5: `<!DOCTYPE html><html><head><style>:root { --bg: #fff; --text: #333; } [data-theme="dark"] { --bg: #1f1f1f; --text: #f0f0f0; } body { background: var(--bg); color: var(--text); font-family: sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; transition: 0.3s; } .btn { width: 50px; height: 25px; background: #ccc; border-radius: 15px; cursor: pointer; position: relative; } .btn::after { content: ''; position: absolute; width: 21px; height: 21px; background: white; border-radius: 50%; top: 2px; left: 2px; transition: 0.3s; } [data-theme="dark"] .btn::after { left: 27px; }</style></head><body><h2>Theme Logic</h2><div class="btn" onclick="t()"></div><script>function t() { const d = document.documentElement; d.getAttribute("data-theme") === "dark" ? d.setAttribute("data-theme", "light") : d.setAttribute("data-theme", "dark"); }</script></body></html>`,
  project6: `<!DOCTYPE html><html><head><style>body { font-family: sans-serif; background: #F0F9FF; display: flex; justify-content: center; align-items: center; height: 100vh; } .box { background: white; padding: 25px; border-radius: 10px; width: 250px; } input { width: 100%; padding: 10px; margin: 10px 0; box-sizing: border-box; } button:disabled { background: #ccc; }</style></head><body><div class="box"><h3>Validator</h3><input type="email" id="e" placeholder="Email" onkeyup="v()"><button id="b" disabled onclick="alert('Success')">Submit</button></div><script>function v() { const e = document.getElementById('e').value; const b = document.getElementById('b'); b.disabled = !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(e); }</script></body></html>`
};

export const CodePortfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [codeString, setCodeString] = useState("");

  const handleOpen = (projectId: string) => {
    const source = PROJECT_SOURCES[projectId];
    if (source) {
      setActiveProject(projectId);
      setCodeString(source);
      setModalOpen(true);
    }
  };

  const handleClose = () => {
    setModalOpen(false);
    setActiveProject(null);
    setCodeString("");
  };

  // Optimization: Memoize the highlighting so it doesn't slow down the UI
  const highlightedHTML = useMemo(() => {
    if (!codeString) return { __html: "" };
    let formatted = codeString.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    formatted = formatted.replace(/function/g, '<span style="color:#dcdcaa">function</span>');
    formatted = formatted.replace(/const/g, '<span style="color:#569cd6">const</span>');
    formatted = formatted.replace(/let/g, '<span style="color:#569cd6">let</span>');
    formatted = formatted.replace(/return/g, '<span style="color:#c586c0">return</span>');
    return { __html: formatted };
  }, [codeString]);

  return (
    <div className="bg-[#0E1623] py-16 px-6 md:px-12 w-full min-h-screen">
      <section className="text-center max-w-[1400px] mx-auto">
        <header className="mb-16">
          <span className="block text-white font-bold text-sm uppercase tracking-widest mb-4">Engineering Portfolio</span>
          <h2 className="font-black text-[clamp(2rem,5vw,3.5rem)] text-[#3F5CE0] leading-none mb-6">
            Architecture & <span className="text-white relative">Performance
              <span className="absolute left-0 right-0 bottom-2 h-3 bg-[#2E476E] -z-10 -skew-x-12"></span>
            </span>
          </h2>
          <p className="text-white text-lg opacity-80">Click a module to run isolated engineering logic.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(PROJECT_SOURCES).map(([id], index) => (
            <div 
              key={id} 
              onClick={() => handleOpen(id)}
              className="group bg-[#1a2436] border border-white/10 rounded-2xl p-8 cursor-pointer transition-all hover:-translate-y-2 hover:border-[#3F5CE0] text-left"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-black text-[#3F5CE0] bg-[#3F5CE0]/10 px-3 py-1 rounded">MODULE 0{index + 1}</span>
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-[#3F5CE0]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20"/></svg>
                </div>
              </div>
              <h3 className="text-white text-xl font-black mb-3">
                {id === 'project1' && 'State Manager'}
                {id === 'project2' && 'Search Algorithm'}
                {id === 'project3' && 'DOM Kanban'}
                {id === 'project4' && 'Async Data'}
                {id === 'project5' && 'CSS Variables'}
                {id === 'project6' && 'Form Validator'}
              </h3>
              <p className="text-white/60 text-sm mb-8 leading-relaxed">Testing isolated logic for {id} within a secure sandbox environment.</p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-white font-bold text-sm group-hover:text-[#3F5CE0] transition-colors">Run Simulator →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL: Full Screen Simulator */}
      {modalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-12" onClick={handleClose}>
          <div className="w-full h-full bg-white rounded-3xl overflow-hidden flex flex-col" onClick={e => e.stopPropagation()}>
            <div className="h-14 bg-gray-100 border-b flex items-center justify-between px-6">
              <span className="font-black text-gray-800 text-sm tracking-tighter uppercase">Live Engineering Simulator</span>
              <button onClick={handleClose} className="bg-red-500 text-white px-4 py-1 rounded-full text-xs font-bold">CLOSE</button>
            </div>
            <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
              <div className="flex-1 bg-gray-50 relative border-r">
                <iframe srcDoc={codeString} className="w-full h-full border-none" sandbox="allow-scripts" />
              </div>
              <div className="flex-1 bg-[#1e1e1e] p-8 overflow-auto font-mono text-xs leading-relaxed text-gray-300" dangerouslySetInnerHTML={highlightedHTML} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};