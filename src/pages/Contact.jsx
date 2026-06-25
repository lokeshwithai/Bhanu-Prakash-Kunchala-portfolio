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
        <div className="container">
          <SectionReveal>
            <h2 className="section__title">Contact details</h2>
            <div className="contact-cards contact-cards--wide">
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
        </div>
      </section>
    </>
  )
}
