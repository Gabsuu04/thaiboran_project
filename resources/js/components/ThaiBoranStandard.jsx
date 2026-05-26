import React from 'react'

export default function ThaiBoranStandard() {
  return (
    <section className="thai-boran-standard">
      <div className="container">
        <h2 className="section-title">The Thai Boran Standard</h2>
        <p className="section-subtitle">
          Authenticity is at the heart of everything we do. We bring the ancient traditions of Thai therapies into the modern world with precision and care.
        </p>

        <div className="standard-content">
          <div className="standard-image">
            <img src="/images/thaiboranmassager.webp" alt="Thai Boran Massage Therapist" />
          </div>

          <div className="standard-features">
            <div className="feature-box">
              <div className="feature-icon">✓</div>
              <div className="feature-content">
                <h3>Authentic Techniques</h3>
                <p>
                  We are an experienced set of practitioners trained in time-tested Thai therapies. Our therapists honor the ancient traditions of our craft with respect and reverence.
                </p>
              </div>
            </div>

            <div className="feature-box">
              <div className="feature-icon">✓</div>
              <div className="feature-content">
                <h3>Premium Botanicals</h3>
                <p>
                  All of our herbal treatments and aromatherapy components are sourced from the finest suppliers, ensuring the highest quality experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
