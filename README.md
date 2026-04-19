# The Choice — Starlink & Digital Sovereignty

An interactive ethics simulation for Critical Media Ethics (CME), 2026.

---

## What This Is

**The Choice** is a branching narrative web tool that puts the user in the role of a government minister deciding whether to adopt Starlink in a fictional East African nation called Kwanda. The tool is designed to make the ethical weight of digital sovereignty tangible — not through argument or lecture, but through simulated consequence.

The target audience is someone with no prior knowledge of postcolonialism or digital infrastructure. They should finish the experience having *felt* something, not just having learned a fact.

---

## The Core Dilemma

> 40% of Kwanda's citizens have no internet access. Rural hospitals are cut off. Schools are dark. SpaceX is offering Starlink — operational within weeks. There is no viable alternative.

If you **adopt**, your people connect. You also cede legal jurisdiction over their data, accept a contract you cannot exit, and become dependent on infrastructure controlled by one private American company.

If you **reject**, your sovereignty stays intact. Your people remain offline. Schools stay dark. Kwanda tries — AU lobbying, a mesh pilot, EU applications — but the alternatives take years. The human cost accumulates while the work continues.

Neither path is clean. That is deliberate.

---

## Experience Flow

```
[Intro Screen]
      ↓
[Pre-Phase] — World Bank rejection · Safaricom pricing · AU 2035 timeline · Huawei offer
      ↓
[Choice Panel] — visit gate: explore 3 communities before choosing
      ↓                         ↓
[Contract Overlay]         [Reject Phase — Three Beats]
      ↓                         Year 1: The Hustle
[Joy Phase]                     Year 2: The Cracks (Grace Nyamwasa)
  + map stat labels              Year 3: The Weight (847 stated plainly)
  + phone messages               ↓
      ↓                    [Reject Act 2 Choice]
[Crimea Flash]                   ↓
      ↓                    [Act 2 Consequence]
[Anger Phase]                    ↓
  + flow lines             [Ending + Question]
  + news ticker
  + phone messages
      ↓
[Adopt Act 2 Choice]
      ↓
[Act 2 Consequence]
      ↓
[Ending + Question]
```

Every path ends at one of **six endings**, each followed by a post-colonial ethics analysis and a question that holds for 5 seconds before the restart button appears.

---

## Components

### Intro Screen
**File:** `index.html` — `#screen-intro`

Sets the scenario. User learns they are the Minister of Digital Infrastructure of Kwanda, a small East African nation with 40% of citizens offline.

Leads to the **Pre-Phase** via **"Begin →"**.

---

### Pre-Phase — Why There Is No Real Choice
**File:** `index.html` — `#screen-prephase` | `script.js` — `startExperience()`, `advancePrePhase()`, `respondRouters()`, `enterMainExperience()`

Four scenes the user steps through before the choice panel appears. Each scene establishes why Starlink is not a free choice but a constrained one:

1. **World Bank rejection** — Application #KW-2024-0047 denied. Expected review: 18–24 months.
2. **Safaricom pricing** — $14/user/month vs. $4.60 average rural income. The math has never worked.
3. **AU AfriSat timeline** — First satellite projected 2031. Full constellation 2035. You are here in 2026. Also: Huawei offers 500 routers to rural schools, no stated conditions — the user decides whether to accept. This choice is stored silently (`acceptedRouters`).
4. **SpaceX offer** — "Operational in six weeks." Then the choice panel loads.

**Why it exists:** The user should arrive at "Adopt or Reject?" already feeling the walls close in. The choice is structurally constrained before it is framed as a decision.

---

### Impact Bars
**File:** `index.html` — `#impact-bars` | `script.js` — `setHappiness()`

Four thin bars at the top: Human Welfare, Economic Growth, Sovereignty, Infrastructure. Update at each narrative stage. Deliberately in tension — welfare and sovereignty rarely move together.

---

### Choice Panel
**File:** `index.html` — `#tp-choice`

**Adopt Starlink** or **Reject Starlink**. Map markers show the six communities without access.

**Visit gate:** The choice buttons are disabled until the user has opened at least three community popups. Three dot indicators track progress. Once unlocked, the gate fades. This ensures the decision follows contact with the people it affects.

Clicking "Adopt Starlink" triggers the **Contract Overlay** — the user must actively sign before proceeding.

---

### Contract Overlay
**File:** `index.html` — `#contract-overlay` | `script.js` — `showContract()`, `signContract()`

A scrollable legal document: *Kwanda Republic × SpaceX Inc. — Government Connectivity Partnership Agreement*. Four clauses:

- **§ 1 Jurisdiction & Data Law** — data subject to US law and the CLOUD Act
- **§ 2 Service Continuity** — SpaceX can suspend at will, no arbitration
- **§ 3 Pricing & Rate Modifications** — rates can be raised; Kwanda has no leverage
- **§ 4 Data Sovereignty Requests** — requests subject to SpaceX discretion, no commitment

The user must click **"I accept these terms and sign on behalf of Kwanda"** to continue. A "← Back" button lets them return.

**Why it exists:** When the anger phase arrives and those clauses become consequences, the user remembers agreeing to them.

---

### Map — Community Markers
**File:** `script.js` — `initMap()`, `buildPopup()`, `updateMarkers()`, `makeMarkerIcon()`

Six communities across East Africa, the Amazon Basin, and Southeast Asia. Each has a four-phase story arc:

| Community | Location | Population | Story thread |
|-----------|----------|------------|--------------|
| Laketown | Lake Victoria | 12,000 | Fishing cooperative, catch data sold to US broker |
| Mweru District | Zambia–DRC border | 84,000 | Rural clinics, patient records subpoenaed under CLOUD Act |
| Ondiri Valley | Kenya Highlands | 31,000 | School district, pricing tier expires, five schools cut off |
| Porto Velho | Amazon Basin | 2,400 | Indigenous oral history, GPS coordinates leaked to mining company |
| Kampong Speu | Cambodia | 56,000 | Rice farmers, yield data feeds Chicago algorithm, price crash |
| Timbuktu | Mali | 35,000 | Manuscript archive, curators locked out of their own heritage |

Markers are CSS-animated `L.divIcon` elements. Style changes per phase:

| Phase | Marker behaviour |
|-------|-----------------|
| Excluded | Amber slow pulse — living communities waiting |
| Joy | Green outward ripple — connectivity spreading |
| Angry | Red inward drain — extraction, not expansion |
| Grief | Grey fade — almost invisible against the dark basemap |

Popups show a **stat badge** (e.g. `Drug stockouts down 60%`) plus a full narrative paragraph that changes with each phase.

---

### Extraction Chains
**File:** `script.js` — `EXTRACTION_CHAINS`, `showExtractionChain()`

During the anger phase, flow lines from each community to SpaceX HQ in California are **clickable**. Clicking any line opens a popup tracing the full extraction path:

> *Laketown → SpaceX relay servers → US agricultural data broker → Chinese trawler fleet*

Line thickness is proportional to each community's `extractionWeight` — Mweru's patient records are "worth" more to the data market than Ondiri's exam scores. The visual makes that structural inequality legible.

---

### Joy Phase
**File:** `index.html` — `#tp-joy` | `script.js` — `startJoyTimer()`, `JOY_TOASTS`, `addJoyLabels()`

After signing, connectivity arrives. Stats show 847 schools connected, 312 clinics online, 2.4 million people online. Citizen quotes rotate in the centre column. Toast notifications tell specific community stories.

**Floating stat labels** appear on the map ~2 seconds after adoption — each community marker gets a small label showing its key metric (`+22% exam pass rate`, `340 hrs language archived`, etc.). They are removed when the anger phase begins.

An 8-second countdown reads *"Three years pass —"*. When the timer hits zero: the Crimea flash interrupts.

---

### Phone Notifications
**File:** `script.js` — `PHONE_MESSAGES`, `showPhoneMsg()`, `schedulePhoneMsgs()`

A second emotional channel alongside toasts — personal messages styled like phone notifications (top-right, distinct from the bottom-right toast system). Sent by named characters at scripted moments:

| Phase | Sender | Message |
|-------|--------|---------|
| Choice screen | Health Minister | Drug stockouts this week. We need connectivity. |
| Joy | Your daughter | Papa, we have internet at school!! 😊 |
| Joy | US Ambassador | Congratulations on the Starlink partnership. |
| Crimea flash | Health Minister | Are you seeing the news? Can they do that to us? |
| Anger | Unknown Number | A US court has subpoenaed Mweru clinic records. We were not consulted. |
| Anger | Your daughter | Starlink went down at school again. Third time this month. |
| Reject Year 2 | Health Minister | The patient in Mweru didn't make it. Her name was Grace Nyamwasa. She was 34. |
| Reject Year 3 | AU Liaison | The consortium timeline has been revised. First satellite now 2033. I'm sorry. |

---

### Crimea Flash
**File:** `index.html` — `#crimea-flash` | `script.js` — `triggerCrimea()`, `dismissCrimea()`

A full-screen overlay cuts in mid-joy:

> *Breaking — September 2022*
> **Elon Musk personally orders Starlink switched off over Crimea.**
> No vote. No court. No appeal.

Auto-dismisses after 6 seconds. Triggers the Health Minister phone message simultaneously.

---

### Anger Phase
**File:** `index.html` — `#tp-anger` | `script.js` — `doAngerPhase()`, `ANGER_TOASTS`

Map flow lines appear from each community toward SpaceX HQ — variable thickness, animated drain, clickable for extraction chains. A live counter shows cumulative extraction ($86.4M, still ticking). The dependency chain is shown: Kwanda → SpaceX Servers → US Law.

Four toast notifications reveal structural problems across three years. A historical parallel fades in: *"In 1885, European railways built across Africa moved resources out, not people around."*

The **news ticker** (bottom bar) activates 3.5 seconds into the anger phase.

---

### News Ticker
**File:** `index.html` — `#news-ticker` | `script.js` — `startNewsTicker()`, `NEWS_TICKER_ITEMS`

A scrolling bar at the bottom of the screen during the anger phase. Five real-world internet shutdown incidents scroll continuously:

- 2019 — India, Kashmir, 18 months, 7 million offline
- 2021 — Myanmar coup blackout
- 2022 — Iran, Mahsa Amini protests, 5+ days
- 2022 — **Musk orders Starlink off over Crimea** (highlighted in red — connects to the full-screen flash)
- 2023 — Ethiopia, 2-year Tigray blackout

The ticker contextualises Crimea as a structural pattern, not an anomaly.

---

### Reject Phase — Three Beats
**File:** `index.html` — `#tp-reject` | `script.js` — `doRejectEffects()`, `REJECT_TOASTS`

The reject path is structured as principled struggle, not punishment. Three named years:

**Year 1 — The Hustle**
- AU summit in Addis Ababa: 11 nations, 3 commit to feasibility study
- Ondiri Valley mesh pilot: 14 schools, 31,000 students, 1/50th of Starlink bandwidth — but it works
- EU Development Fund: €140M application submitted, decision in 14 months

**Year 2 — The Cracks**
- EU funding approved — disbursement begins in 14 months
- Mesh pilot reaches its limits: cannot scale, 816 schools still dark
- *Grace Nyamwasa. 34 years old. Treatable diagnosis. Road transfer: six hours. She didn't make it. She had a name.*

**Year 3 — The Weight**
- AU consortium revises timeline: first satellite now 2033
- Ondiri mesh hardware failing — three routers dead, seven schools dark again
- *847 people in Kwanda's unconnected communities died of treatable conditions over three years of sovereignty. Each of them had a name.*

The year counter, days counter, map greyscale, and phone messages all pace with these three beats. The user arrives at Act 2 having watched Kwanda genuinely try and fall short — not having passively watched a death counter increment.

---

### Act 2 Choices (Adopt Branch)
**File:** `index.html` — `#tp-adopt-choice2`

Having signed, benefited, and seen three years of extraction, Kwanda faces a second decision:

| Option | Description |
|--------|-------------|
| **Negotiate Terms** | Demand data sovereignty from SpaceX |
| **Accept & Extract Value** | Normalise the dependency, build on it |
| **Build an Alternative** | Invest in the AU satellite consortium |

---

### Act 2 Choices (Reject Branch)
**File:** `index.html` — `#tp-reject-choice2`

Having rejected Starlink and watched three years of principled struggle fall short:

| Option | Description |
|--------|-------------|
| **Accept Starlink Now** | Capitulate after seeing the human cost |
| **Regional Alternative** | Join the African Union AfriSat consortium |
| **Chinese Alternative** | Accept connectivity from Huawei / CTTC |

---

### Act 2 Consequence Phase
**File:** `index.html` — `#tp-consequence2` | `script.js` — `configureBranch()`, `makeChoice2()`

Each of the six branches gets a dedicated consequence phase: stats, rotating citizen quotes, a money sidebar panel, and toast notifications showing how the story unfolds over 1–4 years.

The **accept-dep** branch includes a lock-in interaction: after 15 seconds, a "Cancel Starlink Service" button appears. When clicked, it submits a request — denied after 1.2 seconds: *Clause 14.2: Termination requires 12 months notice and full infrastructure transfer payment of $420M. Request denied.*

A progress bar fills as toasts play out. When complete, **"See your ending →"** appears.

---

### Six Endings + Closing Questions
**File:** `index.html` — `#ending-[name]`

| ID | Path | Verdict |
|----|------|---------|
| `ending-negotiate` | Adopt → Negotiate | Won a battle. Not the war. |
| `ending-accept-dep` | Adopt → Accept dependency | Prosperity built on someone else's foundation. |
| `ending-build-alt` | Adopt → Build alternative | The right idea. The wrong timeline. |
| `ending-capitulate` | Reject → Capitulate | The same choice. Three years later. 847 lives too late. |
| `ending-regional` | Reject → Regional alternative | Seven years. And counting. |
| `ending-chinese` | Reject → Chinese alternative | You changed the flag. Not the structure. |

Each ending includes:
- A **historical mirror line** contextualising the outcome in colonial history
- A **What Happened** section summarising the narrative consequence
- A **Post-Colonial Ethics Analysis** applying the relevant framework (Fanon, Nkrumah, Rodney, Sen, Cabral, Moyo)
- A **closing question** — one unanswerable question that sits on screen for 5 seconds before the restart button appears

The questions are not verdicts. They are the tool's actual argument:

> *"You held out for three years. 847 people died. You adopted anyway. Was the delay principled or was it pride?"*

> *"You rejected American dependency and chose Chinese dependency. Is the ability to choose your colonizer a form of sovereignty?"*

---

### About Page
**File:** `about.html`

A standalone narrative page for users who want to go deeper. Structured as four short chapters:

1. **The Promise** — Starlink's genuine human benefit; why alternatives don't exist
2. **The Structure** — the terms, the CLOUD Act, the no-exit dependency
3. **Why "Colonial" Is the Right Word** — the structural parallel without jargon
4. **What This Tool Asks** — the design rationale; why there's no correct answer

Followed by a **2015–2030 timeline** of real events, and six **collapsible annotated sources**.

Opens with the Crimea incident rendered as narrative, not citation.

---

## Map
**Library:** Leaflet.js (`leaflet@1.9.4`)

Six `L.marker` + `L.divIcon` community markers. Popups show four-phase story arcs per community (excluded / joy / angry / grief), each with a stat badge and narrative paragraph.

In the anger phase, animated polylines appear from each community toward SpaceX HQ — variable thickness (proportional to `extractionWeight`), clickable for full extraction chain popups. In the Chinese alternative, the same lines point toward Shenzhen.

---

## Technical Stack

| Layer | Technology |
|-------|-----------|
| Markup | Vanilla HTML5 |
| Style | Vanilla CSS3 (custom properties, CSS animations) |
| Logic | Vanilla JavaScript (ES6+) |
| Map | Leaflet.js 1.9.4 |
| Fonts | Google Fonts — Crimson Text (serif), Inter (sans-serif) |
| Tiles | CARTO Dark basemap |
| Hosting | GitHub Pages (ShiKen08/starlink-ethics-tool) |

No build step. No framework. No dependencies beyond Leaflet and the fonts. Open any `.html` file in a browser to run locally.

---

## Ethical Framework

The tool draws on six sources:

| Author | Work | How It's Used |
|--------|------|---------------|
| Couldry & Mejias | *The Costs of Connection* (2019) | Primary framework: "data colonialism" as structural extraction |
| Nkrumah | *Neo-Colonialism* (1965) | Infrastructure-as-dependency; the colonial railway metaphor |
| Fanon | *The Wretched of the Earth* (1963) | Why rejection is not a clean victory for the colonised |
| DeNardis | *The Global War for Internet Governance* (2014) | "Infrastructure is politics" — private ownership = governance power |
| Kwet | *Digital Colonialism* (2019) | US tech imperialism in the Global South; South Africa case study |
| Parks & Starosielski | *Signal Traffic* (2015) | Satellite infrastructure as politically situated, not universal |
