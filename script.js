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
let flowDashOffset  = 0;
let currentBranch   = null;

const MARKER = {
  excluded: { fillColor:'#e8a04a', color:'#c8843a', fillOpacity:.55, radius:9,  weight:2, opacity:.9 },
  joy:      { fillColor:'#34d27b', color:'#27ae60', fillOpacity:.75, radius:11, weight:2, opacity:1  },
  angry:    { fillColor:'#e84040', color:'#c0392b', fillOpacity:.75, radius:11, weight:2, opacity:1  },
  grief:    { fillColor:'#6b7280', color:'#555d6b', fillOpacity:.40, radius:8,  weight:1, opacity:.7 },
};

// ══════════════════════════════════════════════════════════════
//  TIMER / INTERVAL REFS
// ══════════════════════════════════════════════════════════════

let timerInterval           = null;
let timerSeconds            = 15;
let quoteInterval           = null;
let quoteIndex              = 0;
let crimeaAutoTimer         = null;
let cumulativeTickInterval  = null;
let purchasingPowerInterval = null;
let vignetteTimer           = null;
let angerPhaseStarted       = false;

// ══════════════════════════════════════════════════════════════
//  HAPPINESS METER
// ══════════════════════════════════════════════════════════════

const IMPACT = {
  neutral:    { welfare:50, econ:50,  sov:50,  infra:50  },
  joy:        { welfare:85, econ:70,  sov:20,  infra:15  },
  angry:      { welfare:55, econ:65,  sov:15,  infra:10  },
  grief:      { welfare:10, econ:5,   sov:90,  infra:85  },
  negotiate:  { welfare:55, econ:55,  sov:30,  infra:20  },
  acceptDep:  { welfare:75, econ:85,  sov:10,  infra:5   },
  buildAlt:   { welfare:20, econ:25,  sov:80,  infra:65  },
  capitulate: { welfare:70, econ:60,  sov:10,  infra:10  },
  regional:   { welfare:15, econ:10,  sov:85,  infra:70  },
  chinese:    { welfare:65, econ:70,  sov:15,  infra:10  },
};

function setHappiness(key) {
  const s = IMPACT[key];
  if (!s) return;
  [
    { bar:'bar-welfare', pct:'pct-welfare', val:s.welfare },
    { bar:'bar-econ',    pct:'pct-econ',    val:s.econ    },
    { bar:'bar-sov',     pct:'pct-sov',     val:s.sov     },
    { bar:'bar-infra',   pct:'pct-infra',   val:s.infra   },
  ].forEach(d => {
    const barEl = document.getElementById(d.bar);
    const pctEl = document.getElementById(d.pct);
    if (barEl) barEl.style.width = d.val + '%';
    if (pctEl) pctEl.textContent = d.val + '%';
  });
}

// ══════════════════════════════════════════════════════════════
//  TOP PANEL SWITCHER
// ══════════════════════════════════════════════════════════════

function showPanel(id) {
  document.querySelectorAll('.tp-state').forEach(el => el.classList.remove('active'));
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
  startPurchasingPower();
}

// ══════════════════════════════════════════════════════════════
//  PURCHASING POWER EQUIVALENTS
// ══════════════════════════════════════════════════════════════

const MONTHLY_EQUIVALENTS = [
  '≈ 1,200 nurse salaries / year',
  '≈ 18 rural clinics',
  '≈ 48,000 student laptops',
];

function startPurchasingPower() {
  stopPurchasingPower();
  let idx = 0;
  const targets = ['equiv-joy', 'equiv-anger'];

  function update() {
    const text = MONTHLY_EQUIVALENTS[idx % MONTHLY_EQUIVALENTS.length];
    targets.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      el.classList.add('fading');
      setTimeout(() => {
        el.textContent = text;
        el.classList.remove('fading');
      }, 400);
    });
    idx++;
  }
  update();
  purchasingPowerInterval = setInterval(update, 4000);
}

function stopPurchasingPower() {
  if (purchasingPowerInterval) {
    clearInterval(purchasingPowerInterval);
    purchasingPowerInterval = null;
  }
}

function startCumulativeCounter() {
  if (cumulativeTickInterval) { clearInterval(cumulativeTickInterval); cumulativeTickInterval = null; }
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
      cumulativeTickInterval = setInterval(() => {
        val += 0.003;
        el.textContent = val.toFixed(1);
        const equivEl = document.getElementById('equiv-cumulative');
        if (equivEl) equivEl.textContent = '≈ ' + Math.round(val / 0.002).toLocaleString() + ' nurse salaries';
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
//  REJECT PATH — TOAST INCIDENTS
// ══════════════════════════════════════════════════════════════

// ══════════════════════════════════════════════════════════════
//  ADOPT PATH — JOY TOASTS (good news as connectivity arrives)
// ══════════════════════════════════════════════════════════════

const JOY_TOASTS = [
  {
    delay: 1000,
    icon: '📡',
    title: 'Day 1 — Bugesera District',
    msg: '340 students connect to the national curriculum for the first time. Teacher says the classroom went silent.',
    critical: false,
  },
  {
    delay: 3000,
    icon: '🏥',
    title: 'Week 2 — Turkana Clinic',
    msg: 'First telemedicine diagnosis completed. Patient treated remotely. Would have waited 3 weeks for a transfer.',
    critical: false,
  },
  {
    delay: 5200,
    icon: '📰',
    title: 'Month 2 — Shan State',
    msg: 'Journalist files report to Reuters via Starlink. First international coverage of the region in 5 months.',
    critical: false,
  },
  {
    delay: 7000,
    icon: '💰',
    title: 'Month 4 — Amazon Basin',
    msg: 'Indigenous cooperative completes first international sale online. $840 earned in a single week.',
    critical: false,
  },
];

// ══════════════════════════════════════════════════════════════
//  ADOPT PATH — ANGER TOASTS (extraction revealed year 3)
// ══════════════════════════════════════════════════════════════

const ANGER_TOASTS = [
  {
    delay: 2000,
    icon: '💸',
    title: 'Year 1 — $28.8M Transferred',
    msg: 'Twelve months of payments. All wired to California. Zero local infrastructure built in return.',
    critical: false,
  },
  {
    delay: 5500,
    icon: '🏛️',
    title: 'Year 2 — Sovereignty Request Denied',
    msg: 'Kwanda asks for data to be stored locally. SpaceX declines. No explanation provided. No appeal process.',
    critical: true,
  },
  {
    delay: 9500,
    icon: '📊',
    title: 'Year 2 — Traffic Under US Law',
    msg: '2.4M users\' browsing now subject to the US CLOUD Act. American authorities can request data without a Kwandan court order.',
    critical: false,
  },
  {
    delay: 13000,
    icon: '⚠️',
    title: 'Year 3 — Contract Reviewed',
    msg: 'Clause 14.2: SpaceX may terminate service "for operational reasons" with 30 days notice. No arbitration rights for Kwanda.',
    critical: true,
  },
];

const REJECT_TOASTS = [
  {
    delay: 4500,
    icon: '🏥',
    title: 'Turkana County — No Telemedicine',
    msg: 'Patient needed urgent specialist. Transferred 280km by road. Died en route. No remote consultation possible.',
    critical: true,
  },
  {
    delay: 8000,
    icon: '📦',
    title: 'Borno State — Supplies Failed',
    msg: 'Aid convoy dispatched to wrong coordinates. No real-time comms to correct it. 3,000 families received nothing.',
    critical: false,
  },
  {
    delay: 11500,
    icon: '📰',
    title: 'Shan State — World Never Knew',
    msg: 'Military crackdown on civilians. No satellite uplink. Atrocities undocumented for 11 days. Perpetrators faced no scrutiny.',
    critical: false,
  },
  {
    delay: 14500,
    icon: '🌿',
    title: 'Amazon Basin — Invisible Destruction',
    msg: 'Illegal clearing undetected for 19 days. Satellite imagery delayed. 1,200 hectares gone before anyone knew.',
    critical: false,
  },
  {
    delay: 18000,
    icon: '🚨',
    title: 'Cabo Delgado — Cyclone Warning Failed',
    msg: 'Early warning could not reach 40,000 coastal residents. No local network. Emergency response delayed 72 hours.',
    critical: true,
  },
];

// ══════════════════════════════════════════════════════════════
//  ACT 2 TOAST ARRAYS (6 branches)
// ══════════════════════════════════════════════════════════════

const NEGOTIATE_TOASTS = [
  {
    delay: 2000,
    icon: '📋',
    title: 'Month 1 — Terms Delivered',
    msg: 'Kwanda demands: local data storage, Kwandan court jurisdiction, 30% revenue share, exit clause. SpaceX legal team does not respond for six weeks.',
    critical: false,
  },
  {
    delay: 7500,
    icon: '⚖️',
    title: 'Month 3 — Counter-Offer',
    msg: 'SpaceX offers 5% revenue share and a "data residency study." No timeline. No binding commitments. Take it or lose service.',
    critical: true,
  },
  {
    delay: 13000,
    icon: '🤝',
    title: 'Month 6 — Partial Agreement',
    msg: 'After AU pressure, SpaceX agrees to 8% revenue share and a read-only regional data cache. Kwanda calls it a win. Publicly.',
    critical: false,
  },
  {
    delay: 19000,
    icon: '📰',
    title: 'Year 2 — Precedent Set',
    msg: 'Three other African nations cite Kwanda\'s deal. SpaceX renegotiates all African contracts. The 8% becomes the ceiling, not the floor.',
    critical: false,
  },
];

const ACCEPT_DEPENDENCY_TOASTS = [
  {
    delay: 2000,
    icon: '💰',
    title: 'Month 2 — Digital Economy Boom',
    msg: '$14M in new e-commerce transactions in 60 days. Foreign investors take notice. Startup incubators open.',
    critical: false,
  },
  {
    delay: 7500,
    icon: '🏗️',
    title: 'Month 8 — Tech Hub Opens',
    msg: 'Kwanda Tech Park inaugurated. 340 jobs. All built on Starlink infrastructure. All dependent on continued service.',
    critical: false,
  },
  {
    delay: 13000,
    icon: '⚠️',
    title: 'Year 2 — Price Increase',
    msg: 'SpaceX raises rates 40% citing "operational costs." Kwanda has no alternative. Parliament approves the increase in silence.',
    critical: true,
  },
  {
    delay: 19000,
    icon: '🔒',
    title: 'Year 3 — Lock-In Complete',
    msg: 'Government services, banking, health records — all routed through Starlink. Switching cost estimated at $420M. There is no exit.',
    critical: true,
  },
];

const BUILD_ALT_TOASTS = [
  {
    delay: 2000,
    icon: '🛰️',
    title: 'Month 1 — AU Consortium Proposed',
    msg: 'Kwanda tables a motion at the African Union: a jointly owned satellite constellation. 12 nations express interest. 4 commit funding.',
    critical: false,
  },
  {
    delay: 7500,
    icon: '💸',
    title: 'Month 6 — Funding Gap',
    msg: 'Consortium needs $2.1B. Combined pledges: $380M. World Bank offers a loan — with governance conditions that mirror the original problem.',
    critical: true,
  },
  {
    delay: 13000,
    icon: '🔬',
    title: 'Year 2 — First Test Satellite',
    msg: 'AU-Sat-1 reaches orbit. Coverage: 3% of target. Engineers celebrate. Citizens see no change. Starlink contract extended "temporarily."',
    critical: false,
  },
  {
    delay: 19000,
    icon: '⏳',
    title: 'Year 4 — Still Building',
    msg: 'Constellation at 18% capacity. Rural coverage minimal. Kwanda still pays SpaceX $2.4M/month during the transition. The "temporary" is permanent.',
    critical: false,
  },
];

const CAPITULATE_TOASTS = [
  {
    delay: 2000,
    icon: '📡',
    title: 'Week 1 — Starlink Activated',
    msg: '340 schools connected in the first month. The relief is immediate. The cost of the three-year delay is not discussed.',
    critical: false,
  },
  {
    delay: 7500,
    icon: '🏥',
    title: 'Month 2 — Lives Saved',
    msg: 'First telemedicine consultations begin. A child in Turkana is diagnosed remotely. She would not have survived the transfer. Three years too late.',
    critical: false,
  },
  {
    delay: 13000,
    icon: '📊',
    title: 'Month 6 — The Accounting',
    msg: 'Ministry estimates 847 preventable deaths during the blackout. The number is contested. The grief is not.',
    critical: true,
  },
  {
    delay: 19000,
    icon: '🔇',
    title: 'Year 1 — Sovereignty Disappears',
    msg: 'The word "sovereignty" disappears from government communications. Kwanda has the same dependency it once refused — plus three years of harm.',
    critical: false,
  },
];

const REGIONAL_ALT_TOASTS = [
  {
    delay: 2000,
    icon: '🤝',
    title: 'Month 1 — AU Summit',
    msg: 'Kwanda leads a coalition of 9 nations proposing AfriSat. The vision is bold. The minimum timeline: 7 years.',
    critical: false,
  },
  {
    delay: 7500,
    icon: '📉',
    title: 'Month 8 — Brain Drain',
    msg: '62 engineers leave Kwanda for jobs in Lagos and Nairobi. They cannot wait. Their children need schools that work now.',
    critical: false,
  },
  {
    delay: 13000,
    icon: '🛰️',
    title: 'Year 2 — Prototype Launched',
    msg: 'AfriSat-1 reaches orbit. Coverage: 6% of the continent. Proof of concept. Full deployment needs $1.8B more and 5 more years.',
    critical: false,
  },
  {
    delay: 19000,
    icon: '⏳',
    title: 'Year 7 — Still Dark',
    msg: 'Kwanda enters its seventh year without reliable internet. A generation has completed their education offline. The alternative is real — but not yet here.',
    critical: true,
  },
];

const CHINESE_ALT_TOASTS = [
  {
    delay: 2000,
    icon: '📡',
    title: 'Week 2 — Huawei Engineers Arrive',
    msg: 'Infrastructure deployment begins immediately. Faster and cheaper than SpaceX. The terms are less transparent.',
    critical: false,
  },
  {
    delay: 7500,
    icon: '📋',
    title: 'Month 3 — The Contract',
    msg: 'Clause 8: Huawei retains "operational access" to all network data for "maintenance purposes." No end date. No audit rights for Kwanda.',
    critical: true,
  },
  {
    delay: 13000,
    icon: '🌐',
    title: 'Month 8 — Connected',
    msg: '1.8M people online. Schools connected. Clinics functioning. The human benefit is real. The terms are different — not better.',
    critical: false,
  },
  {
    delay: 19000,
    icon: '🔍',
    title: 'Year 2 — Audit Blocked',
    msg: 'Kwandan engineers request network routing logs. Request denied: "proprietary technology." Third-party researchers confirm traffic routing through Shenzhen.',
    critical: true,
  },
];

let toastTimeouts = [];

function showToast(t) {
  const container = document.getElementById('toast-container');
  const el = document.createElement('div');
  el.className = 'toast' + (t.critical ? ' toast-critical' : '');
  el.innerHTML = `
    <span class="toast-icon">${t.icon}</span>
    <div class="toast-body">
      <span class="toast-title">${t.title}</span>
      <span class="toast-msg">${t.msg}</span>
    </div>`;
  container.appendChild(el);

  setTimeout(() => {
    el.classList.add('removing');
    setTimeout(() => el.remove(), 420);
  }, 6500);
}

function scheduleToasts(list) {
  list.forEach(t => {
    const tid = setTimeout(() => showToast(t), t.delay);
    toastTimeouts.push(tid);
  });
}

function clearToasts() {
  toastTimeouts.forEach(t => clearTimeout(t));
  toastTimeouts = [];
  const container = document.getElementById('toast-container');
  if (container) container.innerHTML = '';
}

// ══════════════════════════════════════════════════════════════
//  REJECT PATH — MAP CONSEQUENCE LABELS
// ══════════════════════════════════════════════════════════════

const REJECT_LABELS = {
  rwanda:     'Schools dark',
  kenya:      'Patient died',
  nigeria:    'Aid failed',
  mozambique: 'Crisis invisible',
  brazil:     'Voices silenced',
  myanmar:    'Blackout',
};

let labelMarkers = [];

function addRejectLabels() {
  COMMUNITIES.forEach((c, i) => {
    setTimeout(() => {
      const text = REJECT_LABELS[c.id] || 'Excluded';
      const icon = L.divIcon({
        className: '',
        html: `<div class="map-label" id="lbl-${c.id}">${text}</div>`,
        iconSize: [0, 0],
        iconAnchor: [-6, 20],
      });
      const m = L.marker(c.coords, { icon, interactive: false }).addTo(map);
      labelMarkers.push(m);
      setTimeout(() => {
        const el = document.getElementById('lbl-' + c.id);
        if (el) el.classList.add('visible');
      }, 150);
    }, 1800 + i * 600);
  });
}

function removeRejectLabels() {
  labelMarkers.forEach(m => m.remove());
  labelMarkers = [];
}

// ══════════════════════════════════════════════════════════════
//  REJECT PATH — DAYS WITHOUT ACCESS COUNTER
// ══════════════════════════════════════════════════════════════

function startDaysCounter() {
  const el = document.getElementById('ms-days');
  if (!el) return;

  let days = 0;

  function countTo(from, target, duration, onDone) {
    const start = Date.now();
    function step() {
      const p = Math.min((Date.now() - start) / duration, 1);
      days = Math.round(from + (target - from) * p);
      el.textContent = days.toLocaleString();
      if (p < 1) requestAnimationFrame(step);
      else { days = target; el.textContent = days.toLocaleString(); if (onDone) onDone(); }
    }
    requestAnimationFrame(step);
  }

  // Year 1 → Year 2 → Year 3, each in ~3s, paced with year counter
  countTo(0, 365, 3000, () => {
    setTimeout(() => countTo(365, 730, 3000, () => {
      setTimeout(() => countTo(730, 1095, 3000), 2200);
    }), 2200);
  });
}

// ══════════════════════════════════════════════════════════════
//  REJECT EFFECTS — staggered death + greyscale + vignette + year counter
// ══════════════════════════════════════════════════════════════

function doRejectEffects() {
  const vignette = document.getElementById('reject-vignette');

  // 1. Start days counter in sidebar
  startDaysCounter();

  // 2. Staggered marker flicker → death
  COMMUNITIES.forEach((c, i) => {
    setTimeout(() => {
      const m = markerRefs[c.id];
      m.setStyle({ fillColor:'#ffffff', color:'#ffffff', fillOpacity:.9, radius:13, weight:2, opacity:1 });
      setTimeout(() => m.setStyle(MARKER.grief), 350);
    }, i * 500);
  });

  // 3. Add consequence labels to map communities
  addRejectLabels();

  // 4. Vignette fade in
  setTimeout(() => {
    vignette.classList.add('active');
  }, 2000);

  // 5. Map greyscale
  setTimeout(() => {
    document.getElementById('map-wrapper').classList.add('greyscale');
  }, 3500);

  // 6. Toast incident notifications (staggered across 3 years)
  scheduleToasts(REJECT_TOASTS);

  // 7a. Historical mirror — context panel
  setTimeout(() => {
    const hm = document.getElementById('hist-reject');
    if (hm) hm.classList.add('visible');
  }, 5000);

  // 7. Year counter: Year 1 → Year 2 → Year 3 → Still waiting.
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
        setTimeout(() => {
          document.getElementById('btn-reflect-reject').classList.remove('hidden');
        }, 1800);
      }
    }, 400);
  }
  advanceYear();
}

// ══════════════════════════════════════════════════════════════
//  ACT 2 FLOW — Second decision + consequences + endings
// ══════════════════════════════════════════════════════════════

function showAdoptChoice2() {
  stopQuotes();
  clearToasts();
  showPanel('tp-adopt-choice2');
}

function showRejectChoice2() {
  stopQuotes();
  clearToasts();
  showPanel('tp-reject-choice2');
}

function makeChoice2(branch) {
  currentBranch = branch;
  clearToasts();
  showPanel('tp-consequence2');
  configureBranch(branch);

  const toastMap = {
    'negotiate':  NEGOTIATE_TOASTS,
    'accept-dep': ACCEPT_DEPENDENCY_TOASTS,
    'build-alt':  BUILD_ALT_TOASTS,
    'capitulate': CAPITULATE_TOASTS,
    'regional':   REGIONAL_ALT_TOASTS,
    'chinese':    CHINESE_ALT_TOASTS,
  };
  scheduleToasts(toastMap[branch]);

  // Show "See your ending" button after last toast, with animated progress bar
  const lastDelay = Math.max(...toastMap[branch].map(t => t.delay));
  const totalWait = lastDelay + 5500;
  const progressWrap = document.getElementById('c2-progress-wrap');
  const progressFill = document.getElementById('c2-progress-fill');
  if (progressWrap && progressFill) {
    progressWrap.classList.remove('hidden');
    progressFill.style.transition = 'none';
    progressFill.style.width = '0%';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      progressFill.style.transition = `width ${totalWait}ms linear`;
      progressFill.style.width = '100%';
    }));
  }
  setTimeout(() => {
    const btn = document.getElementById('btn-ending');
    if (btn) btn.classList.remove('hidden');
    if (progressWrap) progressWrap.classList.add('hidden');
  }, totalWait);
}

function configureBranch(branch) {
  const cfg = {
    'negotiate': {
      tag: 'Negotiation in Progress', tagCls: 'negotiate-tag',
      happiness: 'negotiate', sidebar: 'negotiate', quoteKey: 'quote_anger',
      reflectText: 'The deal is signed. Was it enough?',
      stats: [
        { num:'8%',   label:'Revenue Share',   cls:'' },
        { num:'0',    label:'Legal Wins',       cls:'grief' },
        { num:'$2.4M', label:'Still Leaving/mo', cls:'' },
      ],
    },
    'accept-dep': {
      tag: 'Year 3 — Extracting Value', tagCls: 'joy-tag',
      happiness: 'acceptDep', sidebar: 'accept-dep', quoteKey: 'quote_joy',
      reflectText: 'The economy is booming. The exit is gone.',
      stats: [
        { num:'$14M',  label:'New Economy',    cls:'joy' },
        { num:'340',   label:'Tech Jobs',       cls:'joy' },
        { num:'$420M', label:'Switching Cost',  cls:'' },
      ],
    },
    'build-alt': {
      tag: 'Year 4 — Building Sovereignty', tagCls: 'hope-tag',
      happiness: 'buildAlt', sidebar: 'build-alt', quoteKey: 'quote_anger',
      reflectText: 'The constellation is growing. Your people are still waiting.',
      stats: [
        { num:'18%',   label:'AU-Sat Capacity', cls:'joy' },
        { num:'4',     label:'Nations In',       cls:'' },
        { num:'$2.4M', label:'Still to SpaceX/mo', cls:'' },
      ],
    },
    'capitulate': {
      tag: 'Month 6 — Reconnected', tagCls: 'bitter-tag',
      happiness: 'capitulate', sidebar: 'capitulate', quoteKey: 'quote_joy',
      reflectText: 'The connectivity you rejected is here. The lives lost are not.',
      stats: [
        { num:'2.4M', label:'Now Online',   cls:'joy' },
        { num:'847',  label:'Died Waiting', cls:'' },
        { num:'3yr',  label:'Delay',        cls:'' },
      ],
    },
    'regional': {
      tag: 'Year 7 — Still Building', tagCls: 'hope-tag',
      happiness: 'regional', sidebar: 'regional', quoteKey: 'quote_grief',
      reflectText: 'The alternative is real. Your people are still waiting.',
      stats: [
        { num:'6%', label:'AfriSat Coverage', cls:'' },
        { num:'9',  label:'Nations United',   cls:'joy' },
        { num:'7yr', label:'Still Offline',   cls:'' },
      ],
    },
    'chinese': {
      tag: 'Year 2 — New Provider', tagCls: 'china-tag',
      happiness: 'chinese', sidebar: 'chinese', quoteKey: 'quote_anger',
      reflectText: 'Connected. Under different terms. Under different eyes.',
      stats: [
        { num:'1.8M', label:'Connected',     cls:'joy' },
        { num:'0',    label:'Audit Access',  cls:'' },
        { num:'CNY',  label:'Data Routes',   cls:'' },
      ],
    },
  };

  const c = cfg[branch];
  if (!c) return;

  // Tag
  const tagEl = document.getElementById('c2-tag');
  tagEl.textContent = c.tag;
  tagEl.className = 'tp-tag ' + c.tagCls;

  // Stats
  document.getElementById('c2-stats').innerHTML = c.stats.map(s =>
    `<div class="tp-stat">
      <span class="tp-num ${s.cls}">${s.num}</span>
      <span class="tp-lbl">${s.label}</span>
    </div>`
  ).join('');

  // Reflect text
  document.getElementById('c2-reflect-text').textContent = c.reflectText;

  // Happiness bar
  setHappiness(c.happiness);

  // Sidebar
  showMoneySidebar(c.sidebar);

  // Quotes
  startQuotes('tp-quote-c2', c.quoteKey);

  // Hide ending button + reset progress bar
  const btn = document.getElementById('btn-ending');
  if (btn) btn.classList.add('hidden');
  const progressWrap = document.getElementById('c2-progress-wrap');
  const progressFill = document.getElementById('c2-progress-fill');
  if (progressWrap) progressWrap.classList.add('hidden');
  if (progressFill) { progressFill.style.transition = 'none'; progressFill.style.width = '0%'; }

  // Reset lock-in panel for all branches; show only for accept-dep
  const lockinPanel  = document.getElementById('lockin-panel');
  const lockinBtn    = document.getElementById('btn-cancel-starlink');
  const lockinDenial = document.getElementById('lockin-denial');
  if (lockinPanel)  lockinPanel.classList.add('hidden');
  if (lockinBtn)    { lockinBtn.disabled = false; lockinBtn.textContent = 'Cancel Starlink Service'; }
  if (lockinDenial) lockinDenial.classList.add('hidden');
  if (branch === 'accept-dep') {
    const lockinTimeout = setTimeout(() => {
      if (lockinPanel) lockinPanel.classList.remove('hidden');
    }, 15000);
    toastTimeouts.push(lockinTimeout);
  }

  // Map effects
  applyBranchMapEffects(branch);
}

function applyBranchMapEffects(branch) {
  const wrapper = document.getElementById('map-wrapper');
  const vignette = document.getElementById('reject-vignette');

  if (branch === 'negotiate') {
    // Keep flow lines and angry markers — money still draining
  }

  if (branch === 'accept-dep') {
    // Prosperity: markers turn green, fly back to Africa
    updateMarkers('joy');
    map.flyTo([5, 22], 3, { duration: 1.8 });
  }

  if (branch === 'build-alt') {
    // Remove flow lines; add AU ground station marker in Nairobi
    removeFlowLines();
    map.flyTo([5, 22], 3, { duration: 1.8 });
    const icon = L.divIcon({
      className: '',
      html: '<div class="map-label visible" style="color:var(--hope);border-color:rgba(91,155,213,.4)">AU Ground Station</div>',
      iconSize: [0, 0], iconAnchor: [-6, 20],
    });
    const m = L.marker([-1.28, 36.82], { icon, interactive: false }).addTo(map);
    flowLines.push(m); // reuse flowLines array for cleanup on restart
    // Add a faint hope-coloured pulse marker at Nairobi
    const pulse = L.circleMarker([-1.28, 36.82], {
      radius: 12, fillColor: '#5b9bd5', color: '#5b9bd5',
      fillOpacity: .18, weight: 2, interactive: false,
    }).addTo(map);
    flowLines.push(pulse);
  }

  if (branch === 'capitulate') {
    // Re-connect: remove greyscale, remove vignette, joy markers
    wrapper.classList.remove('greyscale');
    vignette.classList.remove('active');
    removeRejectLabels();
    updateMarkers('joy');
    map.flyTo([5, 22], 3, { duration: 1.8 });
  }

  if (branch === 'regional') {
    // Keep darkness but lighter; add AfriSat marker
    const pulse = L.circleMarker([-1.28, 36.82], {
      radius: 12, fillColor: '#5b9bd5', color: '#5b9bd5',
      fillOpacity: .22, weight: 2, interactive: true,
    }).addTo(map);
    pulse.bindPopup('<div class="popup-content"><p class="popup-name">AfriSat Ground Station — Nairobi</p><p class="popup-context">Year 2. Coverage: 6%. Proof of concept confirmed. Full constellation: 5 years.</p></div>');
    flowLines.push(pulse);
    const icon = L.divIcon({
      className: '',
      html: '<div class="map-label visible" style="color:var(--hope);border-color:rgba(91,155,213,.4)">AfriSat — 6%</div>',
      iconSize: [0, 0], iconAnchor: [-6, 20],
    });
    const lbl = L.marker([-1.28, 36.82], { icon, interactive: false }).addTo(map);
    flowLines.push(lbl);
  }

  if (branch === 'chinese') {
    // Remove darkness; add Shenzhen flow lines instead of California
    wrapper.classList.remove('greyscale');
    vignette.classList.remove('active');
    removeRejectLabels();
    updateMarkers('joy');
    removeFlowLines();

    const shenzhen = [22.55, 114.06];
    // Shenzhen marker
    const spxM = L.circleMarker(shenzhen, {
      radius: 14, fillColor: '#d4a843', color: '#d4a843',
      fillOpacity: .18, weight: 2, interactive: true,
    }).addTo(map);
    spxM.bindPopup('<div class="popup-content"><p class="popup-name">Huawei HQ — Shenzhen, China</p><p class="popup-context">All traffic routes here. "Operational access" maintained. No audit rights granted to Kwanda.</p><p class="popup-quote">"Different flag. Same structure." — post-colonial analysis</p></div>');
    flowLines.push(spxM);

    COMMUNITIES.forEach((c, i) => {
      const arcLat = Math.min(c.coords[0] + 18, 35);
      const arcLng = (c.coords[1] + shenzhen[1]) / 2;
      const line = L.polyline([c.coords, [arcLat, arcLng], shenzhen], {
        color: '#d4a843', weight: 1.8, opacity: 0,
        dashArray: '8 14', interactive: false,
      }).addTo(map);
      flowLines.push(line);
      setTimeout(() => line.setStyle({ opacity: 0.6 }), i * 200);
    });

    flowAnimRunning = true;
    animateFlow();
    map.flyTo([15, 60], 2, { duration: 2 });
  }
}

function showEnding() {
  stopQuotes();
  clearToasts();
  removeFlowLines();
  removeRejectLabels();
  if (timerInterval) clearInterval(timerInterval);

  const endingMap = {
    'negotiate':  'ending-negotiate',
    'accept-dep': 'ending-accept-dep',
    'build-alt':  'ending-build-alt',
    'capitulate': 'ending-capitulate',
    'regional':   'ending-regional',
    'chinese':    'ending-chinese',
  };

  const endingId = endingMap[currentBranch];
  if (!endingId) return;
  const el = document.getElementById(endingId);
  el.classList.remove('hidden');
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ══════════════════════════════════════════════════════════════
//  LOCK-IN INTERACTION
// ══════════════════════════════════════════════════════════════

function attemptCancel() {
  const btn    = document.getElementById('btn-cancel-starlink');
  const denial = document.getElementById('lockin-denial');
  if (!btn) return;
  btn.disabled = true;
  btn.textContent = 'Request Submitted…';
  setTimeout(() => {
    btn.textContent = 'Request Denied';
    if (denial) {
      denial.classList.remove('hidden');
      denial.textContent = 'Clause 14.2: Termination requires 12 months notice and full infrastructure transfer payment of $420M. Request denied.';
    }
  }, 1200);
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

function showContract() {
  document.getElementById('contract-overlay').classList.remove('hidden');
}

function signContract() {
  document.getElementById('contract-overlay').classList.add('hidden');
  makeChoice('adopt');
}

function startVignettes() {
  if (vignetteTimer) { clearInterval(vignetteTimer); vignetteTimer = null; }
  const slideIds = ['vig-1', 'vig-2', 'vig-3', 'vig-cta'];
  const dots     = document.querySelectorAll('.vig-dot');
  let current    = 0;

  function showSlide(idx) {
    document.querySelectorAll('.vignette-slide').forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    const s = document.getElementById(slideIds[idx]);
    if (s) s.classList.add('active');
    if (idx < dots.length) dots[idx].classList.add('active');
  }

  showSlide(0);
  vignetteTimer = setInterval(() => {
    current++;
    if (current >= slideIds.length) {
      clearInterval(vignetteTimer);
      vignetteTimer = null;
      return;
    }
    showSlide(current);
  }, 5000);
}

function makeChoice(choice) {
  if (choice === 'adopt') {
    updateMarkers('joy');
    setHappiness('joy');
    showPanel('tp-joy');
    showMoneySidebar('joy');
    startQuotes('tp-quote-joy', 'quote_joy');
    scheduleToasts(JOY_TOASTS);
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
  if (angerPhaseStarted) return;
  angerPhaseStarted = true;
  clearToasts();
  updateMarkers('angry');
  setHappiness('angry');
  showPanel('tp-anger');
  showMoneySidebar('anger');
  startQuotes('tp-quote-anger', 'quote_anger');
  showFlowLines();
  startMoneyCounter();
  scheduleToasts(ANGER_TOASTS);
  setTimeout(() => {
    const hm = document.getElementById('hist-anger');
    if (hm) hm.classList.add('visible');
  }, 3000);
}

function restart() {
  currentBranch     = null;
  angerPhaseStarted = false;
  if (cumulativeTickInterval)  { clearInterval(cumulativeTickInterval);  cumulativeTickInterval  = null; }
  if (purchasingPowerInterval) { clearInterval(purchasingPowerInterval); purchasingPowerInterval = null; }
  if (vignetteTimer)           { clearInterval(vignetteTimer);           vignetteTimer           = null; }
  stopPurchasingPower();
  stopQuotes();
  removeFlowLines();
  removeRejectLabels();
  clearToasts();
  document.querySelectorAll('.hist-mirror').forEach(el => el.classList.remove('visible'));
  location.reload();
}

