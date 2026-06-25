import { Link } from 'react-router-dom'
import SectionReveal from '../components/SectionReveal.jsx'
import { profile, stats, skills, experience } from '../data/resume.js'
import { galleryImages } from '../data/gallery.js'

const highlights = [
  {
    icon: '🏗️',
    title: 'Site Execution',
    text: 'End-to-end execution from drawings to finishing across residential, industrial & hospitality builds.',
  },
  {
    icon: '📐',
    title: 'Quantity Surveying',
    text: 'Concrete, BBS, shuttering & brickwork estimation with accurate indents and contractor billing.',
  },
  {
    icon: '✅',
    title: 'Quality & Safety',
    text: 'Material checks, defect logging and on-site safety to deliver durable, defect-free structures.',
  },
  {
    icon: '🤝',
    title: 'Coordination',
    text: 'Smooth coordination with contractors and Electrical, Plumbing & Mechanical teams.',
  },
]

export default function Home() {
  const featured = galleryImages.slice(0, 6)

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <div className="hero__bg" aria-hidden="true" />
        <div className="container hero__inner">
          <div className="hero__content">
            <span className="hero__eyebrow">👷 {profile.location}</span>
            <h1 className="hero__name">{profile.name}</h1>
            <p className="hero__title">{profile.title}</p>
            <p className="hero__motto">Let’s build something solid together.</p>
            <p className="hero__tagline">{profile.tagline}</p>

            <p className="hero__availability">
              <span className="hero__availability-dot" aria-hidden="true" />
              Open to site engineering and project engineering opportunities.
            </p>

            <div className="hero__actions">
              <Link to="/gallery" className="btn btn--accent">
                View Gallery
              </Link>
              <a
                className="btn btn--outline"
                href="/Bhanu_Prakash_Kunchala_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
              <Link to="/contact" className="btn btn--ghost">
                Contact Me
              </Link>
            </div>
          </div>

          <div className="hero__stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <span className="stat__value">{s.value}</span>
                <span className="stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- HIGHLIGHTS ---------- */}
      <section className="section">
        <div className="container">
          <SectionReveal>
            <p className="section__eyebrow">What I do</p>
            <h2 className="section__title">Core strengths on every site</h2>
          </SectionReveal>

          <div className="grid grid--4">
            {highlights.map((h, i) => (
              <SectionReveal key={h.title} delay={i * 80}>
                <article className="card card--feature">
                  <span className="card__icon">{h.icon}</span>
                  <h3>{h.title}</h3>
                  <p>{h.text}</p>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SKILLS PREVIEW ---------- */}
      <section className="section section--alt">
        <div className="container">
          <SectionReveal>
            <p className="section__eyebrow">Skills</p>
            <h2 className="section__title">Technical expertise</h2>
          </SectionReveal>

          <div className="grid grid--2">
            {skills.map((skill, i) => (
              <SectionReveal key={skill.name} delay={i * 50}>
                <div className="skill">
                  <div className="skill__head">
                    <span>{skill.name}</span>
                    <span className="skill__pct">{skill.level}%</span>
                  </div>
                  <div className="skill__bar">
                    <span style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CURRENT ROLE ---------- */}
      <section className="section">
        <div className="container">
          <SectionReveal>
            <p className="section__eyebrow">Currently</p>
            <h2 className="section__title">{experience[0].company}</h2>
          </SectionReveal>
          <SectionReveal delay={80}>
            <div className="card card--wide">
              <h3>{experience[0].role}</h3>
              <p className="card__meta">{experience[0].period}</p>
              <p>{experience[0].summary}</p>
              <div className="chips">
                {experience[0].projects.map((p) => (
                  <span className="chip" key={p}>
                    {p}
                  </span>
                ))}
              </div>
              <Link to="/experience" className="link-arrow">
                See full experience →
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ---------- GALLERY PREVIEW ---------- */}
      <section className="section section--alt">
        <div className="container">
          <SectionReveal>
            <div className="section__head-row">
              <div>
                <p className="section__eyebrow">Gallery</p>
                <h2 className="section__title">From the field</h2>
              </div>
              <Link to="/gallery" className="btn btn--outline btn--sm">
                View all photos
              </Link>
            </div>
          </SectionReveal>

          <div className="preview-grid">
            {featured.map((img, i) => (
              <SectionReveal key={img.key} delay={i * 60}>
                <Link to="/gallery" className="preview-grid__item">
                  <img src={img.src} alt={img.caption} loading="lazy" />
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="cta">
        <div className="container cta__inner">
          <h2>Let’s build something solid together.</h2>
          <p>
            Open to site engineering and project engineering opportunities.
          </p>
          <Link to="/contact" className="btn btn--accent">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  )
}
