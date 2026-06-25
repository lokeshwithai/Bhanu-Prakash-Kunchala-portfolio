import { Link } from 'react-router-dom'
import { profile } from '../data/resume.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__col">
          <div className="footer__brand">
            <span className="navbar__brand-mark">BK</span>
            <span>
              Bhanu Prakash <strong>Kunchala</strong>
            </span>
          </div>
          <p className="footer__tag">{profile.title}</p>
          <p className="footer__muted">
            Civil engineering · Site execution · Quality &amp; project management.
          </p>
        </div>

        <div className="footer__col">
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer__col">
          <h4>Get in touch</h4>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`tel:${profile.phoneRaw}`}>{profile.phone}</a>
          <a
            href={`https://wa.me/${profile.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <span className="footer__muted">{profile.location}</span>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          © {year} {profile.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
