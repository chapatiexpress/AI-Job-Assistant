/* ---------------- ICONS (24x24, stroke=currentColor) ---------------- */
const ICONS = {
  play:'<polygon points="6,4 20,12 6,20"/>',
  user:'<circle cx="12" cy="8" r="3.6"/><path d="M4.5 20c0-4.2 3.4-7 7.5-7s7.5 2.8 7.5 7"/>',
  search:'<circle cx="11" cy="11" r="6.5"/><line x1="20" y1="20" x2="15.8" y2="15.8"/>',
  copy:'<rect x="9" y="9" width="10.5" height="10.5" rx="2"/><path d="M5.5 15V6.5a2 2 0 0 1 2-2H16"/>',
  brain:'<circle cx="7" cy="8" r="2.2"/><circle cx="17" cy="8" r="2.2"/><circle cx="7" cy="16" r="2.2"/><circle cx="17" cy="16" r="2.2"/><circle cx="12" cy="12" r="2.4"/><line x1="8.6" y1="9.2" x2="10.2" y2="10.6"/><line x1="15.4" y1="9.2" x2="13.8" y2="10.6"/><line x1="8.6" y1="14.8" x2="10.2" y2="13.4"/><line x1="15.4" y1="14.8" x2="13.8" y2="13.4"/>',
  target:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4.4"/><circle cx="12" cy="12" r="1"/>',
  scale:'<line x1="12" y1="3" x2="12" y2="21"/><line x1="5" y1="7" x2="19" y2="7"/><path d="M5 7l-3 6a3.2 3.2 0 0 0 6 0z"/><path d="M19 7l-3 6a3.2 3.2 0 0 0 6 0z"/><line x1="8" y1="21" x2="16" y2="21"/>',
  ff:'<polygon points="4,5 12,12 4,19"/><polygon points="12,5 20,12 12,19"/>',
  filter:'<polygon points="4,4 20,4 14,12.5 14,19 10,21 10,12.5"/>',
  shield:'<path d="M12 3l7 3v6c0 5-3.4 7.8-7 9-3.6-1.2-7-4-7-9V6z"/><polyline points="8.5,12 11,14.5 15.5,9.5"/>',
  gauge:'<circle cx="12" cy="13" r="8"/><line x1="12" y1="13" x2="16" y2="9"/><line x1="12" y1="6" x2="12" y2="7.4"/><line x1="6" y1="13" x2="7.4" y2="13"/><line x1="18" y1="13" x2="16.6" y2="13"/>',
  filetext:'<path d="M7 3h7l4 4v14H7z"/><line x1="10" y1="12" x2="15" y2="12"/><line x1="10" y1="15.5" x2="15" y2="15.5"/><line x1="10" y1="8.5" x2="12" y2="8.5"/>',
  clipboardlist:'<rect x="6" y="4.5" width="12" height="16" rx="2"/><rect x="9" y="3" width="6" height="3" rx="1"/><line x1="9" y1="11" x2="15" y2="11"/><line x1="9" y1="14.5" x2="15" y2="14.5"/><line x1="9" y1="18" x2="13" y2="18"/>',
  usersearch:'<circle cx="9.5" cy="8" r="3.3"/><path d="M3.5 20c0-3.8 2.8-6.2 6-6.2"/><circle cx="16.5" cy="16.5" r="3"/><line x1="19" y1="19" x2="21.5" y2="21.5"/>',
  send:'<polygon points="3,11 21,3 13,21 11,13"/>',
  trophy:'<path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M7 5H4a3 3 0 0 0 3 3.6"/><path d="M17 5h3a3 3 0 0 1-3 3.6"/><line x1="12" y1="14" x2="12" y2="18"/><line x1="8.5" y1="21" x2="15.5" y2="21"/><line x1="9.5" y1="18" x2="14.5" y2="18"/>',
  check:'<circle cx="12" cy="12" r="9"/><polyline points="8,12.5 11,15.5 16,9"/>',
  clock:'<circle cx="12" cy="12" r="9"/><polyline points="12,7 12,12.5 16,14.5"/>',
  x:'<circle cx="12" cy="12" r="9"/><line x1="9" y1="9" x2="15" y2="15"/><line x1="15" y1="9" x2="9" y2="15"/>',
  db:'<ellipse cx="12" cy="6" rx="7" ry="2.6"/><path d="M5 6v12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6"/><path d="M5 12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6"/>',
  barchart:'<line x1="5" y1="20" x2="5" y2="12"/><line x1="12" y1="20" x2="12" y2="6"/><line x1="19" y1="20" x2="19" y2="15"/><line x1="3" y1="21" x2="21" y2="21"/>',
  bell:'<path d="M6 16v-4.5a6 6 0 0 1 12 0V16l2 3H4z"/><path d="M10 20.5a2.2 2.2 0 0 0 4 0"/>',
  refresh:'<path d="M4 12a8 8 0 0 1 13.6-5.7L20 9"/><polyline points="20,3 20,9 14,9"/><path d="M20 12a8 8 0 0 1-13.6 5.7L4 15"/><polyline points="4,21 4,15 10,15"/>',
  clipboard:'<rect x="6" y="4.5" width="12" height="16" rx="2"/><rect x="9" y="3" width="6" height="3" rx="1"/>',
};
function iconSvg(name){
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">'+ (ICONS[name]||'') +'</svg>';
}

/* ---------------- NODE DATA ---------------- */
/* rect nodes */
const rects = [
 {id:'n1', x:40,  y:110, w:190, h:135, badge:1,  icon:'play', color:'#16a34a', title:'Trigger', desc:'Schedule / Manual'},
 {id:'n2', x:290, y:110, w:190, h:135, badge:2,  icon:'user', color:'#16a34a', title:'Load Profile and Resume', desc:'Load resume, skills, experience, preferences'},
 {id:'n3', x:540, y:110, w:190, h:135, badge:3,  icon:'search', color:'#16a34a', title:'Find Jobs', desc:'Search jobs from multiple sources'},
 {id:'n4', x:790, y:110, w:190, h:135, badge:4,  icon:'copy', color:'#16a34a', title:'Remove Duplicates', desc:'Remove duplicate job listings'},
 {id:'n5', x:1040,y:110, w:190, h:135, badge:5,  icon:'brain', color:'#16a34a', title:'AI Match Jobs', desc:'AI analyzes & matches jobs with your profile'},
 {id:'n6', x:1290,y:110, w:190, h:135, badge:6,  icon:'target', color:'#16a34a', title:'Calculate Match Score', desc:'Calculate relevance score for each job'},

 {id:'skip', x:1980, y:120, w:190, h:110, icon:'ff', color:'#dc2626', title:'Skip Job', desc:'Process Next Job', tone:'red'},

 {id:'n8', x:290, y:420, w:190, h:150, badge:8,  icon:'filter', color:'#16a34a', title:'Filter Job Preferences', desc:'Filter by location, salary, job type, experience, remote, keywords, etc.'},
 {id:'n9', x:540, y:420, w:190, h:150, badge:9,  icon:'shield', color:'#16a34a', title:'Check Blacklist & Previous Applications', desc:'Skip blacklisted companies & already applied jobs'},
 {id:'n10',x:790, y:420, w:190, h:150, badge:10, icon:'gauge', color:'#16a34a', title:'Check Daily Application Limit', desc:'Ensure daily application limit not exceeded'},
 {id:'n11',x:1040,y:420, w:190, h:150, badge:11, icon:'filetext', color:'#16a34a', title:'Generate or Reuse Cover Letter', desc:'AI generates new or reuses from cover letter cache'},
 {id:'n12',x:1290,y:420, w:190, h:150, badge:12, icon:'clipboardlist', color:'#16a34a', title:'Prepare Application', desc:'Prepare resume, cover letter, answers, portfolio & required documents'},

 {id:'n14', x:520, y:770, w:190, h:130, badge:14, icon:'send', color:'#16a34a', title:'Apply to Job', desc:'Auto-fill application & submit'},
 {id:'pending', x:40, y:960, w:220, h:120, icon:'clipboard', color:'#dc2626', title:'Pending Review', desc:'User reviews & approves before applying', tone:'red'},

 {id:'success', x:1080, y:650, w:210, h:95, icon:'check', color:'#16a34a', title:'Success', desc:'Store Application', tone:'green'},
 {id:'tempfail', x:1080, y:760, w:210, h:95, icon:'clock', color:'#ea580c', title:'Temporary Failure', desc:'Retry After Delay', tone:'orange'},
 {id:'manual', x:1080, y:870, w:210, h:95, icon:'user', color:'#2563eb', title:'Manual Action Needed', desc:'Move to Pending Review', tone:'blue'},
 {id:'permfail', x:1080, y:980, w:210, h:95, icon:'x', color:'#dc2626', title:'Permanent Failure', desc:'Store Failure', tone:'red'},

 {id:'st-success', x:1350, y:650, w:200, h:95, icon:'db', color:'#16a34a', title:'Store Success Details', desc:'', tone:'green'},
 {id:'st-temp', x:1350, y:760, w:200, h:95, icon:'db', color:'#ea580c', title:'Store Retry Details', desc:'', tone:'orange'},
 {id:'st-manual', x:1350, y:870, w:200, h:95, icon:'db', color:'#2563eb', title:'Store Pending Details', desc:'', tone:'blue'},
 {id:'st-perm', x:1350, y:980, w:200, h:95, icon:'db', color:'#dc2626', title:'Store Failure Details', desc:'', tone:'red'},

 {id:'n16', x:1650, y:700, w:200, h:135, badge:16, icon:'barchart', color:'#334155', title:'Update Dashboard', desc:'Update stats & analytics'},
 {id:'n17', x:1650, y:900, w:200, h:135, badge:17, icon:'bell', color:'#16a34a', title:'Send Notification', desc:'Email / Telegram / WhatsApp alert'},

 {id:'n18', x:1290, y:1140, w:200, h:135, badge:18, icon:'refresh', color:'#334155', title:'Process Next Job', desc:'Continue with next job in the list'},
 {id:'n19', x:1000, y:1140, w:200, h:135, badge:19, icon:'clock', color:'#334155', title:'Wait for Next Scan', desc:'Wait for next scheduled scan or trigger'},
];

/* diamond decision nodes */
const diamonds = [
 {id:'d7',  x:1570, y:70,  w:210, h:210, icon:'scale', title:'Match Score Above Threshold?'},
 {id:'d13', x:60,   y:750, w:210, h:210, icon:'usersearch', title:'Manual Review Required?'},
 {id:'d15', x:760,  y:750, w:210, h:210, icon:'trophy', title:'Submission Result'},
];

/* connectors: {from,to, fromSide, toSide, color, marker, label, kind}
   kind: 'H' straight/elbow horizontal-first, 'V' elbow vertical-first, 'poly': explicit points fn */
const connectors = [
 {from:'n1', to:'n2', color:'#475569', marker:'arrow-grey', kind:'H'},
 {from:'n2', to:'n3', color:'#475569', marker:'arrow-grey', kind:'H'},
 {from:'n3', to:'n4', color:'#475569', marker:'arrow-grey', kind:'H'},
 {from:'n4', to:'n5', color:'#475569', marker:'arrow-grey', kind:'H'},
 {from:'n5', to:'n6', color:'#475569', marker:'arrow-grey', kind:'H'},
 {from:'n6', to:'d7', color:'#475569', marker:'arrow-grey', kind:'H'},
 {from:'d7', to:'skip', color:'#dc2626', marker:'arrow-red', kind:'H', label:'No'},
 {from:'d7', to:'n8', color:'#16a34a', marker:'arrow-green', kind:'V', label:'Yes'},

 {from:'n8', to:'n9', color:'#475569', marker:'arrow-grey', kind:'H'},
 {from:'n9', to:'n10', color:'#475569', marker:'arrow-grey', kind:'H'},
 {from:'n10', to:'n11', color:'#475569', marker:'arrow-grey', kind:'H'},
 {from:'n11', to:'n12', color:'#475569', marker:'arrow-grey', kind:'H'},
 {from:'n12', to:'d13', color:'#475569', marker:'arrow-grey', kind:'V2'},

 {from:'d13', to:'n14', color:'#16a34a', marker:'arrow-green', kind:'H', label:'No'},
 {from:'d13', to:'pending', color:'#dc2626', marker:'arrow-red', kind:'V', label:'Yes'},
 {from:'n14', to:'d15', color:'#475569', marker:'arrow-grey', kind:'H'},

 {from:'d15', to:'success', color:'#16a34a', marker:'arrow-green', kind:'H'},
 {from:'d15', to:'tempfail', color:'#ea580c', marker:'arrow-orange', kind:'H'},
 {from:'d15', to:'manual', color:'#2563eb', marker:'arrow-blue', kind:'H'},
 {from:'d15', to:'permfail', color:'#dc2626', marker:'arrow-red', kind:'H'},

 {from:'success', to:'st-success', color:'#16a34a', marker:'arrow-green', kind:'H'},
 {from:'tempfail', to:'st-temp', color:'#ea580c', marker:'arrow-orange', kind:'H'},
 {from:'manual', to:'st-manual', color:'#2563eb', marker:'arrow-blue', kind:'H'},
 {from:'permfail', to:'st-perm', color:'#dc2626', marker:'arrow-red', kind:'H'},

 {from:'st-success', to:'n16', color:'#475569', marker:'arrow-grey', kind:'H'},
 {from:'st-temp', to:'n16', color:'#475569', marker:'arrow-grey', kind:'H'},
 {from:'st-manual', to:'n16', color:'#475569', marker:'arrow-grey', kind:'H'},
 {from:'st-perm', to:'n16', color:'#475569', marker:'arrow-grey', kind:'H'},

 {from:'n16', to:'n17', color:'#475569', marker:'arrow-grey', kind:'V'},
 {from:'n17', to:'n18', color:'#475569', marker:'arrow-grey', kind:'V2'},
 {from:'skip', to:'n18', color:'#dc2626', marker:'arrow-red', kind:'poly-skip'},
 {from:'n18', to:'n19', color:'#475569', marker:'arrow-grey', kind:'H-rev'},
 {from:'n19', to:'n1', color:'#334155', marker:'arrow-grey', kind:'poly-loop'},
];

/* ---------------- build node map, allow drag ---------------- */
const nodeState = {};
rects.forEach(r => nodeState[r.id] = {...r, shape:'rect'});
diamonds.forEach(d => nodeState[d.id] = {...d, shape:'diamond'});

/* keep a pristine copy of original titles/descriptions for "Delete" (reset) */
const originalNodeData = {};
Object.keys(nodeState).forEach(id=>{
  originalNodeData[id] = { title: nodeState[id].title, desc: nodeState[id].desc || '' };
});

const canvas = document.getElementById('canvas');
const linesSvg = document.getElementById('lines');
const viewport = document.getElementById('viewport');

function toneClass(tone){
  if(!tone) return '';
  return 'tone-'+tone+' outline-'+tone;
}

/* render nodes */
Object.values(nodeState).forEach(n=>{
  let el = document.createElement('div');
  if(n.shape==='rect'){
    el.className = 'node ' + toneClass(n.tone);
    el.innerHTML = `
      ${n.badge ? `<div class="badge">${n.badge}</div>` : ''}
      <div class="icon-wrap" style="color:${n.color}">${iconSvg(n.icon)}</div>
      <div class="title">${n.title}</div>
      ${n.desc ? `<div class="desc">${n.desc}</div>` : ''}
    `;
  } else {
    el.className = 'diamond';
    el.innerHTML = `
      <div class="dshape"></div>
      <div class="dcontent">
        <div class="icon-wrap">${iconSvg(n.icon)}</div>
        <div class="title">${n.title}</div>
      </div>
    `;
  }
  el.style.left = n.x+'px';
  el.style.top = n.y+'px';
  el.style.width = n.w+'px';
  el.style.height = n.h+'px';
  el.dataset.id = n.id;
  canvas.appendChild(el);
  n.el = el;
});

/* label elements for edge text */
const labelEls = {};
connectors.forEach((c,i)=>{
  if(c.label){
    const lb = document.createElement('div');
    lb.className='lbl';
    lb.style.color = c.color;
    lb.textContent = c.label;
    canvas.appendChild(lb);
    labelEls[i]=lb;
  }
});

/* ---------------- anchor helpers ---------------- */
function anchor(n, side){
  const x=n.x, y=n.y, w=n.w, h=n.h;
  switch(side){
    case 'right': return {x:x+w, y:y+h/2};
    case 'left': return {x:x, y:y+h/2};
    case 'top': return {x:x+w/2, y:y};
    case 'bottom': return {x:x+w/2, y:y+h};
  }
}

function pathD(points){
  return 'M'+points.map(p=>p.x+','+p.y).join(' L');
}

function computeConnector(c){
  const A = nodeState[c.from], B = nodeState[c.to];
  let pts;
  if(c.kind==='H'){
    const p1 = anchor(A,'right'), p2 = anchor(B,'left');
    if(Math.abs(p1.y-p2.y) < 4){ pts=[p1,p2]; }
    else { const midX=(p1.x+p2.x)/2; pts=[p1,{x:midX,y:p1.y},{x:midX,y:p2.y},p2]; }
  } else if(c.kind==='H-rev'){
    const p1 = anchor(A,'left'), p2 = anchor(B,'right');
    if(Math.abs(p1.y-p2.y) < 4){ pts=[p1,p2]; }
    else { const midX=(p1.x+p2.x)/2; pts=[p1,{x:midX,y:p1.y},{x:midX,y:p2.y},p2]; }
  } else if(c.kind==='V'){
    const p1 = anchor(A,'bottom'), p2 = anchor(B,'top');
    const midY=(p1.y+p2.y)/2; pts=[p1,{x:p1.x,y:midY},{x:p2.x,y:midY},p2];
  } else if(c.kind==='V2'){
    const p1 = anchor(A,'bottom'), p2 = anchor(B,'top');
    const midY = p1.y + 50; pts=[p1,{x:p1.x,y:midY},{x:p2.x,y:midY},p2];
  } else if(c.kind==='poly-skip'){
    const p1 = anchor(A,'right');
    const p2 = anchor(B,'right');
    const outerX = 2160;
    pts=[p1,{x:outerX,y:p1.y},{x:outerX,y:p2.y+20},{x:p2.x,y:p2.y+20},p2];
  } else if(c.kind==='poly-loop'){
    const p1 = anchor(A,'left');
    const p2 = anchor(B,'left');
    const outerX = 8;
    pts=[p1,{x:outerX,y:p1.y},{x:outerX,y:p2.y},p2];
  }
  return pts;
}

let connEls = [];
function buildConnectorEls(){
  linesSvg.querySelectorAll('path.conn').forEach(p=>p.remove());
  connEls = connectors.map(c=>{
    const p = document.createElementNS('http://www.w3.org/2000/svg','path');
    p.setAttribute('class','conn');
    p.setAttribute('fill','none');
    p.setAttribute('stroke', c.color);
    p.setAttribute('stroke-width','2.2');
    p.setAttribute('marker-end','url(#'+c.marker+')');
    linesSvg.appendChild(p);
    return p;
  });
}
buildConnectorEls();

function renderConnectors(){
  connectors.forEach((c,i)=>{
    const pts = computeConnector(c);
    connEls[i].setAttribute('d', pathD(pts));
    if(labelEls[i]){
      // place label near the midpoint of the path, offset a bit
      const mid = pts[Math.floor(pts.length/2)];
      labelEls[i].style.left=(mid.x-8)+'px';
      labelEls[i].style.top=(mid.y-20)+'px';
    }
  });
}
renderConnectors();

/* ---------------- drag nodes ---------------- */
let dragModeOn = false;
const dragModeBtn = document.getElementById('dragmode');
dragModeBtn.onclick = ()=>{
  dragModeOn = !dragModeOn;
  dragModeBtn.classList.toggle('active', dragModeOn);
  viewport.classList.toggle('drag-mode-on', dragModeOn);
};

let dragTarget=null, dragStart=null, nodeStart=null, dragMoved=false;
canvas.addEventListener('pointerdown', (e)=>{
  const selEl = e.target.closest('.node,.diamond');
  if(selEl) dragMoved = false; // reset click/drag tracking for this interaction
  if(!dragModeOn) return; // drag mode off — clicking a card does nothing (selection handled by 'click' below)
  const el = e.target.closest('.node,.diamond');
  if(!el) return;
  e.stopPropagation();
  dragTarget = nodeState[el.dataset.id];
  el.classList.add('dragging');
  dragStart = {x:e.clientX, y:e.clientY};
  nodeStart = {x:dragTarget.x, y:dragTarget.y};
  el.setPointerCapture(e.pointerId);
});
canvas.addEventListener('pointermove', (e)=>{
  if(!dragTarget) return;
  if(Math.abs(e.clientX-dragStart.x) > 4 || Math.abs(e.clientY-dragStart.y) > 4) dragMoved = true;
  const dx = (e.clientX-dragStart.x)/view.scale;
  const dy = (e.clientY-dragStart.y)/view.scale;
  dragTarget.x = nodeStart.x + dx;
  dragTarget.y = nodeStart.y + dy;
  dragTarget.el.style.left = dragTarget.x+'px';
  dragTarget.el.style.top = dragTarget.y+'px';
  renderConnectors();
});
function endDrag(e){
  if(dragTarget){ dragTarget.el.classList.remove('dragging'); }
  dragTarget=null;
}
canvas.addEventListener('pointerup', endDrag);
canvas.addEventListener('pointercancel', endDrag);

/* card selection — click (not drag) opens the Properties Panel */
canvas.addEventListener('click', (e)=>{
  const el = e.target.closest('.node,.diamond');
  if(!el) return;
  if(dragMoved){ dragMoved = false; return; } // this click was actually the end of a drag
  selectNode(el.dataset.id);
});

/* ---------------- pan & zoom viewport ---------------- */
const view = {scale:0.62, tx:40, ty:20};
function applyView(){
  canvas.style.transform = `translate(${view.tx}px, ${view.ty}px) scale(${view.scale})`;
  document.getElementById('zoomlvl').textContent = Math.round(view.scale*100)+'%';
}
applyView();

let panning=false, panStart=null, viewStart=null;
viewport.addEventListener('pointerdown', (e)=>{
  if(!dragModeOn) return; // drag mode off — background is locked too, nothing moves
  if(e.target.closest('.node,.diamond')) return; // cards never trigger panning — only empty background does
  panning=true;
  viewport.classList.add('grabbing');
  panStart={x:e.clientX,y:e.clientY};
  viewStart={tx:view.tx,ty:view.ty};
});
window.addEventListener('pointermove', (e)=>{
  if(!panning) return;
  view.tx = viewStart.tx + (e.clientX-panStart.x);
  view.ty = viewStart.ty + (e.clientY-panStart.y);
  applyView();
});
window.addEventListener('pointerup', ()=>{ panning=false; viewport.classList.remove('grabbing'); });

let scrollZoomOn = false;
const scrollZoomBtn = document.getElementById('scrollzoom');
scrollZoomBtn.onclick = ()=>{
  scrollZoomOn = !scrollZoomOn;
  scrollZoomBtn.classList.toggle('active', scrollZoomOn);
};

viewport.addEventListener('wheel', (e)=>{
  if(!scrollZoomOn) return; // scroll behaves normally until 🔍 is enabled
  e.preventDefault();
  const rect = viewport.getBoundingClientRect();
  const mx = e.clientX-rect.left, my = e.clientY-rect.top;
  const prevScale = view.scale;
  let newScale = view.scale * (e.deltaY<0 ? 1.1 : 0.9);
  newScale = Math.min(2.2, Math.max(0.25, newScale));
  // keep point under cursor stable
  view.tx = mx - (mx-view.tx) * (newScale/prevScale);
  view.ty = my - (my-view.ty) * (newScale/prevScale);
  view.scale = newScale;
  applyView();
}, {passive:false});

document.getElementById('zin').onclick = ()=>{ zoomBy(1.15); };
document.getElementById('zout').onclick = ()=>{ zoomBy(0.87); };
document.getElementById('zreset').onclick = ()=>{ view.scale=0.62; view.tx=40; view.ty=20; applyView(); };
function zoomBy(f){
  const rect = viewport.getBoundingClientRect();
  const mx = rect.width/2, my = rect.height/2;
  const prevScale = view.scale;
  let newScale = Math.min(2.2, Math.max(0.25, view.scale*f));
  view.tx = mx - (mx-view.tx) * (newScale/prevScale);
  view.ty = my - (my-view.ty) * (newScale/prevScale);
  view.scale = newScale;
  applyView();
}

/* =====================================================================
   APPLICATION STATE & STORAGE
   ===================================================================== */
const APP_STORAGE_KEY = 'ajaAppState';
const DEFAULT_APP_STATE = {
  profile: {
    firstName:'Alex',
    lastName:'Walker',
    email:'alex@example.com',
    phone:'+1 555 0100',
    location:'Remote / New York',
    linkedin:'https://linkedin.com/in/username',
    portfolio:'https://portfolio.example.com',
    jobTitle:'Frontend Developer',
    experience:'3+ years',
    education:'B.Tech in Computer Science',
    certifications:'AWS Certified Developer',
    roles:'Frontend Developer, React Developer',
    preferredLocations:'Remote, London, Berlin',
    remotePreference:'Remote Only',
    aiModel:'GPT-4o',
    minMatchScore:75,
    dailyLimit:30,
    autoCover:true,
    autoApply:false,
    smartMatch:true,
    emailNotifications:true,
    resumeUploaded:false,
    resumeFileName:'',
    resumeFileType:'',
    resumeFileSize:0,
    resumeUploadedAt:'',
    resumeDataUrl:'',
    photoDataUrl:'',
    lastUpdatedAt:new Date().toISOString()
  },
  workflowSettings:{},
  notifications:[],
  activity:[],
  jobs:[],
  applications:[],
  settings:{nextJobId:101,nextApplicationId:1,pageSize:8,demoMode:false}
};

function fallbackText(value, fallback){
  const normalized = String(value ?? '').trim();
  return normalized ? normalized : fallback;
}

function normalizeApplicationRecord(input = {}, fallbackJob = null){
  const source = input && typeof input === 'object' ? input : {};
  const fallback = fallbackJob && typeof fallbackJob === 'object' ? fallbackJob : {};
  const title = fallbackText(source.jobTitle || source.title || fallback.jobTitle || fallback.title || source.role || source.position, 'Job Opportunity');
  const company = fallbackText(source.company || fallback.company || 'Unknown Company', 'Unknown Company');
  const location = fallbackText(source.location || fallback.location || source.workLocation || 'Remote', 'Remote');
  const sourceName = fallbackText(source.source || fallback.source || source.provider || 'Unknown Source', 'Unknown Source');
  const employmentType = fallbackText(source.employmentType || source.jobType || fallback.employmentType || fallback.jobType || 'Full-time', 'Full-time');
  const experienceLevel = fallbackText(source.experienceLevel || source.experience || fallback.experienceLevel || fallback.experience || 'Mid Level', 'Mid Level');
  const rawDateValue = source.date || source.postedDate || source.createdAt || source.dateTime || fallback.date || fallback.postedDate || new Date().toISOString();
  const parsedDate = new Date(rawDateValue);
  const dateValue = !Number.isNaN(parsedDate) ? parsedDate.toISOString().slice(0,10) : fallbackText(String(rawDateValue || '').slice(0,10), new Date().toISOString().slice(0,10));
  const timeValue = fallbackText(source.time || source.createdTime || (source.dateTime && String(source.dateTime).split(' ').slice(1).join(' ') || ''), parsedDate && !Number.isNaN(parsedDate) ? parsedDate.toLocaleTimeString(undefined,{hour:'numeric',minute:'2-digit'}) : new Date().toLocaleTimeString(undefined,{hour:'numeric',minute:'2-digit'}));
  const dateTimeValue = fallbackText(source.dateTime || `${dateValue} ${timeValue}`, `${dateValue} ${timeValue}`);
  const matchScoreValue = Number.isFinite(Number(source.matchScore ?? fallback.matchScore ?? 0)) ? Number(source.matchScore ?? fallback.matchScore ?? 0) : 0;
  const statusValue = fallbackText(source.status || fallback.status || 'Pending Review', 'Pending Review');
  const applicationUrlValue = fallbackText(source.applicationUrl || source.applyUrl || source.url || fallback.applicationUrl || fallback.applyUrl || fallback.url || '', '');
  const applyUrlValue = fallbackText(source.applyUrl || source.applicationUrl || source.url || fallback.applyUrl || fallback.applicationUrl || fallback.url || '', '');
  const resumeUsedValue = Boolean(source.resumeUsed ?? source.resumeUploaded ?? source.resumeDataUrl ?? fallback.resumeUploaded ?? fallback.resumeDataUrl ?? source.resumeFileName ?? fallback.resumeFileName);
  const coverLetterUsedValue = Boolean(source.coverLetterUsed ?? source.coverLetter ?? source.autoCover ?? fallback.coverLetter ?? fallback.autoCover ?? source.coverLetterText ?? fallback.coverLetterText);
  const normalized = {
    ...source,
    ...fallback,
    id: source.id ?? fallback.id ?? 0,
    jobId: source.jobId ?? fallback.jobId ?? source.id ?? fallback.id ?? 0,
    jobTitle: title,
    title,
    company,
    location,
    source: sourceName,
    applicationUrl: applicationUrlValue,
    applyUrl: applyUrlValue,
    matchScore: matchScoreValue,
    status: statusValue,
    date: dateValue,
    time: timeValue,
    dateTime: dateTimeValue,
    employmentType,
    experienceLevel,
    resumeUsed: resumeUsedValue,
    coverLetterUsed: coverLetterUsedValue,
    retryCount: Number(source.retryCount ?? fallback.retryCount ?? 0) || 0,
    notes: fallbackText(source.notes || fallback.notes || '', 'No notes yet.')
  };
  if(!normalized.jobTitle) normalized.jobTitle = 'Job Opportunity';
  if(!normalized.company) normalized.company = 'Unknown Company';
  if(!normalized.location) normalized.location = 'Remote';
  if(!normalized.source) normalized.source = 'Unknown Source';
  if(!normalized.status) normalized.status = 'Pending Review';
  if(!normalized.employmentType) normalized.employmentType = 'Full-time';
  if(!normalized.experienceLevel) normalized.experienceLevel = 'Mid Level';
  if(!normalized.applyUrl) normalized.applyUrl = '';
  if(!normalized.applicationUrl) normalized.applicationUrl = '';
  return normalized;
}

function loadAppState(){
  try{
    const saved = JSON.parse(localStorage.getItem(APP_STORAGE_KEY) || 'null');
    if(saved && typeof saved === 'object'){
      const cleaned = cleanDemoData(saved);
      return {
        profile:{...DEFAULT_APP_STATE.profile, ...(cleaned.profile||{})},
        workflowSettings: cleaned.workflowSettings || {},
        notifications: Array.isArray(cleaned.notifications)?cleaned.notifications:DEFAULT_APP_STATE.notifications.slice(),
        activity: Array.isArray(cleaned.activity)?cleaned.activity:DEFAULT_APP_STATE.activity.slice(),
        jobs: Array.isArray(cleaned.jobs)?cleaned.jobs.map(job=>normalizeApplicationRecord(job, job)):DEFAULT_APP_STATE.jobs.slice(),
        applications: Array.isArray(cleaned.applications)?cleaned.applications.map(app=>normalizeApplicationRecord(app)):DEFAULT_APP_STATE.applications.slice(),
        settings:{...DEFAULT_APP_STATE.settings, ...(cleaned.settings||{})}
      };
    }
  }catch(e){}
  return JSON.parse(JSON.stringify(DEFAULT_APP_STATE));
}

function cleanDemoData(state){
  if(!state || typeof state !== 'object') return state;
  const cleaned = {...state};
  if(Array.isArray(cleaned.notifications)){
    cleaned.notifications = cleaned.notifications.filter(n=> !n || n.demo !== true);
  }
  if(Array.isArray(cleaned.activity)){
    cleaned.activity = cleaned.activity.filter(a=> !a || a.demo !== true);
  }
  if(Array.isArray(cleaned.jobs)){
    cleaned.jobs = cleaned.jobs.filter(j=> !j || j.demo !== true && !(typeof j.id === 'string' && j.id.startsWith('demo-')));
  }
  if(Array.isArray(cleaned.applications)){
    cleaned.applications = cleaned.applications.filter(a=> !a || a.demo !== true && !(typeof a.id === 'string' && a.id.startsWith('demo-')));
  }
  return cleaned;
}

function saveAppState(){
  appState.profile = profileState || {};
  appState.workflowSettings = allSettings || {};
  if(allSettings && typeof allSettings === 'object'){
    allSettings.workflowState = workflowState || createDefaultWorkflowState();
  }
  appState.jobs = (jobsData || []).map(job=>normalizeApplicationRecord(job, job));
  appState.applications = (sampleApplications || []).map(app=>normalizeApplicationRecord(app));
  if(!appState.notifications) appState.notifications = [];
  if(!appState.activity) appState.activity = [];
  localStorage.setItem(APP_STORAGE_KEY, JSON.stringify(appState));
}

function addActivity(message){
  appState.activity.unshift({id:Date.now(),message,date:new Date().toISOString()});
  if(appState.activity.length>50) appState.activity.length=50;
  saveAppState();
  syncWorkflowUi();
}

function addNotification(title,message){
  const normalizedTitle = String(title || '').trim();
  const normalizedMessage = String(message || '').trim();
  const duplicate = appState.notifications.some(note => note.title === normalizedTitle && note.message === normalizedMessage);
  if(duplicate) return;
  appState.notifications.unshift({id:Date.now(),title:normalizedTitle,message:normalizedMessage,date:new Date().toISOString(),read:false});
  if(appState.notifications.length>50) appState.notifications.length=50;
  saveAppState();
  syncWorkflowUi();
}

function getUnreadNotificationCount(){
  return appState.notifications.filter(n=>!n.read).length;
}

function updateTopNavUser(){
  const avatar = document.getElementById('topnavAvatar');
  const username = document.getElementById('topnavUsername');
  if(avatar) avatar.textContent = ((profileState.firstName||'A').slice(0,1)+ (profileState.lastName||'U').slice(0,1)).toUpperCase();
  if(username) username.textContent = profileState.firstName ? `${profileState.firstName}${profileState.lastName ? ' ' + profileState.lastName : ''}` : (profileState.email || 'Admin User');
}

function renderNotifications(){
  const list = document.getElementById('notificationsList');
  if(!list) return;
  list.innerHTML = appState.notifications.length ? appState.notifications.map(n=>`
    <div class="notification-item ${n.read ? 'read' : 'unread'}" data-notification-id="${n.id}">
      <div class="notification-item-title">${escapeHtml(n.title)}</div>
      <div class="notification-item-message">${escapeHtml(n.message)}</div>
      <div class="notification-item-meta">${new Date(n.date).toLocaleString()}</div>
    </div>
  `).join('') : '<div class="notification-empty">No notifications yet.</div>';
  updateNotificationBadge();
}

function updateNotificationBadge(){
  const badge = document.getElementById('notificationCount');
  if(!badge) return;
  const count = appState.notifications.filter(n=>!n.read).length;
  badge.textContent = count;
  badge.classList.toggle('hidden', count === 0);
}

function toggleNotificationsPanel(forceOpen){
  const panel = document.getElementById('notificationPanel');
  const bell = document.getElementById('notificationBellBtn');
  if(!panel || !bell) return;
  const isOpen = forceOpen !== undefined ? forceOpen : panel.classList.contains('hidden');
  panel.classList.toggle('hidden', !isOpen);
  bell.classList.toggle('active', isOpen);
  if(isOpen){ renderNotifications(); }
}

function markNotificationRead(id){
  const note = appState.notifications.find(n=>n.id===id);
  if(note && !note.read){
    note.read = true;
    saveAppState();
    renderNotifications();
  }
}

function markAllNotificationsRead(){
  appState.notifications.forEach(n=>n.read=true);
  saveAppState();
  renderNotifications();
}

function clearNotifications(){
  appState.notifications = [];
  saveAppState();
  renderNotifications();
  showToast('Notifications cleared.');
}

function openMobileMenu(){
  const menu = document.getElementById('mobileNavMenu');
  const backdrop = document.getElementById('mobileNavBackdrop');
  if(!menu || !backdrop) return;
  menu.classList.remove('hidden');
  backdrop.classList.remove('hidden');
}

function closeMobileMenu(){
  const menu = document.getElementById('mobileNavMenu');
  const backdrop = document.getElementById('mobileNavBackdrop');
  if(!menu || !backdrop) return;
  menu.classList.add('hidden');
  backdrop.classList.add('hidden');
}

function openModal(title, html){
  const modal = document.getElementById('detailModal');
  const backdrop = document.getElementById('modalBackdrop');
  const titleEl = document.getElementById('modalTitle');
  const contentEl = document.getElementById('modalContent');
  if(titleEl) titleEl.textContent = title;
  if(contentEl) contentEl.innerHTML = html;
  modal && modal.classList.remove('hidden');
  backdrop && backdrop.classList.remove('hidden');
}

function closeModal(){
  const modal = document.getElementById('detailModal');
  const backdrop = document.getElementById('modalBackdrop');
  modal && modal.classList.add('hidden');
  backdrop && backdrop.classList.add('hidden');
}

let toastTimer = null;
function showToast(message, type='info'){
  const toast = document.getElementById('toast');
  if(!toast) return;
  toast.className = `toast ${type}`;
  toast.textContent = message;
  toast.classList.remove('hidden');
  if(toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>{ toast.classList.add('hidden'); }, 4200);
}

function addDemoJob(){
  showToast('Demo job entry is now routed through the real workflow queue.', 'info');
}

async function runDemoScan(){
  if(workflowPauseContext){
    showToast('Workflow is paused for review. Resume it to continue.', 'warning');
    return;
  }
  await runWorkflow();
}

function delay(ms){
  return new Promise(resolve=>setTimeout(resolve, ms));
}

const workflowEngine = typeof window !== 'undefined' && window.WorkflowEngine ? window.WorkflowEngine : {};

const jobProviderService = {
  providers: {
    mock: {
      name: 'Mock Provider',
      async fetchJobs(context = {}) {
        const profile = context.profile || profileState || {};
        const preferredRoles = normalizeArrayString(profile.roles);
        const preferredLocations = normalizeArrayString(profile.preferredLocations);
        const titles = ['Developer','Engineer','Designer','Specialist','Manager','Analyst','Architect'];
        const companies = ['Nova Launch','Aurora Systems','Violet Works','Crescent Labs','Stellar AI','BrightWave','PulseTech','Nimbus Digital'];
        const sources = ['LinkedIn','Indeed','Glassdoor','Monster','CareerBuilder'];
        const remoteOptions = ['Remote','Hybrid','On-site'];
        const salaryRanges = ['$70k-$90k','$80k-$105k','$90k-$120k','$100k-$130k','$110k-$150k'];
        const count = 8 + Math.floor(Math.random()*5);
        const jobs = [];
        for(let i=0;i<count;i++){
          const role = preferredRoles.length ? preferredRoles[Math.floor(Math.random()*preferredRoles.length)] : titles[Math.floor(Math.random()*titles.length)];
          const company = companies[Math.floor(Math.random()*companies.length)];
          const location = preferredLocations.length ? preferredLocations[Math.floor(Math.random()*preferredLocations.length)] : ['Remote','New York, NY','Austin, TX','London, UK','Berlin, Germany'][Math.floor(Math.random()*5)];
          const remote = remoteOptions[Math.floor(Math.random()*remoteOptions.length)];
          const source = sources[Math.floor(Math.random()*sources.length)];
          const salary = salaryRanges[Math.floor(Math.random()*salaryRanges.length)];
          const safeCompany = company.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');
          const safeRole = role.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');
          const applicationUrl = `https://apply.${safeCompany}.example.com/${safeRole}-${Date.now()}-${i}`;
          const requiresManualAction = Math.random() < 0.12 || (source.toLowerCase().includes('monster') && Math.random() < 0.35);
          jobs.push({
            id:`provider-job-${Date.now()}-${i}`,
            company,
            title: `${role} ${['II','III','Lead','Senior','Junior',''].filter(Boolean)[Math.floor(Math.random()*6)]}`.trim(),
            jobTitle: `${role} ${['II','III','Lead','Senior','Junior',''].filter(Boolean)[Math.floor(Math.random()*6)]}`.trim(),
            location,
            salary,
            jobType: 'Full-time',
            remote,
            description: `Opportunity for a ${role.toLowerCase()} role focused on impact, collaboration, and shipping high quality work.`,
            applicationUrl,
            applyUrl: applicationUrl,
            source,
            postedDate: new Date().toISOString().slice(0,10),
            automationPossible: Boolean(profile.resumeUploaded),
            requiresManualAction
          });
        }
        return jobs;
      }
    }
  },
  async fetchJobs(context = {}) {
    const provider = this.providers.mock;
    const jobs = await provider.fetchJobs(context);
    return (jobs || []).map((job, index)=>normalizeJobFromProvider(job, {index, profile: context.profile || profileState || {}}));
  }
};

function normalizeJobFromProvider(job, context = {}){
  const title = String(job.title || job.jobTitle || 'Software Role').trim();
  const company = String(job.company || 'Unknown Company').trim();
  const location = String(job.location || 'Remote').trim();
  const remote = String(job.remote || job.locationType || 'Remote').trim();
  return {
    id: job.id || `job-${context.index || 0}`,
    company,
    title,
    jobTitle: title,
    location,
    salary: job.salary || '',
    jobType: job.jobType || 'Full-time',
    remote,
    description: job.description || `Role at ${company}`,
    applyUrl: job.applyUrl || '',
    source: job.source || 'Provider',
    postedDate: job.postedDate || new Date().toISOString().slice(0,10),
    automationPossible: job.automationPossible !== undefined ? job.automationPossible : Boolean((context.profile || {}).resumeUploaded),
    requiresManualAction: Boolean(job.requiresManualAction),
    matchScore: 0,
    matched: false,
    demo: false
  };
}

function createJobProviderContext(){
  return {
    profile: profileState || {},
    settings: getNodeSettings('n3'),
    existingJobs: jobsData || []
  };
}

function isValidUrl(url){
  try {
    new URL(String(url).trim());
    return true;
  } catch (err) {
    return false;
  }
}

function applyJobProviderFilters(jobs){
  const preferredRoles = normalizeArrayString(profileState.roles).map(v=>v.toLowerCase());
  const preferredLocations = normalizeArrayString(profileState.preferredLocations).map(v=>v.toLowerCase());
  return jobs.filter(job => {
    const title = String(job.jobTitle || job.title || '').toLowerCase();
    const location = String(job.location || '').toLowerCase();
    const roleMatch = preferredRoles.length ? preferredRoles.some(role=>title.includes(role) || String(job.company || '').toLowerCase().includes(role)) : true;
    const locationMatch = preferredLocations.length ? preferredLocations.some(loc=>location.includes(loc)) : true;
    return roleMatch && locationMatch;
  });
}

function createDefaultWorkflowState(){
  return {
    status: 'idle',
    queue: [],
    currentJobId: null,
    currentStatus: 'idle',
    pauseReason: '',
    lastUpdatedAt: new Date().toISOString()
  };
}

function setWorkflowState(status, extra = {}){
  workflowState = {
    ...workflowState,
    status,
    currentStatus: extra.currentStatus || status,
    pauseReason: extra.pauseReason || workflowState.pauseReason || '',
    lastUpdatedAt: new Date().toISOString(),
    ...extra
  };
  saveAppState();
  return workflowState;
}

function pauseWorkflow(reason = 'manual'){ return setWorkflowState('paused', {pauseReason: reason, currentStatus:'paused'}); }
function resumeWorkflow(){ if(workflowState.status !== 'paused') return false; return setWorkflowState('running', {currentStatus:'running', pauseReason:''}); }
function stopWorkflow(reason = 'stopped'){ return setWorkflowState('stopped', {pauseReason: reason, currentStatus:'stopped'}); }

function prepareApplicationPayload(job){
  const applicationUrl = String(job.applicationUrl || job.applyUrl || '').trim();
  const automationPossible = Boolean(job.automationPossible !== false && profileState.resumeUploaded && applicationUrl && isValidUrl(applicationUrl));
  if(applicationUrl && isValidUrl(applicationUrl)){
    try { window.open(applicationUrl, '_blank', 'noopener,noreferrer'); } catch (err) {}
  }
  const manualReviewRequired = !automationPossible || !profileState.autoApply;
  return {
    applicationUrl,
    applyUrl: applicationUrl,
    automationPossible,
    manualReviewRequired,
    notes: applicationUrl && isValidUrl(applicationUrl) ? 'Resume and cover letter prepared for automated submission.' : 'Application URL unavailable.'
  };
}

const WORKFLOW_SEQUENCE = ['n1','n2','n3','n4','n5','n6','d7','n8','n9','n10','n11','n12','n14','n16','n17'];
const WORKFLOW_STATUS_COLOR = {
  completed:'#16a34a',
  pending:'#ea580c',
  failed:'#dc2626',
  skipped:'#64748b'
};
let workflowRunning = false;
let workflowPauseContext = null;
let scanWaiting = false;
let resumeAfterScanTrigger = false;

function applyWorkflowNodeStyle(id, status){
  const node = nodeState[id];
  if(!node || !node.el) return;
  const color = WORKFLOW_STATUS_COLOR[status] || node.color || '#2563eb';
  node.el.style.borderColor = color;
  node.el.style.boxShadow = `0 0 0 10px ${color}33`;
}

function clearWorkflowNodeStyles(){
  Object.values(nodeState).forEach(n=>{
    if(!n.el) return;
    n.el.style.borderColor = '';
    n.el.style.boxShadow = '';
  });
}

function clearWorkflowSelection(){
  Object.values(nodeState).forEach(n=>{
    if(n && n.el) n.el.classList.remove('selected');
  });
}

function setCurrentWorkflowNode(id){
  clearWorkflowSelection();
  const node = nodeState[id];
  if(!node || !node.el) return;
  node.el.classList.add('selected');
  applyWorkflowNodeStyle(id,'pending');
  syncWorkflowUi();
}

function markWorkflowNode(id, status){
  const node = nodeState[id];
  if(!node || !node.el) return;
  node.el.classList.remove('selected');
  applyWorkflowNodeStyle(id,status);
  syncWorkflowUi();
}

function markWorkflowNodesSkipped(ids){
  ids.forEach(id=>markWorkflowNode(id,'skipped'));
}

function clearWorkflowBranchHighlights(){
  ['success','tempfail','manual','permfail','st-success','st-temp','st-manual','st-perm','skip'].forEach(id=>{
    const node = nodeState[id];
    if(!node || !node.el) return;
    node.el.classList.remove('selected');
    node.el.style.borderColor = '';
    node.el.style.boxShadow = '';
  });
}

function applySubmissionResultVisuals(submissionResult){
  clearWorkflowBranchHighlights();
  const normalized = String(submissionResult || '').toLowerCase().replace(/ /g,'_');
  const branchMap = {
    success: {nodeIds:['success','st-success'], status:'completed'},
    temporary_failure: {nodeIds:['tempfail','st-temp'], status:'completed'},
    manual_action_needed: {nodeIds:['manual','st-manual'], status:'pending'},
    permanent_failure: {nodeIds:['permfail','st-perm'], status:'completed'},
    skip_job: {nodeIds:['skip'], status:'completed'},
    skipped: {nodeIds:['skip'], status:'completed'}
  };
  const branch = branchMap[normalized];
  if(!branch) return;
  branch.nodeIds.forEach(id=>markWorkflowNode(id, branch.status));
  syncWorkflowUi();
}

function setJobExecutionState(job, state){
  if(!job) return;
  job.executionState = state;
}

async function executeWorkflowNode(job, id, state, status='completed', duration=750){
  if(job) setJobExecutionState(job, state);
  await highlightNode(id, status, duration);
}

function getWorkflowJobKey(job){
  return `${job.jobTitle || ''}|${job.company || ''}|${job.location || ''}`;
}

function resolveSubmissionResult(job, profileStateOverride){
  const state = profileStateOverride || profileState || {};
  const override = window && window.workflowDemoResultOverride;
  if(override === 'success' || override === 'temporary_failure' || override === 'manual_action_needed' || override === 'permanent_failure') return override;
  const autoApply = state.autoApply !== false;
  if(!autoApply) return 'manual_action_needed';
  const baseScore = Number(job && job.matchScore) || 0;
  const random = Math.random();
  if(baseScore >= 90 && random > 0.2) return 'success';
  if(random < 0.12) return 'temporary_failure';
  if(random < 0.2) return 'manual_action_needed';
  if(random < 0.28) return 'permanent_failure';
  return 'success';
}

function validateProfileForWorkflow(){
  if(!profileState || typeof profileState !== 'object') profileState = {};
  if(!profileState.firstName) profileState.firstName = 'Alex';
  if(!profileState.lastName) profileState.lastName = 'Walker';
  if(!profileState.roles) profileState.roles = 'Software Developer';
  if(!profileState.preferredLocations) profileState.preferredLocations = 'Remote';
  if(!profileState.experience) profileState.experience = '3+ years';
  const skills = Array.isArray(profileState.skills) ? profileState.skills.filter(Boolean) : String(profileState.skills || '').split(',').map(s=>s.trim()).filter(Boolean);
  if(skills.length === 0){
    profileState.skills = ['General Software Development'];
  }
  if(!profileState.resumeUploaded){
    profileState.resumeUploaded = false;
  }
  return true;
}

function normalizeArrayString(value){
  return String(value||'').split(',').map(v=>v.trim()).filter(Boolean);
}

function computeJobMatchScore(job){
  const profile = profileState || {};
  const skills = Array.isArray(profile.skills) ? profile.skills.map(s=>String(s||'').toLowerCase()) : normalizeArrayString(profile.skills).map(s=>s.toLowerCase());
  const roles = normalizeArrayString(profile.roles).map(s=>s.toLowerCase());
  const locations = normalizeArrayString(profile.preferredLocations).map(s=>s.toLowerCase());
  const experience = String(profile.experience || '').toLowerCase();
  const education = String(profile.education || '').toLowerCase();
  const title = String(job.title || job.jobTitle || '').toLowerCase();
  const description = String(job.description || '').toLowerCase();
  const location = String(job.location || '').toLowerCase();
  const company = String(job.company || '').toLowerCase();
  const source = String(job.source || '').toLowerCase();
  const remote = String(job.remote || '').toLowerCase();

  let score = 0;
  const roleMatch = roles.some(role => title.includes(role) || description.includes(role) || company.includes(role)) || hasRoleOverlap(job, roles);
  const skillMatches = skills.filter(skill => title.includes(skill) || description.includes(skill) || company.includes(skill));
  const locationMatch = locations.some(loc => location.includes(loc) || remote.includes(loc.toLowerCase()));
  const experienceMatch = !experience || (title.includes('senior') || title.includes('lead') ? experience.includes('years') || experience.includes('experience') : true);
  const educationMatch = !education || description.includes('degree') || title.includes('developer') || title.includes('engineer') || title.includes('analyst');

  score += roleMatch ? 28 : 10;
  score += Math.min(24, skillMatches.length * 8);
  score += locationMatch ? 16 : 4;
  score += experienceMatch ? 10 : 4;
  score += educationMatch ? 8 : 4;
  score += profile.resumeUploaded ? 10 : 0;
  score += ['linkedin','indeed','glassdoor','monster','careerbuilder'].includes(source) ? 4 : 0;
  score += remote.includes('remote') && profile.remotePreference === 'Remote Only' ? 6 : 0;
  if(roleMatch && locationMatch) score = Math.max(score, 78);
  return Math.min(100, Math.max(0, score));
}

function filterUniqueJobs(jobs){
  const seen = new Set();
  return jobs.filter(job => {
    const key = `${job.jobTitle}|${job.company}|${job.location}`;
    if(seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function tokenizeText(value){
  return String(value || '').toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
}

function hasRoleOverlap(job, preferredRoles){
  if(!preferredRoles.length) return true;
  const jobText = `${job.jobTitle || ''} ${job.company || ''} ${job.description || ''}`;
  const jobTokens = new Set(tokenizeText(jobText));
  return preferredRoles.some(role => {
    const roleTokens = tokenizeText(role);
    return roleTokens.some(token => jobTokens.has(token));
  });
}

function applyPreferenceFilters(jobs){
  const preferredRoles = normalizeArrayString(profileState.roles).map(v=>v.toLowerCase());
  const preferredLocations = normalizeArrayString(profileState.preferredLocations).map(v=>v.toLowerCase());
  return jobs.filter(job => {
    const title = String(job.jobTitle || job.title || '').toLowerCase();
    const location = String(job.location || '').toLowerCase();
    const roleMatch = hasRoleOverlap(job, preferredRoles) || preferredRoles.some(role=>title.includes(role) || String(job.company || '').toLowerCase().includes(role));
    const locationMatch = preferredLocations.length ? preferredLocations.some(loc=>location.includes(loc)) : true;
    return roleMatch && locationMatch;
  });
}

function enforceDailyLimit(jobs){
  const limit = Number(profileState.dailyLimit) || 30;
  return jobs.slice(0, limit);
}

function createCoverLetter(job){
  return `Dear Hiring Team,\n\nI am excited to apply for the ${job.jobTitle || job.title} role at ${job.company}. With my experience in ${normalizeArrayString(profileState.skills).join(', ')}, I am confident I can contribute to your team.\n\nBest regards,\n${profileState.firstName}`;
}

function buildApplicationResult(job, attemptNumber = 0, profileStateOverride, randomProvider){
  if(window.WorkflowEngine && typeof window.WorkflowEngine.buildApplicationResult === 'function'){
    return window.WorkflowEngine.buildApplicationResult(job, attemptNumber, profileStateOverride, randomProvider);
  }
  const overrideValue = String((window && window.workflowDemoResultOverride) || '').trim().toLowerCase();
  if(['success','temporary_failure','manual_action_needed','permanent_failure'].includes(overrideValue)){
    return overrideValue;
  }
  const state = profileStateOverride || profileState || {};
  const autoApply = state.autoApply !== false;
  const applicationUrl = String(job && (job.applicationUrl || job.applyUrl || job.url) || '').trim();
  const baseScore = Number(job && job.matchScore) || 0;
  if(!autoApply) return 'Manual Action Needed';
  if(!job) {
    console.warn('[Submission Result] missing job data, defaulting to Temporary Failure');
    return 'Temporary Failure';
  }
  if(!state.resumeUploaded) return 'Manual Action Needed';
  const source = String(job.source || '').toLowerCase();
  const random = typeof randomProvider === 'function' ? randomProvider() : Math.random();
  if(!applicationUrl || !isValidUrl(applicationUrl)){
    console.debug(`[Submission Result] job lacks valid application URL for ${job.jobTitle || job.title} @ ${job.company}; continuing simulation.`);
  }
  if(job.requiresManualAction){
    console.log('[Submission Result] Manual Action Needed by explicit job requirement', {job:job.jobTitle, company:job.company, source, requiresManualAction: job.requiresManualAction, applicationUrl});
    return 'Manual Action Needed';
  }
  if(source.includes('glassdoor')){
    console.log('[Submission Result] Permanent Failure by source rule', {job:job.jobTitle, company:job.company, source, applicationUrl});
    return 'Permanent Failure';
  }
  if(source.includes('indeed') && attemptNumber > 0){
    console.log('[Submission Result] Temporary Failure by Indeed retry rule', {job:job.jobTitle, company:job.company, source, attemptNumber, applicationUrl});
    return 'Temporary Failure';
  }

  const threshold = Number(state.minMatchScore || 75);
  if(baseScore >= threshold){
    if(random < 0.55){
      console.log('[Submission Result] Success by score', {job:job.jobTitle, company:job.company, source, baseScore, attemptNumber, random, applicationUrl});
      return 'Success';
    }
    if(random < 0.80){
      console.log('[Submission Result] Temporary Failure by score logic', {job:job.jobTitle, company:job.company, source, baseScore, attemptNumber, random, applicationUrl});
      return 'Temporary Failure';
    }
    console.log('[Submission Result] Permanent Failure by score logic', {job:job.jobTitle, company:job.company, source, baseScore, attemptNumber, random, applicationUrl});
    return 'Permanent Failure';
  }

  if(random < 0.20){
    console.log('[Submission Result] Success by fallback chance', {job:job.jobTitle, company:job.company, source, baseScore, attemptNumber, random, applicationUrl});
    return 'Success';
  }
  if(random < 0.65){
    console.log('[Submission Result] Temporary Failure by fallback chance', {job:job.jobTitle, company:job.company, source, baseScore, attemptNumber, random, applicationUrl});
    return 'Temporary Failure';
  }
  console.log('[Submission Result] Permanent Failure by fallback chance', {job:job.jobTitle, company:job.company, source, baseScore, attemptNumber, random, applicationUrl});
  return 'Permanent Failure';
}

function syncWorkflowUi(){
  renderDashboard();
  renderApplicationsTable();
  renderAnalytics();
  renderNotifications();
}

async function highlightNode(id, status='completed', duration=750){
  setCurrentWorkflowNode(id);
  await delay(duration);
  markWorkflowNode(id,status);
}

function createApplicationRecord(job, status, extra = {}){
  const nextId = appState.settings.nextApplicationId || DEFAULT_APP_STATE.settings.nextApplicationId;
  const application = normalizeApplicationRecord({
    id: nextId,
    jobTitle: job.jobTitle || job.title,
    company: job.company,
    location: job.location,
    source: job.source,
    applicationUrl: job.applicationUrl || job.applyUrl || '',
    applyUrl: job.applyUrl || job.applicationUrl || '',
    matchScore: Number(job.matchScore) || 0,
    date: new Date().toISOString().slice(0,10),
    status,
    coverLetter: profileState.autoCover ? createCoverLetter(job) : '',
    notes: extra.notes || '',
    retryCount: extra.retryCount || 0,
    demo:false,
    ...extra
  }, job);
  appState.settings.nextApplicationId = nextId + 1;
  return application;
}

function persistApplication(job, status, extra = {}){
  const existing = sampleApplications.find(app => app.jobId === job.id || (app.jobTitle === (job.jobTitle || job.title) && app.company === job.company && app.location === job.location && app.source === job.source));
  const application = existing || createApplicationRecord(job, status, extra);
  const normalized = normalizeApplicationRecord({
    ...application,
    jobId: job.id,
    jobTitle: job.jobTitle || job.title,
    company: job.company,
    location: job.location,
    source: job.source,
    applicationUrl: job.applicationUrl || application.applicationUrl || job.applyUrl || application.applyUrl || '',
    applyUrl: job.applyUrl || application.applyUrl || job.applicationUrl || application.applicationUrl || '',
    matchScore: Number(job.matchScore) || application.matchScore || 0,
    date: application.date || new Date().toISOString().slice(0,10),
    status,
    coverLetter: extra.coverLetter !== undefined ? extra.coverLetter : (application.coverLetter || (profileState.autoCover ? createCoverLetter(job) : '')),
    manualReviewRequired: extra.manualReviewRequired !== undefined ? extra.manualReviewRequired : Boolean(application.manualReviewRequired),
    skipReason: extra.skipReason || application.skipReason || '',
    failureReason: extra.failureReason || application.failureReason || '',
    retryCount: extra.retryCount !== undefined ? extra.retryCount : (application.retryCount || 0),
    nextRetryAt: extra.nextRetryAt || application.nextRetryAt || '',
    confirmationMessage: extra.confirmationMessage || application.confirmationMessage || '',
    submittedAt: extra.submittedAt || application.submittedAt || '',
    notes: extra.notes || application.notes || '',
    workflowJobKey: getWorkflowJobKey(job),
    demo: false
  }, job);
  if(!existing){ sampleApplications.unshift(normalized); }
  else { const index = sampleApplications.indexOf(existing); if(index > -1){ sampleApplications.splice(index,1); sampleApplications.unshift(normalized); } }
  saveAppState();
  renderApplicationsTable();
  renderDashboard();
  renderAnalytics();
  return normalized;
}

function getWorkflowJobForApp(app){
  return (appState.jobs || []).find(entry => entry.id === app.jobId) ||
         (appState.jobs || []).find(entry => getWorkflowJobKey(entry) === app.workflowJobKey);
}

function findQueueEntryByJobId(jobId){
  return Array.isArray(workflowState.queue) ? workflowState.queue.find(entry => entry.jobId === jobId) : undefined;
}

async function processRemainingWorkflowQueue(afterJobId){
  const queue = Array.isArray(workflowState.queue) ? workflowState.queue : [];
  const startIndex = queue.findIndex(entry => entry.jobId === afterJobId);
  if(startIndex === -1) return;
  const existingJobKeys = new Set(sampleApplications.map(a=>`${a.jobTitle}|${a.company}|${a.location}`));
  const blacklistedCompanies = new Set(normalizeArrayString(profileState.blacklistedCompanies || '').map(v=>v.toLowerCase()));
  const dailyLimit = Number(profileState.dailyLimit) || 30;
  let applicationsCount = 0;
  let completedJobs = 0;
  let waitingForNextScan = false;

  for(let index = startIndex + 1; index < queue.length; index += 1){
    const queueEntry = queue[index];
    if(!queueEntry) continue;
    const job = (appState.jobs || []).find(entry => entry.id === queueEntry.jobId) || (appState.jobs || []).find(entry => entry.workflowJobKey === queueEntry.workflowJobKey);
    if(!job) continue;
    if(queueEntry.status === 'completed'){
      completedJobs += 1;
      continue;
    }

    queueEntry.status = 'processing';
    workflowState.currentJobId = job.id;
    workflowState.currentStatus = 'processing';
    workflowState.pauseReason = '';
    saveAppState();

    const jobKey = `${job.jobTitle || job.title}|${job.company}|${job.location}`;
    const isAlreadyApplied = existingJobKeys.has(jobKey);
    const isBlacklisted = blacklistedCompanies.has(String(job.company || '').toLowerCase());

    await executeWorkflowNode(job, 'n10', 'checking_limits', (isAlreadyApplied || isBlacklisted) ? 'skipped' : 'completed');
    if(isAlreadyApplied || isBlacklisted){
      job.workflowStatus = 'Skipped';
      job.workflowFinalStatus = 'skipped';
      persistApplication(job, 'Skipped', {skipReason: isBlacklisted ? 'Blacklisted company' : 'Already applied', notes: 'Skipped because the company is blacklisted or already applied.'});
      queueEntry.status = 'completed';
      workflowState.currentStatus = 'completed';
      saveAppState();
      markWorkflowNodesSkipped(['d15','n14','success','tempfail','manual','permfail','st-success','st-temp','st-manual','st-perm','n16','n17']);
      await executeWorkflowNode(job, 'skip', 'skipped', 'completed');
      await executeWorkflowNode(job, 'n18', 'completed', 'completed');
      completedJobs += 1;
      continue;
    }

    await executeWorkflowNode(job, 'n11', 'preparing', 'completed');
    await executeWorkflowNode(job, 'n12', 'preparing', 'completed');

    const automationInfo = prepareApplicationPayload(job);
    const manualReviewRequired = automationInfo.manualReviewRequired || !profileState.autoApply;
    if(manualReviewRequired){
      job.workflowStatus = 'Pending Review';
      job.workflowFinalStatus = 'pending_review';
      setJobExecutionState(job, 'pending_review');
      await executeWorkflowNode(job, 'd13', 'pending_review', 'completed');
      markWorkflowNodesSkipped(['n14','d15','success','tempfail','manual','permfail','st-success','st-temp','st-manual','st-perm','n16','n17']);
      const application = persistApplication(job, 'Pending Review', {manualReviewRequired:true, coverLetter: profileState.autoCover ? createCoverLetter(job) : '', notes: automationInfo.notes});
      queueEntry.status = 'waiting_manual_review';
      workflowState.pauseReason = 'manual_review';
      workflowState.currentStatus = 'paused';
      workflowState.currentJobId = job.id;
      workflowPauseContext = {jobId: job.id, appId: application.id};
      addActivity(`Workflow paused for ${job.jobTitle || job.title} at ${job.company}.`);
      addNotification('Pending Review', `${job.jobTitle || job.title} at ${job.company} is waiting for approval.`);
      await executeWorkflowNode(job, 'pending', 'pending_review', 'pending');
      workflowRunning = false;
      setWorkflowState('paused', {pauseReason:'manual_review'});
      if(document.querySelector('[data-action="run-workflow"]')){
        const btn = document.querySelector('[data-action="run-workflow"]');
        btn.disabled = false; btn.textContent = 'Run Workflow';
      }
      saveAppState();
      return;
    }

    await executeWorkflowNode(job, 'd13', 'applying', 'skipped');
    await executeWorkflowNode(job, 'n14', 'applying', 'completed');
    await executeWorkflowNode(job, 'd15', 'submission_result', 'completed');

    let outcome = null;
    for(let attempt=0; attempt < 2; attempt += 1){
      outcome = buildApplicationResult(job, attempt, profileState);
      if(outcome === 'Temporary Failure' || outcome === 'temporary_failure'){
        job.retryCount = (job.retryCount || 0) + 1;
        if(attempt === 0){
          continue;
        }
      }
      break;
    }
    if(outcome === 'Temporary Failure' || outcome === 'temporary_failure'){
      outcome = 'Temporary Failure';
    }
    const submissionResult = outcome;
    applySubmissionResultVisuals(submissionResult.toLowerCase().replace(/ /g, '_'));

    switch(submissionResult){
      case 'Success':
      case 'success':
        job.workflowStatus = 'Success';
        job.workflowFinalStatus = 'success';
        persistApplication(job, 'Success', {confirmationMessage:'Application submitted successfully.', submittedAt:new Date().toISOString(), notes: automationInfo.notes, retryCount:(job.retryCount || 0)});
        addActivity(`Application succeeded for ${job.jobTitle || job.title} at ${job.company}.`);
        addNotification('Application Submitted', `${job.jobTitle || job.title} at ${job.company} was submitted successfully.`);
        await executeWorkflowNode(job, 'n16', 'completed', 'completed');
        await executeWorkflowNode(job, 'n17', 'completed', 'completed');
        applicationsCount += 1;
        existingJobKeys.add(jobKey);
        await executeWorkflowNode(job, 'n18', 'completed', 'completed');
        completedJobs += 1;
        break;
      case 'Temporary Failure':
      case 'temporary_failure':
        job.workflowStatus = 'Temporary Failure';
        job.workflowFinalStatus = 'temporary_failure';
        persistApplication(job, 'Temporary Failure', {failureReason:'Temporary failure during submission.', retryCount:(job.retryCount || 0) + 1, nextRetryAt:new Date().toISOString(), notes:'Temporary failure; another attempt will be scheduled.'});
        addActivity(`Application temporarily failed for ${job.jobTitle || job.title} at ${job.company}.`);
        addNotification('Temporary Failure', `${job.jobTitle || job.title} at ${job.company} needs another attempt.`);
        await executeWorkflowNode(job, 'n16', 'completed', 'completed');
        await executeWorkflowNode(job, 'n17', 'completed', 'completed');
        applicationsCount += 1;
        existingJobKeys.add(jobKey);
        await executeWorkflowNode(job, 'n18', 'completed', 'completed');
        completedJobs += 1;
        break;
      case 'Manual Action Needed':
      case 'manual_action_needed':
        job.workflowStatus = 'Manual Action Needed';
        job.workflowFinalStatus = 'manual_action_needed';
        const manualApp = persistApplication(job, 'Manual Action Needed', {manualReviewRequired:true, failureReason:'Manual action required.', notes:'The application could not be submitted automatically.'});
        workflowPauseContext = {jobId: job.id, appId: manualApp.id};
        addActivity(`Manual action required for ${job.jobTitle || job.title} at ${job.company}.`);
        addNotification('Pending Review', `${job.jobTitle || job.title} at ${job.company} needs user action.`);
        await executeWorkflowNode(job, 'pending', 'manual_action_needed', 'pending');
        workflowRunning = false;
        setWorkflowState('paused', {pauseReason:'manual_review'});
        if(document.querySelector('[data-action="run-workflow"]')){
          const btn = document.querySelector('[data-action="run-workflow"]');
          btn.disabled = false; btn.textContent = 'Run Workflow';
        }
        saveAppState();
        return;
      case 'Permanent Failure':
      case 'permanent_failure':
        job.workflowStatus = 'Permanent Failure';
        job.workflowFinalStatus = 'permanent_failure';
        persistApplication(job, 'Permanent Failure', {failureReason:'Permanent failure during submission.', notes:'The application could not be submitted due to a permanent issue.'});
        addActivity(`Application permanently failed for ${job.jobTitle || job.title} at ${job.company}.`);
        addNotification('Permanent Failure', `${job.jobTitle || job.title} at ${job.company} could not be submitted.`);
        await executeWorkflowNode(job, 'n16', 'completed', 'completed');
        await executeWorkflowNode(job, 'n17', 'completed', 'completed');
        applicationsCount += 1;
        existingJobKeys.add(jobKey);
        await executeWorkflowNode(job, 'n18', 'completed', 'completed');
        completedJobs += 1;
        break;
      default:
        throw new Error('Unknown submission result');
    }
    queueEntry.status = 'completed';
    saveAppState();
  }

  if(completedJobs >= queue.length && !waitingForNextScan){
    await executeWorkflowNode(null, 'n19', 'pending', 'pending');
    addActivity('All current jobs processed. Waiting for the next scan.');
    addNotification('Workflow Completed', 'All jobs were processed. The workflow is awaiting the next scan.');
    waitingForNextScan = true;
    scanWaiting = true;
    workflowState.currentStatus = 'completed';
    workflowState.pauseReason = 'completed';
    saveAppState();
  }

  renderNotifications();
  workflowRunning = false;
  setWorkflowState(waitingForNextScan ? 'paused' : 'completed', waitingForNextScan ? {pauseReason:'next_scan'} : {});
  if(document.querySelector('[data-action="run-workflow"]')){
    const btn = document.querySelector('[data-action="run-workflow"]');
    btn.disabled = false; btn.textContent = 'Run Workflow';
  }
}

async function resumeApprovalWorkflow(app, decision = 'approve'){
  if(!app) return;
  if(workflowRunning) return;
  workflowRunning = true;
  setWorkflowState('running');
  setActivePage('workflow');
  clearWorkflowSelection();
  const runBtn = document.querySelector('[data-action="run-workflow"]');
  if(runBtn){ runBtn.disabled=true; runBtn.textContent='Workflow Running...'; }

  const job = getWorkflowJobForApp(app);
  if(!job){
    workflowRunning = false;
    setWorkflowState('paused', {pauseReason:'job_missing'});
    if(runBtn){ runBtn.disabled=false; runBtn.textContent='Run Workflow'; }
    showToast('Unable to resume the paused workflow job.', 'error');
    return;
  }

  const queueEntry = findQueueEntryByJobId(job.id);
  if(queueEntry) queueEntry.status = 'processing';
  workflowState.currentJobId = job.id;
  workflowState.currentStatus = 'processing';
  workflowState.pauseReason = '';
  saveAppState();

  if(decision === 'reject'){
    job.workflowStatus = 'Skipped';
    job.workflowFinalStatus = 'skipped';
    persistApplication(job, 'Skipped', {skipReason:'Rejected by user', failureReason:'Rejected manually and skipped.', notes:'Rejected manually and skipped.', manualReviewRequired:false});
    if(queueEntry) queueEntry.status = 'completed';
    workflowPauseContext = null;
    renderApplicationsTable();
    renderDashboard();
    renderAnalytics();
    addActivity(`Application rejected for ${job.jobTitle} at ${job.company}.`);
    addNotification('Application Rejected', `${job.jobTitle} at ${job.company} was rejected and skipped.`);
    renderNotifications();
    showToast('Application rejected and skipped.', 'info');
    await processRemainingWorkflowQueue(job.id);
    workflowRunning = false;
    if(runBtn){ runBtn.disabled=false; runBtn.textContent='Run Workflow'; }
    return 'skipped';
  }

  setJobExecutionState(job, 'applying');
  await executeWorkflowNode(job, 'n14', 'applying', 'completed');
  await executeWorkflowNode(job, 'd15', 'submission_result', 'completed');

  const automationInfo = prepareApplicationPayload(job);
  const resumeState = {
    ...profileState,
    autoApply: true,
    resumeUploaded: true
  };
  const submissionResult = buildApplicationResult(job, (app.retryCount || 0), resumeState);
  applySubmissionResultVisuals(submissionResult);

  switch(submissionResult){
    case 'Success':
    case 'success':
      await executeWorkflowNode(job, 'n16', 'success', 'completed');
      await executeWorkflowNode(job, 'n17', 'success', 'completed');
      persistApplication(job, 'Success', {confirmationMessage:'Application submitted successfully.', submittedAt:new Date().toISOString(), notes:'Application submitted successfully.', retryCount:(app.retryCount || 0)});
      addActivity(`Application succeeded for ${job.jobTitle} at ${job.company}.`);
      addNotification('Application Submitted', `${job.jobTitle} at ${job.company} was submitted successfully.`);
      break;
    case 'Temporary Failure':
    case 'temporary_failure':
      await executeWorkflowNode(job, 'n16', 'temporary_failure', 'completed');
      await executeWorkflowNode(job, 'n17', 'temporary_failure', 'completed');
      persistApplication(job, 'Temporary Failure', {failureReason:'Temporary failure during submission.', retryCount:(app.retryCount || 0) + 1, nextRetryAt:new Date().toISOString(), notes:'Temporary failure during submission; retry scheduled.'});
      addActivity(`Application temporarily failed for ${job.jobTitle} at ${job.company}.`);
      addNotification('Temporary Failure', `${job.jobTitle} at ${job.company} needs another attempt.`);
      break;
    case 'Manual Action Needed':
    case 'manual_action_needed':
      job.workflowStatus = 'Manual Action Needed';
      job.workflowFinalStatus = 'manual_action_needed';
      const manualApp = persistApplication(job, 'Manual Action Needed', {manualReviewRequired:true, failureReason:'Manual action required.', notes:'Manual action required before submission.'});
      workflowPauseContext = {jobId: job.id, appId: manualApp.id};
      if(queueEntry) queueEntry.status = 'waiting_manual_review';
      workflowState.currentStatus = 'paused';
      workflowState.pauseReason = 'manual_review';
      setWorkflowState('paused', {pauseReason:'manual_review'});
      addActivity(`Manual action required for ${job.jobTitle} at ${job.company}.`);
      addNotification('Manual Action Needed', `${job.jobTitle} at ${job.company} requires manual action.`);
      await executeWorkflowNode(job, 'n16', 'completed', 'completed');
      await executeWorkflowNode(job, 'n17', 'completed', 'completed');
      renderApplicationsTable();
      renderDashboard();
      renderAnalytics();
      renderNotifications();
      workflowRunning = false;
      if(runBtn){ runBtn.disabled=false; runBtn.textContent='Run Workflow'; }
      showToast('Workflow paused for manual action.', 'warning');
      return 'manual_action_needed';
    case 'Permanent Failure':
    case 'permanent_failure':
      await executeWorkflowNode(job, 'n16', 'permanent_failure', 'completed');
      await executeWorkflowNode(job, 'n17', 'permanent_failure', 'completed');
      persistApplication(job, 'Permanent Failure', {failureReason:'Permanent failure during submission.', notes:'The application could not be submitted automatically.'});
      addActivity(`Application permanently failed for ${job.jobTitle} at ${job.company}.`);
      addNotification('Permanent Failure', `${job.jobTitle} at ${job.company} could not be submitted.`);
      break;
    default:
      throw new Error('Unknown submission result');
  }

  if(queueEntry) queueEntry.status = 'completed';
  workflowState.currentStatus = 'completed';
  workflowState.pauseReason = '';
  workflowPauseContext = null;
  saveAppState();
  renderApplicationsTable();
  renderDashboard();
  renderAnalytics();
  renderNotifications();

  await processRemainingWorkflowQueue(job.id);
  workflowRunning = false;
  if(runBtn){ runBtn.disabled=false; runBtn.textContent='Run Workflow'; }
  return submissionResult ? String(submissionResult).toLowerCase().replace(/ /g,'_') : 'completed';
}

async function runWorkflow(){
  if(workflowRunning) return;
  workflowRunning = true;
  setWorkflowState('running');
  setActivePage('workflow');
  clearWorkflowNodeStyles();
  const runBtn = document.querySelector('[data-action="run-workflow"]');
  if(runBtn){ runBtn.disabled=true; runBtn.textContent='Workflow Running...'; }

  profileState = loadProfileState();
  if(workflowState.status === 'paused' && workflowState.pauseReason){
    resumeWorkflow();
  }
  if(!validateProfileForWorkflow()){
    workflowRunning = false;
    setWorkflowState('idle');
    if(runBtn){ runBtn.disabled=false; runBtn.textContent='Run Workflow'; }
    return;
  }

  const triggerSettings = getNodeSettings('n1');
  if(triggerSettings.enabled === false){
    await highlightNode('n1','skipped');
    markWorkflowNodesSkipped(['n2','n3','n4','n5','n6','d7','n8','n9','n10','n11','n12','d13','n14','success','tempfail','manual','permfail','st-success','st-temp','st-manual','st-perm','n16','n17','n18','n19','pending','skip']);
    workflowRunning = false;
    setWorkflowState('stopped');
    if(runBtn){ runBtn.disabled=false; runBtn.textContent='Run Workflow'; }
    showToast('Workflow stopped because the trigger is disabled.', 'warning');
    return;
  }

  addActivity('Workflow started.');
  addNotification('Workflow Started', 'The workflow has begun.');

  scanWaiting = false;
  await highlightNode('n1');
  await highlightNode('n2');

  const foundJobs = await jobProviderService.fetchJobs(createJobProviderContext());
  const filteredJobs = applyJobProviderFilters(filterUniqueJobs(foundJobs));
  const threshold = Number(profileState.minMatchScore || 75);
  const scoredJobs = filteredJobs.map(job => {
    const matchScore = computeJobMatchScore(job);
    const matched = true;
    return {
      ...job,
      matchScore,
      matched,
      workflowStatus: 'Found',
      workflowFinalStatus: 'found'
    };
  });
  jobsData = scoredJobs;
  appState.jobs = jobsData;
  saveAppState();
  addActivity(`${scoredJobs.length} jobs were discovered.`);
  addNotification('Jobs Found', `${scoredJobs.length} jobs were discovered.`);
  await highlightNode('n3');
  await highlightNode('n4', scoredJobs.length ? 'completed' : 'skipped');
  await highlightNode('n5');
  await highlightNode('n6');

  const matchedJobs = scoredJobs.filter(job => true);
  if(!matchedJobs.length){
    await executeWorkflowNode(null, 'd7', 'skipped', 'skipped');
    markWorkflowNodesSkipped(['n8','n9','n10','n11','n12','d13','n14','d15','success','tempfail','manual','permfail','st-success','st-temp','st-manual','st-perm','n16','n17','n18','pending','skip']);
    addNotification('No Jobs Matched', 'No jobs met the configured minimum match score.');
    addNotification('Workflow Completed', `${scoredJobs.length} jobs were found and none matched the minimum score.`);
    setWorkflowState('completed');
    workflowRunning = false;
    if(runBtn){ runBtn.disabled=false; runBtn.textContent='Run Workflow'; }
    showToast('Workflow completed. No jobs matched the threshold.', 'info');
    return;
  }

  addNotification('Jobs Matched', `${matchedJobs.length} jobs matched your configured threshold.`);
  const existingJobKeys = new Set(sampleApplications.map(a=>`${a.jobTitle}|${a.company}|${a.location}`));
  const blacklistedCompanies = new Set(normalizeArrayString(profileState.blacklistedCompanies || '').map(v=>v.toLowerCase()));
  const dailyLimit = Number(profileState.dailyLimit) || 30;
  let applicationsCount = 0;
  let completedJobs = 0;
  let waitingForNextScan = false;

  workflowState.queue = matchedJobs.map(job => ({
    id: job.id,
    jobId: job.id,
    jobTitle: job.jobTitle || job.title,
    company: job.company,
    matchScore: Number(job.matchScore) || 0,
    status: 'pending',
    attempts: 0,
    manualReviewRequired: false,
    createdAt: new Date().toISOString()
  }));
  workflowState.currentJobId = workflowState.queue[0] ? workflowState.queue[0].jobId : null;
  workflowState.currentStatus = 'pending';
  workflowState.pauseReason = '';
  saveAppState();

  for(const job of matchedJobs){
    const queueEntry = workflowState.queue.find(entry => entry.jobId === job.id) || workflowState.queue[0];
    if(!queueEntry) continue;
    queueEntry.status = 'processing';
    workflowState.currentJobId = job.id;
    workflowState.currentStatus = 'processing';
    workflowState.pauseReason = '';
    saveAppState();
    const jobKey = `${job.jobTitle || job.title}|${job.company}|${job.location}`;
    const isAboveThreshold = Number(job.matchScore) >= Number(profileState.minMatchScore);
    await executeWorkflowNode(job, 'd7', 'matching', isAboveThreshold ? 'completed' : 'skipped');

    if(!isAboveThreshold){
      job.workflowStatus = 'Skipped';
      job.workflowFinalStatus = 'skipped';
      persistApplication(job, 'Skipped', {skipReason:'Match score below threshold', notes:'Skipped because the match score was below the configured threshold.'});
      queueEntry.status = 'completed';
      workflowState.currentStatus = 'completed';
      saveAppState();
      await executeWorkflowNode(job, 'skip', 'skipped', 'completed');
      await executeWorkflowNode(job, 'n18', 'completed', 'completed');
      completedJobs += 1;
      continue;
    }

    await executeWorkflowNode(job, 'n8', 'filtering', 'completed');
    const preferencePass = applyPreferenceFilters([job]).length > 0;
    if(!preferencePass){
      job.workflowStatus = 'Skipped';
      job.workflowFinalStatus = 'skipped';
      persistApplication(job, 'Skipped', {skipReason:'Job did not match preferences', notes:'Skipped because the job did not match the configured preferences.'});
      queueEntry.status = 'completed';
      saveAppState();
      await executeWorkflowNode(job, 'n9', 'skipped', 'skipped');
      await executeWorkflowNode(job, 'skip', 'skipped', 'completed');
      await executeWorkflowNode(job, 'n18', 'completed', 'completed');
      completedJobs += 1;
      continue;
    }

    const isAlreadyApplied = existingJobKeys.has(jobKey);
    const isBlacklisted = blacklistedCompanies.has(String(job.company||'').toLowerCase());
    await executeWorkflowNode(job, 'n9', 'checking_limits', (isAlreadyApplied || isBlacklisted) ? 'skipped' : 'completed');
    if(isAlreadyApplied || isBlacklisted){
      job.workflowStatus = 'Skipped';
      job.workflowFinalStatus = 'skipped';
      persistApplication(job, 'Skipped', {skipReason:isBlacklisted ? 'Blacklisted company' : 'Already applied', notes:'Skipped because the company is blacklisted or the job was already applied to.'});
      queueEntry.status = 'completed';
      saveAppState();
      markWorkflowNodesSkipped(['d15','n14','success','tempfail','manual','permfail','st-success','st-temp','st-manual','st-perm','n16','n17']);
      await executeWorkflowNode(job, 'skip', 'skipped', 'completed');
      await executeWorkflowNode(job, 'n18', 'completed', 'completed');
      completedJobs += 1;
      continue;
    }

    await executeWorkflowNode(job, 'n10', 'checking_limits', 'completed');
    if(applicationsCount >= dailyLimit){
      markWorkflowNodesSkipped(['n11','n12','d13','n14','d15','success','tempfail','manual','permfail','st-success','st-temp','st-manual','st-perm','n16','n17','pending','skip']);
      await executeWorkflowNode(job, 'n19', 'pending', 'pending');
      addActivity('Daily limit reached. Waiting for the next scan cycle.');
      addNotification('Pending Review', 'Daily application limit reached. The workflow is waiting for the next scan.');
      waitingForNextScan = true;
      scanWaiting = true;
      workflowState.pauseReason = 'daily_limit';
      workflowState.currentStatus = 'paused';
      workflowState.currentJobId = job.id;
      saveAppState();
      break;
    }

    await executeWorkflowNode(job, 'n11', 'preparing', 'completed');
    await executeWorkflowNode(job, 'n12', 'preparing', 'completed');

    const automationInfo = prepareApplicationPayload(job);
    const manualReviewRequired = automationInfo.manualReviewRequired || !profileState.autoApply;
    if(manualReviewRequired){
      job.workflowStatus = 'Pending Review';
      job.workflowFinalStatus = 'pending_review';
      setJobExecutionState(job, 'pending_review');
      await executeWorkflowNode(job, 'd13', 'pending_review', 'completed');
      markWorkflowNodesSkipped(['n14','d15','success','tempfail','manual','permfail','st-success','st-temp','st-manual','st-perm','n16','n17']);
      const application = persistApplication(job, 'Pending Review', {manualReviewRequired:true, coverLetter: profileState.autoCover ? createCoverLetter(job) : '', notes: automationInfo.notes});
      queueEntry.status = 'waiting_manual_review';
      workflowState.pauseReason = 'manual_review';
      workflowState.currentStatus = 'paused';
      workflowState.currentJobId = job.id;
      workflowPauseContext = {jobId: job.id, appId: application.id};
      addActivity(`Workflow paused for ${job.jobTitle || job.title} at ${job.company}.`);
      addNotification('Pending Review', `${job.jobTitle || job.title} at ${job.company} is waiting for approval.`);
      await executeWorkflowNode(job, 'pending', 'pending_review', 'pending');
      workflowRunning = false;
      setWorkflowState('paused', {pauseReason:'manual_review'});
      if(runBtn){ runBtn.disabled=false; runBtn.textContent='Run Workflow'; }
      showToast('Workflow paused for pending review.', 'warning');
      saveAppState();
      return;
    }

    await executeWorkflowNode(job, 'd13', 'applying', 'skipped');
    await executeWorkflowNode(job, 'n14', 'applying', 'completed');
    await executeWorkflowNode(job, 'd15', 'submission_result', 'completed');

    let outcome = null;
    for(let attempt=0; attempt < 2; attempt += 1){
      outcome = buildApplicationResult(job, attempt, profileState);
      if(outcome === 'Temporary Failure' || outcome === 'temporary_failure'){
        job.retryCount = (job.retryCount || 0) + 1;
        if(attempt === 0){
          continue;
        }
      }
      break;
    }
    if(outcome === 'Temporary Failure' || outcome === 'temporary_failure'){
      outcome = 'Temporary Failure';
    }
    const submissionResult = outcome; 
    applySubmissionResultVisuals(submissionResult.toLowerCase().replace(/ /g, '_'));

    switch(submissionResult){
      case 'Success':
      case 'success':
        job.workflowStatus = 'Success';
        job.workflowFinalStatus = 'success';
        persistApplication(job, 'Success', {confirmationMessage:'Application submitted successfully.', submittedAt:new Date().toISOString(), notes: automationInfo.notes, retryCount:(job.retryCount || 0)});
        addActivity(`Application succeeded for ${job.jobTitle || job.title} at ${job.company}.`);
        addNotification('Application Submitted', `${job.jobTitle || job.title} at ${job.company} was submitted successfully.`);
        await executeWorkflowNode(job, 'n16', 'completed', 'completed');
        await executeWorkflowNode(job, 'n17', 'completed', 'completed');
        applicationsCount += 1;
        existingJobKeys.add(jobKey);
        await executeWorkflowNode(job, 'n18', 'completed', 'completed');
        completedJobs += 1;
        break;
      case 'Temporary Failure':
      case 'temporary_failure':
        job.workflowStatus = 'Temporary Failure';
        job.workflowFinalStatus = 'temporary_failure';
        persistApplication(job, 'Temporary Failure', {failureReason:'Temporary failure during submission.', retryCount:(job.retryCount || 0) + 1, nextRetryAt:new Date().toISOString(), notes:'Temporary failure; another attempt will be scheduled.'});
        addActivity(`Application temporarily failed for ${job.jobTitle || job.title} at ${job.company}.`);
        addNotification('Temporary Failure', `${job.jobTitle || job.title} at ${job.company} needs another attempt.`);
        await executeWorkflowNode(job, 'n16', 'completed', 'completed');
        await executeWorkflowNode(job, 'n17', 'completed', 'completed');
        applicationsCount += 1;
        existingJobKeys.add(jobKey);
        await executeWorkflowNode(job, 'n18', 'completed', 'completed');
        completedJobs += 1;
        break;
      case 'Manual Action Needed':
      case 'manual_action_needed':
        job.workflowStatus = 'Manual Action Needed';
        job.workflowFinalStatus = 'manual_action_needed';
        const manualApp = persistApplication(job, 'Manual Action Needed', {manualReviewRequired:true, failureReason:'Manual action required.', notes:'The application could not be submitted automatically.'});
        workflowPauseContext = {jobId: job.id, appId: manualApp.id};
        addActivity(`Manual action required for ${job.jobTitle || job.title} at ${job.company}.`);
        addNotification('Pending Review', `${job.jobTitle || job.title} at ${job.company} needs user action.`);
        await executeWorkflowNode(job, 'pending', 'manual_action_needed', 'pending');
        workflowRunning = false;
        setWorkflowState('paused', {pauseReason:'manual_review'});
        if(runBtn){ runBtn.disabled=false; runBtn.textContent='Run Workflow'; }
        showToast('Workflow paused for manual action.', 'warning');
        saveAppState();
        return;
      case 'Permanent Failure':
      case 'permanent_failure':
        job.workflowStatus = 'Permanent Failure';
        job.workflowFinalStatus = 'permanent_failure';
        persistApplication(job, 'Permanent Failure', {failureReason:'Permanent failure during submission.', notes:'The application could not be submitted due to a permanent issue.'});
        addActivity(`Application permanently failed for ${job.jobTitle || job.title} at ${job.company}.`);
        addNotification('Permanent Failure', `${job.jobTitle || job.title} at ${job.company} could not be submitted.`);
        await executeWorkflowNode(job, 'n16', 'completed', 'completed');
        await executeWorkflowNode(job, 'n17', 'completed', 'completed');
        applicationsCount += 1;
        existingJobKeys.add(jobKey);
        await executeWorkflowNode(job, 'n18', 'completed', 'completed');
        completedJobs += 1;
        break;
      default:
        throw new Error('Unknown submission result');
    }
    queueEntry.status = 'completed';
    saveAppState();
  }

  if(completedJobs >= matchedJobs.length && !waitingForNextScan){
    await executeWorkflowNode(null, 'n19', 'pending', 'pending');
    addActivity('All current jobs processed. Waiting for the next scan.');
    addNotification('Workflow Completed', 'All jobs were processed. The workflow is awaiting the next scan.');
    waitingForNextScan = true;
    scanWaiting = true;
    workflowState.currentStatus = 'completed';
    workflowState.pauseReason = 'completed';
    saveAppState();
  }

  renderNotifications();
  workflowRunning = false;
  setWorkflowState(waitingForNextScan ? 'paused' : 'completed', waitingForNextScan ? {pauseReason:'next_scan'} : {});
  if(runBtn){ runBtn.disabled=false; runBtn.textContent='Run Workflow'; }
  showToast(waitingForNextScan ? 'Workflow paused until next scan.' : 'Workflow completed.', waitingForNextScan ? 'info' : 'success');
}

function resetDemoData(){
  jobsData = [];
  sampleApplications = [];
  appState.jobs = [];
  appState.applications = [];
  appState.notifications = [];
  appState.activity = [];
  saveAppState();
  clearWorkflowNodeStyles();
  renderApplicationsTable();
  renderDashboard();
  renderAnalytics();
  renderNotifications();
  showToast('Demo data cleared. Profile preserved.');
}

function loadMoreApplications(){
  const nextId = appState.settings.nextApplicationId || DEFAULT_APP_STATE.settings.nextApplicationId;
  const extra = [
    {id: nextId, jobTitle:'Full Stack Developer', company:'Violet Works', location:'Austin, TX', source:'Glassdoor', matchScore:78, date:'2026-07-06', status:'Temporary Failure'},
    {id: nextId+1, jobTitle:'Product Designer', company:'Crescent Labs', location:'Remote', source:'LinkedIn', matchScore:82, date:'2026-07-05', status:'Pending Review'},
  ].map(item=>normalizeApplicationRecord(item));
  sampleApplications.push(...extra);
  appState.settings.nextApplicationId = nextId + extra.length;
  saveAppState();
  renderApplicationsTable();
  renderDashboard();
  renderAnalytics();
  addActivity('Loaded more application history.');
  showToast('More applications loaded.');
}

let appState = loadAppState();
let allSettings = appState.workflowSettings || {};
let profileState = appState.profile || {};
let sampleApplications = (appState.applications || []).map(app=>normalizeApplicationRecord(app));
let jobsData = (appState.jobs || []).map(job=>normalizeApplicationRecord(job, job));
let workflowState = createDefaultWorkflowState();
if(allSettings && allSettings.workflowState && typeof allSettings.workflowState === 'object'){
  workflowState = {
    ...workflowState,
    ...allSettings.workflowState,
    queue: Array.isArray(allSettings.workflowState.queue) ? allSettings.workflowState.queue : []
  };
}

/* per-card-type field definitions (beyond the universal Name/Description/Status/Enable Step) */
const fieldConfigs = {
  n1: [ // Trigger
    {key:'triggerType', label:'Trigger Type', type:'select', options:['Manual','Schedule'], default:'Schedule'},
    {key:'scanFrequency', label:'Scan Frequency', type:'select', options:['Every 15 minutes','Hourly','Every 6 hours','Daily'], default:'Hourly'},
  ],
  n2: [ // Load Profile and Resume
    {key:'resume', label:'Resume', type:'text', default:'', readonly:true},
    {key:'skills', label:'Skills', type:'text', default:'', readonly:true},
    {key:'experience', label:'Experience', type:'text', default:'', readonly:true},
    {key:'preferredRoles', label:'Preferred Roles', type:'text', default:'', readonly:true},
    {key:'preferredLocations', label:'Preferred Locations', type:'text', default:'', readonly:true},
    {key:'resumeUploaded', label:'Resume Uploaded', type:'text', default:'No', readonly:true},
    {key:'lastUpdatedAt', label:'Last Updated', type:'text', default:'', readonly:true},
  ],
  n3: [ // Find Jobs
    {key:'jobBoards', label:'Job Boards', type:'text', default:'LinkedIn, Indeed, Glassdoor'},
    {key:'keywords', label:'Keywords', type:'text', default:'Frontend Developer'},
    {key:'location', label:'Location', type:'text', default:'Remote'},
    {key:'maxResults', label:'Maximum Results', type:'number', default:50},
  ],
  n5: [ // AI Match Jobs
    {key:'matchThreshold', label:'Match Threshold (%)', type:'range', default:70},
    {key:'aiModel', label:'AI Model', type:'select', options:['Claude 3.5 Sonnet','Claude 3 Opus','Claude 3 Haiku'], default:'Claude 3.5 Sonnet'},
    {key:'requiredSkills', label:'Required Skills (comma separated)', type:'text', default:'JavaScript, React, Node.js'},
    {key:'considerExperience', label:'Consider Experience', type:'select', options:['Not Important','Important','Very Important'], default:'Important'},
    {key:'considerEducation', label:'Consider Education', type:'select', options:['Not Important','Moderate','Important'], default:'Moderate'},
  ],
  n8: [ // Filter Job Preferences
    {key:'salary', label:'Salary', type:'text', default:'$60,000+'},
    {key:'remote', label:'Remote', type:'select', options:['Any','Remote Only','On-site','Hybrid'], default:'Any'},
    {key:'experience', label:'Experience', type:'select', options:['Entry','Mid','Senior'], default:'Mid'},
    {key:'jobType', label:'Job Type', type:'select', options:['Full-time','Part-time','Contract'], default:'Full-time'},
  ],
  n10: [ // Check Daily Application Limit
    {key:'appsPerDay', label:'Applications Per Day', type:'number', default:20},
  ],
  n11: [ // Generate or Reuse Cover Letter
    {key:'generate', label:'Generate', type:'toggle', default:true},
    {key:'reuseExisting', label:'Reuse Existing', type:'toggle', default:true},
    {key:'tone', label:'Tone', type:'select', options:['Professional','Friendly','Confident','Formal'], default:'Professional'},
  ],
  n12: [ // Prepare Application
    {key:'resume', label:'Resume', type:'toggle', default:true},
    {key:'coverLetter', label:'Cover Letter', type:'toggle', default:true},
    {key:'portfolio', label:'Portfolio', type:'toggle', default:false},
  ],
  d13: [ // Manual Review Required?
    {key:'enableReview', label:'Enable Review', type:'toggle', default:true},
    {key:'reviewRules', label:'Review Rules', type:'textarea', default:'Flag jobs below 80% match score'},
  ],
  n17: [ // Send Notification
    {key:'email', label:'Email', type:'toggle', default:true},
    {key:'telegram', label:'Telegram', type:'toggle', default:false},
    {key:'whatsapp', label:'WhatsApp', type:'toggle', default:false},
  ],
};

const sectionTitles = {
  n1:'Trigger Settings', n2:'Profile Settings', n3:'Search Settings',
  n5:'AI Matching Settings', n8:'Filter Settings', n10:'Limit Settings',
  n11:'Cover Letter Settings', n12:'Application Settings',
  d13:'Review Settings', n17:'Notification Settings',
};
function panelSectionTitle(id){ return sectionTitles[id] || 'Settings'; }

function escapeHtml(str){
  return String(str==null?'':str).replace(/[&<>"']/g, s=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
}

function getNodeSettings(id){
  const saved = allSettings[id] || {};
  const cfg = fieldConfigs[id] || [];
  const fields = {};
  cfg.forEach(f=>{
    fields[f.key] = (saved.fields && saved.fields[f.key] !== undefined) ? saved.fields[f.key] : f.default;
  });

  if(id === 'n2'){
    fields.resume = profileState.resumeFileName || '';
    fields.skills = Array.isArray(profileState.skills) ? profileState.skills.join(', ') : String(profileState.skills || '').trim();
    fields.experience = profileState.experience || '';
    fields.preferredRoles = profileState.roles || '';
    fields.preferredLocations = profileState.preferredLocations || '';
    fields.resumeUploaded = profileState.resumeUploaded ? 'Yes' : 'No';
    fields.lastUpdatedAt = profileState.lastUpdatedAt ? formatDateTime(profileState.lastUpdatedAt) : '';
  }

  return {
    status: saved.status || 'Active',
    enabled: saved.enabled !== undefined ? saved.enabled : true,
    name: saved.name !== undefined ? saved.name : originalNodeData[id].title,
    desc: saved.desc !== undefined ? saved.desc : originalNodeData[id].desc,
    fields
  };
}
function persistSettings(){
  saveAppState();
}

/* apply any previously-saved name/description/enabled state onto the rendered cards (on load) */
function applyAllSavedVisuals(){
  Object.keys(nodeState).forEach(id=>{
    if(!allSettings[id]) return;
    const s = getNodeSettings(id);
    const n = nodeState[id];
    n.title = s.name;
    n.desc = s.desc;
    const titleEl = n.el.querySelector('.title');
    if(titleEl) titleEl.textContent = s.name;
    const descEl = n.el.querySelector('.desc');
    if(descEl) descEl.textContent = s.desc;
    n.el.style.opacity = s.enabled ? '1' : '0.45';
  });
}
applyAllSavedVisuals();

function fieldHTML(f, value){
  const readonlyAttr = f.readonly ? ' readonly' : '';
  switch(f.type){
    case 'text':
      return `<div class="field"><label>${escapeHtml(f.label)}</label><input type="text" class="field-input" data-key="${f.key}" value="${escapeHtml(value)}"${readonlyAttr}></div>`;
    case 'number':
      return `<div class="field"><label>${escapeHtml(f.label)}</label><input type="number" class="field-input" data-key="${f.key}" value="${escapeHtml(value)}"${readonlyAttr}></div>`;
    case 'select':
      return `<div class="field"><label>${escapeHtml(f.label)}</label><select class="field-input" data-key="${f.key}"${f.readonly ? ' disabled' : ''}>${f.options.map(o=>`<option value="${escapeHtml(o)}" ${o===value?'selected':''}>${escapeHtml(o)}</option>`).join('')}</select></div>`;
    case 'toggle':
      return `<div class="field field-row"><label>${escapeHtml(f.label)}</label><label class="switch"><input type="checkbox" class="field-input" data-key="${f.key}" ${value?'checked':''} ${f.readonly ? 'disabled' : ''}><span class="slider"></span></label></div>`;
    case 'textarea':
      return `<div class="field"><label>${escapeHtml(f.label)}</label><textarea class="field-input" data-key="${f.key}" rows="3"${readonlyAttr}>${escapeHtml(value)}</textarea></div>`;
    case 'range':
      return `<div class="field"><label>${escapeHtml(f.label)}</label><div class="range-row"><input type="range" min="0" max="100" class="field-input range-input" data-key="${f.key}" value="${escapeHtml(value)}"${f.readonly ? ' disabled' : ''}><span class="range-val">${escapeHtml(value)}</span></div></div>`;
    default:
      return '';
  }
}

const panel = document.getElementById('propertiesPanel');
const propsToggleBtn = document.getElementById('propsToggleBtn');
const panelCloseBtn = document.getElementById('panelCloseBtn');
const panelBackdrop = document.getElementById('panelBackdrop');
const panelIcon = document.getElementById('panelIcon');
const panelName = document.getElementById('panelName');
const panelDesc = document.getElementById('panelDesc');
const panelBody = document.getElementById('panelBody');
const panelFooter = document.getElementById('panelFooter');
const workflowPage = document.getElementById('app');
const profilePage = document.getElementById('profilePage');

/* Registry of every page container the nav can switch to. Keys match each
   nav button's data-page attribute, so adding a page never requires new
   listeners — just add it here and give its container a matching data-page
   trigger. Missing containers are tolerated (guarded with `&&` below) so a
   page can be registered before its markup exists without breaking anything. */
const pageContainers = {
  workflow: workflowPage,
  profile: profilePage,
  dashboard: document.getElementById('dashboardPage'),
  applications: document.getElementById('applicationsPage'),
  analytics: document.getElementById('analyticsPage'),
};

let selectedNodeId = null;

function setActivePage(page){
  if(!pageContainers[page]) page = 'workflow';
  Object.keys(pageContainers).forEach(key=>{
    const el = pageContainers[key];
    if(!el) return;
    const isActive = key === page;
    el.classList.toggle('active', isActive);
    el.hidden = !isActive;
  });
  document.querySelectorAll('.topnav-link, .page-nav-btn, .mobile-nav-link').forEach(btn=>{
    btn.classList.toggle('active', btn.dataset.page === page);
  });
  toggleNotificationsPanel(false);
  /* Each page refreshes its own content when it becomes active. Every
     render function below is a plain hoisted function declaration and
     guards on its target elements existing, so calling them here is safe
     regardless of definition order in this file. */
  if(page === 'workflow') renderProfileNodeCard();
  if(page === 'dashboard') renderDashboard();
  if(page === 'applications') renderApplicationsTable();
  if(page === 'analytics') renderAnalytics();
}

/* Single delegated listener drives every nav trigger — the top navbar links
   AND the Properties-panel Workflow/Profile buttons — via their shared
   data-page attribute. No per-button listeners, no duplicated logic. */
document.addEventListener('click', (event)=>{
  const navBtn = event.target.closest('[data-page]');
  if(navBtn){ setActivePage(navBtn.dataset.page); closeMobileMenu(); return; }
  const actionBtn = event.target.closest('[data-action]');
  if(actionBtn){
    const action = actionBtn.dataset.action;
    if(action === 'run-demo-scan') runDemoScan();
    if(action === 'add-demo-job') addDemoJob();
    if(action === 'run-workflow') runWorkflow();
    if(action === 'pause-workflow') pauseWorkflow('manual');
    if(action === 'resume-workflow') { resumeWorkflow(); showToast('Workflow resumed.', 'success'); }
    if(action === 'stop-workflow') { stopWorkflow('manual'); showToast('Workflow stopped.', 'info'); }
    if(action === 'reset-demo-data') resetDemoData();
    return;
  }
  const openBtn = event.target.closest('.open-profile-btn');
  if(openBtn){ setActivePage('profile'); return; }
  const notificationToggle = event.target.closest('#notificationBellBtn');
  if(notificationToggle){ toggleNotificationsPanel(); return; }
  const mobileOpen = event.target.closest('#mobileMenuBtn');
  if(mobileOpen){ openMobileMenu(); return; }
  const mobileLink = event.target.closest('.mobile-nav-link');
  if(mobileLink){ setActivePage(mobileLink.dataset.page); closeMobileMenu(); return; }
  const mobileClose = event.target.closest('#mobileNavCloseBtn');
  if(mobileClose){ closeMobileMenu(); return; }
  const notificationItem = event.target.closest('.notification-item');
  if(notificationItem){ const id = Number(notificationItem.dataset.notificationId); if(id) markNotificationRead(id); return; }
});
/* NOTE: setActivePage('workflow') is invoked further below, after profileState/profileFields
   are initialized — calling it here would throw (profileState is used inside
   renderProfileNodeCard but declared later with `let`), which used to silently abort the rest
   of this script, including the Properties panel toggle listener at the bottom of the file. */

const PROFILE_STORAGE_KEY = 'ajaProfileData';
const profileFields = {
  firstName: document.getElementById('profileFirstName'),
  lastName: document.getElementById('profileLastName'),
  email: document.getElementById('profileEmail'),
  phone: document.getElementById('profilePhone'),
  location: document.getElementById('profileLocation'),
  linkedin: document.getElementById('profileLinkedin'),
  portfolio: document.getElementById('profilePortfolio'),
  jobTitle: document.getElementById('profileJobTitle'),
  skillsTags: document.getElementById('profileSkillsTags'),
  skillsInput: document.getElementById('profileSkillsInput'),
  experience: document.getElementById('profileExperience'),
  education: document.getElementById('profileEducation'),
  certifications: document.getElementById('profileCertifications'),
  roles: document.getElementById('profileRoles'),
  preferredLocations: document.getElementById('profilePreferredLocations'),
  remotePreference: document.getElementById('profileRemotePreference'),
  aiModel: document.getElementById('profileAiModel'),
  minMatchScore: document.getElementById('profileMinMatchScore'),
  minMatchScoreValue: document.getElementById('minMatchScoreValue'),
  dailyLimit: document.getElementById('profileDailyLimit'),
  autoCover: document.getElementById('profileAutoCover'),
  autoApply: document.getElementById('profileAutoApply'),
  smartMatch: document.getElementById('profileSmartMatch'),
  emailNotifications: document.getElementById('profileEmailNotifications'),
  resumeName: document.getElementById('resumeName'),
  resumeInfoText: document.getElementById('resumeInfoText'),
  resumeStatusBadge: document.getElementById('resumeStatusBadge'),
  resumeUploadedDate: document.getElementById('resumeUploadedDate'),
  profilePhotoPreview: document.getElementById('profilePhotoPreview'),
  profileLastUpdated: document.getElementById('profileLastUpdated'),
  resumeFileInput: document.getElementById('resumeFileInput'),
  photoFileInput: document.getElementById('photoFileInput')
};

function loadProfileState(){
  return appState.profile || {};
}

function saveProfileState(){
  saveAppState();
}

function formatBytes(bytes){
  if(bytes === undefined || bytes === null) return '';
  const units = ['B','KB','MB','GB'];
  let value = bytes;
  let index = 0;
  while(value >= 1024 && index < units.length - 1){
    value /= 1024;
    index++;
  }
  return `${value.toFixed(1)} ${units[index]}`;
}

function formatDateTime(iso){
  if(!iso) return '—';
  const date = new Date(iso);
  if(isNaN(date)) return '—';
  return date.toLocaleString(undefined, {year:'numeric',month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'});
}

function isValidEmail(email){
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function normalizeSkill(value){
  return String(value||'').trim();
}

function skillKey(value){
  return normalizeSkill(value).toLowerCase();
}

function hasSkillTag(value){
  const key = skillKey(value);
  return Array.from(profileFields.skillsTags.querySelectorAll('.tag-pill'))
    .some(tag => skillKey(tag.dataset.value) === key);
}

function addSkillTag(value){
  const skill = normalizeSkill(value);
  if(!skill || hasSkillTag(skill)) return false;
  profileFields.skillsTags.appendChild(createSkillTag(skill));
  return true;
}

function processPendingSkillInput(){
  const pending = profileFields.skillsInput.value.trim();
  if(!pending) return false;
  const added = addSkillTag(pending);
  if(added){
    profileFields.skillsInput.value = '';
  }
  return added;
}

function getSkillsFromTags(){
  return Array.from(profileFields.skillsTags.querySelectorAll('.tag-pill'))
    .map(tag=>normalizeSkill(tag.dataset.value))
    .filter(Boolean);
}

function createSkillTag(value){
  const skill = normalizeSkill(value);
  const tag = document.createElement('span');
  tag.className = 'tag-pill';
  tag.dataset.value = skill;
  tag.innerHTML = `${escapeHtml(skill)}<button type="button" aria-label="Remove skill">×</button>`;
  tag.querySelector('button').addEventListener('click', ()=>{
    tag.remove();
    autoSaveProfileData();
  });
  return tag;
}

function renderSkillTags(){
  profileFields.skillsTags.innerHTML = '';
  const rawSkills = Array.isArray(profileState.skills) ? profileState.skills : String(profileState.skills || '').split(',');
  const uniqueSkills = [];
  const seen = new Set();
  rawSkills.forEach(raw=>{
    const skill = normalizeSkill(raw);
    const key = skillKey(skill);
    if(!skill || seen.has(key)) return;
    seen.add(key);
    uniqueSkills.push(skill);
  });
  profileState.skills = uniqueSkills;
  uniqueSkills.forEach(skill=>profileFields.skillsTags.appendChild(createSkillTag(skill)));
}

function updateProfileWhenChanged(){
  profileState.lastUpdatedAt = new Date().toISOString();
  saveProfileState();
  renderProfileNodeCard();
  updateProfileHeader();
}

function updateProfileHeader(){
  profileFields.profileLastUpdated.textContent = `Last Updated: ${formatDateTime(profileState.lastUpdatedAt)}`;
}

function resumeTypeLabel(){
  const t = (profileState.resumeFileType || '').toLowerCase();
  if(t.includes('pdf')) return 'PDF Document';
  if(t.includes('word') || t.includes('docx') || t.includes('doc')) return 'DOCX Document';
  return profileState.resumeFileType || 'Document';
}

function updateResumeStatus(){
  const hasResume = !!(profileState.resumeUploaded && profileState.resumeDataUrl);

  profileFields.resumeStatusBadge.textContent = hasResume ? '✔ Resume Uploaded' : '⚠ No Resume Uploaded';
  profileFields.resumeStatusBadge.classList.toggle('profile-status-good', hasResume);
  profileFields.resumeStatusBadge.classList.toggle('profile-status-warning', !hasResume);

  profileFields.resumeName.textContent = hasResume ? (profileState.resumeFileName || 'Resume Document') : 'No Resume Uploaded';
  profileFields.resumeInfoText.textContent = hasResume ? `${resumeTypeLabel()} • ${formatBytes(profileState.resumeFileSize)}` : 'PDF and DOCX supported';
  profileFields.resumeUploadedDate.textContent = hasResume ? `Uploaded on ${formatDateTime(profileState.resumeUploadedAt)}` : '';
}

function renderProfileNodeCard(){
  const node = nodeState['n2'];
  if(!node) return;
  const hasResume = !!(profileState.resumeUploaded && profileState.resumeDataUrl);
  const skills = getSkillsFromTags().join(', ') || 'None';
  const exp = profileState.experience || 'N/A';
  const lastUpdated = profileState.lastUpdatedAt ? formatDateTime(profileState.lastUpdatedAt) : '—';
  const profileStatus = hasResume ? 'Profile Connected' : 'No Resume Uploaded';
  const resumeStatus = hasResume ? '✔ Resume Uploaded' : '⚠ No Resume Uploaded';
  const buttonLabel = hasResume ? 'Open Profile' : 'Upload Resume';
  node.descHtml = `
    <div class="desc-compact"><strong>${escapeHtml(profileStatus)}</strong></div>
    <div class="desc-compact">${escapeHtml(resumeStatus)}</div>
    <div class="desc-compact">Skills: ${escapeHtml(skills)}</div>
    <div class="desc-compact">Experience: ${escapeHtml(exp)}</div>
    <div class="desc-compact">Last Updated: ${escapeHtml(lastUpdated)}</div>
    <button class="open-profile-btn" type="button">${escapeHtml(buttonLabel)}</button>
  `;
  const descEl = node.el.querySelector('.desc');
  if(descEl){ descEl.innerHTML = node.descHtml; }
}

function populateProfileForm(){
  profileFields.firstName.value = profileState.firstName || '';
  profileFields.lastName.value = profileState.lastName || '';
  profileFields.email.value = profileState.email || '';
  profileFields.phone.value = profileState.phone || '';
  profileFields.location.value = profileState.location || '';
  profileFields.linkedin.value = profileState.linkedin || '';
  profileFields.portfolio.value = profileState.portfolio || '';
  profileFields.jobTitle.value = profileState.jobTitle || '';
  profileFields.experience.value = profileState.experience || '';
  profileFields.education.value = profileState.education || '';
  profileFields.certifications.value = profileState.certifications || '';
  profileFields.roles.value = profileState.roles || '';
  profileFields.preferredLocations.value = profileState.preferredLocations || '';
  profileFields.remotePreference.value = profileState.remotePreference || 'Remote Only';
  profileFields.aiModel.value = profileState.aiModel || 'GPT-4o';
  profileFields.minMatchScore.value = profileState.minMatchScore || 75;
  profileFields.minMatchScoreValue.textContent = profileFields.minMatchScore.value;
  profileFields.dailyLimit.value = profileState.dailyLimit || 30;
  profileFields.autoCover.checked = profileState.autoCover !== false;
  profileFields.autoApply.checked = profileState.autoApply !== false;
  profileFields.smartMatch.checked = profileState.smartMatch !== false;
  profileFields.emailNotifications.checked = profileState.emailNotifications !== false;
  profileFields.profilePhotoPreview.textContent = profileState.photoDataUrl ? '' : ((profileState.firstName || 'A').slice(0,1).toUpperCase() + (profileState.lastName || 'U').slice(0,1).toUpperCase());
  if(profileState.photoDataUrl){ profileFields.profilePhotoPreview.style.backgroundImage = `url(${profileState.photoDataUrl})`; profileFields.profilePhotoPreview.style.backgroundSize = 'cover'; profileFields.profilePhotoPreview.style.color = 'transparent'; }
  else { profileFields.profilePhotoPreview.style.backgroundImage = ''; profileFields.profilePhotoPreview.style.color = '#2563eb'; }
  renderSkillTags();
  updateResumeStatus();
  updateProfileHeader();
  renderProfileNodeCard();
}

function collectProfileState(){
  processPendingSkillInput();
  return {
    firstName: profileFields.firstName.value.trim(),
    lastName: profileFields.lastName.value.trim(),
    email: profileFields.email.value.trim(),
    phone: profileFields.phone.value.trim(),
    location: profileFields.location.value.trim(),
    linkedin: profileFields.linkedin.value.trim(),
    portfolio: profileFields.portfolio.value.trim(),
    jobTitle: profileFields.jobTitle.value.trim(),
    skills: getSkillsFromTags(),
    experience: profileFields.experience.value.trim(),
    education: profileFields.education.value.trim(),
    certifications: profileFields.certifications.value.trim(),
    roles: profileFields.roles.value.trim(),
    preferredLocations: profileFields.preferredLocations.value.trim(),
    remotePreference: profileFields.remotePreference.value,
    aiModel: profileFields.aiModel.value,
    minMatchScore: Number(profileFields.minMatchScore.value),
    dailyLimit: Number(profileFields.dailyLimit.value),
    autoCover: profileFields.autoCover.checked,
    autoApply: profileFields.autoApply.checked,
    smartMatch: profileFields.smartMatch.checked,
    emailNotifications: profileFields.emailNotifications.checked,
    resumeUploaded: !!profileState.resumeUploaded,
    resumeFileName: profileState.resumeFileName || '',
    resumeFileType: profileState.resumeFileType || '',
    resumeFileSize: profileState.resumeFileSize || 0,
    resumeUploadedAt: profileState.resumeUploadedAt || '',
    resumeDataUrl: profileState.resumeDataUrl || '',
    photoDataUrl: profileState.photoDataUrl || profileFields.profilePhotoPreview.style.backgroundImage || '',
    lastUpdatedAt: profileState.lastUpdatedAt || new Date().toISOString()
  };
}

function saveProfileData(event){
  const saveBtn = event && event.currentTarget ? event.currentTarget : document.getElementById('saveProfileBtnBottom') || document.getElementById('saveProfileBtn');
  processPendingSkillInput();
  const nextProfileState = collectProfileState();
  if(!nextProfileState.firstName){
    showToast('First Name is required.', 'error');
    return;
  }
  if(nextProfileState.email && !isValidEmail(nextProfileState.email)){
    showToast('Please enter a valid email address.', 'error');
    return;
  }
  if(Number.isNaN(nextProfileState.minMatchScore) || nextProfileState.minMatchScore < 0 || nextProfileState.minMatchScore > 100){
    showToast('Minimum Match Score must be between 0 and 100.', 'error');
    return;
  }
  if(Number.isNaN(nextProfileState.dailyLimit) || nextProfileState.dailyLimit < 1){
    showToast('Daily Application Limit must be at least 1.', 'error');
    return;
  }

  profileState = nextProfileState;
  profileState.lastUpdatedAt = new Date().toISOString();

  if(!allSettings.n2) allSettings.n2 = { fields: {} };
  allSettings.n2.fields = {
    ...(allSettings.n2.fields || {}),
    resume: profileState.resumeFileName || '',
    skills: Array.isArray(profileState.skills) ? profileState.skills.join(', ') : String(profileState.skills || '').trim(),
    experience: profileState.experience || '',
    preferredRoles: profileState.roles || '',
    preferredLocations: profileState.preferredLocations || '',
    resumeUploaded: profileState.resumeUploaded ? 'Yes' : 'No',
    lastUpdatedAt: profileState.lastUpdatedAt ? formatDateTime(profileState.lastUpdatedAt) : ''
  };

  saveProfileState();
  populateProfileForm();
  updateTopNavUser();
  renderProfileNodeCard();
  if(selectedNodeId === 'n2') renderPanelContent('n2');
  showToast('Profile saved successfully', 'success');
  if(saveBtn){ flashButton(saveBtn, 'Saved ✓'); }
}

function autoSaveProfileData(){
  profileState = collectProfileState();
  profileState.lastUpdatedAt = new Date().toISOString();
  saveProfileState();
  updateResumeStatus();
  updateProfileHeader();
  updateTopNavUser();
  renderProfileNodeCard();
}

function handleResumeSelection(event){
  const file = event.target.files && event.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = ()=>{
    profileState.resumeUploaded = true;
    profileState.resumeFileName = file.name;
    profileState.resumeFileType = file.type || 'PDF';
    profileState.resumeFileSize = file.size;
    profileState.resumeUploadedAt = new Date().toISOString();
    profileState.resumeDataUrl = reader.result;
    profileState.lastUpdatedAt = new Date().toISOString();
    saveProfileState();
    updateResumeStatus();
    updateProfileHeader();
    renderProfileNodeCard();
  };
  reader.readAsDataURL(file);
}

function handlePhotoSelection(event){
  const file = event.target.files && event.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = ()=>{
    profileState.photoDataUrl = reader.result;
    profileState.lastUpdatedAt = new Date().toISOString();
    saveProfileState();
    populateProfileForm();
  };
  reader.readAsDataURL(file);
}

function downloadResume(){
  if(!profileState.resumeUploaded || !profileState.resumeDataUrl){
    updateResumeStatus();
    return;
  }
  const link = document.createElement('a');
  link.href = profileState.resumeDataUrl;
  link.download = profileState.resumeFileName || 'resume';
  link.click();
}

function deleteResume(){
  profileState.resumeUploaded = false;
  profileState.resumeFileName = '';
  profileState.resumeFileType = '';
  profileState.resumeFileSize = 0;
  profileState.resumeUploadedAt = '';
  profileState.resumeDataUrl = '';
  profileState.lastUpdatedAt = new Date().toISOString();
  saveProfileState();
  updateResumeStatus();
  updateProfileHeader();
  renderProfileNodeCard();
}

profileState = loadProfileState();
populateProfileForm();
setActivePage('workflow');

profileFields.resumeFileInput.addEventListener('change', handleResumeSelection);
profileFields.photoFileInput.addEventListener('change', handlePhotoSelection);
document.getElementById('uploadResumeBtn').addEventListener('click', ()=>profileFields.resumeFileInput.click());
document.getElementById('replaceResumeBtn').addEventListener('click', ()=>profileFields.resumeFileInput.click());
document.getElementById('downloadResumeBtn').addEventListener('click', downloadResume);
document.getElementById('deleteResumeBtn').addEventListener('click', deleteResume);
document.getElementById('changePhotoBtn').addEventListener('click', ()=>profileFields.photoFileInput.click());
const profileSaveButtons = [
  document.getElementById('saveProfileBtn'),
  document.getElementById('saveProfileBtnBottom')
].filter(Boolean);
profileSaveButtons.forEach(btn => btn.addEventListener('click', saveProfileData));

profileFields.skillsInput.addEventListener('keydown', (e)=>{
  if(e.key !== 'Enter') return;
  e.preventDefault();
  if(processPendingSkillInput()){
    autoSaveProfileData();
  }
});

/* click-to-open-profile from the workflow "Load Profile and Resume" card is
   handled by the single delegated listener defined earlier alongside setActivePage. */

function openPanel(){
  panel.classList.add('open');
  document.body.classList.add('panel-open');
  propsToggleBtn.textContent = '✕';
  propsToggleBtn.classList.add('active');
  propsToggleBtn.title = 'Close Properties Panel';
}
function closePanel(){
  panel.classList.remove('open');
  document.body.classList.remove('panel-open');
  propsToggleBtn.textContent = '☰';
  propsToggleBtn.classList.remove('active');
  propsToggleBtn.title = 'Toggle Properties Panel';
  if(selectedNodeId && nodeState[selectedNodeId]){
    nodeState[selectedNodeId].el.classList.remove('selected');
  }
  selectedNodeId = null;
  showEmptyState();
}
function showEmptyState(){
  panelIcon.innerHTML = '';
  panelIcon.style.background = 'rgba(148,163,184,0.14)';
  panelName.textContent = 'No card selected';
  panelDesc.textContent = 'Click a workflow card to view and edit its settings.';
  panelFooter.style.display = 'none';
  panelBody.innerHTML = `
    <div class="panel-empty">
      <div class="panel-empty-icon">🗂️</div>
      <p>Select a card on the canvas to configure it here.</p>
    </div>`;
}

function selectNode(id){
  const n = nodeState[id];
  if(!n) return;
  if(selectedNodeId && nodeState[selectedNodeId]){
    nodeState[selectedNodeId].el.classList.remove('selected');
  }
  selectedNodeId = id;
  n.el.classList.add('selected');
  renderPanelContent(id);
  openPanel();
}

function renderPanelContent(id){
  const n = nodeState[id];
  const s = getNodeSettings(id);
  const cfg = fieldConfigs[id] || [];

  panelIcon.style.background = n.tone ? '' : 'rgba(124,58,237,0.10)';
  panelIcon.style.color = n.color || '#7c3aed';
  panelIcon.innerHTML = iconSvg(n.icon);
  panelName.textContent = s.name;
  panelDesc.textContent = s.desc || 'Configure this workflow step.';
  panelFooter.style.display = 'flex';

  panelBody.innerHTML = `
    <div class="panel-section">
      <div class="section-title">Basic Settings</div>
      <div class="field">
        <label>Name</label>
        <input type="text" id="fldName" class="field-input" value="${escapeHtml(s.name)}">
      </div>
      <div class="field">
        <label>Description</label>
        <textarea id="fldDesc" class="field-input" rows="3">${escapeHtml(s.desc)}</textarea>
      </div>
      <div class="field">
        <label>Status</label>
        <select id="fldStatus" class="field-input">
          <option value="Active" ${s.status==='Active'?'selected':''}>Active</option>
          <option value="Inactive" ${s.status==='Inactive'?'selected':''}>Inactive</option>
          <option value="Draft" ${s.status==='Draft'?'selected':''}>Draft</option>
        </select>
      </div>
      <div class="field field-row">
        <label>Enable Step</label>
        <label class="switch"><input type="checkbox" id="fldEnabled" ${s.enabled?'checked':''}><span class="slider"></span></label>
      </div>
    </div>
    ${cfg.length ? `
    <div class="panel-section">
      <div class="section-title">${escapeHtml(panelSectionTitle(id))}</div>
      ${cfg.map(f=>fieldHTML(f, s.fields[f.key])).join('')}
    </div>` : ''}
  `;

  panelBody.querySelectorAll('.range-input').forEach(r=>{
    r.addEventListener('input', ()=>{ r.nextElementSibling.textContent = r.value; });
  });
}

function flashButton(btn, text){
  const original = btn.textContent;
  btn.textContent = text;
  btn.disabled = true;
  setTimeout(()=>{ btn.textContent = original; btn.disabled = false; }, 1100);
}

document.getElementById('panelSave').addEventListener('click', ()=>{
  if(!selectedNodeId) return;
  const id = selectedNodeId;
  const n = nodeState[id];
  const cfg = fieldConfigs[id] || [];

  const nameVal = document.getElementById('fldName').value.trim() || originalNodeData[id].title;
  const descVal = document.getElementById('fldDesc').value;
  const statusVal = document.getElementById('fldStatus').value;
  const enabledVal = document.getElementById('fldEnabled').checked;

  const fields = {};
  cfg.forEach(f=>{
    const inputEl = panelBody.querySelector(`[data-key="${f.key}"]`);
    if(!inputEl) return;
    if(f.type==='toggle') fields[f.key] = inputEl.checked;
    else if(f.type==='number' || f.type==='range') fields[f.key] = Number(inputEl.value);
    else fields[f.key] = inputEl.value;
  });

  allSettings[id] = { status: statusVal, enabled: enabledVal, name: nameVal, desc: descVal, fields };
  persistSettings();

  // reflect changes on the live card
  n.title = nameVal;
  n.desc = descVal;
  const titleEl = n.el.querySelector('.title');
  if(titleEl) titleEl.textContent = nameVal;
  const descEl = n.el.querySelector('.desc');
  if(descEl) descEl.textContent = descVal;
  n.el.style.opacity = enabledVal ? '1' : '0.45';

  panelName.textContent = nameVal;
  panelDesc.textContent = descVal || 'Configure this workflow step.';

  flashButton(document.getElementById('panelSave'), 'Saved ✓');
});

document.getElementById('panelDelete').addEventListener('click', ()=>{
  if(!selectedNodeId) return;
  const id = selectedNodeId;
  const n = nodeState[id];
  delete allSettings[id];
  persistSettings();

  const orig = originalNodeData[id];
  n.title = orig.title;
  n.desc = orig.desc;
  const titleEl = n.el.querySelector('.title');
  if(titleEl) titleEl.textContent = orig.title;
  const descEl = n.el.querySelector('.desc');
  if(descEl) descEl.textContent = orig.desc;
  n.el.style.opacity = '1';

  renderPanelContent(id);
  flashButton(document.getElementById('panelDelete'), 'Reset ✓');
});

propsToggleBtn.addEventListener('click', ()=>{
  if(panel.classList.contains('open')) closePanel();
  else {
    openPanel();
    if(!selectedNodeId) showEmptyState();
  }
});
panelCloseBtn.addEventListener('click', closePanel);
panelBackdrop.addEventListener('click', closePanel); // backdrop only visible/active on small screens
panel.addEventListener('pointerdown', (e)=> e.stopPropagation()); // never let clicks inside the panel bubble to canvas/viewport

/* =====================================================================
   DASHBOARD / APPLICATIONS / ANALYTICS
   One sample data array powers all three pages. Swap this array (or feed
   it from a backend response) and every stat/table/chart below recalculates
   automatically — nothing else needs to change.
   ===================================================================== */
const STATUS_META = {
  'Success':            {cls:'status-success',  icon:'✔'},
  'Pending Review':     {cls:'status-pending',  icon:'⏳'},
  'Manual Action Needed':{cls:'status-pending',  icon:'⚠'},
  'Temporary Failure':  {cls:'status-tempfail',  icon:'⏱'},
  'Permanent Failure':  {cls:'status-permfail',  icon:'✕'},
  'Skipped':            {cls:'status-neutral',  icon:'⏭'},
};
const STATUS_ORDER = ['Success','Pending Review','Manual Action Needed','Temporary Failure','Permanent Failure','Skipped'];

function formatSampleDate(dateStr){
  const d = new Date(dateStr+'T00:00:00');
  if(isNaN(d)) return dateStr;
  return d.toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'});
}

function daysSince(dateStr){
  const d = new Date(dateStr+'T00:00:00');
  return (Date.now() - d.getTime()) / (1000*60*60*24);
}

function computeDashboardStats(){
  const jobs = (appState.jobs || []).map(job=>normalizeApplicationRecord(job, job));
  const applications = (sampleApplications || []).map(app=>normalizeApplicationRecord(app));
  const matchedJobsCount = jobs.filter(j=>Boolean(j.matched)).length;
  const trackedStatuses = ['Success','Pending Review','Manual Action Needed','Temporary Failure','Permanent Failure'];
  return {
    jobsFound: jobs.length,
    jobsMatched: Math.min(matchedJobsCount, jobs.length),
    applicationsSent: applications.filter(a=>trackedStatuses.includes(a.status)).length,
    pendingReviews: applications.filter(a=>['Pending Review','Manual Action Needed'].includes(a.status)).length,
    successful: applications.filter(a=>a.status==='Success').length,
    failed: applications.filter(a=>a.status==='Temporary Failure' || a.status==='Permanent Failure').length,
  };
}

function buildStatusBarsHtml(){
  const applications = (sampleApplications || []).map(app=>normalizeApplicationRecord(app));
  if(applications.length === 0) return '<div class="bar-row"><div class="bar-label">No data</div><div class="bar-track"><div class="bar-fill" style="width:0%"></div></div><div class="bar-value">0 (0%)</div></div>';
  const total = applications.length;
  return STATUS_ORDER.map(status=>{
    const count = applications.filter(a=>a.status===status).length;
    const pct = total ? Math.round((count/total)*100) : 0;
    const meta = STATUS_META[status];
    return `<div class="bar-row">
      <div class="bar-label">${escapeHtml(status)}</div>
      <div class="bar-track"><div class="bar-fill ${meta.cls}" style="width:${pct}%"></div></div>
      <div class="bar-value">${count} (${pct}%)</div>
    </div>`;
  }).join('');
}

function buildSourceBarsHtml(){
  const applications = (sampleApplications || []).map(app=>normalizeApplicationRecord(app));
  if(applications.length === 0) return '<div class="bar-row"><div class="bar-label">No data</div><div class="bar-track"><div class="bar-fill" style="width:0%"></div></div><div class="bar-value">0 (0%)</div></div>';
  const total = applications.length;
  const sources = [...new Set(applications.map(a=>a.source))];
  return sources.map(source=>{
    const count = applications.filter(a=>a.source===source).length;
    const pct = total ? Math.round((count/total)*100) : 0;
    return `<div class="bar-row">
      <div class="bar-label">${escapeHtml(source)}</div>
      <div class="bar-track"><div class="bar-fill bar-fill-neutral" style="width:${pct}%"></div></div>
      <div class="bar-value">${count} (${pct}%)</div>
    </div>`;
  }).join('');
}

function renderDashboard(){
  const grid = document.getElementById('dashStatsGrid');
  if(!grid) return;
  const stats = computeDashboardStats();
  const cards = [
    {label:'Jobs Found',               value:stats.jobsFound,       icon:'📄', color:'#334155'},
    {label:'Jobs Matched',             value:stats.jobsMatched,     icon:'🎯', color:'#7c3aed'},
    {label:'Applications Sent',        value:stats.applicationsSent,icon:'📤', color:'#2563eb'},
    {label:'Pending Review',          value:stats.pendingReviews,  icon:'⏳', color:'#ea580c'},
    {label:'Successful Applications', value:stats.successful,      icon:'✅', color:'#16a34a'},
    {label:'Failed Applications',     value:stats.failed,          icon:'❌', color:'#dc2626'},
  ];
  grid.innerHTML = cards.map(c=>`
    <div class="dash-card">
      <div class="dash-card-icon" style="background:${c.color}1a;color:${c.color}">${c.icon}</div>
      <div class="dash-card-value">${c.value}</div>
      <div class="dash-card-label">${escapeHtml(c.label)}</div>
    </div>
  `).join('');

  const activityList = document.getElementById('dashActivityList');
  if(activityList){
    const recent = (sampleApplications || []).map(app=>normalizeApplicationRecord(app)).sort((a,b)=> new Date(b.dateTime || b.date)-new Date(a.dateTime || a.date)).slice(0,6);
    activityList.innerHTML = recent.length ? recent.map(a=>{
      const meta = STATUS_META[a.status] || {cls:'',icon:''};
      return `<div class="activity-item">
        <div class="activity-icon ${meta.cls}">${meta.icon}</div>
        <div class="activity-body">
          <div class="activity-title">${escapeHtml(a.jobTitle || 'Job Opportunity')} — ${escapeHtml(a.company || 'Unknown Company')}</div>
          <div class="activity-meta">${escapeHtml(a.status || 'Pending Review')} • ${escapeHtml(formatSampleDate(a.date) || 'Pending')} • ${escapeHtml(a.time || 'Time pending')}</div>
        </div>
      </div>`;
    }).join('') : '<div class="apps-empty">No recent activity yet.</div>';
  }

  const statusBarsEl = document.getElementById('dashStatusBars');
  if(statusBarsEl) statusBarsEl.innerHTML = buildStatusBarsHtml();

  const updatedEl = document.getElementById('dashUpdated');
  if(updatedEl){
    updatedEl.textContent = 'Updated ' + new Date().toLocaleString(undefined,{month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'});
  }
}

function renderApplicationsTable(){
  const tbody = document.getElementById('appsTableBody');
  if(!tbody) return;
  const searchEl = document.getElementById('appsSearchInput');
  const filterEl = document.getElementById('appsStatusFilter');
  const emptyState = document.getElementById('appsEmptyState');

  const query = (searchEl && searchEl.value || '').trim().toLowerCase();
  const statusFilter = (filterEl && filterEl.value) || 'All';
  const sourceFilter = (appsSourceFilterEl && appsSourceFilterEl.value) || 'All';
  const sortBy = (appsSortByEl && appsSortByEl.value) || 'date';
  const sortOrder = (appsSortOrderEl && appsSortOrderEl.value) || 'desc';

  const normalizedApplications = (sampleApplications || []).map(app=>normalizeApplicationRecord(app));
  const filtered = normalizedApplications.filter(a=>{
    const matchesQuery = !query || String(a.jobTitle || '').toLowerCase().includes(query) || String(a.company || '').toLowerCase().includes(query);
    const matchesStatus = statusFilter === 'All' || a.status === statusFilter;
    const matchesSource = sourceFilter === 'All' || a.source === sourceFilter;
    return matchesQuery && matchesStatus && matchesSource;
  }).sort((a,b)=>{
    let left = a[sortBy];
    let right = b[sortBy];
    if(sortBy === 'date'){
      left = new Date(left); right = new Date(right);
    }
    if(left < right) return sortOrder === 'asc' ? -1 : 1;
    if(left > right) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  tbody.innerHTML = filtered.map(a=>{
    const meta = STATUS_META[a.status] || {cls:'',icon:''};
    const reviewButtons = a.status === 'Pending Review' ? `
      <button type="button" class="apps-action-btn" data-action="approve-application" data-app-id="${a.id}">Approve</button>
      <button type="button" class="apps-action-btn" data-action="reject-application" data-app-id="${a.id}">Reject</button>
    ` : '';
    return `<tr>
      <td data-label="Job Title">${escapeHtml(a.jobTitle)}</td>
      <td data-label="Company">${escapeHtml(a.company)}</td>
      <td data-label="Match Score"><span class="match-score-pill">${a.matchScore}%</span></td>
      <td data-label="Date">${escapeHtml(`${formatSampleDate(a.date)} • ${a.time}`)}</td>
      <td data-label="Status"><span class="status-badge ${meta.cls}">${meta.icon} ${escapeHtml(a.status)}</span></td>
      <td data-label="Action">
        <button type="button" class="apps-action-btn" data-app-id="${a.id}">View</button>
        ${reviewButtons}
      </td>
    </tr>`;
  }).join('');

  if(emptyState){
    if(sampleApplications.length === 0){
      emptyState.textContent = 'No applications yet. Applications will appear here after you submit a job application.';
    } else {
      emptyState.textContent = 'No applications match your search or filter.';
    }
    emptyState.hidden = filtered.length !== 0;
  }
}

function renderAnalytics(){
  const grid = document.getElementById('analyticsStatsGrid');
  if(!grid) return;
  const applications = (sampleApplications || []).map(app=>normalizeApplicationRecord(app));
  const total = applications.length;
  const successCount = applications.filter(a=>a.status==='Success').length;
  const successRate = total ? Math.round((successCount/total)*100) : 0;
  const avgMatch = total ? Math.round(applications.reduce((sum,a)=>sum+a.matchScore,0)/total) : 0;
  const thisWeek = applications.filter(a=>daysSince(a.date) <= 7).length;

  const cards = [
    {label:'Total Applications',        value:total,          icon:'📤', color:'#2563eb'},
    {label:'Success Rate',              value:successRate+'%', icon:'✅', color:'#16a34a'},
    {label:'Avg Match Score',           value:avgMatch+'%',    icon:'🎯', color:'#7c3aed'},
    {label:'Applications This Week',    value:thisWeek,        icon:'📅', color:'#ea580c'},
  ];
  grid.innerHTML = cards.map(c=>`
    <div class="dash-card">
      <div class="dash-card-icon" style="background:${c.color}1a;color:${c.color}">${c.icon}</div>
      <div class="dash-card-value">${c.value}</div>
      <div class="dash-card-label">${escapeHtml(c.label)}</div>
    </div>
  `).join('');

  const statusBarsEl = document.getElementById('analyticsStatusBars');
  if(statusBarsEl) statusBarsEl.innerHTML = buildStatusBarsHtml();

  const sourceBarsEl = document.getElementById('analyticsSourceBars');
  if(sourceBarsEl) sourceBarsEl.innerHTML = buildSourceBarsHtml();

  const summaryEl = document.getElementById('analyticsSummaryText');
  if(summaryEl){
    if(total === 0){
      summaryEl.textContent = 'Analytics will appear after application activity is recorded.';
    } else {
      summaryEl.textContent = `In the current dataset, ${total} applications were sent with a ${successRate}% success rate and an average match score of ${avgMatch}%. ${thisWeek} application${thisWeek===1?'':'s'} went out in the last 7 days.`;
    }
  }
}

/* live search + status filter for the Applications table */
const appsSearchInputEl = document.getElementById('appsSearchInput');
const appsStatusFilterEl = document.getElementById('appsStatusFilter');
const appsSourceFilterEl = document.getElementById('appsSourceFilter');
const appsSortByEl = document.getElementById('appsSortBy');
const appsSortOrderEl = document.getElementById('appsSortOrder');
const appsLoadMoreBtnEl = document.getElementById('appsLoadMoreBtn');
if(appsSearchInputEl) appsSearchInputEl.addEventListener('input', renderApplicationsTable);
if(appsStatusFilterEl) appsStatusFilterEl.addEventListener('change', renderApplicationsTable);
if(appsSourceFilterEl) appsSourceFilterEl.addEventListener('change', renderApplicationsTable);
if(appsSortByEl) appsSortByEl.addEventListener('change', renderApplicationsTable);
if(appsSortOrderEl) appsSortOrderEl.addEventListener('change', renderApplicationsTable);
if(appsLoadMoreBtnEl) appsLoadMoreBtnEl.addEventListener('click', loadMoreApplications);

/* single delegated listener for the "View" action button in the applications table */
const appsTableBodyEl = document.getElementById('appsTableBody');
if(appsTableBodyEl){
  appsTableBodyEl.addEventListener('click', async (e)=>{
    const approveBtn = e.target.closest('[data-action="approve-application"]');
    if(approveBtn){
      const id = Number(approveBtn.dataset.appId);
      const app = normalizeApplicationRecord(sampleApplications.find(a=>a.id===id));
      if(app && app.status === 'Pending Review'){
        app.notes = 'Approved for submission.';
        saveAppState();
        renderApplicationsTable();
        renderDashboard();
        renderAnalytics();
        addActivity(`Application approved for ${app.jobTitle} at ${app.company}.`);
        addNotification('Application Approved', `${app.jobTitle} at ${app.company} is now being processed.`);
        renderNotifications();
        const result = await resumeApprovalWorkflow(app, 'approve');
        if(result === 'success'){
          showToast('Application submitted successfully.', 'success');
        } else if(result === 'temporary_failure'){
          showToast('Submission temporarily failed. It can be retried.', 'warning');
        } else if(result === 'permanent_failure'){
          showToast('Submission permanently failed.', 'error');
        } else if(result === 'manual_action_needed'){
          showToast('Submission requires manual action before completion.', 'warning');
        }
      }
      return;
    }
    const rejectBtn = e.target.closest('[data-action="reject-application"]');
    if(rejectBtn){
      const id = Number(rejectBtn.dataset.appId);
      const app = normalizeApplicationRecord(sampleApplications.find(a=>a.id===id));
      if(app && app.status === 'Pending Review'){
        const job = getWorkflowJobForApp(app);
        if(job){
          persistApplication(job, 'Skipped', {skipReason:'Rejected by user', failureReason:'Rejected manually and skipped.', notes:'Rejected manually and skipped.', manualReviewRequired:false});
          const queueEntry = findQueueEntryByJobId(job.id);
          if(queueEntry) queueEntry.status = 'completed';
          workflowState.currentStatus = 'processing';
          saveAppState();
          renderApplicationsTable();
          renderDashboard();
          renderAnalytics();
          addActivity(`Application rejected for ${app.jobTitle} at ${app.company}.`);
          addNotification('Application Rejected', `${app.jobTitle} at ${app.company} was rejected and skipped.`);
          renderNotifications();
          showToast('Application rejected and skipped.', 'info');
          workflowPauseContext = null;
          await processRemainingWorkflowQueue(job.id);
        } else {
          app.notes = 'Rejected manually and skipped.';
          persistApplication(app, 'Skipped', {skipReason:'Rejected by user', failureReason:'Rejected manually and skipped.', notes:'Rejected manually and skipped.', manualReviewRequired:false});
          renderApplicationsTable();
          renderDashboard();
          renderAnalytics();
          addActivity(`Application rejected for ${app.jobTitle} at ${app.company}.`);
          addNotification('Application Rejected', `${app.jobTitle} at ${app.company} was rejected and skipped.`);
          renderNotifications();
          showToast('Application rejected and skipped.', 'info');
        }
      }
      return;
    }
    const btn = e.target.closest('.apps-action-btn');
    if(!btn) return;
    const id = Number(btn.dataset.appId);
    const app = normalizeApplicationRecord(sampleApplications.find(a=>a.id===id));
    if(!app) return;
    openModal(`${app.jobTitle} at ${app.company}`, `
      <p><strong>Match Score:</strong> ${app.matchScore}%</p>
      <p><strong>Status:</strong> ${escapeHtml(app.status)}</p>
      <p><strong>Date:</strong> ${escapeHtml(`${formatSampleDate(app.date)} • ${app.time}`)}</p>
      <p><strong>Source:</strong> ${escapeHtml(app.source)}</p>
      <p><strong>Location:</strong> ${escapeHtml(app.location)}</p>
      <p><strong>Employment Type:</strong> ${escapeHtml(app.employmentType)}</p>
      <p><strong>Experience Level:</strong> ${escapeHtml(app.experienceLevel)}</p>
      <p><strong>Apply URL:</strong> <a href="${escapeHtml(app.applyUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(app.applyUrl)}</a></p>
      ${app.coverLetter ? `<p><strong>Cover Letter:</strong><br>${escapeHtml(app.coverLetter)}</p>` : ''}
    `);
  });
}

if(document.getElementById('markAllReadBtn')) document.getElementById('markAllReadBtn').addEventListener('click', markAllNotificationsRead);
if(document.getElementById('clearNotificationsBtn')) document.getElementById('clearNotificationsBtn').addEventListener('click', clearNotifications);
if(document.getElementById('mobileMenuBtn')) document.getElementById('mobileMenuBtn').addEventListener('click', openMobileMenu);
if(document.getElementById('mobileNavCloseBtn')) document.getElementById('mobileNavCloseBtn').addEventListener('click', closeMobileMenu);
if(document.getElementById('mobileNavBackdrop')) document.getElementById('mobileNavBackdrop').addEventListener('click', closeMobileMenu);
const modalCloseBtn = document.getElementById('modalCloseBtn');
if(modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
const modalCloseBtn2 = document.getElementById('modalCloseBtn2');
if(modalCloseBtn2) modalCloseBtn2.addEventListener('click', closeModal);
const modalBackdrop = document.getElementById('modalBackdrop');
if(modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

window.addEventListener('keydown', (event)=>{
  if(event.key === 'Escape'){
    closeModal();
    closeMobileMenu();
    toggleNotificationsPanel(false);
  }
});

/* initial render so Dashboard/Applications/Analytics have content the
   first time they're opened, even before their nav button is clicked */
renderDashboard();
renderApplicationsTable();
renderAnalytics();
renderNotifications();
updateNotificationBadge();
updateTopNavUser();
