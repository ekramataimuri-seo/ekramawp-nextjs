"use client";
import React, { useState, useEffect } from "react";

// --- 1. DATA: THE SIMULATOR PROJECTS (Unchanged) ---
const PROJECT_SOURCES: Record<string, string> = {
  project1: `<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; background: #EEF2FF; margin: 0; }
        .counter-card { background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); text-align: center; width: 250px; }
        h2 { margin: 0 0 20px 0; color: #374151; }
        .count-display { font-size: 4rem; font-weight: 800; color: #4F46E5; margin: 20px 0; }
        .btn-group { display: flex; gap: 10px; justify-content: center; }
        button { padding: 10px 20px; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; transition: 0.2s; }
        .inc { background: #4F46E5; color: white; }
        .dec { background: #E5E7EB; color: #374151; }
        button:hover { transform: scale(1.05); }
    </style>
</head>
<body>
    <div class="counter-card">
        <h2>State Manager</h2>
        <div class="count-display" id="count">0</div>
        <div class="btn-group">
            <button class="dec" onclick="update(-1)">-</button>
            <button class="inc" onclick="update(1)">+</button>
        </div>
    </div>
    <script>
        let state = 0;
        const display = document.getElementById('count');
        function update(val) {
            state += val;
            display.innerText = state;
            display.style.transform = 'scale(1.2)';
            setTimeout(() => display.style.transform = 'scale(1)', 100);
        }
    </script>
</body>
</html>`,

  project2: `<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: sans-serif; padding: 20px; background: #ECFDF5; height: 100vh; box-sizing: border-box; }
        input { width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; box-sizing: border-box; margin-bottom: 20px; font-size: 16px; }
        ul { list-style: none; padding: 0; margin: 0; }
        li { background: white; padding: 15px; margin-bottom: 10px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); display: flex; justify-content: space-between; align-items: center; }
        .tag { background: #10B981; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: bold; }
    </style>
</head>
<body>
    <input type="text" id="search" placeholder="Filter Frameworks..." onkeyup="filterList()">
    <ul id="list">
        <li><span>React.js</span> <span class="tag">Library</span></li>
        <li><span>Next.js</span> <span class="tag">Framework</span></li>
        <li><span>Vue.js</span> <span class="tag">Framework</span></li>
        <li><span>Angular</span> <span class="tag">MVC</span></li>
        <li><span>Svelte</span> <span class="tag">Compiler</span></li>
    </ul>
    <script>
        function filterList() {
            const input = document.getElementById('search').value.toUpperCase();
            const ul = document.getElementById('list');
            const li = ul.getElementsByTagName('li');
            for (let i = 0; i < li.length; i++) {
                const txt = li[i].getElementsByTagName("span")[0].textContent || li[i].getElementsByTagName("span")[0].innerText;
                li[i].style.display = txt.toUpperCase().indexOf(input) > -1 ? "" : "none";
            }
        }
    </script>
</body>
</html>`,

  project3: `<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: sans-serif; background: #FFFBEB; height: 100vh; display: flex; justify-content: center; align-items: center; margin: 0; }
        .card { background: white; width: 300px; padding: 20px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
        h3 { margin-top: 0; color: #D97706; }
        .task { background: #FEF3C7; padding: 10px; margin: 8px 0; border-radius: 6px; cursor: move; border: 1px dashed #D97706; }
        .drop-zone { min-height: 100px; border: 2px dashed #ddd; border-radius: 8px; padding: 10px; background: #fafafa; }
    </style>
</head>
<body>
    <div class="card">
        <h3>Kanban Logic (Drag Me)</h3>
        <div id="zone" class="drop-zone" ondrop="drop(event)" ondragover="allowDrop(event)">
            <div id="drag1" class="task" draggable="true" ondragstart="drag(event)">Fix Navbar Bug</div>
            <div id="drag2" class="task" draggable="true" ondragstart="drag(event)">API Integration</div>
            <div id="drag3" class="task" draggable="true" ondragstart="drag(event)">Unit Tests</div>
        </div>
    </div>
    <script>
        function allowDrop(ev) { ev.preventDefault(); }
        function drag(ev) { ev.dataTransfer.setData("text", ev.target.id); }
        function drop(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById(data));
        }
    </script>
</body>
</html>`,

  project4: `<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: monospace; background: #F5F3FF; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
        .container { text-align: center; background: white; padding: 30px; border-radius: 15px; box-shadow: 0 10px 25px rgba(139, 92, 246, 0.15); }
        .loader { border: 4px solid #f3f3f3; border-top: 4px solid #8B5CF6; border-radius: 50%; width: 30px; height: 30px; animation: spin 1s linear infinite; margin: 20px auto; display: none; }
        button { background: #8B5CF6; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer; font-size: 1rem; }
        #data { margin-top: 20px; text-align: left; }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .user-row { border-bottom: 1px solid #eee; padding: 5px 0; font-size: 0.9rem; color: #555; }
    </style>
</head>
<body>
    <div class="container">
        <h3>Async Data Fetcher</h3>
        <button onclick="loadData()">Fetch Users (Simulated)</button>
        <div class="loader" id="loader"></div>
        <div id="data"></div>
    </div>
    <script>
        function loadData() {
            const loader = document.getElementById('loader');
            const output = document.getElementById('data');
            
            output.innerHTML = "";
            loader.style.display = "block";

            // Simulating API Delay
            setTimeout(() => {
                loader.style.display = "none";
                const users = [
                    { id: 1, name: "Ekrama T.", role: "Admin" },
                    { id: 2, name: "Sarah J.", role: "Editor" },
                    { id: 3, name: "Mike R.", role: "Viewer" }
                ];
                
                users.forEach(u => {
                    output.innerHTML += '<div class="user-row">ID: ' + u.id + ' | ' + u.name + ' (' + u.role + ')</div>';
                });
            }, 1500);
        }
    </script>
</body>
</html>`,

  project5: `<!DOCTYPE html>
<html>
<head>
    <style>
        :root { --bg: #ffffff; --text: #333; --btn: #F43F5E; }
        [data-theme="dark"] { --bg: #1f1f1f; --text: #f0f0f0; --btn: #ff758c; }
        
        body { background-color: var(--bg); color: var(--text); font-family: sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; transition: 0.3s; }
        
        .toggle-btn { position: relative; width: 60px; height: 30px; background: #ddd; border-radius: 15px; cursor: pointer; transition: 0.3s; }
        .toggle-btn::after { content: ''; position: absolute; top: 2px; left: 2px; width: 26px; height: 26px; background: white; border-radius: 50%; transition: 0.3s; box-shadow: 0 2px 5px rgba(0,0,0,0.2); }
        
        [data-theme="dark"] .toggle-btn { background: var(--btn); }
        [data-theme="dark"] .toggle-btn::after { transform: translateX(30px); }
        
        h2 { margin-bottom: 20px; }
    </style>
</head>
<body>
    <h2>Theme Context Logic</h2>
    <div class="toggle-btn" onclick="toggleTheme()"></div>
    <p>Click toggle to switch CSS Variables</p>
    <script>
        function toggleTheme() {
            const current = document.documentElement.getAttribute("data-theme");
            if(current === "dark") {
                document.documentElement.setAttribute("data-theme", "light");
            } else {
                document.documentElement.setAttribute("data-theme", "dark");
            }
        }
    </script>
</body>
</html>`,

  project6: `<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: sans-serif; background: #F0F9FF; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
        .form-box { background: white; padding: 30px; border-radius: 10px; width: 280px; box-shadow: 0 4px 15px rgba(14, 165, 233, 0.1); }
        input { width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }
        .error { color: #F43F5E; font-size: 0.8rem; display: none; margin-bottom: 10px; }
        button { width: 100%; background: #0EA5E9; color: white; border: none; padding: 12px; border-radius: 4px; cursor: pointer; font-weight: bold; }
        button:disabled { background: #ccc; cursor: not-allowed; }
        .success { color: #10B981; text-align: center; margin-top: 10px; display: none; }
    </style>
</head>
<body>
    <div class="form-box">
        <h3>Form Validator</h3>
        <input type="email" id="email" placeholder="Enter Email" onkeyup="validate()">
        <div class="error" id="err">Invalid Email Format</div>
        <button id="btn" disabled onclick="submit()">Submit</button>
        <div class="success" id="succ">Success!</div>
    </div>
    <script>
        function validate() {
            const email = document.getElementById('email').value;
            const btn = document.getElementById('btn');
            const err = document.getElementById('err');
            
            // Simple Regex for Email
            const isValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
            
            if(email.length > 0 && !isValid) {
                err.style.display = 'block';
                btn.disabled = true;
            } else if (isValid) {
                err.style.display = 'none';
                btn.disabled = false;
            } else {
                err.style.display = 'none';
                btn.disabled = true;
            }
        }
        function submit() {
            document.getElementById('succ').style.display = 'block';
        }
    </script>
</body>
</html>`
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
    setTimeout(() => {
      setActiveProject(null);
      setCodeString("");
    }, 300);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const getHighlightedCode = (code: string) => {
    let formatted = code.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    formatted = formatted.replace(/function/g, '<span style="color:#dcdcaa">function</span>');
    formatted = formatted.replace(/const/g, '<span style="color:#569cd6">const</span>');
    formatted = formatted.replace(/let/g, '<span style="color:#569cd6">let</span>');
    formatted = formatted.replace(/return/g, '<span style="color:#c586c0">return</span>');
    formatted = formatted.replace(/if/g, '<span style="color:#c586c0">if</span>');
    formatted = formatted.replace(/class=/g, '<span style="color:#9cdcfe">class=</span>');
    return { __html: formatted };
  };

  return (
    // UPDATED: Forced Dark Background to fix "Still White" issue
    <div className="bg-[#0E1623] py-10 px-6 md:px-12 w-full">
      <section className="text-center w-full mx-auto mb-16">
        <header className="max-w-[900px] mx-auto">
          {/* Subtitle - Pure White */}
          <span className="block text-[#FFFFFF] font-bold text-sm uppercase tracking-widest mb-4">
            Engineering Portfolio
          </span>
          
          {/* Main H2: #3F5CE0 with White Highlight & Double Scratch */}
          <h2 className="font-black text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.1] mb-6 text-[#3F5CE0] tracking-tight">
            Explore Curated Examples of <br className="hidden md:block" />
            <span className="relative inline-block text-[#FFFFFF] px-2 z-10 mt-2">
              Architecture & Performance
              {/* Double Scratch Layer 1 (Darker Blue Base #2E476E) */}
              <span className="absolute left-0 right-0 bottom-2 h-[10px] bg-[#2E476E] -z-20 -skew-x-12 rounded-sm"></span>
              {/* Double Scratch Layer 2 (Cobalt Blue Top #3C66A6) */}
              <span className="absolute left-0 right-0 bottom-[6px] h-[10px] bg-[#3C66A6] -z-10 -skew-x-12 rounded-sm shadow-[0_2px_0_rgba(255,255,255,0.1)]"></span>
            </span>
          </h2>
          
          {/* Paragraph: Pure White, 400 weight */}
          <p className="text-[1.1rem] text-[#FFFFFF] leading-relaxed font-normal">
            Click any card below to run specific engineering logic in a live, isolated environment.
          </p>
        </header>

        {/* CARD GRID 
            - Cards are set to dark (#1a2436) to ensure white text is readable 
            - Icons use the brand blue/accent colors
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1800px] mx-auto text-left mt-12">
          
          {/* CARD 1: State Management */}
          <div 
            className="group bg-[#1a2436] border border-white/10 rounded-2xl px-5 py-6 relative overflow-hidden flex flex-col justify-between min-h-[280px] cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#3F5CE0]/50"
            onClick={() => handleOpen("project1")}
          >
            <div className="flex justify-between items-start mb-4 relative z-10">
              <span className="text-[0.7rem] font-extrabold uppercase px-2 py-1 rounded bg-[#3F5CE0]/20 tracking-wider text-[#3F5CE0]">State Logic</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3F5CE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20"/></svg>
            </div>
            {/* H3: White, 900 Weight */}
            <h3 className="font-black text-[clamp(1.0rem,1vw,1.2rem)] mb-2 relative z-10 text-[#FFFFFF]">State Manager</h3>
            <p className="text-[1.1rem] text-[#FFFFFF] font-normal relative z-10 mb-6 leading-relaxed">A lightweight Counter using state variables to track and update DOM elements without full re-renders.</p>
            <div className="mt-auto flex items-center justify-between z-10">
              <strong className="text-[#FFFFFF]">Launch App</strong>
              <div className="w-[45px] h-[45px] rounded-full bg-white/10 flex items-center justify-center shadow-sm transition-transform duration-200 text-[#FFFFFF] group-hover:scale-110 group-hover:bg-[#3F5CE0]">
                <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor"><path d="M11 7L1 1V13L11 7Z"/></svg>
              </div>
            </div>
          </div>

          {/* CARD 2: Algorithms */}
          <div 
            className="group bg-[#1a2436] border border-white/10 rounded-2xl px-5 py-6 relative overflow-hidden flex flex-col justify-between min-h-[350px] cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#10B981]/50"
            onClick={() => handleOpen("project2")}
          >
            <div className="flex justify-between items-start mb-4 relative z-10">
              <span className="text-[0.7rem] font-extrabold uppercase px-2 py-1 rounded bg-[#10B981]/20 tracking-wider text-[#10B981]">Algorithms</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </div>
            <h3 className="font-black text-[clamp(1.0rem,1vw,1.2rem)] mb-2 relative z-10 text-[#FFFFFF]">Search Filter</h3>
            <p className="text-[1.1rem] text-[#FFFFFF] font-normal relative z-10 mb-6 leading-relaxed">Real-time filtering algorithm iterating through data arrays to match user input instantly.</p>
            <div className="mt-auto flex items-center justify-between z-10">
              <strong className="text-[#FFFFFF]">Launch App</strong>
              <div className="w-[45px] h-[45px] rounded-full bg-white/10 flex items-center justify-center shadow-sm transition-transform duration-200 text-[#FFFFFF] group-hover:scale-110 group-hover:bg-[#10B981]">
                <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor"><path d="M11 7L1 1V13L11 7Z"/></svg>
              </div>
            </div>
          </div>

          {/* CARD 3: DOM Logic */}
          <div 
            className="group bg-[#1a2436] border border-white/10 rounded-2xl px-5 py-5 relative overflow-hidden flex flex-col justify-between min-h-[350px] cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#F59E0B]/50"
            onClick={() => handleOpen("project3")}
          >
            <div className="flex justify-between items-start mb-4 relative z-10">
              <span className="text-[0.7rem] font-extrabold uppercase px-2 py-1 rounded bg-[#F59E0B]/20 tracking-wider text-[#F59E0B]">Interaction</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="m15 9 3-3 3 3"/><path d="m15 21 3-3 3 3"/></svg>
            </div>
            <h3 className="font-black text-[clamp(1.0rem,1vw,1.2rem)] mb-2 relative z-10 text-[#FFFFFF]">Kanban Drag & Drop</h3>
            <p className="text-[1.1rem] text-[#FFFFFF] font-normal relative z-10 mb-6 leading-relaxed">Complex DOM manipulation handling DragEvents, dataTransfer, and DropZones for interactive UI.</p>
            <div className="mt-auto flex items-center justify-between z-10">
              <strong className="text-[#FFFFFF]">Launch App</strong>
              <div className="w-[45px] h-[45px] rounded-full bg-white/10 flex items-center justify-center shadow-sm transition-transform duration-200 text-[#FFFFFF] group-hover:scale-110 group-hover:bg-[#F59E0B]">
                <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor"><path d="M11 7L1 1V13L11 7Z"/></svg>
              </div>
            </div>
          </div>

          {/* CARD 4: Async/API */}
          <div 
            className="group bg-[#1a2436] border border-white/10 rounded-2xl px-5 py-6 relative overflow-hidden flex flex-col justify-between min-h-[350px] cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#8B5CF6]/50"
            onClick={() => handleOpen("project4")}
          >
            <div className="flex justify-between items-start mb-4 relative z-10">
              <span className="text-[0.7rem] font-extrabold uppercase px-2 py-1 rounded bg-[#8B5CF6]/20 tracking-wider text-[#8B5CF6]">Async / Await</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m16 16-4-4-4 4"/></svg>
            </div>
            <h3 className="font-black text-[clamp(1.0rem,1vw,1.2rem)] mb-2 relative z-10 text-[#FFFFFF]">API Data Fetcher</h3>
            <p className="text-[1.1rem] text-[#FFFFFF] font-normal relative z-10 mb-6 leading-relaxed">Handling asynchronous data streams with loading states, timeouts, and error boundaries.</p>
            <div className="mt-auto flex items-center justify-between z-10">
              <strong className="text-[#FFFFFF]">Launch App</strong>
              <div className="w-[45px] h-[45px] rounded-full bg-white/10 flex items-center justify-center shadow-sm transition-transform duration-200 text-[#FFFFFF] group-hover:scale-110 group-hover:bg-[#8B5CF6]">
                <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor"><path d="M11 7L1 1V13L11 7Z"/></svg>
              </div>
            </div>
          </div>

          {/* CARD 5: CSS Variables */}
          <div 
            className="group bg-[#1a2436] border border-white/10 rounded-2xl px-5 py-6 relative overflow-hidden flex flex-col justify-between min-h-[350px] cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#F43F5E]/50"
            onClick={() => handleOpen("project5")}
          >
            <div className="flex justify-between items-start mb-4 relative z-10">
              <span className="text-[0.7rem] font-extrabold uppercase px-2 py-1 rounded bg-[#F43F5E]/20 tracking-wider text-[#F43F5E]">System Architecture</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2"/><path d="M12 21v2"/><path d="M4.22 4.22l1.42 1.42"/><path d="M18.36 18.36l1.42 1.42"/><path d="M1 12h2"/><path d="M21 12h2"/><path d="M4.22 19.78l1.42-1.42"/><path d="M18.36 5.64l1.42-1.42"/></svg>
            </div>
            <h3 className="font-black text-[clamp(1.0rem,1vw,1.2rem)] mb-2 relative z-10 text-[#FFFFFF]">Theme Context</h3>
            <p className="text-[1.1rem] text-[#FFFFFF] font-normal relative z-10 mb-6 leading-relaxed">Dynamic CSS Variable manipulation to switch between Dark and Light modes efficiently.</p>
            <div className="mt-auto flex items-center justify-between z-10">
              <strong className="text-[#FFFFFF]">Launch App</strong>
              <div className="w-[45px] h-[45px] rounded-full bg-white/10 flex items-center justify-center shadow-sm transition-transform duration-200 text-[#FFFFFF] group-hover:scale-110 group-hover:bg-[#F43F5E]">
                <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor"><path d="M11 7L1 1V13L11 7Z"/></svg>
              </div>
            </div>
          </div>

          {/* CARD 6: Validation */}
          <div 
            className="group bg-[#1a2436] border border-white/10 rounded-2xl px-5 py-6 relative overflow-hidden flex flex-col justify-between min-h-[350px] cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#0EA5E9]/50"
            onClick={() => handleOpen("project6")}
          >
            <div className="flex justify-between items-start mb-4 relative z-10">
              <span className="text-[0.7rem] font-extrabold uppercase px-2 py-1 rounded bg-[#0EA5E9]/20 tracking-wider text-[#0EA5E9]">Input Logic</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </div>
            <h3 className="font-black text-[clamp(1.0rem,1vw,1.2rem)] mb-2 relative z-10 text-[#FFFFFF]">Form Validator</h3>
            <p className="text-[1.1rem] text-[#FFFFFF] font-normal relative z-10 mb-6 leading-relaxed">Client-side validation logic using Regular Expressions to ensure data integrity before submission.</p>
            <div className="mt-auto flex items-center justify-between z-10">
              <strong className="text-[#FFFFFF]">Launch App</strong>
              <div className="w-[45px] h-[45px] rounded-full bg-white/10 flex items-center justify-center shadow-sm transition-transform duration-200 text-[#FFFFFF] group-hover:scale-110 group-hover:bg-[#0EA5E9]">
                <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor"><path d="M11 7L1 1V13L11 7Z"/></svg>
              </div>
            </div>
          </div>

        </div>

        <div className="flex justify-center mt-10">
          <button className="bg-[#3F5CE0] text-white font-black py-4 px-8 rounded-lg border-2 border-[#3F5CE0] transition-all hover:bg-[#344dbd] hover:border-[#344dbd] uppercase tracking-wide">
            View Full Portfolio
          </button>
        </div>
      </section>

      {/* --- MODAL --- */}
      <div 
        className={`fixed inset-0 z-[2000] flex justify-center items-center bg-black/85 backdrop-blur-sm p-8 transition-opacity duration-300 ${modalOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={handleClose}
      >
        <div 
          className={`w-[95vw] h-[90vh] bg-white rounded-xl flex flex-col overflow-hidden transition-transform duration-300 ${modalOpen ? "scale-100" : "scale-95"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-[50px] bg-[#F3F4F6] border-b border-[#E5E7EB] flex items-center justify-between px-5 shrink-0">
            <span className="font-bold text-sm text-[#111827]">Live Code Simulator</span>
            <button 
              className="w-6 h-6 rounded bg-[#EF4444] text-white flex items-center justify-center hover:bg-[#DC2626] transition-colors" 
              onClick={handleClose}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
          <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
            <div className="flex-1 bg-[#f0f2f5] border-r border-[#E5E7EB] relative h-1/2 md:h-full">
              <iframe srcDoc={codeString} title="Simulator" className="w-full h-full border-none" />
            </div>
            <div 
              className="flex-1 bg-[#1e1e1e] text-[#d4d4d4] p-5 overflow-y-auto font-mono text-sm leading-relaxed whitespace-pre h-1/2 md:h-full"
              dangerouslySetInnerHTML={getHighlightedCode(codeString)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};