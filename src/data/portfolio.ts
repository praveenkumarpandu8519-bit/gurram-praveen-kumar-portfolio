/**
 * Central portfolio data for Gurram Praveen Kumar's portfolio.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Gurram Praveen Kumar',
  displayName: 'Praveen Kumar',
  firstName: 'PRAVEEN',
  seriesTag: 'THE JOURNEY',
  originalLabel: 'A PRAVEEN ORIGINAL',
  role: 'B.Pharmacy Graduate',
  tagline: ['Clinical Research', 'Pharmacovigilance', 'Drug Safety'],
  intro: 'B.Pharmacy graduate with a strong academic foundation in pharmaceutical sciences and a growing interest in Clinical Research, Clinical Data Management, Pharmacovigilance, Drug Safety and Regulatory Affairs. Building practical knowledge through a virtual pharmacovigilance internship and academic research.',
  location: 'Hindupur, Andhra Pradesh, India',
  email: 'praveenkumarpandu8519@gmail.com',
  links: { linkedin: 'https://www.linkedin.com/in/praveenkumar-gurram-a74574341/', github: '' },
  resumePdf: '/assets/Praveen_Kumar_Resume.pdf',
  portrait: { src: '/assets/praveen-profile.png', srcSet: '/assets/praveen-profile.png 1024w', alt: 'Professional portrait of Gurram Praveen Kumar' },
  interests: ['Clinical Research', 'Clinical Data Management', 'Pharmacovigilance', 'Pharmacogenomics'],
};
export const education = [
  { school: 'SVU College of Pharmaceutical Sciences, Sri Venkateswara University', place: 'Andhra Pradesh', degree: 'Bachelor of Pharmacy (B.Pharm)', period: 'Graduated 2026', score: 'CGPA 8.5 / 10' },
  { school: 'Sri Chaitanya Educational Institutions', place: 'Vijayawada', degree: 'Intermediate (12th)', period: 'Completed', score: '907 / 1000' },
  { school: 'Vailankanni Matha Vidyalaya School', place: 'Hindupur', degree: 'Secondary Education (10th)', period: 'Completed', score: 'CGPA 9.2 / 10' },
];
export const experience = [
  { company: 'EdVyro', role: 'Virtual Pharmacovigilance Intern', place: 'Virtual', period: '7 October 2026 – 6 November 2026', points: [
    'Developing practical understanding of pharmacovigilance workflows, drug safety monitoring and adverse drug reaction reporting.',
    'Learning Individual Case Safety Report (ICSR) intake and validation, safety documentation and medical coding concepts.',
    'Studying case narrative writing and causality, seriousness and expectedness assessment fundamentals.',
    'Exploring drug safety signal review and aggregate safety information. Learning areas are presented as ongoing training, not completed professional experience.'
  ] },
];
export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
 { id:'casein-chloroquine', title:'Casein–Chloroquine Complexes', year:'2026', genre:'Pharmaceutical Research • Formulation', logline:'Academic research exploring casein from cow milk as a natural taste-masking system for chloroquine with pH-responsive drug release.', stack:['Pharmaceutical Formulation','In-vitro Characterization','UV–Visible Spectrophotometry'], build:['Explored casein as a natural protein-based excipient for taste masking of chloroquine with potential pediatric application.','Prepared casein–chloroquine complexes using fresh cow milk followed by acid-induced casein precipitation.','Evaluated complexes under simulated salivary and gastric conditions and documented drug-release behaviour.'], features:['Casein precipitation and complex preparation','Simulated salivary and gastric studies','UV–Visible spectrophotometry','Physical observation and documentation'], metrics:[{value:'In-vitro',label:'characterization'},{value:'pH',label:'responsive release focus'}], palette:{from:'#03150f',via:'#0d5a40',to:'#050a08',accent:'#46e3a8'}, motif:'flow' },
 { id:'portfolio-website', title:'Personal Portfolio Website', year:'2026', genre:'Web • Personal Branding', logline:'A responsive portfolio presenting pharmaceutical education, research, internship learning, skills and professional contact details.', stack:['React','Vite','TypeScript','CSS'], build:['Customizing a responsive portfolio template to present academic and professional information clearly.','Organizing education, projects, professional learning, research and contact links in an interactive interface.'], features:['Responsive layout','Animated sections','Project cards','Resume and professional links'], metrics:[{value:'Responsive',label:'design'},{value:'Interactive',label:'project showcase'}], palette:{from:'#04121f',via:'#0f4c6e',to:'#05080d',accent:'#4cc9ff'}, motif:'tenants' },
];
export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
 {id:'bpharm',title:'B.Pharmacy Graduate',org:'SVU College of Pharmaceutical Sciences',detail:'Completed Bachelor of Pharmacy with a CGPA of 8.5 / 10 in 2026.',laurel:'Academic Achievement'},
 {id:'publication',title:'Review Article Approved',org:'Pharmacogenomics',detail:'“Precision Oncology in Hematological Malignancies: Pharmacogenomics for Enhanced Therapeutic Efficacy and Diminished Toxicity.” CV reports approved/published in 2026.',laurel:'Research'},
];
export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
 {issuer:'Learntoupgrade',name:'Clinical Data Management — Certificate of Free Webinar',link:''},
 {issuer:'Learntoupgrade',name:'Pharmacovigilance — Certificate of Free Webinar',link:''},
 {issuer:'Learntoupgrade',name:'Medical Coding — Certificate of Free Webinar',link:''},
 {issuer:'Professional Learning',name:'Introduction to Data Management for Clinical Research Studies',link:''},
];
export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
 {id:'pharmacovigilance',title:'Pharmacovigilance & Drug Safety',subtitle:'Foundational knowledge and ongoing learning',skills:[{name:'ICSR Intake & Validation',mono:'IC'},{name:'ADR Reporting',mono:'AD'},{name:'Medical Coding',mono:'MC'},{name:'Safety Narratives',mono:'SN'},{name:'Causality Assessment',mono:'CA'},{name:'Signal Review',mono:'SR'}]},
 {id:'clinical',title:'Clinical Research',subtitle:'Clinical operations and data concepts',skills:[{name:'Clinical Research',mono:'CR'},{name:'Clinical Data Management',mono:'CD'},{name:'GCP Fundamentals',mono:'GCP'},{name:'Medidata Rave Concepts',mono:'MR'},{name:'Medical Terminology',mono:'MT'},{name:'Regulatory Affairs',mono:'RA'}]},
 {id:'data',title:'Data & Office Tools',subtitle:'Excel and digital productivity',skills:[{name:'Microsoft Excel',mono:'XL'},{name:'VLOOKUP / XLOOKUP',mono:'VX'},{name:'IF / COUNTIF / COUNTIFS',mono:'IF'},{name:'Pivot Tables',mono:'PT'},{name:'Data Validation',mono:'DV'},{name:'Microsoft Office',mono:'MS'}]},
 {id:'digital',title:'Digital Skills',subtitle:'Developing web technology skills',skills:[{name:'React',mono:'Re'},{name:'Vite',mono:'Vi'},{name:'HTML',mono:'Ht'},{name:'CSS',mono:'Cs'},{name:'JavaScript',mono:'Js'},{name:'TypeScript',mono:'Ts'},{name:'Visual Studio Code',mono:'VS'}]},
];
export const skillEvidence: Record<string, string[]> = {
 'ICSR Intake & Validation':['EdVyro virtual pharmacovigilance internship — learning area'], 'ADR Reporting':['EdVyro virtual pharmacovigilance internship — learning area'], 'Clinical Data Management':['Learntoupgrade webinar certificate'], 'React':['Personal Portfolio Website'], 'VLOOKUP / XLOOKUP':['CV-listed Excel skills'], 'Medical Terminology':['Clinical research and pharmacovigilance learning'],
};
export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
 {number:1,title:'Academic Foundations',period:'School – 2026',synopsis:'A steady academic journey leading to a Bachelor of Pharmacy degree.',episodes:[
  {code:'S01 E01',title:'School Foundations',description:'Secondary education at Vailankanni Matha Vidyalaya School, Hindupur — CGPA 9.2/10.',tags:['Secondary Education','9.2 CGPA'],runtime:'Completed',palette:amber},
  {code:'S01 E02',title:'Intermediate Studies',description:'Intermediate at Sri Chaitanya Educational Institutions, Vijayawada — 907/1000.',tags:['Intermediate','907/1000'],runtime:'Completed',palette:ocean}]},
 {number:2,title:'Pharmacy & Research',period:'B.Pharm – 2026',synopsis:'Pharmaceutical sciences, formulation work and research writing.',episodes:[
  {code:'S02 E01',title:'Bachelor of Pharmacy',description:'SVU College of Pharmaceutical Sciences, Sri Venkateswara University — CGPA 8.5/10.',tags:['B.Pharm','CGPA 8.5'],runtime:'Graduated 2026',palette:violet},
  {code:'S02 E02',title:'Formulation Research',description:'Casein–chloroquine complexes studied as a natural taste-masking system with pH-responsive drug release.',tags:['Formulation','In-vitro','UV–Visible'],runtime:'Academic project',palette:jade},
  {code:'S02 E03',title:'Research Article',description:'Review article on precision oncology and pharmacogenomics reported as approved/published in 2026.',tags:['Pharmacogenomics','Review Article'],runtime:'2026',palette:crimson}]},
 {number:3,title:'Clinical Research Learning',period:'2026 – Present',synopsis:'Developing entry-level knowledge in clinical research, data management and pharmacovigilance.',episodes:[
  {code:'S03 E01',title:'Pharmacovigilance Internship',description:'Virtual internship at EdVyro, 7 October – 6 November 2026. Learning case intake, validation, ADR reporting and safety documentation.',tags:['EdVyro','ICSR','Drug Safety'],runtime:'Oct – Nov 2026',palette:ocean},
  {code:'S03 E02',title:'Clinical Data Concepts',description:'Learning CDM lifecycle concepts, data validation, query management, EDC and Medidata Rave fundamentals.',tags:['CDM','EDC','Excel'],runtime:'Ongoing learning',palette:violet}]},
 {number:4,title:'The Next Chapter',period:'Now in progress',synopsis:'Seeking an entry-level opportunity in the pharmaceutical and healthcare industry.',episodes:[
  {code:'S04 E01',title:'Clinical Research & Safety',description:'Building skills across clinical research, clinical data management, pharmacovigilance and regulatory affairs.',tags:['Clinical Research','CDM','PV','Regulatory'],runtime:'In progress',palette:jade}]},
];
export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
 {label:'Degree',title:'B.Pharmacy',detail:'CGPA 8.5 / 10 • 2026',palette:violet},
 {label:'Research project',title:'Casein–Chloroquine',detail:'Natural taste-masking and pH-responsive release',palette:jade},
 {label:'Internship',title:'EdVyro',detail:'Virtual Pharmacovigilance Intern • Oct–Nov 2026',palette:ocean},
 {label:'Research',title:'Precision Oncology',detail:'Review article reported approved/published in 2026',palette:crimson},
 {label:'Professional focus',title:'Drug Safety',detail:'Pharmacovigilance and ICSR fundamentals',palette:amber},
 {label:'Data skills',title:'Microsoft Excel',detail:'Lookup functions, COUNTIF(S), Pivot Tables and validation',palette:ocean},
 {label:'Clinical focus',title:'Clinical Data Management',detail:'EDC, validation and query management concepts',palette:violet},
 {label:'Career goal',title:'Clinical Research',detail:'Open to entry-level opportunities',palette:jade},
];
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
 {kicker:'Education',title:'B.Pharmacy · 2026',lines:['SVU College of Pharmaceutical Sciences','Sri Venkateswara University'],chips:['CGPA 8.5 / 10']},
 {kicker:'Focus',title:'Clinical Research & Drug Safety',lines:['Clinical Data Management · Pharmacovigilance','Regulatory Affairs · Medical Terminology'],chips:['Clinical Research','ICSR','Drug Safety']},
 {kicker:'Research',title:'Formulation & Pharmacogenomics',lines:['Casein–chloroquine taste-masking research','Review article on precision oncology in hematological malignancies'],chips:['In-vitro','UV–Visible','Research']},
 {kicker:'Internship',title:'Learning at EdVyro',lines:['Virtual Pharmacovigilance Intern','7 October – 6 November 2026'],chips:['ADR Reporting','ICSR Fundamentals','Documentation']},
];
export type ProfileId = 'sushmita' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'sushmita',
    name: 'Praveen',
    blurb: 'The full portfolio, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
