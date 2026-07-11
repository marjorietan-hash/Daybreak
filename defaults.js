// Starting template for the Daybreak tracker. On first run (empty
// Firestore doc) this is written to the database; after that the
// live document is the source of truth. "Reset" rewrites this.
//
// This is the DAYBREAK instance: it keeps Booth's standard program-launch
// methodology (discovery framework, maturity model, RACI, deployment
// tracker, cadence) and pre-fills the client-specific facts we already
// know from discovery (scope, KPI baselines, pain points, staffing,
// stakeholders). Owners/dates are left blank to confirm in-app.
//
// Program: Daybreak — DTC telehealth, sleep apnea care. Scope transitioning
// to Managed Solutions (MS) = CS1 Patient Onboarding (Customer Support LOB).
// Objective: move the engagement from an FTE-based model to a
// transaction-based model within 120 days. Delivery site: Cebu (PH) + CO.

export const DEFAULT = {
  tracker: [
    {topic:"Program overview & business objectives",
     objective:"Understand the client's business model, service drivers, growth goals, and what success looks like for this engagement.",
     questions:["What business objectives is this program intended to achieve?","What prompted exploring Booth as a managed solutions partner — and why now?","What does success look like at 30/60/90 days and 12 months?","Which segments or service lines are growing fastest?"],
     session:"Intro / alignment meeting", owner:"Marj Tan",
     outcomes:"1. Scope of services Booth supports  2. Business trigger  3. 30/60/90 success definition",
     pending:"Signed MNDA/MSA; final scope doc; sample SLA/MSA",
     response:"DTC telehealth program for sleep apnea care. Booth's MS scope = CS1 Patient Onboarding (Customer Support), guiding patients from sleep-study completion (S2 Complete) → Manufacturing Ready → Device Delivered. Trigger: shift from a fixed-headcount / TS-PSA model to Managed Solutions to hit SLAs and manage staffing risk. Success = SLA recovery (esp. SMS first response) + 95% device-delivered, transition FTE→transaction within 120 days.",
     status:"In progress",
     notes:"CS is the LOB transitioning to MS. S0 (sleep test intake) and S1 (test completion) are in-scope service lines but CS is primary. Healthcare vertical also spans Sleep and BMI service lines. Benchmark for pricing/performance = the 'Fridays' project."},
    {topic:"Staffing & volume forecasting",
     objective:"Gather headcount baseline, volume assumptions, AHT/cycle time, shrinkage, attrition and capacity planning inputs.",
     questions:["What is current contact volume by channel (chat, email, calls)?","What is the 12-month volume/headcount growth target?","What does peak volume look like and what drives it?","What is current AHT / handle time per channel?","What shrinkage and attrition assumptions should we plan for?"],
     session:"Meeting", owner:"Jerson Bontuyan",
     outcomes:"1. Volume baseline & forecast  2. Attrition/shrinkage benchmarks  3. Channel mix confirmed",
     pending:"3-month historical raw volume by channel & week; case-type breakdown; peak calendar; AHT by process step",
     response:"HC snapshot (Jun 29): 8 active PH + 2 active CO = 10 total; +2 on maternity leave / PIP. August target +4–6 → 14–16 total. Baseline for proposal: 6 producing + 1 PIP + 1 mat leave + 4 new authorized hires.",
     status:"In progress",
     notes:"Peak = Mondays (weekend backlog flows in). HOOP 8AM–5PM PST, Mon–Fri. Time to fill 3–6 weeks. RISK: 4 of 8 PH agents at attrition risk from RTO mandate — hybrid model proposed to mitigate. PH brownouts drain ~4–6 productive hrs/week team-wide. Shrinkage: 1hr lunch, 2×15min breaks, 1hr/wk standup, ~15min/wk all-hands, ~22min/wk 1:1, ~10% power-hour non-prod."},
    {topic:"KPI & SLA alignment",
     objective:"Define performance expectations, quality thresholds, and which metrics drive experience and retention.",
     questions:["What are the core KPIs (CSAT, FCR, resolution time, quality)?","Which KPIs most impact experience and retention?","What SLA commitments apply per channel?","What does a red-flag KPI look like?","What is the current baseline for each KPI?"],
     session:"Meeting", owner:"Marj Tan",
     outcomes:"1. KPI definitions & baselines  2. SLA thresholds  3. Red-flag triggers",
     pending:"Raw KPI data (not summary reports); sample MBR/QBR; KPI dashboard",
     response:"Mandatory CS SLAs — 3-hr SMS First Response: baseline 51–55%, target 85%+ (CRITICAL). 24-hr SMS First Response: baseline 68–76% (mandatory, at risk). 24-hr Case First Response: baseline 62–66% (mandatory, at risk). Outcome target: 95% device delivered.",
     status:"In progress",
     notes:"Baselines improved +19 to +38 pts on day 1 of pod restructure. Backlog: 71% of open cases past 24h; 22% past 14 days. Refund-before-delivery = quality/loss metric (Save-the-Sale in CX). FCR and several metrics depend on client's internal systems/processes/regulations. Channels: SMS, Email (ticketing), phone."},
    {topic:"Technology & AI enablement",
     objective:"Identify current tools, automation maturity, workflow inefficiencies, and BoothAgent opportunity areas.",
     questions:["What tools are used for contact, CRM/ticketing, QA and reporting?","How many systems does an agent touch to close one interaction?","What manual tasks consume the most time weekly?","Which reports are built manually and how long do they take?","What AI is in use today, and what's planned in 6–12 months?"],
     session:"Discovery / deep dive", owner:"",
     outcomes:"1. Full tool inventory  2. Manual hotspots  3. BoothAgent opportunities flagged",
     pending:"Tool/system inventory; current reporting setup; workflow process flows",
     response:"Primary system: Salesforce across SMS, phone and email. Reporting is assembled manually today — flagged as the top automation opportunity for BoothAgent.",
     status:"Open",
     notes:"Disposition-entry errors are causing validation complexity for sales/refunds — proposal to fix incorrect case dispositions. AI use cases to explore: report automation, triage, summary/draft response generation, disposition validation."},
    {topic:"Leadership & governance structure",
     objective:"Map decision-making authority, meeting cadence, escalation paths, and operational ownership.",
     questions:["Who are the key client stakeholders (Ops, QA, Training, Compliance)?","What governance meetings are required — daily, weekly, monthly?","What metrics are reviewed at each level?","Which decisions need executive approval?","What is the escalation matrix?"],
     session:"Alignment meeting", owner:"",
     outcomes:"1. Leadership org chart  2. Governance cadence  3. Escalation matrix",
     pending:"Client org chart; escalation matrix; meeting cadence confirmation",
     response:"Booth embeds a dedicated management layer from day one: Ops Manager (owns program performance end-to-end — SLA/KPI accountability, client governance/EBR, escalation ownership, capacity/WFM), Team Lead (day-to-day floor — real-time queue mgmt, pod schedule/adherence, first-level escalation, daily coaching), and Trainer. QA lead to be confirmed.",
     status:"Open",
     notes:"Client-side contacts: Ted StDic and JD Norris (thedaybreak.com). Booth BD/AM: Chris Mueller, Carlos Pedraza. COO sponsor: Kathy Ancheta."},
    {topic:"Technology & security requirements",
     objective:"Validate equipment, system access, data handling, security protocols and compliance.",
     questions:["What hardware/workstation specs are required?","What security/compliance applies (VPN, VDI, endpoint security)?","What data is handled — PII / sensitive records?","What is the access approval and provisioning process?","What tools/licenses does Booth provide vs the client?"],
     session:"Deep dive / technical walkthrough", owner:"",
     outcomes:"1. Equipment spec list  2. Security & access requirements  3. Data-handling protocols",
     pending:"Equipment spec sheet; security/compliance checklist; Salesforce access workflow",
     response:"",
     status:"Open",
     notes:"Handles patient health data (telehealth / sleep apnea) — PII/PHI protocols are a core priority. PH power brownouts are a continuity risk for onsite/remote capacity. Confirm VPN/MFA, endpoint security, and Salesforce provisioning process."},
    {topic:"Workflow walkthrough — core processes",
     objective:"Map end-to-end interaction handling: intake, handoffs, decision points, SLA stages, rework.",
     questions:["Walk me through a full interaction — from contact to resolved/closed ticket.","Where do handoffs occur between tiers/teams?","Which stages have the highest rework or reopen rates?","What are the most common reasons a ticket stalls or reopens?","What is average cycle time per stage and per channel?"],
     session:"Side by side / process walkthrough", owner:"Joyce Barraca",
     outcomes:"1. End-to-end process map  2. Handoffs & failure modes  3. Automation candidates",
     pending:"Process flow docs; AHT/cycle time by stage; SOP process mapping",
     response:"Patient journey to map: S2 Complete → (kit returned + F2F booked) → Manufacturing Ready → Device Delivered. SBS sessions to observe tool usage, handoffs, SLA challenge points, address-update process, refund reasons, and where the open-case backlog sits.",
     status:"Open",
     notes:"Document first-attempt, follow-up, exception and escalation paths. Causal chain: fast response → engaged patient → kit returned + F2F booked → device delivered → revenue. Define exactly where Booth's operational responsibility begins and ends."},
    {topic:"Training framework & speed to proficiency",
     objective:"Understand training structure, certification, nesting duration and the glide path to independent production.",
     questions:["Who owns training content and updates?","What is the duration/structure of new-hire training?","What is the certification / sign-off process?","What is the nesting period before independent production?","What LMS or knowledge base is used?"],
     session:"Side by side w/ training", owner:"",
     outcomes:"1. Training framework & timeline  2. Certification process  3. Proficiency benchmarks",
     pending:"Client SOPs for T3; training outline; certification rubric; 30/60/90 glidepath",
     response:"",
     status:"Open",
     notes:"Plan: Train-the-Trainer (T3) using client SOPs, then Booth-delivered onboarding + product/systems training. SOP process mapping to be clarified with client (open action)."},
    {topic:"Quality framework & calibration",
     objective:"Align QA scoring methodology, audit cadence, calibration, coaching and error-risk classification.",
     questions:["What is the QA scoring framework — parameters and weights?","What is the audit methodology and sampling rate?","How often is calibration done and who joins?","Which errors carry the highest risk?","How are disputes handled?"],
     session:"QA review session", owner:"",
     outcomes:"1. QA rubric documented  2. Calibration cadence  3. High-risk error categories",
     pending:"Client quality checklist to load into RubriCore; coaching tracker; calibration schedule",
     response:"",
     status:"Open",
     notes:"Assess how to implement Booth's QA framework: scorecards, governance, calibration, and AI-assisted quality monitoring (RubriCore). Highest-risk errors: incorrect dispositions, address errors, refund-before-delivery. Cases closed without resolution suspected in the backlog."},
    {topic:"Process excellence & improvement",
     objective:"Identify top operational pain points, rework sources and transformation opportunities.",
     questions:["What are the top 5 operational pain points today?","Where does rework/reopen occur most frequently?","What slows response times?","Where do manual errors occur most often?","What would a 'perfect process' look like for your top two workflows?"],
     session:"Process excellence workshop", owner:"",
     outcomes:"1. Top 5 pain points  2. Rework hotspots  3. Improvement roadmap started",
     pending:"Process error logs; current improvement project list",
     response:"Top 5 pain points: (1) FIXED — SMS + phone concurrency causing SLA misses, resolved via time-blocked pod schedule. (2) Monday weekend backlog with no early coverage — leading cause of weekly SLA degradation. (3) F2F never-booked population with no automated nudge. (4) Open-case backlog aging (71% past 24h; 22% past 14 days), concentrated in a few reps. (5) Complex 10% (address errors, reships, escalations, frustrated callers) — disproportionate time & refund risk.",
     status:"In progress",
     notes:"#4 and #5 are highest-risk (backlog aging + complex 10% carry most refund/SLA risk). #1 already fixed."},
    {topic:"AI & BoothAgent opportunity assessment",
     objective:"Pinpoint use cases where BoothAgent removes manual effort, speeds throughput and improves experience.",
     questions:["Which tasks require copying info between systems?","Which reports are manual and how long do they take?","Which decisions follow clear rules and could be AI-assisted?","Can AI support triage, summary generation, or draft responses?","Can AI assist with compliance pre-checks or documentation?"],
     session:"AI discovery session", owner:"",
     outcomes:"1. BoothAgent use-case shortlist  2. Automation ROI candidates  3. AI readiness level",
     pending:"Sample manual reports; list of repetitive daily tasks",
     response:"",
     status:"Open",
     notes:"Candidate use cases: automate the manual reporting stack, F2F never-booked auto-nudge, disposition-entry validation, backlog triage, and draft SMS/case responses to protect the 3-hr SMS SLA."},
    {topic:"Risk, compliance & zero-tolerance policy",
     objective:"Identify compliance requirements, regulatory obligations, historical violations and ZTP triggers.",
     questions:["What compliance/regulatory requirements govern operations?","What are the most common escalation categories or risk flags?","How are violations detected today?","What are the immediate-termination (ZTP) triggers?","What regulatory bodies/standards apply to your data?"],
     session:"Risk workshop", owner:"",
     outcomes:"1. ZTP policy documented  2. Compliance risk categories  3. Audit schedule",
     pending:"ZTP policy doc; data-privacy handling protocol; historical violation summary",
     response:"",
     status:"Open",
     notes:"Patient health data (telehealth) — treat PII/PHI handling as zero-tolerance. Refund-before-delivery is both a loss and a risk metric. PH brownouts are a systemic operational risk to SLA delivery."},
    {topic:"Strategic partnership & success definition",
     objective:"Align on what makes Booth a strategic partner vs a vendor — long-term outcomes, executive expectations, mutual success metrics.",
     questions:["What makes Booth a strategic partner versus just a vendor?","What outcomes define success after 12 months?","What would cause you to expand — or exit?","What does executive leadership expect to see?","How will you measure ROI on this program?"],
     session:"Executive alignment / EBR prep", owner:"Marj Tan",
     outcomes:"1. Partnership success criteria  2. EBR content & audience  3. Expansion trigger conditions",
     pending:"EBR template; long-term roadmap discussion",
     response:"ROI = SLA rate + device-delivered rate + cost vs. self-managed headcount. Move from seat-filling (TS/PSA) to outcome ownership (MS): Booth manages SLA delivery and staffing risk.",
     status:"Open",
     notes:"Expansion path: full S0/S1 coverage and additional verticals (e.g. BMI service line). 120-day transition FTE→transaction is the near-term proof point."}
  ],
  setup: [
    {phase:"discovery", ws:"Discovery & client alignment (13 topics)", pl:16, tl:1, qa:1, tr:1, inc:"Session prep, 13 discovery sessions, documentation into this tracker, client follow-ups."},
    {phase:"setup", ws:"SOP review & recommendations", pl:16, tl:2, qa:2, tr:2, inc:"3-day assessment of client SOPs + written improvement recommendations."},
    {phase:"setup", ws:"Train-the-Trainer (T3)", pl:8, tl:6, qa:10, tr:40, inc:"2–3 week T3 using client SOPs; trainer certified to deliver."},
    {phase:"deployment", ws:"Onboarding, product & systems training", pl:4, tl:12, qa:8, tr:50, inc:"New-hire onboarding + product/systems (Salesforce) training delivery."},
    {phase:"setup", ws:"Quality framework & RubriCore setup", pl:4, tl:2, qa:40, tr:6, inc:"Load client quality checklist into RubriCore, build rubric, calibration + coaching design, certification process."},
    {phase:"setup", ws:"Cadence & governance design", pl:16, tl:20, qa:6, tr:2, inc:"Build huddle/WBR/MBR structure, escalation matrix, coaching cadence, reporting templates."},
    {phase:"setup", ws:"Recruitment coordination", pl:8, tl:0, qa:0, tr:0, inc:"Role briefs, interview panels, selection with TA; August +4–6 HC ramp + attrition buffer."},
    {phase:"deployment", ws:"Nesting / supervision", pl:6, tl:40, qa:20, tr:30, inc:"Hands-on production ramp, live monitoring, feedback loops."},
    {phase:"golive", ws:"Go-live & hypercare", pl:8, tl:20, qa:12, tr:10, inc:"Go-live, intensive support, daily issue triage with client."}
  ],
  bau: [
    {item:"Weekly Business Review (WBR)", detail:"KPI/SLA trends (SMS/case first response), actions, risks, staffing vs volume.", owner:"", cadence:"Weekly"},
    {item:"Monthly Business Review (MBR)", detail:"Client-facing performance review vs SLA; wins, gaps, plan.", owner:"", cadence:"Monthly"},
    {item:"Quarterly Business Review (QBR/EBR)", detail:"Strategic review, expansion (S0/S1/other verticals), ROI, roadmap.", owner:"", cadence:"Quarterly"},
    {item:"Continuous improvement", detail:"BoothAgent use-case rollout (reporting automation, F2F nudge, disposition validation), RubriCore calibration, process-excellence on the top pain points.", owner:"", cadence:"Ongoing"},
    {item:"Workforce management", detail:"RTO attrition backfill, capacity vs volume, Monday backlog coverage, brownout contingency, quarterly volume re-forecast.", owner:"", cadence:"Ongoing"},
    {item:"Governance & compliance", detail:"PII/PHI handling, QA audit cadence, disposition-accuracy monitoring, breach protocol.", owner:"", cadence:"Ongoing"}
  ],
  cadence: [
    {c:"Daily huddle", ramp:"Daily (15 min)", steady:"Daily (15 min)", p:"Priorities, blockers, volume outlook (esp. Monday backlog)."},
    {c:"QA calibration", ramp:"Weekly", steady:"Bi-monthly", p:"Align scoring, reduce variance, review high-risk errors (dispositions, refunds)."},
    {c:"Coaching 1:1", ramp:"Weekly", steady:"Weekly", p:"Individual performance and development."},
    {c:"Weekly Business Review (WBR)", ramp:"Weekly", steady:"Monthly", p:"KPI/SLA trends, actions, risks."},
    {c:"Monthly Business Review (MBR)", ramp:"—", steady:"Monthly", p:"Client-facing performance review vs SLA."},
    {c:"Client governance / hypercare sync", ramp:"Daily (go-live wk)", steady:"Weekly → monthly", p:"Escalations, decisions, roadmap."},
    {c:"Quarterly Business Review (QBR/EBR)", ramp:"—", steady:"Quarterly", p:"Strategic review, expansion, roadmap."}
  ],
  gantt: [
    {stage:"setup", phase:"SOP assessment & recommendations (3 days)", s:1, e:1, color:"var(--green)"},
    {stage:"setup", phase:"Recruitment (Aug +4–6 HC)", s:1, e:4, color:"var(--green)"},
    {stage:"setup", phase:"Train-the-Trainer (T3) — parallel", s:2, e:4, color:"var(--teal)"},
    {stage:"deployment", phase:"Onboarding, product & systems training", s:5, e:6, color:"var(--teal)"},
    {stage:"deployment", phase:"Hands-on / nesting — production ramp", s:7, e:8, color:"var(--lavender)"},
    {stage:"golive", phase:"Go-live + client hypercare", s:9, e:9, color:"var(--ok-bright)"}
  ],
  deployTracker: [
    {n:1, phase:"Pre-Deployment", wave:"W1", cat:"Commercial", item:"Signed MSA / SOW / Contract", owner:"", status:"In progress", target:"",
     sub:["Signed MSA / SOW / Contract","Final scope documented","Volume assumptions validated","Pricing model confirmed","Billing triggers defined","SLA / KPIs agreed and documented","Penalties / credits understood","Exit clauses reviewed"],
     note:"Transition FTE-based → transaction-based within 120 days. Pricing benchmarked to 'Fridays' project. Raw client data requested to validate volume before final pricing."},
    {n:2, phase:"Pre-Deployment", wave:"W1", cat:"Governance", item:"RACI matrix completed", owner:"", status:"Not started", target:"",
     sub:["SOM assigned","People Success Partner assigned","T Lead assigned","Training assigned","QA assigned"],
     note:"SOM candidate: Jerson Bontuyan (Site Lead-Cebu). Team Lead to be identified (open action)."},
    {n:3, phase:"Pre-Deployment", wave:"W1", cat:"Governance", item:"RACI defined", owner:"", status:"Not started", target:"",
     sub:["RACI matrix completed","Decision rights documented","Escalation model agreed","Go/No-Go authority defined"],
     note:""},
    {n:4, phase:"Pre-Deployment", wave:"W1", cat:"Workforce & Hiring", item:"Leadership hired", owner:"", status:"In progress", target:"",
     sub:["SOM","Team Leads","QAs"],
     note:"Booth management layer: Ops Manager, Team Lead, Trainer, QA."},
    {n:5, phase:"Pre-Deployment", wave:"W1", cat:"Workforce & Hiring", item:"Agent hiring", owner:"", status:"In progress", target:"",
     sub:["Hiring plan approved","Profiles / competencies defined","Recruitment pipeline ready","Interview process standardized","Offer templates approved","Start dates confirmed"],
     note:"10 active (8 PH + 2 CO); +4–6 by August → 14–16 total. Hybrid model to offset RTO attrition. Time to fill 3–6 weeks."},
    {n:6, phase:"Pre-Deployment", wave:"W2", cat:"Workforce & Hiring", item:"HR & compliance", owner:"", status:"Not started", target:"",
     sub:["Government compliance done","Payroll setup complete"],
     note:""},
    {n:7, phase:"Pre-Deployment", wave:"W2", cat:"People & Culture Readiness", item:"People Success (engagement)", owner:"", status:"Not started", target:"",
     sub:["People Success Partner assigned","NEO coverage: attendance & leave policy","Attrition risk mitigation","Engagement (kick off)"],
     note:"Attrition risk: 4 of 8 PH agents flagged (RTO). Engagement/retention is a priority workstream."},
    {n:8, phase:"Pre-Deployment", wave:"W1", cat:"People & Culture Readiness", item:"People Success (onboarding)", owner:"", status:"Not started", target:"",
     sub:["Welcome kit ready","ID readiness ready","Code of conduct signed"],
     note:""},
    {n:9, phase:"Pre-Deployment", wave:"W1", cat:"Facilities & Onsite Setup", item:"Physical space", owner:"", status:"Not started", target:"",
     sub:["Rooms allocated","Training room assigned","Seating layout finalized"],
     note:"Delivery from Cebu (PH); onsite replenishment targeted in Colombia (CO)."},
    {n:10, phase:"Pre-Deployment", wave:"W1", cat:"IT & Infrastructure", item:"Hardware", owner:"", status:"Not started", target:"",
     sub:["PCs / laptops ready","Headsets ready","Backup devices available","RFID cards / office access","Kensington locks"],
     note:"Plan backup power / connectivity for PH brownouts."},
    {n:11, phase:"Pre-Deployment", wave:"W1", cat:"IT & Infrastructure", item:"Systems access", owner:"", status:"Not started", target:"",
     sub:["Client systems access granted","VPN configured","MFA enabled","QA tools access","LMS access","Email addresses provisioned"],
     note:"Primary system: Salesforce (SMS, phone, email)."},
    {n:12, phase:"Pre-Deployment", wave:"W1", cat:"IT & Infrastructure", item:"Network & security", owner:"", status:"Not started", target:"",
     sub:["Internet bandwidth tested","Firewall rules applied","Data security policies aligned","Incident response plan defined"],
     note:"Patient PII/PHI — align data-handling and breach protocol."},
    {n:13, phase:"Pre-Deployment", wave:"W2", cat:"IT & Infrastructure", item:"IT support", owner:"", status:"Not started", target:"",
     sub:["Onsite IT schedule confirmed","Ticketing process defined","Escalation matrix ready"],
     note:""},
    {n:14, phase:"Training", wave:"W2", cat:"Training & Certification", item:"Training design", owner:"", status:"Not started", target:"",
     sub:["Training deck built","Content validated by client","Role-based modules created","Assessments created"],
     note:"Built from client SOPs via Train-the-Trainer (T3)."},
    {n:15, phase:"Training", wave:"W2", cat:"Training & Certification", item:"Certification", owner:"", status:"Not started", target:"",
     sub:["Pass/fail criteria defined","Go-live certification signed"],
     note:""},
    {n:16, phase:"Go-Live", wave:"W2", cat:"Go-Live Readiness", item:"Culture forming", owner:"", status:"Not started", target:"",
     sub:["House rules (discuss in training)","GC creation","Distribution list creation","Engage with team"],
     note:""},
    {n:17, phase:"Go-Live", wave:"W2", cat:"Go-Live Readiness", item:"Workforce management", owner:"", status:"Not started", target:"",
     sub:["Historical volume","Staffing","Dashboard preparation"],
     note:"Build capacity model from raw client volume; automate the manual reporting stack."},
    {n:18, phase:"Go-Live", wave:"W3", cat:"Go-Live Readiness", item:"Final checks", owner:"", status:"Not started", target:"",
     sub:["All agents certified","IT dry run completed","Client sign-off received","Leadership present onsite"],
     note:""},
    {n:19, phase:"Go-Live", wave:"W3", cat:"Go-Live Readiness", item:"Launch day", owner:"", status:"Not started", target:"",
     sub:["Kickoff call done","Introductions completed","Escalation paths shared","Real-time support active"],
     note:""},
    {n:20, phase:"Hypercare", wave:"W3", cat:"Performance", item:"Daily huddles", owner:"", status:"Not started", target:"",
     sub:["Daily huddles","IT issue tracking","Attendance monitoring"],
     note:"Early Monday coverage to clear weekend backlog."},
    {n:21, phase:"Hypercare", wave:"W3", cat:"Performance", item:"Weekly review", owner:"", status:"Not started", target:"",
     sub:["QA reviews","Performance dashboard","Client sync"],
     note:"Track SMS 3-hr first response toward 85%+."},
    {n:22, phase:"Hypercare", wave:"W3", cat:"Performance", item:"Monthly review", owner:"", status:"Not started", target:"",
     sub:["SLA review","Attrition analysis","Continuous improvement plan"],
     note:""},
    {n:23, phase:"Hypercare", wave:"W3", cat:"Risk & Contingency", item:"Operational risk", owner:"", status:"Not started", target:"",
     sub:["Backup staffing plan","Knowledge gaps identified","Volume surge plan"],
     note:"Brownout contingency; Monday surge plan."},
    {n:24, phase:"Hypercare", wave:"W3", cat:"Risk & Contingency", item:"People risk", owner:"", status:"Not started", target:"",
     sub:["Attrition mitigation","Engagement pulse checks"],
     note:"RTO attrition mitigation via hybrid model."},
    {n:25, phase:"Hypercare", wave:"W3", cat:"Risk & Contingency", item:"Client risk", owner:"", status:"Not started", target:"",
     sub:["SLA breach plan","Communication protocol"],
     note:""}
  ],
  raci: {
    legend:"A = Accountable · R = Responsible · C = Consulted · I = Informed",
    roles:["CCO/COO","Director","SOM","TL","HR/TA","IT","Training","QA","CSM/Client"],
    rows:[
      {act:"Contract finalization", r:["A/R","R","","","","","","","C"]},
      {act:"Hiring leadership",     r:["","A/R","R","","R","","","",""]},
      {act:"Agent hiring",          r:["","A/R","R","","R","","","",""]},
      {act:"Systems access",        r:["","","","","","A/R","","",""]},
      {act:"Training design",       r:["","","","","","","A/R","",""]},
      {act:"QA framework",          r:["","","","","","","","A/R",""]},
      {act:"Go-live readiness",     r:["","R","A","","","","","",""]},
      {act:"Client communication",  r:["A","R","","","","","","","R/C"]},
      {act:"SLA management",         r:["","R","R","","","","","R",""]}
    ]
  },
  deployReadiness: [
    {group:"Structure",       area:"Governance",        criteria:"RACI signed off, decision owners confirmed, escalation path defined", owner:"Director / CCO", status:"Pending"},
    {group:"Structure",       area:"Leadership",        criteria:"Director, SOM, and TL roles filled before go-live — not concurrent with launch", owner:"Director / HR", status:"Pending"},
    {group:"People & Hiring", area:"Hiring plan",       criteria:"TA and ops calibrated on profiles, volume, and pre-employment screening criteria", owner:"Director / TA", status:"Pending"},
    {group:"People & Hiring", area:"QA coverage",       criteria:"QA lead assigned, framework active, capacity matches program volume", owner:"QA Lead / Director", status:"Pending"},
    {group:"Delivery",        area:"Training",          criteria:"All agents certified before client-facing work begins", owner:"Training Lead", status:"Pending"},
    {group:"Delivery",        area:"Success metrics",   criteria:"SLAs, KPIs, and reporting cadence agreed with client before launch", owner:"Director / CSM", status:"Pending"},
    {group:"Delivery",        area:"Incentives aligned",criteria:"Team and client expectations on ownership, accountability, and outcomes matched", owner:"Director / CCO", status:"Pending"}
  ],
  goNoGo: {
    owner:"Program / Launch Lead",
    approver:"Executive Sponsor",
    criteria:[
      {area:"Commercial", criteria:"Contract signed, invoicing ready", owner:"Director / CCO", status:"Pending"},
      {area:"People",     criteria:"Leadership hired, agents onboarded, screening complete", owner:"Director / HR", status:"Pending"},
      {area:"IT",         criteria:"Systems access confirmed at 100%", owner:"IT Lead", status:"Pending"},
      {area:"Training",   criteria:"All agents certified before go-live", owner:"Training Lead", status:"Pending"},
      {area:"QA",         criteria:"QA framework active, capacity confirmed", owner:"QA Lead", status:"Pending"},
      {area:"Facilities", criteria:"Rooms and hardware confirmed ready", owner:"IT / SOM", status:"Pending"}
    ],
    decisions:[
      {area:"Scope changes",      owner:"SOM",      approver:"Executive Sponsor / COO"},
      {area:"Hiring plan",        owner:"SOM",      approver:"Executive Sponsor / COO / CPO"},
      {area:"Team structure",     owner:"SOM",      approver:"COO"},
      {area:"Process changes",    owner:"SOM",               approver:"SOM"},
      {area:"Training design",    owner:"Training Lead",     approver:"SOM"},
      {area:"QA pass/fail",       owner:"QA Lead",           approver:"SOM"},
      {area:"SLA renegotiation",  owner:"SOM",      approver:"Executive Sponsor"},
      {area:"Commercial changes", owner:"Executive Sponsor", approver:"Co-Founders"},
      {area:"Go-live",            owner:"SOM",      approver:"Executive Sponsor"}
    ]
  },
  // "About" blurb shown on the roadmap home (editable in-app)
  about: {
    text:"Daybreak is a direct-to-consumer (DTC) telehealth program focused on sleep apnea care. Booth's Managed Solutions scope is the CS1 Patient Onboarding function — guiding patients from sleep-study completion (S2 Complete) through Manufacturing Ready to Device Delivered. This tracker runs the transition of the Customer Support LOB from an FTE-based model to a transaction-based model within 120 days, out of Booth's Cebu (PH) + Colombia (CO) operations. Primary near-term goal: recover mandatory SMS/case first-response SLAs and protect the 95% device-delivered outcome.",
    url:"https://drive.google.com/drive/folders/1yAUERgifddMKuRQnhBFqiLWAnIJmE3YT"
  },
  // internal reference library: important links, a name, and what each is for
  supportLinks: [
    {name:"Daybreak References (Drive folder)", url:"https://drive.google.com/drive/folders/1yAUERgifddMKuRQnhBFqiLWAnIJmE3YT", note:"Master folder — starred items: employee list, client alignment slides, due diligence synopsis."},
    {name:"Daybreak — Program Alignment slides", url:"https://docs.google.com/presentation/d/1Geb3deBSCHplVX68x1v2MSuqgqK7s2u4LgV7bPUHels/edit", note:"Scope, KPIs, pain points, staffing, pricing — presented to client for alignment."},
    {name:"Daybreak — Discovery Session Agenda", url:"https://docs.google.com/document/d/1qTNP-8YQP46MP7GZKGQXTHibhV9Px7VkBCgPVBjOdtM/edit", note:"Discovery session topics, objectives and key questions."},
    {name:"Ops Plan to Transition — meeting notes", url:"https://docs.google.com/document/d/1jFhBLeUhzZd0Vcbm95RmK9Uy8x1DqMG7Rr-I_e93VJ4/edit", note:"Transition strategy: staffing, metrics, workflows, next steps."}
  ],
  // ---- Stakeholders & client contacts (people + group distribution lists) ----
  stakeholders: [
    {name:"Marj Tan", role:"Director, Operations (Program Sponsor)", org:"Booth", email:"marjorie.tan@hirebooth.com", side:"Internal", group:false, hours:"", extra:{}},
    {name:"Jerson Bontuyan", role:"SOM / Site Lead-Cebu", org:"Booth", email:"jerson.bontuyan@hirebooth.com", side:"Internal", group:false, hours:"", extra:{}},
    {name:"Joyce Barraca", role:"Operations", org:"Booth", email:"joyce.barraca@hirebooth.com", side:"Internal", group:false, hours:"", extra:{}},
    {name:"Gerald Ramirez", role:"Team Lead (candidate)", org:"Booth", email:"gerald.ramirez@hirebooth.com", side:"Internal", group:false, hours:"", extra:{}},
    {name:"Kathy Ancheta", role:"Chief Operating Officer", org:"Booth", email:"katherine.ancheta@hirebooth.com", side:"Internal", group:false, hours:"", extra:{}},
    {name:"Chris Mueller", role:"Business Development / Account", org:"Booth", email:"chris.mueller@hirebooth.com", side:"Internal", group:false, hours:"", extra:{}},
    {name:"Carlos Pedraza", role:"Business Development / Account", org:"Booth", email:"carlos.pedraza@hirebooth.com", side:"Internal", group:false, hours:"", extra:{}},
    {name:"Ted StDic", role:"Client Stakeholder", org:"Daybreak", email:"ted@thedaybreak.com", side:"External", group:false, hours:"", extra:{}},
    {name:"JD Norris", role:"Client Stakeholder", org:"Daybreak", email:"jd.norris@thedaybreak.com", side:"External", group:false, hours:"", extra:{}},
    {name:"IT / Service Desk", role:"IT", org:"Booth", email:"", side:"Internal", group:false, hours:"Mon–Fri, 9am–6pm", extra:{}},
    {name:"Talent Acquisition", role:"Talent Acquisition", org:"Booth", email:"", side:"Internal", group:false, hours:"Mon–Fri, 9am–6pm", extra:{}},
    {name:"People Success Partner", role:"People Success Partner", org:"Booth", email:"", side:"Internal", group:false, hours:"Mon–Fri, 9am–6pm", extra:{}},
    {name:"People Operations", role:"People Operations", org:"Booth", email:"", side:"Internal", group:false, hours:"Mon–Fri, 9am–6pm", extra:{}},
    {name:"Daybreak Program DL", role:"Distribution list", org:"Booth", email:"", side:"Internal", group:true, hours:"", extra:{}}
  ],
  // custom (user-added) columns for the stakeholders table — {key,label}
  stakeholderCols: [],
  // ---- Team working links: links the internal team is actively working on (central repository) ----
  teamLinks: [],
  // editable section-header overrides (key -> label); empty = use the built-in default
  headers: {},
  // Discovery table columns (editable order/labels; supports add + delete)
  discColumns: [
    {key:"topic",     label:"Discussion topic",            w:150},
    {key:"objective", label:"Objective",                   w:190},
    {key:"questions", label:"Discovery questions",         w:270, list:true},
    {key:"owner",     label:"Owner",                       w:90},
    {key:"outcomes",  label:"Target outcomes",             w:180},
    {key:"pending",   label:"Pending items (client inputs)",w:180},
    {key:"response",  label:"Your response",               w:200},
    {key:"status",    label:"Status",                      w:110, status:true},
    {key:"notes",     label:"Notes / what we already know",w:220}
  ],
  // which Discovery columns are visible to CLIENTS (internal view always shows all)
  discCols: { topic:true, objective:true, questions:true, owner:true, outcomes:true, response:true, pending:false, status:true, notes:false },
  // client file-drop: paste a Google Form "embed" link here to show it on the Discovery client view
  discForm: { url:"", label:"Upload documents / share files" },
  // ---- Flexible content tables (add/remove rows & columns; per-column client visibility) ----
  cadenceColumns: [
    {key:"c",      label:"Cadence",            w:210},
    {key:"ramp",   label:"Frequency (ramp)",   w:150},
    {key:"steady", label:"Frequency (steady)", w:150},
    {key:"p",      label:"Purpose"}
  ],
  cadenceCols: { c:true, ramp:true, steady:true, p:true },
  bauColumns: [
    {key:"item",    label:"Workstream",     w:240},
    {key:"detail",  label:"What it covers"},
    {key:"owner",   label:"Owner",          w:150},
    {key:"cadence", label:"Cadence",        w:150}
  ],
  bauCols: { item:true, detail:true, owner:true, cadence:true },
  decisionColumns: [
    {key:"area",     label:"Decision area",  w:230},
    {key:"owner",    label:"Decision owner", w:210},
    {key:"approver", label:"Final approver"}
  ],
  decisionCols: { area:true, owner:true, approver:true },
  // ---- Meeting recap -> internal action tracker ----
  actionTracker: [
    {action:"Clarify SOP / process mapping with client", owner:"Marj Tan", status:"Open", due:""},
    {action:"Request raw data (volume & performance) from client for due diligence", owner:"Marj Tan", status:"Open", due:""},
    {action:"Submit list of questions (staffing, scheduling, adherence)", owner:"Team", status:"Open", due:""},
    {action:"Identify designated Team Lead for Daybreak", owner:"Team", status:"Open", due:""},
    {action:"Create proposal to fix disposition-entry issues", owner:"Team", status:"Open", due:""}
  ],
  // ---- Saved recap history (each upload: date/title/uploader + extracted counts) ----
  recaps: [],
  // ---- Performance status (KPIs & SLAs) ----
  performance: {
    note:"CS mandatory SLAs captured from discovery baselines. 'Actual' updates on the review cadence once live data is flowing. Baselines improved +19 to +38 pts on day 1 of the pod restructure.",
    kpis: [
      {metric:"SMS First Response — 3 hr", channel:"SMS", target:"85%+", baseline:"51–55%", actual:"", status:"Critical", note:"Most critical SLA. Protected by time-blocked pod schedule (SMS/phone no longer concurrent)."},
      {metric:"SMS First Response — 24 hr", channel:"SMS", target:"Mandatory", baseline:"68–76%", actual:"", status:"At risk", note:"Mandatory threshold."},
      {metric:"Case First Response — 24 hr", channel:"Email/Case", target:"Mandatory", baseline:"62–66%", actual:"", status:"At risk", note:"Mandatory threshold."},
      {metric:"Device Delivered", channel:"Outcome", target:"95%", baseline:"", actual:"", status:"Target", note:"North-star outcome metric."},
      {metric:"Open-case backlog (>24h)", channel:"Case", target:"Reduce", baseline:"71%", actual:"", status:"At risk", note:"Concentrated in a few reps; 22% past 14 days."},
      {metric:"Refund-before-delivery", channel:"CX", target:"Minimize", baseline:"", actual:"", status:"Watch", note:"Quality / loss metric — Save-the-Sale in CX."}
    ]
  },
  // ---- Process Maturity Framework (4 levels; Governed = target; Optimized optional) ----
  maturity: {
    target: 3,
    stages: [
      {key:"documented",      name:"Level 1 · Documented",     short:"Documented",     def:"Standard process exists.",
        crit:["SOP approved","Owner assigned","Version controlled","Published in BoothBrain"]},
      {key:"operationalized", name:"Level 2 · Operationalized", short:"Operationalized", def:"Process is implemented consistently.",
        crit:["Training completed","Launched","Adoption confirmed"]},
      {key:"governed",        name:"Level 3 · Governed",        short:"Governed",        def:"Process is measured and sustained.",
        crit:["Audit completed","KPI monitored","Improvement actions tracked"]},
      {key:"optimized",       name:"Level 4 · Optimized",       short:"Optimized",       def:"Process is continuously improved (optional).", optional:true,
        crit:["RCA completed","SOP updated based on findings","KPI improved"]}
    ],
    frameworks: [
      {name:"Operations Framework", functions:[
        {name:"Transition Integration",   deliverables:"Readiness, Go Live, Hypercare, Hiring, Leadership Certification", process:"Launch Readiness Review & Go-Live Checklist before every deployment", owner:"", sop:"", checks:{}, notes:""},
        {name:"Service Delivery",         deliverables:"SLA, Governance, Incident Management, Performance",               process:"Monthly Operations Health Audit measuring compliance to SOPs and SLAs", owner:"", sop:"", checks:{}, notes:""},
        {name:"Continuous Optimization",  deliverables:"RCA, Corrective Actions, Automation, Best Practices",             process:"Continuous Improvement Board (CI Tracker) reviewed monthly", owner:"", sop:"", checks:{}, notes:""},
        {name:"People & Culture",         deliverables:"Capability, Leadership, Career Path, Engagement",                 process:"Quarterly Capability Review & Skills Matrix Audit", owner:"", sop:"", checks:{}, notes:""}
      ]},
      {name:"Workforce Framework", functions:[
        {name:"Demand Forecasting & Capacity Planning", deliverables:"Forecasting, Capacity Models, Optimization", process:"Monthly Forecast Accuracy Review", owner:"", sop:"", checks:{}, notes:""},
        {name:"Scheduling & Real-Time Management",       deliverables:"Scheduling, Intraday, Adherence",           process:"Weekly Schedule Compliance Audit", owner:"", sop:"", checks:{}, notes:""},
        {name:"Reporting & Business Insights",           deliverables:"Reporting, Dashboards, Analytics",          process:"Monthly KPI Validation & Dashboard Review", owner:"", sop:"", checks:{}, notes:""},
        {name:"WFM Tools Deployment",                    deliverables:"Tool Implementation & Maintenance",         process:"Quarterly Tool Health Check & User Adoption Review", owner:"", sop:"", checks:{}, notes:""}
      ]},
      {name:"Training & Quality Framework", functions:[
        {name:"New Hire & Service Training",     deliverables:"Onboarding, T3 Certification, Nesting",                  process:"Training Effectiveness Review (30-60-90 Day STP)", owner:"", sop:"", checks:{}, notes:""},
        {name:"Curriculum Design",               deliverables:"Instructional Design, Knowledge Management",             process:"Semi-Annual Curriculum Review", owner:"", sop:"", checks:{}, notes:""},
        {name:"Performance Optimization",        deliverables:"QA, Coaching, RCA, Improvement Projects",                process:"Monthly QA Calibration & Coaching Effectiveness Audit", owner:"", sop:"", checks:{}, notes:""},
        {name:"Annual Competency & Compliance",  deliverables:"Annual Certification, Compliance, QA Recertification",    process:"Annual Certification Governance Program", owner:"", sop:"", checks:{}, notes:""}
      ]}
    ]
  },
  meta: {
    currentPhase:"discovery",
    eowPin:"",
    phaseStatus:{ discovery:"In progress", setup:"Not started", deployment:"Not started", golive:"Not started", bau:"Not started" },
    phaseOwners:{ discovery:"Marj Tan", setup:"", deployment:"", golive:"", bau:"" }
  }
};
