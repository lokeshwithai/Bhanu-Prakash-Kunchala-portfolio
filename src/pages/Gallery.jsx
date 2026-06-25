import { useCallback, useEffect, useState } from 'react'
import SectionReveal from '../components/SectionReveal.jsx'
import { galleryImages } from '../data/gallery.js'

export default function Gallery() {
  const [index, setIndex] = useState(null) // null = closed
  const isOpen = index !== null

  const close = useCallback(() => setIndex(null), [])
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % galleryImages.length)),
    []
  )
  const prev = useCallback(
    () =>
      setIndex((i) =>
        i === null ? i : (i - 1 + galleryImages.length) % galleryImages.length
      ),
    []
  )

  // Keyboard controls for the lightbox.
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, close, next, prev])

  return (
    <>
      <section className="page-header">
        <div className="container">
          <p className="section__eyebrow">Gallery</p>
          <h1 className="page-header__title">Project &amp; Site Gallery</h1>
          <p className="page-header__sub">
            A look at the construction sites and projects I have worked on over
            the years — {galleryImages.length} photographs from the field.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {galleryImages.length === 0 ? (
            <p className="empty-state">No images found.</p>
          ) : (
            <div className="gallery-grid">
              {galleryImages.map((img, i) => (
                <SectionReveal key={img.key} delay={(i % 6) * 50}>
                  <button
                    className="gallery-item"
                    onClick={() => setIndex(i)}
                    aria-label={`Open image ${i + 1}`}
                  >
                    <img src={img.src} alt={img.caption} loading="lazy" />
                    <span className="gallery-item__overlay">
                      <span className="gallery-item__zoom">⤢</span>
                    </span>
                  </button>
                </SectionReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ---------- LIGHTBOX ---------- */}
      {isOpen && (
        <div className="lightbox" onClick={close} role="dialog" aria-modal="true">
          <button className="lightbox__close" onClick={close} aria-label="Close">
            ✕
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <figure
            className="lightbox__figure"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[index].src}
              alt={galleryImages[index].caption}
            />
            <figcaption>
              <span className="lightbox__count">
                {index + 1} / {galleryImages.length}
              </span>
            </figcaption>
          </figure>

          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </>
  )
}
