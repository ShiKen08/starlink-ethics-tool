// ══════════════════════════════════════════════════════════════
//  COMMUNITY DATA
// ══════════════════════════════════════════════════════════════

const COMMUNITIES = [
  {
    id: 'laketown',
    name: 'Laketown, Lake Victoria',
    coords: [-1.0, 31.8],
    population: '12,000 people',
    extractionWeight: 1.5,
    phases: {
      excluded: {
        stat: null,
        text: 'Fishermen coordinate across the lake using hand signals. The nearest hospital is 4 hours by boat. Last year, two children drowned because weather warnings did not reach the northern shore.',
      },
      joy: {
        stat: '+100% cooperative yield',
        text: 'GPS-tracked catch data helps the cooperative double its yield. A telemedicine call saves a premature baby — the first ever delivered safely in this district. The cooperative starts exporting directly, cutting out the middleman in Nairobi.',
      },
      angry: {
        stat: 'Catch data sold to US broker',
        text: 'The catch data is aggregated and sold via a US-based agricultural data broker. A Chinese commercial trawler fleet appears in the lake\'s international waters — using the same GPS patterns. Kwanda files a data access request. SpaceX responds: "Clause 1.3 — data processed on US servers is subject to US commercial law. No action required."',
      },
      grief: {
        stat: null,
        text: 'The cooperative still uses hand signals. The premature baby story happened again. This time, the baby did not survive. The middleman in Nairobi is still there. Nothing changed.',
      },
    },
    quote_joy:   '"GPS-tracked catch data doubled our yield. A telemedicine call saved the first premature baby born in this district." — Cooperative leader',
    quote_anger: '"Our GPS patterns were sold to a data broker. A Chinese trawler fleet appeared using our data. SpaceX said: no action required." — Fisherman',
    quote_grief: '"The cooperative still uses hand signals. The premature baby happened again. This time, the baby didn\'t survive." — Village elder',
  },
  {
    id: 'mweru',
    name: 'Mweru District, Zambia–DRC Border',
    coords: [-8.8, 28.7],
    population: '84,000 people',
    extractionWeight: 2.5,
    phases: {
      excluded: {
        stat: null,
        text: 'Three clinics, one doctor who rotates weekly by bus. Malaria diagnoses are made by symptom checklist — no imaging, no lab connectivity. Drug supply orders are sent by road.',
      },
      joy: {
        stat: 'Drug stockouts down 60%',
        text: 'Telemedicine link to Nairobi specialist hospital. First remote ultrasound performed. Drug supply chain digitised — stockouts drop 60%. A nurse says: "I used to guess. Now I know."',
      },
      angry: {
        stat: 'Patient records subpoenaed, US law',
        text: 'Patient records stored on SpaceX relay servers fall under US CLOUD Act jurisdiction. A US federal investigation into a Kwandan diaspora member triggers a subpoena for Mweru clinic records. Kwanda\'s health ministry is not notified. The nurse: "They told me the records were safe."',
      },
      grief: {
        stat: null,
        text: 'The doctor still rotates by bus. A patient with a treatable tumour is diagnosed four months late. The drug stockout problem remains. The popup does not moralize — it just shows the timeline of what did not happen.',
      },
    },
    quote_joy:   '"I used to guess. Now I know. Telemedicine changed what it means to be a nurse in Mweru." — District nurse',
    quote_anger: '"They told me the records were safe. A US federal subpoena pulled our patient files. Nobody told us." — District nurse',
    quote_grief: '"The doctor still rotates by bus. A patient with a treatable tumour was diagnosed four months late." — Clinic coordinator',
  },
  {
    id: 'ondiri',
    name: 'Ondiri Valley, Kenya Highlands',
    coords: [0.3, 37.1],
    population: '31,000 people',
    extractionWeight: 1.0,
    phases: {
      excluded: {
        stat: null,
        text: '14 schools, one with a computer lab (six machines, no internet). Students preparing for national exams study from textbooks printed in 2011. The nearest library is in the capital.',
      },
      joy: {
        stat: 'Exam pass rate +22%',
        text: 'Khan Academy, Wikipedia, exam prep tools. Pass rates jump 22% in the first cohort. A student named Amara gets a scholarship to a Nairobi university — she credits the online maths courses. Teachers start a WhatsApp group to share lesson plans across the district.',
      },
      angry: {
        stat: '5 schools dropped — pricing tripled',
        text: 'Starlink\'s education pricing tier expires after year two (Clause 3.1 — promotional rates are non-binding). The monthly cost per school triples. Five schools drop the service. Amara\'s younger sister is in one of those five schools. The teacher WhatsApp group is now organising a petition.',
      },
      grief: {
        stat: null,
        text: 'The textbooks are still from 2011. Amara\'s story does not happen. The exam pass rate: flat, unchanged, three years running.',
      },
    },
    quote_joy:   '"Pass rates jumped 22%. Amara got a scholarship to Nairobi. She credits the online maths courses." — Teacher',
    quote_anger: '"Promotional pricing expired. Cost tripled. Five schools dropped the service. Amara\'s younger sister is in one of those five schools." — Teacher',
    quote_grief: '"The textbooks are still from 2011. The exam pass rate is flat. Three years running." — Headteacher',
  },
  {
    id: 'portovelho',
    name: 'Porto Velho, Amazon Basin',
    coords: [-8.76, -63.9],
    population: '2,400 people',
    extractionWeight: 2.0,
    phases: {
      excluded: {
        stat: null,
        text: 'A Yanomami-adjacent community documenting oral histories. Illegal logging encroaches from the south. Without real-time reporting, by the time word reaches the environmental agency, the trucks are gone.',
      },
      joy: {
        stat: '340 hours of language archived',
        text: 'Satellite-connected cameras catch loggers in real time. Three prosecutions in the first year. An elder begins recording stories in the Yanomami language — 340 hours archived online. A linguist in São Paulo calls it "the most important indigenous language project in a decade."',
      },
      angry: {
        stat: 'GPS coordinates sold to mining co.',
        text: 'The archived recordings are hosted on SpaceX-routed servers. Metadata reveals the exact GPS coordinates of the community — protected under Brazilian indigenous land law. A mining survey company acquires the metadata through a US data market. The elder: "We put our voices in their machine. Now the machine tells strangers where we sleep."',
      },
      grief: {
        stat: null,
        text: 'The logging continues. Two more hectares lost this quarter. The oral histories are being recorded on a cassette player with limited tapes. The elder is 78.',
      },
    },
    quote_joy:   '"We caught three illegal logging operations in real time. 340 hours of our language, archived." — Community elder',
    quote_anger: '"We put our voices in their machine. Now the machine tells strangers where we sleep." — Community elder',
    quote_grief: '"The logging continues. The oral histories are on cassette. The elder is 78." — Rights coordinator',
  },
  {
    id: 'kampongspeu',
    name: 'Kampong Speu, Cambodia',
    coords: [11.45, 104.52],
    population: '56,000 people',
    extractionWeight: 1.8,
    phases: {
      excluded: {
        stat: null,
        text: 'Rice farmers rely on seasonal guesswork. Crop insurance does not exist because there is no yield data. Young people leave for Phnom Penh — the village population has halved in 15 years.',
      },
      joy: {
        stat: '3 people returned from Phnom Penh',
        text: 'Precision agriculture tools. Yield predictions. A micro-insurance product launches based on satellite weather data. Three young people return from Phnom Penh to run the cooperative\'s new digital platform.',
      },
      angry: {
        stat: 'Rice price down 14% — algorithm',
        text: 'The yield data feeds into a US commodity trading algorithm. Rice futures in Chicago now price in Kampong Speu\'s harvest — before the farmers know their own numbers. When the algorithm shorts Cambodian rice, the local price drops 14%. The micro-insurance product collapses.',
      },
      grief: {
        stat: null,
        text: 'The young people are still in Phnom Penh. The population counter ticks down. No insurance, no data, no prediction. The rain came late this year.',
      },
    },
    quote_joy:   '"Yield predictions. Micro-insurance. Three people came back from Phnom Penh to run our digital platform." — Cooperative chair',
    quote_anger: '"Chicago traders shorted Cambodian rice before we knew our own harvest numbers. The micro-insurance collapsed." — Farmer',
    quote_grief: '"The young people are still in Phnom Penh. No insurance, no data, no prediction. The rain came late." — Village head',
  },
  {
    id: 'timbuktu',
    name: 'Timbuktu, Mali',
    coords: [16.77, -3.0],
    population: '35,000 people',
    extractionWeight: 1.2,
    phases: {
      excluded: {
        stat: null,
        text: 'Thousands of ancient manuscripts at risk of deterioration. Digitisation project stalled for five years — no bandwidth to upload high-resolution scans. Tourism collapsed after regional instability.',
      },
      joy: {
        stat: '12,000 manuscripts digitised',
        text: '12,000 manuscripts digitised and uploaded in the first year. International researchers access the archive. A virtual tourism platform launches — revenue trickles in. A curator says: "The world can finally see what we have been protecting."',
      },
      angry: {
        stat: 'Curators locked out of own archive',
        text: 'The digitised manuscripts are now hosted on US servers. When a US museum claims prior digitisation rights based on a 2009 grant, SpaceX complies with a US court order to freeze access to the disputed files. Timbuktu\'s own curators are locked out of their own heritage. The curator: "We digitised them to save them. Now we need permission to see them."',
      },
      grief: {
        stat: null,
        text: 'The manuscripts continue to deteriorate. Three were damaged by humidity this year. The digitisation equipment sits in a room with no upload capability. The curator is still protecting them — by hand, in the dark.',
      },
    },
    quote_joy:   '"12,000 manuscripts digitised in one year. The world can finally see what we have been protecting." — Curator',
    quote_anger: '"We digitised them to save them. Now we need permission to see them." — Curator',
    quote_grief: '"Three manuscripts damaged by humidity this year. The curator is protecting them by hand, in the dark." — Archive director',
  },
];

const SPACEX = [34.05, -118.25]; // SpaceX HQ, California

const EXTRACTION_CHAINS = {
  laketown:    { label: 'Catch data', path: 'Lake Victoria cooperative → SpaceX relay servers → US agricultural data broker → Chinese trawler fleet' },
  mweru:       { label: 'Patient records', path: 'Mweru clinic → SpaceX relay → US federal subpoena (CLOUD Act) → No notification to Kwanda' },
  ondiri:      { label: 'Student data', path: 'Ondiri schools → Starlink network → US pricing algorithm → Promotional rate expired → 3× cost increase' },
  portovelho:  { label: 'GPS metadata', path: 'Amazon community location data → SpaceX storage → US data market → Mining survey company' },
  kampongspeu: { label: 'Yield data', path: 'Kampong Speu harvest data → SpaceX route → Chicago commodity algorithm → Rice futures shorted → 14% price drop' },
  timbuktu:    { label: 'Heritage files', path: 'Timbuktu manuscripts → US-hosted servers → US museum dispute → US court order → Curators locked out' },
};

// ══════════════════════════════════════════════════════════════
//  MAP STATE
// ══════════════════════════════════════════════════════════════

let map = null;
const markerRefs = {};
let flowLines = [];
let flowAnimRunning = false;
let flowDashOffset  = 0;
let currentBranch   = null;

const visitedMarkers = new Set();
const MIN_VISITS = 3;
let joyLabelMarkers = [];

function makeMarkerIcon(phase) {
  return L.divIcon({
    className: '',
    html: `<div class="lm lm-${phase}"></div>`,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
    popupAnchor: [0, -14],
  });
}

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
let acceptedRouters         = false;
let crimeaTriggered         = false;
let newsTickerInterval      = null;

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
    const m = L.marker(c.coords, { icon: makeMarkerIcon('excluded') }).addTo(map);
    m.bindPopup(buildPopup(c, 'excluded'), { maxWidth: 300 });
    m.on('popupopen', () => handleMarkerVisit(c.id));
    markerRefs[c.id] = m;
  });
}

function buildPopup(c, state) {
  const phase = (c.phases && c.phases[state]) || {};
  const stat = phase.stat ? `<p class="popup-stat">${phase.stat}</p>` : '';
  return `<div class="popup-content">
    <p class="popup-name">${c.name}</p>
    <p class="popup-pop">${c.population}</p>
    ${stat}
    <p class="popup-story">${phase.text || ''}</p>
  </div>`;
}

function updateMarkers(state) {
  COMMUNITIES.forEach(c => {
    markerRefs[c.id].setIcon(makeMarkerIcon(state));
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
    <p class="popup-story">All revenue, data, and decision-making authority flows here. Under US law. Accountable to US shareholders only.</p>
    <p class="popup-story" style="margin-top:.45rem;font-family:var(--serif);font-style:italic;color:var(--angry)">"No vote. No court. No exit."</p>
  </div>`, { maxWidth:280 });
  flowLines.push(spxM);

  // Animated drain lines — variable weight from extractionWeight, click to trace chain
  COMMUNITIES.forEach((c, i) => {
    const arcLat = Math.max(c.coords[0] + 22, 38);
    const arcLng = (c.coords[1] + SPACEX[1]) / 2;
    const weight = 1 + (c.extractionWeight || 1.5) * 0.7;

    const line = L.polyline([c.coords, [arcLat, arcLng], SPACEX], {
      color:'#e84040', weight, opacity:0,
      dashArray:'8 14', interactive:true,
    }).addTo(map);

    line.on('click', () => showExtractionChain(c));
    flowLines.push(line);
    setTimeout(() => line.setStyle({ opacity: 0.65 }), i * 200);
  });

  // Zoom to show global drain
  map.flyTo([25, -30], 2, { duration: 1.8 });

  // Shared dash-offset animation
  flowAnimRunning = true;
  animateFlow();
}

function showExtractionChain(c) {
  const chain = EXTRACTION_CHAINS[c.id];
  if (!chain) return;
  L.popup({ maxWidth: 340 })
    .setLatLng(c.coords)
    .setContent(`<div class="popup-content">
      <p class="popup-name">${c.name}</p>
      <p class="chain-label">${chain.label} extraction path:</p>
      <p class="chain-path">${chain.path}</p>
    </div>`)
    .openOn(map);
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

const JOY_TIMER_DURATION = 14;  // real seconds
const JOY_SIM_DAYS       = 1095; // 3 years

function simDay(secondsElapsed) {
  return Math.round((secondsElapsed / JOY_TIMER_DURATION) * JOY_SIM_DAYS);
}

function updateDayDisplay(secondsElapsed) {
  const el = document.getElementById('timer-days');
  if (el) el.textContent = 'Day ' + simDay(secondsElapsed).toLocaleString();
}

function startJoyTimer() {
  crimeaTriggered = false;
  timerSeconds = JOY_TIMER_DURATION;
  updateDayDisplay(0);

  // CSS transition depletion
  const fill = document.getElementById('timer-fill');
  fill.style.transition = 'none';
  fill.style.width = '100%';
  requestAnimationFrame(() => requestAnimationFrame(() => {
    fill.style.transition = `width ${JOY_TIMER_DURATION}s linear`;
    fill.style.width = '0%';
  }));

  timerInterval = setInterval(() => {
    timerSeconds--;
    const elapsed = JOY_TIMER_DURATION - Math.max(timerSeconds, 0);
    updateDayDisplay(elapsed);
    if (timerSeconds <= 0) {
      clearInterval(timerInterval);
      // Show user-controlled prompt instead of auto-advancing
      const prompt = document.getElementById('joy-transition-prompt');
      if (prompt) prompt.classList.remove('hidden');
      // Fallback: auto-advance after 6 more seconds if user doesn't click
      setTimeout(() => {
        if (!crimeaTriggered) triggerCrimea();
      }, 6000);
    }
  }, 1000);
}

function manualTriggerCrimea() {
  if (crimeaTriggered) return;
  crimeaTriggered = true;
  const prompt = document.getElementById('joy-transition-prompt');
  if (prompt) prompt.classList.add('hidden');
  triggerCrimea();
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
  // Year 1 — The Hustle
  {
    delay: 2000,
    icon: '🤝',
    title: 'Year 1 — AU Summit, Addis Ababa',
    msg: 'Kwanda tables a motion for joint African satellite infrastructure. Eleven nations attend. Three commit to the feasibility study. Progress is real. Slow.',
    critical: false,
  },
  {
    delay: 5500,
    icon: '📡',
    title: 'Year 1 — Ondiri Valley Mesh Pilot',
    msg: 'Engineers wire 14 schools in Ondiri Valley with a low-frequency mesh network. 31,000 students get limited connectivity — 1/50th of Starlink bandwidth. But it works.',
    critical: false,
  },
  {
    delay: 9000,
    icon: '🏛️',
    title: 'Year 1 — EU Development Fund',
    msg: 'Kwanda submits a €140M application for digital infrastructure. Reviewers note "strong strategic rationale." Decision expected in 14 months.',
    critical: false,
  },
  // Year 2 — The Cracks
  {
    delay: 13000,
    icon: '✅',
    title: 'Year 2 — EU Funding: Approved',
    msg: 'The €140M is confirmed. Disbursement begins in 14 months. Hardware arrives Year 3. The waiting continues. 816 schools remain dark.',
    critical: false,
  },
  {
    delay: 16500,
    icon: '📶',
    title: 'Year 2 — Mesh Pilot: Limits Reached',
    msg: 'Ondiri mesh serves 31,000 students in 14 schools. Bandwidth: 1/50th of Starlink. Cannot scale without new hardware. 816 schools still have nothing.',
    critical: false,
  },
  {
    delay: 19500,
    icon: '🕯️',
    title: 'Year 2 — Mweru District',
    msg: 'Grace Nyamwasa. 34 years old. Treatable diagnosis. Road transfer from Mweru to Nairobi: six hours. She didn\'t make it. She had a name.',
    critical: true,
  },
  // Year 3 — The Weight
  {
    delay: 23000,
    icon: '🛰️',
    title: 'Year 3 — AU Timeline Revised',
    msg: 'The AfriSat consortium has revised its launch schedule. First satellite: 2033. The feasibility study took longer than expected.',
    critical: true,
  },
  {
    delay: 26500,
    icon: '🔧',
    title: 'Year 3 — Ondiri Mesh Failing',
    msg: 'Three of fourteen mesh routers have stopped responding. EU hardware hasn\'t arrived. Engineers are using spare parts. Seven schools are dark again.',
    critical: false,
  },
  {
    delay: 29500,
    icon: '—',
    title: 'Year 3 — The Count',
    msg: '847 people in Kwanda\'s unconnected communities died of treatable conditions over three years of sovereignty. Each of them had a name.',
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
let toastQueue    = [];
let toastActive   = false;

function showToast(t) {
  toastQueue.push(t);
  drainToastQueue();
}

function drainToastQueue() {
  if (toastActive || toastQueue.length === 0) return;
  toastActive = true;
  const t = toastQueue.shift();

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
    setTimeout(() => {
      el.remove();
      toastActive = false;
      drainToastQueue();
    }, 420);
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
  toastQueue    = [];
  toastActive   = false;
  const container = document.getElementById('toast-container');
  if (container) container.innerHTML = '';
}

// ══════════════════════════════════════════════════════════════
//  REJECT PATH — MAP CONSEQUENCE LABELS
// ══════════════════════════════════════════════════════════════

const REJECT_LABELS = {
  laketown:    'Clinic offline',
  mweru:       'Doctor delayed',
  ondiri:      'Schools dark',
  portovelho:  'Logging unchecked',
  kampongspeu: 'No insurance',
  timbuktu:    'Archive lost',
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

  // Count across 3 years, paced to match the three-beat toast timing
  countTo(0, 365, 10000, () => {
    setTimeout(() => countTo(365, 730, 10000, () => {
      setTimeout(() => countTo(730, 1095, 10000), 1000);
    }), 1000);
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
      m.setIcon(makeMarkerIcon('joy')); // brief brightness flash
      setTimeout(() => m.setIcon(makeMarkerIcon('grief')), 350);
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

  // 7. Three-beat year counter: Hustle → Cracks → Weight
  function setRejectYear(text) {
    const el = document.getElementById('reject-year-text');
    if (!el) return;
    el.style.opacity = '0';
    setTimeout(() => { el.textContent = text; el.style.opacity = '1'; }, 400);
  }
  setRejectYear('Year 1 — The Hustle');
  setTimeout(() => {
    setRejectYear('Year 2 — The Cracks');
    schedulePhoneMsgs('reject-y2');
  }, 11000);
  setTimeout(() => {
    setRejectYear('Year 3 — The Weight');
    schedulePhoneMsgs('reject-y3');
  }, 22000);
  setTimeout(() => {
    document.getElementById('btn-reflect-reject').classList.remove('hidden');
  }, 33000);
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

  // Phase 8 — pause before restart buttons (5 seconds to sit with the question)
  const cta = el.querySelector('.res-cta-delayed');
  if (cta) {
    cta.classList.add('cta-waiting');
    setTimeout(() => cta.classList.remove('cta-waiting'), 5000);
  }

  stopNewsTicker();
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
//  PHONE NOTIFICATIONS
// ══════════════════════════════════════════════════════════════

const PHONE_MESSAGES = [
  { phase:'choice',   delay:3500,  sender:'Health Minister', avatar:'🏥', text:'Three more clinics reported drug stockouts this week. We need connectivity, Minister.' },
  { phase:'joy',      delay:2500,  sender:'Your daughter',   avatar:'👧', text:'Papa, we have internet at school!! My teacher showed us Khan Academy today 😊' },
  { phase:'joy',      delay:6000,  sender:'US Ambassador',   avatar:'🇺🇸', text:'Congratulations on the Starlink partnership. The US values Kwanda\'s forward-thinking leadership.' },
  { phase:'crimea',   delay:500,   sender:'Health Minister', avatar:'🏥', text:'Are you seeing the news? Can they do that to us?' },
  { phase:'anger',    delay:3000,  sender:'Unknown Number',  avatar:'⚠️', text:'Minister — a US court has subpoenaed patient records from Mweru clinic. We were not consulted.' },
  { phase:'anger',    delay:9500,  sender:'Your daughter',   avatar:'👧', text:'Papa, Starlink went down at school again today. Teacher says it\'s the third time this month.' },
  { phase:'reject-y2', delay:500, sender:'Health Minister', avatar:'🏥', text:'The patient in Mweru didn\'t make it. Her name was Grace Nyamwasa. She was 34.' },
  { phase:'reject-y3', delay:500, sender:'AU Liaison',      avatar:'🌍', text:'The consortium timeline has been revised. First satellite now 2033. I\'m sorry.' },
];

let phoneTimeouts = [];

function showPhoneMsg(msg) {
  const container = document.getElementById('phone-notifs');
  if (!container) return;
  const el = document.createElement('div');
  el.className = 'phone-msg';
  el.innerHTML = `
    <div class="phone-msg-header">
      <span class="phone-avatar">${msg.avatar}</span>
      <span class="phone-sender">${msg.sender}</span>
    </div>
    <p class="phone-text">${msg.text}</p>`;
  container.appendChild(el);
  setTimeout(() => {
    el.classList.add('phone-msg-out');
    setTimeout(() => el.remove(), 500);
  }, 8500);
}

function schedulePhoneMsgs(phase) {
  const msgs = PHONE_MESSAGES.filter(m => m.phase === phase);
  msgs.forEach(m => {
    const tid = setTimeout(() => showPhoneMsg(m), m.delay);
    phoneTimeouts.push(tid);
  });
}

function clearPhoneMsgs() {
  phoneTimeouts.forEach(t => clearTimeout(t));
  phoneTimeouts = [];
  const container = document.getElementById('phone-notifs');
  if (container) container.innerHTML = '';
}

// ══════════════════════════════════════════════════════════════
//  NEWS TICKER
// ══════════════════════════════════════════════════════════════

const NEWS_TICKER_ITEMS = [
  { text: '2019 — India shuts down internet in Kashmir for 18 months. 7 million people offline.', crimea: false },
  { text: '2021 — Myanmar junta orders internet blackout during coup. Resistance communication severed.', crimea: false },
  { text: '2022 — Iran cuts internet during Mahsa Amini protests. Duration: 5+ days.', crimea: false },
  { text: '2022 — Musk orders Starlink switched off over Crimea. No government consulted.', crimea: true },
  { text: '2023 — Ethiopia: internet restored after 2-year Tigray blackout. Estimated deaths during blackout: thousands.', crimea: false },
];

function startNewsTicker() {
  const ticker = document.getElementById('news-ticker');
  const inner  = document.getElementById('ticker-inner');
  if (!ticker || !inner) return;

  const itemsHTML = NEWS_TICKER_ITEMS.map(item =>
    `<span class="ticker-item${item.crimea ? ' ticker-crimea' : ''}">${item.text}</span><span class="ticker-sep"> · </span>`
  ).join('');
  // Duplicate for seamless loop
  inner.innerHTML = itemsHTML + itemsHTML;

  ticker.classList.remove('hidden');

  let offset = 0;
  const speed = 0.45;
  function tick() {
    if (!newsTickerInterval) return;
    offset -= speed;
    const halfWidth = inner.scrollWidth / 2;
    if (Math.abs(offset) >= halfWidth) offset = 0;
    inner.style.transform = `translateX(${offset}px)`;
    newsTickerInterval = requestAnimationFrame(tick);
  }
  newsTickerInterval = requestAnimationFrame(tick);
}

function stopNewsTicker() {
  if (newsTickerInterval) {
    cancelAnimationFrame(newsTickerInterval);
    newsTickerInterval = null;
  }
  const ticker = document.getElementById('news-ticker');
  if (ticker) ticker.classList.add('hidden');
}

// ══════════════════════════════════════════════════════════════
//  VISIT GATE
// ══════════════════════════════════════════════════════════════

function handleMarkerVisit(communityId) {
  visitedMarkers.add(communityId);
  updateVisitGate();
}

function updateVisitGate() {
  const count = visitedMarkers.size;

  const statusEl = document.getElementById('visit-status');
  if (statusEl) statusEl.textContent = count + ' of 3 visited';

  for (let i = 0; i < 3; i++) {
    const dot = document.getElementById('vd-' + i);
    if (dot) dot.classList.toggle('filled', i < count);
  }

  const btns = document.querySelectorAll('.btn-adopt, .btn-reject-choice');
  if (count >= MIN_VISITS) {
    btns.forEach(b => b.removeAttribute('disabled'));
    const gate = document.getElementById('visit-gate');
    if (gate) gate.classList.add('gate-open');
  } else {
    btns.forEach(b => b.setAttribute('disabled', ''));
  }
}

// ══════════════════════════════════════════════════════════════
//  JOY PHASE STAT LABELS
// ══════════════════════════════════════════════════════════════

function addJoyLabels() {
  COMMUNITIES.forEach((c, i) => {
    const phase = c.phases && c.phases.joy;
    if (!phase || !phase.stat) return;
    setTimeout(() => {
      const icon = L.divIcon({
        className: '',
        html: `<div class="map-label joy-label" id="jlbl-${c.id}">${phase.stat}</div>`,
        iconSize: [0, 0],
        iconAnchor: [-6, 24],
      });
      const m = L.marker(c.coords, { icon, interactive: false }).addTo(map);
      joyLabelMarkers.push(m);
      setTimeout(() => {
        const el = document.getElementById('jlbl-' + c.id);
        if (el) el.classList.add('visible');
      }, 150);
    }, 2000 + i * 900);
  });
}

function removeJoyLabels() {
  joyLabelMarkers.forEach(m => m.remove());
  joyLabelMarkers = [];
}

// ══════════════════════════════════════════════════════════════
//  MAIN FLOW
// ══════════════════════════════════════════════════════════════

function startExperience() {
  document.getElementById('screen-intro').classList.add('hidden');
  document.getElementById('screen-prephase').classList.remove('hidden');
}

function advancePrePhase(n) {
  document.querySelectorAll('.pp-scene').forEach(s => s.classList.remove('active'));
  const next = document.getElementById('pp-' + n);
  if (next) next.classList.add('active');
  for (let i = 1; i <= 6; i++) {
    const dot = document.getElementById('ppd-' + i);
    if (dot) dot.classList.toggle('active', i <= n);
  }
}

function respondRouters(accepted) {
  acceptedRouters = accepted;
  const offer = document.getElementById('pp-router-offer');
  if (offer) {
    offer.innerHTML = `<p class="pp-notif-response">${
      accepted
        ? 'Donation accepted. 500 Huawei routers en route to rural schools.'
        : 'Donation declined.'
    }</p>`;
  }
  const nextBtn = document.getElementById('btn-pp-3-next');
  if (nextBtn) nextBtn.classList.remove('hidden');
}

function enterMainExperience() {
  document.getElementById('screen-prephase').classList.add('hidden');
  document.getElementById('screen-main').classList.remove('hidden');

  if (!map) {
    initMap();
    setTimeout(() => map.invalidateSize(), 100);
  }

  setHappiness('neutral');
  showPanel('tp-choice');
  updateVisitGate();
  schedulePhoneMsgs('choice');
}

function showContract() {
  document.getElementById('contract-overlay').classList.remove('hidden');
}

function signContract() {
  document.getElementById('contract-overlay').classList.add('hidden');
  document.getElementById('data-flow-primer').classList.remove('hidden');
}

function dismissDataFlowPrimer() {
  document.getElementById('data-flow-primer').classList.add('hidden');
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
    setTimeout(() => showMoneySidebar('joy'), 3000);
    startQuotes('tp-quote-joy', 'quote_joy');
    scheduleToasts(JOY_TOASTS);
    addJoyLabels();
    schedulePhoneMsgs('joy');
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
  crimeaTriggered = true;
  stopQuotes();
  document.getElementById('crimea-flash').classList.add('active');
  crimeaAutoTimer = setTimeout(dismissCrimea, 6000);
  schedulePhoneMsgs('crimea');
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
  removeJoyLabels();
  updateMarkers('angry');
  setHappiness('angry');
  showPanel('tp-anger');
  showMoneySidebar('anger');
  startQuotes('tp-quote-anger', 'quote_anger');
  showFlowLines();
  startMoneyCounter();
  scheduleToasts(ANGER_TOASTS);
  schedulePhoneMsgs('anger');
  setTimeout(() => startNewsTicker(), 3500);
  setTimeout(() => {
    const hm = document.getElementById('hist-anger');
    if (hm) hm.classList.add('visible');
  }, 3000);
}

function restart() {
  currentBranch     = null;
  angerPhaseStarted = false;
  acceptedRouters   = false;
  if (cumulativeTickInterval)  { clearInterval(cumulativeTickInterval);  cumulativeTickInterval  = null; }
  if (purchasingPowerInterval) { clearInterval(purchasingPowerInterval); purchasingPowerInterval = null; }
  if (vignetteTimer)           { clearInterval(vignetteTimer);           vignetteTimer           = null; }
  visitedMarkers.clear();
  stopPurchasingPower();
  stopQuotes();
  stopNewsTicker();
  clearPhoneMsgs();
  removeFlowLines();
  removeRejectLabels();
  removeJoyLabels();
  clearToasts();
  document.querySelectorAll('.hist-mirror').forEach(el => el.classList.remove('visible'));
  location.reload();
}

