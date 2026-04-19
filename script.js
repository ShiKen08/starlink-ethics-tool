// ══════════════════════════════════════════════════════════════
//  OBSERVER COUNTRIES  (already adopted — user watches)
// ══════════════════════════════════════════════════════════════

const OBSERVER_COUNTRIES = {
  ukraine: {
    id: 'ukraine', name: 'Ukraine', emoji: '🇺🇦',
    coords: [48.38, 31.17],
    card: { since:'2022', terminals:'42,000', dependency:'Military — total', backup:'None' },
    observerNote: 'This country is already inside the system. Watch what happens.',
    phases: {
      joy: {
        stat: '42,000 terminals active',
        text: 'A Starlink terminal in a Mariupol basement keeps a resistance coordination channel alive for 72 hours. Civilian internet survives infrastructure collapse. SpaceX is praised internationally.',
      },
      anger: {
        stat: 'Coverage suspended — Crimea',
        text: 'SpaceX throttles Starlink coverage over newly liberated territory without notifying the Ukrainian government. Military learns from a tweet. Coverage decisions are made in California.',
        toast: 'SpaceX throttles coverage over newly liberated territory. Ukraine\'s military learns from a tweet. One man\'s operational decision shapes a military conflict.',
      },
    },
  },
  philippines: {
    id: 'philippines', name: 'Philippines', emoji: '🇵🇭',
    coords: [12.88, 121.77],
    card: { since:'2024', islands:'1,200 connected', response:'Typhoon: improved', priority:'Low (global demand)' },
    observerNote: '115M people. Still a small market by SpaceX standards.',
    phases: {
      joy: {
        stat: '1,200 islands connected',
        text: 'Typhoon Odette: outer islands maintain contact. First time since records began. The disaster response agency calls it a generational change.',
      },
      anger: {
        stat: 'Deprioritised during typhoon season',
        text: 'Typhoon Aghon: Philippines requests priority bandwidth. SpaceX response: "Bandwidth allocated based on global demand." US hurricane season takes precedence. Philippines not mentioned in SpaceX 2023 annual report.',
        toast: 'Typhoon Aghon: Philippines requests priority bandwidth. SpaceX: global demand allocation. US hurricane season concurrent. Philippines is not a priority. It never will be.',
      },
    },
  },
  brazil: {
    id: 'brazil', name: 'Brazil', emoji: '🇧🇷',
    coords: [-3.47, -62.22],
    card: { communities:'340 indigenous', monitoring:'Land: active', archived:'12,000 hrs', jurisdiction:'US law' },
    observerNote: 'The archive Bolivia is debating — Brazil already uploaded it.',
    phases: {
      joy: {
        stat: '340 communities online',
        text: 'Yanomami territory: first real-time illegal logging documentation. Three prosecutions in year one. An elder begins recording 12,000 hours of oral tradition. A linguist calls it the most important indigenous archive project in a decade.',
      },
      anger: {
        stat: 'GPS of 340 communities sold',
        text: 'A mining survey company acquires GPS coordinates of 340 indigenous communities via a US data broker. Brazil\'s indigenous affairs agency FUNAI is not notified. The archives still exist. The map was the problem.',
        toast: 'Mining survey company acquires GPS coordinates of 340 indigenous Amazon communities via US data broker. FUNAI not notified. The archive is intact. The coordinates are out.',
      },
    },
  },
};

// ══════════════════════════════════════════════════════════════
//  CHOOSABLE COUNTRIES  (user selects + advises)
// ══════════════════════════════════════════════════════════════

const CHOOSABLE_COUNTRIES = {

  kenya: {
    id: 'kenya', name: 'Kenya', emoji: '🇰🇪',
    coords: [-1.29, 36.82],
    popOffline: '17M', coreTension: 'Healthcare vs. data extraction',
    preview: '17 million people without healthcare connectivity. Starlink could save lives — but patient data goes to US servers under the CLOUD Act.',
    panels: [
      {
        eyebrow: 'The Gap',
        title: 'Rural healthcare running on guesswork',
        text: '17 million Kenyans have no internet access. In Turkana, Marsabit, and West Pokot, rural clinics diagnose by symptom checklist — no imaging, no lab connectivity, no specialist consultation. When a patient needs specialist care, the transfer to Nairobi takes two days on dirt roads. Many do not survive the journey.\n\nKwanda\'s rural doctor-to-patient ratio: 1 per 120,000 people.',
      },
      {
        eyebrow: 'The Offer',
        title: '$1.8M/month. 4,200 clinics online.',
        text: 'Starlink proposes a healthcare connectivity package: 4,200 rural clinics connected, telemedicine links to Nairobi\'s Aga Khan and Kenyatta hospitals, real-time drug supply chain management. Month one: every rural clinic online. Month two: first telemedicine diagnosis in Turkana.\n\nFor a child with severe malnutrition in a clinic without a specialist, this is not an abstraction.',
      },
      {
        eyebrow: 'The Catch',
        title: 'The most intimate data. Under US law.',
        text: 'Every consultation, diagnosis, and prescription enters the Starlink network and comes under US CLOUD Act jurisdiction. Kenya has no data sovereignty agreement with the United States. Patient records — HIV status, reproductive health, psychiatric diagnoses — are stored on servers in Oregon and Virginia.\n\n"Healthcare data is the most intimate data that exists," says a Kenyan health data researcher. "And we\'ve handed it to a company that answers to American courts." When a US federal investigation needs data on a Kenyan citizen, it does not need a Kenyan court order.',
      },
    ],
    choiceLabels: ['Recommend Adoption', 'Recommend Against'],
    choiceDescs: ['Connect 4,200 clinics. Patient data under US jurisdiction.', 'Sovereignty protected. Rural clinics remain offline.'],
    phases: {
      joy: {
        stat: 'Maternal mortality −31%',
        text: 'Drug stockouts drop 60%. A child with severe malnutrition in Turkana is diagnosed remotely — she would not have survived the transfer. Maternal mortality falls 31% in year one. A nurse in Marsabit: "I used to guess. Now I know."',
        toast: { icon: '🏥', title: 'Year 1 — Turkana', msg: 'First remote diagnosis of severe malnutrition. The child would not have survived the road transfer. She is alive.' },
      },
      anger: {
        stat: '84,000 patient records subpoenaed',
        text: 'A US court subpoenaed 84,000 patient records from Kenyan rural clinics under the CLOUD Act. The health ministry learned from Reuters. The data had already been sold to an international insurance pricing consortium before the subpoena. The nurse: "They told me the records were safe."',
        toast: { icon: '⚠️', title: 'Year 3 — CLOUD Act Subpoena', msg: 'US court pulls 84,000 Kenyan patient records. Health Ministry learns from Reuters. Data already sold to insurance consortium. Clause 1.' },
        extractionChain: 'Kenyan clinic records → Starlink relay → US CLOUD Act subpoena → International insurance pricing consortium',
      },
    },
    act2: {
      prompt: 'The dependency is real. What does Kenya do now?',
      context: 'Clinics are connected. Maternal mortality is down. 84,000 patient records have been subpoenaed. Patient data is in an insurance consortium\'s pricing model. The people saved are real. The harm is also real.',
      options: [
        {
          id: 'negotiate-data', label: 'Demand Data Sovereignty',
          desc: 'Negotiate with SpaceX for local data storage and Kenyan court jurisdiction over health data.',
          toasts: [
            { delay:2000, icon:'📋', title:'Month 1 — Demand Submitted', msg:'Kenya formally requests local health data storage. SpaceX legal responds in six weeks: "Data residency study initiated. No timeline."', critical:false },
            { delay:7000, icon:'⚖️', title:'Month 4 — Partial Agreement', msg:'SpaceX offers "health data flagging" — a tag on records that requires additional review before access. Not jurisdiction. A flag.', critical:true },
          ],
          endText: 'Patient data is flagged. It is still on US servers. The insurance consortium kept their copy.',
        },
        {
          id: 'build-health', label: 'Build Kenyan Health Data System',
          desc: 'Commission sovereign Kenyan-owned clinical data infrastructure alongside Starlink.',
          toasts: [
            { delay:2000, icon:'🏗️', title:'Month 1 — Commission Launched', msg:'Kenya commissions a national health data system. Budget: $18M over 3 years. Timeline: 2.5 years to operational.', critical:false },
            { delay:7000, icon:'⏳', title:'Year 2 — Parallel Running', msg:'Kenyan system beta: 400 clinics migrated. 3,800 still on Starlink. Migration continues. The old data — the 84,000 records — remains on US servers.', critical:false },
          ],
          endText: 'Sovereignty is being built. It will take three more years. The records that left are not coming back.',
        },
      ],
    },
    rejectArc: {
      toasts: [
        { delay:3000, icon:'📡', title:'Year 1 — Turkana Mesh Pilot', msg:'Kenya deploys a mesh network to 12 clinics in Turkana. Limited bandwidth — text and voice only. Better than nothing. Not enough.', critical:false, year:1 },
        { delay:13000, icon:'🕯️', title:'Year 2 — Joseph Ekiru', msg:'Joseph Ekiru. 28 years old. Severe malaria. Road transfer from Turkana to Nairobi: 36 hours. He didn\'t make it. He had a name.', critical:true, year:2 },
        { delay:24000, icon:'🔌', title:'Year 3 — EU Pilot Reaches Central Kenya', msg:'EU-funded fiber reaches 200 clinics in central Kenya. 4,000 rural Turkana clinics remain offline. The pilot is real. The gap is larger.', critical:false, year:3 },
      ],
    },
  },

  bolivia: {
    id: 'bolivia', name: 'Bolivia', emoji: '🇧🇴',
    coords: [-16.29, -63.59],
    popOffline: '3.2M indigenous', coreTension: 'Cultural sovereignty vs. connectivity',
    preview: '3.2 million indigenous citizens offline. Starlink enables digital archiving of dying languages — on servers governed by US commercial law.',
    panels: [
      {
        eyebrow: 'The Gap',
        title: 'Eight languages losing their last speakers',
        text: '3.2 million of Bolivia\'s indigenous citizens live without internet access. In the Bolivian Amazon and the altiplano, 8 native languages are losing fluent speakers at a rate of one elder per month. The oral traditions, ecological knowledge, and ceremonial languages these elders carry have never been written down.\n\nBolivia\'s indigenous language documentation effort: 12 researchers, $200,000 annual budget, one satellite phone between them.',
      },
      {
        eyebrow: 'The Offer',
        title: '$1.1M/month. 840 communities online.',
        text: 'Starlink proposes a cultural connectivity package: 840 indigenous communities online, a digital archive project for endangered languages, and climate monitoring connectivity for indigenous land defenders. Elder María Condori, 78, can finally send her recordings to the university in La Paz. Her granddaughter can learn the songs her grandmother taught in Quechua. The connection is real.',
      },
      {
        eyebrow: 'The Catch',
        title: 'The archive maps the community.',
        text: 'The archive is stored on Starlink relay servers in the United States. Under US commercial law, the metadata of those archives — GPS coordinates, timestamps, usage patterns — is accessible to US commercial entities.\n\nBolivia\'s Amazon territory contains $2.3 trillion in estimated mineral wealth. The communities that live on it are the only obstacle to its extraction. An indigenous rights lawyer: "We\'re mapping ourselves for anyone who pays." Every archive uploaded is also a map.',
      },
    ],
    choiceLabels: ['Recommend Adoption', 'Recommend Against'],
    choiceDescs: ['840 communities connected. Cultural archive at risk of mapping.', 'Sovereignty protected. Elders continue recording on cassette.'],
    phases: {
      joy: {
        stat: '8 languages archived',
        text: 'Elder María Condori, 78, completes 200 hours of lowland Quechua oral tradition. Eight languages archived. 840 communities connected to legal aid networks. Land defenders coordinate in real time. "Our words will survive," she says.',
        toast: { icon: '📚', title: 'Year 1 — Elder María', msg: 'María Condori, 78, completes the first digital Quechua oral archive — 200 hours. "Our words will survive now." The linguist in La Paz cries when she receives the files.' },
      },
      anger: {
        stat: '17 territories GPS-exposed',
        text: 'A mining survey company acquires GPS coordinates of 17 protected Bolivian territories using metadata from the Starlink-routed archive. Bolivia\'s Ministry of Indigenous Affairs is not notified. The elder: "We put our memory in their machine. They sold the map."',
        toast: { icon: '⛏️', title: 'Year 3 — The Map Was Sold', msg: 'Mining company acquires GPS of 17 protected territories via US data broker. Archive metadata. Bolivia\'s MIA not notified. Elder María: "We put our memory in their machine. They sold the map."', },
        extractionChain: 'Indigenous oral archive → GPS metadata → US commercial data market → Mining survey company → Protected territory exposure',
      },
    },
    act2: {
      prompt: 'The map was sold. What does Bolivia do now?',
      context: 'Eight languages are archived. Communities are connected. The GPS coordinates of 17 protected territories are in a mining company\'s database. The archive still exists. The communities are still there. Both are true.',
      options: [
        {
          id: 'demand-repatriation', label: 'Demand Archive Repatriation',
          desc: 'Invoke data sovereignty rights and demand the archives be moved to Bolivian-controlled servers.',
          toasts: [
            { delay:2000, icon:'📋', title:'Month 1 — Repatriation Filed', msg:'Bolivia formally requests archive repatriation under bilateral data agreement. SpaceX: "No bilateral data agreement exists with Bolivia." Correct.', critical:true },
            { delay:7000, icon:'✓', title:'Year 1 — Archive Copied', msg:'After UN intervention, SpaceX provides a copy of the archives to La Paz. The original data remains on US servers. Copies do not delete originals.', critical:false },
          ],
          endText: 'Bolivia has the archive. The mining company also has the coordinates. Copies are not sovereignty.',
        },
        {
          id: 'cultural-exemption', label: 'Negotiate Cultural Data Exemption',
          desc: 'Push for a carve-out in the CLOUD Act for indigenous cultural heritage data.',
          toasts: [
            { delay:2000, icon:'⚖️', title:'Month 3 — US Congressional Engagement', msg:'Bolivia joins a coalition of 14 nations lobbying for a cultural heritage exemption to the CLOUD Act. The bill is introduced. It is not passed in this session.', critical:false },
            { delay:7000, icon:'📅', title:'Year 2 — Still Lobbying', msg:'The cultural exemption bill is reintroduced. It is not passed. The archive stays on US servers. The lobbying continues.', critical:false },
          ],
          endText: 'The exemption bill exists. It has not passed. The archive remains under US law.',
        },
      ],
    },
    rejectArc: {
      toasts: [
        { delay:4000, icon:'📼', title:'Year 1 — Four Cassette Tapes', msg:'Elder María records on cassettes. She has four tapes remaining. The university sends a researcher to Bolivia. He arrives in seven months.', critical:false, year:1 },
        { delay:13000, icon:'🌲', title:'Year 2 — Two Territories Lost', msg:'Two indigenous territories near Beni deforested — no connectivity means no real-time reporting. By the time word reaches the environmental agency, the logging trucks are gone.', critical:true, year:2 },
        { delay:24000, icon:'🎓', title:'Year 3 — Archive Project Begins', msg:'EU-funded Wolof-first archive project begins in La Paz. 40 linguists hired. First materials in 2 years. Elder María is 81.', critical:false, year:3 },
      ],
    },
  },

  nigeria: {
    id: 'nigeria', name: 'Nigeria', emoji: '🇳🇬',
    coords: [9.08, 8.68],
    popOffline: '85M', coreTension: 'Economic scale vs. structural lock-in',
    preview: '85 million offline in Africa\'s largest economy. Nigeria could build its own satellite — in 12 years. Starlink is 90 days.',
    panels: [
      {
        eyebrow: 'The Gap',
        title: 'Africa\'s largest economy, split in two',
        text: '85 million Nigerians have no internet access — more than the combined population of Scandinavia. In northern Nigeria, the digital divide has hardened the existing gap between north and south: Lagos is one of Africa\'s great tech cities. Kano\'s markets cannot access the same financial tools, supply chains, or educational resources. It is not just inequality. It is divergence.',
      },
      {
        eyebrow: 'The Offer',
        title: '90 days vs. 12 years.',
        text: 'Starlink proposes national coverage in 90 days. Nigeria\'s own digital sovereignty plan — NigComSat-2, a domestic satellite — requires 12 years and $3.8 billion. Starlink costs $2.2M/month. Economic modeling shows the GDP return in 18 months. Lagos\'s tech sector has been lobbying for years. The north has been waiting longer.',
      },
      {
        eyebrow: 'The Catch',
        title: 'Nigeria signed the same contract as Fiji.',
        text: 'Nigeria has 220 million people. Fiji has 900,000. SpaceX offered both nations the same contract: the same jurisdiction clauses, the same unilateral termination rights, the same data residency terms. Africa\'s largest economy negotiated the same deal as a Pacific island state with less than 1% of its population.\n\nMarket power is only leverage if it is used.',
      },
    ],
    choiceLabels: ['Recommend Adoption', 'Recommend Against'],
    choiceDescs: ['85M connected in 90 days. Same contract as Fiji.', 'Pursue sovereign alternative. North-south divide deepens meanwhile.'],
    phases: {
      joy: {
        stat: '85M connected — 90 days',
        text: 'Northern markets link to Lagos. A garment cooperative in Kano accesses international buyers for the first time. GDP growth of 3.2% attributed to digital economy expansion. NigComSat-2 program suspended — budget redirected to digital economy development.',
        toast: { icon: '📈', title: 'Year 1 — Northern Markets', msg: 'Kano garment cooperative accesses international buyers. First international order: $180,000. Three months ago, this transaction was impossible.' },
      },
      anger: {
        stat: '$177M paid — 22% rate hike',
        text: 'SpaceX raises rates 22%. Nigeria\'s parliament approves it — no viable alternative. Nigeria has paid SpaceX $177M over three years: enough to fund two NigComSat-2 satellites. The engineers who would have built them are now in SpaceX\'s Lagos office.',
        toast: { icon: '💸', title: 'Year 3 — The Accounting', msg: 'Nigeria has paid SpaceX $177M. That is the cost of two domestic satellites. The engineers who would have built NigComSat-2 are now SpaceX employees. Rate hike: 22%.', },
        extractionChain: 'Nigerian user data → Starlink servers → US pricing algorithm → 22% rate increase → No legislative recourse',
      },
    },
    act2: {
      prompt: 'Nigeria paid for its own satellites. What now?',
      context: '85 million people are connected. $177M has left the country. The engineers are gone. NigComSat-2 is cancelled. The rate hike is law. The dependency is complete.',
      options: [
        {
          id: 'pan-african', label: 'Pan-African Satellite Initiative',
          desc: 'Lead a continental sovereign satellite constellation using Nigeria\'s market size and political weight.',
          toasts: [
            { delay:2000, icon:'🌍', title:'Month 1 — Coalition Convened', msg:'Nigeria tables the Pan-African Satellite Initiative at the AU. 14 nations attend. 5 commit funding. Minimum timeline: 8 years.', critical:false },
            { delay:7000, icon:'⏳', title:'Year 2 — Still on Starlink', msg:'Pan-AfriSat design phase complete. Launch: 6 years. Nigeria still paying SpaceX $2.2M/month. The vision is real. The people are still on someone else\'s network.', critical:false },
          ],
          endText: 'The initiative is real. The sovereign constellation is 6 years away. Nigeria is still paying.',
        },
        {
          id: 'leverage-scale', label: 'Leverage Market Size',
          desc: 'Use Nigeria\'s 220M population and 85M Starlink users as leverage to renegotiate terms.',
          toasts: [
            { delay:2000, icon:'⚖️', title:'Month 2 — Renegotiation Opened', msg:'Nigeria presents SpaceX with a renegotiation demand: local data residency, 15% revenue share, rate freeze. SpaceX counter-offers 6% share and "data audit access."', critical:false },
            { delay:7000, icon:'🤝', title:'Month 6 — Deal Reached', msg:'Nigeria secures 9% revenue share and a read-only data audit. No jurisdiction transfer. No rate freeze. SpaceX uses the deal as the Africa template. The ceiling is 9%.', critical:true },
          ],
          endText: 'Nigeria won 9%. Other African nations will use this as their ceiling. Market power was used. It bought 9%.',
        },
      ],
    },
    rejectArc: {
      toasts: [
        { delay:3000, icon:'🛰️', title:'Year 1 — NigComSat-2 Study', msg:'Nigeria commissions the NigComSat-2 feasibility study. 80 engineers assigned. Timeline: 12 years. Budget: $3.8B. Year 1 funding secured: $120M.', critical:false, year:1 },
        { delay:14000, icon:'📉', title:'Year 2 — North-South Divide Deepens', msg:'Lagos tech sector expands using international satellite access. Northern Nigeria remains dark. The digital divide is now also an economic divide. The gap compounds.', critical:true, year:2 },
        { delay:25000, icon:'⏱️', title:'Year 3 — Still 10 Years Away', msg:'NigComSat-2 on schedule. Launch: 9 years. Meanwhile: 85 million offline. The engineers are building the right thing. Their children are studying from 2014 textbooks.', critical:false, year:3 },
      ],
    },
  },

  fiji: {
    id: 'fiji', name: 'Fiji', emoji: '🇫🇯',
    coords: [-17.71, 178.07],
    popOffline: '530K across outer islands', coreTension: 'Climate survival vs. corporate irrelevance',
    preview: '900,000 people across 330 islands. Cyclones kill through communication blackouts. Starlink is storm-proof — but Fiji is a rounding error in SpaceX\'s market.',
    panels: [
      {
        eyebrow: 'The Gap',
        title: '330 islands. 9 days of silence.',
        text: '900,000 Fijians live across 330 islands. When a cyclone hits — and they hit every year — the outer islands lose communication for an average of nine days. In 2016, Cyclone Winston killed 44 people. Post-disaster analysis found 19 of those deaths were preventable: medical emergencies where communication blackouts prevented timely response. Koro Island went dark for 11 days.',
      },
      {
        eyebrow: 'The Offer',
        title: 'Storm-proof satellite internet.',
        text: 'Starlink offers coverage across all 330 islands, including the outer archipelago. Satellite internet means evacuation coordination, medical triage, and emergency supply routing are possible during the cyclone itself — not after the roads are passable again. Fiji\'s disaster management agency calls it "a generation-altering change in our storm response capability."',
      },
      {
        eyebrow: 'The Catch',
        title: 'Fiji is not a priority. It never will be.',
        text: 'Fiji has 900,000 people. SpaceX serves 100 million users. When Fiji needs priority bandwidth during a cyclone, it is competing with US hurricane season, US elections, and whatever else is driving demand in the planet\'s largest markets.\n\nThe contract guarantees coverage. It does not guarantee priority. SpaceX allocates bandwidth "based on global demand." Fiji\'s disaster is not a global demand event.',
      },
    ],
    choiceLabels: ['Recommend Adoption', 'Recommend Against'],
    choiceDescs: ['112 islands covered. Bandwidth priority not guaranteed.', 'Upgrade radio infrastructure. Cyclone season at risk meanwhile.'],
    phases: {
      joy: {
        stat: 'Cyclone Yasa — zero blackouts',
        text: '112 islands covered. Cyclone Yasa makes landfall as a Category 5. All 330 islands maintain contact throughout. Emergency coordination continues during the storm. Zero communication-related preventable deaths. First time in history.',
        toast: { icon: '🌀', title: 'Year 1 — Cyclone Yasa', msg: 'Category 5 cyclone. All 330 islands maintain contact throughout. Zero communication blackouts. Zero preventable deaths from blackout. First time in recorded history.' },
      },
      anger: {
        stat: 'Bandwidth deprioritized — US hurricane season',
        text: 'Category 4 cyclone. Fiji requests priority bandwidth. SpaceX response: "Bandwidth allocated based on global demand. No regional guarantees." US hurricane season is concurrent. Outer islands experience reduced speeds. Koro Island: 4-hour partial blackout. Fiji is not mentioned in SpaceX\'s 2023 annual report.',
        toast: { icon: '⚠️', title: 'Year 3 — Not a Priority', msg: 'Fiji requests priority bandwidth during Category 4 cyclone. SpaceX: global demand allocation. US hurricane season concurrent. Koro Island: 4-hour blackout. Fiji not mentioned in SpaceX annual report.' },
        extractionChain: 'Fiji bandwidth request → Global demand queue → US hurricane season priority → Fiji deprioritized → Outer island blackout',
      },
    },
    act2: {
      prompt: 'Fiji\'s bandwidth was deprioritized. What now?',
      context: '112 islands are connected. One cyclone showed the limits: Fiji is not a priority in SpaceX\'s demand model. The next cyclone could be worse.',
      options: [
        {
          id: 'pacific-coalition', label: 'Pacific Island Coalition',
          desc: 'Build a collective bargaining bloc: Fiji, Vanuatu, Tonga, Samoa, FSM — combined population 2.5M, combined leverage.',
          toasts: [
            { delay:2000, icon:'🤝', title:'Month 2 — Coalition Formed', msg:'Pacific Island Forum proposes a collective Starlink renegotiation. 6 nations. Combined population: 2.5M. SpaceX responds. The meeting is scheduled.', critical:false },
            { delay:7000, icon:'📋', title:'Month 5 — Bandwidth SLA', msg:'Pacific Coalition secures a bandwidth Service Level Agreement: guaranteed minimum speeds during declared national emergencies. First in SpaceX history for a small market bloc.', critical:false },
          ],
          endText: 'The SLA is real. 2.5 million people have storm bandwidth guarantees. Small nations can move larger ones.',
        },
        {
          id: 'hybrid-backup', label: 'Hybrid System — Add Radio Backup',
          desc: 'Layer HF radio backup alongside Starlink for outer islands. Redundancy, not dependency.',
          toasts: [
            { delay:2000, icon:'📻', title:'Month 1 — Radio Network Upgraded', msg:'Fiji invests $4M in HF radio upgrades for outer islands. 94 new stations. The system works during the next cyclone at 1/50th the bandwidth of Starlink. But it works when Starlink doesn\'t.', critical:false },
            { delay:7000, icon:'🌀', title:'Year 2 — System Tested', msg:'Category 3 cyclone. Starlink deprioritized. HF radio activates. Koro Island maintains contact throughout. The backup worked. The dependency is still there.', critical:false },
          ],
          endText: 'Fiji has resilience. It still pays SpaceX. The dependency is real. So is the backup.',
        },
      ],
    },
    rejectArc: {
      toasts: [
        { delay:3000, icon:'📻', title:'Year 1 — Radio Upgrades', msg:'Fiji upgrades HF radio in 6 outer island groups. Coverage: limited. Better than nothing. The outer 224 islands remain dark during cyclone season.', critical:false, year:1 },
        { delay:14000, icon:'🌀', title:'Year 2 — Cyclone Yasa', msg:'Cyclone Yasa. Koro Island loses contact for 9 days. Emergency responders coordinate by boat. 2 preventable deaths. Same as before. The radio upgrade didn\'t reach Koro.', critical:true, year:2 },
        { delay:25000, icon:'🔌', title:'Year 3 — EU Climate Grant', msg:'EU climate adaptation grant funds partial fiber to Viti Levu. Outer islands remain radio-only. The grant is real. It helps the islands that were already connected.', critical:false, year:3 },
      ],
    },
  },

  cambodia: {
    id: 'cambodia', name: 'Cambodia', emoji: '🇰🇭',
    coords: [11.45, 104.52],
    popOffline: '6.5M rural', coreTension: 'Choosing your dependency',
    preview: '6.5 million rural poor. Two offers on the table: American Starlink or Chinese Huawei. No Cambodian option exists.',
    panels: [
      {
        eyebrow: 'The Gap',
        title: 'Rice farmers with no yield data',
        text: '6.5 million Cambodian farmers rely on seasonal guesswork. Crop insurance does not exist because there is no yield data. Young people leave for Phnom Penh — the village population has halved in fifteen years. The cooperative chair: "The rain came late. We didn\'t know until it was already late."',
      },
      {
        eyebrow: 'The Two Offers',
        title: 'SpaceX or Huawei. Both are here. Both are waiting.',
        text: 'SpaceX offers Starlink: 1.2M farmers online in 90 days. $1.1M/month. Data on US servers. Jurisdiction: US law.\n\nHuawei offers a Belt and Road Initiative network: 1.8M farmers in 14 months. $0.6M/month. Terrestrial towers — visible, local-looking infrastructure. BRI loan: $200M at 2%, 5-year grace period. Cheaper. Wider. More generous on paper.\n\nNo Cambodian option exists.',
      },
      {
        eyebrow: 'The Catch',
        title: 'Two flags. One structure.',
        text: 'Starlink: yield data flows into US commodity trading algorithms. Chicago trades Cambodian rice before Cambodian farmers know their own harvest numbers.\n\nHuawei: traffic routed via Shenzhen. Huawei retains core infrastructure maintenance rights. When the opposition politician\'s communications are requested, Huawei complies without a court order.\n\nThe structure is the same. The flag on the server farm is the only difference.',
      },
    ],
    choiceLabels: ['Recommend Starlink', 'Recommend Huawei / BRI'],
    choiceDescs: ['1.2M farmers connected. Data on US servers.', '1.8M farmers. Cheaper. Traffic via Shenzhen.'],
    // Starlink path
    phases: {
      joy: {
        stat: '1.2M farmers — crop insurance live',
        text: 'Precision agriculture tools. Yield predictions. A micro-insurance product launches. Three young people return from Phnom Penh to run the cooperative\'s digital platform. The cooperative chair: "The weather alerts come every morning now. I trust them."',
        toast: { icon: '🌾', title: 'Year 1 — Crop Insurance', msg: 'Cambodian micro-insurance product launches. Based on satellite weather data. 340,000 farmers enrolled. Three people return from Phnom Penh to run the cooperative platform.' },
      },
      anger: {
        stat: 'Rice price −14% via Chicago algorithm',
        text: 'Cambodian yield data feeds into a US commodity trading algorithm. Rice futures in Chicago now price in the harvest before Cambodian farmers know their own numbers. When the algorithm shorts Cambodian rice, the local price drops 14%. The micro-insurance product collapses.',
        toast: { icon: '📉', title: 'Year 3 — Chicago Algorithm', msg: 'US commodity algorithm shorts Cambodian rice before farmers know their harvest. Price drops 14%. Micro-insurance collapses. The three people who came home consider leaving again.' },
        extractionChain: 'Cambodian yield data → Starlink route → US commodity algorithm → Chicago rice futures → 14% price crash → Micro-insurance collapse',
      },
    },
    // Huawei path (special)
    huaweiPhases: {
      joy: {
        stat: '1.8M farmers — cheaper + visible',
        text: 'Huawei\'s terrestrial network reaches 1.8M farmers in 14 months. Cheaper than Starlink. Towers you can see and touch. 200 Cambodian engineers trained. Crop insurance launches. A farmer in Battambang: "The weather alerts come every morning. I trust them."',
        toast: { icon: '🔶', title: 'Year 1 — Huawei Network', msg: 'Huawei network active: 1.8M farmers, $0.6M/month. MORE farmers than Starlink. CHEAPER than Starlink. 200 engineers trained. Towers are visible. You can point to them. Cambodia Agriculture Minister: better than expected.' },
      },
      anger: {
        stat: 'Traffic via Shenzhen — surveillance unconfirmed',
        text: 'Cambodia\'s 200 engineers can operate the network day-to-day — but Huawei retains core routing software and firmware updates. When Cambodia requests source code access: "Proprietary technology. Maintenance included." Traffic routes via Shenzhen. Surveillance reports: persistent, unconfirmed, uninvestigable.',
        toast: { icon: '🔶', title: 'Year 3 — Can\'t Open the Hood', msg: 'Opposition politician\'s communications requested. Huawei compliance: immediate. No court order. Traffic confirmed via Shenzhen. "The Americans watch from the sky. The Chinese watch from the ground. I\'m not sure it mattered." — Cambodian journalist.' },
        extractionChain: 'Cambodian network traffic → Huawei routing → Shenzhen servers → Chinese state access → No audit rights for Cambodia',
      },
      act2: {
        prompt: 'Huawei controls the infrastructure. What does Cambodia do now?',
        context: '1.8M farmers are connected. The network works. Surveillance is suspected but uninvestigable. Huawei controls the firmware. The BRI loan repayment begins: $14M/year for 15 years.',
        options: [
          {
            id: 'demand-transfer', label: 'Demand Infrastructure Transfer',
            desc: 'Invoke Clause 7 of the BRI agreement to demand full operational control, including source code.',
            toasts: [
              { delay:2000, icon:'📋', title:'Month 1 — Transfer Demanded', msg:'Cambodia invokes BRI Clause 7. China reclassifies the loan from concessional (2%) to commercial (6.5%). Repayment timeline shortened.', critical:true },
              { delay:7000, icon:'💻', title:'Month 6 — Partial Transfer', msg:'Huawei delivers partial source code. Cambodian engineers discover they cannot operate core systems without Huawei\'s proprietary update servers. Transfer is nominal. "You own the hardware. They own the software."', critical:false },
            ],
            endText: 'Cambodia owns the hardware. Huawei owns the software. Ownership is not control.',
          },
          {
            id: 'add-starlink', label: 'Add Starlink as Second Network',
            desc: 'Layer Starlink on top of Huawei for redundancy and leverage.',
            toasts: [
              { delay:2000, icon:'📡', title:'Month 1 — Starlink Contract Signed', msg:'Cambodia signs a Starlink contract alongside the Huawei network. Both active. Two jurisdictions. Beijing and Washington both monitor Cambodian traffic.', critical:false },
              { delay:7000, icon:'🔍', title:'Year 1 — Two Watchers', msg:'Cambodia\'s data flows to Shenzhen and Hawthorne. Neither trusts the other. Both watch everything. "Two colonisers. Zero sovereignty. Maximum connectivity."', critical:true },
            ],
            endText: 'Two networks. Two jurisdictions. Zero privacy. Full connectivity.',
          },
        ],
      },
    },
    act2: {
      prompt: 'The rice algorithm crushed the cooperative. What does Cambodia do now?',
      context: 'Rice price down 14%. Micro-insurance collapsed. 1.2M farmers connected. The data that helped them also priced them out.',
      options: [
        {
          id: 'asean-solidarity', label: 'ASEAN Data Solidarity Bloc',
          desc: 'Build an ASEAN agricultural data coalition — collective data sovereignty for rice-producing nations.',
          toasts: [
            { delay:2000, icon:'🤝', title:'Month 2 — ASEAN Coalition', msg:'Cambodia tables an ASEAN agricultural data sovereignty proposal. Vietnam, Thailand, and Laos join. Together: 40% of global rice exports. SpaceX opens a regional negotiation.', critical:false },
            { delay:7000, icon:'📊', title:'Year 1 — Data Sovereignty Agreement', msg:'ASEAN-Starlink data agreement: yield data cannot be sold to commodity trading firms without government approval. First time. Rice price stabilizes.', critical:false },
          ],
          endText: 'Collective action moved the market. Regional solidarity worked where individual negotiation wouldn\'t.',
        },
        {
          id: 'play-both', label: 'Play Both Sides',
          desc: 'Use the Huawei offer as leverage to renegotiate Starlink terms.',
          toasts: [
            { delay:2000, icon:'⚖️', title:'Month 1 — Dual Negotiation', msg:'Cambodia opens parallel discussions with Huawei and SpaceX. Both lower their price. Cambodia tells each that the other\'s offer is better. It is. Both are.', critical:false },
            { delay:7000, icon:'📋', title:'Month 4 — New Terms', msg:'SpaceX offers: $0.8M/month (vs $1.1M), 5% revenue share, agricultural data exemption from commodity trading. Better. Still not sovereign.', critical:false },
          ],
          endText: 'Better terms. Not sovereignty. Competition between extractors is not freedom.',
        },
      ],
    },
    rejectArc: null, // Cambodia auto-adopts Huawei on reject — handled by huaweiPhases
  },

  senegal: {
    id: 'senegal', name: 'Senegal', emoji: '🇸🇳',
    coords: [14.69, -14.45],
    popOffline: '8.5M', coreTension: 'Educational connectivity vs. cultural extraction',
    preview: '8.5 million without internet. Starlink connects students — to English-language content. Wolof-language education may not survive the connection.',
    panels: [
      {
        eyebrow: 'The Gap',
        title: 'Schools running on 2009 textbooks',
        text: '8.5 million Senegalese have no internet access. In rural Casamance and the Senegal River valley, schools operate without textbooks published after 2009. The national university is overcrowded — distance learning could relieve pressure, but there\'s no network to carry it. Talented students leave for France. Most don\'t come back.\n\nSenegal\'s student-to-computer ratio in rural schools: 142:1.',
      },
      {
        eyebrow: 'The Offer',
        title: '$1.2M/month. 340,000 students connected.',
        text: 'Starlink proposes an education-focused deployment: 1,800 schools connected, a distance learning platform, and university lecture streaming to rural campuses. The government sees a generational opportunity — an educated rural population could transform the economy within a decade.\n\nFatou Diallo, 16, in a village outside Tambacounda, would watch a university physics lecture for the first time.',
      },
      {
        eyebrow: 'The Catch',
        title: 'Connected to someone else\'s worldview.',
        text: 'Senegal\'s education system teaches in French and Wolof. The curriculum is designed for Senegalese context. Starlink\'s education platform defaults to US and European content libraries. Khan Academy is in English. Wikipedia\'s Wolof edition has 1,400 articles. The English edition has 6.8 million.\n\nConnectivity without content sovereignty means Senegalese students connect — to someone else\'s worldview. The infrastructure is American. The curriculum will drift American. The language will drift to English.\n\nWolof-language educational content online: approximately 0.02% of English-language equivalent.',
      },
    ],
    choiceLabels: ['Recommend Adoption', 'Recommend Against'],
    choiceDescs: ['340,000 students connected. To whose curriculum?', 'Build Wolof-first content before connecting. The students wait.'],
    phases: {
      joy: {
        stat: '340K students connected — Year 1',
        text: 'Fatou Diallo, 16, outside Tambacounda, watches a university physics lecture for the first time. She tells her teacher she wants to study engineering. 1,800 schools online. Exam scores rising in connected schools. The Education Minister: "340,000 students connected this semester."',
        toast: { icon: '📚', title: 'Year 1 — Fatou Diallo', msg: 'Fatou Diallo, 16, outside Tambacounda, watches a university physics lecture for the first time. She tells her teacher she wants to study engineering. This is what connectivity looks like.' },
      },
      anger: {
        stat: 'Wolof usage −34% in connected schools',
        text: 'Students using English-language platforms: 89%. Wolof content created: 0. French-language usage in connected schools: −34%. Fatou Diallo now dreams in English. Her grandmother doesn\'t understand her homework anymore.',
        toast: { icon: '🔤', title: 'Year 3 — Language Drift', msg: 'Senegal\'s Ministry of Culture: rural students abandoning Wolof instruction for English-language online content. Fatou Diallo now dreams in English. Her grandmother doesn\'t understand her homework.', },
        extractionChain: 'Senegalese student attention → English content platforms → US curriculum → Wolof language displacement → Cultural extraction without extraction',
      },
    },
    act2: {
      prompt: 'Connected students are thriving — in English. What does Senegal do now?',
      context: '340,000 students connected. Exam scores up. English usage up 89%. Wolof usage down 34%. Fatou wants to study engineering at a US university. Her grandmother speaks only Wolof.',
      options: [
        {
          id: 'wolof-content', label: 'Fund Wolof Content Initiative',
          desc: 'Commission Wolof-language courses, textbooks, and platforms. $40M over 5 years.',
          toasts: [
            { delay:2000, icon:'📝', title:'Month 3 — Wolof Library Launched', msg:'Senegal launches the Wolof Digital Library. 200 courses commissioned. First deliveries: 18 months. Khan Academy has 14,000 courses. The Wolof library will have 200.', critical:false },
            { delay:7000, icon:'📊', title:'Year 2 — The Math', msg:'"We\'re filling a swimming pool with a garden hose while the ocean is right there." — Senegalese educator. The content exists. It cannot compete with English at scale. Fatou uses Khan Academy.', critical:true },
          ],
          endText: 'The Wolof library exists. 200 courses. Khan Academy has 14,000. The students use Khan Academy.',
        },
        {
          id: 'bilingual-mandate', label: 'Mandate Bilingual Education',
          desc: 'Require all Starlink-connected schools to maintain 50% Wolof-language instruction.',
          toasts: [
            { delay:2000, icon:'📋', title:'Month 1 — Mandate Issued', msg:'Senegal mandates 50% Wolof instruction in connected schools. 1,200 comply. 600 report they lack Wolof digital materials and teach from chalkboards during Wolof hours.', critical:false },
            { delay:7000, icon:'💔', title:'Year 2 — The Market Wins', msg:'Fatou Diallo\'s mother: "I want her to speak Wolof at home. But I want her to get the scholarship. The scholarship is in English." Parents request English-only instruction. Compliance unravels.', critical:true },
          ],
          endText: 'The mandate preserved the language. The market undermined the mandate. Both are true.',
        },
      ],
    },
    rejectArc: {
      toasts: [
        { delay:3000, icon:'✏️', title:'Year 1 — Wolof-First Platform Commissioned', msg:'Senegal begins building a Wolof digital curriculum. 40 educators hired. First content: 2023. Budget: $12M. Students still study from 2009 textbooks.', critical:false, year:1 },
        { delay:14000, icon:'📖', title:'Year 2 — Platform in Development', msg:'Fatou Diallo doesn\'t exist in this timeline. A girl her age in Tambacounda studies from a textbook older than she is. The platform is being built. It is not here yet.', critical:true, year:2 },
        { delay:25000, icon:'🌟', title:'Year 3 — 80 Courses. Theirs.', msg:'The Wolof platform beta launches: 80 courses. Designed for Senegalese students. Beautiful. "80 courses against 14,000 on Khan Academy. But these 80 are theirs." — linguist', critical:false, year:3 },
      ],
    },
  },

};

// ══════════════════════════════════════════════════════════════
//  CONSTANTS
// ══════════════════════════════════════════════════════════════

const SPACEX   = [34.05, -118.25]; // Hawthorne, California
const SHENZHEN = [22.55,  114.06]; // Huawei HQ, Shenzhen

// ══════════════════════════════════════════════════════════════
//  GLOBAL STATE
// ══════════════════════════════════════════════════════════════

const STATE = {
  phase: 'selection',       // selection | briefings | joy | crimea | anger | act2 | ending
  selectedIds: new Set(),   // choosable country IDs selected by user
  choices: {},              // { kenya: 'adopt'|'reject', ... }
  act2Choices: {},          // { kenya: 'negotiate-data', ... }
  act2Queue: [],            // ordered list of IDs awaiting act2
  currentAct2Id: null,
  angerStarted: false,
};

// ══════════════════════════════════════════════════════════════
//  MAP STATE
// ══════════════════════════════════════════════════════════════

let map            = null;
const markerRefs   = {};    // id → L.marker
let flowLines      = [];
let flowAnimFrame  = null;
let flowDashOffset = 0;
let joyLabelMarkers = [];
let labelMarkers   = [];

// ══════════════════════════════════════════════════════════════
//  TIMER / INTERVAL REFS
// ══════════════════════════════════════════════════════════════

let timerInterval          = null;
let timerSeconds           = 8;
let quoteInterval          = null;
let quoteIndex             = 0;
let crimeaAutoTimer        = null;
let cumulativeTickInterval = null;
let purchasingPowerInterval = null;
let newsTickerRAF          = null;
let toastTimeouts          = [];
let phoneTimeouts          = [];

// ══════════════════════════════════════════════════════════════
//  MARKER ICONS
// ══════════════════════════════════════════════════════════════

function makeMarkerIcon(phase) {
  return L.divIcon({
    className: '',
    html: `<div class="lm lm-${phase}"></div>`,
    iconSize: [22, 22], iconAnchor: [11, 11], popupAnchor: [0, -14],
  });
}

function makeObserverIcon() {
  return L.divIcon({
    className: '',
    html: '<div class="lm lm-observer"></div>',
    iconSize: [22, 22], iconAnchor: [11, 11], popupAnchor: [0, -14],
  });
}

function makeChoosableIcon(status) {
  // status: 'unselected' | 'selected' | 'adopt' | 'reject' | 'huawei'
  return L.divIcon({
    className: '',
    html: `<div class="lm lm-choosable lm-ch-${status}"></div>`,
    iconSize: [22, 22], iconAnchor: [11, 11], popupAnchor: [0, -14],
  });
}

// ══════════════════════════════════════════════════════════════
//  MAP INIT
// ══════════════════════════════════════════════════════════════

function initMap() {
  map = L.map('map', {
    center: [10, 30], zoom: 2,
    zoomControl: true, scrollWheelZoom: false,
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap &copy; CARTO',
    subdomains: 'abcd', maxZoom: 18,
  }).addTo(map);

  // Observer markers — blue, already active
  Object.values(OBSERVER_COUNTRIES).forEach(obs => {
    const m = L.marker(obs.coords, { icon: makeObserverIcon() }).addTo(map);
    m.bindPopup(buildObserverPopup(obs, 'joy'), { maxWidth: 300 });
    markerRefs[obs.id] = m;
  });

  // Choosable markers — gray, selectable
  Object.values(CHOOSABLE_COUNTRIES).forEach(c => {
    const m = L.marker(c.coords, { icon: makeChoosableIcon('unselected') }).addTo(map);
    m.bindPopup(buildChoosablePreview(c), { maxWidth: 280 });
    m.on('popupopen', () => handleChoosableClick(c.id));
    markerRefs[c.id] = m;
  });
}

function buildObserverPopup(obs, phase) {
  const ph = obs.phases[phase] || obs.phases.joy;
  const cardRows = Object.entries(obs.card).map(([k,v]) =>
    `<div class="obs-row"><span class="obs-key">${k}</span><span class="obs-val">${v}</span></div>`
  ).join('');
  return `<div class="popup-content">
    <p class="obs-header">${obs.emoji} ${obs.name} <span class="obs-badge">OBSERVING</span></p>
    ${cardRows}
    <p class="popup-story obs-note">${obs.observerNote}</p>
    ${ph ? `<p class="popup-stat">${ph.stat}</p><p class="popup-story">${ph.text}</p>` : ''}
  </div>`;
}

function buildChoosablePreview(c) {
  const isSelected = STATE.selectedIds.has(c.id);
  const choice = STATE.choices[c.id];
  const statusNote = choice
    ? `<p class="popup-stat" style="color:${choice==='adopt'?'var(--joy)':choice==='huawei'?'var(--china)':'var(--grief)'}">
        ${choice==='adopt'?'✓ Adoption recommended':choice==='huawei'?'✓ Huawei recommended':'✗ Rejected'}</p>`
    : (isSelected
      ? `<p class="popup-stat" style="color:var(--accent)">✓ Selected — click to open briefing</p>`
      : `<p class="popup-story" style="color:var(--muted);font-size:.72rem;margin-top:.35rem;">Click again to select this country</p>`);
  return `<div class="popup-content">
    <p class="popup-name">${c.emoji} ${c.name}</p>
    <p class="popup-pop">${c.coreTension}</p>
    <p class="popup-story">${c.preview}</p>
    ${statusNote}
  </div>`;
}

function buildChoosablePhasePopup(c, phase) {
  // Used during joy/anger phases for adopted countries
  const ph = c.phases[phase] || {};
  const stat = ph.stat ? `<p class="popup-stat">${ph.stat}</p>` : '';
  return `<div class="popup-content">
    <p class="popup-name">${c.emoji} ${c.name}</p>
    ${stat}
    <p class="popup-story">${ph.text || ''}</p>
  </div>`;
}

// ══════════════════════════════════════════════════════════════
//  SELECTION PHASE
// ══════════════════════════════════════════════════════════════

function handleChoosableClick(id) {
  if (STATE.phase === 'selection') {
    // Toggle selection
    if (STATE.selectedIds.has(id)) {
      STATE.selectedIds.delete(id);
      markerRefs[id].setIcon(makeChoosableIcon('unselected'));
    } else {
      STATE.selectedIds.add(id);
      markerRefs[id].setIcon(makeChoosableIcon('selected'));
    }
    updateSelectionUI();
    // Refresh popup content
    markerRefs[id].setPopupContent(buildChoosablePreview(CHOOSABLE_COUNTRIES[id]));
  } else if (STATE.phase === 'briefings') {
    // Only respond to selected countries
    if (STATE.selectedIds.has(id) && !STATE.choices[id]) {
      openCountryModal(id);
    }
  }
}

function updateSelectionUI() {
  const count = STATE.selectedIds.size;
  const el = document.getElementById('sel-count');
  if (el) el.textContent = count + ' selected';
  const note = document.getElementById('sel-min-note');
  if (note) note.textContent = count >= 3 ? 'Ready to confirm' : `Select ${3 - count} more`;
  const btn = document.getElementById('btn-confirm-sel');
  if (btn) btn.disabled = count < 3;
}

function confirmSelections() {
  if (STATE.selectedIds.size < 3) return;
  STATE.phase = 'briefings';

  // Dim unselected choosable markers
  Object.values(CHOOSABLE_COUNTRIES).forEach(c => {
    if (!STATE.selectedIds.has(c.id)) {
      markerRefs[c.id].setIcon(makeChoosableIcon('unselected'));
      markerRefs[c.id].setPopupContent(`<div class="popup-content">
        <p class="popup-name">${c.emoji} ${c.name}</p>
        <p class="popup-story obs-note" style="color:var(--muted)">You chose not to advise this country. The dilemma exists. It is still unresolved.</p>
      </div>`);
    }
  });

  showPanel('tp-briefings');
  updateBriefingProgress();
}

function updateBriefingProgress() {
  const total = STATE.selectedIds.size;
  const done  = Object.keys(STATE.choices).length;
  const doneEl  = document.getElementById('brief-done');
  const totalEl = document.getElementById('brief-total');
  if (doneEl)  doneEl.textContent  = done;
  if (totalEl) totalEl.textContent = total;

  if (done >= total) {
    const btn = document.getElementById('btn-proceed-joy');
    if (btn) btn.classList.remove('hidden');
  }
}

// ══════════════════════════════════════════════════════════════
//  COUNTRY MODAL
// ══════════════════════════════════════════════════════════════

let modalCountryId  = null;
let modalPanelIndex = 0; // 0,1,2 = panels; 3 = choice

function openCountryModal(countryId) {
  modalCountryId  = countryId;
  modalPanelIndex = 0;
  const c = CHOOSABLE_COUNTRIES[countryId];

  document.getElementById('cmod-flag').textContent = c.emoji + ' ' + c.name;
  document.getElementById('cmod-tension').textContent = c.coreTension;
  renderModalPanel();

  document.getElementById('country-modal').classList.remove('hidden');
}

function renderModalPanel() {
  const c = CHOOSABLE_COUNTRIES[modalCountryId];
  const body  = document.getElementById('cmod-body');
  const step  = document.getElementById('cmod-step-label');
  const prev  = document.getElementById('cmod-prev');
  const next  = document.getElementById('cmod-next');

  if (modalPanelIndex < 3) {
    const p = c.panels[modalPanelIndex];
    step.textContent = (modalPanelIndex + 1) + ' / 3';
    body.innerHTML = `
      <p class="cmod-eyebrow">${p.eyebrow}</p>
      <h3 class="cmod-panel-title">${p.title}</h3>
      <p class="cmod-panel-text">${p.text.replace(/\n/g, '</p><p class="cmod-panel-text">')}</p>`;
    prev.classList.toggle('hidden', modalPanelIndex === 0);
    next.textContent = 'Next →';
  } else {
    // Choice panel
    step.textContent = 'Your recommendation';
    const [labelA, labelB] = c.choiceLabels;
    const [descA,  descB]  = c.choiceDescs;
    const adoptKey = c.id === 'cambodia' ? 'adopt' : 'adopt';
    const rejectKey = c.id === 'cambodia' ? 'huawei' : 'reject';
    body.innerHTML = `
      <p class="cmod-eyebrow">Make your recommendation</p>
      <p class="cmod-panel-text cmod-choice-prompt">What do you advise?</p>
      <div class="cmod-choice-btns">
        <button class="btn-cmod-adopt" onclick="makeCountryChoice('${c.id}', '${adoptKey}')">
          <span class="cmod-ch-label">${labelA}</span>
          <span class="cmod-ch-desc">${descA}</span>
        </button>
        <button class="btn-cmod-reject" onclick="makeCountryChoice('${c.id}', '${rejectKey}')">
          <span class="cmod-ch-label">${labelB}</span>
          <span class="cmod-ch-desc">${descB}</span>
        </button>
      </div>`;
    prev.classList.remove('hidden');
    next.classList.add('hidden');
  }
}

function advanceModal(dir) {
  if (dir === 1) {
    if (modalPanelIndex < 3) {
      modalPanelIndex++;
      renderModalPanel();
      const next = document.getElementById('cmod-next');
      if (next) next.classList.remove('hidden');
    }
  } else {
    if (modalPanelIndex > 0) {
      modalPanelIndex--;
      renderModalPanel();
      const next = document.getElementById('cmod-next');
      if (next) next.classList.remove('hidden');
    }
  }
}

function makeCountryChoice(countryId, choice) {
  STATE.choices[countryId] = choice;

  // Update marker
  const iconPhase = choice === 'adopt' ? 'adopt' : choice === 'huawei' ? 'huawei' : 'reject';
  markerRefs[countryId].setIcon(makeChoosableIcon(iconPhase));
  markerRefs[countryId].setPopupContent(buildChoosablePreview(CHOOSABLE_COUNTRIES[countryId]));

  closeCountryModal();
  updateBriefingProgress();
}

function closeCountryModal() {
  document.getElementById('country-modal').classList.add('hidden');
  const next = document.getElementById('cmod-next');
  if (next) next.classList.remove('hidden');
}

// ══════════════════════════════════════════════════════════════
//  CONTRACT → JOY
// ══════════════════════════════════════════════════════════════

function proceedToContract() {
  const hasAdopted = Object.values(STATE.choices).some(c => c === 'adopt' || c === 'huawei');
  if (hasAdopted) {
    showContract();
  } else {
    startJoyPhase(); // all rejected — skip contract
  }
}

function showContract() {
  document.getElementById('contract-overlay').classList.remove('hidden');
}

function signContract() {
  document.getElementById('contract-overlay').classList.add('hidden');
  startJoyPhase();
}

// ══════════════════════════════════════════════════════════════
//  JOY PHASE
// ══════════════════════════════════════════════════════════════

function startJoyPhase() {
  STATE.phase = 'joy';

  // Update markers
  Object.entries(STATE.choices).forEach(([id, choice]) => {
    const c = CHOOSABLE_COUNTRIES[id];
    if (choice === 'adopt') {
      markerRefs[id].setIcon(makeMarkerIcon('joy'));
      markerRefs[id].setPopupContent(buildChoosablePhasePopup(c, 'joy'));
    } else if (choice === 'huawei') {
      markerRefs[id].setIcon(makeMarkerIcon('joy')); // starts positive
      const ph = c.huaweiPhases ? c.huaweiPhases.joy : c.phases.joy;
      markerRefs[id].setPopupContent(`<div class="popup-content">
        <p class="popup-name">${c.emoji} ${c.name} <span style="color:var(--china);font-size:.7rem">Huawei</span></p>
        <p class="popup-stat">${ph.stat}</p>
        <p class="popup-story">${ph.text}</p>
      </div>`);
    } else {
      markerRefs[id].setIcon(makeMarkerIcon('grief'));
    }
  });

  // Update observer markers to joy state
  Object.values(OBSERVER_COUNTRIES).forEach(obs => {
    markerRefs[obs.id].setPopupContent(buildObserverPopup(obs, 'joy'));
  });

  setHappiness('joy');
  showPanel('tp-joy');

  // Build aggregate stats for sidebar
  showMoneySidebar('joy');
  updateJoySidebarAggregates();

  // Start quotes from adopted countries
  const adoptedIds = getAdoptedIds();
  if (adoptedIds.length) startQuotesFromCountries(adoptedIds, 'quote_joy');

  // Schedule toasts
  const joyToasts = buildJoyToasts();
  scheduleToasts(joyToasts);

  // Phone messages
  scheduleConditionalPhoneMsgs('joy');

  // Joy stat labels on map
  addJoyLabels();

  // 8s timer → Crimea
  startJoyTimer();
}

function buildJoyToasts() {
  const toasts = [];
  let delay = 1200;
  Object.entries(STATE.choices).forEach(([id, choice]) => {
    const c = CHOOSABLE_COUNTRIES[id];
    if (choice === 'adopt' && c.phases.joy.toast) {
      toasts.push({ ...c.phases.joy.toast, delay, critical: false });
      delay += 2200;
    } else if (choice === 'huawei' && c.huaweiPhases) {
      toasts.push({ ...c.huaweiPhases.joy.toast, delay, critical: false });
      delay += 2200;
    }
  });
  // Observer positive toasts
  toasts.push({ delay: delay + 800, icon:'🇺🇦', title:'Ukraine — Observing', msg:'Starlink terminals keep coordination channels alive through infrastructure collapse. The system works.', critical:false });
  return toasts;
}

function getAdoptedIds() {
  return Object.entries(STATE.choices)
    .filter(([, ch]) => ch === 'adopt' || ch === 'huawei')
    .map(([id]) => id);
}

function getRejectedIds() {
  return Object.entries(STATE.choices)
    .filter(([, ch]) => ch === 'reject')
    .map(([id]) => id);
}

function updateJoySidebarAggregates() {
  const count = getAdoptedIds().length;
  const monthly = count * 1.5; // approximate average cost
  const people  = count * 14;  // approximate millions
  // Top panel stat elements
  const el = document.getElementById('ms-joy-people');
  const me = document.getElementById('ms-joy-cost');
  if (el) el.textContent = people + 'M';
  if (me) me.textContent = '$' + monthly.toFixed(1) + 'M';
  // Sidebar stat elements
  const spl = document.getElementById('ms-joy-ppl');
  const smo = document.getElementById('ms-joy-mo');
  if (spl) spl.textContent = people;
  if (smo) smo.textContent = monthly.toFixed(1);
}

// ══════════════════════════════════════════════════════════════
//  JOY TIMER + LABELS
// ══════════════════════════════════════════════════════════════

function startJoyTimer() {
  timerSeconds = 8;
  const el = document.getElementById('timer-sec');
  if (el) el.textContent = timerSeconds;

  const fill = document.getElementById('timer-fill');
  if (fill) {
    fill.style.transition = 'none';
    fill.style.width = '100%';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      fill.style.transition = 'width 8s linear';
      fill.style.width = '0%';
    }));
  }

  timerInterval = setInterval(() => {
    timerSeconds--;
    if (el) el.textContent = Math.max(timerSeconds, 0);
    if (timerSeconds <= 0) {
      clearInterval(timerInterval);
      triggerCrimea();
    }
  }, 1000);
}

function addJoyLabels() {
  Object.entries(STATE.choices).forEach(([id, choice], i) => {
    const c = CHOOSABLE_COUNTRIES[id];
    const ph = choice === 'huawei' && c.huaweiPhases ? c.huaweiPhases.joy : c.phases.joy;
    if (!ph || !ph.stat) return;
    setTimeout(() => {
      const icon = L.divIcon({
        className: '',
        html: `<div class="map-label joy-label" id="jlbl-${id}">${ph.stat}</div>`,
        iconSize: [0, 0], iconAnchor: [-6, 24],
      });
      const m = L.marker(c.coords, { icon, interactive: false }).addTo(map);
      joyLabelMarkers.push(m);
      setTimeout(() => {
        const lbl = document.getElementById('jlbl-' + id);
        if (lbl) lbl.classList.add('visible');
      }, 150);
    }, 2000 + i * 400);
  });
}

function removeJoyLabels() {
  joyLabelMarkers.forEach(m => m.remove());
  joyLabelMarkers = [];
}

// ══════════════════════════════════════════════════════════════
//  CRIMEA
// ══════════════════════════════════════════════════════════════

function triggerCrimea() {
  stopQuotes();
  clearToasts();

  // Flash Ukraine observer card
  const ukraineMarker = markerRefs['ukraine'];
  if (ukraineMarker) {
    ukraineMarker.setIcon(L.divIcon({
      className: '',
      html: '<div class="lm lm-observer lm-observer-flash"></div>',
      iconSize: [22, 22], iconAnchor: [11, 11], popupAnchor: [0, -14],
    }));
    ukraineMarker.setPopupContent(buildObserverPopup(OBSERVER_COUNTRIES.ukraine, 'crimea'));
  }

  document.getElementById('crimea-flash').classList.add('active');
  crimeaAutoTimer = setTimeout(dismissCrimea, 6000);
  scheduleConditionalPhoneMsgs('crimea');
}

function dismissCrimea() {
  clearTimeout(crimeaAutoTimer);
  document.getElementById('crimea-flash').classList.remove('active');
  // Restore Ukraine to anger observer icon
  if (markerRefs['ukraine']) {
    markerRefs['ukraine'].setIcon(makeObserverIcon());
  }
  setTimeout(doAngerPhase, 350);
}

// ══════════════════════════════════════════════════════════════
//  ANGER PHASE
// ══════════════════════════════════════════════════════════════

function doAngerPhase() {
  if (STATE.angerStarted) return;
  STATE.angerStarted = true;
  STATE.phase = 'anger';

  clearToasts();
  removeJoyLabels();

  // Update markers to angry state for adopted countries
  Object.entries(STATE.choices).forEach(([id, choice]) => {
    const c = CHOOSABLE_COUNTRIES[id];
    if (choice === 'adopt') {
      markerRefs[id].setIcon(makeMarkerIcon('angry'));
      markerRefs[id].setPopupContent(buildChoosablePhasePopup(c, 'anger'));
    } else if (choice === 'huawei') {
      markerRefs[id].setIcon(makeMarkerIcon('angry'));
      const ph = c.huaweiPhases ? c.huaweiPhases.anger : c.phases.anger;
      markerRefs[id].setPopupContent(`<div class="popup-content">
        <p class="popup-name">${c.emoji} ${c.name} <span style="color:var(--china);font-size:.7rem">Huawei</span></p>
        <p class="popup-stat">${ph.stat}</p>
        <p class="popup-story">${ph.text}</p>
      </div>`);
    }
  });

  // Update observer markers to anger state
  Object.values(OBSERVER_COUNTRIES).forEach(obs => {
    markerRefs[obs.id].setPopupContent(buildObserverPopup(obs, 'anger'));
  });

  setHappiness('angry');
  showPanel('tp-anger');
  showMoneySidebar('anger');

  // Set sidebar monthly rate
  const angerMo = document.getElementById('ms-anger-mo');
  if (angerMo) angerMo.textContent = (getAdoptedIds().length * 1.5).toFixed(1);

  const adoptedIds = getAdoptedIds();
  if (adoptedIds.length) startQuotesFromCountries(adoptedIds, 'quote_anger');

  showFlowLines();
  startMoneyCounter();

  // Build and schedule anger toasts
  const angerToasts = buildAngerToasts();
  scheduleToasts(angerToasts);

  // Reject-arc toasts interspersed
  scheduleRejectArcToasts();

  scheduleConditionalPhoneMsgs('anger');

  // Observer anger toasts
  setTimeout(() => {
    Object.values(OBSERVER_COUNTRIES).forEach(obs => {
      if (obs.phases.anger && obs.phases.anger.toast) {
        showToast({ icon: obs.emoji, title: `${obs.name} — Observing`, msg: obs.phases.anger.toast, critical: false });
      }
    });
  }, 8000);

  setTimeout(() => startNewsTicker(), 3500);

  setTimeout(() => {
    const hm = document.getElementById('hist-anger');
    if (hm) hm.classList.add('visible');
  }, 3000);

  // Show "What now?" button after toasts
  const lastToastDelay = 18000;
  setTimeout(() => {
    const btn = document.getElementById('btn-to-act2');
    if (btn) btn.classList.remove('hidden');
  }, lastToastDelay);
}

function buildAngerToasts() {
  const toasts = [];
  let delay = 2000;
  Object.entries(STATE.choices).forEach(([id, choice]) => {
    const c = CHOOSABLE_COUNTRIES[id];
    if (choice === 'adopt' && c.phases.anger.toast) {
      toasts.push({ ...c.phases.anger.toast, delay, critical: true });
      delay += 3500;
    } else if (choice === 'huawei' && c.huaweiPhases) {
      const ph = c.huaweiPhases.anger;
      toasts.push({ ...ph.toast, delay, critical: true });
      delay += 3500;
    }
  });
  return toasts;
}

function scheduleRejectArcToasts() {
  const rejectedIds = getRejectedIds();
  rejectedIds.forEach((id, i) => {
    const c = CHOOSABLE_COUNTRIES[id];
    if (!c.rejectArc) return;
    c.rejectArc.toasts.forEach(t => {
      const tid = setTimeout(() => showToast({ icon: t.icon, title: t.title, msg: t.msg, critical: t.critical }), t.delay + i * 1500);
      toastTimeouts.push(tid);
    });
  });
}

// ══════════════════════════════════════════════════════════════
//  FLOW LINES
// ══════════════════════════════════════════════════════════════

function showFlowLines() {
  // SpaceX HQ marker (for Starlink-adopted countries)
  const adoptedIds = getAdoptedIds();
  const starlinkAdopted = adoptedIds.filter(id => STATE.choices[id] === 'adopt');
  const huaweiAdopted   = adoptedIds.filter(id => STATE.choices[id] === 'huawei');

  if (starlinkAdopted.length) {
    const spxM = L.circleMarker(SPACEX, {
      radius:14, fillColor:'#e84040', color:'#ff5050',
      fillOpacity:.18, weight:2, interactive:true,
    }).addTo(map);
    spxM.bindPopup(`<div class="popup-content">
      <p class="popup-name">SpaceX HQ — Hawthorne, California</p>
      <p class="popup-story">All revenue, data, and decision-making authority flows here. Under US law. Accountable to US shareholders only.</p>
    </div>`, { maxWidth:280 });
    flowLines.push(spxM);

    starlinkAdopted.forEach((id, i) => {
      const c = CHOOSABLE_COUNTRIES[id];
      const arcLat = Math.max(c.coords[0] + 20, 35);
      const arcLng = (c.coords[1] + SPACEX[1]) / 2;
      const line = L.polyline([c.coords, [arcLat, arcLng], SPACEX], {
        color:'#e84040', weight: 1.8, opacity:0,
        dashArray:'8 14', interactive:true,
      }).addTo(map);
      line.on('click', () => showExtractionChain(c, 'adopt'));
      flowLines.push(line);
      setTimeout(() => line.setStyle({ opacity: 0.65 }), i * 200);
    });
  }

  // Observer flow lines to Hawthorne
  Object.values(OBSERVER_COUNTRIES).forEach((obs, i) => {
    const arcLat = Math.max(obs.coords[0] + 18, 35);
    const arcLng = (obs.coords[1] + SPACEX[1]) / 2;
    const line = L.polyline([obs.coords, [arcLat, arcLng], SPACEX], {
      color:'rgba(91,155,213,0.55)', weight:1.2, opacity:0,
      dashArray:'6 12', interactive:false,
    }).addTo(map);
    flowLines.push(line);
    setTimeout(() => line.setStyle({ opacity: 0.4 }), (starlinkAdopted.length + i) * 200 + 800);
  });

  // Huawei flow lines to Shenzhen
  if (huaweiAdopted.length) {
    const huwM = L.circleMarker(SHENZHEN, {
      radius:14, fillColor:'#d4a843', color:'#d4a843',
      fillOpacity:.18, weight:2, interactive:true,
    }).addTo(map);
    huwM.bindPopup(`<div class="popup-content">
      <p class="popup-name">Huawei HQ — Shenzhen, China</p>
      <p class="popup-story">All traffic routes here. "Operational access" maintained. No audit rights granted. Same structure. Different flag.</p>
    </div>`, { maxWidth:280 });
    flowLines.push(huwM);

    huaweiAdopted.forEach((id, i) => {
      const c = CHOOSABLE_COUNTRIES[id];
      const arcLat = Math.min(c.coords[0] + 16, 35);
      const arcLng = (c.coords[1] + SHENZHEN[1]) / 2;
      const line = L.polyline([c.coords, [arcLat, arcLng], SHENZHEN], {
        color:'#d4a843', weight:1.8, opacity:0,
        dashArray:'8 14', interactive:true,
      }).addTo(map);
      line.on('click', () => showExtractionChain(c, 'huawei'));
      flowLines.push(line);
      setTimeout(() => line.setStyle({ opacity: 0.6 }), i * 200 + 600);
    });
  }

  map.flyTo([25, 20], 2, { duration: 1.8 });

  // Start shared dash animation
  flowAnimFrame = requestAnimationFrame(animateFlow);
}

function showExtractionChain(c, choice) {
  const ph = (choice === 'huawei' && c.huaweiPhases) ? c.huaweiPhases.anger : c.phases.anger;
  if (!ph || !ph.extractionChain) return;
  L.popup({ maxWidth: 340 })
    .setLatLng(c.coords)
    .setContent(`<div class="popup-content">
      <p class="popup-name">${c.emoji} ${c.name}</p>
      <p class="chain-label">Extraction path:</p>
      <p class="chain-path">${ph.extractionChain}</p>
    </div>`)
    .openOn(map);
}

function animateFlow() {
  flowDashOffset -= 1;
  flowLines.forEach(l => {
    if (l._path) l._path.setAttribute('stroke-dashoffset', flowDashOffset);
  });
  flowAnimFrame = requestAnimationFrame(animateFlow);
}

function removeFlowLines() {
  if (flowAnimFrame) { cancelAnimationFrame(flowAnimFrame); flowAnimFrame = null; }
  flowLines.forEach(l => { if (l.remove) l.remove(); });
  flowLines = [];
}

// ══════════════════════════════════════════════════════════════
//  ACT 2 QUEUE
// ══════════════════════════════════════════════════════════════

function startAct2Queue() {
  STATE.phase = 'act2';
  clearToasts();
  stopNewsTicker();

  // Build queue: all adopted countries (including huawei Cambodia)
  STATE.act2Queue = getAdoptedIds().slice();
  STATE.currentAct2Id = null;

  advanceAct2Queue();
}

function advanceAct2Queue() {
  if (STATE.act2Queue.length === 0) {
    // All done — show ending
    showCompositeEnding();
    return;
  }

  STATE.currentAct2Id = STATE.act2Queue.shift();
  const id = STATE.currentAct2Id;
  const c  = CHOOSABLE_COUNTRIES[id];
  const choice = STATE.choices[id];

  // Get correct act2 data
  const act2 = (choice === 'huawei' && c.huaweiPhases) ? c.huaweiPhases.act2 : c.act2;

  // Populate tp-act2 panel
  document.getElementById('act2-country-name').textContent = c.emoji + ' ' + c.name;
  document.getElementById('act2-prompt').textContent = act2.prompt;
  document.getElementById('act2-context').textContent = act2.context;

  const optContainer = document.getElementById('act2-options');
  optContainer.innerHTML = act2.options.map(opt => `
    <button class="btn-choice2" onclick="makeAct2Choice('${id}','${opt.id}')">
      <div>
        <span class="btn-title">${opt.label}</span>
        <span class="btn-desc">${opt.desc}</span>
      </div>
    </button>`).join('');

  showPanel('tp-act2');

  // Update map focus
  if (map && c.coords) {
    map.flyTo(c.coords, 4, { duration: 1.2 });
  }
}

function makeAct2Choice(countryId, optionId) {
  STATE.act2Choices[countryId] = optionId;

  const c      = CHOOSABLE_COUNTRIES[countryId];
  const choice = STATE.choices[countryId];
  const act2   = (choice === 'huawei' && c.huaweiPhases) ? c.huaweiPhases.act2 : c.act2;
  const opt    = act2.options.find(o => o.id === optionId);

  if (!opt) { advanceAct2Queue(); return; }

  // Play consequence toasts for this choice
  scheduleToasts(opt.toasts);

  // Wait for toasts to finish then advance
  const lastDelay = Math.max(...opt.toasts.map(t => t.delay), 0) + 5000;
  const btn = document.getElementById('btn-act2-next');
  if (btn) {
    btn.disabled = true;
    btn.textContent = 'Waiting for consequences…';
    btn.classList.remove('hidden');
  }
  setTimeout(() => {
    clearToasts();
    if (btn) { btn.disabled = false; btn.textContent = 'Next country →'; }
    advanceAct2Queue();
  }, lastDelay);
}

// ══════════════════════════════════════════════════════════════
//  COMPOSITE ENDING
// ══════════════════════════════════════════════════════════════

function showCompositeEnding() {
  stopQuotes();
  clearToasts();
  removeFlowLines();
  stopNewsTicker();

  const adopted  = getAdoptedIds();
  const rejected = getRejectedIds();
  const skipped  = Object.values(CHOOSABLE_COUNTRIES).filter(c => !STATE.selectedIds.has(c.id));
  const cambodiaHuawei = STATE.choices['cambodia'] === 'huawei';

  const el = document.getElementById('ending-composite');
  const content = document.getElementById('ending-content');
  if (!el || !content) return;

  content.innerHTML = generateEndingHTML(adopted, rejected, skipped, cambodiaHuawei);
  el.classList.remove('hidden');
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });

  // 5-second pause before restart button
  const cta = el.querySelector('.res-cta-delayed');
  if (cta) {
    cta.classList.add('cta-waiting');
    setTimeout(() => cta.classList.remove('cta-waiting'), 5000);
  }
}

function generateEndingHTML(adopted, rejected, skipped, cambodiaHuawei) {
  const allAdopted = rejected.length === 0;
  const allRejected = adopted.length === 0;
  const mixed = !allAdopted && !allRejected;

  // Mirror line
  let mirrorLine = '';
  if (cambodiaHuawei) mirrorLine = '"The terms changed. The structure didn\'t."';
  else if (allAdopted) mirrorLine = '"The cables that first connected Africa were laid by European firms, routed through European hubs. The topology of extraction was built in."';
  else if (allRejected) mirrorLine = '"Every nation that resisted and then capitulated remembers when they had a choice."';
  else mirrorLine = '"The map is full of decisions made by people who will not live with the consequences."';

  // Title
  let title = '';
  if (cambodiaHuawei && adopted.length > 1) title = 'You changed the flag on one server farm. Not the others.';
  else if (allAdopted) title = 'Every country you advised is connected. And dependent.';
  else if (allRejected) title = 'Every country you advised held the line. At cost.';
  else title = 'You drew lines. The map shows more than your lines.';

  // Sub
  const totalConnected = adopted.length;
  const sub = allAdopted
    ? `${totalConnected} countries connected. $${(totalConnected * 1.5).toFixed(1)}M per month flowing to California${cambodiaHuawei ? ' and Shenzhen' : ''}.`
    : mixed
      ? `${adopted.length} countries adopted. ${rejected.length} held out. ${skipped.length > 0 ? skipped.length + ' not assessed.' : ''}`
      : `${rejected.length} countries rejected. The sovereignty is intact. The human cost is counted.`;

  // Per-country summaries
  const adoptedSummaries = adopted.map(id => {
    const c = CHOOSABLE_COUNTRIES[id];
    const act2Id = STATE.act2Choices[id];
    const act2 = (STATE.choices[id] === 'huawei' && c.huaweiPhases) ? c.huaweiPhases.act2 : c.act2;
    const opt = act2 && act2.options.find(o => o.id === act2Id);
    return `<div class="end-country-row">
      <span class="end-country-name">${c.emoji} ${c.name}</span>
      <span class="end-country-status" style="color:${STATE.choices[id]==='huawei'?'var(--china)':'var(--joy)'}">
        ${STATE.choices[id]==='huawei'?'Huawei adopted':'Adopted'}
      </span>
      ${opt ? `<p class="end-country-note">${opt.endText}</p>` : ''}
    </div>`;
  }).join('');

  const rejectedSummaries = rejected.map(id => {
    const c = CHOOSABLE_COUNTRIES[id];
    const arc = c.rejectArc;
    return `<div class="end-country-row">
      <span class="end-country-name">${c.emoji} ${c.name}</span>
      <span class="end-country-status" style="color:var(--grief)">Rejected</span>
      ${arc ? `<p class="end-country-note">Principled refusal. The human cost accumulates.</p>` : ''}
    </div>`;
  }).join('');

  // Observer note
  const observerNote = `<div class="framework-box" style="margin-top:1.5rem">
    <h4>The Observer Countries</h4>
    <p>Ukraine, the Philippines, and Brazil adopted Starlink without your advice. Their stories unfolded regardless of your recommendations. The structure does not need your permission. It expands on its own.</p>
    <p>The flow lines on this map include countries you never touched.</p>
  </div>`;

  // Skipped note
  const skippedNote = skipped.length > 0
    ? `<p style="font-family:var(--serif);font-style:italic;color:var(--muted);margin:1.5rem 0;font-size:1rem">
        ${skipped.length} ${skipped.length===1?'country':'countries'} awaited your assessment: ${skipped.map(c=>c.emoji+' '+c.name).join(', ')}. You chose not to engage. Their dilemmas are still unresolved.
      </p>` : '';

  // Ethical framework
  let framework = '';
  if (cambodiaHuawei) {
    framework = `<h4>Post-Colonial Ethics Analysis</h4>
      <p>Moyo (2012) warned that the narrative of "South-South cooperation" can mask new forms of extraction. Cambodia\'s Huawei network and the Starlink networks you recommended share the same structural logic: foreign infrastructure, foreign jurisdiction, no exit rights.</p>
      <p>The question is not which empire is kinder. The question is whether digital sovereignty is achievable when every available path was paved by someone else.</p>`;
  } else if (allAdopted) {
    framework = `<h4>Post-Colonial Ethics Analysis</h4>
      <p>Couldry &amp; Mejias (2019) describe "data colonialism" as the appropriation of human life through data — a structural process, not a metaphor. Every adoption you recommended created a new data colony: a population whose digital existence is owned and governed elsewhere.</p>
      <p>The connectivity is real. So is the extraction. DeNardis (2014): "Infrastructure is politics." You built someone else\'s politics into every country you advised.</p>`;
  } else {
    framework = `<h4>Post-Colonial Ethics Analysis</h4>
      <p>Fanon (1961) argued that liberation is not clean — the colonised who refuses is not free, only principled. Your rejected countries held their sovereignty at measurable human cost. Your adopted countries gained connectivity at measurable structural cost.</p>
      <p>There was no correct answer. There was only the weight of the choice — and who carried it.</p>`;
  }

  // Closing question
  let question = '';
  if (cambodiaHuawei) {
    question = 'Look at the map. California. Shenzhen. Two destinations. Same arrows. Same structure. If choosing your coloniser isn\'t sovereignty, what is? And does the answer exist yet — or are we still building it?';
  } else if (skipped.length > 0 && adopted.length >= 3) {
    question = `You engaged with ${STATE.selectedIds.size} dilemmas and set ${skipped.length} aside. Was that triage — or avoidance? If you went back to the ${skipped.length} you skipped, would your principles hold?`;
  } else if (allAdopted) {
    question = 'Every country you advised is connected. Now look at the observer dots — Ukraine, Philippines, Brazil. They didn\'t wait for your advice. The system expanded without you. What does it mean to advise a process that doesn\'t require your consent?';
  } else {
    question = 'You drew lines. Some countries connected. Some held out. The observers connected without you. The structure expanded regardless. Was your advice the point — or were you a witness to something that was already happening?';
  }

  return `
    <p class="hist-mirror-line">${mirrorLine}</p>
    <h2 class="res-title">${title}</h2>
    <p class="res-sub">${sub}</p>

    <div class="end-countries-grid">
      ${adoptedSummaries}
      ${rejectedSummaries}
    </div>

    ${skippedNote}
    ${observerNote}

    <div class="framework-box">
      ${framework}
    </div>

    <div class="ending-question">
      <p class="eq-text">${question}</p>
    </div>

    <div class="res-cta res-cta-delayed">
      <a href="about.html" class="btn-about">About &amp; Sources →</a>
      <button class="btn-restart" onclick="restart()">Try a different path</button>
    </div>`;
}

// ══════════════════════════════════════════════════════════════
//  IMPACT BARS
// ══════════════════════════════════════════════════════════════

const IMPACT = {
  neutral: { welfare:50, econ:50, sov:50, infra:50 },
  joy:     { welfare:82, econ:68, sov:22, infra:18 },
  angry:   { welfare:55, econ:65, sov:18, infra:12 },
  grief:   { welfare:12, econ:8,  sov:88, infra:80 },
};

function setHappiness(key) {
  const s = IMPACT[key]; if (!s) return;
  [
    { bar:'bar-welfare', pct:'pct-welfare', val:s.welfare },
    { bar:'bar-econ',    pct:'pct-econ',    val:s.econ },
    { bar:'bar-sov',     pct:'pct-sov',     val:s.sov },
    { bar:'bar-infra',   pct:'pct-infra',   val:s.infra },
  ].forEach(d => {
    const b = document.getElementById(d.bar);
    const p = document.getElementById(d.pct);
    if (b) b.style.width = d.val + '%';
    if (p) p.textContent = d.val + '%';
  });
}

// ══════════════════════════════════════════════════════════════
//  TOP PANEL SWITCHER
// ══════════════════════════════════════════════════════════════

function showPanel(id) {
  document.querySelectorAll('.tp-state').forEach(el => el.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
}

// ══════════════════════════════════════════════════════════════
//  QUOTE ROTATION  (from adopted country objects)
// ══════════════════════════════════════════════════════════════

const COUNTRY_QUOTES = {
  quote_joy:   { kenya:'Drug stockouts −60%. A child in Turkana survived.', bolivia:'Eight languages archived. Elder María: "Our words will survive now."', nigeria:'Northern markets link to Lagos. First international order in Kano.', fiji:'All 330 islands contact during Cyclone Yasa. Zero blackout deaths.', cambodia:'Crop insurance launched. Three people returned from Phnom Penh.', senegal:'Fatou Diallo, 16, watches her first university lecture. She wants to be an engineer.' },
  quote_anger: { kenya:'"They told me the records were safe." — Mweru District nurse', bolivia:'"We put our memory in their machine. They sold the map." — Elder María', nigeria:'Nigeria paid SpaceX $177M. That is the cost of two domestic satellites.', fiji:'Fiji requested priority bandwidth. SpaceX said: global demand allocation.', cambodia:'"Chicago traders shorted Cambodian rice before farmers knew their own harvest." — Farmer', senegal:'Fatou Diallo now dreams in English. Her grandmother does not understand her homework.' },
};

function startQuotesFromCountries(ids, key) {
  stopQuotes();
  quoteIndex = 0;
  const quotes = ids.map(id => COUNTRY_QUOTES[key]?.[id]).filter(Boolean);
  if (!quotes.length) return;

  const elId = key === 'quote_joy' ? 'tp-quote-joy' : 'tp-quote-anger';
  const el   = document.getElementById(elId);
  if (!el) return;

  function next() {
    el.style.opacity = '0';
    setTimeout(() => {
      el.textContent = quotes[quoteIndex % quotes.length];
      el.style.opacity = '1';
      quoteIndex++;
    }, 400);
  }
  next();
  quoteInterval = setInterval(next, 3400);
}

function stopQuotes() {
  if (quoteInterval) { clearInterval(quoteInterval); quoteInterval = null; }
}

// ══════════════════════════════════════════════════════════════
//  MONEY COUNTER / SIDEBAR
// ══════════════════════════════════════════════════════════════

function showMoneySidebar(state) {
  const sidebar = document.getElementById('money-sidebar');
  sidebar.classList.add('visible');
  document.querySelectorAll('.ms-state').forEach(el => el.classList.remove('active'));
  const el = document.getElementById('ms-' + state);
  if (el) el.classList.add('active');
  if (state === 'anger') startCumulativeCounter();
  startPurchasingPower();
}

function startMoneyCounter() {
  const el = document.getElementById('money-value');
  if (!el) return;
  let val = 0;
  const target = getAdoptedIds().length * 1.5;
  const step = target / 40;
  const iv = setInterval(() => {
    val = Math.min(val + step, target);
    el.textContent = val.toFixed(1);
    if (val >= target) clearInterval(iv);
  }, 80);
}

function startCumulativeCounter() {
  if (cumulativeTickInterval) { clearInterval(cumulativeTickInterval); cumulativeTickInterval = null; }
  const el = document.getElementById('ms-cumulative');
  if (!el) return;
  const adoptedCount = getAdoptedIds().length;
  const extracted = adoptedCount * 1.5 * 36; // 3 years
  let val = 0;
  const start = Date.now();
  function countUp() {
    const p = Math.min((Date.now() - start) / 2500, 1);
    val = extracted * p;
    el.textContent = val.toFixed(1);
    if (p < 1) requestAnimationFrame(countUp);
    else {
      cumulativeTickInterval = setInterval(() => {
        val += 0.003;
        el.textContent = val.toFixed(1);
      }, 500);
    }
  }
  requestAnimationFrame(countUp);
}

const MONTHLY_EQUIVALENTS = ['≈ 1,200 nurse salaries / year','≈ 18 rural clinics','≈ 48,000 student laptops'];

function startPurchasingPower() {
  stopPurchasingPower();
  let idx = 0;
  function update() {
    const text = MONTHLY_EQUIVALENTS[idx % MONTHLY_EQUIVALENTS.length];
    ['equiv-joy','equiv-anger'].forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      el.classList.add('fading');
      setTimeout(() => { el.textContent = text; el.classList.remove('fading'); }, 400);
    });
    idx++;
  }
  update();
  purchasingPowerInterval = setInterval(update, 4000);
}

function stopPurchasingPower() {
  if (purchasingPowerInterval) { clearInterval(purchasingPowerInterval); purchasingPowerInterval = null; }
}

// ══════════════════════════════════════════════════════════════
//  TOAST NOTIFICATIONS
// ══════════════════════════════════════════════════════════════

function showToast(t) {
  const container = document.getElementById('toast-container');
  if (!container) return;
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
  toastTimeouts.forEach(clearTimeout);
  toastTimeouts = [];
  const c = document.getElementById('toast-container');
  if (c) c.innerHTML = '';
}

// ══════════════════════════════════════════════════════════════
//  PHONE NOTIFICATIONS
// ══════════════════════════════════════════════════════════════

const PHONE_MESSAGES = [
  // Joy phase — per adopted country
  { phase:'joy', delay:2000,  sender:'🇰🇪 Kenya Health Minister', avatar:'🏥', text:'The clinics are online. I\'ve never seen my staff this hopeful.',        cond:() => STATE.choices.kenya === 'adopt' },
  { phase:'joy', delay:3500,  sender:'🇫🇯 Fiji Disaster Agency',   avatar:'🌀', text:'Cyclone Yasa: all outer islands reporting. First time in history.',      cond:() => STATE.choices.fiji  === 'adopt' },
  { phase:'joy', delay:5000,  sender:'🇸🇳 Senegal Education Min.', avatar:'📚', text:'340,000 students connected this semester. Exam scores already rising.',  cond:() => STATE.choices.senegal === 'adopt' },
  { phase:'joy', delay:6500,  sender:'🇧🇴 Elder María\'s grandson', avatar:'🎙️', text:'Grandmother finished the recordings. She cried. She said now they\'ll live forever.', cond:() => STATE.choices.bolivia === 'adopt' },
  { phase:'joy', delay:8000,  sender:'🇰🇭 Cambodia Agriculture',   avatar:'🌾', text:'The Huawei network is working. Costs lower than expected.',              cond:() => STATE.choices.cambodia === 'huawei' },
  { phase:'joy', delay:8000,  sender:'🇰🇭 Cambodia Agriculture',   avatar:'🌾', text:'Battambang farmers are using the yield predictions. This is real.',      cond:() => STATE.choices.cambodia === 'adopt' },
  { phase:'joy', delay:9500,  sender:'Your daughter',              avatar:'👧', text:'Papa, we learned about Fiji in school today. Did you really help them? 😊', cond:() => true },
  // Crimea phase
  { phase:'crimea', delay:500,  sender:'🇰🇪 Kenya Health Minister', avatar:'🏥', text:'Are you seeing Ukraine? Can they do that to us?',                       cond:() => STATE.choices.kenya === 'adopt' },
  { phase:'crimea', delay:1500, sender:'🇫🇯 Fiji PM\'s Office',    avatar:'🌀', text:'We need written assurance our coverage cannot be suspended. Can you provide it?', cond:() => STATE.choices.fiji === 'adopt' },
  { phase:'crimea', delay:2500, sender:'🇳🇬 Nigerian Senator',     avatar:'🇳🇬', text:'If one man can switch off a country\'s internet, what did we sign?',     cond:() => STATE.choices.nigeria === 'adopt' },
  { phase:'crimea', delay:3500, sender:'🇰🇭 Cambodia Agriculture', avatar:'🌾', text:'The Americans\' satellite was just turned off. Our Chinese towers can\'t be switched off from California.', cond:() => STATE.choices.cambodia === 'huawei' },
  { phase:'crimea', delay:4500, sender:'Unknown Number',           avatar:'⚠️', text:'Clause 2. You read it. You signed it.',                                   cond:() => getAdoptedIds().length > 0 },
  // Anger phase
  { phase:'anger', delay:2000, sender:'🇰🇪 Kenya Health Minister', avatar:'🏥', text:'A US court subpoenaed our patient records. We found out from Reuters.',    cond:() => STATE.choices.kenya === 'adopt' },
  { phase:'anger', delay:4000, sender:'🇧🇴 Bolivia Indigenous',    avatar:'🌿', text:'A mining company found our villages. The coordinates came from the archive. You told us it was safe.', cond:() => STATE.choices.bolivia === 'adopt' },
  { phase:'anger', delay:6000, sender:'🇫🇯 Fiji PM',               avatar:'🌀', text:'We asked for cyclone bandwidth. They said no. We are 900,000 people. We don\'t matter to them.', cond:() => STATE.choices.fiji === 'adopt' },
  { phase:'anger', delay:7500, sender:'🇸🇳 Senegal Wolof Assoc.',  avatar:'📝', text:'Our children speak English now. They learned it from the internet you connected them to.', cond:() => STATE.choices.senegal === 'adopt' },
  { phase:'anger', delay:9000, sender:'🇳🇬 Nigerian Senator',      avatar:'🇳🇬', text:'We\'ve paid SpaceX $177M. That\'s two satellites. Our own satellites. We could have built this ourselves.', cond:() => STATE.choices.nigeria === 'adopt' },
  { phase:'anger', delay:10000,sender:'🇰🇭 Cambodian journalist',  avatar:'📰', text:'"The Americans watch from the sky. The Chinese watch from the ground. I\'m not sure it mattered." — anonymous', cond:() => STATE.choices.cambodia === 'huawei' },
  { phase:'anger', delay:11000,sender:'Unknown',                   avatar:'⚠️', text:'Clause 2. Clause 3. Clause 4. Multiple countries. One contract. One company.',  cond:() => getAdoptedIds().length > 0 },
];

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

function scheduleConditionalPhoneMsgs(phase) {
  const msgs = PHONE_MESSAGES.filter(m => m.phase === phase && m.cond());
  msgs.forEach(m => {
    const tid = setTimeout(() => showPhoneMsg(m), m.delay);
    phoneTimeouts.push(tid);
  });
}

function clearPhoneMsgs() {
  phoneTimeouts.forEach(clearTimeout);
  phoneTimeouts = [];
  const c = document.getElementById('phone-notifs');
  if (c) c.innerHTML = '';
}

// ══════════════════════════════════════════════════════════════
//  NEWS TICKER
// ══════════════════════════════════════════════════════════════

const NEWS_TICKER_ITEMS = [
  { text:'2019 — India shuts down internet in Kashmir for 18 months. 7 million people offline.', crimea:false },
  { text:'2021 — Myanmar junta orders internet blackout during coup. Resistance communication severed.', crimea:false },
  { text:'2022 — Iran cuts internet during Mahsa Amini protests. Duration: 5+ days.', crimea:false },
  { text:'2022 — Musk orders Starlink switched off over Crimea. No government consulted.', crimea:true },
  { text:'2023 — Ethiopia: internet restored after 2-year Tigray blackout. Estimated deaths during blackout: thousands.', crimea:false },
];

function startNewsTicker() {
  const ticker = document.getElementById('news-ticker');
  const inner  = document.getElementById('ticker-inner');
  if (!ticker || !inner) return;

  const html = NEWS_TICKER_ITEMS.map(item =>
    `<span class="ticker-item${item.crimea?' ticker-crimea':''}">${item.text}</span><span class="ticker-sep"> · </span>`
  ).join('');
  inner.innerHTML = html + html;
  ticker.classList.remove('hidden');

  let offset = 0;
  const speed = 0.45;
  function tick() {
    if (!newsTickerRAF) return;
    offset -= speed;
    const half = inner.scrollWidth / 2;
    if (Math.abs(offset) >= half) offset = 0;
    inner.style.transform = `translateX(${offset}px)`;
    newsTickerRAF = requestAnimationFrame(tick);
  }
  newsTickerRAF = requestAnimationFrame(tick);
}

function stopNewsTicker() {
  if (newsTickerRAF) { cancelAnimationFrame(newsTickerRAF); newsTickerRAF = null; }
  const ticker = document.getElementById('news-ticker');
  if (ticker) ticker.classList.add('hidden');
}

// ══════════════════════════════════════════════════════════════
//  MAIN EXPERIENCE ENTRY
// ══════════════════════════════════════════════════════════════

function startExperience() {
  document.getElementById('screen-intro').classList.add('hidden');
  document.getElementById('screen-main').classList.remove('hidden');

  if (!map) {
    initMap();
    setTimeout(() => map.invalidateSize(), 100);
  }

  setHappiness('neutral');
  showPanel('tp-select');
  updateSelectionUI();
}

// ══════════════════════════════════════════════════════════════
//  RESTART
// ══════════════════════════════════════════════════════════════

function restart() {
  location.reload();
}
