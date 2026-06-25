import SectionReveal from '../components/SectionReveal.jsx'
import { experience, education, skills } from '../data/resume.js'

export default function Experience() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <p className="section__eyebrow">Career</p>
          <h1 className="page-header__title">Experience &amp; Education</h1>
          <p className="page-header__sub">
            9 years across industrial, residential and hospitality construction.
          </p>
        </div>
      </section>

      {/* ---------- TIMELINE ---------- */}
      <section className="section">
        <div className="container">
          <h2 className="section__title">Work Experience</h2>
          <div className="timeline">
            {experience.map((job, i) => (
              <SectionReveal key={job.company} delay={i * 80}>
                <div className={`timeline__item ${job.current ? 'is-current' : ''}`}>
                  <div className="timeline__dot" />
                  <div className="timeline__card card">
                    <div className="timeline__top">
                      <h3>{job.role}</h3>
                      {job.current && <span className="badge">Current</span>}
                    </div>
                    <p className="timeline__company">{job.company}</p>
                    <p className="card__meta">
                      {job.period} · {job.duration}
                    </p>
                    <p>{job.summary}</p>
                    <div className="chips">
                      {job.projects.map((p) => (
                        <span className="chip" key={p}>
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- EDUCATION ---------- */}
      <section className="section section--alt">
        <div className="container">
          <h2 className="section__title">Education</h2>
          <div className="grid grid--2">
            {education.map((e, i) => (
              <SectionReveal key={e.course} delay={i * 80}>
                <article className="card edu-card">
                  <div className="edu-card__year">{e.year}</div>
                  <div>
                    <h3>{e.course}</h3>
                    <p className="card__meta">{e.institution}</p>
                    <p className="edu-card__board">{e.board}</p>
                    <span className="chip chip--accent">{e.score}</span>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SKILLS ---------- */}
      <section className="section">
        <div className="container">
          <h2 className="section__title">Skills</h2>
          <div className="grid grid--2">
            {skills.map((skill, i) => (
              <SectionReveal key={skill.name} delay={i * 40}>
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
    </>
  )
}
