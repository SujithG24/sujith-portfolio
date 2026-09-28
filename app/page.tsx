import Hero from "./components/Hero";
import ScrollAnimations from "./components/ScrollAnimations";
import Cursor from "./components/Cursor";

export default function Home() {
  return (
    <main className="site">
      <Cursor />
      <ScrollAnimations />

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <a href="#" className="logo">
          SUJITH<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-status">
          <span className="status-dot" />
          Open to work
        </div>
      </nav>

      {/* ================= HERO ================= */}

      <Hero />

      {/* ================= MARQUEE ================= */}

      <section className="marquee-section">
        <div className="marquee-track">
          <span>JAVA</span>
          <i>✦</i>
          <span>SPRING BOOT</span>
          <i>✦</i>
          <span>REACT</span>
          <i>✦</i>
          <span>SQL</span>
          <i>✦</i>
          <span>AWS</span>
          <i>✦</i>
          <span>REST APIs</span>
          <i>✦</i>
          <span>PYTHON</span>
          <i>✦</i>
          <span>MYSQL</span>
          <i>✦</i>

          <span>JAVA</span>
          <i>✦</i>
          <span>SPRING BOOT</span>
          <i>✦</i>
          <span>REACT</span>
          <i>✦</i>
          <span>SQL</span>
          <i>✦</i>
          <span>AWS</span>
          <i>✦</i>
          <span>REST APIs</span>
          <i>✦</i>
          <span>PYTHON</span>
          <i>✦</i>
          <span>MYSQL</span>
          <i>✦</i>
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section id="about" className="about-section">
        <div className="section-inner">
          <div className="section-heading">
            <span>01 — ABOUT</span>
            <span>WHO I AM</span>
          </div>

          <div className="about-grid">
            <h2 className="about-title">
              I BUILD
              <br />
              <span>SOFTWARE</span>
              <br />
              THAT
              <br />
              <span>MATTERS.</span>
            </h2>

            <div className="about-content">
              <p>
                I&apos;m Sujith, a Computer Science Engineering graduate focused
                on building full-stack applications and developing strong backend
                engineering skills.
              </p>

              <p>
                My current focus is Java, Spring Boot, SQL, React and backend
                systems. I enjoy understanding how systems work behind the
                interface — not just making them look good.
              </p>

              <div className="about-stats">
                <div>
                  <strong>8.4</strong>
                  <span>CGPA</span>
                </div>

                <div>
                  <strong>2026</strong>
                  <span>GRADUATE</span>
                </div>

                <div>
                  <strong>BE</strong>
                  <span>CSE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}

      <section id="skills" className="skills-section">
        <div className="section-inner">
          <div className="section-heading">
            <span>02 — SKILLS</span>
            <span>TECH DNA</span>
          </div>

          <div className="skills-intro">
            <h2>
              THE TOOLS
              <br />I <span>BUILD</span> WITH.
            </h2>

            <p>
              A practical stack focused on backend, full-stack development,
              APIs, databases, and cloud tooling.
            </p>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <span className="skill-index">01</span>
              <h3>LANGUAGES</h3>
              <div className="skill-list">
                <span>JAVA</span>
                <span>PYTHON</span>
                <span>JAVASCRIPT</span>
                <span>SQL</span>
              </div>
            </div>

            <div className="skill-card">
              <span className="skill-index">02</span>
              <h3>DEVELOPMENT</h3>
              <div className="skill-list">
                <span>SPRING BOOT</span>
                <span>REACT.JS</span>
                <span>REST APIs</span>
                <span>HTML</span>
                <span>MYSQL</span>
              </div>
            </div>

            <div className="skill-card">
              <span className="skill-index">03</span>
              <h3>CLOUD &amp; TOOLS</h3>
              <div className="skill-list">
                <span>AWS</span>
                <span>GIT</span>
                <span>GITHUB</span>
              </div>
            </div>

            <div className="skill-card">
              <span className="skill-index">04</span>
              <h3>ENGINEERING</h3>
              <div className="skill-list">
                <span>PROBLEM SOLVING</span>
                <span>TEAMWORK</span>
                <span>LEADERSHIP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}

      <section id="projects" className="projects-section">
        <div className="section-inner">
          <div className="section-heading">
            <span>03 — PROJECTS</span>
            <span>SELECTED WORK</span>
          </div>

          <div className="projects-intro">
            <h2>
              THINGS
              <br />
              <span>I&apos;VE BUILT.</span>
            </h2>

            <p>
              A selection of projects where I worked across application
              development, backend systems, databases, and machine learning.
            </p>
          </div>

          <div className="projects-list">
            <article className="project-card">
              <div className="project-number">01</div>

              <div className="project-main">
                <div>
                  <div className="project-meta">
                    <span>FULL STACK</span>
                    <span>MAR 2026 — APR 2026</span>
                  </div>

                  <h3>E-Commerce System</h3>

                  <p>
                    A full-stack e-commerce application featuring user
                    authentication, product management, shopping cart, and order
                    processing.
                  </p>

                  <div className="project-tech">
                    <span>REACT.JS</span>
                    <span>SPRING BOOT</span>
                    <span>MYSQL</span>
                    <span>REST APIs</span>
                  </div>
                </div>
              </div>

              <div className="project-arrow">↗</div>
            </article>

            <article className="project-card">
              <div className="project-number">02</div>

              <div className="project-main">
                <div>
                  <div className="project-meta">
                    <span>AI / COMPUTER VISION</span>
                    <span>JAN 2026 — APR 2026</span>
                  </div>

                  <h3>Automated Mark Extraction System</h3>

                  <p>
                    An AI-based system designed to detect and analyze
                    handwritten marks from scanned answer sheets using image
                    processing, computer vision, and machine learning.
                  </p>

                  <div className="project-tech">
                    <span>PYTHON</span>
                    <span>IMAGE PROCESSING</span>
                    <span>COMPUTER VISION</span>
                    <span>MACHINE LEARNING</span>
                  </div>
                </div>
              </div>

              <div className="project-arrow">↗</div>
            </article>
          </div>

          {/* Explore CTA — inside section */}
          <div className="projects-explore">
            <a href="#contact" className="explore-button">
              EXPLORE MORE PROJECTS
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}

      <section id="experience" className="experience-section">
        <div className="section-inner">
          <div className="section-heading">
            <span>04 — EXPERIENCE</span>
            <span>INTERNSHIP</span>
          </div>

          <div className="experience-layout">
            <div className="experience-label">
              <span>01</span>
              <span>INTERNSHIP</span>
            </div>

            <div className="experience-content">
              <div className="experience-top">
                <div>
                  <p className="experience-company">SYSENT TECHNOLOGIES</p>

                  <h2>
                    SOFTWARE
                    <br />
                    TRAINEE INTERN
                  </h2>
                </div>

                <span className="experience-date">JAN 2026 — APR 2026</span>
              </div>

              <p className="experience-location">COIMBATORE, INDIA</p>

              <div className="experience-description">
                <p>
                  Worked on an AI-based system for detecting and analyzing
                  handwritten marks from scanned answer sheets.
                </p>

                <p>
                  Applied image processing and computer vision techniques for
                  automated mark extraction, followed by machine learning for
                  part-wise classification and validation.
                </p>
              </div>

              <div className="experience-stack">
                <span>PYTHON</span>
                <span>IMAGE PROCESSING</span>
                <span>COMPUTER VISION</span>
                <span>MACHINE LEARNING</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ACHIEVEMENTS & CERTIFICATIONS ================= */}

      <section id="achievements" className="achievements-section">
        <div className="section-inner">
          <div className="section-heading">
            <span>05 — ACHIEVEMENTS</span>
            <span>ACHIEVEMENTS &amp; CERTIFICATIONS</span>
          </div>

          <div className="achievements-layout">
            <div className="achievements-column">
              <div className="achievement-heading">
                <span>01</span>
                <h2>ACHIEVEMENTS</h2>
              </div>

              <div className="achievement-list">
                <div className="achievement-item">
                  <span className="achievement-number">01</span>

                  <div>
                    <h3>Hunt the Code&apos;24</h3>
                    <p>Winner · SNS Institution, Coimbatore</p>
                  </div>

                  <span className="achievement-arrow">↗</span>
                </div>

                <div className="achievement-item">
                  <span className="achievement-number">02</span>

                  <div>
                    <h3>Debugging — Tronix</h3>
                    <p>2nd Place · Karpagam Institution</p>
                  </div>

                  <span className="achievement-arrow">↗</span>
                </div>

                <div className="achievement-item">
                  <span className="achievement-number">03</span>

                  <div>
                    <h3>NSS Member &amp; Volunteer</h3>
                    <p>Community Service &amp; Institutional Volunteering</p>
                  </div>

                  <span className="achievement-arrow">↗</span>
                </div>

                <div className="achievement-item">
                  <span className="achievement-number">04</span>

                  <div>
                    <h3>Typewriting — English Language</h3>
                    <p>Tamil Nadu Government Technical Examination (GTE)</p>
                    <div className="typing-levels">
                      <span>Junior (Lower) Grade — ✓ Cleared</span>
                      <span>Senior (Higher) Grade — ✓ Cleared</span>
                    </div>
                  </div>

                  <span className="achievement-arrow">↗</span>
                </div>
              </div>
            </div>

            <div className="achievements-column">
              <div className="achievement-heading">
                <span>02</span>
                <h2>CERTIFICATIONS</h2>
              </div>

              <div className="certification-list">
                <div className="certification-card">
                  <span>01</span>
                  <div>
                    <h3>Core JAVA Bootcamp</h3>
                    <p>Udemy · July 2025</p>
                  </div>
                  <span className="certification-mark">↗</span>
                </div>

                <div className="certification-card">
                  <span>02</span>
                  <div>
                    <h3>AWS Certified Cloud Practitioner</h3>
                    <p>Corizo · January 2025</p>
                  </div>
                  <span className="certification-mark">↗</span>
                </div>

                <div className="certification-card">
                  <span>03</span>
                  <div>
                    <h3>Data Structures and Algorithm</h3>
                    <p>Corizo</p>
                  </div>
                  <span className="certification-mark">↗</span>
                </div>

                <div className="certification-card">
                  <span>04</span>
                  <div>
                    <h3>The Joy of Computing using Python</h3>
                    <p>NPTEL · Elite</p>
                  </div>
                  <span className="certification-mark">↗</span>
                </div>

                <div className="certification-card">
                  <span>05</span>
                  <div>
                    <h3>Social Networks</h3>
                    <p>NPTEL</p>
                  </div>
                  <span className="certification-mark">↗</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RESUME ================= */}

      <section id="resume" className="resume-section">
        <div className="section-inner">
          <div className="section-heading">
            <span>06 — RESUME</span>
            <span>CAREER PROFILE</span>
          </div>

          <div className="resume-inner">
            <div className="resume-content">
              <p className="resume-label">CAREER PROFILE</p>

              <h2>
                LET&apos;S BUILD
                <br />
                SOMETHING
                <br />
                <span>MEANINGFUL.</span>
              </h2>

              <p className="resume-description">
                Computer Science graduate focused on software development,
                backend systems, and full-stack applications.
              </p>

              <a
                href="/Sujith-G-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-button"
              >
                VIEW RESUME
                <span>↗</span>
              </a>
            </div>

            <div className="resume-mark" aria-hidden="true">
              <span>SUJITH</span>
              <span>G.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section id="contact" className="contact-section">
        <div className="section-inner">
          <div className="section-heading">
            <span>07 — CONTACT</span>
            <span>GET IN TOUCH</span>
          </div>

          <div className="contact-content">
            <p className="contact-label">HAVE AN OPPORTUNITY?</p>

            <h2 className="contact-title">
              LET&apos;S
              <br />
              <span>TALK.</span>
            </h2>

            <p className="contact-description">
              Looking for a software developer, collaborator, or someone to
              build something interesting with?
            </p>

            <a
              href="mailto:sujith2482004@gmail.com"
              className="contact-email"
            >
              <span>sujith2482004@gmail.com</span>
              <span>↗</span>
            </a>
          </div>

          <div className="contact-bottom">
            <div className="contact-identity">
              <span>SUJITH G.</span>
              <small>JAVA FULL-STACK DEVELOPER</small>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/SujithG24"
                target="_blank"
                rel="noopener noreferrer"
              >
                GITHUB ↗
              </a>

              <a
                href="https://www.linkedin.com/in/sujith-g-1618a3290"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINKEDIN ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">
        <div className="footer-left">
          <span className="footer-name">SUJITH G.</span>
          <span className="footer-role">JAVA FULL-STACK DEVELOPER</span>
        </div>

        <div className="footer-center">
          <span>© 2026 SUJITH G.</span>
          <span className="footer-sep">·</span>
          <span>BUILT WITH NEXT.JS</span>
        </div>

        <div className="footer-right">
          <a
            href="https://github.com/SujithG24"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB ↗
          </a>
          <a
            href="https://www.linkedin.com/in/sujith-g-1618a3290"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN ↗
          </a>
          <a href="#" className="footer-top">
            BACK TO TOP ↑
          </a>
        </div>
      </footer>
    </main>
  );
}