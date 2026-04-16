// ══════════════════════════════════════════════════════════════
//  COMMUNITY DATA
// ══════════════════════════════════════════════════════════════

const COMMUNITIES = [
  {
    id: 'rwanda',
    name: 'Bugesera District, Rwanda',
    coords: [-2.15, 30.14],
    population: '350,000 people',
    context: 'Farming community. One clinic, twelve schools. 8% internet access.',
    quote_joy:   '"My daughter passed her exams using resources she never had before." — Uwase, teacher',
    quote_anger: '"We traded one master for another. At least the colonialists built roads we still use." — Community elder',
    quote_grief: '"The clinic is still dark. A mother died in transfer last month." — Health worker',
  },
  {
    id: 'kenya',
    name: 'Turkana County, Kenya',
    coords: [3.12, 35.59],
    population: '926,000 people',
    context: 'Remote nomadic communities. Lowest internet penetration in Kenya.',
    quote_joy:   '"For the first time, our children learn from teachers in the capital without leaving home." — School principal',
    quote_anger: '"Who governs our connection? Not our parliament. Not our courts. One man, in California." — Journalist',
    quote_grief: '"Another election. Another connectivity promise. Another year of nothing." — Community elder',
  },
  {
    id: 'nigeria',
    name: 'Borno State, Nigeria',
    coords: [11.85, 13.15],
    population: '5.8 million people',
    context: 'Conflict-affected. Displacement camps. 14% internet access.',
    quote_joy:   '"Displaced families can contact relatives. This is not internet — it is hope." — UNHCR field worker',
    quote_anger: '"Our most vulnerable people\'s data is on US servers under US law. No one told them." — Researcher',
    quote_grief: '"We protected our sovereignty. The displaced families are still cut off from the world." — NGO director',
  },
  {
    id: 'mozambique',
    name: 'Cabo Delgado, Mozambique',
    coords: [-12.33, 40.56],
    population: '2.3 million people',
    context: 'Insurgency-affected. Humanitarian crisis. Almost no telecommunications infrastructure.',
    quote_joy:   '"Aid workers can coordinate in real time. Lives are being saved this week that were not last year." — Aid coordinator',
    quote_anger: '"SpaceX can disconnect this province whenever they decide. They owe us no explanation." — Communications minister',
    quote_grief: '"Aid coordination collapsed without connectivity. We could not track the crisis." — Field coordinator',
  },
  {
    id: 'brazil',
    name: 'Amazon Basin, Brazil',
    coords: [-3.47, -62.21],
    population: '1.1 million indigenous people',
    context: 'Remote indigenous communities. Historically excluded from all digital infrastructure.',
    quote_joy:   '"Our elders\' languages are being documented for the first time. We are visible to the world." — Indigenous leader',
    quote_anger: '"Our knowledge — our maps, our languages — now flows through a private American corporation." — Rights lawyer',
    quote_grief: '"The government refused foreign control. Our communities remained invisible." — Activist',
  },
  {
    id: 'myanmar',
    name: 'Shan State, Myanmar',
    coords: [21.14, 97.04],
    population: '5.8 million people',
    context: 'Active conflict zone. Military internet blackouts common.',
    quote_joy:   '"We could communicate without the military monitoring every word. It changed everything." — Journalist',
    quote_anger: '"Musk cut Starlink in Ukraine when it suited him. If he disagrees with us, he can cut us too." — Activist',
    quote_grief: '"At least Starlink was harder for the military to switch off. Our choice gave them that power back." — Reporter',
  },
];

const SPACEX = [34.05, -118.25]; // SpaceX HQ, California

// ══════════════════════════════════════════════════════════════
//  MAP STATE
// ══════════════════════════════════════════════════════════════

let map = null;
const markerRefs = {};
let flowLines = [];
let flowAnimRunning = false;
let flowDashOffset = 0;

const MARKER = {
  excluded: { fillColor:'#e8a04a', color:'#c8843a', fillOpacity:.55, radius:9,  weight:2, opacity:.9 },
  joy:      { fillColor:'#34d27b', color:'#27ae60', fillOpacity:.75, radius:11, weight:2, opacity:1  },
  angry:    { fillColor:'#e84040', color:'#c0392b', fillOpacity:.75, radius:11, weight:2, opacity:1  },
  grief:    { fillColor:'#6b7280', color:'#555d6b', fillOpacity:.40, radius:8,  weight:1, opacity:.7 },
};

// ══════════════════════════════════════════════════════════════
//  TIMER / INTERVAL REFS
// ══════════════════════════════════════════════════════════════

let timerInterval  = null;
let timerSeconds   = 8;
let quoteInterval  = null;
let quoteIndex     = 0;
let crimeaAutoTimer = null;

// ══════════════════════════════════════════════════════════════
//  HAPPINESS METER
// ══════════════════════════════════════════════════════════════

const HAPPINESS = {
  neutral: { value:50,  icon:'○', label:'Awaiting your decision',  cls:'neutral', state:'' },
  joy:     { value:85,  icon:'◉', label:'Citizens are hopeful',    cls:'joy',     state:'HAPPY' },
  angry:   { value:14,  icon:'◎', label:'Citizens are angry',      cls:'angry',   state:'ANGRY' },
  grief:   { value:10,  icon:'●', label:'Communities in darkness', cls:'grief',   state:'EXCLUDED' },
};

function setHappiness(key) {
  const s = HAPPINESS[key];
  document.getElementById('h-fill').style.width  = s.value + '%';
  document.getElementById('h-fill').className    = 'h-fill ' + s.cls;
  document.getElementById('h-text').textContent  = s.label;
  document.getElementById('h-icon').textContent  = s.icon;
  const st = document.getElementById('h-state');
  st.textContent = s.state;
  st.style.color = s.cls==='joy' ? 'var(--joy)' : s.cls==='angry' ? 'var(--angry)' : 'var(--grief)';
}

// ══════════════════════════════════════════════════════════════
//  TOP PANEL SWITCHER
// ══════════════════════════════════════════════════════════════

function showPanel(id) {
  ['tp-choice','tp-joy','tp-anger','tp-reject'].forEach(pid => {
    document.getElementById(pid).classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

// ══════════════════════════════════════════════════════════════
//  MAP INIT
// ══════════════════════════════════════════════════════════════

function initMap() {
  map = L.map('map', {
    center: [5, 22], zoom: 3,
    zoomControl: true, scrollWheelZoom: false,
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd', maxZoom: 18,
  }).addTo(map);

  COMMUNITIES.forEach(c => {
    const m = L.circleMarker(c.coords, MARKER.excluded).addTo(map);
    m.bindPopup(buildPopup(c, 'excluded'), { maxWidth: 280 });
    markerRefs[c.id] = m;
  });
}

function buildPopup(c, state) {
  const quote = c['quote_' + state] || c.context;
  return `<div class="popup-content">
    <p class="popup-name">${c.name}</p>
    <p class="popup-context">${c.context}</p>
    <p class="popup-pop">${c.population}</p>
    <p class="popup-quote">${quote}</p>
  </div>`;
}

function updateMarkers(state) {
  COMMUNITIES.forEach(c => {
    markerRefs[c.id].setStyle(MARKER[state]);
    markerRefs[c.id].setPopupContent(buildPopup(c, state));
  });
}

// ══════════════════════════════════════════════════════════════
//  FLOW LINES — Money draining to California
// ══════════════════════════════════════════════════════════════

function showFlowLines() {
  // SpaceX marker
  const spxM = L.circleMarker(SPACEX, {
    radius:14, fillColor:'#e84040', color:'#ff5050',
    fillOpacity:.18, weight:2, interactive:true,
  }).addTo(map);
  spxM.bindPopup(`<div class="popup-content">
    <p class="popup-name">SpaceX HQ — California, USA</p>
    <p class="popup-context">All revenue, data, and decision-making authority flows here. Under US law. Accountable to US shareholders only.</p>
    <p class="popup-quote">"No vote. No court. No exit." — post-colonial analysis</p>
  </div>`, { maxWidth:260 });
  flowLines.push(spxM);

  // Animated drain lines
  COMMUNITIES.forEach((c, i) => {
    const arcLat = Math.max(c.coords[0] + 22, 38);
    const arcLng = (c.coords[1] + SPACEX[1]) / 2;

    const line = L.polyline([c.coords, [arcLat, arcLng], SPACEX], {
      color:'#e84040', weight:1.8, opacity:0,
      dashArray:'8 14', interactive:false,
    }).addTo(map);

    flowLines.push(line);
    setTimeout(() => line.setStyle({ opacity: 0.65 }), i * 200);
  });

  // Zoom to show global drain
  map.flyTo([25, -30], 2, { duration: 1.8 });

  // Shared dash-offset animation
  flowAnimRunning = true;
  animateFlow();
}

function animateFlow() {
  if (!flowAnimRunning) return;
  flowDashOffset -= 1;
  flowLines.forEach(l => {
    if (l._path) l._path.setAttribute('stroke-dashoffset', flowDashOffset);
  });
  requestAnimationFrame(animateFlow);
}

function removeFlowLines() {
  flowAnimRunning = false;
  flowLines.forEach(l => { if (l.remove) l.remove(); });
  flowLines = [];
}

// ══════════════════════════════════════════════════════════════
//  MONEY COUNTER (top panel)
// ══════════════════════════════════════════════════════════════

function startMoneyCounter() {
  const el = document.getElementById('money-value');
  let val = 0;
  const target = 2.4;
  const step = target / 40;
  const iv = setInterval(() => {
    val = Math.min(val + step, target);
    el.textContent = val.toFixed(1);
    if (val >= target) clearInterval(iv);
  }, 80);
}

// ══════════════════════════════════════════════════════════════
//  LEFT MONEY SIDEBAR
// ══════════════════════════════════════════════════════════════

function showMoneySidebar(state) {
  const sidebar = document.getElementById('money-sidebar');
  sidebar.classList.add('visible');

  // Switch active ms-state panel
  document.querySelectorAll('.ms-state').forEach(el => el.classList.remove('active'));
  document.getElementById('ms-' + state).classList.add('active');

  if (state === 'anger') startCumulativeCounter();
}

function startCumulativeCounter() {
  const el = document.getElementById('ms-cumulative');
  if (!el) return;

  // 3 years × 12 months × $2.4M = $86.4M already extracted
  const extracted = 86.4;

  // Count up from 0 to 86.4 over 2.5 seconds
  let val = 0;
  const duration = 2500;
  const start = Date.now();

  function countUp() {
    const progress = Math.min((Date.now() - start) / duration, 1);
    val = extracted * progress;
    el.textContent = val.toFixed(1);
    if (progress < 1) {
      requestAnimationFrame(countUp);
    } else {
      // Keep ticking: $2.4M/month = ~$0.0016M per second (real drain rate)
      // Slightly dramatised to be visible
      setInterval(() => {
        val += 0.003;
        el.textContent = val.toFixed(1);
      }, 500);
    }
  }
  requestAnimationFrame(countUp);
}

// ══════════════════════════════════════════════════════════════
//  QUOTE ROTATION
// ══════════════════════════════════════════════════════════════

function startQuotes(elId, quoteKey) {
  stopQuotes();
  quoteIndex = 0;
  const el = document.getElementById(elId);

  function next() {
    el.style.opacity = '0';
    setTimeout(() => {
      el.textContent = COMMUNITIES[quoteIndex][quoteKey];
      el.style.opacity = '1';
      quoteIndex = (quoteIndex + 1) % COMMUNITIES.length;
    }, 400);
  }
  next();
  quoteInterval = setInterval(next, 3200);
}

function stopQuotes() {
  if (quoteInterval) { clearInterval(quoteInterval); quoteInterval = null; }
}

// ══════════════════════════════════════════════════════════════
//  JOY TIMER (8s countdown → Crimea flash)
// ══════════════════════════════════════════════════════════════

function startJoyTimer() {
  timerSeconds = 8;
  document.getElementById('timer-sec').textContent = timerSeconds;

  // CSS transition depletion
  const fill = document.getElementById('timer-fill');
  fill.style.transition = 'none';
  fill.style.width = '100%';
  requestAnimationFrame(() => requestAnimationFrame(() => {
    fill.style.transition = 'width 8s linear';
    fill.style.width = '0%';
  }));

  timerInterval = setInterval(() => {
    timerSeconds--;
    const el = document.getElementById('timer-sec');
    if (el) el.textContent = Math.max(timerSeconds, 0);
    if (timerSeconds <= 0) {
      clearInterval(timerInterval);
      triggerCrimea();
    }
  }, 1000);
}

// ══════════════════════════════════════════════════════════════
//  REJECT EFFECTS — staggered death + greyscale + vignette + year counter
// ══════════════════════════════════════════════════════════════

function doRejectEffects() {
  const vignette = document.getElementById('reject-vignette');

  // 1. Staggered marker flicker → death
  COMMUNITIES.forEach((c, i) => {
    setTimeout(() => {
      const m = markerRefs[c.id];
      // Brief white flash
      m.setStyle({ fillColor:'#ffffff', color:'#ffffff', fillOpacity:.9, radius:13, weight:2, opacity:1 });
      setTimeout(() => m.setStyle(MARKER.grief), 350);
    }, i * 500);
  });

  // 2. Map greyscale (starts after all markers die ~3s)
  setTimeout(() => {
    document.getElementById('map-wrapper').classList.add('greyscale');
  }, 3500);

  // 3. Vignette fade in
  setTimeout(() => {
    vignette.classList.add('active');
  }, 2000);

  // 4. Year counter: Year 1 → Year 2 → Year 3 → Still waiting.
  const yearEl = document.getElementById('reject-year-text');
  const years = ['Year 1', 'Year 2', 'Year 3', 'Still waiting.'];
  let yi = 0;

  function advanceYear() {
    yearEl.style.opacity = '0';
    setTimeout(() => {
      yearEl.textContent = years[yi];
      yearEl.style.opacity = '1';
      yi++;
      if (yi < years.length) {
        setTimeout(advanceYear, 2200);
      } else {
        // Show reflect button after "Still waiting."
        setTimeout(() => {
          document.getElementById('btn-reflect-reject').classList.remove('hidden');
        }, 1800);
      }
    }, 400);
  }
  advanceYear();
}

// ══════════════════════════════════════════════════════════════
//  MAIN FLOW
// ══════════════════════════════════════════════════════════════

function startExperience() {
  document.getElementById('screen-intro').classList.add('hidden');
  document.getElementById('screen-main').classList.remove('hidden');

  if (!map) {
    initMap();
    setTimeout(() => map.invalidateSize(), 100);
  }

  setHappiness('neutral');
  showPanel('tp-choice');
}

function makeChoice(choice) {
  if (choice === 'adopt') {
    updateMarkers('joy');
    setHappiness('joy');
    showPanel('tp-joy');
    showMoneySidebar('joy');
    startQuotes('tp-quote-joy', 'quote_joy');
    startJoyTimer();
  } else {
    setHappiness('grief');
    showPanel('tp-reject');
    showMoneySidebar('reject');
    startQuotes('tp-quote-reject', 'quote_grief');
    doRejectEffects();
  }
}

// ══════════════════════════════════════════════════════════════
//  CRIMEA FLASH
// ══════════════════════════════════════════════════════════════

function triggerCrimea() {
  stopQuotes();
  document.getElementById('crimea-flash').classList.add('active');
  crimeaAutoTimer = setTimeout(dismissCrimea, 6000);
}

function dismissCrimea() {
  clearTimeout(crimeaAutoTimer);
  document.getElementById('crimea-flash').classList.remove('active');
  setTimeout(doAngerPhase, 350);
}

function doAngerPhase() {
  updateMarkers('angry');
  setHappiness('angry');
  showPanel('tp-anger');
  showMoneySidebar('anger');
  startQuotes('tp-quote-anger', 'quote_anger');
  showFlowLines();
  startMoneyCounter();
}

// ══════════════════════════════════════════════════════════════
//  RESOLUTION
// ══════════════════════════════════════════════════════════════

function showResolution() {
  stopQuotes();
  if (timerInterval) clearInterval(timerInterval);
  const res = document.getElementById('resolution');
  res.classList.remove('hidden');
  res.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function restart() {
  stopQuotes();
  removeFlowLines();
  location.reload();
}

// ══════════════════════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('crimea-flash').addEventListener('click', dismissCrimea);
});
