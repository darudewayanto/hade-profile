// Single source of truth for contact details, navigation and shared content.
// Edit here; every page reads from this file.

export const site = {
  name: "HADE",
  tagline: "Agile Specialists for Your Sustainable Business",
  description:
    "HADE is an internationally accredited agile coaching firm. We help executives, leaders and teams build real business agility through coaching, applied neuroscience and AI-powered learning.",
  // TODO: replace once the new domain (hade.id / hadeagile.com) is registered.
  url: "https://hade.id",
  email: "salam@hijrahcoach.co.id",
  phoneDisplay: "+62 811 1881 877",
  whatsapp: "628111881877",
  // HADE community on the HijrahCoach platform (sign up / log in).
  communityUrl: "https://belajaragile.com/hade",
  communityLoginUrl: "https://belajaragile.com/masuk?komunitas=hade",
  countries: ["Indonesia", "Hong Kong", "Qatar", "Australia"],
};

const waMessages = {
  general: "Hello HADE, I'd like to know more about your agile programs.",
  inhouse:
    "Hello HADE, I'd like to discuss an in-house agile training / certification program for my organization.",
  register:
    "Hello HADE, I'd like to register for the Agile Certified Hijrah Coach (ACHC) certification. Please share the upcoming schedule.",
  ai: "Hello HADE, I'd like to request a demo of HADE AI for our organization.",
  cohort: "Hello HADE, I'd like to bring my team into the HADE Community as a group/cohort.",
} as const;

export type WaTopic = keyof typeof waMessages;

export const wa = (topic: WaTopic = "general") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(waMessages[topic])}`;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/solutions", label: "Solutions" },
  { href: "/certification", label: "Certification" },
  { href: "/clients", label: "Clients" },
  { href: "/hade-ai", label: "HADE AI" },
  { href: "/community", label: "Community" },
];

export const stats = [
  { value: "28", label: "Coaching firms in the HADE network" },
  { value: "180", label: "Associate coaches" },
  { value: "1,800+", label: "Certified HADE graduate coaches" },
  { value: "1,000+", label: "Companies, executives & business owners coached" },
];

export const pillars = [
  {
    icon: "transform",
    title: "Business Agility Transformation",
    text: "End-to-end agile culture transformation for people and leadership, with workshops, team and leader profiling, 1-on-1 sessions, and advisory.",
    href: "/solutions#transformation",
  },
  {
    icon: "coach",
    title: "Agile Coaching Competencies",
    text: "A triple-accredited agile coaching certification (ICF, ICAgile & MyBrain) that gives leaders the core skills to guide transformation.",
    href: "/certification",
  },
  {
    icon: "ai",
    title: "HADE AI",
    text: "Solution-based AI that uses large language models to support learning along the agile transformation journey.",
    href: "/hade-ai",
  },
];

export const coreSolutions = [
  {
    title: "Workshop & Training",
    text: "Transformation, leadership and team workshops designed around your strategy and culture.",
  },
  {
    title: "Team & Leader Profiling",
    text: "Agile Health Check-up and applied-neuroscience Neuro-Dominance profiling for leaders and teams.",
  },
  {
    title: "1-on-1 & Group Coaching",
    text: "Coaching for executives and leaders by internationally credentialed master coaches.",
  },
  {
    title: "Agile Advisory & Consulting",
    text: "Framework design and execution support, from assessment to scaled business agility.",
  },
];

export const corporatePrograms = [
  {
    icon: "leader",
    title: "Agile Leadership Transformation",
    text: "Leadership transformation grounded in coaching and applied neuroscience.",
    items: ["Agile leader & mindset alignment", "Leader as agile coach", "Succession, women leader & millennial programs"],
  },
  {
    icon: "certificate",
    title: "In-house Agile Coaching Certification",
    text: "The ACHC program delivered privately for your leaders, faculty and internal coaches.",
    items: ["ICF, ICAgile & MyBrain accredited", "Batches for executives to supervisors", "Build an internal coaching culture"],
  },
  {
    icon: "coach",
    title: "1-on-1 & Group Coaching",
    text: "Sustained coaching and mentoring through the transformation journey.",
    items: ["Agile transformation journey", "Agile leadership & team coaching", "Agile sales & productivity"],
  },
  {
    icon: "compass",
    title: "Business Agility Assessment & Advisory",
    text: "Assess where you are and design the path to scaled agility.",
    items: ["Agile Health Check-up", "Leader, team & organization assessment", "SAFe 6.0-aligned transformation"],
  },
  {
    icon: "brain",
    title: "Team & Leader Profiling",
    text: "Applied-neuroscience profiling that shows how your people think and decide.",
    items: ["1-on-1 leader profiling", "Team profiling", "MIND Neuro-Dominance indicator"],
  },
  {
    icon: "ai",
    title: "AI Digital Learning Platform",
    text: "Keep learning going between sessions with AI micro-learning.",
    items: ["AI micro learning", "AI learning engagement", "Knowledge converter for your experts"],
  },
];

export const achcModules = [
  {
    code: "Fundamental & Module 1",
    hours: 22,
    title: "Foundation of Agile Coaching",
    credential: "ICP-ACC (by ICAgile)",
    text: "Covers the foundations of agile coaching, the leader as agile coach, and the core competencies for agile coaching certification.",
    accreditation: "Accredited by ICAgile (ICP-ACC) on completion of Fundamental & Module 1",
    logos: ["icagile", "icp-acc"],
  },
  {
    code: "Module 2",
    hours: 33,
    title: "Advanced Coaching Technique",
    credential: "Level 1 Coaching Education by ICF",
    text: "Advanced coaching techniques built on the ICF 8 Core Competencies.",
    accreditation: "ICF Level 1 accredited coaching education on completion of Modules 2 & 3",
    logos: ["icf", "icf-level1"],
  },
  {
    code: "Module 3",
    hours: 33,
    title: "Team Coaching & Facilitation",
    credential: "Level 1 Coaching Education by ICF",
    text: "Advanced team coaching and facilitation techniques based on ICF and ICAgile core competencies.",
    accreditation: "ICF Level 1 accredited coaching education on completion of Modules 2 & 3",
    logos: ["icf", "icf-level1"],
  },
  {
    code: "Module 4",
    hours: 22,
    title: "Applied Neuroscience for Agility",
    credential: "MiND Certified Practitioner by MyBrain",
    text: "Practitioner training in Neurological Dominance (MIND) applied to agility.",
    accreditation: "Accredited by MyBrain International & ICF CCE on completion of Module 4",
    logos: ["mybrain", "mind"],
  },
];

export const clientLogos = [
  "telkom", "pertamina", "shell", "samsung", "henkel", "xl-axiata", "indosat", "pln",
  "bulog", "bpjs-kesehatan", "kemnaker", "kemenkeu", "kemenkes", "kemenkop-ukm",
  "kemendikbud", "lemhannas", "skk-migas", "pii", "herbalife", "ottobock", "telin",
  "servier", "bukaka", "intiland", "lintasarta", "jalin", "admedika", "infomedia",
  "amoeba", "ptc", "badak-lng",
];

export const caseStudies = [
  {
    client: "Telkom Group & Subsidiaries",
    logo: "telkom",
    sector: "Telecommunications · State-owned enterprise",
    headline: "400+",
    headlineLabel: "executive graduates across 30 batches",
    summary:
      "A multi-year agile transformation partnership covering leadership alignment, coaching culture and innovation acceleration across the group.",
    delivery: [
      "Agile transformation and agile leader & mindset alignment",
      "Frameworks & models in workshops and advisory",
      "Leader as agile coach: the ability to lead change",
      "30 batches of agile coaching competency, for VP & GM and Director-1 to Director-3 levels",
      "100+ corporate university faculty members and 100+ innovation mentors & coaches",
      "Coaching culture, learning culture consulting & advisory",
      "Acceleration of the Amoeba innovation program",
      "Specially designed programs: women leaders, millennials and succession",
      "Leadership, critical thinking & problem-solving from senior manager to supervisor",
    ],
  },
  {
    client: "Pertamina Group & Subsidiaries",
    logo: "pertamina",
    sector: "Energy · State-owned enterprise",
    headline: "150+",
    headlineLabel: "executive graduates across 10 batches",
    summary:
      "Agile transformation and coaching capability for the energy group's leaders and corporate university, combined with applied-neuroscience profiling.",
    delivery: [
      "Agile transformation and agile leader & mindset alignment",
      "Frameworks & models in workshops and advisory",
      "Leader as agile coach: the ability to lead change",
      "10 batches of agile coaching competency",
      "50+ corporate university faculty members",
      "Coaching culture, learning culture consulting & advisory",
      "Leader profiling with applied neuroscience; energy & motivation",
      "Specially designed programs: women leaders, millennials and succession",
    ],
  },
  {
    client: "Government & Multinational Organizations",
    logo: "shell",
    sector: "Public sector · Multinational",
    headline: "Country Director",
    headlineLabel: "to manager-level leadership development",
    summary:
      "Productivity and leadership programs for ministries and global brands, including BPJS, the Ministry of Manpower, Shell Indonesia and XL Axiata.",
    delivery: [
      "Agile transformation, mindset alignment and workshop frameworks",
      "Supporting BPJS & the Ministry of Manpower in establishing a new program",
      "Supporting Shell Indonesia as a world-top Shell operation",
      "Supporting XL Axiata as a top telco in Indonesia",
      "Competency development and top leader development",
      "Leader profiling with applied neuroscience; energy & motivation",
    ],
  },
];

export const accreditedMembers = [
  { logo: "icagile", name: "ICAgile", full: "International Consortium for Agile", country: "USA" },
  { logo: "icf", name: "ICF", full: "International Coaching Federation", country: "USA" },
  { logo: "mybrain", name: "MyBrain International", full: "Applied neuroscience", country: "UK" },
  { logo: "wabc", name: "WABC", full: "Worldwide Association of Business Coaches", country: "Canada" },
  { logo: "emcc", name: "EMCC", full: "European Mentoring & Coaching Council", country: "UK" },
  { logo: "erickson", name: "Erickson Coaching International", full: "Professional coaching", country: "Canada" },
];

export const masterCredentials = [
  { logo: "ice-ac", name: "ICE-AC", full: "ICAgile Certified Expert in Agile Coaching" },
  { logo: "mcc", name: "MCC", full: "Master Certified Coach, ICF" },
  { logo: "mind-master", name: "MIND Master Practitioner", full: "MyBrain Indicator of Neurological Dominance" },
  { logo: "cmc", name: "CMC", full: "Certified Master Coach, Corporate Coach Academy" },
  { logo: "erickson", name: "ECPC", full: "Erickson Certified Professional Coach" },
  { logo: "", name: "Stakeholder Centered Coaching", full: "Marshall Goldsmith" },
];

export const awards = [
  { year: "2016", title: "Top Business Award", by: "International Business Federation" },
  { year: "2017", title: "ASEAN Top Business Award", by: "International Business Federation" },
  { year: "2017", title: "Best Global Coaching Leader", by: "World Coaching Congress" },
  { year: "2018", title: "Top Global Coaching Leader", by: "World Coaching Congress" },
  { year: "2019", title: "Best Global Coaching Leader", by: "World Coaching Congress" },
  { year: "HADE AI", title: "Top 10 Finalist, Startup World Cup", by: "Pegasus Tech Ventures" },
  { year: "HADE AI", title: "World Top Finalist, Startup Istanbul", by: "Startup Istanbul" },
  { year: "HADE AI", title: "Founder Institute", by: "Silicon Valley" },
];

export const journey = [
  {
    period: "2011 – 2016",
    title: "Building the foundation",
    points: [
      "Assisted more than 1,000 corporations and MSMEs, mainly in Jakarta, Surabaya, Bandung and Mataram.",
      "Delivered 3,000+ coaching hours and 2,000+ training hours.",
      "Official business coach partner of KADIN, HIPMI, IWAPI, Telkom Indonesia and other entrepreneur organizations.",
      "Accredited by four of the world's major coaching & applied-neuroscience bodies.",
    ],
  },
  {
    period: "2017 – 2019",
    title: "From practice to platform",
    points: [
      "Launched as a firm-based coaching company & platform at the end of 2017.",
      "Acquired international certification accreditation and licenses in coaching & applied neuroscience.",
      "Grew to 11 firms and 50 associate coaches.",
      "Registered and delivered coaching certification in three countries.",
      "Awarded MIND Master Practitioner (MyBrain International) and Certified Master Coach (Corporate Coach Academy).",
    ],
  },
  {
    period: "2020 – Today",
    title: "Regional scale & AI",
    points: [
      "Awarded the Master Certified Coach (MCC) by ICF and ICAgile Certified Expert in Agile Coaching (ICE-AC).",
      "Reached 26 firms and 170+ associate coaches by the end of 2022, and now 28 firms and 180 associate coaches.",
      "Accredited by ICAgile to run and certify agile coaches.",
      "Certified 1,800+ professional coaches and applied-neuroscience practitioners in Indonesia, Hong Kong, Australia and Qatar.",
      "Launched HADE AI, named a Top 10 finalist at the Startup World Cup and a world top finalist at Startup Istanbul.",
      "Established HADE Middle East with Northstar Telecom, headquartered in Bahrain.",
    ],
  },
];

export const universities =
  "Universitas Brawijaya, UPN Veteran Jawa Timur, UPN Veteran, ITB, Telkom University, Universitas Trisakti, Universitas Jenderal Soedirman, Politeknik Negeri Banyuwangi, Universitas Trilogi, Universitas Kanjuruhan Malang, Podomoro University and Universitas Dian Nuswantoro";

// Client testimonials: add entries here and they appear automatically.
// Until then, pages show tasteful placeholders that mark where they go.
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  photo?: string; // path under /public, e.g. "/testimonials/name.jpg"
};
export const testimonials: Testimonial[] = [];
