import { useState } from 'react'
import SectionReveal from '../components/SectionReveal.jsx'
import { profile } from '../data/resume.js'

const contactCards = [
  {
    icon: '✉️',
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: '📞',
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phoneRaw}`,
  },
  {
    icon: '💬',
    label: 'WhatsApp',
    value: 'Chat on WhatsApp',
    href: `https://wa.me/${profile.whatsapp}`,
    external: true,
  },
  {
    icon: '📍',
    label: 'Location',
    value: profile.location,
    href: `https://www.google.com/maps/search/${encodeURIComponent(
      profile.location
    )}`,
    external: true,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', subject: '', message: '' })

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      form.subject || `Portfolio enquiry from ${form.name || 'website'}`
    )
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}`.trim()
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <>
      <section className="page-header">
        <div className="container">
          <p className="section__eyebrow">Contact</p>
          <h1 className="page-header__title">Let’s connect</h1>
          <p className="page-header__sub">
            Have a project or an opportunity? I’d love to hear about it.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <SectionReveal className="contact-info">
            <h2 className="section__title">Contact details</h2>
            <div className="contact-cards">
              {contactCards.map((c) => (
                <a
                  key={c.label}
                  className="contact-card"
                  href={c.href}
                  {...(c.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  <span className="contact-card__icon">{c.icon}</span>
                  <span className="contact-card__body">
                    <span className="contact-card__label">{c.label}</span>
                    <span className="contact-card__value">{c.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal className="contact-form-wrap" delay={120}>
            <form className="contact-form" onSubmit={onSubmit}>
              <h2 className="section__title">Send a message</h2>
              <p className="contact-form__note">
                This opens your email app with the message ready to send.
              </p>

              <label>
                Your name
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="e.g. Ravi Kumar"
                  required
                />
              </label>

              <label>
                Subject
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={onChange}
                  placeholder="Project / opportunity"
                />
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={onChange}
                  placeholder="Tell me a bit about it…"
                  required
                />
              </label>

              <button type="submit" className="btn btn--accent btn--block">
                Send Message
              </button>
            </form>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
