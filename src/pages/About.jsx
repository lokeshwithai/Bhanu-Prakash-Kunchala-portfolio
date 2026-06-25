import { Link } from 'react-router-dom'
import SectionReveal from '../components/SectionReveal.jsx'
import { profile, responsibilities, languages } from '../data/resume.js'

export default function About() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <p className="section__eyebrow">About</p>
          <h1 className="page-header__title">Get to know me</h1>
          <p className="page-header__sub">
            A dedicated civil engineer who turns drawings into durable structures.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-layout">
          <SectionReveal className="about-main">
            <h2 className="section__title">Career Objective</h2>
            <p className="lead">{profile.objective}</p>
            <p>
              With <strong>9 years</strong> of experience as a Site Engineer and
              in Site Management, I have grown from a junior engineer on
              industrial projects to a senior project engineer leading
              large-scale township and hospitality builds. My focus is always the
              same — quality work, on schedule, executed safely.
            </p>

            <h3 className="about-subhead">What I bring to site</h3>
            <div className="grid grid--2">
              {responsibilities.map((r, i) => (
                <SectionReveal key={r.title} delay={i * 50}>
                  <article className="card">
                    <h4>{r.title}</h4>
                    <p>{r.text}</p>
                  </article>
                </SectionReveal>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal className="about-side" delay={120}>
            <div className="info-card">
              <h3>Languages</h3>
              <div className="chips">
                {languages.map((l) => (
                  <span className="chip chip--accent" key={l}>
                    {l}
                  </span>
                ))}
              </div>

              <h3 className="info-card__subhead">Contact</h3>
              <ul className="info-list info-list--links">
                <li>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </li>
                <li>
                  <a href={`tel:${profile.phoneRaw}`}>{profile.phone}</a>
                </li>
                <li>{profile.location}</li>
              </ul>

              <Link to="/contact" className="btn btn--accent btn--block">
                Contact Me
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
