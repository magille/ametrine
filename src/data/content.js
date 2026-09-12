// Copy sourced from the "Ametrine Website" Claude Design import, cross-checked
// against "ametrine.tz Website Contents.docx".

export const nav = {
  items: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Impact", path: "/impact" },
    { label: "Resources", path: "/resources" },
    { label: "Careers", path: "/careers" },
    { label: "Contact", path: "/contact" },
  ],
}

export const audienceTags = [
  "NGOs and foundations",
  "Bilateral and multilateral partners",
  "Research institutions",
  "MDAs and LGAs",
  "Social-impact organisations",
  "MEL and data professionals",
]

export const home = {
  hero: {
    eyebrow: "Rare Insight. Real Impact.",
    headlineTop: "Evidence that strengthens decisions.",
    headlineAccent: "Systems that sustain impact.",
    body: "Just as ametrine is one of the world's rarest gems — formed where two crystals, amethyst and citrine, meet — our consulting work sits at a rare intersection of evidence, strategy and purpose, delivering impact that is tangible and lasting.",
    ctaPrimary: "Explore our services",
    ctaSecondary: "Get in Touch",
  },
  credibility: {
    title: "Credibility — Record of Practice",
    meta: "Dar es Salaam, TZ",
    sheet: "01",
    rows: [
      { value: "18+ yrs", label: "Senior MEL and research leadership." },
      { value: "500+", label: "Professionals trained in MEL, data, quality improvement and related disciplines." },
      { value: "Gov · Donor · CSO", label: "Experience supporting government, donor-funded and civil-society programmes." },
      { value: "Full cycle", label: "Strategy, field research, data systems, analysis, learning and reporting." },
    ],
  },
  whoWeAre: {
    eyebrow: "01 · Who we are",
    title: "Evidence, learning and performance advisory",
    body: [
      "Ametrine Consulting is an evidence, learning and performance advisory firm based in Dar es Salaam, Tanzania. We work across the full results cycle—from theories of change and indicator frameworks to data collection, evaluation, visualisation, learning and adaptive management. Our consultants combine deep contextual understanding with internationally recognised approaches, helping clients produce evidence they can trust and use.",
      "We believe good MEL is more than reporting. It is a management capability: a way to ask better questions, identify risks early, listen to stakeholders, learn from implementation and direct resources toward the outcomes that matter most.",
    ],
  },
  closingCta: {
    eyebrow: "Ready to make evidence work harder?",
    title: "Move forward with clarity",
    body: "Whether you are designing a new programme, strengthening an existing MEL system, commissioning an independent evaluation or improving data use, Ametrine can help. Talk to us about your objectives, timeline and expected deliverables.",
    ctaPrimary: "Get in Touch",
    ctaSecondary: "See our impact",
  },
}

export const about = {
  eyebrow: "About Ametrine",
  story: {
    title: "Our story",
    paragraph:
      "Ametrine is a leading firm specialising in MEL and quality assurance. Our mission is to strengthen decision-making through evidence-based insights and inclusive approaches. With a diverse team and a commitment to excellence, we've shaped policies, improved programmes and built resilient systems across sectors.",
  },
  leaders: [
    {
      id: "leader-1",
      name: "Full Name",
      title: "Managing Director & Principal Consultant",
      bio: "Leads Ametrine's technical direction across evaluation, strategic information and quality assurance, with 18+ years supporting USAID, CDC, PEPFAR, UNICEF and government programmes. Has trained and mentored more than 500 MEL professionals. Away from work, an avid long-distance walker and amateur photographer.",
      email: "managing.director@ametrine.tz",
    },
    {
      id: "leader-2",
      name: "Full Name",
      title: "Director, Research & Evaluation",
      bio: "Designs and leads mixed-methods evaluations, from evaluation matrices and sampling through fieldwork, analysis and validation. Specialises in gender, protection and social-norms research across Tanzania and Zanzibar. Spends weekends coaching a community debate club.",
      email: "research@ametrine.tz",
    },
    {
      id: "leader-3",
      name: "Full Name",
      title: "Lead, Data Systems & Visualisation",
      bio: "Builds the data pathway — digital collection, quality assurance, analysis and Power BI dashboards that managers actually use. Works fluently across KoboToolbox, DHIS2, SPSS, Stata and R. A keen chess player and mentor to early-career data analysts.",
      email: "data@ametrine.tz",
    },
  ],
  vision:
    "To be a trusted regional hub for evidence-based solutions that strengthen institutions, improve programmes and contribute to better lives.",
  mission:
    "To deliver high-quality, context-driven MEL services that promote accountability, learning and continuous improvement across sectors.",
  values: [
    { title: "Integrity", text: "We uphold the highest ethical standards." },
    { title: "Excellence", text: "We deliver work of the highest professional quality." },
    { title: "Partnership", text: "We believe in collaborative engagement." },
    { title: "Innovation", text: "We embrace technology and creative approaches to problem-solving." },
    { title: "Impact", text: "We measure our success by the change we help achieve." },
  ],
  whyUs: [
    { number: "01", title: "Expertise & experience", text: "Over 18 years in MEL and quality assurance work." },
    { number: "02", title: "Data-driven approach", text: "Enhancing decision-making with reliable evidence." },
    { number: "03", title: "Comprehensive support", text: "From assessments to learning and reporting." },
    { number: "04", title: "Commitment to excellence", text: "We go beyond compliance — delivering actionable insights." },
  ],
}

export const services = [
  {
    slug: "research-evaluation-learning",
    number: "01",
    title: "Research, Evaluation & Learning",
    short: "Independent studies and evaluations that combine methodological rigour, ethical practice and useful recommendations.",
    lede: "Independent evidence must be credible enough to withstand scrutiny and practical enough to guide action. Ametrine designs and delivers mixed-methods studies that answer important programme and policy questions.",
    listTitle: "What we do",
    items: [
      "Baseline and endline studies.",
      "Mid-term reviews, final and outcome evaluations.",
      "Process, performance and implementation evaluations.",
      "Needs, feasibility, affordability and sustainability assessments.",
      "Gender, power, inclusion and social-norms analyses.",
      "Organisational and institutional capacity assessments.",
      "Beneficiary satisfaction and perception studies.",
      "Operational and formative research.",
      "Policy, strategy and programme reviews.",
      "Case studies, evidence synthesis and learning reviews.",
    ],
    noteTitle: "Our evaluation approach",
    note: "We begin by clarifying the intended use of the study and developing an evaluation matrix that links each question to indicators, sources, methods and analytical approaches. Depending on the assignment, we combine surveys, document review, key-informant interviews, focus groups, observation, participatory methods and secondary-data analysis. Sampling is designed to provide the appropriate level of representativeness and diversity while remaining feasible and ethical. Analysis goes beyond description: we disaggregate findings, investigate variation, compare perspectives and triangulate evidence.",
    deliverables: [
      "Inception report and evaluation matrix.",
      "Sampling strategy and fieldwork plan.",
      "English and Swahili data-collection tools.",
      "Ethics, consent, safeguarding and data-protection protocols.",
      "Clean datasets, codebooks and analysis syntax where agreed.",
      "Draft and final reports with clear findings and recommendations.",
      "Executive summaries, briefs, dashboards and presentation decks.",
      "Validation workshops and management-response matrices.",
    ],
  },
  {
    slug: "mel-systems-development",
    number: "02",
    title: "MEL Systems Development & Strengthening",
    short: "Practical frameworks, plans, indicators, tools, SOPs and governance arrangements that teams can implement.",
    lede: "A strong MEL system aligns strategy, people, processes, tools and technology. We help organisations build systems that are proportionate, integrated and usable — not collections of templates that sit on a shelf.",
    listTitle: "Core solutions",
    items: [
      "Theory of Change and results-chain development or refinement.",
      "Logical frameworks, results frameworks and performance-measurement plans.",
      "Indicator selection, definition, reference sheets, baselines and targets.",
      "MEL policies, frameworks, plans, manuals, operational guides and SOPs.",
      "Data-flow mapping, reporting calendars and responsibility matrices.",
      "Data-quality systems, assessment protocols and improvement plans.",
      "Learning agendas, knowledge-management plans and adaptive-management routines.",
      "MEL readiness, maturity and Organisational Capacity Assessments (OCA).",
      "Partner reporting systems and indicator-tracking tools.",
      "System reviews, harmonisation and interoperability roadmaps.",
    ],
    noteTitle: "",
    note: "",
    deliverables: [],
  },
  {
    slug: "data-management-quality-visualisation",
    number: "03",
    title: "Data Management, Quality & Visualisation",
    short: "Stronger data flows, quality controls, analysis, dashboards and visual products for faster decision-making.",
    lede: "Reliable decisions require reliable data. Ametrine helps clients improve the entire data pathway — from tool design and collection through cleaning, analysis, visualisation, reporting and secure retention.",
    listTitle: "Data collection and management",
    items: [
      "Questionnaire, interview-guide, checklist and register development.",
      "Digital form design and deployment using platforms such as KoboToolbox.",
      "Database structure, coding frameworks, validation rules and codebooks.",
      "Field team training, piloting and submission testing.",
      "Daily monitoring, data-quality queries and correction workflows.",
      "Data cleaning, de-identification, documentation and secure archiving.",
      "Data-processing plans and reproducible analysis workflows.",
    ],
    noteTitle: "Data quality assurance (DQA)",
    note: "We assess whether data are valid, reliable, complete, precise, timely and protected. DQA work may include indicator verification, source-document review, recounting, reporting-chain assessment, system and capacity review, risk scoring, corrective-action planning and follow-up. Our approach treats DQA as a learning and system-improvement process rather than a one-time compliance exercise. Analysis is translated into decision-ready products for executive, technical and public audiences: interactive dashboards, scorecards, maps, infographics, survey tables, qualitative themes and narrative briefs.",
    deliverables: [
      "Analysis: Excel, Google Sheets, SPSS, Stata, R, Python and SAS.",
      "Qualitative analysis: NVivo and ATLAS.ti.",
      "Visualisation and BI: Power BI, Tableau, Looker Studio, Flourish, Infogram, Plotly, RAWGraphs, Qlik Sense.",
      "Digital collection and information systems: KoboToolbox, DHIS2 and context-specific databases.",
      "Web visualisation where required: D3.js and Chart.js.",
    ],
  },
  {
    slug: "mel-talent-recruitment",
    number: "04",
    title: "MEL Talent Recruitment & Deployment",
    short: "Training, coaching and specialised recruitment to build capable, confident and sustainable MEL functions.",
    lede: "The effectiveness of a MEL function depends on the people behind it. Ametrine helps organisations define roles, assess technical capability and identify professionals who can deliver in the realities of the assignment.",
    listTitle: "Recruitment support",
    items: [
      "Workforce needs assessment and role scoping.",
      "Competency-based job descriptions and vacancy notices.",
      "Candidate sourcing and longlisting.",
      "Technical screening, written tests, case exercises and structured interviews.",
      "Reference-check support and selection documentation.",
      "Gender-responsive and inclusive recruitment considerations.",
      "Onboarding plans, probation objectives and performance indicators.",
    ],
    noteTitle: "",
    note: "",
    deliverables: [
      "MEL directors, managers, advisors, specialists and officers.",
      "Research managers, study coordinators and field supervisors.",
      "Data analysts, statisticians, database officers and dashboard developers.",
      "Knowledge-management, learning and communications specialists.",
      "Qualitative researchers, moderators, transcribers and translators.",
      "Enumerators, data-entry personnel and short-term field teams.",
    ],
  },
  {
    slug: "proposals-programme-design",
    number: "05",
    title: "Concept Notes, Proposals & Programme Design",
    short: "Donor-responsive concepts, theories of change, results frameworks, budgets and implementation narratives.",
    lede: "A strong proposal connects a compelling problem, a credible response, measurable results and a realistic delivery model. Ametrine supports organisations to develop submissions that are responsive, evidence-informed and implementation-ready.",
    listTitle: "Support areas",
    items: [
      "Opportunity and donor-requirement analysis.",
      "Stakeholder and problem analysis.",
      "Concept-note and full-proposal development.",
      "Theory of Change, logical framework and results framework.",
      "Methodology, sampling and implementation approach.",
      "Workplan, staffing, governance and risk management.",
      "MEL, learning, accountability and data-use sections.",
      "Gender equality, disability inclusion, safeguarding and climate-resilience integration.",
      "Budget narrative and alignment between activities, level of effort and costs.",
      "Compliance review, editing, formatting and presentation support.",
    ],
    noteTitle: "",
    note: "",
    deliverables: [],
  },
  {
    slug: "training-facilitation-capacity",
    number: "06",
    title: "Training, Facilitation & Capacity Strengthening",
    short: "Case studies, learning briefs, after-action reviews and knowledge products that make experience reusable.",
    lede: "Training has value when people can apply it. We combine adult-learning principles, practical exercises, real tools and follow-up support to build confidence and improve performance.",
    listTitle: "Training topics",
    items: [
      "MEL foundations and results-based management.",
      "Theory of Change, logical frameworks and indicator design.",
      "MEL plans, data flows, reporting and learning routines.",
      "Data Quality Assessment and routine quality control.",
      "Questionnaire design, sampling and digital data collection.",
      "Quantitative analysis using Excel, SPSS and related tools.",
      "Qualitative research, coding, analysis and triangulation.",
      "Power BI and data visualisation for decision-making.",
      "Evaluation design, management and use.",
      "Knowledge management, case studies and learning briefs.",
      "Concept-note and proposal development.",
      "Research ethics, confidentiality, consent and responsible data practice.",
    ],
    noteTitle: "",
    note: "",
    deliverables: [
      "In-person workshops and facilitated working sessions.",
      "Virtual instructor-led training.",
      "Training of Trainers.",
      "Executive and board-level briefings.",
      "Hands-on clinics using participants' own programmes and datasets.",
      "Coaching, mentoring and post-training technical assistance.",
    ],
  },
]

export const impact = {
  eyebrow: "Results and Contribution",
  title: "Our Impact",
  narrative: "Ametrine helps organisations improve the quality of the questions they ask, the information they collect and the decisions they make. Our contribution may begin with a framework, assessment or dataset, but the intended result is stronger performance: clearer priorities, more credible reporting, faster identification of gaps, better learning and more accountable use of resources.",
  note: "Impact statements below distinguish Ametrine's direct deliverables from the broader outcomes to which its work contributed.",
  proofPoints: {
    title: "Proof Points",
    sheet: "02",
    rows: [
      { value: "18+ yrs", label: "Leadership and practice in MEL, research and strategic information." },
      { value: "500+", label: "Professionals trained and mentored." },
      { value: "26 / 184", label: "Regional and district health profiles developed under senior technical leadership." },
      { value: "47", label: "USAID implementing partners supported through reporting, DQA and capacity-strengthening work." },
      { value: "TZ + ZNZ", label: "Research and consulting experience across multiple Tanzanian regions and in Zanzibar." },
    ],
    footnote: "Figures reflect senior technical leadership and assignments delivered by Ametrine's consultants.",
  },
}

export const resources = {
  eyebrow: "Knowledge for Action",
  title: "Resources",
  intro: "Publications, practice notes and answers to the questions we are asked most often — written for leaders and practitioners working in complex development settings.",
  tabs: ["Publications & reports", "Blog / insights", "FAQs"],
  publications: [
    { title: "Evaluation reports", body: "Baseline, mid-term, outcome and final evaluation reports with findings, recommendations and management-response matrices.", status: "Released with client permission" },
    { title: "Guidance and DQA notes", body: "Data-quality assessment guidelines, MEL operational guides and indicator reference sheets prepared for sector institutions.", status: "Selected documents public" },
    { title: "Learning briefs and case studies", body: "Short knowledge products that capture what worked, what did not and what a programme changed as a result.", status: "Published periodically" },
    { title: "Dashboards and data products", body: "Power BI dashboards, scorecards, health profiles and visual summaries produced for programme and government partners.", status: "On request" },
  ],
  publicationsNote: "Where client permission and confidentiality arrangements allow, we publish selected reports and share anonymised samples or references relevant to an assignment. Request a specific document at info@ametrine.tz.",
  articles: [
    "From Reporting to Learning: Seven Signs Your MEL System Is Working.",
    "How to Design Indicators That Managers Will Actually Use.",
    "Daily Data Quality Checks for Digital Fieldwork.",
    "What Makes an Evaluation Recommendation Actionable?",
    "Building a Power BI Dashboard Around Decisions, Not Decoration.",
    "Ethical Field Research: Consent, Confidentiality and Do-No-Harm in Practice.",
    "Triangulation Without Confusion: Integrating Survey, KII and FGD Evidence.",
    "How to Reduce Reporting Burden Without Losing Accountability.",
    "Using Social-Norms Evidence in Programme Design.",
    "Preparing for a Data Quality Assessment: A Practical Checklist.",
  ],
  articlesTag: "Insight · Practice note",
  closingCta: {
    title: "Have a question you would like us to explore?",
    body: "Send us a topic or practical MEL challenge. Selected questions may inform a future article, webinar or downloadable guide.",
    cta: "Send us a topic",
  },
}

export const faq = [
  { q: "What types of organisations do you work with?", a: "We work with government institutions, development partners, international and national NGOs, civil-society organisations, research institutions and mission-driven private-sector organisations." },
  { q: "Do you work outside Tanzania?", a: "Ametrine is based in Tanzania and is available for assignments across East Africa and other contexts where our expertise and delivery model are appropriate. Regional engagements are scoped according to local partnerships, logistics and regulatory requirements." },
  { q: "Can you conduct a complete evaluation?", a: "Yes. We can support the full cycle: inception, evaluation framework, sampling, ethics, tools, recruitment and training, fieldwork, quality assurance, analysis, reporting, validation and communication of findings." },
  { q: "Can you strengthen an existing MEL system rather than build a new one?", a: "Yes. We review what already exists, retain what works and prioritise practical improvements. The aim is not to replace systems unnecessarily, but to make them clearer, more integrated and more useful." },
  { q: "Do you provide digital data collection and dashboards?", a: "Yes. Support may include form design, submission testing, field monitoring, data cleaning, Power BI dashboards and other visual products. Technology is selected according to user needs, infrastructure, licences and sustainability." },
  { q: "How do you protect research participants and data?", a: "We use consent procedures, confidentiality safeguards, role-based access, de-identification, secure storage and documented data-management practices. Assignments involving sensitive populations or topics include context-specific safeguarding and referral considerations." },
  { q: "Can you support ethical or IRB clearance?", a: "Yes. We can prepare the methodological and ethical documentation needed for review and support the submission process. Formal approval remains the responsibility of the relevant authorised review body." },
  { q: "Do you recruit enumerators and MEL professionals?", a: "Yes. We can recruit or support recruitment of short-term field teams and specialised MEL or data personnel, including competency-based technical assessment." },
  { q: "Can you train our team using our own programme materials?", a: "Yes. Customised training is often the most effective. We can use the organisation's results framework, indicators, tools or datasets — subject to confidentiality controls — to make learning immediately applicable." },
  { q: "How do we request a proposal?", a: "Use the inquiry form or email info@ametrine.tz with the terms of reference or a short description of the need, expected deliverables, location, timeline and budget parameters where available. We will review the request and advise on the next step." },
  { q: "How long does an assignment take?", a: "Duration depends on scope, geography, sample, approvals, stakeholder availability and deliverables. A clear term of reference enables us to propose a realistic schedule and level of effort." },
  { q: "Will you share examples of previous work?", a: "Where client permission and confidentiality arrangements allow, we can share selected public reports, anonymised samples or references relevant to the assignment." },
]

export const careers = {
  eyebrow: "Work with Us",
  title: "Careers and Consultant Network",
  intro: "We work with MEL, research, data and programme professionals who care about evidence being used. Openings, the consultant roster and internships are listed here as they open.",
  tracks: [
    { number: "01", title: "Openings", text: "Staff roles in evaluation, data analysis and programme support are advertised here with competency-based descriptions and clear selection steps.", tag: "Check back" },
    { number: "02", title: "Consultant Network", text: "A roster of evaluators, qualitative researchers, statisticians, dashboard developers, moderators and field supervisors engaged per assignment.", tag: "Open to expressions of interest" },
    { number: "03", title: "Internships", text: "Supervised placements for graduates in MEL, statistics, public health and social sciences, with structured mentoring and real assignment exposure.", tag: "Seasonal" },
  ],
  closing: {
    text: "To join the consultant network, send a CV and a short note on your specialisms to careers@ametrine.tz. We keep expressions of interest on file and contact consultants when an assignment matches.",
    cta: "Contact us",
  },
}

export const contact = {
  eyebrow: "Connect with Our Team",
  title: "Contact Us",
  body: "Tell us what you are trying to achieve. Whether you have a complete term of reference or an early-stage idea, we can help clarify the evidence, system, capacity or programme-design support you may need.",
  details: {
    title: "Contact Details",
    rows: [
      { label: "General inquiries", value: "info@ametrine.tz", href: "mailto:info@ametrine.tz" },
      { label: "Careers and consultant network", value: "careers@ametrine.tz", href: "mailto:careers@ametrine.tz" },
      { label: "Telephone", value: "+255 767 366 630", href: "tel:+255767366630" },
      { label: "Location", value: "Dar es Salaam, Tanzania" },
      { label: "Physical address", value: "Plot 16 Tanzanite Street, Goba — Dar es Salaam" },
      { label: "Business hours", value: "Mon–Fri, 8am–5pm" },
    ],
  },
  form: {
    supportTypes: [...services.map((s) => s.title), "Not sure yet — advisory conversation"],
    confirmation: {
      title: "Thank You for Contacting Ametrine",
      body: "Your inquiry has been received. A member of our team will review the information and respond within two business days. Please do not submit confidential personal data through this form unless requested through an approved secure channel.",
    },
  },
}

export const siteMeta = {
  name: "Ametrine",
  fullName: "Ametrine Consulting",
  tagline: "Rare Insight. Real Impact.",
  footerTagline: "Rare Insight. Real Impact. Evidence, learning and performance advisory — Dar es Salaam, Tanzania.",
  footerSub: "Monitoring, evaluation, research, learning and advisory services.",
  email: "info@ametrine.tz",
  careersEmail: "careers@ametrine.tz",
  phone: "+255 767 366 630",
  address: "Plot 16 Tanzanite Street, Goba — Dar es Salaam",
  hours: "Mon–Fri, 8am–5pm",
}
