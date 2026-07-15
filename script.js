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

let dragTarget=null, dragStart=null, nodeStart=null;
canvas.addEventListener('pointerdown', (e)=>{
  if(!dragModeOn) return; // let it fall through to viewport panning
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

/* ---------------- pan & zoom viewport ---------------- */
const view = {scale:0.62, tx:40, ty:20};
function applyView(){
  canvas.style.transform = `translate(${view.tx}px, ${view.ty}px) scale(${view.scale})`;
  document.getElementById('zoomlvl').textContent = Math.round(view.scale*100)+'%';
}
applyView();

let panning=false, panStart=null, viewStart=null;
viewport.addEventListener('pointerdown', (e)=>{
  if(dragModeOn && e.target.closest('.node,.diamond')) return;
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
