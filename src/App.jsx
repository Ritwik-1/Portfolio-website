import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaGlobe, FaEnvelope } from 'react-icons/fa'

const NAME = 'Ritwik Kashyap'
const TITLE = 'Data Scientist'
const CONTACT = {
  email: 'ritwik21485@iiitd.ac.in',
  phone: '+91 8447164748',
  location: 'New Delhi, India',
  links: {
    github: '#',
    linkedin: '#',
    portfolio: '#'
  }
}

const Section = ({ id, title, children }) => (
  <section id={id} className="section">
    <motion.h2
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="section-title"
    >
      {title}
    </motion.h2>
    {children}
  </section>
)

export default function App() {
  return (
    <div>
      <header className="nav">
        <div className="container nav-inner">
          <div className="brand">{NAME}</div>
          <nav className="nav-links">
            <a href="#hero">Home</a>
            <a href="#education">Education</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container">
        {/* Hero */}
        <section id="hero" className="hero">
          <div className="hero-grid">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-card"
            >
              <div className="hero-titlewrap">
                <h1 className="hero-name text-gradient">{NAME}</h1>
                <p className="hero-title">{TITLE}</p>
                {/* tagline removed per request; badges removed for cleaner hero */}
              </div>
              <div className="socials">
                <a href={CONTACT.links.github} aria-label="GitHub"><FaGithub/></a>
                <a href={CONTACT.links.linkedin} aria-label="LinkedIn"><FaLinkedin/></a>
                <a href={CONTACT.links.portfolio} aria-label="Portfolio"><FaGlobe/></a>
                <a href={`mailto:${CONTACT.email}`} aria-label="Email"><FaEnvelope/></a>
              </div>
              <div className="hero-actions">
                <a className="btn primary" href="#projects">View Work</a>
                <a className="btn outline" href="/Ritwik_DS_1710.pdf" download>Download CV</a>
              </div>
            </motion.div>
            <div className="photo-wrap">
              <div className="photo-ring">
                <div className="glow"></div>
                <div className="photo" aria-label="Profile Photo">
                  <img
                    src="/photo.jpg"
                    alt="Ritwik Kashyap"
                    className="photo-img"
                    onError={(e)=>{ e.currentTarget.style.display='none' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <Section id="education" title="Education">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card edu"
          >
            <div className="edu-left">
              <div className="logo-pill">
                <img src="/iiitd.png" alt="IIIT Delhi" />
              </div>
            </div>
            <div className="edu-right">
              <h3>IIIT Delhi</h3>
              <p>B.Tech (Honors), Computer Science & Biosciences — 2021–2025</p>
              <p className="muted">CGPA: 8.67 / 10.0</p>
              <p className="muted">Coursework: ML, DL, Linear Algebra, Prob/Stats, NLP, CV, DBMS, OOP, XAI</p>
            </div>
          </motion.div>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience">
          <div className="timeline">
            <motion.div initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.45}} className="tl-item">
              <div className="tl-dot" />
              <div className="tl-card card">
                <h3>Data Scientist — ImagingIQ</h3>
                <p className="muted">Gurugram • Jun 2025 – Present</p>
                <ul className="bullets">
                  <li>Agentic imaging pipeline with LangGraph + LLaMA 3.</li>
                  <li>AnoDDPM diffusion inpainting → ~20% better segmentation.</li>
                  <li>Triton serving; CPU inference 13 → 5 minutes; modular nodes.</li>
                  <li>Monitoring via Grafana/Prometheus for reliability.</li>
                </ul>
              </div>
            </motion.div>
            <motion.div initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.45, delay:0.05}} className="tl-item">
              <div className="tl-dot" />
              <div className="tl-card card">
                <h3>Research Intern — TCS Research</h3>
                <p className="muted">Bhubaneswar • May – Jul 2024</p>
                <ul className="bullets">
                  <li>Antibody sequence generation with LLMs on protein data.</li>
                  <li>Fine‑tuned ProstT5 → 30% sequence similarity on dataset.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills">
          <div className="grid">
            <motion.div initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.45}} whileHover={{ y: -4, scale: 1.01 }} whileTap={{ scale: 0.995 }} className="card"><h4>Programming</h4><p>Python, C++, SQL</p></motion.div>
            <motion.div initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.45, delay:0.05}} whileHover={{ y: -4, scale: 1.01 }} whileTap={{ scale: 0.995 }} className="card"><h4>Data & Modeling</h4><p>pandas, NumPy, NLTK, OpenCV, PySpark, PyTorch/TensorFlow, Transformers, scikit‑learn</p></motion.div>
            <motion.div initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.45, delay:0.1}} whileHover={{ y: -4, scale: 1.01 }} whileTap={{ scale: 0.995 }} className="card"><h4>Deployment & Monitoring</h4><p>FastAPI, AWS, Docker (basic), Git/GitHub, Prometheus, Grafana, Triton</p></motion.div>
            <motion.div initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.45, delay:0.15}} whileHover={{ y: -4, scale: 1.01 }} whileTap={{ scale: 0.995 }} className="card"><h4>Generative AI</h4><p>LangChain/LangGraph, RAG (basic), Agentic AI, LLM fine‑tuning</p></motion.div>
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Projects">
          <div className="grid">
            <motion.div initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.45}} whileHover={{ y: -4, scale: 1.01 }} whileTap={{ scale: 0.995 }} className="card">
              <h3>Automated Fetal Age Estimation</h3>
              <p>U‑Net + LSTM segmentation; OpenCV measurements; ~70% time reduction for consistent GA estimation.</p>
              <p className="muted">PyTorch, OpenCV, U‑Net, LSTM</p>
            </motion.div>
            <motion.div initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.45, delay:0.05}} whileHover={{ y: -4, scale: 1.01 }} whileTap={{ scale: 0.995 }} className="card">
              <h3>University DB Migration & Optimization</h3>
              <p>PostgreSQL → MongoDB doc model; ETL + Spark AQE + indexing; improved query efficiency.</p>
              <p className="muted">PostgreSQL, MongoDB, Spark, Python</p>
            </motion.div>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact">
          <div className="card contact">
            <p><strong>Email:</strong> <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
            <p><strong>Phone:</strong> {CONTACT.phone}</p>
            <p><strong>Location:</strong> {CONTACT.location}</p>
          </div>
        </Section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} {NAME}. Built with React + Vite.</p>
        </div>
      </footer>
    </div>
  )
}


