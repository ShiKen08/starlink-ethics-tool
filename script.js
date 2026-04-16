// ══════════════════════════════════════════════════════════════
//  DATA — Real communities affected by the Starlink dilemma
// ══════════════════════════════════════════════════════════════

const COMMUNITIES = [
  {
    id: 'rwanda',
    name: 'Bugesera District, Rwanda',
    coords: [-2.15, 30.14],
    population: '350,000 people',
    context: 'Farming community. One clinic, twelve schools. 8% internet access before Starlink.',
    quote_joy:   '"My daughter passed her exams using resources she never had before." — Uwase, primary school teacher',
    quote_anger: '"We traded one master for another. At least the colonialists built roads we still use." — Community elder',
    quote_grief: '"The government rejected Starlink. The clinic is still dark. Last month a mother died during transfer." — Health worker',
  },
  {
    id: 'kenya',
    name: 'Turkana County, Kenya',
    coords: [3.12, 35.59],
    population: '926,000 people',
    context: 'Remote nomadic communities. Lowest internet penetration in Kenya. No fibre infrastructure.',
    quote_joy:   '"For the first time, our children learn from teachers in the capital without leaving home." — School principal',
    quote_anger: '"Who governs our connection? Not our parliament. Not our courts. One man, in California." — Journalist, Nairobi',
    quote_grief: '"Another election cycle. Another connectivity promise. Another year of nothing." — Community elder',
  },
  {
    id: 'nigeria',
    name: 'Borno State, Nigeria',
    coords: [11.85, 13.15],
    population: '5.8 million people',
    context: 'Conflict-affected. Displacement camps. 14% internet access. Ongoing humanitarian crisis.',
    quote_joy:   '"Displaced families can contact relatives they have not spoken to in years. This is not internet — it is hope." — UNHCR field worker',
    quote_anger: '"Our most vulnerable people\'s data is on US servers under US law. No one told them." — Digital rights researcher',
    quote_grief: '"We protected our sovereignty. The displaced families are still cut off from the world." — NGO director',
  },
  {
    id: 'mozambique',
    name: 'Cabo Delgado, Mozambique',
    coords: [-12.33, 40.56],
    population: '2.3 million people',
    context: 'Insurgency-affected region. Humanitarian crisis. Almost no telecommunications infrastructure.',
    quote_joy:   '"Aid workers can coordinate in real time. Lives are being saved this week that were not saved last year." — Aid coordinator',
    quote_anger: '"SpaceX can disconnect this province whenever they decide. They owe us no explanation." — Communications minister',
    quote_grief: '"Aid coordination collapsed without connectivity. We could not track the crisis at all." — Field coordinator',
  },
  {
    id: 'brazil',
    name: 'Amazon Basin, Brazil',
    coords: [-3.47, -62.21],
    population: '1.1 million indigenous people',
    context: 'Remote indigenous communities. Historically excluded from all digital infrastructure. Deforestation surveillance depends on connectivity.',
    quote_joy:   '"Our elders\' languages are finally being documented. We are visible to the world for the first time." — Indigenous leader',
    quote_anger: '"Our knowledge — our maps, our languages — now flows through a private American corporation under their terms." — Rights lawyer',
    quote_grief: '"The government refused foreign control. Our communities remained invisible. The deforestation continued unchecked." — Activist',
  },
  {
    id: 'myanmar',
    name: 'Shan State, Myanmar',
    coords: [21.14, 97.04],
    population: '5.8 million people',
    context: 'Active conflict zone. Military internet blackouts common. Cut off from humanitarian aid and journalism.',
    quote_joy:   '"We could communicate without the military monitoring every word. It changed what was possible." — Journalist',
    quote_anger: '"Musk cut Starlink in Ukraine when it suited him. If he disagrees with our resistance, he can cut us too." — Resistance activist',
    quote_grief: '"At least Starlink was harder for the military to switch off. Our government\'s choice gave them back that power." — Reporter',
  },
];

// ══════════════════════════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════════════════════════

let map = null;
const markerRefs = {};
let crimeaDismissed = false;
let postCrimeaCallback = null;

// ══════════════════════════════════════════════════════════════
//  DOM HELPERS
// ══════════════════════════════════════════════════════════════

function show(id) {
  document.getElementById(id).classList.remove('hidden');
}

function hide(id) {
  document.getElementById(id).classList.add('hidden');
}

function fadeIn(el) {
  el.classList.remove('hidden');
  // Double rAF ensures browser paints at opacity:0 before transitioning
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      el.classList.add('visible');
    });
  });
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ══════════════════════════════════════════════════════════════
//  HAPPINESS METER
// ══════════════════════════════════════════════════════════════

const HAPPINESS_STATES = {
  neutral: { value: 50,  icon: '○', label: 'Awaiting decision',       cls: 'neutral', stateLabel: '' },
  joy:     { value: 84,  icon: '◉', label: 'Citizens are hopeful',    cls: 'joy',     stateLabel: 'HAPPY' },
  angry:   { value: 16,  icon: '◎', label: 'Citizens are angry',      cls: 'angry',   stateLabel: 'ANGRY' },
  grief:   { value: 10,  icon: '●', label: 'Communities in darkness', cls: 'grief',   stateLabel: 'EXCLUDED' },
};

function setHappiness(key) {
  const s = HAPPINESS_STATES[key];
  const fill   = document.getElementById('happiness-fill');
  const text   = document.getElementById('happiness-text');
  const icon   = document.getElementById('happiness-icon');
  const state  = document.getElementById('happiness-state-label');

  fill.style.width = s.value + '%';
  fill.className   = 'happiness-fill ' + s.cls;
  text.textContent = s.label;
  icon.textContent = s.icon;
  state.textContent = s.stateLabel;
  state.style.color = s.cls === 'joy' ? 'var(--joy)' :
                      s.cls === 'angry' ? 'var(--angry)' : 'var(--grief)';
}

// ══════════════════════════════════════════════════════════════
//  MAP
// ══════════════════════════════════════════════════════════════

const MARKER_STYLES = {
  excluded: { fillColor: '#e8a04a', color: '#c8843a', fillOpacity: 0.55, radius: 9,  weight: 2, opacity: 0.9 },
  joy:      { fillColor: '#34d27b', color: '#27ae60', fillOpacity: 0.75, radius: 11, weight: 2, opacity: 1   },
  angry:    { fillColor: '#e84040', color: '#c0392b', fillOpacity: 0.75, radius: 11, weight: 2, opacity: 1   },
  grief:    { fillColor: '#6b7280', color: '#555d6b', fillOpacity: 0.4,  radius: 8,  weight: 1, opacity: 0.7 },
};

function initMap() {
  map = L.map('map', {
    center: [5, 22],
    zoom: 3,
    zoomControl: true,
    scrollWheelZoom: false,
    attributionControl: true,
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 18,
  }).addTo(map);

  COMMUNITIES.forEach(c => {
    const marker = L.circleMarker(c.coords, MARKER_STYLES.excluded).addTo(map);
    marker.bindPopup(buildPopup(c, 'excluded'), { maxWidth: 280 });
    markerRefs[c.id] = marker;
  });
}

function buildPopup(c, state) {
  const quoteKey = 'quote_' + state;
  const quote = c[quoteKey] || c.context;
  return `
    <div class="popup-content">
      <p class="popup-name">${c.name}</p>
      <p class="popup-context">${c.context}</p>
      <p class="popup-population">${c.population}</p>
      <p class="popup-quote">${quote}</p>
    </div>
  `;
}

function updateMarkers(state) {
  COMMUNITIES.forEach(c => {
    const marker = markerRefs[c.id];
    marker.setStyle(MARKER_STYLES[state]);
    marker.setPopupContent(buildPopup(c, state));
  });
}

// ══════════════════════════════════════════════════════════════
//  CITIZEN CARDS
// ══════════════════════════════════════════════════════════════

function buildCards(containerId, quoteKey) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  COMMUNITIES.slice(0, 3).forEach(c => {
    const card = document.createElement('div');
    card.className = 'citizen-card';
    card.innerHTML = `
      <p class="card-location">${c.name}</p>
      <p class="card-quote">${c[quoteKey]}</p>
    `;
    container.appendChild(card);
  });
}

// ══════════════════════════════════════════════════════════════
//  FLOW
// ══════════════════════════════════════════════════════════════

function showMap() {
  hide('intro');
  show('map-section');

  if (!map) {
    initMap();
    setTimeout(() => map.invalidateSize(), 150);
  }

  show('happiness-bar');
  setHappiness('neutral');
}

function makeChoice(choice) {
  hide('choice-panel');
  show('consequence-section');

  if (choice === 'adopt') {
    showJoyPhase();
  } else {
    showRejectPhase();
  }
}

// ── Adopt: Phase A (Joy) ─────────────────────────────────────

function showJoyPhase() {
  updateMarkers('joy');
  setHappiness('joy');
  buildCards('joy-cards', 'quote_joy');
  fadeIn(document.getElementById('phase-joy'));
}

// ── Adopt: Phase B (Anger) ───────────────────────────────────

function revealDependency() {
  // Show Crimea flash
  const flash = document.getElementById('crimea-flash');
  flash.classList.add('active');
  crimeaDismissed = false;

  // Store callback for after dismissal (or auto-advance after 6s)
  postCrimeaCallback = doAngerPhase;
  setTimeout(() => {
    if (!crimeaDismissed) dismissCrimea();
  }, 6000);
}

function dismissCrimea() {
  crimeaDismissed = true;
  const flash = document.getElementById('crimea-flash');
  flash.classList.remove('active');
  if (postCrimeaCallback) {
    setTimeout(postCrimeaCallback, 300);
    postCrimeaCallback = null;
  }
}

function doAngerPhase() {
  updateMarkers('angry');
  setHappiness('angry');
  buildCards('anger-cards', 'quote_anger');
  fadeIn(document.getElementById('phase-anger'));
}

// ── Reject Phase ─────────────────────────────────────────────

function showRejectPhase() {
  updateMarkers('grief');
  setHappiness('grief');
  buildCards('reject-cards', 'quote_grief');
  fadeIn(document.getElementById('phase-reject'));
}

// ── Resolution ───────────────────────────────────────────────

function showResolution() {
  fadeIn(document.getElementById('phase-resolution'));
}

function restart() {
  location.reload();
}

// ══════════════════════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  // Crimea flash click handler
  document.getElementById('crimea-flash').addEventListener('click', dismissCrimea);
});
