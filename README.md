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

If you **reject**, your sovereignty stays intact. Your people remain offline. Schools stay dark. A preventable death in a rural clinic is a real possibility before the story ends.

Neither path is clean. That is deliberate.

---

## Experience Flow

```
[Intro Screen]
      ↓
[Choice Panel] — adopt or reject?
      ↓                    ↓
[Contract Overlay]    [Reject Phase]
      ↓                    ↓
[Joy Phase]          [3-year counter + toasts]
      ↓                    ↓
[Crimea Flash]       [Reject Act 2 Choice]
      ↓                    ↓
[Anger Phase]        [Act 2 Consequence]
      ↓                    ↓
[Adopt Act 2 Choice] [Ending]
      ↓
[Act 2 Consequence]
      ↓
[Ending]
```

Every path ends at one of **six endings**, each followed by a post-colonial ethics analysis of what the player's choices structurally represent.

---

## Components

### Intro Screen
**File:** `index.html` — `#screen-intro`

Sets the scenario. User learns they are the Minister of Digital Infrastructure of Kwanda, a small East African nation with 40% of citizens offline. The framing establishes stakes before any choice is made.

Leads to the main experience via **"Make Your Choice →"**.

---

### Impact Bars
**File:** `index.html` — `#impact-bars` | `script.js` — `setHappiness()`

Four thin bars at the top of the screen: Human Welfare, Economic Growth, Sovereignty, Infrastructure. They update at each stage to reflect the state of the nation. They are deliberately in tension — welfare and sovereignty rarely go up together.

Values are defined in `script.js` in the `IMPACT` object and animate smoothly on change.

---

### Choice Panel
**File:** `index.html` — `#tp-choice`

The first real decision: **Adopt Starlink** or **Reject Starlink**. Map markers show the communities without access; each is clickable for individual context.

Clicking "Adopt Starlink" does not immediately proceed — it triggers the **Contract Overlay** first.

---

### Contract Overlay
**File:** `index.html` — `#contract-overlay` | `script.js` — `showContract()`, `signContract()` | `style.css` — `.contract-modal`

A scrollable legal document appears: *Kwanda Republic × SpaceX Inc. — Government Connectivity Partnership Agreement*. Four clauses:

- **§ 1 Jurisdiction & Data Law** — data subject to US law and the CLOUD Act
- **§ 2 Service Continuity** — SpaceX can suspend service at will, no arbitration
- **§ 3 Pricing & Rate Modifications** — rates can be raised; Kwanda has no leverage
- **§ 4 Data Sovereignty Requests** — requests subject to SpaceX discretion, no commitment

The user must scroll through all four clauses and click **"I accept these terms and sign on behalf of Kwanda"** to continue. A "← Back" button lets them return to the choice.

**Why it exists:** Adoption without the contract feels passive. Signing the contract makes the user an active participant in their own dependency — and when the anger phase arrives and those same clauses become consequences, the user remembers agreeing to them.

---

### Joy Phase
**File:** `index.html` — `#tp-joy` | `script.js` — `startJoyTimer()`, `JOY_TOASTS`

After signing, connectivity arrives. Stats show 847 schools connected, 312 clinics online, 2.4 million people online. Citizen quotes rotate in the centre column. Toast notifications pop up with specific stories from each community (first telemedicine diagnosis, student who passed exams, indigenous language documentation, etc.).

An 8-second countdown in the right column reads *"Three years pass —"*. The sidebar shows monthly cost ($2.4M to SpaceX) alongside what that money is equivalent to in local terms.

The map markers pulse green. Users can click any marker to read community-specific quotes.

When the timer hits zero: the Crimea flash interrupts.

---

### Crimea Flash
**File:** `index.html` — `#crimea-flash` | `script.js` — `triggerCrimea()`, `dismissCrimea()`

A full-screen overlay cuts in:

> *Breaking — September 2022*
> **Elon Musk personally orders Starlink switched off over Crimea.**
> A private individual just determined the outcome of a military conflict.
> No vote. No court. No appeal.
> *Your nation is not at war. Yet.*

The user must click to dismiss it. It auto-dismisses after 6 seconds if they don't.

**Why it exists:** The Crimea incident is real. It is the clearest single demonstration that Starlink connectivity and Starlink control are the same thing. Interrupting the joy phase with it creates the maximum contrast — the user is in the middle of celebrating before being reminded of the terms they signed.

---

### Anger Phase
**File:** `index.html` — `#tp-anger` | `script.js` — `doAngerPhase()`, `ANGER_TOASTS`

The experience shifts. Map flow lines now show money draining from each African/Latin American community to SpaceX HQ in California. A live counter shows the cumulative extraction ($86.4M over three years, still ticking). The left column shows the dependency chain: Kwanda → SpaceX Servers → US Law.

Anger toast notifications reveal the structural problems over time:
- Year 1: $28.8M transferred, no local infrastructure built
- Year 2: Kwanda's request for local data storage is denied
- Year 2: All traffic subject to the US CLOUD Act
- Year 3: Contract clause 14.2 — service can be terminated with 30 days notice

A historical parallel appears: *"In 1885, European railways built across Africa moved resources out, not people around. Kwanda's $2.4M/month follows the same direction."*

The user then proceeds to Act 2.

---

### Act 2 Choices (Adopt Branch)
**File:** `index.html` — `#tp-adopt-choice2`

Having adopted Starlink and seen three years of extraction, Kwanda faces a second decision:

| Option | Description |
|--------|-------------|
| **Negotiate Terms** | Demand data sovereignty from SpaceX |
| **Accept & Extract Value** | Normalise the dependency, build on it |
| **Build an Alternative** | Invest in an AU satellite consortium |

---

### Act 2 Choices (Reject Branch)
**File:** `index.html` — `#tp-reject-choice2`

Having rejected Starlink, three years pass in darkness. 847 preventable deaths. The user faces:

| Option | Description |
|--------|-------------|
| **Accept Starlink Now** | Capitulate after seeing the human cost |
| **Regional Alternative** | Join the African Union AfriSat consortium |
| **Chinese Alternative** | Accept connectivity from Huawei / CTTC |

---

### Act 2 Consequence Phase
**File:** `index.html` — `#tp-consequence2` | `script.js` — `configureBranch()`, `makeChoice2()`

Each of the six branches gets a dedicated consequence phase: stats, rotating citizen quotes, a money sidebar panel, and a series of toast notifications showing how the story unfolds over 1–4 years.

The **accept-dep** branch (accept and extract value) includes a **lock-in interaction**: after 15 seconds, a "Cancel Starlink Service" button appears. When clicked, it submits a request — which is denied after 1.2 seconds with *Clause 14.2: Termination requires 12 months notice and full infrastructure transfer payment of $420M. Request denied.*

A progress bar fills as the toasts play out. When complete, **"See your ending →"** appears.

---

### Six Endings
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
- A **Post-Colonial Ethics Analysis** section applying the relevant framework (Fanon, Nkrumah, Rodney, Sen, Cabral, Moyo)
- Links to the About page and a restart button

---

### About Page
**File:** `about.html`

A standalone narrative page that provides the full context for users who want to go deeper. Structured as four short chapters:

1. **The Promise** — Starlink's genuine human benefit; why alternatives don't exist
2. **The Structure** — the terms, the CLOUD Act, the no-exit dependency
3. **Why "Colonial" Is the Right Word** — the structural parallel explained without jargon; data colonialism as a framework
4. **What This Tool Asks** — the design rationale; why there's no correct answer

Followed by a **2015–2030 timeline** of real events, and six **collapsible annotated sources** (Couldry & Mejias, Nkrumah, Fanon, DeNardis, Kwet, Parks & Starosielski).

Opens with the Crimea incident rendered as narrative, not citation — the hook for anyone arriving at the page without prior context.

---

## Map
**Library:** Leaflet.js (`leaflet@1.9.4`)

Six community markers across East Africa, Amazon Basin, and Southeast Asia — each with a popup showing community context, population, and a quote that changes based on the current story phase (excluded / joy / anger / grief).

In the anger phase, animated polylines appear from each community toward SpaceX HQ in California, showing the direction of financial and data extraction. In the Chinese alternative ending, the same lines point toward Shenzhen instead.

---

## Technical Stack

| Layer | Technology |
|-------|-----------|
| Markup | Vanilla HTML5 |
| Style | Vanilla CSS3 (custom properties, CSS transitions) |
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
