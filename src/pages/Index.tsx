import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, MapPin, ExternalLink, Code2, Layers3, Radio, GraduationCap, Award } from "lucide-react";

const experience = [{
  role: "Software Engineer Intern", company: "IIT Delhi", guide: "Guided by Prof. Sudeep Narayan Banerjee",
  project: "IntelliHire — Hybrid Explainable AI Job Recommendation Platform", duration: "May ’26 — Jul ’26",
  certificate: "https://drive.google.com/file/d/1k8Wikr4qpmYn8ePNe_V96kpke0iK2Ekd/view?usp=sharing",
  points: [
    "Designed and built an AI job recommendation platform across 8 Spring Boot microservices, with Eureka discovery and an API Gateway.",
    "Built a hybrid ML pipeline with FastAPI, PyTorch and Sentence-Transformers, combining semantic similarity, skill matching and prediction into explainable results.",
    "Developed three role-based React 19 portals and implemented JWT/OAuth2 authentication with Redis-backed brute-force protection.",
    "Created a live cross-service log dashboard, containerized 10 services with Docker, and evaluated Kubernetes versus single-VM deployment.",
    "Owned requirements, technical documentation, deployment cost analysis and live demos for the faculty guide."
  ], tech: ["Spring Boot", "Spring Cloud", "FastAPI", "PyTorch", "React 19", "JWT / OAuth2", "Redis", "Docker", "Kubernetes"]
}];

const projects = [
  { title: "MicroGuard AI", number: "01", category: "DISTRIBUTED SYSTEMS · AI", desc: "An AI-powered platform that analyzes microservice architectures, surfaces system risks and recommends practical improvements.", repo: "https://github.com/Yayati7/MicroGuardAI", live: "https://34.14.214.173.nip.io/", tech: ["Java", "Spring Boot", "Kafka", "Mistral API", "Keycloak", "GCP"], date: "Mar ’26", visual: "visual-lime", glyph: "M" },
  { title: "MeetNest", number: "02", category: "REAL-TIME · WEBRTC", desc: "A secure video conferencing app with live video, audio, chat and screen sharing, powered by peer-to-peer WebRTC mesh and Socket.IO signaling.", repo: "https://github.com/Yayati7/MeetNest", live: "https://meetnestfrontend.onrender.com/", tech: ["WebRTC", "Socket.IO", "MERN", "Docker", "AWS EC2"], date: "Dec ’25", visual: "visual-blue", glyph: "N" },
  { title: "WanderLust", number: "03", category: "FULL STACK · GEO DATA", desc: "A travel discovery app for exploring and managing destinations, with geospatial visualizations and dynamic listing workflows.", repo: "https://github.com/Yayati7/WanderLust", live: "https://wanderlust-r0x5.onrender.com/listings", tech: ["Node.js", "Express", "MongoDB", "Mapbox", "Kafka"], date: "Jun ’25", visual: "visual-orange", glyph: "W" },
  { title: "MedCare", number: "04", category: "PRODUCT · DASHBOARDS", desc: "A responsive hospital management dashboard for tracking doctors, patients and diagnostics with dynamic filtering and reusable admin workflows.", repo: "https://github.com/Yayati7/MedCare", live: "https://med-care-db.vercel.app/", tech: ["React", "TypeScript", "shadcn/ui", "Tailwind CSS"], date: "Apr ’25", visual: "visual-violet", glyph: "C" }
];

const skills = {
  "Languages": ["C++", "C", "Java", "JavaScript"],
  "Backend & architecture": ["Spring Boot", "Spring Cloud", "Microservices", "Distributed systems", "REST APIs"],
  "Real-time & messaging": ["WebRTC", "Socket.IO", "Apache Kafka"],
  "Data": ["MongoDB", "PostgreSQL", "Redis"],
  "Cloud & delivery": ["Docker", "Docker Compose", "GitHub Actions", "AWS EC2", "GCP"],
  "Foundations": ["Authentication", "Keycloak", "Git", "OS", "Computer Networks", "DSA"]
};

const certifications = [
  { title: "Certificate of Completion (Web Dev)", issuer: "Apna College", year: "2025", link: "https://mycourse.app/HfvUmwIr8Wa0rz90C" },
  { title: "Coding Interview Preparation", issuer: "Coursera", year: "2025", link: "https://coursera.org/share/3daa7224658236bf1ee8b6e9f4112e98" },
  { title: "Data Structures", issuer: "Coursera", year: "2024", link: "https://coursera.org/share/8b4b9cc7370203cd72f4fb30a586d14a" }
];

const education = [
  { institution: "Manipal Institute of Technology, Bengaluru", degree: "B.Tech · Computer Science and Engineering (Core)", grade: "CGPA: 7.03", duration: "2023 — 2027 (expected)" },
  { institution: "Sri Venkateshwar International School", degree: "CBSE · Class XII", grade: "Aggregate: 90%", duration: "2021 — 2022" },
  { institution: "Sri Venkateshwar International School", degree: "CBSE · Class X", grade: "Aggregate: 90%", duration: "2019 — 2020" }
];

const navItems = [["about", "About"], ["experience", "Experience"], ["work", "Selected work"], ["toolkit", "Toolkit"], ["journey", "Journey"]];
const rise = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.2, 0.7, 0.2, 1] } } };

function Eyebrow({ children }: { children: React.ReactNode }) { return <div className="eyebrow"><span className="eyebrow-line" />{children}</div>; }
function SectionHeading({ index, title, detail }: { index: string; title: string; detail: string }) {
  return <motion.div variants={rise} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} className="section-heading"><div><Eyebrow>0{index} / {detail}</Eyebrow><h2>{title}</h2></div><span className="heading-mark">↘</span></motion.div>;
}

export default function Index() {
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const nodes = navItems.map(([id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); }), { rootMargin: "-30% 0px -55% 0px" });
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const jump = () => setMenuOpen(false);
  return <div className="portfolio-shell">
    <motion.div className="reading-progress" style={{ scaleX: progressScale }} />
    <header className="site-header">
      <a className="brand" href="#about" onClick={jump} aria-label="Yayati Mann Singh, home"><span className="brand-symbol">Y<span>.</span></span><span className="brand-name">YAYATI MANN SINGH<small>SOFTWARE ENGINEER · IN THE MAKING</small></span></a>
      <nav className="desktop-nav" aria-label="Main navigation">{navItems.map(([id, label]) => <a key={id} className={active === id ? "nav-link active" : "nav-link"} href={`#${id}`}>{label}</a>)}</nav>
      <a className="header-cta" href="mailto:yayatimannsingh7@gmail.com">Let’s talk <ArrowUpRight size={15} /></a>
      <button className="menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </header>
    <AnimatePresence>{menuOpen && <motion.nav className="mobile-nav" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} aria-label="Mobile navigation">{navItems.map(([id, label]) => <a key={id} onClick={jump} href={`#${id}`}>{label}<ArrowUpRight size={17} /></a>)}</motion.nav>}</AnimatePresence>

    <main>
      <section className="hero" id="about">
        <div className="hero-grid" />
        <div className="hero-content">
          <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.11, delayChildren: 0.16 } } }}>
            <motion.div variants={rise} className="status-pill"><span className="status-dot" /> LOOKING FOR MY NEXT BIG CHALLENGE</motion.div>
            <motion.p variants={rise} className="hero-kicker">CURIOUS BY NATURE. <span>BUILDER BY CHOICE.</span></motion.p>
            <motion.h1 variants={rise}>Ideas into<br /><span className="hero-name">impact<span className="name-period">.</span></span></motion.h1>
            <motion.div variants={rise} className="hero-bottom"><p className="hero-copy">I’m Yayati, a CSE student at Manipal Institute of Technology who loves turning ambitious ideas into thoughtful products—from the first sketch to the final, satisfying detail.</p><div className="hero-actions"><a className="button button-primary" href="#work">See what I make <ArrowDownRight size={17} /></a><a className="button button-quiet" href="mailto:yayatimannsingh7@gmail.com">Say hello <ArrowUpRight size={16} /></a></div></motion.div>
          </motion.div>
        </div>
        <motion.div className="hero-graphic" initial={{ opacity: 0, scale: 0.82, rotate: 7 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.15, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}>
          <div className="collage-card collage-main"><span className="collage-small">A LITTLE BIT OF</span><span className="collage-words">THIS<br />& THAT<span>.</span></span><span className="collage-loop" /></div><div className="collage-card collage-sticker"><span>✳</span><small>MADE WITH<br />CURIOSITY</small></div><div className="collage-card collage-note"><span>DESIGN</span><b>×</b><span>ENGINEERING</span></div><div className="collage-orbit" /><span className="collage-scribble">↗</span><span className="collage-caption">CURRENTLY MAKING<br />SOMETHING MATTER</span>
        </motion.div>
        <div className="hero-meta"><span><MapPin size={14} /> BENGALURU, INDIA</span><span>COMPUTER SCIENCE · CLASS OF ’27</span><a href="#experience">COME TAKE A LOOK <ArrowDown size={13} /></a></div>
      </section>

      <div className="marquee-band" aria-label="Full-stack development, distributed systems, AI and creative problem solving"><div className="marquee-track">{Array.from({ length: 2 }, (_, i) => <span key={i}>FULL-STACK CRAFT <b>✳</b> DISTRIBUTED SYSTEMS <b>✳</b> BIG IDEAS, BUILT WELL <b>✳</b> AI WITH INTENTION <b>✳</b> ALWAYS CURIOUS <b>✳</b></span>)}</div></div>

      <section id="experience" className="section experience-section"><div className="content-wrap"><SectionHeading index="01" title="Experience" detail="WHERE I’VE BUILT" />
        {experience.map((exp, i) => <motion.article key={exp.company} className="experience-card" initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, delay: i * 0.1 }}>
          <div className="experience-top"><div className="experience-index">01<span> / 01</span></div><div className="experience-role"><span className="experience-label">INTERNSHIP · {exp.duration.toUpperCase()}</span><h3>{exp.role}<span className="at-sign"> @ </span>{exp.company}</h3><p>{exp.guide}</p></div><a className="icon-link" href={exp.certificate} target="_blank" rel="noreferrer" aria-label="View internship certificate"><ArrowUpRight /></a></div>
          <div className="experience-detail"><div className="detail-label"><Layers3 size={15} /> FEATURED PROJECT</div><h4>{exp.project}</h4><ul>{exp.points.map(point => <li key={point}>{point}</li>)}</ul><div className="tag-list">{exp.tech.map(tech => <span className="tech-tag" key={tech}>{tech}</span>)}</div></div>
        </motion.article>)}
      </div></section>

      <section id="work" className="section work-section"><div className="content-wrap"><SectionHeading index="02" title="Selected work" detail="IDEAS MADE REAL" /><div className="projects-grid">{projects.map((project, i) => <motion.article key={project.title} className={`project-card ${i === 0 ? "project-featured" : ""}`} initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.65, delay: i % 2 * 0.12 }}>
          <div className={`project-visual ${project.visual}`}><div className="visual-grid" /><span className="visual-index">{project.number}</span><span className="visual-glyph">{project.glyph}</span><div className="visual-caption"><span className="visual-dot" /> BUILT TO MAKE AN IMPACT</div><motion.a whileHover={{ scale: 1.08, rotate: 45 }} className="visual-open" href={project.live} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live demo`}><ArrowUpRight size={20} /></motion.a></div>
          <div className="project-info"><div className="project-meta"><span>{project.category}</span><span>{project.date}</span></div><h3>{project.title}<span className="project-arrow">↗</span></h3><p>{project.desc}</p><div className="tag-list">{project.tech.map(tech => <span className="tech-tag" key={tech}>{tech}</span>)}</div><div className="project-links"><a href={project.repo} target="_blank" rel="noreferrer"><Github size={15} /> Source code <ArrowUpRight size={13} /></a><a href={project.live} target="_blank" rel="noreferrer"><ExternalLink size={14} /> Live preview <ArrowUpRight size={13} /></a></div></div>
        </motion.article>)}</div></div></section>

      <section id="toolkit" className="section toolkit-section"><div className="content-wrap"><SectionHeading index="03" title="My toolkit" detail="TOOLS I REACH FOR" /><div className="toolkit-layout"><div className="toolkit-intro"><span className="toolkit-icon"><Code2 /></span><h3>The right tool<br />for the <em>right job.</em></h3><p>I enjoy working across the stack: shaping clean interfaces, connecting reliable services and learning how systems behave under pressure.</p><div className="toolkit-foot"><Radio size={15} /> ALWAYS LEARNING · ALWAYS BUILDING</div></div><div className="skill-groups">{Object.entries(skills).map(([group, items], i) => <motion.div key={group} className="skill-group" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}><div className="skill-group-label"><span>0{i + 1}</span>{group}</div><div className="tag-list">{items.map(item => <span className="tech-tag" key={item}>{item}</span>)}</div></motion.div>)}</div></div></div></section>

      <section id="journey" className="section journey-section"><div className="content-wrap"><SectionHeading index="04" title="The journey so far" detail="EDUCATION & CREDENTIALS" /><div className="journey-grid"><div className="journey-column"><div className="subsection-heading"><GraduationCap size={18} /><h3>Education</h3></div>{education.map((edu, i) => <motion.div key={edu.degree} className="journey-item" initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.09 }}><div className="journey-marker" /><div className="journey-item-top"><span>{edu.duration}</span><span>{edu.grade}</span></div><h4>{edu.institution}</h4><p>{edu.degree}</p></motion.div>)}</div><div className="journey-column cert-column"><div className="subsection-heading"><Award size={18} /><h3>Certifications</h3></div>{certifications.map((cert, i) => <motion.a key={cert.title} className="cert-item" href={cert.link} target="_blank" rel="noreferrer" initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.09 }}><span className="cert-icon"><Award size={17} /></span><span className="cert-copy"><strong>{cert.title}</strong><small>{cert.issuer} · {cert.year}</small></span><ArrowUpRight className="cert-arrow" size={17} /></motion.a>)}</div></div></div></section>

      <section className="contact-section"><div className="contact-glow" /><div className="content-wrap contact-inner"><Eyebrow>05 / YOUR NEXT TEAMMATE?</Eyebrow><motion.h2 initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>Let’s build something<br /><span>that matters.</span></motion.h2><p>Looking for a curious engineer who cares about the details and the bigger picture? I’d love to hear what you’re building.</p><a className="button button-primary contact-button" href="mailto:yayatimannsingh7@gmail.com"><Mail size={16} /> yayatimannsingh7@gmail.com <ArrowUpRight size={16} /></a><div className="social-links"><a href="https://www.linkedin.com/in/yayati-singh-96783736b/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} /></a><a href="https://github.com/Yayati7" target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={13} /></a></div><span className="contact-star">✳</span></div></section>
    </main>
    <footer className="site-footer"><a className="brand footer-brand" href="#about"><span className="brand-symbol">Y<span>.</span></span><span className="brand-name">YAYATI MANN SINGH<small>MADE WITH CURIOSITY & CARE</small></span></a><span>© {new Date().getFullYear()} · DESIGNED & BUILT BY YAYATI</span><a href="#about" className="back-top">BACK TO TOP ↑</a></footer>
  </div>;
}
