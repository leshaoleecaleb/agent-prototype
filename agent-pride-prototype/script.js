const slides = [
  {
    title: "Agent Pride Prototype",
    layout: "cover",
    render: () => `
      <div class="slide-inner two-column">
        <div>
          <p class="eyebrow">Agent Pride Prototype</p>
          <h2>Orchestrating the Digital Pride for Inclusive Financial Services in Africa</h2>
          <p class="subtitle">Designing a multi-agent ecosystem for responsible financial inclusion.</p>
          <div class="pill-row">
            <span class="pill">AI Governance</span>
            <span class="pill">SACCO Lending</span>
            <span class="pill">Human Oversight</span>
            <span class="pill">Africa Fintech</span>
          </div>
        </div>
        <div class="visual-card ecosystem-visual">
          <div class="network-field">
            <span class="network-line line-a"></span>
            <span class="network-line line-b"></span>
            <span class="network-line line-c"></span>
            <span class="network-line line-d"></span>
            <span class="node scout">Scout</span>
            <span class="node guardian">Guard</span>
            <span class="node hunter">Hunt</span>
            <span class="node member">SMS</span>
            <span class="node officer">Human</span>
            <p class="map-label">African digital ecosystem linking mobile banking, community members, agent intelligence, and human lending judgment.</p>
          </div>
        </div>
      </div>`
  },
  {
    title: "Pride Architecture Overview",
    render: () => `
      <div class="slide-inner architecture">
        <div>
          <p class="eyebrow">3-Agent Ecosystem</p>
          <h2>Pride Architecture Overview</h2>
          <p class="subtitle">A coordinated agent formation moves from education to triage to human decision support.</p>
          <div class="framework-grid">
            <span>RANK</span><span>TRAIL</span><span>HUNT</span><span>GUARD</span><span>CYCLE</span>
          </div>
        </div>
        <div>
          <div class="stack">
            <div class="stack-step"><span class="stack-icon">01</span><div><strong>Scout Agent</strong><small>Financial literacy coach</small></div></div>
            <div class="stack-step"><span class="stack-icon">02</span><div><strong>Guardian Agent</strong><small>Tier-1 loan screening</small></div></div>
            <div class="stack-step"><span class="stack-icon">03</span><div><strong>Hunter Agent</strong><small>Human loan officer coordinator</small></div></div>
            <div class="stack-step"><span class="stack-icon">04</span><div><strong>Human Loan Officer</strong><small>Accountable final judgment</small></div></div>
          </div>
          <div class="formation">
            <span class="formation-badge badge-1">Scout detects need</span>
            <span class="formation-badge badge-2">Guardian screens risk</span>
            <span class="formation-badge badge-3">Hunter routes context</span>
            <span class="formation-badge badge-4">Officer decides</span>
          </div>
        </div>
      </div>`
  },
  {
    title: "Scout Agent",
    render: () => agentSlide({
      label: "Scout Agent",
      role: "Financial Literacy Coach",
      code: "SC",
      items: [
        ["RANK", ["Role: educate members on harvest-cycle planning.", "Authority: max 3 SMS messages per day.", "Cannot recommend loans.", "Alert Guardian on loan shark, debt collector, or school fees.", "Kill switch: *#700#"]],
        ["TRAIL Memory", ["Transient: current conversation.", "Relational: harvest calendars for maize and matooke.", "Archival: anonymized literacy trends.", "Inheritance: financial stress signals passed forward.", "Land rights: AWS Africa Region."]],
        ["Dashboard View", ["SMS coaching journey.", "Member intent and stress signal monitor.", "Escalation queue for Guardian."]],
        ["Responsible Boundary", ["Education only.", "No product recommendation.", "No credit decisioning."]]
      ]
    })
  },
  {
    title: "Guardian Agent",
    render: () => agentSlide({
      label: "Guardian Agent",
      role: "Tier-1 Loan Screening",
      code: "GD",
      items: [
        ["RANK", ["Authority: approve loans <= KES 15,000.", "Condition: fewer than 3 risk flags.", "Escalate loan > KES 15,000.", "Escalate 2+ children under 5 or debt collector mention.", "Kill switch: *#733#"]],
        ["TRAIL Memory", ["Current application.", "Transaction history.", "District approval baselines.", "Kenya DPA compliance boundary."]],
        ["Risk Funnel", ["Eligibility screen.", "Capacity check.", "Exception detection.", "Officer handoff package."]],
        ["Governance", ["Constrained approvals.", "Bias-sensitive features excluded.", "Auditable recommendations."]]
      ]
    })
  },
  {
    title: "Hunter Agent",
    render: () => agentSlide({
      label: "Hunter Agent",
      role: "Human-in-the-Loop Coordinator",
      code: "HT",
      items: [
        ["RANK", ["Never approve or deny.", "Generate briefing packets.", "Alert loan officer within 15 minutes.", "Kill switch: *#799#."]],
        ["TRAIL Memory", ["Officer schedules.", "Specialized expertise.", "Historical approval patterns.", "Anonymized performance records."]],
        ["Coordination View", ["Queue balancing.", "Specialist matching.", "SLA monitoring.", "Case briefing quality."]],
        ["Human Control", ["Human officer receives context.", "Human officer makes final decision.", "Decision feedback returns to CYCLE."]]
      ]
    })
  },
  {
    title: "Agent Handoffs",
    render: () => `
      <div class="slide-inner workflow">
        <div>
          <p class="eyebrow">HUNT Protocol</p>
          <h2>Agent Handoffs</h2>
          <p class="subtitle">A member message becomes a governed, context-rich path to human review.</p>
          <div class="flow-steps">
            ${["Member SMS: No money for school fees", "Scout detects financial stress", "Guardian validates income, harvest cycle, and repayment capacity", "Hunter assigns the best officer", "Officer decision"].map((item, index) => `
              <div class="flow-step"><span class="flow-number">${index + 1}</span><strong>${item}</strong></div>
            `).join("")}
          </div>
        </div>
        <div class="hunt-grid">
          ${[
            ["H", "Handoff Trigger", "Explicit events that require agent-to-agent transfer."],
            ["U", "Unified Context", "Shared memory bundle with traceable source fields."],
            ["N", "Negotiation Rules", "Routing rules, authority limits, and escalation priority."],
            ["T", "Termination Conditions", "Clear exit once a human decision or kill switch occurs."]
          ].map(([letter, heading, copy]) => `
            <div class="metric-card"><strong>${letter} - ${heading}</strong><p>${copy}</p></div>
          `).join("")}
        </div>
      </div>`
  },
  {
    title: "Safety Before Automation",
    render: () => `
      <div class="slide-inner two-column">
        <div>
          <p class="eyebrow">GUARD Safety Rails</p>
          <h2>Safety Before Automation</h2>
          <div class="guard-grid">
            ${[
              ["Guardrails", "No gender proxies, no ethnicity proxies, maximum 3 SMS daily."],
              ["Unusual Pattern Detection", "Flag approval drops greater than 30% for review."],
              ["Audit Trail", "Immutable decision logs across agent actions and handoffs."],
              ["Red Team Testing", "38-year-old female shea butter trader simulation."],
              ["Dignity Filter", "Ban harmful labels such as unreliable or risky."],
              ["Constructive Explanations", "Require useful, respectful reasons for every decision."]
            ].map(([heading, copy]) => `
              <div class="metric-card"><strong>${heading}</strong><p>${copy}</p></div>
            `).join("")}
          </div>
        </div>
        <div class="shield">
          <div>
            <div class="shield-mark">GUARD</div>
            <p class="caption" style="color: rgba(255,255,255,.82)">Governance layers wrap every automated action before customer impact.</p>
          </div>
        </div>
      </div>`
  },
  {
    title: "Continuous Learning",
    render: () => `
      <div class="slide-inner two-column">
        <div>
          <p class="eyebrow">CYCLE Self-Improvement Engine</p>
          <h2>Continuous Learning with Human Oversight</h2>
          <div class="cycle-grid">
            ${[
              ["C - Capture", "CSAT, repayment rates, and escalation rates."],
              ["Y - Yield Insights", "Weekly trend analysis for operational patterns."],
              ["C - Course Correct", "Suggested improvements for agent policy and workflow."],
              ["L - Loop Validation", "Human approval required before deployment."]
            ].map(([heading, copy]) => `
              <div class="metric-card"><strong>${heading}</strong><p>${copy}</p></div>
            `).join("")}
          </div>
          <p class="quote">41% of escalated applications were linked to school fee timing mismatches.</p>
        </div>
        <div class="cycle-visual">
          <div class="cycle-node">Capture</div>
          <div class="cycle-node">Yield<br>Insights</div>
          <div class="cycle-node">Course<br>Correct</div>
          <div class="cycle-node">Loop<br>Validate</div>
          <div class="cycle-core">Human<br>Oversight</div>
        </div>
      </div>`
  },
  {
    title: "Example Customer Journey",
    render: () => `
      <div class="slide-inner journey">
        <div class="profile">
          <p class="eyebrow">Applicant</p>
          <h2>Grace, 42</h2>
          <dl>
            <div><dt>Occupation</dt><dd>Maize Farmer</dd></div>
            <div><dt>Location</dt><dd>Kakamega</dd></div>
            <div><dt>Loan Request</dt><dd>KES 28,000</dd></div>
            <div><dt>Children</dt><dd>3</dd></div>
          </dl>
        </div>
        <div>
          <p class="eyebrow">Customer Journey</p>
          <h2>From stress signal to fair decision</h2>
          <div class="timeline">
            ${["Scout detects school fee challenge", "Guardian evaluates harvest-based income", "Hunter assigns agricultural loan specialist", "Human officer reviews briefing", "Fair decision delivered"].map((item, index) => `
              <div class="timeline-item">
                <span class="timeline-dot">${index + 1}</span>
                <div class="journey-panel metric-card"><strong>${item}</strong><p>Context moves forward with authority boundaries and auditability.</p></div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>`
  },
  {
    title: "Mastery Check & Vision",
    render: () => `
      <div class="slide-inner closing">
        <div>
          <p class="eyebrow">Agent Mastery Check</p>
          <h2>Agent Mastery Check & Vision</h2>
          <div class="check-grid">
            ${[
              "Designed 3-agent pride with RANK boundaries",
              "Implemented TRAIL memory architecture",
              "Defined HUNT handoff triggers",
              "Embedded GUARD safety rails",
              "Built CYCLE engine with human validation"
            ].map(item => `
              <div class="metric-card"><strong>Complete</strong><p>${item}</p></div>
            `).join("")}
          </div>
          <p class="quote">Like a synchronized lion pride, responsible AI agents work together - never replacing human judgment, but strengthening community resilience, dignity, and financial inclusion across Africa.</p>
        </div>
        <div class="vision-visual"></div>
      </div>`
  }
];

let activeSlide = 0;

const slideEl = document.querySelector("#slide");
const printDeckEl = document.querySelector("#printDeck");
const navEl = document.querySelector("#slideNav");
const slideTitleEl = document.querySelector("#slideTitle");
const slideCounterEl = document.querySelector("#slideCounter");
const progressBarEl = document.querySelector("#progressBar");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const printButton = document.querySelector("#printButton");

function agentSlide({ label, role, code, items }) {
  return `
    <div class="slide-inner agent-layout">
      <div class="agent-hero">
        <div>
          <p class="eyebrow">${role}</p>
          <h2>${label}</h2>
          <p class="subtitle">${role}</p>
        </div>
        <div class="agent-icon">${code}</div>
      </div>
      <div class="agent-grid">
        ${items.map(([heading, points]) => `
          <section class="agent-card">
            <h3>${heading}</h3>
            <ul class="list">
              ${points.map(point => `<li>${point}</li>`).join("")}
            </ul>
          </section>
        `).join("")}
      </div>
    </div>`;
}

function renderNav() {
  navEl.innerHTML = slides.map((slide, index) => `
    <button class="nav-item" type="button" data-slide="${index}" aria-label="Open slide ${index + 1}: ${slide.title}">
      <span class="nav-number">${String(index + 1).padStart(2, "0")}</span>
      <span>${slide.title}</span>
    </button>
  `).join("");

  navEl.addEventListener("click", event => {
    const button = event.target.closest("[data-slide]");
    if (!button) return;
    goToSlide(Number(button.dataset.slide));
  });
}

function renderPrintDeck() {
  printDeckEl.innerHTML = slides.map(slide => `
    <article class="slide">
      ${slide.render()}
    </article>
  `).join("");
}

function goToSlide(index) {
  activeSlide = Math.max(0, Math.min(slides.length - 1, index));
  const slide = slides[activeSlide];

  slideEl.innerHTML = slide.render();
  slideTitleEl.textContent = slide.title;
  slideCounterEl.textContent = `Slide ${activeSlide + 1} of ${slides.length}`;
  progressBarEl.style.width = `${((activeSlide + 1) / slides.length) * 100}%`;

  document.querySelectorAll(".nav-item").forEach((item, navIndex) => {
    item.classList.toggle("active", navIndex === activeSlide);
  });

  prevButton.disabled = activeSlide === 0;
  nextButton.disabled = activeSlide === slides.length - 1;
}

prevButton.addEventListener("click", () => goToSlide(activeSlide - 1));
nextButton.addEventListener("click", () => goToSlide(activeSlide + 1));
printButton.addEventListener("click", () => window.print());

document.addEventListener("keydown", event => {
  if (event.key === "ArrowRight" || event.key === "PageDown") {
    goToSlide(activeSlide + 1);
  }
  if (event.key === "ArrowLeft" || event.key === "PageUp") {
    goToSlide(activeSlide - 1);
  }
});

renderNav();
renderPrintDeck();
goToSlide(0);
